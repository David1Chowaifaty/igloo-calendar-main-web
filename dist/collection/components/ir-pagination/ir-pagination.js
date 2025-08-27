import { Host, h, Fragment } from "@stencil/core";
export class IrPagination {
    constructor() {
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
        return (h(Host, { class: {
                'd-flex flex-column flex-md-row align-items-center justify-content-between pagination-container': true,
                'disabled': this.disabled,
            }, role: "navigation", "aria-label": "Pagination Navigation" }, this.showTotalRecords && (h("p", { class: "m-0 mb-1 mb-md-0 pagination-info", "aria-live": "polite" }, this.renderItemRange())), h("div", { class: 'd-flex align-items-center buttons-container' }, this.allowPageSizeChange && this.pageSizes && (h("ir-select", { selectedValue: String(this.pageSize), data: this.pageSizes.map(size => ({
                text: `${size} ${this.recordLabel}`,
                value: String(size),
            })), showFirstOption: false, style: { margin: '0 0.5rem' }, onSelectChange: e => this.handlePageSizeChange(Number(e.detail)) })), this.pages > 1 && (h(Fragment, null, h("ir-button", { size: "sm", btn_disabled: isFirstPage || this.disabled, onClickHandler: () => this.handlePageChange(1, 'first'), icon_name: "angles_left", style: { '--icon-size': '0.875rem' }, "aria-label": "Go to first page" }), h("ir-button", { size: "sm", btn_disabled: isFirstPage || this.disabled, onClickHandler: () => this.handlePageChange(this.currentPage - 1, 'previous'), icon_name: "angle_left", style: { '--icon-size': '0.875rem' }, "aria-label": "Go to previous page" }), h("ir-select", { selectedValue: this.currentPage.toString(), showFirstOption: false, onSelectChange: e => this.handlePageChange(+e.detail, 'direct'), data: Array.from(Array(this.pages), (_, i) => i + 1).map(i => ({
                text: i.toString(),
                value: i.toString(),
            })), "aria-label": `Current page ${this.currentPage} of ${this.pages}`, disabled: this.disabled }), h("ir-button", { size: "sm", btn_disabled: isLastPage || this.disabled, onClickHandler: () => this.handlePageChange(this.currentPage + 1, 'next'), icon_name: "angle_right", style: { '--icon-size': '0.875rem' }, "aria-label": "Go to next page" }), h("ir-button", { size: "sm", btn_disabled: isLastPage || this.disabled, onClickHandler: () => this.handlePageChange(this.pages, 'last'), icon_name: "angles_right", style: { '--icon-size': '0.875rem' }, "aria-label": "Go to last page" }))))));
    }
    static get is() { return "ir-pagination"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pagination.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pagination.css"]
        };
    }
    static get properties() {
        return {
            "pages": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Total number of pages available"
                },
                "getter": false,
                "setter": false,
                "attribute": "pages",
                "reflect": false,
                "defaultValue": "0"
            },
            "pageSizes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of all page size"
                },
                "getter": false,
                "setter": false
            },
            "allowPageSizeChange": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "default",
                            "text": "false"
                        }],
                    "text": "Enables a dropdown for changing the number of items displayed per page.\n\nWhen set to `true`, users can select a page size from the `pageSizes` array.\n\n**Note:** This prop requires the `pageSizes` prop to be defined with one or more numeric values.\nIf `pageSizes` is empty or undefined, the page size selector will not be displayed."
                },
                "getter": false,
                "setter": false,
                "attribute": "allow-page-size-change",
                "reflect": false
            },
            "total": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Total number of records/items"
                },
                "getter": false,
                "setter": false,
                "attribute": "total",
                "reflect": false,
                "defaultValue": "0"
            },
            "currentPage": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current active page number (1-based)"
                },
                "getter": false,
                "setter": false,
                "attribute": "current-page",
                "reflect": false,
                "defaultValue": "1"
            },
            "showing": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "PaginationRange",
                    "resolved": "PaginationRange",
                    "references": {
                        "PaginationRange": {
                            "location": "local",
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ir-pagination/ir-pagination.tsx",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationRange"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Range of items currently being displayed"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{ from: 0, to: 0 }"
            },
            "showTotalRecords": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether to show total records count"
                },
                "getter": false,
                "setter": false,
                "attribute": "show-total-records",
                "reflect": false,
                "defaultValue": "true"
            },
            "recordLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label for the record type (e.g., 'items', 'tasks', 'records')"
                },
                "getter": false,
                "setter": false,
                "attribute": "record-label",
                "reflect": false,
                "defaultValue": "''"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the pagination is disabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "pageSize": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Page size for calculations"
                },
                "getter": false,
                "setter": false,
                "attribute": "page-size",
                "reflect": false,
                "defaultValue": "10"
            }
        };
    }
    static get events() {
        return [{
                "method": "pageChange",
                "name": "pageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the current page changes"
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ir-pagination/ir-pagination.tsx",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }, {
                "method": "pageSizeChange",
                "name": "pageSizeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the page size changes"
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ir-pagination/ir-pagination.tsx",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }, {
                "method": "firstPage",
                "name": "firstPage",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the first page is requested"
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ir-pagination/ir-pagination.tsx",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }, {
                "method": "lastPage",
                "name": "lastPage",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the last page is requested"
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ir-pagination/ir-pagination.tsx",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }, {
                "method": "previousPage",
                "name": "previousPage",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the previous page is requested"
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ir-pagination/ir-pagination.tsx",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }, {
                "method": "nextPage",
                "name": "nextPage",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the next page is requested"
                },
                "complexType": {
                    "original": "PaginationChangeEvent",
                    "resolved": "PaginationChangeEvent",
                    "references": {
                        "PaginationChangeEvent": {
                            "location": "local",
                            "path": "/home/runner/work/modified-ir-webcmp/modified-ir-webcmp/src/components/ir-pagination/ir-pagination.tsx",
                            "id": "src/components/ir-pagination/ir-pagination.tsx::PaginationChangeEvent"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "currentPage",
                "methodName": "validateCurrentPage"
            }, {
                "propName": "pages",
                "methodName": "validatePages"
            }];
    }
}
//# sourceMappingURL=ir-pagination.js.map
