import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Interface for pagination range display
 */
export interface PaginationRange {
    /** Starting index (0-based) */
    from: number;
    /** Ending index (0-based) */
    to: number;
}
/**
 * Event data emitted when page changes
 */
export interface PaginationChangeEvent {
    /** New current page number (1-based) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Page size */
    pageSize?: number;
}
export declare class IrPagination {
    /**
     * Total number of pages available
     */
    pages: number;
    /**
     * List of all page size
     */
    pageSizes: number[];
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
    allowPageSizeChange: boolean;
    /**
     * Total number of records/items
     */
    total: number;
    /**
     * Current active page number (1-based)
     */
    currentPage: number;
    /**
     * Range of items currently being displayed
     */
    showing: PaginationRange;
    /**
     * Whether to show total records count
     */
    showTotalRecords: boolean;
    /**
     * Label for the record type (e.g., 'items', 'tasks', 'records')
     */
    recordLabel: string;
    /**
     * Whether the pagination is disabled
     */
    disabled: boolean;
    /**
     * Page size for calculations
     */
    pageSize: number;
    /**
     * Emitted when the current page changes
     */
    pageChange: EventEmitter<PaginationChangeEvent>;
    /**
     * Emitted when the page size changes
     */
    pageSizeChange: EventEmitter<PaginationChangeEvent>;
    /**
     * Emitted when the first page is requested
     */
    firstPage: EventEmitter<PaginationChangeEvent>;
    /**
     * Emitted when the last page is requested
     */
    lastPage: EventEmitter<PaginationChangeEvent>;
    /**
     * Emitted when the previous page is requested
     */
    previousPage: EventEmitter<PaginationChangeEvent>;
    /**
     * Emitted when the next page is requested
     */
    nextPage: EventEmitter<PaginationChangeEvent>;
    /**
     * Watch for changes to currentPage prop
     */
    validateCurrentPage(newValue: number): void;
    /**
     * Watch for changes to pages prop
     */
    validatePages(newValue: number): void;
    /**
     * Renders the item range display text
     * @returns Formatted string showing current range and total
     */
    private renderItemRange;
    /**
     * Handles page change and emits appropriate events
     * @param newPage - The new page number to navigate to
     * @param eventType - The type of navigation event
     */
    private handlePageChange;
    /**
     * Handles page change and emits appropriate events
     * @param newPage - The new page number to navigate to
     * @param eventType - The type of navigation event
     */
    private handlePageSizeChange;
    /**
     * Checks if the component should be rendered
     * @returns True if pagination should be shown
     */
    private shouldRender;
    render(): any;
}
