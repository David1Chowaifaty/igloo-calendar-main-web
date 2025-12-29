import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hkTasksStore, k as shouldLoadMore, l as loadMoreTasks, m as updateCurrentPage, n as updatePageSize } from './hk-tasks.store.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-pagination2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irTasksTablePaginationCss = ".sc-ir-tasks-table-pagination-h{display:block;margin-top:auto}.page-item.active.sc-ir-tasks-table-pagination .page-link.sc-ir-tasks-table-pagination{background-color:var(--blue)}.tasks-pagination.sc-ir-tasks-table-pagination{display:none !important}@media (min-width: 640px){.tasks-load-more.sc-ir-tasks-table-pagination{display:none}.tasks-pagination.sc-ir-tasks-table-pagination{display:flex !important}}";
const IrTasksTablePaginationStyle0 = irTasksTablePaginationCss;

const IrTasksTablePagination = /*@__PURE__*/ proxyCustomElement(class IrTasksTablePagination extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasksStore.pagination;
        const totalTasks = hkTasksStore.tasks?.length ?? 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        const pageSizes = hkTasksStore.pagination.tasksList[0] > totalTasks ? hkTasksStore.pagination.tasksList.slice(0, 1) : hkTasksStore.pagination.tasksList;
        return (h(Host, { key: '8d7a0e9f0b5abac7f2ef63c7d3962dff5f7540ee' }, shouldLoadMore() && h("ir-button", { key: 'fdb43b51e0c34d8f50ac9b7a2afad4275cf0800e', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: '3631df6aca49c146163b8e0ae8d5c69af5263ffe', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: pageSizes, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
    static get style() { return IrTasksTablePaginationStyle0; }
}, [2, "ir-tasks-table-pagination"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-table-pagination", "ir-button", "ir-custom-button", "ir-icons", "ir-pagination", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-table-pagination":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksTablePagination);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTasksTablePagination as I, defineCustomElement as d };

//# sourceMappingURL=ir-tasks-table-pagination2.js.map