import { r as registerInstance, c as createEvent, h, H as Host, a as getElement, F as Fragment } from './index-DKZeCK8T.js';
import { C as ChannelService, o as onChannelChange, c as channels_data, t as testConnection, u as updateChannelSettings, s as selectChannel, a as addMapping, b as setMappedChannel } from './channel.service-_h8QXTCx.js';
import { t } from './t-Bvz1wS_D.js';
import { b as inlineOffset, a as inlineSign } from './direction-CcpbVppy.js';
import { c as calendar_data } from './calendar-data-D4DbXAhg.js';
import './locale-scope-Jre4lb6k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irChannelEditorCss = () => `.sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-inline-end:0;margin-inline-end:0}.ir-text-start.sc-ir-channel-editor{text-align:start}`;

const IrChannelEditor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.saveChannelFinished = createEvent(this, "saveChannelFinished");
        this.closeSideBar = createEvent(this, "closeSideBar");
        this.toast = createEvent(this, "toast");
    }
    channel_status = null;
    ticket;
    selectedTab = '';
    isLoading = false;
    status = false;
    headerTitles = [
        {
            id: 'general_settings',
            name: t('Lcz_GeneralSettings'),
            disabled: false,
        },
        { id: 'mapping', name: t('Lcz_Mapping'), disabled: true },
        { id: 'channel_booking', name: t('Lcz_ChannelBooking'), disabled: true },
    ];
    selectedRoomType = [];
    saveChannelFinished;
    closeSideBar;
    toast;
    channelService = new ChannelService();
    componentWillLoad() {
        if (this.channel_status === 'edit') {
            this.enableAllHeaders();
        }
        this.selectedTab = this.headerTitles[0].id;
        onChannelChange('isConnectedToChannel', newValue => {
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
                return h("ir-channel-general", { channel_status: this.channel_status, onConnectionStatus: e => (this.status = e.detail) });
            case 'mapping':
                return h("ir-channel-mapping", null);
            case 'channel_booking':
                return h("div", null, t('Lcz_ChannelBookingPlaceholder', { fallback: 'channel booking' }));
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
        return (h(Host, { key: 'c0d3b63376967dbc4e919bdeb356ccea0038399b', class: " d-flex flex-column h-100" }, h("nav", { key: 'acde56253e9e740a79bb3f31d3e920fdddd66c21', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, h("div", { key: 'b6093cf5078398f6d06f73c2a1e079a0b4ea3454', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, h("h3", { key: 'c65468410675f5cdfbf88ae264e5314c49779745', class: "ir-text-start font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? t('Lcz_CreateChannel') : t('Lcz_EditChannel')), h("ir-icon", { key: 'be02ba58076258c1692efe9d821572ff53530d57', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '369f975bc2b7ada68d0fac8ea8eb4ecfd2ddcabf', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '07b9d83dade850dd9c4badb02dac71e5107af880', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("ir-channel-header", { key: 'fde17911162ca91c432082c3f38f856c3b8d7d20', class: "mt-1 px-0", headerTitles: this.headerTitles })), h("section", { key: '7537cc3cf153a02c647972eaef487cff6e461cae', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), h("ir-button", { key: 'b4dbd8d17ec01d136612deec4ddb1c671fdff53b', isLoading: this.isLoading, onClickHandler: () => {
                if (!channels_data.isConnectedToChannel) {
                    this.toast.emit({
                        type: 'error',
                        description: t('Lcz_InvalidCredentials'),
                        title: t('Lcz_InvalidCredentials'),
                    });
                    return;
                }
                this.saveConnectedChannel();
            }, class: "px-1 py-1 top-border", btn_styles: "w-100  justify-content-center align-items-center", text: t('Lcz_Save', { fallback: 'Save' }) })));
    }
};
IrChannelEditor.style = irChannelEditorCss();

const irChannelGeneralCss = () => `.sc-ir-channel-general-h{display:block}.label-style.sc-ir-channel-general{width:6.25rem;text-align:end;padding-inline-end:0.625rem !important}.connection-status.sc-ir-channel-general{display:flex;align-items:center;justify-content:space-between;margin-top:0.625rem !important}.connection-title.sc-ir-channel-general{border-bottom:1px solid #e4e5ec}.ml-18.sc-ir-channel-general{margin-inline-start:18% !important}.status-message.sc-ir-channel-general{display:flex;align-items:center;gap:0.3125rem;font-size:0.81rem;margin:0;padding:0}.ir-text-start.sc-ir-channel-general{text-align:start}`;

const IrChannelGeneral = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.connectionStatus = createEvent(this, "connectionStatus");
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
            : t('Lcz_IncorrectConnection');
        this.buttonClicked = false;
        this.connectionStatus.emit(this.status);
    }
    render() {
        return (h(Host, { key: 'f1d96056b21cf8a6554c0c07f88ee966b6222cfc', class: "px-1" }, h("section", { key: 'e07c7d0872db2428ef4008c96f46d5d6785b4c82', class: "ml-18" }, h("fieldset", { key: '3baa0eee25d3550d308a004c2436c0ea422c9413', class: "d-flex align-items-center" }, h("label", { key: '6ba47f3b4f5bd9434930a76700cf0db815dd5071', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, t('Lcz_Channel')), h("ir-combobox", { key: '54f107a692d83a871c5c9961c0b9dbc5d0fd5011', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: 'b956d984cca3ca2207f812f126ca0a19d7f4b455', class: "d-flex align-items-center mt-1" }, h("label", { key: 'a380338258b678a90f8e8c1f31a8510052741b57', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, t('Lcz_Title')), h("div", { key: '592fb82c43f640ec40452cd2e9357d1907d5efbc', class: "flex-fill" }, h("input", { key: 'b13dde01ded8897f04fe179d8fbe8784a0d734be', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: '5079d9cae5fc4c3798ef82cbf53c5e73c4c8a263', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: 'd3cb53afbeda403f3fb4e146b23ed20596681a2b', class: "ir-text-start font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, t('Lcz_ConnectionSettings')), h("div", { key: 'bd322071cc50b9552e8bf0f14cc9760d658a8162', class: "ml-18" }, h("fieldset", { key: '8f8e51588200432300c796978deb07797a498404', class: "d-flex align-items-center my-1" }, h("label", { key: 'bc90f8896f303499ddeaf75682c1a340c1003201', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, t('Lcz_HotelID')), h("div", { key: '454d0bc360c547df75bf53c45f7cb3237a8331f3', class: "flex-fill" }, h("input", { key: 'ad37f0398a2f3a586ac7005959ffbdddb67ca7b0', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '194176d9ccf39dffc5907a42a28c3d680ab8e24e', class: "connection-status" }, h("div", { key: 'a37d414591dd48481d99695ed0fe4561551d12c6', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '85e7d1e81bf89bd2916c7e6fbfa69cb77a7d0719' }, this.connection_status_message)), h("button", { key: '626b3dc94c2e49b0cabc07bd8e2782e151da3967', class: "btn btn-outline-secondary btn-sm", type: "submit" }, t('Lcz_TestConnection'))))))));
    }
};
IrChannelGeneral.style = irChannelGeneralCss();

const irChannelHeaderCss = () => `.sc-ir-channel-header-h{display:block;position:relative;padding:0;margin:0;border-bottom:1px solid #e4e5ec}ul.sc-ir-channel-header{display:flex;align-items:center;gap:2rem;padding:0}li.sc-ir-channel-header{list-style:none !important}.tab.sc-ir-channel-header{font-size:0.95rem;font-weight:400;cursor:pointer;position:relative;margin:0;padding:0;transition:color 0.3s ease;user-select:none}.tab[data-disabled].sc-ir-channel-header{cursor:auto}.tab.sc-ir-channel-header:hover{opacity:80%}.tab[data-state='selected'].sc-ir-channel-header,.tab[data-state='selected'].sc-ir-channel-header:hover{color:var(--blue);opacity:100%}.active-indicator.sc-ir-channel-header{padding:0;bottom:0px;position:absolute;height:3px;border-radius:4px;transition:transform 0.3s ease, width 0.3s ease;background:var(--blue)}`;

const IrChannelHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabChanged = createEvent(this, "tabChanged");
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
                const tabRect = selectedTab.getBoundingClientRect();
                // Measured on the inline axis: the indicator starts at the strip's inline start,
                // which is the right edge under RTL, so a raw physical offset walks it the wrong way.
                const position = inlineOffset(tabRect, this.el.getBoundingClientRect());
                this.activeIndicator.style.width = `${tabRect.width}px`;
                this.activeIndicator.style.transform = `translateX(${position * inlineSign()}px)`;
            }
        });
    }
    render() {
        return (h(Host, { key: '2f1b2c29f46189ff5cfccf321581cebdc32b53c5' }, h("ul", { key: 'f415f16212073fbd691fd0117e68d701d19239f9', class: "px-1" }, this.headerTitles.map((title, index) => (h("li", { class: `tab ${title.disabled ? 'text-light' : ''}`, key: title.id, onClick: () => {
                if (!title.disabled)
                    this.handleTabSelection(index);
            }, "data-disabled": title.disabled, "data-state": this.selectedIndex === index ? 'selected' : '' }, title.name)))), h("span", { key: 'ab1ea4e8ab0da2b95e0439fb15a48acc9ab2f55f', class: "active-indicator", ref: el => (this.activeIndicator = el) })));
    }
};
IrChannelHeader.style = irChannelHeaderCss();

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

const irChannelMappingCss = () => `.sc-ir-channel-mapping-h{display:block;box-sizing:border-box;font-size:12px !important;line-height:14px !important}*.sc-ir-channel-mapping{padding:0;margin:0;box-sizing:border-box}.submap-text.sc-ir-channel-mapping{padding-inline-start:10px}.text-blue.sc-ir-channel-mapping{color:var(--blue)}.text-red.sc-ir-channel-mapping{color:var(--red)}.not_mapped_btn.sc-ir-channel-mapping{color:#ff4961}.not_mapped_btn.sc-ir-channel-mapping:hover{color:#ff1635}li.sc-ir-channel-mapping{list-style:none !important}.refresh-btn.sc-ir-channel-mapping{all:unset;color:var(--blue);cursor:pointer}.refresh-btn.sc-ir-channel-mapping:hover{color:#104064}.selected-map.sc-ir-channel-mapping{flex:1}.selected-map-title.sc-ir-channel-mapping{flex:1}.mapped_row.sc-ir-channel-mapping{display:flex;align-items:center}.mapped_item.sc-ir-channel-mapping+svg.sc-ir-channel-mapping{display:block;flex:0 0 4.166666666666666%;max-width:4.166666666666666%;margin:0}.mapped_row.sc-ir-channel-mapping .mapped_item.sc-ir-channel-mapping{flex:0 0 45.83333333333333%;display:block;max-width:45.83333333333333%}.mapped_item.sc-ir-channel-mapping{margin:0;padding:0;line-height:22px}.mapped_name.sc-ir-channel-mapping{margin-inline-end:5px}.gap-3.sc-ir-channel-mapping{gap:5px}.channel_name.sc-ir-channel-mapping{color:rgba(0, 0, 0, 0.88);font-size:14px;font-weight:700}.mapped_row.rate_plan.sc-ir-channel-mapping,.mapped_row.room_type.sc-ir-channel-mapping{margin-bottom:0px}.ir-ms-1.sc-ir-channel-mapping{margin-inline-start:0.25rem}.ir-ps-1.sc-ir-channel-mapping{padding-inline-start:0.25rem}.ir-ps-2.sc-ir-channel-mapping{padding-inline-start:0.5rem}`;

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
            return (h(Fragment, null, h("div", { class: "ir-ps-2 flex-fill d-sm-none mapped_item text-blue d-flex align-items-center" }, h("span", { class: "m-0 p-0 d-flex align-items-center selected-map" }, h("span", { class: "selected-map-title" }, isRoomType ? mappedField.result.name : mappedField.result['short_name'], ' ', mappedField.result['is_non_refundable'] ? t('Lcz_NonRefundable', { fallback: 'Non-refundable' }) : ''), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), mappedField.occupancy), h("ir-icon", { class: "ir-ms-1 p-0", onIconClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType) }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'var(--blue)', d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))), h("div", { class: "ir-ps-2 flex-fill d-none mapped_item text-blue d-sm-flex align-items-center" }, h("span", { class: "mapped_name" }, isRoomType ? mappedField.result.name : mappedField.result['short_name'], ' ', mappedField.result['is_non_refundable'] ? t('Lcz_NonRefundable', { fallback: 'Non-refundable' }) : ''), h("div", { class: "d-flex align-items-center gap-3 flex-fill" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: 'var(--blue)', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), h("span", null, mappedField.occupancy)), h("ir-button", { variant: "icon", onClickHandler: () => this.mappingService.removedMapping(mappedField.result.id.toString(), isRoomType), icon_name: "trash", style: { '--icon-size': '1rem', '--icon-button-color': '#1e9ff2', '--icon-button-hover-color': '#104064 ' } }))));
        }
        return (h("div", { class: "ir-ps-2  flex-fill mapped_item" }, this.activeMapField === id ? (h("ir-combobox", { autoFocus: true, placeholder: t('Lcz_NotMapped'), data: this.availableRooms, onComboboxValueChange: e => {
                addMapping(e.detail.data, this.activeMapField, isRoomType);
                this.activeMapField = '';
            } })) : (h("span", { class: "cursor-pointer  not_mapped_btn", onClick: () => this.setActiveField(id, isRoomType, roomTypeId) }, t('Lcz_NotMapped')))));
    }
    render() {
        return (h(Host, { key: '989245f893b1cfdb30e75ca3f78548ef9589da0a', class: "py-md-2 px-md-2" }, h("div", { key: '38b552219229f4a98835d71906f9f83a882f40d9', class: "d-flex p-0 m-0 w-100 justify-content-end" }, h("button", { key: '1140848fb3ac97f7ea087668b91a8d46d2f99b85', onClick: () => {
                setMappedChannel();
            }, class: "btn refresh-btn" }, t('Lcz_Refresh'))), h("section", { key: '0a7dc2e4d314a7e312c37800db6bcac1c757632a', class: "w-100" }, h("div", { key: 'e24adf0b8815f3b0426e22656fb2dbb9ed745d48', class: "pt-1 mapped_row" }, h("p", { key: 'a7053bb4796f73332c6d1947ddff24d7aed9652f', class: "mapped_item channel_name" }, channels_data.selectedChannel?.name), h("svg", { key: '54e3ce3de6ded91655b587e32bc14f807ce706eb', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'a510d6665776c3c6dfc74e52f9a684f8386a8c5c', d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), h("p", { key: '04ed8329b1f72104f0bf202644c0dbefc6c332c6', class: "ir-ps-2 mapped_item channel_name" }, "igloorooms")), h("div", { key: '6cc4179d61bf3d239c58719aafbc3196cef5b409' }, channels_data.selectedChannel?.property?.room_types?.map(room_type => {
            const mappedRoomType = this.mappingService.checkMappingExists(room_type.id.toString(), true);
            return (h(Fragment, null, h("div", { key: room_type.id, class: "mapped_row room_type pt-1" }, h("p", { class: "mapped_item" }, room_type.name), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" })), this.renderMappingStatus(mappedRoomType, room_type.id, true)), room_type.rate_plans.map(rate_plan => {
                const mappedRatePlan = this.mappingService.checkMappingExists(rate_plan.id.toString(), false, room_type.id.toString());
                // console.log(mappedRatePlan);
                return (h("div", { key: rate_plan.id, class: " mapped_row rate_plan" }, h("p", { class: "ir-ps-1 submap-text mapped_item" }, rate_plan.name), !mappedRatePlan.hide && (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" }))), this.renderMappingStatus(mappedRatePlan, rate_plan.id, false, room_type.id)));
            })));
        })))));
    }
};
IrChannelMapping.style = irChannelMappingCss();

const irSwitchCss = () => `.sc-ir-switch-h{display:block;position:relative;box-sizing:border-box;--ir-root-width:36px;--ir-root-height:20px}.hidden-input.sc-ir-switch{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height)}.SwitchRoot.sc-ir-switch{all:unset;padding:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height);background-color:var(--ir-root-inactive-color, #ff4961);position:relative;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;--webkit-tap-highlight-color:rgba(0, 0, 0, 0);border-radius:9999px;box-sizing:border-box}.SwitchRoot.sc-ir-switch:disabled{opacity:80%}.SwitchRoot.sc-ir-switch:focus-visible{outline:1px solid var(--ir-root-active-color, rgb(55, 188, 155));outline-offset:1px}.SwitchRoot[data-state='checked'].sc-ir-switch{background-color:var(--ir-root-active-color, rgb(55, 188, 155))}.SwitchThumb.sc-ir-switch{padding:0;margin:0;display:block;width:calc(var(--ir-root-height) - 3px);height:calc(var(--ir-root-height) - 3px);border-radius:9999px;background:white;box-shadow:rgba(0, 0, 0, 0.2) 0px;transition:transform 100ms ease 0s;transform:translateX(2px);will-change:transform}.SwitchThumb[data-state='checked'].sc-ir-switch{transform:translateX(calc(var(--ir-root-height) - 3px))}`;

const IrSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkChange = createEvent(this, "checkChange");
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
        return (h(Host, { key: 'b93366d6ed807d2125e3386c0db20efe752de5a5' }, h("button", { key: '1dabe17bb6d3283caf52b96951e813797ab1b071', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, h("span", { key: 'b2e1c2b47142b95fd5750354663fc3b5a05904fe', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), h("input", { key: '736f6e9c60273abe1f5fcb34ae429b01122cb904', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
    }
};
IrSwitch.style = irSwitchCss();

export { IrChannelEditor as ir_channel_editor, IrChannelGeneral as ir_channel_general, IrChannelHeader as ir_channel_header, IrChannelMapping as ir_channel_mapping, IrSwitch as ir_switch };
