'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const channel_service = require('./channel.service-5d698031.js');
const channel_store = require('./channel.store-686b4bc3.js');
const locales_store = require('./locales.store-da880a3f.js');
require('./calendar-data-3147aa9f.js');
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
        return (index.h(index.Host, { key: '94328b2aa53f980aa82b4391faa2ee9b73e04240', class: " d-flex flex-column h-100" }, index.h("nav", { key: '47342e252d378c3eb6d11ca3a7b94006b39b4635', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, index.h("div", { key: 'c6837d659a3a6fe01b50c8ad3bac1871b7a7ef00', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, index.h("h3", { key: '2b16bb398c529329af3fbde97562fc0b75ccd8f9', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? locales_store.locales.entries?.Lcz_CreateChannel : locales_store.locales.entries?.Lcz_EditChannel), index.h("ir-icon", { key: '65c08426f6cf6378f5179bcb7655a6bedc57daee', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: 'a5b48f9b9ac7b5c66c45f49014774b918515148b', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '45f63c7128ce4deade43b60b4c170e110e0d4d7b', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("ir-channel-header", { key: 'fd4368550b583af2e5d0509f315f0a900c5d1abe', class: "mt-1 px-0", headerTitles: this.headerTitles })), index.h("section", { key: '7c7e441c9cf669406d969c369f2478169bf21cd3', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), index.h("ir-button", { key: 'be0dfff6c6c25821794f84a679b095d0ca4839cb', isLoading: this.isLoading, onClickHandler: () => {
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