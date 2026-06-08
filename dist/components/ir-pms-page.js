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
        return (h("div", { key: '137a2a253f876e3ef079487149356a174ee5194c' }, h("header", { key: '28e185b3140617a47919eb28eb28eddced55158e', class: "app-header" }, h("div", { key: 'ced84358963d3f66de689d6b5011477eae72b460', class: "app-header__left" }, h("ir-custom-button", { key: '531aabbaddd30e3e0791f343b3d137a79fcd3996', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '0e8d81076ec13c88e88e14fa644deb0c3cc830b9', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'e8d369ed9ba3cc54dfa2064e5accb521a826eb77', ticket: this.ticket })), h("div", { key: 'e2be25591e624ee87fa5f0be9fd5991a805c8427', class: "app-header__center" }, h("ir-pms-search", { key: '58ffcceaa68060f4b60dc0c8154d55cc526d3d45', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '190f3bb8f9348acadbeb4a33c01e2cb06b0d331a', class: "app-header__right" }, h("ir-custom-button", { key: 'b75189d8310b0bd168a7b00160b2cd8dd87da88a', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '1891288d0be624896e06fb356beb83096b5bb543', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'bcda621eb01ea0b657d30c75aa543d0f2c417602', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '74129aaeeaa6e999c707328a0db098ceb4495e8c', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '620c1ab99dabc2c8634a292a1b56bde3d2ecb0e8', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c31f225f2271f70a5385410a6985bb547f5714f2', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'ea70831d5716cf88025244308856b81deaea646b', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b682ba7a0758afeb98c7b1ba22ac10f27e4174be', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '636ad02aa8d9b2a17b12f174f159d3d9a0e86885', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'd677d582aebb76deef3be21a18a6cb154d8e1355', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'acb51e1cbcd12597ee24b764e9ea2521e84a16d5', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '374166530d343258b91acedf0c38c856a4179530', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '8026f1c76d13fbf0dc4a55cc86bbf9d3ed69f5a3', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b8c95226c2917491e76daadec9e1ada6ad905624', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '2a85f96482086d620f2dc670339f6d22c7574f15', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'd564c7a7ae81ed11779828774d64f2b6d22983fa', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '5112cc4b110c8d5661fb62b96ed4d51349da0d11' }, h("wa-avatar", { key: 'ce6f4ae9476decc0b50e0fbb3cdfe703554b3551', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '9bcfe6d83c3cbfe2b82ee117eb47985657e153c7' }, h("wa-icon", { key: 'd71977f67eed92777ced9253e47e4735dc125bb1', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '71c4c2c032a35332cf27af445de4b60706c49de8' }, h("wa-icon", { key: '6fb2077d4b4273fa616ac535bbd2827cbdc69b66', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '15fd0db04cb5cf2a3b81fb15362d726eff458e64', disabled: true }, h("wa-icon", { key: 'fbec3c3d437b55c478049caba2fb790d228bdf53', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'afed532e088ed4327887fbfdd0b234b3b930adbd' }), h("wa-dropdown-item", { key: 'e958c231931ad6ec9f9ee919dd123c8d8e35c83c' }, h("wa-icon", { key: 'a48b3bd69c015586fbf0d81b8b9505992ac891b5', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'b4988fd6de93c1689ee166ed2bfe920fde5626a3' }, h("wa-icon", { key: 'c8eb42fdb99b156206b35b8a615435f10a0c6716', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '831cfd3cd513b25ae846306c472bdfa359af064e' }), h("wa-dropdown-item", { key: 'c7116eeed4fff5f57fe31b932912d3aad97cfc64' }, h("wa-icon", { key: '7692be0664b46dfb47cc7d48d328b2158df0f605', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '07a126c5e23d430a58b55c18ab2678ecf658a7db' }), h("wa-dropdown-item", { key: '7b43e50dd3b566e3dd1d4cac9e0ba95074c53fda', variant: "danger" }, h("wa-icon", { key: '3a5b52823fa2b6eed3d90dc137a9214fadec11d3', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '596565e958c9ed5a53a994417485d2e87435f1fa', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '6a226276b91b953defe4d003e270088ff8dbaabb', slot: "label" }, h("img", { key: 'b64dcdd56c388b115181891c7d1d4c9214db6d06', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '564a3083cd93cfd474b26598b3ad7bbda664bd62' }, h("ir-property-switcher", { key: 'e84fe549a1f64922668e719ab0bcae22daac703c', ticket: this.ticket }), h("ir-menu-item", { key: 'b7284e2c44a2ec03d537d903af4d322a28d546ea', slot: "summary" }, "Property"), h("ir-menu-item", { key: '3affae5caadb9b756634bdd2a5f6fad51f0430b4', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'c610f32834f735e28e8e0b5e3d17f71eefe3d709', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '5651c8348391e8b31a08e604f15e3f77f629a0aa', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'ba61fafb94ec30dbd8ee53b769a9c08e3af72e3c', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '6c1f4d0f229d6ff12fe2808fb3a0c57238ffe118' }), h("p", { key: '3395cec5dc5116fdc511bed1c3557df105a17248', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'a2bb1f66d26f99a55565fec452e845a8c83ba780', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'a642ab91cf696a2c850245c0dc2c53728d153326', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '65f0977c43db66657ce24d93eefa71f2ed7d140b', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'b27e0a0ec7c2aa82397aa06e68226d90b76f37ba', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '797bc71e4b960a697e798d9dbeeca500b5eb2f7b', groupName: "sub-property" }, h("ir-menu-item", { key: '96c984d438eb546cdd88dec069fed07e3034909e', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '277d396bbf9a3998860bed7566b0180a2b554616', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '0c6885fedfbfb3efa5c08cb2e5bb43276993b535', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '3c4f1840c617f36c0954f383176970bc1ccc1183', groupName: "sub-property" }, h("ir-menu-item", { key: '80b98c6b66ca9f41c1ca4529377130e7749294cc', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '468a9de63626df7e7f5f6ad1f733bd5ad6bae955', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '83bfa895ace6f9d5e101e97729bd8ad46e7656fb', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '6fea4cdad0b381f01b277650f5d513785b3715c1', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '9d339283eb4bcd092010dd281197ebd1d1695350', groupName: "sub-property" }, h("ir-menu-item", { key: '82251be4cd042958e125923db4a1a0a657e55ffc', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '82dc513f1ec3a48cb20b92af18c3e75eb8c99d2e', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'ebede54104f50c1b216227212f41209902c53ca5', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'be190fc912bbf0f1a21b63f7648bc8fa09ce79ad', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: 'bdbe3db4e0f783870dec99604b667dd6ffd289ce', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '00cde9031acc6b971edc6a0e1a05c51e9564df71', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'e6ccaca3e3847a116a5bb2bec4a0115db506d8bb', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '8d0594a4847cc965ed34f5ab119f825578d2e77d', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'eba74b06ed8660dd72891b1d15627372e96c8c77', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'fdd18564ee2d2e3597411ce978956b8068bcf6ad', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '453c5537d0643f3ec7173ef2ce6fb88a4313b999', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '9d93e8f6f3e30d7bd5f88fc913d40774be65c284', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '84c2a41a20b899701a2599b91c6be5b047060766', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '92be1d77753f159c852489db3587ec0379960722', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '4aeaaeedc6a19703090f58c276cf07926418cfda', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'e68375f640e8a6501528ff790acf400ab7e34af2', groupName: "sub-property" }, h("ir-menu-item", { key: '5808ee965ec396ec84e1b1930454dffefae3d241', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '79f4fc4d00f8702a04b61bac923d82da9144f84d', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '9270966db0993d367426622cae6199e20966aad2', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'c3b23109acbe7fe88cc1fbc010ea9d8f71421c8f', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'f1dc834dcbe1273565dcafdcec2d30239766d044', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '585a50f772666d839e4eeae5b327be14f80eeaf9', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'd8ecc5060d412902b1b7bce5033017d81bae2107', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '43b9e905d409145934e4ac9d9032f9f4faaa317f', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '3f917ac9cfa457e5255f2a869462970f9e52d087', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: 'b8b762605c65b957991798a597ab2c3da9ee14a2', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '9dd752a66052b0a8de41e6088481479f92008cef' }, "A35"), h("span", { key: 'f730a27bddee8ff41ef45072e24f804ec764ed5e', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '71e1accec5cc107a0e7142fd7661588cc4c4717c' }, h("ir-pms-payment-due-alert", { key: 'c6b1f40395d038b7df977157219f898efe8ef4e8', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'c592dd153ef2ee0411fa92e482f73051c6c848cd', style: { height: '200vh' } }))));
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