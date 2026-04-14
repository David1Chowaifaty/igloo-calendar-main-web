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
        return (h("div", { key: 'df3cafd3aeb0cdf45d0fac4015bc10bc0e82599c' }, h("header", { key: 'a83cafe9186772bad1001ef9f52e123bcf22904d', class: "app-header" }, h("div", { key: 'bc941f4af397e982fb818a9f7ce1beb72ccb8200', class: "app-header__left" }, h("ir-custom-button", { key: 'c217fef3e2cbfc6b3b1e7b674884373c981d6ec5', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '0cb5585976c9463c50e42e16e90c792e5b850fb7', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '103eda980caf7341f1c6c84fb212b2a6b89a247a', ticket: this.ticket })), h("div", { key: 'd5f9c595b8776d6e9d3e1c863b3fdbd1521408ed', class: "app-header__center" }, h("ir-pms-search", { key: '671f3a60148a4d0211a89b5fdb6ebb6bc7677ee0', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '9181ab4f1cc9686e6dc782fc4c6c4efc0bf37e4e', class: "app-header__right" }, h("ir-custom-button", { key: 'a4c03d28e59e30099f410e3b1c9508bf9de99d93', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '8d3dce0bc85066da99c5c63a451306a3bd444856', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '803eb14d4f96491703a296cf2b531889fa514d43', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '6b271af5c1c9f664189453b01db85f1b4e4df9bc', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b57e5888b5c10901ebcb5def826318cadc312aea', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '6c3a94165043e9b2c9a830d1110d0ceabaf71b48', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '0c5da07e3f57e0c7e60eb0e1566de648ff7fb760', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '634d5de8f4ef9e9323c840d3ab1cd02312061e3a', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd8accb3b9fb3530f74222cf95b56428c98bcef18', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'dbfff76e4585f400edddf1988e64edcb6a4b9ae1', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '02613c402afcb9af59f8eba9e8375395bdde07b8', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '1359e9e4852008e8e0a8b38b9d1fec2a0b6030cd', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '30930cc6a6ddb8ca37ebaf67b82fc81368f2d1e1', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b8cb31dc5a9508ceee7260979f79318389bce5d5', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '9404532cf8646df05a394a9a521f0c09088e92a8', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '5eb8ab587dc1d216702339be3b79a3aa77cbd97c', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '18aa507ca6af08b10d587289d19020664532ac46' }, h("wa-avatar", { key: '19a0f7958cf852e1d33a2bfc59a01407cbb38f5e', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '81010ac1927387ebea3d69a305ea9c96b9d5dc15' }, h("wa-icon", { key: '5fe9056634dacc45dd897e1d9c03629d6604edc8', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '169f44c6e50a39abb2220ba8a91d7c00ff144dba' }, h("wa-icon", { key: 'fa7011d2efa40eb13d7e71838fd47d211ec0f90b', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '9a9589846e3483b8638f023c43da02a819f50e77', disabled: true }, h("wa-icon", { key: '530f090b1fd4a1d1b52d2f319a384dc909b4aa89', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '26a75d3929633a92551351ddd9c3d6f573032f7f' }), h("wa-dropdown-item", { key: '4e6fee6dd5c6dc37f7c255c2bb9f0051b0511e93' }, h("wa-icon", { key: '18a3872335db9702636b6dbe4f2e0209fd2f57e2', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'f178be64f8a73297020f9a0e9e9c12233813099e' }, h("wa-icon", { key: '1bce989f0114a855bc7beb90ba3ba657e5609eae', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '2473643294fe63822bcbb01aeffb58ee8ab0f0bd' }), h("wa-dropdown-item", { key: '958f2954d1bbef014d379d1db075a1f0414cb06a' }, h("wa-icon", { key: 'ce518ce8eb8e683f1bd6a258d9c279659fcebc18', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'f6792e1c4cd9bb7fcb7941834b268ab4f8621601' }), h("wa-dropdown-item", { key: '854fbbb06a60a1efc8e0c043b66d55833c08088e', variant: "danger" }, h("wa-icon", { key: 'f084c6583811fc745a5f1db2f74c04edf8830c69', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'a2e350f4755d93e93780ca309be0c70fd2c86244', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'e2917c749d274bf5112353982f44b9f4972ca518', slot: "label" }, h("img", { key: '1272351a93a57f25da4e60edd62b5d1b2763bc4c', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '108914f7406a7c9e3f0e7ab4c7891da14c24206c' }, h("ir-property-switcher", { key: 'e346f5d31b792b253495e45793a3dddf1a91185b', ticket: this.ticket }), h("ir-menu-item", { key: '810abfda118e85d81b567aad84189c4b427fdce1', slot: "summary" }, "Property"), h("ir-menu-item", { key: '89dca56db002d4e5c31da8d811e796b10f8a4428', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'b10b8e700e90c3f091255248704595606b03c2c8', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '680880d3f277a4193fbd3603584b57a8d877e7cd', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'a4f55fb4683aceb0cfb0f881e4943f81914c0d95', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'ab5a817af00f22212cfb2b583a553b713014557d' }), h("p", { key: '513276951a85213e4c2e081ef5a604411d1bd935', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'e6a3f5ec6fdc28c74d9f4e03eda5ec40d8e53d6a', slot: "summary" }, "Property"), h("ir-menu-item", { key: '7c59de50abd15e9ed7aa63c175a2e9c5c778fde0', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'a41d1afffd2973e8a7d26c7c736681ec1a1a878b', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '1da8b2215f38688beedd67e2359c9a3caabd5910', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'b4c8522f84e4b9e90c0901812e08efd4e3addb7f', groupName: "sub-property" }, h("ir-menu-item", { key: '7e83ce9363c6db2442b2c9ef18a2e7132578cb16', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '2998f088d247b823c2c156dbbe524685c8c60db7', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '629203b14b44a7c582e9261e47e6b002717384d8', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '6ec4bbe107f2e1fa76bdbe2383a7d9798acd84a4', groupName: "sub-property" }, h("ir-menu-item", { key: '8958e9ab78660200448382200706884670ed7c14', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '115a4b0723610977f5f95b152566050dad447bde', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'e817839f48c3e4362249cc5c7392a51b283064dd', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '94e36f372226ef79912734522b0e757f0e5a0138', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '6cce07635416524f55a3fea96c4c9b4158361d84', groupName: "sub-property" }, h("ir-menu-item", { key: '7a70d648151b4a0a2a607588e8f45ded7d948f4f', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '7022b0a84bcdc9b62c79f840e578b738dc524bae', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'becdbca9e29ee8c8e3166fa03fccc55d232912f3', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '55e3e2e1b5ed002d3e3c1c52c62fa07feb14b2fb', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '85417ca82371bafc58f15b6f5c9f24f68fc10bbc', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '7a2dc6a8a4c4eab0355fcfb3fa78c177a0253b12', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '78b3c392a4658e7c8ca7f8f392114871afa8599b', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'b47cb7f5168755cf86c112b01a2373762872f776', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '7307f8771fd8e3759928962dd2a4b2c119db4111', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '0a3eea5cf683d068c6c6e21a3e3ee1882b0ae267', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: 'e6d5ae3a242c57ed2f6ef4a0ea9dcee6fd3f10d1', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'e4ea7ea9ff745b067917cbc7b901bf8a4e54c182', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '4b423160d03e1e770c1c6c53591953cead5d7db3', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '0720308a79fb7733866222c5bf18ade227989e37', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'd1843c732fa4ccfc421b399e3473d6a8f86a16d5', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '90dc24cf2812418a17dfb2365382ab4fba714c1a', groupName: "sub-property" }, h("ir-menu-item", { key: '76f95195f895c6f4255f82445cd0a7d4f9301dda', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'cac0f7b25fb674051fd45116e1f814dc8d9e7e8c', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'ac74737a646de5502520c56d966860829b144f38', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '13a34bcca91290720aadfb7b5fccc4b9609e18a4', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'ff948156f65602d1ed549e4b74a19423cafff66d', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: 'b0bd52a5f498db787a1b652cf068558ded5a7002', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '6a359c2d6ca2ddd29d9734ab29a0f777ecf78a8f', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '0587e797ccdeb14ae9105f247fa114020b56b141', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '7fe06f4ca974e66c81802a3119380d87a2e8f69d', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '0ac3277b7af0509f348c13a3d8f6af4213375544', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'f225e0c82279e7e7b3fc5093e14541b688d88eaa' }, "A35"), h("span", { key: 'bac57421a92d5faf7a80bbb61176e0aa61afd690', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'c2d6c2c04daafa9d778c14a34ef48fe7ed2098ee' }, h("ir-pms-payment-due-alert", { key: '01003e12809146ff86c60efbb2fb192abe6d6eb2', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '7f00ac842cedde8892c059800c741dfff044d00a', style: { height: '200vh' } }))));
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