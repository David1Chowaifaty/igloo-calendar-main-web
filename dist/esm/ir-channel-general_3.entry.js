import { r as registerInstance, c as createEvent, h, H as Host, g as getElement, F as Fragment } from './index-7e96440e.js';
import { c as channels_data, t as testConnection, u as updateChannelSettings, a as selectChannel, b as addMapping, d as setMappedChannel } from './channel.store-79fb5c60.js';
import { l as locales } from './locales.store-cb784e95.js';
import { c as calendar_data } from './calendar-data-2ae53dc9.js';
import './index-f100e9d2.js';

const irChannelGeneralCss = ".sc-ir-channel-general-h{display:block}.label-style.sc-ir-channel-general{width:6.25rem;text-align:end;padding-right:0.625rem !important}.connection-status.sc-ir-channel-general{display:flex;align-items:center;justify-content:space-between;margin-top:0.625rem !important}.connection-title.sc-ir-channel-general{border-bottom:1px solid #e4e5ec}.ml-18.sc-ir-channel-general{margin-left:18% !important}.status-message.sc-ir-channel-general{display:flex;align-items:center;gap:0.3125rem;font-size:0.81rem;margin:0;padding:0}";
const IrChannelGeneralStyle0 = irChannelGeneralCss;

const IrChannelGeneral = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.connectionStatus = createEvent(this, "connectionStatus", 7);
    }
    channel_status = null;
    buttonClicked = false;
    connection_status_message = '';
    status = false;
    connectionStatus;
    componentWillLoad() {
        if (this.channel_status === 'create' || !channels_data.isConnectedToChannel) {
            return;
        }
        this.connection_status_message = channels_data.isConnectedToChannel
            ? channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id)?.name
            : '';
        this.status = true;
    }
    handleTestConnectionClicked(e) {
        e.preventDefault();
        this.buttonClicked = true;
        if (!channels_data.channel_settings?.hotel_id) {
            return;
        }
        const status = testConnection();
        this.status = status;
        this.connection_status_message = status
            ? channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id)?.name
            : locales.entries?.Lcz_IncorrectConnection;
        this.buttonClicked = false;
        this.connectionStatus.emit(this.status);
    }
    render() {
        return (h(Host, { key: 'b0ede1385abd84c28a588deae8bdc99bfe880161', class: "px-1" }, h("section", { key: 'aed74163bc10003f4a7a4ba800e59fad88f4a8c9', class: "ml-18" }, h("fieldset", { key: '2c6989b5d24beb27205ea2546693df3b7fac73ed', class: "d-flex align-items-center" }, h("label", { key: '05692f4644dc4785164deb0a634f94a91c7777e7', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Channel), h("ir-combobox", { key: '32330a26e9e7455a06a30457470d36796d5d2d99', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: 'fa224b888ce2a0750526ee0f1cfea80786f80e7c', class: "d-flex align-items-center mt-1" }, h("label", { key: '302560acecdccf3705266280db3480805903c0e5', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Title), h("div", { key: '8dd6ea1284a83e2ad601af703ee5f638a508e0f6', class: "flex-fill" }, h("input", { key: 'c872e01ba9b264e1d063b4fc157889dbe2683bf5', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: '2d1c89164a40d2d2b25f31f2948fbc99d390e820', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '000752a23b126077ad176c980f8eac04f709325b', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, locales.entries?.Lcz_ConnectionSettings), h("div", { key: 'dce17a81fc17662a853f09497a0b248c1b330a11', class: "ml-18" }, h("fieldset", { key: '2f01af87c4282df86c587f958e49d9cd5561eb13', class: "d-flex align-items-center my-1" }, h("label", { key: 'b145c31256746dbce658dbf386b7e48075255892', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_HotelID), h("div", { key: '97ad95c48e1c43c17313d5b27aaa336705d765a8', class: "flex-fill" }, h("input", { key: 'c886ec3444ad6db2cafd271307a81d58c993fdd0', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: 'e6170ca236bd5477eef3bb43463159f2405eab71', class: "connection-status" }, h("div", { key: 'bced0a04f01ffd07227bf24821fb28cda3f84d47', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '603e0af285ebc4e285511c9bad87b318a07e9639' }, this.connection_status_message)), h("button", { key: 'ea056afe836ddf12ed3ac8c0f1ae34c9160ade92', class: "btn btn-outline-secondary btn-sm", type: "submit" }, locales.entries?.Lcz_TestConnection)))))));
    }
};
IrChannelGeneral.style = IrChannelGeneralStyle0;

const irChannelHeaderCss = ".sc-ir-channel-header-h{display:block;position:relative;padding:0;margin:0;border-bottom:1px solid #e4e5ec}ul.sc-ir-channel-header{display:flex;align-items:center;gap:2rem;padding:0}li.sc-ir-channel-header{list-style:none !important}.tab.sc-ir-channel-header{font-size:0.95rem;font-weight:400;cursor:pointer;position:relative;margin:0;padding:0;transition:color 0.3s ease;user-select:none}.tab[data-disabled].sc-ir-channel-header{cursor:auto}.tab.sc-ir-channel-header:hover{opacity:80%}.tab[data-state='selected'].sc-ir-channel-header,.tab[data-state='selected'].sc-ir-channel-header:hover{color:var(--blue);opacity:100%}.active-indicator.sc-ir-channel-header{padding:0;bottom:0px;position:absolute;height:3px;border-radius:4px;transition:transform 0.3s ease, width 0.3s ease;background:var(--blue)}";
const IrChannelHeaderStyle0 = irChannelHeaderCss;

const IrChannelHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabChanged = createEvent(this, "tabChanged", 7);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'ed2fe9db54a8fd79a3ff4b9a79f2a9f54247ab41' }, h("ul", { key: 'da5d7b16b5c28f4cf47cbc2400e6f43e87794950', class: "px-1" }, this.headerTitles.map((title, index) => (h("li", { class: `tab ${title.disabled ? 'text-light' : ''}`, key: title.id, onClick: () => {
                if (!title.disabled)
                    this.handleTabSelection(index);
            }, "data-disabled": title.disabled, "data-state": this.selectedIndex === index ? 'selected' : '' }, title.name)))), h("span", { key: '035e85e23bd03a740a51200787ade051714b4110', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
};
IrChannelHeader.style = IrChannelHeaderStyle0;

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
        const channelId = id.toString();
        const parentChannelId = roomTypeId?.toString();
        if (isRoomType) {
            const mappedRoomType = channels_data.mappedChannels.find(mapping => mapping.type === 'room_type' && mapping.channel_id.toString() === channelId);
            if (!mappedRoomType) {
                return { hide: false, result: undefined, occupancy: undefined };
            }
            const room = calendar_data.roomsInfo.find(roomInfo => roomInfo.id.toString() === mappedRoomType.ir_id);
            if (!room) {
                throw new Error('Invalid Room type');
            }
            return { hide: false, occupancy: room.occupancy_default.adult_nbr, result: room };
        }
        if (!parentChannelId) {
            throw new Error('Missing room type id');
        }
        const parentMapping = channels_data.mappedChannels.find(mapping => mapping.type === 'room_type' && mapping.channel_id.toString() === parentChannelId);
        if (!parentMapping) {
            return { hide: true, result: undefined, occupancy: undefined };
        }
        const parentRoom = calendar_data.roomsInfo.find(roomInfo => roomInfo.id.toString() === parentMapping.ir_id);
        if (!parentRoom) {
            throw new Error('Invalid Room type');
        }
        let matchedContext;
        for (const mapping of channels_data.mappedChannels) {
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
        const room = calendar_data.roomsInfo.find(roomInfo => roomInfo.rateplans.some(ratePlan => ratePlan.id.toString() === ratePlanMapping.ir_id));
        if (!room) {
            return undefined;
        }
        const ratePlan = room.rateplans.find(rp => rp.id.toString() === ratePlanMapping.ir_id);
        if (!ratePlan) {
            return undefined;
        }
        const parentMapping = channels_data.mappedChannels.find(mapping => mapping.type === 'room_type' && mapping.ir_id === room.id.toString());
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
            name: `${rate_plan['short_name']} ${rate_plan['is_non_refundable'] ? 'Non-refundable' : ''}`,
            occupancy: selectedRoomType.occupancy_default.adult_nbr,
        }));
    }
}

const irChannelMappingCss = ".sc-ir-channel-mapping-h{display:block;box-sizing:border-box;font-size:12px !important;line-height:14px !important}*.sc-ir-channel-mapping{padding:0;margin:0;box-sizing:border-box}.submap-text.sc-ir-channel-mapping{padding-left:10px}.text-blue.sc-ir-channel-mapping{color:var(--blue)}.text-red.sc-ir-channel-mapping{color:var(--red)}.not_mapped_btn.sc-ir-channel-mapping{color:#ff4961}.not_mapped_btn.sc-ir-channel-mapping:hover{color:#ff1635}li.sc-ir-channel-mapping{list-style:none !important}.refresh-btn.sc-ir-channel-mapping{all:unset;color:var(--blue);cursor:pointer}.refresh-btn.sc-ir-channel-mapping:hover{color:#104064}.selected-map.sc-ir-channel-mapping{flex:1}.selected-map-title.sc-ir-channel-mapping{flex:1}.mapped_row.sc-ir-channel-mapping{display:flex;align-items:center}.mapped_item.sc-ir-channel-mapping+svg.sc-ir-channel-mapping{display:block;flex:0 0 4.166666666666666%;max-width:4.166666666666666%;margin:0}.mapped_row.sc-ir-channel-mapping .mapped_item.sc-ir-channel-mapping{flex:0 0 45.83333333333333%;display:block;max-width:45.83333333333333%}.mapped_item.sc-ir-channel-mapping{margin:0;padding:0;line-height:22px}.mapped_name.sc-ir-channel-mapping{margin-right:5px}.gap-3.sc-ir-channel-mapping{gap:5px}.channel_name.sc-ir-channel-mapping{color:rgba(0, 0, 0, 0.88);font-size:14px;font-weight:700}.mapped_row.rate_plan.sc-ir-channel-mapping,.mapped_row.room_type.sc-ir-channel-mapping{margin-bottom:0px}";
const IrChannelMappingStyle0 = irChannelMappingCss;

const IrChannelMapping = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            return h("div", null);
        }
        if (mappedField.result) {
            return (h(Fragment, null, h("div", { class: "pl-2 flex-fill d-sm-none mapped_item text-blue d-flex align-items-center" }, h("span", { class: "m-0 p-0 d-flex align-items-center selected-map" }, h("span", { class: "selected-map-title" }, isRoomType ? mappedField.result.name : mappedField.result['short_name'], " ", mappedField.result['is_non_refundable'] ? 'Non-refundable' : ''), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), mappedField.occupancy), h("ir-icon", { class: "ml-1 p-0", onIconClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType) }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'var(--blue)', d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))), h("div", { class: "pl-2 flex-fill d-none mapped_item text-blue d-sm-flex align-items-center" }, h("span", { class: "mapped_name" }, isRoomType ? mappedField.result.name : mappedField.result['short_name'], " ", mappedField.result['is_non_refundable'] ? 'Non-refundable' : ''), h("div", { class: "d-flex align-items-center gap-3 flex-fill" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), h("span", null, mappedField.occupancy)), h("ir-button", { variant: "icon", onClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType), icon_name: "trash", style: { '--icon-size': '1rem', '--icon-button-color': '#1e9ff2', '--icon-button-hover-color': '#104064 ' } }))));
        }
        return (h("div", { class: "pl-2  flex-fill mapped_item" }, this.activeMapField === id ? (h("ir-combobox", { autoFocus: true, placeholder: locales.entries?.Lcz_NotMapped, data: this.availableRooms, onComboboxValueChange: e => {
                addMapping(e.detail.data, this.activeMapField, isRoomType);
                this.activeMapField = '';
            } })) : (h("span", { class: "cursor-pointer  not_mapped_btn", onClick: () => this.setActiveField(id, isRoomType, roomTypeId) }, locales.entries.Lcz_NotMapped))));
    }
    render() {
        return (h(Host, { key: '502c92a9b904ee570be22007b4f41ea64f3788ce', class: "py-md-2 px-md-2" }, h("div", { key: '72c3e68d07b8ddba4160e0b6db625694ef87b2e6', class: "d-flex p-0 m-0 w-100 justify-content-end" }, h("button", { key: 'af9f0022d934355db66bd8a2473392fe906296ff', onClick: () => {
                setMappedChannel();
            }, class: "btn refresh-btn" }, locales.entries?.Lcz_Refresh)), h("section", { key: '1c354531b31e5a9282b546567aa8d984ae374ba3', class: "w-100" }, h("div", { key: '71f5f13e93cba5fdf122b32b92f120686b0aceb5', class: "pt-1 mapped_row" }, h("p", { key: 'f8984b3bf0973aec24fb67a7cc8983aeca9855b9', class: "mapped_item channel_name" }, channels_data.selectedChannel?.name), h("svg", { key: '27e070e09163df0a49d6ef1b7eece67eb02398e8', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'c1ca8c4c240d24c5a6dddea643e10e0aabc36ba2', d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), h("p", { key: '4772f3c7074f21e12bc8264c8157a4ee85936667', class: "pl-2 mapped_item channel_name" }, "igloorooms")), h("div", { key: '9f076436e7d146bc8c0e4d68f7632659af997719' }, channels_data.selectedChannel?.property?.room_types?.map(room_type => {
            const mappedRoomType = this.mappingService.checkMappingExists(room_type.id.toString(), true);
            return (h(Fragment, null, h("div", { key: room_type.id, class: "mapped_row room_type pt-1" }, h("p", { class: "mapped_item" }, room_type.name), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), this.renderMappingStatus(mappedRoomType, room_type.id, true)), room_type.rate_plans.map(rate_plan => {
                const mappedRatePlan = this.mappingService.checkMappingExists(rate_plan.id.toString(), false, room_type.id.toString());
                // console.log(mappedRatePlan);
                return (h("div", { key: rate_plan.id, class: " mapped_row rate_plan" }, h("p", { class: "pl-1 submap-text mapped_item" }, rate_plan.name), !mappedRatePlan.hide && (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" }))), this.renderMappingStatus(mappedRatePlan, rate_plan.id, false, room_type.id)));
            })));
        })))));
    }
};
IrChannelMapping.style = IrChannelMappingStyle0;

export { IrChannelGeneral as ir_channel_general, IrChannelHeader as ir_channel_header, IrChannelMapping as ir_channel_mapping };

//# sourceMappingURL=ir-channel-general_3.entry.js.map