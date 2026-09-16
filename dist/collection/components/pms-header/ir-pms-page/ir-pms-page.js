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
        return (h("div", { key: '4dde8d18e5eb498b8b55aaec4e7e20ca191ce345' }, h("ir-interceptor", { key: '7fe6a4b1e5f613fb816aaae7b217b456d02594aa' }), h("ir-toast", { key: '325b00108b27a0dbe2efb3afc2d538583c99635b' }), h("header", { key: '275c7e9ad12feeb88ab57f39ead10ca7af9135f6', class: "app-header" }, h("div", { key: 'd326d5f770bdda325a3568933339c149a037e1c1', class: "app-header__left" }, h("ir-custom-button", { key: 'd0eeedb84951b16fb9a696f0047aee4c58597d23', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'dbffdffa96e4c7bae99b6d308ce9f72dde0b926b', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '536319332dce03f37556bcbe8eb05881d66e565e', ticket: this.ticket })), h("div", { key: '17c9ee6bfe1d06f6ac3f827172e2f88c490d8593', class: "app-header__center" }, h("ir-pms-search", { key: 'a3dcb95c998146387052526b6039692d54066ddb', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '56df95e77896647118d6bc94116222f1afc151fa', class: "app-header__right" }, h("ir-booking-new-form", { key: '9b4e68e4c522d2e77381f3c7e03366c691c5ead5', ticket: this.ticket, "prop:propertyid": this.propertyid, language: "en" }, h("ir-custom-button", { key: '32ea3a69d53cccb7e0cbc4e1b06772f17d67bd5d', slot: "trigger", id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'ca15d6fcd2f6c6f09780dd2eb95b5f958548b560', name: "circle-plus", style: { fontSize: '1.2rem' } }))), h("wa-tooltip", { key: '305519bd2fb0b11cb449d752f30c6dfb971f598c', for: "add-booking-btn" }, t('Lcz_NewBooking', { fallback: 'New booking' })), h("ir-custom-button", { key: 'a2a2d181dc7b65848b9cb27e8d64cf0d09c74560', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '324374557a8104d531e70dd35c87b8b4066e2ee7', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '9026bbec69f88b9c247c1d9fef30c05ff2fb4edb', for: "calendar-btn" }, t('Lcz_Calendar', { fallback: 'Calendar' })), h("ir-custom-button", { key: 'f74367f7ed87f3f7fbd4570f2d1c6ea1e22d8da6', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '35a8f09dc2f1afab31263466f67c20be150a981e', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'fcd7094d72bd211d2b1f7b241ec7a6dbc0686836', for: "rooms-btn" }, t('Lcz_Bookings', { fallback: 'Bookings' })), h("ir-custom-button", { key: '592e301488af5d2e26932832743cc60054067b4a', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '419d4e5a2ec6e24a0e849eb7761d357ff7b4dd7b', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '51eb9b3b470717664f2690d2a22dd57b09822c4c', for: "departures-btn" }, t('Lcz_CheckOuts', { fallback: 'Check-outs' })), h("ir-custom-button", { key: 'c585fc4283a75be18104f085fb73124f71f18eb5', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '84502d10a4afa56643750bbe6d5393cb04c8089c', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c5e91d3f0669925de8e6f164ab0b53016c427c1e', for: "arrivals-btn" }, t('Lcz_CheckIns', { fallback: 'Check-ins' })), h("ir-notifications", { key: '705f34578d8275567f3e8ef59e0a740946a0d533', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: 'ef7e15227e8060faf4d4075ac2b3ee6d2c4879b6' }, h("wa-avatar", { key: '93512d0c1b7a0820a3ec24766e34261c56bdf7bb', slot: "trigger", style: { '--size': '2rem', 'marginInlineStart': '0.5rem' } }), h("wa-dropdown-item", { key: 'bdbf8a47188adf255561db57b38b1e2a9563e06f' }, h("wa-icon", { key: '041f93b652c1258c082a84d610b65f638a6efed7', slot: "icon", name: "globe" }), t('Lcz_ViewYourWebsite', { fallback: 'View Your Website' })), h("wa-dropdown-item", { key: 'cf6cc018f35bcfd4c088c874e1c2efe3fee1ab5c' }, h("wa-icon", { key: '88801d175f402622a07fec893466483e2d108dfc', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'f9bbfb312cca818c1dc34c92028cb283bf11f011', disabled: true }, h("wa-icon", { key: '29e4a54b91c87366ef0f718b2afb6ccc29a73055', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'ca2bb3f744e71f70fa9eb1d5919d93bf112a57f4' }), h("wa-dropdown-item", { key: '514a920b382b4609933a2cec02ea4424b0fe3c8d' }, h("wa-icon", { key: 'e7c98ee0457faad3e735a473b9c5f118d153785f', slot: "icon", name: "users" }), t('Lcz_ExtranetUsers', { fallback: 'Extranet Users' })), h("wa-dropdown-item", { key: '94712e346ea5ae72d81a5e06e0b95f8e5279f0d3' }, h("wa-icon", { key: '884a6483a9fb7409a38b42a55d560f8497d20f2d', slot: "icon", name: "lock" }), t('Lcz_ChangePassword', { fallback: 'Change Password' })), h("wa-divider", { key: 'e4152bfbef762abeac26469d6bec9eaca81aa693' }), h("wa-dropdown-item", { key: 'b1b7f965725abd70ca8caad472df0b8b3f51b5f6' }, h("wa-icon", { key: 'e2ff39e83bbac2fec02a09a89ad2c0ab3c3d1c12', slot: "icon", name: "wallet" }), t('Lcz_Billing', { fallback: 'Billing' })), h("wa-divider", { key: '7d3c18bc6ec4b144cf3a3ec8d513b6742bb5b495' }), h("wa-dropdown-item", { key: 'e76531f6d87a80e1f74dbfad13a34a3794173b31', variant: "danger" }, h("wa-icon", { key: '51cc924d102d38860c06efe0dff9b894753340b2', slot: "icon", name: "power-off" }), t('Lcz_Logout', { fallback: 'Logout' }))))), h("ir-menu-drawer", { key: '9a0b40b3774d396b0f6776079140a19c717599b9', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '88ae5a1b765a6d52234104de20ec7d6f98ffb996', slot: "label" }, h("img", { key: 'b5a1082f99986139d822e6fa7245752a14b07ced', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '6c4fc896c66bd4ad094e7dae847916451fa87843' }, h("ir-property-switcher", { key: 'fbcd50bae76d7030146e5c39af3f05b112752b35', ticket: this.ticket }), h("ir-menu-item", { key: '81964d82de4cd516b6c1f9d6b078753a8b1e9fb2', slot: "summary" }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: 'be5eef1a8581a3f68519eb13afe4335faa66a075', href: "acdashboard.aspx" }, t('Lcz_Dashboard', { fallback: 'Dashboard' })), h("ir-menu-item", { key: '0f5bf46611de598450c8e5bc678081ace54f0587', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("ir-menu-item", { key: '5211d556ce9c52e17411f12b3c21bc5ac0f226ed', href: "acratesallotment.aspx" }, t('Lcz_Inventory', { fallback: 'Inventory' })), h("ir-menu-item", { key: 'cc151c646dfda62bfd18e4e84311585add1835a7', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("wa-divider", { key: '69f17504e5d9b1825d442c6b83e527b0cf808680' }), h("p", { key: 'fbf4f36cc54359c789405940bac42520d40a5ca6', style: { margin: '0', marginBottom: '0.5rem' } }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: 'a46beeb1f0c75af5c4ec4f3271e60877deef7b4f', slot: "summary" }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: '31d65ad43596740c7384308aaf74ed1d72c28e57', href: "acdashboard.aspx" }, t('Lcz_Dashboard', { fallback: 'Dashboard' })), h("ir-menu-item", { key: '0afa86d9e6e0e4718360c9652128d280ea127591', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("ir-menu-item", { key: '28f4a0530f6f8f5a8e1fed8af2e515c35b7e7425', href: "acratesallotment.aspx" }, t('Lcz_Inventory', { fallback: 'Inventory' })), h("ir-menu-group", { key: '66f16ab9ed9795e4af114805d86b4ae6a0fa58a6', groupName: "sub-property" }, h("ir-menu-item", { key: '72b4bb4db985bdb74401127a0059ff669c05617b', slot: "summary" }, t('Lcz_Marketing', { fallback: 'Marketing' })), h("ir-menu-item", { key: '916e4c1bc12a18210a37f895548e9eac775cba38', href: "acpromodiscounts.aspx" }, t('Lcz_Discounts', { fallback: 'Discounts' })), h("ir-menu-item", { key: 'caba7da901315c5c6f1e31b667870ab168d1c347', href: "acautomatedemails.aspx" }, t('Lcz_AutomatedEmails', { fallback: 'Automated Emails' }))), h("ir-menu-group", { key: '0c28c2db3d5036edc45013726c0d2b237b508c59', groupName: "sub-property" }, h("ir-menu-item", { key: '9779d902c9dc4defd6826d6963f5c152121a7b5a', slot: "summary" }, t('Lcz_Bookings', { fallback: 'Bookings' })), h("ir-menu-item", { key: '24c1af09ffa79df62fa256c2ec9e92010184fa15', href: "/acbookinglist.aspx" }, t('Lcz_BookingsList', { fallback: 'Bookings List' })), h("ir-menu-item", { key: 'a832a3f04c951ea805dc25a8af625735eb21b175', href: "/AcArrivals.aspx" }, t('Lcz_CheckIns', { fallback: 'Check-ins' })), h("ir-menu-item", { key: 'facbcc660b07912f771cdcaa783259bbe6a75317', href: "/AcDepartures.aspx" }, t('Lcz_CheckOuts', { fallback: 'Check-outs' }))), h("ir-menu-group", { key: '559f985d89d18ce992f59ce6e9fc9c5b8ad1d803', groupName: "sub-property" }, h("ir-menu-item", { key: 'dca5cdc03f1f21d125146b985ecd305f72b2452c', slot: "summary" }, t('Lcz_Settings', { fallback: 'Settings' })), h("ir-menu-item", { key: '097daa86ded4c67c1312d196173a8071b736bc8a', href: "acgeneral.aspx" }, t('Lcz_GeneralInfo', { fallback: 'General Info' })), h("ir-menu-item", { key: 'da7d7f4fbd681237e031bd693bbe566440071dba', href: "acamenities.aspx", badge: "    \u062C\u062F\u064A\u062F" }, "\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A"), h("ir-menu-item", { key: '99303488a445ecfa460ba7cb6e9794415b20f428', href: "acdescriptions.aspx" }, t('Lcz_Descriptions', { fallback: 'Descriptions' })), h("ir-menu-item", { key: '7333210849a47469e1b940697480a18b6ef0e952', href: "acconcan.aspx" }, t('Lcz_Policies', { fallback: 'Policies' })), h("ir-menu-item", { key: 'f9d7c4d3e45e9df3310fedf6a22605496deab04e', href: "accommtax.aspx" }, t('Lcz_MoneyMatters', { fallback: 'Money Matters' })), h("ir-menu-item", { key: 'd48f63298948d0a16610a6fedd65f10620815307', href: "acroomcategories.aspx" }, t('Lcz_RoomsAndRatePlans', { fallback: 'Rooms & Rate Plans' })), h("ir-menu-item", { key: '5b5822751cf9a22aa8379dea31fbef77f8959ebb', href: "ACHousekeeping.aspx" }, t('Lcz_HouseKeepingAndCheckInSetup', { fallback: 'Housekeeping & Check-In Setup' })), h("ir-menu-item", { key: 'c8a487f19e69aa6024ef0389091c10120c3075ff', href: "actravelagents.aspx" }, t('Lcz_AgentsAndGroups', { fallback: 'Agents and Groups' })), h("ir-menu-item", { key: '14195b94f00cb3ef84a7eb570491ca67fb50fa63', href: "acimagegallery.aspx" }, t('Lcz_ImageGallery', { fallback: 'Image Gallery' })), h("ir-menu-item", { key: '068c56d9a89fc4206f5d77834a68a15050182565', href: "acpickups.aspx" }, t('Lcz_PickupServices', { fallback: 'Pickup Services' })), h("ir-menu-item", { key: '23211814d876ff242752d1f851d0ed984bf86cfa', href: "acintegrations.aspx" }, t('Lcz_Integrations', { fallback: 'Integrations' })), h("ir-menu-item", { key: 'eff7f6b6f8e8acabfb641b1f27052b0191ffadbe', href: "acthemingwebsite.aspx" }, t('Lcz_ISpace', { fallback: 'iSPACE' })), h("ir-menu-item", { key: '8dd417957474f93ecef5b002c96977736fa72faf', href: "acigloochannel.aspx" }, t('Lcz_IChannel', { fallback: 'iCHANNEL' })), h("ir-menu-item", { key: 'a22a4ff3604d608c9b7d6392e9fbf219e5cfb512', href: "iSwitch.aspx" }, t('Lcz_ISwitch', { fallback: 'iSWITCH' }))), h("ir-menu-group", { key: '822b55d75469146e0af10c90c33abc581681d99a', groupName: "sub-property" }, h("ir-menu-item", { key: '944b154c8f148f3d2432401869e3348da434cf55', slot: "summary" }, t('Lcz_Reports', { fallback: 'Reports' })), h("ir-menu-item", { key: '440dafebdff713a3dd23140644fcab9808fea0b1', href: "ACHousekeepingTasks.aspx" }, t('Lcz_HousekeepingTasks', { fallback: 'Housekeeping Tasks' })), h("ir-menu-item", { key: 'b817de98b00751153d87e44fc5597ad54be8e3af', href: "acmemberlist.aspx" }, t('Lcz_Guests', { fallback: 'Guests' })), h("ir-menu-item", { key: '6c5764705cf90914cbdfc293f7f6a0f7fb61e5ab', href: "acsalesstatistics.aspx" }, t('Lcz_SalesStatistics', { fallback: 'Sales Statistics' })), h("ir-menu-item", { key: '13a9fcea613f0eeeaeeecece2fe481c4256dcc38', href: "acsalesbychannel.aspx" }, t('Lcz_SalesByChannel', { fallback: 'Sales by Channel' })), h("ir-menu-item", { key: '59232968fbd0c85e4d26a6ae77dac5f36ea4425a', href: "acsalesbycountry.aspx" }, t('Lcz_SalesByCountry', { fallback: 'Sales by Country' })), h("ir-menu-item", { key: '92566e109b39c03080bf268d8996422b8cd662eb', href: "ACDailyOccupancy.aspx" }, t('Lcz_DailyOccupancy', { fallback: 'Daily Occupancy' })), h("ir-menu-item", { key: '0eefcff57dedad5187a03fcf847a391254a80acf', href: "acaccountingreport.aspx" }, t('Lcz_AccountingReport', { fallback: 'Accounting Report' })), h("ir-menu-item", { key: '4d357d5661fbd95d00dab1e9762b8b254635859c', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '5194848b2a8b071faee88decb724c981840546ce', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'd1c85e1cb8c2ad6aa646a0f417e11c7d7bcfc0c5' }, "A35"), h("span", { key: 'e0ef14e8db1232aa275ee51c4d9ab1476b80a103', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'e287b778069067dfc3d44403ebfcdb21d3b212ea' }, h("ir-pms-payment-due-alert", { key: 'e2e4eafc9cc5693d66f8c27d092f6dcdb13a14b1', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '56eb77cc469514ed6c95dbd457aa0565d587cc4a', style: { height: '200vh', padding: '1rem', background: 'white' } }, h("div", { key: '6c84fa328da3605bcefb642fd3aa40015b960195', class: 'd-flex' }, h("ir-input", { key: 'a6b8a0c09d0aede693ff83b72aa748da44b323cc', label: "Hello world", size: "s" }), h("ir-text-editor", { key: 'b249bb6ee1af81eace79ace5fca8f0a002368e09', size: "s", hint: "lola", label: "Hello world" })), h("ir-text-editor", { key: 'a046cc42277ef7e0dc3a049cec07379db2f6fce2', size: 'm', toolbarConfig: {
                undo: true,
                redo: true,
                color: true,
                align: true,
                background: true,
                link: true,
                list: ['bullet', 'ordered'],
            }, onTextChange: e => console.log(e.detail), appearance: 'filled', label: "Hello world" }), h("ir-text-editor", { key: '5d2f492205f698cd83454011ce33c57c1f5ba6e7', size: "xl", appearance: 'filled-outlined', label: "Hello world" })))));
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
