import { Task, ArchivedTask } from "../models/housekeeping";
export type TaskFilters = {
    cleaning_periods: {
        code: string;
    };
    housekeepers: {
        id: number;
    }[];
    cleaning_frequencies: {
        code: string;
    };
    dusty_units: {
        code: string;
    };
    highlight_check_ins: {
        code: string;
    };
};
export type ArchiveFilters = {
    from_date: string;
    to_date: string;
    filtered_by_hkm?: number[];
    filtered_by_unit?: number[];
};
export type SortingState = {
    field: string;
    direction: 'ASC' | 'DESC';
};
export type TasksPagination = {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
    tasksList: number[];
    mobileCurrentPage: number;
    mobilePageSize: number;
};
export interface IHkTasksStore {
    searchField: string;
    tasks: Task[];
    filteredTasks: Task[];
    selectedTasks: Task[];
    pagination: TasksPagination;
    filters: TaskFilters | null;
    isLoading: boolean;
    isFiltersLoading: boolean;
    isExportLoading: boolean;
    archiveOpen: boolean;
    archiveData: ArchivedTask[];
    archiveFilters: ArchiveFilters;
    archiveLoading: 'search' | 'excel' | null;
    sorting: SortingState;
    modalOpen: boolean;
    sidebarOpen: boolean;
}
export declare const hkTasksStore: IHkTasksStore, onChange: import("@stencil/store/dist/types").OnChangeHandler<IHkTasksStore>;
export declare function updateSearchField(searchField: string): void;
export declare function updateTasks(tasks: Task[]): void;
export declare function updatePageSize(pageSize: number): void;
export declare function updateCurrentPage(page: number): void;
export declare function updateTaskList(): void;
export declare function getPaginatedTasks(): Task[];
export declare function getMobileTasks(): Task[];
export declare function shouldLoadMore(): boolean;
export declare function loadMoreTasks(page: number): void;
export declare function resetHkTasksStore(): void;
export declare function updateSelectedTasks(tasks: Task[]): void;
export declare function clearSelectedTasks(): void;
export declare function toggleTaskSelection(task: Task): void;
export declare function selectAllTasks(tasks: Task[]): void;
export declare function updateFilters(filters: TaskFilters): void;
export declare function clearFilters(): void;
export declare function setLoading(loading: boolean): void;
export declare function setFiltersLoading(loading: boolean): void;
export declare function setExportLoading(loading: boolean): void;
export declare function updateSorting(field: string, direction: 'ASC' | 'DESC'): void;
export declare function getSortedTasks(tasksToSort?: Task[]): Task[];
export declare function setArchiveOpen(open: boolean): void;
export declare function updateArchiveData(data: ArchivedTask[]): void;
export declare function updateArchiveFilters(filters: Partial<ArchiveFilters>): void;
export declare function setArchiveLoading(loading: 'search' | 'excel' | null): void;
export declare function setModalOpen(open: boolean): void;
export declare function setSidebarOpen(open: boolean): void;
export declare function getCheckableTasks(): Task[];
export declare function getSelectedTasksCount(): number;
export declare function isAllTasksSelected(): boolean;
export declare function getTasksByStatus(status: string): Task[];
export declare function getTasksByHousekeeper(housekeeperId: number): Task[];
export declare function getTasksByUnit(unitId: number): Task[];
export declare function updateStoreProperty<K extends keyof IHkTasksStore>(key: K, value: IHkTasksStore[K]): void;
export declare function getStoreSnapshot(): IHkTasksStore;
export default hkTasksStore;
