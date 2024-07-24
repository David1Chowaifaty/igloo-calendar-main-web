import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as getCurrencySymbol } from './utils.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';
import { v as v4 } from './v4.js';

const iglApplicationInfoCss = ".sc-igl-application-info-h{display:block}@media only screen and (min-width: 908px){.aplicationInfoContainer.sc-igl-application-info{max-width:80%}.guest-info-container.sc-igl-application-info{max-width:300px}.preference-select-container.sc-igl-application-info{max-width:250px}}";
const IglApplicationInfoStyle0 = iglApplicationInfoCss;

const IglApplicationInfo = /*@__PURE__*/ proxyCustomElement(class IglApplicationInfo extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.userRate = 0;
        this.guestInfo = undefined;
        this.currency = undefined;
        this.roomsList = [];
        this.guestRefKey = undefined;
        this.bedPreferenceType = [];
        this.selectedUnits = [];
        this.bookingType = 'PLUS_BOOKING';
        this.defaultGuestPreference = undefined;
        this.index = undefined;
        this.defaultGuestRoomId = undefined;
        this.dateDifference = undefined;
        this.filterdRoomList = [];
        this.isButtonPressed = false;
        this.guestData = undefined;
    }
    componentWillLoad() {
        if (this.guestInfo.isRateModified && this.guestInfo.rateType === 2) {
            this.userRate = this.guestInfo.rate * this.dateDifference;
        }
        else {
            this.userRate = this.guestInfo.rate;
        }
        this.guestData = this.guestInfo ? Object.assign({}, this.guestInfo) : {};
        this.guestData.roomId = '';
        if (this.defaultGuestRoomId && this.roomsList.filter(e => e.id.toString() === this.defaultGuestRoomId.toString()).length > 0) {
            this.guestData.roomId = this.defaultGuestRoomId;
        }
        this.guestData.preference = +this.defaultGuestPreference || '';
        this.updateRoomList();
    }
    componentDidLoad() {
        this.timeout = setTimeout(() => {
            this.updateData();
        }, 200);
    }
    disconnectedCallback() {
        clearTimeout(this.timeout);
    }
    async handleSelctedUnits() {
        this.updateRoomList();
    }
    updateRoomList() {
        const units = [...this.selectedUnits];
        units[this.index] = -1;
        this.filterdRoomList = this.roomsList.filter(e => !units.includes(e.id) || e.name === '');
    }
    updateData() {
        this.dataUpdateEvent.emit({
            key: 'roomRatePlanUpdate',
            guestRefKey: this.guestRefKey,
            data: Object.assign({}, this.guestData),
        });
    }
    handleDataChange(key, value) {
        this.guestData[key] = +value;
        if (value === '') {
            this.guestData['roomName'] = value;
        }
        if (key === 'roomId' && value !== '') {
            this.guestData['roomName'] = this.filterdRoomList.find(room => room.id === +value).name || '';
        }
        this.updateData();
    }
    handleGuestNameChange(event) {
        // console.log("On Guest name Change::", event.target.value);
        this.guestData.guestName = event.target.value;
        this.updateData();
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
            case 'save':
                this.isButtonPressed = true;
                break;
        }
    }
    render() {
        //console.log(this.guestInfo, this.roomsList);
        return (h(Host, { key: '9e7ddbd6e6b4d5acfd6994d06edf4eb49f1fa2bc' }, h("div", { key: '10f0b714856c481ba4acdf79cfb3ca643d227b7f', class: "text-left mt-1 " }, h("div", { key: 'b01b9ffb12ea8ccf0d6387812cf99ff17f943201', class: " mb-1 " }, this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING' ? (h("span", { class: "h5 mr-1" }, this.guestInfo.roomCategoryName)) : null, h("span", { key: '50eb5cfb3a818ff9a8a9c91dedaa7b31a2e77ddf', class: " font-weight-bold" }, this.guestInfo.ratePlanName.replace(this.guestInfo.roomCategoryName + '/', ''), h("ir-tooltip", { key: 'a6cd36bc8f112d3ff7cb6ea65768339dd789813c', class: " mr-1", message: this.guestInfo.cancelation + this.guestInfo.guarantee })), h("span", { key: '80baf8fc1ce54f5a3949d03fd85387516be05e65' }, this.guestInfo.adult_child_offering)), h("div", { key: '43806d8201c85d1b773e5035e0c5deb9a1db284c', class: "d-flex flex-column flex-md-row m-0 p-0 align-items-md-center aplicationInfoContainer " }, h("div", { key: 'f1870ba87b12889393233730febd4fbe22268416', class: "mr-1 flex-fill guest-info-container" }, h("input", { key: '6b0d16203bf4e43b76a7b212cbdc1eaee5e866a4', id: v4(), type: "email", class: `form-control ${this.isButtonPressed && this.guestData.guestName === '' && 'border-danger'}`, placeholder: locales.entries.Lcz_GuestFirstnameAndLastname, name: "guestName", onInput: event => this.handleGuestNameChange(event), required: true, value: this.guestData.guestName })), h("div", { key: '36707c425d9a1e6f4144ece5b871ffc38ea97007', class: 'mt-1 mt-md-0 d-flex align-items-center flex-fill' }, calendar_data.is_frontdesk_enabled && (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') ? (h("div", { class: "mr-1 p-0 flex-fill  preference-select-container" }, h("select", { class: `form-control  input-sm pr-0`, id: v4(), onChange: event => this.handleDataChange('roomId', event.target.value) }, h("option", { value: "", selected: this.guestData.roomId === '' }, locales.entries.Lcz_Assignunits), this.filterdRoomList.map(room => (h("option", { value: room.id, selected: +this.guestData.roomId === room.id }, room.name)))))) : null, this.guestData.is_bed_configuration_enabled && (h("div", { key: 'e1fae3f7dd6294c9cb5038dde8fdb40b74f1a03d', class: "mr-1 flex-fill" }, h("select", { key: 'cd2c69c47a2997b155e07e0c5fe0a116c4ed51ff', class: `form-control input-sm ${this.isButtonPressed && (this.guestData.preference === '' || this.guestData.preference === 0) && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('preference', event.target.value) }, h("option", { key: '6134882af24a338a7682137cbfc931e8b4b444fb', value: "", selected: this.guestData.preference === '' }, locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => (h("option", { value: +data.CODE_NAME, selected: this.guestData.preference === +data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("div", { key: '37469c0019cfdff7bde640d47172dea53dae0bb1', class: "" }, getCurrencySymbol(this.currency.code) + Number(this.userRate).toFixed(2), "/", locales.entries.Lcz_Stay))))));
    }
    static get watchers() { return {
        "selectedUnits": ["handleSelctedUnits"]
    }; }
    static get style() { return IglApplicationInfoStyle0; }
}, [2, "igl-application-info", {
        "guestInfo": [16],
        "currency": [8],
        "roomsList": [1040],
        "guestRefKey": [1, "guest-ref-key"],
        "bedPreferenceType": [16],
        "selectedUnits": [16],
        "bookingType": [1, "booking-type"],
        "defaultGuestPreference": [2, "default-guest-preference"],
        "index": [2],
        "defaultGuestRoomId": [2, "default-guest-room-id"],
        "dateDifference": [2, "date-difference"],
        "filterdRoomList": [32],
        "isButtonPressed": [32],
        "guestData": [32]
    }, [[16, "buttonClicked", "handleButtonClicked"]], {
        "selectedUnits": ["handleSelctedUnits"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-application-info", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglApplicationInfo);
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglApplicationInfo as I, defineCustomElement as d };

//# sourceMappingURL=igl-application-info2.js.map