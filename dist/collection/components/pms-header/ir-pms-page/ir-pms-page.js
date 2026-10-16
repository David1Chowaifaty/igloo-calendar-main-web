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
        return (h("div", { key: 'b88e0d9a407f48e2b8f4df00bf8f0046d7213373' }, h("ir-interceptor", { key: 'feb6158f11313fbaeaa8e13772df59279a88352e' }), h("ir-toast", { key: 'ab62c0cca10a5ff2e0f551b34600e70c3a3f4fb5' }), h("header", { key: 'f25a656b071eb4d784020446c0fe2f8751364bbc', class: "app-header" }, h("div", { key: 'e113178abb39bcfd3b821e33b173ca4a998c19a7', class: "app-header__left" }, h("ir-custom-button", { key: '121c326ba307bbcef900818b775ca89bf23c2b3f', onClickHandler: () => this.menuDrawerRef.openDrawer(), size: "s", appearance: "plain", variant: "neutral", class: "header-action" }, h("wa-icon", { key: '50890af7546369eee6c47b6bc6fb8851776928f6', name: "bars", style: { fontSize: '1.2rem' } })), h("ir-property-switcher", { key: '08e622fa69ccb3002843ac232ea6655dc7f23994', ticket: this.ticket })), h("div", { key: 'f669001bae1ce7104888b928275f27e5125d9ba9', class: "app-header__center" }, h("ir-pms-search", { key: '2af223da30d5fb091965ee56e481543a236ce60c', "onCombobox-select": e => {
                console.log(e.detail);
            }, ticket: this.ticket, propertyid: this.propertyid, class: "header-search" })), h("div", { key: '255bc3b92dcbd0d7bc2b694fdaaff1fc651a1331', class: "app-header__right" }, h("ir-booking-new-form", { key: '76d15fac735a1b42b7aa74a3e4823cb331cee8f8', ticket: this.ticket, "prop:propertyid": this.propertyid, language: "en" }, h("ir-custom-button", { key: 'd379505806cd2319536a9352c267a2855cad796f', slot: "trigger", id: "add-booking-btn", size: "s", appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'daad00abd8c7e6bdd44e4a700d073033e890f026', name: "circle-plus", style: { fontSize: '1.2rem' } }))), h("wa-tooltip", { key: '0e04e07a7036484109d3353b4b50c50ebc09ce92', for: "add-booking-btn" }, "New booking"), h("ir-custom-button", { key: 'bc3197c8dd9a12763b081894a3e05a232111e521', id: "calendar-btn", href: "/frontdesk.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'e8a3886a79347cfb39149399ade7bebf12226dd6', name: "calendar", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '0333e2124349a11d90e59f3bf4aa7debac5c0be7', for: "calendar-btn" }, "Calendar"), h("ir-custom-button", { key: '9b444625a034226ff92b88c1de9bce62aec53fa2', href: "/acbookinglist.aspx", id: "rooms-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'd8605a782904b56aae58624b40e586750c9b818b', name: "bed", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: 'efa5b33bd8bd4145e140b0f9d1af197c1e4eca34', for: "rooms-btn" }, "Bookings"), h("ir-custom-button", { key: '9614938a39b87423505e53470b730c5acb19505f', id: "departures-btn", href: "AcDepartures.aspx", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: 'f51c1ae1f9110b3f8547a924add6b1f9d4efe7de', name: "plane-departure", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '9fcd0db46afc3b408e5874d42d2cfea7fcf54620', for: "departures-btn" }, "Check-outs"), h("ir-custom-button", { key: '9b4940cfe027cf77a6be0c5e5587cf90d3de150b', href: "/AcArrivals.aspx", id: "arrivals-btn", size: "s", appearance: "plain", class: "header-desktop-only" }, h("wa-icon", { key: '4d95c1e8d4346ac67fae35a45fd8fc0df8b8a38d', name: "plane-arrival", style: { fontSize: '1.2rem' } })), h("wa-tooltip", { key: '161c03d6ded421a2405878b25231ab1f94333b98', for: "arrivals-btn" }, "Check-ins"), h("ir-notifications", { key: 'e958d0562d5bdc04f8831724588dbe40e7c2293b', propertyid: this.propertyid, ticket: this.ticket }), h("wa-dropdown", { key: '6ceb583aa597a48b5706cb650eac4380aef64bde' }, h("wa-avatar", { key: '61f77c975b75cfcb00667103e3d6123b509ba6cf', slot: "trigger", style: { '--size': '2rem', 'marginLeft': '0.5rem' } }), h("wa-dropdown-item", { key: 'fe01bce00d2c3bb0678d689211f52ab0a9e4419f' }, h("wa-icon", { key: 'd827dc73dce7a1aef5b42449790d265f038badc6', slot: "icon", name: "globe" }), "View Your Website"), h("wa-dropdown-item", { key: 'f0690997f92e80edea20d5d0a87328b621fc2f82' }, h("wa-icon", { key: '793d8ad673084d859078a558a34c0d78fcc11b03', slot: "icon", name: "arrow-up-right-from-square" }), "bookingmystay.com/A35"), h("wa-dropdown-item", { key: '1a64a1e2c7152a30400c419161e1f93c5191b5f1', disabled: true }, h("wa-icon", { key: '403bc6c31212259aded7f9c26f0e9474b0ceb9cc', slot: "icon", name: "hashtag" }), "Property ID: 42"), h("wa-divider", { key: 'ae305d32fb15f3e54dce2d8976264d9615e77d6d' }), h("wa-dropdown-item", { key: '1a26f39603be97e119c204bbb4976dabce094168' }, h("wa-icon", { key: '4b9da578fa78b329015b2e2060a1c2303710bd1e', slot: "icon", name: "users" }), "Extranet Users"), h("wa-dropdown-item", { key: '4720dc605dc1ea54bb06893a4bcb3e58256e57fa' }, h("wa-icon", { key: '003ba85ee9a80f3c7844b8b9a36b7e49cdd9a56e', slot: "icon", name: "lock" }), "Change Password"), h("wa-divider", { key: '1f80bbf084af5aa7a75232be3b283800b16a99c8' }), h("wa-dropdown-item", { key: '1c1cb3e571571aa765f7cc0d3eb4ceaf5f9a11b2' }, h("wa-icon", { key: 'f26ea34b266867ea561e50bd3a0ae5a61ab693ac', slot: "icon", name: "wallet" }), "Billing"), h("wa-divider", { key: '62f3578b05d22d71836c1ad7ca0d842f3e974f58' }), h("wa-dropdown-item", { key: '781ee909d95854a1a359042de906c712d9d091e5', variant: "danger" }, h("wa-icon", { key: '26c5eb5b93655c578d544c1e71dbf8f7b6e48d26', slot: "icon", name: "power-off" }), "Logout")))), h("ir-menu-drawer", { key: '9e5156743851ccdd94dd5e888e99b09ff2100eda', ref: el => (this.menuDrawerRef = el) }, h("div", { key: '97213bc54f0586127887cf5e467ab27ea348d1ba', slot: "label" }, h("img", { key: '4e0f9dad68a2f6d249eecfcc7430cfea70888afb', style: { height: '24px' }, src: "\thttps://x.igloorooms.com/app-assets/images/logo/logo-dark.png", alt: "" })), h("ir-menu", { key: '9cfcfb38cd7dd86d478660db0de5235ff53061ed' }, h("ir-property-switcher", { key: 'e3581cc6a925c794c49165c4eecbd55c68df72b4', ticket: this.ticket }), h("ir-menu-item", { key: 'db37aed6ab58e87f9b5d0f88c9019f30231fd9dd', slot: "summary" }, "Property"), h("ir-menu-item", { key: 'fdae4e7bfc57dfe45719740323d7c35a5a8b4e5e', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: '6d44a0df9c126b4752a2ae4f883cfe2d4f5193f2', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: '5cb19a14df5a149b8a91b4fd583892e9c56af9d1', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-item", { key: '2570de8e13558d1dfa069b5e56575c7593640ec2', href: "frontdesk.aspx" }, "Frontdesk"), h("wa-divider", { key: '2a701d7edbfe65911f94d86479e38749c376783f' }), h("p", { key: 'd9016562ee9210e7193197e0fc0137d1c753b02f', style: { margin: '0', marginBottom: '0.5rem' } }, "Property"), h("ir-menu-item", { key: 'afccfe92bc0e6728e4317f2423b8b80eefd072fb', slot: "summary" }, "Property"), h("ir-menu-item", { key: '75055c7dbfa374f690a171c258f95c33dbc5b92d', href: "acdashboard.aspx" }, "Dashboard"), h("ir-menu-item", { key: 'a26356364b897cb26e9e6af5964a7e73310c7cd2', href: "frontdesk.aspx" }, "Frontdesk"), h("ir-menu-item", { key: 'cbb952b1e4efc0f0ac8e2e82a9a02dcdef971b5f', href: "acratesallotment.aspx" }, "Inventory"), h("ir-menu-group", { key: 'da9fa4959455468b498ffb2b71ca21d3847f8a57', groupName: "sub-property" }, h("ir-menu-item", { key: '837b4f0a2f758201a42288f98d13d33b0d427899', slot: "summary" }, "Marketing"), h("ir-menu-item", { key: 'ce569e31aa51023c7a427ab16335f21ceccccead', href: "acpromodiscounts.aspx" }, "Discounts"), h("ir-menu-item", { key: 'f3daf1798af7142d7684971f5ad58e39f2a9e001', href: "acautomatedemails.aspx" }, "Automated Emails")), h("ir-menu-group", { key: 'c9f808b8aa1b1b580fc4e0d25329c7048a48b806', groupName: "sub-property" }, h("ir-menu-item", { key: 'c79700047b0e8bafffe0c871f9594fcb9561f46a', slot: "summary" }, "Bookings"), h("ir-menu-item", { key: '615ebdf48a5d80824ddaf1b15f1c11249c55dedf', href: "/acbookinglist.aspx" }, "Bookings List"), h("ir-menu-item", { key: '19ceaf3df48018e2ad6fae3bc7d3a39cefc0d806', href: "/AcArrivals.aspx" }, "Check-ins"), h("ir-menu-item", { key: 'db8875a94e7ff62063c107c09f80003dc467cb3d', href: "/AcDepartures.aspx" }, "Check-outs")), h("ir-menu-group", { key: 'bf8a914021b25f1d0e5d74a4f746ac08855edc2c', groupName: "sub-property" }, h("ir-menu-item", { key: '8c96febf1ba9f61eced9c25fafaab3376816e055', slot: "summary" }, "Settings"), h("ir-menu-item", { key: 'f157110683f75cf54b26b606b23dfda41a7d4921', href: "acgeneral.aspx" }, "General Info"), h("ir-menu-item", { key: 'ef96a02ccc726a36f102d337786406a5e1a34e3d', href: "acamenities.aspx", badge: "    \u062C\u062F\u064A\u062F" }, "\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A"), h("ir-menu-item", { key: '4a1224f06ff24747ea4caed587d9bcab46ea47fa', href: "acdescriptions.aspx" }, "Descriptions"), h("ir-menu-item", { key: '22f16247abedf42a36e14db2977b99498a8b839a', href: "acconcan.aspx" }, "Policies"), h("ir-menu-item", { key: '6cb14b0fcb3c76674265fa7d2bbe6028e8848059', href: "accommtax.aspx" }, "Money Matters"), h("ir-menu-item", { key: '1786774d2e3c355739ccd830cf02184bb3e8dd64', href: "acroomcategories.aspx" }, "Rooms & Rate Plans"), h("ir-menu-item", { key: 'e6ab0e7cfa59367a22cd6cafdbfd13d4f76f9b27', href: "ACHousekeeping.aspx" }, "Housekeeping & Check-in Setup"), h("ir-menu-item", { key: 'a58a7801569e596b6fd074c5411d83187ae386b3', href: "actravelagents.aspx" }, "Agents and Groups"), h("ir-menu-item", { key: '0be0d59354355715372896ef487e06109fda473d', href: "acimagegallery.aspx" }, "Image Gallery"), h("ir-menu-item", { key: '06554c620d614c8cf452020b9279766f16c7d9c3', href: "acpickups.aspx" }, "Pickup Services"), h("ir-menu-item", { key: 'd28f94b20ddf0000715732926511238e229c64f9', href: "acintegrations.aspx" }, "Integrations"), h("ir-menu-item", { key: '3d18e930173aa29e35634ff9d41100ad0aacff92', href: "acthemingwebsite.aspx" }, "iSPACE"), h("ir-menu-item", { key: 'a05e4f6994827f1ac9b2fa03765eb8b481003586', href: "acigloochannel.aspx" }, "iCHANNEL"), h("ir-menu-item", { key: '91f8c8a3b354863d3d50a2bdf160f6e8196b4483', href: "iSwitch.aspx" }, "iSWITCH")), h("ir-menu-group", { key: '4532e92406d59c95016a43c05497dd625bee4c79', groupName: "sub-property" }, h("ir-menu-item", { key: 'a1d8596efdcac5a7347089a9b07f84711f8fa957', slot: "summary" }, "Reports"), h("ir-menu-item", { key: '757a0bdc2d31ee249d7d7778369b3096688d6d45', href: "ACHousekeepingTasks.aspx" }, "Housekeeping Tasks"), h("ir-menu-item", { key: '593aef8ce04ce62ec25e759d78fed20368142c12', href: "acmemberlist.aspx" }, "Guests"), h("ir-menu-item", { key: 'bf3b17b07123e142ea593f6cee08df440122360d', href: "acsalesstatistics.aspx" }, "Sales Statistics"), h("ir-menu-item", { key: '0f943edf549929f468eb026e19c4cee70dbd8b76', href: "acsalesbychannel.aspx" }, "Sales by Channel"), h("ir-menu-item", { key: '68c5d595cc46fad278057b277d75aba91d41a021', href: "acsalesbycountry.aspx" }, "Sales by Country"), h("ir-menu-item", { key: 'd0136c7df4b47780a3af99039dd1e4716420da07', href: "ACDailyOccupancy.aspx" }, "Daily Occupancy"), h("ir-menu-item", { key: '8b9c6e4b98e8dcd56d6b86074a4ef8f8360fec96', href: "acaccountingreport.aspx" }, "Accounting Report"), h("ir-menu-item", { key: '3a9b8d2c725ea78ffb7c0e03eb79232ca09b3a0b', href: "/", selected: true, id: "hello" }, "Hello"))), h("div", { key: '6408a9774c7f6c0c7a3f05bfc05002fbec1a4213', class: "menu-footer", slot: "footer", style: { textAlign: 'start' } }, h("h4", { key: '2022d4332bdacf36adeaf740ef8a8b3e06430e33' }, "A35"), h("span", { key: 'b7e8c8f5b86bf96d04c4e430361bbf343115b547', style: { fontSize: '0.875rem' } }, "lorem@noemail.com"))), h("div", { key: '651745be083a099b7e031111af71337eb9b03df7' }, h("ir-pms-payment-due-alert", { key: 'c394c8143a01ec37df340b70fc15cfbc68801677', propertyid: this.propertyid ? Number(this.propertyid) : null, ticket: this.ticket }), h("div", { key: '24214d80130d17df72563ad3fb8f665df634e413', style: { height: '200vh', padding: '1rem', background: 'white' } }, h("div", { key: '6809fa96171d8269b244db3834f7540a74f13919', class: 'd-flex' }, h("ir-input", { key: 'bbdf73d95e796825244ed6d559413e6591788715', label: "Hello world", size: "s" }), h("ir-text-editor", { key: '31237c7ea2db7e489fcfb52ddb761d9c3a364911', size: "s", hint: "lola", label: "Hello world" })), h("ir-text-editor", { key: 'a3b004bdb4a2e842a230b30cde7bc2d4b22d47d6', size: 'm', toolbarConfig: {
                undo: true,
                redo: true,
                color: true,
                align: true,
                background: true,
                link: true,
                list: ['bullet', 'ordered'],
            }, onTextChange: e => console.log(e.detail), appearance: 'filled', label: "Hello world" }), h("ir-text-editor", { key: '45719ba04df36cfc3c3a951eecb214352e7cef61', size: "xl", appearance: 'filled-outlined', label: "Hello world" })))));
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
