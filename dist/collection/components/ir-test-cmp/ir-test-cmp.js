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
        return (h(Host, { key: 'c10c22e8099190c887fe87951d4598b9c9c8c73b' }, h("nav", { key: 'ee99f52b5750b6d5332aa3d5deb3f0439e7713b1', class: "modern-navbar" }, h("span", { key: '1758030c83c70062b304b020aedb0c12a62c7e26', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '92391d1a42c773d060fe376b4313aad8df6b0f50', class: "navbar-container" }, h("div", { key: 'feea1b3b98d2761779b0fceac6e3d97c735065a3', class: "navbar-left" }, h("button", { key: '41777643928bb8cd14928cdc3062131219a06c09', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'a943d3df9309e978afecea2c16e71cd63382fdb4', class: "hamburger-icon" }, h("span", { key: '1b89f73ef8ecee7d2ec5e545c6fdb29e6740ae72' }), h("span", { key: '35da736a7f417d4e80f92984593fbe339c65d1bd' }), h("span", { key: 'b410604078fbb9f3183d5ba9ef44f35b208b4964' }))), h("div", { key: '6d123a71659260828f8493b06dd42471f7b668e8', class: "navbar-brand" }, "Logo"), h("div", { key: '923c9942776792de9a4be750903207e443e0521b', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '48c3726511e2f9a6132c30abda330df1f16efd81', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '74798465d8ab48f22889d8e4373a11e51e75e07e', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'a9e0f07146669793de767ed0865687d1f4cb2d94', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '90f8088a9a257e1a99820205e2c7dbee331ebf8e', notificationCount: this.notificationCount }))), h("div", { key: '3afa441697d87897eb8ebf3a4c0b321386908842', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'b75348407f10acdc68c94cf5dd5cd1b6530144f5', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '25318d09db38a3938fd0d722114ccb2611273bf1', class: "navbar-right" }, h("ul", { key: '2d65ff1fb32b83fbb35ed3c0b7001471916cdb9e', class: "nav-items d-none d-md-flex" }, h("li", { key: 'b09cccd6713943f252028c67a6ffe05365b68fc4', class: "nav-item dropdown" }, h("a", { key: '4fefcba668e2c496e6321f6e43d5b22d6cdfe1b5', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '5210a56161a1a407a9cadf43c39f3c57c9d38ad9', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'a91ed6d2127045960d76fdea7d1ab8ebd89e027a' }, h("ul", { key: '8ad8515f33fd81a541123ce6af094fc9f4f3c86e', class: "ir-mega-menu-column" }, h("li", { key: 'bd2ffec4f131b8b751d4d9a65fdcddd25b46c684', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'd2bf42f4ba1339a1050b1f8c6620d77d2de8ef3e', class: "ir-mega-menu-row" }, h("a", { key: '15c49c13af3c48e6f0493a6a3f23d50ed1667f5b', href: "userinline.aspx" }, "Users List")), h("li", { key: '5712aee41351cfe4aed4c2e0d6192f665825a4ee', class: "ir-mega-menu-row" }, h("a", { key: '7d66a6c3a1a8f5336d93a7352708e5fd84c0c43c', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '75443b871d87050c1903907f820a3f54824b7998', class: "ir-mega-menu-row" }, h("a", { key: '6df68596189c2ec02e17b5fb479e0fba2faf5bd5', href: "countryinline.aspx" }, "Countries")), h("li", { key: '49269141ed7457116565630bb45be4fe17538ff9', class: "ir-mega-menu-row" }, h("a", { key: '3e657d07f4e07d740d66067c9857b3724a50a114', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '4cd2d030484af7f758309a75fca695c5d551a2fd', class: "ir-mega-menu-row" }, h("a", { key: '3f5b63f2f6e1ad2ac0c9cfb752d8fb972f2fc083', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '50b36d2c6854ab81ad92d355bf0324912f75d702', class: "ir-mega-menu-row" }, h("a", { key: 'ce884720d78cd7d30b219a30c76e4b6b0c5b5f88', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '3e7560636cfa1197796720edf58da1fdfcb80b30', class: "ir-mega-menu-row" }, h("a", { key: '37a013fdbc12fbe2ec5889c06df78157786d70e2', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '171c4a561b62a4ccfee952c4ec2e60a37d8ebd00', class: "ir-mega-menu-row" }, h("a", { key: '44e8f980c181a310aa4577c01040d91e98bf6de4', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '3ce219dbccaabc47a84e4baa1632c08649db8fc0', class: "ir-mega-menu-row" }, h("a", { key: 'e4cf4dd36088fe434992351e34dd341fe9d0a96f', href: "foodinline.aspx" }, "Food")), h("li", { key: '1466725b432541c91f4793bf59e448aa04c8d981', class: "ir-mega-menu-row" }, h("a", { key: 'ec010fa453968411dbbc18f70f5b4230377a8021', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'ec4c18969913ec535342afa645cb9c089cad4dfd', class: "ir-mega-menu-row" }, h("a", { key: 'aeb60865cd83158fba3762f1c526f9b7867a0260', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '11b77835b2d1008d2c1645e23963fdfe01b232c6', class: "ir-mega-menu-row" }, h("a", { key: '634974aa0568913c675724bcb07256b655352021', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'edd5729410635549e523e7e922d305588f473222', class: "ir-mega-menu-row" }, h("a", { key: '07cd5e4e2e6548a8786dae76a34abfe8d2494df4', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'fb8a613814caccf8d62a2615186610ba864ca01a' }, h("ul", { key: 'f360be23e746d46904b01b67b06861c50821e1c8', class: "ir-mega-menu-column" }, h("li", { key: '8196a7c8b99f5ef4d13004aaffe73a641f07f242', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '812f6e6f4e3a13bd7e71dd6d4680a269fd50a71b', class: "ir-mega-menu-row" }, h("a", { key: 'f82c4dfa76022c9e13079c38b6c359de7116e46f', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '8c8747e0e351fbfc0af70f9f0f6fe2e31f6e2664', class: "ir-mega-menu-row" }, h("a", { key: '0370eeb86c4a9067c854a7f62fedc0536089e204', href: "aclist.aspx" }, "Properties")), h("li", { key: 'a6b78aa1b01466b0db3e8b4378accae3da0636d3', class: "ir-mega-menu-row" }, h("a", { key: '5ed823d8dc6c833a07377d9868e7f14e0ce30eb3', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '9024f86d77265b73395775d5928418dc3a7f97d1', class: "ir-mega-menu-row" }, h("a", { key: '318abec761856c27c63a858461d51483dbf96a9b', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '9dbf41ce8682ad319779c548afad4abc667eb9c4', class: "ir-mega-menu-row" }, h("a", { key: '7065d98dd4456a62162387203111e73ec526d629', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '6b29900ee19e959f90319cd96b381aac745bb4a1', class: "ir-mega-menu-row" }, h("a", { key: 'e04638fc85a239c987c7e3d345fccb300cf75bd2', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '0d0f000dfb546ef863d5c35d38c3589f67fc41eb', class: "ir-mega-menu-row" }, h("a", { key: '793a1edaa6bbe65683db27bb6cd5793a32981c2b', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '16a028615da4b017a53a9ecf8768ad9cdb127468', class: "ir-mega-menu-row" }, h("a", { key: 'e22dd32066235785593802464579f1523ebdf19b', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '76609cf079104098557ee2d63c7808875575a4f2', class: "ir-mega-menu-row" }, h("a", { key: '0c69ae8f8e2f490e72899b104a91d5c1c3039977', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'dc07369bf1268b01cad8372054a8f5e6a2cd65c9', class: "ir-mega-menu-row" }, h("a", { key: '7fdee73632afa882fb485d3abf152361841c9065', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'f9b4ec6c2ade1c99c58111df34816684dd463f44', class: "ir-mega-menu-row" }, h("a", { key: '7e291662776413b8fe0f12a1eaa74b89a5b7124d', href: "billing.aspx" }, "Billing")))), h("li", { key: 'd0898bb1b4d76e3a4ac15842b87f18c322344c8a' }, h("ul", { key: '42349ce917dc91413331bf1804a30866477e05ce', class: "ir-mega-menu-column" }, h("li", { key: '10dddfd56b7162a1a5a21764d4e499f3b3856a9d', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '2dfb2c966d3aa40047b3ab25c5173c5d6e1b123b', class: "ir-mega-menu-row" }, h("a", { key: '00299a01096ec0790ff5f4206e1a8a53598158e7', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'd0f500904e660b53303b856515e2e9a3a23544d0', class: "ir-mega-menu-row" }, h("a", { key: 'f2093d05e18d8c861d0197acf038e690e3db2072', href: "poilist.aspx" }, "List")))), h("li", { key: 'aa032849ba72aacb9587a4897fa2a0958cee03ea' }, h("ul", { key: '54e34be494b581d98f17797601fecf8c01ab2fab', class: "ir-mega-menu-column" }, h("li", { key: '2749fc0444bf16376c50762c02573d0945dec0e9', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '9eeada614a64cf4da43980784d339cc4f75259ce', class: "ir-mega-menu-row" }, h("a", { key: '9ca2a8e6a2906da5628c0b9d687cd3e431b17bf3', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'ffdd2af03dbe0600b09b08ed58f74a49fc87e8b9', class: "ir-mega-menu-row" }, h("a", { key: '2643130454556a070c14313deae0ec16465caa3f', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '93ba519a1383050f30feb8298188c772a5d2b36c', class: "nav-item" }, h("a", { key: 'aa95d53b88d148ec7eb4f20fa13ddfa12b3e9b23', href: "#", class: "nav-link" }, "b")), h("li", { key: 'a80d1d29d0a8e4d51587390b05b64ca908772c55', class: "nav-item" }, h("a", { key: '4d647631663e399311d083b87d303aed50a94c68', href: "#", class: "nav-link" }, "c")), h("li", { key: '31f168a650ee34ce00d454b47f30e56ecfb4eea3', class: "nav-item" }, h("a", { key: '71ec57f5ac5b1dd7b66a481c14198dbc85d3ca2c', href: "#", class: "nav-link" }, "d")), h("li", { key: '7590aa0c2eab91887cab73b88d8cca70046e6cd7', class: "nav-item" }, h("div", { key: '474e34a1c1e6301d97aef15692db50590d5cf92d', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '39fb5a5a82b0b06b8df4221447312cb0a5239615', notificationCount: this.notificationCount }))))), h("div", { key: 'fd13a1baa53b0bafb23d040a5db7b4239ced7568', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '751164e08a399b65289c997ff3372b31e2a6a5e5', class: "mobile-menu-header" }, h("div", { key: '8c823ed4cc46e7f017f2137e612df29b68a4e842', class: "hotel-name" }, "Hotel Name"), h("button", { key: '79ee159165ec32cef268b8d0b41f858b373951e7', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'df9e7dd13e9956f0e708c87e98a7863c9a13c381', class: "mobile-search" }, h("ir-m-combobox", { key: '051aeb716bdb8ab4a14de64a9857b98af59852e2', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '2c0bf4702293b7b9d77383eb7a267562ee5358f7', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'cf8b1e98dcaf3acbf2859b6d0a64d717a6549745', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'a279596abc795689624116db939f7976068a044e', pages: this.pages }))), h("section", { key: '91e312a9ead8d2df93c875dbcf4053d3a75f8190', class: "p-2" }, h("div", { key: '81de2389e4c1b6286d173b65beff3cd887cfa240', class: "row g-3" }, h("div", { key: '659c63fa17a07d33244d0c5fde22d4833023ff14', class: "col-md-3" }, h("h5", { key: '6ebb64cbbbab70a25d9bd873b48cebe78cf12ba1' }, "Static Options Example"), h("ir-m-combobox", { key: 'a616ef10a54bfe6803e0acfa45f857ca285460e9', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '10b71f281f749b74aa26245b7eb689bb6ffed4aa', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '10bac1968607c3ab7566154180d144dbf9e9ead3', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '8364ff78869d14e20ab757f76aece23f546f6c29', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'ac59733e158902a279f3fb22c6c4746fb8fcfa7a', class: "col-md-3" }, h("h5", { key: 'b72c08a818a3d452df79dc8ad3d5333de0e1ce06' }, "External API - Countries"), h("ir-m-combobox", { key: '7c5f858cc7f9d05f9d870fe6153cb0a5f15a20cf', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '90336ab0d02ecb34429d9cd77fc9d0e91262f535', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '4d2653a818f3c9ce459fdab6585d43fe46f604e5', class: "col-md-3" }, h("h5", { key: '56fc1c8ab109469906a3eb40c7d44de87a078195' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '8385c197d48f78d0758090ad4cea4313f47bc636', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '93e800c7bc5a731898ae82ba4a0e2a7d47c9bfb6', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '9ed96ce940520c7430d3e4adb45e96e525e1aed0', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '159179aa7c9e3bbe28a80f07848f1a4c9ef7157d', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'a0b3fffa1718bc15390e2c742cde119b844f473a', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'b710cafa679164d2c67980100813d70e55e463d4', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '374a34de5c8eac2a113bd9afcc13a219ad5cdac0', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '4c46ebc2f8f032e70591a31200670e2c7b4eb3c2', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '61305bb616f36eef3dba3fe04432fa99fedadd63', variant: "floating-label", class: "my-text-input", label: "First name", style: { '--ir-floating-input-height': '4rem' } }, h("svg", { key: '71dd190419fdf2e5284e375f269f3256649a1eb1', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '178ed9e34d15be10c01be11a05984ba83f98edcd', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '6f9ac9cb18e06bb5e1e48d41d84aa908f5f503d4', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '83190ce83446bfb2de0c4365766c5c03f50fcc92', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))))));
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
