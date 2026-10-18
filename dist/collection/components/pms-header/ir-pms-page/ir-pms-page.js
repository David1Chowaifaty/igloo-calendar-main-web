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
        return (h("div", { key: '68b1adb1fb82019e1c75c6e4992c557fc1a29685' }, h("ir-interceptor", { key: 'def9e008a87970c5bddc08ab26c4be2d646cb46d' }), h("ir-toast", { key: '3b9b0d9b4c6c277af6511a48f8798b50accaf74b' }), h("header", { key: 'bcec88dbc8f81377981fc74e08b930e3bc022419', class: "app-header", dir: "rtl" }, h("div", { key: '9cd68cefe11d39f153a0b1351f756745d4f381dd', class: "app-header__left" }, h("ir-custom-button", { key: '184c07dc2bd661670ab9a2472b0939ea0f0fbf02', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '11436e6c54f5b2586af2745a1b106a37499494a8', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'cd2d2a44a450b6485bd946fa1c256a7a070fb8a9', ticket: this.ticket })), h("div", { key: 'e02eed9cbaaf229be956f92bcb86270472ae09aa', class: "app-header__center" }, h("ir-pms-search", { key: '61598bd373f98ee3b7311917409cfbe2b08f3b83', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, language: this.language, class: "header-search" })), h("div", { key: '9eb6a04615548eb9db6bddbfccbab483a8738123', class: "app-header__right" }, h("ir-booking-new-form", { key: 'f97e3648da86e2e127e387be17cd91c2545118f5', dir: "rtl", language: "ar", ticket: this.ticket, "prop:propertyid": this.propertyid }, h("ir-custom-button", { key: 'e61076a7c2bf665d56f216450b24e1a7e6cc667c', slot: "trigger", id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '3ca681d84ff2d6aef70dae748b39bb530fabef59', name: "circle-plus", style: { fontSize: '1.2rem' } }))), h("wa-tooltip", { key: 'e8f0bf1490d48e9d0d56dd10b3c2c33650698a89', for: "add-booking-btn" }, t('Lcz_NewBooking', { fallback: 'New booking' })), h("ir-custom-button", { key: '59e1dda6cf5f789fb0cb8f3ab14a6bce50229749', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '4ad33accb7a7d6cc3de04d17e6ca60679c6a6b9c', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'a8947ecc4b56b8b9f7112adba56e2cbfeb89feb1', for: "calendar-btn" }, t('Lcz_Calendar', { fallback: 'Calendar' })), h("ir-custom-button", { key: 'd813d168993f92328c74bd2707a37183cabc1a96', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '9cd0b8591c50ac39a22d592c89020b902bd25835', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'fea92ee45b50a37fd243ecdeb6c819abc7b171ed', for: "rooms-btn" }, t('Lcz_Bookings', { fallback: 'Bookings' })), h("ir-custom-button", { key: '5f0409e5b7da38275cbb01c8be3b329ff616fdb8', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '09b3177fdde9964a54197e65dd323887ab1f8093', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'b1d8ea4cea0a9df0c33139838e30c111e09ceef8', for: "departures-btn" }, t('Lcz_CheckOuts', { fallback: 'Check-outs' })), h("ir-custom-button", { key: '493c05314df4f5f2cd8573455550d83ddbf51f1e', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'ea9f8a79b5ce2b97065fdbcfa6992cec5d872a0d', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '86dd05070d514f632bb375de4bb984f159aa15ab', for: "arrivals-btn" }, t('Lcz_CheckIns', { fallback: 'Check-ins' })), h("ir-notifications", { key: 'e0929097a11cefbb5a02550746ded18449f13296', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '4712235672df2939fa007734082f4e4a5e8093df' }, h("wa-avatar", { key: 'd799ae441535483a8e319e04ab99135ffbb3b161', slot: "trigger", style: { '--size': '2rem', 'marginInlineStart': '0.5rem' } }), h("wa-dropdown-item", { key: 'd124f35669c70d51def6c49140fb3e0f96d9f832' }, h("wa-icon", { key: 'f8d8ce93557f31f432029d42a89ffbadd6c697d6', slot: "icon", name: "globe" }), t('Lcz_ViewYourWebsite', { fallback: 'View Your Website' })), h("wa-dropdown-item", { key: '1cbcc792e881a55dba627e0968278d43f70e2f55' }, h("wa-icon", { key: 'da38a5f0a5f6d4701747ab0649e29f8ce3939c25', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '216dfda1152a790581a80ec9105b1c738359d42c', disabled: true }, h("wa-icon", { key: '060aba42303879a679f34b10a7408466d0fbe9dc', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '7ac052d486de3d0fe247df3218bced0372deb7ca' }), h("wa-dropdown-item", { key: 'd39bd823aaf12a0f9ede18b888e151ed4ec0bc51' }, h("wa-icon", { key: '83094b0fae029088ae209a06987d68316f576618', slot: "icon", name: "users" }), t('Lcz_ExtranetUsers', { fallback: 'Extranet Users' })), h("wa-dropdown-item", { key: '1ca62e2199ad088f71f71cacb7abdc73102962f0' }, h("wa-icon", { key: '08478b9f91a02214c7c63515c44a387fc95567f7', slot: "icon", name: "lock" }), t('Lcz_ChangePassword', { fallback: 'Change Password' })), h("wa-divider", { key: '70f9dc2f514b1fbfc204cb7e10b39ba767889c48' }), h("wa-dropdown-item", { key: '41e979e2c923477cbf84729b9a9c9425dff64abf' }, h("wa-icon", { key: '0cac3cecbc2dd7a25434d0f96298a57a526b7d3d', slot: "icon", name: "wallet" }), t('Lcz_Billing', { fallback: 'Billing' })), h("wa-divider", { key: '28e6daa195d637b7861d2b615c7a27e116a1e0d9' }), h("wa-dropdown-item", { key: 'ed69a83a85f24b50ca0d04d307009da36606734f', variant: "danger" }, h("wa-icon", { key: '847922ad630aac8af8dc8792a701906618bde2b0', slot: "icon", name: "power-off" }), t('Lcz_Logout', { fallback: 'Logout' }))))), h("ir-menu-drawer", { key: '7dbab600caeade390c735915ef29408d2603623c', dir: "rtl", ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'fc143a90c6f432a7e883adae8f2f291b2fcec38d', slot: "label" }, h("img", { key: '9e40f6a3372036c79d0ed5213e6308ae5115dc2c', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '9212a51b220a513f3d1fcd58a9c4c86a3f7f54e0', dir: "rtl" }, h("ir-property-switcher", { key: '50eabb1e7b79da3ec8daee05612fc408b592054e', ticket: this.ticket }), h("ir-menu-item", { key: '63edb3be5519efb3f7e681c3b78a1c6403b9e460', slot: "summary" }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: 'e09457a19047e2e9b6bff5a57bb1844682c32c85', href: "acdashboard.aspx" }, t('Lcz_Dashboard', { fallback: 'Dashboard' })), h("ir-menu-item", { key: '17c191795d9042b141a0e0f0021ae365cbded47a', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("ir-menu-item", { key: 'd15e34e6c3cfb353792a11564c82e664edf6130d', href: "acratesallotment.aspx" }, t('Lcz_Inventory', { fallback: 'Inventory' })), h("ir-menu-item", { key: 'dfa36a698cc310053c80e5176c5e8c0ba290ea10', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("wa-divider", { key: '38bd01fa54e356aae57ae5a9af8416252c0af840' }), h("p", { key: 'd190185cd5ab3461b72b152b73bf0c82cc4fd8fb', style: { margin: '0', marginBottom: '0.5rem' } }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: '5bba2c575d81220190b4935ca9061cab1d85a432', slot: "summary" }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: '6a307af92b828a8220b186bab5bf1cc94e5b8ce0', href: "acdashboard.aspx" }, t('Lcz_Dashboard', { fallback: 'Dashboard' })), h("ir-menu-item", { key: '223c3b0bcb59cf90055608b350d6e5a451d9734a', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("ir-menu-item", { key: 'de5f0a8fb666c7e3309a7a3c27a9f5b22bf47dac', href: "acratesallotment.aspx" }, t('Lcz_Inventory', { fallback: 'Inventory' })), h("ir-menu-group", { key: '9f16301953e7c617ab73310cd0a52c68414ccc32', groupName: "sub-property" }, h("ir-menu-item", { key: '117a78f28af1367e43524689131a4b7f8b24035a', slot: "summary" }, t('Lcz_Marketing', { fallback: 'Marketing' })), h("ir-menu-item", { key: '3a89287029d55070a65d70a154f97835e61fbbc4', href: "acpromodiscounts.aspx" }, t('Lcz_Discounts', { fallback: 'Discounts' })), h("ir-menu-item", { key: '9bc6b111c0a28f6bab3d88322de35578e38063d3', href: "acautomatedemails.aspx" }, t('Lcz_AutomatedEmails', { fallback: 'Automated Emails' }))), h("ir-menu-group", { key: 'd3658b0d90c0d73351e0ccf50fb206de9f8340b1', groupName: "sub-property" }, h("ir-menu-item", { key: 'b83431ddb11688a5b42869a816ab4578a71c5dec', slot: "summary" }, t('Lcz_Bookings', { fallback: 'Bookings' })), h("ir-menu-item", { key: '34555a37c6227644147772427837dd13c6621481', href: "/acbookinglist.aspx" }, t('Lcz_BookingsList', { fallback: 'Bookings List' })), h("ir-menu-item", { key: 'df3924a13005fda40d4238d1b64009e852fb83b1', href: "/AcArrivals.aspx" }, t('Lcz_CheckIns', { fallback: 'Check-ins' })), h("ir-menu-item", { key: '830588f59f32046072f37873674935b987a8dfbb', href: "/AcDepartures.aspx" }, t('Lcz_CheckOuts', { fallback: 'Check-outs' }))), h("ir-menu-group", { key: '4493a9d00fae0fbb2b92a5ad72eaf1f81c60ea76', groupName: "sub-property" }, h("ir-menu-item", { key: 'a3b84f3d5597acd82b42cbcbd3aa6c5f4361f4a4', slot: "summary" }, t('Lcz_Settings', { fallback: 'Settings' })), h("ir-menu-item", { key: '69844b6237c5b82817cd10b4568de045153e8ed7', href: "acgeneral.aspx" }, t('Lcz_GeneralInfo', { fallback: 'General Info' })), h("ir-menu-item", { key: '23f028cc0cab7251b67ecf496fdddb4b7297e7ee', href: "acamenities.aspx", badge: "    \u062C\u062F\u064A\u062F" }, "\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A"), h("ir-menu-item", { key: '65881deae3d8028735f5140c2d388f714eae828e', href: "acdescriptions.aspx" }, t('Lcz_Descriptions', { fallback: 'Descriptions' })), h("ir-menu-item", { key: '0ceebc085e5775cd227ac2f96e34c9c9b2c4b7bf', href: "acconcan.aspx" }, t('Lcz_Policies', { fallback: 'Policies' })), h("ir-menu-item", { key: 'b0107b777b09cde79cca2c135cb59ddf79e28ced', href: "accommtax.aspx" }, t('Lcz_MoneyMatters', { fallback: 'Money Matters' })), h("ir-menu-item", { key: 'fd035b7a59c4d524140533c5795c38e3cbb45647', href: "acroomcategories.aspx" }, t('Lcz_RoomsAndRatePlans', { fallback: 'Rooms & Rate Plans' })), h("ir-menu-item", { key: 'c4066262efa8b8911f113006d466b6661e21e563', href: "ACHousekeeping.aspx" }, t('Lcz_HouseKeepingAndCheckInSetup', { fallback: 'Housekeeping & Check-In Setup' })), h("ir-menu-item", { key: 'b91c0c5c530269aed0274d596269a0bdf78b893e', href: "actravelagents.aspx" }, t('Lcz_AgentsAndGroups', { fallback: 'Agents and Groups' })), h("ir-menu-item", { key: 'cb8f719854283e91a537d05f8b4577463d194c84', href: "acimagegallery.aspx" }, t('Lcz_ImageGallery', { fallback: 'Image Gallery' })), h("ir-menu-item", { key: 'af05cd91ff88658475036180d7fa9bd4ccebb873', href: "acpickups.aspx" }, t('Lcz_PickupServices', { fallback: 'Pickup Services' })), h("ir-menu-item", { key: 'b5c9cf1bc0c0acf703546aee6b51094669592ae2', href: "acintegrations.aspx" }, t('Lcz_Integrations', { fallback: 'Integrations' })), h("ir-menu-item", { key: '6f84c6fda50c53d702522498569c97a03ff63c64', href: "acthemingwebsite.aspx" }, t('Lcz_ISpace', { fallback: 'iSPACE' })), h("ir-menu-item", { key: '842951a4354cb4d3c325600328daf08f76e4e436', href: "acigloochannel.aspx" }, t('Lcz_IChannel', { fallback: 'iCHANNEL' })), h("ir-menu-item", { key: 'a96f971a2727fe172a6275f1421432b4a63c49e4', href: "iSwitch.aspx" }, t('Lcz_ISwitch', { fallback: 'iSWITCH' }))), h("ir-menu-group", { key: 'ddb6960f8dfe8f623d2879e8f5b69fafe35c1cc9', groupName: "sub-property" }, h("ir-menu-item", { key: 'c0865d902142d6cdcdaeab518d54704e85f88f5b', slot: "summary" }, t('Lcz_Reports', { fallback: 'Reports' })), h("ir-menu-item", { key: 'e4f3851da1e7a7bc93ddc59183b9411ed241649b', href: "ACHousekeepingTasks.aspx" }, t('Lcz_HousekeepingTasks', { fallback: 'Housekeeping Tasks' })), h("ir-menu-item", { key: 'e21ec9a7f589a102f95a280cbbf2729cd0dc987d', href: "acmemberlist.aspx" }, t('Lcz_Guests', { fallback: 'Guests' })), h("ir-menu-item", { key: '00254fa3d6c349e163a06da03a09ff6185980f88', href: "acsalesstatistics.aspx" }, t('Lcz_SalesStatistics', { fallback: 'Sales Statistics' })), h("ir-menu-item", { key: '1fcc2ae8e7184c487f7ccae6fd0db1e61f205ea2', href: "acsalesbychannel.aspx" }, t('Lcz_SalesByChannel', { fallback: 'Sales by Channel' })), h("ir-menu-item", { key: '69a6b26cf0237e25105f16720a2642c9aba0ad10', href: "acsalesbycountry.aspx" }, t('Lcz_SalesByCountry', { fallback: 'Sales by Country' })), h("ir-menu-item", { key: '75b65b229cef7de046ff81f654bf975fb26dd172', href: "ACDailyOccupancy.aspx" }, t('Lcz_DailyOccupancy', { fallback: 'Daily Occupancy' })), h("ir-menu-item", { key: 'ee9f2c1e139c28d44e37c7369ba1a9cbec17b5d8', href: "acaccountingreport.aspx" }, t('Lcz_AccountingReport', { fallback: 'Accounting Report' })), h("ir-menu-item", { key: 'e999b7d6c13a4032b6fbba92552a980de74ea255', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: 'f153052ba1d8985c0a75176c74bedfee354da0b9', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '985acc1868338c928e640f22a9b9ff0a2de07c3b' }, "A35"), h("span", { key: '8527f96c217dd3f9f41825d203170fba3b18f3f0', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'b5810bf6e5e97b0a325051e7cf57fd5c28756bd3' }, h("ir-translatable-textarea", { key: 'f1079b4b0a150d8b9cdd6325dc1c479929bfe009' }), h("ir-pms-payment-due-alert", { key: '2319523a5aef246db797f0b6b27ceee340965e01', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '1caf7441508f2a5945872b9d219eeb2f25fa8559', style: { height: '200vh', padding: '1rem', background: 'white' } }, h("div", { key: 'ee5adca1d6fc2b01d512b743f0c8b66c8dfca750', class: 'd-flex' }, h("ir-input", { key: '2f48bd2394300edb89773da9e4d6795ac5c7c042', label: "Hello world", size: "s" }), h("ir-text-editor", { key: 'daa46a79897dec5a744c9328a0c4fd3ee7bd5c60', size: "s", hint: "lola", label: "Hello world" })), h("ir-text-editor", { key: '5022094ae98004890abeb8884abbdaa14d8a82fa', size: 'm', toolbarConfig: {
                undo: true,
                redo: true,
                color: true,
                align: true,
                background: true,
                link: true,
                list: ['bullet', 'ordered'],
            }, onTextChange: e => console.log(e.detail), appearance: 'filled', label: "Hello world" }), h("ir-text-editor", { key: '8a076721be8771d345a2237afe200cbc3a6b2a26', size: "xl", appearance: 'filled-outlined', label: "Hello world" })), h("ir-input", { key: '035da5dfc5e80b01617bf1a89c77e0156501a255', mask: "price" }))));
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
