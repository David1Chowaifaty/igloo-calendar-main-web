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
        return (h("div", { key: 'f3249548629bcef4c8f9e73dec0e58919c0df4d3' }, h("header", { key: 'a00762674adeebf1aac7a36c67cb0853c0a63e18', class: "app-header" }, h("div", { key: 'e29d51e8bcc90bbed577e063a14a50e65c2f99bd', class: "app-header__left" }, h("ir-custom-button", { key: 'a612951e92384ef08ab7d71ad99401ec449ee3cb', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '19f90ea45bf49b79f8a3afbaab084c78e498adb1', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '65b57229dca5fb4c73efadc8d160ee16336cd503', ticket: this.ticket })), h("div", { key: '52f830e389f30b073c763374a8474ba452d754af', class: "app-header__center" }, h("ir-pms-search", { key: '44a75a9262c070b60d9101355db98d2dc9a27abc', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: 'e759e4c797279aab568e156cb027d7e1760fd158', class: "app-header__right" }, h("ir-custom-button", { key: '69908aa5faa3fdecc254b84de32cd3f4d75664bf', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'd46a1d3ad93c04fdec074d0988fee021c0e65ffa', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '81e05d578e952e3000ce3dea1c62f85b4f0c4e4e', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '3d2c3059f85822b5fd13db71aac669182b4bea49', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'a78bf8054b28e188678f19535a199d6fb7fec36e', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '62f85e7f18ccfeeeb3d2326a98c87d847dda66b7', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '0daaef2676c0b540abc573a408537368b9e7e276', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '725b6a3553c395fe0b7bb9a36f86ca99cdb5d131', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'f6033b2cc5e3da6d0116d6bf7a67f4198f74f461', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '2e1fc911e754f218006d7d6b241da19d5719bd13', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '68cf249dcadd145ce5bf19b10ffc955987ddd343', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '829a9c3f97c23aee38c9d48253e94391c314a2ed', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: 'e86991fef362be89dea717a490eaab52c6a020c8', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '6c7a717ab2a21198a22ae64bce502419f7e5db50', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '453da9e48cb839b5b312e205efc18a106f0e7a2f', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '4ec97a4d7f414506a05a479ffc33a68516ba77b2', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '1aeb960e038e11fd5963924b59f965970d07664c' }, h("wa-avatar", { key: '99ce2fc4946ab4bf1cbc9973689e8a37ae9dd81d', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '134ed1a023f2ec30187317ae2b0a118ee9093394' }, h("wa-icon", { key: '0e39614e3a47d4160e6a0fa65543b09a90f16545', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '69b1b3d715c61c7c4ff61d0f1db414e801b2258e' }, h("wa-icon", { key: 'c1c1b96880fd338a497e5101c613afa58f8101f9', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '59de215496c160c26cb33feb4cfc1cde1811d049', disabled: true }, h("wa-icon", { key: '37dd0b1ef6353e76cd4cfa374b1c75ee4a01995d', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '7102cbd04c8771cd24cba9862451a362d5ad2904' }), h("wa-dropdown-item", { key: '5d4fa11b8974bd37ef2ce16f533f7e5328183c13' }, h("wa-icon", { key: '0ba0de979f034392759c56738af9c232cb6de4c4', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '4e6aed41ad29b4c66f1caed6b3833026b053ab2b' }, h("wa-icon", { key: '78854b88f6ff2e00b3cf02f66d0aa4cad0fd55d8', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'e3e95bec61a7d51d3d8fac70e82f8d82d76bef3e' }), h("wa-dropdown-item", { key: '5ec263eb20dd229eb9b904f7606139d3a01e9a64' }, h("wa-icon", { key: 'ab12523bd93cfc7c187c67bc0ccca23539599b19', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'ffcd60bcd2f389151ad3045a111bbb85447cac9f' }), h("wa-dropdown-item", { key: 'e1dc8d5219e744639ecada6f876ae39bf46fb830', variant: "danger" }, h("wa-icon", { key: '15ae4e5d10ddc3fde193b5737799d0576d7cb786', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '3a4c7941c075c7141cac53e99f27d022ca935a14', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'b54c185fb7dd697f93d79f8607cb0fe1ce5b6c14', slot: "label" }, h("img", { key: '03fb9223c01e95464468b76f2455f3c4b7a5ade7', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '2e7924057a1e544fc596c9053aef935eaeac3475' }, h("ir-property-switcher", { key: '41f60458ea558a64a259105a31e65112c0c56f39', ticket: this.ticket }), h("ir-menu-item", { key: '66997f74fcd2eda2ca3b06914b209523a63f811b', slot: "summary" }, "Property"), h("ir-menu-item", { key: '7fce6a013ecbeaeee3a389d5a521ecf3fdc5afca', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '283c297848d214b8ee251a07cc2f7d78835ff094', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '3ca43794144cd19c6bf0df5fac107d7599184d7e', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '8e4d87eaf898f11d41ca083c5645b2a21f0bdbdc', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '67c7fb4eb8c646f016411764a1ffdd0f1f59428a' }), h("p", { key: '313b7a3f0bba517faf54de785d6a6ba241065c27', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'c4e3435644794dcb8204d51af6b9e31b0e4bb749', slot: "summary" }, "Property"), h("ir-menu-item", { key: '067f613ab0e9ee8d1fb868e6a7a0f9c3aad60e45', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '2fb4311468615e29b0569f40708ccb4c7f7f552a', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'cc2c3d6820fa8ca11771aaafec1069748dbea688', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'dfaab409f63355a7566bbae7755d6f87d759ecb0', groupName: "sub-property" }, h("ir-menu-item", { key: '429c42ed2691d1fd8d34e93e9c0107f65a1ecf66', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'd50c932ba2124457ed86b9447a54472297ddec18', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '80632f2205cea73be590807fed680b55fb006dcd', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '5dcd09d8383026d351a754d55531f30916d69581', groupName: "sub-property" }, h("ir-menu-item", { key: '4c5ecae24f4d8dc6af5ebe29add18dd78f03dc80', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'cd98289a71409ac83e7b75506c7be2f0b9918695', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'b3f5456eb74a3d363749d41119ed8e08b7278782', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '936d1ab053186a9ce95a6725ebd4b20ac4df84eb', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '9ccc6a4cbb0376ea54dbbb4003166908c5b534e3', groupName: "sub-property" }, h("ir-menu-item", { key: '440eeafb14ede29decf41b97aa389a6d1e1fdea3', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '4e82b495a59bd7231c043716512bd2d19ae41447', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '7f61190880fb7f7179de714e11ae5eacfb515aa1', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '50d2672fead5b386f5b2a90574283fa8d706e3ac', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '3ccc51d8049dfaf7aef0553779b1ba97a00ddf7b', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'fe26920ed8213f9289225e40fa2cb29a33902722', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '689f1034fc2be97d73aadd75e3380043b4856f62', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'b7bf3d9f078239a560b9b6e12f84d888389a673e', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'e72545f1f96e2df72624e46cf03d2f51ef8b7e44', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'e12ae88a6c18a0e5e9076cdd3429be244f8673cf', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '3687b95db79f034e2c13aa3a210f336402269cce', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'bfe822c292bfe2a56aa413e9d6209fb3de3510c1', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '81dea3dbc4b424ae1727d34fc170d5cbd1c8132e', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: 'dec52c815c484f1649ad633f6a6fbd748e991355', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'd1e319dd083cf04b26b3ab26cbb5a9f15a898a43', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '84ad08d1ce7204c3e2e1592501139329ee03468a', groupName: "sub-property" }, h("ir-menu-item", { key: '8842420277129ea9075158d0d088caa4c55bd7b1', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'e1b4f858e37a300a1ca1994df2a4b5b26bd6228f', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '7198ed1ef15b959142850bce74f2fa93102b0b17', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '879bf9f4201048fd0e70c0cf9888f7baf0cbc72b', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'ebf624d09d3cb6efdcccc3f9cddc2f0a6a913ff8', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: 'ea97d12d0d24fddc7b96dd7957815921d00b53ec', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '2a55b48319d81467ab9b922222501741f1a64e54', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'db046f9f59b82c0fb876e00e342764b44d6ed6c6', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '1f8b005906fec6c55f3804cffd274037da97f130', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '98d138723ce634f7f0077c01ca56fda000f1e056', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'a7c0438512c5bfaa0b1e9d78303204dd24c1cdb0' }, "A35"), h("span", { key: 'f15b392100551cd085623db6a64a16217fb62849', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '57ece3b2aa34c0b90410ce82f77e3c33e0399c2f' }, h("ir-pms-payment-due-alert", { key: 'd874515cdf1097fd3dd7c7d3628ad4095650ac0a', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'aa1b28209adf1b4ac1583e858851d942b2e109a3', style: { height: '200vh' } }))));
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