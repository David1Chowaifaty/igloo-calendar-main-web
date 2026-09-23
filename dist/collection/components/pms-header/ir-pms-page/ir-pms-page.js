import { h } from "@stencil/core";
import moment from "moment";
import { LocaleController } from "../../../services/locale/locale.controller";
import { SCREEN_TABLES } from "../../../services/locale/screen-tables";
import { LanguageSync } from "../../../services/locale/language-sync";
import { t } from "../../../services/locale/t";
export class IrPmsPage {
    propertyid;
    ticket;
    language = 'en';
    /** The shell has no server-localized data of its own; strings re-render through the store. */
    languageSync = new LanguageSync(SCREEN_TABLES.pmsPage, () => LocaleController.load({ tables: SCREEN_TABLES.pmsPage }));
    componentWillLoad() {
        LocaleController.load({ language: this.language, tables: SCREEN_TABLES.pmsPage });
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    input;
    menuDrawerRef;
    notifications = [
        {
            id: '1',
            type: 'info',
            title: t('Lcz_Welcome', { fallback: 'Welcome!' }),
            message: t('Lcz_AccountCreatedSuccessfully', { fallback: 'Your account has been created successfully.' }),
            date: moment().format('YYYY-MM-DD'),
            hour: 10,
            minute: 10,
            read: false,
            dismissible: true,
        },
        {
            id: '2',
            type: 'warning',
            title: t('Lcz_StorageAlmostFull', { fallback: 'Storage Almost Full' }),
            message: t('Lcz_StorageUsageWarning', { fallback: 'You have used 90% of your storage. Please upgrade.' }),
            date: moment().add(-1, 'days').format('YYYY-MM-DD'),
            hour: 1,
            minute: 10,
            read: false,
            dismissible: true,
            link: { href: '#', text: t('Lcz_UpgradeNow', { fallback: 'Upgrade now' }) },
        },
        {
            id: '3',
            type: 'success',
            title: t('Lcz_PaymentReceived', { fallback: 'Payment Received' }),
            message: t('Lcz_InvoicePaidThankYou', { fallback: 'Your invoice has been paid. Thank you!' }),
            date: moment().add(-2, 'month').format('YYYY-MM-DD'),
            hour: 10,
            minute: 10,
            read: true,
            dismissible: true,
        },
    ];
    render() {
        return (h("div", { key: '7c8dab4e1af51280f2848438cb4729750c849da4' }, h("ir-interceptor", { key: '402ce1728919a7213f2b9d61e4f639dd9feec3a6' }), h("ir-toast", { key: '8ae693748193b7a0a448dde69419fd43c032175c' }), h("header", { key: 'ea81480440ba265f6974054cc0d883e731cf815a', class: "app-header" }, h("div", { key: '3300feb9bab02464e52482dc7b2ad7c8304255fa', class: "app-header__left" }, h("ir-custom-button", { key: 'f2edc61c07772d247b96664f076a941b389bcd76', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '9c9bae8075d5246e1b670d5997ff8b3e6052ec79', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '9720168dc738360ea7ed2338f9c4fa8ee5a16f7d', ticket: this.ticket })), h("div", { key: 'b76adb944a27717e9f4ebdfaad336c15b51ea509', class: "app-header__center" }, h("ir-pms-search", { key: '7c779e7c0d1b9700c8fced410153afbc074f3d2e', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '3b71ac38760866997c933b6070da76e6d40e9480', class: "app-header__right" }, h("ir-booking-new-form", { key: 'e4ca438ca96d38f354ab958e09d7213fb32ce25d', ticket: this.ticket, "prop:propertyid": this.propertyid, language: "en" }, h("ir-custom-button", { key: '37783edeb65a032d3560200e4fa166aff9890574', slot: "trigger", id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '788ce94275bc5c4538fb505fd5cc3cd1b6c3f98c', name: "circle-plus", style: { fontSize: '1.2rem' } }))), h("wa-tooltip", { key: '980a7236c60a3c1892a5dee2666c538fc9978616', for: "add-booking-btn" }, t('Lcz_NewBooking', { fallback: 'New booking' })), h("ir-custom-button", { key: '9db6a009ff4306a1ca43e11489fe2fb9e77d2c5e', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'd57eaf4af0215c12e16655c9b1b307bb463bfc47', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '585a75507a6948d3b1c3f3095a523686ac3a4193', for: "calendar-btn" }, t('Lcz_Calendar', { fallback: 'Calendar' })), h("ir-custom-button", { key: '0b0391e77282da6189a7f9501c2bf0def38d3762', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '0a736df82809aab61243ed0a632db9312a1824c3', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'eb23e7e813b4723791a52c6d13a4017097634921', for: "rooms-btn" }, t('Lcz_Bookings', { fallback: 'Bookings' })), h("ir-custom-button", { key: '20fdc96a52b262263515d10ca7ee3ad7e51841b9', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '3ec048597cd1ed67311ffb6b1d60f24b26fa8c2e', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8b960790d45599ce0d5c725ce269ac0e898c2652', for: "departures-btn" }, t('Lcz_CheckOuts', { fallback: 'Check-outs' })), h("ir-custom-button", { key: 'e381dc3bb666ce7715e151ba1e19c428f97eab8f', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '19d90a8a1fdf217d7dcf5e7528d32060a16ccf16', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'b3c4efe97ee1b6e61beb7f34e63081490659337e', for: "arrivals-btn" }, t('Lcz_CheckIns', { fallback: 'Check-ins' })), h("ir-notifications", { key: '952b943bdcc012e87404b133acecf0bbf21cc1da', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '54d404351e88b7636487eb7e6f3b94d15d365b77' }, h("wa-avatar", { key: 'f3251f78664b245fb88c330cc69ba5c1e888061d', slot: "trigger", style: { '--size': '2rem', 'marginInlineStart': '0.5rem' } }), h("wa-dropdown-item", { key: '1025d73c26684e06b0c29d663b72345463accea3' }, h("wa-icon", { key: 'a60655142d97773a79f7a37adde25ef6bdcbb032', slot: "icon", name: "globe" }), t('Lcz_ViewYourWebsite', { fallback: 'View Your Website' })), h("wa-dropdown-item", { key: '524797af6c6bdd0b1eea6ea96414404c9a551995' }, h("wa-icon", { key: '6dd9d8e6ad966342c326fc928287478c362f042c', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'b896e837aefdab3eb24235fdc3e0391086372459', disabled: true }, h("wa-icon", { key: 'bbb34ff469eb0b6d7cff31657e71dc2430bacfe8', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'eedba094bdaa3ea304cb7e599f63257c3f5d88c9' }), h("wa-dropdown-item", { key: 'f9859d9494490111f275c6c414defb4e11d476eb' }, h("wa-icon", { key: 'c50af775d3feb2c9483df01b0a56e853f7fd4264', slot: "icon", name: "users" }), t('Lcz_ExtranetUsers', { fallback: 'Extranet Users' })), h("wa-dropdown-item", { key: '9ec2941d1f337e652eb8da56fde0912957ca788d' }, h("wa-icon", { key: '5ceb1cafc677661f9c0316c0b4aec857547888c7', slot: "icon", name: "lock" }), t('Lcz_ChangePassword', { fallback: 'Change Password' })), h("wa-divider", { key: '84ce9c3d5bd76ee6afd41097c256caf7e2650365' }), h("wa-dropdown-item", { key: 'b048010b65eed965b53cdeb589e3cf4ded4a1329' }, h("wa-icon", { key: '3c2c57d069227970df338555ae7b1e3eb40995da', slot: "icon", name: "wallet" }), t('Lcz_Billing', { fallback: 'Billing' })), h("wa-divider", { key: '6967e16c955026c3310748d20a57d6c9068e72a2' }), h("wa-dropdown-item", { key: '1822436904bd6439cea73d548a44a8d37a0fcc0a', variant: "danger" }, h("wa-icon", { key: 'f43f5f932cb8f6f04ce549c5f4e6dfd82d5ab915', slot: "icon", name: "power-off" }), t('Lcz_Logout', { fallback: 'Logout' }))))), h("ir-menu-drawer", { key: '3730c62f201bb975c2a1d0ead64473f99c829575', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '40e449df5cf133da70f06ad9b971d2f2538a015f', slot: "label" }, h("img", { key: '68f7a2f6e3527adf71328889ea1cf202cc0dd0ce', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'f9a672d782ee76280edbe393a6550cc11d6b7354' }, h("ir-property-switcher", { key: '0a27ee2c2438e9ee8c22bdafed9d9a7ab33146c4', ticket: this.ticket }), h("ir-menu-item", { key: '284b7eac6febbdcee4494fe5f8a15c034d4f29fd', slot: "summary" }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: '2c3a8df338bf05956555b54375e45a258794937c', href: "acdashboard.aspx" }, t('Lcz_Dashboard', { fallback: 'Dashboard' })), h("ir-menu-item", { key: 'db734b586db2a39e3fab78c53832f0e82610018a', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("ir-menu-item", { key: 'c565a9a782ca781278a5c1872bed07ba2731b02c', href: "acratesallotment.aspx" }, t('Lcz_Inventory', { fallback: 'Inventory' })), h("ir-menu-item", { key: 'd91c400cfad49c70bfcbbb20d3a17a1b1f69781c', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("wa-divider", { key: 'ca1ce53323ab54537f0c92ddd48077a4da4030b6' }), h("p", { key: '74ada981c4796fe9ab4498cf2652b12e2f202ec2', style: { margin: '0', marginBottom: '0.5rem' } }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: 'a09dd8a71fc3bc5c509ed2b162007e27321c5ddf', slot: "summary" }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: 'b49945f3769e8e5b98535f4c671ffae562e6320e', href: "acdashboard.aspx" }, t('Lcz_Dashboard', { fallback: 'Dashboard' })), h("ir-menu-item", { key: '351986349bac51ac9cf50169c0822a1435132298', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("ir-menu-item", { key: '842114b6cc80da4023d3c17afff8953292463a42', href: "acratesallotment.aspx" }, t('Lcz_Inventory', { fallback: 'Inventory' })), h("ir-menu-group", { key: '173244cfa13b2d50e7452b3427b498330f8dfdf0', groupName: "sub-property" }, h("ir-menu-item", { key: '76e70646e3784e562183ba77a4817d42a1247d62', slot: "summary" }, t('Lcz_Marketing', { fallback: 'Marketing' })), h("ir-menu-item", { key: 'ce62b5614efba10a2e7d5643d435c755eb5afa37', href: "acpromodiscounts.aspx" }, t('Lcz_Discounts', { fallback: 'Discounts' })), h("ir-menu-item", { key: '74f730bf8944aa9095e32e0d993a8d20ccb5ca1a', href: "acautomatedemails.aspx" }, t('Lcz_AutomatedEmails', { fallback: 'Automated Emails' }))), h("ir-menu-group", { key: '5b89cc20bc40887fb3efa81d8dbf152851e4d5b6', groupName: "sub-property" }, h("ir-menu-item", { key: '5f721ba0a2081bdbd4fabfbec595a4251981cb91', slot: "summary" }, t('Lcz_Bookings', { fallback: 'Bookings' })), h("ir-menu-item", { key: '2ffea0c7bcf92c6bb55b5291ceedf8fec4e0a381', href: "/acbookinglist.aspx" }, t('Lcz_BookingsList', { fallback: 'Bookings List' })), h("ir-menu-item", { key: 'f51adc36242a1f3920efa703d7467bf20d5af018', href: "/AcArrivals.aspx" }, t('Lcz_CheckIns', { fallback: 'Check-ins' })), h("ir-menu-item", { key: 'bf08947d2f68f297c0bb152a09083ee6241cc924', href: "/AcDepartures.aspx" }, t('Lcz_CheckOuts', { fallback: 'Check-outs' }))), h("ir-menu-group", { key: '7039ad9abeacfa5e1407239fa47ec0deb2d70976', groupName: "sub-property" }, h("ir-menu-item", { key: '99e09f3cb2d516755b70b6a515b61ea2e23f453e', slot: "summary" }, t('Lcz_Settings', { fallback: 'Settings' })), h("ir-menu-item", { key: 'bb5a8b100dc2ca4e0496ea30697ac5957f1f80b7', href: "acgeneral.aspx" }, t('Lcz_GeneralInfo', { fallback: 'General Info' })), h("ir-menu-item", { key: '2f1d4627a13e1b2724a9d72fc20daa319dc3baaa', href: "acamenities.aspx", badge: "    \u062C\u062F\u064A\u062F" }, "\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A"), h("ir-menu-item", { key: '2ca63120d424956e48af3ab67862f30e015fb890', href: "acdescriptions.aspx" }, t('Lcz_Descriptions', { fallback: 'Descriptions' })), h("ir-menu-item", { key: 'f1163434e809a3871f93c60219bf1249a993044d', href: "acconcan.aspx" }, t('Lcz_Policies', { fallback: 'Policies' })), h("ir-menu-item", { key: '813c0907fb62f7128182cba6e5ab2ee1a043fc77', href: "accommtax.aspx" }, t('Lcz_MoneyMatters', { fallback: 'Money Matters' })), h("ir-menu-item", { key: 'c09141e44fb83908765ade877a47c485bc18715c', href: "acroomcategories.aspx" }, t('Lcz_RoomsAndRatePlans', { fallback: 'Rooms & Rate Plans' })), h("ir-menu-item", { key: '49c8c62379a7d454f22fea0013283de3ad30248c', href: "ACHousekeeping.aspx" }, t('Lcz_HouseKeepingAndCheckInSetup', { fallback: 'Housekeeping & Check-In Setup' })), h("ir-menu-item", { key: 'c11578f9054b4479bb7187cfe81b9e50ab543ccf', href: "actravelagents.aspx" }, t('Lcz_AgentsAndGroups', { fallback: 'Agents and Groups' })), h("ir-menu-item", { key: 'e750fdc524a77d49d7b359fe67e23a2cab7577cd', href: "acimagegallery.aspx" }, t('Lcz_ImageGallery', { fallback: 'Image Gallery' })), h("ir-menu-item", { key: 'adb913cc0d37ec70c3b3f6e1ede12f831cd3c604', href: "acpickups.aspx" }, t('Lcz_PickupServices', { fallback: 'Pickup Services' })), h("ir-menu-item", { key: 'daa68978e893285fe5b617c4f501c57ae0d62efe', href: "acintegrations.aspx" }, t('Lcz_Integrations', { fallback: 'Integrations' })), h("ir-menu-item", { key: 'e08dd88ef056b70b461a8872444fd52c3083178e', href: "acthemingwebsite.aspx" }, t('Lcz_ISpace', { fallback: 'iSPACE' })), h("ir-menu-item", { key: '04de8a9ff5f507eacf7c5fbf100798e832553629', href: "acigloochannel.aspx" }, t('Lcz_IChannel', { fallback: 'iCHANNEL' })), h("ir-menu-item", { key: '5be4343fa086c7d61e7d38dffa319425afa57a98', href: "iSwitch.aspx" }, t('Lcz_ISwitch', { fallback: 'iSWITCH' }))), h("ir-menu-group", { key: '2b615f22710f7e0f22192fc20e84afdf65d6b9b3', groupName: "sub-property" }, h("ir-menu-item", { key: 'c172e0b8e51ba5edc587b4f03daeccea013cbdf1', slot: "summary" }, t('Lcz_Reports', { fallback: 'Reports' })), h("ir-menu-item", { key: 'f0a268ac0aea641ba7da3eabe8de8a7489838475', href: "ACHousekeepingTasks.aspx" }, t('Lcz_HousekeepingTasks', { fallback: 'Housekeeping Tasks' })), h("ir-menu-item", { key: '452f90e2889f33c938a17071e533b6cfc0c6553c', href: "acmemberlist.aspx" }, t('Lcz_Guests', { fallback: 'Guests' })), h("ir-menu-item", { key: '61d1433059611b8327652e8ef06716ef29d17bb5', href: "acsalesstatistics.aspx" }, t('Lcz_SalesStatistics', { fallback: 'Sales Statistics' })), h("ir-menu-item", { key: '0ff8c97bc895fbb0c3d8bb79dcb0b986f39d91b1', href: "acsalesbychannel.aspx" }, t('Lcz_SalesByChannel', { fallback: 'Sales by Channel' })), h("ir-menu-item", { key: 'b43499416e14efeae75653f3e81657501a5e4141', href: "acsalesbycountry.aspx" }, t('Lcz_SalesByCountry', { fallback: 'Sales by Country' })), h("ir-menu-item", { key: '172ce3de699a2c5bdaedb7ac3d5df08f9fda6f4e', href: "ACDailyOccupancy.aspx" }, t('Lcz_DailyOccupancy', { fallback: 'Daily Occupancy' })), h("ir-menu-item", { key: '24e6de36e9acea0ff610b085907d80c7774b36e3', href: "acaccountingreport.aspx" }, t('Lcz_AccountingReport', { fallback: 'Accounting Report' })), h("ir-menu-item", { key: 'e004c7a6bf4218df08d2f1d263500a6fe4f15161', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '36fdf973f0ffbbbfc6913fce3dc639de2a96804d', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '39ee8d72fe2e1405912737d166fb0345930cada5' }, "A35"), h("span", { key: 'b3e6afed6f91d78724b436f494aefa2569a0a22a', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'be6add8d1b72351d29cfddec3aa2af640904b06b' }, h("ir-pms-payment-due-alert", { key: '000ff75ae6d5884a5f17406851b5cc73796e6540', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '5371260667a8e0e2750ef821b2e1b4495666de80', style: { height: '200vh', padding: '1rem', background: 'white' } }, h("div", { key: '7dac212d38281ca473f6c41605c05abf27107594', class: 'd-flex' }, h("ir-input", { key: '559e13e551657032a3791f98dbd7caad51d979be', label: "Hello world", size: "s" }), h("ir-text-editor", { key: '5fa0ddcc1acf437b43c9d4311676dae292f7bbc6', size: "s", hint: "lola", label: "Hello world" })), h("ir-text-editor", { key: 'c446603692116caa01f3d2d9ca1d8c4878f29727', size: 'm', toolbarConfig: {
                undo: true,
                redo: true,
                color: true,
                align: true,
                background: true,
                link: true,
                list: ['bullet', 'ordered'],
            }, onTextChange: e => console.log(e.detail), appearance: 'filled', label: "Hello world" }), h("ir-text-editor", { key: 'e624e09198d041a068e1fa6053f2ab07adc68b71', size: "xl", appearance: 'filled-outlined', label: "Hello world" })))));
    }
    static get is() { return "ir-pms-page"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pms-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pms-page.css"]
        };
    }
    static get properties() {
        return {
            "propertyid": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "propertyid"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            }
        };
    }
    static get states() {
        return {
            "notifications": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "language",
                "methodName": "languageChanged"
            }];
    }
}
