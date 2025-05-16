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
        $(this.modalRef).modal({ backdrop: 'static', keyboard: false });
        $(this.modalRef).modal('show');
        if (this.showResend)
            this.startTimer();
        await this.focusFirstInput();
    }
    /** Hide & clear timer */
    async closeModal() {
        $(this.modalRef).modal('hide');
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
        const first = this.modalRef.querySelector('input');
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
            // emit the filled OTP back to the interceptor
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
        return (h(Host, { key: '4d50bfd3f91f8723bfdf311440e29d661af00e09' }, h("div", { key: '4353d1d7836c1b1041305b5b226aeefc6fa30b61', ref: el => (this.modalRef = el), class: "modal otp-modal fade", id: "staticBackdrop", "aria-hidden": "true" }, h("div", { key: '7028be368fe4a3379c4f8ca952e348f518512c7a', class: "modal-dialog modal-dialog-centered" }, h("div", { key: '52a06e9b1918ac8d4e6fd63e65222b1e0f0dc45d', class: "modal-content" }, h("div", { key: 'b586baa1ec10b9c8aab03e42dcd959b89afad654', class: "modal-header" }, h("h5", { key: '8e14cd214dd82bb7622ca20eb797854e853c50c0', class: "modal-title" }, "Verify Your Identity")), h("div", { key: 'e64fef9ed820947d74dc72630310a4ef8ac2ec08', class: "modal-body d-flex  align-items-center flex-column" }, h("p", { key: 'f2466712badd6df05f394124217ac79b4a8d68a3', class: "verification-message text-truncate" }, "We sent a verification code to ", this.email), h("ir-otp", { key: '4b552d4be05361505d66d853793a8c1594450b5c', autoFocus: true, length: this.otpLength, defaultValue: this.otp,
            // value={this.otp}
            onOtpComplete: this.handleOtpComplete }), this.error && h("p", { key: '8bf7a36ff4b9024361227eb577a8021b9fdb94ad', class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (h(Fragment, { key: '25f94009fce02e6c185758ff3fa14a0ee875acc9' }, this.timer > 0 ? (h("p", { class: "small mt-1" }, "Resend code in 00:", String(this.timer).padStart(2, '0'))) : (h("ir-button", { class: "mt-1", btn_color: "link", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            }, size: "sm", text: "Didn\u2019t receive code? Resend" }))))), h("div", { key: '6edf2e709f6041f1b7552143721a99c16a1fbc6f', class: "modal-footer justify-content-auto" }, h("ir-button", { key: '66aeee78c363ba37b6f8b0a3db4b665ee72d1593', class: "w-100", btn_styles: 'flex-fill', text: "Cancel", btn_color: "secondary", onClick: this.handleCancelClicked.bind(this) }), h("ir-button", { key: '1d185c7c954c939d09cb97b2134987890e9fada8', class: "w-100", btn_styles: 'flex-fill', text: "Verify now", isLoading: this.isLoading, btn_disabled: ((_a = this.otp) === null || _a === void 0 ? void 0 : _a.length) < this.otpLength || this.isLoading, onClick: () => this.verifyOtp() })))))));
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
