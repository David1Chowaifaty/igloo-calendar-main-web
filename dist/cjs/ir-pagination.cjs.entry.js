'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');

const irPaginationCss = ".sc-ir-pagination-h{display:block;font-family:var(--font-family, inherit);font-size:var(--font-size, 0.875rem);color:var(--text-color, #333)}.pagination-container.sc-ir-pagination{gap:1rem;padding:0.5rem 0;min-height:2.5rem}.pagination-container.disabled.sc-ir-pagination{opacity:0.6;pointer-events:none}.pagination-info.sc-ir-pagination{color:var(--text-muted, #6c757d);font-size:var(--font-size-sm, 0.875rem);white-space:nowrap}.buttons-container.sc-ir-pagination{gap:0.25rem;flex-wrap:wrap}.buttons-container.sc-ir-pagination ir-button.sc-ir-pagination{flex-shrink:0}@media (max-width: 768px){.pagination-container.sc-ir-pagination{gap:0.75rem}.pagination-info.sc-ir-pagination{text-align:center;order:2;margin-top:0.5rem !important;margin-bottom:0 !important}.buttons-container.sc-ir-pagination{order:1;justify-content:center}}@media (max-width: 480px){.pagination-container.sc-ir-pagination{gap:0.5rem}.buttons-container.sc-ir-pagination{gap:0.125rem}}@media (prefers-contrast: high){.pagination-info.sc-ir-pagination{color:var(--text-color, #000)}.pagination-container.disabled.sc-ir-pagination{opacity:0.8}}@media (prefers-reduced-motion: reduce){*.sc-ir-pagination{transition:none !important}}";
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
        /**
         * Total number of pages available
         */
        this.pages = 0;
        /**
         * Total number of records/items
         */
        this.total = 0;
        /**
         * Current active page number (1-based)
         */
        this.currentPage = 1;
        /**
         * Range of items currently being displayed
         */
        this.showing = { from: 0, to: 0 };
        /**
         * Whether to show total records count
         */
        this.showTotalRecords = true;
        /**
         * Label for the record type (e.g., 'items', 'tasks', 'records')
         */
        this.recordLabel = '';
        /**
         * Whether the pagination is disabled
         */
        this.disabled = false;
        /**
         * Page size for calculations
         */
        this.pageSize = 10;
    }
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
        return (index.h(index.Host, { class: {
                'd-flex flex-column flex-md-row align-items-center justify-content-between pagination-container': true,
                'disabled': this.disabled,
            }, role: "navigation", "aria-label": "Pagination Navigation" }, this.showTotalRecords && (index.h("p", { class: "m-0 mb-1 mb-md-0 pagination-info", "aria-live": "polite" }, this.renderItemRange())), index.h("div", { class: 'd-flex align-items-center buttons-container' }, this.allowPageSizeChange && this.pageSizes && (index.h("ir-select", { selectedValue: String(this.pageSize), LabelAvailable: false, data: this.pageSizes.map(size => ({
                text: `${size} ${this.recordLabel}`,
                value: String(size),
            })), showFirstOption: false, style: { margin: '0 0.5rem' }, onSelectChange: e => this.handlePageSizeChange(Number(e.detail)) })), this.pages > 1 && (index.h(index.Fragment, null, index.h("ir-button", { size: "sm", btn_disabled: isFirstPage || this.disabled, onClickHandler: () => this.handlePageChange(1, 'first'), icon_name: "angles_left", style: { '--icon-size': '0.875rem' }, "aria-label": "Go to first page" }), index.h("ir-button", { size: "sm", btn_disabled: isFirstPage || this.disabled, onClickHandler: () => this.handlePageChange(this.currentPage - 1, 'previous'), icon_name: "angle_left", style: { '--icon-size': '0.875rem' }, "aria-label": "Go to previous page" }), index.h("ir-select", { selectedValue: this.currentPage.toString(), LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.handlePageChange(+e.detail, 'direct'), data: Array.from(Array(this.pages), (_, i) => i + 1).map(i => ({
                text: i.toString(),
                value: i.toString(),
            })), "aria-label": `Current page ${this.currentPage} of ${this.pages}`, disabled: this.disabled }), index.h("ir-button", { size: "sm", btn_disabled: isLastPage || this.disabled, onClickHandler: () => this.handlePageChange(this.currentPage + 1, 'next'), icon_name: "angle_right", style: { '--icon-size': '0.875rem' }, "aria-label": "Go to next page" }), index.h("ir-button", { size: "sm", btn_disabled: isLastPage || this.disabled, onClickHandler: () => this.handlePageChange(this.pages, 'last'), icon_name: "angles_right", style: { '--icon-size': '0.875rem' }, "aria-label": "Go to last page" }))))));
    }
    static get watchers() { return {
        "currentPage": ["validateCurrentPage"],
        "pages": ["validatePages"]
    }; }
};
IrPagination.style = IrPaginationStyle0;

exports.ir_pagination = IrPagination;

//# sourceMappingURL=ir-pagination.cjs.entry.js.map