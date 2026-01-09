import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$h } from './ir-custom-button2.js';
import { d as defineCustomElement$g } from './ir-dialog2.js';
import { d as defineCustomElement$f } from './ir-drawer2.js';
import { d as defineCustomElement$e } from './ir-empty-state2.js';
import { d as defineCustomElement$d } from './ir-input2.js';
import { d as defineCustomElement$c } from './ir-menu2.js';
import { d as defineCustomElement$b } from './ir-menu-drawer2.js';
import { d as defineCustomElement$a } from './ir-menu-group2.js';
import { d as defineCustomElement$9 } from './ir-menu-item2.js';
import { d as defineCustomElement$8 } from './ir-notifications2.js';
import { d as defineCustomElement$7 } from './ir-picker2.js';
import { d as defineCustomElement$6 } from './ir-picker-item2.js';
import { d as defineCustomElement$5 } from './ir-pms-search2.js';
import { d as defineCustomElement$4 } from './ir-property-switcher2.js';
import { d as defineCustomElement$3 } from './ir-property-switcher-dialog-content2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';

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
        return (h("div", { key: '2d42da929068724a4885b5cad6e34e55e44ca3d2' }, h("header", { key: 'de42abcc50fe3823b90a51751fa54139f78730a2', class: "app-header" }, h("div", { key: 'c4e07b70b2b08467361c5b60f7427a0896fbdb3f', class: "app-header__left" }, h("ir-custom-button", { key: 'ad233b9cef1eb1006fb88b855022a0b4a0666141', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '05505d2315e8052d52c1ed4732d1a116f0a8c4df', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '840350f3c743ce0f86af6e316f4d486e36953ef9', ticket: this.ticket })), h("div", { key: '1c9a18718a8327023bc1fe3ce488bba1daacdf45', class: "app-header__center" }, h("ir-pms-search", { key: '64ea310b5f319528f010e47e70c38c39346fc7a5', ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '10fb4624cbea9e6e5a19b76f880a5d6c376d2a8a', class: "app-header__right" }, h("ir-custom-button", { key: 'cac28eef147ac3e6dd30564d5396c99b33e7549a', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '5669c31e3c21a7db573255e8039bf4762b17b015', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '40b9ee5bdeb2f2146f53755d33bdacfa7c5d1a6c', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: 'de4a0a392e826b027b35e11b4072ba6d101f62ce', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'f3401a1f7021f469dea8e6fe276701cb3394faa5', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '5eee4d6febb42cafe0f6bb0cd7f76c51ba53c2f0', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'ae25aeb5088e9e5c93e3469da2cdab4339375233', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b9ae99fcb79b9ac591c0fa0a08c6b3c4217d267d', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '84b067af4fb0332e77799787af4fce382ec518ec', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'bd7178e8d214f8fac0b3a7611ed46ecb6f64e22c', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '63f39f6f7828c1db0fd61701c6c6505d260c9e8f', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '7bcb493207aa463510cea85a1ff4670eabdce6b4', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '17ec20f34d7bfa9b01ad49fc6e1aecd6c65b34bd', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '174aa8ef20bdc802affd6e9cd2a030ea2247ed40', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '11b3843f3907d8927f05b0e25b6b1a5ae3feb607', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '195ebbfb3571deb8435a60d872fd6f1b13983814', notifications: this.notifications }), h("wa-dropdown", { key: 'e74a1ea933cd40c3eeed0c997a0ec4946e0304de' }, h("wa-avatar", { key: '158664768fa946f2bd56b98beb048ea5c55d45e9', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '1055c5dc5a2f1fcdaa3b25055a3f88c7dd8937ac' }, h("wa-icon", { key: 'e8b578540185bcc7b1c59f6b38608b7de654c3c6', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'e0ec2782d69ab4aab7bde58b5c7812f81783c309' }, h("wa-icon", { key: 'c3aee7ba7468f17597f8cb299b578ae7423ca0c6', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '2d76ac978817eb6ba530989f534f3df510182fef', disabled: true }, h("wa-icon", { key: 'e79ad48c656765653bae97e045604e88b7e66986', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '740c13a6236bde25d5cddf36a41acedaafc579fe' }), h("wa-dropdown-item", { key: 'f1323596b28fb323a1de94ebdf83ef32cfc2f43f' }, h("wa-icon", { key: 'e33b6ea2524811605375b94ea7ad1c607741f0d0', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '7ac8994c5cf00f3651b0acafae7a5b881bcfbf58' }, h("wa-icon", { key: 'b6e8c3e65bafcdb52712b30a7a9eb44093546e0e', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'fda48956f28062a3c31f5e24cf6aaf2e507a75cb' }), h("wa-dropdown-item", { key: '1ea8c9fd68436d68b176c42b9bd638c38864603e' }, h("wa-icon", { key: '4de215918bb8b32c86df0312fd104d9183226fdd', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '76c69bdfb8e16234a7211dcb13ea5425a5f9d018' }), h("wa-dropdown-item", { key: 'e73b80427196152401050664650eecc530348311', variant: "danger" }, h("wa-icon", { key: '3f4db96c1e9249394ed5e9ac3c7698c9e7308767', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'cdda85c88a758d1fc46bb9974ded92e587342bbe', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '11f57fced1ae7b4c4162dbc205d25e77f426be78', slot: "label" }, h("img", { key: 'aeb9c99781ca41b844ef17eedbeaf9bec8879db6', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '0c20e0385ce85a95e60efe498e6964cd7dc1b3bd' }, h("ir-menu-item", { key: '6963fed2f38384f3e963e9d37cc5487734fa25cc', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'b631929afe9fb4e068de1e8eeaefb374b34c3b0c', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '7cf56b2fb668d1492a3a31bbbf1f56de4dba576d', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'de57c5eab841d93ad90c78774d90b03c1e18ed73', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'cea76af0cbfb71b8287b7aa7e6b5bbbc47cbffd6', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'c1f5fadeeddf1fd7e2c3e7722825f6e876885362' }), h("p", { key: 'e86a05ca7d36d403578803fc3e33d5e84ad30c42', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'd0f1f4fa2bb9ff108263cf62b24c239148f36c42', slot: "summary" }, "Property"), h("ir-menu-item", { key: '73efe75b7a690138a892531ea2670a37b0d6872d', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'a1dba431674f0a50cb8cc3dfbc066768ff01a7ab', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '7d42f21c4530a80881f5e8e7994dfdfccc7d1110', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'eb3137720e6217b3f083022ecb338e89fd335e69', groupName: "sub-property" }, h("ir-menu-item", { key: '41c471b05740d9cbf69d01f28e01225d5bf92e6b', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '2d0716bc2eb1da5324772d06dc3924b3e23077f3', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '2eaac79153a64f61c3a36fbcad8bc16e1ca2d5f7', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '594cdf23bf129c284e528dc9b4988536f214f2f0', groupName: "sub-property" }, h("ir-menu-item", { key: '08abf19c116bf4ef9f323e3ed230ebb697c0a7a5', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '070b4738154d558da90b047d74c7793e71f269f8', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '33b75822d1b84f3749bcebb70535961916c7f61b', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'bcd57c868dbb7391b0b06e5844603ccbd207a05d', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '18ea4f7f8d38322d6e0ad5da6fa1539aa40d36eb', groupName: "sub-property" }, h("ir-menu-item", { key: 'da5598c9010798a7d6418cb3b4ebd2920fe18a86', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '7262fa7adc34ead947f7cc2d3faa22b4c6d4faaa', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '68af7218cd4774739ca009d31c137785c31c0c8a', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'c19aa06c098cb8cd3ec434f60a088e142e1aa13d', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '5dc26570fbcf3ff7bfdcf319f2db9a1d915f693c', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '13555e10729ee91fcd46d178807578c8524d846f', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '9a9972a8e54ec70ce5ad0d3c5f89211c10362a4e', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'dfebfbfc3e104ecef5ee2f0d324648041aa93806', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'a8196b3a5d00b2f136a41f6a960f57e63a9bdcdc', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '4de630c33afd8deba9cd2501c87347b9f67c565e', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '516de60b4a58d5ffc7e6f314e15b3fe6305e968c', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '33ff2e1a59609c221af488f1c5bb8b5740b60f8e', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '2ff10fedefe9a7765499af57b406bb9505c7a1d9', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: 'dedb2cd1c7252f2bf5ff59d6f80d5227eea8d3d5', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'b3bbafeb8f0d8c32178b2df1d9f2077f0f03ca46', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '5eea632415be3cfc838a75a8839396c0a6547341', groupName: "sub-property" }, h("ir-menu-item", { key: '54489246a6341f7e6d22a7c6f53d425446d08795', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '7ad4c784283f0bb65d3a2813e12e0cdbb06a5700', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '998095d97e3dba0787f356fa031b26744d673b70', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '5a0301204aa9be827af705c5ae8d3b80ac135a27', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '3386ae8a10ebc2c560ab96e6ab1a183b3bf6cff1', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: 'eddae1ef6ce2a2452e9b17c40cc59ba78f0758e7', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'eed734b44d47928a337ab0e98d427340515a31e7', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '56410f279d5356e0a21a0035ec15ea60d1b496e5', href: "acaccountingreport.aspx" }, "Accounting Report"))), h("div", { key: '9784304eaaf19053021e5306b12f6ad2cb7d326c', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'c9e7c96e8fd3ba874bd43b0c25f72d59d333efcf' }, "A35"), h("span", { key: 'e2df1cc19aeae0755d690b7e1e6177857b567ac8', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'bf9e39750a3bbe04afde891226163524375983f6' }, h("div", { key: 'a555bd29882d27ae5968ee80b8b53a1a14a38de0', style: { height: '200vh' } }))));
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
    const components = ["ir-pms-page", "ir-custom-button", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-input", "ir-menu", "ir-menu-drawer", "ir-menu-group", "ir-menu-item", "ir-notifications", "ir-picker", "ir-picker-item", "ir-pms-search", "ir-property-switcher", "ir-property-switcher-dialog-content", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pms-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPmsPage$1);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-menu-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-menu-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-menu-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-notifications":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-picker-item":
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
        case "ir-select":
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