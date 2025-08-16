import { Host, h } from "@stencil/core";
import { sleep } from "../../utils/utils";
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
        return (h(Host, { key: '8f0081be1fb355a3a449e99b88135b2db9accf31' }, h("nav", { key: '58035932ca4d83643d84bd9dd834b277aa07e3f6', class: "modern-navbar" }, h("span", { key: '3fb794fa482afd9519e5b5b115454e49ebafeb52', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '4f871a149adfceaef17a5c6538742fb052dea2e3', class: "navbar-container" }, h("div", { key: 'a2eee857118c38beee565caaaf01bbff9834b48c', class: "navbar-left" }, h("button", { key: '3da1187c285d159ecf3627cdd2dca22f4233099a', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'ef3c594097d85e20f540597ec408355f8d579450', class: "hamburger-icon" }, h("span", { key: 'd4232f136978fc3df2abb861784f6a44787d71c2' }), h("span", { key: '55d58d9b2b4be7cf5f84781e825618c59ec2829b' }), h("span", { key: '969db42666d907352c73641874d814381a50124c' }))), h("div", { key: '64ed1ceeb2f97e9ef62e80646635f1957ff3abe8', class: "navbar-brand" }, "Logo"), h("div", { key: 'e150a6814c3a49387eaf58d943f577e191139605', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '7ffa7d5bdf783ad3832e4c1336f53350d039228f', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '1a24e732ecc228c228aaf414d503e8a3ad6a685a', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '0cc00930a0165b9232ccb1db5cfa466e76068f02', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '26994ab5050ec6cb405c48d622ecdeae68029ab3', notificationCount: this.notificationCount }))), h("div", { key: 'b8267b02989783e93daa6f7a1eeff9a0c4b0715c', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '0de18683353b0bf289495147e4dfd646332b7c21', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '480626e545449e1e885af7354759a3d1a568935d', class: "navbar-right" }, h("ul", { key: '2f4a4b713b955c385b8ae60c08d77d64da023891', class: "nav-items d-none d-md-flex" }, h("li", { key: 'ce0444c6edcdb4fe500cce9719a3e6d5c4704541', class: "nav-item dropdown" }, h("a", { key: '7f0aaf39d92b84f55ae775a1b3687c6d1a805a7b', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'e6b257a2436b1c9d083b722b870626ea048d1d79', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'aa4825392ca5b8f0d8e8b3e48714ad1e1864d579' }, h("ul", { key: '17e12fc0227f851c088ab8cd1190c4a532f10467', class: "ir-mega-menu-column" }, h("li", { key: 'be31e2d7c102f5946e4278edbb352b8b5e71bbdc', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '3d0009dde81aa5f4435578ad268d49d06fbc8bc3', class: "ir-mega-menu-row" }, h("a", { key: '2f6c4c094b8fc237ce4422333bf0bad1b3e4ad7a', href: "userinline.aspx" }, "Users List")), h("li", { key: '16091f5def6ca835091b49109ebc2636cf566546', class: "ir-mega-menu-row" }, h("a", { key: '6a9694c8b16c5c3572987429f7b3a156bb3156a6', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '486a8c94b4c12ac375c976857f2582970ec8237c', class: "ir-mega-menu-row" }, h("a", { key: '8d3b4e3f642ba7b52e718d5da8b5330408ebc7b4', href: "countryinline.aspx" }, "Countries")), h("li", { key: '2ccb005fb740571bd09b47ea3a23c21de4ae3213', class: "ir-mega-menu-row" }, h("a", { key: '283614a256e0d6ef14f9ecf6240b36b4e7bc9a42', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '5c3477953a8f62567c362ecbabde9ecce2e5aff6', class: "ir-mega-menu-row" }, h("a", { key: '70d2b840751188b01a3b8b30a4eefc2dda9878d6', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '80b324ab1394265c5d2d5cdf82fcfb89532f0558', class: "ir-mega-menu-row" }, h("a", { key: '506df4be5b5e35c143c18276e40521891439a3ab', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '7854bb277538a0c225c02cfcf545459df143ec22', class: "ir-mega-menu-row" }, h("a", { key: '1179f45b1eabd879d735aa9c4f590d44198cc762', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '4e89dceecb26f729cedf9960af1ba8a73afd9557', class: "ir-mega-menu-row" }, h("a", { key: 'a1c9f6f95031adf50e4e26d9cf0dc51c2d50f8c5', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'dc0b583566809ca424ea59a934343226f792459c', class: "ir-mega-menu-row" }, h("a", { key: '936b63d61d1254dfad6c0bc7fd8678a402edb95c', href: "foodinline.aspx" }, "Food")), h("li", { key: '87ab7231fe4bfb2ed36428d260c8ff06f9637179', class: "ir-mega-menu-row" }, h("a", { key: '9bbe240c29cbc2f02cc17148cc84dc4273b78f87', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '8e22f5848ad1a290412a3e74034d7a4b1b7a3bba', class: "ir-mega-menu-row" }, h("a", { key: '173aa6fed803a84bfec99abbe1c719baa4ae8d33', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'cf36aa2a9d788ca43b5a8e0bafbd681b299f8bef', class: "ir-mega-menu-row" }, h("a", { key: 'bd321ed3993602bcf2a0b85e39c8b7da26f553ed', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '5ad50193a9926fb42a43dad4772e5a3a0a7cb762', class: "ir-mega-menu-row" }, h("a", { key: '058c3fb2f22a477bbe8ba5ab68d967d0c7fc8ba9', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'ab7eb862fd156126d6775d8f2f3b975412ef8fa8' }, h("ul", { key: '4158945eac1b626f1dbe82a7433a78e993c2e31c', class: "ir-mega-menu-column" }, h("li", { key: 'c35a35ca0077c31f8df187586b0993b50e01afdf', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '0cd770e8628a96e0b831e0505e17235227f11a73', class: "ir-mega-menu-row" }, h("a", { key: 'e9afd8b0fc74daf79faa582b99d42a6b2b640d22', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '9e42d7d0536b6fc236617b9205dff52de18f3a87', class: "ir-mega-menu-row" }, h("a", { key: '793646f5d00493011e120ba90fff431e9b8d3c0c', href: "aclist.aspx" }, "Properties")), h("li", { key: '83a43eba01f2610821e8d30dff7d2300c68ad698', class: "ir-mega-menu-row" }, h("a", { key: 'a57a9cb2a708fb24e6db2575f59151f3746c2640', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '142c3b74f0459d91028a939ea748e38e0bf6eab2', class: "ir-mega-menu-row" }, h("a", { key: '1276c8c5926dbcf22c62098c803467860d8b63a2', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'abf972ca887e811606511d1ad6c40cc6e6725fea', class: "ir-mega-menu-row" }, h("a", { key: 'a1d3e4e66948812c3f3db971fc950e76828d5007', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'd22baee257ad8eb2d5178998e4c8e1337d957ce1', class: "ir-mega-menu-row" }, h("a", { key: '4e33cbaf69edd8b93f4795882b3e7ee8adb6b1ed', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '34127ec87ceebc01cb3233bea9cef0a73e0653db', class: "ir-mega-menu-row" }, h("a", { key: 'a791e07ac017957a4d8ba9a0398d8fd29ae2029b', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'ecd04496bc3b9a9705ada278e8c97cfaafebe9af', class: "ir-mega-menu-row" }, h("a", { key: '7d0b05e8d51b91a227a62e785e366703329d3b3f', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'edd21c76bf8751799590cc6aa12e7362e27804e8', class: "ir-mega-menu-row" }, h("a", { key: '0a9da0b66acc586e837afd3b9cb1052424bc28ad', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '924c39c7e106f8d7452cbfa81c9584d712e8792f', class: "ir-mega-menu-row" }, h("a", { key: '00f562e978e23b51ef8c7f1f6e37f031f0ded876', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'f5a3e3b24fd0bccc083d85f77a95d699014f1e9e', class: "ir-mega-menu-row" }, h("a", { key: '40bffd1d6fc4bd59b879cc382be9d88c237ed3fd', href: "billing.aspx" }, "Billing")))), h("li", { key: 'cab90b41a17f2080b2beb296df062324c5230a07' }, h("ul", { key: 'fc366ce67834f2936661772508465bf2d4c1aa86', class: "ir-mega-menu-column" }, h("li", { key: '9f8cd5098b15c61fcbe148bd1b3ab7b6f846500e', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'a119fee57a0671806dfb970d225508dcbb9dfd85', class: "ir-mega-menu-row" }, h("a", { key: '293353ddcf05371d40ec36af127d02aa0a4f31bf', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'fe3d9b2b94d9593678ec06c2d5cf6fd449adc4e0', class: "ir-mega-menu-row" }, h("a", { key: '5364700fb2a97f2285353e422a1d95ada0cb882f', href: "poilist.aspx" }, "List")))), h("li", { key: 'aed2194d3de8ffc3854e658a2684a405579c0a8f' }, h("ul", { key: '77ee2800aff66391d1a7759b92787388d08557bb', class: "ir-mega-menu-column" }, h("li", { key: '9cffb497691650718377954323f9de889c9c70c4', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '2001695512920a045b2208163352f644bddf9025', class: "ir-mega-menu-row" }, h("a", { key: 'e709072c78090a07a922a70e0a1760d669f94e7c', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '7dbb907e5dd7e670cbec06f67faf02603990caa3', class: "ir-mega-menu-row" }, h("a", { key: 'ac903250d8d01621f871cde6c8e178bc71c64f1a', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'ee7bb9076307524a48e84a5e95e310377dc1c002', class: "nav-item" }, h("a", { key: '19f442557b479764ba7264e3a2299b8ecee11f10', href: "#", class: "nav-link" }, "b")), h("li", { key: 'aa9bde7c33602b280769acfae1f67907f3524708', class: "nav-item" }, h("a", { key: '28cd2babdd06374921b1b15a3ef690d2d75703f7', href: "#", class: "nav-link" }, "c")), h("li", { key: '450fe6ea5e8cf95c46a853840010188d6951d2e3', class: "nav-item" }, h("a", { key: '11e27350a2f8c727dc0851695d751ac7e6f823f8', href: "#", class: "nav-link" }, "d")), h("li", { key: 'c9f3bc538b20f06012a81a2b410f2621ef73d077', class: "nav-item" }, h("div", { key: 'c5740926eff6beb442f0b3dec539d7331fbea9f2', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'f34b8c43afa308aff0bbb92eeb40f55c8ef0e441', notificationCount: this.notificationCount }))))), h("div", { key: 'ba23f6a6418a863c3e0aabb65c8eaa49b97317ae', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '308e2edad98394637b3d6076c23e5a6649e34caf', class: "mobile-menu-header" }, h("div", { key: '7c9d31f9e9191a324a066b65c83cdf447c1ba2a1', class: "hotel-name" }, "Hotel Name"), h("button", { key: '1b59e8582772c1a02e0ab2fa5348f3ba303e1467', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'afac2a3ade24a9bc3ff01fc0e23d7a7cb113c432', class: "mobile-search" }, h("ir-m-combobox", { key: '229c1fece3d925c947f0d9431825225779f8c7f3', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'df606f2d636b4dcbada9e78d19fa5c26dc92a472', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '68f17a45cafac71a9f7b442d4bccce52801b8599', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '4cdd891f63bad49418443722c200e537fef71cb1', pages: this.pages }))), h("section", { key: '8e0b12b4050fefd218046370ab54f43ae170726e', class: "p-2" }, h("div", { key: '1df63f5eadbbf0a32b5df1aa2ea5f09255fef45d', class: "row g-3" }, h("div", { key: '0f6ddab0ec7fa8c30fd48f26fd3bdb41a14430b8', class: "col-md-3" }, h("h5", { key: 'c98f67f374e0cb3d1fa0ad924f3aef3e3e782ab8' }, "Static Options Example"), h("ir-m-combobox", { key: '28b7daec11616337db0e8a895a9ddf8e3a425e1c', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '066026af2e3a52e9d9db3e2a96f01a0a54c1cbbe', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'e55fa535346e64ed21ebe4724a090b34e14ca69c', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'c77bf741ec0ddcefa8dd5f03064394399f8d5be2', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '05f3c2c1c2a6a47250e6b9b2e985c1769107d4fc', class: "col-md-3" }, h("h5", { key: '7f6847342a94c6114bf2e6a3246f4067f4858704' }, "External API - Countries"), h("ir-m-combobox", { key: '9a7d1d82607122af1b08cf40f89cb01ea6aa7c59', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '6b62677348a0e903ace8eb754f495adb9298cdc4', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'd5f391031477c3a18ede5958358313b3bd6cee93', class: "col-md-3" }, h("h5", { key: 'bb2598fc5a4c307760c13c337f48d21b64bd6d61' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'e407ea6310fe952e3e5ac252ec09f235753f8b09', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '2cd991d9d71085b35c4b5a1de59d43b3c2bdb5ae', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '6a4736b3befdd8f5dd842f2cc1eb438db34e15d8', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '76e2c9a63fb881927d868595964bb7278df6c8ac', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '479179f16a3a1c4e40ec17170a5cd3d19070c8d9', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '02d3c24b5b67fb3e9c1d3851e168abd168a0ff70', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '25b18ebc3335ba025e922666a949a7b63175e803', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '2827c5dde0cf85db6c3f6ba1b361ce7d233cccda', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'c6f1ce7ad8450e67f41b841c3e83761aabd04433', variant: "floating-label", class: "my-text-input", label: "First name", style: { '--ir-floating-input-height': '4rem' } }, h("svg", { key: '7362a49afe8f6ea7923db4e74ab1df9ade7ba5c5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'f098082fa79791a4bbee9e2e603c52f5d5001c5e', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'baec6e051d1cf764ffffc5bdb1c35ab019c52577', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'e4d4594ef0cc27021af3bbef842ab1137f412135', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))))));
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
