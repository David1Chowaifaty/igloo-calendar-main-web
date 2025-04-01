import { r as registerInstance, c as createEvent, h, H as Host, a as getElement, F as Fragment } from './index-ChgcZQN7.js';
import { c as channels_data, t as testConnection, u as updateChannelSettings, a as selectChannel, b as addMapping, d as setMappedChannel } from './channel.store-0Ps_xPPl.js';
import { l as locales } from './locales.store-km9kP7G7.js';
import { c as calendar_data } from './calendar-data-iTCxBVE4.js';
import './index-CnjbwCqY.js';

const irChannelGeneralCss = ".sc-ir-channel-general-h{display:block}.label-style.sc-ir-channel-general{width:6.25rem;text-align:end;padding-right:0.625rem !important}.connection-status.sc-ir-channel-general{display:flex;align-items:center;justify-content:space-between;margin-top:0.625rem !important}.connection-title.sc-ir-channel-general{border-bottom:1px solid #e4e5ec}.ml-18.sc-ir-channel-general{margin-left:18% !important}.status-message.sc-ir-channel-general{display:flex;align-items:center;gap:0.3125rem;font-size:0.81rem;margin:0;padding:0}";

const IrChannelGeneral = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.connectionStatus = createEvent(this, "connectionStatus");
        this.channel_status = null;
        this.buttonClicked = false;
        this.connection_status_message = '';
        this.status = false;
    }
    componentWillLoad() {
        var _a;
        if (this.channel_status === 'create' || !channels_data.isConnectedToChannel) {
            return;
        }
        this.connection_status_message = channels_data.isConnectedToChannel
            ? (_a = channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id)) === null || _a === void 0 ? void 0 : _a.name
            : '';
        this.status = true;
    }
    handleTestConnectionClicked(e) {
        var _a, _b, _c;
        e.preventDefault();
        this.buttonClicked = true;
        if (!((_a = channels_data.channel_settings) === null || _a === void 0 ? void 0 : _a.hotel_id)) {
            return;
        }
        const status = testConnection();
        this.status = status;
        this.connection_status_message = status
            ? (_b = channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id)) === null || _b === void 0 ? void 0 : _b.name
            : (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_IncorrectConnection;
        this.buttonClicked = false;
        this.connectionStatus.emit(this.status);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (h(Host, { key: 'd35dd74f960dbe09d76f356942861103bf3beeee', class: "px-1" }, h("section", { key: '1fd1c69a69e40c0ba790fd52edaa45f74aaade19', class: "ml-18" }, h("fieldset", { key: '72d272f64096eea47bd3290d7699610705eae6fb', class: "d-flex align-items-center" }, h("label", { key: '46ec18fa20f73265aaf7488a7e97b0949ae51486', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Channel), h("ir-combobox", { key: 'c01460f10c9a4a61527419bcd5b57556c47c6e9c', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: (_b = channels_data.selectedChannel) === null || _b === void 0 ? void 0 : _b.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: 'c072f4ef863c903b849973f360fc6bc111b07062', class: "d-flex align-items-center mt-1" }, h("label", { key: '677cb94a535e80bdd5ab593e54bbeb0df90acb26', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_Title), h("div", { key: 'ba3e2d4e360c2c09a75cf9b62b7364a463d12e58', class: "flex-fill" }, h("input", { key: '976a2a69859bd04f132bbcf5da6536c85017fc9d', id: "hotel_title", value: (_d = channels_data.channel_settings) === null || _d === void 0 ? void 0 : _d.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: '27992ceacc2feddcbd51a5a9d624252b8bb54dd9', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '1d10142f155d185496968c92655ea6a9c7e14666', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_ConnectionSettings), h("div", { key: '5729d72f5b72a47168c2672dfd844320f2e3b44e', class: "ml-18" }, h("fieldset", { key: 'ec16c46c0454d02d24d34b33379fdccf303d57ed', class: "d-flex align-items-center my-1" }, h("label", { key: 'ac4f6dc938cefd873237546d859c3a9345affc19', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, (_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_HotelID), h("div", { key: 'b780d5ad23d26ded74c460665f414a1e12e664c7', class: "flex-fill" }, h("input", { key: '1bf709251c3ad3ae6c8048d0e6411d14448f499e', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !((_g = channels_data.channel_settings) === null || _g === void 0 ? void 0 : _g.hotel_id) && 'border-danger'}`, value: (_h = channels_data.channel_settings) === null || _h === void 0 ? void 0 : _h.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '5e0841814b3e4db8c355bd90b2ab4ce3b8593ded', class: "connection-status" }, h("div", { key: 'd19b3ceabb5710c40fd4e9f3cd98e2ed8eee6d94', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '9a186f0f4dc03c0774eb9dc0445e23bcc83af71b' }, this.connection_status_message)), h("button", { key: 'f17fca2e98cd0d6883ecde178fd15d553b47a58a', class: "btn btn-outline-secondary btn-sm", type: "submit" }, (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_TestConnection)))))));
    }
};
IrChannelGeneral.style = irChannelGeneralCss;

const irChannelHeaderCss = ".sc-ir-channel-header-h{display:block;position:relative;padding:0;margin:0;border-bottom:1px solid #e4e5ec}ul.sc-ir-channel-header{display:flex;align-items:center;gap:2rem;padding:0}li.sc-ir-channel-header{list-style:none !important}.tab.sc-ir-channel-header{font-size:0.95rem;font-weight:400;cursor:pointer;position:relative;margin:0;padding:0;transition:color 0.3s ease;user-select:none}.tab[data-disabled].sc-ir-channel-header{cursor:auto}.tab.sc-ir-channel-header:hover{opacity:80%}.tab[data-state='selected'].sc-ir-channel-header,.tab[data-state='selected'].sc-ir-channel-header:hover{color:var(--blue);opacity:100%}.active-indicator.sc-ir-channel-header{padding:0;bottom:0px;position:absolute;height:3px;border-radius:4px;transition:transform 0.3s ease, width 0.3s ease;background:var(--blue)}";

const IrChannelHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabChanged = createEvent(this, "tabChanged");
        this.headerTitles = [];
        this.selectedIndex = 0;
    }
    componentDidLoad() {
        this.updateActiveIndicator();
    }
    disconnectedCallback() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    handleTabSelection(index) {
        this.selectedIndex = index;
        this.updateActiveIndicator();
        this.tabChanged.emit(this.headerTitles[this.selectedIndex].id);
    }
    updateActiveIndicator() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        requestAnimationFrame(() => {
            const selectedTab = this.el.querySelector(`li.tab[data-state="selected"]`);
            if (selectedTab) {
                const { left, width } = selectedTab.getBoundingClientRect();
                const parentLeft = this.el.getBoundingClientRect().left;
                const position = left - parentLeft;
                this.activeIndicator.style.width = `${width}px`;
                this.activeIndicator.style.transform = `translateX(${position}px)`;
            }
        });
    }
    render() {
        return (h(Host, { key: '8279468a6a17833b8410d89811560393157c7228' }, h("ul", { key: 'd8bd5c3f6c3819e3bac1e16b2c53705f37990cdf', class: "px-1" }, this.headerTitles.map((title, index) => (h("li", { class: `tab ${title.disabled ? 'text-light' : ''}`, key: title.id, onClick: () => {
                if (!title.disabled)
                    this.handleTabSelection(index);
            }, "data-disabled": title.disabled, "data-state": this.selectedIndex === index ? 'selected' : '' }, title.name)))), h("span", { key: '4d70c332267fa2bd5a5356f1a7953302c0d1bd43', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
    get el() { return getElement(this); }
};
IrChannelHeader.style = irChannelHeaderCss;

class IrMappingService {
    removedMapping(ir_id, isRoomType) {
        let selectedChannels = [...channels_data.mappedChannels];
        if (isRoomType) {
            const toBeRemovedRoomType = calendar_data.roomsInfo.find(room => room.id.toString() === ir_id);
            selectedChannels = selectedChannels.filter(c => toBeRemovedRoomType.rateplans.find(rate_plan => rate_plan.id.toString() === c.ir_id) === undefined);
        }
        channels_data.mappedChannels = selectedChannels.filter(c => c.ir_id !== ir_id);
    }
    checkMappingExists(id, isRoomType, roomTypeId) {
        const mapped_id = channels_data.mappedChannels.find(m => m.channel_id === id);
        if (!mapped_id) {
            if (!isRoomType) {
                const matchingRoomType = channels_data.mappedChannels.find(m => m.channel_id.toString() === roomTypeId);
                if (!matchingRoomType) {
                    return { hide: true, result: undefined, occupancy: undefined };
                }
            }
            return { hide: false, result: undefined, occupancy: undefined };
        }
        if (isRoomType) {
            const room_type = calendar_data.roomsInfo.find(room => room.id.toString() === mapped_id.ir_id);
            return { hide: false, occupancy: room_type.occupancy_default.adult_nbr, result: room_type };
        }
        if (!roomTypeId) {
            throw new Error('Missing room type id');
        }
        const matchingRoomType = channels_data.mappedChannels.find(m => m.channel_id.toString() === roomTypeId);
        const room_type = calendar_data.roomsInfo.find(room => room.id.toString() === matchingRoomType.ir_id);
        if (!room_type) {
            throw new Error('Invalid Room type');
        }
        return { hide: false, occupancy: room_type.occupancy_default.adult_nbr, result: room_type.rateplans.find(r => r.id.toString() === mapped_id.ir_id) };
    }
    getAppropriateRooms(isRoomType, roomTypeId) {
        if (isRoomType) {
            const filteredRoomTypes = calendar_data.roomsInfo.filter(room => channels_data.mappedChannels.find(m => m.ir_id.toString() === room.id.toString()) === undefined && room.is_active);
            return filteredRoomTypes.map(room => ({ id: room.id.toString(), name: room.name, occupancy: room.occupancy_default.adult_nbr }));
        }
        if (!roomTypeId) {
            throw new Error('Missing roomType id');
        }
        const matchingRoomType = channels_data.mappedChannels.find(m => m.channel_id.toString() === roomTypeId);
        if (!matchingRoomType) {
            throw new Error('Invalid room type id');
        }
        const selectedRoomType = calendar_data.roomsInfo.find(room => room.id.toString() === matchingRoomType.ir_id);
        return selectedRoomType.rateplans
            .filter(rate_plan => channels_data.mappedChannels.find(r => rate_plan.id.toString() === r.ir_id) === undefined && rate_plan['is_active'])
            .map(rate_plan => ({
            id: rate_plan.id.toString(),
            name: rate_plan['short_name'],
            occupancy: selectedRoomType.occupancy_default.adult_nbr,
        }));
    }
}

const irChannelMappingCss = ".sc-ir-channel-mapping-h{display:block;box-sizing:border-box;font-size:12px !important;line-height:14px !important}*.sc-ir-channel-mapping{padding:0;margin:0;box-sizing:border-box}.submap-text.sc-ir-channel-mapping{padding-left:10px}.text-blue.sc-ir-channel-mapping{color:var(--blue)}.text-red.sc-ir-channel-mapping{color:var(--red)}.not_mapped_btn.sc-ir-channel-mapping{color:#ff4961}.not_mapped_btn.sc-ir-channel-mapping:hover{color:#ff1635}li.sc-ir-channel-mapping{list-style:none !important}.refresh-btn.sc-ir-channel-mapping{all:unset;color:var(--blue);cursor:pointer}.refresh-btn.sc-ir-channel-mapping:hover{color:#104064}.selected-map.sc-ir-channel-mapping{flex:1}.selected-map-title.sc-ir-channel-mapping{flex:1}.mapped_row.sc-ir-channel-mapping{display:flex;align-items:center}.mapped_item.sc-ir-channel-mapping+svg.sc-ir-channel-mapping{display:block;flex:0 0 4.166666666666666%;max-width:4.166666666666666%;margin:0}.mapped_row.sc-ir-channel-mapping .mapped_item.sc-ir-channel-mapping{flex:0 0 45.83333333333333%;display:block;max-width:45.83333333333333%}.mapped_item.sc-ir-channel-mapping{margin:0;padding:0;line-height:22px}.mapped_name.sc-ir-channel-mapping{margin-right:5px}.gap-3.sc-ir-channel-mapping{gap:5px}.channel_name.sc-ir-channel-mapping{color:rgba(0, 0, 0, 0.88);font-size:14px;font-weight:700}.mapped_row.rate_plan.sc-ir-channel-mapping,.mapped_row.room_type.sc-ir-channel-mapping{margin-bottom:0px}";

const IrChannelMapping = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.activeMapField = '';
        this.availableRooms = [];
        this.mappingService = new IrMappingService();
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
        return (h(Host, { key: '4c1328efddb4323e30d348de35f99eef5be8965c', class: "py-md-2 px-md-2" }, h("div", { key: 'b08b255def424cbb92916e36231c44116756023b', class: "d-flex p-0 m-0 w-100 justify-content-end" }, h("button", { key: '155108b3a034274c72f9c764d1262ebbf0994dc8', onClick: () => {
                setMappedChannel();
            }, class: "btn refresh-btn" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Refresh)), h("section", { key: 'dfe0d8183c70f201101fec83842490a1dd4a3ce8', class: "w-100" }, h("div", { key: '6b015be66d4e82f7cdb413f27b2050cee3cc99e9', class: "pt-1 mapped_row" }, h("p", { key: 'a0818f723da17e74d0339e23a84a220ca7f555d5', class: "mapped_item channel_name" }, (_b = channels_data.selectedChannel) === null || _b === void 0 ? void 0 : _b.name), h("svg", { key: 'df68ce8308e72f0f52bb73a2f63a04c9a46c8139', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '1929e73b70b2a67457aef09376d599244f75238d', d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), h("p", { key: 'c5321fd6476111257635e616d34ff1ec35e8e50f', class: "pl-2 mapped_item channel_name" }, "igloorooms")), h("div", { key: '32ff48cff01f634acd08134ccc63ca8922f0e091' }, (_e = (_d = (_c = channels_data.selectedChannel) === null || _c === void 0 ? void 0 : _c.property) === null || _d === void 0 ? void 0 : _d.room_types) === null || _e === void 0 ? void 0 : _e.map(room_type => {
            const mappedRoomType = this.mappingService.checkMappingExists(room_type.id, true);
            return (h(Fragment, null, h("div", { key: room_type.id, class: "mapped_row room_type pt-1" }, h("p", { class: "mapped_item" }, room_type.name), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), this.renderMappingStatus(mappedRoomType, room_type.id, true)), room_type.rate_plans.map(rate_plan => {
                const mappedRatePlan = this.mappingService.checkMappingExists(rate_plan.id, false, room_type.id);
                // console.log(mappedRatePlan);
                return (h("div", { key: rate_plan.id, class: " mapped_row rate_plan" }, h("p", { class: "pl-1 submap-text mapped_item" }, rate_plan.name), !mappedRatePlan.hide && (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" }))), this.renderMappingStatus(mappedRatePlan, rate_plan.id, false, room_type.id)));
            })));
        })))));
    }
};
IrChannelMapping.style = irChannelMappingCss;

export { IrChannelGeneral as ir_channel_general, IrChannelHeader as ir_channel_header, IrChannelMapping as ir_channel_mapping };
//# sourceMappingURL=ir-channel-general.ir-channel-header.ir-channel-mapping.entry.js.map

//# sourceMappingURL=ir-channel-general_3.entry.js.map