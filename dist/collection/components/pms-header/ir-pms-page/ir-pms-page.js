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
        return (h("div", { key: '7dc826ca134e79d92f2a8a8ed19b39b166530dfc' }, h("header", { key: '2a500d85ea4f8d9802e91a20bd5403785ba9cce4', class: "app-header" }, h("div", { key: '02c0c4af3d75a147051b5700a08acd11626f7a30', class: "app-header__left" }, h("ir-custom-button", { key: '4dc2c2af9bd0bb9b41e38ad8feaa413345219f14', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'eba2cc1f3c824b11f9802c06a4d5bb3ef052f351', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'dcd54e77b9be1d46baf93cdde803da533d588b9f', ticket: this.ticket })), h("div", { key: '60db59d3bfb562a1e3ed339df6438ed4cffc993e', class: "app-header__center" }, h("ir-pms-search", { key: '317f23f9668865f49ee7bd8ef8351eceae85f0dc', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '24deac57c88be859f3f6a9f4f142552e758dbe76', class: "app-header__right" }, h("ir-custom-button", { key: '1c26ce19998f25c604683e1edf28e9312a8496c6', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '2a1960e4e919ff89ae25bc3733bbf74daf0b7d43', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'ad61f712d41a6f5ec987baa55666ef6760ef37ed', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '6b63359825d5a463c4e367cea52fd6f641de34d9', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '20a927769cdf9937b8acd3561022aa4b250ae6a0', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '3f4635d3fa2a610ac99828963e6964578c757fe3', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '2c32ecf0e89a4e785d01a488d096a9172a164198', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b5ef2ef7db72de71a419c9b3d078bcbb3876a43e', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c266199059bd5778b7fc17c92b84597a57215088', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '1bcd200243ec18fac2bfdef0b15e1bb9398eac34', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '28275c778eafaa2812238624b7ac0b19fe2b5ed1', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '4b4c6a6311c1c8d8bfbe340b3039a6a39b8e5968', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '562ed60aa99d0e596eb9b0b85552e66453e0d935', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'ade45d2203683c094ad6f0e2b0b8c44ff5ec3802', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '225bfffe0adbd7094384c5331b684ce938fe9d19', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'beafd4903e3059cb48a232cfdc753d6ed8ea2ec2', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: 'ddae5059cf8098997ed8d11775bfa91fdb440679' }, h("wa-avatar", { key: 'a16b03d7c0d6421fbc2b4f4785fc7e1d43863c7b', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'b80d0ca0bccf3a6bb513ab10b725b99def030127' }, h("wa-icon", { key: '9b495834df1bc8d24a2b1739a88a541d8e7d9766', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '73ce5a3e37a5dbb4a69b78cce2297c898572e7d1' }, h("wa-icon", { key: '0133268b976a71bb25a2490bd3ff6d1fcd907902', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'e1393f6a08379fe0017afa4ee6c0b03fc2f4fa89', disabled: true }, h("wa-icon", { key: '7fca099504d943508bccb099ee1d74495e7af6e2', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '8f22d0c8b9e8a0dad0a139d361906b03c5e5418e' }), h("wa-dropdown-item", { key: 'df9e2710a51a6197ca2e1b11c228b14f84196523' }, h("wa-icon", { key: 'f7504cb12b418630b7a3a1168093a17961653ddb', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'd00f8f08d676afa35e3e4bf0af5396867fb33ebe' }, h("wa-icon", { key: 'e446b4b865dad4a6b5ccfdacb74fa3dc52edde52', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'dad986ea07c8fcdf9ec408cee72e0ce40126fb86' }), h("wa-dropdown-item", { key: '48166609112e34e6596962c5913b1c897a44aaa4' }, h("wa-icon", { key: 'e2a8a239b376b443c74d8b5480e5dd0b639b3360', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '0ae3de20ca92a14fcdc91d1a73647561866b7f26' }), h("wa-dropdown-item", { key: '2b1bd45d277c2f799e4caae78da8879caca16b9f', variant: "danger" }, h("wa-icon", { key: 'd129ef3dfcb583a652998e139882b06b3f18f5ff', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '266dbfee018dad4033f866e14b7b916db63634d4', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '116c15239e082b79de3bbd440f4a617ac3a631d1', slot: "label" }, h("img", { key: '76a97dcccc22f0d479b81ca1f25cd149df6e889e', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'd52cc34c8610dee9159af11fb12e8e9bb5596f77' }, h("ir-property-switcher", { key: '7727b0d643f6f366f83670c240c350675a825223', ticket: this.ticket }), h("ir-menu-item", { key: '853ebd05868c332b9e7ced3016bf2f6baa5c5ac2', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'b8f41f54b193adcb30a6b1d0732bb609ac99510b', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '64af95729c23c1e76cb672802a6cce19101ffee7', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'd39ffe1a692b42b43b947e79a92572593b46813e', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '797bb910916904ba294d0a502ff3628775c3894f', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'abcc6dd9cb1115900c18832f1cddc4f0da274d02' }), h("p", { key: '3b6216b2c87e2dc0182d76debe693b7cb0f08091', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '2bc91697f25b49d30475f28ec39366d52ee44cea', slot: "summary" }, "Property"), h("ir-menu-item", { key: '77e84c20974fdbca59c59bf1806989b492ae0030', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '6820172d0505d082ba465288e887cb3186460cc9', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '812fcfeb575915dc908efad53fc901bb4d8bc8f4', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '8439af9e6b63e853d210b77d1420131cc8fbb8c4', groupName: "sub-property" }, h("ir-menu-item", { key: 'bb52613ec7f95d7621b56970173cb515b88927b0', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '16f035bc1934e9e368c93870dd17c230d3425d84', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '2f920fa628ec9b10016171b2984154042dd71aad', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '9e1d68c109662ce434b70049f770caabb5b9099f', groupName: "sub-property" }, h("ir-menu-item", { key: 'd082dd2f608f8b2869c3dd72453e110b4d656821', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'bc18ac627ff471b31a546fad474cd7a203c220d8', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: 'e7a69cd4d9e64249dd79ad04dbf04816eb9f0e4b', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'd60ddbdb8593de9f8434c2ce41463fbfa7536b6d', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '1aa4044ec8e38e0eff386f30ef3204675f04a880', groupName: "sub-property" }, h("ir-menu-item", { key: '1753f0201b869b7c3f6f170e86b8ab5efac637bf', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'd5d520fa7b047ae759762c2c4c16629269df86cc', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'a060538e53cd3f301d89ea98732d9da7be6ea650', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '2d3bead7719a26f59370929fcf8843e778703439', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: 'c7e5a1a24cfd817e3636d9f314ee0403fe6bd631', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '23a92eb96c052da73056a15156a649d1ece5559c', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '770071909c2d3a967c16fba4c4454f5f44efcd31', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '0271a91d365a8658a79d6397a17868173af01953', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '797147b24d5dc01c2a7478b6d65cdfd21c67bbcf', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '903020b28b6632dde6556cee2067b77f056da6d7', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: 'a49b4fb8ce9b5301f83071b7b2c2ac041dd3745f', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '7bed9472bdf0d022833b7fc0576ec1973e40e61e', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '9e30437ade8e6679e6851a2832e73a2c362385ad', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: 'b7e67913d1e140f5682d9f5c90dc339cbf36f346', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'dddfe7b34bf8605c9e38244f07498b6bfda9a184', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'df3fb1269772e2d64cc82c934aa99b7b73e3521e', groupName: "sub-property" }, h("ir-menu-item", { key: 'eaab8d9a583a503a329892e3ff75133c7aa70ec0', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'aa44d196ba23735fd060d0929ad6f4fd86383885', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'a4ebfe484209b514feb2e4ae8c861efec3323fbc', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '155d2e2006e2df394769e72ff3d6e8701acd9d34', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '7040f3157ef61179a37c6db6a24fa50c43543edc', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '30d4576e228563ad0f0917d67f0adaba234caa3e', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '497c8ea6f7031caae882380d8a7d2c82e5f70faf', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '7d17a72c14f47e23e0c0852a17cd268e41279de1', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: 'aeb662596d42183a915fb563f4eab1917ce847e1', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '15170f03a54d71407e65689a547a7a05272266ed', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'fdf39a4dddf3eda752863fe6f7c85da40f53450e' }, "A35"), h("span", { key: '968cb2ad24ac89bacdd952b1af925af159c2f15e', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '285078b2711d7ea21a14e35898004e370a60d77b' }, h("ir-pms-payment-due-alert", { key: 'a74424679c589eccacee77eaf477152d509aa392', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '002a19811dc358787da715b81d688914e1abf315', style: { height: '200vh' } }))));
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
