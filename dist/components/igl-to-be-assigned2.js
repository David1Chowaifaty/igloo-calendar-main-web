import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as ToBeAssignedService } from './toBeAssigned.service.js';
import { d as dateToFormattedString } from './utils.js';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { g as getUnassignedDates } from './unassigned_dates.store.js';
import { d as defineCustomElement$4 } from './igl-tba-booking-view2.js';
import { d as defineCustomElement$3 } from './igl-tba-category-view2.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const iglToBeAssignedCss = ".sc-igl-to-be-assigned-h{--spacing:var(--wa-space-l);display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-s);text-align:left;background-color:var(--wa-color-surface-default);border-inline-end:2px solid var(--wa-color-surface-border)}.tba-panel.sc-igl-to-be-assigned{display:flex;flex-direction:column;min-height:100%}.tba-panel__head.sc-igl-to-be-assigned{position:sticky;top:0;z-index:1;font-family:var(--wa-font-family-heading);background-color:var(--wa-color-surface-default)}.tba-panel__header.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;box-sizing:border-box;padding-inline:var(--spacing);padding-block:calc(var(--spacing) / 2);border-bottom:1px solid var(--wa-color-surface-border);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.tba-panel__title.sc-igl-to-be-assigned{flex:1 1 auto;margin:0;font-size:var(--wa-font-size-l);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);font-family:var(--wa-font-family-heading);color:var(--wa-color-text-normal)}.tba-panel__toolbar.sc-igl-to-be-assigned{padding:var(--spacing);padding-block-end:0}.tba-panel__body.sc-igl-to-be-assigned{display:flex;flex:1 1 auto;flex-direction:column;gap:1rem;padding:var(--spacing)}.tba-panel__loading.sc-igl-to-be-assigned{display:flex;flex:1 1 auto;align-items:center;justify-content:center}.tba-panel__empty.sc-igl-to-be-assigned{margin:0}";
const IglToBeAssignedStyle0 = iglToBeAssignedCss;

const IglToBeAssigned = /*@__PURE__*/ proxyCustomElement(class IglToBeAssigned extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.optionEvent = createEvent(this, "optionEvent", 7);
        this.reduceAvailableUnitEvent = createEvent(this, "reduceAvailableUnitEvent", 7);
        this.showBookingPopup = createEvent(this, "showBookingPopup", 7);
        this.addToBeAssignedEvent = createEvent(this, "addToBeAssignedEvent", 7);
        this.highlightToBeAssignedBookingEvent = createEvent(this, "highlightToBeAssignedBookingEvent", 7);
    }
    unassignedDatesProp;
    propertyid;
    from_date;
    to_date;
    calendarData;
    loadingMessage;
    showDatesList = false;
    renderAgain = false;
    orderedDatesList = [];
    noScroll = false;
    selectedDateDisplay = '';
    optionEvent;
    reduceAvailableUnitEvent;
    showBookingPopup;
    addToBeAssignedEvent;
    highlightToBeAssignedBookingEvent;
    isGotoToBeAssignedDate = false;
    isLoading = true;
    selectedDate = null;
    data = {};
    today = new Date();
    categoriesData = {};
    toBeAssignedService = new ToBeAssignedService();
    unassignedDates;
    componentWillLoad() {
        this.reArrangeData();
        this.loadingMessage = locales.entries.Lcz_FetchingUnAssignedUnits;
    }
    handleUnassignedDatesToBeAssignedChange(newValue) {
        const { fromDate, toDate, data } = newValue;
        let dt = new Date(fromDate);
        dt.setHours(0);
        dt.setMinutes(0);
        dt.setSeconds(0);
        let endDate = dt.getTime();
        while (endDate <= new Date(toDate).getTime()) {
            if (data && !data[endDate] && this.unassignedDates.hasOwnProperty(endDate)) {
                delete this.unassignedDates[endDate];
            }
            else if (data && data[endDate]) {
                this.unassignedDates[endDate] = data[endDate];
            }
            endDate = hooks(endDate).add(1, 'days').toDate().getTime();
        }
        this.data = { ...this.unassignedDates };
        this.orderedDatesList = Object.keys(this.data).sort((a, b) => parseInt(a) - parseInt(b));
        if (this.orderedDatesList.length) {
            if (this.selectedDate === null) {
                this.selectedDate = this.orderedDatesList[0];
            }
            if (this.selectedDate && this.data[this.selectedDate]) {
                this.selectedDateDisplay = this.data[this.selectedDate]?.dateStr || this.selectedDateDisplay;
                this.showForDate(this.selectedDate, false);
            }
            else {
                this.isLoading = false;
                this.renderView();
            }
        }
        else {
            this.selectedDate = null;
            this.selectedDateDisplay = '';
            this.isLoading = false;
            this.renderView();
        }
    }
    handleAssignUnit(event) {
        const opt = event.detail;
        const data = opt.data;
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (opt?.key === 'assignUnit' && this.data) {
            // Verify data.selectedDate exists in this.data
            if (data?.selectedDate && this.data[data.selectedDate]) {
                // Check if categories exist and there's only one category
                if (this.data[data.selectedDate]?.categories && Object.keys(this.data[data.selectedDate]?.categories || {})?.length === 1) {
                    this.isLoading = true;
                    this.noScroll = true;
                }
                // Make sure all required properties exist before filtering
                if (data?.RT_ID &&
                    this.data[data.selectedDate]?.categories &&
                    this.data[data.selectedDate].categories[data.RT_ID] &&
                    Array.isArray(this.data[data.selectedDate].categories[data.RT_ID]) &&
                    data?.assignEvent?.ID) {
                    this.data[data.selectedDate].categories[data.RT_ID] = this.data[data.selectedDate].categories[data.RT_ID].filter(eventData => eventData && eventData.ID !== data.assignEvent.ID);
                }
                // Only update calendarData if it exists in the data
                if (data?.calendarData) {
                    this.calendarData = data.calendarData;
                }
                this.renderView();
            }
        }
    }
    async updateCategories(key, calendarData) {
        try {
            //console.log("called")
            let categorisedRooms = {};
            const result = await this.toBeAssignedService.getUnassignedRooms({ from_date: calendarData.from_date, to_date: calendarData.to_date }, this.propertyid, dateToFormattedString(new Date(+key)), calendarData.roomsInfo, calendarData.formattedLegendData);
            result.forEach(room => {
                if (!categorisedRooms.hasOwnProperty(room.RT_ID)) {
                    categorisedRooms[room.RT_ID] = [room];
                }
                else {
                    categorisedRooms[room.RT_ID].push(room);
                }
            });
            this.unassignedDates[key].categories = categorisedRooms;
        }
        catch (error) {
            //  toastr.error(error);
        }
    }
    async reArrangeData() {
        try {
            this.today.setHours(0, 0, 0, 0);
            this.calendarData.roomsInfo.forEach(category => {
                this.categoriesData[category.id] = {
                    name: category.name,
                    roomsList: category.physicalrooms,
                    roomIds: category.physicalrooms.map(room => {
                        return room.id;
                    }),
                };
            });
            this.selectedDate = null;
            //this.unassignedDates = await this.toBeAssignedService.getUnassignedDates(this.propertyid, dateToFormattedString(new Date()), this.to_date);
            this.unassignedDates = getUnassignedDates();
            console.log(this.unassignedDates);
            this.data = this.unassignedDates;
            this.orderedDatesList = Object.keys(this.data).sort((a, b) => parseInt(a) - parseInt(b));
            if (!this.selectedDate && this.orderedDatesList.length) {
                this.selectedDate = this.orderedDatesList[0];
                this.selectedDateDisplay = this.data[this.selectedDate]?.dateStr || '';
            }
            else if (!this.orderedDatesList.length) {
                this.selectedDateDisplay = '';
            }
        }
        catch (error) {
            console.error('Error fetching unassigned dates:', error);
            //  toastr.error(error);
        }
    }
    async componentDidLoad() {
        setTimeout(() => {
            if (!this.isGotoToBeAssignedDate && Object.keys(this.unassignedDates).length > 0) {
                //console.log(this.isGotoToBeAssignedDate);
                const firstKey = Object.keys(this.unassignedDates)[0];
                this.showForDate(firstKey);
            }
        }, 100);
    }
    async gotoDate(event) {
        this.isGotoToBeAssignedDate = true;
        this.showForDate(event.detail.data);
        this.showDatesList = false;
        this.renderView();
    }
    handleToBeAssignedDate(e) {
        this.showBookingPopup.emit({
            key: 'calendar',
            data: new Date(e.detail.data.fromDate).getTime() - 86400000,
            noScroll: false,
        });
    }
    async showForDate(dateStamp, withLoading = true) {
        try {
            if (withLoading) {
                this.isLoading = true;
                // Reflect the picked date immediately and flush a render so the spinner
                // is visible while updateCategories() is fetching.
                this.selectedDate = dateStamp;
                this.renderView();
            }
            if (this.showDatesList) {
                this.showUnassignedDate();
            }
            await this.updateCategories(dateStamp, this.calendarData);
            this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
            this.showBookingPopup.emit({
                key: 'calendar',
                data: parseInt(dateStamp) - 86400000,
                noScroll: this.noScroll,
            });
            if (this.isGotoToBeAssignedDate) {
                this.isGotoToBeAssignedDate = false;
            }
            this.isLoading = false;
            this.selectedDate = dateStamp;
            this.selectedDateDisplay = this.data[dateStamp]?.dateStr || this.selectedDateDisplay;
            this.renderView();
        }
        catch (error) {
            // toastr.error(error);
        }
    }
    getDay(dt) {
        const currentDate = new Date(dt);
        const locale = 'default'; //'en-US';
        const dayOfWeek = this.getLocalizedDayOfWeek(currentDate, locale);
        // const monthName = currentDate.toLocaleString("default", { month: 'short' })
        return dayOfWeek + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();
    }
    getLocalizedDayOfWeek(date, locale) {
        const options = { weekday: 'short' };
        return date.toLocaleDateString(locale, options);
    }
    handleOptionEvent(key, data = '') {
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            data: { bookingId: '----' },
        });
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        this.optionEvent.emit({ key, data });
    }
    showUnassignedDate() {
        this.showDatesList = !this.showDatesList;
    }
    getToBeAssignedEntities() {
        // toBeAssignedEvents
    }
    getCategoryView() {
        if (this.orderedDatesList.length && this.selectedDate && this.data[this.selectedDate]) {
            return Object.entries(this.data[this.selectedDate].categories).map(([id, eventDatas], ind) => (h("igl-tba-category-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, categoryId: id, categoryIndex: ind, categoriesData: this.categoriesData, eventDatas: eventDatas, onAssignUnitEvent: evt => this.handleAssignUnit(evt) })));
        }
        else {
            return null;
        }
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        const selectedDateData = this.selectedDate ? this.data[this.selectedDate] : null;
        const isEmpty = Object.keys(this.data).length === 0;
        const hasDates = this.orderedDatesList.length > 0;
        return (h(Host, { key: '176ade5de967afd371f9bc4df4a459953fef3201' }, h("div", { key: '295fdb91c54138e59a0f3fe1fcc0d2e84a35a498', class: "tba-panel" }, h("div", { key: '0588788b3410d0244f73592efb1aefd736aca580', class: "tba-panel__head" }, h("header", { key: 'b46846187b217904f8e84bdb7a29c9042c523c25', class: "tba-panel__header" }, h("h2", { key: 'c6d75debba75be031e83dd4379e3473f5e435443', class: "tba-panel__title", id: "to-be-assigned-title" }, locales.entries.Lcz_Assignments), h("ir-custom-button", { key: 'a3b6d73e5428611714f45fdcff64c0b43b3c6593', size: "medium", appearance: "plain", variant: "neutral", onClickHandler: () => this.handleOptionEvent('closeSideMenu') }, h("wa-icon", { key: '0a9858355eb6a9dd1524f41a0e625a44088430dc', name: "xmark", variant: "solid", label: "Close", "aria-label": "Close", role: "img" }))), hasDates && (h("div", { key: '5b40f7425b2af5add23a10e4b107aae4683c9d0a', class: "tba-panel__toolbar" }, h("wa-select", { key: '81ac0b32f6b2ec50c28720536b58ae0da784dcfb', size: "small", "aria-label": locales.entries.Lcz_Assignments, value: this.selectedDate ? this.selectedDate.toString() : '', defaultValue: this.selectedDate ? this.selectedDate.toString() : '', onchange: evt => this.showForDate(evt.target.value) }, this.orderedDatesList.map(ordDate => (h("wa-option", { value: ordDate.toString() }, this.data[ordDate].dateStr))))))), h("div", { key: '4b53485b899db5fbb170495f95060a1723b9f1be', class: "tba-panel__body" }, isEmpty ? (h("p", { class: "tba-panel__empty" }, locales.entries.Lcz_AllBookingsAreAssigned)) : this.isLoading ? (h("div", { class: "tba-panel__loading" }, h("ir-spinner", null))) : selectedDateData && Object.keys(selectedDateData.categories).length ? (this.getCategoryView()) : (h("p", { class: "tba-panel__empty" }, locales.entries.Lcz_AllAssignForThisDay))))));
    }
    static get watchers() { return {
        "unassignedDatesProp": ["handleUnassignedDatesToBeAssignedChange"]
    }; }
    static get style() { return IglToBeAssignedStyle0; }
}, [2, "igl-to-be-assigned", {
        "unassignedDatesProp": [8, "unassigned-dates-prop"],
        "propertyid": [2],
        "from_date": [1],
        "to_date": [1],
        "calendarData": [1040],
        "loadingMessage": [32],
        "showDatesList": [32],
        "renderAgain": [32],
        "orderedDatesList": [32],
        "noScroll": [32],
        "selectedDateDisplay": [32]
    }, [[8, "gotoToBeAssignedDate", "gotoDate"], [0, "highlightToBeAssignedBookingEvent", "handleToBeAssignedDate"]], {
        "unassignedDatesProp": ["handleUnassignedDatesToBeAssignedChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-to-be-assigned", "igl-tba-booking-view", "igl-tba-category-view", "ir-custom-button", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-to-be-assigned":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglToBeAssigned);
            }
            break;
        case "igl-tba-booking-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "igl-tba-category-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglToBeAssigned as I, defineCustomElement as d };

//# sourceMappingURL=igl-to-be-assigned2.js.map