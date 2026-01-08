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
        return (h("div", { key: '2a153437352638ec90f60bec654bc3a578fd2600' }, h("header", { key: 'a61fecd823b9dd1f58bc8feec7a4c56352f09b11', class: "app-header" }, h("div", { key: '403096a04123936cb29b8010ef8cc8d630234c3f', class: "app-header__left" }, h("ir-custom-button", { key: '759d2ee99db57b4e4eb4232e932c6e08d989bc56', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '60b403bc41857bcffbb65badae0aaecfd1c7f2b0', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'af4487d94eef45803a78c18bf13767a5816ef74c', ticket: this.ticket })), h("div", { key: '523a03db3a4ef16bca5133aa3b6db05e70dcd6bf', class: "app-header__center" }, h("ir-pms-search", { key: '2b900ba2bcedaf44a8f81af3f01d35e578e80d93', ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '1086c9242758a3d0d1b30724b43c9947a68d7a72', class: "app-header__right" }, h("ir-custom-button", { key: 'bac303d1e16e9b55735af0ea0e2729fce2963e0e', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '9b4ed6f0b6fa9e7c2684f146e74994c7694f9600', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c203a7e483b52ffeeec56dae601a9967adb3ee71', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '3a7ca3659e0fca43a848e728a1d03df646ed13bc', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'b77d35f456f8ba4aa824417723682da9b382e331', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'ad3f09c814faf408ec0fd1e8ef9dac151e73b4c0', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'd15febbc69156d38747998378d213dfb1872852b', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '9adb694875d84134e1e1b6f89d62ff0bc2864498', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'abbde12a9b169765f77dcc20a8875f3c095998a6', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'c526c8db6353cb8a9973e31708796e36fc5b471d', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'e141536f068344fde658bd2daabfa621611773da', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '7ae4032470bcdb3ee701e555aeba74252774e8c3', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '1a3047c649025f8682b6e31b3bb1aeae0d50e7ba', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '51201d3b1cdfb9b9fd77eedf70a6d91f3b6c5daf', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '3455ec50b9f58f38370409a1186af1a5cdd265bc', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '4d2e29480237b1e59ad5354d0276c813eae6e3dd', notifications: this.notifications }), h("wa-dropdown", { key: '26703286d81eab8317e8e26b205c7f5515204599' }, h("wa-avatar", { key: '9cee42e8cd3901ad33c384d32ebb007d8f161ed9', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'd610980f9cdf8e236790ef19330789a2f32e62de' }, h("wa-icon", { key: 'b189196cddea853336f29e9a8e30e44a3c5c7798', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '425a4e63c878e15378d5bbf88923736a8a1151a3' }, h("wa-icon", { key: '94bb83fa9cbc3b01906dca9bed6c268a0c59d9d5', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '7130b7f57a0f53a8e75d1595cb0e343861068e76', disabled: true }, h("wa-icon", { key: 'a2f99250d273b40e34ccfce91a9cd1bd62a4a4e7', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'bbdd2d838928d5cd619d0d790192ab07e06a3041' }), h("wa-dropdown-item", { key: 'ffcc979332f04bd9181b66310d96e9c545cfa388' }, h("wa-icon", { key: 'd970d9aec51b9852da5322c13fb0c720619bf5aa', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '2ef0e9a3bbebf62acd0959b138fb9b1ae3a126bb' }, h("wa-icon", { key: '28bb6b21d40d288997d75be8ac96cf47821ebe6a', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '812c756688f705d5aeb1cded73d7cb03337a3da6' }), h("wa-dropdown-item", { key: '05da9e52b05d60ab53150fc252071bda6cceba65' }, h("wa-icon", { key: 'b7be0b6882269aecb6e85ad92c223ee797f8487c', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '239d3d85f846870027e12a1f47a9f974e151fa5e' }), h("wa-dropdown-item", { key: '3db6467ca2e585f1333c4b29f3fd8c000c88ab16', variant: "danger" }, h("wa-icon", { key: '68f923d754bc91d4ab12285900d7d851c3ecefb1', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'e7d643b388d4a5f821e3a69aac75421849f86e0b', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'ca14dc623576373ff22a0d616a74ea1a764562b8', slot: "label" }, h("img", { key: 'a9a5a7b0723f8d34de7264e46673ae3d7f0e720e', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '11a1a47cb4d24571c72bcfcd54c09ebe29a0298f' }, h("ir-menu-item", { key: '2de7526e658c194db3ab79717606b03ccf8212e3', slot: "summary" }, "Property"), h("ir-menu-item", { key: '3e254b5c140473d8e8db7b1faba1d3f97dec1e07', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'c300fa3469a83075e7d3295562e8a3bd5db9fec6', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '9edb2088105f03a8e711cf2dd2398b2ef5761740', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'f2ef1a99d80407800035f44f95ea0d91cf982b7d', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '58473bbec67d90b190a8cc7ed7356c095d25743d' }), h("p", { key: 'cc49d6a5e3538d578ae1f030dabaf4f64b690cb8', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'd7158609230e79b531e33a570dbe8ec9ee218f32', slot: "summary" }, "Property"), h("ir-menu-item", { key: '1ccec55f889849eed63ae441ce372189978d0766', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '46e5ba0e817c623569d4416106f7074c08e66667', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'c61cdf4996a45368d4d4ed85cbf060f208dbcba3', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'ab7c6acdc889980bc9a481d53a550d697337b1f3', groupName: "sub-property" }, h("ir-menu-item", { key: '42eec125edcb292b1bcc61ba0c423d0960598139', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '5e1d89e1c57ee693ee51587a613d9a77256b5ae1', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '0612b4eea3579845d7589965a7e55e3e5c945d24', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '8dc1d38981e505b4108e18b3ab25b12496d5e1ee', groupName: "sub-property" }, h("ir-menu-item", { key: 'd7ac96a3ee51a748927b6e481cb74faf4dc7ff6b', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '53b259d0b6594507536e2aac5b248c2e886eb493', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '53acbd13a332db7650401d80a7f1d769f071b89f', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'a64c5fbb691f91a6e99b4c74d74d97ed92f743af', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: 'adcdc1ffe6852eff233101448e48efa0bdffadc0', groupName: "sub-property" }, h("ir-menu-item", { key: '55d7493c9d2651cf72f8e6b615e78cfaeea19a7d', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '2ef6aad33a0ea26cd71fac70da1b207ed175bf83', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '17c45fcc77a3a34da5a3b0a4c4367e6a8e24c8b5', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '3f8be1f410f7c73e210b20a397ecc924e8db93f7', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '6830253e015731a623e4edc4a39e33121a1a9933', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '2d7ea3f7a54bc49beea883cc0c69087ff5f1089d', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'efc5e6949634c9221077bc4016539f3cd2f6b2b1', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '76d8a5006695cb331b8f793febc4a4e7c6ef2ef2', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '9cf5d1579cb4a4a7a3aa4aa0e92f4ace6ade6bbf', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'c141b47ce6f20423e8dfff5ef7eea21f7df39917', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '4f258ef4e734c5e8719863eeb93cdd907fcc93df', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'fa00534de5cbfac6ed5696e89ea9a731f059d18f', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '7a30cf48054ee35d45c32c31d3f21b38595e3a6a', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '5ce0e92097daa5c653e17447ad50c4fb716d9f20', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '3c04a38a33bccea76e73eb1cc8271c1942633a45', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'dc9310ccad6ef092322d68c4483fb48c4c77b895', groupName: "sub-property" }, h("ir-menu-item", { key: '8d367be2e705b1b1e8073cb02ee819b88332e0f0', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '959edab1e63e9d653fc9879d66ddb03a9eab7457', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '352565fc93a5d6c8230ad4081854e5c1363a72ff', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '0c987379e8205c1146f513f6d23a575c73036a1b', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '50b97d05882a21710835da4946034a961fe7436f', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '24102cfe70411b2cfb4939b0e44f1c9df37352d6', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'b7a380c06e58a569589d8cd9120b5241f03c2e21', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: 'f9ee6c0cbb747b6aa8e4a87c2ddfc8df589ad423', href: "acaccountingreport.aspx" }, "Accounting Report"))), h("div", { key: '7e0e172e89b3474bff7a5dd3119712e2c170ef84', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'fbf96a97e4e6a0b14351fc7269fe6da70ec4f939' }, "A35"), h("span", { key: '861cc358eb9aecfa623e0cea4732a15249053d0b', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '7f128594fc2d64de0fb3ff0287a3e7d0a87d8226' }, h("div", { key: '0a3c8a3187516c0df8f6f6d719af6e4917af8ab0', style: { height: '200vh' } }))));
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
