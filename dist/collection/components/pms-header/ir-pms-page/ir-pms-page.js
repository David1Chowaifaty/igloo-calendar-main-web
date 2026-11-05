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
        return (h("div", { key: '6d301a86c68a656e16de78b94bf02e19f11c9ace' }, h("ir-interceptor", { key: 'a133b0795edbb3ae11c04f2f95e2b76076264065' }), h("ir-toast", { key: 'e67b0bf175f46a392620641aa6d7050d04c2c782' }), h("header", { key: '9ea67413140d56a6c3c9be04fbf1df1892aa127f', class: "app-header", dir: "rtl" }, h("div", { key: 'f80101826155f547592b61321f7c50c159a4c1be', class: "app-header__left" }, h("ir-custom-button", { key: 'b8c53cb2cfbc44c228a094a2851aa9d5efb931c0', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'db712f9ae799b260641ecc14f9b77026ee8ce4e3', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'd7046dff39ff4203a1526bac4fa45b9c2bd5c0b6', ticket: this.ticket })), h("div", { key: '5a4fc1af0be27586ff5f90f0353e65d8d6f4e730', class: "app-header__center" }, h("ir-pms-search", { key: '342148816085b538f5862fc9b3d27f733fb7cd96', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, language: this.language, class: "header-search" })), h("div", { key: '9892985b657857ee6e0ba411e4dfd3c3cf8367da', class: "app-header__right" }, h("ir-booking-new-form", { key: '68b8d4178f5f4a01187ed2deb99516544fbc2f35', dir: "rtl", language: "ar", ticket: this.ticket, "prop:propertyid": this.propertyid }, h("ir-custom-button", { key: '2c576b2a56846c08b0c06d53cfeed513a52c1dfb', slot: "trigger", id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '31da7859e6f388b7e4df24611bc41a89a6e048be', name: "circle-plus", style: { fontSize: '1.2rem' } }))), h("wa-tooltip", { key: 'cf2566e5ad80e507f28d7880ebba8c566b85c145', for: "add-booking-btn" }, t('Lcz_NewBooking', { fallback: 'New booking' })), h("ir-custom-button", { key: 'b9673ddfe8a4f4b06a194c572a488c5c8931a886', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '48359df834c66290cf2fc0bf654718b64af5785e', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '0e497ecd4b71cbeb576968297fec9bd8e121ebe6', for: "calendar-btn" }, t('Lcz_Calendar', { fallback: 'Calendar' })), h("ir-custom-button", { key: '96389f661e7743f441b1f2bf0cfc4de246b16e80', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '986531efa1553ef9759b787b0a1d45426d5b170a', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '00650a042671f7ba0797d653d0acdfa75cfeb182', for: "rooms-btn" }, t('Lcz_Bookings', { fallback: 'Bookings' })), h("ir-custom-button", { key: 'a125d1ab9b8d95e403cc5f978d129fc153402bee', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '9d929b40991bd9bdc5912ed73a147b801ea62250', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '9e28236168a448a700c25199cf7729726fa1e9e4', for: "departures-btn" }, t('Lcz_CheckOuts', { fallback: 'Check-outs' })), h("ir-custom-button", { key: '89f98364943947f2e9825d42032c6dcc09f9550c', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '5cb631c2c2560e24bf480c28dfd1cb8678f813ad', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '1591b50675af68b8fcff50006656e69372d31c60', for: "arrivals-btn" }, t('Lcz_CheckIns', { fallback: 'Check-ins' })), h("ir-notifications", { key: '78fa415207baced8f3c730079e09c49f18965328', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '5ec010468f01e125650007d4f8a3c44b6e0550cc' }, h("wa-avatar", { key: '37246df77f8e2f73ecedd6bab7e49d42de234c4f', slot: "trigger", style: { '--size': '2rem', 'marginInlineStart': '0.5rem' } }), h("wa-dropdown-item", { key: '7448004631a2363f0c16e40df38cb540f9b8fe0d' }, h("wa-icon", { key: '23a0a3a4e3fbe6320cca9953d4983862e5d96200', slot: "icon", name: "globe" }), t('Lcz_ViewYourWebsite', { fallback: 'View Your Website' })), h("wa-dropdown-item", { key: '8f109269d7e0f5c0e4e3e8598b7f392160f2cf0e' }, h("wa-icon", { key: '1f21e3d7574f1bf97817087a92d32d985d7c0f0a', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '262ac80fca573819555355770cc1dee5dfaceae8', disabled: true }, h("wa-icon", { key: '114fa0b338cdac76fbd3a2230e568fdae3e98678', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'b907cda4b8e4631ec92751c09bc41e104fa4664f' }), h("wa-dropdown-item", { key: '8853458b2e8d553fd83f113ce5f69329c343db0d' }, h("wa-icon", { key: '491c8967c15b2c08be4656752a391ef0cd96f204', slot: "icon", name: "users" }), t('Lcz_ExtranetUsers', { fallback: 'Extranet Users' })), h("wa-dropdown-item", { key: 'ee0c8046f366f40df9c770fa6a632508c16043d7' }, h("wa-icon", { key: '60fdf90a91931ba8765f8525d0ec7c0135b39489', slot: "icon", name: "lock" }), t('Lcz_ChangePassword', { fallback: 'Change Password' })), h("wa-divider", { key: 'd189f9afb1aa50d8812e6258ae96f2f8a6fa2fb4' }), h("wa-dropdown-item", { key: '3b0f6df428ce80ac6915ad867f3c828817758554' }, h("wa-icon", { key: '891cb86068135052f395e8a1ffdf803e5c3f2802', slot: "icon", name: "wallet" }), t('Lcz_Billing', { fallback: 'Billing' })), h("wa-divider", { key: '8ca75a3257afebe81641665a983dbc876757fc71' }), h("wa-dropdown-item", { key: '2f83ce4afd087753cc52b78bd8b20be65a6b8ea6', variant: "danger" }, h("wa-icon", { key: 'bfc23a32c0cad80c6fbbf51c077854914cbff67c', slot: "icon", name: "power-off" }), t('Lcz_Logout', { fallback: 'Logout' }))))), h("ir-menu-drawer", { key: '22edcdd2e33a1d65a1139cb6a7d9afa7b2c637cd', dir: "rtl", ref: el => (this.menuDrawerRef = el) }, h("div", { key: '0eaad46b09fac5afc3541415ebc18b9e59102509', slot: "label" }, h("img", { key: '307443b5f2d7e5a1a74843f5d648e8844cb05a5c', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '299a181165d8c3469f709f763bf283ee4f602d4f', dir: "rtl" }, h("ir-property-switcher", { key: '5e6035106fc6f7e4fe80e01b2bcc6c5446b04312', ticket: this.ticket }), h("ir-menu-item", { key: 'c0d8381d67f642f8be2e6ef33b5b84f5ab44d6b4', slot: "summary" }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: '714b89989f3e7f30eec337763d42f3fe30a818f7', href: "acdashboard.aspx" }, t('Lcz_Dashboard', { fallback: 'Dashboard' })), h("ir-menu-item", { key: '953055b51b1e437c3e4fd80a73f2dfb0b54585eb', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("ir-menu-item", { key: '1acbb3fa6c84e94f84db2bb2388656ca6b3836ae', href: "acratesallotment.aspx" }, t('Lcz_Inventory', { fallback: 'Inventory' })), h("ir-menu-item", { key: '07ea1ebd76e48a15d549cfc08e5c59dfc0e81f65', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("wa-divider", { key: '1184c202d2bf4f71919ccaa44c93d00203ac0b82' }), h("p", { key: '817332a6b85dd280058874f25000c0d9b45194c0', style: { margin: '0', marginBottom: '0.5rem' } }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: '5a64883eeeb8dff935dabde6ec5b8560b73f2734', slot: "summary" }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: 'aa47fd19292329cee2ed22fefeb857241e6bfe94', href: "acdashboard.aspx" }, t('Lcz_Dashboard', { fallback: 'Dashboard' })), h("ir-menu-item", { key: '99976a91e305e229e3035a409afc1c33894f907e', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("ir-menu-item", { key: '033bf2e712504db5614110564f63446251996500', href: "acratesallotment.aspx" }, t('Lcz_Inventory', { fallback: 'Inventory' })), h("ir-menu-group", { key: 'b7c41a5056b257e6fbde0502a9df4bd1f7240098', groupName: "sub-property" }, h("ir-menu-item", { key: '9c3f06a7ee37e0113e584fec53a67bf96da037e2', slot: "summary" }, t('Lcz_Marketing', { fallback: 'Marketing' })), h("ir-menu-item", { key: '1e501fa4e4cbf2819897aeaf66f50f1128ab55cf', href: "acpromodiscounts.aspx" }, t('Lcz_Discounts', { fallback: 'Discounts' })), h("ir-menu-item", { key: 'd7c8b15c8899c4bb586ff28b7ff68fa9cc9d126f', href: "acautomatedemails.aspx" }, t('Lcz_AutomatedEmails', { fallback: 'Automated Emails' }))), h("ir-menu-group", { key: '3c81e614e1320bf7bf9ec64e58a788f4defcf140', groupName: "sub-property" }, h("ir-menu-item", { key: 'bb471f7b2143835df89d8cfdbd5fa108228d462a', slot: "summary" }, t('Lcz_Bookings', { fallback: 'Bookings' })), h("ir-menu-item", { key: 'd789291d274df739abf9d896dbf4bd9c8075fb0b', href: "/acbookinglist.aspx" }, t('Lcz_BookingsList', { fallback: 'Bookings List' })), h("ir-menu-item", { key: '5c04edadf83f84ea4df08a1bd83dadfab2420e60', href: "/AcArrivals.aspx" }, t('Lcz_CheckIns', { fallback: 'Check-ins' })), h("ir-menu-item", { key: '69eea6e0d9498899ff95bd1fa17d054eb47a2274', href: "/AcDepartures.aspx" }, t('Lcz_CheckOuts', { fallback: 'Check-outs' }))), h("ir-menu-group", { key: '74b8eaa24587e2befe5cb1368985cf5be00136aa', groupName: "sub-property" }, h("ir-menu-item", { key: '1778949655f18a714d37b73ab0fa27a834bfd0e6', slot: "summary" }, t('Lcz_Settings', { fallback: 'Settings' })), h("ir-menu-item", { key: '936d805bc6665879558102a4a1be4001a05c31f0', href: "acgeneral.aspx" }, t('Lcz_GeneralInfo', { fallback: 'General Info' })), h("ir-menu-item", { key: '11a308dc381457a3f3df614ce7107922230b6604', href: "acamenities.aspx", badge: "    \u062C\u062F\u064A\u062F" }, "\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A"), h("ir-menu-item", { key: 'b3b39993f9d43a7db49f88bbbe065c04800108c5', href: "acdescriptions.aspx" }, t('Lcz_Descriptions', { fallback: 'Descriptions' })), h("ir-menu-item", { key: '3f68d8105aedb2e519e01d940198e03f5ebee357', href: "acconcan.aspx" }, t('Lcz_Policies', { fallback: 'Policies' })), h("ir-menu-item", { key: '26fd27459cdbca471dd77fe065c404b0a310948e', href: "accommtax.aspx" }, t('Lcz_MoneyMatters', { fallback: 'Money Matters' })), h("ir-menu-item", { key: '92c73221c2bbc80e45620ddd720368ed2f7bc77b', href: "acroomcategories.aspx" }, t('Lcz_RoomsAndRatePlans', { fallback: 'Rooms & Rate Plans' })), h("ir-menu-item", { key: '2a13654012cbb276268ddf4e605d3ec9e129bdc2', href: "ACHousekeeping.aspx" }, t('Lcz_HouseKeepingAndCheckInSetup', { fallback: 'Housekeeping & Check-In Setup' })), h("ir-menu-item", { key: '35c73e2d6ae371b03cfc447ff13aa77658a5a4fe', href: "actravelagents.aspx" }, t('Lcz_AgentsAndGroups', { fallback: 'Agents and Groups' })), h("ir-menu-item", { key: '56fae97180091f6d64e8e61f8ea875badad5e74d', href: "acimagegallery.aspx" }, t('Lcz_ImageGallery', { fallback: 'Image Gallery' })), h("ir-menu-item", { key: '2398cfe33a34b8e6b97e835fc77a676b5313b1f5', href: "acpickups.aspx" }, t('Lcz_PickupServices', { fallback: 'Pickup Services' })), h("ir-menu-item", { key: '02c3db885dbef404143ddb3fe1b0f783297ad214', href: "acintegrations.aspx" }, t('Lcz_Integrations', { fallback: 'Integrations' })), h("ir-menu-item", { key: 'c6967ecc72d77462c4629ce71d7166215b37c3c2', href: "acthemingwebsite.aspx" }, t('Lcz_ISpace', { fallback: 'iSPACE' })), h("ir-menu-item", { key: '5da3fd2fc5349ce1edbec1436c753f611ee31d40', href: "acigloochannel.aspx" }, t('Lcz_IChannel', { fallback: 'iCHANNEL' })), h("ir-menu-item", { key: '7a3b3716d02637e006cd74805cc716bade56cc4f', href: "iSwitch.aspx" }, t('Lcz_ISwitch', { fallback: 'iSWITCH' }))), h("ir-menu-group", { key: '48ae9b113a651d0fee388ee37920586e07e2cec7', groupName: "sub-property" }, h("ir-menu-item", { key: '55d7a3d7c20ca0a1b15e514fe9834a262ff6e2fc', slot: "summary" }, t('Lcz_Reports', { fallback: 'Reports' })), h("ir-menu-item", { key: '37573a02864ca11d1a75ce0fb1a052e32ecd7726', href: "ACHousekeepingTasks.aspx" }, t('Lcz_HousekeepingTasks', { fallback: 'Housekeeping Tasks' })), h("ir-menu-item", { key: 'fb694939e9df326b67ff37d827f803c811188d8f', href: "acmemberlist.aspx" }, t('Lcz_Guests', { fallback: 'Guests' })), h("ir-menu-item", { key: 'c4c284f5c4561d4b1121691214457571fc82f86f', href: "acsalesstatistics.aspx" }, t('Lcz_SalesStatistics', { fallback: 'Sales Statistics' })), h("ir-menu-item", { key: 'f5829e102caefc78f0aecd7253accf740751e425', href: "acsalesbychannel.aspx" }, t('Lcz_SalesByChannel', { fallback: 'Sales by Channel' })), h("ir-menu-item", { key: '4ef5300e97298277cec1bae3d5444edc3a81c174', href: "acsalesbycountry.aspx" }, t('Lcz_SalesByCountry', { fallback: 'Sales by Country' })), h("ir-menu-item", { key: '4a7f038160fdabfe465643cf9f9875d9d0c9e3ed', href: "ACDailyOccupancy.aspx" }, t('Lcz_DailyOccupancy', { fallback: 'Daily Occupancy' })), h("ir-menu-item", { key: 'c851b730ead87bf06c4f5c9c53aa84e10b9cdf57', href: "acaccountingreport.aspx" }, t('Lcz_AccountingReport', { fallback: 'Accounting Report' })), h("ir-menu-item", { key: '1f8ab076aaf233b77297aea4f1619ff7b6ae5e01', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '0391f39ff4fb1b7a8484b10dd1fd7bf76d891493', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'a939ad7fa38585362908dd17205890848cf4a573' }, "A35"), h("span", { key: '6cfb553f8ad52a2b3334178b685cd173cfa16118', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '1ff20e7c2702499803fce296694328a215dfc691' }, h("ir-translatable-textarea", { key: 'd22922b29531853ba850e5e966e603186c622841' }), h("ir-pms-payment-due-alert", { key: '1883e71fac8a231a7f97f429ab1a862965cddb77', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'd13984ae801973fc8e33bd9fdce2c104f749fbdf', style: { height: '200vh', padding: '1rem', background: 'white' } }, h("div", { key: '6c34e12fc0783a66778e929893d25be6616acebe', class: 'd-flex' }, h("ir-input", { key: '9482ba01500f6cfff997652deae4f8eae878a0bd', label: "Hello world", size: "s" }), h("ir-text-editor", { key: 'ee1307bb07f293177bb7f1d01486d9cafbf7dbd2', size: "s", hint: "lola", label: "Hello world" })), h("ir-text-editor", { key: '2c78ea999f7ea94d2585e79953eab76f7cbc48fd', size: 'm', toolbarConfig: {
                undo: true,
                redo: true,
                color: true,
                align: true,
                background: true,
                link: true,
                list: ['bullet', 'ordered'],
            }, onTextChange: e => console.log(e.detail), appearance: 'filled', label: "Hello world" }), h("ir-text-editor", { key: 'f2d87ec9abda19e203634e06e5082ff60f47308b', size: "xl", appearance: 'filled-outlined', label: "Hello world" })), h("ir-input", { key: 'c35c70c60e0cd1f2d4747132677be3bfda3f8379', mask: "price" }))));
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
