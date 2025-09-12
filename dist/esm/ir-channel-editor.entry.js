import { r as registerInstance, c as createEvent, h, H as Host } from './index-60982d00.js';
import { C as ChannelService } from './channel.service-f88db83d.js';
import { o as onChannelChange, c as channels_data } from './channel.store-7a69a511.js';
import { l as locales } from './locales.store-629477c2.js';
import './calendar-data-f4e207f9.js';
import './index-c4cf83be.js';
import './axios-aa1335b8.js';

const irChannelEditorCss = ".sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-right:0;margin-right:0}";
const IrChannelEditorStyle0 = irChannelEditorCss;

const IrChannelEditor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.saveChannelFinished = createEvent(this, "saveChannelFinished", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.toast = createEvent(this, "toast", 7);
        var _a, _b, _c;
        this.channel_status = null;
        this.selectedTab = '';
        this.isLoading = false;
        this.status = false;
        this.headerTitles = [
            {
                id: 'general_settings',
                name: (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_GeneralSettings,
                disabled: false,
            },
            { id: 'mapping', name: (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Mapping, disabled: true },
            { id: 'channel_booking', name: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_ChannelBooking, disabled: true },
        ];
        this.selectedRoomType = [];
        this.channelService = new ChannelService();
    }
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
        this.headerTitles = this.headerTitles.map((title, index) => (index < this.headerTitles.length - 1 ? Object.assign(Object.assign({}, title), { disabled: false }) : title));
    }
    disableNonFirstTabs() {
        this.headerTitles = this.headerTitles.map((title, index) => (index > 0 ? Object.assign(Object.assign({}, title), { disabled: true }) : title));
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
        var _a, _b;
        return (h(Host, { key: '864450ae35e96ac9511bdbd98e97ba10c0e1a8c7', class: " d-flex flex-column h-100" }, h("nav", { key: '137375d07c3442403295d5d04b829d1fd4cdc3d0', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, h("div", { key: '6a6148219197a9d8688252e2e2faf967c67faece', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, h("h3", { key: '7d99dea12f5a87375f30357e58b99d7514243788', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_CreateChannel : (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_EditChannel), h("ir-icon", { key: '918e2b9baee36aa2611da0de4b18692114b175f9', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: 'fed1696f6fd2ab7669f5f861e9a877af6e0a9c2f', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'e3cc11540b4aadba4d0d42b2fe10905a68e2762d', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("ir-channel-header", { key: '4d8210ce22b5e72464b81fde66d0c576f932a889', class: "mt-1 px-0", headerTitles: this.headerTitles })), h("section", { key: '0627ef59358f3091cd6d950cbd74ae9a1ed1ef2c', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), h("ir-button", { key: '0b24308f08ce813aef91c3e245f4217a8eff9b95', isLoading: this.isLoading, onClickHandler: () => {
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