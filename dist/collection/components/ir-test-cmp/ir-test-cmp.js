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
        return (h(Host, { key: '9edc0b9009cdeae58fa11cef34c2a6843aec6b7a' }, h("nav", { key: '91889f810f157df3dee4f9cecfce04952dff1998', class: "modern-navbar" }, h("span", { key: '57757ec9a9187a0e175905e26c8c0c0f6811ca11', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'e772695a6c10cc0f7cfa4326eeef2bc37eeb48ed', class: "navbar-container" }, h("div", { key: '0c0755a2a1900b6c0c719cd01596332d42c96920', class: "navbar-left" }, h("button", { key: '0be689b27e6791ffb5480476e941c7e186f01f5b', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '2cd3164633fc8805c0c50823a70e3438910798d5', class: "hamburger-icon" }, h("span", { key: '2c3762efbeb83ba436532b104c3b1910f739460e' }), h("span", { key: 'd382c64b3e23f5f10a306705bfe499df72a8f044' }), h("span", { key: 'a00540e9756caaad14561e94ed934dd110e0b8b1' }))), h("div", { key: '7059c395848c463d3ad876e74090e74d35bdf408', class: "navbar-brand" }, "Logo"), h("div", { key: '1e88dfe4d58b088f5bb74294ff5a5657f1fb2814', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '0f4fdd659f8e1c55b73243184707bde28e7c8ca8', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'd25054e6ac64308d288ab53fdc545af373b26627', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '580d54bea06f16e068118c6e7ecec7aea6244e9a', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'fdb6d157795bec1fda376f19ee3eabaa8378bf15', notifications: this.notifications }))), h("div", { key: '4b49e0d0e33618719fd031cb224eda96a6854d82', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'c694e3ed75b3b5d6564a7203c4f953571f77788d', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '69ab239b5b90c3a7bad4c3ba664e46c7e4239200', class: "navbar-right" }, h("ul", { key: '1c75ee8d4967c7cb9f149ad0fe05405d868f320b', class: "nav-items d-none d-md-flex" }, h("li", { key: '66bf5cd22415b231ab743d25d073aea3628ec801', class: "nav-item dropdown" }, h("a", { key: '3122a3ee4d22828e3ad18c7e4a7234789367e7f0', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '0b7108a62670c2fd7939b7ae7c24d95831b9ff58', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '362ebcacbfc8c900933fcaf72e1b8bbdedbf5345' }, h("ul", { key: '41172d9212711976f8e1a01f297c956278d91723', class: "ir-mega-menu-column" }, h("li", { key: '4978d74548f929b13281829d672ac67a76601b8c', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '8d399ba4acf6bf820de2650db8a639d57fe501e9', class: "ir-mega-menu-row" }, h("a", { key: '31de6233184548fd65ae064f99c4a74040a7139d', href: "userinline.aspx" }, "Users List")), h("li", { key: '687c14c6c82b63e30f3a8e322c756d0d7e6d8449', class: "ir-mega-menu-row" }, h("a", { key: 'fb3317ba87baace2b0561c4f538cf18c4956568f', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'a50f3d388d9954273a268f05f16ba400e7344c81', class: "ir-mega-menu-row" }, h("a", { key: 'beb07ad3c9417e06e1455f5e6f460558dce9baef', href: "countryinline.aspx" }, "Countries")), h("li", { key: '10fe1ed756fa577b8ddcae06af2f18bab2ebd6aa', class: "ir-mega-menu-row" }, h("a", { key: '18af0f76b4c8246bbaa4561a27fc8c6efdb303b9', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'c0a954ca91cd66fd768940153a486bf17b565406', class: "ir-mega-menu-row" }, h("a", { key: 'f9bd8a686155773e142f28c119209f10207b3150', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '526f8192a0c4b4c0737dac0840488e23e1794e9d', class: "ir-mega-menu-row" }, h("a", { key: '61c5b0bae1803a7718ca01e1e967f1b8a457bbd7', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'bee8330c991e4334818634d2a6be084bf24d9fe7', class: "ir-mega-menu-row" }, h("a", { key: 'f14e732229b43ca90dfab34dd028c84301c13668', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'a58a542f0acf9d35ace792bbcb8eece6e545c3ab', class: "ir-mega-menu-row" }, h("a", { key: 'de09cd96237d800003560fe0230eda5e86ff8541', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'f4a377fa45049c7a7b5c6adbc30b37c7f8ba0aae', class: "ir-mega-menu-row" }, h("a", { key: '30f8255fb213e11ee54fff3a9bfe9f0dbe01a97a', href: "foodinline.aspx" }, "Food")), h("li", { key: 'd88595d5f65d2f3656e8519d49285401c9537784', class: "ir-mega-menu-row" }, h("a", { key: 'fbc77ccef03f454f31812bbbf9ee1816c27e8c58', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '26292cec6f066ed4a6635f42c2ac46f1fe8e2174', class: "ir-mega-menu-row" }, h("a", { key: '21325c67198f31a8d40a06a714795c8318f2a4c1', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '50eb40997acf26fd983f5c8fa5ee80dc2974d9a1', class: "ir-mega-menu-row" }, h("a", { key: '052cfeca02893b6525d70ac1ed7ab3777830f14c', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'ed3747b09d6be625d660d7f909869124565dd54d', class: "ir-mega-menu-row" }, h("a", { key: '4ff38b6321604b7f39d977501c1c1110b6938ecf', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'e48aa75dfc82c455bb7868f3738edcdfa052b497' }, h("ul", { key: '40da6f718661bef48e02470dd8c5a7372fef3d3b', class: "ir-mega-menu-column" }, h("li", { key: '9c31468e00264382b69e88c5faf548b0343a3227', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '9c96687b72aa6b3c96e486ab02375dbb1929012d', class: "ir-mega-menu-row" }, h("a", { key: 'e955dc88e8543b4b3b60c1d2a4f4a1533702be50', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '6afc738f6470636fefab14b3b3fec0f137b37b85', class: "ir-mega-menu-row" }, h("a", { key: 'bd24e0756387d6788cfd5604a398b5559eadbd17', href: "aclist.aspx" }, "Properties")), h("li", { key: 'b9316a823de6a8e93dd94b4f7ca1bca25b7fed7a', class: "ir-mega-menu-row" }, h("a", { key: 'af2e7c2c491576d1cd97c4b02f91cd171ef90056', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '51bdf66d0a21a83496848ff9fc55c6538affe91a', class: "ir-mega-menu-row" }, h("a", { key: '384d3ab75b8028b82999641880a984e99127ae79', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'e17c48c1a29c884a2db70d9f50dc39465e34e729', class: "ir-mega-menu-row" }, h("a", { key: '11388ea99c36e6c62c9b1cb1a04d9c6c8545566f', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '8d6ac545dced23e37900d6c949fa84225afbfa38', class: "ir-mega-menu-row" }, h("a", { key: '0b81217861821abc634694e5863a77d2e452d0b2', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '5d52076c2400d6e226071fad4a53e51f8fecd8ca', class: "ir-mega-menu-row" }, h("a", { key: 'fdeb79c94461f99e756e19f2969ac608ecb2fd45', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '0a0d49433f6fbd5c5da3554d17043e7a8f742306', class: "ir-mega-menu-row" }, h("a", { key: '8132c12e0e2bc94df14e8cf1c6f0e88b0968abf2', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'f75db6dd36bc280e7cce132598c7dbf2651cb30f', class: "ir-mega-menu-row" }, h("a", { key: '5a019999ce6bd405178d9036dc61bd15302ac490', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '9df7cf36d89bad283c6802a305c1178f99572ea6', class: "ir-mega-menu-row" }, h("a", { key: '0fe69cbfa70116051ed92d43fab9b3cfbabdcd48', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '83bc38180fdc5230cf8aba18be8df9b1ff355201', class: "ir-mega-menu-row" }, h("a", { key: '639fc093fa6c88bd9f70c8d908ae85d2ea9b0a18', href: "billing.aspx" }, "Billing")))), h("li", { key: '891ba23f4943c642d41586ddfb5b90d190af83c5' }, h("ul", { key: '3fc5fd7cea4ff7b15819fec8d658d451de80768e', class: "ir-mega-menu-column" }, h("li", { key: '9a38d0b50a3bceeb86bae025c2fcb2c430dc0975', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '06326c016e6b06d42bf84722c7d458c902ef0e0d', class: "ir-mega-menu-row" }, h("a", { key: '713bf310f2f8cbc1d1a5afe831c88246bd0e4d12', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '4f760c8d7c2576fa668511b1c7e91368afbb4101', class: "ir-mega-menu-row" }, h("a", { key: '9a0004daecc23ee5ac1d9d4bad785d3e80d92cfa', href: "poilist.aspx" }, "List")))), h("li", { key: '01702998200b375da935be02cd54056c26d7d468' }, h("ul", { key: '6fee32e6e0e5dc43761d7a024b8589cd61da1b9b', class: "ir-mega-menu-column" }, h("li", { key: '6b48ef7a13efda06f4440aa13600f685e92124aa', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '9efa32f1e16d375a63aa657f433167031588a175', class: "ir-mega-menu-row" }, h("a", { key: '638495a944474769c8e60d8c82aac120b0c492e0', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '6e0fd4fc00b8e9436aa968f5ca06c4aedececa0d', class: "ir-mega-menu-row" }, h("a", { key: '53958f2f43d54d178671c615cfc4b9db9149f753', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '537f8964298df67f39c237fc663c42fdd4438e24', class: "nav-item" }, h("a", { key: 'e83e250bcb7709a7277d5f851062d7af9e20dccd', href: "#", class: "nav-link" }, "b")), h("li", { key: '40d2ecfa2205f96c63194a720541e1c1f00a0cd5', class: "nav-item" }, h("a", { key: '5b6fec4462b917e56e11513ed121acd06ea5cf4f', href: "#", class: "nav-link" }, "c")), h("li", { key: '0b977378c3550ecf8d1541ba37685249c6f3c86f', class: "nav-item" }, h("a", { key: 'f6d9c833559682653adc9c480f5abb6bfc8e51fc', href: "#", class: "nav-link" }, "d")), h("li", { key: '9f8c14e761260634d09b18ab9819d29e7cf41704', class: "nav-item" }, h("div", { key: '3edfe7e3b40cccc87af9bd5d4d1fdb0ed70601de', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '2b53fb353f9acca383b02bdf439edfa304563f64', notifications: this.notifications }))))), h("div", { key: '33f361582e3e18043d313279823b31fb2f7367e1', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '9b2c3c7fd8dc9307f012802a747637a4e9c9abb1', class: "mobile-menu-header" }, h("div", { key: 'f9a2b7771c8bb342245a33bfe6fc8c8822462561', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'facb3a265f93b7ebd8884e9264521d4178392e1f', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '9c4cee9dc01d899c7396bc732d1b98b86e997106', class: "mobile-search" }, h("ir-m-combobox", { key: 'a840e30e9758d9cf50817d6abd9245e73a7fb4f0', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'fbbc111dc974982898d830c63d236a21c20282ba', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '0caea6cb53eb517020c770d2b7906e45079cc731', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'fc084d59d8137e61c935a4cc6a2d40044c030152', pages: this.pages }))), h("section", { key: 'ea31f0fbfa5d585faf42b0b59efb2c9dc21163c8', class: "p-2" }, h("div", { key: 'dbfb9c1a58ea2a04d89181d77de4d32c58fc9b54', class: "row g-3" }, h("div", { key: '88232fb6ffac447dcec1fa469e145732df0256e1', class: "col-md-3" }, h("h5", { key: 'f1e730179a0ecc464500ac246ad697c398c54670' }, "Static Options Example"), h("ir-m-combobox", { key: '5e2260f5b1dccf55fe242753dbd75199b2e67b2b', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '0e6c53f47e6c457c923f33bd8dfe21cb2a23ad54', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '2e8524246234cf9449b94831e9669291ede3aca4', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'b3e8090a5a58d3cd20e0c69445b30a8a3a5ca8a0', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '62b2c99363c0535357d7ab76f9b20daf86028797', class: "col-md-3" }, h("h5", { key: '035ef04dbbfac1342c120fa78b0cbd4e29dace6e' }, "External API - Countries"), h("ir-m-combobox", { key: '402ace5f0c802ce4d38f52f0eabd0d7d2538b73b', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '5ecfab122018c98ac9064279487c25eae88a0720', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'c65bb4b21957928db3f045ea3f98fcc28c19337d', class: "col-md-3" }, h("h5", { key: 'd2f9c1f91fa6e7fd4df38df1316d52ea28fcb833' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '54f8072b46fa6a2bc9e2cf2616cba58e75b93dcf', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'bae95c5259b6ea924acefc808c2b4b5a11136707', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '01744594f176a18eb04308383260eae50ce644cb', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '2aeeed7f1997bc6696c30d1ca80cf0443c17f29a', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '192bd0897caf596231429e24f8f8d327eea510e8', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '74e96c13e76c4b5aa2a1490b81a25abd9ec902af', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'b67273384238454a2d4d9d9209ba8608278b5f65', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '15933720f44352c3045e01544a7477048b956557', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '3181a06ef91e6e4504adaf092442bbc58f6365c7', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '3f9bdf818ad312ceae3384d29113bc28ad82d290', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '2c8b101d4b5588e7bb7747ceac25f753c5a92087', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '64c38220bdd641af82646ede5f47b4a2ad8860e3', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '808d57ac99beb23c078c2a9726ee3bbbcf9f924e', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '72051ee4f3956ad805b79f12f9c31bc13723faf2', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '07404e69cc7f9dae632d7b96490111f18ce710ad', class: "my-2" }), h("ir-select", { key: '28c887e5178b7f2838a7c005ed616698965a50f9', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '350b07e3d4b2c9a270f700d805d0498f662fa63e', class: "my-2" }), h("ir-select", { key: '602fa52202e79822e14ed7c827e920f7681139d4', data: [{ value: '1', text: '1' }] }), h("div", { key: '2aecc411bcbba72091e85415969bd9fe36075b88', class: "card p-1" }, [
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
