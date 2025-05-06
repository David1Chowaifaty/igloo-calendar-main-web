import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrOtpModal {
    /** Number of seconds to wait before allowing OTP resend */
    resendTimer: number;
    /** URL or endpoint used to validate the OTP */
    requestUrl: string;
    /** Whether the resend option should be visible */
    showResend: boolean;
    /** User's email address to display in the modal and send the OTP to */
    email: string;
    /** Number of digits the OTP should have */
    otpLength: number;
    otp: string;
    error: string;
    isLoading: boolean;
    timer: number;
    private modalRef;
    private timerInterval;
    private systemService;
    private otpVerificationSchema;
    /** Emits the final OTP (or empty on cancel) */
    otpFinished: EventEmitter<string>;
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
    disconnectedCallback(): void;
    render(): any;
}
