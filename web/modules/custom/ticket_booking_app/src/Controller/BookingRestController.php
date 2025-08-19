<?php

namespace Drupal\ticket_booking_app\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\ticket_booking_app\Entity\Booking;

/**
 * REST controller for Booking entities.
 */
class BookingRestController extends ControllerBase {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Constructs a new BookingRestController object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager) {
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')
    );
  }

  /**
   * Returns a list of all bookings.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   JSON response with booking data.
   */
  public function list() {
    $storage = $this->entityTypeManager->getStorage('booking');
    $booking_ids = $storage->getQuery()
      ->accessCheck(TRUE)
      ->sort('created', 'DESC')
      ->range(0, 50)
      ->execute();

    $bookings = $storage->loadMultiple($booking_ids);
    $data = [];

    foreach ($bookings as $booking) {
      $data[] = $this->normalizeBooking($booking);
    }

    return new JsonResponse([
      'data' => $data,
      'count' => count($data),
    ]);
  }

  /**
   * Returns a single booking.
   *
   * @param \Drupal\ticket_booking_app\Entity\Booking $booking
   *   The booking entity.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   JSON response with booking data.
   */
  public function get(Booking $booking) {
    return new JsonResponse([
      'data' => $this->normalizeBooking($booking),
    ]);
  }

  /**
   * Creates a new booking.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request object.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   JSON response with created booking data.
   */
  public function add(Request $request) {
    $data = json_decode($request->getContent(), TRUE);
    
    if (!$data) {
      return new JsonResponse(['error' => 'Invalid JSON'], 400);
    }

    $booking = Booking::create([
      'user_id' => $data['user_id'] ?? \Drupal::currentUser()->id(),
      'match' => $data['match_id'] ?? null,
      'booking_datetime' => $data['booking_datetime'] ?? null,
    ]);

    try {
      $booking->save();
      return new JsonResponse([
        'data' => $this->normalizeBooking($booking),
        'message' => 'Booking created successfully',
      ], 201);
    }
    catch (\Exception $e) {
      return new JsonResponse([
        'error' => 'Failed to create booking: ' . $e->getMessage(),
      ], 500);
    }
  }

  /**
   * Normalizes a booking entity for JSON output.
   *
   * @param \Drupal\ticket_booking_app\Entity\Booking $booking
   *   The booking entity.
   *
   * @return array
   *   Normalized booking data.
   */
  protected function normalizeBooking(Booking $booking) {
    return [
      'id' => (int) $booking->id(),
      'user' => [
        'id' => (int) $booking->getOwnerId(),
        'name' => $booking->getOwner() ? $booking->getOwner()->getDisplayName() : null,
        'email' => $booking->getOwner() ? $booking->getOwner()->getEmail() : null,
      ],
      'match' => [
        'id' => (int) $booking->getMatchId(),
        'title' => $booking->getMatch() ? $booking->getMatch()->getTitle() : null,
        'url' => $booking->getMatch() ? $booking->getMatch()->toUrl('canonical', ['absolute' => TRUE])->toString() : null,
      ],
      'booking_datetime' => $booking->getBookingDateTime(),
      'created' => date('c', $booking->get('created')->value),
      'changed' => date('c', $booking->get('changed')->value),
      'label' => $booking->label(),
    ];
  }

}