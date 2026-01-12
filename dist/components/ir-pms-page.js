import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
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
import { d as defineCustomElement$6 } from './ir-picker2.js';
import { d as defineCustomElement$5 } from './ir-picker-item2.js';
import { d as defineCustomElement$4 } from './ir-pms-search2.js';
import { d as defineCustomElement$3 } from './ir-property-switcher2.js';
import { d as defineCustomElement$2 } from './ir-property-switcher-dialog-content2.js';

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
        return (h("div", { key: 'd15aa1ba28132f4d4d6191f6f4dc643f275b4cea' }, h("header", { key: 'b0c3ff0500e1c0a0f2ae2be61d59bafbed033a87', class: "app-header" }, h("div", { key: '12607fe56b3f77c00aee52af0373c653f7a7d1d1', class: "app-header__left" }, h("ir-custom-button", { key: 'c2ffc9d19cc9f09caeb9f7b75a542477c94d45d1', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'afc14955de4b11c77fd2ff56154769bdbcb50d3d', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'e2bfc458cb4611d45d4c5c4f88443f8149562305', ticket: this.ticket })), h("div", { key: '0845e359272633ac45e426f77d1f4b165266d843', class: "app-header__center" }, h("ir-pms-search", { key: '91b4e797ec709d0fb49dee96f241f519f98c1a5c', ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '46049c373e2da0b7d3ffee7e70fe109325f220d4', class: "app-header__right" }, h("ir-custom-button", { key: '40a761cfb6911f227f9157842b53fbf4a82160ce', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '113092e805933544c5ce37005da392652b8d4971', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '5099d48ba66bed2f07e130211a2eb09ae49d5678', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '2fd8be72c53f1c7b3ef8f1d029c88ecd1b162d6f', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'cef796af01ba752a37a926cc34aacbb65a1c98d6', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'f695a4e164b3515b77bf95ee5171128737542c5e', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '58fadad933030ac4faa4126af1040b733f49a691', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '281be9a591d5b660ee44b4bd624ad85e369a7398', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8eca1ade729efdd07008201ddcae3e31ba81581e', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'f7934d5d7f5d0e8f0a0e2c3334efafdf3e412fea', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'fe3948fb87d12bd04f08afa09ac5fee576580f17', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '02e7b86803dd9366f5093874c91bbe872cc0e672', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: 'd35f155ef1b983c1db33f8d7107fe3249c8fa223', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '1b7cc313c806a0a50b06bfc559c1ecddd12826e3', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '7c096b8be16fc01e9bc9e62e187ab018d4d5ddfd', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '7e9647fb6255e2c762e690e4778d372f5fd273f3', notifications: this.notifications }), h("wa-dropdown", { key: 'f4d46b1eeca88319b61b4c31c34e6cf4d472647a' }, h("wa-avatar", { key: 'fb1dfc3e15da3537219812e2f260bef75b2aeb98', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '9ff6ef4795ec144533c0ffa88ad677fe712556d3' }, h("wa-icon", { key: '97f644223a3e66e1f2e061cf3200d341cc0eda27', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '0f2937603e6b49e4145f9feccb948a8c0238fc93' }, h("wa-icon", { key: '7e605f1353e0e09c4012b7dfb71531773c686196', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '5462254b60d0e1bfba438de3cadc1a57d04ffb32', disabled: true }, h("wa-icon", { key: 'a8b5bfe79309bbd5464a814f43e54d331bcf697a', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '8a1c4a03f1e4f9f539a32fc6b038bc4a603b3675' }), h("wa-dropdown-item", { key: '90a7e28045aebca746f6e6002db30365489fe421' }, h("wa-icon", { key: '47dbcc2ffb717ce9a40536a6059b31a930f8ca93', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '15c7d2b87149251cbe7500fd5a0278bef8590377' }, h("wa-icon", { key: '9b3c2bf2d2bb519c738a83fad5e76a5d95472d34', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '7ec5681471c547ac97880be131a5451198aa7d5d' }), h("wa-dropdown-item", { key: 'e09942419f55f02c2aff05950888e1d5bf9da654' }, h("wa-icon", { key: '0823d795d9dd573d9906ec98e95fbadca8ed1a6d', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '050d18cad30765372fb77a3c91122295740beeea' }), h("wa-dropdown-item", { key: '945f91c3583a9ab6d1540d6a8f2363c438193257', variant: "danger" }, h("wa-icon", { key: '346979c659ca8ca12eb0d963e1b9e2f838a329d8', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'eca02f35c2807afe4d93608a6c0f719f57f6dc57', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'df4efb910661cc0648a2d6247fa16c6a4d4bdc01', slot: "label" }, h("img", { key: '1b3486c2f9971dd90ba532a7edf8c78d7e691d9a', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'a7acca008293648b257905fb6f41962eb0e30d1a' }, h("ir-menu-item", { key: '5e137d3a6f9d246acea6069ef93a0d3bac358f41', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'be5153e91cdccab0e359b28a51854bfdf91814cd', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'ab78f54f4b9f0d90213899e813a42719a4283901', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'edc11a392201cdb873e6f03e202939f60ce9cd02', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'c710549d72b929efd50de6559426483d11805784', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '42dba1716def7143452cb6b413613b833c368d5d' }), h("p", { key: 'c9d8f4b2bf4493452c979444b91622869b75d91d', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '58c0a91d51f6e9c257b59c7b3183b3b3fab7bfca', slot: "summary" }, "Property"), h("ir-menu-item", { key: '60adb9416f3147ecd225b79929db8bfe0cd36d4a', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'fbe41acd82b0cdc09a0446f4de79b5080b466d82', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'cc8cab34c4b185f38b53aae9924ba75ec3d50ee2', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '4e0ea932618dc632904f6096060c5f860a3c769a', groupName: "sub-property" }, h("ir-menu-item", { key: '6f9c7ed6f66abfd15aa1357b6ac4cdfb16076681', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'b7c3440adfa73da19cbafcb2eb8112adf2e39370', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '9f620f0a6864710cd51a7c2c5f182a14100d21fb', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'c9fca26c6ab7e44e53be59b98f790ddabf74f710', groupName: "sub-property" }, h("ir-menu-item", { key: '8ba8abea12e71f0d3fadde2c1f64c8d977426a39', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '5d36da35428b091fde6a61814256eb353000407a', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'a756cce3716eec7b4ea8c3f8e2851f44904f430a', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '44720043a0947969de65bfc617bb0019f9cd379e', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: 'cc368fb48d3d4cc3c53f7ce07261774139af9ce7', groupName: "sub-property" }, h("ir-menu-item", { key: '4ed43e2c640eb894eb9f569162d6cb505f3e4026', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '71bff0ebf59ddac2a183738eacb7bdeeb2d4d310', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '1dc7e583a43cb48c9d18a0b90ea552a556fe9a7b', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '6eb33ad0355a0555b53edae0de9ba7f074a46059', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '564b14a180ec1afccdc0338e0d7b8f5dd5563a3f', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'd64fc692019f98f0e97a85a945fef38238b511e5', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'cc230d8ee375922de66ebfb5da56c8c515bfd0e8', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '88fe9ece65538600e95c6389fefa7f87eb90aac6', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'af880b0b3e67837b5cf00198818500526456dcc3', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'cdcba6a6e64f5169f0983bb82ee16727e95695a0', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: 'da47873fe432d240de0e7eff10f7a68f5214e216', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '06bcb8893caebd6c5fb49c5a89421127a26da506', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '429fb759e5e7da10700ebfd9302f7997062e1e76', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '5a29f4e24439def845a46ed5c4942220e1ebc402', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '3f35601dad465ce04a89ca7564ca207c6c5c01e1', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'fb565f9c853cdcfe2da5efa6629162a11d1a246f', groupName: "sub-property" }, h("ir-menu-item", { key: '08c41a98da0823b48eacb501895c232eb9c6b74a', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '6689144d8da53cffb14c597f7e2f5b9eda4e8cc7', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'de57e0c9eebdb567cf5d00540ef49b4db6cc7e1c', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'd3fb6c8afeccbde403857df61993a43c112ad7d8', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'c9b498f7a89e4c72ba0297eec23b369101b205e3', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: 'a55bbc1845bf8c6aaea7d5067e54bc8b139e4bd6', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'f959733ef96f446e65e32d8eba6d33d28201fd28', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'eedeb71a36fee4143aeb157c3269167293a78ed5', href: "acaccountingreport.aspx" }, "Accounting Report"))), h("div", { key: '723514e984c31b175a139523f9d263e1406c39ba', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '1d0d3af2d2d77c522200621e36ec1dcc374f60f8' }, "A35"), h("span", { key: '69138282f90ba5dea77cf56d6608605254a234d4', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '753a2f31dd24b124e96a07fb4aa5089ed0b751d1' }, h("div", { key: '0b37c1ab9f6e7d60017d0954e50821a5c78f5575', style: { height: '200vh' } }))));
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
    const components = ["ir-pms-page", "ir-custom-button", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-input", "ir-menu", "ir-menu-drawer", "ir-menu-group", "ir-menu-item", "ir-notifications", "ir-picker", "ir-picker-item", "ir-pms-search", "ir-property-switcher", "ir-property-switcher-dialog-content"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pms-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPmsPage$1);
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
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-pms-search":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-property-switcher":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-property-switcher-dialog-content":
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