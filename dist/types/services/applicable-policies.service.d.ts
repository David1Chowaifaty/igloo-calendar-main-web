import { Booking, ExposedApplicablePolicy, Room } from "../models/booking.dto";
import { BookingService } from "./booking.service";
export type ApplicablePoliciesByType = Partial<Record<ExposedApplicablePolicy['type'], ExposedApplicablePolicy[]>>;
export interface ApplicablePolicyStatement extends ExposedApplicablePolicy {
    roomType: Room['roomtype'];
    ratePlan: Room['rateplan'];
    checkInDate: Room['from_date'];
    grossTotal: Room['gross_total'];
}
export interface ApplicablePoliciesResult {
    policiesByType: ApplicablePoliciesByType;
    cancellationStatements: ApplicablePolicyStatement[];
    guaranteeAmount: number;
}
type BookingServiceDependency = Readonly<Pick<BookingService, 'getExposedApplicablePolicies'>>;
interface ApplicablePoliciesRequest {
    language?: string;
}
/**
 * Coordinates retrieval of applicable policies for a booking by delegating to
 * {@link BookingService} while providing light data preparation utilities.
 */
export declare class ApplicablePoliciesService {
    private readonly bookingService;
    private _booking;
    constructor(bookingService: BookingServiceDependency);
    /**
     * Returns the booking reference used to scope applicable policy requests.
     */
    get booking(): Booking | null;
    /**
     * Assigns the booking reference that downstream requests rely on.
     */
    set booking(value: Booking | null);
    /**
     * Fetches the exposed applicable policies for the active booking and groups
     * them by policy type to simplify consumption within UI layers. Requests for
     * each unique room grouping are executed in parallel. The response includes
     * the grouped policies alongside prebuilt cancellation statements and the
     * aggregate guarantee amount.
     *
     * @throws If a booking is not configured prior to invocation.
     */
    fetchGroupedApplicablePolicies(params: ApplicablePoliciesRequest): Promise<ApplicablePoliciesResult>;
    /**
     * Creates a list of unique room groupings keyed by rate plan and room type.
     * Each grouping tracks the identifiers of the rooms it represents.
     *
     * @param rooms - The rooms attached to the active booking.
     */
    private groupRoomsForRequest;
    private buildPoliciesByType;
    /**
     * Organizes the raw policies returned from the API by their logical type so
     * consumers can access grouped guarantees or cancellations effortlessly.
     */
    private groupPoliciesByType;
    /**
     * Builds the cancellation statements derived from the fetched policies and
     * booking rooms.
     */
    private buildCancellationStatements;
    /**
     * Aggregates the guarantee commitments across the booking rooms using the
     * freshly retrieved policy data.
     */
    private calculateGuaranteeAmount;
    private selectCurrentBracket;
    /**
     * Collapses consecutive brackets that share the same gross amount so only
     * price changes are surfaced.
     */
    private mergeBracketsByAmount;
}
export {};
