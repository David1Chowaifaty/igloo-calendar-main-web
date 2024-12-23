'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const channel_service = require('./channel.service-4043b8be.js');
const channel_store = require('./channel.store-9da77951.js');
const locales_store = require('./locales.store-4301bbe8.js');
require('./calendar-data-b301c729.js');
require('./index-5e99a1fe.js');
require('./axios-b86c5465.js');

const irChannelEditorCss = ".sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-right:0;margin-right:0}";
const IrChannelEditorStyle0 = irChannelEditorCss;

const IrChannelEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.saveChannelFinished = index.createEvent(this, "saveChannelFinished", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.toast = index.createEvent(this, "toast", 7);
        var _a, _b, _c;
        this.channelService = new channel_service.ChannelService();
        this.channel_status = null;
        this.ticket = undefined;
        this.selectedTab = '';
        this.isLoading = false;
        this.status = false;
        this.headerTitles = [
            {
                id: 'general_settings',
                name: (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_GeneralSettings,
                disabled: false,
            },
            { id: 'mapping', name: (_b = locales_store.locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Mapping, disabled: true },
            { id: 'channel_booking', name: (_c = locales_store.locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_ChannelBooking, disabled: true },
        ];
        this.selectedRoomType = [];
    }
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
        return (index.h(index.Host, { key: 'fcc723cac3b4813af36a8dd3b7f12e24e2e6ace5', class: " d-flex flex-column h-100" }, index.h("nav", { key: 'd85cd41a35af29e932dfe4802c8cec3cb77658e0', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, index.h("div", { key: 'd7d52031bbd8896accf5e8dcae110621621d9047', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, index.h("h3", { key: '1c489407b72323ebaa85a0ed3636690aedd28701', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_CreateChannel : (_b = locales_store.locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_EditChannel), index.h("ir-icon", { key: '964e8a8f7fb8bb5270554effeb01e019a1e86cda', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: '47b866fe6d74a28f9da6845cd077356bfa51f250', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '5f164318a492de573223fb7db5c5efa6f4c9c179', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("ir-channel-header", { key: '2c007152f62ff8ae6732be8e120ccbda90f2fb2e', class: "mt-1 px-0", headerTitles: this.headerTitles })), index.h("section", { key: 'ab933e481471c9bf4ac18223fc5c0572c31433aa', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), index.h("ir-button", { key: '2b4f0854e52a7077b91496a65d91b3cef69044be', isLoading: this.isLoading, onClickHanlder: () => {
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