import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as createColumnHelper, f as flexRender, u as useTable, g as getCoreRowModel, a as getSortedRowModel, b as getGroupedRowModel, d as getExpandedRowModel } from './useTable.js';
import { h as hooks } from './moment.js';
import { a as actionableClTypes } from './city-ledger.service.js';
import { d as defineCustomElement$1K } from './igl-application-info2.js';
import { d as defineCustomElement$1J } from './igl-rate-plan2.js';
import { d as defineCustomElement$1I } from './igl-room-type2.js';
import { d as defineCustomElement$1H } from './ir-agent-billing2.js';
import { d as defineCustomElement$1G } from './ir-air-date-picker2.js';
import { d as defineCustomElement$1F } from './ir-applicable-policies2.js';
import { d as defineCustomElement$1E } from './ir-arrival-time-dialog2.js';
import { d as defineCustomElement$1D } from './ir-assignment-toggle-dialog2.js';
import { d as defineCustomElement$1C } from './ir-billing2.js';
import { d as defineCustomElement$1B } from './ir-billing-drawer2.js';
import { d as defineCustomElement$1A } from './ir-booking-assign-items2.js';
import { d as defineCustomElement$1z } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$1y } from './ir-booking-city-ledger2.js';
import { d as defineCustomElement$1x } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$1w } from './ir-booking-company-form2.js';
import { d as defineCustomElement$1v } from './ir-booking-details2.js';
import { d as defineCustomElement$1u } from './ir-booking-details-drawer2.js';
import { d as defineCustomElement$1t } from './ir-booking-editor2.js';
import { d as defineCustomElement$1s } from './ir-booking-editor-drawer2.js';
import { d as defineCustomElement$1r } from './ir-booking-editor-form2.js';
import { d as defineCustomElement$1q } from './ir-booking-editor-guest-form2.js';
import { d as defineCustomElement$1p } from './ir-booking-editor-header2.js';
import { d as defineCustomElement$1o } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$1n } from './ir-booking-guarantee2.js';
import { d as defineCustomElement$1m } from './ir-booking-header2.js';
import { d as defineCustomElement$1l } from './ir-booking-pricing-drawer2.js';
import { d as defineCustomElement$1k } from './ir-booking-pricing-form2.js';
import { d as defineCustomElement$1j } from './ir-booking-rooms2.js';
import { d as defineCustomElement$1i } from './ir-booking-source-editor-dialog2.js';
import { d as defineCustomElement$1h } from './ir-booking-source-editor-form2.js';
import { d as defineCustomElement$1g } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$1f } from './ir-button2.js';
import { d as defineCustomElement$1e } from './ir-checkout-dialog2.js';
import { d as defineCustomElement$1d } from './ir-city-ledger-fiscal-documents-table2.js';
import { d as defineCustomElement$1c } from './ir-city-ledger-transaction-drawer2.js';
import { d as defineCustomElement$1b } from './ir-city-ledger-transaction-form2.js';
import { d as defineCustomElement$1a } from './ir-cl-adjustment-fields2.js';
import { d as defineCustomElement$19 } from './ir-cl-credit-note-fields2.js';
import { d as defineCustomElement$18 } from './ir-cl-debit-note-fields2.js';
import { d as defineCustomElement$17 } from './ir-cl-fiscal-document-preview2.js';
import { d as defineCustomElement$16 } from './ir-cl-invoice-dialog2.js';
import { d as defineCustomElement$15 } from './ir-cl-invoice-form2.js';
import { d as defineCustomElement$14 } from './ir-cl-invoice-select2.js';
import { d as defineCustomElement$13 } from './ir-cl-opening-balance-fields2.js';
import { d as defineCustomElement$12 } from './ir-cl-payment-fields2.js';
import { d as defineCustomElement$11 } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$10 } from './ir-country-picker2.js';
import { d as defineCustomElement$$ } from './ir-custom-button2.js';
import { d as defineCustomElement$_ } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$Z } from './ir-custom-date-range2.js';
import { d as defineCustomElement$Y } from './ir-date-range2.js';
import { d as defineCustomElement$X } from './ir-date-range-filter2.js';
import { d as defineCustomElement$W } from './ir-date-select2.js';
import { d as defineCustomElement$V } from './ir-date-view2.js';
import { d as defineCustomElement$U } from './ir-dialog2.js';
import { d as defineCustomElement$T } from './ir-drawer2.js';
import { d as defineCustomElement$S } from './ir-empty-state2.js';
import { d as defineCustomElement$R } from './ir-events-log2.js';
import { d as defineCustomElement$Q } from './ir-extra-service2.js';
import { d as defineCustomElement$P } from './ir-extra-service-config2.js';
import { d as defineCustomElement$O } from './ir-extra-service-config-form2.js';
import { d as defineCustomElement$N } from './ir-extra-services2.js';
import { d as defineCustomElement$M } from './ir-fd-confirm-dialog2.js';
import { d as defineCustomElement$L } from './ir-guest-billing2.js';
import { d as defineCustomElement$K } from './ir-guest-info-drawer2.js';
import { d as defineCustomElement$J } from './ir-guest-info-form2.js';
import { d as defineCustomElement$I } from './ir-hold-transaction-dialog2.js';
import { d as defineCustomElement$H } from './ir-icons2.js';
import { d as defineCustomElement$G } from './ir-input2.js';
import { d as defineCustomElement$F } from './ir-input-cell2.js';
import { d as defineCustomElement$E } from './ir-input-text2.js';
import { d as defineCustomElement$D } from './ir-interceptor2.js';
import { d as defineCustomElement$C } from './ir-invoice2.js';
import { d as defineCustomElement$B } from './ir-invoice-form2.js';
import { d as defineCustomElement$A } from './ir-label2.js';
import { d as defineCustomElement$z } from './ir-mobile-input2.js';
import { d as defineCustomElement$y } from './ir-otp2.js';
import { d as defineCustomElement$x } from './ir-otp-modal2.js';
import { d as defineCustomElement$w } from './ir-pagination2.js';
import { d as defineCustomElement$v } from './ir-payment-details2.js';
import { d as defineCustomElement$u } from './ir-payment-folio2.js';
import { d as defineCustomElement$t } from './ir-payment-folio-form2.js';
import { d as defineCustomElement$s } from './ir-payment-item2.js';
import { d as defineCustomElement$r } from './ir-payment-summary2.js';
import { d as defineCustomElement$q } from './ir-payments-folio2.js';
import { d as defineCustomElement$p } from './ir-pdf-viewer2.js';
import { d as defineCustomElement$o } from './ir-picker2.js';
import { d as defineCustomElement$n } from './ir-picker-item2.js';
import { d as defineCustomElement$m } from './ir-pickup2.js';
import { d as defineCustomElement$l } from './ir-pickup-form2.js';
import { d as defineCustomElement$k } from './ir-pickup-view2.js';
import { d as defineCustomElement$j } from './ir-pms-logs2.js';
import { d as defineCustomElement$i } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$h } from './ir-print-room2.js';
import { d as defineCustomElement$g } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$f } from './ir-printing-label2.js';
import { d as defineCustomElement$e } from './ir-printing-pickup2.js';
import { d as defineCustomElement$d } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$c } from './ir-reservation-information2.js';
import { d as defineCustomElement$b } from './ir-room2.js';
import { d as defineCustomElement$a } from './ir-room-guests2.js';
import { d as defineCustomElement$9 } from './ir-room-guests-form2.js';
import { d as defineCustomElement$8 } from './ir-service-assignee-select2.js';
import { d as defineCustomElement$7 } from './ir-spinner2.js';
import { d as defineCustomElement$6 } from './ir-toast2.js';
import { d as defineCustomElement$5 } from './ir-toast-alert2.js';
import { d as defineCustomElement$4 } from './ir-toast-provider2.js';
import { d as defineCustomElement$3 } from './ir-unit-tag2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

const irCityLedgerFolioTableCss = ".sc-ir-city-ledger-folio-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-city-ledger-folio-table{overflow-x:auto}.table.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table tr.sc-ir-city-ledger-folio-table:last-child>td.sc-ir-city-ledger-folio-table{border-bottom:0 !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-fill-normal) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-city-ledger-folio-table .empty-row.sc-ir-city-ledger-folio-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-folio-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-folio-table,.ir-table-row.sc-ir-city-ledger-folio-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-folio-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-folio-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-folio-table svg.sc-ir-city-ledger-folio-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-city-ledger-folio-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table{height:100%}.sc-ir-city-ledger-folio-table-h{display:flex;flex-direction:column;border-radius:0.75rem;overflow:hidden;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);background-color:var(--wa-color-surface-default, #fff);box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.05),\n    0 1px 2px -1px rgb(0 0 0 / 0.05)}.booking_heading.sc-ir-city-ledger-folio-table .heading_container.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between;width:100%;gap:0.5rem}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--between.sc-ir-city-ledger-folio-table{justify-content:space-between}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.grouped-cell.sc-ir-city-ledger-folio-table{padding-top:0 !important;padding-bottom:0 !important}.data-table--pagination.sc-ir-city-ledger-folio-table{margin-top:auto !important}.header-button.sc-ir-city-ledger-folio-table::part(start){display:none}.header-button.sc-ir-city-ledger-folio-table::part(base){justify-content:space-between;color:var(--wa-color-text-subtle, #6b7280);height:auto !important;width:auto !important;padding:0.25rem;border-radius:0.25rem;transition:color 0.15s ease,\n    background-color 0.15s ease}.header-button.sc-ir-city-ledger-folio-table:hover::part(base){color:var(--wa-color-text-normal);background-color:var(--wa-color-neutral-fill-quiet, #f3f4f6)}.input-column.sc-ir-city-ledger-folio-table{padding:0 !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.input-column.sc-ir-city-ledger-folio-table{--input-width:150px;padding:0 !important;width:var(--input-width);max-width:var(--input-width);box-sizing:border-box}.group-expander.sc-ir-city-ledger-folio-table{height:100%}.group-expander.sc-ir-city-ledger-folio-table::part(base){font-size:1rem;height:100%;align-items:center;width:auto}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-right:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb) !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table:last-child,.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table:last-child{border-right:0 !important}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sticky-column.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{border-right:0 !important}.sticky-column.sc-ir-city-ledger-folio-table::after{content:'';position:absolute;top:0;right:0;width:1px;height:100%;background-color:var(--wa-color-neutral-border-quiet, #e5e7eb);pointer-events:none}.folio-table__empty-state.sc-ir-city-ledger-folio-table,.folio-table__loading.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;flex:1;min-height:200px;color:var(--wa-color-text-subtle, #6b7280);font-size:0.875rem}.folio-table__date-prompt.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;flex:1;padding:3rem 2rem;text-align:center}.folio-table__date-prompt-icon.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.folio-table__date-prompt-title.sc-ir-city-ledger-folio-table{margin:0;font-size:0.9375rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.folio-table__date-prompt-subtitle.sc-ir-city-ledger-folio-table{margin:0;font-size:0.8125rem;color:var(--wa-color-text-subtle, #6b7280);max-width:28rem;line-height:1.5}.folio-table__no-results.sc-ir-city-ledger-folio-table{text-align:center;color:var(--wa-color-text-quiet, #9ca3af);font-size:0.875rem;padding:2rem 1rem}.folio-table__select-col.sc-ir-city-ledger-folio-table{width:40px !important;max-width:40px !important;min-width:40px !important;text-align:center !important;padding-inline:0.5rem !important}.folio-table__checkbox.sc-ir-city-ledger-folio-table{cursor:pointer;width:1rem;height:1rem;accent-color:var(--wa-color-brand-fill-loud)}.folio-table__row--selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-brand-fill-quiet, #eff6ff) !important}.folio-table__invoice-bar.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);border-bottom:1px solid var(--wa-color-brand-border-quiet, #bfdbfe);font-size:0.875rem;flex-wrap:wrap}.folio-table__invoice-bar-text.sc-ir-city-ledger-folio-table{display:flex;align-items:center;color:var(--wa-color-brand-on-quiet);font-weight:500;flex:1}.folio-table__balance.sc-ir-city-ledger-folio-table{font-variant-numeric:tabular-nums;font-weight:500;display:block;text-align:right;padding:var(--ir-cell-padding, 0.5rem 1rem)}.folio-table__balance--negative.sc-ir-city-ledger-folio-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.balance-row__label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;font-size:0.8125rem}.cell--align-end.sc-ir-city-ledger-folio-table{text-align:right !important}.cell--align-center.sc-ir-city-ledger-folio-table{text-align:center}.folio-table__status-cell.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between}.folio-table__col-label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.5rem}.folio-table__col-label--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.folio-table__col-label--center.sc-ir-city-ledger-folio-table{justify-content:center}.folio-table__description.sc-ir-city-ledger-folio-table{display:block;width:100%}.folio-table__heading--actions.sc-ir-city-ledger-folio-table,.folio-table__cell--actions.sc-ir-city-ledger-folio-table{text-align:center !important}.fiscal-table__action-trigger.--placeholder.sc-ir-city-ledger-folio-table{height:calc(24px + 0.02rem)}.fiscal-table__action-trigger.sc-ir-city-ledger-folio-table::part(base){width:24px;height:24px}.balance-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;border-color:var(--wa-color-brand-border-quiet) !important;padding:0.75rem 1rem !important}.balance-row.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important}";
const IrCityLedgerFolioTableStyle0 = irCityLedgerFolioTableCss;

const DATE_DISPLAY_FORMAT = 'MMM DD, YYYY';
const DATE_INPUT_FORMAT = 'YYYY-MM-DD';
const IrCityLedgerFolioTable = /*@__PURE__*/ proxyCustomElement(class IrCityLedgerFolioTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.pageChange = createEvent(this, "pageChange", 7);
        this.generateInvoice = createEvent(this, "generateInvoice", 7);
        this.fetchRequested = createEvent(this, "fetchRequested", 7);
        this.editEntry = createEvent(this, "editEntry", 7);
        this.deleteEntry = createEvent(this, "deleteEntry", 7);
    }
    handleAction(value, row) {
        switch (value) {
            case 'hold-transaction':
                this.holdTargetRow = row;
                this.holdDialogRef.openModal();
                break;
            case 'edit-transaction':
                this.editEntry.emit(row._raw);
                break;
            case 'delete-transaction':
                this.deleteEntry.emit(row._raw);
                break;
        }
    }
    // ─── Props ───────────────────────────────────────────────────────────────
    agentId = null;
    propertyId;
    ticket;
    language = 'en';
    data = [];
    isLoading = false;
    startingBalance = 0;
    closingBalance = 0;
    totalCount = 0;
    pageIndex = 0;
    pageSize = 25;
    fromDate = '';
    toDate = '';
    hasFetched = false;
    currencySymbol = '$';
    currencies = [];
    hideBalanceInfo = false;
    // ─── State ───────────────────────────────────────────────────────────────
    tableState = {};
    selectedRowIds = new Set();
    holdTargetRow = null;
    bookingDrawerOpen = false;
    selectedBookingNumber = null;
    // ─── Events ──────────────────────────────────────────────────────────────
    pageChange;
    generateInvoice;
    fetchRequested;
    editEntry;
    deleteEntry;
    // ─── Private fields ──────────────────────────────────────────────────────
    columnHelper = createColumnHelper();
    pageSizes = [25, 50, 100];
    holdDialogRef;
    // ─── Utilities ───────────────────────────────────────────────────────────
    formatDate(date) {
        if (!date)
            return '';
        const m = hooks(date, [DATE_INPUT_FORMAT, hooks.ISO_8601], true);
        return m.isValid() ? m.format(DATE_DISPLAY_FORMAT) : date;
    }
    // ─── Selection ────────────────────────────────────────────────────────────
    get selectedUnbilledRows() {
        return this.data.filter(row => this.selectedRowIds.has(row._rowId) && row.status?.label === 'Unbilled');
    }
    handleHoldToggled(rowId, newIsHold) {
        // Note: optimistic local update — parent will re-fetch on next search
        const updatedData = this.data.map(row => {
            if (row._rowId !== rowId)
                return row;
            const updatedRaw = { ...row._raw, IS_HOLD: newIsHold };
            const status = newIsHold ? { id: 'held', label: 'Held', variant: 'warning', description: '' } : { id: 'unbilled', label: 'Unbilled', variant: 'neutral', description: '' };
            return { ...row, _raw: updatedRaw, status };
        });
        // Trigger re-render by reassigning (Stencil tracks Prop changes via reference)
        // Since data is a Prop we can't mutate it — we use a local state for optimistic UI
        this._localDataOverride = updatedData;
        this.holdTargetRow = null;
    }
    // Local override for optimistic hold/revert updates
    _localDataOverride = null;
    onDataChange() {
        this._localDataOverride = null;
    }
    get displayData() {
        return this._localDataOverride ?? this.data;
    }
    // ─── Currency helpers ─────────────────────────────────────────────────────
    getSymbol(currencyId) {
        const match = this.currencies.find(c => c.id === currencyId);
        return match?.symbol ?? this.currencySymbol;
    }
    // ─── Column definitions ──────────────────────────────────────────────────
    columns = [
        this.columnHelper.accessor(row => row.status.label, {
            id: 'status',
            header: 'Status',
            size: 200,
            cell: info => (h("div", { class: "folio-table__status-cell" }, h("ir-cl-status-tag", { transaction: info.row.original }))),
            enableGrouping: true,
            enableSorting: false,
        }),
        this.columnHelper.accessor('serviceDate', {
            enableSorting: false,
            header: 'Service Date',
            cell: info => this.formatDate(info.getValue()),
            aggregatedCell: info => this.formatDate(info.getValue()),
            enableGrouping: false,
            aggregationFn: (columnId, leafRows) => {
                if (!leafRows.length)
                    return undefined;
                const dates = leafRows
                    .map(row => row.getValue(columnId))
                    .filter(Boolean)
                    .map(date => new Date(date));
                if (!dates.length)
                    return undefined;
                const latest = new Date(Math.max(...dates.map(d => d.getTime())));
                return latest.toISOString().split('T')[0];
            },
        }),
        this.columnHelper.accessor('bookingNumber', {
            header: 'Booking #',
            cell: info => {
                const val = info.getValue();
                if (!val)
                    return null;
                return (h("ir-custom-button", { link: true, onClickHandler: () => {
                        this.selectedBookingNumber = String(val);
                        this.bookingDrawerOpen = true;
                    } }, String(val)));
            },
            enableGrouping: true,
            enableSorting: false,
        }),
        this.columnHelper.accessor('description', {
            header: 'Description',
            cell: info => h("span", { class: "folio-table__description" }, info.getValue()),
            enableSorting: false,
            enableGrouping: true,
        }),
        this.columnHelper.accessor('docNumber', {
            header: 'Fiscal Doc',
            cell: info => h("span", null, info.getValue()),
            enableSorting: false,
            enableGrouping: true,
        }),
        this.columnHelper.accessor('debit', {
            header: 'Debit',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (h("ir-input-cell", { disabled: true, mask: 'price', value: info.getValue().toString() }, h("span", { slot: "start" }, symbol), h("span", null, info.getValue() ? formatAmount(symbol, info.getValue()) : '')));
            },
            aggregatedCell: info => h("span", { style: { padding: 'var(--ir-cell-padding)' } }, formatAmount(this.currencySymbol, Number(info.getValue()))),
            aggregationFn: 'sum',
            enableGrouping: false,
            enableSorting: false,
        }),
        this.columnHelper.accessor('credit', {
            header: 'Credit',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (h("ir-input-cell", { mask: 'price', disabled: true, value: info.getValue().toString() }, h("span", { slot: "start" }, symbol), h("span", null, info.getValue() ? formatAmount(symbol, info.getValue()) : '')));
            },
            aggregatedCell: info => h("span", { style: { padding: 'var(--ir-cell-padding)' } }, formatAmount(this.currencySymbol, Number(info.getValue()))),
            aggregationFn: 'sum',
            enableSorting: false,
            enableGrouping: false,
        }),
        this.columnHelper.accessor('balance', {
            header: 'Balance',
            cell: info => {
                const symbol = this.getSymbol(info.row.original._raw.CURRENCY_ID);
                return (h("ir-input-cell", { disabled: true, mask: 'price', value: info.getValue().toString() }, h("span", { slot: "start" }, symbol), h("span", null, info.getValue() ? formatAmount(symbol, +info.getValue()) : '')));
            },
            enableSorting: false,
            enableGrouping: false,
        }),
        this.columnHelper.display({
            id: 'actions',
            header: 'Actions',
            size: 48,
            cell: info => {
                const row = info.row.original;
                if (row._raw.IS_LOCKED)
                    return h("div", { class: 'fiscal-table__action-trigger --placeholder' });
                const canEditOrDelete = actionableClTypes.has(row._raw.CL_TX_TYPE_CODE) && !row._raw.CATEGORY;
                return (h("wa-dropdown", { "onwa-hide": e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }, "onwa-select": (e) => {
                        this.handleAction(e.detail.item.value, row);
                    } }, h("wa-button", { slot: "trigger", size: "small", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })), h("wa-dropdown-item", { value: "hold-transaction" }, row._raw.IS_HOLD ? 'Revert to Unbilled' : 'Hold entry'), canEditOrDelete && h("wa-dropdown-item", { value: "edit-transaction" }, "Edit"), canEditOrDelete && (h("wa-dropdown-item", { value: "delete-transaction", variant: "danger" }, "Delete"))));
            },
            enableSorting: false,
            enableGrouping: false,
        }),
    ];
    // ─── Table state ─────────────────────────────────────────────────────────
    onTableStateChange = (updater) => {
        const nextState = typeof updater === 'function' ? updater(this.tableState) : updater;
        if (JSON.stringify(this.tableState) === JSON.stringify(nextState))
            return;
        this.tableState = nextState;
    };
    renderCell = (cell) => {
        if (cell.getIsGrouped()) {
            return (h("wa-button", { appearance: "plain", size: "small", class: "group-expander", onClick: () => cell.row.toggleExpanded() }, h("wa-icon", { style: { fontSize: '0.875rem' }, slot: "start", name: cell.row.getIsExpanded() ? 'chevron-down' : 'chevron-up' }), flexRender(cell.column.columnDef.cell, cell.getContext()), " ", h("span", { slot: "end" }, "(", cell.row.subRows.length, ")")));
        }
        if (cell.getIsAggregated()) {
            return flexRender(cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell, cell.getContext());
        }
        if (cell.getIsPlaceholder())
            return null;
        return flexRender(cell.column.columnDef.cell, cell.getContext());
    };
    // ─── Render helpers ──────────────────────────────────────────────────────
    renderTableHead(table) {
        return (h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => {
            const canSort = header.column.getCanSort();
            const canGroup = header.column.getCanGroup();
            // const isGrouped = header.column.getIsGrouped();
            // const sortDirection = header.column.getIsSorted();
            const isNumericCol = ['debit', 'credit', 'balance'].includes(header.column.id);
            return (h("th", { key: header.id, class: {
                    'booking_heading': !header.isPlaceholder,
                    'cell--align-end': isNumericCol,
                    'cell--align-center': header.column.id === 'select',
                    'folio-table__heading--actions': header.column.id === 'actions',
                    'sticky-column': header.column.id === 'status',
                    'folio-table__select-col': header.column.id === 'select',
                }, style: header.column.id === 'bookingNumber' ? { paddingInline: '0' } : undefined }, !header.isPlaceholder && (h("div", { class: {
                    'heading_container': true,
                    'heading_container--between': canSort || canGroup,
                    'heading_container--end': isNumericCol,
                } }, h("div", { class: {
                    'folio-table__col-label': true,
                    'folio-table__col-label--end': isNumericCol,
                    'folio-table__col-label--center': header.column.id === 'select',
                } }, h("span", null, flexRender(header.column.columnDef.header, header.getContext())))))));
        }))))));
    }
    renderStartingBalanceRow() {
        return (h("tr", { class: "ir-table-row balance-row balance-row--start" }, h("td", { class: "sticky-column" }), h("td", null, this.formatDate(this.fromDate)), h("td", null), h("td", null, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Starting Balance"), h("td", null), h("td", { class: "cell--align-end" }, this.startingBalance >= 0 ? formatAmount(this.currencySymbol, this.startingBalance) : ''), h("td", { class: "cell--align-end" }, this.startingBalance < 0 ? formatAmount(this.currencySymbol, this.startingBalance) : ''), h("td", { class: "cell--align-end" }, formatAmount(this.currencySymbol, this.startingBalance)), h("td", null)));
    }
    renderEndingBalanceRow() {
        return (h("tr", { class: "ir-table-row balance-row balance-row--end" }, h("td", { class: "sticky-column" }), h("td", null, this.formatDate(this.toDate)), h("td", null), h("td", null, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Ending Balance"), h("td", null), h("td", { class: "cell--align-end" }, this.closingBalance >= 0 ? formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? '-' : '', formatAmount(this.currencySymbol, Math.abs(this.closingBalance))), h("td", null)));
    }
    renderDataRows(table) {
        const rows = table.getRowModel().rows;
        if (rows.length === 0) {
            return (h("tr", null, h("td", { colSpan: this.columns.length + 1, class: "empty-row" }, h("ir-empty-state", null))));
        }
        return rows.map(row => {
            const isSelected = this.selectedRowIds.has(row.original._rowId);
            return (h("tr", { key: row.id, class: { 'ir-table-row': true, 'folio-table__row--selected': isSelected } }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                    'cell--align-end': ['debit', 'credit', 'balance'].includes(cell.column.id),
                    'cell--align-center': cell.column.id === 'select',
                    'sticky-column': cell.column.id === 'status',
                    'input-column': ['debit', 'credit', 'balance'].includes(cell.column.id),
                    'grouped-cell': cell.getIsGrouped(),
                    'folio-table__cell--actions': cell.column.id === 'actions',
                    'folio-table__select-col': cell.column.id === 'select',
                } }, this.renderCell(cell))))));
        });
    }
    // ─── Render ───────────────────────────────────────────────────────────────
    render() {
        if (!this.agentId) {
            return (h(Host, null, h("div", { class: "folio-table__empty-state" }, h("wa-icon", { name: "building-columns", style: { fontSize: '2.5rem', opacity: '0.3' } }), h("p", null, "Select an agent to view the folio ledger."))));
        }
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (h(Host, null, h("div", { class: "folio-table__date-prompt" }, h("div", { class: "folio-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "folio-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (h("wa-animation", { play: true, iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Transactions"))))));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "folio-table__loading" }, h("ir-spinner", null))));
        }
        const visibleColumns = this.hideBalanceInfo ? this.columns.filter(c => c.accessorKey !== 'balance') : this.columns;
        const table = useTable({
            data: this.displayData,
            columns: visibleColumns,
            state: this.tableState,
            enableGrouping: false,
            onStateChange: this.onTableStateChange,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
            getGroupedRowModel: getGroupedRowModel(),
            getExpandedRowModel: getExpandedRowModel(),
        });
        const total = this.totalCount;
        const pageCount = Math.ceil(total / this.pageSize);
        const showingFrom = total ? this.pageIndex * this.pageSize + 1 : 0;
        const showingTo = total ? Math.min(this.pageIndex * this.pageSize + this.displayData.length, total) : 0;
        const hasUnbilledSelected = this.selectedUnbilledRows.length > 0;
        return (h(Host, null, hasUnbilledSelected && (h("div", { class: "folio-table__invoice-bar" }, h("span", { class: "folio-table__invoice-bar-text" }, h("wa-icon", { name: "file-invoice", style: { marginRight: '0.375rem' } }), this.selectedUnbilledRows.length, " unbilled item", this.selectedUnbilledRows.length !== 1 ? 's' : '', " selected"), h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.generateInvoice.emit(this.selectedUnbilledRows) }, h("wa-icon", { slot: "start", name: "file-invoice-dollar" }), "Generate Invoice"), h("ir-custom-button", { size: "small", variant: "neutral", appearance: "outlined", onClickHandler: () => (this.selectedRowIds = new Set()) }, "Clear Selection"))), h("div", { class: "table--container" }, h("table", { class: "table data-table" }, this.renderTableHead(table), h("tbody", null, !this.hideBalanceInfo && this.renderStartingBalanceRow(), this.renderDataRows(table), !this.hideBalanceInfo && this.renderEndingBalanceRow()))), h("ir-pagination", { class: "data-table--pagination", total: total, pages: pageCount, pageSize: this.pageSize, currentPage: this.pageIndex + 1, allowPageSizeChange: true, showing: { from: showingFrom, to: showingTo }, pageSizes: this.pageSizes, recordLabel: '', onPageChange: (event) => {
                event.stopPropagation();
                this.pageChange.emit({ pageIndex: event.detail.currentPage - 1, pageSize: this.pageSize });
            }, onPageSizeChange: (event) => {
                event.stopPropagation();
                if (event.detail.pageSize) {
                    this.pageChange.emit({ pageIndex: 0, pageSize: event.detail.pageSize });
                }
            } }), h("ir-hold-transaction-dialog", { row: this.holdTargetRow, currencySymbol: this.currencySymbol, ref: el => (this.holdDialogRef = el), onHoldToggled: e => this.handleHoldToggled(e.detail.rowId, e.detail.newIsHold) }), h("ir-booking-details-drawer", { open: this.bookingDrawerOpen, propertyId: this.propertyId, ticket: this.ticket, language: this.language, bookingNumber: this.selectedBookingNumber, onBookingDetailsDrawerClosed: () => (this.bookingDrawerOpen = false) })));
    }
    static get watchers() { return {
        "data": ["onDataChange"]
    }; }
    static get style() { return IrCityLedgerFolioTableStyle0; }
}, [2, "ir-city-ledger-folio-table", {
        "agentId": [2, "agent-id"],
        "propertyId": [2, "property-id"],
        "ticket": [1],
        "language": [1],
        "data": [16],
        "isLoading": [4, "is-loading"],
        "startingBalance": [2, "starting-balance"],
        "closingBalance": [2, "closing-balance"],
        "totalCount": [2, "total-count"],
        "pageIndex": [2, "page-index"],
        "pageSize": [2, "page-size"],
        "fromDate": [1, "from-date"],
        "toDate": [1, "to-date"],
        "hasFetched": [4, "has-fetched"],
        "currencySymbol": [1, "currency-symbol"],
        "currencies": [16],
        "hideBalanceInfo": [4, "hide-balance-info"],
        "tableState": [32],
        "selectedRowIds": [32],
        "holdTargetRow": [32],
        "bookingDrawerOpen": [32],
        "selectedBookingNumber": [32],
        "_localDataOverride": [32]
    }, undefined, {
        "data": ["onDataChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-city-ledger-folio-table", "igl-application-info", "igl-rate-plan", "igl-room-type", "ir-agent-billing", "ir-air-date-picker", "ir-applicable-policies", "ir-arrival-time-dialog", "ir-assignment-toggle-dialog", "ir-billing", "ir-billing-drawer", "ir-booking-assign-items", "ir-booking-billing-recipient", "ir-booking-city-ledger", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-details", "ir-booking-details-drawer", "ir-booking-editor", "ir-booking-editor-drawer", "ir-booking-editor-form", "ir-booking-editor-guest-form", "ir-booking-editor-header", "ir-booking-extra-note", "ir-booking-guarantee", "ir-booking-header", "ir-booking-pricing-drawer", "ir-booking-pricing-form", "ir-booking-rooms", "ir-booking-source-editor-dialog", "ir-booking-source-editor-form", "ir-booking-status-tag", "ir-button", "ir-checkout-dialog", "ir-city-ledger-fiscal-documents-table", "ir-city-ledger-transaction-drawer", "ir-city-ledger-transaction-form", "ir-cl-adjustment-fields", "ir-cl-credit-note-fields", "ir-cl-debit-note-fields", "ir-cl-fiscal-document-preview", "ir-cl-invoice-dialog", "ir-cl-invoice-form", "ir-cl-invoice-select", "ir-cl-opening-balance-fields", "ir-cl-payment-fields", "ir-cl-status-tag", "ir-country-picker", "ir-custom-button", "ir-custom-date-picker", "ir-custom-date-range", "ir-date-range", "ir-date-range-filter", "ir-date-select", "ir-date-view", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-events-log", "ir-extra-service", "ir-extra-service-config", "ir-extra-service-config-form", "ir-extra-services", "ir-fd-confirm-dialog", "ir-guest-billing", "ir-guest-info-drawer", "ir-guest-info-form", "ir-hold-transaction-dialog", "ir-icons", "ir-input", "ir-input-cell", "ir-input-text", "ir-interceptor", "ir-invoice", "ir-invoice-form", "ir-label", "ir-mobile-input", "ir-otp", "ir-otp-modal", "ir-pagination", "ir-payment-details", "ir-payment-folio", "ir-payment-folio-form", "ir-payment-item", "ir-payment-summary", "ir-payments-folio", "ir-pdf-viewer", "ir-picker", "ir-picker-item", "ir-pickup", "ir-pickup-form", "ir-pickup-view", "ir-pms-logs", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-reservation-information", "ir-room", "ir-room-guests", "ir-room-guests-form", "ir-service-assignee-select", "ir-spinner", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-unit-tag", "ir-validator", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-city-ledger-folio-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCityLedgerFolioTable);
            }
            break;
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                defineCustomElement$1K();
            }
            break;
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                defineCustomElement$1J();
            }
            break;
        case "igl-room-type":
            if (!customElements.get(tagName)) {
                defineCustomElement$1I();
            }
            break;
        case "ir-agent-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1H();
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1G();
            }
            break;
        case "ir-applicable-policies":
            if (!customElements.get(tagName)) {
                defineCustomElement$1F();
            }
            break;
        case "ir-arrival-time-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1E();
            }
            break;
        case "ir-assignment-toggle-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1D();
            }
            break;
        case "ir-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$1C();
            }
            break;
        case "ir-billing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1B();
            }
            break;
        case "ir-booking-assign-items":
            if (!customElements.get(tagName)) {
                defineCustomElement$1A();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$1z();
            }
            break;
        case "ir-booking-city-ledger":
            if (!customElements.get(tagName)) {
                defineCustomElement$1y();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1x();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1w();
            }
            break;
        case "ir-booking-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1v();
            }
            break;
        case "ir-booking-details-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1u();
            }
            break;
        case "ir-booking-editor":
            if (!customElements.get(tagName)) {
                defineCustomElement$1t();
            }
            break;
        case "ir-booking-editor-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1s();
            }
            break;
        case "ir-booking-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1r();
            }
            break;
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1q();
            }
            break;
        case "ir-booking-editor-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1p();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$1o();
            }
            break;
        case "ir-booking-guarantee":
            if (!customElements.get(tagName)) {
                defineCustomElement$1n();
            }
            break;
        case "ir-booking-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$1m();
            }
            break;
        case "ir-booking-pricing-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1l();
            }
            break;
        case "ir-booking-pricing-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1k();
            }
            break;
        case "ir-booking-rooms":
            if (!customElements.get(tagName)) {
                defineCustomElement$1j();
            }
            break;
        case "ir-booking-source-editor-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1i();
            }
            break;
        case "ir-booking-source-editor-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1h();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$1g();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1f();
            }
            break;
        case "ir-checkout-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1e();
            }
            break;
        case "ir-city-ledger-fiscal-documents-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$1d();
            }
            break;
        case "ir-city-ledger-transaction-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$1c();
            }
            break;
        case "ir-city-ledger-transaction-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$1b();
            }
            break;
        case "ir-cl-adjustment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$1a();
            }
            break;
        case "ir-cl-credit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$19();
            }
            break;
        case "ir-cl-debit-note-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$18();
            }
            break;
        case "ir-cl-fiscal-document-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$17();
            }
            break;
        case "ir-cl-invoice-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$16();
            }
            break;
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$15();
            }
            break;
        case "ir-cl-invoice-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$14();
            }
            break;
        case "ir-cl-opening-balance-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$13();
            }
            break;
        case "ir-cl-payment-fields":
            if (!customElements.get(tagName)) {
                defineCustomElement$12();
            }
            break;
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$11();
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$10();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$$();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$_();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$Z();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$Y();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$X();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$W();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$V();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$U();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$T();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$S();
            }
            break;
        case "ir-events-log":
            if (!customElements.get(tagName)) {
                defineCustomElement$R();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$Q();
            }
            break;
        case "ir-extra-service-config":
            if (!customElements.get(tagName)) {
                defineCustomElement$P();
            }
            break;
        case "ir-extra-service-config-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$O();
            }
            break;
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                defineCustomElement$N();
            }
            break;
        case "ir-fd-confirm-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$M();
            }
            break;
        case "ir-guest-billing":
            if (!customElements.get(tagName)) {
                defineCustomElement$L();
            }
            break;
        case "ir-guest-info-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$K();
            }
            break;
        case "ir-guest-info-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$J();
            }
            break;
        case "ir-hold-transaction-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$I();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$H();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$G();
            }
            break;
        case "ir-input-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$F();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$E();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$D();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$C();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$B();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$A();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$z();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$y();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$x();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$w();
            }
            break;
        case "ir-payment-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$v();
            }
            break;
        case "ir-payment-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$u();
            }
            break;
        case "ir-payment-folio-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$t();
            }
            break;
        case "ir-payment-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$s();
            }
            break;
        case "ir-payment-summary":
            if (!customElements.get(tagName)) {
                defineCustomElement$r();
            }
            break;
        case "ir-payments-folio":
            if (!customElements.get(tagName)) {
                defineCustomElement$q();
            }
            break;
        case "ir-pdf-viewer":
            if (!customElements.get(tagName)) {
                defineCustomElement$p();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$o();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$n();
            }
            break;
        case "ir-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$m();
            }
            break;
        case "ir-pickup-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-pms-logs":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-service-assignee-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrCityLedgerFolioTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-city-ledger-folio-table2.js.map