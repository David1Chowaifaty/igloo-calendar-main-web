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
        return (h(Host, { key: 'c58cc58d1230e459569467016da452b3e879d5be' }, h("nav", { key: '1ab1247b38046c0786a2356166423c856d53542c', class: "modern-navbar" }, h("span", { key: '355108ec6df1b739b7045560bccfba60b86bf348', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '15510a88d34726230aa5bd305d09fa3e6686b924', class: "navbar-container" }, h("div", { key: '7fa102af51a35b349c9b00837735ed8ecfdfd2cd', class: "navbar-left" }, h("button", { key: 'd72c30f571edc747ac8788d243106280e81ffd85', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '08b617e0148664b3b656de4cc77131fa352dec63', class: "hamburger-icon" }, h("span", { key: 'df947d5427576098c1421aea8df87ef3c1ae7cae' }), h("span", { key: 'd65a3195e31ba5e96ab0dac289083a8fea87a6fe' }), h("span", { key: '9a4762c1a6d070434dccbd5f7a48c57af332f97a' }))), h("div", { key: 'b4754b3efee0ee2317469d1bd4f98ec1888c06d6', class: "navbar-brand" }, "Logo"), h("div", { key: '8ecdec3d163e93144a66a2d82c9f42dcc43ddfb9', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '2156c4331b5d850adcc24f98a8061d54838bcbf1', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'dac9e940a64f66eee71517121119ff906928d4e7', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '983af49e3a8b1f16f888111a6cd5edf8c17eb2fa', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '11f943e34cdc3e6df0d3a3a50c46097d9a56b601', notifications: this.notifications }))), h("div", { key: '8b84d3cec68da6339697984b4f4352740f29577c', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'acfe6b804514f3ba677cc1e2a2a1eb03edca3318', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'bc94489dd7b471a12658e9da7f9763e0845eed88', class: "navbar-right" }, h("ul", { key: '66fadcbbda2180432bee31e535f278a6562c2729', class: "nav-items d-none d-md-flex" }, h("li", { key: '1b59a36b4c25e9a6971723635849f109a5a0a1a3', class: "nav-item dropdown" }, h("a", { key: 'e0d0806fa0d6880fe508f4da740088b52b0bc606', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'e07e2d960a25b5fc946ae38abe86c747776e7157', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'b9e9336b8906dd3e1517b874b0535f9f9b928cfa' }, h("ul", { key: 'a7db2c1b0db3e07e65d4fd7717510e42bf4ee145', class: "ir-mega-menu-column" }, h("li", { key: '5ce5d51324d78b3cdae40b63ae52fe670d020555', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '43eeed9e908fb24433d0825648fd193ca1a8a5c2', class: "ir-mega-menu-row" }, h("a", { key: '04900f9b5c02f31512d8fa68e78e8a372ac52e2e', href: "userinline.aspx" }, "Users List")), h("li", { key: '22cef88ca460b95a0ad44a8bf6d89113e8159d12', class: "ir-mega-menu-row" }, h("a", { key: 'b52964de800932e175731d43573ca07a029ba3f8', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'df0a9504f1963bd9cb760feae9a1569fe98c3642', class: "ir-mega-menu-row" }, h("a", { key: 'c503316285abc70695f56eaefb1c7b9e148ca3b5', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'b3170adea708fe4b4ab1e49f0af7910c4b2a0908', class: "ir-mega-menu-row" }, h("a", { key: '2dfd4e1ec35ae5ae6babf8b70a6b4c5204090ead', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '0a2cde4e75990e3e812b2bce88a96d9bd3c447fa', class: "ir-mega-menu-row" }, h("a", { key: 'cb1e17899c6336e0b4b4a149fd9c5a40df93a37b', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '9c85481370c8fe9ef81c8380f4803b2cc6d99991', class: "ir-mega-menu-row" }, h("a", { key: '79d2fb340caf2f3b775b0b67839f5dddd7417142', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'a45e8081272a43898f4fb30821c77de7d9ca2c59', class: "ir-mega-menu-row" }, h("a", { key: 'ed43795c4b8beffb5f60fc07e7612ee3fbfd58cb', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '144e0ff46b8d595b180e0612cd665caa71eccf29', class: "ir-mega-menu-row" }, h("a", { key: '50b2842769718c6537ffba2cb426629ef9ffdc91', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'bb97aa5cdd0faa30e498a7bb5c4fbef3914bd014', class: "ir-mega-menu-row" }, h("a", { key: '9a868f4f9597c9b86736d487fbe6e617406ea707', href: "foodinline.aspx" }, "Food")), h("li", { key: '0f0abf12c0ef35ab1b0774988848ae3e7244aeed', class: "ir-mega-menu-row" }, h("a", { key: 'b0b9bf3157c47cbb6cf22c838da0141f17146f1d', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '88978f03a0c9a8c512cd7898796dcc92595229e2', class: "ir-mega-menu-row" }, h("a", { key: 'e7949cd9cdca4fbccb0203be3a31ca2634b98d58', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '3415ac1bfdeea76cb53aa9a0af39d72320fb8ea6', class: "ir-mega-menu-row" }, h("a", { key: '948cd3033ce53b837ced8efb964706ba94c1065e', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '694d04059ece7e4a2aa99b024537d77ca912b1fd', class: "ir-mega-menu-row" }, h("a", { key: 'c24a8694a0cbb7c0a91cc8d93dd33ce11e646317', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '13b8a9858c863ced9535ee4a67905448e65b5f70' }, h("ul", { key: '12f72b81227737013763fc72a444e7280a50b75c', class: "ir-mega-menu-column" }, h("li", { key: '1edf661ed4537d41727d0193b2c1ee931a7a4ad3', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'c6fa382cd0e6823c11367498abaf67d1892cd3fa', class: "ir-mega-menu-row" }, h("a", { key: 'f2be73ca5ae03c0154baae4f1b9073e94f9663a7', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'cf9c6074775df63c88e25f1d0ad8bb509d201c1f', class: "ir-mega-menu-row" }, h("a", { key: '5f317e07b15cb3a47d0f72c9378e053704a00287', href: "aclist.aspx" }, "Properties")), h("li", { key: 'c81fda5981fb2e23ddb50eb5cd988e17fcab9257', class: "ir-mega-menu-row" }, h("a", { key: 'b3fec0d0f8ee9702396e81ba4b62f4bfff694b40', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '1d2966eb80c988fe81632e2a7463db3e5a3c4282', class: "ir-mega-menu-row" }, h("a", { key: '943d991b401c357c04dcea538fc354854100ef4c', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'ee9ef5ea073f182dabdab93882d77c3bbe644385', class: "ir-mega-menu-row" }, h("a", { key: '6488a7980ee852e05493bdbd5953ca208165c2e8', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '6cd5a77e54416e9b09936aa3bfc6d7de856407a4', class: "ir-mega-menu-row" }, h("a", { key: 'a5b4b9431c5360e89000c5e2123c34ddc8bfbb95', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '7e5b5346f2322b719eab2eed274840dccbc5edcf', class: "ir-mega-menu-row" }, h("a", { key: '8b4621ca48a76c6cac0aa6963460a2d9d176c479', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '31fae55275e9ddb62ce0d2cc8ff70fbfe5aad979', class: "ir-mega-menu-row" }, h("a", { key: 'ea425b8a4cb4e2c1af3f22b48a25349e532b8464', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '065ec0ea16ac965573ab80203c4f5fe9d81ecc39', class: "ir-mega-menu-row" }, h("a", { key: '474e4a86b6814d1bce58b23e252db1eb768b9c59', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'c99ec34c4809ff5b90270a799807684e7cf89dee', class: "ir-mega-menu-row" }, h("a", { key: '9f760e8dfe0de74cfe74972c8daffc13b0523a91', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '26ab956cd065dbff2fbab02ee69cc846a5b3e2e3', class: "ir-mega-menu-row" }, h("a", { key: '1aae09ef7990c8d381612827893920fa3dac6b8f', href: "billing.aspx" }, "Billing")))), h("li", { key: '4aedcf5198028b247215619d82e6ed5be5ebf849' }, h("ul", { key: 'acd842111658ffbc5e57c45d3908898d3ec6aa18', class: "ir-mega-menu-column" }, h("li", { key: '3879a22248fe93c8e79240f0523d0d046a5402a4', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'cdacbe94215b9b5310a6094134740a8124422baa', class: "ir-mega-menu-row" }, h("a", { key: '27bf9405672bfad899ccef7bf8d60f948941c047', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '6fe7033056ecbe948b61bdf2cbfcab7cba5aa0fb', class: "ir-mega-menu-row" }, h("a", { key: '2ca369201f401b0b3ffe42d91f310c034598f766', href: "poilist.aspx" }, "List")))), h("li", { key: '53b55f618e0ede5d3b81cbb90a0131377778b5a9' }, h("ul", { key: '079836a99c286ed2c9af1f870733d4d11322c474', class: "ir-mega-menu-column" }, h("li", { key: '90981493ab5c7f495e211d37e52ff4c11fae5024', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '728279a4c0b08cc51bf625964650e17f3214e638', class: "ir-mega-menu-row" }, h("a", { key: 'c96e662a864df71efe5b0b7172b7bfd1c7c0c08e', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '0ca6c810ecd68ca24faa96bc7a7340eba4a000c6', class: "ir-mega-menu-row" }, h("a", { key: 'b5d17ad723df95332b60454d200f173a06f5424c', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '23ec2899b7dc2394c16e171e1598bbab56ad99be', class: "nav-item" }, h("a", { key: 'd6ae6433a699ba81c794c0f9de730d2e71ae9fc3', href: "#", class: "nav-link" }, "b")), h("li", { key: 'cb04b7aa5bf3109b98c7fe3eda91684c9a15fff3', class: "nav-item" }, h("a", { key: 'a010e3f1413bbb502d7016dc514f3e4aaad7cba6', href: "#", class: "nav-link" }, "c")), h("li", { key: '0c65958fcd5dd593b7bc5cbd72d2d2cc08ebf109', class: "nav-item" }, h("a", { key: 'd345025af01a5bac36d4f31a7435ac11874fef72', href: "#", class: "nav-link" }, "d")), h("li", { key: '84e8a4ca22ba7c0eb730bb49039ca4b08e1c70e1', class: "nav-item" }, h("div", { key: '43071c815ca4ac46b3ff7b78be5fbaa3d112e492', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '736531017931b531bc76de6678eb6662b87978b8', notifications: this.notifications }))))), h("div", { key: '20a4c7493d1f6e51050ec7fa6012c10afe2c1e2b', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '4af3f6a7f5d153566361af16483bcf82e7a3a8b1', class: "mobile-menu-header" }, h("div", { key: '161b5ad5292940d1aaea05e412834c73e33e3561', class: "hotel-name" }, "Hotel Name"), h("button", { key: '0b84e890fa253ba6ac527d0baea2c2fd41b5848f', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '38f66a2599449dbe192a1040c4d081bc538d9d95', class: "mobile-search" }, h("ir-m-combobox", { key: '17421964f47903d1fe8b03ffbeadf8f774eb5958', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '5d123f4b66247a3519ff05fe45b023a737c2a077', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '953e712aedcaab63fecbd52aa8a527635be42c8a', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '60347650d116cc9f3726c45ac288fbb11247dc10', pages: this.pages }))), h("section", { key: 'f666c4c84efbe1581cf423afb697c91de052e26c', class: "p-2" }, h("div", { key: 'c540c860cb41c0a96a161e13ec41213c32999e21', class: "row g-3" }, h("div", { key: '2514cb5b2ee101a78eade692878bd23d1679d00f', class: "col-md-3" }, h("h5", { key: '0903883668d5eeb746123771502eb0d32a70969b' }, "Static Options Example"), h("ir-m-combobox", { key: 'a41232c9eb57a566e3c2639be090d6f8bd7e297d', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'a521ffb208a1462c0e9271ebd8368bae161af8b4', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '77f6df0aaaf1c93d15f180ffa578e9eaf1737770', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '9253fa73194fd3703a8226aefe34257fdd365b5f', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '3726d4581a4ba8d5b2f07203c81bfcd0b9fe78d1', class: "col-md-3" }, h("h5", { key: '2b68e1102b8c0709a0deb9529dda9427eb4608d2' }, "External API - Countries"), h("ir-m-combobox", { key: '26a4c3146958c51c0d79bd12b57a14318f4a8fab', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'a258f8f8fb520c19b1fd1a68a711c7fb5ce703a5', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'e8c41957b95b62f4be7b9b974762ec3e76ef1611', class: "col-md-3" }, h("h5", { key: 'ee0b94341b7c980203acea341f28066ec10a2911' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'f4c0de6bdf5c629c04cd1240a0ad3089b7df17b4', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'edab62af12fb2f5691763145e0a55c72e3165994', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'dd3d978f447056b12e93a567463247a607e77efb', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'b43b292c30ebe4c211aaa87ccdaa1edeed765ee1', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '37b3822b07602fc32033b6ab053e3efede4c12fb', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'f1d271c9fe7994feabe33ba0c15aa9318a06e82e', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '0aaaa3b3bd2f7355bb43b4cdd74368aa1255b4a0', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '087a7381bacf3b32de36f541c795e1fcdb5b5d1c', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'f0d664b2057b6be36c44c90fe5b43bf7f7b5a07e', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '8bb2fed2a8fae53238aac399644f0843eea6bbef', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '49d4d7d9e87651ebf53e73976ddab1042e6be767', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '6811374d1ecab94d2378a531a5c7a5e975926ed3', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '919caf945f62bb5b00d3403e18ff2198b7bc3586', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '5efff81e00f11ca226fd979a22daf3900f616af9', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'f58a7496301857d6dbc8271a610e079d86a1e074', class: "my-2" }), h("ir-select", { key: 'eb6ac3e2ba993fe633f8de7ae193b823e956712e', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '01c1c6569f7be980068260dd54ac3b22b48a52c5', class: "my-2" }), h("ir-select", { key: 'ebbd24f177ec4cb51e7ddac0625665ab26a63e2f', data: [{ value: '1', text: '1' }] }), h("div", { key: 'ace4fd1cec674d3e9391c2b54ca9c5a433ba21f6', class: "card p-1" }, [
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
