import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrOtpModal {
    language: string;
    /** Number of seconds to wait before allowing OTP resend */
    resendTimer: number;
    /** URL or endpoint used to validate the OTP */
    requestUrl: string;
    /** URL or endpoint used to validate the OTP */
    baseOTPUrl: string;
    /** Whether the resend option should be visible */
    showResend: boolean;
    /** User's email address to display in the modal and send the OTP to */
    email: string;
    /** Number of digits the OTP should have */
    otpLength: number;
    /** ticket for verifying and resending the verification code */
    ticket: string;
    otp: string;
    error: string;
    isLoading: boolean;
    timer: number;
    open: boolean;
    el: HTMLIrOtpModalElement;
    private dialogRef;
    private timerInterval;
    private systemService;
    private roomService;
    private tokenService;
    private otpVerificationSchema;
    /** Emits the final OTP (or empty on cancel) */
    otpFinished: EventEmitter<{
        otp: string;
        type: 'success' | 'cancelled';
    }>;
    isInitializing: boolean;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    /** Open & reset everything */
    openModal(): Promise<void>;
    /** Hide & clear timer */
    closeModal(): Promise<void>;
    /**
     * Keeps the dialog non-dismissible: Escape / outside-click / programmatic
     * hide are ignored, so the flow can only be ended via the Cancel/Verify
     * buttons (which call closeModal explicitly).
     */
    private handleDialogHide;
    private fetchLocale;
    private resetState;
    private startTimer;
    private clearTimer;
    private focusFirstInput;
    private handleOtpComplete;
    private verifyOtp;
    private resendOtp;
    private handleCancelClicked;
    disconnectedCallback(): void;
    render(): any;
}
