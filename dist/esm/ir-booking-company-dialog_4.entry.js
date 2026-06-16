import { r as registerInstance, c as createEvent, h, g as getElement, F as Fragment, H as Host } from './index-7e96440e.js';
import { a as isRequestPending } from './ir-interceptor.store-b1961d27.js';
import { v as v4 } from './v4-964634d6.js';
import { B as BookingService } from './booking.service-62e743ac.js';
import './index-f100e9d2.js';
import './index-1e1f097b.js';
import './axios-aa1335b8.js';
import './utils-4409b691.js';
import './moment-ab846cee.js';
import './calendar-data-b1f645da.js';
import './locales.store-cb784e95.js';
import './type-cce4b8e0.js';
import './booking-db51b3fa.js';

const irBookingCompanyDialogCss = ".sc-ir-booking-company-dialog-h{display:block}";
const IrBookingCompanyDialogStyle0 = irBookingCompanyDialogCss;

const IrBookingCompanyDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.companyFormClosed = createEvent(this, "companyFormClosed", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
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
        return (h("ir-dialog", { key: '938f311e993fb0a8bddb26afb75b48303cd280c4', open: this.open, onIrDialogHide: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeCompanyForm();
            }, label: "Company", id: "dialog-overview" }, this.open && (h("ir-booking-company-form", { key: 'b50a1767d21d494aadcb7899dd6ffcae75ec7021', onResetBookingEvt: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingEvt.emit(e.detail);
                this.open = false;
                // this.closeCompanyForm();
            }, formId: formId, booking: this.booking })), h("div", { key: '9f6278d3da8e403c6e01d58b64a6bf3b499aa569', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '920404c77480b917692c0a445aea250bfb4751a8', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: '7a3eac67f26fb83b7952d21b370f713340157834', type: "submit", form: formId, loading: isRequestPending('/DoReservation'), size: "medium", variant: "brand" }, "Save"))));
    }
};
IrBookingCompanyDialog.style = IrBookingCompanyDialogStyle0;

const irBookingCompanyFormCss = ".sc-ir-booking-company-form-h{display:block}.booking-company__form.sc-ir-booking-company-form{display:flex;flex-direction:column;gap:1rem}";
const IrBookingCompanyFormStyle0 = irBookingCompanyFormCss;

const IrBookingCompanyForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
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
        return (h("form", { key: '32395fd89b4d16b37471ad3ddf92cc565a93d5e2', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveCompany();
            }, class: "booking-company__form" }, h("ir-input", { key: '42079e0c1e131b7ce24f38a1e277372d395d1d34', value: this.formData.company_name, "onText-change": e => this.updateGuest({ company_name: e.detail }), label: "Name", autofocus: true, placeholder: "XYZ LTD" }), h("ir-input", { key: 'fa2323f231db8b166b5da832a72a2e608d190c69', value: this.formData.company_tax_nbr, "onText-change": e => this.updateGuest({ company_tax_nbr: e.detail }), label: "Tax ID", placeholder: "VAT 123456" })));
    }
};
IrBookingCompanyForm.style = IrBookingCompanyFormStyle0;

const irPreviewScreenDialogCss = ":host{display:block}.ir-fullscreen-dialog::part(dialog){width:100vw;height:100vh;max-width:none;max-height:none;margin:0;border-radius:0}.ir-fullscreen-dialog__header-actions{display:flex;align-items:center;gap:var(--wa-space-m)}@media print{@page {size:A4;margin:0}html,body{margin:0;padding:0;height:auto}.ir-fullscreen-dialog::part(dialog){position:static !important;width:auto !important;height:auto !important;max-height:none !important;overflow:visible !important;transform:none !important}.ir-fullscreen-dialog::part(header){display:none !important}body *{visibility:hidden}.ir-fullscreen-dialog,.ir-fullscreen-dialog *{visibility:visible}.ir-fullscreen-dialog{position:absolute;top:0;left:0;width:100%}}";
const IrPreviewScreenDialogStyle0 = irPreviewScreenDialogCss;

const IrPreviewScreenDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.previewAction = createEvent(this, "previewAction", 7);
        this.openChanged = createEvent(this, "openChanged", 7);
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
        return (h("ir-dialog", { key: '56c4d4c39d7f48522774ee09c683b4c38b88f513', onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openChanged.emit(false);
            }, label: this.label, open: this.open, class: "ir-fullscreen-dialog" }, h("div", { key: '6123987e8b54aa4fba1674a04d7991d28700f6d5', slot: "header-actions", class: "ir-fullscreen-dialog__header-actions" }, h("slot", { key: 'b5d4323e729c17705bf7f42486a2f5020c2c30ef', name: "header-actions" }), !this.hideDefaultAction && (h(Fragment, { key: '06be09a7b716ebd55ec7f831c7bb9355506b52c6' }, h("wa-tooltip", { key: '5e767f73ed4eb36f3785ac5681bbdd0d80334fcc', for: this._id }, "Print PDF"), h("ir-custom-button", { key: '39150d493cdc1589c4940060025d2bec125b7e6e', id: this._id, size: "medium", variant: "neutral", appearance: "plain", onClickHandler: this.handleActionButtonClick.bind(this), disabled: this.shouldDisableActionButton() }, h("wa-icon", { key: 'fd9b323801428cf3e4b7bdb2c9fce7c2165ba951', name: this.actionIconByType[this.action], label: this.getActionLabel(), "aria-label": this.getActionLabel() }))))), h("slot", { key: '730ed2d8e8e364e293216494ea8b9b0beede969c' })));
    }
};
IrPreviewScreenDialog.style = IrPreviewScreenDialogStyle0;

const irPrintingLabelCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block}:host([display='inline']) .ir-printing-label__container{display:inline-flex !important;max-width:100%;align-items:center}.ir-printing-label__container{display:flex;align-items:center;gap:0.25rem}.ir-printing-label__header{font-size:0.75rem;font-weight:600}.ir-printing-label__label{font-size:var(--wa-font-size-m);font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}.ir-printing-label__content{font-size:0.875rem}.ir-printing-label__text{margin:0}.ir-printing-label__footer{margin-top:0.25rem}";
const IrPrintingLabelStyle0 = irPrintingLabelCss;

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
IrPrintingLabel.style = IrPrintingLabelStyle0;

export { IrBookingCompanyDialog as ir_booking_company_dialog, IrBookingCompanyForm as ir_booking_company_form, IrPreviewScreenDialog as ir_preview_screen_dialog, IrPrintingLabel as ir_printing_label };

//# sourceMappingURL=ir-booking-company-dialog_4.entry.js.map