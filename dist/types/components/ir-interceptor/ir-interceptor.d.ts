import { EventEmitter } from '../../stencil-public-runtime';
import { IToast } from "../ui/ir-toast/toast";
export declare class IrInterceptor {
    /**
     * List of endpoint paths that should trigger loader logic and OTP handling.
     */
    handledEndpoints: string[];
    /**
     * List of endpoints for which to suppress toast messages.
     */
    suppressToastEndpoints: string[];
    /**
     * Indicates whether the loader is visible.
     */
    isShown: boolean;
    /**
     * Global loading indicator toggle.
     */
    isLoading: boolean;
    /**
     * Indicates if the intercepted request involves unassigned units.
     */
    isUnassignedUnit: boolean;
    /**
     * Count of `/Get_Exposed_Calendar` calls in progress.
     */
    endpointsCount: number;
    /**
     * Identifier of the endpoint that manually disabled page loader.
     */
    isPageLoadingStopped: string | null;
    /**
     * Controls visibility of the OTP modal.
     */
    showModal: boolean;
    /**
     * Request path (used in OTP handling).
     */
    requestUrl: string;
    /**
     * The OTP endpoint path.
     */
    baseOTPUrl: string;
    /**
     * Email for OTP prompt.
     */
    email: string;
    /**
     * Emits a toast notification (`type`, `title`, `description`, `position`).
     */
    toast: EventEmitter<IToast>;
    private otpModal;
    private pendingConfig?;
    private pendingResolve?;
    private pendingReject?;
    private response?;
    handleStopPageLoading(e: CustomEvent): void;
    componentWillLoad(): void;
    /**
     * Sets up Axios request and response interceptors.
     */
    private setupAxiosInterceptors;
    /**
     * Removes query params from URL for consistent endpoint matching.
     */
    private extractEndpoint;
    /**
     * Returns true if the given endpoint is listed as "handled".
     */
    private isHandledEndpoint;
    /**
     * Handles outbound Axios requests.
     * - Triggers global loader for certain endpoints
     * - Tracks `/Get_Exposed_Calendar` calls separately
     */
    private handleRequest;
    /**
     * Handles inbound Axios responses:
     * - Resets loader
     * - Handles OTP flows and exception messages
     */
    private handleResponse;
    /**
     * Handles and throws known API exception messages.
     */
    private handleResponseExceptions;
    /**
     * Handles OTP-required API responses:
     * - Shows OTP modal
     * - Stores request context
     * - Defers resolution to OTP modal
     */
    private handleOtpResponse;
    /**
     * Displays error toasts unless the endpoint is configured to suppress them.
     */
    private handleError;
    /**
     * Handles the OTP modal completion.
     * Retries the request or cancels based on user action.
     */
    private handleOtpFinished;
    render(): any;
}
