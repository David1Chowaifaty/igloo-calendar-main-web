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
        return (h("div", { key: 'c2f2d50b93c16913939a286a06fc3371821554b0' }, h("header", { key: '19eab1d6bbc245398ce4034011e8d06f7e8894ec', class: "app-header" }, h("div", { key: '0dcb7f4235da797299af1b1d8e05df209a7a9d86', class: "app-header__left" }, h("ir-custom-button", { key: '238861da3d3408c463c5dbdc2747e54b432cdcd1', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '8b44e59c95f10c24de9df55c47275be80143e183', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '212ce59922093ef91eca9bd37ae9b3cb5acdd8bf', ticket: this.ticket })), h("div", { key: 'cbecffffb5b3a278c606a309aa4e34b4bf349cc5', class: "app-header__center" }, h("ir-pms-search", { key: 'b1a063c2b5d526a4a4f4238f30e019244ed16dc5', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '26b38746036d63af19ff72cf826f2b907d466aae', class: "app-header__right" }, h("ir-custom-button", { key: 'ef4472856f76c51e539a25a08960fe1a064005c4', id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '1224b1838c44ab71dec1b8fb440ce62730628832', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'ece4b8847d0739ab3ef5457e02017e3f1ff6c0dd', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '907f60900c0775a2a1d5ca1c8dc541ae3633bdee', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '94d2d9a98dd2ff0557d2b47fad9b8b1f9b5bf237', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8034a7fce8335055327f3f46d142e8341c166430', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '892822f3eaa495b01d46147e69f1bcf8aeb89949', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'e9f80579a49acd3377c097140314cee5849281fe', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'f68cc1d96c7bc3a270c2fdc6127e79a90bd6a6f4', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'b4993f620d1c21f98daf78604ad866bb5f1fdb7f', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '7568d4beb3d9d36afa8a2627332f1aa3d1a2840a', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '0783b0dee84c7a60c27010fc97fd919f51ba6499', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: 'dd70c38099aace7db121fe732c0142130856adac', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '45cbcf7d1d89f56f344f35f630e08d2be7874bf8', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '806b735d975dee5c2145747e40ef865c70afa947', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'fde867d657766e8efc0cf24b632a4d0633a048cd', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '787c48857246cc669de6412de07d9a5732799f7b' }, h("wa-avatar", { key: 'b0ff782017cf4e34cdfe00a45babd1912ba6982d', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '860671b41c85e1560471343bf0d5d225bf6a32d4' }, h("wa-icon", { key: '4abcff272bf6ca7cf01304822bc1d3c92405c953', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'bc6e6a2102a08d595016ffd553bd5a5057f3b799' }, h("wa-icon", { key: 'd9419e22c91ea037e1cdbd6ef0dd4392b52ced92', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'b0db01cc4876852049ba227cb2001122d0fe3560', disabled: true }, h("wa-icon", { key: 'bc0c4e50f720f02afd37aebbfb430e170115d61a', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '19af292a196a12c088136b9f881f1490ce030049' }), h("wa-dropdown-item", { key: '313a7b704767bd6bcacc788dc6264dca3b6f439d' }, h("wa-icon", { key: '273c7fbaeb20fb79cfdc7c0384caa46f8dec0d28', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'd9884d68e2f4856bebfd2026b6620b009e8fd4d9' }, h("wa-icon", { key: '92aa8c074c4cd92cb918767e691279d7d62e4a9f', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '81bbc82e4ebab38f894ab5280e1c35c8adb45f98' }), h("wa-dropdown-item", { key: '340447b5aa4e4017b880b0376c88e9ac6360ff6b' }, h("wa-icon", { key: 'd6cdf69510ebfdc7398dd180195f66102e7e4501', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '25a8cebea027ee26c8344675db37200485b27129' }), h("wa-dropdown-item", { key: '6fa0fd5d26a023729e421ae2bab7da52d8260f26', variant: "danger" }, h("wa-icon", { key: '0b9fd31fee1f1372294162188a4456ff323c6063', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '9e4a3e018c7a64408df9a061555a0536a4d6117b', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '6816b8fa42ded6c2995b28bf8053dfe553af1b85', slot: "label" }, h("img", { key: '95130778868417b06ed80ce24825bc6d934694f3', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '6ea0c043486b070f7eb5ce02fef872eebea5019b' }, h("ir-property-switcher", { key: '171cc349002d86bdd745bd38c6d936cbbb794603', ticket: this.ticket }), h("ir-menu-item", { key: '0694182b4743a15b4957b23b472b41e8db550d2e', slot: "summary" }, "Property"), h("ir-menu-item", { key: '3e431e83a7febead0798d104b921bd1782745576', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '2b60aa49f8ee4ab7f663d848285eb13d0ee9163f', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '506bd581540d84f9bfb2ca5b4c9fc2294c36147e', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '13adad689bab56ff59861c3eec8fe8fb0929e6e5', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'e1b3240d5ec36a01ff563a9defd0173624caad3f' }), h("p", { key: '06dc8cbd4b7315dc6cc4dc89722adea750d1498d', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '55a7f93677cd3083e7eaae962876ed00e42568b4', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'c7d1c1e18ad1843e6e0f6e32a0547c2514a79668', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'a26b7b89ca8e43636671694c6634e2f6ed9888b5', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '91670677556e1ad945e6cc6f4cd52ae64b00501b', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '182671cdccef8bda83d4d0ea6feabf8a617609c3', groupName: "sub-property" }, h("ir-menu-item", { key: '70d6730522bd81017b877d0ed5a5efaa8919d7d7', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'eb6f2e366f136974c9411365b579ff3243e98104', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '03cd771bb8314983e181c338426f6c874f884230', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'b4f6b6e34cb359bda9d428f7d16f0379d53eea70', groupName: "sub-property" }, h("ir-menu-item", { key: 'e95c951acca03df9e0bc54aaf690c568dd8845da', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '845e6c3387709a6a354805ea6f816870170d977f', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '17c2f22d1b63009991242d64ecab33307eaa4692', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '9625428f9150c60873bac77a5357fc59ce6d2d78', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '293371ec50027157281791d0c5315a10959c3e4f', groupName: "sub-property" }, h("ir-menu-item", { key: '3c32d4ffa3ba482568288059de9e48af12eecdb1', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'efa06cf6fb89d7e33d8f4a21355dfe912e4e0c87', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'e6fcec8c007a38e5f0fdbdef0f9150b48a17ec15', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'e631076e9fbcca47024e2f3c866c6e03dca7559a', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '6a9dc583d26428fe00f995df888af77352e28603', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '6f98075715a77217946b093e0c27bdfe293a37f7', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '917787e891ef833be570a0503e7f50fbe94fcc51', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'b56a5e800fb4792bcdb54913cdfa9b5ab7a27b8f', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '0409a6763ac0cbb9576b19a34a3089d109c80d08', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'c1239b63af02d1e7e21067273cb0d9ed5469b230', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '890fe962584ffb5f1ef7b05ab0324ef80237cf8a', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '3c4d2d5a1a570842e83a473091c15e142f2c3156', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '95ae924a953c0b1568fa20ef65fa4d27e38d005c', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '5a6f9cba5a011432c548af904e03fdd8da8a08ac', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'aa82caf30aa71c01bb4df7ef42284079d9f621f4', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '5cd6aec67345b0a2dd0ffc5d3b88552614631884', groupName: "sub-property" }, h("ir-menu-item", { key: 'b804d89e51c33d2396eeeea6c3d2e2dc7af3fd81', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '650685b32f86510e3b7d62ad017e868c1966d14c', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '4b2b15b7dc6f7ea215ab47b33aba96860d20f466', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'c5bf2245d3d87b3a76711c73470b7981b1bf62db', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '837d1af4ad06ac5ea80297eae2070f5afd8e1a03', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '059bfc6ba1ad520652bac254fb943df055e5bc70', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '229f5638dd988dc66fad633e32d662e65a55c44c', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '7ab374a2707c7ca325014ddea3044c61cd10bffd', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '2f6389b827af4815567f3a75717884f382711316', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '3e9cbe999426c2759e50187d02c48adc29bf2185', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'fb54e6db2d73352ac23d5c68d0c481b25a27b77b' }, "A35"), h("span", { key: 'a273ed6b18163c5caf665386b82df7717cd19d96', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '617f152b6cc3d9c816b7422461d67dca06a76e5a' }, h("ir-pms-payment-due-alert", { key: 'cde79a4cf45fe919bdf43de9526c990d58941e93', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'e72a1a52c5c1d0568229b62ac4c6b4c7d8fbe14c', style: { height: '200vh' } }))));
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
