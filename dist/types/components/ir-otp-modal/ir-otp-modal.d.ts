import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrOtpModal {
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
    private dialogRef;
    private timerInterval;
    private systemService;
    private tokenService;
    private otpVerificationSchema;
    /** Emits the final OTP (or empty on cancel) */
    otpFinished: EventEmitter<{
        otp: string;
        type: 'success' | 'cancelled';
    }>;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    /** Open & reset everything */
    openModal(): Promise<void>;
    /** Hide & clear timer */
    closeModal(): Promise<void>;
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
