import { r as registerInstance, c as createEvent, h, H as Host } from './index-b3dce66a.js';
import { C as ChannelService } from './channel.service-dfc9a1f9.js';
import { o as onChannelChange, c as channels_data } from './channel.store-4cfbc52f.js';
import { l as locales } from './locales.store-f4150353.js';
import './calendar-data-8a36a1b2.js';
import './index-a124d225.js';
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
        return (h(Host, { key: '740a103fd120896bd257180a69cc11ad1c2dfc40', class: " d-flex flex-column h-100" }, h("nav", { key: '2cbe741b96d3456768a6adcbe0cdadcb7653b9dd', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, h("div", { key: '8e943347142f0023a500890f4a5dc92a2f701440', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, h("h3", { key: 'be33491381e7cb5995e9ca44eb10e4ae496c077a', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? locales.entries?.Lcz_CreateChannel : locales.entries?.Lcz_EditChannel), h("ir-icon", { key: 'd0a3c38e5421e025ee37cf0841c1f07ab9eebb20', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '02e09baa4417337c4a1b39dec6263e5499b3e1d6', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '24ab90837e81fe7534fe766ad2a5d5a529b2201c', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("ir-channel-header", { key: '2339ffa6d7b269b9b8d50d80e4da278e253cd8d5', class: "mt-1 px-0", headerTitles: this.headerTitles })), h("section", { key: '30828bb01e83cc78a0d824d9b39506c99f03677c', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), h("ir-button", { key: '2a5f24f8e39d8819dc3f159cd568b1d9a1bb8a34', isLoading: this.isLoading, onClickHandler: () => {
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