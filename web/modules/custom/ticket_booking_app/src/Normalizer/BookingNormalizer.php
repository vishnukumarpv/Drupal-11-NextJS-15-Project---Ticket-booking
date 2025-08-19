<?php

namespace Drupal\ticket_booking_app\Normalizer;

use Drupal\serialization\Normalizer\ContentEntityNormalizer;
use Drupal\ticket_booking_app\Entity\Booking;
use Drupal\Core\Url;

/**
 * Normalizer for Booking entities.
 */
class BookingNormalizer extends ContentEntityNormalizer {

  /**
   * {@inheritdoc}
   */
  protected $supportedInterfaceOrClass = Booking::class;

  /**
   * {@inheritdoc}
   */
  public function normalize($entity, $format = NULL, array $context = array()): array|string|int|float|bool|\ArrayObject|NULL {
    $data = parent::normalize($entity, $format, $context);

    /** @var \Drupal\ticket_booking_app\Entity\Booking $entity */
    
    // User information with better null handling
    $owner = $entity->getOwner();
    $data['user'] = [
      'id' => $entity->getOwnerId(),
      'name' => $owner?->getDisplayName(),
      'email' => $owner?->getEmail(),
    ];

    // Match information with improved error handling
    $match = $entity->getMatch();
    $data['match'] = [
      'id' => $entity->getMatchId(),
      'title' => $match?->getTitle(),
      'url' => $this->getMatchUrl($match),
    ];

    // Enhanced date handling
    $data['booking_datetime'] = $entity->getBookingDateTime();
    $data['created'] = $this->formatTimestamp($entity->get('created')->value);
    $data['changed'] = $this->formatTimestamp($entity->get('changed')->value);
    $data['label'] = $entity->label();

    // Additional useful fields
    $data['status'] = $entity->isPublished();
    $data['uuid'] = $entity->uuid();

    return $data;
  }

  /**
   * {@inheritdoc}
   */
  public function supportsNormalization($data, ?string $format = null, array $context = []): bool {
    return $data instanceof Booking;
  }

  /**
   * Helper method to safely get match URL.
   *
   * @param mixed $match
   *   The match entity or null.
   *
   * @return string|null
   *   The URL string or null if unavailable.
   */
  protected function getMatchUrl($match): ?string {
    if (!$match) {
      return null;
    }

    try {
      return $match->toUrl()->toString();
    }
    catch (\Exception $e) {
      // Log the error if needed
      \Drupal::logger('ticket_booking_app')->warning(
        'Failed to generate URL for match @id: @message',
        ['@id' => $match->id(), '@message' => $e->getMessage()]
      );
      return null;
    }
  }

  /**
   * Helper method to format timestamps consistently.
   *
   * @param int $timestamp
   *   Unix timestamp.
   *
   * @return string
   *   ISO 8601 formatted date string.
   */
  protected function formatTimestamp(int $timestamp): string {
    return (new \DateTime('@' . $timestamp))->format(\DateTimeInterface::ATOM);
  }

}