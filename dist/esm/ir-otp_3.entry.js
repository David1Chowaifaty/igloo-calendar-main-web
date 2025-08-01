import { r as registerInstance, c as createEvent, h, H as Host, F as Fragment, g as getElement } from './index-0a4a209a.js';
import { T as Token } from './Token-6c389e24.js';
import { R as RoomService } from './room.service-b78587f7.js';
import { S as SystemService } from './system.service-35fa8e7e.js';
import { l as locales } from './locales.store-53ec3957.js';
import { z } from './index-6ecc32cd.js';
import './axios-aa1335b8.js';
import './calendar-data-a6093df2.js';
import './index-c1c77241.js';

const irOtpCss = ".otp-input-wrapper.sc-ir-otp{display:flex;gap:0.5rem;justify-content:space-evenly}.otp-digit.sc-ir-otp{--otp-size:3rem;width:var(--otp-size) !important;height:var(--otp-size) !important;padding:0;font-size:24px;font-weight:500;text-align:center;background-color:#fff;padding:0 !important}.otp-digit.sc-ir-otp:disabled{background-color:#e9ecef;cursor:not-allowed}input[type='number'].sc-ir-otp::-webkit-inner-spin-button,input[type='number'].sc-ir-otp::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type='number'].sc-ir-otp{-moz-appearance:textfield}@media (max-width: 480px){.otp-digit.sc-ir-otp{width:35px;height:45px;font-size:20px}.otp-input-wrapper.sc-ir-otp{gap:6px}}@media (max-width: 360px){.otp-digit.sc-ir-otp{width:30px;height:40px;font-size:18px}.otp-input-wrapper.sc-ir-otp{gap:4px}}";
const IrOtpStyle0 = irOtpCss;

const IrOtp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpChange = createEvent(this, "otpChange", 7);
        this.otpComplete = createEvent(this, "otpComplete", 7);
        /**
         * The length of the OTP code
         */
        this.length = 6;
        /**
         * Whether the input is disabled
         */
        this.disabled = false;
        /**
         * Placeholder character to display
         */
        this.placeholder = '';
        /**
         * Input type - can be 'text', 'password', 'number', or 'tel'
         */
        this.type = 'number';
        /**
         * Auto focus on the first input when component loads
         */
        this.autoFocus = true;
        /**
         * Whether to mask the input (show dots instead of text)
         */
        this.secure = false;
        /**
         * Allow only numbers (0-9) as input
         */
        this.numbersOnly = false;
        /**
         * Current OTP value as an array of characters
         */
        this.otpValues = [];
        /**
         * Reference to input elements
         */
        this.inputRefs = [];
        /**
         * Update the current OTP value at the specified index
         */
        this.handleInput = (event, index) => {
            const input = event.target;
            let value = input.value;
            // For number input type, restrict to digits only
            if (this.numbersOnly) {
                value = value.replace(/[^0-9]/g, '');
            }
            // Take only the last character if someone enters multiple
            if (value.length > 1) {
                value = value.slice(-1);
                input.value = value;
            }
            this.otpValues[index] = value;
            this.emitChanges();
            // Move to next input if this one is filled
            if (value && index < this.length - 1) {
                this.inputRefs[index + 1].focus();
            }
        };
        /**
         * Handle keyboard navigation
         */
        this.handleKeyDown = (event, index) => {
            switch (event.key) {
                case 'Backspace':
                    if (!this.otpValues[index] && index > 0) {
                        // If current field is empty and backspace is pressed, go to previous field
                        this.inputRefs[index - 1].focus();
                        // Prevent default to avoid browser navigation
                        event.preventDefault();
                    }
                    break;
                case 'Delete':
                    // Clear current input on delete
                    this.otpValues[index] = '';
                    this.emitChanges();
                    break;
                case 'ArrowLeft':
                    // Move to previous input on left arrow
                    if (index > 0) {
                        this.inputRefs[index - 1].focus();
                        event.preventDefault();
                    }
                    break;
                case 'ArrowRight':
                    // Move to next input on right arrow
                    if (index < this.length - 1) {
                        this.inputRefs[index + 1].focus();
                        event.preventDefault();
                    }
                    break;
                case 'Home':
                    // Move to first input
                    this.inputRefs[0].focus();
                    event.preventDefault();
                    break;
                case 'End':
                    // Move to last input
                    this.inputRefs[this.length - 1].focus();
                    event.preventDefault();
                    break;
            }
        };
        /**
         * Handle paste event to populate the OTP fields
         */
        this.handlePaste = (event, index) => {
            var _a;
            event.preventDefault();
            const pastedData = ((_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text')) || '';
            // If numbersOnly is enabled, filter non-number characters
            const filteredData = this.numbersOnly ? pastedData.replace(/[^0-9]/g, '') : pastedData;
            // Fill OTP values with pasted data
            for (let i = 0; i < Math.min(filteredData.length, this.length - index); i++) {
                this.otpValues[index + i] = filteredData[i];
            }
            // Update inputs with new values
            this.inputRefs.forEach((input, idx) => {
                input.value = this.otpValues[idx] || '';
            });
            // Focus on the next empty input or the last one
            const nextEmptyIndex = this.otpValues.findIndex(val => !val);
            if (nextEmptyIndex !== -1 && nextEmptyIndex < this.length) {
                this.inputRefs[nextEmptyIndex].focus();
            }
            else {
                this.inputRefs[this.length - 1].focus();
            }
            this.emitChanges();
        };
        /**
         * Focus handler to select all text when focused
         */
        this.handleFocus = (event) => {
            const input = event.target;
            if (input.value) {
                setTimeout(() => input.select(), 0);
            }
        };
    }
    /**
     * Initialize the component
     */
    componentWillLoad() {
        this.otpValues = Array(this.length).fill('');
        if (this.defaultValue) {
            this.setValue(this.defaultValue);
        }
    }
    /**
     * Focus the first input after component renders
     */
    componentDidLoad() {
        if (this.autoFocus && this.inputRefs[0]) {
            setTimeout(() => {
                this.inputRefs[0].focus();
            }, 0);
        }
    }
    /**
     * Watch for length changes and update the OTP values array
     */
    handleLengthChange(newLength) {
        if (newLength < 1)
            return;
        const oldLength = this.otpValues.length;
        if (newLength > oldLength) {
            // Add empty slots
            this.otpValues = [...this.otpValues, ...Array(newLength - oldLength).fill('')];
        }
        else if (newLength < oldLength) {
            // Remove extra slots
            this.otpValues = this.otpValues.slice(0, newLength);
        }
        this.emitChanges();
    }
    /**
     * Helper method to emit change events
     */
    emitChanges() {
        const otpValue = this.otpValues.join('');
        this.otpChange.emit(otpValue);
        // If all fields are filled, trigger the complete event
        if (this.otpValues.every(val => val !== '') && this.otpValues.length === this.length) {
            this.otpComplete.emit(otpValue);
        }
    }
    /**
     * Manually clear all inputs
     */
    clear() {
        this.otpValues = Array(this.length).fill('');
        this.inputRefs.forEach(input => {
            input.value = '';
        });
        this.emitChanges();
        // Focus the first input after clearing
        if (this.inputRefs[0]) {
            this.inputRefs[0].focus();
        }
    }
    /**
     * Set OTP values programmatically
     */
    setValue(value) {
        const valueArray = value.split('');
        for (let i = 0; i < this.length; i++) {
            this.otpValues[i] = i < valueArray.length ? valueArray[i] : '';
        }
        // Update the actual input elements
        this.inputRefs.forEach((input, idx) => {
            input.value = this.otpValues[idx] || '';
        });
        this.emitChanges();
    }
    render() {
        return (h(Host, { key: '469a5cf6029bfa15458d6b90faeb6d64ec15d1a7', class: "otp-input-container" }, h("div", { key: '92332f35f213d236524ace6384cfd5b2099e40e0', class: "otp-input-wrapper" }, Array(this.length)
            .fill(null)
            .map((_, index) => (h("input", { ref: el => (this.inputRefs[index] = el), type: this.type, inputmode: this.numbersOnly ? 'numeric' : 'text', class: "otp-digit form-control input-sm", maxlength: "1", placeholder: this.placeholder, disabled: this.disabled, autocomplete: "one-time-code", value: this.otpValues[index], onInput: e => this.handleInput(e, index), onKeyDown: e => this.handleKeyDown(e, index), onPaste: e => this.handlePaste(e, index), onFocus: this.handleFocus, "aria-label": `Digit ${index + 1} of ${this.length}` }))))));
    }
    static get watchers() { return {
        "length": ["handleLengthChange"]
    }; }
};
IrOtp.style = IrOtpStyle0;

const irOtpModalCss = ":host{display:block}:root{--otp-modal-padding:1.5rem}.modal-backdrop{background-color:rgba(0, 0, 0, 0.5) !important}.otp-modal-header{border-bottom:0px !important}.otp-modal{z-index:9999999 !important;border:none;padding:0 !important;box-sizing:border-box;border:1px solid rgba(0, 0, 0, 0.2);border-radius:0.35rem;outline:0}.otp-modal-content{background-color:white;border:none;border-radius:0.35rem;outline:0}.otp-modal-title{margin-bottom:0;line-height:1.45}.otp-modal-body{max-height:100% !important;padding:0 var(--otp-modal-padding)}.otp-modal-header{display:flex;justify-content:space-between;padding:var(--otp-modal-padding);padding-bottom:1rem;border-top-left-radius:0.35rem;border-top-right-radius:0.35rem}.otp-modal-dialog{z-index:9999999 !important}.otp-modal-footer{border-top:0 !important;display:flex;gap:0.5rem;flex-direction:column;padding:var(--otp-modal-padding);padding-top:0.5rem !important}.verification-message{max-width:90%}.modal-loading-container{height:250px;width:80vw}@media (min-width: 768px){.otp-modal-dialog,.otp-modal-content{width:fit-content !important}.otp-modal-footer{flex-direction:row;align-items:center}.modal-loading-container{width:380px !important}.verification-message{max-width:350px !important}}";
const IrOtpModalStyle0 = irOtpModalCss;

const IrOtpModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpFinished = createEvent(this, "otpFinished", 7);
        this.language = 'en';
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
        this.roomService = new RoomService();
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
        this.fetchLocale();
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(newValue);
            this.fetchLocale();
        }
    }
    handleKeyDownChange(e) {
        var _a;
        if (e.key === 'Escape' && ((_a = this.dialogRef) === null || _a === void 0 ? void 0 : _a.open)) {
            e.preventDefault();
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
        return (h(Host, { key: '4238ea4c283fca10c44dda6168432d10f88b9108' }, h("dialog", { key: 'd3ddc63d009dea09139d754cae98263aa505fa76', ref: el => (this.dialogRef = el), class: "otp-modal", "aria-modal": "true" }, h("form", { key: '89e222e143c9ac94b77860ea13879a54dfb1ceec', method: "dialog", class: "otp-modal-content" }, this.isInitializing || !locales.entries ? (h("div", { class: 'd-flex align-items-center justify-content-center modal-loading-container' }, h("ir-spinner", null))) : (h(Fragment, null, h("header", { class: "otp-modal-header" }, h("h5", { class: "otp-modal-title" }, locales.entries.Lcz_VerifyYourIdentity)), h("section", { class: "otp-modal-body d-flex align-items-center flex-column" }, h("p", { class: "verification-message text-truncate" }, locales.entries.Lcz_WeSentYuoVerificationCode, " ", this.email), h("ir-otp", { autoFocus: true, length: this.otpLength, defaultValue: this.otp, onOtpComplete: this.handleOtpComplete }), this.error && h("p", { class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (h(Fragment, null, this.timer > 0 ? (h("p", { class: "small mt-1" }, locales.entries.Lcz_ResendCode, " 00:", String(this.timer).padStart(2, '0'))) : (h("ir-button", { class: "mt-1", btn_color: "link", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            }, size: "sm", text: 'Didn’t receive code? Resend' }))))), h("footer", { class: "otp-modal-footer justify-content-auto" }, h("ir-button", { class: "w-100", btn_styles: "flex-fill", text: locales.entries.Lcz_Cancel, btn_color: "secondary", onClick: this.handleCancelClicked.bind(this) }), h("ir-button", { class: "w-100", btn_styles: "flex-fill", text: locales.entries.Lcz_VerifyNow, isLoading: this.isLoading, btn_disabled: ((_a = this.otp) === null || _a === void 0 ? void 0 : _a.length) < this.otpLength || this.isLoading, onClick: () => this.verifyOtp() }))))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrOtpModal.style = IrOtpModalStyle0;

const irSpinnerCss = ":host{width:var(--ir-spinner-size, 1.25rem);height:var(--ir-spinner-size, 1.25rem);border:var(--ir-spinner-border-width, 2.5px) solid var(--ir-spinner-color, #3f3f3f);border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrSpinnerStyle0 = irSpinnerCss;

const IrSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * CSS unit used for `size` and `borderWidth`.
         * Can be `'px'` or `'rem'`.
         */
        this.unit = 'rem';
    }
    componentWillLoad() {
        this.initStyles();
    }
    handleSpinnerSizeChange() {
        this.initStyles();
    }
    handleSpinnerBorderWidthChange() {
        this.initStyles();
    }
    handleSpinnerUnitChange() {
        this.initStyles();
    }
    handleSpinnerColorChange() {
        this.initStyles();
    }
    /**
     * Applies CSS custom properties based on current prop values.
     */
    initStyles() {
        if (this.size) {
            this.applyCssElement(`${this.size}${this.unit}`, '--ir-spinner-size');
        }
        if (this.borderWidth) {
            this.applyCssElement(`${this.borderWidth}${this.unit}`, '--ir-spinner-size');
        }
        if (this.color) {
            this.applyCssElement(`${this.color}`, '--ir-spinner-color');
        }
    }
    /**
     * Helper function to set CSS custom properties on the host element.
     *
     * @param value - The CSS value to apply
     * @param key - The CSS custom property name (e.g., `--ir-spinner-size`)
     */
    applyCssElement(value, key) {
        this.el.style.setProperty(key, value);
    }
    render() {
        return h(Host, { key: '7637b74fc27e44aeb95ff10394cab5a530785409' });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["handleSpinnerSizeChange"],
        "borderWidth": ["handleSpinnerBorderWidthChange"],
        "unit": ["handleSpinnerUnitChange"],
        "color": ["handleSpinnerColorChange"]
    }; }
};
IrSpinner.style = IrSpinnerStyle0;

export { IrOtp as ir_otp, IrOtpModal as ir_otp_modal, IrSpinner as ir_spinner };

//# sourceMappingURL=ir-otp_3.entry.js.map