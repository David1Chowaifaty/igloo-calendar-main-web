'use strict';

var index = require('./index-Bp205iz4.js');
var channel_service = require('./channel.service-DD3Hllwi.js');
var locales_store = require('./locales.store-CQhQqUVl.js');
var calendarData = require('./calendar-data-BpobEh98.js');
require('./index-CjQGUKJk.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irChannelEditorCss = () => `.sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-right:0;margin-right:0}`;

const IrChannelEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.saveChannelFinished = index.createEvent(this, "saveChannelFinished");
        this.closeSideBar = index.createEvent(this, "closeSideBar");
        this.toast = index.createEvent(this, "toast");
    }
    channel_status = null;
    ticket;
    selectedTab = '';
    isLoading = false;
    status = false;
    headerTitles = [
        {
            id: 'general_settings',
            name: locales_store.locales.entries?.Lcz_GeneralSettings,
            disabled: false,
        },
        { id: 'mapping', name: locales_store.locales.entries?.Lcz_Mapping, disabled: true },
        { id: 'channel_booking', name: locales_store.locales.entries?.Lcz_ChannelBooking, disabled: true },
    ];
    selectedRoomType = [];
    saveChannelFinished;
    closeSideBar;
    toast;
    channelService = new channel_service.ChannelService();
    componentWillLoad() {
        if (this.channel_status === 'edit') {
            this.enableAllHeaders();
        }
        this.selectedTab = this.headerTitles[0].id;
        channel_service.onChannelChange('isConnectedToChannel', newValue => {
            if (!!newValue) {
                this.enableAllHeaders();
            }
            else {
                this.disableNonFirstTabs();
            }
        });
    }
    handleTabChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.selectedTab = e.detail;
    }
    renderTabScreen() {
        switch (this.selectedTab) {
            case 'general_settings':
                return index.h("ir-channel-general", { channel_status: this.channel_status, onConnectionStatus: e => (this.status = e.detail) });
            case 'mapping':
                return index.h("ir-channel-mapping", null);
            case 'channel_booking':
                return index.h("div", null, "channel booking");
            default:
                return null;
        }
    }
    enableAllHeaders() {
        this.headerTitles = this.headerTitles.map((title, index) => (index < this.headerTitles.length - 1 ? { ...title, disabled: false } : title));
    }
    disableNonFirstTabs() {
        this.headerTitles = this.headerTitles.map((title, index) => (index > 0 ? { ...title, disabled: true } : title));
    }
    async saveConnectedChannel() {
        try {
            this.isLoading = true;
            await this.channelService.saveConnectedChannel(null, false);
            this.saveChannelFinished.emit();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (index.h(index.Host, { key: '78c12e672d09644e5d738f6d9f3135b76f4d838d', class: " d-flex flex-column h-100" }, index.h("nav", { key: '05b26b5e281bc7c9f07a7a778fa68ed8d37b8284', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, index.h("div", { key: '1bbc8593e699c6a5dfb34fb9a5d7ef1f1f5155c6', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, index.h("h3", { key: '25da07bae7289dade865a438b462168852525fce', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? locales_store.locales.entries?.Lcz_CreateChannel : locales_store.locales.entries?.Lcz_EditChannel), index.h("ir-icon", { key: '2711eab543be932160407441335a80ba9678c127', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: 'e71e3b89fec8d0d86f3c18a752904d0e45eeaca7', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '20dcd8eae709f2076fabb23c6eb60bff9b77093b', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("ir-channel-header", { key: '8d16b9089696355abf792305d8653239593e9716', class: "mt-1 px-0", headerTitles: this.headerTitles })), index.h("section", { key: 'a23d78b04621f32975611e142027d760d5a35e57', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), index.h("ir-button", { key: '90ce28790bbfc6978057af89cca217121347356a', isLoading: this.isLoading, onClickHandler: () => {
                if (!channel_service.channels_data.isConnectedToChannel) {
                    this.toast.emit({
                        type: 'error',
                        description: locales_store.locales.entries.Lcz_InvalidCredentials,
                        title: locales_store.locales.entries.Lcz_InvalidCredentials,
                    });
                    return;
                }
                this.saveConnectedChannel();
            }, class: "px-1 py-1 top-border", btn_styles: "w-100  justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save })));
    }
};
IrChannelEditor.style = irChannelEditorCss();

const irChannelGeneralCss = () => `.sc-ir-channel-general-h{display:block}.label-style.sc-ir-channel-general{width:6.25rem;text-align:end;padding-right:0.625rem !important}.connection-status.sc-ir-channel-general{display:flex;align-items:center;justify-content:space-between;margin-top:0.625rem !important}.connection-title.sc-ir-channel-general{border-bottom:1px solid #e4e5ec}.ml-18.sc-ir-channel-general{margin-left:18% !important}.status-message.sc-ir-channel-general{display:flex;align-items:center;gap:0.3125rem;font-size:0.81rem;margin:0;padding:0}`;

const IrChannelGeneral = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.connectionStatus = index.createEvent(this, "connectionStatus");
    }
    channel_status = null;
    buttonClicked = false;
    connection_status_message = '';
    status = false;
    connectionStatus;
    componentWillLoad() {
        if (this.channel_status === 'create' || !channel_service.channels_data.isConnectedToChannel) {
            return;
        }
        this.connection_status_message = channel_service.channels_data.isConnectedToChannel
            ? channel_service.channels_data.selectedChannel.properties.find(property => property.id === channel_service.channels_data.channel_settings.hotel_id)?.name
            : '';
        this.status = true;
    }
    handleTestConnectionClicked(e) {
        e.preventDefault();
        this.buttonClicked = true;
        if (!channel_service.channels_data.channel_settings?.hotel_id) {
            return;
        }
        const status = channel_service.testConnection();
        this.status = status;
        this.connection_status_message = status
            ? channel_service.channels_data.selectedChannel.properties.find(property => property.id === channel_service.channels_data.channel_settings.hotel_id)?.name
            : locales_store.locales.entries?.Lcz_IncorrectConnection;
        this.buttonClicked = false;
        this.connectionStatus.emit(this.status);
    }
    render() {
        return (index.h(index.Host, { key: '402597c7ed857369a90cac5e159f4f5121a9047a', class: "px-1" }, index.h("section", { key: 'fcae25766c6037fd814b19123d4e255272f08735', class: "ml-18" }, index.h("fieldset", { key: '0e319cb3797b9c37644f42324d47226df95080e4', class: "d-flex align-items-center" }, index.h("label", { key: '3ea4d884b6efce871c13298b49a23553366af192', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, locales_store.locales.entries?.Lcz_Channel), index.h("ir-combobox", { key: '75b2566111dd1f5c389a9bced1d478fcad4ceb19', input_id: "hotel_channels", disabled: channel_service.channels_data.isConnectedToChannel, class: "flex-fill", value: channel_service.channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                channel_service.selectChannel(e.detail.data.toString());
            }, data: channel_service.channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), index.h("fieldset", { key: '7de9cd065527c4fa7e2085f44c6369875dceb910', class: "d-flex align-items-center mt-1" }, index.h("label", { key: '7974a8238d075284b0d122ed9a22259b501d38ce', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, locales_store.locales.entries?.Lcz_Title), index.h("div", { key: '6ec03b90786af2f2e4fccc7e3eba5ccb5d6fd777', class: "flex-fill" }, index.h("input", { key: 'ce199922585edfef770b2783152b8dbdb818641b', id: "hotel_title", value: channel_service.channels_data.channel_settings?.hotel_title, onInput: e => channel_service.updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channel_service.channels_data.selectedChannel && (index.h("form", { key: '794bf7190e8cf72acc21a04eb3df7ff510ad8195', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, index.h("h3", { key: '65b72e844ab3012644e45443abff83c3b169cb9c', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, locales_store.locales.entries?.Lcz_ConnectionSettings), index.h("div", { key: '3b4e1ba1d47719b7ed37ea34ea9ef3d6739bc8bd', class: "ml-18" }, index.h("fieldset", { key: '8f45140569a789f2866b481b6eeedf524c8c1c62', class: "d-flex align-items-center my-1" }, index.h("label", { key: 'ac46c8e52b58b73ce2c09b8f6d39bc5354be9b32', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, locales_store.locales.entries?.Lcz_HotelID), index.h("div", { key: '286521dfbc3056a6699d92c2ba34ab85e33c67c3', class: "flex-fill" }, index.h("input", { key: '5b437cc4ce2eada66c89cf07701a7f32fd1d93b3', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channel_service.channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channel_service.channels_data.channel_settings?.hotel_id, onInput: e => channel_service.updateChannelSettings('hotel_id', e.target.value) }))), index.h("div", { key: 'd5c23025dc80b5e8c34ec91cf6770b190c267a86', class: "connection-status" }, index.h("div", { key: '4f9e45deeb431a22a015efc0d93db1bd00f2043d', class: "status-message" }, this.connection_status_message &&
            (this.status ? index.h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : index.h("ir-icons", { name: "danger", style: { color: 'yellow' } })), index.h("span", { key: 'f48a7341d3827a0251a34fd7542e8be4abda1bac' }, this.connection_status_message)), index.h("button", { key: '887a2c8decae4dac6e876cfe22a94b8d655577f5', class: "btn btn-outline-secondary btn-sm", type: "submit" }, locales_store.locales.entries?.Lcz_TestConnection)))))));
    }
};
IrChannelGeneral.style = irChannelGeneralCss();

const irChannelHeaderCss = () => `.sc-ir-channel-header-h{display:block;position:relative;padding:0;margin:0;border-bottom:1px solid #e4e5ec}ul.sc-ir-channel-header{display:flex;align-items:center;gap:2rem;padding:0}li.sc-ir-channel-header{list-style:none !important}.tab.sc-ir-channel-header{font-size:0.95rem;font-weight:400;cursor:pointer;position:relative;margin:0;padding:0;transition:color 0.3s ease;user-select:none}.tab[data-disabled].sc-ir-channel-header{cursor:auto}.tab.sc-ir-channel-header:hover{opacity:80%}.tab[data-state='selected'].sc-ir-channel-header,.tab[data-state='selected'].sc-ir-channel-header:hover{color:var(--blue);opacity:100%}.active-indicator.sc-ir-channel-header{padding:0;bottom:0px;position:absolute;height:3px;border-radius:4px;transition:transform 0.3s ease, width 0.3s ease;background:var(--blue)}`;

const IrChannelHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tabChanged = index.createEvent(this, "tabChanged");
    }
    get el() { return index.getElement(this); }
    headerTitles = [];
    selectedIndex = 0;
    tabChanged;
    activeIndicator;
    animationFrameId;
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
        return (index.h(index.Host, { key: '19a7f9ffd88a518ff3864b7b0773b03de372b6e1' }, index.h("ul", { key: '7075eee8df8563292a040b2a45b368edd601a145', class: "px-1" }, this.headerTitles.map((title, index$1) => (index.h("li", { class: `tab ${title.disabled ? 'text-light' : ''}`, key: title.id, onClick: () => {
                if (!title.disabled)
                    this.handleTabSelection(index$1);
            }, "data-disabled": title.disabled, "data-state": this.selectedIndex === index$1 ? 'selected' : '' }, title.name)))), index.h("span", { key: '8927d4f43b951b3d595749336e209306dbb92044', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
};
IrChannelHeader.style = irChannelHeaderCss();

class IrMappingService {
    removedMapping(ir_id, isRoomType) {
        let selectedChannels = [...channel_service.channels_data.mappedChannels];
        if (isRoomType) {
            const toBeRemovedRoomType = calendarData.calendar_data.roomsInfo.find(room => room.id.toString() === ir_id);
            selectedChannels = selectedChannels.filter(c => toBeRemovedRoomType.rateplans.find(rate_plan => rate_plan.id.toString() === c.ir_id) === undefined);
        }
        channel_service.channels_data.mappedChannels = selectedChannels.filter(c => c.ir_id !== ir_id);
    }
    checkMappingExists(id, isRoomType, roomTypeId) {
        const channelId = id.toString();
        const parentChannelId = roomTypeId?.toString();
        if (isRoomType) {
            const mappedRoomType = channel_service.channels_data.mappedChannels.find(mapping => mapping.type === 'room_type' && mapping.channel_id.toString() === channelId);
            if (!mappedRoomType) {
                return { hide: false, result: undefined, occupancy: undefined };
            }
            const room = calendarData.calendar_data.roomsInfo.find(roomInfo => roomInfo.id.toString() === mappedRoomType.ir_id);
            if (!room) {
                throw new Error('Invalid Room type');
            }
            return { hide: false, occupancy: room.occupancy_default.adult_nbr, result: room };
        }
        if (!parentChannelId) {
            throw new Error('Missing room type id');
        }
        const parentMapping = channel_service.channels_data.mappedChannels.find(mapping => mapping.type === 'room_type' && mapping.channel_id.toString() === parentChannelId);
        if (!parentMapping) {
            return { hide: true, result: undefined, occupancy: undefined };
        }
        const parentRoom = calendarData.calendar_data.roomsInfo.find(roomInfo => roomInfo.id.toString() === parentMapping.ir_id);
        if (!parentRoom) {
            throw new Error('Invalid Room type');
        }
        let matchedContext;
        for (const mapping of channel_service.channels_data.mappedChannels) {
            if (mapping.type !== 'rate_plan' || mapping.channel_id.toString() !== channelId) {
                continue;
            }
            const context = this.resolveRatePlanContext(mapping);
            if (context && context.parentChannelId === parentChannelId) {
                matchedContext = context;
                break;
            }
        }
        if (!matchedContext) {
            return { hide: false, result: undefined, occupancy: undefined };
        }
        if (matchedContext.room.id.toString() !== parentRoom.id.toString()) {
            return { hide: false, result: undefined, occupancy: undefined };
        }
        return {
            hide: false,
            occupancy: parentRoom.occupancy_default.adult_nbr,
            result: matchedContext.ratePlan,
        };
    }
    resolveRatePlanContext(ratePlanMapping) {
        if (ratePlanMapping.type !== 'rate_plan') {
            return undefined;
        }
        const room = calendarData.calendar_data.roomsInfo.find(roomInfo => roomInfo.rateplans.some(ratePlan => ratePlan.id.toString() === ratePlanMapping.ir_id));
        if (!room) {
            return undefined;
        }
        const ratePlan = room.rateplans.find(rp => rp.id.toString() === ratePlanMapping.ir_id);
        if (!ratePlan) {
            return undefined;
        }
        const parentMapping = channel_service.channels_data.mappedChannels.find(mapping => mapping.type === 'room_type' && mapping.ir_id === room.id.toString());
        return {
            room,
            ratePlan,
            parentChannelId: parentMapping?.channel_id?.toString(),
        };
    }
    // public checkMappingExists(id: string, isRoomType: boolean, roomTypeId?: string) {
    //   const mapped_id = channels_data.mappedChannels.find(m => m.channel_id === id);
    //   if (!mapped_id) {
    //     if (!isRoomType) {
    //       const matchingRoomType = channels_data.mappedChannels.find(m => m.channel_id.toString() === roomTypeId);
    //       if (!matchingRoomType) {
    //         return { hide: true, result: undefined, occupancy: undefined };
    //       }
    //     }
    //     return { hide: false, result: undefined, occupancy: undefined };
    //   }
    //   if (isRoomType) {
    //     const room_type = calendar_data.roomsInfo.find(room => room.id.toString() === mapped_id.ir_id);
    //     return { hide: false, occupancy: room_type.occupancy_default.adult_nbr, result: room_type };
    //   }
    //   if (!roomTypeId) {
    //     throw new Error('Missing room type id');
    //   }
    //   const matchingRoomType = channels_data.mappedChannels.find(m => m.channel_id.toString() === roomTypeId);
    //   const room_type = calendar_data.roomsInfo.find(room => room.id.toString() === matchingRoomType.ir_id);
    //   if (!room_type) {
    //     throw new Error('Invalid Room type');
    //   }
    //   return { hide: false, occupancy: room_type.occupancy_default.adult_nbr, result: room_type.rateplans.find(r => r.id.toString() === mapped_id.ir_id) };
    // }
    getAppropriateRooms(isRoomType, roomTypeId) {
        if (isRoomType) {
            const filteredRoomTypes = calendarData.calendar_data.roomsInfo.filter(room => channel_service.channels_data.mappedChannels.find(m => m.ir_id.toString() === room.id.toString()) === undefined && room.is_active);
            return filteredRoomTypes.map(room => ({ id: room.id.toString(), name: room.name, occupancy: room.occupancy_default.adult_nbr }));
        }
        if (!roomTypeId) {
            throw new Error('Missing roomType id');
        }
        const matchingRoomType = channel_service.channels_data.mappedChannels.find(m => m.channel_id.toString() === roomTypeId);
        if (!matchingRoomType) {
            throw new Error('Invalid room type id');
        }
        const selectedRoomType = calendarData.calendar_data.roomsInfo.find(room => room.id.toString() === matchingRoomType.ir_id);
        return selectedRoomType.rateplans
            .filter(rate_plan => channel_service.channels_data.mappedChannels.find(r => rate_plan.id.toString() === r.ir_id) === undefined && rate_plan['is_active'])
            .map(rate_plan => ({
            id: rate_plan.id.toString(),
            name: `${rate_plan['short_name']} ${rate_plan['is_non_refundable'] ? 'Non-refundable' : ''}`,
            occupancy: selectedRoomType.occupancy_default.adult_nbr,
        }));
    }
}

const irChannelMappingCss = () => `.sc-ir-channel-mapping-h{display:block;box-sizing:border-box;font-size:12px !important;line-height:14px !important}*.sc-ir-channel-mapping{padding:0;margin:0;box-sizing:border-box}.submap-text.sc-ir-channel-mapping{padding-left:10px}.text-blue.sc-ir-channel-mapping{color:var(--blue)}.text-red.sc-ir-channel-mapping{color:var(--red)}.not_mapped_btn.sc-ir-channel-mapping{color:#ff4961}.not_mapped_btn.sc-ir-channel-mapping:hover{color:#ff1635}li.sc-ir-channel-mapping{list-style:none !important}.refresh-btn.sc-ir-channel-mapping{all:unset;color:var(--blue);cursor:pointer}.refresh-btn.sc-ir-channel-mapping:hover{color:#104064}.selected-map.sc-ir-channel-mapping{flex:1}.selected-map-title.sc-ir-channel-mapping{flex:1}.mapped_row.sc-ir-channel-mapping{display:flex;align-items:center}.mapped_item.sc-ir-channel-mapping+svg.sc-ir-channel-mapping{display:block;flex:0 0 4.166666666666666%;max-width:4.166666666666666%;margin:0}.mapped_row.sc-ir-channel-mapping .mapped_item.sc-ir-channel-mapping{flex:0 0 45.83333333333333%;display:block;max-width:45.83333333333333%}.mapped_item.sc-ir-channel-mapping{margin:0;padding:0;line-height:22px}.mapped_name.sc-ir-channel-mapping{margin-right:5px}.gap-3.sc-ir-channel-mapping{gap:5px}.channel_name.sc-ir-channel-mapping{color:rgba(0, 0, 0, 0.88);font-size:14px;font-weight:700}.mapped_row.rate_plan.sc-ir-channel-mapping,.mapped_row.room_type.sc-ir-channel-mapping{margin-bottom:0px}`;

const IrChannelMapping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    activeMapField = '';
    availableRooms = [];
    mappingService = new IrMappingService();
    setActiveField(id, isRoomType, roomTypeId) {
        const parentChannelId = roomTypeId?.toString();
        const availableRooms = this.mappingService.getAppropriateRooms(isRoomType, parentChannelId);
        if (availableRooms) {
            this.availableRooms = availableRooms;
        }
        this.activeMapField = id.toString();
    }
    renderMappingStatus(mappedField, id, isRoomType, roomTypeId) {
        if (mappedField.hide) {
            return index.h("div", null);
        }
        if (mappedField.result) {
            return (index.h(index.Fragment, null, index.h("div", { class: "pl-2 flex-fill d-sm-none mapped_item text-blue d-flex align-items-center" }, index.h("span", { class: "m-0 p-0 d-flex align-items-center selected-map" }, index.h("span", { class: "selected-map-title" }, isRoomType ? mappedField.result.name : mappedField.result['short_name'], " ", mappedField.result['is_non_refundable'] ? 'Non-refundable' : ''), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), mappedField.occupancy), index.h("ir-icon", { class: "ml-1 p-0", onIconClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType) }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: 'var(--blue)', d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))), index.h("div", { class: "pl-2 flex-fill d-none mapped_item text-blue d-sm-flex align-items-center" }, index.h("span", { class: "mapped_name" }, isRoomType ? mappedField.result.name : mappedField.result['short_name'], " ", mappedField.result['is_non_refundable'] ? 'Non-refundable' : ''), index.h("div", { class: "d-flex align-items-center gap-3 flex-fill" }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), index.h("span", null, mappedField.occupancy)), index.h("ir-button", { variant: "icon", onClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType), icon_name: "trash", style: { '--icon-size': '1rem', '--icon-button-color': '#1e9ff2', '--icon-button-hover-color': '#104064 ' } }))));
        }
        return (index.h("div", { class: "pl-2  flex-fill mapped_item" }, this.activeMapField === id ? (index.h("ir-combobox", { autoFocus: true, placeholder: locales_store.locales.entries?.Lcz_NotMapped, data: this.availableRooms, onComboboxValueChange: e => {
                channel_service.addMapping(e.detail.data, this.activeMapField, isRoomType);
                this.activeMapField = '';
            } })) : (index.h("span", { class: "cursor-pointer  not_mapped_btn", onClick: () => this.setActiveField(id, isRoomType, roomTypeId) }, locales_store.locales.entries.Lcz_NotMapped))));
    }
    render() {
        return (index.h(index.Host, { key: '61f70050d2d271e401c3aacdc470c4c614cbbfa6', class: "py-md-2 px-md-2" }, index.h("div", { key: '277cf75682b5f8b0dcd79b7488e4e64c99bc62d6', class: "d-flex p-0 m-0 w-100 justify-content-end" }, index.h("button", { key: 'c89f2815457fed7dcb255acec7aa22e7b14a017a', onClick: () => {
                channel_service.setMappedChannel();
            }, class: "btn refresh-btn" }, locales_store.locales.entries?.Lcz_Refresh)), index.h("section", { key: 'fd49cf315d0ecdca2cf64885fdf4412c46317500', class: "w-100" }, index.h("div", { key: 'f725dc181ffc7fee7466a65029720c87d8a337ce', class: "pt-1 mapped_row" }, index.h("p", { key: 'b4465d33d3b34c0a3ce9731d291c586f5ee50832', class: "mapped_item channel_name" }, channel_service.channels_data.selectedChannel?.name), index.h("svg", { key: '9e33ba35165376d438531d224759df1c743c78f1', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: 'ff369f66907020c877e3aabf525f7f8dafd28414', d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), index.h("p", { key: 'bb102487935bca19aac30e13676df53eed167d44', class: "pl-2 mapped_item channel_name" }, "igloorooms")), index.h("div", { key: '80048cfdd2539ddfc79aaed327780c33af142f58' }, channel_service.channels_data.selectedChannel?.property?.room_types?.map(room_type => {
            const mappedRoomType = this.mappingService.checkMappingExists(room_type.id.toString(), true);
            return (index.h(index.Fragment, null, index.h("div", { key: room_type.id, class: "mapped_row room_type pt-1" }, index.h("p", { class: "mapped_item" }, room_type.name), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), this.renderMappingStatus(mappedRoomType, room_type.id, true)), room_type.rate_plans.map(rate_plan => {
                const mappedRatePlan = this.mappingService.checkMappingExists(rate_plan.id.toString(), false, room_type.id.toString());
                // console.log(mappedRatePlan);
                return (index.h("div", { key: rate_plan.id, class: " mapped_row rate_plan" }, index.h("p", { class: "pl-1 submap-text mapped_item" }, rate_plan.name), !mappedRatePlan.hide && (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: "currentColor", d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" }))), this.renderMappingStatus(mappedRatePlan, rate_plan.id, false, room_type.id)));
            })));
        })))));
    }
};
IrChannelMapping.style = irChannelMappingCss();

const irSwitchCss = () => `.sc-ir-switch-h{display:block;position:relative;box-sizing:border-box;--ir-root-width:36px;--ir-root-height:20px}.hidden-input.sc-ir-switch{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height)}.SwitchRoot.sc-ir-switch{all:unset;padding:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height);background-color:var(--ir-root-inactive-color, #ff4961);position:relative;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;--webkit-tap-highlight-color:rgba(0, 0, 0, 0);border-radius:9999px;box-sizing:border-box}.SwitchRoot.sc-ir-switch:disabled{opacity:80%}.SwitchRoot.sc-ir-switch:focus-visible{outline:1px solid var(--ir-root-active-color, rgb(55, 188, 155));outline-offset:1px}.SwitchRoot[data-state='checked'].sc-ir-switch{background-color:var(--ir-root-active-color, rgb(55, 188, 155))}.SwitchThumb.sc-ir-switch{padding:0;margin:0;display:block;width:calc(var(--ir-root-height) - 3px);height:calc(var(--ir-root-height) - 3px);border-radius:9999px;background:white;box-shadow:rgba(0, 0, 0, 0.2) 0px;transition:transform 100ms ease 0s;transform:translateX(2px);will-change:transform}.SwitchThumb[data-state='checked'].sc-ir-switch{transform:translateX(calc(var(--ir-root-height) - 3px))}`;

const IrSwitch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkChange = index.createEvent(this, "checkChange");
    }
    /**
     * Whether the switch is currently checked (on).
     * This is mutable and can be toggled internally.
     */
    checked = false;
    /**
     * Optional ID for the switch.
     * If not provided, a random ID will be generated.
     */
    switchId;
    /**
     * Disables the switch if true.
     */
    disabled = false;
    /**
     * Emitted when the checked state changes.
     * Emits `true` when turned on, `false` when turned off.
     *
     * Example:
     * ```tsx
     * <ir-switch onCheckChange={(e) => console.log(e.detail)} />
     * ```
     */
    checkChange;
    switchRoot;
    _id = '';
    componentWillLoad() {
        this._id = this.generateRandomId(10);
    }
    componentDidLoad() {
        if (!this.switchRoot) {
            return;
        }
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }
    /**
     * Generates a random alphanumeric ID of specified length.
     *
     * @param length Number of characters in the ID.
     * @returns A string with the generated ID.
     */
    generateRandomId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    /**
     * Toggles the `checked` state of the switch and updates accessibility attributes.
     * Also emits the `checkChange` event with the new state.
     *
     * Example:
     * ```ts
     * const el = document.querySelector('ir-switch');
     * el.handleCheckChange(); // toggles on/off
     * ```
     */
    handleCheckChange() {
        this.checked = !this.checked;
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
        this.checkChange.emit(this.checked);
    }
    render() {
        return (index.h(index.Host, { key: 'cd49470cdd1ec0328f7642da857e0b8701c6901d' }, index.h("button", { key: '0bc61e755b8b1b2fbe20977f396c68fee0a8c7b5', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, index.h("span", { key: '3a64f7affd80e4ebfb3c142be788cf9074b47f54', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), index.h("input", { key: '96f214553a0cfe103653fd76ab702f8d902a4005', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
    }
};
IrSwitch.style = irSwitchCss();

exports.ir_channel_editor = IrChannelEditor;
exports.ir_channel_general = IrChannelGeneral;
exports.ir_channel_header = IrChannelHeader;
exports.ir_channel_mapping = IrChannelMapping;
exports.ir_switch = IrSwitch;
