import { createStore } from "@stencil/store";
const initialState = {
    days: [],
    months: [],
    fromDate: '',
    toDate: '',
    disabled_cells: new Map(),
    cleaningTasks: new Map(),
};
export const { state: calendar_dates, onChange: onCalendarDatesChange } = createStore(initialState);
export default calendar_dates;
export function addCleaningTasks(tasks) {
    var _a;
    const tasksMap = new Map(calendar_dates.cleaningTasks);
    for (const task of tasks) {
        const taskMap = new Map((_a = tasksMap.get(task.unit.id)) !== null && _a !== void 0 ? _a : new Map());
        taskMap.set(task.date, task);
        tasksMap.set(task.unit.id, taskMap);
    }
    calendar_dates.cleaningTasks = new Map(tasksMap);
}
export function cleanRoom(task) {
    const tasksMap = new Map(calendar_dates.cleaningTasks);
    if (!tasksMap.has(task.unit.id)) {
        return;
    }
    const taskMap = new Map(tasksMap.get(task.unit.id));
    taskMap.delete(task.date);
    tasksMap.set(task.unit.id, taskMap);
    calendar_dates.cleaningTasks = new Map(tasksMap);
}
export function addRoomForCleaning(task) {
    var _a;
    const tasksMap = new Map(calendar_dates.cleaningTasks);
    const taskMap = new Map((_a = tasksMap.get(task.unit.id)) !== null && _a !== void 0 ? _a : new Map());
    taskMap.set(task.date, task);
    tasksMap.set(task.unit.id, taskMap);
    calendar_dates.cleaningTasks = new Map(tasksMap);
}
//# sourceMappingURL=calendar-dates.store.js.map
