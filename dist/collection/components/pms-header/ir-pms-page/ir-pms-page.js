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
        return (h("div", { key: '33feb49c78ba3554433704e92934de865814332d' }, h("header", { key: 'e42f42d15c53bc903599565023e40b7b5bceb21c', class: "app-header" }, h("div", { key: 'fc76287527aa3a9ad07673c64c82f178d45580e4', class: "app-header__left" }, h("ir-custom-button", { key: '3a78ccf245b194ff9b0205259506fa6119819872', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '43027346bf485c8586c2519ab25cab3f1621d544', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'b22f2089c655f4c0f287594b80a097ffbfe240fd', ticket: this.ticket })), h("div", { key: '81ec45a4a2ac4ba472ac8833e69b59a1dbe590b0', class: "app-header__center" }, h("ir-pms-search", { key: '4040ee9ceb4937dd20116de982dfa6533c4cb3f9', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: 'b35a8662192fc125d83689479a342b22983df042', class: "app-header__right" }, h("ir-custom-button", { key: '3e29ab9bcba36deb88f44e31abef52cabaf83c13', id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '4bd18e12bc1a33980633567917ab2ee7fdbd9b52', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'fe2284583b38b021084b9057706d5bfcc0a7c0e1', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '4e2a7187013a0a515b651adab297cdc29b8a9173', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '98d4cc3594b749446b153eb71122755236b2a931', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'db13678bd26525192e33830f3363297747c2fd97', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '81142d6db68f0cfe5615e37616edcd450937d052', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '2df84efe553d59d3b0757169cd0830cf53c09e03', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '9880dda620bfa0db81b18b9d469cdc7bac250e8e', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '927624ed4ecfaf5b4fe0f2fe2f0fec57e27f5994', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '2bb517d32bfb43db7ff534899de045e1ec5d3588', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd2cb4071c26b12e605b072cca38a0f7f55b99229', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '65ac4fa9a637e536745f16716b675a1fe602ca8d', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '36e6c0f200ba7fc7c158b64099a5f943aa375650', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '70837be51c63c03e26a14820497741a29e6d6630', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'daabe531f30f9cc341fcd6b73fc27da5e3de2293', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: 'bce895f12bfc4c75aca48c10bb9f525aef919c20' }, h("wa-avatar", { key: 'e0ba7be8fb87ff9699c8aab19e1f794596f2031c', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'cf68f7da44b413498a2488c5b9819b265eaa65a4' }, h("wa-icon", { key: '6fa1e7843c75830040d619eaf9e9967a053ad67d', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'b0d8d0bb2b461bf30849fb956c48aeb00b935d57' }, h("wa-icon", { key: '69faf6b5440312ea2a1773161caeebab9d75d380', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '3ad01b887af9dcf01265900ad1c90947f4525b47', disabled: true }, h("wa-icon", { key: '69e6ac0e6930641f968829b99e9a11bc44ef5ef4', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '008df3166ec6d1bb81c8b35dff1d6b5d61cc0a76' }), h("wa-dropdown-item", { key: '61f8da4825889f29c499601cd1ecc332a6c4623e' }, h("wa-icon", { key: '13d9ae3ea6edd7667d6517f0237c86abce24d421', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'd2ab580eb5f7e57045488a4d8f31500a88d6c096' }, h("wa-icon", { key: 'a86f22a14793ed6656d15b001f8723e8685f340d', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '0633737c3bfd84f94c13479a65b79d93f2398ca7' }), h("wa-dropdown-item", { key: '3ffc4992534cf00803cde75f54865d74fd93fcad' }, h("wa-icon", { key: '834eef40d2db6cbd6adfb38ba87d5542f8da228b', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: 'b20a8aa28af935267bcbbaefa9fa8052085f5256' }), h("wa-dropdown-item", { key: '9e91cf009e5f0e45f677847cb4c9d13b64f17b61', variant: "danger" }, h("wa-icon", { key: 'a1ebde98aa0fe6a31a16e4c190548fdf8a9128c5', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'd58d58f3a36bfd2ca62d84f22c2d78eb256b08c1', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '0642c44265c15b4e774f0a5421f88416aeb9e8a7', slot: "label" }, h("img", { key: 'fb61cab7a4a652881029869a28b691f636aeedff', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '40adc05082c6353a970ce946ef9725bc8b5a61e6' }, h("ir-property-switcher", { key: '4c2875755bcef46ee04f0b8d6c1d40641a97e4e3', ticket: this.ticket }), h("ir-menu-item", { key: '51945d345f569db99695b5ffd86cae7218ff48dc', slot: "summary" }, "Property"), h("ir-menu-item", { key: '7142a747f246ca6d0733b087f4479a9b9eb9523e', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '5cbcd56191b874994ef3ba4e2dc87a14393fb3a7', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '8276d61ca46009015323fb145f1d3c4da04990c2', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '163f05b0e02668fcc770d4f375d8a458f8880598', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '748ba55dfb5edf076f175ab4343818d3ac534f78' }), h("p", { key: 'b482012d0d5d820963e3f38953a04690530e2c4a', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'bceb9b067b8056becf9e7dda80342b9e427b1747', slot: "summary" }, "Property"), h("ir-menu-item", { key: '35fb375de1563c3f91afc21512f48ed441d0306e', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'afbd2277d9ca0c2734b499aa5d4a5e5351b01a2f', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '63e1328b08f597e4b6601dd9af257ebe0142f833', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'feadff5c82bc4a585c2f41b25fb606e4cab86c7d', groupName: "sub-property" }, h("ir-menu-item", { key: 'c062bfb03b4f654ec7dff5fb67cfe1f96f916cef', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'a1bf35171db7d0ec79373fa1962e6d62f009dc5b', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '2872b4d43f744cec6fc72864e5a1f462c039b68f', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '9d41f50411de819eba82043c78a494bf7931262e', groupName: "sub-property" }, h("ir-menu-item", { key: 'ba4000c1d59239a88f2747bc7274959ad61ad131', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '204c0661c93fc4d242d2c5676ae8b2c802cbad76', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '85ebd80c7d5e87f731475e8d6996b6f6572eb8eb', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'bdf2a56c64a20cbd6450eba6d2d0075a89b47b6c', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '39aece5f6bdc12dff419af9809a4fcd7c6bc0331', groupName: "sub-property" }, h("ir-menu-item", { key: 'b03fd37300231f84a411d2357043daa7fafb768c', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '250138545aeed660b36d514d4e9c6d09bef0a45d', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '673fa30e2c70142ab2ac9e31e8c7adbb921c36f4', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'bb0e2bcb2222b39ecc817c589816801fcd49ba72', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '4b9a3e47a5266876754592790c429671a358492b', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'd07218b9fdda8c7cfdbc5cddb5c3b16d31af14c7', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'adf812b0caeb780146929135cffc68048bb67442', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '52de1bb1840ea1f72d8e50bd742d8a66a8ee505b', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'a1e9128cca888b2887cd286d964a1d055ea932cc', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '360663a8c528498126ed6dbb56ba9f3431e2abef', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '4ab95460daa5b984f08489c8264ff91bfe0fbb0b', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '300e6468045c0bf1c7401704a3f11e547f413820', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '5e9ea30305c255f214dfdeaa3f1ea9fe05ddf4aa', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '07452265c187811df5f153726d458ea26ea5cc25', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'd52c8fe28f64a84767684c031931e7428140513d', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '2faf7ca916aee08f454b8f976da1d93dfdcebae5', groupName: "sub-property" }, h("ir-menu-item", { key: '9167ea89462d123b57cf8a2f8520f70197ee81b7', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'f4c93706f8c073630650464d73bbdb9bbfb380a5', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'b1c7ab9e8a1f4e5cb1d59411c3f7f3dc4b1ddb0f', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '552879ba5c9c9fa32c0baa658141eb983c7646db', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'a38b62f43c5d54f981ecc0d70076abcf325f6445', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '35db346e86aff90dbd7b8c9bcd07d8fc12ca252f', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'fe7a31edf0da3d624a71d3b2dadf92fcfe14195b', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'c6fbd1b8f2146929f9e46513624e0c06b820586f', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: 'ef2a0eedeacfc659342f0e6f9f22fc670077a9e0', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '5ee2090bdb6f8bb5fcd85256abfce5a252ae4c1d', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '92d38158097d55ec60e70b16ff73b0b059254077' }, "A35"), h("span", { key: '20f1de811cad063ba8b4ad4d299a9ad04254c22a', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '27206baf30da29b5c3d894b2538c50eb8d62d520' }, h("ir-pms-payment-due-alert", { key: '2a3ba65d7f3896b811791423e152be87596f4b02', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'c0516555b844980d1598adcac7c1ef649aaf2475', style: { height: '200vh' } }))));
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
