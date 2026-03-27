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
        return (h("div", { key: 'd89393045f5465dbf2f62032925b93a10caa4f86' }, h("header", { key: 'b118639e7ab2e682e428a2955dbe9260fc877d16', class: "app-header" }, h("div", { key: 'cb7d6bcef3c371a73bf073765f6d762f2186a004', class: "app-header__left" }, h("ir-custom-button", { key: '068748a693c9ff8b35955d2825dd950920563fc7', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '89e61ff059cf767c0dba2191ce74a5bfe6227f9c', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '17f65a42b6ab346a543b7554fe351432be3c9053', ticket: this.ticket })), h("div", { key: '7dadc2bfc853d14d900380890d03747663f45f01', class: "app-header__center" }, h("ir-pms-search", { key: '0a08e410b09ed71c10afa49afec29e40ab95b394', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '4d041b697b00df9845f8b38dd8f4504b70ecefa4', class: "app-header__right" }, h("ir-custom-button", { key: '9b60422bb3475b778148600bed3284ae2c5e65ee', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '321545ce42bcb9ae471ca0301c4d18ef64893739', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'f698c912def5b06f6f1159f0f2924b404e5a160e', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '0d6b6835216ad6c9e44e494cc879d3e044462a36', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'be30ef29e01a5b1ff0caaa17b8b9c395d629d861', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '1927cf9e420e8099ead0d8c5eacaa9924058d442', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '28dd6d8d95d5a2a1df968378d11ea8fa98cfc87d', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '058320366b418bd2805cb7e2e7e43992100dc548', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c19e80c952f4c18f5dcdddfab961ba2dcee3f5e4', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'ddbcce17fd35e99931104157faf5ae1bbd67dd16', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b38270a475757c8a9edce35f2f986524a410cd87', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'fe32a6c132fa845fa0a159bb3291bb5dd01b77cc', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '3bdde8c5ec0b67786479e925c1991d4b19b4b1fb', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '86efffc275d780d31d820ab40360e4267b9dfef2', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '265beb85f8f56e7cb72c5875a2eb8032803c99c0', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '40b916ab91799bb02e81a8be1f47a2bfaf866a72', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '8bfdb1a24ad8d9cd990efa8fcb5d0443c271ba2b' }, h("wa-avatar", { key: 'f4eeb0daa42f7a80e9a2543f1ff15dcdce3a9c32', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'ee8c47d9538b7190dd4d2c36ec659baff0c5d6ed' }, h("wa-icon", { key: 'db6a5350288d25225db97999d8d41e962705d11d', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'c0b0008b59145669c49d554a4f715ba670793578' }, h("wa-icon", { key: '3ae9b28f80fa964f5a398432c4f8e995152030f5', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'f8ffbdcde5ff364df060836e7454023bb8f9f9d8', disabled: true }, h("wa-icon", { key: '024512cca2dc31e3b91c680506f5adb938d0f570', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'dd524d27d6c5654be05d91279673e5ce8a6b5201' }), h("wa-dropdown-item", { key: '60d6d8c70144380272d4aead3c445d1295bd587e' }, h("wa-icon", { key: 'cbddbaff30557557a936221b05b401962e49bc4f', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '53a99460d713394908f0ab93e64d986119d16cba' }, h("wa-icon", { key: '4da4981bf9b495220a27a0969fe17e225cbbcde2', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'cf0d740034638316ee3ac5ba47b56cdb4907551c' }), h("wa-dropdown-item", { key: '6feb069f9adc311e996d0722fab6689efe3c67a1' }, h("wa-icon", { key: '2ae432c1c2170f961b24053370a6ad9f6b72cac3', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '1c400fdcbd5aa3613ee532799e61f470abbbe341' }), h("wa-dropdown-item", { key: '88eae6a0519032fb6471d4b77c7b49d47b5c88d1', variant: "danger" }, h("wa-icon", { key: '7846b9b1ebe8312d371a7654d25c2a267b9adbae', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'b9ff0780360bf9b68db08cc75a03e5d09419a761', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'e63cb232356aa6f3da96e33fe6e07d2fe1d134d7', slot: "label" }, h("img", { key: '575dffe63dc6e3e8f02d8b0e7a19ded002ab44bc', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '0038f2819a84e0ad6de83029fe5a6b908e442ca7' }, h("ir-property-switcher", { key: '66b329aee6772f1caa3668be0c79996982243a45', ticket: this.ticket }), h("ir-menu-item", { key: 'a527a83319fbfb4ebbed15978b73382737d88fcb', slot: "summary" }, "Property"), h("ir-menu-item", { key: '66be82378901dde86e88fb4ea416a7513a5c836c', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'a817becb369072f698c9c91924432e3e8b2287d6', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '33cf8a1480b09da5ef5a05f3d73e93cdea538609', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '9c95bd372a88e986e76147ab385b0ca4cdf7544e', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '93f2853314231126cccc981648fa0985a4b86c94' }), h("p", { key: '64b4b5e3958f2c00fbabed631b9abf60175985c4', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '0febeccd5099ef24a60d119021ce11434580d94b', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'dfa85cc4d3f3dfd6c0313140000515b78bfe2e24', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '84b4465352cb643966314feedeccb449e2b4f44f', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '9a0ec494b4a5f520512881b2c4fe692239f5f7cf', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '609c95b5de9496d77c406eb77a507eb0f42c8619', groupName: "sub-property" }, h("ir-menu-item", { key: '2526a0e49cbb35bab5280b5aeb017e54c13844d0', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '9e3319a1e36cc304081616f36b37ba8118d7f879', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'e383a96339b14bbfac9a8c0d7c0e20414f0252eb', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '2c4f9be0017705b92fb1bc990e4f0c1ee9ba06ab', groupName: "sub-property" }, h("ir-menu-item", { key: '7c78000413de6d4e815e286d0d322f46615ae8df', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'ed80e516600be49bc1d12aed1cdc2b5b1771eb26', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '09aa11ef37fd7b7847522cd9ec407d9f3ca4393a', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'cb79230f0d3d85dbc652ce589801d8f44c953e40', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '3b804c6305c2d367b89ebf6416e2fa4e503d9ae8', groupName: "sub-property" }, h("ir-menu-item", { key: 'a8a16d62f788f1fd53dc540d95a79410196f6dee', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'efda52efab0d3261233546e57455e84c3bc04c8c', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '5d34322524d763e64b47947b02aa789ee172328f', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '14bb23ab095a9d3d0e957c0c9d54bef866b8c23d', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: 'f9c01b23244c7ec1e51860125180bf9dccb8c75a', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '1469564919a10028ec374f24b236d29eececb991', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'e1cb2f3c9a37c8f0661a885066c95c6414eee843', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'dd38ce5c1a28e131a32273bcae22d57de1d50ee3', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '79b521fe4fcd98489971e22365c4417f1ef4f85f', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'b061cced2cef868c8afca6e725355d1d3b6f9b0e', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '3d5c9c4197226cb270edef6b4650f6b13f35c7ca', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '1eec19ce2bedbff9d6f1445a3187a4e5168a7e8f', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: 'e33b34da05e1d96c7dce303a0af0c3f17a2fe891', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '790a0305119c1571e93e432198e94d6a17bbc335', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'f0fc81273033a6f2f4e04999e52fc30d6167daac', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '00bcda8f9186826d0c8d4d80e816801755302c32', groupName: "sub-property" }, h("ir-menu-item", { key: '298d782ceca88d7e9d9a060edfd0c5a47934ce9d', slot: "summary" }, "Reports"), h("ir-menu-item", { key: 'e55564c460fc8e8bbf6d2e99a3fd2c82d343e6fa', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '91689d01ea2c8fa6ed5ebb4e1131499e9f647c99', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '886fc487a8dc006a8112a1f1d4fbbc774942120c', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'e0aee46c63a440af9f0d692a5e9089f58ae141ee', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '0b8316079c539d10a0d226ca5fdc1b1e39a15005', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '9ea2d9ba3387800c741cbd1d9674f97058ae6806', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'd96fb99810d874b6cd7be33eb2f59f856b59ef2a', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '77cc1a93094f6b4862b3385ddc39e47ee801c37a', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: 'f9748897cd05f1680b9ab94fa59e78aad4daae6a', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '0a199f93100d16227c146225bc05ffa65309f33f' }, "A35"), h("span", { key: '47341d34647db76617f957168628273e96242f29', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '289a543eeca33dbe272c96429138941c39d92036' }, h("ir-pms-payment-due-alert", { key: 'c857fc806335177d77821a9d06639a97952bd029', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '857c9093e2260b9d43cfebe766d851abaae667ef', style: { height: '200vh' } }))));
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
