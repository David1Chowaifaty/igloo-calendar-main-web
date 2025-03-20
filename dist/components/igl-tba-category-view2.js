import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './igl-tba-booking-view2.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";

const IglTbaCategoryView = /*@__PURE__*/ proxyCustomElement(class IglTbaCategoryView extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.assignUnitEvent = createEvent(this, "assignUnitEvent", 7);
        this.categoriesData = {};
        this.renderAgain = false;
    }
    // private localEventDatas;
    componentWillLoad() {
        // this.localEventDatas = this.eventDatas;
    }
    handleAssignRoomEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.eventDatas = this.eventDatas.filter(eventData => eventData.ID != opt.data.ID);
        this.calendarData.bookingEvents.push(opt.data);
        this.assignUnitEvent.emit({
            key: 'assignUnit',
            data: {
                RT_ID: this.categoryId,
                selectedDate: this.selectedDate,
                assignEvent: opt.data,
                calendarData: this.calendarData,
            },
        });
        // if(this.localEventDatas.length){
        this.renderView();
        // }
    }
    getEventView(categoryId, eventDatas) {
        return eventDatas.map((eventData, ind) => (h("igl-tba-booking-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, eventData: eventData, categoriesData: this.categoriesData, categoryId: categoryId, categoryIndex: this.categoryIndex, eventIndex: ind, onAssignRoomEvent: evt => this.handleAssignRoomEvent(evt) })));
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        var _a;
        return (h(Host, { key: 'b3dc75c5a434b0c6b9119ac8c6ff07021b6fc758' }, h("div", { key: '3ad1226be8b14c0a67cdf9317b8db9f73aee0dfb', class: "sectionContainer" }, h("div", { key: '1e4762d229a29725d1b49b47ca4d713d19131fe4', class: "font-weight-bold mt-1 font-small-3" }, (_a = this.categoriesData[this.categoryId]) === null || _a === void 0 ? void 0 : _a.name), this.getEventView(this.categoryId, this.eventDatas))));
    }
    static get style() { return iglTbaCategoryViewCss; }
}, [2, "igl-tba-category-view", {
        "calendarData": [16],
        "selectedDate": [8, "selected-date"],
        "categoriesData": [16],
        "categoryId": [8, "category-id"],
        "eventDatas": [1032, "event-datas"],
        "categoryIndex": [8, "category-index"],
        "renderAgain": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-tba-category-view", "igl-tba-booking-view", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-tba-category-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglTbaCategoryView);
            }
            break;
        case "igl-tba-booking-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglTbaCategoryView as I, defineCustomElement as d };
//# sourceMappingURL=igl-tba-category-view2.js.map

//# sourceMappingURL=igl-tba-category-view2.js.map