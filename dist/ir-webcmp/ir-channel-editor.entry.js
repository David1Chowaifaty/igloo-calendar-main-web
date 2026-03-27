import { r as registerInstance, a as createEvent, h, e as Host } from './index-7b3961ed.js';
import { C as ChannelService } from './channel.service-24df7464.js';
import { o as onChannelChange, c as channels_data } from './channel.store-478fe218.js';
import { l as locales } from './locales.store-daef23cc.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './index-5ba472df.js';

const irChannelEditorCss = ".sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-right:0;margin-right:0}";

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
        return (h(Host, { key: '1b7dd19af31da7e5ae2fd868f77679f5337d777b', class: " d-flex flex-column h-100" }, h("nav", { key: 'f9aa15ef58a19f3157f61a2d23f302f116e58d68', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, h("div", { key: '1f419a712eed0c0fa248d21549df8634eaec32a5', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, h("h3", { key: 'dc4a477af9425a775aa9091d998122ee43f1e932', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? locales.entries?.Lcz_CreateChannel : locales.entries?.Lcz_EditChannel), h("ir-icon", { key: 'f49c34ad6ce3bbb5727528305a25a62de7e759a9', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '4996fcb0c935cf18da41e56fbbe067c5a7406297', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'b8f9c39a59b4e451a92ebb26d04376f5e9e07b98', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("ir-channel-header", { key: 'c8f87fedb6b8b81910ae623e0b473f44a28ed61d', class: "mt-1 px-0", headerTitles: this.headerTitles })), h("section", { key: '386829f908a90d883f7418c8f89750101293d39a', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), h("ir-button", { key: '88dc6c0bec10cf298f499d28f0e08c5233d45d4b', isLoading: this.isLoading, onClickHandler: () => {
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
IrChannelEditor.style = irChannelEditorCss;

export { IrChannelEditor as ir_channel_editor };

//# sourceMappingURL=ir-channel-editor.entry.js.map