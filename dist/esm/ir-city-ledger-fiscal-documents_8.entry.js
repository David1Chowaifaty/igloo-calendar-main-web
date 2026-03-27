import { r as registerInstance, h, H as Host, c as createEvent, F as Fragment } from './index-7e96440e.js';
import { C as CityLedgerService, F as FD_TYPES } from './index-dbae7927.js';
import { h as formatAmount } from './utils-4dd4655a.js';
import { c as createColumnHelper, u as useTable, f as flexRender, g as getCoreRowModel, a as getSortedRowModel, b as getGroupedRowModel, d as getExpandedRowModel } from './useTable-b8c70fc7.js';
import { h as hooks } from './moment-ab846cee.js';
import { D as Debounce } from './debounce-542065c2.js';
import { m as mapClTxToFolioRow } from './types-adeb4181.js';
import { c as calendar_data } from './calendar-data-2ae53dc9.js';
import { v as v4 } from './v4-964634d6.js';
import './axios-aa1335b8.js';
import './index-87419685.js';
import './locales.store-cb784e95.js';
import './index-f100e9d2.js';
import './type-f926f853.js';

const irCityLedgerFiscalDocumentsCss = ".sc-ir-city-ledger-fiscal-documents-h{display:block}.fiscal-documents.sc-ir-city-ledger-fiscal-documents{display:flex;flex-direction:column;gap:0.875rem}";
const IrCityLedgerFiscalDocumentsStyle0 = irCityLedgerFiscalDocumentsCss;

const IrCityLedgerFiscalDocuments = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    agentId = null;
    currencySymbol = '$';
    currencies = [];
    ticket;
    propertyId;
    filters = {
        fromDate: null,
        toDate: null,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
    };
    fiscalDocuments = [];
    isLoading = false;
    cityLedgerService = new CityLedgerService();
    get filteredDocuments() {
        return this.fiscalDocuments;
    }
    async fetchFiscalDocuments(filters) {
        if (!this.agentId || !filters.fromDate || !filters.toDate)
            return;
        this.isLoading = true;
        try {
            const result = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.agentId,
                FROM_DATE: filters.fromDate,
                END_DATE: filters.toDate,
                DOC_NUMBER: filters.docNumber || '',
                FD_TYPE_CODE: filters.type === 'all' ? null : filters.type,
            });
            this.fiscalDocuments = result ?? [];
        }
        catch (err) {
            console.error('[ir-city-ledger-fiscal-documents] getFiscalDocuments error:', err);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h(Host, { key: '1f6f543ae5b78ea686258ff538cf34572191e15f' }, h("section", { key: '977f339c3620e3fc194b2af05be46cd60909cfc4', class: "fiscal-documents", "aria-label": "City ledger fiscal documents" }, h("ir-city-ledger-fiscal-documents-filters", { key: '44a4d2786a2c341740aced623122d0a1193a5d38', filters: this.filters, onFiltersChange: event => {
                const prev = this.filters;
                this.filters = event.detail;
                const taxableOnlyChanged = prev.taxableOnly !== event.detail.taxableOnly;
                const onlyTaxableOnlyChanged = taxableOnlyChanged &&
                    prev.fromDate === event.detail.fromDate &&
                    prev.toDate === event.detail.toDate &&
                    prev.docNumber === event.detail.docNumber &&
                    prev.type === event.detail.type;
                if (!onlyTaxableOnlyChanged) {
                    this.fetchFiscalDocuments(event.detail);
                }
            } }), h("ir-city-ledger-fiscal-documents-table", { key: 'ce8b9c796c5413e6e67ef58a867a9f2e19c87c22', isLoading: this.isLoading, rows: this.filteredDocuments, currencySymbol: this.currencySymbol, currencies: this.currencies, taxableOnly: this.filters.taxableOnly, hasDates: !!(this.filters.fromDate && this.filters.toDate), ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, fromDate: this.filters.fromDate, toDate: this.filters.toDate }))));
    }
};
IrCityLedgerFiscalDocuments.style = IrCityLedgerFiscalDocumentsStyle0;

const irCityLedgerFiscalDocumentsFiltersCss = ".sc-ir-city-ledger-fiscal-documents-filters-h{display:block}.fiscal-filters.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem}.fiscal-filters__dates.sc-ir-city-ledger-fiscal-documents-filters,.fiscal-filters__search.sc-ir-city-ledger-fiscal-documents-filters{width:100%}.fiscal-filters__dates.sc-ir-city-ledger-fiscal-documents-filters{min-width:230px}@media (min-width: 640px){.fiscal-filters__dates.sc-ir-city-ledger-fiscal-documents-filters,.fiscal-filters__search.sc-ir-city-ledger-fiscal-documents-filters{width:fit-content}.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{align-items:center}.fiscal-filters__search.sc-ir-city-ledger-fiscal-documents-filters{min-width:300px}}.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-wrap:wrap;gap:0.75rem}.fiscal-filters__field.sc-ir-city-ledger-fiscal-documents-filters{display:flex;flex-direction:column;gap:0.375rem}.fiscal-filters__label.sc-ir-city-ledger-fiscal-documents-filters{font-size:0.75rem;color:var(--wa-color-text-quiet);font-weight:600}.fiscal-filters__input.sc-ir-city-ledger-fiscal-documents-filters{height:2.125rem;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);border-radius:0.375rem;background-color:var(--wa-color-surface-default);color:var(--wa-color-text-normal);padding:0 0.625rem;font-size:0.875rem}.fiscal-filters__input.sc-ir-city-ledger-fiscal-documents-filters:focus-visible{outline:2px solid var(--wa-color-brand-border-normal);outline-offset:1px}.fiscal-filters__tax-switch.sc-ir-city-ledger-fiscal-documents-filters{display:inline-flex;align-items:center;gap:0.5rem;font-size:0.875rem;color:var(--wa-color-text-normal);font-weight:600;min-height:2.125rem;white-space:nowrap}.fiscal-filters__right.sc-ir-city-ledger-fiscal-documents-filters{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem}.fiscal-filters__meta.sc-ir-city-ledger-fiscal-documents-filters,.fiscal-filters__active.sc-ir-city-ledger-fiscal-documents-filters{font-size:0.8125rem;color:var(--wa-color-text-quiet);font-weight:600}.fiscal-filters__chips.sc-ir-city-ledger-fiscal-documents-filters{display:inline-flex;align-items:center;flex-wrap:wrap;gap:0.375rem}.fiscal-filters__chip.sc-ir-city-ledger-fiscal-documents-filters{height:1.875rem;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);border-radius:999px;padding:0 0.625rem;background-color:var(--wa-color-surface-default);color:var(--wa-color-text-normal);font-size:0.8125rem;font-weight:600;line-height:1;cursor:pointer}.fiscal-filters__chip.sc-ir-city-ledger-fiscal-documents-filters:hover{background-color:var(--wa-color-neutral-fill-quiet, #f1f2f3)}.fiscal-filters__chip--active.sc-ir-city-ledger-fiscal-documents-filters{border-color:var(--wa-color-brand-border-normal);color:var(--wa-color-brand-fill-loud);background-color:color-mix(in oklab, var(--wa-color-brand-fill-quiet) 40%, white)}@media (max-width: 1100px){.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{grid-template-columns:repeat(2, minmax(180px, 1fr))}}@media (max-width: 768px){.fiscal-filters__left.sc-ir-city-ledger-fiscal-documents-filters{width:100%;grid-template-columns:1fr}.fiscal-filters__right.sc-ir-city-ledger-fiscal-documents-filters{width:100%}}";
const IrCityLedgerFiscalDocumentsFiltersStyle0 = irCityLedgerFiscalDocumentsFiltersCss;

const IrCityLedgerFiscalDocumentsFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.filtersChange = createEvent(this, "filtersChange", 7);
    }
    filters = {
        fromDate: null,
        toDate: null,
        docNumber: '',
        taxableOnly: false,
        type: 'all',
    };
    filtersChange;
    typeOptions = [
        { label: 'All Document Types', value: 'all' },
        { label: 'Invoices', value: 'invoice' },
        { label: 'Receipts', value: 'receipt' },
        { label: 'Credit Notes', value: 'credit-note' },
        { label: 'Debit Notes', value: 'debit-note' },
    ];
    updateFilters(patch) {
        this.filtersChange.emit({
            ...this.filters,
            ...patch,
        });
    }
    render() {
        return (h("section", { key: '412923609635e4f2841591b7f047cee4aa279bba', class: "fiscal-filters", "aria-label": "Fiscal document filters" }, h("div", { key: 'c5fcea9aaf2846f5de9c2a18e7b950fe9e91bf63', class: "fiscal-filters__left" }, h("ir-date-range-filter", { key: 'ae015f5f712146241046080d95e0fd765f42bf93', class: "fiscal-filters__dates", fromDate: this.filters.fromDate, toDate: this.filters.toDate, onDatesChanged: e => this.updateFilters({ fromDate: e.detail.from, toDate: e.detail.to }) }), h("wa-select", { key: 'd3e93282a5b5a5240465ef23a99ed84890fed818', value: this.filters.type, defaultValue: this.filters.type, onchange: e => this.updateFilters({ type: e.target.value }), size: "small", placeholder: "Status" }, this.typeOptions.map(option => (h("wa-option", { value: option.value, key: option.value }, option.label)))), h("ir-input", { key: '0ff833f04e689fb3015657408eba5df917b751a8', placeholder: "Search", class: "fiscal-filters__search" }, h("wa-icon", { key: '471ccf37650619e945ffd8813de42f4228d0c11b', name: "magnifying-glass", slot: "start" })), h("wa-switch", { key: 'ffe438b101cd074e327d90e862f6b92d5fb8c723', id: "tax-switch", checked: this.filters.taxableOnly, onchange: event => this.updateFilters({ taxableOnly: event.target.checked }) }, "Taxes"))));
    }
};
IrCityLedgerFiscalDocumentsFilters.style = IrCityLedgerFiscalDocumentsFiltersStyle0;

const irCityLedgerFiscalDocumentsTableCss = ".sc-ir-city-ledger-fiscal-documents-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-city-ledger-fiscal-documents-table{overflow-x:auto}.table.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-fiscal-documents-table tbody.sc-ir-city-ledger-fiscal-documents-table tr.sc-ir-city-ledger-fiscal-documents-table:last-child>td.sc-ir-city-ledger-fiscal-documents-table{border-bottom:0 !important}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sc-ir-city-ledger-fiscal-documents-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sc-ir-city-ledger-fiscal-documents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-city-ledger-fiscal-documents-table .empty-row.sc-ir-city-ledger-fiscal-documents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-fiscal-documents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-fiscal-documents-table,.ir-table-row.sc-ir-city-ledger-fiscal-documents-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-fiscal-documents-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-fiscal-documents-table thead.sc-ir-city-ledger-fiscal-documents-table th.sortable.sc-ir-city-ledger-fiscal-documents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:active td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:hover td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-fiscal-documents-table:active td.sc-ir-city-ledger-fiscal-documents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-fiscal-documents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-fiscal-documents-table svg.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-city-ledger-fiscal-documents-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-city-ledger-fiscal-documents-table,.data-table.sc-ir-city-ledger-fiscal-documents-table{height:100%}.sc-ir-city-ledger-fiscal-documents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.fiscal-table__heading.sc-ir-city-ledger-fiscal-documents-table:last-child{border-right:0}.fiscal-table__heading--numeric.sc-ir-city-ledger-fiscal-documents-table{text-align:right}.fiscal-table__status-tag.sc-ir-city-ledger-fiscal-documents-table{text-transform:capitalize}.fiscal-table__heading--actions.sc-ir-city-ledger-fiscal-documents-table{text-align:center}.fiscal-table__cell--actions.sc-ir-city-ledger-fiscal-documents-table{text-align:center}.fiscal-table__action-trigger.sc-ir-city-ledger-fiscal-documents-table::part(base){font-size:0.8125rem;font-weight:500}.fiscal-table__action-danger.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.fiscal-table__cell--zero.sc-ir-city-ledger-fiscal-documents-table{color:var(--wa-color-text-quiet, #9ca3af)}.fiscal-table__totals.sc-ir-city-ledger-fiscal-documents-table td.sc-ir-city-ledger-fiscal-documents-table{background:var(--wa-color-neutral-fill-quiet, #f9fafb) !important;border-top:2px solid var(--wa-color-neutral-border-quiet, #e5e7eb) !important;font-weight:600;font-size:0.875rem;padding:0.75rem 1rem !important}.fiscal-table__totals-label.sc-ir-city-ledger-fiscal-documents-table{display:flex;align-items:center;color:var(--wa-color-text-quiet, #6b7280)}.fiscal-table__totals-value.sc-ir-city-ledger-fiscal-documents-table{font-variant-numeric:tabular-nums}.fiscal-table__totals-debit.sc-ir-city-ledger-fiscal-documents-table{color:#dc2626}.fiscal-table__totals-credit.sc-ir-city-ledger-fiscal-documents-table{color:#16a34a}.fiscal-table__empty.sc-ir-city-ledger-fiscal-documents-table{text-align:center;color:var(--wa-color-text-quiet);font-size:0.875rem;padding:1.25rem}";
const IrCityLedgerFiscalDocumentsTableStyle0 = irCityLedgerFiscalDocumentsTableCss;

const IrCityLedgerFiscalDocumentsTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    rows = [];
    currencySymbol = '$';
    currencies = [];
    taxableOnly = false;
    isLoading = false;
    hasDates = false;
    ticket;
    propertyId;
    agentId = null;
    fromDate = null;
    toDate = null;
    previewRow = null;
    columnHelper = createColumnHelper();
    cityLedgerService = new CityLedgerService();
    previewDialogRef;
    getStatusVariant(code) {
        const map = {
            PAID: 'success',
            ISSUED: 'brand',
            SENT: 'brand',
            DRAFT: 'neutral',
            PARTIAL: 'warning',
            VOID: 'danger',
        };
        return map[code?.toUpperCase()] ?? 'neutral';
    }
    handleAction(action, row) {
        switch (action) {
            case 'view':
                console.log('view', row);
                break;
            case 'print':
                console.log('print', row);
                break;
            case 'download':
                console.log('download', row);
                break;
            case 'send-reminder':
                console.log('send-reminder', row);
                break;
            case 'apply-payment':
                console.log('apply-payment', row);
                break;
            case 'mark-paid':
                console.log('mark-paid', row);
                break;
            case 'void':
                console.log('void', row);
                this.cityLedgerService.voidInvoiceByCreditNote({
                    FD_ID: row.FD_ID,
                });
                break;
            case 'delete-draft':
                this.cityLedgerService.deleteDraftFiscalDocument({
                    FD_ID: row.FD_ID,
                });
                break;
            case 'preview':
                this.previewRow = row;
                this.previewDialogRef?.openDialog();
                break;
            case 'convert-to-invoice':
                console.log('convert-to-invoice', row);
                break;
        }
    }
    get columns() {
        const base = [
            this.columnHelper.accessor('FD_STATUS_CODE', {
                header: 'Status',
                cell: info => (h("wa-tag", { class: "fiscal-table__status-tag", variant: this.getStatusVariant(info.getValue()), size: "small" }, info.row.original.FD_STATUS_NAME ?? info.getValue())),
            }),
            this.columnHelper.accessor('ISSUE_DATE_DISPLAY', {
                header: 'Date',
                cell: info => info.getValue(),
            }),
            this.columnHelper.accessor('DOC_NUMBER', {
                header: 'Doc Number',
                cell: info => h("span", { class: "fiscal-table__doc-number" }, info.getValue()),
            }),
            this.columnHelper.accessor('FD_TYPE_NAME', {
                id: 'type',
                header: 'Type',
                cell: info => info.getValue(),
            }),
        ];
        const amountCols = this.taxableOnly
            ? [
                this.columnHelper.accessor('NET_AMOUNT', {
                    header: 'Net Amount',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
                this.columnHelper.accessor('TAX_AMOUNT', {
                    header: 'Taxes',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
            ]
            : [
                this.columnHelper.accessor('TOTAL_AMOUNT', {
                    id: 'amount',
                    header: 'Amount (incl. taxes)',
                    cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
                }),
            ];
        return [
            ...base,
            ...amountCols,
            this.columnHelper.accessor('DEBIT', {
                header: 'Debit',
                cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.accessor('CREDIT', {
                header: 'Credit',
                cell: info => this.renderMoney(info.getValue(), info.row.original.CURRENCY_ID),
            }),
            this.columnHelper.display({
                id: 'actions',
                header: 'Actions',
                cell: info => {
                    const row = info.row.original;
                    const isDraft = row.FD_TYPE_CODE === FD_TYPES.Draft;
                    const isPaid = row.FD_STATUS_CODE === 'INV';
                    const isInvoice = row.FD_TYPE_CODE === FD_TYPES.Invoice;
                    return (h("wa-dropdown", { "onwa-select": (e) => {
                            this.handleAction(e.detail.item.value, row);
                        } }, h("wa-button", { slot: "trigger", size: "small", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1.2rem' } })), isDraft
                        ? [
                            h("wa-dropdown-item", { value: "preview" }, "Preview"),
                            h("wa-dropdown-item", { value: "convert-to-invoice" }, "Convert to Invoice"),
                            h("wa-dropdown-item", { value: "delete-draft", variant: "danger" }, "Delete"),
                        ]
                        : [
                            h("wa-dropdown-item", { value: "view" }, "View Document"),
                            h("wa-dropdown-item", { value: "print" }, "Print"),
                            h("wa-dropdown-item", { value: "download" }, "Download PDF"),
                            (!isPaid || !isInvoice) && h("wa-divider", null),
                            !isPaid && h("wa-dropdown-item", { value: "send-reminder" }, "Send Reminder"),
                            !isPaid && isInvoice && h("wa-dropdown-item", { value: "apply-payment" }, "Apply Payment"),
                            !isPaid && h("wa-dropdown-item", { value: "mark-paid" }, "Mark as Paid"),
                            h("wa-divider", null),
                            h("wa-dropdown-item", { value: "void" }, h("span", { class: "fiscal-table__action-danger" }, "Void")),
                        ]));
                },
                enableSorting: false,
            }),
        ];
    }
    getSymbol(currencyId) {
        const match = this.currencies.find(c => c.id === currencyId);
        return match?.symbol ?? this.currencySymbol;
    }
    renderMoney(value, currencyId) {
        if (!value)
            return h("span", { class: "fiscal-table__cell--zero" }, "\u2014");
        return h("span", null, formatAmount(this.getSymbol(currencyId), value));
    }
    render() {
        const table = useTable({
            data: this.rows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
        });
        return (h(Host, { key: '58b07bf0ca748151bc220da5096066917db60e28' }, h("ir-preview-screen-dialog", { key: 'fbd2cc37b1044b284ea4abadd7715eec19ec22af', ref: el => (this.previewDialogRef = el), label: this.previewRow ? `Invoice Preview — ${this.previewRow.DOC_NUMBER}` : 'Invoice Preview', action: "print", onOpenChanged: e => {
                if (!e.detail)
                    this.previewRow = null;
            } }, this.previewRow && (h("ir-cl-invoice-preview", { key: '2fd3223a32bc0fb2354ed940ede609fb2bfef5f9', ticket: this.ticket, propertyId: this.propertyId, agentId: this.agentId, agentName: this.previewRow.AGENCY_NAME, documentNumber: this.previewRow.DOC_NUMBER, fromDate: this.fromDate, toDate: this.toDate }))), h("div", { key: '1ed7576d35d6ddbfcc09e910c3050700a24a4d29', class: "table--container" }, h("table", { key: 'f68f6e1510fa35950a58a2a67ff2ee9d6d57e5d7', class: "table data-table" }, h("thead", { key: 'e7c32e85fc785a19bc567a955f78cc084990787d' }, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: {
                'fiscal-table__heading--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(header.column.id),
                'fiscal-table__heading--actions': header.column.id === 'actions',
            } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", { key: '638af07e9f81a0ab243642a8fae26544084035a6' }, table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                'fiscal-table__cell': true,
                'fiscal-table__cell--numeric': ['NET_AMOUNT', 'TAX_AMOUNT', 'amount', 'DEBIT', 'CREDIT'].includes(cell.column.id),
                'fiscal-table__cell--actions': cell.column.id === 'actions',
            } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))), table.getRowModel().rows.length === 0 && (h("tr", { key: '222b2ca72aae8fe0c69e591961867d9b20a64ab1' }, h("td", { key: '8db0c50cc16309e9566fcb0699aa3dbb93731d5f', class: "empty-row", colSpan: this.columns.length }, this.isLoading ? (h("ir-spinner", null)) : this.hasDates ? ('No fiscal documents match the current filters.') : ('Please select a From and To date to view fiscal documents.')))))))));
    }
};
IrCityLedgerFiscalDocumentsTable.style = IrCityLedgerFiscalDocumentsTableStyle0;

const irCityLedgerFolioCss = ".sc-ir-city-ledger-folio-h{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}";
const IrCityLedgerFolioStyle0 = irCityLedgerFolioCss;

const IrCityLedgerFolio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.folioSummaryUpdate = createEvent(this, "folioSummaryUpdate", 7);
    }
    agentId = null;
    propertyId;
    taxOptions = [];
    serviceCategoryOptions = [];
    currencySymbol = '$';
    currencies = [];
    isTransactionOpen = false;
    filters = {};
    folioSummaryUpdate;
    render() {
        return (h(Host, { key: 'ca63f1ef01f8399af946e406e2b3315b3290a86e' }, h("ir-city-ledger-folio-filters", { key: '1ac8b84083efa013369fde251420c0450fd06fad', onFiltersChange: e => (this.filters = e.detail), onAddEntry: () => (this.isTransactionOpen = true) }), h("ir-city-ledger-folio-table", { key: '612ccf56f88b7300d109889da64b44eb2799a99e', agentId: this.agentId, propertyId: this.propertyId, currencySymbol: this.currencySymbol, currencies: this.currencies, filters: this.filters, onFolioSummaryLoaded: e => this.folioSummaryUpdate.emit(e.detail), onGenerateInvoice: e => console.log('Generate invoice for', e.detail) }), h("ir-city-ledger-transaction-drawer", { key: '5b0d76f5d1a256e404ea2076c017a3039b0d6c0a', open: this.isTransactionOpen, taxOptions: this.taxOptions, serviceCategoryOptions: this.serviceCategoryOptions, currencySymbol: this.currencySymbol, agentId: this.agentId, onTransactionSaved: () => { }, onCloseDrawer: () => (this.isTransactionOpen = false) })));
    }
};
IrCityLedgerFolio.style = IrCityLedgerFolioStyle0;

const irCityLedgerFolioFiltersCss = ".sc-ir-city-ledger-folio-filters-h{display:block}.filters-bar.sc-ir-city-ledger-folio-filters{display:flex;align-items:stretch;border-radius:0.625rem;gap:0.5rem}.filters-bar__section.sc-ir-city-ledger-folio-filters{display:flex;align-items:center}.filters-bar__section--dates.sc-ir-city-ledger-folio-filters{gap:0.125rem;padding-inline:0.75rem 0.375rem;flex-shrink:0}.filters-bar__cal-icon.sc-ir-city-ledger-folio-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0;margin-inline-end:0.25rem}.filters-bar__date-picker.sc-ir-city-ledger-folio-filters::part(input-base){border:none !important;border-radius:0 !important;background:transparent !important;box-shadow:none !important;padding-inline:0.25rem;height:2rem;min-width:82px;font-size:0.8125rem}.filters-bar__date-picker--from.sc-ir-city-ledger-folio-filters{z-index:2}.filters-bar__date-picker--to[open].sc-ir-city-ledger-folio-filters{z-index:3}.filters-bar__quick-actions.sc-ir-city-ledger-folio-filters{display:flex;flex-direction:column;gap:0.5rem;padding-inline-start:1rem}.filters-bar__quick-action-btn.sc-ir-city-ledger-folio-filters{font-size:0.8125rem}.filters-bar__date-arrow.sc-ir-city-ledger-folio-filters{color:var(--wa-color-text-quiet, #9ca3af);font-size:0.75rem;user-select:none;flex-shrink:0;padding-inline:0.125rem}.filters-bar__section--status.sc-ir-city-ledger-folio-filters{gap:0.125rem;padding-inline:0.5rem;flex-shrink:0}.filters-bar__pill.sc-ir-city-ledger-folio-filters{display:inline-flex;align-items:center;padding:0.25rem 0.625rem;border:none;background:transparent;border-radius:0.375rem;font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280);cursor:pointer;white-space:nowrap;transition:background 0.1s ease,\n    color 0.1s ease;line-height:1;font-family:inherit}.filters-bar__pill--active.sc-ir-city-ledger-folio-filters{background:var(--wa-color-neutral-fill-quiet, #f3f4f6);color:var(--wa-color-text-normal, #111827)}.filters-bar__pill.sc-ir-city-ledger-folio-filters:hover:not(.filters-bar__pill--active){background:var(--wa-color-neutral-fill-quiet, #f9fafb);color:var(--wa-color-text-normal, #374151)}.filters-bar__section--search.sc-ir-city-ledger-folio-filters{flex:1;min-width:0;gap:0.5rem;padding-inline:0.75rem}.filters-bar__search-icon.sc-ir-city-ledger-folio-filters{font-size:0.875rem;color:var(--wa-color-text-quiet, #9ca3af);flex-shrink:0}.filters-bar__search-input.sc-ir-city-ledger-folio-filters{flex:1;min-width:0;border:none;outline:none;background:transparent;font-size:0.8125rem;color:var(--wa-color-text-normal, #111827);font-family:inherit;height:2rem;-webkit-appearance:none;appearance:none}.filters-bar__search-input.sc-ir-city-ledger-folio-filters::placeholder{color:var(--wa-color-text-quiet, #9ca3af)}.filters-bar__search-input.sc-ir-city-ledger-folio-filters::-webkit-search-cancel-button{display:none}.filters-bar__icon-btn.sc-ir-city-ledger-folio-filters{display:inline-flex;align-items:center;justify-content:center;width:1.375rem;height:1.375rem;border:none;background:transparent;border-radius:50%;color:var(--wa-color-text-quiet, #9ca3af);cursor:pointer;padding:0;flex-shrink:0;transition:background 0.1s ease,\n    color 0.1s ease;font-size:0.6875rem;font-family:inherit}.filters-bar__icon-btn.sc-ir-city-ledger-folio-filters:hover{background:var(--wa-color-neutral-fill-quiet, #f3f4f6);color:var(--wa-color-text-normal, #374151)}.filters-bar__section--export.sc-ir-city-ledger-folio-filters{padding-inline:0.375rem;flex-shrink:0}.filters-bar__export-btn.sc-ir-city-ledger-folio-filters{display:inline-flex;align-items:center;gap:0.375rem;padding:0.375rem 0.625rem;border:none;background:transparent;border-radius:0.375rem;font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-quiet, #6b7280);cursor:pointer;white-space:nowrap;transition:background 0.1s ease,\n    color 0.1s ease;font-family:inherit;height:calc(100% - 0.5rem);align-self:center}.filters-bar__export-btn.sc-ir-city-ledger-folio-filters:hover{background:var(--wa-color-neutral-fill-quiet, #f3f4f6);color:var(--wa-color-text-normal, #374151)}.filters-bar__export-chevron.sc-ir-city-ledger-folio-filters{font-size:0.6875rem;opacity:0.6}@media (max-width: 767px){.filters-bar.sc-ir-city-ledger-folio-filters{flex-direction:column;align-items:stretch}.filters-bar__sep.sc-ir-city-ledger-folio-filters{width:100%;height:1px;align-self:auto}.filters-bar__section.sc-ir-city-ledger-folio-filters{padding-inline:0.875rem;min-height:2.5rem}.filters-bar__section--status.sc-ir-city-ledger-folio-filters{flex-wrap:wrap;padding-block:0.375rem}.filters-bar__section--search.sc-ir-city-ledger-folio-filters{padding-inline:0.875rem}.filters-bar__section--export.sc-ir-city-ledger-folio-filters{padding-inline:0.875rem;padding-block:0.375rem}.filters-bar__export-btn.sc-ir-city-ledger-folio-filters{height:auto;padding-block:0.375rem}.filters-bar__date-picker.sc-ir-city-ledger-folio-filters::part(input-base){min-width:70px}}";
const IrCityLedgerFolioFiltersStyle0 = irCityLedgerFolioFiltersCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrCityLedgerFolioFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.filtersChange = createEvent(this, "filtersChange", 7);
        this.addEntry = createEvent(this, "addEntry", 7);
    }
    dates = {
        from: hooks().subtract(30, 'days'),
        to: hooks(),
    };
    statusFilter = 'all';
    searchQuery = '';
    filtersChange;
    addEntry;
    componentDidLoad() {
        this.emitFilters();
    }
    statuses = [
        { value: 'all', label: 'All entries' },
        { value: 'billed', label: 'Billed' },
        { value: 'held', label: 'Held' },
        { value: 'unbilled', label: 'Unbilled' },
    ];
    toDateSelectRef;
    fromDateSelectRef;
    emitFilters() {
        this.filtersChange.emit({
            fromDate: this.dates?.from?.format('YYYY-MM-DD'),
            toDate: this.dates?.to?.format('YYYY-MM-DD'),
            status: this.statusFilter,
            search: this.searchQuery,
        });
    }
    emitFiltersDebounced() {
        this.emitFilters();
    }
    render() {
        return (h(Host, { key: 'f0cf9ab6c12662c8b63a1fc1515bb48308881caf' }, h("div", { key: '313a87b9f943cb1405e04aabec9da398f474c857', class: "filters-bar" }, h("ir-date-range-filter", { key: '16525e71ed178ca1c70e28bc5292da80b1f8982b', fromDate: this.dates.from?.format('YYYY-MM-DD'), toDate: this.dates.to?.format('YYYY-MM-DD'), onDatesChanged: e => {
                let newDates = {};
                let dates = e.detail;
                if (dates.from) {
                    newDates = { ...newDates, from: hooks(dates.from, 'YYYY-MM-DD') };
                }
                if (dates.to) {
                    newDates = { ...newDates, to: hooks(dates.to, 'YYYY-MM-DD') };
                }
                this.dates = { ...this.dates, ...newDates };
                this.emitFilters();
            }, style: { minWidth: '230px' } }), h("wa-select", { key: 'b5c7343d9799271095d2c7533018fb0d90aa0898', value: this.statusFilter, onchange: e => {
                this.statusFilter = e.target.value?.toString();
                this.emitFilters();
            }, "onwa-clear": () => {
                this.statusFilter = 'all';
                this.emitFilters();
            }, placeholder: "Status", size: "small", withClear: true }, this.statuses.map(s => (h("wa-option", { value: s.value, label: s.label }, s.label)))), h("ir-input", { key: '6ba5ce98c3b44bd8bdc729aeb39199a302d88ce3', "onText-change": e => {
                this.searchQuery = e.detail;
                this.emitFiltersDebounced();
            }, value: this.searchQuery, placeholder: "Booking# or doc number", withClear: true, style: { minWidth: '250px' } }, h("wa-icon", { key: '74a54e2c1f35c24009d925a97e301b5d4f23cd5d', name: "magnifying-glass", slot: "start", class: "filters-bar__search-icon" })), h("wa-dropdown", { key: '332b094b9e431839a30b4320ea0269ea247f44b0' }, h("ir-custom-button", { key: 'da9d8884b445ac77f770bfdc53d9568df5f78cfe', slot: "trigger", appearance: "outlined", withCaret: true }, h("wa-icon", { key: 'a136f7e52a2a67dfa2a917c00fcf78c6c8f53fda', name: "download", slot: "start" }), h("span", { key: 'c3c8548fc91f9038cecdb79c36eab4a96c6e8613' }, "Export")), h("wa-dropdown-item", { key: '177f870f63006b13b3b9fdd7846c32b92d01e55d', value: "csv" }, h("wa-icon", { key: 'eaed8edf26b190280a46b4d15be82f2b6b0b3923', slot: "icon", name: "file-csv" }), "Export as CSV"), h("wa-dropdown-item", { key: 'b24788ddb3734ef24fd838dd3c91baa5bfbad9d4', value: "pdf" }, h("wa-icon", { key: '3f6fe5262711cbd9a3c3f814b576137b35257362', slot: "icon", name: "file-pdf" }), "Export as PDF"), h("wa-divider", { key: '16e7d19ff36824a5db0313e85cca5fc5bee09ce8' }), h("wa-dropdown-item", { key: '05ac88ce0f3b7a1728bb4c799cede5ab0fdded06', value: "print" }, h("wa-icon", { key: '18ea8af30f05c17a3259ff0f63406933f0775cb9', slot: "icon", name: "print" }), "Print Folio")), h("ir-custom-button", { key: 'b7c266e82265b7f7d4df196309210652320d8205', variant: "brand", appearance: "outlined", onClickHandler: () => this.addEntry.emit() }, "Add Entry"))));
    }
};
__decorate([
    Debounce(300)
], IrCityLedgerFolioFilters.prototype, "emitFiltersDebounced", null);
IrCityLedgerFolioFilters.style = IrCityLedgerFolioFiltersStyle0;

const irCityLedgerFolioTableCss = ".sc-ir-city-ledger-folio-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-city-ledger-folio-table{overflow-x:auto}.table.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table tr.sc-ir-city-ledger-folio-table:last-child>td.sc-ir-city-ledger-folio-table{border-bottom:0 !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-city-ledger-folio-table .empty-row.sc-ir-city-ledger-folio-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-city-ledger-folio-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-folio-table,.ir-table-row.sc-ir-city-ledger-folio-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-city-ledger-folio-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sortable.sc-ir-city-ledger-folio-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-city-ledger-folio-table:hover td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-city-ledger-folio-table:active td.sc-ir-city-ledger-folio-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-city-ledger-folio-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-city-ledger-folio-table svg.sc-ir-city-ledger-folio-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-city-ledger-folio-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table{height:100%}.sc-ir-city-ledger-folio-table-h{display:flex;flex-direction:column;border-radius:0.75rem;overflow:hidden;min-height:60dvh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);background-color:var(--wa-color-surface-default, #fff);box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.05),\n    0 1px 2px -1px rgb(0 0 0 / 0.05)}.booking_heading.sc-ir-city-ledger-folio-table .heading_container.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between;width:100%;gap:0.5rem}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--between.sc-ir-city-ledger-folio-table{justify-content:space-between}.booking_heading.sc-ir-city-ledger-folio-table .heading_container--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.grouped-cell.sc-ir-city-ledger-folio-table{padding-top:0 !important;padding-bottom:0 !important}.data-table--pagination.sc-ir-city-ledger-folio-table{margin-top:auto !important}.header-button.sc-ir-city-ledger-folio-table::part(start){display:none}.header-button.sc-ir-city-ledger-folio-table::part(base){justify-content:space-between;color:var(--wa-color-text-subtle, #6b7280);height:auto !important;width:auto !important;padding:0.25rem;border-radius:0.25rem;transition:color 0.15s ease,\n    background-color 0.15s ease}.header-button.sc-ir-city-ledger-folio-table:hover::part(base){color:var(--wa-color-text-normal);background-color:var(--wa-color-neutral-fill-quiet, #f3f4f6)}.input-column.sc-ir-city-ledger-folio-table{padding:0 !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.input-column.sc-ir-city-ledger-folio-table{--input-width:150px;padding:0 !important;width:var(--input-width);max-width:var(--input-width);box-sizing:border-box}.group-expander.sc-ir-city-ledger-folio-table{height:100%}.group-expander.sc-ir-city-ledger-folio-table::part(base){font-size:1rem;height:100%;align-items:center;width:auto}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{border-right:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb) !important}.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table:last-child,.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sc-ir-city-ledger-folio-table:last-child{border-right:0 !important}.data-table.sc-ir-city-ledger-folio-table thead.sc-ir-city-ledger-folio-table th.sticky-column.sc-ir-city-ledger-folio-table,.data-table.sc-ir-city-ledger-folio-table tbody.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{border-right:0 !important}.sticky-column.sc-ir-city-ledger-folio-table::after{content:'';position:absolute;top:0;right:0;width:1px;height:100%;background-color:var(--wa-color-neutral-border-quiet, #e5e7eb);pointer-events:none}.folio-table__empty-state.sc-ir-city-ledger-folio-table,.folio-table__loading.sc-ir-city-ledger-folio-table{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;flex:1;min-height:200px;color:var(--wa-color-text-subtle, #6b7280);font-size:0.875rem}.folio-table__no-results.sc-ir-city-ledger-folio-table{text-align:center;color:var(--wa-color-text-quiet, #9ca3af);font-size:0.875rem;padding:2rem 1rem}.folio-table__select-col.sc-ir-city-ledger-folio-table{width:40px !important;max-width:40px !important;min-width:40px !important;text-align:center !important;padding-inline:0.5rem !important}.folio-table__checkbox.sc-ir-city-ledger-folio-table{cursor:pointer;width:1rem;height:1rem;accent-color:var(--wa-color-brand-fill-loud)}.folio-table__row--selected.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background-color:var(--wa-color-brand-fill-quiet, #eff6ff) !important}.folio-table__invoice-bar.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);border-bottom:1px solid var(--wa-color-brand-border-quiet, #bfdbfe);font-size:0.875rem;flex-wrap:wrap}.folio-table__invoice-bar-text.sc-ir-city-ledger-folio-table{display:flex;align-items:center;color:var(--wa-color-brand-on-quiet);font-weight:500;flex:1}.folio-table__balance.sc-ir-city-ledger-folio-table{font-variant-numeric:tabular-nums;font-weight:500;display:block;text-align:right;padding:var(--ir-cell-padding, 0.5rem 1rem)}.folio-table__balance--negative.sc-ir-city-ledger-folio-table{color:var(--wa-color-danger-fill-loud, #dc2626)}.balance-row__label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;font-size:0.8125rem}.cell--align-end.sc-ir-city-ledger-folio-table{text-align:right !important}.cell--align-center.sc-ir-city-ledger-folio-table{text-align:center}.folio-table__status-cell.sc-ir-city-ledger-folio-table{display:flex;align-items:center;justify-content:space-between}.folio-table__col-label.sc-ir-city-ledger-folio-table{display:flex;align-items:center;gap:0.5rem}.folio-table__col-label--end.sc-ir-city-ledger-folio-table{justify-content:flex-end}.folio-table__col-label--center.sc-ir-city-ledger-folio-table{justify-content:center}.folio-table__description.sc-ir-city-ledger-folio-table{display:block;width:100%}.balance-row.sc-ir-city-ledger-folio-table td.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important;color:var(--wa-color-brand-on-quiet) !important;border-color:var(--wa-color-brand-border-quiet) !important;font-weight:600;font-size:0.875rem;padding:0.75rem 1rem !important}.balance-row.sc-ir-city-ledger-folio-table td.sticky-column.sc-ir-city-ledger-folio-table{background:var(--wa-color-brand-fill-quiet) !important}";
const IrCityLedgerFolioTableStyle0 = irCityLedgerFolioTableCss;

const DATE_DISPLAY_FORMAT = 'MMM DD, YYYY';
const DATE_INPUT_FORMAT = 'YYYY-MM-DD';
const IrCityLedgerFolioTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.folioSummaryLoaded = createEvent(this, "folioSummaryLoaded", 7);
        this.generateInvoice = createEvent(this, "generateInvoice", 7);
    }
    // ─── Props ───────────────────────────────────────────────────────────────
    agentId = null;
    propertyId;
    currencySymbol = '$';
    currencies = [];
    filters = {};
    // ─── State ───────────────────────────────────────────────────────────────
    tableState = {};
    data = [];
    isLoading = false;
    startingBalance = 0;
    selectedRowIds = new Set();
    holdTargetRow = null;
    totalCount = 0;
    pageIndex = 0;
    pageSize = 25;
    closingBalance = 0;
    // ─── Events ──────────────────────────────────────────────────────────────
    folioSummaryLoaded;
    generateInvoice;
    // ─── Private fields ──────────────────────────────────────────────────────
    columnHelper = createColumnHelper();
    pageSizes = [25, 50, 100];
    cityLedgerService = new CityLedgerService();
    holdDialogRef;
    // ─── Watchers ────────────────────────────────────────────────────────────
    async handleAgentIdChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.clearData();
        if (newValue && this.filters?.fromDate && this.filters?.toDate) {
            await this.fetchFolioData();
        }
    }
    async handleFiltersChange(newFilters) {
        if (!this.agentId || !newFilters?.fromDate || !newFilters?.toDate)
            return;
        this.pageIndex = 0;
        await this.fetchFolioData();
    }
    // ─── Utilities ───────────────────────────────────────────────────────────
    /** Single source of truth for date formatting throughout this component. */
    formatDate(date) {
        if (!date)
            return '';
        const m = hooks(date, [DATE_INPUT_FORMAT, hooks.ISO_8601], true);
        return m.isValid() ? m.format(DATE_DISPLAY_FORMAT) : date;
    }
    clearData() {
        this.data = [];
        this.startingBalance = 0;
        this.selectedRowIds = new Set();
        this.pageIndex = 0;
        this.totalCount = 0;
        this.closingBalance = 0;
    }
    // ─── Data ─────────────────────────────────────────────────────────────────
    sortFolioRows(rows) {
        const roomRows = rows.filter(r => r.docNumber !== null);
        const standaloneRows = rows.filter(r => r.docNumber === null);
        // Group room rows by (bookingNumber, docNumber)
        const groups = new Map();
        for (const row of roomRows) {
            const key = `${row.bookingNumber}__${row.docNumber}`;
            if (!groups.has(key))
                groups.set(key, []);
            groups.get(key).push(row);
        }
        // Sort rows within each group by SERVICE_DATE ascending
        for (const group of groups.values()) {
            group.sort((a, b) => a.serviceDate.localeCompare(b.serviceDate));
        }
        // Build slots — each slot has an anchor date and its rows
        const slots = [];
        for (const row of standaloneRows) {
            slots.push({ anchorDate: row.serviceDate, rows: [row] });
        }
        for (const group of groups.values()) {
            slots.push({ anchorDate: group[0].serviceDate, rows: group });
        }
        slots.sort((a, b) => a.anchorDate.localeCompare(b.anchorDate));
        return slots.flatMap(slot => slot.rows);
    }
    async fetchFolioData() {
        try {
            this.isLoading = true;
            const startRow = this.pageIndex * this.pageSize;
            const currencyId = calendar_data?.property?.currency?.id;
            const statusParams = (() => {
                switch (this.filters?.status) {
                    case 'billed':
                        return { IS_LOCKED: true, IS_HOLD: null };
                    case 'held':
                        return { IS_LOCKED: null, IS_HOLD: true };
                    case 'unbilled':
                        return { IS_LOCKED: false, IS_HOLD: false };
                    default:
                        return { IS_LOCKED: null, IS_HOLD: null };
                }
            })();
            const [result, statement] = await Promise.all([
                this.cityLedgerService.fetchCL({
                    AGENCY_ID: this.agentId,
                    START_DATE: this.filters?.fromDate,
                    END_DATE: this.filters?.toDate,
                    START_ROW: startRow,
                    END_ROW: startRow + this.pageSize - 1,
                    SEARCH_QUERY: this.filters?.search || null,
                    ...statusParams,
                }),
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: currencyId,
                    START_DATE: this.filters?.fromDate,
                    END_DATE: this.filters?.toDate,
                }),
            ]);
            const txList = result?.My_Cl_tx ?? [];
            this.totalCount = result?.TOTAL_COUNT ?? 0;
            const startingBal = statement?.STARTING_BALANCE ?? 0;
            this.startingBalance = startingBal;
            this.closingBalance = statement?.ENDING_BALANCE ?? 0;
            let totalDebits = 0;
            let totalCredits = 0;
            let unbilledCount = 0;
            const mappedRows = txList.map((tx) => {
                const mapped = mapClTxToFolioRow(tx);
                totalDebits += tx.DEBIT || 0;
                totalCredits += tx.CREDIT || 0;
                if (mapped.status.label === 'Unbilled')
                    unbilledCount++;
                return { ...mapped, _rowId: v4() };
            });
            // Sort before computing running balances so the balance column is correct
            const sortedRows = this.sortFolioRows(mappedRows);
            // let running = startingBal;
            // for (const row of sortedRows) {
            //   running += (row.debit || 0) - (row.credit || 0);
            //   row.balance = running;
            // }
            this.data = sortedRows;
            this.selectedRowIds = new Set();
            this.folioSummaryLoaded.emit({
                startingBalance: startingBal,
                totalDebits,
                totalCredits,
                currentBalance: this.closingBalance,
                unbilledCount,
            });
        }
        catch (error) {
            console.error('Failed to fetch city ledger folio', error);
            this.data = [];
        }
        finally {
            this.isLoading = false;
        }
    }
    // ─── Selection ────────────────────────────────────────────────────────────
    get selectedUnbilledRows() {
        return this.data.filter(row => this.selectedRowIds.has(row._rowId) && row.status?.label === 'Unbilled');
    }
    handleHoldToggled(rowId, newIsHold) {
        this.data = this.data.map(row => {
            if (row._rowId !== rowId)
                return row;
            const updatedRaw = { ...row._raw, IS_HOLD: newIsHold };
            const status = newIsHold ? { id: 'held', label: 'Held', variant: 'warning', description: '' } : { id: 'unbilled', label: 'Unbilled', variant: 'neutral', description: '' };
            return { ...row, _raw: updatedRaw, status };
        });
        this.holdTargetRow = null;
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
            cell: info => {
                const value = info.getValue();
                const rowId = `status_${info.row.original._rowId}`;
                return (h("div", { class: "folio-table__status-cell" }, h("wa-tag", { size: "small", variant: info.row.original.status.variant }, value, value === 'Billed' && h("wa-icon", { name: "lock" })), value !== 'Billed' && (h(Fragment, null, h("wa-tooltip", { for: rowId }, value === 'Held' ? 'Revert to Unbilled' : 'Hold entry'), h("wa-button", { onClick: () => {
                        this.holdTargetRow = info.row.original;
                        this.holdDialogRef.openModal();
                    }, id: rowId, appearance: "plain", variant: "neutral", size: "small" }, h("wa-icon", { name: "ban", style: { color: value === 'Held' ? 'var(--wa-color-danger-fill-loud)' : 'var(--wa-color-neutral-fill-normal)' } }))))));
            },
            enableGrouping: true,
            enableSorting: false,
        }),
        this.columnHelper.accessor('serviceDate', {
            header: 'Service Date',
            cell: info => this.formatDate(info.getValue()),
            aggregatedCell: info => this.formatDate(info.getValue()),
            enableGrouping: true,
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
            cell: info => (info.getValue() ? String(info.getValue()) : null),
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
            const isGrouped = header.column.getIsGrouped();
            const sortDirection = header.column.getIsSorted();
            const isNumericCol = ['debit', 'credit', 'balance'].includes(header.column.id);
            return (h("th", { key: header.id, class: {
                    'booking_heading': !header.isPlaceholder,
                    'cell--align-end': isNumericCol,
                    'cell--align-center': header.column.id === 'select',
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
                } }, h("span", null, flexRender(header.column.columnDef.header, header.getContext())), isGrouped && h("wa-icon", { style: { fontSize: '0.875rem', color: 'var(--wa-color-brand-fill-loud)' }, name: "object-group" }), sortDirection && (h("wa-icon", { style: { fontSize: '0.875rem', color: 'var(--wa-color-brand-fill-loud)' }, name: sortDirection === 'desc' ? 'arrow-up' : 'arrow-down' }))), (canSort || canGroup) && (h("wa-dropdown", { "onwa-select": e => {
                    switch (e.detail.item.value) {
                        case 'order-asc':
                            header.column.toggleSorting(true);
                            break;
                        case 'order-desc':
                            header.column.toggleSorting(false);
                            break;
                        case 'order-clear':
                            header.column.clearSorting();
                            break;
                        case 'group':
                            header.column.toggleGrouping();
                            break;
                    }
                }, style: { fontWeight: '400' } }, h("wa-button", { slot: "trigger", size: "small", variant: "neutral", appearance: "plain", class: "header-button" }, h("wa-icon", { name: "ellipsis-vertical" })), canSort && (h(Fragment, null, sortDirection !== 'desc' && (h("wa-dropdown-item", { value: "order-asc" }, h("wa-icon", { slot: "icon", name: "arrow-up" }), "Sort Ascending")), sortDirection !== 'asc' && (h("wa-dropdown-item", { value: "order-desc" }, h("wa-icon", { slot: "icon", name: "arrow-down" }), "Sort Descending")), sortDirection && (h("wa-dropdown-item", { value: "order-clear" }, h("wa-icon", { slot: "icon", name: "up-down" }), "Clear Sort")))), canGroup && (h("wa-dropdown-item", { value: "group" }, h("wa-icon", { slot: "icon", name: isGrouped ? 'object-ungroup' : 'object-group' }), isGrouped ? 'UnGroup' : 'Group'))))))));
        }))))));
    }
    renderStartingBalanceRow() {
        return (h("tr", { class: "ir-table-row balance-row balance-row--start" }, h("td", { class: "sticky-column" }), h("td", null, this.formatDate(this.filters?.fromDate)), h("td", null), h("td", null, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Starting Balance"), h("td", null), h("td", { class: "cell--align-end" }, this.startingBalance >= 0 ? formatAmount(this.currencySymbol, this.startingBalance) : ''), h("td", { class: "cell--align-end" }, this.startingBalance < 0 ? formatAmount(this.currencySymbol, this.startingBalance) : ''), h("td", { class: "cell--align-end" }, formatAmount(this.currencySymbol, this.startingBalance))));
    }
    renderEndingBalanceRow() {
        return (h("tr", { class: "ir-table-row balance-row balance-row--end" }, h("td", { class: "sticky-column" }), h("td", null, this.formatDate(this.filters?.toDate)), h("td", null), h("td", null, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Ending Balance"), h("td", null), h("td", { class: "cell--align-end" }, this.closingBalance >= 0 ? formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), h("td", { class: "cell--align-end" }, h("strong", null, this.closingBalance < 0 ? '-' : '', formatAmount(this.currencySymbol, Math.abs(this.closingBalance))))));
    }
    renderDataRows(table) {
        const rows = table.getRowModel().rows;
        if (rows.length === 0) {
            return (h("tr", null, h("td", { colSpan: this.columns.length, class: "folio-table__no-results" }, "No entries match the current filters.")));
        }
        return rows.map(row => {
            const isSelected = this.selectedRowIds.has(row.original._rowId);
            return (h("tr", { key: row.id, class: { 'ir-table-row': true, 'folio-table__row--selected': isSelected } }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: {
                    'cell--align-end': ['debit', 'credit', 'balance'].includes(cell.column.id),
                    'cell--align-center': cell.column.id === 'select',
                    'sticky-column': cell.column.id === 'status',
                    'input-column': ['debit', 'credit', 'balance'].includes(cell.column.id),
                    'grouped-cell': cell.getIsGrouped(),
                    'folio-table__select-col': cell.column.id === 'select',
                } }, this.renderCell(cell))))));
        });
    }
    // ─── Render ───────────────────────────────────────────────────────────────
    render() {
        if (!this.agentId) {
            return (h(Host, null, h("div", { class: "folio-table__empty-state" }, h("wa-icon", { name: "building-columns", style: { fontSize: '2.5rem', opacity: '0.3' } }), h("p", null, "Select an agent to view the folio ledger."))));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "folio-table__loading" }, h("ir-spinner", null))));
        }
        const table = useTable({
            data: this.data,
            columns: this.columns,
            state: this.tableState,
            enableGrouping: false,
            onStateChange: this.onTableStateChange,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
            getGroupedRowModel: getGroupedRowModel(),
            getExpandedRowModel: getExpandedRowModel(),
        });
        const total = this.totalCount;
        const pageSize = this.pageSize;
        const pageCount = Math.ceil(total / pageSize);
        const showingFrom = total ? this.pageIndex * pageSize + 1 : 0;
        const showingTo = total ? Math.min(this.pageIndex * pageSize + this.data.length, total) : 0;
        const hasUnbilledSelected = this.selectedUnbilledRows.length > 0;
        return (h(Host, null, hasUnbilledSelected && (h("div", { class: "folio-table__invoice-bar" }, h("span", { class: "folio-table__invoice-bar-text" }, h("wa-icon", { name: "file-invoice", style: { marginRight: '0.375rem' } }), this.selectedUnbilledRows.length, " unbilled item", this.selectedUnbilledRows.length !== 1 ? 's' : '', " selected"), h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.generateInvoice.emit(this.selectedUnbilledRows) }, h("wa-icon", { slot: "start", name: "file-invoice-dollar" }), "Generate Invoice"), h("ir-custom-button", { size: "small", variant: "neutral", appearance: "outlined", onClickHandler: () => (this.selectedRowIds = new Set()) }, "Clear Selection"))), h("div", { class: "table--container" }, h("table", { class: "table data-table" }, this.renderTableHead(table), h("tbody", null, this.renderStartingBalanceRow(), this.renderDataRows(table), this.renderEndingBalanceRow()))), h("ir-pagination", { class: "data-table--pagination", total: total, pages: pageCount, pageSize: pageSize, currentPage: this.pageIndex + 1, allowPageSizeChange: true, showing: { from: showingFrom, to: showingTo }, pageSizes: this.pageSizes, recordLabel: '', onPageChange: async (event) => {
                this.pageIndex = event.detail.currentPage - 1;
                await this.fetchFolioData();
            }, onPageSizeChange: async (event) => {
                if (event.detail.pageSize) {
                    this.pageSize = event.detail.pageSize;
                    this.pageIndex = 0;
                    await this.fetchFolioData();
                }
            } }), h("ir-hold-transaction-dialog", { row: this.holdTargetRow, currencySymbol: this.currencySymbol, ref: el => (this.holdDialogRef = el), onHoldToggled: e => this.handleHoldToggled(e.detail.rowId, e.detail.newIsHold) })));
    }
    static get watchers() { return {
        "agentId": ["handleAgentIdChange"],
        "filters": ["handleFiltersChange"]
    }; }
};
IrCityLedgerFolioTable.style = IrCityLedgerFolioTableStyle0;

const irCityLedgerToolbarCss = ".sc-ir-city-ledger-toolbar-h{display:block}.toolbar.sc-ir-city-ledger-toolbar{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;padding:0.75rem 1rem;border:1px solid var(--wa-color-neutral-border-quiet, #e5e7eb);border-radius:0.625rem;background:var(--wa-color-surface-default, #fff)}.toolbar__stats.sc-ir-city-ledger-toolbar{display:flex;align-items:center;gap:1.25rem;flex-wrap:wrap}.toolbar__stats-placeholder.sc-ir-city-ledger-toolbar{flex:1}.toolbar__stat.sc-ir-city-ledger-toolbar{display:flex;flex-direction:column;gap:0.125rem}.toolbar__stat-label.sc-ir-city-ledger-toolbar{font-size:0.6875rem;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--wa-color-text-quiet, #6b7280);white-space:nowrap}.toolbar__stat-value.sc-ir-city-ledger-toolbar{font-size:1rem;font-weight:700;color:var(--wa-color-text-normal, #111827);font-variant-numeric:tabular-nums;white-space:nowrap}.toolbar__stat-value--negative.sc-ir-city-ledger-toolbar{color:var(--wa-color-danger-fill-loud, #dc2626)}.toolbar__stats-sep.sc-ir-city-ledger-toolbar{width:1px;height:2rem;background:var(--wa-color-neutral-border-quiet, #e5e7eb);flex-shrink:0}.toolbar__actions.sc-ir-city-ledger-toolbar{display:flex;align-items:center;gap:0.5rem;margin-inline-start:auto;flex-shrink:0}";
const IrCityLedgerToolbarStyle0 = irCityLedgerToolbarCss;

const IrCityLedgerToolbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.createInvoice = createEvent(this, "createInvoice", 7);
    }
    agentId = null;
    currencySymbol = '$';
    accountOverview = null;
    createInvoice;
    cityLedgerService = new CityLedgerService();
    componentWillLoad() {
        if (this.agentId)
            this.fetchOverview();
    }
    async handleAgentIdChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.accountOverview = null;
        if (newValue)
            await this.fetchOverview();
    }
    async refresh() {
        await this.fetchOverview();
    }
    async fetchOverview() {
        if (!this.agentId)
            return;
        this.accountOverview = await this.cityLedgerService.getCLAccountOverview({
            AGENCY_ID: this.agentId,
            CURRENCY_ID: calendar_data?.property?.currency?.id,
        });
    }
    render() {
        return (h(Host, { key: '268fe92a96f1617d8dda5c9ecca05624790702a0' }, h("div", { key: '3da0287d1be3e1cd9e5c9c4e865fc65ecd3f40ae', class: "toolbar" }, this.accountOverview ? (h("div", { class: "toolbar__stats" }, h("div", { class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, "Net Balance"), h("span", { class: {
                'toolbar__stat-value': true,
                'toolbar__stat-value--negative': this.accountOverview.ACCOUNT_NET_BALANCE < 0,
            } }, this.accountOverview.ACCOUNT_NET_BALANCE < 0 ? '-' : '', formatAmount(this.currencySymbol, Math.abs(this.accountOverview.ACCOUNT_NET_BALANCE)))), h("div", { class: "toolbar__stats-sep" }), h("div", { class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, "Due Invoiced"), h("span", { class: "toolbar__stat-value" }, formatAmount(this.currencySymbol, this.accountOverview.TOTAL_DUE_INVOICED))), h("div", { class: "toolbar__stats-sep" }), h("div", { class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, "Uninvoiced"), h("span", { class: "toolbar__stat-value" }, formatAmount(this.currencySymbol, this.accountOverview.TOTAL_UNINVOICED))))) : (h("div", { class: "toolbar__stats-placeholder" })), h("div", { key: '2a46f86f9eef55605f225bbdac31c662988e8310', class: "toolbar__actions" }, h("ir-custom-button", { key: 'b57a009cde23fdd749bba80a77b4fa79c9877ef6', variant: "brand", onClickHandler: () => this.createInvoice.emit() }, "Create Invoice")))));
    }
    static get watchers() { return {
        "agentId": ["handleAgentIdChange"]
    }; }
};
IrCityLedgerToolbar.style = IrCityLedgerToolbarStyle0;

const irPageCss = ".sc-ir-page-h{display:block;height:100%}.page-title.sc-ir-page{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.ir-page__container.sc-ir-page{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%}.tax-page__header.sc-ir-page{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}";
const IrPageStyle0 = irPageCss;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: 'd9cd297e35185a6b18affbe773dbbdcdda56aaf9' }, h("ir-interceptor", { key: 'cafeda0eccada08c55f5541cc92ad66ee4ce1a58' }), h("ir-toast", { key: 'eac7278e563831a180e31017e3f6616d2fd85699' }), h("main", { key: '68eaee848c13146456a38591a38ad757974c9297', class: "ir-page__container" }, h("header", { key: '20e81a0b540a71f123d97acc503a2b234d8bbaaf', class: "tax-page__header" }, h("slot", { key: 'c59ce4bf3127a450856d99d4e81bed5b4df36da6', name: "heading" }, h("div", { key: 'ba3175d80f48934bde3003f4f1462b941d503c80', class: "tax-page__heading" }, h("h3", { key: '33791e7b424ba26e94a45ce282cd35525bd06df6', class: "page-title" }, this.label), this.description && h("p", { key: 'ba994ac3ce03962ec4a91512a9b699c868a3bf2b', class: "tax-page__subtitle" }, this.description))), h("slot", { key: 'f03a1d14eedcbd745a01d65cdd8a046c04e8b59a', name: "page-header" })), h("slot", { key: 'c2f75d8cc0e5b6eae6987f8d2baa72ef9ef50809' }))));
    }
};
IrPage.style = IrPageStyle0;

export { IrCityLedgerFiscalDocuments as ir_city_ledger_fiscal_documents, IrCityLedgerFiscalDocumentsFilters as ir_city_ledger_fiscal_documents_filters, IrCityLedgerFiscalDocumentsTable as ir_city_ledger_fiscal_documents_table, IrCityLedgerFolio as ir_city_ledger_folio, IrCityLedgerFolioFilters as ir_city_ledger_folio_filters, IrCityLedgerFolioTable as ir_city_ledger_folio_table, IrCityLedgerToolbar as ir_city_ledger_toolbar, IrPage as ir_page };

//# sourceMappingURL=ir-city-ledger-fiscal-documents_8.entry.js.map