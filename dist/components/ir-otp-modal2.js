import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { z } from './index3.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-otp2.js';

class SystemService {
    async validateOTP(params) {
        const { data } = await axios.post('/Validate_OTP', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
}

const irOtpModalCss = ":host{display:block}.modal-backdrop{background-color:rgba(0, 0, 0, 0.5) !important}.modal-header{border-bottom:0px !important;padding-block:0.5rem !important}.modal-content{padding-top:0.5rem !important;padding-bottom:0.5rem !important}.modal-footer{padding-top:0.5rem !important;border-top:0 !important}";
const IrOtpModalStyle0 = irOtpModalCss;

const IrOtpModal = /*@__PURE__*/ proxyCustomElement(class IrOtpModal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.otpFinished = createEvent(this, "otpFinished", 7);
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
        this.otpVerificationSchema = z.object({ email: z.string().nonempty(), requestUrl: z.string().nonempty(), otp: z.string().length(this.otpLength) });
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
        this.timer = 60;
        this.startTimer();
    }
    disconnectedCallback() {
        this.clearTimer();
    }
    render() {
        return (h(Host, { key: '0640d72a438f546d09773b9a3b033e8f281b543b' }, h("div", { key: '6ea1027284a9c6097bc647fb62de2be49e838858', ref: el => (this.modalRef = el), class: "modal fade", id: "staticBackdrop", "aria-hidden": "true" }, h("div", { key: '98266693c25e457af74c5097425702b8ea4a5809', class: "modal-dialog modal-dialog-centered" }, h("div", { key: 'c86b4d94a507b405c05fd377b6d605041f8ed034', class: "modal-content" }, h("div", { key: 'feaaf86b57488bf9fe38ae9cf537e1187ee9726b', class: "modal-header" }, h("h5", { key: 'f72ac8bfa2792ac2adb93d4bdbc3543d2e8a0691', class: "modal-title" }, "Verify Your Identity")), h("div", { key: 'c937e92335bff77f7683c84a8ec420b7e9c33f2f', class: "modal-body d-flex  align-items-center flex-column" }, h("p", { key: '08cbb229bcb2f9af79f3730e90069f663885ea5a', class: "sm text-center" }, "We sent a verification code to ", h("span", { key: 'c40daf6ee301bfc625e40e756e3f4b054f3c8b3a', class: "text-primary" }, this.email)), h("ir-otp", { key: '6b19d00edf9ccbd5c51d0766ab5bd2609c8e316d', autoFocus: true, length: this.otpLength,
            // value={this.otp}
            onOtpComplete: this.handleOtpComplete }), this.error && h("p", { key: '6ecdcc3800657cdce107e3edb96ba07780b92fd5', class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (h(Fragment, { key: '5d5de693e47bb67105f75618ef3dcd6fe06d1d5c' }, this.timer > 0 ? (h("p", { class: "small mt-1" }, "Resend code in 00:", String(this.timer).padStart(2, '0'))) : (h("ir-button", { class: "mt-1", btn_color: "link", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            }, size: "sm", text: "Didn\u2019t receive code? Resend" }))))), h("div", { key: '45d1901326cb9e1b20efe767f0b90910d91b7f34', class: "modal-footer justify-content-auto" }, h("ir-button", { key: '72dcb32933a714d9c2e7d48f91991ccba48afe53', class: "w-100", btn_styles: 'flex-fill', text: "Verify now", isLoading: this.isLoading, btn_disabled: this.otp.length < this.otpLength || this.isLoading, onClick: () => this.verifyOtp() })))))));
    }
    static get style() { return IrOtpModalStyle0; }
}, [0, "ir-otp-modal", {
        "resendTimer": [2, "resend-timer"],
        "requestUrl": [1, "request-url"],
        "showResend": [4, "show-resend"],
        "email": [1],
        "otpLength": [2, "otp-length"],
        "otp": [32],
        "error": [32],
        "isLoading": [32],
        "timer": [32],
        "openModal": [64],
        "closeModal": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-otp-modal", "ir-button", "ir-icons", "ir-otp"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrOtpModal);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrOtpModal as I, defineCustomElement as d };

//# sourceMappingURL=ir-otp-modal2.js.map