import { Fragment, Host, h } from "@stencil/core";
import { IrMappingService } from "./ir-mapping.service";
import channels_data, { addMapping, setMappedChannel } from "../../../stores/channel.store";
import locales from "../../../stores/locales.store";
export class IrChannelMapping {
    constructor() {
        this.mappingService = new IrMappingService();
        this.activeMapField = '';
        this.availableRooms = [];
    }
    setActiveField(id, isRoomType, roomTypeId) {
        const availableRooms = this.mappingService.getAppropriateRooms(isRoomType, roomTypeId);
        if (availableRooms) {
            this.availableRooms = availableRooms;
        }
        this.activeMapField = id;
    }
    renderMappingStatus(mappedField, id, isRoomType, roomTypeId) {
        var _a;
        if (mappedField.hide) {
            return h("div", null);
        }
        if (mappedField.result) {
            return (h(Fragment, null, h("div", { class: "pl-2 flex-fill d-sm-none mapped_item text-blue d-flex align-items-center" }, h("span", { class: "m-0 p-0 d-flex align-items-center selected-map" }, h("span", { class: "selected-map-title" }, isRoomType ? mappedField.result.name : mappedField.result['short_name']), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), mappedField.occupancy), h("ir-icon", { class: "ml-1 p-0", onIconClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType) }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'var(--blue)', d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))), h("div", { class: "pl-2 flex-fill d-none mapped_item text-blue d-sm-flex align-items-center" }, h("span", { class: "mapped_name" }, isRoomType ? mappedField.result.name : mappedField.result['short_name']), h("div", { class: "d-flex align-items-center gap-3 flex-fill" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), h("span", null, mappedField.occupancy)), h("ir-button", { variant: "icon", onClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType), icon_name: "trash", style: { '--icon-size': '1rem', '--icon-button-color': '#1e9ff2', '--icon-button-hover-color': '#104064 ' } }))));
        }
        return (h("div", { class: "pl-2  flex-fill mapped_item" }, this.activeMapField === id ? (h("ir-combobox", { autoFocus: true, placeholder: (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_NotMapped, data: this.availableRooms, onComboboxValueChange: e => {
                addMapping(e.detail.data, this.activeMapField, isRoomType);
                this.activeMapField = '';
            } })) : (h("span", { class: "cursor-pointer  not_mapped_btn", onClick: () => this.setActiveField(id, isRoomType, roomTypeId) }, locales.entries.Lcz_NotMapped))));
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '78b68e93fb93b3262ebeba6624904735e054db62', class: "py-md-2 px-md-2" }, h("div", { key: '69e29e4d4f3c29ed092424eed7d9033b36254d94', class: "d-flex p-0 m-0 w-100 justify-content-end" }, h("button", { key: '091a93e0a1b687112502f4552cab9abc8f528a2c', onClick: () => {
                setMappedChannel();
            }, class: "btn refresh-btn" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Refresh)), h("section", { key: 'e51b0a6c918c81b74106a6c9322a8e3ad4867995', class: "w-100" }, h("div", { key: '1bb863e7f34f3da298611a157eb0408014dcc052', class: "pt-1 mapped_row" }, h("p", { key: '7377f5be20a3f589c65f0298a8d18f95826a1bbd', class: "mapped_item channel_name" }, (_b = channels_data.selectedChannel) === null || _b === void 0 ? void 0 : _b.name), h("svg", { key: 'feb988d53ee0f5c24b8634d4f723ec89f814265d', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '3846c8de53fa30d6223c1fa7615fdd30a3f69c39', d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), h("p", { key: 'cdf5c95c953985de22fc64975b146763dfc8ae5e', class: "pl-2 mapped_item channel_name" }, "igloorooms")), h("div", { key: 'df32e7ffb6963238298ce987b8588210f5541520' }, (_e = (_d = (_c = channels_data.selectedChannel) === null || _c === void 0 ? void 0 : _c.property) === null || _d === void 0 ? void 0 : _d.room_types) === null || _e === void 0 ? void 0 : _e.map(room_type => {
            const mappedRoomType = this.mappingService.checkMappingExists(room_type.id, true);
            return (h(Fragment, null, h("div", { key: room_type.id, class: "mapped_row room_type pt-1" }, h("p", { class: "mapped_item" }, room_type.name), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), this.renderMappingStatus(mappedRoomType, room_type.id, true)), room_type.rate_plans.map(rate_plan => {
                const mappedRatePlan = this.mappingService.checkMappingExists(rate_plan.id, false, room_type.id);
                // console.log(mappedRatePlan);
                return (h("div", { key: rate_plan.id, class: " mapped_row rate_plan" }, h("p", { class: "pl-1 submap-text mapped_item" }, rate_plan.name), !mappedRatePlan.hide && (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" }))), this.renderMappingStatus(mappedRatePlan, rate_plan.id, false, room_type.id)));
            })));
        })))));
    }
    static get is() { return "ir-channel-mapping"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-channel-mapping.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-channel-mapping.css"]
        };
    }
    static get states() {
        return {
            "activeMapField": {},
            "availableRooms": {}
        };
    }
}
//# sourceMappingURL=ir-channel-mapping.js.map