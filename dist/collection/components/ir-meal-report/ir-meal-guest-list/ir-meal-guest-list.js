import { Host, h } from "@stencil/core";
import { flexRender, useTable } from "../../../utils/useTable";
import { createColumnHelper, getCoreRowModel } from "@tanstack/table-core";
export class IrMealGuestList {
    guestList = [];
    tableState = {};
    columnHelper = createColumnHelper();
    columns = [
        this.columnHelper.accessor(row => row.unit.name, {
            id: 'unit',
            header: 'Unit',
            enableSorting: false,
            cell: info => h("span", { class: "meal-guest-list__unit" }, info.getValue()),
        }),
        this.columnHelper.accessor(row => `${row.guest.first_name} ${row.guest.last_name}`.trim(), {
            id: 'guest',
            header: 'Guest name',
            enableSorting: false,
            cell: info => (h("div", { class: "meal-guest-list__guest" }, h("span", null, info.getValue()), info.row.original.is_arriving_today && (h("wa-badge", { variant: "brand", appearance: "filled", pill: true }, "Same day arrival")))),
        }),
        this.columnHelper.accessor(row => `${row.occupancy.adult_nbr} - ${row.occupancy.children_nbr}`, {
            id: 'occupancy',
            header: () => (h("span", null, h("span", { class: "meal-guest-list__cell--ad" }, "Ad"), h("span", { class: "meal-guest-list__cell--ch" }, "Ch"))),
            enableSorting: false,
            cell: info => {
                const [ad, ch] = info.getValue().split(' - ');
                return (h("span", null, h("span", { class: "meal-guest-list__cell--ad" }, ad), h("span", { class: "meal-guest-list__cell--ch" }, ch)));
            },
        }),
        this.columnHelper.accessor(row => row.source?.Label ?? '', {
            id: 'source',
            header: 'Source',
            enableSorting: false,
            cell: info => h("span", { class: "meal-guest-list__muted" }, info.getValue()),
        }),
        this.columnHelper.accessor(row => row.rate_plan?.short_name ?? '', {
            id: 'ratePlan',
            header: 'Rate plan',
            enableSorting: false,
            cell: info => h("span", { class: "meal-guest-list__muted" }, info.getValue()),
        }),
    ];
    onTableStateChange = (updater) => {
        const next = typeof updater === 'function' ? updater(this.tableState) : updater;
        if (JSON.stringify(this.tableState) === JSON.stringify(next))
            return;
        this.tableState = next;
    };
    render() {
        const list = this.guestList ?? [];
        if (list.length === 0) {
            return (h(Host, null, h("div", { class: "meal-guest-list__empty" }, h("ir-empty-state", { message: "No guests found for the current filters." }))));
        }
        const table = useTable({
            data: list,
            columns: this.columns,
            state: this.tableState,
            onStateChange: this.onTableStateChange,
            getCoreRowModel: getCoreRowModel(),
            // getSortedRowModel: getSortedRowModel(),
        });
        const totalAdults = list.reduce((sum, item) => sum + (item.occupancy?.adult_nbr || 0), 0);
        const totalChildren = list.reduce((sum, item) => sum + (item.occupancy?.children_nbr || 0), 0);
        const isCentered = (id) => id === 'occupancy';
        return (h(Host, null, h("div", { class: "table--container" }, h("table", { class: "table data-table  mb-0" }, h("thead", null, table.getHeaderGroups().map(headerGroup => (h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => {
            const canSort = header.column.getCanSort();
            return (h("th", { key: header.id, class: { 'sortable': canSort, 'cell__rate-plan': header.id === 'ratePlan', 'cell--align-center': isCentered(header.column.id) }, onClick: canSort ? header.column.getToggleSortingHandler() : undefined }, h("div", { class: { 'meal-guest-list__th': false, 'meal-guest-list__th--center': isCentered(header.column.id) } }, h("span", null, flexRender(header.column.columnDef.header, header.getContext())))));
        }))))), h("tbody", null, table.getRowModel().rows.map(row => (h("tr", { key: row.id, class: "ir-table-row" }, row.getVisibleCells().map(cell => (h("td", { key: cell.id, class: { 'cell--align-center': isCentered(cell.column.id) } }, flexRender(cell.column.columnDef.cell, cell.getContext())))))))), h("tfoot", null, h("tr", { class: "meal-guest-list__total-row" }, h("td", null), h("td", { class: "meal-guest-list__total-label" }, "Total"), h("td", { class: "meal-guest-list__total-value " }, h("span", null, h("span", { class: "meal-guest-list__cell--ad --total" }, totalAdults), h("span", { class: "meal-guest-list__cell--ch --total" }, totalChildren))), h("td", { colSpan: 2, class: "meal-guest-list__total-meta" })))))));
    }
    static get is() { return "ir-meal-guest-list"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-meal-guest-list.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-meal-guest-list.css"]
        };
    }
    static get properties() {
        return {
            "guestList": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "MealGuestEntry[]",
                    "resolved": "MealGuestEntry[]",
                    "references": {
                        "MealGuestEntry": {
                            "location": "import",
                            "path": "@/services/meal-report/types",
                            "id": "src/services/meal-report/types.ts::MealGuestEntry",
                            "referenceLocation": "MealGuestEntry"
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
            "tableState": {}
        };
    }
}
