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
        return (h(Host, { key: '791696c5f2138ecd76b46c37643d48dd55eda72b' }, h("nav", { key: 'cca2cc039b11650c118d5c99c2598d3144c37ee1', class: "modern-navbar" }, h("span", { key: '48be5516a711a68897aa8f77499fc29b269892b0', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '9e15151b2949df0bffa8ab95a9d590d5c918e02d', class: "navbar-container" }, h("div", { key: '9e86b96f43516f897cb3b113a51111060147b2af', class: "navbar-left" }, h("button", { key: 'eeef5d8770719573bbc6fe317f3cb92d356a8084', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'cc43505c74cd00e4db45cb7bb82ea9ff13d228e9', class: "hamburger-icon" }, h("span", { key: 'ad609e2b97d1942a7292144828fc26087f2d4cad' }), h("span", { key: '8694a764e8e4c6d7498509c366f48a6b8e17e13b' }), h("span", { key: 'eceed90e21b7d088d3145b07809be25961f3a225' }))), h("div", { key: '91db777e1ea858325790b9999e8a96d31d8e4b39', class: "navbar-brand" }, "Logo"), h("div", { key: '67692e42559128b2095c2b6dff41a9d215cda39b', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'e59fbe3ad295502f3f1eef1944d431ac8020ddd1', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '1d9f44b3d2e9eb959c6e568c450eb57c80045d1e', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'd90d46a885d16de2cff0e5acae67f15927d4e6ea', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'bf1b1b0b043a5828cf26f6590f02bfb3ab9671f9', notifications: this.notifications }))), h("div", { key: 'a2c87abbf976c73b64541b5e91b1ba5d472a15c2', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'b53d49b502c7e49b59a3a968547b66fcf3d26fb5', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'b6667d60b7599ca76ad607c81356a88846159eaa', class: "navbar-right" }, h("ul", { key: '7a1d268ac391b83ee33d244a73a9af29abfea012', class: "nav-items d-none d-md-flex" }, h("li", { key: 'ccc3ddf49be97d20eddbaea719f6e178ef610801', class: "nav-item dropdown" }, h("a", { key: '79814348e061e6b80498718bb4c63f18647b1b27', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'f6ee36909548111ad9c8dbf5d78638b4e360dc52', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'a1beb73b5a3a46e68961e87140577c67d4fca864' }, h("ul", { key: 'f7816c73beb02eb5c86dd06ea0d4e7d8af57278a', class: "ir-mega-menu-column" }, h("li", { key: '38b1daa644a7d3429b63e6bbc64d883907f5b9e7', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '9c5d867827b1dc2e8d32bdbe5cd3d8d4c3ecff89', class: "ir-mega-menu-row" }, h("a", { key: '70e05b3af246d16e38e00fb2f1a8eabd5476569d', href: "userinline.aspx" }, "Users List")), h("li", { key: 'c25c63569244d285575be1239c01bb2a380599a8', class: "ir-mega-menu-row" }, h("a", { key: '101b374e922af3963925f1f34fe9cb6f2d656ec9', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'dcf86a6775d95d33d7e08877072589da442f7107', class: "ir-mega-menu-row" }, h("a", { key: '3814557b56de05aefefb123f820b1d4d1dba89ee', href: "countryinline.aspx" }, "Countries")), h("li", { key: '8f3599518c3977c3e7c8fe17ba0f54da669c8b2c', class: "ir-mega-menu-row" }, h("a", { key: 'e11ec764aecfae6269edd8c3e12b0ee55f2afe70', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'd9298b272765af0a1a0d822686b41f30bb132ee1', class: "ir-mega-menu-row" }, h("a", { key: 'c949af5a4e1a15779324e81dfed64292d759e8f3', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '0714d1a11d7d128e5edad00240568eec4fe3d566', class: "ir-mega-menu-row" }, h("a", { key: '87f348aa97dcf23d4516b684c34151f944d91344', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '8e350d3a0eadc39bff12e67f5c5a2c934a3b111c', class: "ir-mega-menu-row" }, h("a", { key: '966bbd6dc062dde3bee3a2247aeaf651f895d9f1', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'b7a556739daefcdcd32f427b45c35838297c3266', class: "ir-mega-menu-row" }, h("a", { key: '370fc8ad131b66b4f62b112c85dc4816c91e178b', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '40deeb2f4c55b67c74d3cf4b3ee5c9aee032734a', class: "ir-mega-menu-row" }, h("a", { key: '94462a570381718c069c426fb429ad585e61037d', href: "foodinline.aspx" }, "Food")), h("li", { key: '15104a987959cb1bfe29f80031743eb5956211ca', class: "ir-mega-menu-row" }, h("a", { key: 'ba4c1435386c5c420d4362da0359d62db3382c78', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '97fc43897b07561025fcce34f95a30ad3dc98e33', class: "ir-mega-menu-row" }, h("a", { key: '10046abaf8739aea2e6e4cb4e63e421d01deb101', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '176a4dca890e9f472619bbf52b2c02a4d434feb4', class: "ir-mega-menu-row" }, h("a", { key: '280cf526834bcf7eac2f4e567feab79223abb478', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'e5446b5351e50c1f654cb1b170aa7161bb883f95', class: "ir-mega-menu-row" }, h("a", { key: '330eafc170c8a445d1be842d1e48a14792948d9e', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'c1fdeec50be5003a43d161a85acaef6106e84b30' }, h("ul", { key: 'b85d4f5ad6a0c81e1216a87b32ee44f6b82477bf', class: "ir-mega-menu-column" }, h("li", { key: '354599aca0bd88bd1bf47263ea2fdd59f8660d81', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '291baa7d0e2831524a9cb60f1e3ce04bdb64a351', class: "ir-mega-menu-row" }, h("a", { key: '3a1e4caba30a958ac7103839a35f174fbfb33369', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '6dd2efa4330adb12d3fb5b57680d9f9dfcabbd51', class: "ir-mega-menu-row" }, h("a", { key: '0208b9daede77066bf04c4a361ee9c4361230a71', href: "aclist.aspx" }, "Properties")), h("li", { key: '232e60a1988240d0600edab716df0a268a278404', class: "ir-mega-menu-row" }, h("a", { key: '2e2f47a3a5b97980954f7d667c75a65634fd1ec0', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '9acb0b1495a4ece218ad0cdf794742cd8026d4a8', class: "ir-mega-menu-row" }, h("a", { key: '0ef8785c28172415725f4c9071f9a3e614ff889e', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '9a397bfed6ab10082c1ca730739c91e8dd5755d5', class: "ir-mega-menu-row" }, h("a", { key: '2499d34f3f64dc1da4de72c4dbf885b41bcc51f7', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'bcd787fd78a691ff98c6044c1fc2550d7c8473af', class: "ir-mega-menu-row" }, h("a", { key: '8f5d7169aa12216c83befc0521b51391394caf39', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '1c462757333afd8546e87b7da0f4d9172634acb3', class: "ir-mega-menu-row" }, h("a", { key: 'd0708e9aeef551d32ba3dbed3230fa9c7b02d7e5', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'b5ab5a4389cf8c6fc1bae79b648cb21594a5ba8d', class: "ir-mega-menu-row" }, h("a", { key: 'd265bb0556912790f007693e1a8b3446da39851d', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '07e984d8561d50979cd2a6f86462a48a363b42be', class: "ir-mega-menu-row" }, h("a", { key: '30c982b59e8b4b1df5ab7e5ab5597b8621ec3bc7', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'b780c7f454dca486e0b74f485f0bde8a0f9c0ac5', class: "ir-mega-menu-row" }, h("a", { key: 'eb4be1f4cc0872285f0e4258a60500c7941bd0c9', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'c3dcb1308306133e19adebafbc6bfb16ed9ed74d', class: "ir-mega-menu-row" }, h("a", { key: '3f52fb8f7b43d1a66f0774b7e02c186f28994361', href: "billing.aspx" }, "Billing")))), h("li", { key: '09276b4088a8ef334b4a07466df5de326b12c727' }, h("ul", { key: '7a3a65032e1583ba69f0ad4aabf63da5e387d88a', class: "ir-mega-menu-column" }, h("li", { key: '33d848bab75bbb2ddfa248c6dd4d51716b7c5f75', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'a963010ac8806956d526b45b5868e320e8e4df44', class: "ir-mega-menu-row" }, h("a", { key: '22f42c1ff00796bef3988b98521f66463dfa649d', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'ed27f1193651f6e1f7fc79834c4b0ff7c1523453', class: "ir-mega-menu-row" }, h("a", { key: '9183f2f6e189daca1459fc2e9b2c782521265fa0', href: "poilist.aspx" }, "List")))), h("li", { key: '22de49a63a683f3746a87665dbafad2f383b5b87' }, h("ul", { key: 'ed33d8f0d1ac846abbe946f7186af18f417b7c83', class: "ir-mega-menu-column" }, h("li", { key: 'b7e5e1d0a0d6c58ef5e25f3eba8f254f5da7ae33', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '7a9980035cd468419d627985d85d9b903ba03288', class: "ir-mega-menu-row" }, h("a", { key: '4d04449331a8143b7eeba91880124ea441322e51', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '19a2fa7cc86f09675479af587270ee31c0f3e5c8', class: "ir-mega-menu-row" }, h("a", { key: '03d4a7f04432969d45c86cac8b454826d84bf152', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'fad1377c3ec58cabfe40327e0eebe6bb2dc35e0d', class: "nav-item" }, h("a", { key: 'e53225c80b14d8773b912ece656e956ede51733c', href: "#", class: "nav-link" }, "b")), h("li", { key: '336a681f3d6dd1c520f2d9c5791a589425df7ea4', class: "nav-item" }, h("a", { key: 'a4cb3c66f3a71e55432cda0e413f3fe423cf3001', href: "#", class: "nav-link" }, "c")), h("li", { key: '1d94a81db2c51d9e49df5d672ff216b62670eff9', class: "nav-item" }, h("a", { key: 'a982533a1581ef1b0c33e6ee58a8c69423cc3c5b', href: "#", class: "nav-link" }, "d")), h("li", { key: '7f36d89a0e5e31a1200d111f19183a82b9753456', class: "nav-item" }, h("div", { key: '98f8c70389ca381ac2e235feb4dd5167abb01d33', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'fac1d39a72335e41271f4ca76faab9506c3f54f4', notifications: this.notifications }))))), h("div", { key: '3bd3a5ca0389bb3a011c084f97d9e41b1a54c2dd', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'bdebe8582936fa5e3e322ccad0ea7173f5b7e59e', class: "mobile-menu-header" }, h("div", { key: 'bf94a84a12660d59cceae49bcd28a9e47e287625', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'a6065241b3aa38dfec441a78a6e64370ea056fe5', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'c6fdcfb4047992d7567c1ef4ca551a6c7eab4ae9', class: "mobile-search" }, h("ir-m-combobox", { key: '47b825fb6774b474a5b23fec3d64d58dd479ca69', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '515993e7f3b5864fc3a7de408907ca5f960079d6', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '83782af5fd4dbd2af646eb798858b43bb31440d5', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '9953a866d4990d4088843e32a6174de7d94d76a5', pages: this.pages }))), h("section", { key: 'fef1cf518e4f8ff659bacfc62086b119427d41be', class: "p-2" }, h("div", { key: 'eea55131ef4a416fd9dcb6b20818419c7782d407', class: "row g-3" }, h("div", { key: 'b0ec49cd420403e9eb5d1b9962c79c554f62aeb0', class: "col-md-3" }, h("h5", { key: '452168dd88f3b74fb7f078e6be5d9a9665f184eb' }, "Static Options Example"), h("ir-m-combobox", { key: '6619a7ee028fd4faec1c2d18ce242af5be83b945', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '76954ee62fafde79d125802c68cba3cf9e04bfef', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '75fcf35f924cc4456458713e8effe015e452aa3d', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'eb6f8b96e3b30f89d04269382cb44ff110ea4b17', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '3155f26056589c30d51a6b4a52a75e23fe0bb62a', class: "col-md-3" }, h("h5", { key: '8b579b177fe427a3ee5312981b454571a3724160' }, "External API - Countries"), h("ir-m-combobox", { key: 'f8ae0d92230429b2361d96d3fd9bed11ac3ebd74', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '2bc7eedc5102d3ae83aa61bca0d1c445829a466b', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '6e747651dcdf7f2927e3340892d22c08290018d6', class: "col-md-3" }, h("h5", { key: 'e2f4618174dc6f00cc1b376d79241410e25f3121' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '192f7e4e318a760295e8c2059bbe3acb2244b324', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '6d3e43970259c235330a68662ff4f035818abd55', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'a095934f1d750774d24addfd2858abf0f50031a5', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'f9c8f772e31ebe7bb6f82f0d5c492f13dd93e352', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '97f03bfcb3b8b3d1830e7f515b73f3e519f81dc8', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '8258b6d4754ce9505e7080598f5b421f3e03e3be', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '016c3ab640fc326951353587b491efb6742e0664', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '9b6a834a500fd985495ae17190947ae818fb7b97', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'c267f9eb5677b8ee1c6a695a50c319ce076f7bc7', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'e468fdbdeaba0e14be4fab72b7e91a94ded8aa2a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '4ce9fc61ba985ee4ae391735f0ac8fe62389d32c', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '54d4e0b7ef38460d3d08523a30afee6f8423cb92', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '43ea0fcecf0b794490ccb316e8d5ad60491b86fd', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'dd9729548d3105a27167caf5aed5ef6962d20c72', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '36a110bb833d64fd46a2b41d0982bd56981ee48a', class: "my-2" }), h("ir-select", { key: '89e2af06ee5300d5a54b61e0c4793953797712db', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '6149b7ca80f419b1bf798dc87e6df43e295c6377', class: "my-2" }), h("ir-select", { key: '51b53b3e6b4892f91e1b51f384027fd39cc3a853', data: [{ value: '1', text: '1' }] }), h("div", { key: 'c52b8a101d4beb5e379a7e8b23907a35bbcba3df', class: "card p-1" }, [
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
