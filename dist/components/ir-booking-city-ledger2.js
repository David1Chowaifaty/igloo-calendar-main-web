import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as CityLedgerService } from './index6.js';
import { m as mapClTxToFolioRow } from './types3.js';
import { h as hooks } from './moment.js';
import { c as calendar_data } from './calendar-data.js';
import { T as Token } from './Token.js';
import { a as actionableClTypes } from './city-ledger.service.js';
import { f as formatAmount } from './utils.js';
import { d as defineCustomElement$m } from './ir-air-date-picker2.js';
import { d as defineCustomElement$l } from './ir-city-ledger-transaction-drawer2.js';
import { d as defineCustomElement$k } from './ir-city-ledger-transaction-form2.js';
import { d as defineCustomElement$j } from './ir-cl-adjustment-fields2.js';
import { d as defineCustomElement$i } from './ir-cl-credit-note-fields2.js';
import { d as defineCustomElement$h } from './ir-cl-debit-note-fields2.js';
import { d as defineCustomElement$g } from './ir-cl-fiscal-document-preview2.js';
import { d as defineCustomElement$f } from './ir-cl-invoice-select2.js';
import { d as defineCustomElement$e } from './ir-cl-opening-balance-fields2.js';
import { d as defineCustomElement$d } from './ir-cl-payment-fields2.js';
import { d as defineCustomElement$c } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$b } from './ir-custom-button2.js';
import { d as defineCustomElement$a } from './ir-date-select2.js';
import { d as defineCustomElement$9 } from './ir-dialog2.js';
import { d as defineCustomElement$8 } from './ir-drawer2.js';
import { d as defineCustomElement$7 } from './ir-empty-state2.js';
import { d as defineCustomElement$6 } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$5 } from './ir-input2.js';
import { d as defineCustomElement$4 } from './ir-pdf-viewer2.js';
import { d as defineCustomElement$3 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irBookingCityLedgerCss = ".sc-ir-booking-city-ledger-h{display:block;width:100%;min-width:0;--item-vertical-padding:var(--wa-space-s, 0.5rem);--item-inline-padding:var(--wa-space-l, 1.5rem)}.booking-city-ledger__card.sc-ir-booking-city-ledger{width:100%}.booking-city-ledger__card.sc-ir-booking-city-ledger::part(body){padding:0;padding-bottom:calc(1.5rem - var(--item-vertical-padding));padding-top:calc(1.5rem - var(--item-vertical-padding))}.booking-city-ledger__header-title.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:0.5rem}.booking-city-ledger__agent-name.sc-ir-booking-city-ledger{font-weight:400;color:var(--wa-color-neutral-600, #6b7280);font-size:var(--wa-font-size-s, 0.8125rem)}.booking-city-ledger__spinner-wrap.sc-ir-booking-city-ledger{display:flex;justify-content:center;align-items:center;padding:2rem 1rem}.booking-city-ledger__empty-state.sc-ir-booking-city-ledger{padding:1.5rem}.booking-city-ledger__error.sc-ir-booking-city-ledger{margin:0;padding:1rem;text-align:center;font-size:0.875rem;color:var(--wa-color-danger-600, #dc2626)}.folio-list.sc-ir-booking-city-ledger{display:flex;flex-direction:column}.folio-row.sc-ir-booking-city-ledger{padding:var(--item-vertical-padding) var(--item-inline-padding);border-bottom:1px solid var(--wa-color-neutral-100, #f4f4f5)}.folio-row.sc-ir-booking-city-ledger:last-child{border-bottom:none}.folio-row__header.sc-ir-booking-city-ledger{display:flex;justify-content:space-between;align-items:center;gap:0.5rem}.folio-row__meta.sc-ir-booking-city-ledger,.folio-row-desc_row.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;min-width:0}.folio-row-desc_row.sc-ir-booking-city-ledger{justify-content:space-between}.folio-row__date.sc-ir-booking-city-ledger{font-size:0.857rem;color:var(--wa-color-neutral-500, #71717a);white-space:nowrap;font-variant-numeric:tabular-nums}.folio-row__right.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:0.375rem;flex-shrink:0}.folio-row__amount.sc-ir-booking-city-ledger{font-size:1rem;font-weight:600;white-space:nowrap}.folio-row__desc.sc-ir-booking-city-ledger{margin:0.3rem 0 0;font-size:var(--wa-font-size-s);color:var(--wa-color-neutral-800, #27272a);line-height:1.4;word-break:break-word}.folio-row__action-trigger-icon.sc-ir-booking-city-ledger{font-size:1rem}.folio-row__action-trigger.sc-ir-booking-city-ledger::part(base){height:auto;width:var(--wa-space-xs)}.folio-row__city-tax.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:0.375rem;margin-top:0.25rem;font-size:0.857rem;color:var(--wa-color-neutral-500, #71717a)}.is-debit.sc-ir-booking-city-ledger{color:var(--wa-color-danger-fill-loud);font-weight:700}.is-credit.sc-ir-booking-city-ledger{color:var(--wa-color-success-fill-loud);font-weight:700}";
const IrBookingCityLedgerStyle0 = irBookingCityLedgerCss;

const IrBookingCityLedger = /*@__PURE__*/ proxyCustomElement(class IrBookingCityLedger extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.clRefreshNeeded = createEvent(this, "clRefreshNeeded", 7);
    }
    cityLedgerService = new CityLedgerService();
    tokenService = new Token();
    /** Booking object; component is hidden when booking.agent is null. */
    booking;
    /** Active language code. */
    language = 'en';
    /** Service-category entries used to populate the transaction form. */
    svcCategories = [];
    /** Folio rows fetched by the parent. */
    folioRows = [];
    /** Loading state driven by the parent fetch. */
    isLoading = false;
    /** Error message driven by the parent fetch. */
    error = null;
    /** Emitted when a mutation (delete / save) completes so the parent can re-fetch. */
    clRefreshNeeded;
    drawerOpen = false;
    deleteTarget = null;
    isDeleting = false;
    editingRow = null;
    async handleDelete() {
        const row = this.deleteTarget;
        if (!row)
            return;
        this.isDeleting = true;
        try {
            await this.cityLedgerService.issueManualCLTx({
                CL_TX_ID: row._raw.CL_TX_ID,
                AGENCY_ID: this.booking.agent.id,
                SERVICE_DATE: row._raw.SERVICE_DATE,
                CL_TX_TYPE_CODE: row._raw.CL_TX_TYPE_CODE ?? '',
                DESCRIPTION: row._raw.DESCRIPTION,
                DEBIT: row._raw.DEBIT,
                CREDIT: row._raw.CREDIT,
                CURRENCY_ID: row._raw.CURRENCY_ID,
                PAY_METHOD_CODE: row._raw.PAY_METHOD_CODE ?? '',
                EXTERNAL_REF: row._raw.EXTERNAL_REF ?? '',
                IS_DELETE: true,
            });
            this.deleteTarget = null;
            this.clRefreshNeeded.emit();
        }
        catch (err) {
            console.error('[ir-booking-city-ledger] delete failed:', err);
        }
        finally {
            this.isDeleting = false;
        }
    }
    get serviceCategoryOptions() {
        return this.svcCategories.map(s => ({ id: s.CODE_NAME, label: s.CODE_VALUE_EN }));
    }
    get bookingOptions() {
        return this.booking?.booking_nbr ? [{ id: this.booking.booking_nbr, label: `#${this.booking.booking_nbr}` }] : [];
    }
    formatAmount(value) {
        if (!value)
            return '—';
        return formatAmount(calendar_data.property?.currency?.symbol, value);
    }
    rowHiddenCategories = new Set(['TBL_BSAD', 'TBL_BSP', 'TBL_BSE']);
    get rows() {
        return this.folioRows?.filter(r => !this.rowHiddenCategories.has(r._raw.REL_ENTITY)) ?? [];
    }
    renderRows() {
        if (this.rows.length === 0) {
            return (h("div", { class: "booking-city-ledger__empty-state" }, h("ir-empty-state", { showIcon: false })));
        }
        return (h("div", { class: "folio-list" }, this.rows.map(row => (h("div", { key: row._rowId, class: "folio-row" }, h("div", { class: "folio-row__header" }, h("div", { class: "folio-row__meta" }, h("ir-cl-status-tag", { transaction: { _rowId: '', ...mapClTxToFolioRow(row._raw), balance: 0 } }), h("span", { class: "folio-row__date" }, hooks(row.serviceDate).format('MMM DD, YYYY'))), h("div", { class: "folio-row__right" }, h("span", { class: "folio-row__amount" }, row.debit !== null && h("span", { class: "is-debit" }, row.debit ? this.formatAmount(row.debit) : ''), row.credit !== null && h("span", { class: "is-credit" }, row.credit ? this.formatAmount(row.credit) : '')), row.status.id !== 'billed' && row._raw.CATEGORY === null && actionableClTypes.has(row._raw.CL_TX_TYPE_CODE) && (h("wa-dropdown", { "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.editingRow = row;
                        this.drawerOpen = true;
                        break;
                    case 'delete':
                        this.deleteTarget = row;
                        break;
                }
            } }, h("wa-button", { size: "small", class: "folio-row__action-trigger", appearance: "plain", slot: "trigger" }, h("wa-icon", { name: "ellipsis-vertical", class: "folio-row__action-trigger-icon" })), h("wa-dropdown-item", { value: "edit" }, h("wa-icon", { slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { value: "delete", variant: "danger" }, h("wa-icon", { slot: "icon", name: "trash" }), "Delete"))))), h("div", { class: 'folio-row-desc_row' }, row.description && h("p", { class: "folio-row__desc" }, row.description)))))));
    }
    render() {
        if (!this.booking?.agent) {
            return h(Host, null);
        }
        return (h(Host, null, h("wa-card", { class: "booking-city-ledger__card" }, h("div", { slot: "header", class: "booking-city-ledger__header-title" }, h("p", { class: "font-size-large p-0 m-0" }, " Agent Folio")), h("wa-tooltip", { for: "booking-city-ledger-add-btn" }, "Add folio entry"), h("ir-custom-button", { slot: "header-actions", id: "booking-city-ledger-add-btn", size: "small", variant: "neutral", appearance: "plain", onClickHandler: () => {
                this.editingRow = null;
                this.drawerOpen = true;
            } }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), this.isLoading ? (h("div", { class: "booking-city-ledger__spinner-wrap" }, h("ir-spinner", null))) : this.error ? (h("p", { class: "booking-city-ledger__error" }, this.error)) : (this.renderRows())), h("ir-city-ledger-transaction-drawer", { open: this.drawerOpen, drawerLabel: this.editingRow ? 'Edit Folio Entry' : 'New Folio Entry', agent: this.booking.agent, booking: this.booking, transaction: this.editingRow?._raw ?? null, serviceCategoryOptions: this.serviceCategoryOptions, bookingOptions: this.bookingOptions, onCloseDrawer: () => {
                this.drawerOpen = false;
                this.editingRow = null;
            }, onTransactionSaved: () => {
                this.drawerOpen = false;
                this.editingRow = null;
                this.clRefreshNeeded.emit();
            } }), h("ir-cl-fiscal-document-preview", { ticket: this.tokenService.getToken(), propertyId: calendar_data?.property?.id }), h("ir-dialog", { label: "Delete Entry", open: !!this.deleteTarget, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!this.isDeleting)
                    this.deleteTarget = null;
            } }, h("p", null, "Are you sure you want to delete this entry? This action cannot be undone."), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => (this.deleteTarget = null) }, "Cancel"), h("ir-custom-button", { size: "medium", variant: "danger", loading: this.isDeleting, onClickHandler: () => this.handleDelete() }, "Delete")))));
    }
    static get style() { return IrBookingCityLedgerStyle0; }
}, [2, "ir-booking-city-ledger", {
        "booking": [16],
        "language": [1],
        "svcCategories": [16],
        "folioRows": [16],
        "isLoading": [4, "is-loading"],
        "error": [1],
        "drawerOpen": [32],
        "deleteTarget": [32],
        "isDeleting": [32],
        "editingRow": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-city-ledger", "ir-air-date-picker", "ir-city-ledger-transaction-drawer", "ir-city-ledger-transaction-form", "ir-cl-adjustment-fields", "ir-cl-credit-note-fields", "ir-cl-debit-note-fields", "ir-cl-fiscal-document-preview", "ir-cl-invoice-select", "ir-cl-opening-balance-fields", "ir-cl-payment-fields", "ir-cl-status-tag", "ir-custom-button", "ir-date-select", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-fd-confirm-dialog", "ir-input", "ir-pdf-viewer", "ir-preview-screen-dialog", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-city-ledger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingCityLedger);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-city-ledger-transaction-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-cl-adjustment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-cl-debit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-cl-fiscal-document-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-cl-invoice-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-cl-opening-balance-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-cl-payment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-pdf-viewer":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingCityLedger as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-city-ledger2.js.map