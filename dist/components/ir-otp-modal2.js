import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as axios } from './axios.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-otp2.js';

class SystemService {
    async validateOTP(params) {
        const { data } = await axios.post('/Validate_OTP', params);
        return data;
    }
}

const irOtpModalCss = ":host{display:block}.modal-backdrop{background-color:rgba(0, 0, 0, 0.5) !important}.modal-header{border-bottom:0px !important}.modal-footer{border-top:0 !important}";
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
            if (this.otp.length === 6) {
                // auto-submit
                this.verifyOtp();
            }
        };
        this.onCancel = () => {
            this.otpFinished.emit('');
            this.closeModal();
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
    render() {
        return (h(Host, { key: 'e704909e7f888a8670fb08ad5649824f94cf6118' }, h("div", { key: '0266fb6309885e3d30750c032b25a5f0323a0024', ref: el => (this.modalRef = el), class: "modal fade", id: "staticBackdrop", "aria-hidden": "true" }, h("div", { key: 'b5c8d7223fef35c95e4f97f32e9d40202966fade', class: "modal-dialog modal-dialog-centered" }, h("div", { key: 'e34aea228e3a9fbe7f28ba7242dec00af4227473', class: "modal-content" }, h("div", { key: 'b51cb66914767241b7d22e7c408f15dd14faf0e1', class: "modal-header" }, h("h5", { key: '9ea02797863d65b7c8c0e1ce25b0391cf51e7b2b', class: "modal-title" }, "Verify Code"), h("button", { key: '7528e3e3a5bca6e939c661d0301d1a36f076bdcc', type: "button", class: "close", onClick: this.onCancel }, h("span", { key: '200c079d92c0fcfc6cb5da206c5e46f1e0cc5467', "aria-hidden": "true" }, "\u00D7"))), h("div", { key: 'fd1a7e0e01ebb74f2754019476ec7c23bef5fb14', class: "modal-body d-flex  flex-column" }, h("p", { key: '6ae6bf30f36c65f0a2f98e7f83860359c790f3ae' }, "Please enter the 6-digit code we just sent you."), h("ir-otp", { key: 'feb4a4c8b208a22f4168f25d8334c040625ff75f', autoFocus: true,
            // value={this.otp}
            onOtpComplete: this.handleOtpComplete }), this.error && h("p", { key: '454100bf678eb4e2f47c825993a442489014cef1', class: "text-danger small mt-2" }, this.error), this.showResend && (h("p", { key: 'ffa473e4db67cffdb057b30d6367c74914a59d88', class: "small mt-1" }, this.timer > 0 ? (`Resend code in 00:${String(this.timer).padStart(2, '0')}`) : (h("a", { href: "#", onClick: e => {
                e.preventDefault();
                this.resendOtp();
            } }, "Didn\u2019t receive code? Resend"))))), h("div", { key: 'd825d36502a1e398ac4ac0a9219b3931738541a2', class: "modal-footer" }, h("ir-button", { key: '2bbd74e17252450d4249b763e7e414b2df83225a', text: "Cancel", btn_color: "secondary", onClick: this.onCancel, btn_disabled: this.isLoading }), h("ir-button", { key: 'bd2267f210018a231017b42b73c18957cdb5420d', text: "Verify", isLoading: this.isLoading, btn_disabled: this.otp.length < 6 || this.isLoading, onClick: () => this.verifyOtp() })))))));
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