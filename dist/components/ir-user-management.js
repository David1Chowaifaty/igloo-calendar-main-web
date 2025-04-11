import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { R as RoomService } from './room.service.js';
import { d as defineCustomElement$h } from './ir-button2.js';
import { d as defineCustomElement$g } from './ir-icon2.js';
import { d as defineCustomElement$f } from './ir-icons2.js';
import { d as defineCustomElement$e } from './ir-input-text2.js';
import { d as defineCustomElement$d } from './ir-interceptor2.js';
import { d as defineCustomElement$c } from './ir-loading-screen2.js';
import { d as defineCustomElement$b } from './ir-modal2.js';
import { d as defineCustomElement$a } from './ir-password-validator2.js';
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
        this.users = [
            {
                id: 1,
                mobile: '1234567890',
                name: 'Alice Johnson',
                note: 'Admin user',
                password: 'securePass1',
                property_id: 101,
                phone_prefix: '+1',
                username: 'alicej',
                email: 'alice.johnson@example.com',
                is_active: true,
                last_signed_in: '2025-04-08',
                created_at: '2023-09-15',
                role: 'super admin',
            },
            {
                id: 2,
                mobile: '2345678901',
                name: 'Bob Smith',
                note: 'Temporary access',
                password: 'securePass2',
                property_id: 102,
                phone_prefix: '+44',
                username: 'bobsmith',
                email: 'bob.smith@example.com',
                is_active: false,
                last_signed_in: '2025-03-27',
                created_at: '2023-11-20',
                role: 'admin',
            },
            {
                id: 3,
                mobile: '3456789012',
                name: 'Carla Reyes',
                note: 'Manager account',
                password: 'securePass3',
                property_id: 103,
                phone_prefix: '+61',
                username: 'carlar',
                email: 'carla.reyes@example.com',
                is_active: true,
                last_signed_in: '2025-02-19',
                created_at: '2024-01-05',
                role: 'frontdesk',
            },
            {
                id: 4,
                mobile: '4567890123',
                name: 'Daniel Kim',
                note: 'Viewer only',
                password: 'securePass4',
                property_id: 104,
                phone_prefix: '+81',
                username: 'danielk',
                email: 'daniel.kim@example.com',
                is_active: false,
                last_signed_in: '2025-01-10',
                created_at: '2022-08-23',
                role: 'frontdesk',
            },
            {
                id: 5,
                mobile: '5678901234',
                name: 'Eva Liu',
                note: 'Editor role',
                password: 'securePass5',
                property_id: 105,
                phone_prefix: '+86',
                username: 'evaliu',
                email: 'eva.liu@example.com',
                is_active: true,
                last_signed_in: '2025-04-01',
                created_at: '2023-12-12',
                role: 'admin',
            },
        ];
        this.token = new Token();
        this.roomService = new RoomService();
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
            const requests = [this.roomService.fetchLanguage(this.language)];
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
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex  pb-2 align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Extranet Users")), h("div", { class: "", style: { gap: '1rem' } }, h("ir-user-management-table", { class: "card", isSuperAdmin: this.isSuperAdmin, users: this.users })))));
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
        "isLoading": [32],
        "users": [32],
        "property_id": [32]
    }, undefined, {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-user-management", "ir-button", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-loading-screen", "ir-modal", "ir-password-validator", "ir-select", "ir-sidebar", "ir-switch", "ir-title", "ir-toast", "ir-user-form-panel", "ir-user-management-table", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-user-management":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUserManagement$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-loading-screen":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-password-validator":
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