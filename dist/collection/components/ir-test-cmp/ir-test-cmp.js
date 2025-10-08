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
        return (h(Host, { key: '9646c146dc887a5d9e4a1c0489cff795c70ab197' }, h("nav", { key: 'b9f7315de133ff2b40b1d3e471ff605d4b778f87', class: "modern-navbar" }, h("span", { key: '4fdc7ed3aa8845f8ad7ec1e2d05072ab3f6a264a', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'efd68b726de970c681a6f60edac43798c15f5107', class: "navbar-container" }, h("div", { key: '913cf45289475d39a0c9d4d6b983d94f7f3ac936', class: "navbar-left" }, h("button", { key: '313e7cb96f386dcc1b8db3fdebd02661b09a0781', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '2192626a33814793597ae1ec36b7a5d987d88e77', class: "hamburger-icon" }, h("span", { key: '77d6d8ae1e4bd1615c9b41b01e59a2e63ccf8ce2' }), h("span", { key: 'ac70a950029db44cb4c7ba271253449d1af652ad' }), h("span", { key: '4c57943d1205082a86afbde6f9bd8f38be12efcc' }))), h("div", { key: '2e01e44808483564399f6a6b8b692afa2022ce6a', class: "navbar-brand" }, "Logo"), h("div", { key: 'e4edfbcdba5e9c79d5b402dda142a165408efdc9', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'db52beb320f0b2ad5c3cf98d0c3d226eb1827bf2', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '2eb6c9bf7098726f45ad1c50a3e0805475c26f40', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '040c6e6a3738883e88465e4881524601ca2e05e6', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '2f062481a0655b362813f805d159f1d2ae467367', notifications: this.notifications }))), h("div", { key: '5f65e4ef45c6319ac971d608f1f5b6cd3dbd0b41', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '48bbac13696c87bcf92996e00e31bf898d273ae5', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'bb1f636ba678083f044ed8c739417ec0c34f5527', class: "navbar-right" }, h("ul", { key: 'a901dd65482c22fb74488485eef32e0ca44b3e28', class: "nav-items d-none d-md-flex" }, h("li", { key: '35a381bb685752ce2d4ecf1d7e527d6a26363dd9', class: "nav-item dropdown" }, h("a", { key: '6d3c22bf32e116d4eb0eea0db23f6be5fd9fff6f', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'fa16985960f6bf77102ed495dd8c73b306c7ff57', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'a1654dfc6733ad9801eb9625555808b34679738b' }, h("ul", { key: '21b94aa416bc4da625e9b2f850582df95d01e9b2', class: "ir-mega-menu-column" }, h("li", { key: 'b31004bba9cec667465dfc1c186f7371c4a07f83', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '633b683ede7bbf8f25d1e3c69236200d6d225b60', class: "ir-mega-menu-row" }, h("a", { key: '440533c6ecc465fd0ee8c24c40adbd10ee52e7e7', href: "userinline.aspx" }, "Users List")), h("li", { key: 'e317815f99a4c01dc9cd29ea6c44eb194a5febac', class: "ir-mega-menu-row" }, h("a", { key: '63b94cb4f4d2fa36f62a4d20bec20c5dcd576eee', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '9e9962a3c0baf8d4ac269776abc1a8931a96f0c1', class: "ir-mega-menu-row" }, h("a", { key: '93d05a1f2a92b497abda198fbebdc4f5b0d1167c', href: "countryinline.aspx" }, "Countries")), h("li", { key: '2e05b4736d008254a6681fad2270845d5d5bd38d', class: "ir-mega-menu-row" }, h("a", { key: 'a11d7e909a2380b57597369ae8256ab5d4a33a50', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '27e5c5e7b9c9fb9f8fd2c08172e5a90c5df35543', class: "ir-mega-menu-row" }, h("a", { key: 'eeee994bb1bced09f34e93dcbc75c54a08fabf55', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'b5a379ea18b7173447d453b4b010771525941ac9', class: "ir-mega-menu-row" }, h("a", { key: 'b21beb3a76a781b298cb6968f884843dc6fe1846', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '4f943db08f4455886b8d67f309fcb42fcdb06207', class: "ir-mega-menu-row" }, h("a", { key: '291b66f17af7edafd9c3ea12cca89f4801a740e0', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '2f31977201453c8ca9248d743ce86cf00e9e4809', class: "ir-mega-menu-row" }, h("a", { key: '1d5fa02b5047f64e857b9b1e9d0f08bae9b6aaaa', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '696476d3dca7eb2d19970ff298d8682026a9028e', class: "ir-mega-menu-row" }, h("a", { key: '13869304815cf7e24339a624f9e307e1e090784a', href: "foodinline.aspx" }, "Food")), h("li", { key: 'bc8092494932d09c3b05827e20d2d4a342eaf4ad', class: "ir-mega-menu-row" }, h("a", { key: 'e4add0d109c9b83a0c3453d590d1ad1558dd2839', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '27fa4d2070700fa3b1b76fb303f8b2dab717e756', class: "ir-mega-menu-row" }, h("a", { key: 'fc83236aabc079f0e759a5f6845021d24aebcedb', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '388ebe86da960e09e5e2867aad15fc4bb86d296c', class: "ir-mega-menu-row" }, h("a", { key: '0c3cd0710c12af6495ffedc8cee8bd79e89fc738', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '1688ab4892a83cd031a8179d9f4dc017755054b0', class: "ir-mega-menu-row" }, h("a", { key: '71f6f9b083ff349fc1787c2e6f6d6be290fd7fc1', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '160f9cacd502169e9b847ca1f5800a95df10261f' }, h("ul", { key: '7e9294f1d96312c4cb5f52a83f162dc54afa8d13', class: "ir-mega-menu-column" }, h("li", { key: 'dc6daf9184e5bacc53f3fcd4e3aadd0412d4a8d5', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '770feabfe965c284e0e0d5da4edd046654932bd1', class: "ir-mega-menu-row" }, h("a", { key: '03cb660820a164cd99935508d92b52d4b106c704', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'e37fe260e306c71688c794bf91094a83d9194101', class: "ir-mega-menu-row" }, h("a", { key: '0f7883da69e3a0e52c9cd4953f8130831383c93c', href: "aclist.aspx" }, "Properties")), h("li", { key: 'ec513a8fedc04462354c36fbae52ea15d1e11aed', class: "ir-mega-menu-row" }, h("a", { key: '2f29cf233cbf60f22d368d27f37691aea018d50c', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '36ed5b3d4d51a6b5ab7d5c5f082a8bb9ec2623cc', class: "ir-mega-menu-row" }, h("a", { key: '279be0cde50d3b8da916e3ab2bb59656413d3411', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '278c3cd380e699a8b4b4c26a6bded519ea4859ef', class: "ir-mega-menu-row" }, h("a", { key: 'c940b6f0e2036ecd795ce638f374a49511b48482', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '75172b3ccacc6fe7413672193c93965402d8cb34', class: "ir-mega-menu-row" }, h("a", { key: '25bf4a82226cd7f098922e6567e2990ecb5bd215', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '49da19d78a6d6583c8eb1ab090896387e75fd5fe', class: "ir-mega-menu-row" }, h("a", { key: '5b44ac941e11913038af51064af1c13f87305e89', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '80879a5f30cc86f215e08dc34bfc3fcd54310fe4', class: "ir-mega-menu-row" }, h("a", { key: '2812fda4a4f4b5b5bfd470e77f3dc452dbc10650', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'c5c6ba273c116163acadd0a145e250656b2becd9', class: "ir-mega-menu-row" }, h("a", { key: '5192d12e9a8b2a8034e1e6e23c61a05f01d9ddb9', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '33530e8faf095abe29e7885b9724011f007663c9', class: "ir-mega-menu-row" }, h("a", { key: '037b2ff2eb6c676ce83ed4e6bbde976e8d65afa0', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'af04f2722a81329db306c887684bb01f39ee0abf', class: "ir-mega-menu-row" }, h("a", { key: 'a81724578926eefed13ba4abc48b30d16632198e', href: "billing.aspx" }, "Billing")))), h("li", { key: 'cdcf82c3926fdbeb7a0e314001aa955e444dc8b3' }, h("ul", { key: 'ded4c5696fcceab7fab5ab6a15ce549d7497a58a', class: "ir-mega-menu-column" }, h("li", { key: '187ebb83fcce573fcc662a56c692ac3fbca454af', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'd43bda83d009f5a655fcd9c8c38612cfffda4ba1', class: "ir-mega-menu-row" }, h("a", { key: 'bf667c76942e2e2161e1bde90a9a6d3d4d67049a', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'e318d9bbe647f3702e1dd7c4373c8b9815614920', class: "ir-mega-menu-row" }, h("a", { key: '64509f3b2928c8cdb4401e590f4cd3ee0244f838', href: "poilist.aspx" }, "List")))), h("li", { key: 'fb2c0d5465e22c392dab8b56f988ffa17c4077f0' }, h("ul", { key: '5deab54f2f9af4829c06016628b91f37e94b0468', class: "ir-mega-menu-column" }, h("li", { key: '3dbb183b02fe5ff9af5a7a996e36dd23fd4d81be', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '0b71a9743ae27e749cefb4482bb6d28fa2dc0d77', class: "ir-mega-menu-row" }, h("a", { key: 'db63092163c883f2de8356a8dbc65c2f7094d3a1', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '053f1a784a41a8d75854416894a0af876e43bcbf', class: "ir-mega-menu-row" }, h("a", { key: '2c759d8f85626580f277b03322527600f5f69a43', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '7af5472cc1eb7544015e7d133e085a51aa000740', class: "nav-item" }, h("a", { key: 'cfb9d897abaa6bac2fe68aec3340c584bbf5908b', href: "#", class: "nav-link" }, "b")), h("li", { key: 'fa08fc9f3b0a4c7ae483fe8f383115a2d00bcc5e', class: "nav-item" }, h("a", { key: '131abccb12f3a4f1ca5ec51834360ba973b80227', href: "#", class: "nav-link" }, "c")), h("li", { key: 'eb2a1f9cffc2eaca6ff1fecfbfc10f05e868a8a6', class: "nav-item" }, h("a", { key: 'be291c6a90916387d9a19d3c52cfb88b17f80092', href: "#", class: "nav-link" }, "d")), h("li", { key: '5a4c5cd85a601cf635f0df8849d8438be6c4cebd', class: "nav-item" }, h("div", { key: '6222fd4082caeb0ea00a0ce5392cb0c230055b4d', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'd6ee0e31d990dc1ef4fac49eefb987e970441920', notifications: this.notifications }))))), h("div", { key: '8013b2d2976a16ae4f39edd2a9674158c15fc852', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '1fad4740c261983b231a91eab788eeec13b7dcbc', class: "mobile-menu-header" }, h("div", { key: '19b6df5077a031e3b3dcd9511b5fcfd42be24e10', class: "hotel-name" }, "Hotel Name"), h("button", { key: '918752b7291577c95c0907f61e02c785b12dec1c', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'f1de32f743cdda855d3f69e0ce2aa25d4240e449', class: "mobile-search" }, h("ir-m-combobox", { key: 'cf1b4113f7b215254e81829dee7563c30f82f610', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'e62a04771db3acf774b082459c29671baa91aba5', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '8b68c6d552091eff74532e10cb009334e8767a22', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '2afd796fd0742d39521234290284a80266c173ee', pages: this.pages }))), h("section", { key: 'ad9ea02cbe8ccba9f751f42326f367e9623422b2', class: "p-2" }, h("div", { key: 'd7a703fadaab128fb9075ff35bfc77afd9f2b2f0', class: "row g-3" }, h("div", { key: '9762a30fecf337337d9403ac1d9015ac9d1b39b6', class: "col-md-3" }, h("h5", { key: 'aa087ccab5861a6dec558ad331d436b7f54f2dfc' }, "Static Options Example"), h("ir-m-combobox", { key: 'cbcd438ce272c4b0998975f568cfe8ee7f702c6a', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '796132b614a077dae0175f2e4e5e6296a1d2dbf9', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'a6cc4f50eb873e19e8c81f13c021b71e0681e143', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'd114635d3c692c220176ca73f2ec23db63d00a19', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '5aca1d57da77ab8cd42305f3eb1ac0c2818570e5', class: "col-md-3" }, h("h5", { key: '25585a0e6b7307cdc89c431a6638b90bab3ad14b' }, "External API - Countries"), h("ir-m-combobox", { key: '22a6113794c947d53c2c886ba3b01bd97fcee81e', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '48c25f44fa8909c98868ee26370899c9823f6734', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'b54b827d75b2cd1b290caddcc745b869eb9671d5', class: "col-md-3" }, h("h5", { key: 'ad4c16cadbfc877625018820e309df24a9c4b07b' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '5b42399a54933f469b6e64bb30322fc1d55e5e54', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '20d85df8dc48595bb4cf2f1177b1721b774bde3b', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'fc6afd8d2f931bd156f129d1738e2699de24d55d', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '6a667daef76785769fe15f295406941db3a6b61f', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '407298cca26f96a5dfe738588bf57a6bdb27578c', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '1804de4c2357b0a1d48c8cf58c79e8b2e1e35e32', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '52314d0a396111743098dd4b0557131298242dce', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '82d9595f6f72c3b7f26d87d12703e46fd4daf4fd', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '4b765eaba7a5e20587f3fe9ceb3dd9a5f6e623a5', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '6f373721d91c3faa87db25d4f2d35829c6e622af', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'e5f9ad0d56491a9418cef63872490538023de75f', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'bac3625efeffa0ece33194fd0dafb7f21452a3ec', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'a5ec7d63ac924b0b851e40528380d1e80f6b78be', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '59dfce66b4e7947ecf88bf1cb7bfea387aa9ff34', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '8976df2f9c878adf494cabb45af554130635d43c', class: "my-2" }), h("ir-select", { key: '7537da21065fd553cf85af70b5848d4a5b6687af', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'f615599d0e8c6eb12f1f491e6921f6e007903dd7', class: "my-2" }), h("ir-select", { key: 'e5d27acf76148973ab5aef0662faa9f1f48cab96', data: [{ value: '1', text: '1' }] }), h("div", { key: 'e73a670e7f19a1d59992f6850bd92e44a0e0b35a', class: "card p-1" }, [
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
