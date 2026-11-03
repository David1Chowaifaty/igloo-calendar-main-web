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
        return (h(Host, { key: 'b5a2f40f38ab5084b7a3141bac4ff8356fc86856' }, shouldLoadMore() && (h("ir-custom-button", { key: 'a0d1a7f85d9d182fe9d45d2784f80e5d951a76cb', variant: "brand", size: "s", class: "tasks-load-more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }, t('Lcz_LoadMore', { fallback: 'Load more' }))), h("ir-pagination", { key: 'c7584b0ae0f972ae8ca2d6979492545d0ab26c99', showing: {
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
