import { Host, h } from "@stencil/core";
export class IrTestCmp {
    constructor() {
        this.countryOptions = [];
        this.customOptions = [];
        this.isLoadingCountries = false;
        this.isLoadingCustom = false;
        this.staticOptions = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3 ajnajanjanjna janajnjanjan najnajnajn ajnaj' },
            { value: 'option4', label: 'Option 4' },
            { value: 'option5', label: 'Option 5' },
        ];
        this.handleStaticOptionChange = (event) => {
            this.selectedStaticOption = event.detail;
        };
        this.handleCountryChange = (event) => {
            this.selectedCountry = event.detail;
        };
        this.handleCustomOptionChange = (event) => {
            this.selectedCustomOption = event.detail;
        };
        this.handleCountrySearch = async (event) => {
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
        this.handleCustomSearch = async (event) => {
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
        this.handleCustomOptionClick = (option) => {
            if (this.customComboboxRef) {
                this.customComboboxRef.selectOptionFromSlot(option);
            }
        };
        this.notificationCount = 0;
        this.isMobileMenuOpen = false;
        this.toggleMobileMenu = () => {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        };
        this.pages = [
            {
                label: 'Dashboard',
                href: 'acdashboard.aspx',
                id: 'Li_AcDashboard',
                icon: 'la la-dashboard',
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
    }
    render() {
        return (h(Host, { key: 'eccd3ca8a93eb591695b44429a4210d832cb6cf8' }, h("nav", { key: 'fb6ca55c97ae5d2d6802c636bd4ab96329b86c68', class: "modern-navbar" }, h("span", { key: '45c608d39718d7239936672acaf7e2ecdee320ac', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'e27fe6e070c3ba2faecf4f55c96a6b3feb92172a', class: "navbar-container" }, h("div", { key: 'be15cabf914be356cb41386c7c5fa0cb1c92acd1', class: "navbar-left" }, h("button", { key: 'a281e3501bb90850e63d58cf7c7962b4be861598', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'ce20ca79f35330b761189b70744823731fe5e06a', class: "hamburger-icon" }, h("span", { key: 'e7c73c2fccf9cfe11c4ba3702abfed54b5171d19' }), h("span", { key: '68804ca3f16c1af3a66f66d76e7ff4de9d39b87c' }), h("span", { key: '53880c259b191ae133a861e013ef8aef0d31baf6' }))), h("div", { key: 'fe2d8c5619273763f726ea860e7b7051ffa7f9b2', class: "navbar-brand" }, "Logo"), h("div", { key: '6f34e8b647987bad0401ccf749a92a0ab331bd40', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'ead4e75caa6cac52efe37e88165fb1ae0eb7df18', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'a6d928c8aa1b7ad5d344f9af4fa75083db5f8eff', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '902e71a1278897ba9a45cbdd1ee5e10cbb403a3a', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'e1fab4e345884e9ca933a6809f598492b8814a2c', notificationCount: this.notificationCount }))), h("div", { key: 'cdf138908b19824f7337ec4faaba85cd7ce8d318', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '85707575303a8a36746fa919c6a0dfeea5062784', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'faeb2477579711451167e929347228ef071f59ad', class: "navbar-right" }, h("ul", { key: 'b54887e2f58dc3689976396bd9fb5023948d9221', class: "nav-items d-none d-md-flex" }, h("li", { key: '4decfdc95167bcd7c46862e0d711199d2f0719b6', class: "nav-item dropdown" }, h("a", { key: '8b971b9f21dd847c6307ad63ee3c67e5ea892274', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'b25110167a72aa4f9b7727df683a33b4e83025a7', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '6687139428521b6f67187dbf6649fef93864f389' }, h("ul", { key: 'f79d876bcc653e6fb2996cf8755d18e5fdc83c63', class: "ir-mega-menu-column" }, h("li", { key: '24934f2f83822d3e184b2864d63b3e279c938d3d', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '6d198f1fc7fd4516a2331e587e18ab619e7a838e', class: "ir-mega-menu-row" }, h("a", { key: '70d2761383e73f2bd8ae27a4236cbc1df02a65c1', href: "userinline.aspx" }, "Users List")), h("li", { key: 'd8dde9e25706779d7f0e9178b7970e4c4f46b77e', class: "ir-mega-menu-row" }, h("a", { key: 'af5a7bb4a7cbf9e270d6cd663393bd218a6f6075', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'b913431949a7b3925fdf7f1cc61d91901fd38ee0', class: "ir-mega-menu-row" }, h("a", { key: '7e725e1abda73e1cbb03c63346bb9046b89be0fe', href: "countryinline.aspx" }, "Countries")), h("li", { key: '068cb6608e130ecbac403396ab9c570b6fbde873', class: "ir-mega-menu-row" }, h("a", { key: '0a42d0e3ef841b736e9430da4c92c7eb5140157c', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '6697cd439abcbc6dcf50d13a941a5661770b12e8', class: "ir-mega-menu-row" }, h("a", { key: '62802ebd76aa6ddb0f2d5a45deec9b8e9033a18e', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '855426f39a6ffc593bce6f1693be60e837741465', class: "ir-mega-menu-row" }, h("a", { key: 'a9449e487eff31b9c77b6a0be09ccfa8a3c7cd49', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '8db4a74ad7387479f66561ff44785b8998ad2e18', class: "ir-mega-menu-row" }, h("a", { key: '52d378caece5949a7f6be5af3bafac6b423415b0', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '96e9bc9129eed98c16f0b6cfe2fb340facfb1a41', class: "ir-mega-menu-row" }, h("a", { key: 'eba074f3b910318ad36c219e34645f91c7f55f7e', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'b42b94adf907e84b5a9c2a713cbc11212df6d7bc', class: "ir-mega-menu-row" }, h("a", { key: '77f56e2ec821ec2cbd20b9229c6a358ea48cd903', href: "foodinline.aspx" }, "Food")), h("li", { key: 'a28617a81b82158c1ea95135458a89a8da9d0e09', class: "ir-mega-menu-row" }, h("a", { key: 'bdf49941fd1fe650c7b5d23ccfba865a4992ed68', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '23eb4d162ec5c7dbfba63930e62ab0dc83fd301e', class: "ir-mega-menu-row" }, h("a", { key: '8543e69fba1bc897ddaf2dfc238dd24fe7bcc528', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'bae0005da209d717604302c5376814b7ded6e1b7', class: "ir-mega-menu-row" }, h("a", { key: 'b39b2fe3863426fad4555c81b76660e792df0860', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '1726323e81bd612e461190a9699c0984e9cd221f', class: "ir-mega-menu-row" }, h("a", { key: 'c0ca19bd01d584b5cf0c65b6846af5aa92fa984e', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '29e2b355291535190bf787b391fa8b7a6d36774e' }, h("ul", { key: '64d9ddc387d853b9730b363d3cc1e1423a436291', class: "ir-mega-menu-column" }, h("li", { key: '35397eab74d0922dd43810db7699a00feb93a865', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'a652133f8fd56cf7750ccde4a799e3afe27043ba', class: "ir-mega-menu-row" }, h("a", { key: '6008ed7d4365cdafa442afcb89848b6db773a68b', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'b9f84b6fca0f88b25d6aaf2e4f8bca2aedbf543c', class: "ir-mega-menu-row" }, h("a", { key: 'd8dc77eeba4c14df54bd5960597b24fa2d29e5b9', href: "aclist.aspx" }, "Properties")), h("li", { key: '42133160a3336918d3fdb0e2cecbb4f89352ae19', class: "ir-mega-menu-row" }, h("a", { key: '68765d3fb29ba2a4c02b06bddf7b1100834fac8f', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'ff5e46df7fac79b0fcd7f92304e78f6f1ddd9f2b', class: "ir-mega-menu-row" }, h("a", { key: 'd8bb23065fe234313df9d18832ded67ab1d49ca0', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'de665212d758189e2ef9db04fcc9fd9e62a5e283', class: "ir-mega-menu-row" }, h("a", { key: '7db317255b53f4ed5d160faac85b655b741f53e5', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '06607bd75d254aca34cbb5525fcb0c44acfbecec', class: "ir-mega-menu-row" }, h("a", { key: '2ff8a2f066dd9910b3275d0e722b959a34a83890', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'ce4ce5f7cb559a49a4b3bd543d95ac73d6b481e6', class: "ir-mega-menu-row" }, h("a", { key: '507d60fada8a92942ef7745061b32e205efec595', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'b60fb045c57e97da5d7276fb27bb7161dbf5d11b', class: "ir-mega-menu-row" }, h("a", { key: 'b4638455ffb27eb089bdce624cb627d0f26a705d', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '015806924672321c12859ed8828f867e45872aa4', class: "ir-mega-menu-row" }, h("a", { key: '6dd098d130ba35b10732b0effd327201834211dd', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'b796e6fb35c5a316ec2c3c45c5cd3c8962d555ee', class: "ir-mega-menu-row" }, h("a", { key: '46eaaa4fe00235133b905fef8e0aeb02dfe7aa87', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'f912e05dcf3f60000ee4a3361c1fbb5a087654d4', class: "ir-mega-menu-row" }, h("a", { key: '5618dd77447bdb8a28963d3c61f12541e98b7391', href: "billing.aspx" }, "Billing")))), h("li", { key: 'a90023947ee37208b270d235f316a7a1d25d65f1' }, h("ul", { key: '7a2b7d5d5116bcd6ffc5b5a4a0c71549cc1bf771', class: "ir-mega-menu-column" }, h("li", { key: 'b5925fe472f85974d2ae45cfecb35a9a3f8a100d', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '91b298ad0ec101ac5a46f85cf39feb05f795077b', class: "ir-mega-menu-row" }, h("a", { key: '843d43e478eb9d322df581b45289ff02b43c3387', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'f88022aeb35b6a7dd8dea75865fda2474a132c2d', class: "ir-mega-menu-row" }, h("a", { key: 'dc0ba0feebbb9641e8c7d4ae93a68e7cae13f514', href: "poilist.aspx" }, "List")))), h("li", { key: '3e26e1db0e834dd8e7731a9721c5263effc8e186' }, h("ul", { key: 'fb20563571981efee50dfe05cb9002c45cde4e28', class: "ir-mega-menu-column" }, h("li", { key: 'ec237b83488d8fa7c1e83050bf7d092ad49a58b3', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'f987888652d1b45a7d9f29639304f66606024381', class: "ir-mega-menu-row" }, h("a", { key: '0705f05ca9916abf5353d2fd22f6567faf599005', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '816d0437c11a4a4acc145fd4a103dbb4608af826', class: "ir-mega-menu-row" }, h("a", { key: '4fc8b2a2ab0dc86fdf76d811b71ab8fc4c205103', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '0e14b55db16a3044df2772db1277029bdbe64ef8', class: "nav-item" }, h("a", { key: '35025418eab1ea3db75b077401dcbaef4d4e50a5', href: "#", class: "nav-link" }, "b")), h("li", { key: 'bd3f86c8a2b87ad150e15109866467dca8258318', class: "nav-item" }, h("a", { key: 'b408e14cd8d67bd1bc6c288f750d8619c3dcda48', href: "#", class: "nav-link" }, "c")), h("li", { key: '518302dd8e242c46cd4c7765345568f616183ded', class: "nav-item" }, h("a", { key: 'f9bae4476114d4557fd2847699108e743a22d072', href: "#", class: "nav-link" }, "d")), h("li", { key: '18d446871bc5bd95ca6ed6e63308d8744df25404', class: "nav-item" }, h("div", { key: '0eebbcab2f991db61ed623df94c04b9d9861b89e', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '76de380f8fdea243a114c3e64f512d6eb1a01676', notificationCount: this.notificationCount }))))), h("div", { key: '46b573984cba9e5a9ec7725e6e3fa373802298c4', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'fa8bcd7127394594b1bd71d3d670b4c88475dc61', class: "mobile-menu-header" }, h("div", { key: 'feac172a3b71e9ae22b766a3ebb9aef30f1c4db1', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'ec37b5b9de09f2434097a43f0afaa12a8ec4538c', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '0719f7227386e0d537959d7a8581fde8e4b3ec32', class: "mobile-search" }, h("ir-m-combobox", { key: 'aeb76890936556ebde1b5e77318a238e7be8b564', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'd5fd71c33bfd8b53084a49665a12a376787cd85f', location: "sheet", pages: this.pages }))), h("div", { key: 'fab716c350d3cce3aab309588c8088d608e2248d', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'feef0e174a2a98046a5a5ac8d97c15f4c45c8d97', pages: this.pages }))), h("section", { key: 'b08166a88860801ca72a4877c68a08974f43a5a8', class: "p-2" }, h("div", { key: '30c9525e7aa55047c24a2e46bb17cf17521abeb7', class: "row g-3" }, h("div", { key: '795e3d1bdd453a9aeeaed9d0fbd537c9c649a53e', class: "col-md-3" }, h("h5", { key: '33e7951ec6745a2cbda02f05553080d450750210' }, "Static Options Example"), h("ir-m-combobox", { key: 'd604e8bb96c3f180598c3f20dbea59c0ca81c49c', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }), this.selectedStaticOption && h("p", { key: '83a2605dabb42cdd7ac3a4e7027c70167cd4806b', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'ab93d4befbfbe2fefb099903a681cc747378571b', class: "col-md-3" }, h("h5", { key: '61adba277f1ebbea275a3917904848f40006e068' }, "External API - Countries"), h("ir-m-combobox", { key: '0e1c95a744f3ece8022b27326cd64f5cfd11b6b9', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '947559cfb74c78512f1e588e314e77e4c70d1a00', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '62f725a1d6307f9a242c34452f7a00c29844e489', class: "col-md-3" }, h("h5", { key: 'cd6614416a783149361dd8b253936f4d44cbe560' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '047bb4b00df3a2adf088b2c59194e622b83551be', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '13f1a096a6e972792bd825a59dca1c1f2303217f', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '51bcd6678af846fabecc4d46ce3e00279102fbad', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '272620d59cedaf512365ecf3bee7385480e38dd5', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '592198d9ffc64ab2cbc6f20991993f904af30fe2', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'faed3d8c5c5c9a80b0db985583820567350dddc9', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'd45c75462820547179f2ee428f0a6a79397fd92b', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'e3e898f47244938800758615fe9d42911d937c47', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")))));
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
