import { h } from "@stencil/core";
import moment from "moment";
export class IrPmsPage {
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
            date: moment().format('YYYY-MM-DD'),
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
            date: moment().add(-1, 'days').format('YYYY-MM-DD'),
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
            date: moment().add(-2, 'month').format('YYYY-MM-DD'),
            hour: 10,
            minute: 10,
            read: true,
            dismissible: true,
        },
    ];
    render() {
        return (h("div", { key: 'c2ea8c994a46e427558907b4cbf930e3cdd39589' }, h("ir-interceptor", { key: '295d1b51f397c5b26d2d9b5b8c217b2002a2f6f7' }), h("ir-toast", { key: 'a52eabc6ed9c36635fe68804e6c7805b3b152856' }), h("header", { key: 'cda4f38c809fdf04ccb6b71cb417075913ce9680', class: "app-header" }, h("div", { key: '86879c0908952bf65eb66dcee2263c01de66fa4e', class: "app-header__left" }, h("ir-custom-button", { key: '2d76b37435e649438f7c3cb24d3092d19a7e5994', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'f2c529f3c006813bf1edaad747e76863e9f3a7b0', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'e0fb04d98dc27c42ecc7c190eb77b460f9249986', ticket: this.ticket })), h("div", { key: '8a2cb100f783b7d3c1cb6cec6654acaa269fdd52', class: "app-header__center" }, h("ir-pms-search", { key: 'a8997273eaaf15cdb6335706e979df7c90e3dcd0', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '6bac42ed373d08ee8ae384be3ffc8a1d95c55457', class: "app-header__right" }, h("ir-booking-new-form", { key: '6bd3cf0e3474760900cb861aabe3ea791f0c2652', ticket: this.ticket, "prop:propertyid": this.propertyid, language: "en" }, h("ir-custom-button", { key: '316b0301bdd960b9a03c08e2fcabe4cf7b9d8f33', slot: "trigger", id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'a31c27b2bc36250c6d458ed9f1e19769eb333087', name: "circle-plus", style: { fontSize: '1.2rem' } }))), h("wa-tooltip", { key: 'ad3048b3e58ecafacfe495766f697bfb6f2366e7', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: 'c189a6a535363cf27eddb77481394669fbcb631b', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '0041a2aa2e0f19cea736ca4e1314e60db2d5482d', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '1e3d73dba6a552d53a2424d9bac3aa8004f5adc1', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '05f91666862d339fb47bbec9374c40f61bffac70', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '832591b5ee5322e0531824314b48f6762aaa8e21', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'dbbdde7fcaa2796fc7cbdb34f609090254fd9d14', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'ea40db1197a66198cfbf2dc3359a2016b5fd9acc', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '88bd2236b0403e57fa86a4705b0447043b8af65a', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'af8e8201745766e79883da1df65f8bbe97d155a1', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '24642862b34b67b5624b092b83fd7dc46d00a44f', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '6efea09c74c20295b4e85dcc6865930b3f6f975f', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '50653dd9c47fe011b3ad85df3330d6c5e76e74fc', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'efcb05560f375c3d49535cdba02ae19b7c49c4f7', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '403c4d25b61422041f34118da7ffa16fd0f16dd5' }, h("wa-avatar", { key: '7e32f4a811ff0e5a29c56ad6ef3d575852a624f8', slot: "trigger", style: { '--size': '2rem', 'marginInlineStart': '0.5rem' } }), h("wa-dropdown-item", { key: '7105ce7025ec4a7f1ca57d0f223d8462bbd54189' }, h("wa-icon", { key: '717cc39c177be59a86d379037c6a4ed868228212', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'c2f2ff0023b829f1f3314a9b31f24de2baf002c0' }, h("wa-icon", { key: 'cae1652c83c244ddaf40c19d934d9b7a18ead11e', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '3e842a2b1b3955f832430a824920ee98a02618d4', disabled: true }, h("wa-icon", { key: '266b4aa45e83122fcb6df1e7eac2c5f36bbb9a61', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'febbcf6a0254346004d0d268c60a4040693de101' }), h("wa-dropdown-item", { key: '9f92bad9afbcbba77f2f1088e0a76f2007062316' }, h("wa-icon", { key: '317efadefb3c03530a57603af6193417da73ec82', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'b58696691229d7d9be9376fbbe6542c321de8f05' }, h("wa-icon", { key: '04f2cca2ac5758cde383d45f0be72651dcdb317d', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '552c978c28f5d2c0b8c34df70538645b8cfb2b5d' }), h("wa-dropdown-item", { key: '19ac31ee4c9d0bcc1b146aababd29c41032253ef' }, h("wa-icon", { key: '7a7d06af5ccf12505d549200c3f46d223886f447', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '7a20a345280ceab257b539ac6b188e49c25e9dd2' }), h("wa-dropdown-item", { key: '27c02c65fbc783c5c264accd2477ab8ded4950e6', variant: "danger" }, h("wa-icon", { key: 'e55881cb9bfef813a16f864efe6d9fe265524c3d', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '78b5037110577471d8f21d9863e19c9c6c6a2183', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '7370c260075d3ee7a6533763368bcdef1936c943', slot: "label" }, h("img", { key: '3a29e5216628f03cc5653b3f899834ad7d2cada4', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'f0c2fdf0cf326933528f3f3428b64042e5f6d309' }, h("ir-property-switcher", { key: '633d01a3f3df33931f339508865b7975c5ba1cff', ticket: this.ticket }), h("ir-menu-item", { key: 'fdcb5447a6204a0c66bdfc74457513889144b594', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'e20099b7337c45e73a71e7bcf9e133d2d53a411a', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '628cc4d03e0c5c999ebf022ed35bcffb91c3dc4a', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'eb316103671234e62a7aaf2ff77e4779c1426ecf', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '4b4d213277eccec84f5b01ba69fe8532683f99cd', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'c2e1827d84f081211632f37c2196a63e81a0e854' }), h("p", { key: '1d9d2dddc5cda2f63695d2332d4c86a6bea77132', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '69579ed2a96a8e2a687c650484c523e3f95fbfaf', slot: "summary" }, "Property"), h("ir-menu-item", { key: '835ce5c68717f1b618890563be569a0801a7e137', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '9b624e9e054f3ff79f6592867811301e973b26db', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '2d6f39caac2b17a0402c008d74c218b998025228', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'a0b9abe01e26a4c4774355c36d87db721ec38fa9', groupName: "sub-property" }, h("ir-menu-item", { key: '9a6b719e6c8b8b66a5471689af0e99869e36aec4', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '16e5b478c4d3ce52d403461bff180aa6aede33ef', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '3e7528189a4abc2de3f5652414e9ced05b7d3185', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '6cd71df8315cd811bbc5a620628de459bce25ddc', groupName: "sub-property" }, h("ir-menu-item", { key: '23d3f4686051369447663f268e02a5e18a1c7597', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '9edca94be804bc48ba688e9fd0847fc39240b150', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'ec38bb7b890b31ad5125193c8812c43c4ff2e9bd', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '42ce1428db3d7dc860797353d9f8ae2c7d65549d', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '93080444b23bbda82219a64bbe027d0e8aa9ad5b', groupName: "sub-property" }, h("ir-menu-item", { key: 'd18f8336be07efa19d9f5237f3b01541b486b66e', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'ce9ad0a618b9251804c1d6198b25d1c367621374', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '4797731d0a50bbccbef3fb7ea81622256d326438', href: "acamenities.aspx", badge: "    \u062C\u062F\u064A\u062F" }, "\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A"), h("ir-menu-item", { key: 'c295ea9752d5dd6beb559a95b526d4a8b50f7808', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '74aa7171cdc86faf5fdd46ebe5aef74803343a94', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '4318541a2489fadb90195c1216d66555232e74d1', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '5151253aa8c90dfc3bdec0839f745ad2aced7e32', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'eb8e4d1c1eb334d40230f72eef2981fc0f3a7155', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'b2ed333a909e686f6ae654fb0f7d7d4989f7bc88', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '2af9d1dd76ccb13401663c39e1cfcdce60c55ff0', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '6a08fbe05d565131c9948a59dbd41f764c040164', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '861ebcc6cb6606b96a2eacc647037d3bf9080a3f', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '992d70557b5b856600b6f98551d1e3375ade8a5d', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '31748eb3ce68eafef85c97fca61ea909b18172ac', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '1c4751ae1e045c62ed57f11a254f62d48a82c7c4', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'a407ad9698fa5f4d245f0d324c5c3b03b8d92cd9', groupName: "sub-property" }, h("ir-menu-item", { key: '7fcee2081a665f48f45efd3adbaccf6fdacf4ff0', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '423381265000bb36fdc973184b76a4ac8569028d', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '447b5ebf44fc393234ab6dab8886f97856145f2e', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '88f622dd93db0f6ae1fe849b056576d85bc1ca6e', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'c7dfa10397cbc7ae89464697f1534ba7aab40936', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '4ecb97e32c2add2404400fd320c78a9cc0ce3714', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '1d2323706d1fb40aecf6b80ab1bbe755cf53a3a2', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'f797bd8dcc87596473c085479c295489710dfc41', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '8bd7a24a29d6277cd2a142c81220b0816ac22358', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '571b0fdcf299740fd285d3d67cac6154173ebb64', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '328dfe3bf18eca26947a9e028abe1b0659c8650b' }, "A35"), h("span", { key: '43ea2ddc57e777a983fbb1be5d4fe7ab0e7c3a55', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '3efc46710872d607110ffad120e136ecc57f4e07' }, h("ir-pms-payment-due-alert", { key: '7ffb73fabcbd5e6cb71b27fb6d326088dea53643', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '540c395e56eec271ff0c97b9f7552773b1bb0e83', style: { height: '200vh', padding: '1rem', background: 'white' } }, h("div", { key: 'b63f13a7951219b7ba002db2519e2b2d3a35fb1f', class: 'd-flex' }, h("ir-input", { key: '2b28233137ae026ce5e81092775dd2473ff1feec', label: "Hello world", size: "s" }), h("ir-text-editor", { key: 'a8436c98af8e59cde26dc7306960dc7fe6a0bc2c', size: "s", hint: "lola", label: "Hello world" })), h("ir-text-editor", { key: '77e0f6593b918e5f6b5f4a6179527b4b3f246979', size: 'm', toolbarConfig: {
                undo: true,
                redo: true,
                color: true,
                align: true,
                background: true,
                link: true,
                list: ['bullet', 'ordered'],
            }, onTextChange: e => console.log(e.detail), appearance: 'filled', label: "Hello world" }), h("ir-text-editor", { key: '0697feeea976b6278789f257f9192b6c9e26e577', size: "xl", appearance: 'filled-outlined', label: "Hello world" })))));
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
            }
        };
    }
    static get states() {
        return {
            "notifications": {}
        };
    }
}
