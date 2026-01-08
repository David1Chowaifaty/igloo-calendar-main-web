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
        return (h(Host, { key: '474044e23f386f7f209d690ac3c520f7075ea9bc' }, h("nav", { key: 'f08aac1cec80a455ae55ccb06192307c066fe880', class: "modern-navbar" }, h("span", { key: '116e1fd62d7faf9d03ae5e6ea43ea83f02b0dc0a', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'd8671d69626793b17cdf12e64d070f687eab797b', class: "navbar-container" }, h("div", { key: 'c34bf17d69f0cc7873159d0a7a6f4416df954955', class: "navbar-left" }, h("button", { key: 'bb15c0f2fb1b0cc6ef21909950785b9b1d092b09', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'b0d981b17a8fa86d400d84b808af396ec9b8fce0', class: "hamburger-icon" }, h("span", { key: '295a6fbcffb68ce060adc0fa7b50a52788a4b0ab' }), h("span", { key: '9c4f36f6ed577c73cfbaec06182c30d66d1241c7' }), h("span", { key: '33256683940f5408a1aa2b9359260ed9bf4eef79' }))), h("div", { key: '9136a2c0e9311ade9dbd8695540a642a4904b655', class: "navbar-brand" }, "Logo"), h("div", { key: 'eb1b06378374c5746f2dc15c8b1119a7d74058fd', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '5eeb85e68b6efde4ce25c4c29b3e1cad2b511c46', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '416461c955a9a33047865257a9a24bdf7fbc8815', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'dda36ac20542545510879236a1f10e20caa7d40d', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '7f590ee7e67b8abbeb6d44392f534a591cd66560', notifications: this.notifications }))), h("div", { key: '5347c757eaf9643c30338d4c86f0ec9656dc631b', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '65a24b44feffca42cf8992bb544fcc1012f4599b', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '7ed49f262f46c6f7b26f1fd62f8c7244355381da', class: "navbar-right" }, h("ul", { key: '6d46ac4bb842bbe2381a76fdc8eae766324cdfcb', class: "nav-items d-none d-md-flex" }, h("li", { key: '7346e90e376d8bbf197d8d41744e9ae1741bc6cc', class: "nav-item dropdown" }, h("a", { key: '30371e4173852244613023da26207e441a14a8d1', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '00cedb0dc4e40efc4d927836cbdaf56d539cbcb9', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'd6a47ca7c23ddb27eb06c2768599477b0666f585' }, h("ul", { key: '810100bca4482e898fd3db64a2dd98628e7a9864', class: "ir-mega-menu-column" }, h("li", { key: '0c4b1f4bc9542762a262b33ad686f8323072fe35', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '8ca858b18d8d3b339fec22314bfe835cf71a6a78', class: "ir-mega-menu-row" }, h("a", { key: '26a3fc6a12cf912ec8bcec4352b7bf181ac2330c', href: "userinline.aspx" }, "Users List")), h("li", { key: '949a9843b396ec70ecb6d6e45ba44493eb581b10', class: "ir-mega-menu-row" }, h("a", { key: 'd0efd3193652760e7fa9d8f58bc60577491e050e', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '3eb8c72967b646500ca4b623e1aeb4e419af1e42', class: "ir-mega-menu-row" }, h("a", { key: '7245ecee4abc8a91acffd1af926b7fcf3d304bc6', href: "countryinline.aspx" }, "Countries")), h("li", { key: '54db3a678f13ab26da2e03a876648a81aae9056a', class: "ir-mega-menu-row" }, h("a", { key: '81364ea3280fd58c882ebe298c73ed4ee71f111f', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'e6503ab1fafa4d11ae257044e4497b782cd6f4f1', class: "ir-mega-menu-row" }, h("a", { key: '397609bf7eb6b37ac4adb58ffb707b2759fc873a', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'acae9ca534a4e9f01b0cbf2937dd8eac84333c43', class: "ir-mega-menu-row" }, h("a", { key: '3f508ffd3db65f123f771ac98e89be877233c18b', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '77869b7a15f92b906a2ec48210e8e76dc5c420bb', class: "ir-mega-menu-row" }, h("a", { key: '09096d4c710da387fe6cf207b783262ce940c90d', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '018626d0423714d61b95e1503c9639985e06d4e2', class: "ir-mega-menu-row" }, h("a", { key: '6eb228989479776f73f72865b1e75dd8613f2b72', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'b15cf3a439c1988e7df0f1735f20a53b241d415e', class: "ir-mega-menu-row" }, h("a", { key: '998111b08d434da02b25e594f6bff2b63fc1be9c', href: "foodinline.aspx" }, "Food")), h("li", { key: '049ad88885273c00a9748bd8901b63feca954759', class: "ir-mega-menu-row" }, h("a", { key: '491c18dad8a55914dc8ad354136bdecb081f1ad5', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '1887978d3c27084cb3a985de891ea4c0ebe1ff98', class: "ir-mega-menu-row" }, h("a", { key: 'bcf33c482a5b6264e0fbb945efce7988261010de', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '67b23f7c05f184199e586ef60e47e70bf3459b03', class: "ir-mega-menu-row" }, h("a", { key: 'fbda63157bafd6d738160d2bbb82ebe09ed46711', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'df8af23cfa0fe7667df1e7b3bebb1d75cfb59656', class: "ir-mega-menu-row" }, h("a", { key: '337ea66338fd7262fa3e000fb07cb055e594be3d', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'a6877d8958e5de7cc639e98a504ad39910d6b083' }, h("ul", { key: 'a9c5ace9b375843e71197081a8a3e5756acb1a8b', class: "ir-mega-menu-column" }, h("li", { key: '6725cfc484b1ecffd84aa32133b3a058a49d941a', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '1492a08fbc43da7bb20a78ed0534bbbf8a53221c', class: "ir-mega-menu-row" }, h("a", { key: 'ec9180f94a2b0cf7ed6b1dd061f77f4c2f1f84dd', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '182c45af8adb50407cf905d65eacc5b303f490cf', class: "ir-mega-menu-row" }, h("a", { key: '96262d8c4de2108842437bfdf9ba566a5dbeb6b9', href: "aclist.aspx" }, "Properties")), h("li", { key: '729ef2ae0425c9c749e5d5e96346a03ad9856d9b', class: "ir-mega-menu-row" }, h("a", { key: '32dfb0c8be744eb3d8179b5eaf29f150a61464d2', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '82c29f6787dc859f2ec846adccc2447d81cfcf0d', class: "ir-mega-menu-row" }, h("a", { key: '87e51e56e3f8538b8fe4241e2f84fd6657a2eaf6', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '5393a1e55f6cc8b8ff921c48319ebfd1bcbf9c37', class: "ir-mega-menu-row" }, h("a", { key: 'f0fdcefa448abffc872ae50b4bf90684cc8fbbb3', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'a1f319e9773cba235c4a154a1df53454594a27bf', class: "ir-mega-menu-row" }, h("a", { key: 'd3fa2606effdac384a94ef9d5c6f142f22fc9d41', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'cd3e5a6cd098284ff8d5a54eff0ebfe7f9763f3b', class: "ir-mega-menu-row" }, h("a", { key: 'e13b02044d9c7dc53c25dbd52160fda775670280', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '4da5e47d3542699c793d408cef50b5bdaf242768', class: "ir-mega-menu-row" }, h("a", { key: '10ee3d698d492d9c70110fa7f303c5f591145aac', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '6267f155ead442d84b41aac29629b415eb80464f', class: "ir-mega-menu-row" }, h("a", { key: '4f042857794548c00afd82bb97b49a90384415fa', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'b605727ed6788d20f90a29afbdf32af288c99a36', class: "ir-mega-menu-row" }, h("a", { key: 'c55eb751720bcc5f8e59d21979fab7bbe55a3a4c', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '52a51ab0d977c64e8a97a9975a216f95bd2e2eba', class: "ir-mega-menu-row" }, h("a", { key: '744d62c9d124bf7b0fdedb1bb88b1725aaae2c06', href: "billing.aspx" }, "Billing")))), h("li", { key: 'fd83a2831ee5013163e26e881c38afac686e5233' }, h("ul", { key: '0af12720f7cb5fe86002a90d0188aa088a1e463d', class: "ir-mega-menu-column" }, h("li", { key: '2facc51bd57edecb03f09f4b4a56a2f81904eff7', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '437ec6b184d6dd14ccef2f26a2047c065c72a547', class: "ir-mega-menu-row" }, h("a", { key: 'd29d485e9569cc4ae6a471f8ac22e00d2d056ee7', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '5bf49f1ece3b58e9a041acce75fdba597de76339', class: "ir-mega-menu-row" }, h("a", { key: '780287d8825793556c14cc0067e1e99fc59f87b8', href: "poilist.aspx" }, "List")))), h("li", { key: '7d93302763268335469f19a222e82aae76d1d94b' }, h("ul", { key: 'd5d4849e9ebd22a64bc2307b80472c95c2c4e65e', class: "ir-mega-menu-column" }, h("li", { key: 'a59a0aa3aca2595b4616a4dc4e90ac917bfb4a3e', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'a183fab77a5f5c79e954c3fd0987002cfd9d389f', class: "ir-mega-menu-row" }, h("a", { key: 'fb5527a485e9a41942133779040133525b8e1765', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '8da1091e7a31da87d09110351b45e17165d2d19d', class: "ir-mega-menu-row" }, h("a", { key: '81018161ee2baab7d546c1dca2b534b40526b636', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '58a01c131c256e8a80c6d89324078fa46515a239', class: "nav-item" }, h("a", { key: 'db6d134cef93130e07ec31f7321317840a04d3d0', href: "#", class: "nav-link" }, "b")), h("li", { key: '8a6c17305e95f613379e9b653d5c68381fe40230', class: "nav-item" }, h("a", { key: '2cdb59d248d854828d7433cd356805ee01b40e57', href: "#", class: "nav-link" }, "c")), h("li", { key: '6dcc22db4f5110a3328b0e2f878b2653bfc755ef', class: "nav-item" }, h("a", { key: 'db007888fad35a66a131a44850304a3821b2a885', href: "#", class: "nav-link" }, "d")), h("li", { key: '07565a15276634f41091d36a90fd078448086dbc', class: "nav-item" }, h("div", { key: '7ae07d1bb48be410a327b679554bff4fac5a667f', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '708f0f4d3abccebfdca62152c4e3a19c0acf098b', notifications: this.notifications }))))), h("div", { key: 'a43d09ee1b2db92d91f373c8d2689c2675301310', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '0c31f462d64899c5bd4bd45d642c3ca72092973d', class: "mobile-menu-header" }, h("div", { key: '1d85e1b95abce12a4970892960ed6c8383b02f15', class: "hotel-name" }, "Hotel Name"), h("button", { key: '409e66cf79e2566a8f78a9f7c80a3697e15c8363', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'fc2c0b7b6f79b062291937aa13d664a73ee8f1dd', class: "mobile-search" }, h("ir-m-combobox", { key: 'ca6c95d7b146bd20a63afd632122e1aa53db6b80', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '74529af1c94c34cb670987cb77b33fd4179a73de', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '53717d3479ff28e8bde8e1d35999ed66c8ffad90', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '0859f0b5155a341b7170513d41b30ccdd9bd6622', pages: this.pages }))), h("section", { key: '28fc51a68a885723f4dfab7b312218924b5daa07', class: "p-2" }, h("div", { key: 'e042c697f9adec1773346336dace7a20cd8fe74b', class: "row g-3" }, h("div", { key: '5c33b1baf089641764745c159787284918412341', class: "col-md-3" }, h("h5", { key: '66d6c82fe83dcad9204950711d01564a449a0bdb' }, "Static Options Example"), h("ir-m-combobox", { key: '5d9fc4306eafa601576fb887a0f4e79d5554b033', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '650497bc8c4359cd408401cb515a5fa212e6483b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'bf41a836d2288bc04867e96f1be394f5290a2e0b', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '6e2f41710df6a888a0b871513bb08327d8ea2797', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'a30caa4d04f2ce75b092e9c9decd6b2d1a50b52a', class: "col-md-3" }, h("h5", { key: 'f53309d60dfbb2bba0555e5a3fdfc109aefb5cf5' }, "External API - Countries"), h("ir-m-combobox", { key: '6e21f0218d1318d01e02a521cfda461bb84045b6', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'cc687a25febefe9386156b0cd01b6d30d72e8f26', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '64600a62c1e74cb328a0801e8cfedd388ebff2b0', class: "col-md-3" }, h("h5", { key: 'c32553c7c84e56ad9290d428662db0b9cc953be7' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'b2272cfc8191eb4fa61b64c8ee40e1b345ce55f2', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '619c96fd334a27c23e504bea4ab46a82eb2792cf', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'bd6bb36446a7b3fd575363778f43911ddb71b49f', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'ad07798f22c11ed66d94a1fd5bc1996be6135bc2', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'affb52d8155f2fa0a14404e822a7d457ad9c2a84', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '4b86f921bdc63d0d92651e111b7c81f47515f724', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '30391244ad2f5d98f7740faaa63cdf97d981deb4', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'ff5422d0103b58c91e7394b1078647e687165101', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '420076d22809225a19a37a4285f18af59f0882fc', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '354fa195254c669797728e9597a40e387ef56e3e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'e80439f62be11e2d7261ea7af2e7597254dde7ee', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'e5998f3e7a28b4fd9c296c7593849301464bdd11', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'a4b94ee69550d86b08e12bb9eab5168d34c34be6', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'f4a6cb93836087f73967cc35ecc1896ff7204edf', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'cec6d690639e4cc5a2513d6c57225f6ccb425468', class: "my-2" }), h("ir-select", { key: '3e4def0a21a2ac434221675464c1f376eeebef7d', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '88c5475f79767804d0881d253be8c74293945050', class: "my-2" }), h("ir-select", { key: '6ca2464ad221e1c17f31b99dd00f70efc27ebb40', data: [{ value: '1', text: '1' }] }), h("div", { key: '5f8f2ab69feca864933e873d54b6162fdb4451cc', class: "card p-1" }, [
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
