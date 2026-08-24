import Token from "../../models/Token";
import { RoomService } from "../../services/room.service";
import { SystemService } from "../../services/system.service";
import locales from "../../stores/locales.store";
import { Fragment, Host, h } from "@stencil/core";
import { z } from "zod";
export class IrOtpModal {
    language = 'en';
    /** Number of seconds to wait before allowing OTP resend */
    resendTimer = 60;
    /** URL or endpoint used to validate the OTP */
    requestUrl;
    /** URL or endpoint used to validate the OTP */
    baseOTPUrl;
    /** Whether the resend option should be visible */
    showResend = true;
    /** User's email address to display in the modal and send the OTP to */
    email;
    /** Number of digits the OTP should have */
    otpLength = 6;
    /** ticket for verifying and resending the verification code */
    ticket;
    otp = '';
    error = '';
    isLoading = false;
    timer = 60;
    open = false;
    el;
    dialogRef;
    timerInterval;
    systemService = new SystemService();
    roomService = new RoomService();
    tokenService = new Token();
    otpVerificationSchema = z.object({ email: z.string().nonempty(), requestUrl: z.string().nonempty(), otp: z.string().length(this.otpLength) });
    /** Emits the final OTP (or empty on cancel) */
    otpFinished;
    isInitializing;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
        }
        this.fetchLocale();
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(newValue);
            this.fetchLocale();
        }
    }
    /** Open & reset everything */
    async openModal() {
        this.resetState();
        this.open = true;
        if (this.showResend)
            this.startTimer();
        await this.focusFirstInput();
    }
    /** Hide & clear timer */
    async closeModal() {
        this.open = false;
        this.otp = null;
        this.clearTimer();
    }
    /**
     * Keeps the dialog non-dismissible: Escape / outside-click / programmatic
     * hide are ignored, so the flow can only be ended via the Cancel/Verify
     * buttons (which call closeModal explicitly).
     */
    handleDialogHide(e) {
        e.preventDefault();
        // ir-dialog has already flipped its internal open state to false; since our
        // `open` prop is unchanged Stencil won't re-push it, so re-open imperatively.
        if (this.open) {
            this.dialogRef?.openModal();
        }
    }
    async fetchLocale() {
        if (!this.tokenService.getToken()) {
            return;
        }
        this.isInitializing = true;
        await this.roomService.fetchLanguage(this.language, ['_USER_MGT']);
        this.isInitializing = false;
    }
    resetState() {
        this.otp = '';
        this.error = '';
        this.isLoading = false;
        this.timer = 60;
        this.clearTimer();
    }
    startTimer() {
        this.clearTimer();
        this.timerInterval = window.setInterval(() => {
            if (this.timer > 0) {
                this.timer--;
            }
            else {
                this.clearTimer();
            }
        }, 1000);
    }
    clearTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
    async focusFirstInput() {
        await new Promise(r => setTimeout(r, 50));
        const first = this.el.querySelector('input');
        first && first.focus();
    }
    handleOtpComplete = (e) => {
        this.error = '';
        this.otp = e.detail;
    };
    async verifyOtp() {
        if (this.otp.length < this.otpLength)
            return;
        this.isLoading = true;
        this.otpVerificationSchema.parse({
            otp: this.otp,
            requestUrl: this.requestUrl,
            email: this.email,
        });
        try {
            await this.systemService.validateOTP({ METHOD_NAME: this.requestUrl, OTP: this.otp });
            this.otpFinished.emit({ otp: this.otp, type: 'success' });
            this.closeModal();
        }
        catch (err) {
            this.error = 'Verification failed. Please try again.';
        }
        finally {
            this.isLoading = false;
        }
    }
    async resendOtp() {
        if (this.timer > 0)
            return;
        // Resend otp
        try {
            await this.systemService.resendOTP({ METHOD_NAME: this.requestUrl });
            this.timer = 60;
            this.startTimer();
        }
        catch (error) {
            console.log(error);
        }
    }
    handleCancelClicked() {
        if (this.baseOTPUrl === 'Check_OTP_Necessity') {
            this.closeModal();
            this.otpFinished.emit({
                otp: null,
                type: 'cancelled',
            });
            return;
        }
        window.location.reload();
    }
    disconnectedCallback() {
        this.clearTimer();
    }
    render() {
        return (h(Host, { key: 'b5563f870fe04b98f9f893f2f13042ee8a1114d8' }, h("ir-dialog", { key: '6d8e44f093f0aee96bcf6efee2475609f4b5730d', class: "otp-modal", ref: el => (this.dialogRef = el), open: this.open, withoutHeader: true, lightDismiss: false, onIrDialogHide: e => this.handleDialogHide(e) }, this.isInitializing || !locales.entries ? (h("div", { class: "modal-loading-container" }, h("ir-spinner", null))) : (h(Fragment, null, h("header", { class: "otp-modal-header" }, h("h5", { class: "otp-modal-title" }, locales.entries.Lcz_VerifyYourIdentity)), h("section", { class: "otp-modal-body" }, h("p", { class: "verification-message" }, locales.entries.Lcz_WeSentYuoVerificationCode, " ", this.email), h("ir-otp", { autoFocus: true, length: this.otpLength, defaultValue: this.otp, onOtpComplete: this.handleOtpComplete }), this.error && h("p", { class: "otp-error" }, this.error), this.showResend && (h(Fragment, null, this.timer > 0 ? (h("p", { class: "otp-resend-timer" }, locales.entries.Lcz_ResendCode, " 00:", String(this.timer).padStart(2, '0'))) : (h("ir-custom-button", { class: "otp-resend-btn", link: true, size: "s", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            } }, "Didn\u2019t receive code? Resend"))))), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { variant: "neutral", appearance: "filled", size: "m", onClickHandler: () => this.handleCancelClicked() }, locales.entries.Lcz_Cancel), h("ir-custom-button", { variant: "brand", size: "m", loading: this.isLoading, disabled: this.otp?.length < this.otpLength || this.isLoading, onClickHandler: () => this.verifyOtp() }, locales.entries.Lcz_VerifyNow)))))));
    }
    static get is() { return "ir-otp-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-otp-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-otp-modal.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "resendTimer": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number of seconds to wait before allowing OTP resend"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "resend-timer",
                "defaultValue": "60"
            },
            "requestUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "URL or endpoint used to validate the OTP"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "request-url"
            },
            "baseOTPUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "URL or endpoint used to validate the OTP"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "base-o-t-p-url"
            },
            "showResend": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the resend option should be visible"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-resend",
                "defaultValue": "true"
            },
            "email": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "User's email address to display in the modal and send the OTP to"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "email"
            },
            "otpLength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number of digits the OTP should have"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "otp-length",
                "defaultValue": "6"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "ticket for verifying and resending the verification code"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            }
        };
    }
    static get states() {
        return {
            "otp": {},
            "error": {},
            "isLoading": {},
            "timer": {},
            "open": {},
            "isInitializing": {}
        };
    }
    static get events() {
        return [{
                "method": "otpFinished",
                "name": "otpFinished",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits the final OTP (or empty on cancel)"
                },
                "complexType": {
                    "original": "{\n    otp: string;\n    type: 'success' | 'cancelled';\n  }",
                    "resolved": "{ otp: string; type: \"success\" | \"cancelled\"; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "openModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Open & reset everything",
                    "tags": []
                }
            },
            "closeModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Hide & clear timer",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
