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
            this.otpFinished.emit(this.otp);
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
    disconnectedCallback() {
        this.clearTimer();
    }
    render() {
        return (h(Host, { key: '247046102ad82307e0b7acf694575e50c82a9a8a' }, h("div", { key: 'ea7764c6c5a6af0930d4546987182d3f8055325a', ref: el => (this.modalRef = el), class: "modal fade", id: "staticBackdrop", "aria-hidden": "true" }, h("div", { key: 'f77eec5ef9228d19ff2e7d5d0835fa9123c43a33', class: "modal-dialog modal-dialog-centered" }, h("div", { key: '34ed0043202db497818b6be4ed78b5e05f0191f3', class: "modal-content" }, h("div", { key: '1a848c633a6d71d3bbd514cfc5d1a977c078aff9', class: "modal-header" }, h("h5", { key: 'cded588473ad32a2df179176243d7204cd46dc86', class: "modal-title" }, "Verify Your Identity")), h("div", { key: '0ce1a299891844ac76c3aae8eeb3200fac761779', class: "modal-body d-flex  align-items-center flex-column" }, h("p", { key: 'c3436427db31f8155269e98c202bab2e8c47f6b6', class: "sm text-center" }, "We sent a verification code to ", h("span", { key: '4f264dd72efd6d9de38d74150118d63216b34373', class: "text-primary" }, this.email)), h("ir-otp", { key: '553151bb882d2f425254ebc28e7676afca38c80c', autoFocus: true, length: this.otpLength, defaultValue: this.otp,
            // value={this.otp}
            onOtpComplete: this.handleOtpComplete }), this.error && h("p", { key: '1ea063723177868b080715fd40655fc39db0e2a2', class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (h(Fragment, { key: '2471b92564c77c38c569bcedb19f12a0a58898af' }, this.timer > 0 ? (h("p", { class: "small mt-1" }, "Resend code in 00:", String(this.timer).padStart(2, '0'))) : (h("ir-button", { class: "mt-1", btn_color: "link", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            }, size: "sm", text: "Didn\u2019t receive code? Resend" }))))), h("div", { key: '2b50e821c0fccd9e09df9472da15d2cafea9afbf', class: "modal-footer justify-content-auto" }, h("ir-button", { key: '5a635d116395c82f2b2b2bf8a3e81effa04fa0d7', class: "w-100", btn_styles: 'flex-fill', text: "Cancel", btn_color: "secondary", onClick: () => window.location.reload() }), h("ir-button", { key: '1a8e39e6f9ef822c9cadc1e9e32cb1221986ad37', class: "w-100", btn_styles: 'flex-fill', text: "Verify now", isLoading: this.isLoading, btn_disabled: this.otp.length < this.otpLength || this.isLoading, onClick: () => this.verifyOtp() })))))));
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
                    "original": "string",
                    "resolved": "string",
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
