import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { a as axios } from './axios.js';
import { z } from './index3.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-otp2.js';

class SystemService {
    async validateOTP(params) {
        const { data } = await axios.post('/Validate_Exposed_OTP', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async resendOTP(params) {
        const { data } = await axios.post('/Resend_Exposed_OTP', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async checkOTPNecessity(params) {
        const { data } = await axios.post('/Check_OTP_Necessity', params);
        return data;
    }
}

const irOtpModalCss = ":host{display:block}.modal-backdrop{background-color:rgba(0, 0, 0, 0.5) !important}.otp-modal-header{border-bottom:0px !important}.otp-modal{z-index:9999999 !important;border:none;padding:0 !important;box-sizing:border-box;border:1px solid rgba(0, 0, 0, 0.2);border-radius:0.35rem;outline:0}.otp-modal-content{background-color:white;border:none;border-radius:0.35rem;outline:0}.otp-modal-title{margin-bottom:0;line-height:1.45}.otp-modal-body{max-height:100% !important;padding:0 1rem}.otp-modal-header{display:flex;justify-content:space-between;padding:1rem 1rem;border-top-left-radius:0.35rem;border-top-right-radius:0.35rem}.otp-modal-dialog{z-index:9999999 !important}.otp-modal-footer{padding-top:0.5rem !important;border-top:0 !important;display:flex;gap:0.5rem;flex-direction:column;padding:1rem}.verification-message{max-width:90%}@media (min-width: 768px){.otp-modal-dialog,.otp-modal-content{width:fit-content !important}.otp-modal-footer{flex-direction:row;align-items:center}.verification-message{max-width:350px !important}}";
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
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrOtpModalStyle0; }
}, [0, "ir-otp-modal", {
        "resendTimer": [2, "resend-timer"],
        "requestUrl": [1, "request-url"],
        "baseOTPUrl": [1, "base-o-t-p-url"],
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

export { IrOtpModal as I, SystemService as S, defineCustomElement as d };

//# sourceMappingURL=ir-otp-modal2.js.map