import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { l as shouldLoadMore, m as loadMoreTasks, h as hkTasksStore, n as updateCurrentPage, o as updatePageSize } from './hk-tasks.store.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-pagination2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irTasksTablePaginationCss = ".sc-ir-tasks-table-pagination-h{display:block;margin-top:auto}.page-item.active.sc-ir-tasks-table-pagination .page-link.sc-ir-tasks-table-pagination{background-color:var(--blue)}.tasks-pagination.sc-ir-tasks-table-pagination{display:none !important}@media (min-width: 768px){.tasks-load-more.sc-ir-tasks-table-pagination{display:none}.tasks-pagination.sc-ir-tasks-table-pagination{display:flex !important}}";
const IrTasksTablePaginationStyle0 = irTasksTablePaginationCss;

const IrTasksTablePagination = /*@__PURE__*/ proxyCustomElement(class IrTasksTablePagination extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        var _a, _b;
        const { currentPage, pageSize, totalPages, mobileCurrentPage } = hkTasksStore.pagination;
        const totalTasks = (_b = (_a = hkTasksStore.tasks) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        const start = totalTasks === 0 ? 0 : (currentPage - 1) * pageSize + 1;
        const end = Math.min(currentPage * pageSize, totalTasks);
        return (h(Host, { key: 'b9468ad72a409549f6425eedcaf7b454a985ac34' }, shouldLoadMore() && h("ir-button", { key: '36f8c1ffeef24d39d692a2f65032c64f501608d2', size: "sm", class: "tasks-load-more", text: "Load more", onClickHandler: () => loadMoreTasks(mobileCurrentPage + 1) }), h("ir-pagination", { key: '592db8f86fb7917db6f69679dbfb0ce7db163d67', showing: {
                from: start,
                to: end,
            }, class: "tasks-pagination", total: totalTasks, pages: totalPages, pageSize: pageSize, currentPage: currentPage, pageSizes: hkTasksStore.pagination.tasksList, onPageChange: e => updateCurrentPage(e.detail.currentPage), onPageSizeChange: e => updatePageSize(e.detail.pageSize), showTotalRecords: true, recordLabel: "tasks" })));
    }
    static get style() { return IrTasksTablePaginationStyle0; }
}, [2, "ir-tasks-table-pagination"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-table-pagination", "ir-button", "ir-icons", "ir-pagination", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-table-pagination":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksTablePagination);
            }
            break;
        case "ir-button":
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