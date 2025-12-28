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
        return (h(Host, { key: '6847766a8626738a2fe9660404b0b6af89cd7400' }, h("nav", { key: '39533b94462269be9ab8aaa2a0546325b34f335b', class: "modern-navbar" }, h("span", { key: 'fc5452fd7f9d7f1a4d257d704e5215d9eb23d056', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'e0e59a5fcb79b48124c22b81446ffd8e606c6f98', class: "navbar-container" }, h("div", { key: '08ea214150da9627e2f117402f266cc5cb3b4deb', class: "navbar-left" }, h("button", { key: 'dc6d08403fbfa592d081267e5f7b0bd26e67e27e', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'eda79307aa249637c096ec50ba29bce09571924e', class: "hamburger-icon" }, h("span", { key: 'dd21cca12ac542e9b5ffa96361683bd0fbd1bb7f' }), h("span", { key: '8d3b64a32e70570d367bc9bd9101abb9ac428f02' }), h("span", { key: '17babac21b8a83b263d07b8e85150413ad2cb9d5' }))), h("div", { key: '6f5ae1b56e0b1c88f8911720fa001ea7475a9327', class: "navbar-brand" }, "Logo"), h("div", { key: '3905352184ea9a35b73056ae7bd4b49618fd013d', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '4b3290116936116df30ac073166c6b66451ec36a', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '9bfe5b4d0da9371266674554615b57c641ccd50d', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '84d191e2db4462259230efdd1a0c720fe3ce7c2f', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '6e925060f00a1429b23ae4d220267834ac2e47e5', notifications: this.notifications }))), h("div", { key: '154297d9327b3463f72a499310de606fe7e8ce42', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '9b15ed561d3c81ceda5440683218ee17d993cc01', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'dabf749ce33f61fa371ae41ffa93369f2a39f8a9', class: "navbar-right" }, h("ul", { key: '84f7de4e853fdbe158e1ff59cb46f3c5a321217b', class: "nav-items d-none d-md-flex" }, h("li", { key: 'bca469ef9f35bebf6457c1ea76c57fee8c7a1aa6', class: "nav-item dropdown" }, h("a", { key: '82e4da9834867a78fa81d88d81146456ad8b2210', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '2d88c8a71f3e644bb842e46589689b9b8ca378fe', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '43c96f90440bad6417a3ae1d8ac472f3154c784d' }, h("ul", { key: 'f8d794fee0e11aa3c13b4778faf5feeda486aa4d', class: "ir-mega-menu-column" }, h("li", { key: '92e419f0d58e118254026ef7b3d71de8c0677265', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '8563c9a8b156d94f0145069417416a452f40336e', class: "ir-mega-menu-row" }, h("a", { key: '70b99772ff0d3a81e1dda061559c3863bb4fbd0d', href: "userinline.aspx" }, "Users List")), h("li", { key: '839f5d56b30c764423eb9a96096b8c2b42249c32', class: "ir-mega-menu-row" }, h("a", { key: '204563c5352a324960c1d08775b122ecda43ce34', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '1b4ef39d5d600dce1c918d8fe295f388ffde5d45', class: "ir-mega-menu-row" }, h("a", { key: '5dcb1725a1278c9beafea592cb4bfbd068e9248e', href: "countryinline.aspx" }, "Countries")), h("li", { key: '17c31d165cf788bb6f54919553111d9f29e61a20', class: "ir-mega-menu-row" }, h("a", { key: '74ebae79a52974e829e1c9f198b318a2c91d9294', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '0c9037e104b3257788cae030c43160fd8b194044', class: "ir-mega-menu-row" }, h("a", { key: '4f8807fdef3ec4e539924b9775be13cc67604940', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '4fd77ce3d6048c95221d45c65b61d474b2a68307', class: "ir-mega-menu-row" }, h("a", { key: '0096416d18b7ce97514694238df2fca156989e93', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'a608fec476ba84c8d6d5330968c310d780debf88', class: "ir-mega-menu-row" }, h("a", { key: '159696af72e3d6013227ca563ad5ca2698f75b11', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '2e98d98d5224b486c79166ecd9442d0b24228bfa', class: "ir-mega-menu-row" }, h("a", { key: 'f83e93f85538b2e96b7b37baaf60291882e9850a', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '95abe21c5c55d915850d04ee211a13056f334024', class: "ir-mega-menu-row" }, h("a", { key: '2f06bcca769b6bd9eaedfab988b405b5d992fa54', href: "foodinline.aspx" }, "Food")), h("li", { key: '24971260d0003acb912dc33d1b9505086c62da81', class: "ir-mega-menu-row" }, h("a", { key: '8adf0a2c45bdf03d07cc1cbb75de99cd5d17238d', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'a17266848acf7575d4aaa9e0089a3d9e9480e9ee', class: "ir-mega-menu-row" }, h("a", { key: '08111ff85f495df35d9533fec42947ddc6d12926', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '22b5728a61b79b6159b147eeae0cbd657c6bccaf', class: "ir-mega-menu-row" }, h("a", { key: '39a9e3c484c82c0d999c2e0a54a4958559279356', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '2d76408615cd9c185f95b33e27270a353b0635af', class: "ir-mega-menu-row" }, h("a", { key: '474a765c52c94e63e1dc8e47649b2d2903147b8b', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'd65cda88cbce4fd42fc4dcbfc8548341b7c47470' }, h("ul", { key: '2aa4851670bf21fcc892a673755127e09751131a', class: "ir-mega-menu-column" }, h("li", { key: '7e11ee955ed7996c8d89e5ee7fec0051f6d45eb1', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'c01410f168266d0b8692e2f6ec53938d57a3fc97', class: "ir-mega-menu-row" }, h("a", { key: '89293a37e2ac4e5b7223ba55c0ee80db4efd8e4f', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '4bffb13b791cec823672d065193f2e67c41dc576', class: "ir-mega-menu-row" }, h("a", { key: 'bc49b3d49e9014c4665108a130a6cc7a90cb5453', href: "aclist.aspx" }, "Properties")), h("li", { key: 'e2b06a87923fdff8064b24b9261f2f67e040e055', class: "ir-mega-menu-row" }, h("a", { key: '25fcbac729a105fd48ad52931dc594e66e2bb35d', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '0338e15b21166d62f227e1a9ffb4ab1ce97f7f53', class: "ir-mega-menu-row" }, h("a", { key: 'ac41af978863e0a591ee94379499eee5877f3728', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'a9812a4ccb180996b598eb8300a949fa1a15ae9d', class: "ir-mega-menu-row" }, h("a", { key: '9989b3a5cf68a513c1de564bfc4ce70973d02785', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'c9a039f9771b64c7878542afaedc3cbbb4d5cd73', class: "ir-mega-menu-row" }, h("a", { key: 'ce8c37b6118f806435b749781e9fb1ec757b112d', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '6db3ca79fcadaa6e0aa992e23c2b88d7000a0922', class: "ir-mega-menu-row" }, h("a", { key: 'dba63be9b78d7c035bcfdc97e5551d5dc50f3e70', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'dc3dc4efaf3762996401469483dc04c3dd6d4f9e', class: "ir-mega-menu-row" }, h("a", { key: 'e8f06ce679c65213678b8448597495e854af2c35', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '8f65ad00c505820bc2061f3fbf3f839b66f2c27b', class: "ir-mega-menu-row" }, h("a", { key: '78e6cec9d649ad95f1bfe87c638e2d71b4d4210d', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'f3d7e45111260a7f7be8f2e94bd63b83fb9ecebb', class: "ir-mega-menu-row" }, h("a", { key: '27ab627a26d7d042f4670ebdf28d1da322acbd82', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '786b2f262a265ea08fca380ddc195c2efa150e13', class: "ir-mega-menu-row" }, h("a", { key: '00c2d7077645b44cedf4cac5fa30a05496e25dfe', href: "billing.aspx" }, "Billing")))), h("li", { key: 'bfd3170d914967ab3a6b48ad39e80124d4b87e22' }, h("ul", { key: '0b62227c59f76747c07bd7cd5342edb13c89052c', class: "ir-mega-menu-column" }, h("li", { key: 'f541b50b1b0ade4d107f3193896cebe5567410bb', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '2d9c10b4042a1e26b65ca645a199e630201e4f00', class: "ir-mega-menu-row" }, h("a", { key: 'f07f42c1b986728ac6f8934b744eddbfa0c737c2', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '2a13561188dc1dadeb0a9b174e979374fad3135c', class: "ir-mega-menu-row" }, h("a", { key: 'f09f78768412d2e3743d9fff1063a6ceb29363d7', href: "poilist.aspx" }, "List")))), h("li", { key: 'b7796e655daee6aaaf63aa62da1ae1403601925e' }, h("ul", { key: '429de6b37c6d9febef71934cde802bdb7463ab3f', class: "ir-mega-menu-column" }, h("li", { key: 'b94da28feb2a0a402e54b1bc57f3779c0fffc298', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'dfb44075dfb61f4fb7872b7aef3e18b2fc452172', class: "ir-mega-menu-row" }, h("a", { key: 'dd06bc42783d57603cc150da10698182d7589bbe', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '920ad4fd8c6b955b527f4fda015cfa0407d257cd', class: "ir-mega-menu-row" }, h("a", { key: '79cbefdb240af4cb3425e31cd5154d73e1c1ee15', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '66a4944ac169babeb0f335775ffccd30197b564c', class: "nav-item" }, h("a", { key: '531a106aca544c21f125e158f13355e30db6cce0', href: "#", class: "nav-link" }, "b")), h("li", { key: '33a18968ccdb1cf7e7e57cb398b55aab5bc7be49', class: "nav-item" }, h("a", { key: 'c22e81b61b887308ac4c4666bd1ac894e1afab5e', href: "#", class: "nav-link" }, "c")), h("li", { key: 'a1ffbfe45de55978fa36c43447e13ac595f02c03', class: "nav-item" }, h("a", { key: '4aeaf035c5dd27307a8f592d7bf7ae0d9f24f327', href: "#", class: "nav-link" }, "d")), h("li", { key: '203f7b29a37e5abde92da1fc3af359cb7ab33414', class: "nav-item" }, h("div", { key: '2efafcf10848b152bcd34d3c7bd0ff02e9cb4550', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '9e6b033d45fd2bd9a45ea6b16031c66d71a84a39', notifications: this.notifications }))))), h("div", { key: '9b5a5e524bf16a48fa49faec7f12993c719cd850', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'ce2dac35225ad217b5bf67d6b2b18d7da8262fd5', class: "mobile-menu-header" }, h("div", { key: '544aef151ef868854c65ebf62615e01efd158363', class: "hotel-name" }, "Hotel Name"), h("button", { key: '14a1348a07402ed75f8eb6b7d103d1a97a4eb732', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '895d739f692ff9e0b66f4260a805e6dd855d7926', class: "mobile-search" }, h("ir-m-combobox", { key: '4ce3f16b82e7bca7b3e33081727a6b428f5574b6', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'a95e5060cce348899ee67e3b0bdba1de3ea092ea', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '59b624b327b76ac2497136775ae13b93fb47b640', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'f7c17e25da09fad7736045150e6a1c6bbdc9f434', pages: this.pages }))), h("section", { key: '95e528f7df241051444a3fb9c2ddd6b573ac6089', class: "p-2" }, h("div", { key: '8a8ac94c4fae956a8b2a8ca6109c808b7ffb60d0', class: "row g-3" }, h("div", { key: '45fac9be221a2b766a052ce9e034d94f4630d5e4', class: "col-md-3" }, h("h5", { key: 'b444d958ecfbb1305fb1bb7d775e404e52f21957' }, "Static Options Example"), h("ir-m-combobox", { key: '3b94bec3ce5faba5202524fa19c89fc393297bc4', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'e96f887f29533c798b41306b272dfbae63cba18e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '9d00f012c562b3492f9643cc3a2e3c8706310bbd', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'a3c9cf1b0fd7f39f68953bb606960db6cbf7c1a3', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'a94b71e70427c37406fc1c0b01f9a7e8e894a5f1', class: "col-md-3" }, h("h5", { key: '80b4b734425b248ca09638ee93e6754163c2b022' }, "External API - Countries"), h("ir-m-combobox", { key: '8d374b9ac6a822fed64ee5851d1a3e582aefba9f', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'a4a6fbb147b7be104144fbd4b35bf29ff53af9dd', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '7d73838497727f0a31796dcc178199ccaf6ace52', class: "col-md-3" }, h("h5", { key: '76830d36d91c2a1dc09faa4b8e4b89427c392285' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '80a63ddbff823d9b30a209a4f51138d1565e2d46', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '050dd5697449108a8cf4fc89f321b6b0472f47a2', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '2c8190f5c2787dea4f1f49f0ca265a853de1e28f', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '28300f08fb2a5180c1d693c44ca768eaba6f07ce', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'b0df94d9ef525c682555efe66ab35ad074e5f8fa', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '6b62eb90fd547fcddf3e54db3a48604e662e9f9b', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '328a5117ea16ede57337b7aeb486839203705262', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'e5dd200d78be58f1e127e43561cd91e157b535d0', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'c96f5b672cc99576b4e8c134d2a1b9834805a399', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '49ebcb27d994734573ed578bb516142080a04ec1', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '1183e8b44853a42e4c0bdf31aacaca504c377797', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'd3168c3871794e126ec4a542c3172198976c6dce', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'e6b1fdae2a387a830a33e78fd714e7feffa10528', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'cadfa2af4056d9588c13fed530cb299098f25d96', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '2cba1c38ba8b3d8dd41f7c3e4b54f0800f3fef28', class: "my-2" }), h("ir-select", { key: '86bf2403861c3a19dee0939792de70f173226ba2', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '9d38b915bf891d759bce9c1ed623d62fb7eaaf50', class: "my-2" }), h("ir-select", { key: '74bd27527d54ff24365ac19e4fb209aead0a9606', data: [{ value: '1', text: '1' }] }), h("div", { key: 'fc20105dc41736120a5ce914af9525c93b19835e', class: "card p-1" }, [
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
