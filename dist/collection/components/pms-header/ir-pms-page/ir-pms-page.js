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
        return (h("div", { key: '0ffd0883947eb546de15cd1b575cbd1f59c4fdea' }, h("header", { key: '9d4408939945c630192d373fb54f1f2f4d821337', class: "app-header" }, h("div", { key: 'e09839a9ef75e5e25c086e6b475235c930288a0d', class: "app-header__left" }, h("ir-custom-button", { key: '4a8fcefc33172e26549632064d25800d9eebd2dd', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '5128f7b074a04df73e2392eafacc86926c2daf51', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '2802efe9700080f832809b3e437999eaf3a5c903', ticket: this.ticket })), h("div", { key: '1f56e07b6fec3a54bf157f563da929d8d2adb0c9', class: "app-header__center" }, h("ir-pms-search", { key: '8607cf7231c8f734f4deeb3b60d30f6954ea3fd6', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '257d0c67bf9e16097a00985081d553a310020f7d', class: "app-header__right" }, h("ir-custom-button", { key: '30758dac49217d1e5d1c888d2eab0fb1f302ba48', id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '43d87bf474f31ccf778f5007e144e583487a41d8', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'f3b4dfa00f107c547e6360cfac89529d971508b7', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '65c188236e7caa179ffbd6948efe83f66ffe055b', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '0f5b170fd1207707c24257d65c9d09cecfbed359', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8d490d0274e8478672165dce7a982f6321a394f8', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '13281b9c4d089d4f5d539a7c3bcbdc5b4fe18b70', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b545b4c2bae280aecf9b196f2ff07254613edd6d', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'a27574af59da42557e03df536a40ebddb6e07639', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'e66b66da3805fcc7b9ff8859365629ccd13e8481', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'ce7633b4bcaf458efee073ec342442c1efc89625', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '3936343663e8d2fe49dd54a6801bdf6f8c81a966', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: 'db42ba272c6cce3f4b81a4f40235b6d4b9cbc833', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '5df31346d0839949b421a60fcd1492984b7fabbf', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'fede7ddd94253b24495d6944efe71f238a590198', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '64abacf17809274780ee9c8501282191247010bb', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '09b51cfdaa044ee7c19a1747e12f2dc33548f1c3' }, h("wa-avatar", { key: '92a01c59f3e64600a974100e21da0cfb4aba729c', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'd44523d263dcb4978283b2175f9cc40c38b5b1d0' }, h("wa-icon", { key: 'ff71ea8ee82c70c790f6bac9eaefed0b129cb803', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '38fa0f2d15fa745fdedadd03f79b6fc1113f9133' }, h("wa-icon", { key: '42abd87d2e3605e48abeb9648ee7bb184494f5af', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '74788478944ea39de37cdb7502deae7eed9b77c2', disabled: true }, h("wa-icon", { key: 'ef5e3dcb7c083e1fbc675ca071365ecfe0ae4e31', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '6350af77661e888ffa5974b5ae53b05da1c8f63e' }), h("wa-dropdown-item", { key: 'd42e4c5e0ff18be3db3c20f34d91226fbcb52ddd' }, h("wa-icon", { key: 'f6971af869c00c35d0a33fc341468469507d6316', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'fab6efa4ee5eafd9d2bf77454cce5d10a12f22ce' }, h("wa-icon", { key: 'd35595c07e9c8f9836063c22b800293b12bbebb6', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'b371301407a16a0968e6d606f61347eb657042b9' }), h("wa-dropdown-item", { key: '73646b8c7665b64515761a053f9935a818635d7c' }, h("wa-icon", { key: '3bc68a8703af5e229c5d2652be666f1d804af8a6', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '9499d7ee6cd8e6be0ef1d5a87956dd62f0e35a73' }), h("wa-dropdown-item", { key: 'a061c85bd45d715a4380be5a382a9e38463e792c', variant: "danger" }, h("wa-icon", { key: 'e1e1e358663badfed92764870345fd6dcb992051', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'e20d3d93e326b2396398c6229e5e042e4dd4ad67', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '105b299a5c0410eab55e30ab83001054dadc951e', slot: "label" }, h("img", { key: '70571e061c44ec876b040f48a820d845cc445806', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '3c6ea67636f4b4e39d48af3b802f5b058c7897e3' }, h("ir-property-switcher", { key: '33dbc7c12e4c397686c41328a3ea9fe6bdbcf16c', ticket: this.ticket }), h("ir-menu-item", { key: '505d3d48fc3df4361a4a0abd8af7181f849509fa', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'e85e3d4bc5c8e79b71c6edc2fb1e7126b9b84489', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '30b8fd5c51708bda8de5f3332431b49cf91afe3b', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '0e752cd96dcb01384c81eacc4cf44dd6348e6aa8', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '8923a910296ef6c6efa1b213d4cbd2c25e80287f', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '70d23a18793b14e854e538c2cd22928fdba29722' }), h("p", { key: 'ae926e7f34c4f2db073371aa5f1bdc91da4ee93f', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'b6dfa73fb07b52d57a59ff8394663204b6a9aeff', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'f7f161582e9fee56fc8f8fcc9aabb56492e8fded', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'b3885ec4f9aed0b91155a495eab7fced7d1a6b0f', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'a23e99b0218b80d64276e8bed15f0d3b35a363ff', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'db076bc064012afdc1895f14b225a84c42ffcc0c', groupName: "sub-property" }, h("ir-menu-item", { key: 'a4f01c512ec8041dbfe5d6afb8177a46a7955550', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'e38bec6dc049338624578706e7b232e541c357b8', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '0160d0c7dd97210d3ac2ffe420f9bebb498cd2b1', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '9c6fb2a67d4fda1ede0fe886a66e58fc0bef37b2', groupName: "sub-property" }, h("ir-menu-item", { key: 'a24b32e1d559e22fff6a10c97a87df9727859c88', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'f5eca37a77651c774306e2847cc69a9e98c824cf', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '26fcc760a66e069b4c91e9811ed4cdd397e70e81', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '172d22dded326a6fd5ddcd85ac0e1ef6b86e4764', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '489891a8d2792faf5db8a4e8a72cc3a224478666', groupName: "sub-property" }, h("ir-menu-item", { key: '5b41d625d8a66c03d957675a562148880c37effa', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '98480c3177c742d29c72a47f11c7e7664bba8cbd', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '25f320fa1bab9e93d3bc9973d325b44f33fb0ca7', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '72c731f5152c45c9c8d092f8333efdd6fd39cc48', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '481e3cf6f9d29a3a57c342bc8c0adbadad7777a6', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '880eaa98f56824d24573d3ff832ee8cf6e603a8c', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '929cf44f5ea0cfb9c28842391f74d109486acdc6', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '28e8ed0bea2b4a72790ddd19b36b456576de774a', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'bfbb40ecae3b7b72dcf722887d2bc099e2656814', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '422ee9aad213c3f0f86c6ed594a129d26432908d', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '85629fdf425467c288a91e9fd0859b20f65dc778', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '3db6760eaff523a829c3f20029ec7fd230fe83e6', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '030fb1624c3caa14691f42e6d4e10f5ec383c1dd', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '24dc6378d928579f1320010d1c9eab4725ae2b49', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '2b447837b00ed2a0a5bc24e31828d1ad8614a01e', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '9360c17636000d69db2967abdd1d8f5557ddee5d', groupName: "sub-property" }, h("ir-menu-item", { key: '0bb0966d4476f97c89bd9dfd69be2426bac7bf1f', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'd9d8e3b89c1a51d10e7f53e5c7f56dd9122ac8be', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '63fc7c1931a7f10881e5fe2383125e5cc6bbbf3d', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '6b455be7ff9d392501b71b794d34e27a12ba4d51', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'e0025275abd2a73491189fb7c88af8a92ae83fad', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '96716b9cb4f5d055306e6b50343543e2d420824a', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'e7509af04879a43643a802a51bcb80f50ad050fb', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'af1515b02eee62a6222b5ab770a9f0dee764287c', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '233ddea156ebeca5cbb7e0a2a8c7581cfe3ddba1', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: 'b11dc61ebab5aed0abf971cdd04937fe7e51afe8', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '29d62475a459b67da25d45b4e72384fe8fbd8072' }, "A35"), h("span", { key: 'db93e0a8c8ba6ea06e14dfcc198edab447ff0da1', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '40a15e3569c0b97c088111251a2579c939af8e54' }, h("ir-pms-payment-due-alert", { key: '1713d79832e83c3891039378aa936e0a2a016907', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '4759cf6e5d3b216b120d3c78a4bb9b32bcee6c91', style: { height: '200vh' } }))));
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
