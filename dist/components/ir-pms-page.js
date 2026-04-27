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
        return (h("div", { key: '0ac890106c273778c3ff6cf8d5d54f857dd16ee1' }, h("header", { key: '4ea59bd5f72b3e4a6f30022550bb5a33e8e742bb', class: "app-header" }, h("div", { key: '2e405f5988fb056d5f8eb560fdf43d0ef6963557', class: "app-header__left" }, h("ir-custom-button", { key: 'c3113581397fa9fa684957c877843b25ce829b8c', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '589a0ac12b54c469dfe9c80b80f85aae58936627', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '812b09c5f5acd6c198c2bc927bc9ebe622c51fc4', ticket: this.ticket })), h("div", { key: 'f867763a41bcf0918bee21a89b3a7837808f9ee0', class: "app-header__center" }, h("ir-pms-search", { key: 'b895204ebc5747c19b36bc9b1d4a6f4251a37ebc', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '9979652fe4472f88bcf0b5166810dfaac6a7532f', class: "app-header__right" }, h("ir-custom-button", { key: 'e31c0fcfdbdc02a8dad0dc565652b7d0660853dd', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'c0a80dc4453ce0856c83617e7d83f13122a25b1e', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '613df1fb6cca35bbc882fcbbaad7cc26a0645090', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: 'a76911b1a421934cd5ea304889a6ce726b3b54f8', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'fa284655d12d4063db769742002c444c6c657edb', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '86588791893b9715216c91573d54fab58f03d75c', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '9d89b1cf47ca578069d12d8a4406a814c18e68a9', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '21f24d4edf60b3d433e171062eb39aa2f17ce44d', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'a3d84abfcdfadbf1bc79050d83af8c727471b879', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '84df5f72ddbd7626aed2ad980c9df332952c89a5', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '10e9a6decd06ee089d65df47bacb762e86450c3c', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e3216e93355e87dcd94b81c31b148f2b6c84c474', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '419b6f734e25e0d2d0310febd500d0c33b9381d6', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '22a6d156a5fe342577ee5af2c03684deeade4b5b', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '1bef02b9baf99e6e4f4b5d419d2d903d4d3bf4e9', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'd21cf613b2e616ff748017cbda99ccabc6739b38', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: 'fac8cba15fdde596fa0b81a5272bb502d985ade9' }, h("wa-avatar", { key: '8859d8cce8c9568dc298778c3262a042b47b7a8f', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '3fd46a272b5270292cf42bee93cce236429b7897' }, h("wa-icon", { key: '6dcb50d6908e2f950ea578f6fbd5c49d6986cb29', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'ed1858d038a73fcdc8a28ed9663548bdcbd3d147' }, h("wa-icon", { key: '42d39492753f450cf2c83c9b26186aa4ca649020', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '347d932aeb09ce7dd0393b6994bf3f2b3b359c83', disabled: true }, h("wa-icon", { key: '1fb001446520aaf49085792c98f7856b2f503889', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '5b16ed8a3e8fb1b675053670c1dd5d97fb310f7d' }), h("wa-dropdown-item", { key: '76d65fc8e2532c16c567f0c1a9439f0f8aaf4e77' }, h("wa-icon", { key: '5ca18a4be64901dff180bb802eff8112ce576f10', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '461b0a379b87d79be7e0cec062ae1c3a291a9549' }, h("wa-icon", { key: 'f392ac466a57c238f117e84a2269eeb175451680', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '85e47fab49f3bea55eeeb17d3cbc01c3e119729a' }), h("wa-dropdown-item", { key: 'a6b349c3a15fd35089c34502b11459705011c460' }, h("wa-icon", { key: '22c4c0f9e8e9a42a01fd37781e1654ce5aef1844', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'e66d66fe9a645d1ca2eb0565079ca79d90650445' }), h("wa-dropdown-item", { key: 'df786db22294159eae1e4732e329f5775ec46993', variant: "danger" }, h("wa-icon", { key: '308d82e0baf16ce02461ddc4faa3907c90b2d68e', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '57c54cb0a258862e5e784d22edbf36ad6ef338d6', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '77621303c870f8110ffe47a38f2f705d0817a578', slot: "label" }, h("img", { key: 'bd834df8fd3c7e503862d0e6aa1919bee28a5e35', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'ba0ca93d61d5960add2a39bcb1630aaea98c9716' }, h("ir-property-switcher", { key: '6ecff6ea3b886a1ac5ef454baade98d9356c47e4', ticket: this.ticket }), h("ir-menu-item", { key: 'b083a60b0b471efdb9be2f7ffc08c02098e71521', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'f5a91b9b925ca95df05c081cf30e6512ccba2e65', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '6ad336b9764fac5366d7d098d2d86561d1403be6', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '2ba0c68c4e75b3e05ccdc4a7541ec81d73c7f06f', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'b81a57f61983d5858e5df907627287cd46516a94', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'fc76bd719412bd5830a0b92968b83961c032772d' }), h("p", { key: 'f5178c863dd5bcff1209b7be4d9bb390937f0ad3', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '96d83ddbcd41627de885ad3a352b625975eaa3c7', slot: "summary" }, "Property"), h("ir-menu-item", { key: '03ae7fc95dfa93bde4190ad920bdf9458fb7793d', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '6110726517198bed993f23e4459fa6cc161d1142', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'f4d38e4793accdb42077716fb2c7b2e495cd32b3', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '3f51e73581ec7a27f9163b33697126989c75f990', groupName: "sub-property" }, h("ir-menu-item", { key: 'dab201484358fcf03634a218e3396af406e4fdc2', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'd13812520127433b3a438c7b486f4d91cdd914bc', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'e6ee191f0349d03b095b4c9d09ee1a357a3fd56a', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'f6d0fa45303fd14eec472e68464f2786e6a619dd', groupName: "sub-property" }, h("ir-menu-item", { key: '04d869f994113971d95def92036094abb977b6cb', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'af65a97471576e04670bc4bb3b09f39a93b2912e', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'a8cea71ad8da372b43ea5c9dfad624909a108727', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '12853f6c5fd3e6963b49f503c38ca5ccc84f8abb', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '6ecca919951309fcca32c53b91ae3a26504dc441', groupName: "sub-property" }, h("ir-menu-item", { key: '86043ba3210bce69f3c09fb2bb7024b02b29d863', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '20be88a8bd0f3b5b22f352f9c5bbddd6d6effa80', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'dae373557dc5a0bd9a2d553e7e72b4a95961c907', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '375ea3cd5b0aeedb4712739220b7b671f1178299', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '0e78a3eba8408c47fe376427d6146f95b4911106', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '00f1b09924ad082f7fa5d252101fdb743efc7e8f', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '34dd070061090b95572672a25da92107d0cef120', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '4e628ac7f475d1edd42628df2adcb3a68a760291', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '105815fe3548f083734047c4b627c3f6bd1a7ae3', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'd1e1a8e3f4a18cc7ac6d861ef7308e4f2462b4a5', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: 'f4b4b34335c00f51b19f7dbe4c314d82078e8690', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '89f6652df9f6eeac61019d7b4f407edeb70cda71', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '3ef7c9ec6dfeb6ed96425a783dbecb387e8aac3d', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '317cd71bf901ea9396887593d11f0fc5163e4002', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '80470b5de867f44e62882e23ee17282c75d95019', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'f6e203531b44bad3e58d728838f4cf3af354649a', groupName: "sub-property" }, h("ir-menu-item", { key: '5ecb099ec2e9e36506cb0a06ac28b264c09baaa3', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'c19c9a0a0675faaf05e2e88c55b1f83af278d3dc', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '7c221bf45085047407d6d26e66e1bc98b48404cb', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'ec725bec5d36c4265e2afc259a2d4b9e772320eb', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '85a60a196d810e63c3701bc4fb6464d089c91fc7', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: 'de1dc0b4acf154a7563629be11a5954a82bd7638', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'b791ca26fbdc028f10a0d1771b47b9c1027acbca', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '01049095f9a301a5d4eea7fac43c27002ea40b8c', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '97a65c5e27930114a0089b1a058da4c535378668', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: 'f8cb9abbd43fefbadf36885bf2dcc076cd5890a1', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'b77e5124821df052bd262ca9d7a55a0eeb8c8193' }, "A35"), h("span", { key: '7a8de09159e275ba3addd5f2197f349df805d8db', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'ff6a9bf60d259a71e55fa94d9d366c6eef159ae2' }, h("ir-pms-payment-due-alert", { key: 'f7cb6d86ff924c65637bcfe1fe5aaddce1fa52ec', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'e25cf2b01e9c956b20a113b253654c0e21599875', style: { height: '200vh' } }))));
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