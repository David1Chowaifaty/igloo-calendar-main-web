import { h } from "@stencil/core";
import { createColumnHelper, getCoreRowModel } from "@tanstack/table-core";
import { flexRender, useTable } from "../../../utils/useTable";
import dp_report, { setDpReportTablePage, setDpReportTablePageSize } from "../../../stores/dp_report.store";
import { formatAmount } from "../../../utils/utils";
export class IrDpReportTable {
    pageSizes = [20, 50, 100];
    columnHelper = createColumnHelper();
    columns = [
        this.columnHelper.display({
            id: 'booking_nbr',
            header: 'Booking #',
            cell: info => {
                const row = info.row.original;
                return h("ir-booking-number-cell", { class: "dp-report__booking-nbr-cell", bookingNumber: row.booking_nbr, origin: row.raw.origin });
            },
        }),
        this.columnHelper.display({
            id: 'booked_on',
            header: 'Booked on',
            cell: info => h("ir-booked-on-cell", { showTime: false, bookedOn: info.row.original.raw.booked_on }),
        }),
        this.columnHelper.display({
            id: 'booked_by',
            header: 'Booked by',
            cell: info => {
                const row = info.row.original;
                return h("ir-booked-by-cell", { guest: row.raw.guest, identifier: row.booking_nbr, clickableGuest: true });
            },
        }),
        this.columnHelper.display({
            id: 'dates',
            header: 'Dates',
            cell: info => h("ir-dates-cell", { display: "inline", showArrow: true, checkIn: info.row.original.raw.from_date, checkOut: info.row.original.raw.to_date }),
        }),
        this.columnHelper.display({
            id: 'units',
            header: 'Units booked',
            cell: info => h("span", null, info.row.original.raw.rooms_length),
        }),
        this.columnHelper.accessor('profit', {
            id: 'effect',
            header: 'Effect',
            cell: info => this.renderEffect(info.row.original),
        }),
    ];
    renderEffect(row) {
        if (row.profit === 0) {
            return h("span", { class: "dp-report-table__effect" }, formatAmount(row.currencySymbol, 0));
        }
        const isGain = row.profit > 0;
        return (h("span", { class: { 'dp-report-table__effect': true, 'dp-report-table__effect--gain': isGain, 'dp-report-table__effect--loss': !isGain } }, h("wa-icon", { name: isGain ? 'arrow-trend-up' : 'arrow-trend-down' }), isGain ? '+' : '-', formatAmount(row.currencySymbol, Math.abs(row.profit))));
    }
    handlePageChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        setDpReportTablePage(event.detail.currentPage);
    };
    handlePageSizeChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (event.detail.pageSize) {
            setDpReportTablePageSize(event.detail.pageSize);
        }
    };
    render() {
        const { currentPage, pageSize } = dp_report.tablePagination;
        const total = dp_report.rows.length;
        const pageCount = Math.max(Math.ceil(total / pageSize), 1);
        const startIndex = (currentPage - 1) * pageSize;
        const pageRows = dp_report.rows.slice(startIndex, startIndex + pageSize);
        const table = useTable({
            data: pageRows,
            columns: this.columns,
            getCoreRowModel: getCoreRowModel(),
        });
        return (h("div", { key: 'cc5ef8be5647633471b11ea785cc1a233f248b35', class: "dp-report-table" }, h("div", { key: 'afcc732c065a3fe8ac59c76ee25f264ce2bb77bd', class: "table--container" }, h("table", { key: '0f69f34f60701526737d0b9290f875a6a52b3638', class: "table data-table" }, h("thead", { key: '4eeec53f3d578914d4452dae22711d2ad0b02f5d' }, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (h("th", { key: header.id, class: { 'cell--align-end': header.column.id === 'effect', 'cell--align-center': header.column.id === 'units' } }, flexRender(header.column.columnDef.header, header.getContext())))))))), h("tbody", { key: '41a68e0256983581599350655489f004b9fdaa7e' }, dp_report.isLoading ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-spinner", null)))) : table.getRowModel().rows.length === 0 ? (h("tr", null, h("td", { colSpan: this.columns.length, class: "empty-row" }, h("ir-empty-state", { message: "No dynamic pricing data for this date range." })))) : (table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: { 'cell--align-end': cell.column.id === 'effect', 'cell--align-center': cell.column.id === 'units' } }, flexRender(cell.column.columnDef.cell, cell.getContext()))))))))))), h("ir-pagination", { key: 'c2089722edf9c7f056d96ecd714e19441664fae3', class: "dp-report-table__pagination", total: total, pages: pageCount, pageSize: pageSize, currentPage: currentPage, allowPageSizeChange: true, pageSizes: this.pageSizes, showing: { from: total ? startIndex + 1 : 0, to: Math.min(startIndex + pageSize, total) }, recordLabel: "bookings", onPageChange: this.handlePageChange, onPageSizeChange: this.handlePageSizeChange })));
    }
    static get is() { return "ir-dp-report-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dp-report-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dp-report-table.css", "../../../common/table.css"]
        };
    }
}
