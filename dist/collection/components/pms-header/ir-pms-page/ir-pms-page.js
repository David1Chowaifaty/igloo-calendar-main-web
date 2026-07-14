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
        return (h("div", { key: '98a421019c2c6f72b99d9f5451a06e897b198fca' }, h("header", { key: '25fe3c63443f81c393f1b8f51c0b86b639099293', class: "app-header" }, h("div", { key: 'd65e6d39f116b22569cf17a478c2665dca49afa5', class: "app-header__left" }, h("ir-custom-button", { key: 'a08c4cc67e967133d0b3841068ee33cdc814a965', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'd6e804ab1394669b2d357dac8bbc9a5cb4dd5aec', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'bf0b60d1094da81b61c40c66fcb4a5118636ec8a', ticket: this.ticket })), h("div", { key: '06cd0eafec22afab4a19430eb6922f8a336792ec', class: "app-header__center" }, h("ir-pms-search", { key: '4c94a923c435d5f16b2190203d91f1f44e1dbde0', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '619a318203940977b3a8f3a8c6beb08604fa62c9', class: "app-header__right" }, h("ir-booking-new-form", { key: '52922a5d23771c929e820ceb5507e671ed208140', ticket: this.ticket, "prop:propertyid": this.propertyid, language: "en" }, h("ir-custom-button", { key: 'dd43083550c62afd912735753f46960a8cd66524', slot: "trigger", id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '0cd880a6bf8b085aeb7cf11839168b671b5a969d', name: "circle-plus", style: { fontSize: '1.2rem' } }))), h("wa-tooltip", { key: '2e72eb29042e935700f67aa29ecc2f19acb62e4d', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '2d8c523419a116b25051363e5f8401007dc44b01', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '5a6e1b59c2e5b01a70b54b381c8b33266e0a028e', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '555bae608ae5be576ff074545367c10a5750eef9', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '16004b52d131cd99d7fb1c498488145c84f7f01f', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '0ceff602b6cbe2f4228055409f373750a22eda12', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '946215b89453073883d7949f2b42b177b98595f5', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '952d17bd83b6f94bc5587c7bb4ce6df06bfdfdb9', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '556c0e0d9e1095532bda2f1fb3b5ef46f697a3b0', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c0c105e4fd0b675bbe2c4f8ad9cc91921061895e', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '945bcbb895f9d97c5462ea0dbce97edecbf7cb30', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'd8c19365bcfffb6b218fbf8900e499623054d479', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '9a0cbae0283e8d25de5fb6e0b9bd53341be1b103', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'a885dbe49c0de16c63c37e50e8617a997b65d1a3', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '403cd5bc3e9151c28e8929a6f7f4d6391cfd6a3d' }, h("wa-avatar", { key: 'bc8d5a87373ff87db35cf468d364f551ab9d6ef4', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '91506b5dfbaa29fd8730159a2ef5b5ef238e278a' }, h("wa-icon", { key: '1a8019cce73cd86f8133653c568f29747f5e382d', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'a6cf2e4248ee456560e6d026b8688c8ee5b121dd' }, h("wa-icon", { key: '0d29153b3e773535231ccfdeb3c4a7d11d48a80b', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '9bfd0235160bdc221c4834614415693b0ca537d7', disabled: true }, h("wa-icon", { key: '4704080476a95d382d519dc5e6267a1e399d3674', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '3c73c3c814f5df8ad62b39b4da321748419ee65a' }), h("wa-dropdown-item", { key: '1db8a4f15634ca8c9bfbddc089c922fcb13f7588' }, h("wa-icon", { key: '7b66a64e5d8d43ccbd75f8658a817bf39f695f2d', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '930bfc67173d5792a198e9df7b4e10d7ce115d65' }, h("wa-icon", { key: '4d7e23bfac38f1c8f7b472d23c0c6fa340c8dfdd', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'deec9fe79d1aa5761041b0e3f5a7c3825546cca8' }), h("wa-dropdown-item", { key: '44df71217addd3158ff7d23453dc91394380900e' }, h("wa-icon", { key: '84a35cf2d40b0c82d160e42160329641babca61c', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'b8da33f2513853b0ac8bf5db8a11d0a398a9debc' }), h("wa-dropdown-item", { key: '8f677acf48f1651c79c034d0f87b60d748c7a278', variant: "danger" }, h("wa-icon", { key: '873508b4016963ebca8b18e4b58ae9c5d6b69616', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'edcfb5141c9964a06ac8345fc7001849f58a0271', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '75f80c73be8376148128624d74441898753ec1f5', slot: "label" }, h("img", { key: '718769aeb35c626c75e8b81e351a3421b05b30f5', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '57cc1135a944b74eeafea8c9b969006912569db8' }, h("ir-property-switcher", { key: 'da7292d59d2a9890116d0a2683d3372922fab128', ticket: this.ticket }), h("ir-menu-item", { key: '2400a4076e60d9a552994163d96a4766cd566fe8', slot: "summary" }, "Property"), h("ir-menu-item", { key: '7f4cdfd6f73002ca41f75bb79bc79572ca7774a9', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'c42399e31e71bf189802aeb41b04ab1cd1892b81', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'e6b16c80f0f859b0e7b45ccdbc8a7aa2ea0537f4', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '827a18864f8e6b5fe717f40afb1faa0a181f9c9a', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'ce3ac4302ccdda7bc0e81f4d568ee3d2c23f92f7' }), h("p", { key: 'bd19ac6ba1b52975f3390d8f51c27a48c2074e88', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'e0c557fcb0a7496f314bdb920c96d444eafb8c15', slot: "summary" }, "Property"), h("ir-menu-item", { key: '0a4fe4e9ff14564c324c059c47ef03f5bdae7260', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '4fceb50bbb60ade5dd63ef7d243789238500b379', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'a7fedfd0e44c31ef14a423c936bb6c77bff2c181', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '97aa9e23362622b6c45fa79d0f7506777ce0ec8a', groupName: "sub-property" }, h("ir-menu-item", { key: 'aa9d5419c041077433ad37a2bb8ed289690bd342', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '5275e67d92bd63cbb8924bdee102a31b6c5608bd', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '3c3c788605611fcf3e8a2ba6ddec7e0befb45f15', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '45da79b04b7df0735b31c6cf8c7419e78f4b99d1', groupName: "sub-property" }, h("ir-menu-item", { key: '79c3e8b8b8e0679ef470237f30c88013a3a38da3', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '2f842ccf22d4f94a5157e8211f726521f6f60906', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '2d67279f77c5d04a99729411a1e6f78198783994', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '7c1ccb54c86b658801f6893f6c2beac4465080ae', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '94c0ef17769dfd5d31f27bbaa681d95b840063ad', groupName: "sub-property" }, h("ir-menu-item", { key: '93b04c8480dd21e7e45aa18e6b7ebf7983fde767', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '42d020230fcae6d85d589f86bb940620eb73ffcd', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '7e59dc3ab563ae31f03cc105a6c8cac18d55c063', href: "acamenities.aspx", badge: "    \u062C\u062F\u064A\u062F" }, "\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A"), h("ir-menu-item", { key: '6e2d716c84ea8e272d9eae401fe1f8a5507077c2', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '5535ab62ecdff330c53fec164dd9ed54998cb085', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '8f0973581d1b85bb43330100596447dba7cccf14', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '4af02280210c4dafbefd43fc8635ed9edb12cf81', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '343b56d0470d303c780b61e1154d30453a86063d', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '608152b92e631307091b4683330a071f4e5507a9', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'ffcd65e262726a95e3e2aa864f5b346294c5e5c2', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '8fd7526b59f7a01ec802a72f97bc046b4f506689', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '27b4aad17e6f9cf8b0ce88c9a9396d4ab7dd6f86', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '6f847f3a4a40b215e570e7bf6dbfafb13e90dc58', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '6972d1ccb81d8d62e25044960da4bf0ece8f656d', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'e32eb7f20b47b743f455e3efe166eb6cbe1e8857', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'd70cb549bf05ba90e359a835c3181faf8167e3a7', groupName: "sub-property" }, h("ir-menu-item", { key: '75d0044208297baa362e5be262a4630fd91ea8de', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '92bfa461e22d919f84179b3ca392571cf281ed12', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '0c4561efeeeafc003cfa7cbe254f8653a9fd8090', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'a71fd2f5b523b6e632dababd8f716bb3909fc314', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '990528a9b50bd84de0f4100a55317213c3453272', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: 'abb7862b58e7e8e88a5caba1548c9abb43cfed38', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '893d453e76e4aa85393685b77860aaaee87d4c62', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '001ed2b943f4fdbee139a5dc6a999cba3b979e1a', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: 'fc727f1cf0e3673b6f07c2e74bb3f0383a6abb88', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '267d2c56a5732a8b3220628c87bac212cc2fc857', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '8046e827303960882217a6ec35847b2ec428a81a' }, "A35"), h("span", { key: '4db6c0fd31e7878b2fc1bdca38cdc2a478e4fe5c', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '8572ead47d2213ee253d43aa1e84560b53a3f1dd' }, h("ir-pms-payment-due-alert", { key: 'c5bff689dd2a98301dbb6c8582a9fa86fb64f2ef', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'a93d5d146e5dc81f7ffb1fea0c70f2b2f7a42489', style: { height: '200vh' } }))));
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
