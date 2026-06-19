import { r as registerInstance, c as createEvent, h, H as Host, a as getElement, F as Fragment } from './index-BvoylR5O.js';
import { i as isRequestPending } from './ir-interceptor.store-DYGt5Cjl.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import { B as BookingService } from './booking.service-BY9sBcms.js';
import { i as formatAmount } from './utils-BDVP7IDp.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { _ as _formatTime } from './functions-81yL-Vms.js';
import './index-U7zaiBri.js';
import './index-DeW5X45W.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './booking-ClyZOZZR.js';
import './locales.store-BZFQn8-s.js';
import './calendar-data-Cnv5ncgJ.js';
import './type-D7rOPtKA.js';

const irBookingBillingRecipientCss = () => `.sc-ir-booking-billing-recipient-h{display:block;padding:0 !important;box-sizing:border-box}.billing-recipient__room.sc-ir-booking-billing-recipient::part(label),.billing-recipient__room.sc-ir-booking-billing-recipient [part~="label"]{display:flex;align-items:center;gap:var(--wa-space-xl);width:100%}.billing-recipient__guest-name.sc-ir-booking-billing-recipient{font-weight:500}.billing-recipient__room-details.sc-ir-booking-billing-recipient{display:flex;gap:6px;align-items:center;font-size:0.875rem;color:var(--wa-color-neutral-600)}.billing-recipient__roomtype.sc-ir-booking-billing-recipient{font-weight:600}`;

const IrBookingBillingRecipient = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.recipientChange = createEvent(this, "recipientChange");
    }
    booking;
    selectedRecipient;
    rooms = [];
    recipientChange;
    initialValue;
    bookingCompanyFormRef;
    componentWillLoad() {
        this.initializeDefaultValue();
    }
    handleBookingChange() {
        this.initializeDefaultValue();
    }
    initializeDefaultValue() {
        this.initialValue = 'guest';
        this.selectedRecipient = this.initialValue;
        this.filterRoomGuests();
    }
    handleRecipientChange(value) {
        this.selectedRecipient = value;
        switch (value) {
            case 'company':
                if (!this.booking.company_name) {
                    this.bookingCompanyFormRef.openCompanyForm();
                    return;
                }
                break;
        }
        this.recipientChange.emit(this.selectedRecipient);
    }
    filterRoomGuests() {
        const joinKey = '|';
        const normalize = (value) => value?.split(' ')?.join(joinKey)?.toLocaleLowerCase().trim() || '';
        const rooms = [];
        const seenNames = new Set();
        const mainGuest = this.booking?.guest;
        if (mainGuest) {
            const mainKey = `${normalize(mainGuest.first_name)}${mainGuest.last_name ? joinKey : ''}${normalize(mainGuest.last_name)}`;
            seenNames.add(mainKey);
        }
        for (const room of this.booking.rooms || []) {
            const guest = room?.guest;
            if (!guest)
                continue;
            const key = `${normalize(guest.first_name)}${guest.last_name ? joinKey : ''}${normalize(guest.last_name)}`;
            // Skip exact duplicate first + last names
            if (seenNames.has(key) || !key)
                continue;
            seenNames.add(key);
            rooms.push(room);
        }
        this.rooms = rooms;
    }
    render() {
        return (h(Host, { key: 'fb6530f26655d95fcffaa9130269ab9b00bdc6ba' }, h("wa-radio-group", { key: '36409e9059f97effdd6b6404f28833b263d766ed', defaultValue: this.initialValue, onchange: e => this.handleRecipientChange(e.target.value), label: "Bill to", orientation: "vertical", name: `${this.booking?.booking_nbr}-bill-to`, value: this.selectedRecipient, size: "s" }, h("wa-radio", { key: '53ad60640afb7c9246c5d5c34d86d5a2366fdef4', appearance: "button", value: 'guest' }, this.booking?.guest.first_name, " ", this.booking.guest.last_name), this.rooms.map((r, idx) => (h("wa-radio", { appearance: "button", class: "billing-recipient__room", value: `room__${r.guest.first_name} ${r.guest.last_name}`, key: r.guest?.id ?? `guest_${idx}` }, h("span", { class: "billing-recipient__guest-name" }, r.guest.first_name, " ", r.guest.last_name)))), !this.booking.agent && (h("wa-radio", { key: 'e3543cbf145f924f82d3430e1bc56119d471178f', appearance: "button", value: "company" }, this.booking.company_name ? this.booking.company_name : 'Use company name'))), h("ir-booking-company-dialog", { key: '8844d2091567348d51a7a029fdb88962875f7670', onCompanyFormClosed: () => {
                if (this.selectedRecipient === 'company' && !this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
                else {
                    this.handleRecipientChange('company');
                }
            }, onResetBookingEvt: e => {
                this.booking = { ...e.detail };
                if (!this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
                else {
                    this.handleRecipientChange('company');
                }
            }, booking: this.booking, ref: el => (this.bookingCompanyFormRef = el) })));
    }
    static get watchers() { return {
        "booking": [{
                "handleBookingChange": 0
            }]
    }; }
};
IrBookingBillingRecipient.style = irBookingBillingRecipientCss();

const irBookingCompanyDialogCss = () => `.sc-ir-booking-company-dialog-h{display:block}`;

const IrBookingCompanyDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.companyFormClosed = createEvent(this, "companyFormClosed");
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
    }
    booking;
    open;
    companyFormClosed;
    resetBookingEvt;
    async openCompanyForm() {
        this.open = true;
    }
    async closeCompanyForm() {
        this.open = false;
        this.companyFormClosed.emit();
    }
    render() {
        const formId = `${this.booking.booking_nbr}-${v4()}`;
        return (h("ir-dialog", { key: 'd89e74d04c47680409f55b92641b9fb2533e7cb3', open: this.open, onIrDialogHide: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeCompanyForm();
            }, label: "Company", id: "dialog-overview" }, this.open && (h("ir-booking-company-form", { key: '5d258e077e9a7e07a09a5362e539059fce3aaf10', onResetBookingEvt: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingEvt.emit(e.detail);
                this.open = false;
                // this.closeCompanyForm();
            }, formId: formId, booking: this.booking })), h("div", { key: '3311aa5b79eac35dc2e7aa11e92ff247492fa73e', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '831e81bc2dfcf89a54e3c52c2ed553aaeabf2582', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: 'c88abda760873d72ed71d560bdcc6aba1713cdd7', type: "submit", form: formId, loading: isRequestPending('/DoReservation'), size: "m", variant: "brand" }, "Save"))));
    }
};
IrBookingCompanyDialog.style = irBookingCompanyDialogCss();

const irBookingCompanyFormCss = () => `.sc-ir-booking-company-form-h{display:block}.booking-company__form.sc-ir-booking-company-form{display:flex;flex-direction:column;gap:1rem}`;

const IrBookingCompanyForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt");
    }
    booking;
    formId;
    isLoading;
    formData;
    resetBookingEvt;
    bookingService = new BookingService();
    componentWillLoad() {
        this.formData = { company_name: this.booking.company_name, company_tax_nbr: this.booking.company_tax_nbr };
    }
    updateGuest(params) {
        this.formData = { ...this.formData, ...params };
    }
    async saveCompany() {
        try {
            const booking = {
                assign_units: true,
                is_pms: true,
                is_direct: this.booking.is_direct,
                is_backend: true,
                is_in_loyalty_mode: this.booking.is_in_loyalty_mode,
                promo_key: this.booking.promo_key,
                extras: this.booking.extras,
                agent: this.booking.agent,
                booking: {
                    ...this.formData,
                    from_date: this.booking.from_date,
                    to_date: this.booking.to_date,
                    remark: this.booking.remark,
                    booking_nbr: this.booking.booking_nbr,
                    property: this.booking.property,
                    booked_on: this.booking.booked_on,
                    source: this.booking.source,
                    rooms: this.booking.rooms,
                    currency: this.booking.currency,
                    arrival: this.booking.arrival,
                    guest: this.booking.guest,
                },
                pickup_info: this.booking.pickup_info,
            };
            await this.bookingService.doReservation(booking);
            this.resetBookingEvt.emit({ ...this.booking, ...this.formData });
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h("form", { key: 'fe92ec9bc446bb7b7c78df19009d97621c75ca5a', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveCompany();
            }, class: "booking-company__form" }, h("ir-input", { key: '04a52e6c09515ec7c37edc60e692c61f3819c10f', value: this.formData.company_name, "onText-change": e => this.updateGuest({ company_name: e.detail }), label: "Name", autofocus: true, placeholder: "XYZ LTD" }), h("ir-input", { key: 'f2d731821a46e50f82de9d37636cd2e957990c60', value: this.formData.company_tax_nbr, "onText-change": e => this.updateGuest({ company_tax_nbr: e.detail }), label: "Tax ID", placeholder: "VAT 123456" })));
    }
};
IrBookingCompanyForm.style = irBookingCompanyFormCss();

const irPreviewScreenDialogCss = () => `:host{display:block}.ir-fullscreen-dialog::part(dialog){width:100vw;height:100vh;max-width:none;max-height:none;margin:0;border-radius:0}.ir-fullscreen-dialog__header-actions{display:flex;align-items:center;gap:var(--wa-space-m)}@media print{@page {size:A4;margin:0}html,body{margin:0;padding:0;height:auto}.ir-fullscreen-dialog::part(dialog){position:static !important;width:auto !important;height:auto !important;max-height:none !important;overflow:visible !important;transform:none !important}.ir-fullscreen-dialog::part(header){display:none !important}body *{visibility:hidden}.ir-fullscreen-dialog,.ir-fullscreen-dialog *{visibility:visible}.ir-fullscreen-dialog{position:absolute;top:0;left:0;width:100%}}`;

const IrPreviewScreenDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.previewAction = createEvent(this, "previewAction");
        this.openChanged = createEvent(this, "openChanged");
    }
    get el() { return getElement(this); }
    actionIconByType = {
        print: 'file-pdf',
        download: 'download',
    };
    printContainer;
    printPlaceholder;
    isPrintLayoutActive = false;
    handleBeforePrint = () => {
        if (!this.open) {
            return;
        }
        this.preparePrintLayout();
    };
    handleAfterPrint = () => {
        this.restorePrintLayout();
    };
    /**
     * The dialog's label as displayed in the header.
     * Required for accessibility and announced by assistive technologies.
     */
    label = 'Preview';
    /**
     * Indicates whether or not the preview dialog is open.
     * Toggle this attribute or use {@link openDialog} / {@link closeDialog} to control visibility.
     */
    open = false;
    /**
     * Determines which built-in action is rendered in the header.
     * `print` triggers `window.print()` while `download` downloads the configured URL.
     */
    action = 'print';
    /**
     * URL used when the action is set to `download`.
     * Can be overridden per invocation via {@link triggerAction}.
     */
    downloadUrl;
    /**
     * Suggested file name for downloaded previews.
     */
    downloadFileName;
    /**
     * When `true`, hides the default header action button so a custom implementation can be slotted.
     */
    hideDefaultAction = false;
    /**
     * Accessible label used for the default header action button.
     * Falls back to context-sensitive defaults when omitted.
     */
    actionButtonLabel;
    /**
     * Fired whenever the preview action is executed, either via the header button or programmatically.
     */
    previewAction;
    openChanged;
    _id = `download_btn_${v4()}`;
    /**
     * Opens the preview dialog.
     */
    async openDialog() {
        this.open = true;
    }
    /**
     * Closes the preview dialog.
     */
    async closeDialog() {
        this.open = false;
    }
    /**
     * Executes the configured preview action.
     *
     * @param action Optional override of the default action type.
     * @param url Optional URL used for downloads. Falls back to the `downloadUrl` prop.
     * @param fileName Optional file name suggestion for downloads.
     * @returns Resolves with `true` when the action was attempted, `false` when prerequisites are missing.
     */
    async triggerAction(action = this.action, url, fileName) {
        const resolvedUrl = url ?? this.downloadUrl;
        const resolvedFileName = fileName ?? this.downloadFileName;
        let result = false;
        if (action === 'print') {
            result = this.runPrintAction();
        }
        else {
            result = this.runDownloadAction(resolvedUrl, resolvedFileName);
        }
        this.previewAction.emit({ action, url: resolvedUrl });
        return result;
    }
    runPrintAction() {
        if (typeof window === 'undefined' || typeof window.print !== 'function') {
            console.warn('[ir-preview-screen-dialog] window.print is not available in this environment.');
            return false;
        }
        this.preparePrintLayout();
        try {
            window.print();
        }
        finally {
            this.restorePrintLayout();
        }
        return true;
    }
    runDownloadAction(url, fileName) {
        if (!url) {
            console.warn('[ir-preview-screen-dialog] No download URL was provided.');
            return false;
        }
        if (typeof document === 'undefined') {
            console.warn('[ir-preview-screen-dialog] document is not available in this environment.');
            return false;
        }
        const anchor = document.createElement('a');
        anchor.href = url;
        if (fileName) {
            anchor.download = fileName;
        }
        anchor.target = '_blank';
        anchor.rel = 'noopener';
        anchor.style.display = 'none';
        const parent = document.body || document.documentElement;
        parent?.appendChild(anchor);
        anchor.click();
        anchor.remove();
        return true;
    }
    getActionLabel() {
        if (this.actionButtonLabel) {
            return this.actionButtonLabel;
        }
        return this.action === 'print' ? 'Print preview' : 'Download preview';
    }
    shouldDisableActionButton() {
        return this.action === 'download' && !this.downloadUrl;
    }
    handleActionButtonClick() {
        this.triggerAction();
    }
    preparePrintLayout() {
        if (typeof document === 'undefined' || this.printContainer || this.isPrintLayoutActive) {
            return;
        }
        const contentNodes = Array.from(this.el.children).filter((child) => !child.hasAttribute('slot'));
        if (!contentNodes.length) {
            return;
        }
        const placeholder = document.createComment('ir-preview-print-placeholder');
        this.el.insertBefore(placeholder, contentNodes[0]);
        const container = document.createElement('div');
        container.className = 'ir-preview-print-container';
        contentNodes.forEach(node => {
            container.appendChild(node);
        });
        document.body.appendChild(container);
        document.body.classList.add('ir-preview-dialog-print-mode');
        this.printPlaceholder = placeholder;
        this.printContainer = container;
        this.isPrintLayoutActive = true;
    }
    restorePrintLayout() {
        if (!this.printContainer || !this.printPlaceholder || typeof document === 'undefined') {
            return;
        }
        const targetParent = this.printPlaceholder.parentNode;
        if (targetParent) {
            while (this.printContainer.firstChild) {
                targetParent.insertBefore(this.printContainer.firstChild, this.printPlaceholder);
            }
        }
        this.printPlaceholder.remove();
        this.printContainer.remove();
        document.body.classList.remove('ir-preview-dialog-print-mode');
        this.printPlaceholder = undefined;
        this.printContainer = undefined;
        this.isPrintLayoutActive = false;
    }
    componentDidLoad() {
        if (typeof window === 'undefined') {
            return;
        }
        window.addEventListener('beforeprint', this.handleBeforePrint);
        window.addEventListener('afterprint', this.handleAfterPrint);
    }
    disconnectedCallback() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('beforeprint', this.handleBeforePrint);
            window.removeEventListener('afterprint', this.handleAfterPrint);
        }
        this.restorePrintLayout();
    }
    render() {
        return (h("ir-dialog", { key: '076deb11437cf4651221105c4f714818f55dd650', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openChanged.emit(false);
            }, label: this.label, open: this.open, class: "ir-fullscreen-dialog" }, h("div", { key: '8365fd27c452cbe7e8355ca82e56b63720e86cdc', slot: "header-actions", class: "ir-fullscreen-dialog__header-actions" }, h("slot", { key: '7a5eec5d55f4becf359e1fa92819d051aff04a1b', name: "header-actions" }), !this.hideDefaultAction && (h(Fragment, { key: '4f1b9ef357a436ba70df4e2335b9418a435d00ca' }, h("wa-tooltip", { key: '5854c20897c78adf48ff904e9d7c7e2422b525fc', for: this._id }, "Print PDF"), h("ir-custom-button", { key: '9b6f9227fd4c41d8cb68df2a1b784e33be43a082', id: this._id, size: "m", variant: "neutral", appearance: "plain", onClickHandler: this.handleActionButtonClick.bind(this), disabled: this.shouldDisableActionButton() }, h("wa-icon", { key: '3c14a623e538469d28e34e34c6bb2c3b9ea6e4a3', name: this.actionIconByType[this.action], label: this.getActionLabel(), "aria-label": this.getActionLabel() }))))), h("slot", { key: 'bdf43004aebf2291712987e6c8bc653d4a99f375' })));
    }
};
IrPreviewScreenDialog.style = irPreviewScreenDialogCss();

const irPrintRoomCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;}.ir-print-room__header{display:flex;align-items:center;gap:0.625rem;font-weight:bold;font-size:1rem;line-height:1.5rem;margin-bottom:0.375rem}.ir-print-room__body{display:flex;align-items:center;gap:0.625rem;flex-wrap:wrap}.ir-print-room__details{flex:1 1 0%}.ir-print-room__row{display:flex;align-items:center;gap:1rem}.ir-print-room__daily-amounts{display:flex}.room_amount{min-width:4.38rem}.room_amount_container{display:flex;font-weight:600;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.ir-print-room__daily-amounts--with-divider{padding-bottom:1rem}p,div,section,span{margin:0;padding:0;box-sizing:border-box}body{display:block;font-size:0.88rem;font-weight:600;box-sizing:border-box}.main-container{max-width:56.25rem;margin-left:auto;margin-right:auto;}.label-title{padding:0;margin:0;color:rgb(51, 51, 51);font-weight:700}.label-value{padding-left:0.25rem;color:rgb(102, 102, 102);font-weight:600}.booking-details,.pickup-container{padding:0.94rem 0;border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128)}.accommodation-summary{display:flex;align-items:center;justify-content:space-between;padding:0.94rem 0;flex-wrap:wrap;gap:0.62rem}.booking-dates{color:rgb(51, 51, 51);font-weight:700;padding:0;margin:0}.roomtype-title td{padding-top:1.56rem;padding-right:0.62rem}.policies{font-size:0.88rem}.policies-container{padding:0.62rem 0.06rem 0.94rem 0.06rem}.policies{padding-inline:0.06rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.pricing-summary{text-align:end;padding-left:0.62rem;padding-bottom:0.94rem}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.pricing-breakdown{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.25rem}.property_name,.booked_on_date,.invoice_reference{color:rgb(51, 51, 51);font-size:0.88rem;font-weight:700}.booking-number{font-size:1.25rem;font-weight:600}.header{display:flex;justify-content:space-between;padding-bottom:0.94rem}.booked_on_date{font-weight:600}.reservation-details{display:flex;align-items:center;justify-content:flex-end}.origin-icon{height:2.5rem;width:2.5rem}.invoice_reference{text-align:end}.billing_header{color:#333;box-sizing:border-box;font-size:1rem}.billing_cell{text-align:left}.billing_table{padding:0.62rem 0}.billing_table caption{text-align:start;font-size:1.12rem;padding:0.62rem 0rem 0.94rem}.pickup-details{display:flex;align-items:center;flex-wrap:wrap}.pickup_title{font-size:1.12rem;padding:0rem 0 0.94rem 0}.car_name{color:#333;font-weight:bold;padding-right:0.62rem}.pickup-details .label-title{padding-right:0.62rem}.billing_reference{width:2.5rem}.room_amount_container{display:flex;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}.ir-print-room__tax-row{display:flex;font-size:0.875rem;font-weight:700}.ir-print-room__totals{display:flex;gap:0.25rem;flex-direction:column}.ir-print-room__header{font-size:1.1rem}.ir-print-room__dates{display:flex;align-items:center;gap:0.5rem;font-weight:600}.ir-print-room__body{flex-direction:column}.ir-print-room__body{align-items:flex-start;margin-top:1rem}@media (min-width: 640px){.ir-print-room__totals{align-items:flex-end}.room_amount_container{flex-direction:column}.ir-print-room__body{flex-direction:row}.billing_header,.billing_cell{padding:0.62rem}.billing_reference{width:auto}.room_amount_empty{display:block}.room_amount_rate{display:block}}`;

const IrPrintRoom = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Room data */
    room;
    /** Booking context */
    booking;
    /** Property context */
    property;
    /** Currency code (e.g. USD, EUR) */
    currency;
    /** Room index */
    idx;
    getSmokingLabel() {
        const { booking, room, property } = this;
        if (booking?.is_direct) {
            if (!room?.smoking_option)
                return null;
            const currRT = property?.roomtypes?.find(rt => rt.id === room?.roomtype?.id);
            const smokingOptions = currRT?.smoking_option?.allowed_smoking_options;
            return smokingOptions?.find(s => s.code === room.smoking_option)?.description ?? null;
        }
        return room?.ota_meta?.smoking_preferences ?? null;
    }
    formatDate(date) {
        const m = hooks(date, 'YYYY-MM-DD');
        const dayMonth = m.format('DD/MM');
        let dayOfWeekAbbr = m.format('ddd'); // Mon, Tue, Wed, Thu, Fri, Sat, Sun
        if (['Thu', 'Sun', 'Sat'].includes(dayOfWeekAbbr)) {
            dayOfWeekAbbr = dayOfWeekAbbr.slice(0, 2);
        }
        else {
            dayOfWeekAbbr = dayOfWeekAbbr.charAt(0);
        }
        return `${dayMonth} ${dayOfWeekAbbr}`;
    }
    formatGuestName({ first_name, last_name }) {
        if (!last_name) {
            return first_name;
        }
        return `${first_name} ${last_name}`;
    }
    formatGuestAvailability({ adult_nbr, children_nbr, infant_nbr }) {
        // Adjust child number based on infants
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = children_nbr > 0 ? children_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        // Define labels based on singular/plural rules
        const adultLabel = adultCount > 1 ? 'adults' : 'adult';
        const childLabel = childCount > 1 ? 'children' : 'child';
        const infantLabel = infantCount > 1 ? 'infants' : 'infant';
        // Construct parts with the updated child number
        const parts = [];
        if (adultCount > 0) {
            parts.push(`${adultCount} ${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${childCount} ${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${infantCount} ${infantLabel}`);
        }
        return parts.join('&nbsp&nbsp&nbsp&nbsp');
    }
    formatBookingDates(date) {
        return hooks(date, 'YYYY-MM-DD').format('DD-MMM-YYYY');
    }
    renderTaxSection() {
        // OTA booking taxes
        if (!this.booking?.is_direct) {
            const filteredData = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filteredData.map((d, index) => (h("div", { key: `room_${d.name}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", { class: "ir-print-room__tax-amount" }, d.currency.symbol, d.amount))));
        }
        // Direct booking taxes
        const filteredData = this.property?.taxes?.filter(tx => tx.pct > 0 && tx.is_exlusive);
        return (h(Fragment, null, filteredData?.map((d, index) => {
            const amount = (this.room.total * d.pct) / 100;
            return (h("div", { key: `direct_room_${d.name}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", { class: "ir-print-room__tax-amount" }, d.pct, "%: ", formatAmount(this.currency, amount))));
        }), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map((d, index) => (h("div", { key: `direct_room_${d.TAX_NAME}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, "Including ", d.TAX_NAME), h("p", { class: "ir-print-room__tax-amount" }, d.TAX_PCT * 100, "%: ", formatAmount(this.currency, d.CALCULATED_VALUE)))))));
    }
    render() {
        const { room, booking, property, currency, idx } = this;
        const haveMultipleRooms = property.roomtypes?.find(rt => rt.id === room?.roomtype?.id)?.physicalrooms?.length > 1;
        return (h("section", { key: 'd5445588c27bb08f9818b438250847830cda13de', class: "ir-print-room" }, h("header", { key: '85d9ed32724707c8bf2088c8f0934ca1d2a63bdb', class: "ir-print-room__header" }, h("p", { key: '9ecdf3ef3c8c242f8bb40b3f63eeeb3eb622cb12', class: "ir-print-room__room-type" }, room?.roomtype?.name), haveMultipleRooms && room?.unit && h("p", { key: '7f5ae97035381f63201ae104034097b1a7a9b10b', class: "ir-print-room__unit" }, "(unit ", room.unit.name, ")"), h("p", { key: '607e12c38ec31fe3d5a2fa685871c5663b4c409a', class: "ir-print-room__rate-plan" }, room?.rateplan?.short_name || room?.rateplan?.name)), h("div", { key: '933a483bec325ba28994a32c1b13f881e50a0168', class: "ir-print-room__body" }, h("div", { key: '80f0b804fe9b8c0055f8a9f9c2d1dce222c362f4', class: "ir-print-room__details" }, h("div", { key: 'e5b98de7aa6523ace65b0ad7b05638705ffcc3b1', class: "ir-print-room__row" }, h("ir-printing-label", { key: '32f01e549fa3f0407fc0ba6ad1737594342087b4', label: "Guest Name:", content: this.formatGuestName(room?.sharing_persons?.find(p => p.is_main) ?? room?.guest) }), h("ir-printing-label", { key: '5d1f299a166b20ea4d473aba70d1bdf2468d87ca', "as-html": true, content: this.formatGuestAvailability(room?.occupancy) })), h("div", { key: 'dc601de53b9c8c6efdaab2890ac9da79c7661dff', class: "ir-print-room__row" }, h("div", { key: '2cc492019b0b65b971a55270f56e042ab1db423b', class: "ir-print-room__dates" }, this.formatBookingDates(room?.from_date), h("span", { key: '5b5ffe2ba684b084ae8c408ab6a3b0ef504c5683', class: "ir-print-room__date-separator" }, "\u2192"), this.formatBookingDates(room?.to_date)), room?.departure_time?.description && h("p", { key: '659156ceaae23b44fabe6379e2699d94bbe123da', class: "ir-print-room__departure-time" }, "(Expected departure time: ", room.departure_time.description, ")")), h("ir-printing-label", { key: '8e5187bf8555fad2ee27c68641009cc8b604cc55', label: "Smoking options:", display: "inline", content: this.getSmokingLabel() }), booking?.is_direct && (h("div", { key: 'd37330a63d2b47d8fb0a9c12a6dab887d3281ba4', class: "ir-print-room__policies" }, h("ir-printing-label", { key: 'e57ca10257e2bdabbcbaaa9b8b43788581707358', label: "Cancellation:", display: "inline", asHtml: true, content: room?.rateplan?.cancelation?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') }), h("ir-printing-label", { key: 'ba505f661f9a8ff41d51a3db780d3e3885a1d188', label: "Guarantee:", display: "inline", asHtml: true, content: (room?.rateplan?.guarantee ?? '')?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') })))), h("aside", { key: '930fe1b7b6e9ba2114b7039b924696d039637a98', class: "ir-print-room__totals" }, h("ir-printing-label", { key: 'ae25246ed5a0ad5052377a060d12b481f31cd724', label: "Total:", content: formatAmount(currency, room?.total) }), this.renderTaxSection(), h("ir-printing-label", { key: '9cc8a6cd601c738ac804ae20ab4852ec7c2d081e', label: "Grand total:", content: formatAmount(currency, room?.gross_total) }), booking?.is_direct && h("ir-printing-label", { key: '69020c1e6af09be53652a74a1bdd21f4925ba2e1', label: "Due upon booking:", content: formatAmount(currency, Number(room?.gross_guarantee)) }))), h("div", { key: '2085d6c2b9acdcb8e8b1236082d9fca568905338', class: {
                'ir-print-room__daily-amounts': true,
                'ir-print-room__daily-amounts--with-divider': idx < booking?.rooms?.length - 1,
            } }, room?.days?.map(d => (h("div", { class: "room_amount_container", key: d.date }, h("p", { class: "room_amount date" }, this.formatDate(d.date)), h("p", { class: "room_amount amount", style: { paddingRight: '0.375rem' } }, formatAmount(currency, d.amount))))))));
    }
};
IrPrintRoom.style = irPrintRoomCss();

const irPrintingExtraServiceCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block}.ir-print-extra-services{padding:1rem 0;border-top:1px solid #d1d5db}.ir-print-extra-services__title{font-weight:600;font-size:1.125rem ;line-height:1.75rem ;color:#111827;margin-bottom:0.625rem}.ir-print-extra-services__list{display:flex;flex-direction:column;gap:0.75rem}.ir-print-extra-services__item{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap}.ir-print-extra-services__details{display:flex;flex-direction:column;gap:0.25rem;max-width:80%}.ir-print-extra-services__description{word-break:break-word}.ir-print-extra-services__dates{font-size:0.75rem;color:#374151}.ir-print-extra-services__date-wrapper{display:inline-flex;align-items:center;gap:0.25rem}.ir-print-extra-services__date{white-space:nowrap}.ir-print-extra-services__date-separator{margin:0 0.25rem}.ir-print-extra-services__date::part(content){font-size:0.875rem}.ir-print-extra-services__price{font-weight:700;white-space:nowrap}`;

const IrPrintingExtraService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Extra services attached to the booking */
    extraServices;
    /** Booking currency */
    currency;
    invocableKeys;
    render() {
        return (h("section", { key: 'c4e7461624e43184a6b9a946b24e601e0c6f7524', class: "ir-print-extra-services" }, h("h3", { key: '175d141dfca3d9ddfe557e71d4a3370b5e92d7ac', class: "ir-print-extra-services__title" }, "Extra services"), h("div", { key: 'eb15dd4981e3c27447792f6408f303163cf78046', class: "ir-print-extra-services__list" }, this.extraServices?.map(service => {
            if (!this.invocableKeys.has(service.system_id)) {
                return null;
            }
            return (h("div", { key: `service_${service.system_id}`, class: "ir-print-extra-services__item" }, h("div", { class: "ir-print-extra-services__details" }, h("ir-printing-label", { display: "inline", label: "", class: "ir-print-extra-services__description", content: service.description }), (service.start_date || service.end_date) && (h("div", { class: "ir-print-extra-services__dates" }, h("span", { class: "ir-print-extra-services__date-wrapper" }, "(", service.start_date && (h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: hooks(service.start_date).format('dddd, DD MMM YYYY') })), service.end_date && (h(Fragment, null, h("span", { class: "ir-print-extra-services__date-separator" }, "\u2013"), h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: hooks(service.end_date).format('dddd, DD MMM YYYY') }))), ")")))), h("div", { class: "ir-print-extra-services__price" }, formatAmount(this.currency?.symbol, service?.price || 0))));
        }))));
    }
};
IrPrintingExtraService.style = irPrintingExtraServiceCss();

const irPrintingLabelCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block}:host([display='inline']) .ir-printing-label__container{display:inline-flex !important;max-width:100%;align-items:center}.ir-printing-label__container{display:flex;align-items:center;gap:0.25rem}.ir-printing-label__header{font-size:0.75rem;font-weight:600}.ir-printing-label__label{font-size:var(--wa-font-size-m);font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}.ir-printing-label__content{font-size:0.875rem}.ir-printing-label__text{margin:0}.ir-printing-label__footer{margin-top:0.25rem}`;

const IrPrintingLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Fallback label text (used if no label slot is provided)
     */
    label;
    asHtml;
    display = 'flex';
    /**
     * Fallback content text (used if no content slot is provided)
     */
    content;
    render() {
        if (!this.content) {
            return null;
        }
        return (h(Host, { class: "ir-printing-label" }, h("section", { part: "container", class: "ir-printing-label__container" }, this.label && (h("p", { class: "ir-printing-label__label", part: "label" }, this.label)), this.asHtml ? (h("p", { part: "content", class: "ir-printing-label__text", innerHTML: this.content })) : (h("p", { part: "content", class: "ir-printing-label__text" }, this.content)))));
    }
};
IrPrintingLabel.style = irPrintingLabelCss();

const irPrintingPickupCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}.main-container{max-width:56.25rem;margin-left:auto;margin-right:auto;}.label-title{padding:0;margin:0;color:rgb(51, 51, 51);font-weight:700}.label-value{padding-left:0.25rem;color:rgb(102, 102, 102);font-weight:600}.booking-details,.pickup-container{padding:0.94rem 0;border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128)}.accommodation-summary{display:flex;align-items:center;justify-content:space-between;padding:0.94rem 0;flex-wrap:wrap;gap:0.62rem}.booking-dates{color:rgb(51, 51, 51);font-weight:700;padding:0;margin:0}.roomtype-title td{padding-top:1.56rem;padding-right:0.62rem}.policies{font-size:0.88rem}.policies-container{padding:0.62rem 0.06rem 0.94rem 0.06rem}.policies{padding-inline:0.06rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.pricing-summary{text-align:end;padding-left:0.62rem;padding-bottom:0.94rem}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.pricing-breakdown{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.25rem}.property_name,.booked_on_date,.invoice_reference{color:rgb(51, 51, 51);font-size:0.88rem;font-weight:700}.booking-number{font-size:1.25rem;font-weight:600}.header{display:flex;justify-content:space-between;padding-bottom:0.94rem}.booked_on_date{font-weight:600}.reservation-details{display:flex;align-items:center;justify-content:flex-end}.origin-icon{height:2.5rem;width:2.5rem}.invoice_reference{text-align:end}.billing_header{color:#333;box-sizing:border-box;font-size:1rem}.billing_cell{text-align:left}.billing_table{padding:0.62rem 0}.billing_table caption{text-align:start;font-size:1.12rem;padding:0.62rem 0rem 0.94rem}.pickup-details{display:flex;align-items:center;flex-wrap:wrap}.pickup_title{font-size:1.12rem;padding:0rem 0 0.94rem 0}.car_name{color:#333;font-weight:bold;padding-right:0.62rem}.pickup-details .label-title{padding-right:0.62rem}.billing_reference{width:2.5rem}.room_amount_container{display:flex;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}@media only screen and (min-width: 768px){.room_amount_container{flex-direction:column}.billing_header,.billing_cell{padding:0.62rem}.billing_reference{width:auto}.room_amount_empty{display:block}.room_amount_rate{display:block}}:host{display:block}.ir-print-pickup{padding:1rem 0;border-top:1px solid #d1d5db}.ir-print-pickup__title{font-size:1.125rem;font-weight:600;color:#111827;margin-bottom:0.625rem}.ir-print-pickup__content{display:flex;flex-direction:column;gap:0.5rem}.ir-print-pickup__row{display:flex;align-items:center;flex-wrap:wrap;gap:0.75rem}.ir-print-pickup__row--secondary{margin-top:0.375rem}.ir-print-pickup__vehicle{font-weight:500;white-space:nowrap}.ir-print-pickup__vehicle-separator{margin:0 0.25rem}`;

const IrPrintingPickup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Pickup information attached to the booking */
    pickup;
    render() {
        if (!this.pickup) {
            return null;
        }
        return (h("section", { class: "ir-print-pickup" }, h("p", { class: "ir-print-pickup__title" }, "Yes, from ", this.pickup.selected_option.location.description), h("div", { class: "ir-print-pickup__content" }, h("div", { class: "ir-print-pickup__row" }, h("ir-printing-label", { label: "Arrival date:", content: hooks(this.pickup.date).format('dddd, DD MMM YYYY') }), h("ir-printing-label", { label: "Arrival time:", content: _formatTime(this.pickup.hour.toString(), this.pickup.minute.toString()) }), h("ir-printing-label", { label: "Flight details:", content: this.pickup.details })), h("div", { class: "ir-print-pickup__row ir-print-pickup__row--secondary" }, h("p", { class: "ir-print-pickup__vehicle" }, this.pickup.selected_option.vehicle.description, h("span", { class: "ir-print-pickup__vehicle-separator" }, " \u2013 "), formatAmount(this.pickup.selected_option.currency.symbol, this.pickup.selected_option.amount)), h("ir-printing-label", { label: "Number of vehicles:", content: this.pickup.nbr_of_units?.toString() }), h("ir-printing-label", { label: "Due upon booking:", content: formatAmount(this.pickup.currency.symbol, this.pickup.total) })))));
    }
};
IrPrintingPickup.style = irPrintingPickupCss();

export { IrBookingBillingRecipient as ir_booking_billing_recipient, IrBookingCompanyDialog as ir_booking_company_dialog, IrBookingCompanyForm as ir_booking_company_form, IrPreviewScreenDialog as ir_preview_screen_dialog, IrPrintRoom as ir_print_room, IrPrintingExtraService as ir_printing_extra_service, IrPrintingLabel as ir_printing_label, IrPrintingPickup as ir_printing_pickup };
