import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { C as ChannelService } from './channel.service-99701fa8.js';
import { o as onChannelChange, c as channels_data } from './channel.store-79fb5c60.js';
import { l as locales } from './locales.store-cb784e95.js';
import './calendar-data-2ae53dc9.js';
import './index-f100e9d2.js';
import './axios-aa1335b8.js';

const irChannelEditorCss = ".sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-right:0;margin-right:0}";
const IrChannelEditorStyle0 = irChannelEditorCss;

const IrChannelEditor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.saveChannelFinished = createEvent(this, "saveChannelFinished", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    channel_status = null;
    ticket;
    selectedTab = '';
    isLoading = false;
    status = false;
    headerTitles = [
        {
            id: 'general_settings',
            name: locales.entries?.Lcz_GeneralSettings,
            disabled: false,
        },
        { id: 'mapping', name: locales.entries?.Lcz_Mapping, disabled: true },
        { id: 'channel_booking', name: locales.entries?.Lcz_ChannelBooking, disabled: true },
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
                return h("div", null, "channel booking");
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
        return (h(Host, { key: '4f8ee18719e9e6539048404276f90a5539ff7dcb', class: " d-flex flex-column h-100" }, h("nav", { key: 'c3673ec0743014abd63f2df2d270824b5c720f50', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, h("div", { key: '7fd4be9f3b77973ed7816a2c9c867f5315852138', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, h("h3", { key: '9bb225ec6cc126caa4d34c75cf2535990420bee0', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? locales.entries?.Lcz_CreateChannel : locales.entries?.Lcz_EditChannel), h("ir-icon", { key: '0b59d9e57a8ea3dd426ed1b3239a1976cfe38b19', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '817f840536a7f4285a42d3fab15e35cc4e25bfbc', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'd464790ee3677aaf31e17e86c48a72d519b079c8', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("ir-channel-header", { key: '4f4d6c43c13d9e9766c3c537d5fc96bac4bf7067', class: "mt-1 px-0", headerTitles: this.headerTitles })), h("section", { key: 'db1e8b05b80e5f3b603fb1ff88ac1e0f25293e2f', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), h("ir-button", { key: '3ca1cb33f94e96678e21a267bac6fd8bdb2a00a6', isLoading: this.isLoading, onClickHandler: () => {
                if (!channels_data.isConnectedToChannel) {
                    this.toast.emit({
                        type: 'error',
                        description: locales.entries.Lcz_InvalidCredentials,
                        title: locales.entries.Lcz_InvalidCredentials,
                    });
                    return;
                }
                this.saveConnectedChannel();
            }, class: "px-1 py-1 top-border", btn_styles: "w-100  justify-content-center align-items-center", text: locales.entries.Lcz_Save })));
    }
};
IrChannelEditor.style = IrChannelEditorStyle0;

export { IrChannelEditor as ir_channel_editor };

//# sourceMappingURL=ir-channel-editor.entry.js.map