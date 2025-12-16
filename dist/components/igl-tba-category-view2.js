import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './igl-tba-booking-view2.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";
const IglTbaCategoryViewStyle0 = iglTbaCategoryViewCss;

const IglTbaCategoryView = /*@__PURE__*/ proxyCustomElement(class IglTbaCategoryView extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.assignUnitEvent = createEvent(this, "assignUnitEvent", 7);
    }
    calendarData;
    selectedDate;
    categoriesData = {};
    categoryId;
    eventDatas;
    categoryIndex;
    renderAgain = false;
    assignUnitEvent;
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
        return (h(Host, { key: '009373742a0f689edd20d1fd551ce25cfefc8cd0' }, h("div", { key: '838a9e353f042a05f4bf9f43f85f0d83d2a225c0', class: "sectionContainer" }, h("div", { key: 'cca1419b4d8f721b72cdf9e14869e9eb6fa5e6a1', class: "font-weight-bold mt-1 font-small-3" }, this.categoriesData[this.categoryId]?.name), this.getEventView(this.categoryId, this.eventDatas))));
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