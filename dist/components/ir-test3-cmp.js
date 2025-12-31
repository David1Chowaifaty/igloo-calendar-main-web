import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$a } from './ir-custom-button2.js';
import { d as defineCustomElement$9 } from './ir-drawer2.js';
import { d as defineCustomElement$8 } from './ir-empty-state2.js';
import { d as defineCustomElement$7 } from './ir-input2.js';
import { d as defineCustomElement$6 } from './ir-menu2.js';
import { d as defineCustomElement$5 } from './ir-menu-drawer2.js';
import { d as defineCustomElement$4 } from './ir-menu-group2.js';
import { d as defineCustomElement$3 } from './ir-menu-item2.js';
import { d as defineCustomElement$2 } from './ir-notifications2.js';

const irTest3CmpCss = ".app-header.sc-ir-test3-cmp{position:sticky;top:0;z-index:999}.ir-nav-link.sc-ir-test3-cmp,.nav-sublink.sc-ir-test3-cmp{all:unset;display:block;box-sizing:border-box;color:var(--wa-color-text-normal);padding:0.5rem 0}.ir-nav-link.sc-ir-test3-cmp:hover,.nav-sublink.sc-ir-test3-cmp:hover{color:var(--wa-color-text-normal);text-decoration:underline;-webkit-text-decoration:underline;text-decoration-thickness:0.09375em;text-underline-offset:0.125em}.ir-nav-link.sc-ir-test3-cmp:focus,.nav-sublink.sc-ir-test3-cmp:focus{outline:none}.ir-nav-link.sc-ir-test3-cmp:focus-visible,.nav-sublink.sc-ir-test3-cmp:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.nav-group.sc-ir-test3-cmp::part(header),.nav-group.sc-ir-test3-cmp::part(content){padding:0;border-radius:0}.nav-group.sc-ir-test3-cmp::part(content){padding:0rem 1rem;display:flex;flex-direction:column;gap:1rem}.app-header.sc-ir-test3-cmp{display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;background:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.app-header__left.sc-ir-test3-cmp,.app-header__right.sc-ir-test3-cmp{display:flex;align-items:center}.app-header__right.sc-ir-test3-cmp{margin-left:auto}.app-header__center.sc-ir-test3-cmp{flex:1;display:flex;justify-content:center;position:static}.header-search.sc-ir-test3-cmp{width:100%}.header-desktop-only.sc-ir-test3-cmp,.header-property-switcher.sc-ir-test3-cmp{display:none}@media (min-width: 768px){.app-header.sc-ir-test3-cmp{position:relative;padding:1rem 1.5rem}.app-header__center.sc-ir-test3-cmp{position:absolute;left:50%;transform:translateX(-50%);width:100%;max-width:420px;pointer-events:auto}.header-search.sc-ir-test3-cmp{max-width:420px}.header-property-switcher.sc-ir-test3-cmp{display:inline-flex}}@media (min-width: 1024px){.header-desktop-only.sc-ir-test3-cmp{display:inline-flex}.header-search.sc-ir-test3-cmp{max-width:700px}}@media (min-width: 1440px){.app-header__center.sc-ir-test3-cmp{max-width:700px}}.app-header.sc-ir-test3-cmp{position:sticky;top:0}.menu-footer.sc-ir-test3-cmp{display:flex;flex-direction:column;width:100%;text-align:start}.menu-footer.sc-ir-test3-cmp h4.sc-ir-test3-cmp{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.logo.sc-ir-test3-cmp{height:24px}";
const IrTest3CmpStyle0 = irTest3CmpCss;

const IrTest3Cmp$1 = /*@__PURE__*/ proxyCustomElement(class IrTest3Cmp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
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
        return (h("div", { key: '3ed1e34ca92ea68910933fe60f3a0dbbbb9fd6fe' }, h("header", { key: '9d2d63050b3184500f8cea429778ef3643bb8e45', class: "app-header" }, h("div", { key: '3402884dd63f22889704200f448ff51fe3080da3', class: "app-header__left" }, h("ir-custom-button", { key: '24c29ef53af4fec1f827fd34da27a03e85d05a5c', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '8331f029809f078af5dc2db990aa8553b8bde563', name: "bars", style: { fontSize: '1.2rem' } })), h("div", { key: 'fab08796221edd56158cbf8b09eb90a2cbda032b', class: "d-flex", style: { marginLeft: '1rem' } }, h("a", { key: '0df30576725575ae157f41a455c9da13a6da16a5', href: "/" }, h("img", { key: '58e37a639316308a64df6e165b8af1a446760c8f', class: "logo", src: "https://gateway.igloorooms.com/irimages/aclogo/AcLogo_229.png?t=1597509988143" })), h("ir-custom-button", { key: '7cdc6e2f3d29bd04cb2d8a53695a171437437971', "data-dialog": "open dialog-opening", size: "small", appearance: "plain", class: "header-property-switcher" }, h("span", { key: '5055acc54543da2451400c966dd71315bbd8a7f4', class: "header-property-name" }, "Hotel California"), h("wa-icon", { key: '73edb0664fee329b7b9c716d4e18517170507107', name: "chevron-down" })))), h("div", { key: '584c23bd49cfdb7d5390549b10872a6b7a175ba7', class: "app-header__center" }, h("ir-input", { key: 'dc6a1b357951f74e526dc3abc82180a1e78bf262', class: "header-search", pill: true, appearance: "filled", placeholder: "Search guest name, booking" }, h("wa-icon", { key: 'e94c67fb6002f35d716b3b7ed424f7a650c6a18a', name: "magnifying-glass", slot: "start" }), h("span", { key: 'a1612b31084adcc0d9e182c971f335500b5d1e83', slot: "end" }, "\u2318K"))), h("div", { key: '5a5b40ad2bc1d253844319d2078b6cd408b86c50', class: "app-header__right" }, h("ir-custom-button", { key: '8b8cca347d16651fccad17d5dd530aae01dab876', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'af22b98bd120ebc1f4652d1578a71502205d59e9', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '7cf29afc3d70451571cb432c5f54af01d076eec4', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '98b5730f68b76ce0fc59c932d9e73e929ee5897a', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '815c7f4f67f6a2d38815644e60d9cb4b25eaedb2', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'cf5cf06028c69a06eac04cea2157e0d5481e9e6e', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '6a086fda391489ff6548c7dfd61501a47f6af787', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'c3bdab8ea536b5f4b9e8ae5862b5fd9469d26046', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'b434149da8e10fdfb7653a2ce760a3873d115d60', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'f7cfba80b03686c3f704a04191cb52608c12692b', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b12aedb77593afd794201718f45b43824f3ce8ae', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '5ec76ac43e4327c189f545c283bdf848911954bc', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '0bafa439cf3c48bbc85a20b691a2642944356145', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '83277a46b260c95cda733703257c40947275046e', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '05758b3e7eb093f273d7c59aa3eef115e1a4f74e', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '88fb746e8425c6fb153d7fdfa6abcd9073f7da09', notifications: this.notifications }), h("wa-dropdown", { key: '2c794623857fcc66d6a52529f7d4be9905b29000' }, h("wa-avatar", { key: '0607b2cfddd4e91d0cbb1289447a7909357ce30f', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'f8999579826622882854867f4d6479acf92d047a' }, h("wa-icon", { key: '965d04088c5a760c69517a4379ca9f9b3a9cd92a', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '58f2fa96198e7e2eb6d26fe04044eedd0d0c0b9c' }, h("wa-icon", { key: '21ec2450b26db2733a801fee8417080810ebfb50', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'ec7b591148e27dae12e8bb6573c5615caeb40073', disabled: true }, h("wa-icon", { key: '4700fc73347b77c3e89fb72fc806762c05e6bf15', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'b24a576f8804a411ae615148ccbac9679d5a1286' }), h("wa-dropdown-item", { key: 'f4cd0fe99ba7cb924176c8ebdd944d8631443157' }, h("wa-icon", { key: '2e475242b67bb045a13dabf7e1dc239e449d1811', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '226f5574690a5d77866edee9ce7fa03309350f83' }, h("wa-icon", { key: '9afe712629103a4ef1cd7ec65ec4c0dc2816914d', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'c6029ef5e9c6790c5d00295b01a23de1bb627319' }), h("wa-dropdown-item", { key: '6adea19847b97d86fec08efcb3a1219747bd338c' }, h("wa-icon", { key: '69973816cdc7e936761542b1a4773d4be0349d0a', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'be6c000c48d71302cdb605bc1638c4660e8763b4' }), h("wa-dropdown-item", { key: '33b5f7e0d030b37cefdacb429e38691851389171', variant: "danger" }, h("wa-icon", { key: 'f907a06c2fe94ed2355e035a4f142e72bdc349df', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '3f731294b9290472ffe195ad21de4af32368b89d', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'd278b375d430cb1514d3ddd1cf2d4996e87cae1e', slot: "label" }, h("img", { key: '18b77506af525f0a95c980894f2081657650c044', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '9510d603c9344688a95c2de04b218a7056126467' }, h("ir-menu-item", { key: 'c62f5c355f9d32b0198e2e99908512a18b6ab641', slot: "summary" }, "Property"), h("ir-menu-item", { key: '79d71f1c1e79391ddb212aa40083a7c72820b76e', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '785e71e8dae398afb02cd42b1440ba5c76f15aa4', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'b49625b07d791d8d1ce46b6ab532390fe65f2313', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'eb89a3f08a7193d8ff27f5010256435f5365317b', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '2e1837d81a6f03aea765617a80af63b408f113c8' }), h("p", { key: 'b171e9498811dd0fcb1a54fbee63f2ade97006b6', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'a569450cbe30f1cb80b72fc890c6938a4c80e940', slot: "summary" }, "Property"), h("ir-menu-item", { key: '2dd179331b9f2929265ad1ef2b49308bebca7504', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '72e2bbbc7b13618db5033fe6e20e21a702818f9c', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '59a3b737ee10d5723156b2698bed9873d84e9b62', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'e17a78361aa6debb4ca9d0582464c6b00fdd41ec', groupName: "sub-property" }, h("ir-menu-item", { key: 'a888b8ba8a2268fa4318e769f24638ce89686c53', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'cde74f3119f075d1c5546c7823f40ce6e8d37128', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '168895a9cc9ba04f31cfebc5aa41076df0cc825f', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '50ad17b8ace75396970c4c48d53bf2d1b1b35980', groupName: "sub-property" }, h("ir-menu-item", { key: 'c1029d0ebcee03e78f3be6aab8d200fbbaf19e6e', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'a7407390790b1b674f5f7b3018e81bd9fdb6b177', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '1d35f34f2bb954a5c33b9406cbeb8e6544c5930a', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '845908df50b0ee9b7e585c88bc6daf937fe9f17f', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: 'f449404a7ff718d274c8b0c40e76850ae7ee1bf9', groupName: "sub-property" }, h("ir-menu-item", { key: 'd473077e204959c326ffcfdcb78397f9b4b08d62', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'b5c2adb8edfe460a16e931ea8d3e7bbe6940611f', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'c5d8a12f36accb0c108e2ec8e2965b287ba83b29', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'f3bbf670b99ab07631c87f445e642156cab338da', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '690070021765239269e6a77b7fd3c714af37b759', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'adb8d8dc91fb243c86608d9f30946569fca7f15c', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'fa253a66da81049b90b4f90874c6c7ccb6537a9e', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '5ec0372dbb4f963621b2691ac723b1bc8b34ce08', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '4d037671ee8196836a9e9eefcea8620fe02c2d99', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '9f693d06a79cc24e1534b20805b526f02df9f28b', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '7ec1731361019c7d473ff7976b97ff327c2603c8', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'fde455e5cf25e5580506faa11e284a264a92e393', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: 'b4ce665eeccf2eb6854fd0ebf44e5c97f03b7c6d', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: 'e332bb84903526f5a0ef7fdadaa53adb4de8c6e2', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '2f0c1e21e6ef96341526a7e807cb35754f080fcf', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '56bcc742bfe8e8e692607c8b6a37ef8de9b63253', groupName: "sub-property" }, h("ir-menu-item", { key: '1a04bee9db3ff52eabf96ab4a409b944f1ffecfc', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '26d2172e067bc8dcc6a8a49159e4c00cb7944c9a', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '7e56803b19c1d3b528e6f9bd7ac450a0fde9635a', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'ecbbd8ff1786f9956993821269c37d8ad06687e0', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'd7e3f3eb096efdf20f77c3c850625657a6b536c9', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '9ad4edcee202d95c07edc8cf03e67314b51e9819', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'b292a5c482b02828b86e8f6173d778c65930a6e9', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '927355bcb88fcae4bdfcd6d90ba4e9531394fa47', href: "acaccountingreport.aspx" }, "Accounting Report"))), h("div", { key: '81e3e53215c8bd38a7a1268faa7917e38be5018a', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '83f674755fc1242a746cb00b735d1ea9e8a8fcb5' }, "A35"), h("span", { key: '9e4e30254cbd6500bd7f721236287d2dde285778', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '9315ad03e0ba0f105ffd75ff5bae91a0c8d86b80' }, h("div", { key: 'bc2e7b092e1100616ee1641b8f52be6e681204e1', style: { height: '200vh' } }))));
    }
    static get style() { return IrTest3CmpStyle0; }
}, [2, "ir-test3-cmp", {
        "notifications": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-test3-cmp", "ir-custom-button", "ir-drawer", "ir-empty-state", "ir-input", "ir-menu", "ir-menu-drawer", "ir-menu-group", "ir-menu-item", "ir-notifications"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test3-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTest3Cmp$1);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-menu-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-menu-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-menu-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-notifications":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrTest3Cmp = IrTest3Cmp$1;
const defineCustomElement = defineCustomElement$1;

export { IrTest3Cmp, defineCustomElement };

//# sourceMappingURL=ir-test3-cmp.js.map