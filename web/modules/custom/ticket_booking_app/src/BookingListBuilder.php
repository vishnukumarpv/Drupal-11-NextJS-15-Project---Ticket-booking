<?php

namespace Drupal\ticket_booking_app;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityListBuilder;
use Drupal\Core\Link;

/**
 * Defines a class to build a listing of Booking entities.
 */
class BookingListBuilder extends EntityListBuilder {

  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['id'] = $this->t('Booking ID');
    $header['user'] = $this->t('User');
    $header['tba_match'] = $this->t('Match');
    $header['booking_datetime'] = $this->t('Booking Date & Time');
    $header['created'] = $this->t('Created');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    /** @var \Drupal\ticket_booking_app\Entity\Booking $entity */
    $row['id'] = $entity->id();
    $row['user'] = $entity->getOwner() ? $entity->getOwner()->getDisplayName() : $this->t('Anonymous');
    $row['tba_match'] = $entity->getMatch() ? $entity->getMatch()->getTitle() : $this->t('No match');
    $row['booking_datetime'] = $entity->get('booking_datetime')->value;
    $row['created'] = \Drupal::service('date.formatter')->format($entity->get('created')->value, 'short');
    return $row + parent::buildRow($entity);
  }

}