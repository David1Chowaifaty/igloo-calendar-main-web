'use strict';

var index = require('./index-CQkpA5n3.js');
var channel_service = require('./channel.service-DGccP53b.js');
var t = require('./t-wyGILxEL.js');
var direction = require('./direction-Bl6Woad1.js');
var calendarData = require('./calendar-data-Br2L_0sg.js');
require('./locale-scope-C7rmpwuA.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irChannelEditorCss = () => `.sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-inline-end:0;margin-inline-end:0}.ir-text-start.sc-ir-channel-editor{text-align:start}`;

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
            name: t.t('Lcz_GeneralSettings'),
            disabled: false,
        },
        { id: 'mapping', name: t.t('Lcz_Mapping'), disabled: true },
        { id: 'channel_booking', name: t.t('Lcz_ChannelBooking'), disabled: true },
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
                return index.h("div", null, t.t('Lcz_ChannelBookingPlaceholder', { fallback: 'channel booking' }));
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
        return (index.h(index.Host, { key: 'bbdd8f324c21b9a49cd5621aa77096578d9afc50', class: " d-flex flex-column h-100" }, index.h("nav", { key: 'f5f4c203b4378ae0d23479b843169d780c3c4a5e', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, index.h("div", { key: '644f0fd4726901418e2ead11aee0a89f2ed5664a', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, index.h("h3", { key: 'a5099339185799b7e2273fbcda8005df3b84aa9f', class: "ir-text-start font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? t.t('Lcz_CreateChannel') : t.t('Lcz_EditChannel')), index.h("ir-icon", { key: 'a761dafcb666648ab8d0ae34f8f309d91be1c500', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: 'aadb24eea29a12112ce870526fa2dc9e3ea5cf3e', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '2ce1ca2f3c497c5148cd787ce76d2aad7d524514', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("ir-channel-header", { key: '21b9f3ee104f4329328873634fe77434582599d2', class: "mt-1 px-0", headerTitles: this.headerTitles })), index.h("section", { key: 'dfc7b8c19356ce480b0038ef5b6d3109e364a426', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), index.h("ir-button", { key: '0c78ba202baf19a952ab75f872e88dbe0624eed5', isLoading: this.isLoading, onClickHandler: () => {
                if (!channel_service.channels_data.isConnectedToChannel) {
                    this.toast.emit({
                        type: 'error',
                        description: t.t('Lcz_InvalidCredentials'),
                        title: t.t('Lcz_InvalidCredentials'),
                    });
                    return;
                }
                this.saveConnectedChannel();
            }, class: "px-1 py-1 top-border", btn_styles: "w-100  justify-content-center align-items-center", text: t.t('Lcz_Save', { fallback: 'Save' }) })));
    }
};
IrChannelEditor.style = irChannelEditorCss();

const irChannelGeneralCss = () => `.sc-ir-channel-general-h{display:block}.label-style.sc-ir-channel-general{width:6.25rem;text-align:end;padding-inline-end:0.625rem !important}.connection-status.sc-ir-channel-general{display:flex;align-items:center;justify-content:space-between;margin-top:0.625rem !important}.connection-title.sc-ir-channel-general{border-bottom:1px solid #e4e5ec}.ml-18.sc-ir-channel-general{margin-inline-start:18% !important}.status-message.sc-ir-channel-general{display:flex;align-items:center;gap:0.3125rem;font-size:0.81rem;margin:0;padding:0}.ir-text-start.sc-ir-channel-general{text-align:start}`;

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
            : t.t('Lcz_IncorrectConnection');
        this.buttonClicked = false;
        this.connectionStatus.emit(this.status);
    }
    render() {
        return (index.h(index.Host, { key: 'b4f995f9c3a596ab311a54dc376ad8c57c437c0a', class: "px-1" }, index.h("section", { key: '91093e8c5036d21dd075e4119ffeb7e12fe17545', class: "ml-18" }, index.h("fieldset", { key: '5044f45b99263f9168e58d503b6b1e71b3477faa', class: "d-flex align-items-center" }, index.h("label", { key: 'a2b69ee1fdeecefd6988b86258ab6404271491a5', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, t.t('Lcz_Channel')), index.h("ir-combobox", { key: 'f5e3aabfd3b1a3c0648a70d91421225e5116b76e', input_id: "hotel_channels", disabled: channel_service.channels_data.isConnectedToChannel, class: "flex-fill", value: channel_service.channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                channel_service.selectChannel(e.detail.data.toString());
            }, data: channel_service.channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), index.h("fieldset", { key: 'f25f488e2c483ba1bd8d2001bde6a6706fa1ef4c', class: "d-flex align-items-center mt-1" }, index.h("label", { key: '022e753fe0f00d8ddb2da78072bf21fa20466007', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, t.t('Lcz_Title')), index.h("div", { key: '589f22879ed9078aa95ce1aa9f83c83bcf78c9ec', class: "flex-fill" }, index.h("input", { key: '888393be17550a850795536e6500bce23e5590a1', id: "hotel_title", value: channel_service.channels_data.channel_settings?.hotel_title, onInput: e => channel_service.updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channel_service.channels_data.selectedChannel && (index.h("form", { key: 'ef2a1114ba78e57dcefdf4ce9aead718c4559eca', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, index.h("h3", { key: '6efe6631858f5e1f755dab682288c149dbf6b860', class: "ir-text-start font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, t.t('Lcz_ConnectionSettings')), index.h("div", { key: '6911af36f6c81f8da1e7f1a6f74fd61b175ee041', class: "ml-18" }, index.h("fieldset", { key: 'f7cdc4ad73a764fc442b043492280f33f68375e9', class: "d-flex align-items-center my-1" }, index.h("label", { key: 'b582ac4af8cf429a04e4f832e477f302d46b3dbc', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, t.t('Lcz_HotelID')), index.h("div", { key: '8d9be2b8f85b85da8b9235eaa420110c46142b47', class: "flex-fill" }, index.h("input", { key: '8330d663e86727668e0d0904f9ba2d7fcad9e7a6', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channel_service.channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channel_service.channels_data.channel_settings?.hotel_id, onInput: e => channel_service.updateChannelSettings('hotel_id', e.target.value) }))), index.h("div", { key: '1a018d880fbf87278a1a96e038953b243d090b75', class: "connection-status" }, index.h("div", { key: 'e9fa742e69c649e0e4fce93925d021dedf4af395', class: "status-message" }, this.connection_status_message &&
            (this.status ? index.h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : index.h("ir-icons", { name: "danger", style: { color: 'yellow' } })), index.h("span", { key: 'a86523b0dba2fc16b4cb5cb30762be70ef5aa1b7' }, this.connection_status_message)), index.h("button", { key: '740c92bd6b542f27a0a1ea183c588ec86e457a83', class: "btn btn-outline-secondary btn-sm", type: "submit" }, t.t('Lcz_TestConnection'))))))));
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
                const tabRect = selectedTab.getBoundingClientRect();
                // Measured on the inline axis: the indicator starts at the strip's inline start,
                // which is the right edge under RTL, so a raw physical offset walks it the wrong way.
                const position = direction.inlineOffset(tabRect, this.el.getBoundingClientRect());
                this.activeIndicator.style.width = `${tabRect.width}px`;
                this.activeIndicator.style.transform = `translateX(${position * direction.inlineSign()}px)`;
            }
        });
    }
    render() {
        return (index.h(index.Host, { key: 'd6144166250f1a77c75693ad094064969bc9c03c' }, index.h("ul", { key: '7add55b9e865b098cf02ed1d9609c0200e99eab4', class: "px-1" }, this.headerTitles.map((title, index$1) => (index.h("li", { class: `tab ${title.disabled ? 'text-light' : ''}`, key: title.id, onClick: () => {
                if (!title.disabled)
                    this.handleTabSelection(index$1);
            }, "data-disabled": title.disabled, "data-state": this.selectedIndex === index$1 ? 'selected' : '' }, title.name)))), index.h("span", { key: 'defa16f6d7229bf2bd1fe0cdab97dbcb3adfc9d4', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
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

const irChannelMappingCss = () => `.sc-ir-channel-mapping-h{display:block;box-sizing:border-box;font-size:12px !important;line-height:14px !important}*.sc-ir-channel-mapping{padding:0;margin:0;box-sizing:border-box}.submap-text.sc-ir-channel-mapping{padding-inline-start:10px}.text-blue.sc-ir-channel-mapping{color:var(--blue)}.text-red.sc-ir-channel-mapping{color:var(--red)}.not_mapped_btn.sc-ir-channel-mapping{color:#ff4961}.not_mapped_btn.sc-ir-channel-mapping:hover{color:#ff1635}li.sc-ir-channel-mapping{list-style:none !important}.refresh-btn.sc-ir-channel-mapping{all:unset;color:var(--blue);cursor:pointer}.refresh-btn.sc-ir-channel-mapping:hover{color:#104064}.selected-map.sc-ir-channel-mapping{flex:1}.selected-map-title.sc-ir-channel-mapping{flex:1}.mapped_row.sc-ir-channel-mapping{display:flex;align-items:center}.mapped_item.sc-ir-channel-mapping+svg.sc-ir-channel-mapping{display:block;flex:0 0 4.166666666666666%;max-width:4.166666666666666%;margin:0}.mapped_row.sc-ir-channel-mapping .mapped_item.sc-ir-channel-mapping{flex:0 0 45.83333333333333%;display:block;max-width:45.83333333333333%}.mapped_item.sc-ir-channel-mapping{margin:0;padding:0;line-height:22px}.mapped_name.sc-ir-channel-mapping{margin-inline-end:5px}.gap-3.sc-ir-channel-mapping{gap:5px}.channel_name.sc-ir-channel-mapping{color:rgba(0, 0, 0, 0.88);font-size:14px;font-weight:700}.mapped_row.rate_plan.sc-ir-channel-mapping,.mapped_row.room_type.sc-ir-channel-mapping{margin-bottom:0px}.ir-ms-1.sc-ir-channel-mapping{margin-inline-start:0.25rem}.ir-ps-1.sc-ir-channel-mapping{padding-inline-start:0.25rem}.ir-ps-2.sc-ir-channel-mapping{padding-inline-start:0.5rem}`;

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
            return (index.h(index.Fragment, null, index.h("div", { class: "ir-ps-2 flex-fill d-sm-none mapped_item text-blue d-flex align-items-center" }, index.h("span", { class: "m-0 p-0 d-flex align-items-center selected-map" }, index.h("span", { class: "selected-map-title" }, isRoomType ? mappedField.result.name : mappedField.result['short_name'], ' ', mappedField.result['is_non_refundable'] ? t.t('Lcz_NonRefundable', { fallback: 'Non-refundable' }) : ''), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), mappedField.occupancy), index.h("ir-icon", { class: "ir-ms-1 p-0", onIconClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType) }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: 'var(--blue)', d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))), index.h("div", { class: "ir-ps-2 flex-fill d-none mapped_item text-blue d-sm-flex align-items-center" }, index.h("span", { class: "mapped_name" }, isRoomType ? mappedField.result.name : mappedField.result['short_name'], ' ', mappedField.result['is_non_refundable'] ? t.t('Lcz_NonRefundable', { fallback: 'Non-refundable' }) : ''), index.h("div", { class: "d-flex align-items-center gap-3 flex-fill" }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), index.h("span", null, mappedField.occupancy)), index.h("ir-button", { variant: "icon", onClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType), icon_name: "trash", style: { '--icon-size': '1rem', '--icon-button-color': '#1e9ff2', '--icon-button-hover-color': '#104064 ' } }))));
        }
        return (index.h("div", { class: "ir-ps-2  flex-fill mapped_item" }, this.activeMapField === id ? (index.h("ir-combobox", { autoFocus: true, placeholder: t.t('Lcz_NotMapped'), data: this.availableRooms, onComboboxValueChange: e => {
                channel_service.addMapping(e.detail.data, this.activeMapField, isRoomType);
                this.activeMapField = '';
            } })) : (index.h("span", { class: "cursor-pointer  not_mapped_btn", onClick: () => this.setActiveField(id, isRoomType, roomTypeId) }, t.t('Lcz_NotMapped')))));
    }
    render() {
        return (index.h(index.Host, { key: '11f8481c7dc3c1e44d55a3eb952f333444253d6d', class: "py-md-2 px-md-2" }, index.h("div", { key: 'ce441fe796f8975ba8bd666e615fd586cf8f3b6c', class: "d-flex p-0 m-0 w-100 justify-content-end" }, index.h("button", { key: 'c6db26d1c9928904c2ef73f32eb997f6e072e7e9', onClick: () => {
                channel_service.setMappedChannel();
            }, class: "btn refresh-btn" }, t.t('Lcz_Refresh'))), index.h("section", { key: 'b01744a2133d6c39aceadf105a188b5c7b318c4c', class: "w-100" }, index.h("div", { key: '0d36c69763a538ea9dc0e01caf7028d1fd7281af', class: "pt-1 mapped_row" }, index.h("p", { key: 'd7ad7b16ffb1c116957c34361543d85a8d1470fe', class: "mapped_item channel_name" }, channel_service.channels_data.selectedChannel?.name), index.h("svg", { key: 'f198a08a3c8a779234e929b9d65db8046214ca68', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: '558fc2cb651c44f1acc7abbd0ef45d92ef9eb0ab', d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), index.h("p", { key: '212754038594ecd72eae737f020453b7ea2fe82e', class: "ir-ps-2 mapped_item channel_name" }, "igloorooms")), index.h("div", { key: '77de8997103a21a469d90e6239671b6759a8655e' }, channel_service.channels_data.selectedChannel?.property?.room_types?.map(room_type => {
            const mappedRoomType = this.mappingService.checkMappingExists(room_type.id.toString(), true);
            return (index.h(index.Fragment, null, index.h("div", { key: room_type.id, class: "mapped_row room_type pt-1" }, index.h("p", { class: "mapped_item" }, room_type.name), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), this.renderMappingStatus(mappedRoomType, room_type.id, true)), room_type.rate_plans.map(rate_plan => {
                const mappedRatePlan = this.mappingService.checkMappingExists(rate_plan.id.toString(), false, room_type.id.toString());
                // console.log(mappedRatePlan);
                return (index.h("div", { key: rate_plan.id, class: " mapped_row rate_plan" }, index.h("p", { class: "ir-ps-1 submap-text mapped_item" }, rate_plan.name), !mappedRatePlan.hide && (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: "currentColor", d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" }))), this.renderMappingStatus(mappedRatePlan, rate_plan.id, false, room_type.id)));
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
        return (index.h(index.Host, { key: 'bc4029bb141956855cf45a37105d7956589f7e22' }, index.h("button", { key: '48e5c4266d780d16f695c46e7e0b4788a8a5ec4a', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, index.h("span", { key: 'ff5564c8b3d16855d024f3fe92e9d0bd6c1b8f9a', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), index.h("input", { key: '9df05037110abc7aea0efd627a5e849c0dc10620', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
    }
};
IrSwitch.style = irSwitchCss();

exports.ir_channel_editor = IrChannelEditor;
exports.ir_channel_general = IrChannelGeneral;
exports.ir_channel_header = IrChannelHeader;
exports.ir_channel_mapping = IrChannelMapping;
exports.ir_switch = IrSwitch;
