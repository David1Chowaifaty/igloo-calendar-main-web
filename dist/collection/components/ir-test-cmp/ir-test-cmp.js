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
        return (h(Host, { key: 'df29fc86c2ca55350aca921fd0184339d8cd5454' }, h("nav", { key: '963ae3ce2f3165905055026f219748c866992b07', class: "modern-navbar" }, h("span", { key: '74ccc25136b12709e7d0c20fa2a2034a0323333d', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '1b1ae431561853fc55979efd6f60bad969f7b676', class: "navbar-container" }, h("div", { key: 'e7de76525775fc335da7fbd8b67397952e0c77b7', class: "navbar-left" }, h("button", { key: 'baebaa8b2c5aa75793f9e095bc5f4d0359b4bb70', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '902c3a8873389ab3cb5ff6b25cfefab936fb7a0a', class: "hamburger-icon" }, h("span", { key: '031540d521a58e9f6366cf9ac2e8ad2d58b4ebe8' }), h("span", { key: '77e9aa4a30b3dcea220ff5ed1778e685feb17014' }), h("span", { key: '94c7284940f7a608e9c7f6fd2414bbdf12d42f92' }))), h("div", { key: '18c77ab43004a5abbb1d8cd8f290d2346e453df7', class: "navbar-brand" }, "Logo"), h("div", { key: '4feec3db1ff06a2aacef214272db36c04f782f50', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'ec96771f8a48cb4763dd3675bb7e4a504c6f3912', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '89c4e8e81cd536ced03179556e7956ad1e3f27c0', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '91dbe2b7e9e02ea26444b9e2c1e5521a757f2fc0', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '10be5cfda1c31daa34f4b82fe0c2ab757a5f8aa5', notifications: this.notifications }))), h("div", { key: '4d0985921d67a65d7ecd4228ff21035d1683c409', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'be1c84b6f109a6c6d88659c6156a684adf8ce30f', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '7153a488d011fed67919ff5c75314f95482395e6', class: "navbar-right" }, h("ul", { key: '58e1c4c0fe81182f4cb4b9910669f2c77050de72', class: "nav-items d-none d-md-flex" }, h("li", { key: '310348828128223d53bfbc18e3f580388e33f803', class: "nav-item dropdown" }, h("a", { key: '5ac5d4b3c48a8227e5e553a38c5c6efbc5f2c005', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '8849ccd3925d3cdf4d6d167427421b430ac27f45', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'd579768e060e90b6893849f35154efbccb7e35df' }, h("ul", { key: '85448b000b430abc2f40b94b7eca697cc58fae0a', class: "ir-mega-menu-column" }, h("li", { key: 'e13173cf7d8dd68dad28afbd7a0b3773a28d278d', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'f528fe154c5b8f3a6574658181f0738ea2ea7a7d', class: "ir-mega-menu-row" }, h("a", { key: 'f6f72c4605eeec5e461b7038f16b26f7b6dedae3', href: "userinline.aspx" }, "Users List")), h("li", { key: '152bc89c4ec5041a91a55063a19df6885ed1500d', class: "ir-mega-menu-row" }, h("a", { key: 'acfa12263583fbbf85242eea3069786c406ebd77', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '7d1d325aaf69cbf54911edb0aaba3ac8790e11e4', class: "ir-mega-menu-row" }, h("a", { key: 'e0eafe43b0627cf1863684af9a468b5494954aae', href: "countryinline.aspx" }, "Countries")), h("li", { key: '93c5e1bd8c61315c890c094750e553a28cb6a5f2', class: "ir-mega-menu-row" }, h("a", { key: '2ca916abf9a2d2a8e0f24e45be1e74ff593a96fc', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'cbdcb10e8a82ec735b45c3aee8c248afcea1a3b6', class: "ir-mega-menu-row" }, h("a", { key: 'b6da929a1873b4d15a63b710d2f69181314168b4', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'be2679b7c22d88723b4f882852737cc6ff2b48ff', class: "ir-mega-menu-row" }, h("a", { key: '54e66bb0fe2b5935a65ca95a268e5776dbd0c8db', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '0bb14ddd542424b68d9d75f502a31a87e663824f', class: "ir-mega-menu-row" }, h("a", { key: '947465c8477de516362848d7650e88a710559df3', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'fc6343cab04357b6b96b9592915c221f99cbfd07', class: "ir-mega-menu-row" }, h("a", { key: '0fcad47c70e5ae34c4ddf793dbccf3bae1c7d1c3', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '55325aa864b63adcde83e7253cbf1aa0be5224cf', class: "ir-mega-menu-row" }, h("a", { key: 'f32cdece778b3c9f02f9fbe8be8f52f29d5aea29', href: "foodinline.aspx" }, "Food")), h("li", { key: 'bfc20b9b8fdb85ea6d50c583cced45e6b9ee5a5a', class: "ir-mega-menu-row" }, h("a", { key: '95f1a78b4eb25f73d94c6fef85e99280ca2d9d82', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '2ee8717a65cc14f915a9e2cf8957c1de6728c898', class: "ir-mega-menu-row" }, h("a", { key: 'e1d69855ef0cde83d137bcf3f28228a64e2ec1a9', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '08947c5c71b4e00fb8b6608838c35bc61c22ce45', class: "ir-mega-menu-row" }, h("a", { key: 'd040ed9a0fbf2d3ddb272d07ad6820fbb43fee0a', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'd24698961ed5d93b413905955848741fd7d5a7d7', class: "ir-mega-menu-row" }, h("a", { key: 'de02f4a196cb37530103cc83ae7fbacd655092c0', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '31f052f871cdf8fac4cadc39e01a053338326a06' }, h("ul", { key: '19e5075201c042df32f42be9a36cc64cb04add90', class: "ir-mega-menu-column" }, h("li", { key: '55303171753d658b6ced04449f5da02a4552b505', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'acfd0e73bb6f1d2ba40853f5037295e15b89c0f3', class: "ir-mega-menu-row" }, h("a", { key: 'ae4b2e8104f66d5a63ff8d21f75056b840bce7e7', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '140c33ea105e80cbcc1b678c64ca14bfbf435ec5', class: "ir-mega-menu-row" }, h("a", { key: 'd4b5aa86b4ab44e96e200b0f7cc1e16e4c9acd16', href: "aclist.aspx" }, "Properties")), h("li", { key: 'c6f290632fcf7a6668f8b0da199e8b9dc65a220a', class: "ir-mega-menu-row" }, h("a", { key: 'c02ebf1ecbec7df4f39152ca0c2aeb0c131338ca', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '6ae001d7059d3b1851f041dba345c4ef2789741a', class: "ir-mega-menu-row" }, h("a", { key: '8f8d000e6e0887b64ff2ecc1d61b177651987736', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '89e9f637a7363641b02377a7968f13dc3c273a1e', class: "ir-mega-menu-row" }, h("a", { key: '7b046bd0ab16c8e7b4fd4ea1e09c4586eb456ef7', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '389625ea12d40c00703cd196f7d3a0908c1c6353', class: "ir-mega-menu-row" }, h("a", { key: '2fc0f0823c02a27c33c2c25681e495a5d8027127', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '42198ec10f4638cfc4261c4c7739c95d91b0192e', class: "ir-mega-menu-row" }, h("a", { key: '3ddd35a3beaf05f2d641d5f30deb7864a6058272', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '70d829b760a3e2c28c090517f0878e1e6523ae7f', class: "ir-mega-menu-row" }, h("a", { key: '73f6da3fe8741eda2b826d849bfed9ec0a1c59a2', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'ca77887cc7fa9acf2e0143a1c92f774ad8abf4bf', class: "ir-mega-menu-row" }, h("a", { key: 'f6b7f5d072607b9f3a55f1fdc22627011e095b60', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '75f6f0e812ec49b3940e9bcd271342bbb25bdca5', class: "ir-mega-menu-row" }, h("a", { key: '4dac724abed8d05e6d40e047b34ac2dd92299603', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '7a04d8fc66bac65ee74d0be2c76430596ad762df', class: "ir-mega-menu-row" }, h("a", { key: '95836aa433a60631159330753b490abfe80963b5', href: "billing.aspx" }, "Billing")))), h("li", { key: 'b22451aefe35c2713e8e8d156702d19e27e2c79a' }, h("ul", { key: '71fe9785e5b839d0077ef5585d71e8ae4a739099', class: "ir-mega-menu-column" }, h("li", { key: '3898a86867421319441bca9f87c7a5ae4da9c414', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '76bb0675c6393fc0fe01cb36f6d7a3b9cbacdd97', class: "ir-mega-menu-row" }, h("a", { key: '965f4fbb45ac8aa6873bdd91fda2b246d4d2743c', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '168e620c39ace84db2f5df05d4478cc84b21d72a', class: "ir-mega-menu-row" }, h("a", { key: '0de8ae10e398ece720eb2893bf746c75d967d80d', href: "poilist.aspx" }, "List")))), h("li", { key: '5d06e28e43dd3c1d83c637ef515a0ca520701a20' }, h("ul", { key: '1550637ab305a2caea1897a5253a2f620750062c', class: "ir-mega-menu-column" }, h("li", { key: '1178a22c419624d2b48ce694aec62cb2f06c95d7', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '34a515e9f10852eb74459f8ba73d54b3a4ab017c', class: "ir-mega-menu-row" }, h("a", { key: '679fcde910821fa79b93a25bf15df7adbc6189a2', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'acb38d146bc507db0ca0882438f370a31115bc43', class: "ir-mega-menu-row" }, h("a", { key: '01ecfa458013142bc4642438f43b3e65f96f891c', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'abed2c02a07538e7156ecb92f8727366f2b14230', class: "nav-item" }, h("a", { key: '14d35efe90deb278620bfb1b9f548233d80cf83a', href: "#", class: "nav-link" }, "b")), h("li", { key: 'b442a2aea51a35b960259391f5aa10be6f17e2c0', class: "nav-item" }, h("a", { key: '83c6d0fbd36ad9a31b61883791afcc8563128f13', href: "#", class: "nav-link" }, "c")), h("li", { key: 'bf5eb53fa0a4240c58d665cf08f6298ac96c1a14', class: "nav-item" }, h("a", { key: 'e1cc62cc8a50284a7ca4ac61dd2b222f0592ad4b', href: "#", class: "nav-link" }, "d")), h("li", { key: '28c598b11a2bbd2198c307f1d12937377fe6d877', class: "nav-item" }, h("div", { key: 'b066d239e2d87105d9e2921ee77290d828c5e116', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'a9f4345dd4cd5108842bec042518f710b5a85fc1', notifications: this.notifications }))))), h("div", { key: '8aeb07b09cfd5a6234bd18d473fdd5713e709fed', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'a6f750efa45eee7e1e81dbe9311776a05574142c', class: "mobile-menu-header" }, h("div", { key: '904998e58702d870d75133302a661b71756f361b', class: "hotel-name" }, "Hotel Name"), h("button", { key: '1845a22091a770e62ccca84393ccf2084eb44895', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'a9256fa32ac29f490c586e25db88999d741666a4', class: "mobile-search" }, h("ir-m-combobox", { key: 'bde058f8c5a722ff30967e402bf422ddee341233', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '68c98c87a2634c97bbe2f4ae38e32dd43f684284', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '771e300443c5909bcea0b748012992cec9f2a349', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'ce6b0a171ef63d3b1e7e963a3c9e6ec0417a5d90', pages: this.pages }))), h("section", { key: '5c0e51f277e2b2f9ad605ae9d5303bb6ba1ef707', class: "p-2" }, h("div", { key: '2a9ef94d585a9fbbdedb9d859661032072eb1c54', class: "row g-3" }, h("div", { key: '1db2d85bf3bea673ea245dd7803a3a413e4af437', class: "col-md-3" }, h("h5", { key: '6ebceb138c98ffff189a68859a384f12fff5a39d' }, "Static Options Example"), h("ir-m-combobox", { key: 'c78fc737bdbb612a221cb884ae1af42c2cd19485', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'a3589301630f8536c4e3e85ba854d9a08d9e6283', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'f2df1e92b4093d4aac919eed23a39d06782b76de', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '62b2a55d4149968bd103cffe1c8d253a6a747687', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '198213ece56e127f7d493a5226d6385312dda2a6', class: "col-md-3" }, h("h5", { key: 'fb8d01b00944968ed69ec3b0a73938140f94710f' }, "External API - Countries"), h("ir-m-combobox", { key: '4c7a86b1498fc299801755f1c74f639de5a4b6b2', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '91731382f36efbd3b1b960d43f9a60fc7c2bffaa', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'b300a14fbe394966418bda4bbae8c789d93a490d', class: "col-md-3" }, h("h5", { key: 'e06881ee6604fe1869003eb16e3461d10cd40833' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'a742ec91853862cab26e15169b1fd534e5fd63ab', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '730f96d5480ddf8831c8e614111f68745edfba34', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '42abf70355fa1bf4834bb9070ccca0466fd528c8', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'ea82864dca8fc389c9ac74908ac9ac28a7fb08f8', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'df8c532c4e71b875de3efb454b9ed15926689468', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '7e7e4e7f01a9bd052eed4ed093baf8f351ff5c58', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '12ca3cf617700e71b7f45733a59df8dfc5fac1d2', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'a869601382f8b0b29282d0affce1f01a64658ad9', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'c139e8c5a5379c0055f967e2281fd103f91d5a4f', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '136304cf7001b300a2b6afd5a2114feab25d5537', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '5e1a6cccb99e23f574c11eb765303baa5cd153b5', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '17f83903c5ee21cf229a1a52938cc089da4c2ef7', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '53ec6b26c0fae4d12d48acd6ae8e7aac4f6558f1', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '86437702f565c50a1a96b2b4da0f286b4deabf4d', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '552613fdab3d345517def9cc65506aa74fa89736', class: "my-2" }), h("ir-select", { key: '898e695bab562c8243f0e4ca297d0423d5a0a57f', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '4ea1e320818a6942f674c7a8dbe87dec44990ce2', class: "my-2" }), h("ir-select", { key: '142935491b0afc9c5a9c8cfdd924ed0f16f85a90', data: [{ value: '1', text: '1' }] }), h("div", { key: 'a85f10360c40936ab9e9176e7d3c6bce4f558050', class: "card p-1" }, [
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
