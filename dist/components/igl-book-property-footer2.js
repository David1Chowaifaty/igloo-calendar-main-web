import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';

const iglBookPropertyFooterCss = ".sc-igl-book-property-footer-h{width:100% !important;background:#000}";
const IglBookPropertyFooterStyle0 = iglBookPropertyFooterCss;

const IglBookPropertyFooter = /*@__PURE__*/ proxyCustomElement(class IglBookPropertyFooter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
    }
    eventType;
    page;
    isEditOrAddRoomEvent;
    dateRangeData;
    isLoading;
    buttonClicked;
    isEventType(event) {
        return event === this.eventType;
    }
    editNext(label) {
        if (this.isEventType('EDIT_BOOKING')) {
            if (label === 'Cancel') {
                return 'flex-fill';
            }
            else {
                return 'd-none d-md-block  flex-fill';
            }
        }
        return 'flex-fill';
    }
    renderButton({ label, type, disabled = false, 
    // icon_name,
    isLoading, appearance, variant, }) {
        return (h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(label)}` : 'flex-fill' }, h("ir-custom-button", { size: 'medium', loading: isLoading, appearance: appearance, variant: variant, disabled: disabled, onClickHandler: () => {
                this.buttonClicked.emit({ key: type });
            }, class: "full-width" }, label)));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        if (this.page === 'page_one') {
            return (h(Host, null, this.isEventType('EDIT_BOOKING') ? (h(Fragment, null, this.renderButton({ type: 'cancel', label: locales.entries.Lcz_Cancel, appearance: 'filled', variant: 'neutral' }), this.shouldRenderTwoButtons() &&
                this.renderButton({
                    type: 'next',
                    label: `${locales.entries.Lcz_Next}`,
                    icon_name: 'angles_right',
                    variant: 'brand',
                    appearance: 'accent',
                }))) : (h(Fragment, null, this.renderButton({ type: 'cancel', label: locales.entries.Lcz_Cancel, appearance: 'filled', variant: 'neutral' }), this.shouldRenderTwoButtons() &&
                this.renderButton({ type: 'next', label: `${locales.entries.Lcz_Next}`, icon_name: 'angles_right', variant: 'brand', appearance: 'accent' })))));
        }
        const showBookAndCheckin = calendar_data.checkin_enabled && hooks(new Date(this.dateRangeData?.fromDate)).isSame(new Date(), 'day');
        return (h(Fragment, null, this.isEditOrAddRoomEvent ? (h(Fragment, null, this.renderButton({ type: 'back', icon_position: 'left', label: locales.entries.Lcz_Back, icon_name: 'angles_left', appearance: 'filled', variant: 'neutral' }), this.renderButton({ type: 'save', label: locales.entries.Lcz_Save, isLoading: this.isLoading === 'save', variant: 'brand', appearance: 'accent' }))) : (h(Fragment, null, this.renderButton({ type: 'back', icon_position: 'left', label: locales.entries.Lcz_Back, icon_name: 'angles_left', appearance: 'filled', variant: 'neutral' }), this.renderButton({
            type: 'book',
            label: locales.entries.Lcz_Book,
            isLoading: this.isLoading === 'book',
            variant: 'brand',
            appearance: showBookAndCheckin ? 'outlined' : 'accent',
        }), showBookAndCheckin &&
            this.renderButton({
                type: 'bookAndCheckIn',
                label: locales.entries.Lcz_BookAndChekcIn,
                isLoading: this.isLoading === 'bookAndCheckIn',
                variant: 'brand',
                appearance: 'accent',
            })))));
    }
    static get style() { return IglBookPropertyFooterStyle0; }
}, [2, "igl-book-property-footer", {
        "eventType": [1, "event-type"],
        "page": [1],
        "isEditOrAddRoomEvent": [516, "is-edit-or-add-room-event"],
        "dateRangeData": [16],
        "isLoading": [1, "is-loading"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-book-property-footer", "ir-custom-button"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-book-property-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBookPropertyFooter);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBookPropertyFooter as I, defineCustomElement as d };

//# sourceMappingURL=igl-book-property-footer2.js.map