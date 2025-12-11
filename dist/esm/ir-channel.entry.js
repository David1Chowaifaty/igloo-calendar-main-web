import { h, r as registerInstance, g as getElement, F as Fragment, H as Host } from './index-b3dce66a.js';
import { R as RoomService } from './room.service-36ed474f.js';
import { s as setChannelIdAndActiveState, u as updateChannelSettings, a as selectChannel, t as testConnection, r as resetStore, c as channels_data } from './channel.store-7e71687e.js';
import { l as locales } from './locales.store-9cde6711.js';
import { C as ChannelService } from './channel.service-5c0ebfd1.js';
import { T as Token } from './Token-030c78a9.js';
import './calendar-data-756b1a52.js';
import './axios-aa1335b8.js';

const actions = (entries) => [
    {
        id: 'edit',
        name: entries.Lcz_Edit,
        icon: () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "14", viewBox: "0 0 512 512" },
            h("path", { d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))),
        action: (params) => {
            const selectedProperty = params.map.find(m => m.type === 'property');
            setChannelIdAndActiveState(params.id, params.is_active);
            updateChannelSettings('hotel_id', selectedProperty.channel_id);
            updateChannelSettings('hotel_title', params.title);
            selectChannel(params.channel.id.toString());
            testConnection();
        },
    },
    // {
    //   id: 'view_logs',
    //   name: entries?.Lcz_ViewLogs,
    //   icon: () => (
    //     <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
    //       <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
    //     </svg>
    //   ),
    //   action: () => {
    //     return {
    //       cause: 'view_logs',
    //       action: () => {
    //         alert('view logs clicked');
    //       },
    //       title: 'ok',
    //       message: 'ok',
    //       main_color: 'primary',
    //     };
    //   },
    // },
    // {
    //   id: 'full_sync',
    //   name: entries?.Lcz_FullSync,
    //   icon: () => (
    //     <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
    //       <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z" />
    //     </svg>
    //   ),
    //   action: () => {
    //     return {
    //       cause: 'full_sync',
    //       action: () => {
    //         alert('full sync');
    //       },
    //       title: '',
    //       message: entries?.Lcz_ScheduleFullSync,
    //       main_color: 'primary',
    //     };
    //   },
    // },
    // {
    //   id: 'pull_future_reservation',
    //   name: entries?.Lcz_PullFutureReservations,
    //   icon: () => null,
    //   action: () => {
    //     return {
    //       cause: 'pull_future_reservation',
    //       action: () => {
    //         alert('pull_future_reservation');
    //       },
    //       title: '',
    //       message: entries?.Lcz_ScheduleFullSync,
    //       main_color: 'primary',
    //     };
    //   },
    // },
    {
        id: 'remove',
        name: entries?.Lcz_Delete,
        icon: () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" },
            h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }))),
        action: (params) => {
            return {
                cause: 'remove',
                action: async () => {
                    const channel_service = new ChannelService();
                    await channel_service.saveConnectedChannel(params.id, true);
                },
                title: '',
                message: entries?.Lcz_ThisActionWillDelete,
                main_color: 'danger',
            };
        },
    },
];

const irChannelCss = ".sc-ir-channel-h{display:block;--ir-sidebar-padding-block:0;--ir-sidebar-padding-inline:0}.dropdown-toggle.sc-ir-channel{color:var(--blue)}.dropdown-toggle.sc-ir-channel::after{content:none;display:none}.dropdown-toggle.sc-ir-channel .caret-icon.sc-ir-channel{transition:transform 0.15s ease-in-out, color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,\n    -webkit-box-shadow 0.15s ease-in-out}.btn.sc-ir-channel:hover .caret-icon.sc-ir-channel path.sc-ir-channel{fill:#6b6f82}.show.sc-ir-channel .caret-icon.sc-ir-channel{transform:rotate(-180deg)}.dropdown-divider.sc-ir-channel{border-color:#e4e5ec}.dropdown-item.sc-ir-channel{padding:10px;display:flex;align-items:center;gap:10px;color:#6b6f82}.dropdown-item.sc-ir-channel svg.sc-ir-channel path.sc-ir-channel{fill:#6b6f82}.danger.sc-ir-channel{color:var(--red)}.danger.sc-ir-channel svg.sc-ir-channel path.sc-ir-channel{fill:var(--red)}.table.sc-ir-channel thead.sc-ir-channel tr.sc-ir-channel{height:50px !important}.table-container.sc-ir-channel{border-radius:30px}.table.sc-ir-channel thead.sc-ir-channel{background:#fafafa;border-top-width:0}.actions-theader.sc-ir-channel{width:35% !important;text-align:end}.dots.sc-ir-channel{display:flex;align-items:center;justify-content:center;margin:0 3px;padding:0}.dot.sc-ir-channel{width:8px;height:8px;margin:0px 4px;background-color:#6b6f82;border-radius:50%;animation:dotFlashing 1s infinite linear alternate}.dot.sc-ir-channel:nth-child(2){animation-delay:0.2s}.h-screen.sc-ir-channel{height:100vh !important}.dot.sc-ir-channel:nth-child(3){animation-delay:0.4s}@keyframes dotFlashing{0%{opacity:0}50%,100%{opacity:1}}@media (min-width: 1024px){.sc-ir-channel-h{--sidebar-width:820px}}";
const IrChannelStyle0 = irChannelCss;

const IrChannel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    ticket = '';
    propertyid;
    language;
    baseurl;
    p;
    channel_status = null;
    modal_cause = null;
    isLoading = false;
    roomService = new RoomService();
    channelService = new ChannelService();
    token = new Token();
    irModalRef;
    componentWillLoad() {
        this.isLoading = true;
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleConfirmClicked(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!this.modal_cause) {
            return;
        }
        await this.modal_cause.action();
        if (this.modal_cause.cause === 'remove') {
            resetStore();
            await this.refreshChannels();
        }
        this.modal_cause = null;
    }
    openModal() {
        this.irModalRef.openModal();
    }
    async refreshChannels() {
        await Promise.all([this.channelService.getExposedChannels(), this.channelService.getExposedConnectedChannels(this.propertyid)]);
    }
    async initializeApp() {
        if (!this.propertyid && !this.p) {
            throw new Error('Property ID or username is required');
        }
        try {
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            const requests = [
                this.channelService.getExposedChannels(),
                this.channelService.getExposedConnectedChannels(propertyId),
                this.roomService.fetchLanguage(this.language, ['_CHANNEL_FRONT']),
            ];
            if (this.propertyid) {
                requests.unshift(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                }));
            }
            const results = await Promise.all(requests);
            const languageTexts = results[results.length - 1];
            channels_data.property_id = this.propertyid;
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    handleCancelModal(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modal_cause = null;
    }
    handleSidebarClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (channels_data.selectedChannel) {
            this.modal_cause = {
                action: () => {
                    return new Promise(reselove => {
                        this.resetSideBar();
                        reselove('');
                    });
                },
                cause: 'channel',
                main_color: 'primary',
                message: locales.entries?.Lcz_UnSavedChangesWillBeLost,
                title: '',
            };
            this.openModal();
        }
        else {
            this.resetSideBar();
        }
    }
    resetSideBar() {
        this.channel_status = null;
        resetStore();
    }
    async handleSaveChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.refreshChannels();
        this.resetSideBar();
    }
    async handleCheckChange(check, params) {
        const selectedProperty = params.map.find(m => m.type === 'property');
        setChannelIdAndActiveState(params.id, check);
        updateChannelSettings('hotel_id', selectedProperty.channel_id);
        updateChannelSettings('hotel_title', params.title);
        selectChannel(params.channel.id.toString());
        testConnection();
        await this.channelService.saveConnectedChannel(null, false);
        resetStore();
        this.refreshChannels();
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: "h-screen bg-white d-flex flex-column align-items-center justify-content-center" }, h("ir-loading-screen", null)));
        }
        return (h(Host, { class: "h-100 " }, h("ir-toast", null), h("section", { class: "p-2 px-lg-5 py-0 h-100 d-flex flex-column" }, h("div", { class: "d-flex w-100 justify-content-between mb-2 align-items-center" }, h("h3", { class: "font-weight-bold m-0 p-0" }, locales.entries?.Lcz_iSWITCH), h("ir-button", { iconPosition: "left", icon_name: "circle_plus", text: locales.entries?.Lcz_CreateChannel, size: "sm", onClickHandler: () => (this.channel_status = 'create') })), h("div", { class: "card p-1 flex-fill m-0" }, h("table", { class: "table table-striped table-bordered no-footer dataTable" }, h("thead", null, h("tr", null, h("th", { scope: "col", class: "text-left" }, locales.entries?.Lcz_Channel), h("th", { scope: "col" }, locales.entries?.Lcz_Status), h("th", { scope: "col", class: "actions-theader" }, locales.entries?.Lcz_Actions))), h("tbody", { class: "" }, channels_data.connected_channels?.map(channel => (h("tr", { key: channel.channel.id }, h("td", { class: "text-left" }, channel.channel.name, " ", channel.title ? `(${channel.title})` : ''), h("td", null, h("ir-switch", { checked: channel.is_active, onCheckChange: e => this.handleCheckChange(e.detail, channel) })), h("th", null, h("div", { class: "d-flex justify-content-end" }, h("div", { class: "btn-group" }, h("button", { type: "button", class: "btn  dropdown-toggle px-0", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, h("span", { class: "mr-1" }, " ", locales.entries?.Lcz_Actions), h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, h("path", { fill: "var(--blue)", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("div", { class: "dropdown-menu dropdown-menu-right" }, actions(locales.entries).map((a, index) => (h(Fragment, null, h("button", { onClick: () => {
                if (a.id === 'pull_future_reservation' || a.id === 'view_logs') {
                    return;
                }
                a.action(channel);
                if (a.id === 'edit') {
                    setTimeout(() => {
                        this.channel_status = 'edit';
                    }, 300);
                }
                else {
                    this.modal_cause = a.action(channel);
                    this.openModal();
                }
            }, key: a.id + '_item', class: `dropdown-item my-0 ${a.id === 'remove' ? 'danger' : ''}`, type: "button" }, a.icon(), a.name), index < actions(locales.entries).length - 1 && h("div", { key: a.id + '_divider', class: "dropdown-divider my-0" }))))))))))))), channels_data.connected_channels.length === 0 && h("p", { class: "text-center" }, locales.entries?.Lcz_NoChannelsAreConnected))), h("ir-sidebar", { sidebarStyles: {
                // width: '60rem',
                padding: '0',
            }, showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose.bind(this), open: this.channel_status !== null }, this.channel_status && (h("ir-channel-editor", { slot: "sidebar-body", ticket: this.ticket, channel_status: this.channel_status, onCloseSideBar: this.handleSidebarClose.bind(this) }))), h("ir-modal", { modalTitle: this.modal_cause?.title, modalBody: this.modal_cause?.message, ref: el => (this.irModalRef = el), rightBtnText: locales.entries?.Lcz_Confirm, leftBtnText: locales.entries?.Lcz_Cancel, onCancelModal: this.handleCancelModal.bind(this), rightBtnColor: this.modal_cause?.main_color ?? 'primary', onConfirmModal: this.handleConfirmClicked.bind(this) })));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrChannel.style = IrChannelStyle0;

export { IrChannel as ir_channel };

//# sourceMappingURL=ir-channel.entry.js.map