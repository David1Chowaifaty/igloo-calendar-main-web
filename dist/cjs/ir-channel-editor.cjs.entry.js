'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const channel_service = require('./channel.service-be8a5aa1.js');
const channel_store = require('./channel.store-8864149a.js');
const locales_store = require('./locales.store-4eb57996.js');
require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');
require('./axios-6e678d52.js');

const irChannelEditorCss = ".sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-right:0;margin-right:0}";
const IrChannelEditorStyle0 = irChannelEditorCss;

const IrChannelEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.saveChannelFinished = index.createEvent(this, "saveChannelFinished", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.toast = index.createEvent(this, "toast", 7);
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
        channel_store.onChannelChange('isConnectedToChannel', newValue => {
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
        return (index.h(index.Host, { key: '8888dd502d191481f003c9672b78ed1b1fa73c98', class: " d-flex flex-column h-100" }, index.h("nav", { key: '525cdef839712e315c2fe6e5168d23c4df9ede6b', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, index.h("div", { key: '358bc9f5a75cf88296a93950125f2d1b6ae574b4', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, index.h("h3", { key: '5855c34ac05d9d0b7e06b1ee747212b4fbeebb63', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? locales_store.locales.entries?.Lcz_CreateChannel : locales_store.locales.entries?.Lcz_EditChannel), index.h("ir-icon", { key: '2991f2370a0dbba1229f4ea6f5d0ec899de496fb', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: 'd0c3db2e3592e15dfa72e63f701d837569d6964a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '404bb592c2fd14edc8d399ef08a7337f1f0635fc', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("ir-channel-header", { key: 'e895bd5204a6239a6b9fa942234a560d9eb7c192', class: "mt-1 px-0", headerTitles: this.headerTitles })), index.h("section", { key: 'a6000bdd392bd4f00f92d5d51af8af4a9b9f7ad4', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), index.h("ir-button", { key: '806b90422c64f2c8ecd4436281a12aa05034cc3a', isLoading: this.isLoading, onClickHandler: () => {
                if (!channel_store.channels_data.isConnectedToChannel) {
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
IrChannelEditor.style = IrChannelEditorStyle0;

exports.ir_channel_editor = IrChannelEditor;

//# sourceMappingURL=ir-channel-editor.cjs.entry.js.map