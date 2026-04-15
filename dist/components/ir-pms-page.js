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
        return (h("div", { key: '7c36acbedeb72bc3128c97d7d9a954295574718b' }, h("header", { key: '975d93b188b95d795e655f22c31f97f3daf530bc', class: "app-header" }, h("div", { key: '18bad0ff3d1e58a4287509a15c0031aa5201925e', class: "app-header__left" }, h("ir-custom-button", { key: 'd3d143ee8f6e1b20efa291803a9feff5bf38c3fc', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '881b82289a5fc45d20c172a4f13864c41c2c3c59', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '6593c38c2e6f12adabe6c5f8475ac43798505ec3', ticket: this.ticket })), h("div", { key: '6c854bec819a126afd81312ca162b09abc285f93', class: "app-header__center" }, h("ir-pms-search", { key: '46ae05eea71dd26f3c76f3c8fe9b1dfbbb51d168', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: 'd9e7236003315eed5c9a55b92e5467dcd7d7c81c', class: "app-header__right" }, h("ir-custom-button", { key: 'e82ccbd71fd3aed997841542584d7af669e7d5f7', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '4c6e58a30915ead7ddd51dfb438fc9977ff23e7a', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd3c94539cbcfb6baf49dcc36c46c4b2b7b3c33d1', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '8f7240d7a6f9b03c8463c222e059f34a1eeebc54', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '97af2a8fe153c8ecdd4839d83b9f9582b2d272a3', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd233d42037d40a444bcfb70c702ca6659923f581', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'af97ed79bf870c2d5e16894738ea24a129b90373', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '70de2116f492da056aeae42730c57e2d927392f1', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '380e90747bb722bd702c1a856e40918967b526b7', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '3d0d4a5de9b05b6d89dd4a1b1de00c862f7786ae', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '6a60ea1c1ea0b761aed1806e23cd3e5cca445dae', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '0ac89dce89499d63a3bd31a077037ccd8f7b77c7', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: 'b8a1a53029cd2548845377f9ce4bce9771791876', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'a94a9e4411d70fddb2219e08f7700e901a8522b1', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '21b112bbd142078df57af2177a84d12dbe52b540', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'df81a6e144e3d22323364459d3d347681382302e', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: 'f9be9496b09e4eedc84f4cce69447599ffbf88bb' }, h("wa-avatar", { key: 'df2bed9382cabf9f3144b8aad106b62b7ebb3ae0', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'e17db6c5020157af2ca347da6cdf570648e5be73' }, h("wa-icon", { key: '0fdf306c55684822a956754eb72858d09a2bb0df', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '4da27b2100df6e8742264b7bc3e6b28c4c3765ac' }, h("wa-icon", { key: '28676951cb46619627920538f83f86ca4334503a', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'd31fa5c8582e79cf835dc016e1c4c0bd62ff7280', disabled: true }, h("wa-icon", { key: 'c5fa8f3073a26b39bad694377d2f3d3f369ae1f2', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'ca2d9501a0f0668052a6070ecb3be2d8cbaca734' }), h("wa-dropdown-item", { key: 'bf208f6e199a6657ad96e30095cbab3996b1d486' }, h("wa-icon", { key: 'd19b0ace63ecd0b346ead58c6b50749874052aa2', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'bc4d53e999270825cb0b2b1915dd0c0893354d58' }, h("wa-icon", { key: 'a5601bb1445171ab931a34ccf1dae889b29102c9', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'e4a4d4ecba701ad9219ac2edbe572baac0daeacb' }), h("wa-dropdown-item", { key: '56e42c71d7bc023b83cf2f22a8b931af49263d2c' }, h("wa-icon", { key: '5010aae4f5ae700c9f41c35dffff22954c155fc7', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '2fcb5b15ad3f53693b134809c4450d899b3944ed' }), h("wa-dropdown-item", { key: 'e7729f4a3bf3d218432ee157f88d9914a3024b26', variant: "danger" }, h("wa-icon", { key: 'b0944300ecb3ebb50c768a77ab079b9c694642be', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'b9f1e8e825657fc6ab494cbab890ca495a3b7997', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '4662ed542a41923154b83e44816f0162d6729456', slot: "label" }, h("img", { key: '4b4414aa3ab184a7505c726cab9b15a36cc03881', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'cb2790a0939d3cbec7bace338361f41c5d7b42e0' }, h("ir-property-switcher", { key: '0f49cdebceb64d6cd45c153e15095fadcfb6436d', ticket: this.ticket }), h("ir-menu-item", { key: '576a94af2cb7a438e7a8093862d63fe281e43a9c', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'b623905fc0fd182dadfad0a2940bdc8e657ba11d', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '8ec0334dee22c7246b661469f4065816e919dd9f', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'b859296ea0cba00e927ef4e709603e8153a83811', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'e2c2a0e0e08c91766e1ad9d04140bd9cb21e7425', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'ac2a6cbc1fbc37b61b40821401dc635c1449d11d' }), h("p", { key: '5bdfa8d0743155172d94d9e901d89fcf3c4fa2d4', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'e1bc2b7a57c54e2e01cdb35bbdcb92635cbad53f', slot: "summary" }, "Property"), h("ir-menu-item", { key: '33cb128386c0f965edff31158568339188a58373', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '28f106e9af5fe8b5d66094be0af6b31cf5b7c569', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '939ea73454c62c88374b541ae953a18807d8d48c', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'a2522e95177fd5f0490c741e3ecfe54b57d336a7', groupName: "sub-property" }, h("ir-menu-item", { key: '60c40a7e955f0db38cddc92cdbb6a07b4c2054bc', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '1b4f921d6a3fb0d22bad9ac96ac8400d5b6e3bd6', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '656fa7a119cbfd183f256d8a24f3fe1b96ab27db', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'c7668dc72a5f633fe3b579ebbed92158657b73a2', groupName: "sub-property" }, h("ir-menu-item", { key: '983e69efb1d33e6dd2f59a08f7aa84e4c2b493dd', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '1876da1982029e1b490af9f19ac459b6a63f162b', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'e58514aab9e5c1e9795645c81d80be59c91e0aa7', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '449906c0cf0027b4f69406e1dc2da7a062f2cd64', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: 'ab0f2ccfbe4a54ec5779d097f7a61f535636eaa6', groupName: "sub-property" }, h("ir-menu-item", { key: '2f99d6823c7afaf9087aa6e59dc96515c71b1872', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'd8940236c627474cfa398271de096828e91eba39', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '1f45723436cfc8f8bc23b86715381583af4b8b24', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '24b24efd68af31ab88f684c4931023cb48a8aca5', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '32d3b96e99e69645af7c20653f8db3daefe69ed1', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'a0925710b956b8d3cfc5e6ac769068f24e388553', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '443875d0b5dc4ff613633a7b6e4503fba64fe770', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '3b48cb4f8e056be4788feb9a06fe3e7a234c3543', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'cbbaea317f76bd15285cdc70d83d785fc6f5068d', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '00fdf0e1c9832e3dd62088f7707cf0b0f73b43d1', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: 'c7b5fefaf1be3f8547d380e95538ec044b5df88b', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '0801e62a39234ce36881a6db443d8b34b225d57e', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: 'fda7b2cbe209d6834c654e2dbb4c5944dbf6300c', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '8eff71a4f42c5dea648d3af24975288bd4276f5b', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'ea12a3d2e15e2338ef9cdfd173b2966f0cd58664', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '560f3cbd98d29da0cdbd2704e12ab72a113c88da', groupName: "sub-property" }, h("ir-menu-item", { key: '9985feb4bd71aec2b25b2ce784f36221ac9d47d7', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'a3842194b288b867a12b9692466186c8c7e7a5c0', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'ea15e6fd3d81e2371f652d14bd23bfb917ae6d1b', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'd402f07951105241b19ac0903900b7b6678b7dd9', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '29a60d748ac01ee126aa874912192e71c52fcdd6', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '3f9454c1041378ea733a26a9e7a03881ce36e36b', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '9a03990a31b39aa5f878737d619cc45d6100a05a', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'b83c9818a94e83662f6baaacd3b9d419101b7553', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: 'fbaea48bad5f91a571f58458969b006eb6f13be7', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '908480815471b522b291cc108c3a2634c4b28965', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '1d415ebd8ba08d877675308872c91de9b0a5472f' }, "A35"), h("span", { key: '5d062b1e763572aea644e7ef41a16065f7eddf67', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '81412a1fbde9b9a0dd1331f7b1ddb37ee3f17a9f' }, h("ir-pms-payment-due-alert", { key: 'c01addff03cd0401b48bc412561885a2ce938219', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '7157e50fde5f4fc141571906254603d50398e1e2', style: { height: '200vh' } }))));
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