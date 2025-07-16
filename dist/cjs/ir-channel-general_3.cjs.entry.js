'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const channel_store = require('./channel.store-b082a6e7.js');
const locales_store = require('./locales.store-855b855e.js');
const calendarData = require('./calendar-data-cec6957a.js');

const irChannelGeneralCss = ".sc-ir-channel-general-h{display:block}.label-style.sc-ir-channel-general{width:6.25rem;text-align:end;padding-right:0.625rem !important}.connection-status.sc-ir-channel-general{display:flex;align-items:center;justify-content:space-between;margin-top:0.625rem !important}.connection-title.sc-ir-channel-general{border-bottom:1px solid #e4e5ec}.ml-18.sc-ir-channel-general{margin-left:18% !important}.status-message.sc-ir-channel-general{display:flex;align-items:center;gap:0.3125rem;font-size:0.81rem;margin:0;padding:0}";
const IrChannelGeneralStyle0 = irChannelGeneralCss;

const IrChannelGeneral = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.connectionStatus = index.createEvent(this, "connectionStatus", 7);
        this.channel_status = null;
        this.buttonClicked = false;
        this.connection_status_message = '';
        this.status = false;
    }
    componentWillLoad() {
        var _a;
        if (this.channel_status === 'create' || !channel_store.channels_data.isConnectedToChannel) {
            return;
        }
        this.connection_status_message = channel_store.channels_data.isConnectedToChannel
            ? (_a = channel_store.channels_data.selectedChannel.properties.find(property => property.id === channel_store.channels_data.channel_settings.hotel_id)) === null || _a === void 0 ? void 0 : _a.name
            : '';
        this.status = true;
    }
    handleTestConnectionClicked(e) {
        var _a, _b, _c;
        e.preventDefault();
        this.buttonClicked = true;
        if (!((_a = channel_store.channels_data.channel_settings) === null || _a === void 0 ? void 0 : _a.hotel_id)) {
            return;
        }
        const status = channel_store.testConnection();
        this.status = status;
        this.connection_status_message = status
            ? (_b = channel_store.channels_data.selectedChannel.properties.find(property => property.id === channel_store.channels_data.channel_settings.hotel_id)) === null || _b === void 0 ? void 0 : _b.name
            : (_c = locales_store.locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_IncorrectConnection;
        this.buttonClicked = false;
        this.connectionStatus.emit(this.status);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (index.h(index.Host, { key: 'ba9ecb2a96d5daec2bbd559cf48e4d686e81ec07', class: "px-1" }, index.h("section", { key: '7fa3cda4e7dab7e356c155b6756312329426ca86', class: "ml-18" }, index.h("fieldset", { key: '4ab5dbc3d9ce85c9a12db32684f41d8bf12b46a0', class: "d-flex align-items-center" }, index.h("label", { key: '0192fab68c056f8a549704e1c959f2a4b49bc208', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Channel), index.h("ir-combobox", { key: '1223851db4499391cd6b931fb9fac8ec79a2c47e', input_id: "hotel_channels", disabled: channel_store.channels_data.isConnectedToChannel, class: "flex-fill", value: (_b = channel_store.channels_data.selectedChannel) === null || _b === void 0 ? void 0 : _b.name, onComboboxValueChange: (e) => {
                channel_store.selectChannel(e.detail.data.toString());
            }, data: channel_store.channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), index.h("fieldset", { key: 'bf8404994ffa1c01cba6a58c7facd25f65f97c51', class: "d-flex align-items-center mt-1" }, index.h("label", { key: '660ce125ac731a7018bd362cdaee9edb03fdcc3a', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, (_c = locales_store.locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_Title), index.h("div", { key: '5eac72aed9b6f740a0ab6b37854e568e83a47521', class: "flex-fill" }, index.h("input", { key: '7dca46ff6abfcbdf3535b27e25e3d4420bca65b3', id: "hotel_title", value: (_d = channel_store.channels_data.channel_settings) === null || _d === void 0 ? void 0 : _d.hotel_title, onInput: e => channel_store.updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channel_store.channels_data.selectedChannel && (index.h("form", { key: '27d853947ea5b70eee847130f1cd65233012d567', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, index.h("h3", { key: 'e6e28da261e1e9e65d79f3ef461312a1d0b963b7', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, (_e = locales_store.locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_ConnectionSettings), index.h("div", { key: '900947b2a3a7894eb2e444e13cb7f0db04922adc', class: "ml-18" }, index.h("fieldset", { key: 'de4009188c1892c7f12eb0b0d67647dfffb9f8ba', class: "d-flex align-items-center my-1" }, index.h("label", { key: '662d89ceb806215a8c66b59b461748b64a0a7f43', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, (_f = locales_store.locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_HotelID), index.h("div", { key: '70432b651a813e00b5496d4e1cdb4d7ebc6eb34f', class: "flex-fill" }, index.h("input", { key: 'a956b1dcf2006361ebd91db8a794f134a86bbf92', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !((_g = channel_store.channels_data.channel_settings) === null || _g === void 0 ? void 0 : _g.hotel_id) && 'border-danger'}`, value: (_h = channel_store.channels_data.channel_settings) === null || _h === void 0 ? void 0 : _h.hotel_id, onInput: e => channel_store.updateChannelSettings('hotel_id', e.target.value) }))), index.h("div", { key: '24c49edead20b386d7f51e074c8a8e1e655cb407', class: "connection-status" }, index.h("div", { key: '485232b9165999b18a2ab938db447b62a51d3095', class: "status-message" }, this.connection_status_message &&
            (this.status ? index.h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : index.h("ir-icons", { name: "danger", style: { color: 'yellow' } })), index.h("span", { key: 'ab36128d12d0060e38caac847e1788ac1f3d78a7' }, this.connection_status_message)), index.h("button", { key: 'aa4a701cff54b8d1d60f896fc71b205220197586', class: "btn btn-outline-secondary btn-sm", type: "submit" }, (_j = locales_store.locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_TestConnection)))))));
    }
};
IrChannelGeneral.style = IrChannelGeneralStyle0;

const irChannelHeaderCss = ".sc-ir-channel-header-h{display:block;position:relative;padding:0;margin:0;border-bottom:1px solid #e4e5ec}ul.sc-ir-channel-header{display:flex;align-items:center;gap:2rem;padding:0}li.sc-ir-channel-header{list-style:none !important}.tab.sc-ir-channel-header{font-size:0.95rem;font-weight:400;cursor:pointer;position:relative;margin:0;padding:0;transition:color 0.3s ease;user-select:none}.tab[data-disabled].sc-ir-channel-header{cursor:auto}.tab.sc-ir-channel-header:hover{opacity:80%}.tab[data-state='selected'].sc-ir-channel-header,.tab[data-state='selected'].sc-ir-channel-header:hover{color:var(--blue);opacity:100%}.active-indicator.sc-ir-channel-header{padding:0;bottom:0px;position:absolute;height:3px;border-radius:4px;transition:transform 0.3s ease, width 0.3s ease;background:var(--blue)}";
const IrChannelHeaderStyle0 = irChannelHeaderCss;

const IrChannelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tabChanged = index.createEvent(this, "tabChanged", 7);
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
        return (index.h(index.Host, { key: '2f7b4c89b125ed85d68b478c137f87f772111685' }, index.h("ul", { key: '95438bbd4ce720ceb0bd0def323eae87a19611e9', class: "px-1" }, this.headerTitles.map((title, index$1) => (index.h("li", { class: `tab ${title.disabled ? 'text-light' : ''}`, key: title.id, onClick: () => {
                if (!title.disabled)
                    this.handleTabSelection(index$1);
            }, "data-disabled": title.disabled, "data-state": this.selectedIndex === index$1 ? 'selected' : '' }, title.name)))), index.h("span", { key: '8f8d352d5dc3d5b2cae7aef9de5690a5223b3c17', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
    get el() { return index.getElement(this); }
};
IrChannelHeader.style = IrChannelHeaderStyle0;

class IrMappingService {
    removedMapping(ir_id, isRoomType) {
        let selectedChannels = [...channel_store.channels_data.mappedChannels];
        if (isRoomType) {
            const toBeRemovedRoomType = calendarData.calendar_data.roomsInfo.find(room => room.id.toString() === ir_id);
            selectedChannels = selectedChannels.filter(c => toBeRemovedRoomType.rateplans.find(rate_plan => rate_plan.id.toString() === c.ir_id) === undefined);
        }
        channel_store.channels_data.mappedChannels = selectedChannels.filter(c => c.ir_id !== ir_id);
    }
    checkMappingExists(id, isRoomType, roomTypeId) {
        const mapped_id = channel_store.channels_data.mappedChannels.find(m => m.channel_id === id);
        if (!mapped_id) {
            if (!isRoomType) {
                const matchingRoomType = channel_store.channels_data.mappedChannels.find(m => m.channel_id.toString() === roomTypeId);
                if (!matchingRoomType) {
                    return { hide: true, result: undefined, occupancy: undefined };
                }
            }
            return { hide: false, result: undefined, occupancy: undefined };
        }
        if (isRoomType) {
            const room_type = calendarData.calendar_data.roomsInfo.find(room => room.id.toString() === mapped_id.ir_id);
            return { hide: false, occupancy: room_type.occupancy_default.adult_nbr, result: room_type };
        }
        if (!roomTypeId) {
            throw new Error('Missing room type id');
        }
        const matchingRoomType = channel_store.channels_data.mappedChannels.find(m => m.channel_id.toString() === roomTypeId);
        const room_type = calendarData.calendar_data.roomsInfo.find(room => room.id.toString() === matchingRoomType.ir_id);
        if (!room_type) {
            throw new Error('Invalid Room type');
        }
        return { hide: false, occupancy: room_type.occupancy_default.adult_nbr, result: room_type.rateplans.find(r => r.id.toString() === mapped_id.ir_id) };
    }
    getAppropriateRooms(isRoomType, roomTypeId) {
        if (isRoomType) {
            const filteredRoomTypes = calendarData.calendar_data.roomsInfo.filter(room => channel_store.channels_data.mappedChannels.find(m => m.ir_id.toString() === room.id.toString()) === undefined && room.is_active);
            return filteredRoomTypes.map(room => ({ id: room.id.toString(), name: room.name, occupancy: room.occupancy_default.adult_nbr }));
        }
        if (!roomTypeId) {
            throw new Error('Missing roomType id');
        }
        const matchingRoomType = channel_store.channels_data.mappedChannels.find(m => m.channel_id.toString() === roomTypeId);
        if (!matchingRoomType) {
            throw new Error('Invalid room type id');
        }
        const selectedRoomType = calendarData.calendar_data.roomsInfo.find(room => room.id.toString() === matchingRoomType.ir_id);
        return selectedRoomType.rateplans
            .filter(rate_plan => channel_store.channels_data.mappedChannels.find(r => rate_plan.id.toString() === r.ir_id) === undefined && rate_plan['is_active'])
            .map(rate_plan => ({
            id: rate_plan.id.toString(),
            name: rate_plan['short_name'],
            occupancy: selectedRoomType.occupancy_default.adult_nbr,
        }));
    }
}

const irChannelMappingCss = ".sc-ir-channel-mapping-h{display:block;box-sizing:border-box;font-size:12px !important;line-height:14px !important}*.sc-ir-channel-mapping{padding:0;margin:0;box-sizing:border-box}.submap-text.sc-ir-channel-mapping{padding-left:10px}.text-blue.sc-ir-channel-mapping{color:var(--blue)}.text-red.sc-ir-channel-mapping{color:var(--red)}.not_mapped_btn.sc-ir-channel-mapping{color:#ff4961}.not_mapped_btn.sc-ir-channel-mapping:hover{color:#ff1635}li.sc-ir-channel-mapping{list-style:none !important}.refresh-btn.sc-ir-channel-mapping{all:unset;color:var(--blue);cursor:pointer}.refresh-btn.sc-ir-channel-mapping:hover{color:#104064}.selected-map.sc-ir-channel-mapping{flex:1}.selected-map-title.sc-ir-channel-mapping{flex:1}.mapped_row.sc-ir-channel-mapping{display:flex;align-items:center}.mapped_item.sc-ir-channel-mapping+svg.sc-ir-channel-mapping{display:block;flex:0 0 4.166666666666666%;max-width:4.166666666666666%;margin:0}.mapped_row.sc-ir-channel-mapping .mapped_item.sc-ir-channel-mapping{flex:0 0 45.83333333333333%;display:block;max-width:45.83333333333333%}.mapped_item.sc-ir-channel-mapping{margin:0;padding:0;line-height:22px}.mapped_name.sc-ir-channel-mapping{margin-right:5px}.gap-3.sc-ir-channel-mapping{gap:5px}.channel_name.sc-ir-channel-mapping{color:rgba(0, 0, 0, 0.88);font-size:14px;font-weight:700}.mapped_row.rate_plan.sc-ir-channel-mapping,.mapped_row.room_type.sc-ir-channel-mapping{margin-bottom:0px}";
const IrChannelMappingStyle0 = irChannelMappingCss;

const IrChannelMapping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            return index.h("div", null);
        }
        if (mappedField.result) {
            return (index.h(index.Fragment, null, index.h("div", { class: "pl-2 flex-fill d-sm-none mapped_item text-blue d-flex align-items-center" }, index.h("span", { class: "m-0 p-0 d-flex align-items-center selected-map" }, index.h("span", { class: "selected-map-title" }, isRoomType ? mappedField.result.name : mappedField.result['short_name']), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), mappedField.occupancy), index.h("ir-icon", { class: "ml-1 p-0", onIconClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType) }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: 'var(--blue)', d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))), index.h("div", { class: "pl-2 flex-fill d-none mapped_item text-blue d-sm-flex align-items-center" }, index.h("span", { class: "mapped_name" }, isRoomType ? mappedField.result.name : mappedField.result['short_name']), index.h("div", { class: "d-flex align-items-center gap-3 flex-fill" }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), index.h("span", null, mappedField.occupancy)), index.h("ir-button", { variant: "icon", onClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType), icon_name: "trash", style: { '--icon-size': '1rem', '--icon-button-color': '#1e9ff2', '--icon-button-hover-color': '#104064 ' } }))));
        }
        return (index.h("div", { class: "pl-2  flex-fill mapped_item" }, this.activeMapField === id ? (index.h("ir-combobox", { autoFocus: true, placeholder: (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_NotMapped, data: this.availableRooms, onComboboxValueChange: e => {
                channel_store.addMapping(e.detail.data, this.activeMapField, isRoomType);
                this.activeMapField = '';
            } })) : (index.h("span", { class: "cursor-pointer  not_mapped_btn", onClick: () => this.setActiveField(id, isRoomType, roomTypeId) }, locales_store.locales.entries.Lcz_NotMapped))));
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (index.h(index.Host, { key: '1cdc37e4b7fd2545f6c51cd9b576c52d431fb5c5', class: "py-md-2 px-md-2" }, index.h("div", { key: '33e041e6c34e889d9aa629e2845219e32d57fab5', class: "d-flex p-0 m-0 w-100 justify-content-end" }, index.h("button", { key: '78b522dc8efc16740741ff9a95ae103a9b1c56aa', onClick: () => {
                channel_store.setMappedChannel();
            }, class: "btn refresh-btn" }, (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Refresh)), index.h("section", { key: 'c4f8bfb4ad45d9ad36e7251f0a190f1c2f8fd165', class: "w-100" }, index.h("div", { key: '7741e2fdddbbdf78d8c77ee4bfddaddd6f0ded0d', class: "pt-1 mapped_row" }, index.h("p", { key: 'fa04fb38a6ed4e855b0c43058ab1edac47174786', class: "mapped_item channel_name" }, (_b = channel_store.channels_data.selectedChannel) === null || _b === void 0 ? void 0 : _b.name), index.h("svg", { key: 'e62a28e69684a3f04e0a6fd7b539690d769ee02a', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: '644636ea9cf8f68cc58eec745e21f3e2d009e0fb', d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), index.h("p", { key: 'b4577df92fc221201730015f822d324ac2b8d874', class: "pl-2 mapped_item channel_name" }, "igloorooms")), index.h("div", { key: 'cf3ca4582bba8b65b32c841d078361a4c95b2eac' }, (_e = (_d = (_c = channel_store.channels_data.selectedChannel) === null || _c === void 0 ? void 0 : _c.property) === null || _d === void 0 ? void 0 : _d.room_types) === null || _e === void 0 ? void 0 : _e.map(room_type => {
            const mappedRoomType = this.mappingService.checkMappingExists(room_type.id, true);
            return (index.h(index.Fragment, null, index.h("div", { key: room_type.id, class: "mapped_row room_type pt-1" }, index.h("p", { class: "mapped_item" }, room_type.name), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), this.renderMappingStatus(mappedRoomType, room_type.id, true)), room_type.rate_plans.map(rate_plan => {
                const mappedRatePlan = this.mappingService.checkMappingExists(rate_plan.id, false, room_type.id);
                // console.log(mappedRatePlan);
                return (index.h("div", { key: rate_plan.id, class: " mapped_row rate_plan" }, index.h("p", { class: "pl-1 submap-text mapped_item" }, rate_plan.name), !mappedRatePlan.hide && (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: "currentColor", d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" }))), this.renderMappingStatus(mappedRatePlan, rate_plan.id, false, room_type.id)));
            })));
        })))));
    }
};
IrChannelMapping.style = IrChannelMappingStyle0;

exports.ir_channel_general = IrChannelGeneral;
exports.ir_channel_header = IrChannelHeader;
exports.ir_channel_mapping = IrChannelMapping;

//# sourceMappingURL=ir-channel-general_3.cjs.entry.js.map