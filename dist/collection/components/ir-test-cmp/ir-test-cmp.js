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
        return (h(Host, { key: '248af0c4a21f77e165dcd07b67fe420312f8e1c9' }, h("nav", { key: 'dea00fa044ab301c616b046b7c3f739863f841b7', class: "modern-navbar" }, h("span", { key: '28a0247f5958aff90e6844b06d7e2710d62f6149', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'dc9bb9141f4ae969f35c7e4bc463374dadc039ce', class: "navbar-container" }, h("div", { key: 'd3bc23db57e709e1b8dbbf0d8991fd947217982e', class: "navbar-left" }, h("button", { key: 'e35107a5d71e2b1c3335720ba00ba49cd49d4c7d', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '7132694970ad9b84d1a54a53b8412a7c4b5da015', class: "hamburger-icon" }, h("span", { key: '6251e1e48f8c47cf7f8928753ee811c07dc609b8' }), h("span", { key: '5e794a3fdeb8b2b6147034cbd430af4eca20ebde' }), h("span", { key: '2b4997abaae2d517e4612184a9650e12ba011a6f' }))), h("div", { key: 'f3163a47df7428a36234719cdf7e02648acb25aa', class: "navbar-brand" }, "Logo"), h("div", { key: '801d173e77c78c5e97dfe971096954f643a3403f', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '0482437db0617fd4ec6c6e39593cfdb446d09bcb', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'b03d1c7a9e63a90d893706f9956598dd43520e99', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'c7dbcd78fab254855211b8f315e6e43307134ca0', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '24341c8c06f2af664ee5d4d515ba6f56aa129c9f', notifications: this.notifications }))), h("div", { key: 'd4ed6b8e9b959a82276958f540f40e4384331972', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '1eb89c89f75adc470c46cbc44b479f9be4f7e9c5', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'ccbb4aa98f07d895ca963e6fc39f419555eaaa82', class: "navbar-right" }, h("ul", { key: '8a4c0fcd7fd60e47d165d45fcf56b6061e6f8f94', class: "nav-items d-none d-md-flex" }, h("li", { key: '0e595f46acbc544d06deb2677397b8bec3a02d39', class: "nav-item dropdown" }, h("a", { key: '98a9a3cc361b4cd944ca8ca1471eb484fbc10637', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '7ef42c0cd96f9aeec2bcb35075993a4f9418c01b', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'cea0017f777445df0153c2e56e9db9943792e461' }, h("ul", { key: '4a68df7e1b2fd64023f40d5033bf326022c1ddb9', class: "ir-mega-menu-column" }, h("li", { key: 'b34ca03dac9703622929867040bd88691d6a2bf3', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'd7c80862bc91a11edc3605a76502371f43b25423', class: "ir-mega-menu-row" }, h("a", { key: 'fea6e4a0c0c647f43ce6821aa36fa45233c08a2d', href: "userinline.aspx" }, "Users List")), h("li", { key: '984e65f4f96fce0f200c90d8791bde4b429ccff5', class: "ir-mega-menu-row" }, h("a", { key: '1510d5ed90677d90a27a996255e18619fbfb1a1f', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'cd94545431915a59fc40b4ae4a899ec64218d823', class: "ir-mega-menu-row" }, h("a", { key: 'fc75145a6187367b5ce0ca238a5b4a0279316e64', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'bdabda3b9c68f54a82016440523f1f17a122d507', class: "ir-mega-menu-row" }, h("a", { key: 'f30eb4aa0335ee555488ac6ae1704ba7a2ae95bf', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'd50b941b93ddceaecb5998260770642679d44326', class: "ir-mega-menu-row" }, h("a", { key: '66d16cdd26239690d29af2ee7d6b4c982b1c3061', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'c9c886a90642b177f3cccf54160756c4a214d1e4', class: "ir-mega-menu-row" }, h("a", { key: '2a1d181356e59f9bc0b0ce30a499da1e771d5cee', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'e4d5bb6f69cfcfc88c860be5c78ae11c6c08c966', class: "ir-mega-menu-row" }, h("a", { key: '9e9fa2f07869afdbd91ef5207b5b5f24bf33d2a6', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'bafcd4bb2aa1ae5bcdf491b7fe427061a70fc9cb', class: "ir-mega-menu-row" }, h("a", { key: 'b2a133cae08bb06efba91f52a16da8c446ed91d6', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '3f0acefa7e96898fc2bbe1c3386848cc2b26f0da', class: "ir-mega-menu-row" }, h("a", { key: '79b3c69797c0625ebc5a678ba9b3a3046c91accd', href: "foodinline.aspx" }, "Food")), h("li", { key: '8149356bad2edc77fd20dc93d346493a41dbc1e5', class: "ir-mega-menu-row" }, h("a", { key: '3c6cd70b6cd171eaf3ddae9cc099796799e82dc3', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '49e578e9251a412cc181d0fdc57e429b45d5729b', class: "ir-mega-menu-row" }, h("a", { key: '38ae405f4ecfae23ba6cb2a63bc01efb5625dd78', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'c98a5eb3e74d207588016672bafc8c4153a70077', class: "ir-mega-menu-row" }, h("a", { key: 'f99413f573cafb926db738d9e34f7eb0ca585a2f', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'c13aa02d8c0058dee637c64ab73677be60e4bd85', class: "ir-mega-menu-row" }, h("a", { key: 'd0b025b60687eed387e46c5dbbb5ebacfd6e60bc', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '0f2813d057e52d6a7104782131a33c2b207714e5' }, h("ul", { key: '7a00f4f717931f3a8cccf3cdd47f653c07eb3527', class: "ir-mega-menu-column" }, h("li", { key: '5f01c70d9846f5615ba670050c215f930eebc939', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '86d2dde95b04dfad0136418b73384ea20c5c84b2', class: "ir-mega-menu-row" }, h("a", { key: 'c31eb63bfd702c990a9ae793b5d06b4003b0ba2a', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '0fbc1318841761b5b16ee65d8d008f090ffb7716', class: "ir-mega-menu-row" }, h("a", { key: '8d91fe02ab3b355f978fb392b9e904443cfb07ce', href: "aclist.aspx" }, "Properties")), h("li", { key: '09cfaa16a84944b3c02240a34f1af31eddc6a429', class: "ir-mega-menu-row" }, h("a", { key: 'c8b039c7a3457ecb5331f8c85f0e140fef98c74a', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '43aa98f46eb80d82abb81e177b40e49f8bcf7e5f', class: "ir-mega-menu-row" }, h("a", { key: 'a73771b897ed69b3c6ca9e54d02921adb3adb59b', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '984cd1b90b4bbd385d8039ebd15a2b1abe571974', class: "ir-mega-menu-row" }, h("a", { key: 'a252e00c624f8ce1bc351459690431b532fa17d1', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'ab1a91e439c1f3c4b79df5313838d0f1f18a52e1', class: "ir-mega-menu-row" }, h("a", { key: 'd413421959294592baff13a7555f3fdc2e1c4330', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '1438127660dd73cb569a93f93efa1ff831c57955', class: "ir-mega-menu-row" }, h("a", { key: '4ce7d997d1ac620b0283d37bca3709091f9d0186', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '6fd9e8364c503c8b0950aba676e5e9a2f84f738f', class: "ir-mega-menu-row" }, h("a", { key: '468e6883ef134e3411156c0c47545cfd872731a6', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'fc3ffdd3f92e944f57b3edd479cb291e5711169f', class: "ir-mega-menu-row" }, h("a", { key: 'a834d77f5d362a30325726d04d82cdd9f6d8483a', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '40a7038555e28f71cedc4ac0a1826c7166a4aca2', class: "ir-mega-menu-row" }, h("a", { key: '42d79a40c2292a769f26969b1fc90994681e309c', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'c4e08270395016106695d4be58e7ef95ba9cc351', class: "ir-mega-menu-row" }, h("a", { key: '8c03a5fd29be6d6035924a0c7e1277b231128e66', href: "billing.aspx" }, "Billing")))), h("li", { key: '60624c0d67179b984d220ecae1898b387c0d2362' }, h("ul", { key: 'f5a28aecf030201a2961df930a674a5426a0a012', class: "ir-mega-menu-column" }, h("li", { key: '66f19fbb4de50f75b39ac1626545b0c2b1bd1443', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '7ad11da82fa9d1baab8d5cf17a8f84b59b70fdd5', class: "ir-mega-menu-row" }, h("a", { key: 'fd8363e086b3d24882bf1e8ffc0856d2605bd4b1', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '5d307b06e6678fafacfe8fbd444824f7338ee920', class: "ir-mega-menu-row" }, h("a", { key: '2bab231914233636f599523434dbd0722ce7b757', href: "poilist.aspx" }, "List")))), h("li", { key: 'c4c7e01c83fd3adeb8d075d206448304dc5309c7' }, h("ul", { key: 'ae03a7f43cccfb44e8e2d236c38843c6fa2e94a8', class: "ir-mega-menu-column" }, h("li", { key: 'd5d190092e9317cb5f88d5268e03e22dc7e475fa', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'fb4d41838c9893b9b71a0defaa3e1c78e393c5d1', class: "ir-mega-menu-row" }, h("a", { key: 'e1862ac96ed9c8da4ff0f2f8b32217479222c086', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '550c1aa4d301334ce631e91a76b7b3c92c178955', class: "ir-mega-menu-row" }, h("a", { key: '2f0ebedd8745e82fd24f229f0fb19907e8006fa0', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '67fb14ecd12c3f974b630da1a709aa025047fa7d', class: "nav-item" }, h("a", { key: '06db802687be4d27be8db02e5519f3044cb4e60c', href: "#", class: "nav-link" }, "b")), h("li", { key: '4908a8d02fbef3d654dc93011182554ca5aea162', class: "nav-item" }, h("a", { key: '1b78e993c9ea09cd178b23200bd2ff14fb9fd5ba', href: "#", class: "nav-link" }, "c")), h("li", { key: '358e43651f628b9187a371fc4870dde04b0253be', class: "nav-item" }, h("a", { key: 'edcbe158ae5f1d991add0bcf0a612d0b257fb548', href: "#", class: "nav-link" }, "d")), h("li", { key: '95fa215a2213d4e86d5cf5d1b9fbec042fbf3fee', class: "nav-item" }, h("div", { key: '40265f4b431860961c50579fe72ad029c63275f6', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'b98772db3b9add545883817c3a65d99e49d9ef75', notifications: this.notifications }))))), h("div", { key: '535e9f38eff93f074964ba126ce16b95345aa16b', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'efe91dfda6cc55e49fa873ea3c92f6c79b898b17', class: "mobile-menu-header" }, h("div", { key: '19fd5f11356d6f6bf1b94f38afb60093796e5136', class: "hotel-name" }, "Hotel Name"), h("button", { key: '18247f167b3eb075883465ce582be86f67376894', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '7d5eaa6ce284b8326d32375b4c7301e65e851b76', class: "mobile-search" }, h("ir-m-combobox", { key: 'd665054804f048c94ffb17093060012acb5d3538', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'ca6b4869aeec1a785e651747230d15eec72a748e', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '57eafe01cbee735bf1e77a6181bc6338619f1163', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '0fbd04b1300c71b0642e2f2ad8f408f83ac4d4c6', pages: this.pages }))), h("section", { key: 'cb77511060ee198157bfee501bf6a641e121eff0', class: "p-2" }, h("div", { key: '1d18859311c73b799bea5655a929ecdae6154910', class: "row g-3" }, h("div", { key: 'f70c00683f3445c5301be0b16b7e788150929a8c', class: "col-md-3" }, h("h5", { key: 'fec12a757801bda6e50018c3d4b957950bac9c97' }, "Static Options Example"), h("ir-m-combobox", { key: '4ac7e8715d595bceec4e43db847dc0e92a128024', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '04887cc8133291021e0bd5bc993bcc1b000525cf', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '872bf11aaaa88b642d9d8081b4a4d7debbfb12d2', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '7c8404598baa905429b84bc4ac2c17ac88c2b727', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '7b09cd4ee1261f95da8188429cf3500fed14e7ac', class: "col-md-3" }, h("h5", { key: '410e5b7b4727994bb4799317977b4a446e7743ff' }, "External API - Countries"), h("ir-m-combobox", { key: 'd1affd9c8a919d60b19ccc3d6ad0ed137bcc8696', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'ae75a8de5f0512b9bbfef0496728fa8c62fb43b6', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'aeb51b09aeca2b0ef368a33b7851ae998b175cd7', class: "col-md-3" }, h("h5", { key: '37e67b3835d12d9e870b84eff5a82b472df9fa3b' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '7e897812c129dff15e52af66b2dbebe7451d4183', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '0940ff9ceb2abe4ae0162f2efb8db83a6a792e72', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'dd54619dff652f1a36dd6043bc3d44e02f56c1d8', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '5630ad748d0e22189fd9cee7f50ee92fe3744b7d', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '83f8c0c478520703e12427272574858008f3d124', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '5d5012eae9871482abc3552cf32d65813731901e', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'a49ceac7ecc97b778a7ede85f623a15b2788120a', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '5861b2d0d4cec052c732ea59b167290578194a59', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'aa352d739af72ce6ec251d97dfbe5149cf43643f', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '1ddaf1d3b7aa52556c8b26f12a6a7ceabe89b7d0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'bd225bbb73cfe75104163fe3b87a253a2779dfe7', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '28cff6e7e13b9dc1181fec2f642248b22a9d5fbe', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '18275acd357cd800d4d39f9e9f223c21b0a7dc0f', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'd637f54ec1858d4a44d087dc4e7aea4a83701449', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'bd66911861c5f459df6b93105694f4255d49b366', class: "my-2" }), h("ir-select", { key: '634df00189dc5c3fbb7d4c605285100c2fc2b271', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '08191f1bd072bdcfbc84901ae956780a78fcfb4a', class: "my-2" }), h("ir-select", { key: '7fb5afa7b3e993956926c5e41a45933c1b8fe63c', data: [{ value: '1', text: '1' }] }), h("div", { key: '710375607f25071348931e8d38ac1f55de5b46fe', class: "card p-1" }, [
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
