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
        return (h("div", { key: 'e9b7f6b178c690fcfd9ad4edc7eecb1e89fc7fff' }, h("header", { key: 'e10f2b96a97300dce6470b66ffb2584be0a0d651', class: "app-header" }, h("div", { key: 'd281bac4064e48676d359c30f45360bed9623a67', class: "app-header__left" }, h("ir-custom-button", { key: '01031dce884f0fcf6ff60dc37a17986913e94d6c', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '11574f0bf58150515075a11164f3c86e75f194b2', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'a10b518196fa0ff54677b3c3190b79ecd3a07f00', ticket: this.ticket })), h("div", { key: 'e8cb782a73986f2811b6294c56e694b8557dd4c9', class: "app-header__center" }, h("ir-pms-search", { key: '8db1b5b3d2dbb867ee2cca2c76aa86c477a2e80a', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '9c85f55954f3848ef28088365cd380cf06e9096d', class: "app-header__right" }, h("ir-custom-button", { key: 'fdf2fedb629330e4a4673dc04b0a6660a3adf0b7', id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '6e3eab9f37cebd48904b60cdb3688c5a7acfb5e5', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '9706cbcbf2a49cc28d9ce4ffa68d2ec237f91d1d', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '9f30dcc71d092d9184d133b0809e521f9a79a174', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b001348535497d88237603fc440731224a6adb42', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '75139ad4f55196a485216428def775a3a452db9a', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '6965916f727dd9bac2aff0f301f5bd50a5d50ad1', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b46d05f9af2883949c9e2c973cdcfbf0e0d11551', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'f10ecacf775e8913c320eace9bddee0707efc514', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'fa4ee9c478af84a4ee29868b5b8123ca3a6c4608', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'c01b637db8f5e0d48ead7473a6b5729a0ae7791f', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'be0c4b83419bdfdccc0a7111ddca751d5185bb81', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '288658f4c6bef93bb47f550f68f446fa060baffa', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '3e345592016feeed2706dfc1e09ed4319aa240db', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'bba7b6f339477c982e47e64f69406b6750179b5a', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'a8da2e1835d2e26847cc80ae1b03837a576daf86', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: 'f5d6aad388fbe4b8a934cbfe9b64bd74a6f02a90' }, h("wa-avatar", { key: '2a9ab6a7c3a487623f19012ed71c2db872e63be1', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '4c005dfbe653fbe0f24f3823ffefe3c48f8c84d2' }, h("wa-icon", { key: '1940a6bc77fc0047c08c57f96d7f3dc4d36e7793', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '43432c3d72f444fb76fd8b6eed85ecf5b2dedbb1' }, h("wa-icon", { key: '494e4df17960beb6b7c03f88ad650b5757f82e37', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '61485de513311bfc62a5d57fb9cabd42c1b55c8c', disabled: true }, h("wa-icon", { key: '8ab9ffafe8dfcbf59f788974a72476bf1978aa8d', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'a49defb59f198e7701c3c0a52bf4e4ae2b94fb5b' }), h("wa-dropdown-item", { key: 'b736b3a4e774f340b1a82f38fd024a1ddcc5f1a6' }, h("wa-icon", { key: '079b2f47f01ee9cd528c7043c17849065bcde4dd', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'ca2a7880067971049318e6368e305782593d4a55' }, h("wa-icon", { key: '7efb891e68454d8f2bf238024ed81a43b3283165', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '5e20bf4394d3f378d3cb53d74c29e770435526e0' }), h("wa-dropdown-item", { key: 'cce5491f92b6236a2268393cf324dfb4e54d4302' }, h("wa-icon", { key: '5ffcb1230413a9c4064f81d16f8fa9ab7a2ea496', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'f6497f7d3bc708d1c4aca88e1745e7a38082baa3' }), h("wa-dropdown-item", { key: '935d1ecb77e501f5d3ebce46a7312c591d54c300', variant: "danger" }, h("wa-icon", { key: '0f4341ce1d36b61b4d25b4d3f0757027f5841bb7', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'b9f73c8db36f04e7fa2217f0fbb1323e65e54dbc', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'df48b5eb68b63e71d82409a0b5f393ba4753c950', slot: "label" }, h("img", { key: 'f7f95bdedf424705ae9dbe2fa8584a07ff19336e', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'ac59b035f56bc5c1e366587f32970d885d77871c' }, h("ir-property-switcher", { key: '008fa0950940bec382f75a6aa51c83eb81e3c187', ticket: this.ticket }), h("ir-menu-item", { key: '79833c5ca5b4b87d0a25955d78c3aba07b156e8d', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'abe8dd4683e8979ee93b4053c36735735f5556b2', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '9ea49e6e24bd1bf3e249d544b3864600feeb490f', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '57c0d1fa8c3c37429653c717fcb540d3af74bebd', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '3d0442041bc4568bea2c34ec87c64bc992717ddf', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'f98fab12c7109325173d3a7e26d8eb7a6a113b77' }), h("p", { key: 'dd343774176040ec0aad188f8390af0a2a84a624', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '2e4ed1252bcb0fcae4a276cebcff29d986e4e452', slot: "summary" }, "Property"), h("ir-menu-item", { key: '5c40a4db50958acec16e6632a1686b29d3a4a253', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'dd155a1285b17d41f5ce9d12118d3e914d9b1640', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'bca65ee8703ab62c40d1273b30d4f636db2dcbad', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '4e8f80194296c213593fcd735322a2d6000ec83a', groupName: "sub-property" }, h("ir-menu-item", { key: '3bf46a7e0d8d545e068531ce4bf206e751f3be97', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '25ebb56ca0bd14b19b29d8447e7d7e659e4c4a1f', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'cc5d1f2419251034fb0930343e78944a7dc1e99c', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'f58a4265d4aff224a4e7ec4b8d73bbf557b8991b', groupName: "sub-property" }, h("ir-menu-item", { key: 'a406fe3f6a71162c0fa89450619c48b775c66385', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'e668dca9bebb24c85356c4cf83784f10029b4b2a', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '8421654c330dc9e96e175d80e6c04653b1a5d8a1', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '0f4425476ca48aa2821b51a22010e98e487148dd', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '0a3eb2ff0ae9cf758b95497b60bec3e2c8292b35', groupName: "sub-property" }, h("ir-menu-item", { key: '69b91b2d499ff997103a0cdf32cd8b1f385e1787', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'e9ec8f2ef1ea8a9817f9fde0e86cbee2ac7d9930', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '0116c34971303cff28736b9c721878cdb8379c2b', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '149b69e5a283eddf56392426f31d035658f64a1a', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '20ecc784660dfb6dc4342458b4676ed97b984ed0', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '62d576a16b772ae5467f4aeb4832e0f123b6200c', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'dccfc44437435fa98c7106bb39d952196168e0c2', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '550dd03a13486dc9596ddf20dd9eefc63b1857a9', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '56a10f707f9ae378fe306269f211dc42113d30d3', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'f3ac11ceab7a2e5455d37663b4d455ec85959adc', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '41247ddc008e0e9691127ffb290ec44278fa9e44', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '49d111b35fe3b4232f44c36ae22ed3555ea2a840', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '073c7ba647f21841f438036e520a701aa9c41608', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: 'de38ef560ef859a737ce985d5450e4d330dcc13b', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '0034446eebc06b42345fd48314fa85d8a15e0600', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '1d254c7df55f276ee2aecb16dcdba1bc04cb551f', groupName: "sub-property" }, h("ir-menu-item", { key: 'b138f4cd4021b4a3c868801331685972525e30f3', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'c1af79af583b92a533ccc18e8031f41b93290400', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '7c92b45c33b5d61b9ed5bce81ce43f03c0ebb6fb', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '66c0848de491b22c7291a4f73f0066a4ff85936f', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '473d078caf70546f24d5dcc10b4696770213dc15', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '5185bfb505e9ad5315bcd1fd46a30cf99c9eeca6', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '3c79e402271aad30b5ba0b82264b22d7aff242df', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'f334c80befbb1bce504d9377fcc5b09eaf0db5ae', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '2604b29f86c365329407b3ec9af00013aea35220', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: 'ec3fdceda86a01edb75bfebcb30827ec0fd3e1b1', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'd281237a1e95157e305b894c5c2d51c3800b453b' }, "A35"), h("span", { key: '8b63178d210347c8edf13c1885e67b48fda9f6cf', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'ed625616cea2f46c96ae1ed23679d083f1896d04' }, h("ir-pms-payment-due-alert", { key: '991ddeb219fbf959c17ca76c2fc90437adba20a1', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '9445520e7dce3d9de8194e36c7b0687ae5b27dfe', style: { height: '200vh' } }))));
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
