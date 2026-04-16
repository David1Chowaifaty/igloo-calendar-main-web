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
        return (h("div", { key: '965f2c71a3776aa413b709c0b171c14e1e26cd88' }, h("header", { key: 'a86ef4d54c53fb8cd6470d406439ba32533f2786', class: "app-header" }, h("div", { key: 'f67a1d55e7461e1097273e85127f189c2e7bf03a', class: "app-header__left" }, h("ir-custom-button", { key: 'f0ceb80af30661575cf5d902b14e4a1805a3ea1e', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '12b8f12d6752fe89f714b42c709e746004d6cadf', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '47328562380b06ffac02c3db31f7bfcac0eb42e7', ticket: this.ticket })), h("div", { key: 'edd25a7b2f83d1873a431d08b17efa89575e3238', class: "app-header__center" }, h("ir-pms-search", { key: '94d28939b9fbe33983433f61fcb7d1076b20384a', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '35afefcd3a367d8eed9712bc0479fec3ef2b724c', class: "app-header__right" }, h("ir-custom-button", { key: '4bfb178a50e524639e51c02c24990866dec1412d', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '07e0869762bade378ac8c48b3dd088da99125e69', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'f512866e0b31bf4fed2594c1c3944df0026938da', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '6ee4b6915eae2ad96d99bcf5a27708c1b52da6b0', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'a5dd936c6a2974e60f70246ff5020b65486eee0a', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'f7159c5fc56e81a1f0f3eff3f088939e93c0d796', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '4ac6c616db8a549b0ccc8725028dc219e5877086', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b6028f45befbd6824b84220e612171b40846f081', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '6185a9c562cd1a0b8ed80666e9a4c39be0313228', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'becdeb18c1b1d9312a53f64dd8f7e2d07ccad3cb', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'fe93408621f697601940fc9049d8268c70dfea29', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '63fd8e7e40ff64508a7dfe2bcc98df8899de9211', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '21604dd4aa8f0705cdb278f6a983c2d969935030', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '56fae66a4745a241c36a8f6017c44aeb56b6db9f', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '598e5b22377cfdc0342ba653d36c270d1ab06db4', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '4216c3a49997ab2f53c4f83262deeec6690087e1', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '8efac75297687cad620240d98af7d7f2042fe841' }, h("wa-avatar", { key: '4b89dc3e1e2023927756c16772d629e3dad69ab5', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'b71780fdd4685bb82acf70056c358700e30b5cc0' }, h("wa-icon", { key: '8012d1940121f6cbeda9946a14d34b7e56567cfe', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'fa1cdfa0123f6f157a99a52a5ad985e6d74bc998' }, h("wa-icon", { key: 'badfdb9e366031b70f05025fcc17d2dc34d0fe30', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '6860829d40ae198d48f9bfb47d276279fd2c4fd4', disabled: true }, h("wa-icon", { key: '993e6acf6cf9667992e46ced634a8c12885b23f4', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'ed1d9f58f25853e64f4e77d627763bf77759cea2' }), h("wa-dropdown-item", { key: 'fb062a4a082f64b1c726bb2808d1b1b944e1fd74' }, h("wa-icon", { key: '52d832cd4ecf5a4fbaeb094ef394184424b080bc', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '942aeba1a71c9afc28169cdca086bdff72522351' }, h("wa-icon", { key: '74f4189429c73c9d7cf3e7aecddc83883bb02962', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '1b05baa9a17ad19c5a88f7b90d438324b95e18be' }), h("wa-dropdown-item", { key: 'ccbf65eddba6d66a355a2fbe719574a78be86591' }, h("wa-icon", { key: 'd6f2f812ee642fd83de0e6fe4d858b0bea010ec4', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '0bc6bfeb4056be83411cfa3d0da10099e39d379b' }), h("wa-dropdown-item", { key: 'f8960a708edfdb0dfc265f3f01a5e3eb866d01b3', variant: "danger" }, h("wa-icon", { key: '8b92a3c7a0fa680c7129eaa8caf9249aa8247c04', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'cbb79884c517f3fa7b78bef2cbcc018591d75cf9', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '2c4402c0b662ccb292f0c58d425fed139d3ce17e', slot: "label" }, h("img", { key: 'bde9bf9d3d9a268f10e0e62a8208e1ea49db97b7', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '6baae748f43a997d53d3e04570b7943707896c1a' }, h("ir-property-switcher", { key: 'c0c890a25049b997cd472c842d35a12877eca855', ticket: this.ticket }), h("ir-menu-item", { key: '504790bc25d49096218970b040fa133faf2ac528', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'da5aeca96ce6898aa5cec587cb33e2806959fc75', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '50bc212d4553ee8e1da7e30ac3cde9364bea052b', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '7b7a55cf9e5b8c4dea2c25cb5fd31e00d97d0f62', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '2374272954222237a1e018546d82c228c199eeaf', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '33452f855eb59366443feb85b9b69da5012e0f54' }), h("p", { key: 'ab76b529098f1832bc9243dea8c0787d27ec1e80', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '9425dbecf70d4c4f59643ddae2f255377a09a0ae', slot: "summary" }, "Property"), h("ir-menu-item", { key: '1b0903328c90ca211577cf7cdf14674895f8b6b0', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '3a211cca5092ad468828aa95b3dfd83eaab2285c', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '6c8e813621261657eb5fc35fc44a936dbe887e60', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'ac74947b8e409c4637f0cec565f8d8da4c0fb9f5', groupName: "sub-property" }, h("ir-menu-item", { key: '328dd0a34b1d991bc579cacf03857e7fbc676dff', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '784f249b51e1da81e3fa9f42852ec3df4c270d8e', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'f15dbec82ea2448ab98a533293b46e5f212371ce', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '4bd31447fb59ef5a0058c692db0f9ed9150ea2ee', groupName: "sub-property" }, h("ir-menu-item", { key: 'a70f0902e640b77fcbd83d95c7004523a902527b', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '5b0ad64484c1abbd772fde0399d96447f06b4507', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'fcc7308216cea637e238ba9b38185503338d4fe8', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'b7d3fa27d63c1ca1488c6711f6479cefc5d6d0dc', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '3ae3b7b8156a0adc516dd1c7159a5fd338197e77', groupName: "sub-property" }, h("ir-menu-item", { key: 'aec44aa4fa849d9832da92e9f97d2514949dceaa', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '74129699c3615752d0569b1bf1692bf2dc5417c2', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '497740ff02376620d4ac033d3bccf3f396a4c23e', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '9082148a3a1dfbe3e32f6127e0860430870e9c0d', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: 'b2347d79827ef5fceb7328bcf3241e8936345db1', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'c1ee85951a953acd2ea7a21e002c8bfdaae2c27d', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'df9b1f519a87993d8239b972ccfb0071df8559ea', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'ec8a5ae171ef3263f793f7f714ffc2cc5396f8bd', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '1d34bb01e3a360c7ec63f4872285a8b75f02b8b7', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '62b8b90df083824aebd3d0a5cf8756a9a2a061ec', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '48580e9dd2856a9ef8023e504cabe55b9c3a18be', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '36effff964f201ce081fb9f4bb2c024e9a0b4c17', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: 'c47de52e097e7f539115c67c354cabdcc40fd303', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '8c9c7c1d1a6b18a9f474907a33f0ccc83b4bf12f', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '70d524f190cbd40a5750e1dd65ed80d28c60903d', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '3639b3df26e4df397b5bf9a4a2798576285a875d', groupName: "sub-property" }, h("ir-menu-item", { key: 'c2a380b33af06a2ead32385245e0dd97303adfd2', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '0eb642bd1c414ab90788121288d71519f252eefb', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '8b651930e81309bba5e2fc2c7fa013c4ac34da23', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'f8d1f45c535b8927cdb1be2311eb9111d8c11faf', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '3fd0f9f8f023e8eea77c3ae79bbeb1b4e6627aa4', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '7bf7eb73c1b5b036eb74174a0737fd9cc4af1569', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'eec138dbed0b68c491ff4b7765ab9f158e9910de', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'cd7bc83511a69061c892811e82c68cb0afd705ee', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '6d57c815629faac9a83d44e4c12508d444d96205', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '7c937810bc8b7914e232f1c5243855451edd2657', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'e67406eb325c251a38f0e2947079978611e38880' }, "A35"), h("span", { key: '9faaf237f655cc66ade31b11062f5390f2be17bd', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'eddf419b8de43f90903cd779bed6eb02289b9f9f' }, h("ir-pms-payment-due-alert", { key: '73e855643993351afa2cfcb6ccbcc843a0fa77a8', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '96cfa9a34b0bae32c91edabf086371cbe01e296c', style: { height: '200vh' } }))));
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
