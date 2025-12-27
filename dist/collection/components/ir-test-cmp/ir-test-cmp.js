import { Host, h } from "@stencil/core";
import { sleep } from "../../utils/utils";
import { colorVariants } from "../ui/ir-icons/icons";
export class IrTestCmp {
    dates;
    selectedStaticOption;
    selectedCountry;
    selectedCustomOption;
    countryOptions = [];
    customOptions = [];
    isLoadingCountries = false;
    isLoadingCustom = false;
    customComboboxRef;
    staticOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3 ajnajanjanjna janajnjanjan najnajnajn ajnaj' },
        { value: 'option4', label: 'Option 4' },
        { value: 'option5', label: 'Option 5' },
    ];
    handleStaticOptionChange = (event) => {
        this.selectedStaticOption = event.detail;
    };
    handleCountryChange = (event) => {
        this.selectedCountry = event.detail;
    };
    handleCustomOptionChange = (event) => {
        this.selectedCustomOption = event.detail;
    };
    handleCountrySearch = async (event) => {
        const query = event.detail;
        if (!query || query.length < 2) {
            this.countryOptions = [];
            return;
        }
        this.isLoadingCountries = true;
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`);
            if (response.ok) {
                const countries = await response.json();
                this.countryOptions = countries
                    .map(country => ({
                    value: country.cca2,
                    label: country.name.common,
                }))
                    .slice(0, 10); // Limit to 10 results
            }
            else {
                this.countryOptions = [];
            }
        }
        catch (error) {
            console.error('Error fetching countries:', error);
            this.countryOptions = [];
        }
        finally {
            this.isLoadingCountries = false;
        }
    };
    handleCustomSearch = async (event) => {
        const query = event.detail;
        if (!query || query.length < 2) {
            this.customOptions = [];
            return;
        }
        this.isLoadingCustom = true;
        // Simulate API call with timeout
        setTimeout(() => {
            this.customOptions = [
                { value: `custom-${query}-1`, label: `Custom Result 1 for "${query}"` },
                { value: `custom-${query}-2`, label: `Custom Result 2 for "${query}"` },
                { value: `custom-${query}-3`, label: `Custom Result 3 for "${query}"` },
            ];
            this.isLoadingCustom = false;
        }, 500);
    };
    handleCustomOptionClick = (option) => {
        if (this.customComboboxRef) {
            this.customComboboxRef.selectOptionFromSlot(option);
        }
    };
    notificationCount = 0;
    isMobileMenuOpen = false;
    toggleMobileMenu = () => {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    };
    pages = [
        {
            label: 'Dashboard',
            href: 'acdashboard.aspx',
            id: 'Li_AcDashboard',
            icon: 'la la-dashboard',
            isNew: true,
        },
        {
            label: 'Frontdesk',
            href: 'frontdesk.aspx',
            id: 'Li_FrontDesk',
            icon: 'la la-calendar',
        },
        {
            label: 'Inventory',
            href: 'acratesallotment.aspx',
            id: 'Li_AcRatesAllotment',
            icon: 'la la-list',
        },
        {
            label: 'Marketing',
            id: 'Li_AcPromotions',
            icon: 'la la-rocket',
            href: '#',
            subMenus: [
                {
                    label: 'Discounts',
                    href: 'acpromodiscounts.aspx',
                },
                {
                    label: 'Automated Emails',
                    href: 'acautomatedemails.aspx',
                    id: 'Li_AutomatedEmails',
                },
            ],
        },
        {
            label: 'Bookings',
            href: 'acbookinglist.aspx',
            icon: 'la la-suitcase',
        },
        {
            href: '#',
            label: 'Settings',
            id: 'Li_AcSetup',
            icon: 'la la-building',
            isNew: true,
            subMenus: [
                {
                    label: 'General Info',
                    href: 'acgeneral.aspx',
                },
                {
                    label: 'Facilities & Services',
                    href: 'acamenities.aspx',
                },
                {
                    label: 'Descriptions',
                    href: 'acdescriptions.aspx',
                    id: 'Li_AcDesc',
                },
                {
                    label: 'Policies',
                    href: 'acconcan.aspx',
                },
                {
                    label: 'Money Matters',
                    href: 'accommtax.aspx',
                },
                {
                    label: 'Rooms & Rate Plans',
                    href: 'acroomcategories.aspx',
                    className: 'Li_AcRooming anchor_AcRooming',
                },
                {
                    label: 'Housekeeping & Check-in Setup',
                    href: 'ACHousekeeping.aspx',
                    id: 'Li_Housekeeping',
                    isNew: true,
                },
                {
                    label: 'Agents and Groups',
                    href: 'actravelagents.aspx',
                },
                {
                    label: 'Image Gallery',
                    href: 'acimagegallery.aspx',
                    className: 'Li_AcRooming',
                },
                {
                    label: 'Pickup Services',
                    href: 'acpickups.aspx',
                },
                {
                    label: 'Integrations',
                    href: 'acintegrations.aspx',
                },
                {
                    label: 'iSPACE',
                    href: 'acthemingwebsite.aspx',
                },
                {
                    label: 'iCHANNEL',
                    href: 'acigloochannel.aspx',
                },
                {
                    label: 'iSWITCH',
                    href: 'iSwitch.aspx',
                    id: 'Li_iSwitch',
                },
            ],
        },
        {
            href: '#',
            label: 'Reports',
            id: 'Li_AcAnalytics',
            icon: 'la la-bar-chart',
            isNew: true,
            subMenus: [
                {
                    label: 'Housekeeping Tasks',
                    href: 'ACHousekeepingTasks.aspx',
                    id: 'Li_HousekeepingTasks',
                },
                {
                    label: 'Guests',
                    href: 'acmemberlist.aspx',
                },
                {
                    label: 'Sales Statistics',
                    href: 'acsalesstatistics.aspx',
                },
                {
                    label: 'Sales by Channel',
                    href: 'acsalesbychannel.aspx',
                    isNew: true,
                },
                {
                    label: 'Sales by Country',
                    href: 'acsalesbycountry.aspx',
                    isNew: true,
                },
                {
                    label: 'Daily Occupancy',
                    href: 'ACDailyOccupancy.aspx',
                    id: 'Li_DailyOccupancy',
                },
                {
                    label: 'Accounting Report',
                    href: 'acaccountingreport.aspx',
                },
            ],
        },
    ];
    notifications = [
        {
            id: '1',
            type: 'info',
            title: 'Welcome!',
            message: 'Your account has been created successfully.',
            createdAt: Date.now(),
            read: false,
            dismissible: true,
        },
        {
            id: '2',
            type: 'warning',
            title: 'Storage Almost Full',
            message: 'You have used 90% of your storage. Please upgrade.',
            createdAt: Date.now(),
            read: false,
            dismissible: true,
            link: { href: '#', text: 'Upgrade now' },
        },
        {
            id: '3',
            type: 'success',
            title: 'Payment Received',
            message: 'Your invoice has been paid. Thank you!',
            createdAt: Date.now(),
            read: true,
            dismissible: true,
        },
    ];
    showMegaMenu;
    render() {
        return (h(Host, { key: 'be5848317671f75538c843384677a3ef8d4f1cbd' }, h("nav", { key: '847760ec0690a64fa8dce3bf843d0cb15d410277', class: "modern-navbar" }, h("span", { key: '3c367195304a689c1ef59ac2b5258fb071c9aeaa', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '5d1c054b1ded809a2f8cc32de07a0eeb1170f6f3', class: "navbar-container" }, h("div", { key: '585a77b1df486592f7c45c8f63af9a2ddcae955d', class: "navbar-left" }, h("button", { key: '5d6370bea647afc0cd1257de840bc9d168120823', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'ac9403eead3be784a31f21367c4ebf5c9da58cc1', class: "hamburger-icon" }, h("span", { key: 'f9d40a8d73dd314a36c05be41c63becd08a78e69' }), h("span", { key: '477ab7a610fc0e59ead211e7ddf8298972e6202d' }), h("span", { key: 'cff0400de97f8fa0471a8d825e176b2fe55b45b2' }))), h("div", { key: 'baece2a4b7e45f1ee1c7ce1f99f25b7fc4b094ff', class: "navbar-brand" }, "Logo"), h("div", { key: '7ac920c904dc22b090368a654ef00f80a088eaf9', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'cc18993fd0e9b2d516103d2881801d1dc7fe76a3', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '3c13c3ebc24ed04cbac175186d7bb1dc7352952a', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'b860cf02b515298eee819d90c394a3cbedf4e2d2', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '7caffc1aa0fdfc4e3cf8e10b37f0105363b8c198', notifications: this.notifications }))), h("div", { key: '19a51dd8692fc57b587979688f588cdce0cb1652', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'ba85328025cdb9847fb60cc7494062a742a49cbe', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '2e76f1cf11aa0092b557d75eecbd4780590af447', class: "navbar-right" }, h("ul", { key: 'a184ee7a3f9efe193d4e929e6685aecedeab4e29', class: "nav-items d-none d-md-flex" }, h("li", { key: '918b7e7ac3bf694ac8b6cf0fc036ff0a11562d3c', class: "nav-item dropdown" }, h("a", { key: '97331db0346d4f711df57cb20717d90a438da32a', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '1a7b0409f17f430735751299dbf5f740ae3b2c19', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '8e4840afdc50e87eeb4c1f809327a84a3faf37dd' }, h("ul", { key: '3c2ba06e94d007c4e03b2e589e5daffe0cfd91df', class: "ir-mega-menu-column" }, h("li", { key: '3f0933ec0fbe34d490d7fa5bdadcb38833afc743', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '727cee126ab9579f03edf492b630a146526a86c4', class: "ir-mega-menu-row" }, h("a", { key: 'e5461d2125beed1c4ed3fe16124422ca27be1714', href: "userinline.aspx" }, "Users List")), h("li", { key: 'f16a8f2e0df0e1af00ace89be18fc3c6da4d72e8', class: "ir-mega-menu-row" }, h("a", { key: '3cb3fba15a4651665c074ac8842c68c5d7523511', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'bf1027a4f463d45c32947f0d1161ca34717b23b3', class: "ir-mega-menu-row" }, h("a", { key: '9a49458a6e4dde56f4b0c21b6c1edc97af5a7a9c', href: "countryinline.aspx" }, "Countries")), h("li", { key: '7d6b5f6396da04ee4a27c981ccb0e13d961c8962', class: "ir-mega-menu-row" }, h("a", { key: 'd49792a630afc6a47bc9bebebf273c3f61fcdb9e', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'c83e21cb3c3580292be960b7f07354301c944b35', class: "ir-mega-menu-row" }, h("a", { key: 'ef2a486b6421227c6c2cfd42dfda6c80f6055c25', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '41365874e77abc9df68225fdad9883ae8448e14b', class: "ir-mega-menu-row" }, h("a", { key: 'b5b97f68bcb45bf1b9682eb05a3f64f41b641819', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'e8d5bc86e8b2eae52a1d01b546448a8b65aea76e', class: "ir-mega-menu-row" }, h("a", { key: '5b0e0caa61949eccc5ef47329a53a928450a791d', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '2062026c9b871bf7f8db331f4a69a3621a10692e', class: "ir-mega-menu-row" }, h("a", { key: '3e7a882df6a8dc95189ecc92050ca64e0aa8a7be', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '2547298b4ebddcbfc2bf866eb206bee691f20862', class: "ir-mega-menu-row" }, h("a", { key: '4c9b60c928f8122c7fa2c303323c1eeefc845514', href: "foodinline.aspx" }, "Food")), h("li", { key: '000296d6e1b8d184e7293708293e13adf814b84f', class: "ir-mega-menu-row" }, h("a", { key: '9de4dc6de744ceca9c7f97be9ae4525b92edee96', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'eff9c981a5a880a613f6acd1a5b935d5d5739db4', class: "ir-mega-menu-row" }, h("a", { key: 'e73f92a408a5a67e3dcebead2a298a0626eaf70c', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'a5aeece46a9044b475da3555ffc71df9cddbc6cf', class: "ir-mega-menu-row" }, h("a", { key: '0c74cb0f164f52dd632e85ff4439e8e6b004e548', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '9c4d63b45fefe3af1b3a6cb1ccb9ad28dfefe230', class: "ir-mega-menu-row" }, h("a", { key: '0d5ea185530f044db612f6ab819f8011e20a7c15', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '0cabfd34570345bdfd39be2192b724ab50b4803b' }, h("ul", { key: 'd69b5dfbc7df601ff9dada18edb9fef764b6415c', class: "ir-mega-menu-column" }, h("li", { key: '3f393df1f3f8d89460155cf79b0d196faf80a3e4', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '4f5d703be429755c07d3157bc21648820962c1a8', class: "ir-mega-menu-row" }, h("a", { key: '523e6704e2f831e429a104627417f40db9ac53d9', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '5a7af0a37f13416796482cb256ba10ff9fedea46', class: "ir-mega-menu-row" }, h("a", { key: 'fa1bdb6193705512efa1177690a3b9a71c06b98f', href: "aclist.aspx" }, "Properties")), h("li", { key: '360d20e71311d4be626ee666c52d297742bcd4f8', class: "ir-mega-menu-row" }, h("a", { key: 'a70fc287a5de27b8e8dce5f491564b05ccc2c4c1', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '97b45e52d9f9747c3a33b3910b00183d000a5dde', class: "ir-mega-menu-row" }, h("a", { key: '7eae8db670c041337d655f469de955f1cd2919cd', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'fd54e97d58c9478ff11319e2f6253409d7a5c7c9', class: "ir-mega-menu-row" }, h("a", { key: '8d01279116896584b4530833d14b562239830fe8', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'd2465a7797fe044cca67135dae2387d99d221186', class: "ir-mega-menu-row" }, h("a", { key: '37630b6071da4f565f8c709cc856517408f644bf', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'b29671cf7259bd16d7e8da0e8b93f017063def26', class: "ir-mega-menu-row" }, h("a", { key: '16fa84717574d91bbac63de9503eb03de1b174fb', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'eef2a600e682724a9058f53bbc3ac12f2a3ed1b7', class: "ir-mega-menu-row" }, h("a", { key: '1e9e1b7e5ae360a7f3cb1ce5dddd611f8d7805bb', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'bc1adcc7b6883527b1c5048657119ab3a9e1b0ab', class: "ir-mega-menu-row" }, h("a", { key: 'c5351c802f6589cbe1da476c96207fdb906e468c', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '6e5d7edc8b30c0863b26d17fe1dd7f84a7a29019', class: "ir-mega-menu-row" }, h("a", { key: '6a1c7ce740f5c34f9bd69da802cbc24f30d364f3', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'cea7530ef46e02795aa12291f22b7244a8759227', class: "ir-mega-menu-row" }, h("a", { key: 'ff7f7d27768695f4eda96ae5fba9b4bf367841c0', href: "billing.aspx" }, "Billing")))), h("li", { key: '071607d56d53d2a386f533236f867e3fa55a35f4' }, h("ul", { key: 'b3ce2b9b8a894f4e46cb9f03296c09fe251e74ac', class: "ir-mega-menu-column" }, h("li", { key: '0e913162f73cc0e19274da0b1ef2e53f1f9b5473', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '0beb02c364d96bb82ae5256ba6d7c0ba20d8ca58', class: "ir-mega-menu-row" }, h("a", { key: 'abfac2903702750edd4c67909b33dd612f04a136', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'df81dabe7de30d98cc3683036e8c93c6d64966a5', class: "ir-mega-menu-row" }, h("a", { key: '5a529151c1d1af031c5c94387c80ef66e1dedf53', href: "poilist.aspx" }, "List")))), h("li", { key: 'e111f6dcbafaea5879dc1d46d1a6af97f3a9c9cc' }, h("ul", { key: '07bfd33048a7c226148564a234a7538de0972fa7', class: "ir-mega-menu-column" }, h("li", { key: '787ddc9557f9ccf1404367d5805035673f7d6f69', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '9be148770ed281c4d50b7a0c61901df43686fdc2', class: "ir-mega-menu-row" }, h("a", { key: 'f1efbfb1203133d21a4c6fe5bcce6c34b89cbf53', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '5b5b5b8f166c07865bf7b971adf755a32b820608', class: "ir-mega-menu-row" }, h("a", { key: 'cfc9b812bb0a38d4217a3269c429eab37e312c87', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '2bfa0bc74e2b15cfb7338eb7e6880925906c5d23', class: "nav-item" }, h("a", { key: '1ce1e3e10e3b0f861a76d8fbb47154e859d24998', href: "#", class: "nav-link" }, "b")), h("li", { key: '7a04a51ee9f106a370a68e8325aead648486dc58', class: "nav-item" }, h("a", { key: 'ad36bdc885738d8cfae956fe6cddcfcaaebc2dc8', href: "#", class: "nav-link" }, "c")), h("li", { key: '81ac713a1e42a2f6aa4508ca862e73e8816ac5c3', class: "nav-item" }, h("a", { key: '53a10b1d285686fdf485223269c056a5ac4dcb02', href: "#", class: "nav-link" }, "d")), h("li", { key: '1c5a2aabd9ab41e12ba5f35c911ff88607cf8ea2', class: "nav-item" }, h("div", { key: '4bcd2002e4bee6fdb46ca91e5af50c1ea11586db', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '94f72ded1a0526f43efd20831d9e6ba163bbc267', notifications: this.notifications }))))), h("div", { key: 'd1f5d181c25a9773b1df32ed651dedf7119ed6e7', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '0e63b6cdb109fb051eba3b4165a9d4c4f7b9bb80', class: "mobile-menu-header" }, h("div", { key: 'd811f805c5dfaac2dfa3951d7830303890850940', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'e6459512b4aed01076f6d8e6b7bc85b10ca99cab', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '2fff188a1804cfd94bf7e64584ec1eeea6416856', class: "mobile-search" }, h("ir-m-combobox", { key: '8793ff66af25302709c72d00733db6dda7ad2fe9', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '79f78c6369aef5a190e6d211d7f1ced7e79b3a7a', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '48861fd06c82520750784c7fbdf25913dfd9d539', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '6b1f9df563728f138535b7d7259ceddf08ed406a', pages: this.pages }))), h("section", { key: 'c2596741d08ab77829dea1de29bf096a8b44f920', class: "p-2" }, h("div", { key: '50f8f2fd356dd87937c726bbe68af00183cb2f5e', class: "row g-3" }, h("div", { key: '992ad800ced5464d6b9c8c213d0f1751f6ef4085', class: "col-md-3" }, h("h5", { key: '7c4b0418a9f27ec15bb46ec9d23db02ac00708fa' }, "Static Options Example"), h("ir-m-combobox", { key: '6d3442540722193f4da7d9a205615575652fbda6', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'c0407cc15ab0bd5c998ea29c92255751aedb075a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'e2191268e3690529851ee04a63e7cdea27a44374', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '04521bafb778d1acba11f61bd65ef8d4f9051149', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'b02f07216266f6d8409aa59dc82a576b2f1f00cd', class: "col-md-3" }, h("h5", { key: '8b792e2812813a1420efe72c1bd4335b5212603a' }, "External API - Countries"), h("ir-m-combobox", { key: '2c2ced8e3ecda53f8ce15e588504cc14ae140800', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'fea3dc08183267ed6ea63b34f203568a1f0a5427', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'c370c62a6d78f5e8e9b2585388a87918cf97b0ef', class: "col-md-3" }, h("h5", { key: '20dbc4b4add04664750db9d18cfb8c12a5ea2dc8' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '5428d0f94e7fba7f8ceaeb62a220060db4920129', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'b647a50f423fa9255861d6399ae5d795ed000fdb', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'd3d8c01203f051458baf6dcacd39d0e36af393c2', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'b72ddf45cf50edce3d050340e6449cb31f876b22', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '9c19231cd492078b74c03d0c11cfb173394ddbb0', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'a3b53f3fee712f2eb77ba56a84100ef8a2d19756', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'c03eb2580dcde8c93d235c225773924d94226768', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '4e65f26a15648c15f720c6f5e09a3936b40b4e18', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '65867229b71d152f0ceb73d072b488a991673e3e', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '4d827e8d3fd979abb93a880bf99ba108055f638d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '1a2762fc95260e06148f5010fe7650a94ab47d3b', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'd866e11ef68c64a2309a356c823f02f3860175b6', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '4c6837a1fecedeca74e74e763bf29d03313c1d16', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '6e9dcef457eaf8e130550ad33fcb8a10a4d95d71', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'e40e431c0f1640df27ee465025c9efed5023c837', class: "my-2" }), h("ir-select", { key: '0b7027e1938fd093ebae9abb5acb0f69b9d9f281', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'ab6ba97978b84378dd99251d1035fe66ed8461af', class: "my-2" }), h("ir-select", { key: '8298c20c154ec4c13bc885668d95a45b4d43e875', data: [{ value: '1', text: '1' }] }), h("div", { key: '6865991c5c3892afed932d1e232a32e2f2808e7c', class: "card p-1" }, [
            { id: 'REQ1000', cause: 'Reservation deposit', amount: 363.02, type: 'Credit', date: '2025-08-12', reference: 'INV-2025-0812-001' },
            { id: 'REQ1001', cause: 'Housekeeping fee', amount: 355.45, type: 'Debit', date: '2025-08-16' },
            { id: 'REQ1002', cause: 'Mini-bar', amount: 360.49, type: 'Debit', date: '2025-08-08', reference: 'RM120-MB-8842' },
            { id: 'REQ1003', cause: 'Refund – canceled tour', amount: 294.34, type: 'Credit', date: '2025-08-16' },
            { id: 'REQ1004', cause: 'Late checkout', amount: 80.97, type: 'Credit', date: '2025-08-04', reference: 'CHKO-2025-0804' },
            { id: 'REQ1005', cause: 'Airport pickup', amount: 346.6, type: 'Credit', date: '2025-08-17' },
            { id: 'REQ1006', cause: 'Room service', amount: 430.52, type: 'Credit', date: '2025-08-05', reference: 'RSV-7421' },
            { id: 'REQ1007', cause: 'City tax', amount: 89.39, type: 'Credit', date: '2025-08-09' },
            { id: 'REQ1008', cause: 'Laundry', amount: 49.93, type: 'Credit', date: '2025-07-30', reference: 'LND-20541' },
            { id: 'REQ1009', cause: 'Spa treatment', amount: 469.32, type: 'Credit', date: '2025-08-13' },
        ].map(row => (h("div", { key: row.id, class: 'payment-item' }, h("div", { class: "payment-body" }, h("div", { class: "payment-fields" }, h("p", null, h("b", null, row.cause)), h("p", { class: "text-muted" }, row.date)), row.reference && (h("p", { class: "payment-reference text-muted" }, h("b", null, "Ref: "), row?.reference))), h("div", { class: "d-flex align-items-center justify-content-between", style: { gap: '0.5rem' } }, h("p", { class: `payment-amount ${row.type === 'Credit' ? 'is-credit' : 'is-debit'}` }, row.type === 'Credit' ? '+' : '-', "$US ", row.amount), h("div", { class: "payment-actions" }, h("ir-button", { variant: "icon", icon_name: "save", style: colorVariants.secondary }), h("ir-button", { variant: "icon", style: colorVariants.danger, icon_name: "trash" }))))))))));
    }
    static get is() { return "ir-test-cmp"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-test-cmp.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-test-cmp.css"]
        };
    }
    static get states() {
        return {
            "dates": {},
            "selectedStaticOption": {},
            "selectedCountry": {},
            "selectedCustomOption": {},
            "countryOptions": {},
            "customOptions": {},
            "isLoadingCountries": {},
            "isLoadingCustom": {},
            "notificationCount": {},
            "isMobileMenuOpen": {},
            "showMegaMenu": {}
        };
    }
}
//# sourceMappingURL=ir-test-cmp.js.map
