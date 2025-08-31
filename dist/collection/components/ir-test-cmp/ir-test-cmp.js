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
        return (h(Host, { key: 'b4bff42fd36d65241fd016b285094c9d83bf3fb5' }, h("nav", { key: '920b8aca885c8d7b08d6d1b89ce3505e51deff0e', class: "modern-navbar" }, h("span", { key: 'f9fdb787c965d6157da1ade78809a033fe4108c3', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'dc4955526b5cbe33aac4cdc33abb9ac4617a47e2', class: "navbar-container" }, h("div", { key: '3d91a209125e0b8c08d5e9cd454a4268581f8662', class: "navbar-left" }, h("button", { key: '01a78b6953601e54ffd4e548010faa663ca3837e', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '84fdbefd297ceb770860240ea8af5025a7ebb8d6', class: "hamburger-icon" }, h("span", { key: 'd80973f490a9d7184afefdc8ae2e679a70056123' }), h("span", { key: 'ab6485f9d756e678f9f05684a5f254f7574679e5' }), h("span", { key: '5fcd886b644127f51e455323b79483d5cf358ca5' }))), h("div", { key: 'c1f28431d95cc40e4e47538d0e8ebe0ff2dc405a', class: "navbar-brand" }, "Logo"), h("div", { key: '4de18f683b06e472c060f54732904a1782112afa', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'b37957f12cff58da2e682015200028966e906293', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '01204402b9f368c0a1ba73fe7786cc2125a8f8e1', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '9d4eec65274d8b8f3cfab2054879d75b3c294b0c', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '2fce7adb5b711c27b7fadb9fa4928e94b701f19c', notifications: this.notifications }))), h("div", { key: 'f85131f8d5fcb9af5c6f38f235a9c21419eddf15', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'a3787c99cb0bf13ea200f8420d50a7b1e29bd079', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'f750049f4d58861e96d5853e24ab2e1452dc4bf7', class: "navbar-right" }, h("ul", { key: 'f3f61e5c6f1298a9bad0f373f5a04492799f3d1e', class: "nav-items d-none d-md-flex" }, h("li", { key: '11bc5c926ba827d6dd555c748161f5dca6f1a71d', class: "nav-item dropdown" }, h("a", { key: 'a01a0c339866e13bef413f5a96fb9bdf9fac523c', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '1f62b6766e75e191ca8018166eab4fb8cfb61f84', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '7464199adb9bfc3874d562c126a5f4d3c84d0d48' }, h("ul", { key: 'a52383f08de0a534bf442b568487bcf4431d4d8a', class: "ir-mega-menu-column" }, h("li", { key: '68cabe8d4caba8bece31eb3887de50f6f1142d25', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '2e06231f3b393237a1b80c314a154a92406add0c', class: "ir-mega-menu-row" }, h("a", { key: '65dd3a992affd292c94c810987c4a3b025f0f72b', href: "userinline.aspx" }, "Users List")), h("li", { key: '13242c0437c194a0fff76c17d9a143f95596b80a', class: "ir-mega-menu-row" }, h("a", { key: 'f4d5cdd12e3bc8a2986ace679725bea393d13b2c', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '976e9c588fbc00ebb798f36f628840543fbf99b4', class: "ir-mega-menu-row" }, h("a", { key: 'b805c58ea045555c125c357ee64f7994edcd6e37', href: "countryinline.aspx" }, "Countries")), h("li", { key: '484871d1890d1e7d8df3b1501d883fd151995238', class: "ir-mega-menu-row" }, h("a", { key: '507dda8e65de0a3d51c26a6a3db6209fcf7cad90', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '2f0fb5323f0710525649229c0e27cbfc72cabb4c', class: "ir-mega-menu-row" }, h("a", { key: 'cfe4299bd1636b9046a3170eb44288ec76d42782', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '9b50206787c4d8ef287f93487bd026052e3fd3eb', class: "ir-mega-menu-row" }, h("a", { key: '5109133cf25bc61d1bd024d64e041b6de68cee8e', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'f37db3e2504b677fb1bbdf325266b4a342201277', class: "ir-mega-menu-row" }, h("a", { key: 'c0ef21b44c7050abe599d5f62bb5ec80890e3b43', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'acc87ce9bd4268a7b8b7e4f045b2e26788d68c0f', class: "ir-mega-menu-row" }, h("a", { key: '09732be98168cccb2a6b969f9dbcf278e72e50a7', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '83ab6bfcdc49467be383c685b5dd57d5b9af5475', class: "ir-mega-menu-row" }, h("a", { key: '90749536ac2fa7ce00b348483ef8e77e288a8f80', href: "foodinline.aspx" }, "Food")), h("li", { key: 'ba239d87ecdbc1a8a00d468c8dda84c168e80b7f', class: "ir-mega-menu-row" }, h("a", { key: '043ace9bee108c5467b6202331cdb45ac47ce5c3', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'd61461f9ee5afe91be7912e0a6c3fb2a4ddc0145', class: "ir-mega-menu-row" }, h("a", { key: '1bebc2442a28c5e753e9918a3565b946119dabf4', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '0284b89de3a524ae7969e3190134c61e9e488946', class: "ir-mega-menu-row" }, h("a", { key: '8e5a36364dcd92668b326c004fad4c6d3513eeeb', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '73af64ca2a83e152da54a1ea2cc85ec42ff971ca', class: "ir-mega-menu-row" }, h("a", { key: 'cda099dd236946a59379939e69ff2d4a514e54d0', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '178872ca6e9e3df452a0f10c38d9195fdb481caa' }, h("ul", { key: '414e1acf4aa1769f4b2abd28bca029898d87813e', class: "ir-mega-menu-column" }, h("li", { key: '0c477991b533de787e7f2349a8cf72ef9a29e51d', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'e39e18e00b3a4f5b3a3eddd2d1c2e17ae94d8f0f', class: "ir-mega-menu-row" }, h("a", { key: '6cf4a3097eda09a1606edf6940301fc0262539d0', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '680982aa6af7999fb3a5ecf02ff0c2dcbf654577', class: "ir-mega-menu-row" }, h("a", { key: '096656418909917987aab8c3483de562d9b33403', href: "aclist.aspx" }, "Properties")), h("li", { key: '38a741d60e5c64a3d6723dbf553eb35042adc5d1', class: "ir-mega-menu-row" }, h("a", { key: 'c98e20ec35a4ac4463a0a7069365aebafbc8d480', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '716d9ad25626767e0cadbd7c027843cb9d4b6a36', class: "ir-mega-menu-row" }, h("a", { key: 'ff1b7bcdbeca321dfa6f4eef5952365651e85ecb', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'ccccd44e8d4b654dabdc1ec111b3820431469862', class: "ir-mega-menu-row" }, h("a", { key: '4565fe2f8d9958dc98865b79547b2331017621a5', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '9e3817e562c4fa1ce8b4ce7061eec558bb72e3b4', class: "ir-mega-menu-row" }, h("a", { key: '10185e2202cb793334c3449df9674120f53bad54', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '22b00d85f62da09f98f828727cb03c2d1f69b3d5', class: "ir-mega-menu-row" }, h("a", { key: '85e6f98783f2c1eaee2d899972933c4f6e418e18', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'a0c71ea7278d690fae4051a047cfe44e98bf9c8c', class: "ir-mega-menu-row" }, h("a", { key: '6f6b6d0247505dee1a2e5104e57b2254041e33f8', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '8a2eb667febb0e365d9c2cdf71848778745a9951', class: "ir-mega-menu-row" }, h("a", { key: '3355cca4651d16a08288d0dc95ee516e1e559bd5', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '678ce25bdef28a8ebd39a4773c572729d33cbcf4', class: "ir-mega-menu-row" }, h("a", { key: '1fb1f46626ceecf4e12d20bc3cc71782dbf6dc54', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '0ac74afd4fdada1a8ba48a9252286a304591a433', class: "ir-mega-menu-row" }, h("a", { key: '721266edaf33fc53e7db935e30de5ee09596facd', href: "billing.aspx" }, "Billing")))), h("li", { key: '1cacdb54bcaed4c41b8a9802b3114cb791b50d5d' }, h("ul", { key: '981e19069a095953adfbbe062c41f9027f5a583f', class: "ir-mega-menu-column" }, h("li", { key: 'e63b0fbbc3a5bed15f965a907618da8636cfdffd', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '099f4249da02a50ab8a476488701fed49c59c8e7', class: "ir-mega-menu-row" }, h("a", { key: '5c896922339ec8bde77afac59068d16bbebad57c', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '0dcbf2b322d26413c42185ae1f190661b72a1c76', class: "ir-mega-menu-row" }, h("a", { key: '8b191b11482caf80b9ffb48103a8bb9e045a6f88', href: "poilist.aspx" }, "List")))), h("li", { key: 'aec712e25aae993958c710efe8ddc24e01aec59b' }, h("ul", { key: '506b2ef8e1e22e8612ca7aeb18d3c01a86a5dcd3', class: "ir-mega-menu-column" }, h("li", { key: 'be59f707789579dd8f949178c5435e18bdd0929e', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '50a3e027ba8a38ac9b9ee3d60cd2316f2dbf99cc', class: "ir-mega-menu-row" }, h("a", { key: '6131f0ec42d03880b1c0f47529f89b7b9aecc8fb', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '599574724491d4943a9901a2547935db09c47d96', class: "ir-mega-menu-row" }, h("a", { key: 'd58b61837f6b6480f0ac92e499f72aa5edd941e3', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'a1295db77ccfb9a62902dc772a7fb58fee77bec2', class: "nav-item" }, h("a", { key: 'b8b277617ed3905db6c8722d9db7a9df0ca7a2ee', href: "#", class: "nav-link" }, "b")), h("li", { key: 'ceec82450cc72338057620f1a0d204a30391a97c', class: "nav-item" }, h("a", { key: 'b1bf4a5225a39e77e0d68fe25fcb931c8ffaff4f', href: "#", class: "nav-link" }, "c")), h("li", { key: '5eb5332628cc43c85e8e468c7cd4bebb36727ad3', class: "nav-item" }, h("a", { key: 'bd9c251523d83cec9bea6216acab39a269afa0b4', href: "#", class: "nav-link" }, "d")), h("li", { key: '25b073250b6a220d6dc94730acfc5406d29ce0b7', class: "nav-item" }, h("div", { key: 'f47f2e7c1b8c46133f0430669101aab1d2b6f9bf', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '58f3b5e8621229b50fa3780dcce84080f209f7e2', notifications: this.notifications }))))), h("div", { key: '0958d4fbb5241bf8daa15199aa24ffe18ca5d98a', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '07c60301bdf28d6e2ba7cf018a82fe22c1277470', class: "mobile-menu-header" }, h("div", { key: '0b8948c09cb6e65542166f19b94af26eeb9d8f5a', class: "hotel-name" }, "Hotel Name"), h("button", { key: '3ddfefe09da02631583865d89f7bad55b7a330b4', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '8f4d861fd5577876bccc399a10fc81addd053289', class: "mobile-search" }, h("ir-m-combobox", { key: '6e331dee5fb616d068e39e6175e30c18befb62c6', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '54340398bda8756ea5cbab83f0bbf20611adb6c3', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '44c254965cb8a0526dee5ef90851affd62ac2bba', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '741723cd22396a36b58e6c1164d97b3edd993942', pages: this.pages }))), h("section", { key: '976dfbcad875f609c0fedb15fe05e674cd1b706c', class: "p-2" }, h("div", { key: 'fbd9b62ad564749c7a2431be125b28b93aea0a99', class: "row g-3" }, h("div", { key: 'cddad0ed5ab88d74b6ff18ca38aafa1676947f8b', class: "col-md-3" }, h("h5", { key: 'f855cb425666c61a28dd2462a04d62aa579d9a22' }, "Static Options Example"), h("ir-m-combobox", { key: 'dbe6eecb7a55ea26652e15a83bd9149fc05ac575', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '1c1106ba3db5f93b8523719840b41611434ae384', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'aa6e8c14b5d65964158ee84c49cbf264671372c6', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '9e7635651269e628265ac8aed067f7048d3eb817', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'd09e59c2a314662534b494ffb6686cc3fa57b465', class: "col-md-3" }, h("h5", { key: '2ae3e7dcf15d13f0a33f0da4f822f4ef86a61313' }, "External API - Countries"), h("ir-m-combobox", { key: '756a72c28e5bf596accfb7f18c66a4194365853e', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '8fa9148138768e9b6dca342c4d6c7ef4604e5034', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'ae266a59e59f5e310b54ae8c4afbadfc5a71b58c', class: "col-md-3" }, h("h5", { key: '1683c35407218aa473858d6e50b68980b18eb330' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '8e1d0ba6a273368f820633444c303fa2b188d7a6', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '79946b7c4b73958fedc0b65654d9e25fe16d6eb6', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '671a94e4cee81020f94a129deeff7c95ca7a211a', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '973cb5815117c313e731391d15f7a5ee94bc02f9', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'e1262fe64490c7bc38af7e11690a9835c51b35d7', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '6064829bd59a693900a48531d4e059ccf52e097e', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '6e4edd7adadfd6c8949f3283661e3ed47da20689', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'c4bd44e0a8fd319a17264162b1ed3a10b4c7d60a', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'd42819fac67cb18ad1a91f849550470ab9ddd7ae', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '60d8074646cd0bc090b408aa884a6e25cb793bb7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '509fbc13a49b5e6c6ccf43ee65f751f695b2a934', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '9f72b665ff44cbe20f41c7baca93cc279516eddc', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '780c07aee358f9c6bec99c2e20d31617883b43b0', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'd77f61b4a07b10e018606cdf93c04c4e328ce110', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'c9da8b790a1b4ef223303d8f7a364a761792a0e5', class: "my-2" }), h("ir-select", { key: 'a2c95176f93f9daf9b4c5d0032a73ddaa06ddea0', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'c56cd1cd9ea030f4083c25932daea9bbe8e2d919', class: "my-2" }), h("ir-select", { key: 'ac6df2c440a6d112ca8d8abb5f12539c2f04ca84', data: [{ value: '1', text: '1' }] }), h("div", { key: '6641e08233098ae06df1db068350589c599d7779', class: "card p-1" }, [
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
