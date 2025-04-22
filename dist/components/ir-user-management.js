import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { B as BookingService } from './booking.service.js';
import { R as RoomService } from './room.service.js';
import { U as UserService } from './user.service.js';
import { d as defineCustomElement$i } from './ir-button2.js';
import { d as defineCustomElement$h } from './ir-icon2.js';
import { d as defineCustomElement$g } from './ir-icons2.js';
import { d as defineCustomElement$f } from './ir-input-text2.js';
import { d as defineCustomElement$e } from './ir-interceptor2.js';
import { d as defineCustomElement$d } from './ir-loading-screen2.js';
import { d as defineCustomElement$c } from './ir-modal2.js';
import { d as defineCustomElement$b } from './ir-password-validator2.js';
import { d as defineCustomElement$a } from './ir-reset-password2.js';
import { d as defineCustomElement$9 } from './ir-select2.js';
import { d as defineCustomElement$8 } from './ir-sidebar2.js';
import { d as defineCustomElement$7 } from './ir-switch2.js';
import { d as defineCustomElement$6 } from './ir-title2.js';
import { d as defineCustomElement$5 } from './ir-toast2.js';
import { d as defineCustomElement$4 } from './ir-user-form-panel2.js';
import { d as defineCustomElement$3 } from './ir-user-management-table2.js';
import { d as defineCustomElement$2 } from './requirement-check2.js';

const irUserManagementCss = ".sc-ir-user-management-h{display:block;height:100%}";
const IrUserManagementStyle0 = irUserManagementCss;

const IrUserManagement$1 = /*@__PURE__*/ proxyCustomElement(class IrUserManagement extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.language = '';
        this.ticket = '';
        this.isSuperAdmin = true;
        this.isLoading = true;
        this.users = [];
        this.token = new Token();
        this.roomService = new RoomService();
        this.userService = new UserService();
        this.bookingService = new BookingService();
        this.userTypes = new Map();
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.fetchUserTypes(), this.fetchUsers(), this.roomService.fetchLanguage(this.language)];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUsers();
    }
    async fetchUsers() {
        const users = await this.userService.getExposedPropertyUsers();
        this.users = [...users].sort((u1, u2) => {
            const priority = (u) => {
                const t = u.type.toString();
                if (t === '1')
                    return 0;
                if (t === '17')
                    return 1;
                return 2;
            };
            //sort by priority
            const p1 = priority(u1), p2 = priority(u2);
            if (p1 !== p2) {
                return p1 - p2;
            }
            //sort by user id
            if (p1 === 1) {
                const id1 = u1.id.toString(), id2 = u2.id.toString(), me = this.userId.toString();
                if (id1 === me)
                    return -1; // u1 is me → goes before u2
                if (id2 === me)
                    return 1; // u2 is me → u1 goes after
            }
            // 3) sort by username
            return u1.username.localeCompare(u2.username);
        });
    }
    async fetchUserTypes() {
        var _a, _b;
        const entries = await this.bookingService.getSetupEntriesByTableName('_USER_TYPE');
        for (const e of entries) {
            this.userTypes.set(e.CODE_NAME.toString(), e[`CODE_VALUE_${(_b = (_a = this.language) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : 'EN'}`]);
        }
    }
    render() {
        var _a, _b;
        if (this.isLoading) {
            return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("ir-loading-screen", null)));
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex  pb-2 align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Extranet Users")), h("div", { class: "", style: { gap: '1rem' } }, h("ir-user-management-table", { userTypeCode: this.userTypeCode, haveAdminPrivileges: ['1', '17'].includes((_a = this.userTypeCode) === null || _a === void 0 ? void 0 : _a.toString()), userTypes: this.userTypes, class: "card", isSuperAdmin: ((_b = this.userTypeCode) === null || _b === void 0 ? void 0 : _b.toString()) === '1', users: this.users })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrUserManagementStyle0; }
}, [2, "ir-user-management", {
        "language": [1],
        "ticket": [1],
        "propertyid": [2],
        "p": [1],
        "isSuperAdmin": [4, "is-super-admin"],
        "userTypeCode": [8, "user-type-code"],
        "userId": [8, "user-id"],
        "isLoading": [32],
        "users": [32],
        "property_id": [32]
    }, [[0, "resetData", "handleResetData"]], {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-user-management", "ir-button", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-loading-screen", "ir-modal", "ir-password-validator", "ir-reset-password", "ir-select", "ir-sidebar", "ir-switch", "ir-title", "ir-toast", "ir-user-form-panel", "ir-user-management-table", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-user-management":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUserManagement$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-sidebar":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-user-form-panel":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-user-management-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "requirement-check":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrUserManagement = IrUserManagement$1;
const defineCustomElement = defineCustomElement$1;

export { IrUserManagement, defineCustomElement };

//# sourceMappingURL=ir-user-management.js.map