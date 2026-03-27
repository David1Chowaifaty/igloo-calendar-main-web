import { r as registerInstance, a as createEvent, h, e as Host } from './index-7b3961ed.js';

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";

const IglTbaCategoryView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '6bf79d0f32e1f975bb0ba47834b636778b477f16' }, h("div", { key: '9550d82df505650ef85ccf4d5147ef5b2e82bc3c', class: "sectionContainer" }, h("div", { key: '75ac928ba48471916666f053b48adfbc01ad1e71', class: "font-weight-bold font-small-3" }, this.categoriesData[this.categoryId]?.name), this.getEventView(this.categoryId, this.eventDatas))));
    }
};
IglTbaCategoryView.style = iglTbaCategoryViewCss;

export { IglTbaCategoryView as igl_tba_category_view };

//# sourceMappingURL=igl-tba-category-view.entry.js.map