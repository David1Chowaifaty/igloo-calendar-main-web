'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-07a1d3e6.js');
const v4 = require('./v4-9b297151.js');

const irChannelManagerCss = ":root{--sidebar-width:40rem}#container{padding:1rem;height:100%}.card{height:100%}#ir-list-item{height:100%}.cardBody{display:flex;justify-content:center;align-items:center;height:100%}.emptyBody{text-align:center}.emptyBody img{height:auto;width:100px;transform:translate(7%, 0);margin:1rem}.loader-position{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.card-head{background:#f8f8f8;padding:0.3rem}.section-title{display:flex;align-items:center;justify-content:space-between;font-weight:bold}.item-info{border-bottom:1px solid #e7e7e7}.item-info .row .col-3:last-child{text-align:end}.list-group{list-style:none;border-bottom:1px solid #e7e7e7}.list-group li{padding:0.5rem;color:#444;transition:all 0.3s ease-out}.list-group li:hover{color:#7c83eb}.list-group li.active{border-bottom:2px solid #7c83eb;color:#7c83eb}.btn-position{position:absolute;bottom:0;left:0;width:100%;padding:0.5rem;background:#f8f8f8;border-top:1px solid #e7e7e7}.test-icon{margin-right:0.2rem !important}.text-dark:hover{color:#444 !important}";
const IrChannelManagerStyle0 = irChannelManagerCss;

const IrChannelManager = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fetchApi = index.createEvent(this, "fetchApi", 7);
        this.requestApiDelete = index.createEvent(this, "requestApiDelete", 7);
        this.requestApiDestinationHierarchy = index.createEvent(this, "requestApiDestinationHierarchy", 7);
        this.tabs = ['General Settings', 'Mapping', 'Channel Settings'];
        this.hostRoom = undefined;
        this.mapReference = undefined;
        this.allowed_properties = [];
        this.allowed_channels = [];
        this.allowed_MinStayTypes = [];
        this.dropdownData = {
            name: 'Action',
            icon: '',
            children: [
                {
                    name: 'Edit',
                    icon: 'ft-edit',
                },
                {
                    name: 'Delete',
                    icon: 'ft-trash',
                },
                {
                    name: 'Disable',
                    icon: 'ft-alert-triangle',
                },
            ],
        };
        this.listData = null;
        this.loader = false;
        this.mode = 'create';
        this.activeTab = 'General Settings';
        this.selectedItem = null;
        this.item = null;
        this.anyChanges = false;
    }
    connectionOffHandler() {
        this.item = null;
    }
    sendToParentHandler(event) {
        this.anyChanges = true;
        this.item = event.detail;
        //this.listData = [...this.listData, { ...event.detail, id: this.listData.length + 1, status: 'Active' }];
    }
    sendMappingToParentHandler(event) {
        // Extract the mapping from the event detail
        const mapping = event.detail;
        const id = v4.v4();
        // Flag to track changes
        this.anyChanges = true;
        // Update listData based on the mode
        if (this.mode === 'edit' && this.selectedItem) {
            this.listData = this.listData.map(item => {
                if (item.id === this.selectedItem.id) {
                    return Object.assign(Object.assign({}, this.item), { RoomsMapping: mapping, status: 'Active', id: id });
                }
                return item;
            });
        }
        else {
            if (this.listData === null) {
                this.listData = [Object.assign(Object.assign({}, this.item), { RoomsMapping: mapping, status: 'Active', id: id })];
            }
            else {
                this.listData = [...this.listData, Object.assign(Object.assign({}, this.item), { RoomsMapping: mapping, status: 'Active', id: id })];
            }
        }
        // Emit the fetchApi event
        this.fetchApi.emit(this.listData);
        // Reset mode, sidebar, and state
        this.mode = 'create';
        this.activeTab = 'General Settings';
        const sidebar = document.querySelector('ir-sidebar');
        if (sidebar) {
            sidebar.open = !sidebar.open;
        }
        this._reset();
    }
    _reset() {
        this.item = null;
        this.mode = 'create';
        this.activeTab = 'General Settings';
        this.selectedItem = null;
        this.anyChanges = false;
    }
    openSidebarHandler() {
        const sidebar = document.querySelector('ir-sidebar');
        sidebar.open = !sidebar.open;
        this.loader = true;
        this.mode = 'create';
        this.activeTab = 'General Settings';
        setTimeout(() => {
            this.loader = false;
        }, 2000);
    }
    requestDelete(e) {
        this.fetchApi.emit(e.detail);
    }
    changeStatusHandler(event) {
        this.fetchApi.emit(event.detail);
    }
    componentDidLoad() {
        // Add an event listener to the ir-topbar component
        const openSidebar = document.querySelector('ir-topbar');
        openSidebar.addEventListener('openSidebar', () => {
            const sidebar = document.querySelector('ir-sidebar');
            sidebar.open = !sidebar.open;
            this.loader = true;
            this.mode = 'create';
            this.activeTab = 'General Settings';
            setTimeout(() => {
                this.loader = false;
            }, 2000);
        });
        const dropdown = document.querySelector('ir-list-item');
        dropdown.addEventListener('openSidebar', (e) => {
            if (e.detail.mode === 'edit') {
                this.mode = 'edit';
                this.selectedItem = e.detail.item;
                const sidebar = document.querySelector('ir-sidebar');
                sidebar.open = !sidebar.open;
            }
        });
        const modal = document.querySelector('ir-modal.exit');
        modal.addEventListener('confirmModal', () => {
            sidebar.open = false;
            modal.closeModal();
            this._reset();
        });
        const sidebar = document.querySelector('ir-sidebar');
        sidebar.addEventListener('irSidebarToggle', (event) => {
            if (event.detail == true && this.anyChanges) {
                if (this.listData) {
                    modal.openModal();
                }
            }
            else {
                sidebar.open = false;
                this._reset();
            }
        });
    }
    goNext() {
        const IrMapping = document.querySelector('ir-mapping');
        if (this.activeTab == 'General Settings') {
            //if (!this.item.title || !this.item.channel || !this.item.property || !this.item.hotelId) {
            if (!this.item.title || !this.item.channel || !this.item.property) {
                const alertModal = document.querySelector('ir-modal.alertModal-manager');
                if (this.mode === 'edit') {
                    return;
                }
                alertModal.openModal();
            }
            else {
                this.requestApiDestinationHierarchy.emit(this.item.property);
                this.activeTab = 'Mapping';
                this.loader = true;
                setTimeout(() => {
                    this.loader = false;
                }, 2000);
            }
        }
        else if (this.activeTab == 'Mapping') {
            IrMapping._onSaveMapping();
        }
    }
    _onSwitchTab(tab) {
        if (this.activeTab == 'General Settings') {
            //if (!this.item.title || !this.item.channel || !this.item.property || !this.item.hotelId) {
            if (!this.item.title || !this.item.channel || !this.item.property) {
                const alertModal = document.querySelector('ir-modal.alertModal-manager');
                if (this.mode == 'edit') {
                    return;
                }
                alertModal.openModal();
            }
            else {
                this.activeTab = tab;
                this.loader = true;
                setTimeout(() => {
                    this.loader = false;
                }, 2000);
            }
        }
        else if (this.activeTab == 'Mapping') {
            this.activeTab = tab;
            this.loader = true;
            setTimeout(() => {
                this.loader = false;
            }, 2000);
        }
    }
    render() {
        return [
            index.h("div", { key: '6805616032ee5a5f42d0091a6ec64d3f3c3370ba', id: "container" }, index.h("div", { key: 'eff67b996207717f13b2d0bdfd78dc392a6707d4', class: "card" }, index.h("ir-topbar", { key: '0c855b007513114a3d09fd7b03407b1e2f6da8e1' }), index.h("ir-list-item", { key: '5d27b9cccd98e3c926578a64071e47d74125cb85', id: "ir-list-item", listData: this.listData, dropdownData: this.dropdownData }))),
            index.h("ir-sidebar", { key: '10260e04e48ec6fbb32ff167e0bdc3215a013637', side: "right", class: "" }, index.h("div", { key: '9688ac65c1483faf18631f022e2adc5bf9c582ca', class: "container pt-1" }, index.h("h5", { key: 'b72e0377da453fba32479fe9f87f544b17cfcf5d', class: "font-weight-bold" }, this.mode === 'create' ? 'Create' : 'Edit', " Channel")), index.h("ul", { key: 'f0b04b7a9e6bb3b599bf929b5d47c1654f8c3357', class: "list-group list-group-horizontal mb-2" }, this.tabs.map(tab => (index.h("li", { class: this.activeTab === tab ? 'active' : '' }, index.h("a", { class: "", "data-mdb-ripple-color": "dark", onClick: () => {
                    this._onSwitchTab(tab);
                } }, tab))))), this.loader ? (index.h("div", { class: "loader-position" }, index.h("ir-loader", null))) : (index.h("span", null, this.activeTab == 'General Settings' &&
                index.h("ir-general-settings", { allowed_channels: this.allowed_channels, allowed_MinStayTypes: this.allowed_MinStayTypes, allowed_properties: this.allowed_properties, data: this.selectedItem, mode: this.mode, class: "mb-3" }), this.activeTab == 'Mapping' &&
                index.h("ir-mapping", { hostRoom: this.hostRoom, class: "mb-3", mapReference: this.mapReference, map: this.mode === 'edit' ? this.selectedItem.RoomsMapping : null }))), index.h("div", { key: 'e56ccdbebac95097eb40f0bc27c3befec28a8803', class: "btn-position" }, index.h("button", { key: '7d9090264b120240205210f84f6f8d09b72d1733', type: "button", class: "btn btn-primary btn-sm btn-block", onClick: () => this.goNext() }, this.activeTab == 'General Settings' ? 'Next' : 'Save'))),
            index.h("ir-modal", { key: 'b3a2122de581113e2b253d7dc960b521f2c71803', class: 'exit', modalTitle: "Exit without saving?", modalBody: "All unsaved changes will be lost.", iconAvailable: true, icon: "ft-alert-circle warning h1" }),
            index.h("ir-modal", { key: 'b7b16a8c6712d77276a8283898de592c7b285ff6', class: "alertModal-manager", modalTitle: "Please fill all the fields!", modalBody: "There are fields that are not filled yet.", icon: "ft-alert-circle warning h1", iconAvailable: true, leftBtnActive: false, btnPosition: "center", rightBtnText: "Close", rightBtnColor: "primary" }),
        ];
    }
};
IrChannelManager.style = IrChannelManagerStyle0;

exports.ir_channel_manager = IrChannelManager;

//# sourceMappingURL=ir-channel-manager.cjs.entry.js.map