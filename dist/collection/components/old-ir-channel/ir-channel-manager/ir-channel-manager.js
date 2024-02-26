import { h } from "@stencil/core";
import { v4 as uuidv4 } from "uuid";
export class IrChannelManager {
    constructor() {
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
        const id = uuidv4();
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
            h("div", { key: '8d4ada6aaacd85a2931a01825867b38749edfde6', id: "container" }, h("div", { key: '8006c60935180226ceab4beec5ad2585e074146b', class: "card" }, h("ir-topbar", { key: '1fdf0259ff29e1f0ca4d689f0519a2fa574516da' }), h("ir-list-item", { key: 'ebdcab8d5af1f95bb8caac3cb977fc55ede5723c', id: "ir-list-item", listData: this.listData, dropdownData: this.dropdownData }))),
            h("ir-sidebar", { key: '493dd41b8e56d65f68c1585a01e3bf1ecb7d445c', side: "right", class: "" }, h("div", { key: 'dca77faeb93751c56b0bee4fe822caf29aad88c0', class: "container pt-1" }, h("h5", { key: '51a81567034efe5dcdf0ce21fc07dc2fb1acab88', class: "font-weight-bold" }, this.mode === 'create' ? 'Create' : 'Edit', " Channel")), h("ul", { key: '0aa7937cd8898669298ea10d820dd795874a136e', class: "list-group list-group-horizontal mb-2" }, this.tabs.map(tab => (h("li", { class: this.activeTab === tab ? 'active' : '' }, h("a", { class: "", "data-mdb-ripple-color": "dark", onClick: () => {
                    this._onSwitchTab(tab);
                } }, tab))))), this.loader ? (h("div", { class: "loader-position" }, h("ir-loader", null))) : (h("span", null, this.activeTab == 'General Settings' &&
                h("ir-general-settings", { allowed_channels: this.allowed_channels, allowed_MinStayTypes: this.allowed_MinStayTypes, allowed_properties: this.allowed_properties, data: this.selectedItem, mode: this.mode, class: "mb-3" }), this.activeTab == 'Mapping' &&
                h("ir-mapping", { hostRoom: this.hostRoom, class: "mb-3", mapReference: this.mapReference, map: this.mode === 'edit' ? this.selectedItem.RoomsMapping : null }))), h("div", { key: 'eb37c655e85d2eeba062752887be0383db724aa1', class: "btn-position" }, h("button", { key: '2f8c81c47b0747122fa3fbf23dcf4f4bd5c15190', type: "button", class: "btn btn-primary btn-sm btn-block", onClick: () => this.goNext() }, this.activeTab == 'General Settings' ? 'Next' : 'Save'))),
            h("ir-modal", { key: 'eaba7d79c4d92e764220324117b143955ca1185f', class: 'exit', modalTitle: "Exit without saving?", modalBody: "All unsaved changes will be lost.", iconAvailable: true, icon: "ft-alert-circle warning h1" }),
            h("ir-modal", { key: '351a65305efcf514db6ade906d18fdf3c1c8f01a', class: "alertModal-manager", modalTitle: "Please fill all the fields!", modalBody: "There are fields that are not filled yet.", icon: "ft-alert-circle warning h1", iconAvailable: true, leftBtnActive: false, btnPosition: "center", rightBtnText: "Close", rightBtnColor: "primary" }),
        ];
    }
    static get is() { return "ir-channel-manager"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-channel-manager.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-channel-manager.css"]
        };
    }
    static get properties() {
        return {
            "hostRoom": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RoomType[]",
                    "resolved": "RoomType[]",
                    "references": {
                        "RoomType": {
                            "location": "import",
                            "path": "../../../sample/channel/data",
                            "id": "src/sample/channel/data.tsx::RoomType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "mapReference": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RoomType[]",
                    "resolved": "RoomType[]",
                    "references": {
                        "RoomType": {
                            "location": "import",
                            "path": "../../../sample/channel/data",
                            "id": "src/sample/channel/data.tsx::RoomType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "allowed_properties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "selectOption[]",
                    "resolved": "selectOption[]",
                    "references": {
                        "selectOption": {
                            "location": "import",
                            "path": "../../../common/models",
                            "id": "src/common/models.ts::selectOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "allowed_channels": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "selectOption[]",
                    "resolved": "selectOption[]",
                    "references": {
                        "selectOption": {
                            "location": "import",
                            "path": "../../../common/models",
                            "id": "src/common/models.ts::selectOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "allowed_MinStayTypes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "selectOption[]",
                    "resolved": "selectOption[]",
                    "references": {
                        "selectOption": {
                            "location": "import",
                            "path": "../../../common/models",
                            "id": "src/common/models.ts::selectOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "dropdownData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{\r\n    name: string;\r\n    icon: string;\r\n    children: {\r\n      name: string;\r\n      icon: string;\r\n    }[];\r\n  }",
                    "resolved": "{ name: string; icon: string; children: { name: string; icon: string; }[]; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "{\r\n    name: 'Action',\r\n    icon: '',\r\n    children: [\r\n      {\r\n        name: 'Edit',\r\n        icon: 'ft-edit',\r\n      },\r\n      {\r\n        name: 'Delete',\r\n        icon: 'ft-trash',\r\n      },\r\n      {\r\n        name: 'Disable',\r\n        icon: 'ft-alert-triangle',\r\n      },\r\n    ],\r\n  }"
            },
            "listData": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "ChannelManager[]",
                    "resolved": "ChannelManager[]",
                    "references": {
                        "ChannelManager": {
                            "location": "import",
                            "path": "../../../sample/channel/data",
                            "id": "src/sample/channel/data.tsx::ChannelManager"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "loader": {},
            "mode": {},
            "activeTab": {},
            "selectedItem": {},
            "item": {},
            "anyChanges": {}
        };
    }
    static get events() {
        return [{
                "method": "fetchApi",
                "name": "fetchApi",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ChannelManager[]",
                    "resolved": "ChannelManager[]",
                    "references": {
                        "ChannelManager": {
                            "location": "import",
                            "path": "../../../sample/channel/data",
                            "id": "src/sample/channel/data.tsx::ChannelManager"
                        }
                    }
                }
            }, {
                "method": "requestApiDelete",
                "name": "requestApiDelete",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "requestApiDestinationHierarchy",
                "name": "requestApiDestinationHierarchy",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "connectionOff",
                "method": "connectionOffHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "sendToParent",
                "method": "sendToParentHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "sendMappingToParent",
                "method": "sendMappingToParentHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "createNew",
                "method": "openSidebarHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "sendDelete",
                "method": "requestDelete",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "changeStatus",
                "method": "changeStatusHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-channel-manager.js.map
