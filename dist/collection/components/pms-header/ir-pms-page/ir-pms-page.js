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
        return (h("div", { key: 'b95342e410ef43ffb95a2658a8ae778649290553' }, h("header", { key: 'f8f1480e5cac83c7559920a0cb8ab477f9c5092d', class: "app-header" }, h("div", { key: 'c630de177927b6cc45cc577017c045794fb7b936', class: "app-header__left" }, h("ir-custom-button", { key: 'edce2f3da0add3d6993d5607c10c062aafc45d2b', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: 'fb21dd54924d71069f619043c4433e2a61798b01', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '2352bbb7939eb725f943e4aaf0f8677a7c017bec', ticket: this.ticket })), h("div", { key: 'e787ab8bd443917d925e189e04c2b8b1ba8cd36c', class: "app-header__center" }, h("ir-pms-search", { key: '9450f118efc0aa2b73555f4ec61a00e1ffec4c24', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: 'b4b26dc6fe2dc913d743a22db388fa142f17b22b', class: "app-header__right" }, h("ir-custom-button", { key: 'a169842786f9c816a3410854067c43bac7d851c2', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'e54b5471272cf97baa5586b64ccc493a20362d25', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'd807e1ea1f812205a60f0f817af32daa341be162', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '87adedc0246671c1f03e341068eebf47ad6cf6b4', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'cab1a9eff58b4002f3360fbdf0f97f81de24c698', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '8d059ed26e1b673b217265d1efcde186ef057e75', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '214da226a3572ead4966216352e84f75e2412c3d', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '403ee7fa7e6bbdc5f31e2193801b893cddd65b52', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'de125dcba977c288690c12d372ab333d487e48c6', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '8d1b10fde91fae855ccc81b5a6477fa816ab5cfc', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'bdbeb0bf2c7e532ce2952b13ed9e2a2809e785b8', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '302ee3c61a6f156cc37f7afb905270d9e6ebd085', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '5c7178e5da83c88444a1a99c35b1c405ef806ded', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '51800c3c8a4547003c09234df250aa2cbfc8a553', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '7847f7a0d0e53a10d7430d06e1d0878de716740b', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'd5c0e92dac9b05be484f296f20e9dbbe70b477bd', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '96417cc582176a97e2dcfa02ee2bd6d80c2cc14a' }, h("wa-avatar", { key: 'a3063d4f24e51634d7b69fb61ccd23350b2a9a1e', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '0b68ff5626fa17a0fcf6582e6d61113e2562a8a5' }, h("wa-icon", { key: '9ac97b4a380c0ed3fddab743a6110fdc6b6bcf98', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '0f720e6159c8b5839b791237a45f6dd07d6d6f2c' }, h("wa-icon", { key: '57b26f44ae3a2e98bc2532e465d3909b5e5406e2', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'dc856eae83a663612e91782f2c10819f4002d8c4', disabled: true }, h("wa-icon", { key: '6f4c3586f4d0ae706a1070e9124cff03e295c0b2', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'b146ed372b5b44ed8d10057b8447b50d95592c18' }), h("wa-dropdown-item", { key: 'cf45173fb5160b8c5818ceef411b39bdfb244fa6' }, h("wa-icon", { key: '8092db377917fd65faa5e3e3e712457194454195', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '7353bc614d1618b9bd7bc7ac529cf84cb6490563' }, h("wa-icon", { key: '528cea81e1e39949d42b48e5a2f135645cf3997a', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '699fa9c58c3e5f85410400a64e87ef5373382372' }), h("wa-dropdown-item", { key: 'fedfa4433664f000339517f3a09624bf2985e8be' }, h("wa-icon", { key: 'd7fff0a0c061b4e20b8dac667bb7b7353a886915', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '42b1fd641e02bdc288a1d203bc5e990f9d9c40c0' }), h("wa-dropdown-item", { key: '7404739965c138470df9ec94abad3a1e55e86df7', variant: "danger" }, h("wa-icon", { key: 'aeb0624895d2a7e0b781dd601b5e68074e80d89f', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '22d5748a1a0bc0abdf983a4be990226154d99876', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'c530f10ccadb5f3c207cd058efb146d7da44133e', slot: "label" }, h("img", { key: 'b1c933f316a3e3b1a231f6d517624378d245feed', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'e33b08f1b5e41317322e05efc8c5fe95f25a1799' }, h("ir-property-switcher", { key: '270e617eb9ab8178c1eafe4f1a3f9a127fa36261', ticket: this.ticket }), h("ir-menu-item", { key: '50252701d4820908a0eaa76cad36b9be98c507e8', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'f50c7d506b6c1a2bba1957ff9fa37d31c2ee342e', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '5677386c8b27dec26a3a1490be9301f1a1add7dd', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '54ee2c2d677d31358247a23792685d7f4e05e5a5', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '292603aed0ba5d30214d724920c37c4e6957f3be', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '4fffe8c19f136b1732545251bd12d3ec8d9f2766' }), h("p", { key: 'bc4f5fdcfdb53a223f568ba8b4cc0885237fe109', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'ccfc90cc17ab23648002132227b619017733e6d3', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'cb40000bb6c8ea2d3ca830c512affaaf00c4d348', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'ec4297ad267ade5a6ab6aa1ac4b14ad9f213d426', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '447e8460700bc2748b9cdea846da83d226edd837', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '84b69c890372aa7f49dbfe3f7cc4fe41ee0da5e1', groupName: "sub-property" }, h("ir-menu-item", { key: 'a4b8ca2b655dfa53165bdc3eb236a1980285078c', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'c16f2c7633f4acffeac1a06ef7e726b58e4f5572', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '6a7aa7ebdd8069611da4cdc0c58f187d023975b3', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '160b1b969fc7d4a24a2b10ecc19a611ac0b69d1b', groupName: "sub-property" }, h("ir-menu-item", { key: '0dd6611e19960fbbb342ac229e0c1773c5226279', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '4313b271ed9e6ecbccf8ed985f4407a2586a8bf1', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '22350c0cc810660311c2f638f051ad4ae2a0b8a8', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '12aba8678219e3b7a13dab591e00b7295d7fc379', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '55c5c60eb36fe21b81df5e192807d264870c88c2', groupName: "sub-property" }, h("ir-menu-item", { key: '39f4dc760bb1a364341b40975773eb679a87a612', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'c72f7d1c333ce21aac51e2b09ff3e3a64cbaaaea', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'caf8d2856ebe90d06c5876b374601879ece849e5', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'a78f2ecd696ed736d2069868761da18b6e239665', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '8a4d0c11a27a13e9de57c07e3d84515007de8ba9', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: 'd03e94438d0f3ee957b2c45a48c76ab4806dc050', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '1ba574cc0074bb74a3c604522e4bf410dd719077', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '8be739c41fdf99c30d40a1b1199727542c3a17b7', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '62a4212f6bf3ad00bb00d4fba55d789ae3d9416c', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'e2a104027b10d7fe2525cbdc158de14c38a8fa54', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '15c764fa4646c2d3f1d487d6987b5dd087096ab3', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '213015f132c534341d646082fe972f01f19780ef', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: 'c62d21d611895a7d554a21e44e99cd2da032af51', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: 'bde52c8f24f4c7e76c021a5a60cfa4c1e4adf8e4', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: 'f162ee6b8fbefcb5b2d17b1d28d443da57b9938a', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'b98b6bce2a370cd564655d58284abaac93714568', groupName: "sub-property" }, h("ir-menu-item", { key: '739acf5edc58c956d471210204a88d701c67a6f5', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '2bf55b5a2a6775102c667ac85ec79f736de272ea', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '14e7501776793521d975a33d4bbb4f7216f06174', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '19f4c6fe751730dbd3bb04ba22da89d0596a74ff', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '24a2bd1b0cf81d8ee627cb43044b2e3c835abd6e', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '5383d4f28f9265b6ab521a04b6edb85ac0f7a45d', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '88726cc0ef2b3193e2794307a4426fdfb1eebab3', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '79e3bf264f5cc7e3bdf3aa26b856b24993be3e61', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: 'a3e24f87cfdcc272416c642f2ea2d8f267ab35e3', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: 'ab67701cb8a2abf55ecd32be0664eb920c535187', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '15cd3a15530e702e1a8887f90af711abffe56215' }, "A35"), h("span", { key: '9b6c0b121896cd073b0d4f8aca097715da0b277e', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'fe38500cc57b836de10b901367e1badefc8abde5' }, h("ir-pms-payment-due-alert", { key: 'fdf32e8c82ecdbcdd4113e6d51fee874d91af637', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'ddfbdebdd9de3a9968c69b214172ffa6ec201054', style: { height: '200vh' } }))));
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
