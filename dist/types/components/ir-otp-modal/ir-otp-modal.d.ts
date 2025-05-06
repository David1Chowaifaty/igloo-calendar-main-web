import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrOtpModal {
    resendTimer: number;
    requestUrl: string;
    showResend: boolean;
    otp: string;
    error: string;
    isLoading: boolean;
    timer: number;
    private modalRef;
    private timerInterval;
    private systemService;
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
    /** Called by your <ir-otp> child whenever the 6-digit value changes/pastes */
    private handleOtpComplete;
    private verifyOtp;
    /** Allow the user to request a new OTP */
    private resendOtp;
    private onCancel;
    render(): any;
}
