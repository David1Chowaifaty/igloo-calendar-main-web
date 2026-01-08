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
        return (h("div", { key: '5961fd75a66ff50adc32b6b9ba4cb2ec5a297cee' }, h("header", { key: '2b79624cddd7f7284f1243345f593755f5968dcb', class: "app-header" }, h("div", { key: '78aaff990735bbefbb3c91858a336450f261b602', class: "app-header__left" }, h("ir-custom-button", { key: '4e677d4c4d360ccc11f3425d75d5c48142daf604', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'a33a8a063ecd4862189c55637775c8b034fec1d5', name: "bars", style: { fontSize: '1.2rem' } })), h("div", { key: '3e8483f6744a195be4ef4df6a7c956472dc2cefe', class: "d-flex", style: { marginLeft: '1rem' } }, h("a", { key: 'c7851bf5e84e68d059b499b97b8d09be95b8fe1f', href: "/" }, h("img", { key: '308f0d44138983691e0fa04dd890539bf056f336', class: "logo", src: "https://gateway.igloorooms.com/irimages/aclogo/AcLogo_229.png?t=1597509988143" })), h("ir-custom-button", { key: '2b65240cb964346c6688086c3b668e9eafa48f3e', "data-dialog": "open dialog-opening", size: "small", appearance: "plain", class: "header-property-switcher" }, h("span", { key: '0d5f49fd7ecc77a421882004067d0c8db5f7f907', class: "header-property-name" }, "Hotel California"), h("wa-icon", { key: 'fc5121224684e4e9025080e5612406239bbdc522', name: "chevron-down" })))), h("div", { key: 'ff79c1ab42362594d3c398c97b679333af2277aa', class: "app-header__center" }, h("ir-input", { key: 'fa56c4bc91d9eebd01b1a2731baaed13e26fb4b2', class: "header-search", pill: true, appearance: "filled", placeholder: "Search guest name, booking" }, h("wa-icon", { key: 'b1f54579bed3b1d383c0059043aa2968ee3074d5', name: "magnifying-glass", slot: "start" }), h("span", { key: 'a53ff73e81a19fbeb780e6474e5dc6f01b127918', slot: "end" }, "\u2318K"))), h("div", { key: '0f74e797e23d47a0be271c3f69457c8ec2c115e9', class: "app-header__right" }, h("ir-custom-button", { key: 'ec5d1024c9f13dd67a17a1c812f7a4c48a65a9fa', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '5fbf3be107bbe1f4bd7185030793ce98632ac08d', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '3d16831673928d83417f2cf9f1335faca515e74e', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '33a117726b8b7f055d5498fc45db6306f94574f2', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'bf4267ae7ea90fd4f3449966032fb556f57ec428', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '7a4504e06e9ad0c482785bbfdf3466ac558df6c2', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'f3ce76af09ea65c7b84ff1b9175a2e97096dc859', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'a98f6f293761c49c776fba01a28b9eaa22b99a51', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'e43cba6147059cad0933e604685ec2d627733cd8', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'b7c508a6619935cb3d9ddb64d86d032fcf7acb78', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '787dc97aa4749d7cb97acedf0078ab63a80b5bc8', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '97c7cb038cc6269433ad9db1ee314750f5499f8e', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '9d9836f4647b2828e00126eab368f90212a4265b', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '9f1a25a8f7c1287396acd1614fbb0fbf8ea065fe', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd67bf5330402f55c66ef8c1ae50ff50c88d99b66', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '0fd75fb986b073a8545a18434a621704f6bc8e29', notifications: this.notifications }), h("wa-dropdown", { key: '25a5252c6e66add7676be8581bc652faf8baa2a8' }, h("wa-avatar", { key: '35b34c44cd36f90693d06ff141003cc58eb7e01a', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '07350748534fb088a3b8639887f4800c7e61cf00' }, h("wa-icon", { key: '91bb4891b272e17bc7f6abe344161eb3c4c94a37', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '0d29612ca155dc6d5a16a1adf2bff2ae8d2a70f0' }, h("wa-icon", { key: '3d31c0168952055b38caf18475f53ede472148e3', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'ad71582f135a2c370793074cb3caaa6b43ade531', disabled: true }, h("wa-icon", { key: '9ea1a1a476dd72b3924fe92588265e84fd23dd20', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '5a15e776dcedcd292943ff77343151517bc47b05' }), h("wa-dropdown-item", { key: '97ca411bcf2d815fb6246ce655e6335a6f0ce97f' }, h("wa-icon", { key: '2cc71e384480cc6c2b2587517c140727796f415d', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '97e8f22c5a4046adbcc10bbc14602a15898491df' }, h("wa-icon", { key: 'aa256c519a9d5402b499478229f57c264465d2df', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'e4723d2132046de45c6e78a5e732a5940417e33a' }), h("wa-dropdown-item", { key: '29cbd33f71fbb3707a14b84072492b17d6997d79' }, h("wa-icon", { key: 'fc437cc903fbbfcc793fc230ad1a27e1485e0317', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'e9d67750b6130e82937e26e9200f45a623fc102e' }), h("wa-dropdown-item", { key: '36c2202469fa6040fe801b93263aaf6b83a3fee3', variant: "danger" }, h("wa-icon", { key: '63b8dc1619a14dfdd06e5ce104642adc2702490c', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '7b13fda9f4ab6f519f754cdb03f53e22091e1ee1', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'e69a5a0b96e1baed79aeabfbfbe658d2cc42025a', slot: "label" }, h("img", { key: '4f96eb158f9c02df26ba4268a941b8517e63f671', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'ba445d142bf0a86cbc4f4240cf53ae2a5ad1b9a6' }, h("ir-menu-item", { key: '8a2ea8a648fb0017e0ddc4f1489f216ee1ceb291', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'd57c5ddd6949735e4c0dd5f6323019233f73af37', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '0a6e469f019d8fb12e5bf297598ae48abf79bb7c', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '5704a61c940721f97a121900f6b600b4ad9615da', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '9877d35f515b05a740f2f8b07afbe42d4d8c58ea', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '1702cf78b563eaedc172b55337115f00168ea0b9' }), h("p", { key: '97285afdc63504e818bdd4d8b70f89e660d5380c', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'c28ff31047b4337a8884c1321df219a20968916d', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'f2a0dee153fa7e8deede7ba0429920ae694af2d2', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '627b51458a12d77de8fea444a31a5377590c5f7b', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'f167477ac6f77bb1261ac9978c7589a729b0bd98', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'e85e83e0ad30fd9d48028530466a4d8533c95e3e', groupName: "sub-property" }, h("ir-menu-item", { key: 'e05059931011a3fc1fb4589c74c6d7bb9a81d94c', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '476643c432720e872885c668eeeba6c5aed0cebf', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'ccae294d5d1fdeb038ec02b1173ceae39a94624d', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '4dea90e6afb7d9d2328da2b0d8c6d8d5dab47248', groupName: "sub-property" }, h("ir-menu-item", { key: 'f2b2f2f8fb7f5c8a6bf35465cb5918a3c1c01774', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'c20c2609936e0ffe2e70f5fb906cb971e4e561fa', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '9304b49ea6f2049d8b5a354cf17f383ea48c74f5', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'b393f3c739cb99ad1b8eeeae827ecb95d642de29', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '685ed66c063ec00a827bf13115576ff10e5644ae', groupName: "sub-property" }, h("ir-menu-item", { key: 'c1a4160f4f558769c1010d371b281fc51e62dd90', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '4a1b563ddb4fdf648f814ce0407fc26fe4888f5e', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '04f1807ea191a49491aacdc08fa036d400c73594', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'fdb52990bcf0d8f49e061f53c4dbdecb92e49ff6', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '78a553bc0bee9b677285122e05bbbbecdfcb1551', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '1cd771cd0b2a402ad86b63c54f068101f30090e9', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '3ab2c9bfdabbef714df5cc888628f6f60f318d3b', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '34ac3f2272b25c325ac187494d1989498e209bbb', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'cd3ec64338503f18ed31e1cc94b25183d99ff9fa', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '2ce4f76c16fbceca43b6e52c0e59a2209fab39b9', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '1eb56213ebcaeb5856eb419718358d16f35f6601', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'c9229e8114a20cb8ada3d1c2b7216720f5b90fea', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '98a1dcc802fd5db27c768d938b8043d98bc2dae5', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '0e774133ea4051c5f756fa58f20e344216699224', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '2d956a7311be7b50f34da1da4026eb625e3d9725', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '5745c8c039b1277247a9c1f0eb751c929b9323f8', groupName: "sub-property" }, h("ir-menu-item", { key: 'd856f3e95bdec632af757fd36912f6079babb1ac', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '26f9ddf33f847bd2f744454a0d9f93fe4fd9e4ca', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'a4ac3520496320acf4ac445d37e68590f2d989c2', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'd9afc740f0061978c5276ec0e85c8c909737731e', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'b3c6f65817b2f30c53ff1d6e4f6ba8c4e94233b9', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '1698fae8c791e0d2bac68c79c17f5a88eb7bc3b9', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '869d70e3a71169bb1ce02308dc678edc0369f0ae', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'b00bc90526bdca504393c3ebac490498717eb8ae', href: "acaccountingreport.aspx" }, "Accounting Report"))), h("div", { key: 'ae65c626fa34903fcafc959a9e1732dc1ee2ef3e', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'a0c4538cd9c82609bc064db747ef5f8679c17a02' }, "A35"), h("span", { key: '0818e37d80bdec35c3a5859ee1bd5272022c476b', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '076b53cb53a4ef8285108eec256bfe576bc70eec' }, h("div", { key: 'f13a0e1db98784621ffa162c517e4985ea858dc0', style: { height: '200vh' } }))));
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