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
        return (h(Host, { key: '0f89e4c06a686d8f9a4151e46dbd972153b57e75' }, h("nav", { key: '0a82adb3fc71a1822d4204c03cb9f56107db7a02', class: "modern-navbar" }, h("span", { key: '48b9823ef19238ad661a3a541db218e406377f70', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '853a5b9783e9089045ca64be1f7ba02b857a6ba5', class: "navbar-container" }, h("div", { key: '80678a83ca76b3d5892b9c0adcdd9df16224be4e', class: "navbar-left" }, h("button", { key: '8f9c1cfe28663d7286724121f4b2cc09436dfce2', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '981338837eff8f413fe85ebce702939bd36f8cc7', class: "hamburger-icon" }, h("span", { key: '09e29c0292300c42d449bfa6b98243e23e346d2d' }), h("span", { key: '2c8d75f710488a179ec5586e7bac9c997be9ae95' }), h("span", { key: '6d159898455898f0d4d883da1e218601dedf7638' }))), h("div", { key: 'd27cb8efaedae21760865ff9f462c5301474dbaa', class: "navbar-brand" }, "Logo"), h("div", { key: 'f0568e1eafa1b412327efd0dab74edd7d4a4b128', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'fe0ceb07889360b8e26bf3f84d96eb4846c77757', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'b8bfe72f2c1452be5a657c52c67e631daa6e9d26', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '304c108ed0298ac451a78c5745411ccdccbc4478', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '50348ab2bbdeef664e9824dd025ee30aa5f2ff68', notifications: this.notifications }))), h("div", { key: 'e924a377ad15afbda4d6cdcdaa3c81cd685b12b4', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'a9a208d68c32411e90558c9b08adde681bf005a4', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '20e56917337582964f77b0fe33ef2bb42eac0fc9', class: "navbar-right" }, h("ul", { key: 'c050d633ebe507d5321de5f9ae123245ccb43a63', class: "nav-items d-none d-md-flex" }, h("li", { key: 'eb092901b60902af46987fe02b389bf1d9e5a740', class: "nav-item dropdown" }, h("a", { key: '3a2731217a9ad4fce4f21b0124b23d8af4103a17', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '8d6cf443f843cd9def982da0d6dcff0c1ed929c2', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'e62b9cbfb4b8f851b90e0d9c992cb0c310e585ee' }, h("ul", { key: '765460acfc2d2c5dffa11b4496870336cafb335e', class: "ir-mega-menu-column" }, h("li", { key: 'ef0fe254cf4e6b48c634e8819349652ec5a28477', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '2d9e3d6433bc5e37c5587b49022b712a81ac0c12', class: "ir-mega-menu-row" }, h("a", { key: '5c4f7c1733116463859440d8b512bc20e63c15d0', href: "userinline.aspx" }, "Users List")), h("li", { key: 'fd3013128b2ef37ade9c5e1e20cd87c2391f471f', class: "ir-mega-menu-row" }, h("a", { key: 'e7cc0e6dfb69cf6ef21440bda202a972d34d1a7f', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '09c1eb93df2db4195d7c69c3042d30eb3fca9827', class: "ir-mega-menu-row" }, h("a", { key: '3f96acf3ea9b06da356e2a2b3f6f9a5f291d8c58', href: "countryinline.aspx" }, "Countries")), h("li", { key: '81dbc8d82f0055c08b9460046b0f411bf8300186', class: "ir-mega-menu-row" }, h("a", { key: '073c105a0ecec1337b3ec4ef5064726c7f8b1cf7', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '38aaae5e3a7e28ba1122563c1058b4777e608601', class: "ir-mega-menu-row" }, h("a", { key: '896a9adbaf1f3a99685e9bb1ed91c9464f91755d', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'adb4769da9e0c64703ec0030aa6a62dc358a4a4f', class: "ir-mega-menu-row" }, h("a", { key: 'd4b855be3dfd5406b7a0ccf28ccf7bbdbdcaf23e', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '0b7287f51a1a2f70d63dc524dec7292e12631d2e', class: "ir-mega-menu-row" }, h("a", { key: '44d70cf927cd80c06abf8058927d4e16b04d6bda', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '108bf315ce7eab5d05dd20b1e1c06c9169b9ca3a', class: "ir-mega-menu-row" }, h("a", { key: 'baf629d38b2cadd63a4aca6aa1611054891cf959', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '013db19d880f9a9d786ed3fd9ea99909435f5b50', class: "ir-mega-menu-row" }, h("a", { key: '1db77fab9d9566ca537aba39c5323788b4131800', href: "foodinline.aspx" }, "Food")), h("li", { key: 'f4197d54dfacaadcc9846ad6ecb89cc37be51aa7', class: "ir-mega-menu-row" }, h("a", { key: '5cacaf573b543513e2ea5ae8bd0824e4c1815553', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '9a274fed1b83dfa5a3ff5379d816617aa3b0b0b5', class: "ir-mega-menu-row" }, h("a", { key: '64f985a38a19d1c871e43d309e249317018c9f3e', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '6834c4a6a16d3d3c94ea87248d8c62c0df01ef42', class: "ir-mega-menu-row" }, h("a", { key: '5803f3bb864d935e2c5213287ee302a66b722537', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'c9b80452ae50098a4861650fd351c41c2ceb1c0a', class: "ir-mega-menu-row" }, h("a", { key: '3f7eb57782301f80731e0581a9cceba6d760e463', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '4a3d5f95fdb5a0e0b0aa125cb6edca7bca4c1613' }, h("ul", { key: '2e7a86c6d0e71dc1b6109b2246095104ac4a4bad', class: "ir-mega-menu-column" }, h("li", { key: '154e3cbfc1477049efc06cf92219b8147b4d30e6', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'e317c614955c2692726f1c0bb8ba1299f8d788c7', class: "ir-mega-menu-row" }, h("a", { key: 'feb4ef551aa83e30238ade2d03d385a5368305ec', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '1f319bd8f2c96f0c843af38ffeae089184213961', class: "ir-mega-menu-row" }, h("a", { key: '188b6f808859044765468ae1328e7414d2d7c4a1', href: "aclist.aspx" }, "Properties")), h("li", { key: 'b8179c4aed3d56cb0ecb1557a1d89f433855924d', class: "ir-mega-menu-row" }, h("a", { key: '3e42a8b99511d55e43fc5ec2f58c43eb417412c6', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '54c08add72b40b545a5f4cc95197c4b68c35f2e9', class: "ir-mega-menu-row" }, h("a", { key: '8c3412ae262a35df7286073d636623349f722a87', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '0b65ddd0ee25b16e03564dac46396f6eb7505a81', class: "ir-mega-menu-row" }, h("a", { key: '1c8c53e63cd19ca77b2b00c986886019514e084f', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '2d456f91b7768d59d05bceb377aba60301b7ea33', class: "ir-mega-menu-row" }, h("a", { key: '4201220f7ef30b157ab985ff8a5f2265e924161f', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '84ea6c100551d60b29db86e473a1cb1734228f08', class: "ir-mega-menu-row" }, h("a", { key: '3a55c790c6d33d8d57e38b7f29c807242e522d77', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '868d7e108fab40f6ef9de0ff2d0dc2c6316edff4', class: "ir-mega-menu-row" }, h("a", { key: '63fdb6d60ff319da3783ac6c7df553b6d0ddf316', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '633e8dde426f2ecf513889bac225666730a82b07', class: "ir-mega-menu-row" }, h("a", { key: 'dc874f2864b9b29643422f21d5d945b3f8f8afcd', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '4bd1c277ecdf4062ac85eb08385011645c9b8136', class: "ir-mega-menu-row" }, h("a", { key: '937d04e26f0d3c28fdaf9edc2ffc56d23e9d1f04', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '9e27ed1f3059c5ba964a77e72347e5dc88604cbc', class: "ir-mega-menu-row" }, h("a", { key: '06c6546b818d529614a1249803186fbe99c27c6e', href: "billing.aspx" }, "Billing")))), h("li", { key: '86742be8e53534fd705e6a0987d1df3b7a44e448' }, h("ul", { key: 'e63fc45038180e57e50cd1c1715a3dbd838949cb', class: "ir-mega-menu-column" }, h("li", { key: 'c03cd6d99b6ad249c3d1a5c2fa5c4132a2395da6', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'dea67ad0155242e8717bd1d792592d00d6a2ec50', class: "ir-mega-menu-row" }, h("a", { key: '541d337729fa290c9cf7a525a9ed467f2803da25', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '1e4a733f6a5e8004912d8f3c137c9a4d1822848f', class: "ir-mega-menu-row" }, h("a", { key: '958515bc8c1f97f2805b840241f38fc05fbc7974', href: "poilist.aspx" }, "List")))), h("li", { key: '6487ca2cdeb710ac624dbb174dda6c4789bc07e9' }, h("ul", { key: '96e6d23d9dce4fad4ccc6baa40dc0c5d9801e20f', class: "ir-mega-menu-column" }, h("li", { key: '703b9d3ed12092e74898db332049ebc5ffbfab8a', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '29960ff0e3482ec00788478a9d64d12c47dd9662', class: "ir-mega-menu-row" }, h("a", { key: '039fa6b31a68ce08dcec6b6052417ccea107cf2b', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'c3b0deb3296e72203e2ac9638558bbf5cd11b1eb', class: "ir-mega-menu-row" }, h("a", { key: '18fd2456a183d579962474f09f21ba1ce182ff1b', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '73dd2f7448488192b75e9667cbf40306c27d24eb', class: "nav-item" }, h("a", { key: '622cd4e26533e9bd1b5144d5da08916eb7714070', href: "#", class: "nav-link" }, "b")), h("li", { key: '024802ba7a5640fdd6f2f4477684a5cd46203195', class: "nav-item" }, h("a", { key: 'b1d239d9c8f5977c38130d2962b21da15de33ccc', href: "#", class: "nav-link" }, "c")), h("li", { key: '726d3796c50e06c5d1568e2be7fc61baee3d1190', class: "nav-item" }, h("a", { key: 'fefaeece7692151fac6fbdc02c87142b005af9f7', href: "#", class: "nav-link" }, "d")), h("li", { key: '4d66b3f35615d8eea12a8b55548b43138a54e715', class: "nav-item" }, h("div", { key: '8b44f8fa166ce9b12f3114176b9548ceeab301c1', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'ecdca2fb825ef98a660385cd41b377912cd6e452', notifications: this.notifications }))))), h("div", { key: 'be46d9857683523eb391e6cdf91ffccc6872420b', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '141f3a605963dc39213be7af0fe063c9c5b15c9d', class: "mobile-menu-header" }, h("div", { key: 'd7496ddb429407028d44daa73dae49450c003643', class: "hotel-name" }, "Hotel Name"), h("button", { key: '2fa6f68e43c9d3ab8dc5a9f634aee9c483b188a1', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'cfab6b014dfddbdd22706c04b4b57d25c9980929', class: "mobile-search" }, h("ir-m-combobox", { key: '51414e6375735a63d9f8777d5bbbea9242a80d21', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '68c4e29ee0b693bd298e9948aaea33a35eaf5b74', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '77d221d084530bf69d36179e61ad043a47e95153', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '8708eb4c3098ce78505eccc8f1b72b10816b650c', pages: this.pages }))), h("section", { key: '40d5c28bebcb638b574455fb24a9752d5312c9c6', class: "p-2" }, h("div", { key: '7bc3eb2285be410c2b102c43d9320415237851ae', class: "row g-3" }, h("div", { key: 'fe953afa070f12628d5bd7f898f1de5a489124d1', class: "col-md-3" }, h("h5", { key: '40154545651cb9754fc4bf1192fc041991294802' }, "Static Options Example"), h("ir-m-combobox", { key: 'bdbce23babbeb90d3778ed4756edb38874d428eb', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'f896f02c480b37797014e273ef2f415388de489d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '618a329b01881228b0049897078df5f53e76b227', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'a162e230bb9a32c74bbfadbeab30f39fdb3a6b2e', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'bab6df11df874164b61341c8752738502225de2b', class: "col-md-3" }, h("h5", { key: 'e9b757be7e06ab9d3b62816cc4b619dfbdf08dce' }, "External API - Countries"), h("ir-m-combobox", { key: '3a8533d18e40a59a38585c84da6aa7efca3cc220', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '53b5b8e7e54330e51e3daa0a27c0c4df705f8432', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '5ccdf2180e1019da9e6513daab914d9fa4c75c6a', class: "col-md-3" }, h("h5", { key: 'aeb1a6b4058ffc77c91d1b5ead9410e79061db7f' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'c9bd793f5fa82fb6847ce7f74a55b5bb9c9b7c60', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '14826de2f6b2f3beb4c8e043143e93484cecf500', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'b4aabd1d549013166331b1e9093a81055ad8f7d5', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'f89ba2bae36d2cfe3627fe0ec98b356e986afacc', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'a51c4b51b02703b5dbf22558b9819aa452ccf2c0', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'c29378398691553a6a5a77a6ca047b4580acde85', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '8b134fbad7344b448eafa0a05da26f199b72c1fe', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'c9f793b710be746663c0d69b728c68865db3ea6a', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '02cc06069de1ed6a94904a771c0be5885f7f0548', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'a39fae232532670bfc16ba27c9b270ff3a6077f5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'e32e3c1541c9b82cb3f2461fe857737bdf48cbec', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'ac5724047f0ab7d9f30150fc852838b3f4b45e38', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '1ee909b07ebff2f74ad3ea9ef6f70a62ea110601', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '4ba6bf37dd37d03beeff760768d5fbf243a0670b', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'f70b5348674e40fa1db3e6b89e00ff38addc04eb', class: "my-2" }), h("ir-select", { key: 'c4b10dd0af70d92e89b74b216d08e316d21b0c5c', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '303b5093eeecb5ffc02ba6721ac9e15f1863ef5a', class: "my-2" }), h("ir-select", { key: '9d58d29d759f846a014c5b54d6810f8e9d9ebf31', data: [{ value: '1', text: '1' }] }), h("div", { key: '8be721942ea1e6d33e743c3b491f258125d38ce7', class: "card p-1" }, [
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
