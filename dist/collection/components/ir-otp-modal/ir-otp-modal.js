import { SystemService } from "../../services/system.service";
import { Host, h } from "@stencil/core";
export class IrOtpModal {
    constructor() {
        this.resendTimer = 60;
        this.showResend = true;
        this.otp = '';
        this.error = '';
        this.isLoading = false;
        this.timer = 60;
        this.systemService = new SystemService();
        /** Called by your <ir-otp> child whenever the 6-digit value changes/pastes */
        this.handleOtpComplete = (e) => {
            this.error = '';
            this.otp = e.detail;
        };
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
        if (this.otp.length < 6)
            return;
        this.isLoading = true;
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
    /** Allow the user to request a new OTP */
    async resendOtp() {
        if (this.timer > 0)
            return;
        // you’d trigger your API here; then:
        this.timer = 60;
        this.startTimer();
    }
    // private onCancel = () => {
    //   this.otpFinished.emit('');
    //   this.closeModal();
    // };
    render() {
        return (h(Host, { key: '02c24111de1d77b6c8938eeb64c791ade369f6d5' }, h("div", { key: 'ba441ed6192920c3636a4142bb8d30bcd807a623', ref: el => (this.modalRef = el), class: "modal fade", id: "staticBackdrop", "aria-hidden": "true" }, h("div", { key: '629ccff5d858c019a1c5f85590f5bb810015337e', class: "modal-dialog modal-dialog-centered" }, h("div", { key: 'b06276666d21456453db9c10a77091ff1ba3a0a8', class: "modal-content" }, h("div", { key: '304937375e7217b8cbd0c856258b1db1d7499f37', class: "modal-header" }, h("h5", { key: 'd7378d329dd9681dd5fa48686cf656194bff4b6d', class: "modal-title" }, "Verify Your Identity")), h("div", { key: '7747ce5d450280006fe0846d8e96377635270cd6', class: "modal-body d-flex  flex-column" }, h("p", { key: 'ee68a2b4127a026f461d7149412edffca42709df', class: "medium" }, "Please enter the 6-digit code we just sent you."), h("ir-otp", { key: '0ad921870c5eaa31176cdef64b800f00dea6c1c0', autoFocus: true,
            // value={this.otp}
            onOtpComplete: this.handleOtpComplete }), this.error && h("p", { key: 'e3a91187f0a811352013565633f229fcc4a06761', class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (h("p", { key: '7b441511c8b16edf705087e62810ed15847293ce', class: "small mt-1" }, this.timer > 0 ? (`Resend code in 00:${String(this.timer).padStart(2, '0')}`) : (h("a", { href: "#", onClick: e => {
                e.preventDefault();
                this.resendOtp();
            } }, "Didn\u2019t receive code? Resend"))))), h("div", { key: '258778ad14cc9f762d3f320b62bbbcaac82a65ed', class: "modal-footer justify-content-auto" }, h("ir-button", { key: '5c3517d654194abc2a1926f77accac5fea5d05ce', class: "w-100", btn_styles: 'flex-fill', text: "Verify now", isLoading: this.isLoading, btn_disabled: this.otp.length < 6 || this.isLoading, onClick: () => this.verifyOtp() })))))));
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
                    "text": ""
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
                    "text": ""
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "show-resend",
                "reflect": false,
                "defaultValue": "true"
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
}
//# sourceMappingURL=ir-otp-modal.js.map
