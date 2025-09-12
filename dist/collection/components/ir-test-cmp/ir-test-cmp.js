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
        return (h(Host, { key: '559d02db98ea026276e6c15992e9b07697ad3480' }, h("nav", { key: '86f35e34a114c18ebf177b37d6c6c138b6b98426', class: "modern-navbar" }, h("span", { key: '068891262584bf83064891fd9e4f2d6e149d5ed1', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '97f02a02315906a12d81a44771a8535790c64ea0', class: "navbar-container" }, h("div", { key: 'f7434af4bb44788752d37ea3c7468ae2afacea3e', class: "navbar-left" }, h("button", { key: '30d5de40205c37db4bd2af8182d7ae44c958aff4', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '8ead6acbfc6b4aa203fc5b4c925185722396b516', class: "hamburger-icon" }, h("span", { key: 'b746b2fffdbe855bb3342b7eba1c03a3633f012b' }), h("span", { key: '997fe5769efe10b7b1a6fc141c7d6f3844eb1eae' }), h("span", { key: '68babb28a65cdbed1b2e8f9b6fe23280beb3cf68' }))), h("div", { key: '700e52055108e82777b6dea5609e886d551e648e', class: "navbar-brand" }, "Logo"), h("div", { key: '92484a37d4fdcdeeaddf5e14718052450a4b3735', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '0513e0b04303efadcb489984e64f4756c4e9f16c', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'b00fab305f41ba35f68a6e2f5568da89fa5a42e9', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '1ae89e454dc77db99e41c42cc550bf4e1601ff98', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'fb32c5c421cd7f17afce60e778a4dfdd367f2c1a', notifications: this.notifications }))), h("div", { key: 'dc48a3297a274ab17b248cab22eb30793a2cbde9', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'b5862a59c47d842373fce1d8ede6774178c86512', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '5c6314e3d6664da05533e05dc267cbead58a4be6', class: "navbar-right" }, h("ul", { key: '34b1da930ac71a2353ea271f2b7ecf948a8d72c4', class: "nav-items d-none d-md-flex" }, h("li", { key: '4080738847c2f5012d62ed652896f7afcaa0e753', class: "nav-item dropdown" }, h("a", { key: '0e836c76891f1d495864975a63a1f2ae67632cd9', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '1be08e67cba58931d2b6081ef1a185ecd80a1b05', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '3ca03aab26f30f4250fa6a37a2e90a0722f8d0a1' }, h("ul", { key: 'aa3f009ca2bec804e9c97b785e867aae6650fe27', class: "ir-mega-menu-column" }, h("li", { key: '9753acfd64f1d34b014fe752f9648e56cbe466b8', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'c7682cb379c550b53aeed502a44571dd807aade7', class: "ir-mega-menu-row" }, h("a", { key: '08f1a0204fdc27d4b875696fc87027a257248fb2', href: "userinline.aspx" }, "Users List")), h("li", { key: 'b143be2ba0f0acd2dd98a7f29860200d3ce8c240', class: "ir-mega-menu-row" }, h("a", { key: '82d8aef2591d6ec7bc0b83cd2832540ccfb8b0b3', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '55db1505904cfd293364a96adb961b661734c288', class: "ir-mega-menu-row" }, h("a", { key: '5aa54a4497edd3bba5d53307c420ecca8b930051', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'cdb686a21ba636406ebba5013c528c167289751f', class: "ir-mega-menu-row" }, h("a", { key: 'c56911f285296b4fb652d72c8297a98907a16187', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'dffaf61ca61e093a7cadffa8efcb71f93cc63fc2', class: "ir-mega-menu-row" }, h("a", { key: 'dbbf4bea0861b3e02ae6b1d9b83b077a136bd3cf', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'ae4819e445c12ccba81dde384325be1d8cf7bbfd', class: "ir-mega-menu-row" }, h("a", { key: '34d830e05ea2417ce7b34f4a207e93bf4ef11481', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '2642de0720a5e0b9dcca26869f6b7f3b8394860c', class: "ir-mega-menu-row" }, h("a", { key: 'b06331b3ade312def0bfe0cc4023c79944b31adf', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'e67ae7c145b897e3f7b9b69c2d0ddf58e7cbac38', class: "ir-mega-menu-row" }, h("a", { key: '219eeb2aff94eff577e44961a5de8bf933025dce', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '739a42c2917b1a37e53c28aa44d44e30e7309ae2', class: "ir-mega-menu-row" }, h("a", { key: 'd59a45a390bea170d5af33585a032e5779ba1bed', href: "foodinline.aspx" }, "Food")), h("li", { key: '5716d5f880c2358712a5ebc74d921695f56f2688', class: "ir-mega-menu-row" }, h("a", { key: 'ed1bbdef29f51a2e55a0ea06eba28ca9ab3cf615', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'ff134e326e642388db33aa8380d3d487ed372862', class: "ir-mega-menu-row" }, h("a", { key: '35f27b1e1987c685b14f43ab9f45748dc34447f6', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '06b858a9604ff5db490aebe7f060997cba941879', class: "ir-mega-menu-row" }, h("a", { key: '28c7bba4fb232dcbcaf3804899ba9844bbae0ce6', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '856eec76e2a13c0e5c9a4e0bbd4e72bd126ffe75', class: "ir-mega-menu-row" }, h("a", { key: 'c17b43903533ad9362ecf51b11febde365db9a02', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'e92edfccc072a26a0e5a9c64967adf33a7c838d9' }, h("ul", { key: 'aa692f71cd5b7636c0834bd9c9f6392e5399ee77', class: "ir-mega-menu-column" }, h("li", { key: 'a99b59d98daaa107dc532d71515f0e895c4e94e2', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '5cdb1b481eefdeebe82bca7c233508e07b639451', class: "ir-mega-menu-row" }, h("a", { key: '7ce8448658c57980aadbe6614da6545da577d9a6', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'c6e1787d04344a53f7d33b4c0d70fec98ba61527', class: "ir-mega-menu-row" }, h("a", { key: 'c74d6db6eb4488bb168751b34c78e88198363df4', href: "aclist.aspx" }, "Properties")), h("li", { key: '1eea5db31577cb3b5a33abadc1b9b0814d4481fc', class: "ir-mega-menu-row" }, h("a", { key: '7740f01f6802981e354f59d25c05cf5b69a40c53', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'e6b727280f5bc073a3cc0d13d6ff9a5cd255898b', class: "ir-mega-menu-row" }, h("a", { key: '050dd961212fb0c79675e8d9e59af370cab492ec', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '9ee58fea22a495faf8b9ee3326adc81ea2792e8b', class: "ir-mega-menu-row" }, h("a", { key: 'eae80a4d647cc1f9d3a25f3babb49a1e9eb79a82', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '88adfb96e2340531d249036c785c47a63a5748ef', class: "ir-mega-menu-row" }, h("a", { key: 'e7428a31c40881214de6bbfd930afaa2b1c4f7aa', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '572abbe7d6f486b78450efd7446a37040723d71f', class: "ir-mega-menu-row" }, h("a", { key: 'cdc41b9b7022ce39251c5900eff3af56b7147851', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '7272a5b784f4663731f46c56305aad9053635646', class: "ir-mega-menu-row" }, h("a", { key: 'c0506f3646584daa111e08e8148572e5bf582e9a', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'ed193d0fb61d67e264b9057fe2d791f82d46bcd2', class: "ir-mega-menu-row" }, h("a", { key: '7b3295205b1148169869e613eb6cbffd42900be7', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'd1216b8986eb2022bc0dbb983c6455d8c543c594', class: "ir-mega-menu-row" }, h("a", { key: '0ad5ae20a6736206126fa8fc80431726bdd474a5', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'fbd815197b2f98e322c61780d5d65e06b655c04d', class: "ir-mega-menu-row" }, h("a", { key: '4e61625d37c8b47be3b0485532354b7331a2d54b', href: "billing.aspx" }, "Billing")))), h("li", { key: '627e01d6f12a5dcd20b3c17ec066b9f6eb567aa6' }, h("ul", { key: 'dc0762853d0f7a61793703b222e612b215407b3f', class: "ir-mega-menu-column" }, h("li", { key: '8956b5afb5c9e1f5ac3552154c5f6a0fc311e1dc', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'e9377bb23d784c1cd68b1dcb9e99d096851241a4', class: "ir-mega-menu-row" }, h("a", { key: '7141bac46616c294caf9ee7b35289401990318b6', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '669f47cf9e22ba8a3398526de75b8a17c4e6a1c8', class: "ir-mega-menu-row" }, h("a", { key: '99233123fcc5b7a4e64cbbb07c92195e215fd898', href: "poilist.aspx" }, "List")))), h("li", { key: 'a1355519132bd508c2c3adff68401f83361f2c5e' }, h("ul", { key: '786d663188417f307494cdfe6b982d2ab6c7d0c6', class: "ir-mega-menu-column" }, h("li", { key: '23e6508c5352dcc4c2aaa9457fcb801e5bddf8a4', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '7b933d2073bcf2f495a3985d44bbf8b64cd80256', class: "ir-mega-menu-row" }, h("a", { key: 'eb505d40b1c6e2aa636f784e31bc71647a7cfc26', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '25a04c408503611bc8cd70fd4639ac44876dc199', class: "ir-mega-menu-row" }, h("a", { key: '661c1e9542aa796db1331998e5aeb3c4d0f48c06', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '6dfd1e0ff4fa8fad4a12135cdf6a3f7e688dd038', class: "nav-item" }, h("a", { key: 'fbe435b36f4047363f5edba5b513fb2a30e16abd', href: "#", class: "nav-link" }, "b")), h("li", { key: '787850ec39995e68f737f79c4474e95120940de3', class: "nav-item" }, h("a", { key: 'c5b7aee8294cd5dc1559903c3c7594f5f4c53666', href: "#", class: "nav-link" }, "c")), h("li", { key: 'e1104e7a9a9d2dd1976dbe7e5d4d8166194986a3', class: "nav-item" }, h("a", { key: 'b83748d7e912396a1e8baee432da9b78c2352ec0', href: "#", class: "nav-link" }, "d")), h("li", { key: '0340e65348b9e8c54cc3233e8f7afa3a385e4e65', class: "nav-item" }, h("div", { key: '5237d40faea36e08a8f2498a2d28633e6d46bcfb', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '178681a13aaed82831a2076df3f5cfcf5e0afab5', notifications: this.notifications }))))), h("div", { key: '6115ea560eaaf1a9e7f27cd1a385703791edfd45', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'bb0f7a4eb6d62ff58c2af233debff169705dc41e', class: "mobile-menu-header" }, h("div", { key: '610dd2d8946d275806b909ac32010fc7dbbd62a4', class: "hotel-name" }, "Hotel Name"), h("button", { key: '6bc69c13a2a75dfb5800724477db84267286d397', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '9fabd480ff6c413da682b620b2004bb937b8eb0b', class: "mobile-search" }, h("ir-m-combobox", { key: '5c0107bef2e843422160eeae19b7349a6c80d838', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '97638f0a3e07e055124ad1f631dbe20782190542', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '3bb3ef9a747518aa82ff92163977b963d3766af0', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'd1e5df826fa7fee2d039a445e2ca623f951f6219', pages: this.pages }))), h("section", { key: '5ac49844e3402c3dbe37022c6c86786070fc84bc', class: "p-2" }, h("div", { key: '5ea0a0e7af8de2fde4b16581a0875c2768717c06', class: "row g-3" }, h("div", { key: '0ff40d95f3ed4b7d03caa1ffdc45f573ff1ca9ff', class: "col-md-3" }, h("h5", { key: '954b90e3d6895329d8a5a8e27c658034db4d8411' }, "Static Options Example"), h("ir-m-combobox", { key: '12bbf8df67840bf80cb4ed9febb10d0bd49f6ff4', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '5fdf8d7ac81c4d633d48d489065906deae1bed4a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'f22177023fdc6d3d4b8e7b4f284fd433b1ea6eab', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '3e17842b79c139901a7f0de15500af589c19305a', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'ad42e20a298631797b9645216b53af1f01b9e5fc', class: "col-md-3" }, h("h5", { key: '39c79113e07202cc937fd1d630be1b0ae7fd4ef5' }, "External API - Countries"), h("ir-m-combobox", { key: '1ec694fb61cc950f99a32da065f1286b12beab0e', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '2e5127ec41d5c6f5802ec313bd4cdd6da901369b', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '3e410e734ff24a83588341dd447bb5d1a91184b1', class: "col-md-3" }, h("h5", { key: '0cfa0138d6f56f2287ee0a8ffd2a5d225df0b878' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '0b12f756b4d9f1d793fb5080a588c5f13812e084', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '1e18e335200baa70ef593585f06a9890588e308a', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '41f147786dbf05528aa3c43621ebd18c5becbe50', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '3e244a1bba87314f3b0af640d0b9c3fc79f11852', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'ad45329eab0d9edea8e41a18f398d8363dfe1804', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'b0defe0bf4dd6bdcaec1fa3d20b1b920c16f5f96', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '3b45427e9568a4733adbeeaa28b6897c47e31449', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '43305356b672554585418c109deb564733404e2e', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '9c774fcabc974c400207799ce8e1ddb2cc0e4093', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'f13d7a0379024fa0e01868ff01ca23da5f914e4b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '86ae4940b26a308ac4947fca473d5f433c036ae8', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'ba0a2adca00261d096b711a25b26c0f39403ab16', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'bca3f63c22c96b92efe921e5ac8a5d91b6176b76', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '1d7d54c87727e21d921406ff695f3d591cd16d8b', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '7dfeabe2d415ad1236b6e8c79eb8a6f93e50754d', class: "my-2" }), h("ir-select", { key: '1334ba4482d973672076d3f23f4ed07660dd2594', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '1807e684cf70b308693249be678c6733c9215bec', class: "my-2" }), h("ir-select", { key: '020d83990de80730ee5a12f7a6e73996aacb69b1', data: [{ value: '1', text: '1' }] }), h("div", { key: 'e1d0d3a45624d6a2c85eb5cb07ba6ea1e968ef23', class: "card p-1" }, [
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
