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
        return (h("div", { key: '73f30475180c0e0ac6048aa690e576e44b3b0c96' }, h("header", { key: '1b977c4a214c1063c184e50bba61747bb725308b', class: "app-header" }, h("div", { key: '33a2971fd4d81aee3f10c9b13f9413e73c58ae70', class: "app-header__left" }, h("ir-custom-button", { key: '8f5f353833f032aa832214497f82dd8812f738f8', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '98ff08d6658038d13a455b75d25878fb09804da7', name: "bars", style: { fontSize: '1.2rem' } })), h("div", { key: 'aeb9ce3256e183bbdfc7119de729146507c96606', class: "d-flex", style: { marginLeft: '1rem' } }, h("a", { key: '785152b9cc1519d26c98e3bd6d96b28ba6318708', href: "/" }, h("img", { key: '7079491fd8f20b0773b0f23fbf4d95064fed03cb', class: "logo", src: "https://gateway.igloorooms.com/irimages/aclogo/AcLogo_229.png?t=1597509988143" })), h("ir-custom-button", { key: 'c3298ffcabff92659bc908ce9828cdda3c997247', "data-dialog": "open dialog-opening", size: "small", appearance: "plain", class: "header-property-switcher" }, h("span", { key: '1109e0d1b1ce72928e28b2e21e8a5e3c1a31cb18', class: "header-property-name" }, "Hotel California"), h("wa-icon", { key: '439e4f17c6b267684696a8d2d840dee1661ce5d0', name: "chevron-down" })))), h("div", { key: '204812bbcccb32ffd70fb258efc4ae1e4b9bf1a3', class: "app-header__center" }, h("ir-input", { key: '1ae0ee7b5c2e767ee363c3438eda43052cc993a8', class: "header-search", pill: true, appearance: "filled", placeholder: "Search guest name, booking" }, h("wa-icon", { key: '37288aeb201f0a0568d46dea09b0bfe3093110ed', name: "magnifying-glass", slot: "start" }), h("span", { key: 'ad04b30cd072c771c4982d703b9e125d9458407b', slot: "end" }, "\u2318K"))), h("div", { key: '7eaa50901100796a4738704382fe7d942c6bfe93', class: "app-header__right" }, h("ir-custom-button", { key: 'ffccb50debd70fe9ce93b99645111cbf09c4d850', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'a75540b93a063d42a07d9e9e8ca0867757d0497c', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e9b67ed85242cd2b5a444176ab08fafeb6840842', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: 'ff12362d3ec14a5f7e4abe98a9b371ae6e3eace5', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'aef9ef0dad6d6201a80ffab0059ab8854bdc0bdc', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '1b3a7a583cfddb9109829e63cd266615cb301db9', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'db697b70eb3d72f43d6a9d5d5e7bb80088a8a392', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '7c7c0f106a598b750fea783ef6eccc4d18bba123', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8576f260da83260840d931b7be956d373928192f', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'ded804ee74419450b787c5d9833138991fbc3aad', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b6630264d3784e9a0066c03b57c105282c7b5cda', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '374bd721dc798288f75e515311066276b1f0b9c6', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '5cd5d93bda25538f212b084345cec35019772471', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '287ba9c24e5e674c7d5541bed5391263ba9e1b80', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e43c5b1203eceb66e8f1400301ae2c57c673ba58', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '0915aafd15bb8e2c9d3687dad28d547c528b83ab' }), h("wa-dropdown", { key: '0094653f0d0985f310812f18d61fe33c4c81c801' }, h("wa-avatar", { key: '70c8eb008d0a2a0b3ab21a3e483eeb18f55c4452', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'a598dd956372f30da63f713bdada6e9ea73b8e19' }, h("wa-icon", { key: '0a2c37bf58b53759d2790e9248b4867910903911', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '70c10b6ecec2897b5595673265d7044646d078a8' }, h("wa-icon", { key: 'a9358d001e2353f1248d6d5837a13d993a696f1d', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'facfdc7480635759c52a73a4f428ec9708e39db1', disabled: true }, h("wa-icon", { key: 'beab41d82607be6af108f26cbd1e2d932e90c4f2', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '3ea1e1ba9dcfa39dd12266f48137453b144504a8' }), h("wa-dropdown-item", { key: 'f251d981de9ed8ee461cfb5fc09e8c0fff05de98' }, h("wa-icon", { key: '8a2172d4f4e70fe38ec5d8740cce988982da7d78', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '6aa8c1eb541bf8117e643f425941d2dc549b09fe' }, h("wa-icon", { key: '6201f380cb380c64ad81a273fd9be5f25e44cff9', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '4a89521cc33a78bfb5eac5c1c5cc6f5c66b38a82' }), h("wa-dropdown-item", { key: 'fdebba4c1fc83cf4f76bdbfcb33ada84dbc1c347' }, h("wa-icon", { key: '33d1d77b87ee71b03b816a67b9ad1049786f6261', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '4b64e0fb3384879058ff5fa1cb41e758e512fc15' }), h("wa-dropdown-item", { key: 'ffbdd028f6811d5fe119f79640792d435e4c06d8', variant: "danger" }, h("wa-icon", { key: '00a1751a84c3e182401d9cbc03ef483c0bd07330', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '573efe003347faa76c7b17a99a307f9e554a09fb', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '1b6fd3f2cd2f1684b46e8a2ccac2c9ff49c3d17a', slot: "label" }, h("img", { key: 'e4c314783ab8f8bf262eeca4e135f878f45f224d', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '1199cddfca0bee7325aceca47ed2962e79d68f6a' }, h("div", { key: '9f4cfb73753aeca3e516a56412f274d9b7a4a708' }, h("ir-custom-button", { key: '577fb7fb5f50a42b225cccc1f0fb50cd1714484d', "data-dialog": "open dialog-opening", size: "small", appearance: "plain", class: "header-property-switcher" }, h("img", { key: '21927d38ac6c020047b74779bed17aa3456e9504', class: "logo", src: "https://gateway.igloorooms.com/irimages/aclogo/AcLogo_229.png?t=1597509988143" }), h("span", { key: '88c66ade35ea968cc02979da773121c49abf026e', class: "header-property-name" }, "Hotel California"), h("wa-icon", { key: '820515162615b79dce0422d2bb135e3383688d2e', name: "chevron-down" }))), h("wa-divider", { key: 'c0c6d841ea2823cd349704bc670cc37fe9312970' }), h("p", { key: 'a5d4ef97a0342bf3495c59d52baf9b85f418a69b', style: { margin: '0', marginBottom: '0.5rem' } }, "General"), h("ir-menu-item", { key: 'a3842491419d55f13c3698c4503b1712d7d28ce5', slot: "summary" }, "Property"), h("ir-menu-item", { key: '89888ce9fb03434efa083c99d0e0462b2b674026', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'acd7e2b700280ab339644a1550177ef05abce1ea', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'faa2741da00a424a42de2bbb8595440e01f0a74e', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'e1877862b305b65224e2837887d879f6e3df35e3', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '0a2153c16f42fb42fa44f16bfc6025eba9ef85cc' }), h("p", { key: 'd00cb6418c9d96a4ae384301d7b9ce06747c54b0', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'c3fbc94b362e7ef311e9e3716b9792ec0f57fd07', slot: "summary" }, "Property"), h("ir-menu-item", { key: '054a0f02e231a8827864e9cba2038c2368c491dc', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '4140a5b395a42920b56582804425045bafb5a287', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'a7760097e61ff51fe7ba5d94f104dd5d6c554eff', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '965b311a7803a0187d72d0d3a4f9ada75f3a1b18', groupName: "sub-property" }, h("ir-menu-item", { key: '0ccaf232a732b1edd397a7c8836b7f3abdbef065', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '8494f03d1447cba554c6ed81fb0ed47bd5730e5a', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'f831b3a4d2dbbdcaa8a8e1e39b23d94d0d0d89b1', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'e3786eb68758afb5f7df76233e18417f690bde89', groupName: "sub-property" }, h("ir-menu-item", { key: 'b3514472c7d2fd95664b6e4d51bd077fbcef88d4', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'c488d831fefbafdd7fc13b5a2afc9e31d0942d24', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '33c3733ddb20389dee653a78a636d93a9970da8c', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '434fb24be3870e8ff3c9f3ba0b8c8e3f8ad75cb2', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '546c243737c0a7fa9139983733ffce0248737bcb', groupName: "sub-property" }, h("ir-menu-item", { key: '11645f71386b3e3adee6b386083307c1c2c7e398', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'c391730a7ab97c39fdc49c7d19f89d51e5474e05', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '949c10c92b0abcf5a9814c5d27ec47ab3c325abb', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '581a73b82e87a04f69089d4292455ff72c88e2f2', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: 'a7ed74c626ca10f9783c7a93313e5a380a32698e', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '02f2bf61c5eccb2e9370bd2c0a43bdc093703a12', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '5f76602ecd912a4503ae4ff3f9b119b5c668ca29', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'bc272ecaa70adaba87f8d602e70eeb2c61d82976', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '670ddbe760721688290ed920ddfede2830545146', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '8dac0b15e93ca38825ce2982858e947982447a0b', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '3d4f0485b631936dc1a3f71ec4c6ba3c8ac2b9aa', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'f968187bdbf2fd7af76a6041afdfd912607b96d7', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: 'f349be8ccf0d903366c1fa6c473a6bf751be83a5', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '59e510ba7f6651cacfc4a7a753ec3cfaef20e3fc', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '25f19438317252d1234527a575475b595c9320a2', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '2c42997710fc5daa74e8db16335a50a4ce57e0c3', groupName: "sub-property" }, h("ir-menu-item", { key: '5cc70bf1277870bcab2c409ea795d491ea977168', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '2d0d6f89ea64222ee258115cef7b7eb799636ebc', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'd4ef864715fa61e2899c9db481f338f5aa1d6557', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '3c4e725501ada9f7fd45360c08d3e818b5498423', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '9d8db966f2552116c925c2923c3b4ccc1d0209d4', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '7a7d67ed4bc486a1ca0770bfdb09652edb7fa362', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'b444d33c081b2838eeb23e7159eabbfd7052844c', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'eccb4097c19750f3a969000a0e16226db8267e54', href: "acaccountingreport.aspx" }, "Accounting Report"))), h("div", { key: '623a721b0e00864fd85ff6b89cb7e540844df81e', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '8f3430d3ae5ab09d166265054e3f9616ab0df65e' }, "A35"), h("span", { key: '16fd6c1cd84dbc6053bcc525f2f516d9658a14ca', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'bf141a93a444f003768f733f6a9edc3f24893a72' }, h("div", { key: '30dcb244b9d4cdc688ff35d9b8fa32b1197bcc09', style: { height: '200vh' } }))));
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