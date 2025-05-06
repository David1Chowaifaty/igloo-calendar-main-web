import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
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
    static get style() { return IrOtpModalStyle0; }
}, [0, "ir-otp-modal", {
        "resendTimer": [2, "resend-timer"],
        "requestUrl": [1, "request-url"],
        "showResend": [4, "show-resend"],
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