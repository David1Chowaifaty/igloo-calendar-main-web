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
        return (h("div", { key: '04df31c274134fcff2ae2f8dea5fdd99583218ba' }, h("header", { key: 'ffb8b6ae172404c858eabffd573a78eb13a0f0ae', class: "app-header" }, h("div", { key: '8ed501309dea74c59937f24089c39ed3c3b765ae', class: "app-header__left" }, h("ir-custom-button", { key: '7fc275bcb811fe2def1314c91f479d02edc79fcf', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'd1c1d3a267b1e6b7c1f3127e7946379dc47c386d', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '97fafa0f208476424c5bc8bf86a0b810af2a0eea', ticket: this.ticket })), h("div", { key: 'dcdc3cb976ba412e36a1f22d63d294735b3750c4', class: "app-header__center" }, h("ir-pms-search", { key: 'c3f58e5f93e9e5dd600ba0094cdd58c8c3b8075b', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: 'f997adf5b8c482a3ff216e467bb3813989007207', class: "app-header__right" }, h("ir-custom-button", { key: 'b41f77baa17e4370f4da6c8c776efb99b4659474', id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'ca2af0aba9aaee58c043971eb50a7022c7526432', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '619396ae7e014c7bf97bf10b496001c94388e4d2', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: 'f962e569f4c76dbf5d25f588c7e2b3c052fc71d0', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '4a411589d429129fb59b1cf32f438f6bd3d157d9', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c8c4c1468928d9fb89fbe4532c61c4ff1b3f3e5a', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'eddda5dc9a25ee5567b590bd6f565b1c1f066266', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '88396e69f8ccb7f8254cad1373bc1e3ec8dff42a', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'dcc29d64737b312c0fe415989d3d8b251b18bbda', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '4e89fc487fee84886358f4669d112462e97684d9', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'd30b2a5180c3ea5ae94a9c1fa989ba6b70dbfca7', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '5137e46ed434368cc163b02cac35bf13439769f6', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: 'e61ec3fea2210d2fd0cd463b2b877e2b9d610f99', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'aa3130d77eec1b688dda4b7317b95f13d0e3b34b', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8a3a299728cd58015bb2e3c9d8cf5ae3bd20fb05', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'f41225cd81882179160c99610d9163e6dfec4c25', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '3423ef415c72d4837ff2e1bfc1e5572c6b22febe' }, h("wa-avatar", { key: 'f547315db173eb16f2e2b5b4862f7a10aef6f3e0', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '84b2710cc4bb0eb60de99046f64aa3705ce9d23f' }, h("wa-icon", { key: 'dcb96c223d1f5af2c73da0ddc341c5d30034d8f4', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '59f077472d462622e4c09472c8cb540c1937680c' }, h("wa-icon", { key: '420efe6590253c29a019272f7cb66033fc30fde1', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '74b0ee35d1c9c4d9f75cf3d20a43dcaf1cd1616a', disabled: true }, h("wa-icon", { key: '961efa392d1774e6c80abcee96eb5578505df8de', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: '9eb6399f4ae05766c5158bc7855310ef93808698' }), h("wa-dropdown-item", { key: '36c44dc9d3350100ae93dab06267e594df0e0253' }, h("wa-icon", { key: '1a7b79437d06fd31e3661fd9550f19561133b39d', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '8e114626c8c815c84121d5d60f8fc85804d53f5f' }, h("wa-icon", { key: 'c9cf965856a75e558c4da1a3026912fc01e4f829', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'bb8fb02c433e28ddce546cff5440ef9d4d8f8af0' }), h("wa-dropdown-item", { key: '042e3f2f12eaace5b95092eb993297ddfcaa240c' }, h("wa-icon", { key: '9566e7c647e9e981f4719203e7def99d7f6e93fb', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '0095a7d95915fd198de21970b6f883d91c95ec9b' }), h("wa-dropdown-item", { key: 'd56b80c8856f4e54c3e6cefc202a82298a3f2347', variant: "danger" }, h("wa-icon", { key: 'e1bbf69600bc9a689b20a6722e48b04be69ea773', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'c1e9b75c525b905078e20bc53b700b571f3b70ea', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '41f535cd63a90310112c629d7e52d7c0e6fb84a1', slot: "label" }, h("img", { key: 'e6627ab94990691b7920abaeb199b59cd8bb3e83', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '57a9674b7d03877ec7044e2569a37a6220d08f46' }, h("ir-property-switcher", { key: '2bc37a3140dcb9b61daa6340b47dc2520f44421a', ticket: this.ticket }), h("ir-menu-item", { key: '8c6c70be71b28e98a10b2cdcbd2b5afc9b8691dc', slot: "summary" }, "Property"), h("ir-menu-item", { key: '1035349e18de453a7de02fdca80c7675390125b0', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'c20e54f082a5a91e761a2585f3b1e3f1b5627f8f', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '2cd69915d958814056dd8ed82bb60541079d76e6', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'e9f4dbe226bf865ac0d13467f396d5b08fb709e8', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '9522411d49166ae9e69c372f2d304c76e6faa9e8' }), h("p", { key: 'c83825c22d9f44940129605cae0d41d4ab7ececb', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '4dc91dcd733dc88d819a739cede77ec6a54d1e07', slot: "summary" }, "Property"), h("ir-menu-item", { key: '1608a10e91b6af797064e5469487edaf7ee9233e', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '026958aa4a927d70aff652d7725eda84e57dc9cd', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '53e36a53514204f881cc904aa603a3c0ffea4b1d', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'cb22e2c0961a8fffbbabdb577116ccfd4e0a4eb8', groupName: "sub-property" }, h("ir-menu-item", { key: '4dc5b16f1626edb6d6a64d59fe42cdd9a9ea8896', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '374a7bcaa101d53e66a134a205ba345b4a45b170', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '5ec92086e83f0e028e06aa0ddcb751c665403558', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '40832a221ceee0230cc4cde258c9725a3d6498a5', groupName: "sub-property" }, h("ir-menu-item", { key: '99451fb872071fa0cb59564906cd61063efda37d', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '6b3586ebdac58fe7ea54b63effbc726ae753f785', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '20bdb5c60d68194b93d766d96df407772a740c4b', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '3092a972e7dd69fd2e321245f4933c61cce93d3c', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '09b00704535b4a5197905645955ca69ef569fb6a', groupName: "sub-property" }, h("ir-menu-item", { key: 'cbf3743ad17c36098a6f090d0941ea39d779c17a', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '1df8bc892769baa821325d9c46ca163d730482f6', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '101a840c6737d3f850cd2921bcac27336c635b6f', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: '5d5adbd5d41ad659ec82ac26ded57c047849f1d2', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: 'ab95e8629ca199be7d7f69ed6aa65f7768ba2a59', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '50079a9ac91e3201f8d8a74e40617e9f44d3ba69', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '741325c78df67c0dc2e67d7481ce8307ceeb2c52', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'e9cdab9d67a25ffd946e43ef7d01e80fad9fa4f2', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'dbe8bd591904482eeda38b98cfb063d060f26c2f', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '1bfcbb12aea788677ce8a85cc8cad1df8c334752', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: 'ad0e9ac091ded76524e2b962b891c16d33341919', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '30a5950ff1e413bec198dca23b68f8a04049403a', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '6b4bfe3da84c61013f61eef7c4a04120aa7302f0', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '272554972c4372a17802c5c36ee31f2c68d90d0f', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'aa3fd96ee35865c72dce33fb70aedcd831150d5d', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '28cbbd634718bf9174eded25c2f92626d8379a87', groupName: "sub-property" }, h("ir-menu-item", { key: 'f333d355a1d4274da47e48f0a90daabe0364d3b6', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '8df89699dcb839b2a8869e6f079ee5b1b97e7686', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'b804467d158a3dd4b0149fdd0f0797153fa1e632', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '7a8c3109fc7bad40b563ed011843ffebe18c6902', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '06b83bebdaf736547b1e870b7ac6d28030cafa26', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '9158765ba97ead136d49189571244fe8b4e04343', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '2242d81e2a875e454eb291059b6a320dbc072f3f', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '89c13fbd89c601189d04eebeba53b46329d7758e', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: 'a37fd2631568dc0c9801ebbf646492634ade1231', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '90730426d36e1d7c88665b9b79c2a67e40845df2', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '5905f117e8c184a068b6fbcb33df2c66625a6566' }, "A35"), h("span", { key: '39ca24bae55b23070d83f63c59cd8963689530b9', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '1d9ad3feb660d85b6c812a2dfabc3fbf2e6f3823' }, h("ir-pms-payment-due-alert", { key: '3792c5e7cd8a241784f0247aa5c06a6b1eef6dae', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '024cf87b9829ca139b20b0cf3d596fc737345ee0', style: { height: '200vh' } }))));
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
