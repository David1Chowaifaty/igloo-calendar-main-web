import { EventEmitter } from '../../../../stencil-public-runtime';
import { TExposedBookingAvailability } from './availability';
export declare class IrAvailibilityHeader {
    exposedBookingAvailabiltyParams: TExposedBookingAvailability;
    errorCause: 'date' | 'adult_child' | null;
    isLoading: boolean;
    resetBooking: EventEmitter<null>;
    scrollToRoomType: EventEmitter<null>;
    private popoverInstance;
    private datePopup;
    private dateToast;
    private toast_timeout;
    private propertyService;
    componentWillLoad(): void;
    componentDidLoad(): void;
    checkAvailability(): Promise<void>;
    handleCheckAvailability(): Promise<void>;
    triggerToast(cause: 'date' | 'adult_child'): void;
    changeExposedAvailabilityParams(params: Partial<TExposedBookingAvailability>): void;
    handleDateChange(e: CustomEvent): void;
    handleAdultChildChange(e: CustomEvent): void;
    disconnectedCallback(): void;
    render(): any;
}
