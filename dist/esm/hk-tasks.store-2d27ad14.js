import { c as createStore } from './index-a124d225.js';
import { c as calendar_data } from './calendar-data-8a36a1b2.js';

const defaultTasksList = [10, 20, 50, 100];
function getPaginationInitialParams() {
    const tasks = getTaskList();
    return {
        tasksList: tasks,
        currentPage: 1,
        mobileCurrentPage: 1,
        // pageSize: tasks[0],
        // mobilePageSize: tasks[0],
        pageSize: 20,
        mobilePageSize: 20,
        totalPages: 0,
        totalItems: 0,
    };
}
const initialState = {
    searchField: '',
    tasks: [],
    filteredTasks: [],
    selectedTasks: [],
    pagination: getPaginationInitialParams(),
    filters: null,
    isLoading: false,
    isFiltersLoading: false,
    isExportLoading: false,
    archiveOpen: false,
    archiveData: [],
    archiveFilters: {
        from_date: null,
        to_date: null,
        filtered_by_hkm: [],
        filtered_by_unit: [],
    },
    archiveLoading: null,
    sorting: {
        field: 'date',
        direction: 'ASC',
    },
    modalOpen: false,
    sidebarOpen: false,
};
const { state: hkTasksStore, onChange } = createStore(initialState);
function updateSearchField(searchField) {
    hkTasksStore.searchField = searchField;
    hkTasksStore.pagination.currentPage = 1;
    filterTasks();
}
function updateTasks(tasks) {
    // const wasEmpty = hkTasksStore.tasks.length === 0;
    hkTasksStore.tasks = tasks;
    // Update task list if significantly changed or was empty
    // if (wasEmpty || shouldUpdateTaskList(tasks.length)) {
    //   updateTaskList();
    // }
    filterTasks();
}
function updatePaginationFields(params) {
    hkTasksStore.pagination = {
        ...hkTasksStore.pagination,
        ...params,
    };
}
function updatePageSize(pageSize) {
    updatePaginationFields({
        pageSize,
        currentPage: 1,
    });
    updatePagination();
}
function updateCurrentPage(page) {
    if (page >= 1 && page <= hkTasksStore.pagination.totalPages) {
        updatePaginationFields({ currentPage: page });
    }
}
function getTaskList() {
    if (!calendar_data.roomsInfo) {
        return defaultTasksList;
    }
    const totalRooms = calendar_data.roomsInfo.length;
    if (totalRooms <= 10) {
        return defaultTasksList;
    }
    const calculatedList = [...Array(4)].map((_, i) => {
        const t = totalRooms * (i + 1);
        return i === 3 ? (t < 100 ? 100 : t) : t;
    });
    return calculatedList;
}
// function shouldUpdateTaskList(newTaskCount: number): boolean {
//   const currentMax = Math.max(...hkTasksStore.pagination.tasksList);
//   return newTaskCount > currentMax * 1.5 || newTaskCount < currentMax * 0.5;
// }
function filterTasks() {
    const searchText = hkTasksStore?.searchField?.toLowerCase() ?? '';
    if (!searchText) {
        hkTasksStore.filteredTasks = [...hkTasksStore.tasks];
    }
    else {
        hkTasksStore.filteredTasks = hkTasksStore.tasks.filter(task => task.unit?.name?.toLowerCase().includes(searchText) || task.status?.description?.toLowerCase().includes(searchText) || task.housekeeper?.toLowerCase().includes(searchText));
    }
    updatePagination();
}
function updatePagination() {
    const totalItems = hkTasksStore.filteredTasks.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / hkTasksStore.pagination.pageSize));
    updatePaginationFields({
        totalItems,
        totalPages,
        currentPage: Math.min(hkTasksStore.pagination.currentPage, totalPages),
    });
}
function getPaginatedTasks() {
    const start = (hkTasksStore.pagination.currentPage - 1) * hkTasksStore.pagination.pageSize;
    const end = start + hkTasksStore.pagination.pageSize;
    return hkTasksStore.filteredTasks.slice(start, end);
}
function getMobileTasks() {
    const { mobileCurrentPage, mobilePageSize } = hkTasksStore.pagination;
    const start = (mobileCurrentPage - 1) * mobilePageSize;
    const end = start + mobilePageSize;
    return hkTasksStore.filteredTasks.slice(0, end);
}
function shouldLoadMore() {
    const { mobileCurrentPage, mobilePageSize } = hkTasksStore.pagination;
    return !(mobilePageSize * (mobileCurrentPage - 1) + mobilePageSize >= hkTasksStore.filteredTasks.length);
}
function loadMoreTasks(page) {
    if (!shouldLoadMore()) {
        return;
    }
    updatePaginationFields({
        mobileCurrentPage: page,
    });
}
// Task selection helpers
function updateSelectedTasks(tasks) {
    hkTasksStore.selectedTasks = tasks;
}
function clearSelectedTasks() {
    hkTasksStore.selectedTasks = [];
}
function toggleTaskSelection(task) {
    const index = hkTasksStore.selectedTasks.findIndex(t => t.id === task.id);
    if (index > -1) {
        hkTasksStore.selectedTasks = hkTasksStore.selectedTasks.filter(t => t.id !== task.id);
    }
    else {
        hkTasksStore.selectedTasks = [...hkTasksStore.selectedTasks, task];
    }
}
function selectAllTasks(tasks) {
    hkTasksStore.selectedTasks = [...tasks];
}
// Loading state helpers
function setLoading(loading) {
    hkTasksStore.isLoading = loading;
}
// Sorting helpers
function updateSorting(field, direction) {
    hkTasksStore.sorting = { field, direction };
    // Apply sorting to original tasks, then re-filter
    hkTasksStore.tasks = getSortedTasks(hkTasksStore.tasks);
    filterTasks();
}
function getSortedTasks(tasksToSort = hkTasksStore.filteredTasks) {
    const { field, direction } = hkTasksStore.sorting;
    return [...tasksToSort].sort((a, b) => {
        let aValue = a[field];
        let bValue = b[field];
        if (field === 'status') {
            aValue = a.status?.description;
            bValue = b.status?.description;
        }
        else if (field === 'unit') {
            aValue = a.unit?.name;
            bValue = b.unit?.name;
        }
        if (aValue < bValue)
            return direction === 'ASC' ? -1 : 1;
        if (aValue > bValue)
            return direction === 'ASC' ? 1 : -1;
        // Fallback sorting by date then unit name
        if (a.date < b.date)
            return -1;
        if (a.date > b.date)
            return 1;
        if (a.unit?.name < b.unit?.name)
            return -1;
        if (a.unit?.name > b.unit?.name)
            return 1;
        return 0;
    });
}
// Computed getters
function getCheckableTasks() {
    return hkTasksStore.tasks.filter(task => {
        const taskDate = new Date(task.date);
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        return taskDate <= today;
    });
}
function isAllTasksSelected() {
    const checkableTasks = getCheckableTasks();
    return checkableTasks.length > 0 && hkTasksStore.selectedTasks.length === checkableTasks.length;
}

export { updateSelectedTasks as a, updateSearchField as b, clearSelectedTasks as c, updateSorting as d, selectAllTasks as e, getPaginatedTasks as f, getCheckableTasks as g, hkTasksStore as h, isAllTasksSelected as i, getMobileTasks as j, updateCurrentPage as k, updatePageSize as l, shouldLoadMore as m, loadMoreTasks as n, setLoading as s, toggleTaskSelection as t, updateTasks as u };

//# sourceMappingURL=hk-tasks.store-2d27ad14.js.map