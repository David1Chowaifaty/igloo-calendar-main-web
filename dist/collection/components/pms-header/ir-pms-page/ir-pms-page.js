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
        return (h("div", { key: '21cd1a7940c7eefff8dceddfbd314915a15d86b7' }, h("header", { key: '4e2f2b08330be1a37d6a381a0672e407161b7c05', class: "app-header" }, h("div", { key: 'cd25e394b2e2bde3a74bc1f76d2aeca22318643f', class: "app-header__left" }, h("ir-custom-button", { key: '3508a0334f10c58d52a7153130e2653f729403ba', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "small", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '9ab96be6c949c7184541d5486c9a1aec2976e1b7', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: 'cffec449f889e76519c17b3d5be156ee06e76e05', ticket: this.ticket })), h("div", { key: 'c7b0c24df7205944fdab71acc2004136476db493', class: "app-header__center" }, h("ir-pms-search", { key: '713480bcb64e7037da2b38e0ec1cd2f2f06f690b', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '13153c8198086db5f003bd2843d4e258d575feef', class: "app-header__right" }, h("ir-custom-button", { key: 'dbbcc90d7e102709d9e0ebae11729dff547a665e', id: "add-booking-btn", size: "small", appearance: "plain", variant: "brand" }, h("wa-icon", { key: '29e071428b7e7f99eba36a9962da33e25a64583f', name: "circle-plus", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '6a648c700ed96bf6ccf4ab6f7f68a4e97af7e288', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: '3aa30f8cfd9dcdb75af5cb5c4c669d709b8c37b6', id: "calendar-btn", href: "/frontdesk.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '81be2f2bd31f88470f38d6e2d2805ba23c3e4d2e', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '25b786578080a7bc449cb8f1f5464b6a97c0e9bc', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: 'eb0914efa6e602eb6eddb60ef7099c1c60e606c0', href: "/acbookinglist.aspx", id: "rooms-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '9b6158029c47d3c25057493d278c24fbde782f39', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '283b17e5b15c182432d7331d6982d3e0d7eca23e', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '4c2aeab582fc6b3d3ac8b4dfa8da428be5b09801', id: "departures-btn", href: "AcDepartures.aspx", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '540e824b81792e7f72c7e5e2e125bb22b119f036', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '9d6b20968462ba38fb9792336b82732f9571f0bb', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: 'd14c671e27f59b0e6dccbf6534f7a96d904e6c7b', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "small", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'e6144f75a4393582c8e5b2b07c2365e5428ce5e4', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '6d7edcdc9d168f531b39a850f79dec8294fecc9d', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: '53ea13ae7a654a940f26b09963b994766f441bf2', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '13553c40db13f6dc6390083a35d8f758d2eb2fb5' }, h("wa-avatar", { key: '9c6ab395bccfe532070979ddbecaf66a26eb59d6', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: '0c4cd6c1033744108379b0ae82edc15170922d08' }, h("wa-icon", { key: '4decbe000aae09be49974fc1153b667e9ad9c873', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'aa89f59fbd94108673148052164280fc7c4f886e' }, h("wa-icon", { key: '5137675eed5a6a0f00ca4007ca5280116e7ca6c2', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '1630b4fcf86c725fdb8ace5f40634589a863e179', disabled: true }, h("wa-icon", { key: 'b3cde01094f3bcd347099fb387bb8e9f3137b874', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'cb6db7827410503620c2dfd75345d6628d0fc0c5' }), h("wa-dropdown-item", { key: '0d5225ca0a1e9ceda2bd818e632b907260cc1f41' }, h("wa-icon", { key: '149b0c910367c419e3e0d22bbbe7f855512fcd48', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '249febec8febc06fd49daf69465a82d8a7a18d7d' }, h("wa-icon", { key: '3d0551720ca554f8ec39af8b4c1070a63ecd838f', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: 'dc431cac8ef8f8e779d283030036a240625a802b' }), h("wa-dropdown-item", { key: 'edbcaabe69c49b080c9cd41e11f7f9776bfe4fe5' }, h("wa-icon", { key: '577a38190304c7eeec7413b8ae0218c1185e108d', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '480551b72b2733bcd82e0077a472fff18e9ebfd2' }), h("wa-dropdown-item", { key: 'adab57e1a7ab18647c9f0b3a0e05079717b5d47c', variant: "danger" }, h("wa-icon", { key: 'd3908541edac0794ec8219ec5f37811292c1bfbb', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '35bdfe908f34b78d6a8a3861432c89bdd736b75d', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '9bb2653f293c5be206b1c6856fec481ca1bae36d', slot: "label" }, h("img", { key: '22f5023aaf02402503b1cc747e30b873946157c1', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '3bc46d2fb803979fdf21bc2907fc802ac3022671' }, h("ir-property-switcher", { key: '31c61bc1817027eef219f8d619a2435b839ba14b', ticket: this.ticket }), h("ir-menu-item", { key: '2762c36883bfa615f9378e06d3ab148a2ec52490', slot: "summary" }, "Property"), h("ir-menu-item", { key: '9e709a75e27202c1adcd540c1a3bc19af9398f8b', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'db80f8476a567f2463f92bd3907b10b0232780b9', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '60dacd093d59ef70d267a77e8ae1bd13e388c961', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '19f2f2881daa98501dff8a8feec1739165a13b21', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '683edbdc5d7596a0dc9560c22993b938fef27357' }), h("p", { key: 'f76badebb277f889024d96be5c6ec0672eeb5153', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: '2a342b1b825dff5a89a1caed7c101cda46f1e9ed', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'e8411a61a04792f1843713541679c1d6d45990f5', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'f2f8d8515796fd7f3f0faf74939d3c7641f3945c', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '4d0f7f9ed83c323a129cdebbd6788a7af3546aaa', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: '7e2e304e027a463e04fdf4dd3e812bf892a017ce', groupName: "sub-property" }, h("ir-menu-item", { key: 'c6c058b3d643ef328f5b7f16e876349d4c3d6f8b', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: '95c5f04aa680bddc43a8818edcca3511a0fdddca', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: '9f18bab91ba98a6c2e3f40f40b7930a91b8f3115', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: '86dbf52bc0a59f0c33851a0a16d65ff8b4539f2e', groupName: "sub-property" }, h("ir-menu-item", { key: 'b491bc771f66e8ae7ef6142d95a393706a0c8e0d', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: 'a24ac5b74f067d5a45670a3aa5c08ad956cdac9f', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '2bcced562bb14bcebe840595636965292fd57615', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: '45f69ab3ba6586a9c80c113bf8cc91bb23ec2873', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: 'd1d03cd5941f340a3272172d3656ca079964eb96', groupName: "sub-property" }, h("ir-menu-item", { key: '41852183235cb1a9f53ee4341f1eb561e85e5272', slot: "summary" }, "Settings"), h("ir-menu-item", { key: '2012925e3bb9af72b0336ca86013adeefc42c632', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: '5867f66586fe24f9d78d29d7a4a3a74851ccde10', href: "acamenities.aspx" }, "Facilities & Services"), h("ir-menu-item", { key: 'e774b6668ae201d28688e2def062f8e656fbbc81', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '344a4b239e2368aa47451b4e6a838e78319bd03d', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '1072681525ff90dc06c3a2aab0f40fed20a33291', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '8ce5c7989beaf6efadb7c526abd67abb510b268c', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: '9f2f7450862da33d07746f165e0cbf4487bcfd5d', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'b1da26a67a708959a88968659d7c9b00e3d45067', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '382f42903edab7660da724ad704df435e9ecbccf', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: 'c295fbc86b8ab70d1b4ff2eeb281f098f13b889c', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: '6d4f86bda9fa48d145c3e94fe5c793b31a200504', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: 'd5c5f8f8d9be9af6593a78b8809406e4cdd45e75', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: '8ba2644feacaa9457d8a7099b22dbe7e6a266748', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '4de5407e4855618da55be643838e232deffc1823', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: 'dc4edaa9ac88b0dd02841d038c6a7ce297f69a21', groupName: "sub-property" }, h("ir-menu-item", { key: '650488a1ea9aa7eece1a77df1d26c04b374a7606', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '0651d5ba5f0aaac546c3a89a3a17de8734eb2765', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: 'be33e2c79f2916a0a27044924535719077b37d8b', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: '6cddc4786aa67acae43bdf500f68e96c5a735d15', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: 'da48dd732459ab24d0bb175e26ae9cb646db1c16', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: 'e1c95325849798d82414b0702e4bd82ac151bd9d', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: '5cacf1a4b85bba42dd4e01454a76cf2af84de97d', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '01edc836fbcbc6e51d5fe41b0bcf7e715538e0e7', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '7884f413640ec7b63be2c403bc51f55d72191ba7', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: 'ea270f20f4118d34be114b5d872497e1edc148a3', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '050f1194863dc34572c01b13125a595fbfd57f5d' }, "A35"), h("span", { key: 'e582ee288ada89c5968fed33b431f9262e648de6', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '6d7437c51c8d61e0e745b36f97f00ba82ba76a05' }, h("ir-pms-payment-due-alert", { key: 'c73705c53d5ece5a988c3bd9317f1514f48b60c3', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: 'c17f0f9be5375abad3f8cfabf67a0d544675864a', style: { height: '200vh' } }))));
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
