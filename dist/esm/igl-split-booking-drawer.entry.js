import { r as registerInstance, c as createEvent, h } from './index-Nexq2OjX.js';

const iglSplitBookingDrawerCss = () => `.sc-igl-split-booking-drawer-h{display:block}`;

const IglSplitBookingDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeModal = createEvent(this, "closeModal");
    }
    booking;
    identifier;
    open;
    closeModal;
    get room() {
        return this.booking?.rooms?.find(r => r.identifier === this.identifier);
    }
    render() {
        return (h("ir-drawer", { key: '1ffd7d75ca0df35296489672d4416dd9ab861f25', open: this.open, label: `Split unit ${this.room?.unit['name']}` }, this.open && h("igl-split-booking-form", { key: '80d64ffc861a4f10ddfcd86c603df76ba8fa4fe4', booking: this.booking, identifier: this.identifier }), h("div", { key: '7fd8c776a990e1479c4471fd619d14a6a74eef01', slot: "footer" }, h("ir-custom-button", { key: '7555eb3392fc60b9f41319830714506311ab3df2', size: "m", appearance: "filled", variant: "neutral", "data-drawer": "close" }, "Cancel"), h("ir-custom-button", { key: '545e625341eaa7826ab0d30fb0a7b6f71564e80d', form: "split-booking-form", type: "submit", size: "m", appearance: "accent", variant: "brand" }, "Confirm"))));
    }
};
IglSplitBookingDrawer.style = iglSplitBookingDrawerCss();

export { IglSplitBookingDrawer as igl_split_booking_drawer };
