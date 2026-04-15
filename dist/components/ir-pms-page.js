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
        return (h("div", { key: '00df18a61df6d603767e16c9ce621fc7425c6907' }, h("header", { key: 'd990b805fbfa8eaeb8ee9cf98cf0808ce91d9da7', class: "app-header" }, h("div", { key: 'f7fb82555168ce524f596aa254edfafc19b72abb', class: "app-header__left" }, h("ir-custom-button", { key: 'c6e2eecec28c69e9882db60509e1612ce4ea10b2', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '634a2e4b726ba18217a6166169484289dafadc42', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '2c2c735c87e0e828f3373bd88e62aa3b36d73f0c', ticket: this.ticket })), h("div", { key: '14267e22ddce8acd59ec9b1d14117fc67f8efb04', class: "app-header__center" }, h("ir-pms-search", { key: '3627fcf51646f7fe3dbca6b06ab5b2eb2c37edf1', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '174d735635f2cf76669964c2d785a2032e048bc0', class: "app-header__right" }, h("ir-custom-button", { key: 'e9a60328c1f1ce7f60ac2c01d5b0758e3f54b6cf', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '398a0c134487e7f1d7061b6a4e3811cd85e7863c', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '5f6124855cb944ebeb442c323f70e447108b75e5', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '82543b9a7ec2b62b934dccf039aea7b45db2ebd3', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'a05608062bfaad5f190b2c74de6eaf8c875b5b56', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '482458ce102269be84c8ab80017f63134a1a5b68', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '3f9f12b6497bb50f6e5b0c3ca7d5a47d8c8ade83', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'f1eea7b7fcb250a6df695ee0f84a4633994443e4', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '5661da0e18fe31c4202264b2d51cebc8b5a70e4c', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '5037b676261bb247d40b337700c6a5f446679cad', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '7afea135c66e79e8973ea75e766d3a87d74ba393', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'ad16c5f5aa7b68fef36b6c8b75110dee5d8ef6c2', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '6c244471978138c1a2d89eaa8673de052be487a3', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '9a0b00f61f7ee0555c95c7caa077eb802e5fd375', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '86befd8d507f390d7fe5972df0981493de5b2471', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '7f3d1968b891bcf903f4c49f962443c88a023f8a', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '21f6a202c28e1e2ac2ed7f979980d193c9b05037' }, h("wa-avatar", { key: '1860a9e970e8c24c1764c58203267462b18e307c', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '0c3b84be058134a1ae0fa2965f97405d09d5ae8a' }, h("wa-icon", { key: 'a33024dfd31085328dedafd66db023c51117b6ea', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'a5451e6affe1690a3ba149910b01bef26735f0e5' }, h("wa-icon", { key: '85184b2de57d7d67b78977863e476c7533e4b8f9', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'bdd1f0d37285c4b49b6144afa02eb5eb8f14e7c7', disabled: true }, h("wa-icon", { key: '731953ef5cad6994e3c779aa2af244843b375a1f', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '4149be8b68361f421f80f96eb82bb340769857a7' }), h("wa-dropdown-item", { key: '540088e667fedfb5d03323aea0535fcdb3846660' }, h("wa-icon", { key: '8b4a1a8107846332ada4ab6a7662ca5884560a60', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'ce878289e98162ba27192b974b380cdf379b35ef' }, h("wa-icon", { key: '48edc8d2b7894a16cdfaf509cf4855f889e8f584', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '6d6bfcdfa8747fd02be8405c5e40dacde97df3e6' }), h("wa-dropdown-item", { key: '0a47f26532d567e6aff4a0f328bc7cffe0f89b8e' }, h("wa-icon", { key: '43940c5ff514c1c5cc25e2bf265e0da0cbf558f9', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'f77fd6a52ad7b40ccbc677fd585c5bd9e3fd240a' }), h("wa-dropdown-item", { key: '71134363160fd9932425259660cede5544c3c312', variant: "danger" }, h("wa-icon", { key: '25d43e7313a8fadd6d319b6b948dcc4bf8294112', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '5688cff6f33783283e7020dcf677203d2a4fdd55', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '70d207c2804317ec7c7b8c5ed6849ba3c6d2e046', slot: "label" }, h("img", { key: '5e41d79f162842b738fd4f74b941a8036ce9df48', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'eddc9e8a9f47e3abe8f03d206aadf541978d6a6b' }, h("ir-property-switcher", { key: '5d033d636e6b1cba0e3fba1865390278ebc36bd0', ticket: this.ticket }), h("ir-menu-item", { key: 'e4c60be1fc2cebd85f92fd38d9e99e2600e25ca5', slot: "summary" }, "Property"), h("ir-menu-item", { key: '65fa2ceb82a09c6f0c994b2ac9a2ea288f8f32a8', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '818484508fab037ae78a95d99a67fd05d7afb3dd', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'd72cb5fdc7dff900520d471e1ee2e52f78183f52', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'fbf9c3af13b393fd0bf655079daf70479ed17efa', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '0b78561b9715e34f8916580505278239b574d2c6' }), h("p", { key: 'c910e9dd7a9867586b7588fb300e2a08432954ed', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '4c96e5691161b66478c4af122a8d416d56e502ab', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'dc2fb915d03c7c7847504b734fd9638bd401a426', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '548fe447110da1d7751ff155d6b6716c8db1abce', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '83d7d002c49e5fd14ef6f8e37c3b750298261242', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '9818061ffbdf29b4cbb538593f902e955d25f0ae', groupName: "sub-property" }, h("ir-menu-item", { key: 'fab8dfddc0a8b28ebd1108eb87385d585d05650d', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '819147858b23f4ba7869d7b32314c19f48c64dd6', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'd91226a159677d0e2e4defee322891565bbda23f', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'e1855bd46b53bca566b87224a2ff214efae0bd55', groupName: "sub-property" }, h("ir-menu-item", { key: '9a6802cdb416936917d0323fc03ae1b8cadd3ae1', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'b78d99a17bb7df2eba56087aab0616584b65f3a7', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '8ec7743d40d9a42cc0f394922a36a505f0477460', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'ea6391546548e1aa57a52f6429596a7f0aab4495', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '08681a5207ca7dc47f657c7b0762cdf5555471d0', groupName: "sub-property" }, h("ir-menu-item", { key: 'adf3f2bfc8eee9c2a450989fb906807aa4cd4114', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '8f496799782dadda1c0b9298caea1096edbd2e24', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'bd1cdcf716bc4b30da05d7e2d1674583c929f61a', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'f28b6706d8a851e8282186f81b9804f729230397', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '88da1950a5cf4cf4dcfba0008b8b001afe171504', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '564ec9e3297104c5ac9b09cc3cd8f3fcedea8dda', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'f9fc5ccfc3697fb5b7f54d2087831b26b2a5c726', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '01b24f7fe3a08e92799ee1a4c6c18cc8287d0da1', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '17ed850fc6e3060829295ac5ee92adc5a6b10565', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '287377bad14d654c8a1bd7f4f5f9cc2e31f03acf', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '1c4fa2f4568c29086937db0a1426806540ab8c0b', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '9efea38a49110f31b020aea0b78ad96f768cc520', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '7673e9184091c5732215d6db7d179f3c3718e5e4', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '18a8d899ab5095da387110e6615e701d2dabeac5', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '3188cf41e1d8e3c5e64970a1b20cd7993b5f9927', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'cc87d3d98508f352efecd8a12268346dcbb2147b', groupName: "sub-property" }, h("ir-menu-item", { key: '680e33c908c1a9b2741fdafe99cbb423bfec6a99', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '3c1be2ef78d62d748972d970adfb72f2bf88578b', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'ef9b6e5981d50ca4048ff2a60e37bb3e0a609029', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '48692cb2218865502fd1ec85f9f12e6ad51da403', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'e67598acb6025f3e306168ad8e2124b1ada7e1aa', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '69351f97a6d12349aeb41eca465dd585de461744', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '19cf15076de2d788fc6478220b14e688566e0592', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '00ac777b0b5cf187ab6cab9a17f24c4b3f1bdc96', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: 'ab5d203f3ccc6951129e7ab78685f3f57e59851d', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '0b3c0747c7eb121c5327c2140b0daf714e5f366d', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'dcbfb92de09eb38ff8d75915421480695b6b9a86' }, "A35"), h("span", { key: 'aafd41990d04da1fa689d5bb01ca1a5bbae0393a', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'cf1cfd78f17a1b204e61ae416c582960cee8ae33' }, h("ir-pms-payment-due-alert", { key: '3f142e949e7e0cef2cfbbe190b53ae9f06f2bace', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'fb3471a9955b462e1015676485e311ecea96f5cb', style: { height: '200vh' } }))));
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