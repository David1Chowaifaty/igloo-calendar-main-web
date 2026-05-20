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
        return (h("div", { key: '8420e7339e8216967bbf948fc928a358dcac51eb' }, h("header", { key: '495d80d34ecf09665f5bb5fdec42eb414fc66bad', class: "app-header" }, h("div", { key: '15955c8cbd768b7fbffa8721d40ea02be860ab30', class: "app-header__left" }, h("ir-custom-button", { key: '50ae680005484fc99e3e391a2c4c93bcc4d2fc23', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '55c0aee2ddacabf9bfd949680adb9f219af4086b', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '11f18eddbfea1b8454d3d4b8f89d2c8baa866654', ticket: this.ticket })), h("div", { key: '1b9c60c5725b1fbe5f2ee29e066e6e7f36a0a3d0', class: "app-header__center" }, h("ir-pms-search", { key: 'cfe8f6eeeae41fc19bafcb6e30f689965cc31bfc', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: 'fbcbd4f1f23fc239945a8345ea2d20407df9b605', class: "app-header__right" }, h("ir-custom-button", { key: 'fb27a6a760782bfe27ae06108bb64ef17f8a9a1a', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '4c3b8f8f13f91a6c08cb032c6c65d547a1f9d6c1', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'a668c657485924f56db88f5729e4be1195d8ce3f', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: 'd8de62772409fe157c05350f379701349b356a69', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'c16e6864c6f1261d719ad564dc727f627a22c736', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '483cfbedac1b51230cd2f644bd5c7834b0d36a2c', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '419614ce93901555717760568d9489f6dc71ec00', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '317a20c6a8262200e26a453412ba2d48686c5392', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e04744ce455325caf35ffad3b26efc8aec3085c6', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '9fd14f8804f9f19096eb6d837e4291a2f1095604', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '798fc47ecfe229e8f859de389ca07bf5e88500db', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'b95242b69c4724180b73be1586d399a3e4835d56', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '9788b24151097f3631396ca9b77894b06dfe2efb', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '2a0151a0170b7e6b6035c858be16359fd1319a5a', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd19a2c13f3e8d9e95b2dba01865a3784adc37931', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '2e133bb729dd47db634dac235e1e6d0377d70e50', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: 'ce31ba1b7e5677c6b58f6542d7fbb3f17a3ca5af' }, h("wa-avatar", { key: 'fb937a410e10337dae6b5ee4f579a4c42926a2cb', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'c8b275a680420749885ea8aaf17a719a3ab8218b' }, h("wa-icon", { key: '54284eec50fc699ef2f8244f0e34eadc981805fd', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '69d98b71376028c69a5d5e3cd3bbe642ffda5793' }, h("wa-icon", { key: '5433f13da19dce9dd378db4c1fbc379611e7c99d', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '1e3e80e7488ee1d420b80e62a52cd179e8116e93', disabled: true }, h("wa-icon", { key: '31801ea50e5ae8037e4e3e1a8ab0b5e4c4857705', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '8f2dfd868c7394b01615ed6a7de8461484d23432' }), h("wa-dropdown-item", { key: '617956a11348a320a2cbe4729871a40bd77e8f6b' }, h("wa-icon", { key: 'c0d2bc234bf0eaf24abf32dbeea1812fbd88af66', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'cee148638f2ac6d5ce60f70fa4ed4c061d2c9e93' }, h("wa-icon", { key: '320ce6fadc5969d17a432dbdd1634472a6395a93', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '8750541bf022ca919acab9bb1464b6dcfb2e5073' }), h("wa-dropdown-item", { key: '268624bca9d16c61f1cd98ebfbc80d77313b29f5' }, h("wa-icon", { key: '43cff626b2cf957be9ab5880c77378b1016579c2', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'd57ddaba70c21c1716a1c78d8f5c1960aaae4e9b' }), h("wa-dropdown-item", { key: '0b9c1c6e0390f3166d5c113e6ec5fa2aa6622d9e', variant: "danger" }, h("wa-icon", { key: 'cd94eefc722eedbc637ce1e06a51ea23888bfa62', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '7159edf364e07861b1a5c1382fd04159cd8b6814', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'e6c4fa10570faac1b45f9b1445dfc385bfd4007b', slot: "label" }, h("img", { key: '127735901930d30b936e65289c78b4606ee9f886', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '37422b46293446b89839b21c749373bb629fdefb' }, h("ir-property-switcher", { key: '92f5d385e46f99104e92e99f4d97f9327be0113b', ticket: this.ticket }), h("ir-menu-item", { key: 'b744abde8b50d9f30c2e0898f48dd69ed7d3e2c9', slot: "summary" }, "Property"), h("ir-menu-item", { key: '4c79ce8747dacd12da18648e983f7ad098bbaed2', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '13a30290edd9c9b3324a237d3909be80a97630f1', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '7adcef8cc7f9653b59f1dc9f85d7a9bc2690082d', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '5f616123ec9fcae40596f57fb4d660780a101b61', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '24f4610f1513041c1679674d79dafc1d8f3fe62a' }), h("p", { key: 'deb7522e6dedc8d86c8c2da9f5ba60667c933776', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'efe418e861a99d50b0ad425bee1daf4615e313d6', slot: "summary" }, "Property"), h("ir-menu-item", { key: '00386463f8c03e142947d0356d8151ee92b28db8', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'ffc8183dfcf12bdcf69efa4d6c2c47dc15817dbd', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '4450430534899a13915150704bda421056d2732e', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '7e53f4c480ec26825c0ff17ca2527f6b8f8c7c68', groupName: "sub-property" }, h("ir-menu-item", { key: 'f0b08ecb3ff563991d718f05c30362bcf27409a2', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'b7a584eb4d0a142985107c3e55ad3600e0844857', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '3fe19ec3a712353c007025180da0837114262eeb', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '75461f9fd7f8a5eb61314be6dd74029f8a36c3dc', groupName: "sub-property" }, h("ir-menu-item", { key: '87178cdf8ae28d432227900390929c5f088cb49c', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '384e20dfadf5aeef8c26ca933036266be48b4acc', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '72619ae33729de39ba1c9c128ef3999b02fa2611', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'c6c80f0f7639cc140f4fc9fbb4d50bec6e197de4', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '103de73f38412f9dcfdbd47910f741d12a09e476', groupName: "sub-property" }, h("ir-menu-item", { key: 'f250f1067a25d2010b37c4b7a14321445df22020', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'ca9c819ab4355a46a68baf84fc2c252a258e1d2e', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '52ebe427811384779fca6012a86da6311a69e992', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '52ed7610ff228a5ab3a2d6303783d9c4f40544b2', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '8055a2e60fdc473e16d79bf800773555c6984b8a', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'fff3b7688f8f3261f72eba6ea7426eca7dca0b1b', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'd902f7086d0e8831f0be5d84115f1b5adc5f7015', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '1e589eb4565225cf707e29a2b26cbdcacdf345d6', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'd883c0b49d203d66c5b896f1bcabe59d32d1c622', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '310ed8ae9c21b68270da82943ba8a9384ae2d4bd', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '1d6d138a2248c2e16ecfc6bc50250e871c8c74d2', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'e11b5f594044d5fdece144c66fbfdf7007276d19', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: 'ca2025a47c6265f61345e2e7a58d96191d4b58f6', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: 'bc9bb4f27dad191f0f076f37d0eba6648ae71f69', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '706f066d67043698498eaa58e5a5a233d3ff095c', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'a654575ad012da5d192ed81c1a3d3977f257937f', groupName: "sub-property" }, h("ir-menu-item", { key: '7a3182d5d6298e21bef7fea31f308cfc89f9c729', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '21265147af76aa580430c156f913c47b41c2e513', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '6c24ae530083b7d6b261f069a7798cab653d4195', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '5ae18b4522e18b200d0493a2945f850a8472d919', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '6654fbb807c912c336046812c6ef942afabcf15d', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '153e6e52dc976eb3e42860147221f849163649b1', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '518e27acbd4dd497632d4835cabe3b74b9d7c1d2', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '406cd0a005f4a24c03dbc8ad9af2a937acb4f428', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: 'b880c8bbf54373bafa110ac313b9fcd8fb39832a', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '2dd87018d51b004ec481c277fa240476cb48c7df', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'be0fc571c95d177c77dceacaee91612d330afbb7' }, "A35"), h("span", { key: '52e339595c4c9b34e70d6b7cf7402434eed1980a', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'ed57cba6daa2315cfbc825002de4af39f7b0cc09' }, h("ir-pms-payment-due-alert", { key: 'bf69f3bdf38dacb0dd4f3a30441123753403fb34', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '6feb9289a1cef42215694e5ddf063ddb47a6c280', style: { height: '200vh' } }))));
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