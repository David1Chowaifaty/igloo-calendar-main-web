import { c as createStore } from './index-c4cf83be.js';
import { c as calendar_data } from './calendar-data-462ba979.js';

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
    hkTasksStore.pagination = Object.assign(Object.assign({}, hkTasksStore.pagination), params);
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
    var _a, _b;
    const searchText = (_b = (_a = hkTasksStore === null || hkTasksStore === void 0 ? void 0 : hkTasksStore.searchField) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
    if (!searchText) {
        hkTasksStore.filteredTasks = [...hkTasksStore.tasks];
    }
    else {
        hkTasksStore.filteredTasks = hkTasksStore.tasks.filter(task => { var _a, _b, _c, _d, _e; return ((_b = (_a = task.unit) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(searchText)) || ((_d = (_c = task.status) === null || _c === void 0 ? void 0 : _c.description) === null || _d === void 0 ? void 0 : _d.toLowerCase().includes(searchText)) || ((_e = task.housekeeper) === null || _e === void 0 ? void 0 : _e.toLowerCase().includes(searchText)); });
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let aValue = a[field];
        let bValue = b[field];
        if (field === 'status') {
            aValue = (_a = a.status) === null || _a === void 0 ? void 0 : _a.description;
            bValue = (_b = b.status) === null || _b === void 0 ? void 0 : _b.description;
        }
        else if (field === 'unit') {
            aValue = (_c = a.unit) === null || _c === void 0 ? void 0 : _c.name;
            bValue = (_d = b.unit) === null || _d === void 0 ? void 0 : _d.name;
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
        if (((_e = a.unit) === null || _e === void 0 ? void 0 : _e.name) < ((_f = b.unit) === null || _f === void 0 ? void 0 : _f.name))
            return -1;
        if (((_g = a.unit) === null || _g === void 0 ? void 0 : _g.name) > ((_h = b.unit) === null || _h === void 0 ? void 0 : _h.name))
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

//# sourceMappingURL=hk-tasks.store-362112a1.js.map