import hkTasksStore, { loadMoreTasks, shouldLoadMore, updateCurrentPage, updatePageSize } from "../../../../../stores/hk-tasks.store";
import { h, Host } from "@stencil/core";
import { t } from "../../../../../services/locale/t";
export class IrTasksTablePagination {
    render() {
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasksStore.pagination;
        const totalTasks = hkTasksStore.tasks?.length ?? 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        const pageSizes = hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasksStore.pagination.tasksList.slice(0, 1) : hkTasksStore.pagination.tasksList;
        return (h(Host, { key: '7c787ec3fec032c30709933ec8da257eea2f03b0' }, shouldLoadMore() && (h("ir-custom-button", { key: '3cee81a7a0d2be464f311f6400e2a14ee9d3925a', variant: "brand", size: "s", class: "tasks-load-more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }, t('Lcz_LoadMore', { fallback: 'Load more' }))), h("ir-pagination", { key: '7ef15aca10f20738a088400a7fc1a164051a05a6', showing: {
                from: start,
                to: end,
            }, allowPageSizeChange: true,
            // class="tasks-pagination"
            total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: t('Lcz_Tasks') })));
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
