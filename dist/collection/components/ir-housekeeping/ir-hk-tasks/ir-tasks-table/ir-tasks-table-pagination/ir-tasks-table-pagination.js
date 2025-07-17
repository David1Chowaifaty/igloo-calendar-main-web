import hkTasksStore, { loadMoreTasks, shouldLoadMore, updateCurrentPage, updatePageSize } from "../../../../../stores/hk-tasks.store";
import { h, Host } from "@stencil/core";
export class IrTasksTablePagination {
    render() {
        var _a, _b, _c;
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasksStore.pagination;
        const totalTasks = (_b = (_a = hkTasksStore.tasks) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        const pageSizes = hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasksStore.pagination.tasksList.slice(0, 1) : (_c = hkTasksStore.pagination.tasksList) === null || _c === void 0 ? void 0 : _c.filter(t => t <= totalTasks);
        return (h(Host, { key: '6f417827ec1e830dbcc11ea1c5083d363036c063' }, shouldLoadMore() && h("ir-button", { key: 'd3c8e51ba0e3fcbbc59f9660c1f3efc420a1793a', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: '68f485d3626b2c1dda34d8f84c139203fd1bce18', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
    static get is() { return "ir-tasks-table-pagination"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-table-pagination.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-table-pagination.css"]
        };
    }
}
//# sourceMappingURL=ir-tasks-table-pagination.js.map
