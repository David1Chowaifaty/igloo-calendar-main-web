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
        return (h("div", { key: '600f586a46d6054e9ea6690ffe41d76181aecbe2' }, h("ir-interceptor", { key: 'c74c073b23e108234308dde998245c3c63fe844b' }), h("ir-toast", { key: '72c2c8de7c40e01e8388de233ee3e00814bc5387' }), h("header", { key: 'bf87b0f5bd2a83a6452fd000dbe88968bbc4f6c0', class: "app-header" }, h("div", { key: '53f6995dd6027ecbf6403d71ebbb199b90a35a56', class: "app-header__left" }, h("ir-custom-button", { key: 'f3e392723d448c9a6e81f133da14e1ed4ae59062', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '6972f25823baed017827d336e73f34371cbf38d7', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '0f0a4bbd305ef684b710d2cfd1d38576c990095b', ticket: this.ticket })), h("div", { key: 'a2c0dc887102ad8c574defea1570df3dc51621c0', class: "app-header__center" }, h("ir-pms-search", { key: 'b9d269909df245e4709e499e5b0645d728188b51', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '73566b1cc1efa8adc697c04e50f51b01d508b210', class: "app-header__right" }, h("ir-booking-new-form", { key: '7c0ee7016f84d7dd250b3a4ab5a65fd92e717b5c', ticket: this.ticket, "prop:propertyid": this.propertyid, language: "en" }, h("ir-custom-button", { key: '00b52058e3d4d10ea73061a6c3cbfaaaa6b84762', slot: "trigger", id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '16828c6a712c9295b2d150a11b3ab3ad254faa6f', name: "circle-plus", style: { fontSize: '1.2rem' } }))), h("wa-tooltip", { key: 'bd234daee4132ef9903613d6f5eeb64ca88f6193', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: 'b9a9647f6f37654b3aaf5eec82146a7f06692a99', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'f78d69f572821de0f637542938e9ece1d1a5c1c9', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'afc780aee2d4cccc342091bb90d6e1ff7098652c', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'eba13de05b908e9f2fd74298c8b71123d218fa5c', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '6f9fb9c898b34925a093544f5a73fd983afead07', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '0acf4f70f4062a34af2d9329c263cd538f7bb5fc', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '3444742c5184f6f47fa6449b3c020636d4e71fd3', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'c8be3b4bf88c50e629dee5ed2c78bdcc9a716936', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '416d9927737ba04fcce261646e9a32c0cbc7de37', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '2ab385eca361209f45581ba72d8bbfb5f2be080b', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '7dbbd54a82a25941c11e06f3dbd63fb1b81e4489', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'c67ed6f9d841e05ba3e936a259ee75bf9db43bbf', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'f409a71fdde111a64e81ca52df8b5d0280aa74a2', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '53ba0cf58e320175007cbc280cc246c0e85c95cb' }, h("wa-avatar", { key: '59810140e1b12e0cda4df4b79728d0a951f3f6ca', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '3939f6bc62732bd9579cfd873fe79c7023a98230' }, h("wa-icon", { key: '9b08da58d35d05463697029d0e639b0352ca3c03', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: '1eb40ecf96e082bc5ff4d288b4d1f5517cccf6ef' }, h("wa-icon", { key: '9b5636aee9ecedd462b45c706b9297cacf204db9', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: 'debccedae1f241a310bd182d37bac97b443ce3a6', disabled: true }, h("wa-icon", { key: 'f7d1ca0a0c887c2ddaa3e62e0293965d4cc83db5', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'ccb57a5e84737d6d0bc4c3b2b2abd74978131df5' }), h("wa-dropdown-item", { key: 'ce24554d4ce6b98fdcfdfd86b41b9d2c7dad4c47' }, h("wa-icon", { key: '750dbddf6d41821cde9d7685bce8ee8c547ab4a6', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: 'fba2485c72f414a6873ece6aaa255ec3bd013b3c' }, h("wa-icon", { key: '25b3f25dec3aeae78c7168a87b75be19e08f13bd', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'cf48bac096f66429b4aa687b0a020ee85b563072' }), h("wa-dropdown-item", { key: '724b3d276c66fa8d64c48558a201d2581a1c253e' }, h("wa-icon", { key: 'e4b0a537ab55df9a2de8b38911fd1d152ca720f6', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '89ee18b3f68b09059eb97aaa50fecca4da102c5a' }), h("wa-dropdown-item", { key: 'c9c505f80cd78684fc61897db1e142c50a0a7459', variant: "danger" }, h("wa-icon", { key: 'b662ac921279392f58c4d05627655faab5859c76', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: 'e890c5330b96143116ac4697178752556adb19c9', ref: el => (this.menuDrawerRef = el) }, h("div", { key: 'a32c7409bb90e166b1b1491a8c0d831169c7d063', slot: "label" }, h("img", { key: '6ded9cdc2a0cda859fd62f97045868842956e640', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: 'fe63bc2af1d5d73413c3c096b9833ed67106628a' }, h("ir-property-switcher", { key: 'ce587456e5c54bab7e524f2f1141b153fd28f785', ticket: this.ticket }), h("ir-menu-item", { key: 'f5d6cc2ee72b2d307b324faf41e09a8dacbe248b', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'c11ab8c92c485f7506ce7f65ec93388bd70c0615', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '373ea6d95ed1689ef3e8c86106d5c66b490da92b', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '6141cae01552a35f36173eb8bd75f3d00836a27b', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '5300ac22643389ebcb599ff91b3eff4ba613d61e', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: 'bd35882f23530ecfb2550044bda9be9c7762b199' }), h("p", { key: '516a8b2f1e7ebaf618aac6bb5ebd8bfbe4f6f641', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '0784351d9b38032fdb0d7178629da55693b70278', slot: "summary" }, "Property"), h("ir-menu-item", { key: '9d1336ca7beb1a71f2f11475c6fcdbc0c6985d4b', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '3517f745c21fda961ffec23207a7e59de65317f6', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'f909be11339fdd83952e22de5104f9019d039836', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'c78898e7519a4179edea2307ffff52cbf9bf8ee6', groupName: "sub-property" }, h("ir-menu-item", { key: '98686eb54100af070baada2463e68fd00d817bb1', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'ca7e97031c4b14f09aca8bd064403b4b04c92421', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '41d9f7aace4eea2cd0dbcc81f63a4030e214c21e', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'f3aa835e9564482f2c0c2f151934d2e8fc0ed275', groupName: "sub-property" }, h("ir-menu-item", { key: '0f03e886dded5b9da748ec4cd700b2d43ae37c25', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '4c7f096e754fe0fc0c3c16280827241035ab5dac', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '597ffc4326daeaa577f2efe32cd70499613ea7f4', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '98181fa8c688db979ac01695030ae7124e840ee9', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: 'bcabf98afcc1c2c627e8982772d6fc3432155c6e', groupName: "sub-property" }, h("ir-menu-item", { key: 'ecf8ee80b327a0e4580c0996c7a67f5ae45db26e', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '24227857721e193005d63af6d98c73ceb127393b', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'a83ce570d43969022515146799ea1466f512f968', href: "acamenities.aspx", badge: "    \u062C\u062F\u064A\u062F" }, "\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A"), h("ir-menu-item", { key: 'd44c776b422cbf01cfcc519a93bdb01970523757', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: 'ffd067c084cf680d0a282ebb6e5fa37c0a55d70b', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '2377c6bd668c598edf2a1b26665b1dd0961bf334', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: 'a638a76fbb3d81c973c3474f9f6d46d7fe1d3607', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '10e23411ef0758f38e64c0b5b738a380f6c99645', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: '8bd40131ad86b2b3ae1a6eafeb78e3dc281f1fbc', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '37d2bba8fef25077eecd817de51c16f58d36dda3', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: 'ec78cd740edeb5293a47a2b52045eac34cb164de', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'edc26032f822f749d429be9d88f0cfb0ffa3eda3', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: 'ae5c1efa9c4828ff89058231371c51e83e06db3c', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '5c9ff31883a055b569ba1e957c76ff8fbf5c5d5d', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '184ffac4ae0e5254c2fca9af8efc60c3c1aca497', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '1ff5358220cbb9c2187151a40cc8a79e6bf196fd', groupName: "sub-property" }, h("ir-menu-item", { key: '953b757cb8254f7110c63cc3c01754dfe34ab0d2', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '1a093d27b07ddc6a01b854b6b16303f5d2c41ab2', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '999d9b38e61a0ce364a166287c8528be3261a227', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '662aae4e2894875574690b82179caa1953e846b7', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '510f257bc2e8bdc08ceac524c59c487eacaa43b3', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: 'd973639f3c08327bc20c57e8a0b5f970225f4970', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '347b351ecfd276415e578198082eb89cacc8eff7', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '027e78c10b5715bbb37cbfbf5034ba8d2e9eeedf', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '07b881134664ac188d55cfcbdce8eb1227ab93d6', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '146bacd13dfde191997db76669e7ad275125b4f2', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: 'ede81348f5a4bb3fdf45537ae32a4434259e8c05' }, "A35"), h("span", { key: 'f3fad27593f32b452cda46558786ef3eb65da980', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: 'e7e208b3a5f3edc19f50ef0b8da8461e65bdb0cd' }, h("ir-pms-payment-due-alert", { key: 'b002095af7af3de6a2685dd2c3645ecd86f921b6', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '86d2ec22bbfcb71cf3095019b5283ed042f5da89', style: { height: '200vh', padding: '1rem', background: 'white' } }, h("div", { key: '88fd390c8d13d4912c18afe5adba7bf96dec098a', class: 'd-flex' }, h("ir-input", { key: 'faa35952bfa7a14c7e23bbbeadc0c55824631a27', label: "Hello world", size: "s" }), h("ir-text-editor", { key: '18190d84417993470b5963a796ad5433aa1248e0', size: "s", hint: "lola", label: "Hello world" })), h("ir-text-editor", { key: '0b91a8bccc74d2edc6b861b271f3f61528644e44', size: 'm', toolbarConfig: {
                undo: true,
                redo: true,
                color: true,
                align: true,
                background: true,
                link: true,
                list: ['bullet', 'ordered'],
            }, onTextChange: e => console.log(e.detail), appearance: 'filled', label: "Hello world" }), h("ir-text-editor", { key: '71e1800d184d73199d778fe2b6d75afe544f324a', size: "xl", appearance: 'filled-outlined', label: "Hello world" })))));
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
