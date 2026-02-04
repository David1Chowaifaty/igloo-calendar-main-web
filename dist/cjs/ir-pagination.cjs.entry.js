'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irPaginationCss = ".sc-ir-pagination-h{display:block;font-family:var(--font-family, inherit);font-size:var(--font-size, 0.875rem);color:var(--text-color, #333)}.pagination-container.sc-ir-pagination{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:0.5rem 0;min-height:2.5rem}.pagination__current-page-select.sc-ir-pagination{margin-left:0.5rem;margin-right:0.5rem;max-width:70px}.pagination-container--disabled.sc-ir-pagination{opacity:0.6;pointer-events:none}.pagination-info.sc-ir-pagination{margin:0;color:var(--text-muted, #6c757d);font-size:var(--font-size-sm, 0.875rem);white-space:nowrap;padding:0}.buttons-container.sc-ir-pagination{display:flex;align-items:center;flex-wrap:wrap}.buttons-container.sc-ir-pagination ir-button.sc-ir-pagination{flex-shrink:0}.buttons-container.sc-ir-pagination ir-select.sc-ir-pagination{flex-shrink:0}.page-size-select.sc-ir-pagination{margin:0 0.5rem;min-width:5rem}@media (min-width: 768px){.pagination-container.sc-ir-pagination{flex-direction:row;align-items:center;justify-content:space-between;gap:1.25rem}.pagination-info.sc-ir-pagination{order:0}.buttons-container.sc-ir-pagination{justify-content:flex-end}}@media (max-width: 480px){.pagination-container.sc-ir-pagination{gap:0.5rem}.buttons-container.sc-ir-pagination{justify-content:center;gap:0.125rem}.pagination-info.sc-ir-pagination{text-align:center;width:100%}}@media (prefers-contrast: high){.pagination-info.sc-ir-pagination{color:var(--text-color, #000)}.pagination-container--disabled.sc-ir-pagination{opacity:0.8}}@media (prefers-reduced-motion: reduce){*.sc-ir-pagination{transition:none !important}}";
const IrPaginationStyle0 = irPaginationCss;

const IrPagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.pageChange = index.createEvent(this, "pageChange", 7);
        this.pageSizeChange = index.createEvent(this, "pageSizeChange", 7);
        this.firstPage = index.createEvent(this, "firstPage", 7);
        this.lastPage = index.createEvent(this, "lastPage", 7);
        this.previousPage = index.createEvent(this, "previousPage", 7);
        this.nextPage = index.createEvent(this, "nextPage", 7);
    }
    /**
     * Total number of pages available
     */
    pages = 0;
    /**
     * List of all page size
     */
    pageSizes;
    /**
     * Enables a dropdown for changing the number of items displayed per page.
     *
     * When set to `true`, users can select a page size from the `pageSizes` array.
     *
     * **Note:** This prop requires the `pageSizes` prop to be defined with one or more numeric values.
     * If `pageSizes` is empty or undefined, the page size selector will not be displayed.
     *
     * @default false
     */
    allowPageSizeChange;
    /**
     * Total number of records/items
     */
    total = 0;
    /**
     * Current active page number (1-based)
     */
    currentPage = 1;
    /**
     * Range of items currently being displayed
     */
    showing = { from: 0, to: 0 };
    /**
     * Whether to show total records count
     */
    showTotalRecords = true;
    /**
     * Label for the record type (e.g., 'items', 'tasks', 'records')
     */
    recordLabel = '';
    /**
     * Whether the pagination is disabled
     */
    disabled = false;
    /**
     * Page size for calculations
     */
    pageSize = 10;
    /**
     * Emitted when the current page changes
     */
    pageChange;
    /**
     * Emitted when the page size changes
     */
    pageSizeChange;
    /**
     * Emitted when the first page is requested
     */
    firstPage;
    /**
     * Emitted when the last page is requested
     */
    lastPage;
    /**
     * Emitted when the previous page is requested
     */
    previousPage;
    /**
     * Emitted when the next page is requested
     */
    nextPage;
    /**
     * Watch for changes to currentPage prop
     */
    validateCurrentPage(newValue) {
        if (newValue < 1) {
            console.warn('currentPage must be greater than 0');
        }
        if (newValue > this.pages) {
            console.warn('currentPage cannot be greater than total pages');
        }
    }
    /**
     * Watch for changes to pages prop
     */
    validatePages(newValue) {
        if (newValue < 0) {
            console.warn('pages must be greater than or equal to 0');
        }
    }
    /**
     * Renders the item range display text
     * @returns Formatted string showing current range and total
     */
    renderItemRange() {
        if (!this.showTotalRecords) {
            return '';
        }
        const from = Math.max(this.showing.from, 1);
        const to = Math.min(this.showing.to, this.total);
        return `${'View'} ${from} - ${to} ${'of'} ${this.total} ${this.recordLabel}`;
    }
    /**
     * Handles page change and emits appropriate events
     * @param newPage - The new page number to navigate to
     * @param eventType - The type of navigation event
     */
    handlePageChange(newPage, eventType = 'direct') {
        if (this.disabled || newPage < 1 || newPage > this.pages || newPage === this.currentPage) {
            return;
        }
        const eventData = {
            currentPage: newPage,
            totalPages: this.pages,
            pageSize: this.pageSize,
        };
        // Emit specific event type
        switch (eventType) {
            case 'first':
                this.firstPage.emit(eventData);
                break;
            case 'previous':
                this.previousPage.emit(eventData);
                break;
            case 'next':
                this.nextPage.emit(eventData);
                break;
            case 'last':
                this.lastPage.emit(eventData);
                break;
        }
        // Always emit the general page change event
        this.pageChange.emit(eventData);
    }
    /**
     * Handles page change and emits appropriate events
     * @param newPage - The new page number to navigate to
     * @param eventType - The type of navigation event
     */
    handlePageSizeChange(newPageSize) {
        const eventData = {
            currentPage: this.currentPage,
            totalPages: this.pages,
            pageSize: newPageSize,
        };
        // Emit specific event type
        this.pageSizeChange.emit(eventData);
    }
    /**
     * Checks if the component should be rendered
     * @returns True if pagination should be shown
     */
    shouldRender() {
        return this.pages > 0 && this.total > 0;
    }
    render() {
        if (!this.shouldRender()) {
            return null;
        }
        const isFirstPage = this.currentPage === 1;
        const isLastPage = this.currentPage === this.pages;
        return (index.h("div", { class: {
                'pagination-container': true,
                'pagination-container--disabled': this.disabled,
            }, role: "navigation", "aria-label": "Pagination Navigation" }, this.showTotalRecords && (index.h("p", { class: "pagination-info", "aria-live": "polite" }, this.renderItemRange())), index.h("div", { class: "buttons-container" }, this.allowPageSizeChange && this.pageSizes && (index.h("ir-select", { class: "page-size-select", selectedValue: String(this.pageSize), data: this.pageSizes.map(size => ({
                text: `${size} ${this.recordLabel}`,
                value: String(size),
            })), showFirstOption: false, onSelectChange: e => this.handlePageSizeChange(Number(e.detail)) })), this.pages > 1 && (index.h(index.Fragment, null, index.h("ir-custom-button", { "aria-label": "Go to first page", onClickHandler: () => this.handlePageChange(1, 'first'), disabled: isFirstPage || this.disabled, variant: "neutral", appearance: "plain" }, index.h("wa-icon", { name: "angles-left", label: "Go to first page" })), index.h("ir-custom-button", { onClickHandler: () => this.handlePageChange(this.currentPage - 1, 'previous'), variant: "neutral", appearance: "plain", disabled: isFirstPage || this.disabled, "aria-label": "Go to previous page" }, index.h("wa-icon", { name: "angle-left", label: "Go to previous page" })), index.h("wa-select", { value: this.currentPage?.toString(), class: "pagination__current-page-select", onchange: e => this.handlePageChange(+e.target.value, 'direct'), "aria-label": `Current page ${this.currentPage} of ${this.pages}`, disabled: this.disabled, size: "small", defaultValue: '1' }, Array.from(Array(this.pages), (_, i) => i + 1).map(i => (index.h("wa-option", { value: i.toString(), key: `${this.recordLabel}-${i}` }, i)))), index.h("ir-custom-button", { "aria-label": "Go to next page", onClickHandler: () => this.handlePageChange(this.currentPage + 1, 'next'), disabled: isLastPage || this.disabled, variant: "neutral", appearance: "plain" }, index.h("wa-icon", { name: "angle-right", label: "Go to next page" })), index.h("ir-custom-button", { onClickHandler: () => this.handlePageChange(this.pages, 'last'), variant: "neutral", appearance: "plain", disabled: isLastPage || this.disabled, "aria-label": "Go to last page" }, index.h("wa-icon", { name: "angles-right", label: "Go to last page" })))))));
    }
    static get watchers() { return {
        "currentPage": ["validateCurrentPage"],
        "pages": ["validatePages"]
    }; }
};
IrPagination.style = IrPaginationStyle0;

exports.ir_pagination = IrPagination;

//# sourceMappingURL=ir-pagination.cjs.entry.js.map