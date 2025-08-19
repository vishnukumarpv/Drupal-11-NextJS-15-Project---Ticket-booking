<?php

namespace Drupal\ticket_booking_app\Form;

use Drupal\Core\Entity\ContentEntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Form controller for Booking edit forms.
 */
class BookingForm extends ContentEntityForm {

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    // dd()
    $form = parent::buildForm($form, $form_state);

    /** @var \Drupal\ticket_booking_app\Entity\Booking $entity */
    $entity = $this->entity;

    return $form;
  }


  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {

    $values = $form_state->getValues();

    $entity = $this->entity;
    $id = $entity->get('uuid')->value;

    $status = parent::save($form, $form_state);

    switch ($status) {
      case SAVED_NEW:
        $this->messenger()->addMessage($this->t('Created the %label Booking.', [
          '%label' => $id,
        ]));
        break;

      default:
        $this->messenger()->addMessage($this->t('Saved the %label Booking.', [
          '%label' => $id,
        ]));
    }

    $form_state->setRedirect('entity.booking.canonical', ['booking' => $entity->id()]);
  }

}