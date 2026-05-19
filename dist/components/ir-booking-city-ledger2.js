import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as CityLedgerService } from './index6.js';
import { h as hooks } from './moment.js';
import { c as calendar_data } from './calendar-data.js';
import { T as Token } from './Token.js';
import { a as actionableClTypes } from './city-ledger.service.js';
import { f as formatAmount } from './utils.js';
import { d as defineCustomElement$l } from './ir-air-date-picker2.js';
import { d as defineCustomElement$k } from './ir-city-ledger-transaction-drawer2.js';
import { d as defineCustomElement$j } from './ir-city-ledger-transaction-form2.js';
import { d as defineCustomElement$i } from './ir-cl-adjustment-fields2.js';
import { d as defineCustomElement$h } from './ir-cl-credit-note-fields2.js';
import { d as defineCustomElement$g } from './ir-cl-debit-note-fields2.js';
import { d as defineCustomElement$f } from './ir-cl-fiscal-document-preview2.js';
import { d as defineCustomElement$e } from './ir-cl-invoice-select2.js';
import { d as defineCustomElement$d } from './ir-cl-opening-balance-fields2.js';
import { d as defineCustomElement$c } from './ir-cl-payment-fields2.js';
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

const irBookingCityLedgerCss = ".sc-ir-booking-city-ledger-h{display:block;width:100%;min-width:0;--ir-cell-padding:0.4rem 0.75rem}.booking-city-ledger__card.sc-ir-booking-city-ledger{width:100%}.booking-city-ledger__card.sc-ir-booking-city-ledger::part(body){overflow-x:auto;padding:0}.booking-city-ledger__header-title.sc-ir-booking-city-ledger{display:flex;align-items:center;gap:0.5rem}.booking-city-ledger__agent-name.sc-ir-booking-city-ledger{font-weight:400;color:var(--wa-color-neutral-600, #6b7280);font-size:var(--wa-font-size-s, 0.8125rem)}.booking-city-ledger__spinner-wrap.sc-ir-booking-city-ledger{display:flex;justify-content:center;align-items:center;padding:2rem var(--wa-card-padding, 1rem)}.booking-city-ledger__error.sc-ir-booking-city-ledger{margin:0;padding:1rem var(--wa-card-padding, 1rem);text-align:center;font-size:0.875rem;color:var(--wa-color-neutral-500, #6b7280)}.booking-city-ledger__error.sc-ir-booking-city-ledger{color:var(--wa-color-danger-600, #dc2626)}.booking-city-ledger__table-wrap.sc-ir-booking-city-ledger{min-width:100%}.text-right.sc-ir-booking-city-ledger{text-align:right !important}.is-debit.sc-ir-booking-city-ledger{color:var(--wa-color-danger-fill-loud) !important;font-weight:700}.is-credit.sc-ir-booking-city-ledger{color:var(--wa-color-success-fill-loud) !important;font-weight:700}.booking-city-ledger__cell-date.sc-ir-booking-city-ledger{white-space:nowrap;font-variant-numeric:tabular-nums}.booking-city-ledger__empty-state.sc-ir-booking-city-ledger{padding:1.5rem}@media (min-width: 1280px){.booking-city-ledger__cell-desc.sc-ir-booking-city-ledger{width:100%;white-space:normal !important;word-break:break-word}}";
const IrBookingCityLedgerStyle0 = irBookingCityLedgerCss;

const tableCss = ".sc-ir-booking-city-ledger-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-booking-city-ledger td.sc-ir-booking-city-ledger{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-booking-city-ledger{overflow-x:auto}.table.sc-ir-booking-city-ledger td.sc-ir-booking-city-ledger{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-booking-city-ledger tbody.sc-ir-booking-city-ledger tr.sc-ir-booking-city-ledger:last-child>td.sc-ir-booking-city-ledger{border-bottom:0 !important}.table.sc-ir-booking-city-ledger thead.sc-ir-booking-city-ledger th.sc-ir-booking-city-ledger{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-booking-city-ledger thead.sc-ir-booking-city-ledger th.sc-ir-booking-city-ledger{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-booking-city-ledger .empty-row.sc-ir-booking-city-ledger{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-booking-city-ledger{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-booking-city-ledger td.sc-ir-booking-city-ledger{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-booking-city-ledger td.sc-ir-booking-city-ledger{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-city-ledger,.ir-table-row.sc-ir-booking-city-ledger{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-booking-city-ledger{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-booking-city-ledger td.sc-ir-booking-city-ledger{transition-duration:var(--wa-transition-fast)}.table.sc-ir-booking-city-ledger thead.sc-ir-booking-city-ledger th.sortable.sc-ir-booking-city-ledger{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-booking-city-ledger thead.sc-ir-booking-city-ledger th.sortable.sc-ir-booking-city-ledger:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-booking-city-ledger thead.sc-ir-booking-city-ledger th.sortable.sc-ir-booking-city-ledger:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-booking-city-ledger:hover td.sc-ir-booking-city-ledger{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-booking-city-ledger:hover td.sc-ir-booking-city-ledger{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-booking-city-ledger:active td.sc-ir-booking-city-ledger{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-booking-city-ledger:hover td.sc-ir-booking-city-ledger{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-booking-city-ledger:active td.sc-ir-booking-city-ledger{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-booking-city-ledger:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-booking-city-ledger svg.sc-ir-booking-city-ledger{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-booking-city-ledger{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-booking-city-ledger,.data-table.sc-ir-booking-city-ledger{height:100%}";
const IrBookingCityLedgerStyle1 = tableCss;

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
    renderTable() {
        if (this.folioRows.length === 0) {
            return (h("div", { class: "booking-city-ledger__empty-state" }, h("ir-empty-state", null)));
        }
        return (h("div", { class: "table--container booking-city-ledger__table-wrap" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, "Status"), h("th", null, "Date"), h("th", { class: "booking-city-ledger__cell-desc" }, "Description"), h("th", { class: "text-right" }, "Amount"), h("th", null))), h("tbody", null, this.folioRows.map(row => (h("tr", { key: row._rowId, class: "ir-table-row" }, h("td", null, h("wa-tag", { size: "small", variant: row.status.variant }, row.status.label, row.status.id === 'billed' && h("wa-icon", { name: "lock" }))), h("td", { class: "booking-city-ledger__cell-date" }, hooks(row.serviceDate).format('MMM DD, YYYY')), h("td", { class: "booking-city-ledger__cell-desc" }, row.description || '—'), h("td", { class: "text-right " }, row.debit !== null && h("span", { class: 'is-debit' }, row.debit ? this.formatAmount(row.debit) : ''), row.credit !== null && h("span", { class: 'is-credit' }, row.credit ? this.formatAmount(row.credit) : '')), h("td", null, row.status.id !== 'billed' && row._raw.CATEGORY === null && actionableClTypes.has(row._raw.CL_TX_TYPE_CODE) && (h("wa-dropdown", { "onwa-hide": e => {
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
            } }, h("div", { slot: "trigger" }, h("ir-custom-button", { appearance: "plain" }, h("wa-icon", { name: "ellipsis-vertical" }))), h("wa-dropdown-item", { value: "edit" }, h("wa-icon", { slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { value: "delete", variant: "danger" }, h("wa-icon", { slot: "icon", name: "trash" }), "Delete")))))))))));
    }
    render() {
        if (!this.booking?.agent) {
            return h(Host, null);
        }
        return (h(Host, null, h("wa-card", { class: "booking-city-ledger__card" }, h("div", { slot: "header", class: "booking-city-ledger__header-title" }, h("p", { class: "font-size-large p-0 m-0" }, " Agent Folio")), h("wa-tooltip", { for: "booking-city-ledger-add-btn" }, "Add folio entry"), h("ir-custom-button", { slot: "header-actions", id: "booking-city-ledger-add-btn", size: "small", variant: "neutral", appearance: "plain", onClickHandler: () => {
                this.editingRow = null;
                this.drawerOpen = true;
            } }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), this.isLoading ? (h("div", { class: "booking-city-ledger__spinner-wrap" }, h("ir-spinner", null))) : this.error ? (h("p", { class: "booking-city-ledger__error" }, this.error)) : (this.renderTable())), h("ir-city-ledger-transaction-drawer", { open: this.drawerOpen, drawerLabel: this.editingRow ? 'Edit Folio Entry' : 'New Folio Entry', agent: this.booking.agent, booking: this.booking, transaction: this.editingRow?._raw ?? null, serviceCategoryOptions: this.serviceCategoryOptions, bookingOptions: this.bookingOptions, onCloseDrawer: () => {
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
    static get style() { return IrBookingCityLedgerStyle0 + IrBookingCityLedgerStyle1; }
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
    const components = ["ir-booking-city-ledger", "ir-air-date-picker", "ir-city-ledger-transaction-drawer", "ir-city-ledger-transaction-form", "ir-cl-adjustment-fields", "ir-cl-credit-note-fields", "ir-cl-debit-note-fields", "ir-cl-fiscal-document-preview", "ir-cl-invoice-select", "ir-cl-opening-balance-fields", "ir-cl-payment-fields", "ir-custom-button", "ir-date-select", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-fd-confirm-dialog", "ir-input", "ir-pdf-viewer", "ir-preview-screen-dialog", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-city-ledger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingCityLedger);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-city-ledger-transaction-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-cl-adjustment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-cl-debit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-cl-fiscal-document-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-cl-invoice-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-cl-opening-balance-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-cl-payment-fields":
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