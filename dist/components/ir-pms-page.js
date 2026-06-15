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
        return (h("div", { key: 'afc3b973970d3ae36ba60b245ee9f343dc031a40' }, h("header", { key: 'edf03caa2d6a5b044d7442f40aabea89e678f5b9', class: "app-header" }, h("div", { key: '86697415fe80dee1d97e5072035b76164be5c1c7', class: "app-header__left" }, h("ir-custom-button", { key: 'fedf3c7ee37400ec3257ed2eb5b63bb45dbb719c', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '3741ff2840e43a4b3ffd7674d55822033bb3c7a7', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'a453dd418daf8f05517ddd4650a0998d60963a99', ticket: this.ticket })), h("div", { key: '3c7f79ea98993941a65cbaa3e77918ff9710b833', class: "app-header__center" }, h("ir-pms-search", { key: '9ceb40620d787b7e5e5f6185e6adf27cb405e4f7', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '3b875d6f9947749dcbf4fb40e17f28750d50f1b6', class: "app-header__right" }, h("ir-custom-button", { key: '0cb4f909858bdb90301e747b61f90526b2849bc7', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '340ad1995aeff7b729620c21b1e38f9d8ddd7009', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'cc255202549dabebf5af2cf474f3a76b810d2bf9', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '5911b496c003e36c6bbd9d3167428ce62cb183c3', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'caf88b34aa2fc0681130464b95893b148e4484e8', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '4ddb1642baade4a8942dbf7b9b4a6ae6229de0a6', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'b5cbdc9c65de79cd5d8f939132194d0867118b1f', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b97a39f1b48a2c2bfa9110f68004426aafeb588f', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '815146146b1cbae9337b01786ff26c8bf58da77c', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '0775904c4b44b612bfcba7e256d2ff4253af2df3', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'f5911f0c9df8839e11aa722ad1eed0adbc0dcb42', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '0f6c50134a1243f11623c1cf73e8a0380c761647', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '1c2ca2f3a1acd517a1216f7ac91e1359916be8b4', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '5030ae796cdecf27d9b6a537584eb9d5d696a999', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '829fa0950a50b18df19230f2681300153d9bb8ef', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '6e4d3938a99dc326b8f0c5b11e5038ee1cc5cf30', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '02b3b111c309a59a1c383c25436d39e6fb5891fe' }, h("wa-avatar", { key: '79620ff1406c14afc4ce4fb58955080cda336805', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'f866edf91237416c053355aae9f079b3fbd7db4e' }, h("wa-icon", { key: '67bc60fe7634b694770ce1a4aed1983e88957816', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '3782daa6249d078f226d0fb921ee1dcf22281db4' }, h("wa-icon", { key: '1555f451dc98da583863d01ed6b44d0e6ef8a0e5', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '0a2a50c263995cda9c45031e585ef059e776ad86', disabled: true }, h("wa-icon", { key: '8b5b2b7733267728b81a6f92bd2a2e939d4a977a', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'eb46e42d03d51b2b07cd190dc46259471151e262' }), h("wa-dropdown-item", { key: 'b76a925dae16849b9fc3b61b616b4c19a19e3400' }, h("wa-icon", { key: '130abfa6f232adecbb105e4076468dfff8328f35', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'cf8c5368e8058bf370e9df767077fd79e27776d9' }, h("wa-icon", { key: '2da6105f8e58262c98a44d9ec8920f63401513e3', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '1e1d5137b5fe93b63afcb5b52ea8409c9e74dd2e' }), h("wa-dropdown-item", { key: '53ce048be62c2a722a72fd0764e15a02f6b012eb' }, h("wa-icon", { key: '6eb0ef2338821fcdf35f66bf5fe095188aecebbc', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'd86940033f496a0d5a26d08dd7f5c8c5c48c6779' }), h("wa-dropdown-item", { key: '3ab61063c237e2b4e60e3266409ba89e720143a2', variant: "danger" }, h("wa-icon", { key: 'd87b331bf5708669dc6c696b4095f287ab05a58a', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '7852f9197c26cbba977d2d3ce0cf6a9e290ff36e', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'e9e89f8a3358357af3119b6c092cb77e219bfd81', slot: "label" }, h("img", { key: '6da0c1b62396751d033b08e27c4ad60c0e71c8e7', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'd10e2686d475a767f1a5468171694364e6fa12bd' }, h("ir-property-switcher", { key: '0ca65dd00c2948abd92ddd5fe96497d34acd9c53', ticket: this.ticket }), h("ir-menu-item", { key: 'a1e833f3506b1ae14e8f6f300559b4f87abf8a92', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'e7e4265f32aaf4bfe3ef37b2cbbc559cd1f748af', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '4115d8345787482a83b7167750022509e4cf46b2', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'a62bdfcbeb2d4ae02236b88fa9344ceb9da17675', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '1d3b33d18c83c5f88421d80996a28a4a0303532e', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '03d6df0ee154dae686abf98f333b9c02d4f9a6a0' }), h("p", { key: '732822d61fb57fa41036eb27ea80da35e68c1e96', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '6653004df3cc3b796e80743c29758730aac6214e', slot: "summary" }, "Property"), h("ir-menu-item", { key: '69c7984c3789c9c544f7eb2dee3f63973b98b7d5', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '140c4acf033c386377b962e8319fe91bd595e653', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'fcfea101d6dca2340ba2d953270701ee4ddfda76', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '7f9f569df2502877f746fe840a4ff1fdee072074', groupName: "sub-property" }, h("ir-menu-item", { key: 'e375003b240b1f26cadeccca4fbfb87cb56f7240', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'e2e98ee8751caede576bbe2054e9c1184ba3ceeb', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '3cd2af8beb0f84dc1dd62e16b6468704b85c21d2', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '776162cdf8195429c9c86073386df163c1216513', groupName: "sub-property" }, h("ir-menu-item", { key: '78859221be56e95bc8d654657f6cd1aa005b2b2f', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'bbb1283ace8c322cfa2f583ae8f0773b0719f818', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '5a6dbeb80d697988e54d2d3ad28664ed43f6e874', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '19010cbfc68fb32c3ad19dd89d8ec54ebe38dc1a', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '0061d3a4fe34fb42d5eee1db45d9a297840d18be', groupName: "sub-property" }, h("ir-menu-item", { key: '6a020b648a3ee5754c2a20efb01c25a9f07c4815', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'da9e0e701faa4715e1e7f04efc5415f96fe66227', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'd51df34279452d253dd94c7b0335c4f426531f36', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '303b1771d8d24e3fc58cb97b7f229355a69d7b3b', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '0be6c1f25ca588f2feec470048ed8d6c356a9ee6', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '837ef9ae0f1bba388d52a145b075fa1d59340ca3', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '7b56ac73bd11ef9ef9c7def662839084ac5e3c35', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '766eab505ea98a6baf4907e94cec30f6792c9815', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '16c8a1761a37347ca18dc0a4284cd491f03e622a', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '899b53946e61b671523f3ad74eb80cbec47d583f', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '9d5d5ee8d6bddc55e989415cfaa8ec858c58167a', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'be18f4c4415bcb00f77c9ffb62289a182afce924', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '6cf0b6c6faa80010a9804fc6aa3aab854f385d89', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '64d4faaec685bd597c95fc6fb75d46609b72e544', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '046d86746f620c93f833ded9d541283c75e60bc7', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '0b079e3bbb9d15a5535b6fe52659be9b80569cda', groupName: "sub-property" }, h("ir-menu-item", { key: 'beb10d32da6e2cc94ceff3c4fcd16331e178cd08', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '3f5cd81c74c6dd9e6e3d73d19ff096fdec49c54f', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '155f5e84740ff7bfb1159c965f5cb7b3ffa6b758', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '1181c11e41b02346d75bf1a8fd84e34886ef3e29', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'f557be63d6a7574b18c9d9803e996444da340c63', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '74c1114e0bb098897b6a774551e2c71fdd96f12d', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '20edd31070927f3b32959b86b53aa787ec4f9042', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '7543853bd1783089b4fcad20a24059c73177b472', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '0197baaa8bbfdd60c3c6bad10a16e21d6fd9af14', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '87020df91fe645ac7a8767c4affca73befdd7df2', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '30fa67e4600fd60b510a06ee928b8143289ac64f' }, "A35"), h("span", { key: '0f69b704a2b2e0bca2c7ccdabf1c0249c0fffb49', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '2785ab4513338e9ef1d5184cbf1bf6cbcd0bdf66' }, h("ir-pms-payment-due-alert", { key: 'ef8c2b6f09785c4a0fb4a0e0b77e4c609f0c8da4', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '5c92317bca3d9426c7e0fcc14b037db24e682e65', style: { height: '200vh' } }))));
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