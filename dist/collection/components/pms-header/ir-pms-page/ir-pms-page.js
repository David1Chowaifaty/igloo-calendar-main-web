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
        return (h("div", { key: 'a30542ad1b6834dc8d587f2a9cd9026c195efd8b' }, h("header", { key: 'eeac617b2451dc35d9e62fb5c7d52f7b33e8167e', class: "app-header" }, h("div", { key: 'c33fee4e1f0ecf38d0cb6abba32bbb92e69e13fe', class: "app-header__left" }, h("ir-custom-button", { key: '2cd8c17cee8b7e4c4645112e0e15a11e4d9f60f2', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '351dcae4b9e15828922169178f75ace1e4ef9d91', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '40918d2041457674c22327f6d16140f8dea13d53', ticket: this.ticket })), h("div", { key: 'b4572b42f97b74de9268ac43d887bd14e78eb77e', class: "app-header__center" }, h("ir-pms-search", { key: 'aeb545fe2c93a5a091d3cf11b181774a0cd918aa', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '5775e4a712b9de6275c6fd388838674e6cc78b15', class: "app-header__right" }, h("ir-custom-button", { key: '5b7e5897eb922fbcec9bae157f7e4d73e0adcc43', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '51d843a76ed1681751fc23b6487c6d8004ef30b5', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '1653b28bee81cb9589a85903023577497fb5da0c', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: 'aefc1e6d76808fb4a8a0cb10db4000e5e955de87', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '7201ffcf5fba6ef143680ccdce2af64ad0b27d23', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '2df71b4c3dfded53775935340dd44829ccd2f416', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'f19001cac0ae1c42d5e9b7aa339d6f3e70e2636d', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '1c444a403801d9938a3ca457311a90c7b0177537', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '89f3997b49bb8f8d262c68895c8b9838118bbca3', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '2c6cbd975cbf97cc016a71d895cbde1d57474e3f', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '43cc532fe9c39aec690e7a2824227029d918d364', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'a8f5f6c971cbc30b6ad70d2dd5ef7a1a1382248d', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '78aeaafe4f1913fea85d6cd74f6496d271bf1aa8', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '78167a00d2270c739901d0149e4e87f9e440de9d', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'f1c0805dd72a2199022c70977bb1e341c3a57466', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '2a901a45583c8b22a8d21c4453427f9dfdca2a4d', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: 'e6b12506928193930a944b4be5b03aa39a8390c3' }, h("wa-avatar", { key: 'b0ea0cc2ac7be8ada23e0cfacd4e0892999babb6', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '16893e6027eb30901ed447b2aaefc3f203361fbd' }, h("wa-icon", { key: '2dc564f86a00e78c3f5ecf9321fe0a704eeb29b8', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'dc1e92d77bcbe01f57a20e555c927de301967255' }, h("wa-icon", { key: '78900df947b7d9edcd2e53483fce98c0747756a9', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '05e563cb033df3f74b6dea742d074e793a0cf1b1', disabled: true }, h("wa-icon", { key: 'ecf06b2297a0f2b385a11c428944d251e4973294', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '5b36e7e82550f5e4d8a2fef401ec93f896fba942' }), h("wa-dropdown-item", { key: '8ac29389fd602d984ed7676d8ef54288ada3b6b3' }, h("wa-icon", { key: '9cc17f48ca4fd94112db737421d6ee845e5fa426', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '63874ec556f396a7ef0b0c91590b7b7203292075' }, h("wa-icon", { key: 'e19366f8a8a61354e0f9671d0ff3c9be8e1db11c', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '493087c846744f25d68a1b3eb059779eddd8230b' }), h("wa-dropdown-item", { key: 'b16d7cf3028ada1a0a17efce37d8fa2c6c9daa89' }, h("wa-icon", { key: '7f56c7062c41ed356a48deb3877d8bc0a7a88fb4', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '8bf6b7fd123909b9fdd81cd8d1260c35079475db' }), h("wa-dropdown-item", { key: 'c0b37c2501dfcf3ff962c6eeaedf790b0216ead7', variant: "danger" }, h("wa-icon", { key: '4eac66347da2e509e0233cb20c0aec96a177f57f', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '2d55b0a6092fe9954e73ab372c947ea194181409', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '1270ee5a0fb6f5d163931addd8c0544f273161f9', slot: "label" }, h("img", { key: '77e25700eb840ce4c6c791408ecf6401c3a5cbae', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'e26f3813f5e83cf65304d877881836c7f9953fb3' }, h("ir-property-switcher", { key: '3e64f3140b4983c15bb09791eddda5c64a0eaa8b', ticket: this.ticket }), h("ir-menu-item", { key: '0f6e21a8f7b1fd4a09deeb523ff6e11d38b1f9e7', slot: "summary" }, "Property"), h("ir-menu-item", { key: '2d11b898ba369ca03e06b85d33985f0a5296c050', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '5bec33369a3432283e64ac9d4a1867ba7ed45f52', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'a9acea52b4dbcde7895ff5bf73f0c9570ab19fa8', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'f880f5b9b0c638bfedfc10655384a160dd1a5166', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'f295d44fdb07944426bac4747fa1387f272e281b' }), h("p", { key: '1134d629bde3c651b606fdf16e2703dea9047846', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '786adf6146370b61b71051f286e784278740a3b6', slot: "summary" }, "Property"), h("ir-menu-item", { key: '504fa82da88154f4e8c4be10873e2650ab742a93', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '13ba2b045fb5c863e8ed06cba9d4e57322a3a8dd', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '7df2de042a386ac98637c15736680c12e905e4c4', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '1682a045f7642eb48c109a54a94a5ebac486a8aa', groupName: "sub-property" }, h("ir-menu-item", { key: 'a2f93ebe651f7d2a7620f1fce2428ae47c035142', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '71e8e1595f22b8e8ba8fb5f4da68b219b717c1bf', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'fc430fdc2675af5958adc93ab9ef7d2b98c3e102', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '6b7d12dc41d6bc89135420ef7a76959bc0c20de0', groupName: "sub-property" }, h("ir-menu-item", { key: 'd510f8c1ce55ee51cadc2304af7bfc772e6da7d3', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '7ee6755eefd86f23527d4d7aadf58fd2597b9b5c', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'dc3bbff281134ee8749d7c5d65da949563db1ee6', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'c542806350cddc388818c78058ab49390cb7e6b2', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: 'b4733d8086a69cf4828f16c40bf2d0fadafc51bd', groupName: "sub-property" }, h("ir-menu-item", { key: '39b3f83834391b734f9ae4508478a61d83702b7a', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '10bfd2e203ca27dbd14dd12fc41bd0454cef9820', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'e2e36d375df6e421888e985b3b0f101334a24e84', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '5939fd81ba24642f6d5a9928138cb2aeafaef279', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '71062efc747fa4d3544aa34d6107d3ab51ae3ac5', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'ea7392b3fb940bdf40be9eb77ed36d07b6f534ee', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'a890e65e64ed6eec02e8fe3b28fbb51b32bc59a6', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'ba350c461cb2879e769a002256daa60c50ea7ce2', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'a96e8dbff545ed552bedb8e8df21381d12e152d6', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '024e9968aa6464374f32f6a483a7d2b9a7353a43', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '42448f0348beef4ad611b8ad57c27af80d624b97', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'd140f5b221f5e8c5987ab90f90d4577604bd4219', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '4dcc54ada30ca74aed9ea3eb6da7a9b7528e280c', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '282947338ea3200b1c86aa216b7aaee367a89d34', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '026c155e4e12f489ca554904579b38ec042ec6f3', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '705029e71204a1eb068014cfe27855d507095c11', groupName: "sub-property" }, h("ir-menu-item", { key: '1dbaaf70a91d98657dacf01a8ad430717c339824', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'ba500a31fbca1f3c226968581b8078cf53b08766', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'ced9e8c16f9be7ccfe0d4177113284cd05fd9007', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'd95161de24f5b82ef95af5b95acd1cfce8117c94', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '937e3b6492de6e9f0f3dc382adc556428454e807', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '8c0536738ffdfd5ed9ae1d8fc194fc1788229806', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'fd52b6d577585d0ed53f65513d1138a6c14ed9d7', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '0e55fec87f44bee01823ed3f56bddb6811491305', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '80130a75f8e44ba1d67f29b5786eaf057aec1f63', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: 'e8d20dc77ca208f94c0ab12970510f3ec069499f', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'f681f76501e4d0de45e370f2e00c44041b81284a' }, "A35"), h("span", { key: 'ee6e9569766cd1e3c9366d6e3b76b55d28dda80c', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '20dee946754ab69ec1d2ceb9c3e41aefb93e10be' }, h("ir-pms-payment-due-alert", { key: 'c10ae736161ac2c8fb8ed1ee86830446168879c4', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'c94fa8a1950e87e2dc98ec6b9a74cadf1bf86d04', style: { height: '200vh' } }))));
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
                "attribute": "propertyid",
                "reflect": false
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
                "attribute": "ticket",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "notifications": {}
        };
    }
}
//# sourceMappingURL=ir-pms-page.js.map
