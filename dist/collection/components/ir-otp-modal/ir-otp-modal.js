import Token from "../../models/Token";
import { SystemService } from "../../services/system.service";
import { Fragment, Host, h } from "@stencil/core";
import { z } from "zod";
export class IrOtpModal {
    constructor() {
        /** Number of seconds to wait before allowing OTP resend */
        this.resendTimer = 60;
        /** Whether the resend option should be visible */
        this.showResend = true;
        /** Number of digits the OTP should have */
        this.otpLength = 6;
        this.otp = '';
        this.error = '';
        this.isLoading = false;
        this.timer = 60;
        this.systemService = new SystemService();
        this.tokenService = new Token();
        this.otpVerificationSchema = z.object({ email: z.string().nonempty(), requestUrl: z.string().nonempty(), otp: z.string().length(this.otpLength) });
        this.handleOtpComplete = (e) => {
            this.error = '';
            this.otp = e.detail;
        };
    }
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(newValue);
        }
    }
    /** Open & reset everything */
    async openModal() {
        this.resetState();
        // $(this.modalRef).modal({ backdrop: 'static', keyboard: false });
        // $(this.modalRef).modal('show');
        if (typeof this.dialogRef.showModal === 'function') {
            this.dialogRef.showModal();
        }
        else {
            // fallback for browsers without dialog support
            this.dialogRef.setAttribute('open', '');
        }
        if (this.showResend)
            this.startTimer();
        await this.focusFirstInput();
    }
    /** Hide & clear timer */
    async closeModal() {
        // $(this.modalRef).modal('hide');
        if (typeof this.dialogRef.close === 'function') {
            this.dialogRef.close();
        }
        else {
            this.dialogRef.removeAttribute('open');
        }
        this.otp = null;
        this.clearTimer();
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
        const first = this.dialogRef.querySelector('input');
        first && first.focus();
    }
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
        var _a;
        return (h(Host, { key: '5833bc91160ee015b59746e59972e2ddcb344e52' }, h("dialog", { key: 'ef85636727b87628611e7fd4f17f05cc7c3f7221', ref: el => (this.dialogRef = el), class: "otp-modal", "aria-modal": "true" }, h("form", { key: '2ac2f140c2f0b37027b9f34a6f194021064b8bc2', method: "dialog", class: "otp-modal-content" }, h("header", { key: '312e5c5decd9c420f4fd7afb63c6c7426ddff13f', class: "otp-modal-header" }, h("h5", { key: '1b51d37d71a7cf8d07168676c4c86ecd90c0e6aa', class: "otp-modal-title" }, "Verify Your Identity")), h("section", { key: '5068e8d4725c990df8ed3049b74e9c0c19a77518', class: "otp-modal-body d-flex align-items-center flex-column" }, h("p", { key: '41008372dc599071178f023ce264d8f7349e72c7', class: "verification-message text-truncate" }, "We sent a verification code to ", this.email), h("ir-otp", { key: '96ecf89d7232678f762c135bbb4f47e573d6a309', autoFocus: true, length: this.otpLength, defaultValue: this.otp, onOtpComplete: this.handleOtpComplete }), this.error && h("p", { key: '4620c40f3014f7b7d260cb54c9d353e3a239f4cb', class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (h(Fragment, { key: 'f8835de67ad048b3c7aa7298a23ccab4adbff421' }, this.timer > 0 ? (h("p", { class: "small mt-1" }, "Resend code in 00:", String(this.timer).padStart(2, '0'))) : (h("ir-button", { class: "mt-1", btn_color: "link", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            }, size: "sm", text: "Didn\u2019t receive code? Resend" }))))), h("footer", { key: '5a1b898a2f67643ea943594aee20176dc20a1734', class: "otp-modal-footer justify-content-auto" }, h("ir-button", { key: '6e1ab6c18b2cb627b3d9ff348720f27b85f57b3f', class: "w-100", btn_styles: "flex-fill", text: "Cancel", btn_color: "secondary", onClick: this.handleCancelClicked.bind(this) }), h("ir-button", { key: '4947629cc23abf841b0742e527cb9fe53b47689e', class: "w-100", btn_styles: "flex-fill", text: "Verify now", isLoading: this.isLoading, btn_disabled: ((_a = this.otp) === null || _a === void 0 ? void 0 : _a.length) < this.otpLength || this.isLoading, onClick: () => this.verifyOtp() }))))));
    }
    static get is() { return "ir-otp-modal"; }
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
                "attribute": "resend-timer",
                "reflect": false,
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
                "attribute": "request-url",
                "reflect": false
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
                "attribute": "base-o-t-p-url",
                "reflect": false
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
                "attribute": "show-resend",
                "reflect": false,
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
                "attribute": "email",
                "reflect": false
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
                "attribute": "otp-length",
                "reflect": false,
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
                "attribute": "ticket",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "otp": {},
            "error": {},
            "isLoading": {},
            "timer": {}
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
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
}
//# sourceMappingURL=ir-otp-modal.js.map
