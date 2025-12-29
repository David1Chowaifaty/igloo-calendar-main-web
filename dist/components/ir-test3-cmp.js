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

const irTest3CmpCss = ".app-header.sc-ir-test3-cmp{position:sticky;top:0;z-index:999}.ir-nav-link.sc-ir-test3-cmp,.nav-sublink.sc-ir-test3-cmp{all:unset;display:block;box-sizing:border-box;color:var(--wa-color-text-normal);padding:0.5rem 0}.ir-nav-link.sc-ir-test3-cmp:hover,.nav-sublink.sc-ir-test3-cmp:hover{color:var(--wa-color-text-normal);text-decoration:underline;-webkit-text-decoration:underline;text-decoration-thickness:0.09375em;text-underline-offset:0.125em}.ir-nav-link.sc-ir-test3-cmp:focus,.nav-sublink.sc-ir-test3-cmp:focus{outline:none}.ir-nav-link.sc-ir-test3-cmp:focus-visible,.nav-sublink.sc-ir-test3-cmp:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.nav-group.sc-ir-test3-cmp::part(header),.nav-group.sc-ir-test3-cmp::part(content){padding:0;border-radius:0}.nav-group.sc-ir-test3-cmp::part(content){padding:0rem 1rem;display:flex;flex-direction:column;gap:1rem}.app-header.sc-ir-test3-cmp{display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;background:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.app-header__left.sc-ir-test3-cmp,.app-header__right.sc-ir-test3-cmp{display:flex;align-items:center}.app-header__right.sc-ir-test3-cmp{margin-left:auto}.app-header__center.sc-ir-test3-cmp{flex:1;display:flex;justify-content:center;position:static}.header-search.sc-ir-test3-cmp{width:100%}.header-desktop-only.sc-ir-test3-cmp,.header-property-switcher.sc-ir-test3-cmp{display:none}@media (min-width: 768px){.app-header.sc-ir-test3-cmp{position:relative;padding:1rem 1.5rem}.app-header__center.sc-ir-test3-cmp{position:absolute;left:50%;transform:translateX(-50%);width:100%;max-width:420px;pointer-events:auto}.header-search.sc-ir-test3-cmp{max-width:420px}.header-property-switcher.sc-ir-test3-cmp{display:inline-flex}}@media (min-width: 1024px){.header-desktop-only.sc-ir-test3-cmp{display:inline-flex}.header-search.sc-ir-test3-cmp{max-width:500px}}@media (min-width: 1440px){.app-header.sc-ir-test3-cmp{padding-inline:3rem}.app-header__center.sc-ir-test3-cmp{max-width:500px}}.app-header.sc-ir-test3-cmp{position:sticky;top:0}.menu-footer.sc-ir-test3-cmp{display:flex;flex-direction:column;width:100%;text-align:start}.menu-footer.sc-ir-test3-cmp h4.sc-ir-test3-cmp{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}.logo.sc-ir-test3-cmp{height:24px}";
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
        return (h("div", { key: '5c5ea79448bf2da1c0e99ec38aabeb74f85a0dbc' }, h("header", { key: '558852f07e999ee90fa92f61b69911af4a3d6f8a', class: "app-header" }, h("div", { key: 'f008d47e309b08ad3fa7342e57f9d17824aa9f53', class: "app-header__left" }, h("ir-custom-button", { key: 'b484e6fb202da03d647423a1188bee0a2e22dd84', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '49c4f025c97379041801887d874f95ce9d4c712d', name: "bars", style: { fontSize: '1.2rem' } })), h("div", { key: 'f5dbd81e9baf60c9b34b5127be17ef14d86cee45', class: "d-flex", style: { marginLeft: '1rem' } }, h("a", { key: 'd79b9f72ecf49f0bcedce7ec8451bc10ec9b872c', href: "/" }, h("img", { key: 'ec4a4afdb7adbfeb58cf24d19ee60bfeea991077', class: "logo", src: "https://gateway.igloorooms.com/irimages/aclogo/AcLogo_229.png?t=1597509988143" })), h("ir-custom-button", { key: 'b60b0016c909a473af6c4ff880c2673d8bc6607c', "data-dialog": "open dialog-opening", size: "small", appearance: "plain", class: "header-property-switcher" }, h("span", { key: 'cf7ee2afeb6ac4aa95edd3ae474007a3b3f56d94', class: "header-property-name" }, "Hotel California"), h("wa-icon", { key: '24f3cbacfa6d2639e64c96edd5afb5a386e8006b', name: "chevron-down" })))), h("div", { key: 'f6d27bcfcebc86c66d5457f56f71ec69d6c7b407', class: "app-header__center" }, h("ir-input", { key: 'd2a77ff6224e4791e81459a27aa4fc49c2da4d55', class: "header-search", pill: true, appearance: "filled", placeholder: "Search guest name, booking" }, h("wa-icon", { key: 'c00417d761c89c06dde810b11a10e18af138a96e', name: "magnifying-glass", slot: "start" }), h("span", { key: '8e52485adac933eec6ee8db3bfdf410b5904ad04', slot: "end" }, "\u2318K"))), h("div", { key: 'f0f8a4b0f574f8c7abca5825e7051acd82ce7131', class: "app-header__right" }, h("ir-custom-button", { key: 'f03c2c36ce2364fc00052e7e697d68a938427370', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '8be7b478c5e88cda76cbd646e3171ea317eda401', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '63f158d825cb5bacb677c0766577caf5fd87b0f6', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: 'bce049e1b5f81553378807eee20c6b3b26aa0a2f', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'e5140d8ff6ffbb0f389fb04c1d3cd28431c79c34', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '7fe66c44dd0321130a4c5dbafce341acea30b372', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '0e389c6b25ebbbdc28ed5e10fd183d903213efb0', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'e815ef49b929c1628da4c5a5b820f98a18299bbc', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '643068d5ce958be84584d1daec02a4ee00bdf29b', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'b880696b7936eda8b7e107e6f522117206df100a', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'fc0150cda7c1a858f2add7b54f4e507b92bc7a06', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e17061cd64cc0dd0eb11383b54b4eccd37dd4eeb', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '23deb7d1cedf6d4f8061c712eca15f53d70ce7d7', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '1db528200a4ed77c10ba09bf92ee83c80d2da328', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'a4eb0993d0d74d5dad999784b10f6283e5fc0dbb', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'cf40e5076ca44617f8595c68b1a5dfc50d5c64b4' }), h("wa-dropdown", { key: 'db8e0b32bc2e1036fda083bbbd16c327b3331dbc' }, h("wa-avatar", { key: 'b5dd73d5f26f5248dc669ddb883c6608e86f21a4', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'f186d938648fc77ad3c52a0bb1ba8d08ef650c2c' }, h("wa-icon", { key: '0500fce5f49af04131552895736a968bb5950955', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'cb463a3bba5283dfa41587da283f3c09d04e751d' }, h("wa-icon", { key: 'ac12db1ed08642f532699450cadacd948918ed4c', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '9364cebaf6e8d747eace9de9c747b0abebfa609d', disabled: true }, h("wa-icon", { key: 'a6b694b72f8b1b03418046fd70017f7ac2f3024b', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '675b79341cde1f60d67bcf041a9b852a87facfb4' }), h("wa-dropdown-item", { key: '0abe2f89d83653a2f1cb09cf8195a23ac4a93393' }, h("wa-icon", { key: '996498831240225621462ebb1987544f666234fc', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '3c641209b813573933dce9028201d19ee434a70e' }, h("wa-icon", { key: 'b2bb469d1ca3639dcb70909ee08ed484c6f7bb55', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'b37c8d94b9107d8a108893dc745596f45e13e62c' }), h("wa-dropdown-item", { key: 'b653d6b606f262fcd12255116d22109b3b1f63ac' }, h("wa-icon", { key: '0f4bbb8fa093acb427b9e7b593df5079a853b329', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '2434e50d6cf462d44526ad59f687181504c20d34' }), h("wa-dropdown-item", { key: 'ccc64ab8546671b7a2dfa223352e6642503234f5', variant: "danger" }, h("wa-icon", { key: '5e4ab15dafb0633bd6faa694b52e4aec97a3dd91', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'aceadf702005f2c043ca2197d085f57963ec9e61', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'fb6c406152d60f2e64b2c0587deacbee5f920286', slot: "label" }, h("img", { key: '055e63a1d6eb9cb2c367e767a7bf84033396db8c', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '7e938be7d1d8c7588cec5d06b13c4cfb0909908a' }, h("div", { key: 'c3f041f3258c844297161b2975bd4f5581d55349' }, h("ir-custom-button", { key: '33651d503e4c505a80fa22aba40c8c7658eaa304', "data-dialog": "open dialog-opening", size: "small", appearance: "plain", class: "header-property-switcher" }, h("img", { key: '585d96626f2dddf01e41ca167573317452cbff41', class: "logo", src: "https://gateway.igloorooms.com/irimages/aclogo/AcLogo_229.png?t=1597509988143" }), h("span", { key: '9511a30f44d56a7f2bd8d86c6ba6e511c06a47b5', class: "header-property-name" }, "Hotel California"), h("wa-icon", { key: '393024f0b0877674e8eb795c1d72a07cac053cd0', name: "chevron-down" }))), h("wa-divider", { key: 'e55bfa6d7f24fc7d7d02f5af9a4c79f634560917' }), h("p", { key: '64d363e461e4e3928d7fef1037edfd16219ae54e', style: { margin: '0', marginBottom: '0.5rem' } }, "General"), h("ir-menu-item", { key: '6eff4b916ab931e1be6525ed41b9fb98d24d17a3', slot: "summary" }, "Property"), h("ir-menu-item", { key: '423a9028ba1c8e1279ba4760e7284bf577524539', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'e043ba927572a2edcec29dc338a614ccdea1f6b7', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '7c307c6d8edbd625424e18e205866873c755d76b', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '333110dff968d556de1972555a9a470c25908c11', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '8939b9661614a69dc8daf4cd9cde1ded7076dbf9' }), h("p", { key: 'b6f72830f7f279a8e7314d349eaf3d7cf0bbae31', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '4797d19c81fb136a2d1794d901b24c501a2847f8', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'ce8d22dbd8bdaad927e97f12181714484af27ce3', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'ed2c08664ecfd30a63da683e20a31b94cfbaaf3a', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'be34e394e234d9da6f5aaeaad9faf400f804731e', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'c8b2f45bf413a5829083902d47cbe525f574a0e0', groupName: "sub-property" }, h("ir-menu-item", { key: 'a2e4d707acf7d79e987addd47760aca682f1218b', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '00cbfb430b2c2d9ba147715304e72a117f6a0509', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '0e91f26a09d0f65b2ace75045cf12d508eb4a05a', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '516b87b875f2e691ed17d2a0b2d192e7113f0558', groupName: "sub-property" }, h("ir-menu-item", { key: '87c05b7fd7e72a6a8a4986c1ee5e1aa30ff6e5f6', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'bde43ef896ff40e765ebc44b46d8bcd5a35fff75', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'a23629fa31210a72ba9ef425116b65e9ebab1570', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '3f9e8e53f2b85dd280f35d86405ea9825f55e988', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '8c6f4661f67ece2a42669ff3f7f49ee802c63812', groupName: "sub-property" }, h("ir-menu-item", { key: '3be90374444a5e126c829e52cbf0e80cc0202296', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '1b0323783f62329a1d15e0f5c026c143b22afe40', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '65e889079d9340da22615b2c1f78b04490c24e40', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'f3a1abe168fccc5c5c8124a11c0424a7f24cc991', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: 'e7daa9ee5b1721a20c35517e73b56baf135b7637', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '3ec5cb954532de2ac98ee34d5e27219f678a64bb', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '6d64e2d44ba29691cbfa7c43c1a98444953fe876', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '5c0b5d93c777003f258d27b718fff93cce8c760c', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '7df11e8635c9aa622f616b99aedbc81d075ad105', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '8b462bd14d8859af6f99b8220875f2281e3e3697', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '968bb4dae72eabf6f0c35abb4931f06a7ba65dc3', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '8d9118afb6c82ac2739553c923a51edee21d52fd', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '1e375119400dcec66d46c109f98da406fde3e74b', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '0053a78b718053954c7321ebfb71f0298f8c5137', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '321e5718e5e846569fff3a6d5c9902b00464ee20', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'b09533b01c2dff559bbd712b2e6136c816df74a6', groupName: "sub-property" }, h("ir-menu-item", { key: 'b7b25eda35e97044dc8dc3ebd63f5dec49603115', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '6fb028f523ae32a3ade626129d469c9e5da8ebea', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '0161ae2be5eee09333c859bb7fd77e342146b298', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'cab6872e06fb2185b758cfbd025e4c50adf130c1', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '9964a0f3acfb662f22ca0b488d421fdc3167c652', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '69d941a72aa06dd9b996ea106b54270d8664d3de', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'b23c9c23cb2d9fdd6fe13de1502ce3861e7212e1', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '7982a7eff4c0621f23be8d2c0f99c0a3e314b651', href: "acaccountingreport.aspx" }, "Accounting Report"))), h("div", { key: '397602f1a9da02307dc1a199e25230ac40b6c61c', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '10cff8c6dbde4f0a9f4f4e84ca815261d69209a6' }, "A35"), h("span", { key: '91539f27aa62d005937bae106fa8bbf517271d8f', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'e5229511c4667f4a21766ba44d3de494971921fd' }, h("div", { key: 'c17240c07131d144dce61da9b2f44cf1a11c1f93', style: { height: '200vh' } }))));
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