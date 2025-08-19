<?php

namespace Drupal\ticket_booking_app\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\EntityChangedTrait;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\user\UserInterface;

/**
 * Defines the Booking entity.
 *
 * @ContentEntityType(
 *   id = "booking",
 *   label = @Translation("Booking"),
 *   label_collection = @Translation("Bookings"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\ticket_booking_app\BookingListBuilder",
 *     "views_data" = "Drupal\views\EntityViewsData",
 *     "form" = {
 *       "default" = "Drupal\ticket_booking_app\Form\BookingForm",
 *       "add" = "Drupal\ticket_booking_app\Form\BookingForm",
 *       "edit" = "Drupal\ticket_booking_app\Form\BookingForm",
 *       "delete" = "Drupal\Core\Entity\ContentEntityDeleteForm",
 *     },
 *     "access" = "Drupal\ticket_booking_app\Permission\BookingAccessControlHandler",
 *     "route_provider" = {
 *       "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider",
 *     },
 *   },
 *   base_table = "booking",
 *   admin_permission = "administer booking entities",
 *   entity_keys = {
 *     "id" = "id",
 *     "uuid" = "uuid",
 *     "uid" = "user_id",
 *    "owner" = "user_id", 
 *   },
 *   links = {
 *     "canonical" = "/admin/content/booking/{booking}",
 *     "add-form" = "/admin/content/booking/add",
 *     "edit-form" = "/admin/content/booking/{booking}/edit",
 *     "delete-form" = "/admin/content/booking/{booking}/delete",
 *     "collection" = "/admin/content/booking",
 *   },
 * )
 */
class Booking extends ContentEntityBase implements ContentEntityInterface {

  use EntityChangedTrait;
  use StringTranslationTrait;

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    // User ID field
    $fields['user_id'] = BaseFieldDefinition::create('entity_reference')
      ->setLabel(t('User'))
      ->setDescription(t('The user who made the booking.'))
      ->setSetting('target_type', 'user')
      ->setSetting('handler', 'default')
      ->setRequired(TRUE)
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'author',
        'weight' => -4,
      ])
      ->setDisplayOptions('form', [
        'type' => 'entity_reference_autocomplete',
        'weight' => -4,
        'settings' => [
          'match_operator' => 'CONTAINS',
          'size' => '60',
          'placeholder' => '',
        ],
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);


      $fields['name'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Name'))
      ->setDescription(t('The name of the Demo entity entity.'))
      ->setSettings([
        'max_length' => 50,
        'text_processing' => 0,
      ])
      ->setDefaultValue('')
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'string',
        'weight' => -4,
      ])
      ->setDisplayOptions('form', [
        'type' => 'string_textfield',
        'weight' => -4,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Match reference field
    $fields['tba_match'] = BaseFieldDefinition::create('entity_reference')
      ->setLabel(t('Match'))
      ->setDescription(t('The match this booking is for.'))
      ->setSetting('target_type', 'node')
      ->setSetting('handler', 'default:node')
      ->setSetting('handler_settings', [
        'target_bundles' => ['tba_matches' => 'tba_matches'],
        // 'sort' => ['field' => '_none'],
        'auto_create' => FALSE,
        'auto_create_bundle' => '',
      ])
      ->setCardinality(1)
      ->setRequired(TRUE)
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'entity_reference_label',
        'weight' => -3,
      ])
      ->setDisplayOptions('form', [
        'type' => 'entity_reference_autocomplete',
        'weight' => -3,
        'settings' => [
          'match_operator' => 'CONTAINS',
          'size' => '60',
          'placeholder' => 'Start typing to search for matches...',
        ],
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Booking date and time field
    $fields['booking_datetime'] = BaseFieldDefinition::create('datetime')
      ->setLabel(t('Booking Date and Time'))
      ->setDescription(t('The date and time of the booking.'))
      ->setRequired(TRUE)
      ->setSetting('datetime_type', 'datetime')
      ->setDefaultValue('')
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'datetime_default',
        'settings' => [
          'format_type' => 'medium',
        ],
        'weight' => -2,
      ])
      ->setDisplayOptions('form', [
        'type' => 'datetime_default',
        'weight' => -2,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['quantity'] = BaseFieldDefinition::create('integer')
      ->setLabel(t('Quantity'))
      ->setDescription(t('Number of tickets/seats booked.'))
      ->setDefaultValue(1)
      ->setSetting('min', 1)
      ->setSetting('max', 100)
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'number_integer',
        'weight' => -1,
      ])
      ->setDisplayOptions('form', [
        'type' => 'number',
        'weight' => -1,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Created field
    $fields['created'] = BaseFieldDefinition::create('created')
      ->setLabel(t('Created'))
      ->setDescription(t('The time that the booking was created.'));

    // Changed field  
    $fields['changed'] = BaseFieldDefinition::create('changed')
      ->setLabel(t('Changed'))
      ->setDescription(t('The time that the booking was last edited.'));

    return $fields; 
  }

  /**
   * Gets the booking owner.
   *
   * @return \Drupal\user\UserInterface
   *   The booking owner user entity.
   */
  public function getOwner() {
    return $this->get('user_id')->entity;
  }

  /**
   * Gets the booking owner ID.
   *
   * @return int|null
   *   The booking owner user ID, or NULL in case the user ID field has not
   *   been set on the entity.
   */
  public function getOwnerId() {
    return $this->get('user_id')->target_id;
  }

  /**
   * Sets the booking owner.
   *
   * @param \Drupal\user\UserInterface $account
   *   The booking owner user entity.
   *
   * @return $this
   */
  public function setOwner(UserInterface $account) {
    $this->set('user_id', $account->id());
    return $this;
  }

  /**
   * Sets the booking owner by ID.
   *
   * @param int $uid
   *   The booking owner user ID.
   *
   * @return $this
   */
  public function setOwnerId($uid) {
    $this->set('user_id', $uid);
    return $this;
  }

  /**
   * Gets the match node.
   *
   * @return \Drupal\node\NodeInterface|null
   *   The match node entity or NULL if not set.
   */
  public function getMatch() {
    return $this->get('tba_match')->entity;
  }

  /**
   * Gets the match node ID.
   *
   * @return int|null
   *   The match node ID, or NULL if not set.
   */
  public function getMatchId() {
    return $this->get('tba_match')->target_id;
  }

  /**
   * Sets the match node.
   *
   * @param \Drupal\node\NodeInterface $node
   *   The match node entity.
   *
   * @return $this
   */
  public function setMatch($node) {
    $this->set('tba_match', $node->id());
    return $this;
  }

  /**
   * Sets the match node by ID.
   *
   * @param int $nid
   *   The match node ID.
   *
   * @return $this
   */
  public function setMatchId($nid) {
    $this->set('tba_match', $nid);
    return $this;
  }

  /**
   * Gets the booking date and time.
   *
   * @return string
   *   The booking date and time.
   */
  public function getBookingDateTime() {
    return $this->get('booking_datetime')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setBookingDateTime($datetime) {
    $this->set('booking_datetime', $datetime);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getQuantity() {
    $this->get('quantity');
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function setQuantity($quantity) {
    $this->set('quantity', $quantity);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function label() {
    $user = $this->getOwner();
    $username = $user ? $user->getDisplayName() : 'Anonymous';
    $match = $this->getMatch();
    $match_title = $match ? $match->getTitle() : 'Unknown Match';
    
    return $this->t('Booking by @user for @match', [
      '@user' => $username,
      '@match' => $match_title,
    ]);
  }

}
