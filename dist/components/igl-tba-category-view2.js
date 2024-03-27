import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './igl-tba-booking-view2.js';
import { d as defineCustomElement$1 } from './ir-button2.js';

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";
const IglTbaCategoryViewStyle0 = iglTbaCategoryViewCss;

const IglTbaCategoryView = /*@__PURE__*/ proxyCustomElement(class IglTbaCategoryView extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.assignUnitEvent = createEvent(this, "assignUnitEvent", 7);
        this.calendarData = undefined;
        this.selectedDate = undefined;
        this.categoriesData = {};
        this.categoryId = undefined;
        this.eventDatas = undefined;
        this.categoryIndex = undefined;
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
        this.eventDatas = this.eventDatas.filter((eventData) => eventData.ID != opt.data.ID);
        this.calendarData.bookingEvents.push(opt.data);
        this.assignUnitEvent.emit({
            key: "assignUnit",
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
        return eventDatas.map((eventData, ind) => (h("igl-tba-booking-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, eventData: eventData, categoriesData: this.categoriesData, categoryId: categoryId, categoryIndex: this.categoryIndex, eventIndex: ind, onAssignRoomEvent: (evt) => this.handleAssignRoomEvent(evt) })));
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        return (h(Host, { key: '3c0664ecee72a5d2265d1745193802c5a34d9445' }, h("div", { key: 'e351ce01e3b3b450875da4110217878b38e79ca2', class: "sectionContainer" }, h("div", { key: '9f5a52d537706ed4be71eadd41b25edbc3bd70b5', class: "font-weight-bold mt-1 font-small-3" }, this.categoriesData[this.categoryId].name), this.getEventView(this.categoryId, this.eventDatas))));
    }
    static get style() { return IglTbaCategoryViewStyle0; }
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
    const components = ["igl-tba-category-view", "igl-tba-booking-view", "ir-button"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-tba-category-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglTbaCategoryView);
            }
            break;
        case "igl-tba-booking-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglTbaCategoryView as I, defineCustomElement as d };

//# sourceMappingURL=igl-tba-category-view2.js.map