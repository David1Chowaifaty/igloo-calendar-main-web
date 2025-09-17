import { Host, h } from "@stencil/core";
import { sleep } from "../../utils/utils";
import { colorVariants } from "../ui/ir-icons/icons";
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
        this.notifications = [
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
    }
    render() {
        return (h(Host, { key: 'fbe5352829e31c577f1ba16925666ea527603875' }, h("nav", { key: 'bf7b6f92a13bee3847eba54a09f3103b94f05ee3', class: "modern-navbar" }, h("span", { key: 'e8e28121ae0e71f62420cf16eed248f61d9cc788', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'bf78252c2b40a8cc3b305088535b495d3bec5040', class: "navbar-container" }, h("div", { key: 'ee94b86203f053b1fe7deb74dcfea75bc0a74321', class: "navbar-left" }, h("button", { key: '3c310a41cc69d8f04e2dc99d0418e53417f876a0', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '6ac736d40ce115f41645ac9d635903642d9386a6', class: "hamburger-icon" }, h("span", { key: 'f960b8b09b121b94b89cb8a9f9661c7743651692' }), h("span", { key: '3f792898bf78797fda3cd849314efb68c882af0b' }), h("span", { key: 'ee03470748e52d919dc1e96569373a077592ab55' }))), h("div", { key: 'b966b4ba7572fc82a0863eb061496145ce09b963', class: "navbar-brand" }, "Logo"), h("div", { key: 'd24e1902d01d91256ad27b363bd7dfcf77953aaa', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '11d7becb5c4a9fd99df8d5cc7c8e1d620b422b16', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'd6f969897f08e259dfb9bc98040fbdcbe323d3a3', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '3aa43c37e60be89cc422e38097e9fd27998292de', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'fa4cc4f3173dda7d8bf0615d6424531c377f8990', notifications: this.notifications }))), h("div", { key: '0b746bfaceb7cdd8631dc49de2e75bb38c44a77b', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'a6d9ad8ff371789a695f13d7e25d375dd99ade44', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'cef5002f61ad34381619c821279e339e272a8b4c', class: "navbar-right" }, h("ul", { key: 'b87850d0b29053ccb99139553110e57a3bcab24a', class: "nav-items d-none d-md-flex" }, h("li", { key: 'b7dda4a09ca2b04430a4610f72820e28fab673dd', class: "nav-item dropdown" }, h("a", { key: '340cb07307fa9ffc4fbad543b4f77626b3a9a74e', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'eaad3e7674cb34bee563cd5710790b98fbdf3c68', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '519319b6c1db9cec643e543cc63c50603a38e2f3' }, h("ul", { key: 'f48636fc28d66a846323ddab9af895e94f9b7f5f', class: "ir-mega-menu-column" }, h("li", { key: '76ab8110655e4abb738ccfde75f9288772761b39', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '761c1936cb32ac7b59177fea09de0e0a801c1fd3', class: "ir-mega-menu-row" }, h("a", { key: 'd7928d6682661524e0a1fe305597e5c29f13c684', href: "userinline.aspx" }, "Users List")), h("li", { key: '67c02100fb50cba95236ee6d5940d4b3f062d3a5', class: "ir-mega-menu-row" }, h("a", { key: 'e0e71ca975b1d6b03207180a413dc46b4d4745c9', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '6cbf465a82d8c675cb198abb151911f149ded901', class: "ir-mega-menu-row" }, h("a", { key: '965e734bd70ef71dee74a2907888c3d15b80ef2b', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'eae57cc7ae34fd9b7b507ee0679f7c2f69beb196', class: "ir-mega-menu-row" }, h("a", { key: '5e417017aaeca61810b232c159113ba4b4944c31', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'af8a72d0beeaac396250c393526bbdc2ee7e6efc', class: "ir-mega-menu-row" }, h("a", { key: '6a7ab3589e63324bde6b5a64d5804385add71393', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '6e014596b17ac91d8529dc1a23098f6d8ee79e41', class: "ir-mega-menu-row" }, h("a", { key: 'e76d9ce6cc7e9b75e399fbbeaeb47b0524e71faa', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '1c59232cc1df53f2ac0004726b59c21d7b0d473a', class: "ir-mega-menu-row" }, h("a", { key: '91c0ccc36377c654a0a59cf4f4b3cfbfe1a60e77', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '477cf352c71e3e63d2da4c9a9814acdfc33ac7d3', class: "ir-mega-menu-row" }, h("a", { key: 'a7502a73454acfcada500d7570684c84cb2c79e3', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'b398913fb20118a62a4c6462a257987cbd3378e2', class: "ir-mega-menu-row" }, h("a", { key: '4c0ac012bf50f3220096fac0d4469a7cef5355a1', href: "foodinline.aspx" }, "Food")), h("li", { key: '8799a56694e93c2d521c073164faf972eb68d475', class: "ir-mega-menu-row" }, h("a", { key: '1fd8715758524396daf023418c2b5a9007526265', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'ebbcef3d5bd98d6eef10471c8ad05e3f436dcc67', class: "ir-mega-menu-row" }, h("a", { key: '2d1c4783ee233adf81e54c6f31cb609cb11ba8c9', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'f8c448e9faf538ec5409c1b6c28017c4e1e8e2dd', class: "ir-mega-menu-row" }, h("a", { key: '11d10e5d0f6e1ae8d230a7f66cc360eeb1de1101', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '56703b7d0d1105472b866464c290244f3f1538c9', class: "ir-mega-menu-row" }, h("a", { key: '62e5adab3e314dbb1e537b30bfe87b0502542bd5', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '846f80deb2c3fdc184fe4776b7977bb953769a21' }, h("ul", { key: '9ab8ee3d8ce633717aeb9602bb16f97ab9467c9b', class: "ir-mega-menu-column" }, h("li", { key: 'c512e49baa91d062854180f07192c8ea49aba05f', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '43771f0706b5260ce40aba577c42111ba6fcafbd', class: "ir-mega-menu-row" }, h("a", { key: '4d561735c6b47af2dfbef4b1baee32318e0fcfb8', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '9ce21742964e052147c71b7bcd9fa83b15689297', class: "ir-mega-menu-row" }, h("a", { key: 'de34e88db773dc3e6db7e0f36bd89f8fe60314cd', href: "aclist.aspx" }, "Properties")), h("li", { key: 'c418381f49863ef9912d84cc1363c078304f8bb0', class: "ir-mega-menu-row" }, h("a", { key: 'a7e17dd867f04f8ebbe15a2c6b5bd18de9fee65f', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '5bb8a292a091c720733e99bb18e64320d378b26a', class: "ir-mega-menu-row" }, h("a", { key: 'cadb0282efe5aea7ea0ba534979b9a00e8a8451b', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'b5d9d1b6d222d6bcacb2975096d112ecc66f0251', class: "ir-mega-menu-row" }, h("a", { key: '1fa1b0df308f1adc5d457cd062686996f3661dcd', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '3aef65e227d0ce70ac522197e7f8039d621e0b97', class: "ir-mega-menu-row" }, h("a", { key: '236d8ba3157b30e7ef57a997c8925f14b0344fad', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '88eba03f153273d998762da6a376746011a62dcc', class: "ir-mega-menu-row" }, h("a", { key: 'bd328bbcb908b7cdf3bba63289de8cbcefbe2a76', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'b4bb6a85c89adcf6944b5c276957fecae572e40d', class: "ir-mega-menu-row" }, h("a", { key: 'fb450f150e7a32ea7a769e4901e1573fc95e69b3', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '64b6b402fec6896710f1310ded7032cd60f411be', class: "ir-mega-menu-row" }, h("a", { key: '387a0393fd04591a17aafb0b97f7576e4a4e65ae', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '17ae1bee664bcecf3b49498d47edb5555861147a', class: "ir-mega-menu-row" }, h("a", { key: 'cdb05ec41ae709054080dd5db412b554aff79a1b', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '85b6366388447b44bd95bdc0c0b186b5a63f8bd4', class: "ir-mega-menu-row" }, h("a", { key: '06875f0159765f06325ffe4c604cbfdc18d41462', href: "billing.aspx" }, "Billing")))), h("li", { key: 'd3848ccd2c982c3e1d4e0e84337024005d208415' }, h("ul", { key: 'fbec065fca4eadf6828aa20df6a6faaa36b3c466', class: "ir-mega-menu-column" }, h("li", { key: 'cae720f3298b216ac2f887c15868b596b4b64351', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'cffa3b966d0549d8e862cb0911eb4cd7ad7e7f38', class: "ir-mega-menu-row" }, h("a", { key: '21ac82e49a6d4b8f28b77921aee580d7694cc8c4', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'c78afdb72825fd123e2db3766c57a9b95256d7fd', class: "ir-mega-menu-row" }, h("a", { key: 'd1e6ba897c55d18e7bc3fd13c0a24e3987afaccf', href: "poilist.aspx" }, "List")))), h("li", { key: 'd8d5c5089b6147aaf047f4ab6cc0457765bac8d7' }, h("ul", { key: '48934d5d0174662c87db5b0ed9bcabb58fab922e', class: "ir-mega-menu-column" }, h("li", { key: '11d37f5932b394697882155da6d86537e4508628', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'c78dfa1b9883eb6e78a6957ab2755fa38b90fc38', class: "ir-mega-menu-row" }, h("a", { key: '0022550dd75976b7467bec1d97547a6d5868b52f', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '581c99d56a0688f18e9ba61e3f3d3663cf27ac2c', class: "ir-mega-menu-row" }, h("a", { key: '13a1084efd6b763208e491714dfd56c9ceb65e2b', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '6a7e2b9d09efade179b1729af0786e7d5606401d', class: "nav-item" }, h("a", { key: '6e95993b10b5f78c5803c142d314df0cada60369', href: "#", class: "nav-link" }, "b")), h("li", { key: '124229c0c6fa0e8e8dbba7b5ffc9379923a987ff', class: "nav-item" }, h("a", { key: '21b40f2b5937ac3b21567bd16cae76001573cdbd', href: "#", class: "nav-link" }, "c")), h("li", { key: 'd9794e0500c62fddb082fe8d03675167ed34fb59', class: "nav-item" }, h("a", { key: 'b78369596e6a012e9f160489cbae57534782a6c1', href: "#", class: "nav-link" }, "d")), h("li", { key: 'ac9897ed3c4d10e6fdcc1e135e36490ef4625785', class: "nav-item" }, h("div", { key: 'd16a92f6fc65d0e57f9c23ce60efb331630e6fe6', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'faa32114f3d0d52139e02e90d40b69531ab17028', notifications: this.notifications }))))), h("div", { key: 'a523074b4894b9f1bd4af48bc619841f433057be', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '2feb904b49a46f67ecf5c935e6391ca684373b76', class: "mobile-menu-header" }, h("div", { key: '5aad42b40db224a4c38f8656a5a5c35997f13e17', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'f289b228ae21c3fff84deec5972a6b5a308ddb83', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'df1de40bf0e8fb8fc5f2889098c058a289185e7d', class: "mobile-search" }, h("ir-m-combobox", { key: '43abd6526bee8b67e5c97d45deea7862a7cc8a23', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'dac1f6efeb5a400d4e1bdc382d2012662e4781fa', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '62422f242d27525704b41ba9b176f28e9f4e7c5b', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '2253ff785042c5c6cbaec55b34c63788e0dd1659', pages: this.pages }))), h("section", { key: '76137d0142aadbe1585cb57cef7925b02876fbad', class: "p-2" }, h("div", { key: 'c6646b0f01fdefd4713ccd58908bfd8efa6b9612', class: "row g-3" }, h("div", { key: '79ab16aa2cf6ce19ae0526dc8e651bebb696f7e8', class: "col-md-3" }, h("h5", { key: 'fbff2bd339a301efa9b5cb0039354a09f1e51c41' }, "Static Options Example"), h("ir-m-combobox", { key: '3626ccd2e848f9fd9ffc495ee214118527c52e45', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '7df92d539975cb8e1a802102050595ce3e6b3980', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'f8ec6f042683ba270d6f7d98db958f58689c4546', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '2fed270b54bd6f7cc7af9df2f1d574581ee4b503', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '894177d12afe3b25bb6292638a83f7a28291f050', class: "col-md-3" }, h("h5", { key: '7f677145613f7d99690ed11d492281e9a8bc8ddd' }, "External API - Countries"), h("ir-m-combobox", { key: '83d5b929d0b846beef8e9dd7d3e58fd5af90cdf0', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'f2ee1d30caa2214de64e9ad07c6c053cda143eea', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '015f8d0c2247ea1b3fbafc27175ffb310a7c60d5', class: "col-md-3" }, h("h5", { key: '24f548e6b29802dc339c48ceb017ee25129b0e1f' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '4847440925a48b4219bee38a69fe924e4b680032', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '33934caee5540aa8b903b572182fafbacf4d5e5f', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'c7087beea1b1daddcd03064f247a136824f2745f', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'df9f16964afd632bacc834694496901a53e81fc5', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'efa3559d4a666ea559ddbe20902707c9f8cb756c', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '4ac96f2bdaecc50addb3b17745b6767d6ec25226', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '51520b6309e03e752d7720899378602a38911aa2', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'e6c15addf887a8cd7c68257ce8a3a162d4778f34', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '071a7bf5adcb8bdecacecc224c650f89882555b1', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '08a2c2326da8f8581c206240555ef1abe474f2a0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '8ff2d4f768a7973f5e77752c360dc5731319e3eb', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '0ce908e0544719f6759747f4fc886cb21df6e9df', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '628cf6e80f73fdd89ffe6776eed072b285cfdb36', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'a752545f4378f5ac9bf5ffb101b64180ddddf09e', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '3c958eb0d1680e42e9c7fe574784bddc824d5afc', class: "my-2" }), h("ir-select", { key: 'de5490746253ca987c7ad339fa885f1a1b05bfe7', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '4509063a0782175f9f4b4a5ea0b5609ffdcaebcc', class: "my-2" }), h("ir-select", { key: '5f6b1544f5f4063c48e6159963a82c40c919dbb1', data: [{ value: '1', text: '1' }] }), h("div", { key: 'fd3cee83bf8cbb0cb9f67d3317c0fb2be3285c15', class: "card p-1" }, [
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
        ].map(row => (h("div", { key: row.id, class: 'payment-item' }, h("div", { class: "payment-body" }, h("div", { class: "payment-fields" }, h("p", null, h("b", null, row.cause)), h("p", { class: "text-muted" }, row.date)), row.reference && (h("p", { class: "payment-reference text-muted" }, h("b", null, "Ref: "), row === null || row === void 0 ? void 0 :
            row.reference))), h("div", { class: "d-flex align-items-center justify-content-between", style: { gap: '0.5rem' } }, h("p", { class: `payment-amount ${row.type === 'Credit' ? 'is-credit' : 'is-debit'}` }, row.type === 'Credit' ? '+' : '-', "$US ", row.amount), h("div", { class: "payment-actions" }, h("ir-button", { variant: "icon", icon_name: "save", style: colorVariants.secondary }), h("ir-button", { variant: "icon", style: colorVariants.danger, icon_name: "trash" }))))))))));
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
