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
        return (h("div", { key: 'baf6b1188d9fa5f1270e5c99cf3a0601a78ddf98' }, h("header", { key: '2aa8e5b234d81f5859604fde82453d5428d9d416', class: "app-header" }, h("div", { key: '091a33cc573134deda45173b5d9da7ab0a6897f4', class: "app-header__left" }, h("ir-custom-button", { key: '62734ee134648b0caa5587889085ff084f558342', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'd5bb9fe5b03459fb8d34a20c54becf20038524dd', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '0169078afb3c69d9725813075e08e30a05a470ad', ticket: this.ticket })), h("div", { key: '375aa28fd1c0b724a008f9dae1cae0cc6b6f1b8b', class: "app-header__center" }, h("ir-pms-search", { key: 'ae44d3804da741fdae2959f063fb58381bd4e03d', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '9f367d60cb7db51d70a96b28f6b278ce7698c972', class: "app-header__right" }, h("ir-custom-button", { key: '6ad85916979e272a395cfd4ef0073e6c2939d5bb', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '45eaa6af3d3ef99b15572e1328399e65995055af', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '22d0c94f795cdeaa50b0f4f10b7c5b2e9e9f202a', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '6b89f96ba1eeb8765275051a10d898f66afd0f4a', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'e5c578149d6b828ce35a431d89cc740ff43105b4', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '2a9ba301fdfda3877c3a28f341473ad2bae41029', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'ac38aca7254981055ec30796a7dc45cfdf183bda', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'df5ae3360e9e06c11df6a0d12d107c232f164d47', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c8c19718e90198c390b3bd41412df5175aa0e32e', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'ea838978a54a4b319f75466f58575691085b2edd', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'eab1fbe595e651862e46379a623deb81e02d28e4', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '785fcc1256c53babeaf32d83f56e4144c33d1337', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '132350914fd5644238ea6d30f05be7a04bb3d1ce', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '0a54113148ff57af5acbe97f947597f0ce0680fb', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '540138009e5e97369d3808a77fac52c524ded4fd', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '97a06fb919fa0612913e9893738067719b3e8cde', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '8d2c15b93897eea07d57d8f2f694629344e4db87' }, h("wa-avatar", { key: 'eb8c12b274560fd35368dc692c96677b22c0b873', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '0d7c52bf7f0dfb2e98d4ee3fdc5e5b63c4bb982e' }, h("wa-icon", { key: '54b7caa6ec32bc599d1220498b1b5407049ff0ee', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '370e16f45dd0b1b0c69bdc17e6469c3095d7857e' }, h("wa-icon", { key: 'eca233db924679ae99e6c35b1833f8a0cb885d6a', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '256fcd3389a1bbb14083f7f2cc6eebdb041bd45d', disabled: true }, h("wa-icon", { key: '9e1244e1a48a20b786d6e87cffa8ad366110199f', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '1c9d732d06b79442910a012f6bb5bfcd4ad1835b' }), h("wa-dropdown-item", { key: 'b28c5b682eeee793a86d5a56f2e308e30bef6a54' }, h("wa-icon", { key: 'dc26da805867367e34c016c290d075d053993719', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '4284acf880df465a411d977e2cce647375a61fd1' }, h("wa-icon", { key: '37cc7550d54d3289ff463dbd7588ddacfbe9be26', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '94f7ceac0a969fd7214d8adbea2bd50e4fcf2206' }), h("wa-dropdown-item", { key: '969ea40407c9565aec20dc3a71f9152761fe28e9' }, h("wa-icon", { key: 'ee323c362c8acee9f3502e55c4084e9ec4535356', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '4aba9c73febb19cdc8cb62ddcd25bb813daf6d81' }), h("wa-dropdown-item", { key: '9596ff320f99dadcf134a00ddac908d7400423e7', variant: "danger" }, h("wa-icon", { key: '10c2c2c57e89642c9df083e790e150cb3fb3f192', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '62bb41666d39e2b0634d00f39e5102ea461bdfdf', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '2c541e47c42450e37a8416582cb5e9b98ac9e426', slot: "label" }, h("img", { key: 'e65945d4d283897491fc44fa4f54c024ec0ec3a1', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '4265b7416b82bc25dea07efe1c9d35553f0e092a' }, h("ir-property-switcher", { key: 'e276ad35767eb63dd4362d44ff43a65e593437e0', ticket: this.ticket }), h("ir-menu-item", { key: '5daa074c5e2338e34ba7a8bd6f6c8506c7914bd8', slot: "summary" }, "Property"), h("ir-menu-item", { key: '348a385bd482e5016a5f0560cfb3b076c68cce60', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'fa828e8ef34e7e80e41cdbd90d15538fd69f1ade', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '2793dd671d02e84975a341aa4d4a05ada7c929fb', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '55cbadf04a724fa07705359194a958279d692e43', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '008a80e53c247655fafc9e674f14ff21be053821' }), h("p", { key: '26fa91ee8674b2d0c1f9d4925866951e69681562', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '3384670e9888d8cf4d8853fe4814ec887a0d4a5e', slot: "summary" }, "Property"), h("ir-menu-item", { key: '1223cd34c38f0722239247a0eabcd5837a735da2', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '61dac0b324a75ee0de0a21843329f4c57c7d6d96', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'f64e2ab517ad61e96fe015f2f6b509729a462171', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'd2ab81e3b522a029c2ac234d0c6c98ad76f82d4f', groupName: "sub-property" }, h("ir-menu-item", { key: 'eedf5da95c9feda786f8e6dbf1cf1726fd9b0587', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '0ee9a431f8721a277dbef3d180fee9b14fbcee83', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'aba2db2a08a7ffcddc27c80ca107326cbe039498', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'f5180cfae25f4932f18b7a40ddabd60733d24a31', groupName: "sub-property" }, h("ir-menu-item", { key: 'fcf27734d753476f8616ae24f51f157b14f792f1', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'd003dc845b1d4901495a442ed70d697c7f564f63', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '0f2cd42a4a70a885f008bf82ff33e3a6f880f4ec', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'd497fef5d342ab21585c4490ead016bcf0c20842', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '33a4996a7317d24cec764f23067b8a581c7d677a', groupName: "sub-property" }, h("ir-menu-item", { key: '4985c7bb86ef192718c92ed67d6cfae8dda315a9', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '01b53c817a7b7ea2a22a10020fdcc46c4f97a146', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '658bf1a30555f78e3f23b15875c9abe5e2624f6c', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '037c1ad648b5efc2329716dc77d0bf21d2edc888', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '02ae07fbbbe963a8d61c1c49a937bdf8fb51689a', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '9f2c4fba73641a24d9e450893d75fcff211685f9', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'e216efea8fc41232f77a7d8ab6706e6ff0a588e9', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'fcc069e445495ddc6504699c2f7237e7c2a14365', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'cd762602e1e1014960c553e4a6ca704ac65f9b4c', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '7543e5471240e00d8c798ddb997d12d18b2d338e', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '2371cde08bd2308611eb902ff7bca727aae20391', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'daade1fb368b879d28e12f3a361c820ef4455d36', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '3528bf8ffa866b816e95e013a0568efa21fb6cbd', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '7f29cece72d6ad4fd0bff0cfded683928f958fa3', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '4deed0e96207e011656d81f1a31728a85a72cfa1', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'f36a3ab30399e86bf3d8fa12a47fb8044bad5168', groupName: "sub-property" }, h("ir-menu-item", { key: '84e4ccf6081c6e9647a62496f697a5ed628b4c73', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '7991762de632b03a6f724359fd66526d56226df5', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '10ab817ce907ad4b1706cace86ff4dbf29258cda', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'bb8445cda287f6cfff0ed4afb2d5374ff065401a', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '7bb8c47e42c9217aaff84e362b71fbe27635eefd', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: 'a2ab113aa0389d65737ba9d783184f3706354c3b', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '34e385eee51eeff0d78622bc3ece9edc01ae91eb', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'e4ad5323ed8015aa30f51d952824a5240b2fc5fa', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: 'cdf555faea31703a47a31c3629403a17abe92289', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '696cb93d7f6cc7e55e7813732da36539107d3b22', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '971186a6839a574d76085ea1f3c2dc9a4faba88b' }, "A35"), h("span", { key: '5cf4b9327c0a15a03497a88dce6ad4814149c5af', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '7451564fb6c6700a9e689f5b0189f87b2087383d' }, h("ir-pms-payment-due-alert", { key: 'a73bf4892c242f3c91053cf87efdc7e43daa5c43', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '896e6bdf21b7533987871e2333c458539672c47e', style: { height: '200vh' } }))));
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
