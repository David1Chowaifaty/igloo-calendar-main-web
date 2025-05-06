import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
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

const irOtpModalCss = ":host{display:block}.modal-backdrop{background-color:rgba(0, 0, 0, 0.5) !important}.modal-header{border-bottom:0px !important}.modal-footer{padding-top:0.5rem !important;border-top:0 !important}@media (min-width: 768px){.modal-dialog,.modal-content{width:fit-content !important}}";
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
        this.timer = 60;
        this.startTimer();
    }
    disconnectedCallback() {
        this.clearTimer();
    }
    render() {
        return (h(Host, { key: 'f973120b4e66a1046116c392196a7209754f3109' }, h("div", { key: 'd8d0dbe906131b756ad89cb83df33b041d4c3316', ref: el => (this.modalRef = el), class: "modal fade", id: "staticBackdrop", "aria-hidden": "true" }, h("div", { key: '632588c2013a2da654359ecbeed137f628e83449', class: "modal-dialog modal-dialog-centered" }, h("div", { key: '85f84983d5d55b7c4d39e455e784890246cb3b30', class: "modal-content" }, h("div", { key: '308a1dae4676ae02fda55175c3fbbea792d6a958', class: "modal-header" }, h("h5", { key: '4db9e95945e2b076af5d869d7d4609d08b8d5b84', class: "modal-title" }, "Verify Your Identity")), h("div", { key: '12e3f0c1cdb0fd51cad39f0c3319127ba76ce195', class: "modal-body d-flex  align-items-center flex-column" }, h("p", { key: '520d56eef39311b0da3158b82ea3f381f22e569c', class: "sm text-center" }, "We sent a verification code to ", h("span", { key: '5e6058042f2343dd1700ebb7808dd9aec92b04ae', class: "text-primary" }, this.email)), h("ir-otp", { key: '504ebf162f333e49f71a78b0d2cb24d242da4173', autoFocus: true, length: this.otpLength, defaultValue: this.otp,
            // value={this.otp}
            onOtpComplete: this.handleOtpComplete }), this.error && h("p", { key: '23285554f753609de413794667618ce5285e2c2f', class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (h(Fragment, { key: '8d70b4e9c0efeb3c137f9494030edc55221fd4ba' }, this.timer > 0 ? (h("p", { class: "small mt-1" }, "Resend code in 00:", String(this.timer).padStart(2, '0'))) : (h("ir-button", { class: "mt-1", btn_color: "link", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            }, size: "sm", text: "Didn\u2019t receive code? Resend" }))))), h("div", { key: '249e95e0bb165cb35247b6d3f617f1fd1f8937ef', class: "modal-footer justify-content-auto" }, h("ir-button", { key: '37a407d3bd505a9808e8643a5c2059c04d0bc8e6', class: "w-100", btn_styles: 'flex-fill', text: "Verify now", isLoading: this.isLoading, btn_disabled: this.otp.length < this.otpLength || this.isLoading, onClick: () => this.verifyOtp() })))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrOtpModalStyle0; }
}, [0, "ir-otp-modal", {
        "resendTimer": [2, "resend-timer"],
        "requestUrl": [1, "request-url"],
        "showResend": [4, "show-resend"],
        "email": [1],
        "otpLength": [2, "otp-length"],
        "ticket": [1],
        "otp": [32],
        "error": [32],
        "isLoading": [32],
        "timer": [32],
        "openModal": [64],
        "closeModal": [64]
    }, undefined, {
        "ticket": ["handleTicketChange"]
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