import { EventEmitter } from '../../../../stencil-public-runtime';
import { TExposedBookingAvailability } from './availability';
export declare class IrAvailibilityHeader {
    exposedBookingAvailabiltyParams: TExposedBookingAvailability;
    target: HTMLElement;
    errorCause: 'date' | 'adult_child' | null;
    isLoading: boolean;
    resetBooking: EventEmitter<null>;
    scrollToRoomType: EventEmitter<null>;
    private popoverInstance;
    private datePopup;
    private errorToast;
    private toast_timeout;
    private propertyService;
    popperInstance: any;
    personCounter: HTMLIrAdultChildCounterElement;
    componentWillLoad(): void;
    componentDidLoad(): void;
    initPoper(): void;
    checkAvailability(): Promise<void>;
    handleCheckAvailability(): Promise<void>;
    triggerToast(cause: 'date' | 'adult_child'): void;
    changeExposedAvailabilityParams(params: Partial<TExposedBookingAvailability>): void;
    handleDateChange(e: CustomEvent): void;
    handleAdultChildChange(e: CustomEvent): void;
    disconnectedCallback(): void;
    shouldRenderErrorToast(): boolean;
    render(): any;
}
