'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-07a1d3e6.js');
const channel_service = require('./channel.service-638514bd.js');
const channel_store = require('./channel.store-9f92ff61.js');
const locales_store = require('./locales.store-671d2e33.js');
require('./Token-0b5ba7e4.js');
require('./calendar-data-cb82ecd2.js');

const irChannelEditorCss = ".sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-right:0;margin-right:0}";
const IrChannelEditorStyle0 = irChannelEditorCss;

const IrChannelEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.saveChannelFinished = index.createEvent(this, "saveChannelFinished", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        var _a, _b, _c;
        this.channelService = new channel_service.ChannelService();
        this.channel_status = null;
        this.ticket = undefined;
        this.selectedTab = '';
        this.isLoading = false;
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
        if (this.ticket) {
            this.channelService.setToken(this.ticket);
        }
        if (this.channel_status === 'edit') {
            this.enableAllHeaders();
        }
        this.selectedTab = this.headerTitles[0].id;
        channel_store.onChannelChange('isConnectedToChannel', newValue => {
            if (!!newValue) {
                this.enableAllHeaders();
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
                return index.h("ir-channel-general", { channel_status: this.channel_status });
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
            await this.channelService.saveConnectedChannel(false);
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
        return (index.h(index.Host, { key: '5457820bc2d675f619e6e27066cafc390c1119e9', class: " d-flex flex-column h-100" }, index.h("nav", { key: '6594874a8e9481ae6a65de689f6a4ae173c8b412', class: "px-1 position-sticky sticky-top py-1 top-0 bg-white" }, index.h("div", { key: 'fa96c7fc32cfc2bd86c6125e7fb8bccebdff2b93', class: "d-flex align-items-center  justify-content-between" }, index.h("h3", { key: '10220a1ac3318e18249ddb3cc7342a4b37705fdf', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_CreateChannel : (_b = locales_store.locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_EditChannel), index.h("ir-icon", { key: '5650afcd4d969eb5042f9af5e614862395ea7161', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: '3cd62b72e398c1657ee08c3528f352a299186e51', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: 'c030ba70dbd3330fe07fb773166965856af03ebd', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("ir-channel-header", { key: '3d64cd1ab0641d85c144ed78e7ca1a32863b3cd6', class: "mt-1 px-0", headerTitles: this.headerTitles })), index.h("section", { key: '83fbfdb0d9c6cc6f1d7ab2639be5123fd56f7116', class: "py-1 flex-fill tab-container px-1" }, this.renderTabScreen()), index.h("ir-button", { key: '30bbbfbaf3c6ec640e942716e62fff1a91355df4', isLoading: this.isLoading, onClickHanlder: () => this.saveConnectedChannel(), class: "px-1 py-1 top-border", btn_styles: "w-100  justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save })));
    }
};
IrChannelEditor.style = IrChannelEditorStyle0;

const irSwitchCss = ".sc-ir-switch-h{display:block;position:relative;box-sizing:border-box;--ir-root-width:36px;--ir-root-height:20px}.hidden-input.sc-ir-switch{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height)}.SwitchRoot.sc-ir-switch{all:unset;padding:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height);background-color:var(--red);position:relative;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;--webkit-tap-highlight-color:rgba(0, 0, 0, 0);border-radius:9999px;box-sizing:border-box}.SwitchRoot.sc-ir-switch:disabled{opacity:80%}.SwitchRoot.sc-ir-switch:focus-visible{outline:1px solid rgba(55, 188, 155, 0.2);outline-offset:1px}.SwitchRoot[data-state='checked'].sc-ir-switch{background-color:rgb(55, 188, 155)}.SwitchThumb.sc-ir-switch{padding:0;margin:0;display:block;width:calc(var(--ir-root-height) - 3px);height:calc(var(--ir-root-height) - 3px);border-radius:9999px;background:white;box-shadow:rgba(0, 0, 0, 0.2) 0px;transition:transform 100ms ease 0s;transform:translateX(2px);will-change:transform}.SwitchThumb[data-state='checked'].sc-ir-switch{transform:translateX(calc(var(--ir-root-height) - 3px))}";
const IrSwitchStyle0 = irSwitchCss;

const IrSwitch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkChange = index.createEvent(this, "checkChange", 7);
        this._id = '';
        this.checked = false;
        this.switchId = undefined;
        this.disabled = false;
    }
    componentWillLoad() {
        this._id = this.generateRandomId(10);
    }
    componentDidLoad() {
        if (!this.switchRoot) {
            return;
        }
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }
    generateRandomId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    handleCheckChange() {
        this.checked = !this.checked;
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
        this.checkChange.emit(this.checked);
    }
    render() {
        return (index.h(index.Host, { key: 'd065e7674a6389a9d8bfac112b080e3ff14d5a48' }, index.h("button", { key: '3f30907df9bcb033b68c1ba6011d30007f5b9d37', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, index.h("span", { key: '784c01eeb937113a661ccbec0cc47e6ad90b360d', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), index.h("input", { key: 'c8a573c353979a884e94f42f3adf46651dd4b29c', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
    }
};
IrSwitch.style = IrSwitchStyle0;

exports.ir_channel_editor = IrChannelEditor;
exports.ir_switch = IrSwitch;

//# sourceMappingURL=ir-channel-editor_2.cjs.entry.js.map