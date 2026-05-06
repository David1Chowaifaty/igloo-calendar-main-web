import { formatAmount } from "../../../../utils/utils";
import { flexRender, useTable } from "../../../../utils/useTable";
import { Fragment, Host, h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel, getExpandedRowModel, getGroupedRowModel, getSortedRowModel } from "@tanstack/table-core";
import moment from "moment";
const DATE_DISPLAY_FORMAT = 'MMM DD, YYYY';
const DATE_INPUT_FORMAT = 'YYYY-MM-DD';
export class IrCityLedgerFolioTable {
    // ─── Props ───────────────────────────────────────────────────────────────
    agentId = null;
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
    // ─── State ───────────────────────────────────────────────────────────────
    tableState = {};
    selectedRowIds = new Set();
    holdTargetRow = null;
    // ─── Events ──────────────────────────────────────────────────────────────
    pageChange;
    generateInvoice;
    fetchRequested;
    editEntry;
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
        this.columnHelper.display({
            id: 'actions',
            header: '',
            size: 48,
            cell: info => {
                const row = info.row.original;
                if (row._raw.IS_LOCKED)
                    return null;
                return (h("wa-button", { appearance: "plain", variant: "neutral", size: "small", onClick: () => this.editEntry.emit(row._raw) }, h("wa-icon", { name: "pencil", style: { fontSize: '0.875rem' } })));
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
        return (h("tr", { class: "ir-table-row balance-row balance-row--start" }, h("td", { class: "sticky-column" }), h("td", null, this.formatDate(this.fromDate)), h("td", null), h("td", null, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Starting Balance"), h("td", null), h("td", { class: "cell--align-end" }, this.startingBalance >= 0 ? formatAmount(this.currencySymbol, this.startingBalance) : ''), h("td", { class: "cell--align-end" }, this.startingBalance < 0 ? formatAmount(this.currencySymbol, this.startingBalance) : ''), h("td", { class: "cell--align-end" }, formatAmount(this.currencySymbol, this.startingBalance))));
    }
    renderEndingBalanceRow() {
        return (h("tr", { class: "ir-table-row balance-row balance-row--end" }, h("td", { class: "sticky-column" }), h("td", null, this.formatDate(this.toDate)), h("td", null), h("td", null, h("wa-icon", { name: "scale-balanced", style: { marginRight: '0.375rem', fontSize: '0.875rem' } }), "Ending Balance"), h("td", null), h("td", { class: "cell--align-end" }, this.closingBalance >= 0 ? formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), h("td", { class: "cell--align-end" }, this.closingBalance < 0 ? formatAmount(this.currencySymbol, Math.abs(this.closingBalance)) : ''), h("td", { class: "cell--align-end" }, h("strong", null, this.closingBalance < 0 ? '-' : '', formatAmount(this.currencySymbol, Math.abs(this.closingBalance))))));
    }
    renderDataRows(table) {
        const rows = table.getRowModel().rows;
        if (rows.length === 0) {
            return (h("tr", null, h("td", { colSpan: this.columns.length + 1, class: "folio-table__no-results" }, "No entries match the current filters.")));
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
        if (!this.hasFetched) {
            const hasDate = !!(this.fromDate || this.toDate);
            return (h(Host, null, h("div", { class: "folio-table__date-prompt" }, h("div", { class: "folio-table__date-prompt-icon" }, h("wa-icon", { name: "calendar-days" })), h("p", { class: "folio-table__date-prompt-title" }, "Select a date range to get started"), hasDate && (h("wa-animation", { play: true, iterations: 1, id: "cleanAnimation", class: "clean-button", name: "rubberBand", easing: "ease-in-out", duration: 800 }, h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.fetchRequested.emit() }, h("wa-icon", { slot: "start", name: "magnifying-glass" }), "Load Transactions"))))));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "folio-table__loading" }, h("ir-spinner", null))));
        }
        const table = useTable({
            data: this.displayData,
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
        const pageCount = Math.ceil(total / this.pageSize);
        const showingFrom = total ? this.pageIndex * this.pageSize + 1 : 0;
        const showingTo = total ? Math.min(this.pageIndex * this.pageSize + this.displayData.length, total) : 0;
        const hasUnbilledSelected = this.selectedUnbilledRows.length > 0;
        return (h(Host, null, hasUnbilledSelected && (h("div", { class: "folio-table__invoice-bar" }, h("span", { class: "folio-table__invoice-bar-text" }, h("wa-icon", { name: "file-invoice", style: { marginRight: '0.375rem' } }), this.selectedUnbilledRows.length, " unbilled item", this.selectedUnbilledRows.length !== 1 ? 's' : '', " selected"), h("ir-custom-button", { size: "small", variant: "brand", onClickHandler: () => this.generateInvoice.emit(this.selectedUnbilledRows) }, h("wa-icon", { slot: "start", name: "file-invoice-dollar" }), "Generate Invoice"), h("ir-custom-button", { size: "small", variant: "neutral", appearance: "outlined", onClickHandler: () => (this.selectedRowIds = new Set()) }, "Clear Selection"))), h("div", { class: "table--container" }, h("table", { class: "table data-table" }, this.renderTableHead(table), h("tbody", null, this.renderStartingBalanceRow(), this.renderDataRows(table), this.renderEndingBalanceRow()))), h("ir-pagination", { class: "data-table--pagination", total: total, pages: pageCount, pageSize: this.pageSize, currentPage: this.pageIndex + 1, allowPageSizeChange: true, showing: { from: showingFrom, to: showingTo }, pageSizes: this.pageSizes, recordLabel: '', onPageChange: (event) => {
                event.stopPropagation();
                this.pageChange.emit({ pageIndex: event.detail.currentPage - 1, pageSize: this.pageSize });
            }, onPageSizeChange: (event) => {
                event.stopPropagation();
                if (event.detail.pageSize) {
                    this.pageChange.emit({ pageIndex: 0, pageSize: event.detail.pageSize });
                }
            } }), h("ir-hold-transaction-dialog", { row: this.holdTargetRow, currencySymbol: this.currencySymbol, ref: el => (this.holdDialogRef = el), onHoldToggled: e => this.handleHoldToggled(e.detail.rowId, e.detail.newIsHold) })));
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
                "attribute": "agent-id",
                "reflect": false,
                "defaultValue": "null"
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
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow"
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
                "attribute": "is-loading",
                "reflect": false,
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
                "attribute": "starting-balance",
                "reflect": false,
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
                "attribute": "closing-balance",
                "reflect": false,
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
                "attribute": "total-count",
                "reflect": false,
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
                "attribute": "page-index",
                "reflect": false,
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
                "attribute": "page-size",
                "reflect": false,
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
                "attribute": "from-date",
                "reflect": false,
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
                "attribute": "to-date",
                "reflect": false,
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
                "attribute": "has-fetched",
                "reflect": false,
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
                "attribute": "currency-symbol",
                "reflect": false,
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
                            "id": "src/models/property.ts::ICurrency"
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
            }
        };
    }
    static get states() {
        return {
            "tableState": {},
            "selectedRowIds": {},
            "holdTargetRow": {},
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
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow"
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
                    "resolved": "{ PR_ID?: number; ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; CURRENCY_ID?: number; CREDIT?: number; DEBIT?: number; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; TOTAL_AMOUNT?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; DESCRIPTION?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }",
                    "references": {
                        "FolioRow": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/types.ts::FolioRow"
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
//# sourceMappingURL=ir-city-ledger-folio-table.js.map
