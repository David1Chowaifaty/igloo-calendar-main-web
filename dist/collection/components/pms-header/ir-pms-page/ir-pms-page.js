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
        return (h("div", { key: '7b6bb43e0c6a66d4b7fb8b654578d84e546e936d' }, h("header", { key: 'd10a78111e89bd420b5091c20993d6d93f34cb03', class: "app-header" }, h("div", { key: '647b89942b4229639d5ba119bc37f8a69aee1e27', class: "app-header__left" }, h("ir-custom-button", { key: 'ce1f0a9c5b736ea771f724f352e47f85866b9e49', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'd1eb0ca9ce41c9b4ca69d65b4da9875dde536a51', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '61a340847aa51779385147abda2b467641ad58b5', ticket: this.ticket })), h("div", { key: '4d6c8bcb8a971a62355e137c6475c9924b203455', class: "app-header__center" }, h("ir-pms-search", { key: '2ed812be55104b8c9216c99cf4c218d60d88e0b1', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: 'bad0058d2ca04f78f7f7415cd97cfbd74e99bf59', class: "app-header__right" }, h("ir-custom-button", { key: '5de438342e5cabe5b6c0a788a5fbadb11945e525', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'e86788933562d90c49f4ed27dff12ed5c5cb7cad', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '24f0f8bc9bfd89d2cc16a3349d5e3a459eb03256', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '965dda863d7acb1d56f4d7d07ecddd46888fe48e', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '98319a8dd0b5733448b5a5c39332346c90d62f58', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '52666060984750299c703c5ac37b10a6db6e0b46', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'ab73732c91e1129562c294ae8631b6c40e5883e4', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '41d27e42bede4301bfc9c7fb6d9ae423f559551e', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '4321f216b1d46ee3cb04794a7e3db9dab1a7ac74', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '2cf163abb20a5099fcaf755eaa94b8b6fe06b1de', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'd4ee6138642c7aaee8c55435724755769de2a887', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd867aee32eaead9a32dd998e6da744bc19fbdfa6', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '393d2e97bcec6636fbc8ac5fd5d4e48866f61997', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b9d583d76143b92b45426f6136c952a8636e766d', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'de2f333da26e3e909c9879ca3539711113c7fbe0', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '25b08b51a3c994222d54659cac9a7ee68415261e', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '060a5e4812cbc466b3934957e5e7953b273db580' }, h("wa-avatar", { key: 'f8afd0661475ff43cd3187872fdab9e6f914eef2', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'a85010ac286be77e7ca031b55e2dbc19eb50641f' }, h("wa-icon", { key: '0a5dc5a4df03cfbb80967ef7d8ebfd19c1b7830f', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '3df3bf63f4f2a8619838e3f84ea063d9513c6068' }, h("wa-icon", { key: 'c311c9a5634a10b5bb65211183ace287f3b35620', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'd60e3174ffffae3e412c45afc793d09da563e243', disabled: true }, h("wa-icon", { key: '2bd10d72082e8f1e4080c976668a71f37dee6637', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'a89e78429a62025134cc7b74a0b56d1570a42bda' }), h("wa-dropdown-item", { key: 'd71213c8a08719a70c8bbd9dacce183b3f114e81' }, h("wa-icon", { key: '0a011d9329844a1c44f279bb9ca2a743056cb8d6', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '2774437a1161b1c500bee6d699bf2746e602818d' }, h("wa-icon", { key: 'ccfb33749756d5ac0d57145377a2ffa5163e948a', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'bf92c14ab6e492a23184ac2a195085df3bda5657' }), h("wa-dropdown-item", { key: 'b5267cc25961f5ec2ed6e5195b21a15e4dafe7cc' }, h("wa-icon", { key: 'a645f9fce2387a425567eede6aea5f955f793724', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '2682d432a3bf37c7c0ed185baef0dc394faffe74' }), h("wa-dropdown-item", { key: '1913f7ebbe368e8a12ade135cf8b148829b51726', variant: "danger" }, h("wa-icon", { key: '1f7633fe45883036662ec7ecb9041635efbd0629', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'eb3dcec5f1b6fc301ded76505832dbf70a503cd4', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '9a228e22ebda2e2e0886063a64f8029ec13e6de0', slot: "label" }, h("img", { key: 'f085feacf4098564e1b29997aa842194c23fcd22', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'e18dec04ddc4721d46190f80b593f9653fd4eca8' }, h("ir-property-switcher", { key: 'aa07a17e219fda8ced146671c64b08b84e9b99f9', ticket: this.ticket }), h("ir-menu-item", { key: '1250711519cee379e73d0537fd47e0da3853e66c', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'd4081b5d7140c358528b1e4dd9dd51264a502fb5', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '9e641919c51dc75bc91110f9634372dd7d1a54a9', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '1bc2557e322bbd345d75da4992325ff02e50c237', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '76a86a5aea59b3de82652c6e16a8a300ad67fb18', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '81e906fd7d5ed7b3dc2e30e10137be10fe58297f' }), h("p", { key: '8d37dc6fc801648c7bb733566c47e0ae995b4d8b', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '19268573ad06478c25ad1c9854143ca43f8a41e6', slot: "summary" }, "Property"), h("ir-menu-item", { key: '7a8af9dcd82e9b7d1a86e3130c329b10139477a6', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '0e4de26e45bbacb96d07a082c2d58c77904cd1e0', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '36e682c5a7c7cc392f73c33c6da58bc40ee6a0dc', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '60737febb7ebde00ffdedf60bfae3888148a0dd5', groupName: "sub-property" }, h("ir-menu-item", { key: 'e8353b3e4572c5ac2f7b0585278f54b7154fd3b5', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'a0138717c7c1f8c91dcd3fe64e7f761f53e50184', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'c1cb8a062f0b85d744e4861fae2c9e048a798d6e', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '454b7b302eecb1dfc55a48dfc2b42abb6fa89d72', groupName: "sub-property" }, h("ir-menu-item", { key: '99b5584062e8955a4bae1c7abe68349b2faea530', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '0f7a913bf83de03ceb59a313fb1fe378d99d5a2c', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '8f601297f1953d323e4db8dbcddb363f903c347e', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '1fa33c12ba48af8d06bf44660899b168c5319291', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '6d21a6c5b5945b14ae38405ed6d8b051f03598a6', groupName: "sub-property" }, h("ir-menu-item", { key: '871d228f5cf91d9f3b180bb59aca2c41b5ab58b1', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '4738c0831222da3ccfe67163034745467056df04', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '1cb3f07d8044eb3e6b1ae3506c6ff13cc1dc6358', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '789391f46a275b38ca0884e6fdba482b5432cdf4', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: 'e3b2f0d0fd38cce9ee14dbacefa9e53794fdd2ae', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'a03ade60cd66b7caa8cae8a68ff84c98fc4128dd', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '2b6250ccb4573d6b62e376a9f701505fb10900e0', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '8b119439f1d387acd163965c4dba538c14ccf76e', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '95ae30e91e6211b7dfeeaf2ac87fc95a1002c91e', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '0234c71f7abcfb37379f008f8c63aa7639a48325', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: 'e58edb8db56e6d937283fcacf6acd650cb6f0ee7', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'bbcaf036af78142b07177b9293608ec66ac5391f', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '3f42da5345420b89b2cda21a0ed6df3739b9e06b', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: 'ec42dc41b2981fe14d72feecb34fbef8541e8fc8', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'ee93884e333e18eefba1c1d2f94ab277c94eec4b', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'faa6c2f2f120b3b492218d579313229a437b47a1', groupName: "sub-property" }, h("ir-menu-item", { key: '2a52b2593c85a9ff560736febd16b58ff54c56c0', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'e3f9b9060f94de90fa817d2b3a9d997ededd098d', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'f6fdc583c619bb1ee433aee47f64040a43ab6d5f', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '7e741e2fba525fd70debc6ba3c03bc1893124d6b', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '8279d9802b3172bc40833e108d0a66a01dd462c2', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '37db8895d40fcb38012147e4ebdd85b7c3343c1a', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '0ff436c51060106948001e3657f371a1852d410c', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '7c45fc856b904dd90ff23e07497774eb64a083b3', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '54c1563557f907d2a7e8b80926092252a1ebac33', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '3a2da4edc72831f009130b46602f671ed1205f4f', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '3fea46d902d92e18d53aa68153c173df650bf6d6' }, "A35"), h("span", { key: '52656b1219c820b58db38df953e24baf9a3ddb17', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '9e4f9fd9ea7a154ff44733726ea18cd13c45fb1f' }, h("ir-pms-payment-due-alert", { key: 'c40789dd8758dcc8b48cf423334a73f915ebc9c0', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '5e809adbf34fe0a5bc9095f440af0d2a60cbb776', style: { height: '200vh' } }))));
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
