import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$j } from './ir-autocomplete2.js';
import { d as defineCustomElement$i } from './ir-autocomplete-option2.js';
import { d as defineCustomElement$h } from './ir-booking-status-tag2.js';
import { d as defineCustomElement$g } from './ir-custom-button2.js';
import { d as defineCustomElement$f } from './ir-dialog2.js';
import { d as defineCustomElement$e } from './ir-drawer2.js';
import { d as defineCustomElement$d } from './ir-empty-state2.js';
import { d as defineCustomElement$c } from './ir-input2.js';
import { d as defineCustomElement$b } from './ir-menu2.js';
import { d as defineCustomElement$a } from './ir-menu-drawer2.js';
import { d as defineCustomElement$9 } from './ir-menu-group2.js';
import { d as defineCustomElement$8 } from './ir-menu-item2.js';
import { d as defineCustomElement$7 } from './ir-notifications2.js';
import { d as defineCustomElement$6 } from './ir-pms-payment-due-alert2.js';
import { d as defineCustomElement$5 } from './ir-pms-search2.js';
import { d as defineCustomElement$4 } from './ir-property-switcher2.js';
import { d as defineCustomElement$3 } from './ir-property-switcher-dialog-content2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';

const irPmsPageCss = ".app-header.sc-ir-pms-page{position:sticky;top:0;z-index:999}.ir-nav-link.sc-ir-pms-page,.nav-sublink.sc-ir-pms-page{all:unset;display:block;box-sizing:border-box;color:var(--wa-color-text-normal);padding:0.5rem 0}.ir-nav-link.sc-ir-pms-page:hover,.nav-sublink.sc-ir-pms-page:hover{color:var(--wa-color-text-normal);text-decoration:underline;-webkit-text-decoration:underline;text-decoration-thickness:0.09375em;text-underline-offset:0.125em}.ir-nav-link.sc-ir-pms-page:focus,.nav-sublink.sc-ir-pms-page:focus{outline:none}.ir-nav-link.sc-ir-pms-page:focus-visible,.nav-sublink.sc-ir-pms-page:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.nav-group.sc-ir-pms-page::part(header),.nav-group.sc-ir-pms-page::part(content){padding:0;border-radius:0}.nav-group.sc-ir-pms-page::part(content){padding:0rem 1rem;display:flex;flex-direction:column;gap:1rem}.app-header.sc-ir-pms-page{display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;background:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.app-header__left.sc-ir-pms-page,.app-header__right.sc-ir-pms-page{display:flex;align-items:center}.app-header__right.sc-ir-pms-page{margin-left:auto}.app-header__center.sc-ir-pms-page{flex:1;display:flex;justify-content:center;position:static}.header-search.sc-ir-pms-page{width:100%}.header-desktop-only.sc-ir-pms-page,.header-property-switcher.sc-ir-pms-page{display:none}@media (min-width: 768px){.app-header.sc-ir-pms-page{position:relative;padding:1rem 1.5rem}.app-header__center.sc-ir-pms-page{position:absolute;left:50%;transform:translateX(-50%);width:100%;max-width:420px;pointer-events:auto}.header-search.sc-ir-pms-page{max-width:420px}.header-property-switcher.sc-ir-pms-page{display:inline-flex}}@media (min-width: 1024px){.header-desktop-only.sc-ir-pms-page{display:inline-flex}.header-search.sc-ir-pms-page{max-width:700px}}@media (min-width: 1440px){.app-header__center.sc-ir-pms-page{max-width:700px}}.app-header.sc-ir-pms-page{position:sticky;top:0}.menu-footer.sc-ir-pms-page{display:flex;flex-direction:column;width:100%;text-align:start}.menu-footer.sc-ir-pms-page h4.sc-ir-pms-page{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.logo.sc-ir-pms-page{height:24px}";
const IrPmsPageStyle0 = irPmsPageCss;

const IrPmsPage$1 = /*@__PURE__*/ proxyCustomElement(class IrPmsPage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    propertyid;
    ticket;
    input;
    menuDrawerRef;
    notifications = [
        {
            id: '1',
            type: 'info',
            title: 'Welcome!',
            message: 'Your account has been created successfully.',
            date: hooks().format('YYYY-MM-DD'),
            hour: 10,
            minute: 10,
            read: false,
            dismissible: true,
        },
        {
            id: '2',
            type: 'warning',
            title: 'Storage Almost Full',
            message: 'You have used 90% of your storage. Please upgrade.',
            date: hooks().add(-1, 'days').format('YYYY-MM-DD'),
            hour: 1,
            minute: 10,
            read: false,
            dismissible: true,
            link: { href: '#', text: 'Upgrade now' },
        },
        {
            id: '3',
            type: 'success',
            title: 'Payment Received',
            message: 'Your invoice has been paid. Thank you!',
            date: hooks().add(-2, 'month').format('YYYY-MM-DD'),
            hour: 10,
            minute: 10,
            read: true,
            dismissible: true,
        },
    ];
    render() {
        return (h("div", { key: '5e818d80bf86ee9a0b84e223b8e44de0c3383e3b' }, h("header", { key: '2ff3cce92afa9d0bd0b33f8aa002fd91db0f4a08', class: "app-header" }, h("div", { key: '7084812572498c0b09e5189492e9e10b8f49d397', class: "app-header__left" }, h("ir-custom-button", { key: 'cc85c324ec241e456d1193149d98b06bf76da5e6', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '7fe4ad9f588cc8492d39be4d36ff0533aac7420a', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'f1ef1af37627234f0a5c6521a3530c975b433885', ticket: this.ticket })), h("div", { key: 'f112100e9c124a9ea4e7fdc5727d47a348d8e0a2', class: "app-header__center" }, h("ir-pms-search", { key: 'deaf4663a5abb8d8bd875ea6b26a1e9f6580615b', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '37bd5a5985a2b86e63152b132fd9d0d8265eb402', class: "app-header__right" }, h("ir-custom-button", { key: 'd73af79b2fc21abf44a056168a2129a93ac9ec4d', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'ec9d6a8595d94eeb41adfce1183f747faa98b04b', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '05f6160c8834cca5e655d617f95ee785286446c4', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '69cdcbce29ba59cbe508bd8eb3d62f91f9e40575', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b3f19e15293f9ce8a5e084e3037294a0ef63c856', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'cd651a1626320ba1338880ddd7d5d0261f84ecfb', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'f9978f9698bf604203ca34f9792ea60cfbe179e3', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '2ef89d69e7069e79b23d99bef74db336ff136e08', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e0855840a91ab023f7231ddfbfe71cfe980f26b6', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'ead69445b8a73bf1faaef20b09cc0e7d4b6f8a4b', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'a2e3fc4782b907769849eadf0dc793c57c09ce9e', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '995255dbfb98c3aa89da6f74070ed191a9120308', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '94d61dc4977062968a061589b19345f1150eb435', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'a447719446b81950620e63b6b4fc0d3115a384ca', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c725cbd81893ecd8f824d2680d53ca859fe4aca7', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '73f12c8da4d454aa6d9ba4ce6290a0e415b98b8e', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '2df3d358f74bea9e9e9f3e81c0372e22626a1f8d' }, h("wa-avatar", { key: '4200634c51f25941515a78cd5639ff8fda2e83b7', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'e5b673454601a0479e5e920eab0c7067dcf8f94e' }, h("wa-icon", { key: 'edfd0d775ee669ffdc1aec9df179b5fd9f68d711', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '04dd80ffb0a88456d5b4cdcca0497c25eff895d1' }, h("wa-icon", { key: '873cb65b3de5be341c10291b369715e3bc100355', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'ed92f9ae8b344fae57f15a0619208f6db42412a7', disabled: true }, h("wa-icon", { key: 'd317fd3c86cf2630b9b97591454de626904ccae6', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '4f01999af2785de4586646e04948637d0385056b' }), h("wa-dropdown-item", { key: '345ed46540ecd9b8d139a074254417e3dc4c6cd8' }, h("wa-icon", { key: '4e556e15637754e187d2047e7e9accbc58a95141', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '2bbf492da7e26fec27e91f359fe45964dcee8448' }, h("wa-icon", { key: '3fac77b6c106b9f861d88a0eede21f44d6fdb2e5', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '8596a89702b43a9444c8836e16a3579e9a626010' }), h("wa-dropdown-item", { key: '379ac78ad57477d6890ce00275c4b78bb5a2d025' }, h("wa-icon", { key: 'd979d5090fc488525e6d2a16b899c6934c417ba0', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '51158c8b04f1bf157587fe4f024c1081ece4d3d1' }), h("wa-dropdown-item", { key: '445e9362812805c5c30d55dc1f3141f85928ce36', variant: "danger" }, h("wa-icon", { key: 'e90c43da6f2f06145ca80d1974ad90a0b90e189f', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '324221cd4f35aad304673229d7eae508986f2669', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '1dd2e4bd7532846a4460cf608d03b85ebffb42fa', slot: "label" }, h("img", { key: '5498160b6f863f1f69c1f73f80332c10affc8e9c', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '879eea94ddf758bbe0a457f820bcb3b691392a9e' }, h("ir-property-switcher", { key: '3a5b786011ec8d5c8052685846da48165f1d0b49', ticket: this.ticket }), h("ir-menu-item", { key: '9850d49ab02202599f05fe4e17d6f931a0c6a5a3', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'ae7a5563c1e2014d0c881d41cad05183af3120bc', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'bb3df6d0e565e69aa484e12540d53e1d510d94a6', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '6f4bf9e6a4750a0005a04c4c98ba1832bf172604', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'be535327b68a691939d5e584392d39a206b8bc7e', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'd81e175f96dc9ce9cd9133d7a83f21da323f34aa' }), h("p", { key: '72cd928a229b5ea6978039bd630f67388349785e', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'a62f2f631c14c470889a4db3f34410b0179e0889', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'd3084bbaad18bc7c62b63e0203c726859e777371', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '01d9ede4fa716bd80e9de94cdf8df3f04b6bd602', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'd65d3663fa8bd0cd0233548c987c0104f770de0c', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '5b4345f832c6983116917a687a7cf41750c05afb', groupName: "sub-property" }, h("ir-menu-item", { key: '8b2f422a26d3d44546c61b653f70fc4e4849ea5c', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '9f4eace010a14d95807d9e1e2892be8729cf6af6', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'b0eadba7204ec52caf7dcc157479aeddbca7b37d', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '22c6c4b91bf028cdb20b82e720368e6ac9a5de01', groupName: "sub-property" }, h("ir-menu-item", { key: '6bb94f448215f6f0fb37fa421688497b53bdcf88', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '02cdfb57e3d56210587c379e7dad227e7bef0474', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'df0e62855076c3cae4b4ca396c93753a24f01050', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '205c0134319d8ff6e775fef16ae55520b5da23fb', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '9716e7f5e2806b833f8e2f7d70da1c3054c8335f', groupName: "sub-property" }, h("ir-menu-item", { key: 'dea0a7b71dd5fac27d64a9b7ee8c2eb76edb8b32', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '60cc72244e3f43d351d86bc4ebc3911f94d4e181', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'df98085a2d4247b6dce159bc9477bc1e1b77e66f', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'a10447eb69fdcf830e71125b881baa85c3b61029', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '5a782472d4bc76efc9ac0f7f0a3d1f98359c5935', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'eea01078d36e0b1d159132cecc321caa699adf4d', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '5aefb48c9b90f52ecf648d8b00008d5123b4696b', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '52eb4b938f3725a084f4e1f3c1d80c1aebd6633e', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '4b6063d9840c291faba98deb0d913939a939f7f9', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'd98ee6e25def3b180e17022b852d22f155face3d', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: 'a98a84f42f77ba2ce1720f0b3fb435bafcc2b8e3', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '42cbad66875c5dd9acd739bcd6ededb65d8c57e2', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '87aaebfa7a5e7f0f71197c46808106c486b093d4', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: 'a8691e997ddeb951c443b3890637cec237d4ceda', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'ef4c45f37d1ee2d026b1efa836d6a2a493b9c2d8', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '7bb1df36aa4c0e731f50778186139d9b107901c8', groupName: "sub-property" }, h("ir-menu-item", { key: 'c436b524d5ba595f018a08d2a931639f6938b7db', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '7e5cc8e89450e99f586da5dba8bbd7210f50d677', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'ac2523c28554ad3be5dc3ee8d81fe0f30b826685', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '5167f44ed88f3525b3020d0127a3648e440d73c7', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '36a6add43c4ed656c15bb8b177703cef632baa36', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '2ed50d14c2a54a8889f59b23cc50c22df11bbd69', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '9162b8da9504cdf08aae1322892344cb4ed113c4', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '77b55f40ac2f877ece9c9e21e9e4071302bbd69a', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: 'afecf61aebf11936f33632606cf9fca309e404e2', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: 'd80773daa9cf76d192ac27046eeb94e2a564a834', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '25df92b5bd69d87fd4ab69097bd0a7a5d6ce8e32' }, "A35"), h("span", { key: 'cdb37c545442a95100ccb89ed4d314679df216d4', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '6ea891736f0ca4e4292e3658e312db71b3792331' }, h("ir-pms-payment-due-alert", { key: '03a6801e3456ae51b454412686e0dce0ae8da1ea', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '1bd473d569030bd8942fd31e5aff0fbd2131c81c', style: { height: '200vh' } }))));
    }
    static get style() { return IrPmsPageStyle0; }
}, [2, "ir-pms-page", {
        "propertyid": [1],
        "ticket": [1],
        "notifications": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-pms-page", "ir-autocomplete", "ir-autocomplete-option", "ir-booking-status-tag", "ir-custom-button", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-input", "ir-menu", "ir-menu-drawer", "ir-menu-group", "ir-menu-item", "ir-notifications", "ir-pms-payment-due-alert", "ir-pms-search", "ir-property-switcher", "ir-property-switcher-dialog-content", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pms-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPmsPage$1);
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-autocomplete-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-booking-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-menu-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-menu-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-menu-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-notifications":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-pms-payment-due-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-pms-search":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-property-switcher":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-property-switcher-dialog-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrPmsPage = IrPmsPage$1;
const defineCustomElement = defineCustomElement$1;

export { IrPmsPage, defineCustomElement };

//# sourceMappingURL=ir-pms-page.js.map