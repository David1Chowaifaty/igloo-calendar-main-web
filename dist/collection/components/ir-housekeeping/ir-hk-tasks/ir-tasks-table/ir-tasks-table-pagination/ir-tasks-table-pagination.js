import hkTasksStore, { loadMoreTasks, shouldLoadMore, updateCurrentPage, updatePageSize } from "../../../../../stores/hk-tasks.store";
import { h, Host } from "@stencil/core";
export class IrTasksTablePagination {
    render() {
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasksStore.pagination;
        const totalTasks = hkTasksStore.tasks?.length ?? 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        const pageSizes = hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasksStore.pagination.tasksList.slice(0, 1) : hkTasksStore.pagination.tasksList;
        return (h(Host, { key: '47355058b114b702e049bff9ccc6d1b174da0ccc' }, shouldLoadMore() && h("ir-button", { key: 'd08c13919e8ba27aada0cd3fa0b9aa6b0ddb587a', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: '0c4bff1292a3c57997b309838d2ced8ea199bf58', showing: {
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
