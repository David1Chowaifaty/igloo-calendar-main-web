import { formatAmount } from "../../../../utils/utils";
import { flexRender, useTable } from "../../../../utils/useTable";
import { Host, h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel, getExpandedRowModel, getGroupedRowModel, getSortedRowModel } from "@tanstack/table-core";
import moment from "moment";
import { actionableClTypes } from "../../../../services/city-ledger.service";
import { ClTxTypeCode } from "../../../../types/enums";
const DATE_DISPLAY_FORMAT = 'MMM DD, YYYY';
const DATE_INPUT_FORMAT = 'YYYY-MM-DD';
export class IrCityLedgerFolioTable {
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
        const m = moment(date, [DATE_INPUT_FORMAT, moment.ISO_8601], true);
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
            cell: info => {
                if (info?.row?.original?._raw?.CL_TX_TYPE_CODE === ClTxTypeCode.OpeningBalance) {
                    return null;
                }
                return (h("div", { class: "folio-table__status-cell" }, h("ir-cl-status-tag", { transaction: info.row.original })));
            },
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
                        this.selectedBookingNumber = val;
                        this.bookingDrawerOpen = true;
                    } }, val));
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
                if (row._raw.IS_LOCKED || row._raw.CL_TX_TYPE_CODE === ClTxTypeCode.OpeningBalance)
                    return h("div", { class: 'fiscal-table__action-trigger --placeholder' });
                const canEditOrDelete = actionableClTypes.has(row._raw.CL_TX_TYPE_CODE) && !row._raw.CATEGORY;
                return (h("wa-dropdown", { "onwa-hide": e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                    }, "onwa-select": (e) => {
                        this.handleAction(e.detail.item.value, row);
                    } }, h("wa-button", { slot: "trigger", size: "s", variant: "neutral", appearance: "plain", class: "fiscal-table__action-trigger" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })), h("wa-dropdown-item", { value: "hold-transaction" }, row._raw.IS_HOLD ? 'Revert to Unbilled' : 'Hold entry'), canEditOrDelete && h("wa-dropdown-item", { value: "edit-transaction" }, "Edit"), canEditOrDelete && (h("wa-dropdown-item", { value: "delete-transaction", variant: "danger" }, "Delete"))));
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
            return (h("wa-button", { appearance: "plain", size: "s", class: "group-expander", onClick: () => cell.row.toggleExpanded() }, h("wa-icon", { style: { fontSize: '0.875rem' }, slot: "start", name: cell.row.getIsExpanded() ? 'chevron-down' : 'chevron-up' }), flexRender(cell.column.columnDef.cell, cell.getContext()), " ", h("span", { slot: "end" }, "(", cell.row.subRows.length, ")")));
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
            return (h(Host, null, h("div", { class: "folio-table__date-prompt" }, h("div", { class: "folio-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "folio-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (h("wa-animation", { play: true, iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Transactions"))))));
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
        return (h(Host, null, hasUnbilledSelected && (h("div", { class: "folio-table__invoice-bar" }, h("span", { class: "folio-table__invoice-bar-text" }, h("wa-icon", { name: "file-invoice", style: { marginRight: '0.375rem' } }), this.selectedUnbilledRows.length, " unbilled item", this.selectedUnbilledRows.length !== 1 ? 's' : '', " selected"), h("ir-custom-button", { size: "s", variant: "brand", onClickHandler: () => this.generateInvoice.emit(this.selectedUnbilledRows) }, h("wa-icon", { slot: "start", name: "file-invoice-dollar" }), "Generate Invoice"), h("ir-custom-button", { size: "s", variant: "neutral", appearance: "outlined", onClickHandler: () => (this.selectedRowIds = new Set()) }, "Clear Selection"))), h("div", { class: "table--container" }, h("table", { class: "table data-table" }, this.renderTableHead(table), h("tbody", null, !this.hideBalanceInfo && this.renderStartingBalanceRow(), this.renderDataRows(table), !this.hideBalanceInfo && this.renderEndingBalanceRow()))), h("ir-pagination", { class: "data-table--pagination", total: total, pages: pageCount, pageSize: this.pageSize, currentPage: this.pageIndex + 1, allowPageSizeChange: true, showing: { from: showingFrom, to: showingTo }, pageSizes: this.pageSizes, recordLabel: '', onPageChange: (event) => {
                event.stopPropagation();
                this.pageChange.emit({ pageIndex: event.detail.currentPage - 1, pageSize: this.pageSize });
            }, onPageSizeChange: (event) => {
                event.stopPropagation();
                if (event.detail.pageSize) {
                    this.pageChange.emit({ pageIndex: 0, pageSize: event.detail.pageSize });
                }
            } }), h("ir-hold-transaction-dialog", { row: this.holdTargetRow, currencySymbol: this.currencySymbol, ref: el => (this.holdDialogRef = el), onHoldToggled: e => this.handleHoldToggled(e.detail.rowId, e.detail.newIsHold) }), h("ir-booking-details-drawer", { open: this.bookingDrawerOpen, propertyId: this.propertyId, ticket: this.ticket, language: this.language, bookingNumber: this.selectedBookingNumber, onBookingDetailsDrawerClosed: () => (this.bookingDrawerOpen = false) })));
    }
    static get is() { return "ir-city-ledger-folio-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-folio-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-folio-table.css"]
        };
    }
    static get properties() {
        return {
            "agentId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "agent-id",
                "defaultValue": "null"
            },
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "property-id"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FolioRow[]",
                    "resolved": "FolioRow[]",
                    "references": {
                        "FolioRow": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow",
                            "referenceLocation": "FolioRow"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "isLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-loading",
                "defaultValue": "false"
            },
            "startingBalance": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "starting-balance",
                "defaultValue": "0"
            },
            "closingBalance": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "closing-balance",
                "defaultValue": "0"
            },
            "totalCount": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "total-count",
                "defaultValue": "0"
            },
            "pageIndex": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "page-index",
                "defaultValue": "0"
            },
            "pageSize": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "page-size",
                "defaultValue": "25"
            },
            "fromDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "from-date",
                "defaultValue": "''"
            },
            "toDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "to-date",
                "defaultValue": "''"
            },
            "hasFetched": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "has-fetched",
                "defaultValue": "false"
            },
            "currencySymbol": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "currency-symbol",
                "defaultValue": "'$'"
            },
            "currencies": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICurrency[]",
                    "resolved": "ICurrency[]",
                    "references": {
                        "ICurrency": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::ICurrency",
                            "referenceLocation": "ICurrency"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "hideBalanceInfo": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hide-balance-info",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "tableState": {},
            "selectedRowIds": {},
            "holdTargetRow": {},
            "bookingDrawerOpen": {},
            "selectedBookingNumber": {},
            "_localDataOverride": {}
        };
    }
    static get events() {
        return [{
                "method": "pageChange",
                "name": "pageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ pageIndex: number; pageSize: number }",
                    "resolved": "{ pageIndex: number; pageSize: number; }",
                    "references": {}
                }
            }, {
                "method": "generateInvoice",
                "name": "generateInvoice",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FolioRow[]",
                    "resolved": "FolioRow[]",
                    "references": {
                        "FolioRow": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow",
                            "referenceLocation": "FolioRow"
                        }
                    }
                }
            }, {
                "method": "fetchRequested",
                "name": "fetchRequested",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "editEntry",
                "name": "editEntry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FolioRow['_raw']",
                    "resolved": "{ PR_ID?: number; ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; DOC_NUMBER?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; EXTERNAL_REF?: string; FD_ID?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; DESCRIPTION?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }",
                    "references": {
                        "FolioRow": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow",
                            "referenceLocation": "FolioRow"
                        }
                    }
                }
            }, {
                "method": "deleteEntry",
                "name": "deleteEntry",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FolioRow['_raw']",
                    "resolved": "{ PR_ID?: number; ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; DOC_NUMBER?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; EXTERNAL_REF?: string; FD_ID?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; DESCRIPTION?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }",
                    "references": {
                        "FolioRow": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow",
                            "referenceLocation": "FolioRow"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "data",
                "methodName": "onDataChange"
            }];
    }
}
