'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-009c7daa.js');
const v4 = require('./v4-9b297151.js');
const locales_store = require('./locales.store-605dafc4.js');
const Token = require('./Token-c9908564.js');
const axios = require('./axios-e9313b88.js');
const calendarData = require('./calendar-data-061200a9.js');
const irInterceptor_store = require('./ir-interceptor.store-3cb7f97c.js');
const room_service = require('./room.service-73df37e1.js');
const booking_service = require('./booking.service-92151b15.js');
require('./utils-ddcad063.js');
require('./moment-1780b03a.js');
require('./booking-fc13e042.js');

const irButtonCss = ".button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}";
const IrButtonStyle0 = irButtonCss;

const IrButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickHanlder = index.createEvent(this, "clickHanlder", 7);
        this.name = undefined;
        this.text = undefined;
        this.icon = 'ft-save';
        this.btn_color = 'primary';
        this.size = 'md';
        this.textSize = 'md';
        this.btn_block = true;
        this.btn_disabled = false;
        this.btn_type = 'button';
        this.isLoading = false;
        this.btn_styles = undefined;
        this.btn_id = v4.v4();
    }
    handleButtonAnimation(e) {
        if (!this.buttonEl || e.detail !== this.btn_id) {
            return;
        }
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    render() {
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (index.h("button", { key: 'fbb609c012602e7dc65cd565896d48f2126572e1', id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHanlder.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} d-flex align-items-center btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, disabled: this.btn_disabled }, index.h("span", { key: 'ff649c0bb9c4ade46ba48cd0cceb383e9a298190', class: "button-icon", "data-state": this.isLoading ? 'loading' : '' }, index.h("slot", { key: '0ec9cf3c8b445258bfcabc11ee46214240c1ca15', name: "icon" })), this.text && index.h("span", { class: "button-text m-0" }, this.text), this.isLoading && index.h("div", { class: "loader m-0 p-0" })));
    }
};
IrButton.style = IrButtonStyle0;

const irComboboxCss = ".sc-ir-combobox-h{display:block;position:relative;padding:0;margin:0}ul.sc-ir-combobox{position:absolute;margin:0;margin-top:2px;width:100%;max-height:80px;border-radius:0.21rem;z-index:10000;padding:1px;background:white;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);padding:5px 0;max-height:250px;overflow-y:auto}.dropdown-item.sc-ir-combobox{cursor:pointer}ul.sc-ir-combobox li.sc-ir-combobox,span.sc-ir-combobox,loader-container.sc-ir-combobox{padding:0px 16px;margin:0px;margin-top:2px;width:100%;border-radius:2px}ul.sc-ir-combobox li.sc-ir-combobox{cursor:pointer}ul.sc-ir-combobox li.sc-ir-combobox:hover{background:#f4f5fa}ul.sc-ir-combobox li[data-selected].sc-ir-combobox,ul.sc-ir-combobox li[data-selected].sc-ir-combobox:hover{color:#fff;text-decoration:none;background-color:#666ee8}";
const IrComboboxStyle0 = irComboboxCss;

const IrCombobox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.comboboxValueChange = index.createEvent(this, "comboboxValueChange", 7);
        this.inputCleared = index.createEvent(this, "inputCleared", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.data = [];
        this.duration = 300;
        this.placeholder = undefined;
        this.value = undefined;
        this.disabled = false;
        this.autoFocus = false;
        this.input_id = v4.v4();
        this.selectedIndex = -1;
        this.actualIndex = -1;
        this.isComboBoxVisible = false;
        this.isLoading = true;
        this.isItemSelected = undefined;
        this.inputValue = '';
        this.filteredData = [];
        this.componentShouldAutoFocus = false;
    }
    componentWillLoad() {
        this.filteredData = this.data;
    }
    componentDidLoad() {
        if (this.autoFocus) {
            this.focusInput();
        }
    }
    watchHandler(newValue, oldValue) {
        if (newValue !== oldValue && newValue === true) {
            this.focusInput();
        }
    }
    handleKeyDown(event) {
        var _a;
        const dataSize = this.filteredData.length;
        if (dataSize > 0) {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    this.selectedIndex = (this.selectedIndex - 1 + dataSize) % dataSize;
                    this.adjustScrollPosition();
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    this.selectedIndex = (this.selectedIndex + 1) % dataSize;
                    this.adjustScrollPosition();
                    break;
                // case 'Enter':
                // case ' ':
                // case 'ArrowRight':
                //   event.preventDefault();
                //   this.selectItem(this.selectedIndex);
                //   break;
                case 'Escape':
                    (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
                    this.isComboBoxVisible = false;
                    break;
            }
        }
    }
    focusInput() {
        requestAnimationFrame(() => {
            var _a;
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.focus();
        });
    }
    adjustScrollPosition() {
        var _a;
        const selectedItem = (_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-selected]`);
        if (!selectedItem)
            return;
        selectedItem.scrollIntoView({
            block: 'center',
        });
    }
    selectItem(index) {
        if (this.filteredData[index]) {
            this.isItemSelected = true;
            this.comboboxValueChange.emit({ key: 'select', data: this.filteredData[index].id });
            this.inputValue = '';
            this.resetCombobox();
            if (this.autoFocus) {
                this.focusInput();
            }
        }
    }
    debounceFetchData() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.fetchData();
        }, this.duration);
    }
    handleFocus() {
        this.isComboBoxVisible = true;
    }
    clearInput() {
        this.inputValue = '';
        this.resetCombobox();
        this.inputCleared.emit(null);
    }
    resetCombobox(withblur = true) {
        var _a;
        if (withblur) {
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
        }
        this.selectedIndex = -1;
        this.isComboBoxVisible = false;
    }
    async fetchData() {
        try {
            this.isLoading = true;
            this.filteredData = this.data.filter(d => d.name.toLowerCase().startsWith(this.inputValue));
            this.selectedIndex = -1;
        }
        catch (error) {
            console.log('error', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleInputChange(event) {
        this.inputValue = event.target.value;
        if (this.inputValue) {
            this.debounceFetchData();
        }
        else {
            this.filteredData = this.data;
        }
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isComboBoxVisible = false;
        }
    }
    handleBlur() {
        this.blurTimout = setTimeout(() => {
            if (!this.isItemSelected) {
                this.inputValue = '';
                this.resetCombobox();
            }
            else {
                this.isItemSelected = false;
            }
        }, 300);
    }
    isDropdownItem(element) {
        return element && element.closest('.combobox');
    }
    disconnectedCallback() {
        var _a, _b, _c, _d;
        clearTimeout(this.debounceTimer);
        clearTimeout(this.blurTimout);
        (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.removeEventListener('blur', this.handleBlur);
        (_b = this.inputRef) === null || _b === void 0 ? void 0 : _b.removeEventListener('click', this.selectItem);
        (_c = this.inputRef) === null || _c === void 0 ? void 0 : _c.removeEventListener('keydown', this.handleKeyDown);
        (_d = this.inputRef) === null || _d === void 0 ? void 0 : _d.removeEventListener('focus', this.handleFocus);
    }
    handleItemKeyDown(event, index) {
        var _a;
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
            this.selectItem(index);
            event.preventDefault();
        }
        else if (event.key === 'Escape') {
            this.isComboBoxVisible = false;
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
            event.preventDefault();
        }
    }
    renderDropdown() {
        var _a;
        if (!this.isComboBoxVisible) {
            return null;
        }
        return (index.h("ul", null, (_a = this.filteredData) === null || _a === void 0 ? void 0 :
            _a.map((d, index$1) => (index.h("li", { onMouseEnter: () => (this.selectedIndex = index$1), role: "button", key: d.id, onKeyDown: e => this.handleItemKeyDown(e, index$1), "data-selected": this.selectedIndex === index$1, tabIndex: 0, onClick: () => this.selectItem(index$1) }, d.name))), this.filteredData.length === 0 && !this.isLoading && index.h("span", { class: 'text-center' }, locales_store.locales.entries.Lcz_NoResultsFound)));
    }
    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('object');
        if (!this.filteredData.length) {
            return;
        }
        this.selectItem(this.selectedIndex === -1 ? 0 : this.selectedIndex);
    }
    render() {
        return (index.h("form", { key: '3127d91e43a834a88149e534f710f63447c6d145', onSubmit: this.handleSubmit.bind(this), class: "m-0 p-0" }, index.h("input", { key: 'c4efcdb135d3997e99bc316530d3d8b957eacd2e', type: "text", class: "form-control bg-white", id: this.input_id, ref: el => (this.inputRef = el), disabled: this.disabled, value: this.value, placeholder: this.placeholder, onKeyDown: this.handleKeyDown.bind(this), onBlur: this.handleBlur.bind(this), onInput: this.handleInputChange.bind(this), onFocus: this.handleFocus.bind(this), autoFocus: this.autoFocus }), this.renderDropdown()));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "isComboBoxVisible": ["watchHandler"]
    }; }
};
IrCombobox.style = IrComboboxStyle0;

const onlineResources = [
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/jquery.min.js",
    // },
    {
        isCSS: true,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap-extended.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/app-assets/css/colors.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/menu/menu-types/horizontal-menu.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/colors/palette-gradient.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/components.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/assets/css/style.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/icheck.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/custom.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/pages/login-register.css',
    },
    // {
    //   isCSS: true,
    //   link: 'https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.css',
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/moment.min.js",
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.js",
    // },
];

const IrCommon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.extraResources = '';
        this.resources = onlineResources;
    }
    componentWillLoad() {
        this.parseRefs();
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return (index.h(index.Host, { key: '198628fc63c832e49fcf0364034dee4a0fa4e8ae' }, index.h("slot", { key: '73f64bcf05f3875eaffb41e75c8ebbcb68acc2a4' })));
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};

const initialValue = {
    default_properties: undefined,
    hk_criteria: undefined,
};
const { state: housekeeping_store } = locales_store.createStore(initialValue);
function updateHKStore(key, value) {
    housekeeping_store[key] = value;
}
function getDefaultProperties() {
    return housekeeping_store.default_properties;
}

class HouseKeepingService extends Token.Token {
    async getExposedHKSetup(property_id) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Missing token');
        }
        const { data } = await axios.axios.post(`/Get_Exposed_HK_Setup?Ticket=${token}`, {
            property_id,
        });
        updateHKStore('hk_criteria', data['My_Result']);
        return data['My_Result'];
    }
    async setExposedInspectionMode(property_id, mode) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Missing token');
        }
        const { data } = await axios.axios.post(`/Set_Exposed_Inspection_Mode?Ticket=${token}`, {
            property_id,
            mode,
        });
        return data['My_Result'];
    }
    async manageExposedAssignedUnitToHKM(property_id, assignments) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Missing token');
        }
        const { data } = await axios.axios.post(`/Manage_Exposed_Assigned_Unit_To_HKM?Ticket=${token}`, {
            property_id,
            links: assignments,
        });
        return data['My_Result'];
    }
    async editExposedHKM(params, is_to_remove = false) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Missing token');
        }
        const { data } = await axios.axios.post(`/Edit_Exposed_HKM?Ticket=${token}`, Object.assign(Object.assign({}, params), { is_to_remove }));
        return data['My_Result'];
    }
}

const irDeleteModalCss = ".backdropModal.sc-ir-delete-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-delete-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-delete-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-delete-modal{padding:10px;background:white;border-radius:5px}.modal.sc-ir-delete-modal{z-index:1001 !important}.modal-dialog.sc-ir-delete-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-delete-modal{gap:10px}.exit-icon.sc-ir-delete-modal{position:absolute;right:10px;top:5px;margin:0}.ir-modal.sc-ir-delete-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-delete-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrDeleteModalStyle0 = irDeleteModalCss;

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IrDeleteModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.modalClosed = index.createEvent(this, "modalClosed", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.housekeepingService = new HouseKeepingService();
        this.user = undefined;
        this.isOpen = false;
        this.selectedId = '';
        this.loadingBtn = null;
    }
    componentWillLoad() {
        this.housekeepingService.setToken(housekeeping_store.default_properties.token);
    }
    async closeModal() {
        this.isOpen = false;
        this.modalClosed.emit(null);
    }
    async openModal() {
        this.isOpen = true;
    }
    async btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        try {
            if (name === 'confirm') {
                this.loadingBtn = 'confirm';
                if (this.selectedId === '') {
                    await this.housekeepingService.editExposedHKM(this.user, true);
                }
                else {
                    const newAssignedUnits = this.user.assigned_units.map(u => ({ hkm_id: +this.selectedId, is_to_assign: true, unit_id: u.id }));
                    await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_store.default_properties.property_id, newAssignedUnits);
                    const _a = this.user, user = __rest$1(_a, ["assigned_units", "is_soft_deleted", "is_active"]);
                    await this.housekeepingService.editExposedHKM(user, true);
                }
                this.resetData.emit(null);
            }
            if (name === 'cancel') {
                this.closeModal();
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            if (this.loadingBtn) {
                this.loadingBtn = null;
                this.closeModal();
            }
        }
    }
    render() {
        if (!this.user) {
            return null;
        }
        return [
            index.h("div", { class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.closeModal();
                } }),
            index.h("div", { "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, this.isOpen && (index.h("div", { class: `ir-alert-content p-2` }, index.h("div", { class: `ir-alert-header align-items-center border-0 py-0 m-0 ` }, index.h("p", { class: "p-0 my-0 mb-1" }, 'Assign units to'), index.h("ir-icon", { class: "exit-icon", style: { cursor: 'pointer' }, onClick: () => {
                    this.closeModal();
                } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "10.5", viewBox: "0 0 384 512" }, index.h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("div", { class: "modal-body text-left p-0 mb-2" }, index.h("ir-select", { firstOption: "nobody", selectedValue: this.selectedId, onSelectChange: e => (this.selectedId = e.detail), LabelAvailable: false, data: housekeeping_store.hk_criteria.housekeepers
                    .filter(hk => hk.id !== this.user.id)
                    .map(m => ({
                    value: m.id.toString(),
                    text: m.name,
                })) })), index.h("div", { class: `ir-alert-footer border-0 d-flex justify-content-end` }, index.h("ir-button", { icon: '', btn_color: 'secondary', btn_block: true, text: 'Cancel', name: 'cancel' }), index.h("ir-button", { isLoading: this.loadingBtn === 'confirm', icon: '', btn_color: 'primary', btn_block: true, text: 'confirm', name: 'confirm' }))))),
        ];
    }
};
IrDeleteModal.style = IrDeleteModalStyle0;

const irHkTeamCss = ".sc-ir-hk-team-h{display:block}th.sc-ir-hk-team,td.sc-ir-hk-team{text-align:left !important;width:fit-content !important}input.sc-ir-hk-team{border:none;margin:0;width:120px}input.sc-ir-hk-team:focus{outline:none}.table-container.sc-ir-hk-team{padding:10px 0;overflow-x:auto;max-width:100%;width:max-content}.table.sc-ir-hk-team,th.sc-ir-hk-team,td.sc-ir-hk-team{border-color:white !important}thead.sc-ir-hk-team{border:0 !important}table.sc-ir-hk-team{border:0 !important}.icons-container.sc-ir-hk-team{display:flex;align-items:center;justify-content:center;gap:4px}.text-center.sc-ir-hk-team{text-align:center !important}.assignments-container.sc-ir-hk-team,.unassigned-container.sc-ir-hk-team{display:flex;align-items:center;gap:8px}.font-semibold.sc-ir-hk-team{font-weight:700}.unassigned-container.sc-ir-hk-team{gap:4px}.justify-between.sc-ir-hk-team{justify-content:space-between;margin-bottom:10px}.assignments-container.sc-ir-hk-team p.sc-ir-hk-team,h4.sc-ir-hk-team{margin:0}.outline-btn.sc-ir-hk-team{background:white;border:1px solid var(--blue);color:var(--blue);border-radius:5px;font-size:12px;padding:1px 0.25rem !important;margin:0}.outline-btn.sc-ir-hk-team:hover{color:white;background:var(--blue)}@media only screen and (min-width: 900px){td.sc-ir-hk-team{min-width:140px !important}}@media only screen and (max-width: 900px){.table-container.sc-ir-hk-team{width:100%}}";
const IrHkTeamStyle0 = irHkTeamCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IrHkTeam = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.currentTrigger = null;
    }
    renderAssignedUnits(hk) {
        if (hk.assigned_units.length === 0) {
            return (index.h("span", null, "0 -", ' ', index.h("button", { class: "outline-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }) }, "Assign")));
        }
        return (index.h("span", null, hk.assigned_units.length, " -", ' ', index.h("button", { onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: hk }), class: "outline-btn" }, "Edit")));
    }
    renderCurrentTrigger() {
        var _a;
        switch ((_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.type) {
            case 'unassigned_units':
                return index.h("ir-hk-unassigned-units", { slot: "sidebar-body", user: this.currentTrigger.user });
            case 'user':
                return index.h("ir-hk-user", { slot: "sidebar-body", user: this.currentTrigger.user, isEdit: this.currentTrigger.isEdit });
            default:
                return null;
        }
    }
    handleCloseSideBar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.currentTrigger = null;
    }
    handleDeletion(user) {
        this.currentTrigger = { type: 'delete', user };
        this.deletionTimout = setTimeout(() => {
            const modal = this.el.querySelector('ir-delete-modal');
            if (!modal)
                return;
            modal.openModal();
        }, 100);
    }
    disconnectedCallback() {
        clearTimeout(this.deletionTimout);
    }
    render() {
        var _a, _b;
        const { assigned, total, un_assigned } = housekeeping_store.hk_criteria.units_assignments;
        return (index.h(index.Host, { key: 'aacfec15a45c0ce2fa4699789d544a6baa7908f7', class: "card p-1" }, index.h("section", { key: '993bfa7e628b216831d413550dc7155a0ef1d919' }, index.h("div", { key: '52ee590f56eac4f9db4d9f23cfbd8415d581ee38', class: "assignments-container align-items-start align-items-md-center flex-column flex-md-row justify-between" }, index.h("h4", { key: 'c77887b7ab6556722267c02b6f43b5a514941455' }, "Room or Unit Status"), index.h("div", { key: '72ca18f0b9ea80fed13131a0735260a729832473', class: "assignments-container" }, index.h("p", { key: '6865c0cd93e5cd115f8470316bbd3e1dc882db11' }, total, " ", index.h("span", { key: '9d857b139a42f2ad9a8c874d95e6d7d071dcbb11', class: "font-semibold" }, "Total units")), index.h("p", { key: 'b12aa3704046b64168f47c994a9c1763ceba9aa3' }, assigned, " ", index.h("span", { key: '3ea96dfb4f543481218be0cb993503f35e30d0de', class: "font-semibold" }, "Assigned")), index.h("div", { key: '08fb17ed3bce81a31992a08009db9676a3526544', class: "unassigned-container" }, index.h("p", { key: '034ad26a6e49a7dd28c66489fb3c966f09456585' }, un_assigned), ' ', index.h("button", { key: 'b1918658590bde2c85c1b00a3e5d3ea84e8205ae', class: "outline-btn", onClick: () => (this.currentTrigger = { type: 'unassigned_units', user: null }) }, "Unassigned")))), index.h("p", { key: '27bcc710cff5c0e8ab39f8cf5af2c6941746c155' }, "As an option, create housekeepers (as individuals or teams) and assign units to them to notify them separately.")), index.h("section", { key: 'deed0564beb23919bf5039ad59987d8d0b1bf9fd', class: "table-container" }, index.h("table", { key: 'ac2e599f18c519e4f853a7ccd32fbf567f39a9b6', class: "table" }, index.h("thead", { key: '78ad2e279010b4fdd266ae18f7f80d48b5ff33a6' }, index.h("tr", { key: 'd965ab0d596826cbe22344f33d8b74264a00fb94' }, index.h("th", { key: '842601c71a42032474ff42a39cf330a2c18a6fff' }, "Name"), index.h("th", { key: '7006263bfc52e5684781e75f8ef615f653ad1cec' }, "Mobile"), index.h("th", { key: '6d3608a524849c26f8322897f36b28acc018f0b7' }, "Username"), index.h("th", { key: '1b36956b86e655f808e76a19d6787ae93267ae40' }, "Note"), index.h("th", { key: '7bd547ed3af1bfd6e06e8b2a7440c8b629a59ccb' }, "Units assigned"), index.h("th", { key: '948b93b7653736394b382145a6e4124da10654b0', class: "text-center" }, index.h("ir-icon", { key: 'fe7ef3920418353c705761656691a259f6c09174', onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, index.h("svg", { key: '997ab2fc677fe2bc4f5520ae5b692aeb50e733ce', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, index.h("path", { key: '0546b158fc406ac4098d4390e6f6bdd03ab636d3', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), index.h("tbody", { key: 'e2ed69a6b097318ce18673094214063e848d8d6a' }, housekeeping_store.hk_criteria.housekeepers.map(hk => (index.h("tr", { key: hk.id }, index.h("td", null, hk.name), index.h("td", null, hk.mobile), index.h("td", null, hk.username), index.h("td", null, hk.note), index.h("td", null, this.renderAssignedUnits(hk)), index.h("td", { class: "text-center" }, index.h("div", { class: "icons-container" }, index.h("ir-icon", { onIconClickHandler: () => {
                const user = __rest(hk, ["assigned_units", "is_soft_deleted", "is_active"]);
                this.currentTrigger = {
                    type: 'user',
                    isEdit: true,
                    user,
                };
            }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, index.h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))), index.h("span", null, " \u00A0"), index.h("ir-icon", { icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => this.handleDeletion(hk) }, index.h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }))))))))))), index.h("ir-sidebar", { key: '3de64d7dc3229daaecb14df0ab398a367c4c93a6', sidebarStyles: {
                maxWidth: ((_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.type) === 'unassigned_units' ? 'max-content' : '100%',
            }, showCloseButton: false, open: this.currentTrigger !== null && this.currentTrigger.type !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null) }, this.renderCurrentTrigger()), ((_b = this.currentTrigger) === null || _b === void 0 ? void 0 : _b.type) === 'delete' && index.h("ir-delete-modal", { user: this.currentTrigger.user })));
    }
    get el() { return index.getElement(this); }
};
IrHkTeam.style = IrHkTeamStyle0;

const irHkUnassignedUnitsCss = ".sc-ir-hk-unassigned-units-h{display:block;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}ul.sc-ir-hk-unassigned-units{margin:0;padding:0}ul.sc-ir-hk-unassigned-units li.sc-ir-hk-unassigned-units{margin:0;padding:0;display:flex;margin-bottom:5px;justify-content:space-between}ul.sc-ir-hk-unassigned-units li.sc-ir-hk-unassigned-units p.sc-ir-hk-unassigned-units{padding:0;margin:0;width:min-content}.title.sc-ir-hk-unassigned-units{width:max-content;padding-right:10px}";
const IrHkUnassignedUnitsStyle0 = irHkUnassignedUnitsCss;

const IrHkUnassignedUnits = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.assignedUnits = new Map();
        this.housekeepingService = new HouseKeepingService();
        this.user = null;
        this.renderAgain = false;
    }
    componentWillLoad() {
        this.housekeepingService.setToken(housekeeping_store.default_properties.token);
    }
    assignUnit(unit_id, hk_id, checked) {
        if (this.user) {
            const userUnit = this.user.assigned_units.find(unit => unit.id === unit_id);
            if ((checked && userUnit) || (!checked && !userUnit)) {
                this.assignedUnits.delete(unit_id);
            }
            else if (!checked && userUnit) {
                this.assignedUnits.set(unit_id, { hkm_id: hk_id, is_to_assign: false, unit_id });
            }
            else if (checked) {
                const assignment = {
                    hkm_id: hk_id,
                    is_to_assign: true,
                    unit_id,
                };
                this.assignedUnits.set(unit_id, assignment);
            }
        }
        else {
            if (this.assignedUnits.has(unit_id) && !hk_id) {
                this.assignedUnits.delete(unit_id);
                return;
            }
            else {
                this.assignedUnits.set(unit_id, {
                    hkm_id: hk_id,
                    is_to_assign: true,
                    unit_id,
                });
            }
        }
        this.renderAgain = !this.renderAgain;
    }
    async assignUnits() {
        try {
            await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_store.default_properties.property_id, [...this.assignedUnits.values()]);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.closeSideBar.emit(null);
        }
    }
    renderRooms() {
        if (!this.user) {
            return housekeeping_store.hk_criteria.units_assignments.unassigned_units.map(unit => (index.h("li", { key: unit.id }, index.h("p", { class: "mr-2" }, unit.name), index.h("ir-select", { class: "ml-4", onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, LabelAvailable: false, data: housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) }))));
        }
        return calendarData.calendar_data.roomsInfo.map(roomType => {
            var _a;
            if (!roomType.is_active) {
                return null;
            }
            return (_a = roomType.physicalrooms) === null || _a === void 0 ? void 0 : _a.map(physical_room => {
                var _a, _b;
                let taken = !housekeeping_store.hk_criteria.units_assignments.unassigned_units.find(unit => unit.id === physical_room.id);
                let housekeeper = [];
                const assignedRoom = this.assignedUnits.get(physical_room.id);
                if (assignedRoom && assignedRoom.is_to_assign) {
                    housekeeper = [this.user];
                    taken = true;
                }
                else {
                    if (taken) {
                        housekeeper = housekeeping_store.hk_criteria.housekeepers.filter(hk => hk.assigned_units.find(unit => unit.id === physical_room.id));
                    }
                }
                return (index.h("li", { key: physical_room.id }, index.h("div", { class: "d-flex mr-3" }, index.h("p", { class: "mr-2" }, physical_room.name), " ", index.h("span", null, taken ? (_a = housekeeper[0]) === null || _a === void 0 ? void 0 : _a.name : '')), index.h("ir-switch", { onCheckChange: e => {
                        const checked = e.detail;
                        this.assignUnit(physical_room.id, this.user.id, checked);
                    }, checked: taken && ((_b = housekeeper[0]) === null || _b === void 0 ? void 0 : _b.id) === this.user.id })));
            });
        });
    }
    render() {
        return (index.h(index.Host, { key: 'f307e1da45b39889eeea3cf10aeb7a2a696038ba', class: "px-1" }, index.h("div", { key: '8532e0a686f363f361b5e889e44b3c88794915cc', class: "d-flex align-items-center py-1 justify-content-between" }, index.h("h3", { key: 'dbb4719b9303fd4b144cd0abd8e9e5e6bac245f1', class: "text-left font-medium-2 title py-0 my-0" }, !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}`), index.h("ir-icon", { key: '4f5f120921afbccc8921d739c95aec988a55e3cd', class: 'ml-1 m-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: 'f019c64d757aaa716cb46daba34774da7e66b5f3', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '85e14550fd2e939f9228cf27674091a4899b7245', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("section", { key: '832f7d72957e33fb2622e2c90018865f7217cb6a', class: "pt-1 pb-1 border-top" }, index.h("ul", { key: '87ea6bca9b779e6fa15053a4fa07658f41fa914f' }, this.renderRooms()), index.h("div", { key: 'c23107de6ff652f808d9011065bd10015a1a97f2', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, index.h("ir-button", { key: '53b69129977abc331a99a0af0aabf50546b807d0', onClickHanlder: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: 'Cancel' }), index.h("ir-button", { key: 'cd58462336c67760f9a2f4856635458dcaa30d7c', isLoading: irInterceptor_store.isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHanlder: this.assignUnits.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: 'Confirm' })))));
    }
};
IrHkUnassignedUnits.style = IrHkUnassignedUnitsStyle0;

function validateForm(data, rules) {
    let isValid = true;
    const errors = {};
    for (const fieldName in rules) {
        const rulesForField = rules[fieldName];
        const value = data[fieldName];
        if (!rulesForField)
            continue;
        errors[fieldName] = [];
        // Required
        if (rulesForField.required && (value === null || value === undefined || value === '')) {
            isValid = false;
            errors[fieldName].push('This field is required.');
        }
        // String Length
        if (typeof value === 'string') {
            if (rulesForField.minLength !== undefined && value.length < rulesForField.minLength) {
                isValid = false;
                errors[fieldName].push(`Minimum length is ${rulesForField.minLength}.`);
            }
            if (rulesForField.maxLength !== undefined && value.length > rulesForField.maxLength) {
                isValid = false;
                errors[fieldName].push(`Maximum length is ${rulesForField.maxLength}.`);
            }
        }
        // Numeric Range
        if (typeof value === 'number') {
            if (rulesForField.minValue !== undefined && value < rulesForField.minValue) {
                isValid = false;
                errors[fieldName].push(`Minimum value is ${rulesForField.minValue}.`);
            }
            if (rulesForField.maxValue !== undefined && value > rulesForField.maxValue) {
                isValid = false;
                errors[fieldName].push(`Maximum value is ${rulesForField.maxValue}.`);
            }
        }
        // Regular Expression
        if (rulesForField.pattern && !rulesForField.pattern.test(String(value))) {
            isValid = false;
            errors[fieldName].push('Invalid format.');
        }
        // Custom Validation
        if (rulesForField.custom && !rulesForField.custom(value)) {
            isValid = false;
            errors[fieldName].push('Custom validation failed.');
        }
    }
    return { isValid, errors };
}

const irHkUserCss = ".sc-ir-hk-user-h{display:block}.top-border.sc-ir-hk-user{border-top:1px solid #e4e5ec}";
const IrHkUserStyle0 = irHkUserCss;

const IrHkUser = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.housekeepingService = new HouseKeepingService();
        this.default_properties = {
            token: '',
            language: '',
        };
        this.user = null;
        this.isEdit = false;
        this.isLoading = false;
        this.userInfo = {
            id: -1,
            mobile: '',
            name: '',
            note: '',
            password: '',
            property_id: null,
            username: '',
            phone_prefix: null,
        };
        this.errors = null;
    }
    async componentWillLoad() {
        const { token, language, property_id } = getDefaultProperties();
        this.default_properties = { token, language };
        this.housekeepingService.setToken(token);
        if (!this.user) {
            this.userInfo['property_id'] = property_id;
        }
        if (this.user) {
            this.userInfo = Object.assign({}, this.user);
        }
        console.log(this.userInfo);
    }
    updateUserField(key, value) {
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), { [key]: value });
    }
    async addUser() {
        try {
            this.isLoading = true;
            const validationRules = {
                name: { required: true },
                mobile: { required: true },
                password: { minLength: 5 },
            };
            const validationResult = validateForm(this.userInfo, validationRules);
            if (!validationResult.isValid) {
                this.errors = validationResult.errors;
                return;
            }
            if (this.errors) {
                this.errors = null;
            }
            await this.housekeepingService.editExposedHKM(this.userInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (index.h(index.Host, { key: 'd8d405c2afcb942fa77823c788ea1c3d32aa1104', class: "px-1" }, index.h("div", { key: '9d8a4f0f680bf57f9df142f6dedc9d4d216a0c11', class: "d-flex align-items-center py-1 justify-content-between" }, index.h("h3", { key: '340fd8a2c124b506c2c7ae66ed06bf40faa4b26b', class: "text-left font-medium-2  py-0 my-0" }, this.isEdit ? 'Edit' : 'Create', " housekeeper profile"), index.h("ir-icon", { key: '43427a39fc32b1c955c8539a8ea86db8a9d5511d', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: '10c9a0f53de986036d08e56f7546d68d752ad7c9', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: 'e0b726ae93fb8711784b56ad5421cb99207791ee', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("section", { key: 'c5cdec2a27d0c6dcd84eb6499c053cc5d28a70f2', class: "pt-3 border-top" }, index.h("ir-input-text", { key: 'f2de1428a49f736a31c56e1c343f6514fe5a13ff', error: ((_b = (_a = this.errors) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 0, label: "Name", placeholder: "", onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name }), index.h("ir-phone-input", { key: '400b1a3e2e3317de1d0803d66ef67d906109115b', error: ((_d = (_c = this.errors) === null || _c === void 0 ? void 0 : _c.mobile) === null || _d === void 0 ? void 0 : _d.length) > 0, language: this.default_properties.language, token: this.default_properties.token, default_country: calendarData.calendar_data.country.id, phone_prefix: (_e = this.user) === null || _e === void 0 ? void 0 : _e.phone_prefix, label: "Mobile", value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), index.h("ir-input-text", { key: '3623a36572e0c287382734d4173482108d51db5f', label: "Username", placeholder: "", value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), index.h("ir-input-text", { key: 'c9ffffdeb24cf0f75c93f20198a85bc8104ac6ea', label: "Password", placeholder: "", value: this.userInfo.password, type: "password", error: ((_g = (_f = this.errors) === null || _f === void 0 ? void 0 : _f.password) === null || _g === void 0 ? void 0 : _g.length) > 0, onTextChange: e => this.updateUserField('password', e.detail) }), index.h("ir-input-text", { key: '9c3b2eb777f8601efffa3980af4d224865e7d3cf', label: "Note", placeholder: "", value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) }), index.h("div", { key: 'e84e9ef0e3bbdb6ab32bdd256f3274dbbe3a81fd', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, index.h("ir-button", { key: '1823bd8a7b6b000bcea4c6d1131e5d36f4689dc5', onClickHanlder: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: 'Cancel' }), index.h("ir-button", { key: 'a227180b1e00d2f53cc47e24a0620436bc187cdd', isLoading: this.isLoading, onClickHanlder: this.addUser.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: 'Save' })))));
    }
};
IrHkUser.style = IrHkUserStyle0;

const irHousekeepingCss = ".sc-ir-housekeeping-h{display:block}";
const IrHousekeepingStyle0 = irHousekeepingCss;

const IrHousekeeping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.roomService = new room_service.RoomService();
        this.houseKeepingService = new HouseKeepingService();
        this.language = '';
        this.ticket = '';
        this.baseurl = '';
        this.propertyid = undefined;
        this.isLoading = false;
    }
    componentWillLoad() {
        if (this.baseurl) {
            axios.axios.defaults.baseURL = this.baseurl;
        }
        if (this.ticket !== '') {
            this.roomService.setToken(this.ticket);
            this.houseKeepingService.setToken(this.ticket);
            updateHKStore('default_properties', { token: this.ticket, property_id: this.propertyid, language: this.language });
            this.initializeApp();
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.houseKeepingService.getExposedHKSetup(this.propertyid);
    }
    async ticketChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.roomService.setToken(this.ticket);
            this.houseKeepingService.setToken(this.ticket);
            updateHKStore('default_properties', { token: this.ticket, property_id: this.propertyid, language: this.language });
            this.initializeApp();
        }
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            await Promise.all([this.houseKeepingService.getExposedHKSetup(this.propertyid), this.roomService.fetchData(this.propertyid, this.language)]);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (this.isLoading) {
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-interceptor", null), index.h("ir-toast", null), index.h("section", { class: "p-1" }, index.h("ir-unit-status", { class: "mb-1" }), index.h("ir-hk-team", { class: "mb-1" }))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHousekeeping.style = IrHousekeepingStyle0;

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#104064}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#1a6aa7}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.iconClickHandler = index.createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
    }
    render() {
        return (index.h("button", { key: '5da84289b57ca2ec563d70a18ce32a386f5bb8ba', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, index.h("slot", { key: 'cbb0cf0be5d3c3a4eed5f770ab191083324f3526', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

const irInputTextCss = ".sc-ir-input-text-h{margin:0;padding:0}.border-theme.sc-ir-input-text{border:1px solid #cacfe7}.icon-container.sc-ir-input-text{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}input.sc-ir-input-text:focus{border-color:#1e9ff2 !important}.input-container.sc-ir-input-text{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.input-container.sc-ir-input-text input.sc-ir-input-text{padding-left:5px !important;padding-right:5px !important;border-left:0;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.icon-container[data-state='focus'].sc-ir-input-text{border-color:var(--blue)}.icon-container[data-disabled].sc-ir-input-text{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.danger-border.sc-ir-input-text{border-color:var(--red)}";
const IrInputTextStyle0 = irInputTextCss;

const IrInputText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.name = undefined;
        this.value = undefined;
        this.label = '<label>';
        this.placeholder = '<placeholder>';
        this.inputStyles = '';
        this.required = undefined;
        this.LabelAvailable = true;
        this.readonly = false;
        this.type = 'text';
        this.submited = false;
        this.inputStyle = true;
        this.size = 'md';
        this.textSize = 'md';
        this.labelPosition = 'left';
        this.labelBackground = null;
        this.labelColor = 'dark';
        this.labelBorder = 'theme';
        this.labelWidth = 3;
        this.variant = 'default';
        this.disabled = false;
        this.error = false;
        this.valid = undefined;
        this.initial = true;
        this.inputFocused = false;
    }
    connectedCallback() { }
    disconnectedCallback() { }
    watchHandler(newValue) {
        if (newValue !== '' && this.required) {
            this.valid = true;
        }
    }
    watchHandler2(newValue) {
        if (newValue && this.required) {
            this.initial = false;
        }
    }
    handleInputChange(event) {
        this.initial = false;
        if (this.required) {
            this.valid = event.target.checkValidity();
            const value = event.target.value;
            this.textChange.emit(value);
        }
        else {
            this.textChange.emit(event.target.value);
        }
    }
    render() {
        const id = v4.v4();
        if (this.variant === 'icon') {
            return (index.h("fieldset", { class: "position-relative has-icon-left input-container" }, index.h("label", { htmlFor: id, class: "input-group-prepend bg-white m-0" }, index.h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${this.error && 'danger-border'}`, id: "basic-addon1" }, index.h("slot", { name: "icon" }))), index.h("input", { type: "text", onFocus: () => (this.inputFocused = true), required: this.required, onBlur: () => (this.inputFocused = false), disabled: this.disabled, class: `form-control bg-white pl-0 input-sm rate-input py-0 m-0 rateInputBorder ${this.error && 'danger-border'}`, id: id, value: this.value, placeholder: this.placeholder, onInput: this.handleInputChange.bind(this) })));
        }
        let className = 'form-control';
        let label = (index.h("div", { class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, index.h("label", { class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (!this.LabelAvailable) {
            label = '';
        }
        if (this.inputStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        return (index.h("div", { class: "form-group" }, index.h("div", { class: "input-group row m-0" }, label, index.h("input", { readOnly: this.readonly, type: this.type, class: `${className} ${this.error ? 'border-danger' : ''} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12} ${this.readonly && 'bg-white'} ${this.inputStyles}`, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required }))));
    }
    static get watchers() { return {
        "value": ["watchHandler"],
        "submited": ["watchHandler2"]
    }; }
};
IrInputText.style = IrInputTextStyle0;

const irInterceptorCss = ".loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:white}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:rgba(0, 0, 0, 0.2);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrInterceptorStyle0 = irInterceptorCss;

const IrInterceptor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.handledEndpoints = ['/ReAllocate_Exposed_Room', '/Do_Payment', '/Get_Exposed_Bookings'];
    }
    componentWillLoad() {
        this.setupAxiosInterceptors();
    }
    setupAxiosInterceptors() {
        axios.axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    extractEndpoint(url) {
        return url.split('?')[0];
    }
    isHandledEndpoint(url) {
        return this.handledEndpoints.includes(url);
    }
    handleRequest(config) {
        const extractedUrl = this.extractEndpoint(config.url);
        irInterceptor_store.interceptor_requests[extractedUrl] = 'pending';
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = true;
        }
        return config;
    }
    handleResponse(response) {
        var _a;
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
        }
        irInterceptor_store.interceptor_requests[extractedUrl] = 'done';
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            this.handleError(response.data.ExceptionMsg);
            throw new Error(response.data.ExceptionMsg);
        }
        return response;
    }
    handleError(error) {
        this.toast.emit({
            type: 'error',
            title: error,
            description: '',
            position: 'top-right',
        });
        return Promise.reject(error);
    }
    render() {
        return (index.h(index.Host, { key: '539d3eaf1d89939b98a7cd64d70f096806ee3131' }, this.isLoading && (index.h("div", { class: "loadingScreenContainer" }, index.h("div", { class: "loaderContainer" }, index.h("span", { class: "loader" }))))));
    }
};
IrInterceptor.style = IrInterceptorStyle0;

const irLoadingScreenCss = ".sc-ir-loading-screen-h{display:fixed;height:100vh;width:100vw;z-index:1000;top:0;left:0;display:flex;align-items:center;justify-content:center;background:white}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:white;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.message = '';
    }
    render() {
        return (index.h(index.Host, { key: '159e3217895ff1578b0d3ff13f107e02382d3d74' }, index.h("span", { key: '1d75ba7b398f16e4a358e3e2b20aedf87e8f78fa', class: "loader" })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

const irPhoneInputCss = ".sc-ir-phone-input-h{display:block}.input-container.sc-ir-phone-input{display:flex;align-items:center;padding:0 !important}.input-container.sc-ir-phone-input:focus-within{border-color:#1e9ff2}.input-container.sc-ir-phone-input input.sc-ir-phone-input{flex:1;border:0}.input-container.sc-ir-phone-input input.sc-ir-phone-input:focus{outline:none}.dropdown-trigger.sc-ir-phone-input{display:flex;align-items:center;gap:8px;background:white;border:0;border-right:1px solid #cacfe7}.ir-dropdown-container.sc-ir-phone-input{position:absolute;z-index:1000;bottom:-30px;width:100%;left:0;background:white}.input-container.sc-ir-phone-input label.sc-ir-phone-input{display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px}.flag.sc-ir-phone-input{height:18px;width:24px;border-radius:3px}.is-invalid.sc-ir-phone-input{border-color:#ff4961}";
const IrPhoneInputStyle0 = irPhoneInputCss;

const IrPhoneInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.countries = [];
        this.bookingService = new booking_service.BookingService();
        this.label = undefined;
        this.value = '';
        this.disabled = false;
        this.error = false;
        this.token = undefined;
        this.language = undefined;
        this.default_country = null;
        this.phone_prefix = null;
        this.inputValue = '';
        this.isDropdownVisible = false;
        this.currentCountry = undefined;
    }
    async componentWillLoad() {
        if (!this.token) {
            throw new Error('Missing token');
        }
        this.bookingService.setToken(this.token);
        const countries = await this.bookingService.getCountries(this.language);
        this.countries = countries;
        if (this.phone_prefix) {
            this.setCountryFromPhonePrefix();
        }
        else {
            if (this.default_country) {
                this.setCurrentCountry(this.default_country);
            }
        }
        this.inputValue = this.value;
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isDropdownVisible = false;
        }
    }
    handleInputChange(e) {
        var _a;
        let inputElement = e.target;
        let inputValue = inputElement.value;
        inputValue = inputValue.replace(/[^+\d]+/g, '');
        inputElement.value = inputValue;
        this.inputValue = inputValue;
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.inputValue });
    }
    setCountryFromPhonePrefix() {
        var _a;
        const country = this.countries.find(country => country.phone_prefix === this.phone_prefix);
        if (!country) {
            throw new Error('Invalid country id');
        }
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    setCurrentCountry(id) {
        var _a;
        const country = this.countries.find(country => country.id === id);
        if (!country) {
            throw new Error('Invalid country id');
        }
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    render() {
        var _a, _b;
        return (index.h(index.Host, { key: '2c809ac5c9af76085137f46cbf27c2c6a319561e' }, index.h("div", { key: 'd5440840bd88eb0688393254f618186ef293234d', class: "form-group mr-0" }, index.h("div", { key: '5b8f61d6f4c1e8d2bce23d10b590e19eca038d62', class: "input-group row m-0 p-0 position-relative" }, this.label && (index.h("div", { class: `input-group-prepend col-3 p-0 text-dark border-none` }, index.h("label", { class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.label))), index.h("div", { key: '5872fd2209fb93ab0c42df2a178801e9b2ef8690', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, index.h("button", { key: '4d47235b56a178dd0fdaff2f6bc0a947313769de', onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, index.h("img", { key: '26148b13229ada0d7eb9e7974b28658da1441c0f', src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }), index.h("svg", { key: 'd4109db7fd9cc9b8a7877073783f5614332433df', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: 'd1de6d228a4044440427d06b0740d4051c7400c8', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("label", { key: '96fd7b9a23b546295ba6a39c83670cd68e1b4b7d' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), index.h("input", { key: '6a04e5319311e8d85b66fed61f22f2aa7e9ccdf5', type: "text", required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e) })), ' ', this.isDropdownVisible && (index.h("div", { class: "ir-dropdown-container" }, index.h("ir-combobox", { onComboboxValueChange: e => {
                this.setCurrentCountry(+e.detail.data);
                this.isDropdownVisible = false;
            }, class: "bg-white", autoFocus: true, placeholder: "Search country", data: this.countries.map(c => ({
                id: c.id.toString(),
                name: `${c.name} (${c.phone_prefix})`,
            })) })))), this.error && index.h("div", { class: "invalid-feedback" }, "Please enter a valid phone number."))));
    }
    get el() { return index.getElement(this); }
};
IrPhoneInput.style = IrPhoneInputStyle0;

const irSelectCss = ".border-theme.sc-ir-select{border:1px solid #cacfe7}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}.bounce-3.sc-ir-select{animation:bounce 1s 1}";
const IrSelectStyle0 = irSelectCss;

const IrSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.selectChange = index.createEvent(this, "selectChange", 7);
        this.count = 0;
        this.name = undefined;
        this.data = undefined;
        this.label = '<label>';
        this.selectStyles = undefined;
        this.selectContainerStyle = undefined;
        this.selectedValue = null;
        this.required = undefined;
        this.LabelAvailable = true;
        this.firstOption = 'Select';
        this.selectStyle = true;
        this.showFirstOption = true;
        this.submited = false;
        this.size = 'md';
        this.textSize = 'md';
        this.labelPosition = 'left';
        this.labelBackground = null;
        this.labelColor = 'dark';
        this.labelBorder = 'theme';
        this.labelWidth = 3;
        this.select_id = v4.v4();
        this.initial = true;
        this.valid = false;
    }
    watchHandler(newValue) {
        if (newValue !== null && this.required) {
            this.valid = true;
        }
    }
    watchHandler2(newValue) {
        if (newValue && this.required) {
            this.initial = false;
        }
    }
    handleButtonAnimation(e) {
        console.log(e.detail, this.select_id, e.detail === this.select_id);
        if (!this.selectEl || e.detail !== this.select_id) {
            return;
        }
        console.log('first1');
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectEl.classList.add('border-danger');
    }
    componentwillload() { }
    disconnectedCallback() { }
    handleSelectChange(event) {
        this.selectEl.classList.remove('border-danger');
        if (this.required) {
            this.initial = false;
            this.valid = event.target.checkValidity();
            this.selectedValue = event.target.value;
            this.selectChange.emit(this.selectedValue);
        }
        else {
            this.selectedValue = event.target.value;
            this.selectChange.emit(this.selectedValue);
        }
    }
    render() {
        let className = 'form-control';
        let label = (index.h("div", { key: 'f5e640fac6435f269aa640cf0f5cd5fb2d4aa5f7', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, index.h("label", { key: '561e3b5ee8783478fa23d6efe6f6a28627709a88', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (index.h("div", { key: 'ca3bac1c885f33a1bdb804ca50c1f5c866623853', class: `form-group m-0 ${this.selectContainerStyle}` }, index.h("div", { key: 'e9f64511c6d62b7dd91ad3de610c39523fbf4562', class: "input-group row m-0" }, label, index.h("select", { key: '7e96305d6a0ca0870d1b4874a56e66da9e635c92', ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && index.h("option", { value: '' }, this.firstOption), this.data.map(item => {
            if (this.selectedValue === item.value) {
                return (index.h("option", { selected: true, value: item.value }, item.text));
            }
            else {
                return index.h("option", { value: item.value }, item.text);
            }
        })))));
    }
    static get watchers() { return {
        "selectedValue": ["watchHandler"],
        "submited": ["watchHandler2"]
    }; }
};
IrSelect.style = IrSelectStyle0;

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:0.5rem 0}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";
const IrSidebarStyle0 = irSidebarCss;

const IrSidebar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irSidebarToggle = index.createEvent(this, "irSidebarToggle", 7);
        this.name = undefined;
        this.side = 'right';
        this.showCloseButton = true;
        this.open = false;
        this.sidebarStyles = undefined;
    }
    applyStyles() {
        for (const property in this.sidebarStyles) {
            if (this.sidebarStyles.hasOwnProperty(property)) {
                this.sidebarRef.style[property] = this.sidebarStyles[property];
            }
        }
    }
    handleSidebarStylesChange() {
        this.applyStyles();
    }
    componentWillLoad() {
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidLoad() {
        // If esc key is pressed, close the modal
        this.applyStyles();
        document.addEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    // Unsubscribe to the event when the component is removed from the DOM
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    async toggleSidebar() {
        this.irSidebarToggle.emit(this.open);
    }
    render() {
        let className = '';
        if (this.open) {
            className = 'active';
        }
        else {
            className = '';
        }
        return [
            index.h("div", { key: '26b6454f7c13ca0b800fe4f16fc7b0b7c5ccd01c', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            index.h("div", { key: '1a786af4505fea52cca0e058be6c83fa458a2624', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (index.h("ir-icon", { class: "close", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), index.h("slot", { key: 'af78058ac355ec112ac7c1069255d998adeb72a9', name: "sidebar-body" })),
        ];
    }
    static get watchers() { return {
        "sidebarStyles": ["handleSidebarStylesChange"]
    }; }
};
IrSidebar.style = IrSidebarStyle0;

const irSwitchCss = ".sc-ir-switch-h{display:block;position:relative;box-sizing:border-box;--ir-root-width:36px;--ir-root-height:20px}.hidden-input.sc-ir-switch{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height)}.SwitchRoot.sc-ir-switch{all:unset;padding:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height);background-color:var(--ir-root-inactive-color, #ff4961);position:relative;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;--webkit-tap-highlight-color:rgba(0, 0, 0, 0);border-radius:9999px;box-sizing:border-box}.SwitchRoot.sc-ir-switch:disabled{opacity:80%}.SwitchRoot.sc-ir-switch:focus-visible{outline:1px solid var(--ir-root-active-color, rgb(55, 188, 155));outline-offset:1px}.SwitchRoot[data-state='checked'].sc-ir-switch{background-color:var(--ir-root-active-color, rgb(55, 188, 155))}.SwitchThumb.sc-ir-switch{padding:0;margin:0;display:block;width:calc(var(--ir-root-height) - 3px);height:calc(var(--ir-root-height) - 3px);border-radius:9999px;background:white;box-shadow:rgba(0, 0, 0, 0.2) 0px;transition:transform 100ms ease 0s;transform:translateX(2px);will-change:transform}.SwitchThumb[data-state='checked'].sc-ir-switch{transform:translateX(calc(var(--ir-root-height) - 3px))}";
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
        return (index.h(index.Host, { key: '0d5812a41115352d093854591da1e540b1a705a5' }, index.h("button", { key: '47f31d25f4f81c010f5eff4647f19433191fe2c2', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, index.h("span", { key: 'd28ce8203409c6afbad4abf6e4e5142391b21aae', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), index.h("input", { key: 'f2d1491d637fdb9b03c150384b16274afbfd898e', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
    }
};
IrSwitch.style = IrSwitchStyle0;

const irToastCss = "button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-success:#2b9a66;position:fixed;bottom:0;right:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}[position='top-left'].sc-ir-toast-h{top:0;left:0}[position='top-right'].sc-ir-toast-h{top:0;right:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;left:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;right:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}";
const IrToastStyle0 = irToastCss;

const IrToast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.position = 'bottom-left';
        this.toasts = [];
    }
    onToast(event) {
        const toast = event.detail;
        this.showToast(toast);
    }
    showToast(toast) {
        const toastrOptions = {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: toast.duration || 5000,
        };
        switch (toast.type) {
            case 'success':
                toastr.success(toast.title, '', toastrOptions);
                break;
            case 'error':
                toastr.error(toast.title, '', toastrOptions);
                break;
        }
    }
    render() {
        return index.h(index.Host, { key: 'e0e67252a8759bb24081a31ce40e5a4aa59aa9b7' });
    }
    get element() { return index.getElement(this); }
};
IrToast.style = IrToastStyle0;

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#629a4c}.red.sc-ir-unit-status{background:#ff4961}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#000}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";
const IrUnitStatusStyle0 = irUnitStatusCss;

const IrUnitStatus = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.housekeepingService = new HouseKeepingService();
    }
    componentWillLoad() {
        this.housekeepingService.setToken(housekeeping_store.default_properties.token);
    }
    async handleSelectChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const window = e.detail;
        let mode;
        if (window === '') {
            mode = {
                is_active: false,
                window: -1,
            };
        }
        else {
            mode = {
                is_active: true,
                window: +window,
            };
        }
        await this.housekeepingService.setExposedInspectionMode(housekeeping_store.default_properties.property_id, mode);
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: 'b9ccf4be982331f2c522260533953b5a677e89ce', class: "card p-1" }, index.h("h4", { key: '13627659ed3993acb46ab9d7ac831837e915e74f' }, "Room or Unit Status"), index.h("div", { key: '1ba270de17b94c4d5d7e8849fbfe25a0aadc45e3', class: "table-container" }, index.h("table", { key: 'be220c8f3c42e1c8588e37b947954d4702571125' }, index.h("thead", { key: '42c194a9a5cf5019d32a922ed04aa16e657470cc' }, index.h("tr", { key: '816a825e3bae7f27c5553e845ece70a2cf97b215' }, index.h("th", { key: 'c06f105e12276ed44faa25e18a079b17c55b60e4' }, "Status"), index.h("th", { key: '730b935e970d663808eb7d2ff56c6fe3e001908f', class: 'text-center' }, "Code"), index.h("th", { key: '733d6fef846e6e202dd3813652dd7dacbc314bd8' }, "Action"))), index.h("tbody", { key: '2ad964668de00f4847d3696d825d8035821146c8' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
            var _a;
            return (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), ((_a = status.inspection_mode) === null || _a === void 0 ? void 0 : _a.is_active) && (index.h("div", null, index.h("ir-select", {
                //selectedValue={status.inspection_mode?.window.toString()}
                LabelAvailable: false, firstOption: "No", onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(status.inspection_mode.window + 1), (_, i) => i).map(i => {
                    const text = i === 0 ? 'Yes on the same day.' : i.toString() + ' day prior.';
                    return {
                        text,
                        value: i.toString(),
                    };
                })
            })))))));
        }))))));
    }
};
IrUnitStatus.style = IrUnitStatusStyle0;

exports.ir_button = IrButton;
exports.ir_combobox = IrCombobox;
exports.ir_common = IrCommon;
exports.ir_delete_modal = IrDeleteModal;
exports.ir_hk_team = IrHkTeam;
exports.ir_hk_unassigned_units = IrHkUnassignedUnits;
exports.ir_hk_user = IrHkUser;
exports.ir_housekeeping = IrHousekeeping;
exports.ir_icon = IrIcon;
exports.ir_input_text = IrInputText;
exports.ir_interceptor = IrInterceptor;
exports.ir_loading_screen = IrLoadingScreen;
exports.ir_phone_input = IrPhoneInput;
exports.ir_select = IrSelect;
exports.ir_sidebar = IrSidebar;
exports.ir_switch = IrSwitch;
exports.ir_toast = IrToast;
exports.ir_unit_status = IrUnitStatus;

//# sourceMappingURL=ir-button_18.cjs.entry.js.map