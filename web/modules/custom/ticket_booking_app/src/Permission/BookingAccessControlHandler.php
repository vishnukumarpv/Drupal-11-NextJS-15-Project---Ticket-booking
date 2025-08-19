<?php

namespace Drupal\ticket_booking_app\Permission;

use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;

/**
 * Access controller for the Booking entity.
 */
class BookingAccessControlHandler extends EntityAccessControlHandler {

  /**
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {
    /** @var \Drupal\ticket_booking_app\Entity\Booking $entity */

    switch ($operation) {

      case 'view':
        // if (!$entity->isPublished()) {
        //   return AccessResult::allowedIfHasPermission($account, 'view unpublished booking entities');
        // }
        return AccessResult::allowedIfHasPermission($account, 'view published booking entities');

      case 'update':
        return AccessResult::allowedIfHasPermission($account, 'edit booking entities');

      case 'delete':
        return AccessResult::allowedIfHasPermission($account, 'delete booking entities');
    }

    return AccessResult::neutral();
  }

  /**
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    return AccessResult::allowedIfHasPermission($account, 'add booking entities');
  }

}