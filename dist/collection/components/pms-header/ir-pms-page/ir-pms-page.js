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
        return (h("div", { key: '21cd1a7940c7eefff8dceddfbd314915a15d86b7' }, h("header", { key: '4e2f2b08330be1a37d6a381a0672e407161b7c05', class: "app-header" }, h("div", { key: 'cd25e394b2e2bde3a74bc1f76d2aeca22318643f', class: "app-header__left" }, h("ir-custom-button", { key: '902a3f69de19c552e25b07be017b277fb1701555', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '08f414c6686ac9275b2439f3b8f6df9d7c08f9ee', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '04188c4432cfbdd0e5059958eaab05913afb8bb7', ticket: this.ticket })), h("div", { key: '48671903c4a79dfd365c69577addc17ab9b51f58', class: "app-header__center" }, h("ir-pms-search", { key: '8df912db7e39ff3532bccc3d30698f40919b06ca', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: 'b97d5796a82522779fc984d3ba971c97808f9ea2', class: "app-header__right" }, h("ir-custom-button", { key: '3253fdaf2342c9eb2709dcc25dc70e703f340331', id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '3dbe609e7918e322045de1c248cc2e63d7f4c755', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'cd5d4710dba9419d7c8694a30418af0f34f44451', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '477d4c104d03ca42cfba7ee15fe816161cfcc0a4', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '71bfafc2f09cdc4e7bec70c81113e26899af54e3', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '4b204b83dfb79a84376834b461d821c13752fe98', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '42484207b05952befbd32c670addcb0c28a632ce', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'bf8e8d2f42f7300a1ffa6d0b53e8052f32edb2a4', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '0f61042b8d5207f6e16d1ed7915232ebbd05431e', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: 'd38ddb7a2298ccb4f47d7b7c1d84628579f2028b', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '5f0a4804d1054b720352c77e12932cfb22813f9d', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'f01ad0c04928147b556f943923c41832e02619a6', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '2c84ee7ba7d184fc7c18fb91bf26c0efc0c6630a', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'bf27aa00b563d1e16ec165b3701623df2b528c5b', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '95f83b447fdcf346203c0737815d59cc612e7b0a', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '81d7faa0a5a6da4ec9d151fa2df29c8438c49cb4', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: 'ec93120e4156015145216274c05ec0ccdb063ad7' }, h("wa-avatar", { key: 'dbc5582c019f93d2c43dc8ea2388284e87387e89', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '5283740937e6f49ca48c8724bb888d0d435f37ad' }, h("wa-icon", { key: 'd6bb5cc1423b2b5648d25602888cdd9b987509ba', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '426609df07ffe0ba6c83d07cbae43d585d725b89' }, h("wa-icon", { key: '29870d1f084f024d345bf1f43b0e90ca901fd171', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'cae5dab7654363b3e08e3d44e0c767f9928f477c', disabled: true }, h("wa-icon", { key: 'b84ae0480411459d09e2e4fe82c22ebf94f83137', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'c931fb4bc0d87c3613f4a868ea6a0799faff2d48' }), h("wa-dropdown-item", { key: 'fc0cb07559b8c72a11914791ab21ff8e9019d9f4' }, h("wa-icon", { key: 'ad7d41ffabacad46fe8178798f8e470b6af7a1b6', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'fcc5e79df52b3be2c3532058d884d0e6f4782efd' }, h("wa-icon", { key: 'aca3795f7743c4ef67dccaac4c216215a5f58364', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'f77d7b6d0e1dc54b51443c3c22063dd615dcc6a5' }), h("wa-dropdown-item", { key: '22c9754def4a227014758931a9f88b7caaff4af2' }, h("wa-icon", { key: '7c8c9031f97b6c863311f60069e21d38413c6580', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '7ee0c6cb236f2ce246d164cf0df466b5a88c8490' }), h("wa-dropdown-item", { key: 'bd650515ad7955ebedf161340219f8d6da722410', variant: "danger" }, h("wa-icon", { key: '382843a5fec0847d5e1cfed0fab8eca1f72817e0', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'dc01e28e809f58c635518e03c1e2ff307eb0a94e', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '8727a27821ce64ae8f779f7ead031f0e4ddb6d99', slot: "label" }, h("img", { key: '45f9d72fb0fdd4324f15592eff129e0984328508', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '2d7975106989278726959d2521cd4a2447812a3d' }, h("ir-property-switcher", { key: 'fd9921506192f6cbd5bc2abcfe038011b518ce6b', ticket: this.ticket }), h("ir-menu-item", { key: 'fa6f8dd968325a8ad2749719af53541b88c9aa2b', slot: "summary" }, "Property"), h("ir-menu-item", { key: '78c1088fb98d0c717599b97b28566fc41e4d8df6', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'a4b714332982334743efa9c5d479613a9950f23c', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '82d36bcc246e5c490d47a4f298a505f828a333d2', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: 'bd41804810d0f7446ba43660190a21da91aaee6a', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '5a930c11f6b1d64433cadf22d1f73a25018f61e3' }), h("p", { key: 'e420496a6cafd5b051e8947c01606de1e44c0e89', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '44f7ca67a171c3f5937748c78ab4a7d428a03ae3', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'a1df407f605a12358396b6daceb5b9b7901c7b14', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '7f4228f7f3eb9614b61b70c6f39dab7177b45202', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '9fa4b8f2002f488fce41ab81d4a56e632be8f708', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '58fdb683cb38cbbc5d7bfda5c398e9f5f1e079bd', groupName: "sub-property" }, h("ir-menu-item", { key: 'd595cd709c2bc8364f2ccb5f036a5d571fd8cd71', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'a6e1bcaef8f680145ea4634edfce3d7e2bb27ac1', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '490352e16cb41d92eefae1410099c42c5bccfd72', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'f6c2e63b72e047dfae6c972345409ff6176d9070', groupName: "sub-property" }, h("ir-menu-item", { key: '1b2dbb65be16926271d8c90b5109c344663a4f25', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '0dc08fe6268fe1a9abd4dc87d5a27a70b31f85ec', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '090837980f030ce7ab8ed928b852cd9ab52b101e', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '41efb375046c04f47d5541c4cf416dd381985351', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: '6517e52cb788ac4a8952d4e8688a5a556d653fd2', groupName: "sub-property" }, h("ir-menu-item", { key: '550f1806af4b66bea33b3b37852fef5e0c47004c', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '0de5f569bbca6e78ed68ef8ff771a4c3072df23d', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '076ee2bc39b7010766e6de8cf597726c8dc825f6', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'a800a52bb714b2efe40fad5f91eb4a1bd5bdbf34', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '5a6d16b303effbc07c78a8b7dcd69f21504f8138', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '498a8ccefe073b1c2f7f1f90b278d1576fa4a425', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '1cd022563572967f94de0a685ad613dce53d0147', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '34abf97d367904128c2d70f2052d042aa3222ff4', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '929d2c1fdb018498f21791700221aea7027d640a', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: 'e84f8d3a185c8e1dd2195068e7a932fc55c96621', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '3d5393e5dc7e213c9f90dabf4d14d3062010a536', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'aab2bef3fd5b742459f09de60b879fe3150cce10', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: 'a45743d1e4b2aa563c776cd9d74bae456bb63459', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '22e4fb10b129c2ac93ee9d7fa9a5995fb26b0c19', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '631777da0214eedf50c40f34a443c4d212d0bb9d', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '9a93fc12b4ca7c93da48d04cc2d3e188a68128ee', groupName: "sub-property" }, h("ir-menu-item", { key: 'dc8e7a1f3504a881fe453d24bb602bf423b7d2de', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '90619fdb82bc86091d058cc5e94d614cc4792885', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '64de6694c65007fd01cbd01bc0ad654286acc2c5', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '2746f022908993dd8a79f78afd3f4d1d4fdb7e9d', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'a17f77eee57bb38939ba9169216bf7f3102fd37f', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: 'ef3c2567a0fe2f4ea1c1f3ca24cfbc0c07dc8d4e', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '1334e893f0a874c9ec43efde5835975404e452eb', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '6070be39e8b1cd3cd32f34cb87d3bdc5afed6758', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '65228737ab5182d91c7bd7e04172353c11c73b86', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '1891ce48c4a59ae680fd0dfdadb0e9d542d17dfb', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '72e53bbf87120974d6364cb58809aaa41e703037' }, "A35"), h("span", { key: 'd81263d62eb3dbecaedb73c605687158cbf3293b', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '40b033e6e2e35e19cf6761d3d8af803d47740c5d' }, h("ir-pms-payment-due-alert", { key: '4439bad96f4927c1788e17aa294fdec89fe26531', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'f99c114ca938badba00bb4cf1988c2d1d7c3d1ad', style: { height: '200vh' } }))));
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
