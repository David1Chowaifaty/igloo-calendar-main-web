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
        return (h(Host, { key: '987bfc176b361d3f01d6cc7c2085ab8aac57868f' }, h("nav", { key: '609cdebfae58e9af1fd067a27015802a1eeec4ea', class: "modern-navbar" }, h("span", { key: '39672876ddd239a7b0b6cd62694cbff864a61756', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'b04d9fc63369594128de5bf8e50ce1aefdb20c94', class: "navbar-container" }, h("div", { key: 'af199d2f4802334a306ce372a2124c2432b8eb23', class: "navbar-left" }, h("button", { key: '4f2c303fb195efd7c2f5fa4eb83541a14a1a45cb', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'd7f8c8557f54b5ae60d64b9251eafdb06844680b', class: "hamburger-icon" }, h("span", { key: '552f4f8fd6932cc28394fb8dc5622e9e9a5881c6' }), h("span", { key: '2ca1c8325b25786bbf76bf36c1f8a6136f8309c0' }), h("span", { key: '9de934f88000d75d02aaed3e9af604b72d8160d9' }))), h("div", { key: '88586bc74c964bcf12a8be3cf1dff3abdbf97982', class: "navbar-brand" }, "Logo"), h("div", { key: '3d664c951b560ee24febf787afc744c82200296f', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '85e340d92400afd52a4351901d63176980b8480e', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'd619b482c704698c4b99d132d156dfc7b6c34619', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '4b4cd67ff25ce53d3e15909344291b2af4a37a5b', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'bfa41467e4afa75bb485cdfef7d0f42c30149fb8', notifications: this.notifications }))), h("div", { key: '296aead6f596204ec2291bf973aae34adc926453', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '00d568aba32768db9ce3a86cd1a3c6f1bffd19fc', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '249deeec130ec348c68dac7ff3a413543f6bdac3', class: "navbar-right" }, h("ul", { key: 'f2156eef013527ff6d2e88455ff193aaafbecfd1', class: "nav-items d-none d-md-flex" }, h("li", { key: 'c6494451fa2e39f2d195935f1b6a23a0a47b2c6e', class: "nav-item dropdown" }, h("a", { key: '925706171ef36c705120cbca4dbe92169306ada2', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'fb25eb6995a39e5f05529cbe8eb34df38cbf5a80', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '729a3c3302c2239f0af0a000ce13f6bceddd2828' }, h("ul", { key: 'ad2350e159810488a621a810db1a7f72179b407b', class: "ir-mega-menu-column" }, h("li", { key: 'af1f94fd38592cb28979e9182c52ba663d6dc61e', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'af6cfd9cee30cd12c63378ca034825f39dd88556', class: "ir-mega-menu-row" }, h("a", { key: 'ef72d4ea27ce90ccab257124b08c43cd2c298b50', href: "userinline.aspx" }, "Users List")), h("li", { key: '97d414d1c8e6cde03e7eac0eb0a793ebac538b33', class: "ir-mega-menu-row" }, h("a", { key: '3b1ba55a5ea052c924e22274fb6a5dead8ae317c', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'fcd994803ca8906be74604e5825a733acf1cf22d', class: "ir-mega-menu-row" }, h("a", { key: '3d72e575ce686c2294ddf3002290f86d9553f778', href: "countryinline.aspx" }, "Countries")), h("li", { key: '4116ace52c2a43d75eae427c0903669c14939816', class: "ir-mega-menu-row" }, h("a", { key: '073525cf3c2993b4bb42f6aff07f4c02756f07bc', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '321d74f18ebc1bc57fe0c58f4827418ce6da2089', class: "ir-mega-menu-row" }, h("a", { key: 'a07d98dbf4942b4b373d94a6773c604bf7ce1352', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'ac8ef2b5535d9507838adaf212ad6f48a070d968', class: "ir-mega-menu-row" }, h("a", { key: '1a58fab08aff7af8cc2f91484e6c4531d24d610d', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '7eb3e119f915d886a46b58ee45406e3661c262f6', class: "ir-mega-menu-row" }, h("a", { key: 'e5f5d6ff948e95b20ba6a7fa3aeafeb3ae63a07e', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '15a29e6a001c6a6f03feb2feb5992f0caed12c64', class: "ir-mega-menu-row" }, h("a", { key: '8fc85cf8d246c2a511505403225fd6207591b7dd', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '25642deab7857286a32c856e92ea7d2dce0a0ae2', class: "ir-mega-menu-row" }, h("a", { key: 'a7050ff96b0e7097e6f11200155b272c15533bf7', href: "foodinline.aspx" }, "Food")), h("li", { key: '52047752249041762d15225245aa3bc5509b8465', class: "ir-mega-menu-row" }, h("a", { key: '3b50f77bd0a0f9d8fda6710a0058608682220e13', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '397336f18a09230fc7fd9d58f494e420f5855894', class: "ir-mega-menu-row" }, h("a", { key: '945ecf84207a67e2a8b634eca5fb6207e4dd5775', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'c538ee5944b8c8455a083302a8747faa1033612a', class: "ir-mega-menu-row" }, h("a", { key: '7db6aeb3c55bf91f9ea811c069c09d9f76adb822', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'ce0c96ad0ecda40a0da08164396fa958c1eaa171', class: "ir-mega-menu-row" }, h("a", { key: '0ba8a43ed13f30be52ad051164a0c35ca0650ed5', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '4b516a934bc2dad51d627d24f0bb558a7fcd2f2c' }, h("ul", { key: 'cf59a5f6f55e8c104e870517ecfcf48ef1beb4ef', class: "ir-mega-menu-column" }, h("li", { key: '0075c15bcc034553eb2ff0e13bf2f70b89f58e98', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '70878f43994c92ec20b23c98f15d8a6d1594a35b', class: "ir-mega-menu-row" }, h("a", { key: '91ac246ecba7b62d1a0ce050c39d2042a21d9e10', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '49495b97a0f92652285d9db7bb90de22c4c94b25', class: "ir-mega-menu-row" }, h("a", { key: '59cf0a47554e0e28f426e350ce0d814c125f5654', href: "aclist.aspx" }, "Properties")), h("li", { key: '70afd193ad94738f2855f34bf13ef4e3c5f1b517', class: "ir-mega-menu-row" }, h("a", { key: 'f7383f436cbf96eff32ea7d65c5ad09bce18134b', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '0afb58660ccc2af839a31509983ea0be3f190848', class: "ir-mega-menu-row" }, h("a", { key: 'b2fb4ad95aafc7078e453807f978765d215ac255', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '5ab2f6b11a433651bf15ea19f196df077d7429b0', class: "ir-mega-menu-row" }, h("a", { key: 'f8c65c870fbae1544b1a31c5404a07155556fa5c', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'c41c6ce566067667df34a1076ccac286c8eb9160', class: "ir-mega-menu-row" }, h("a", { key: 'd3033ce3faa71eef447587959a2d54d66883cdd5', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'b749631c90c6a22b41adc185e4b5ea982880af65', class: "ir-mega-menu-row" }, h("a", { key: 'b519d157525f93ba698f5736e31aa9d00bb702f2', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'c9544288c418f3714a07d7c112d2d996c72abd24', class: "ir-mega-menu-row" }, h("a", { key: '99be36695e94311db9b58f8ef0c6edb75de3678f', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'e4c7107d45e7f2f5b099e6f70b38608cd302f452', class: "ir-mega-menu-row" }, h("a", { key: '516ff62b08df6a197a5440e724c05304a7ea6133', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '156509e34c8c5f52277bac07c3adcd1c88f0987f', class: "ir-mega-menu-row" }, h("a", { key: '8456dc5d7cabf3f688cbcd3cd0e546be79e1e9c7', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '0fa3ae5cd690b1c9676e1d4c244809815b9b994f', class: "ir-mega-menu-row" }, h("a", { key: '09e398dd650b07bef03945a7f6a7318ca343e5dd', href: "billing.aspx" }, "Billing")))), h("li", { key: 'c8fc1587cd78fc132b4cd164f17b1a41040bbd1c' }, h("ul", { key: 'b7b27815ce4c406af10afab4d3bedf1b13f2b717', class: "ir-mega-menu-column" }, h("li", { key: '804be34dde767a959a0248609456cfe163a76211', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '3988e458084ad6b27dd592548dd25b7472a742f8', class: "ir-mega-menu-row" }, h("a", { key: '819706721d8a770e5c952bf59ac7922cf2920e8a', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '147a6ee4a9a6b9a71c0fdf4adf76ffd77aae80e5', class: "ir-mega-menu-row" }, h("a", { key: '265edb7b7b1d6ed9d2cfea0c230184244728476c', href: "poilist.aspx" }, "List")))), h("li", { key: '7c6be10eccb992ee8e6e4d5d58dc5ad8132ca435' }, h("ul", { key: 'a6ef05f524b6a8967759764ec79c7e9a1ca070d1', class: "ir-mega-menu-column" }, h("li", { key: 'd96e10b6f809a290a1cdc318f50f3b1c7a4a8942', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '00ca465d8ab1b9ba8d34c64eee39917bd341c68c', class: "ir-mega-menu-row" }, h("a", { key: '59a8ac4144c74670a89709a967a46baf6fc756e5', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '0f36ef3a6e6888b456b6ea96c16cec7e06d85d3d', class: "ir-mega-menu-row" }, h("a", { key: 'f3e5a5fcee8bd0fb357f629a798b36bb34a0b5c9', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'cb2efc2f7edf2665aaa1c054a6e777dd4fd795cb', class: "nav-item" }, h("a", { key: '028febaf5cf77c4a6aba4f87f8851593bec4ba43', href: "#", class: "nav-link" }, "b")), h("li", { key: '0d5a66dbc43a77b4d265b96444b6b4708dfb0091', class: "nav-item" }, h("a", { key: '9fbddc5052599a8afc3c2b5847052f61b33d3f2f', href: "#", class: "nav-link" }, "c")), h("li", { key: '372f0094bbc5c9980ccecf33123dee54a0d2a403', class: "nav-item" }, h("a", { key: 'cba8d0a433ebf833c48a08b31c2d39ba4844966d', href: "#", class: "nav-link" }, "d")), h("li", { key: '2bf02ad0d12a7746ad524f2ad77a7d2ba95399e9', class: "nav-item" }, h("div", { key: '43dc0cab39382c0c098705c8c0a3c373d9a1e312', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'cb0ec017c13dc356bd01c949a73aa9d843415d0e', notifications: this.notifications }))))), h("div", { key: '7c3e6a6e348bf582d14dd8afb38fcce64375fe78', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '758d7bc4008fc0c2394b729015c9c673c738899f', class: "mobile-menu-header" }, h("div", { key: '7f8aea3c8a41ec643d6e094ebf170f64459a8168', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'f3715781fbd8e3a1cf6b93cbcbeb3edc2e3d4469', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '5d6a74246738d7f6c9f38cef0f29f0c70fa1607d', class: "mobile-search" }, h("ir-m-combobox", { key: '7e35ed5d04e780de696925055ebefc99cc766c4a', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'c357a881aedd761775c192eebe155bda4b1cf34b', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '7370d45bc4d99acba69c49700bb6f9856e920723', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '7817566d08ee998427e7c967d9163975c24eee78', pages: this.pages }))), h("section", { key: '60e539543cc9be82083b67f92b90eceab2e0e14c', class: "p-2" }, h("div", { key: '87976b98ee87b83c7aee4f61fef24f02cce72640', class: "row g-3" }, h("div", { key: '9849f90fe54901a3ff4f042e6b4275736c529f06', class: "col-md-3" }, h("h5", { key: 'b7d760f24d0baf9d26545aadc0142bd31f981c73' }, "Static Options Example"), h("ir-m-combobox", { key: '823edef532f3e1222f8fbf0879308acc72a9f2fe', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '50babe4f0612c202d179df223e434427ed00fb99', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '3f4044f1905e6c22393a416e14f22f3fcfa81cbb', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'ba4fdfb57dfd49c726c553188ecae1c436ca2f84', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '867c2421320281e69e05356e4f806b060601f60b', class: "col-md-3" }, h("h5", { key: '10ce987fbede15d7cbf6a56a65e48a9a2653fbc4' }, "External API - Countries"), h("ir-m-combobox", { key: 'a49cfa05ad3972dedb92ff47ef86ed2619b73d8c', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '21fbf57e6e56cf4c0357cd07c2af951883316d4a', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '221870f0b7065dc0a20def421cc8cb6abbba8e96', class: "col-md-3" }, h("h5", { key: 'a89bd15433f91ab3ac4935978db5a86648a98b2f' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'dd509ddbd38feb484bd7c4dc37e6eb10e958a260', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '4fff6e30d49b615c42c800dd0e0985705ac340a6', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '449eee2d626419ee03d6767a37254151b507ea03', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '27e4f7e80862b211fe7a2076d61ea0a988af4e5f', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '2f9c79f5cd22bd366e43370635f05d831cf20c84', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'b154c9b65cd256f7e71596fd1eb803c130ad2382', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '3c8162de7fce1fb04736528101ade9c9057a742c', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '807088340bd2ad4f84659c4a6bb84f99a361921b', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '53ef7647a7c4c274aefab8fb429b4a8783c15ace', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '0809473482b1d77e57680d93c81aaf4e45935c92', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '8f0ea2962d4c775d4807f97fabe453a91a575bbf', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'a3fbde74c88ae61a10958f445c3d3fd4d951f2a7', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '1ccf19dad8ba08386f95f007379025e22bae3c16', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '75bc174e3cdcf74467bf3bb7cf7e8a4f9bad23d1', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'c5c447021de62f89f0317002dcce95bd50482737', class: "my-2" }), h("ir-select", { key: '0ac148135d7bb467c1be82ddf3516ac4c8d54467', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '01908df09b1516caa2ad388739b9ec0f7da6adf4', class: "my-2" }), h("ir-select", { key: '1914462f5939cda0b4bdd6ce54279d0c58ba0846', data: [{ value: '1', text: '1' }] }), h("div", { key: 'b5925a55520c8a1642eaf5e2e708a2a7b7371d73', class: "card p-1" }, [
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
