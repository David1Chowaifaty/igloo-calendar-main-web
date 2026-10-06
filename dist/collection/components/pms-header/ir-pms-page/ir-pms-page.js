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
        return (h("div", { key: '5528751aefde6a60b0d8bd7bb57cf10c40513e72' }, h("ir-interceptor", { key: 'ebbb248122cba927b83b5854c7795c5bc548f2a4' }), h("ir-toast", { key: 'e55d80ad40524064ce0f7663eb542bd54908b06e' }), h("header", { key: 'e126a2309ecff345d06028e7fd56cd0dc545872a', class: "app-header", dir: "rtl" }, h("div", { key: '69e4b49dbdb7b5230f95ee490c7a0f1083c215ea', class: "app-header__left" }, h("ir-custom-button", { key: '2a762d1c1f817e4ace86d5d632cd7bb15364750b', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '9d7132aa7d843cb25044893f02871b0fece69751', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'dc423478923691b5d313f0c78df24f5c3871ab4c', ticket: this.ticket })), h("div", { key: 'f39c9ef56f5d3acb79f9846555a7f64b4b58e4ae', class: "app-header__center" }, h("ir-pms-search", { key: 'd2e4e68f0faf48a74162a8d3c026be6ba5b65575', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, language: this.language, class: "header-search" })), h("div", { key: '611141faa2bec2351a844e0fc37f1d10cc29965c', class: "app-header__right" }, h("ir-booking-new-form", { key: 'db5eab8391c33be8c1d33f2c47e571caa1158aac', dir: "rtl", language: "ar", ticket: this.ticket, "prop:propertyid": this.propertyid }, h("ir-custom-button", { key: '954850a54dd5182fde731e5b8f91d271524035df', slot: "trigger", id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'b7d3ef26f5d8fbc049830762743f65738588d6be', name: "circle-plus", style: { fontSize: '1.2rem' } }))), h("wa-tooltip", { key: '0962f8a6c1f5a6eda31e6157caa21522c6de7aee', for: "add-booking-btn" }, t('Lcz_NewBooking', { fallback: 'New booking' })), h("ir-custom-button", { key: '98d43f4d0c2109f7484d94756c9273f64fbf833c', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b7a6a5b9bd32dab4a642762997cb07cce018b31b', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'cc54a654f9be9b1cd781a744e0c73e3d4a8fabf3', for: "calendar-btn" }, t('Lcz_Calendar', { fallback: 'Calendar' })), h("ir-custom-button", { key: '9fb0bf9af60b9c1dc3ab149566dd83ea2a95d950', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b70217710393097e6586123ca1e3d3b8c2d62d5a', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '409ec37d50bff329c22edc0794d78f9ba3c3d99e', for: "rooms-btn" }, t('Lcz_Bookings', { fallback: 'Bookings' })), h("ir-custom-button", { key: 'efbacdf25098aa4f6ba22caec261a4daf3c9be41', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '177d5eb762a48c39b05ffe6fbfb01185edd1effe', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '3d3b69c2eb50c3ce9b44b9421993d02976f5a427', for: "departures-btn" }, t('Lcz_CheckOuts', { fallback: 'Check-outs' })), h("ir-custom-button", { key: '111cdb38ffe26b12661be3efe464b4b1d3625a57', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '5262d682b7796051cc35e7ba5fad57ee3f2e6131', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'effc9eb183f65c2df7e0b0aa5b79e13f911e5035', for: "arrivals-btn" }, t('Lcz_CheckIns', { fallback: 'Check-ins' })), h("ir-notifications", { key: 'c30b4682bcd0d5e9b24a89699f4e8970007b7b2e', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '9b3dd76309f3c0464c3d25a99b812a817ebfb092' }, h("wa-avatar", { key: '7b0150db7920e774a7c7904ec53ea51bc2823ace', slot: "trigger", style: { '--size': '2rem', 'marginInlineStart': '0.5rem' } }), h("wa-dropdown-item", { key: '23905c8bf8557135e20aa857b4eb9baaf1506bc6' }, h("wa-icon", { key: '5dcc52ac9490d52a20dc1d7b899be58e304c170b', slot: "icon", name: "globe" }), t('Lcz_ViewYourWebsite', { fallback: 'View Your Website' })), h("wa-dropdown-item", { key: 'a0cd7083658956f5b0af985216a8d4030ee229ed' }, h("wa-icon", { key: 'be86168fdc444f6ad2c8f49993639c24edf382bc', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '0a8fd297dc4524264940c2ecaa52f43c51eae79f', disabled: true }, h("wa-icon", { key: '7a19563483884500ac18d9275eafde055451c2fc', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '7d30dbc3cd32c9cc2a6e9dee6c8de50d76f94b88' }), h("wa-dropdown-item", { key: 'fdefaf6cc3978a9b4d4b1ddaea47c859e75bea23' }, h("wa-icon", { key: '52095cce4a70d3ab03764eeebaef252cfedde855', slot: "icon", name: "users" }), t('Lcz_ExtranetUsers', { fallback: 'Extranet Users' })), h("wa-dropdown-item", { key: '0d15320d5724bd5c5f6f3a8feaea3aeafdb14d9d' }, h("wa-icon", { key: '5bc46e36dd793c65cac5152662d937b312b794f6', slot: "icon", name: "lock" }), t('Lcz_ChangePassword', { fallback: 'Change Password' })), h("wa-divider", { key: '2fe8b891c96d154e8889e5630b7c8b59b3e3951d' }), h("wa-dropdown-item", { key: '0f865ff804708569e6fd3664dd56aeb885993b20' }, h("wa-icon", { key: '5d252dc2a7b3a2e0b9a2c70416d2d76b517d95f5', slot: "icon", name: "wallet" }), t('Lcz_Billing', { fallback: 'Billing' })), h("wa-divider", { key: 'a06456bd39f8adef13c60e9282dbebce0f947d64' }), h("wa-dropdown-item", { key: 'baab74e32080cbebcae18dbf78c2b83e9b85956b', variant: "danger" }, h("wa-icon", { key: 'f24c9e33a75076712d5d8b591f6c3090a9f1071d', slot: "icon", name: "power-off" }), t('Lcz_Logout', { fallback: 'Logout' }))))), h("ir-menu-drawer", { key: '7a973587f8e9ce989f0a1cc1e47db56fd68c360e', dir: "rtl", ref: el => (this.menuDrawerRef = el) }, h("div", { key: '6d757fd7e5207914e0a1c754ebe0acfbee6105c9', slot: "label" }, h("img", { key: 'f2852b5088f82b4470d89c08fd2fe1ad93c4b917', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '358120bf348a002f8c670426298f350c7829a4c3', dir: "rtl" }, h("ir-property-switcher", { key: 'dbcc97d95249815e139c4837ea59ab9feba46261', ticket: this.ticket }), h("ir-menu-item", { key: '0f74849de08fe82791f8148ccf4f6c4fbfac5993', slot: "summary" }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: 'fcebc129bece2b63c1ce0f876337638fbb9ef66f', href: "acdashboard.aspx" }, t('Lcz_Dashboard', { fallback: 'Dashboard' })), h("ir-menu-item", { key: 'dd04115c7af20955ad0609b93caaf4d46d9678ff', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("ir-menu-item", { key: 'dcb7902aa35732ad50452e89de28b520dad85749', href: "acratesallotment.aspx" }, t('Lcz_Inventory', { fallback: 'Inventory' })), h("ir-menu-item", { key: 'd7ef562c02011d18fcab120d8b2c70a31bfe7d4b', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("wa-divider", { key: 'a40195734a63d3118d5d18716c7a98633ce48a8f' }), h("p", { key: '55656426f6dcc76ee5c09f416601da63c912d3a5', style: { margin: '0', marginBottom: '0.5rem' } }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: '3f495236d93941d8cff1323203d6373921b0fa8a', slot: "summary" }, t('Lcz_Property', { fallback: 'Property' })), h("ir-menu-item", { key: 'b5c4e5a4388574a7032c4f6c6332a412a9be6bc9', href: "acdashboard.aspx" }, t('Lcz_Dashboard', { fallback: 'Dashboard' })), h("ir-menu-item", { key: 'c96b00e758bf7e88f26cc90e14b1e235088cee35', href: "frontdesk.aspx" }, t('Lcz_Frontdesk', { fallback: 'Frontdesk' })), h("ir-menu-item", { key: '83e55034d2edc814f632984a5fc4f01c4ed0543b', href: "acratesallotment.aspx" }, t('Lcz_Inventory', { fallback: 'Inventory' })), h("ir-menu-group", { key: '9a2d82736524271485aa79a2cb97843ffbf2d160', groupName: "sub-property" }, h("ir-menu-item", { key: 'dca6fed0eb704ca6607f7696389a6446fe7b2af0', slot: "summary" }, t('Lcz_Marketing', { fallback: 'Marketing' })), h("ir-menu-item", { key: 'e002637885310ec2a4a2d3f35cdd1acc963095e6', href: "acpromodiscounts.aspx" }, t('Lcz_Discounts', { fallback: 'Discounts' })), h("ir-menu-item", { key: '078b0a7a96fcfa8aef3a931336fe63351b2ee122', href: "acautomatedemails.aspx" }, t('Lcz_AutomatedEmails', { fallback: 'Automated Emails' }))), h("ir-menu-group", { key: '3996f49bed4104b86351045c51a1651088c36791', groupName: "sub-property" }, h("ir-menu-item", { key: 'a68adb8058dfdd4df09c3b58c3d7896ab074f1cf', slot: "summary" }, t('Lcz_Bookings', { fallback: 'Bookings' })), h("ir-menu-item", { key: '489adcfe66c50f4ce48edef48fb1ea06a27d1821', href: "/acbookinglist.aspx" }, t('Lcz_BookingsList', { fallback: 'Bookings List' })), h("ir-menu-item", { key: 'ad21e2a2a404efa93a1300f9cebcd1e38390e5c6', href: "/AcArrivals.aspx" }, t('Lcz_CheckIns', { fallback: 'Check-ins' })), h("ir-menu-item", { key: '0a426968bc0f14a500a7efa63341ac5fb5e972a0', href: "/AcDepartures.aspx" }, t('Lcz_CheckOuts', { fallback: 'Check-outs' }))), h("ir-menu-group", { key: '8724b97249b6e5cc17f857b91b6c38868de18be1', groupName: "sub-property" }, h("ir-menu-item", { key: 'b59f63c8f3a505d2b81bdfa4ffdf998c157c28a3', slot: "summary" }, t('Lcz_Settings', { fallback: 'Settings' })), h("ir-menu-item", { key: '038413c45cf21ade064387cc751b127e37e4249d', href: "acgeneral.aspx" }, t('Lcz_GeneralInfo', { fallback: 'General Info' })), h("ir-menu-item", { key: '67a9ca697429c0bb82aeb642a28e252a4eecf3f7', href: "acamenities.aspx", badge: "    \u062C\u062F\u064A\u062F" }, "\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A"), h("ir-menu-item", { key: '26510ea1a98856b27387d9bd9f99ecc41693f566', href: "acdescriptions.aspx" }, t('Lcz_Descriptions', { fallback: 'Descriptions' })), h("ir-menu-item", { key: '4be274856a4335471b2f2ea631a655a3e05cea6e', href: "acconcan.aspx" }, t('Lcz_Policies', { fallback: 'Policies' })), h("ir-menu-item", { key: '6a2d389113ef433fc94b9c3ecf817bec953cb9ac', href: "accommtax.aspx" }, t('Lcz_MoneyMatters', { fallback: 'Money Matters' })), h("ir-menu-item", { key: '02a66f5b1b99423266bc592240fbbc6175a71f53', href: "acroomcategories.aspx" }, t('Lcz_RoomsAndRatePlans', { fallback: 'Rooms & Rate Plans' })), h("ir-menu-item", { key: 'f7106da6122f4ba42dad72b4001acf677ab276f7', href: "ACHousekeeping.aspx" }, t('Lcz_HouseKeepingAndCheckInSetup', { fallback: 'Housekeeping & Check-In Setup' })), h("ir-menu-item", { key: '55590e6ad17bba99b853a9aa1d1785cdd18f445b', href: "actravelagents.aspx" }, t('Lcz_AgentsAndGroups', { fallback: 'Agents and Groups' })), h("ir-menu-item", { key: 'c54f383f1f9a6be5016fee9daa282cfd3d1ed32c', href: "acimagegallery.aspx" }, t('Lcz_ImageGallery', { fallback: 'Image Gallery' })), h("ir-menu-item", { key: '968bcf47d7367719883178e810efa27042f758e9', href: "acpickups.aspx" }, t('Lcz_PickupServices', { fallback: 'Pickup Services' })), h("ir-menu-item", { key: '730726de13521c80a5991973b7f629baf3bbdecc', href: "acintegrations.aspx" }, t('Lcz_Integrations', { fallback: 'Integrations' })), h("ir-menu-item", { key: 'c047e14a14986d65f0b6a7269441ec003797ae6b', href: "acthemingwebsite.aspx" }, t('Lcz_ISpace', { fallback: 'iSPACE' })), h("ir-menu-item", { key: '3a15c4b2603807a8a2a9d68b2e8b49a3611887ce', href: "acigloochannel.aspx" }, t('Lcz_IChannel', { fallback: 'iCHANNEL' })), h("ir-menu-item", { key: '308d0b3713acfecc38c7cc466a6efbc1ede5127a', href: "iSwitch.aspx" }, t('Lcz_ISwitch', { fallback: 'iSWITCH' }))), h("ir-menu-group", { key: '2742fa8fa43c8c6ef739698ce6ec311a05fbd379', groupName: "sub-property" }, h("ir-menu-item", { key: 'a247d48949be966812404ff1e7533a743882efad', slot: "summary" }, t('Lcz_Reports', { fallback: 'Reports' })), h("ir-menu-item", { key: '5bb678cfd50ca5172b83b01629d4e8a871fdff6b', href: "ACHousekeepingTasks.aspx" }, t('Lcz_HousekeepingTasks', { fallback: 'Housekeeping Tasks' })), h("ir-menu-item", { key: 'a396711e43046d3ec8b565e5eb82d4bb7e906af2', href: "acmemberlist.aspx" }, t('Lcz_Guests', { fallback: 'Guests' })), h("ir-menu-item", { key: 'da78d1e15ea36975fc2f30662c6c5c65e23db78a', href: "acsalesstatistics.aspx" }, t('Lcz_SalesStatistics', { fallback: 'Sales Statistics' })), h("ir-menu-item", { key: '98adeea002d3ce3e7f573fb2ea2acd2d35184a78', href: "acsalesbychannel.aspx" }, t('Lcz_SalesByChannel', { fallback: 'Sales by Channel' })), h("ir-menu-item", { key: 'd28409d4af6a4b33c8f19dbe20f7ee2c8ea05220', href: "acsalesbycountry.aspx" }, t('Lcz_SalesByCountry', { fallback: 'Sales by Country' })), h("ir-menu-item", { key: '0250a91faf72f29b61fe8ec914ad302b155d2556', href: "ACDailyOccupancy.aspx" }, t('Lcz_DailyOccupancy', { fallback: 'Daily Occupancy' })), h("ir-menu-item", { key: '8742b021d6ce7901e42c3b065c5700a7a7add9b1', href: "acaccountingreport.aspx" }, t('Lcz_AccountingReport', { fallback: 'Accounting Report' })), h("ir-menu-item", { key: '704420c9d4bd90cca1cc9ba88600b3fd87379d68', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '1d122d4a00492cb4d22046ddbb01304615a9d684', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '0d58624b8c4e32280eac2d41b0f7f62f65140a85' }, "A35"), h("span", { key: '605a6a63eb8076fc5e5d4e5933c8315a58c710b4', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '850803c5899a47185ca5ef35dd9556f8abfeef2d' }, h("ir-pms-payment-due-alert", { key: '00fa5942932f5b447714d22bcfd5a81a7b59d3c3', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '2506e14fc606188c35acd082247664a50e434ec2', style: { height: '200vh', padding: '1rem', background: 'white' } }, h("div", { key: '447aa37545775719bb5215719fc1625409c06618', class: 'd-flex' }, h("ir-input", { key: 'cadbbeec3cd64d218e0bfb1692192fbe8bf22ff9', label: "Hello world", size: "s" }), h("ir-text-editor", { key: '179bc2fc3b4b2fc92f0d34b89ead6fd8fabb3473', size: "s", hint: "lola", label: "Hello world" })), h("ir-text-editor", { key: '55addac73c1ce264df2c42def79af3605eaf8a7e', size: 'm', toolbarConfig: {
                undo: true,
                redo: true,
                color: true,
                align: true,
                background: true,
                link: true,
                list: ['bullet', 'ordered'],
            }, onTextChange: e => console.log(e.detail), appearance: 'filled', label: "Hello world" }), h("ir-text-editor", { key: 'c2a71285a0dbe622032f3648411b661c3402c01d', size: "xl", appearance: 'filled-outlined', label: "Hello world" })))));
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
