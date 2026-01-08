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
        return (h(Host, { key: '894efa629074ee940cc4690520d5e22fa6739c48' }, h("nav", { key: 'ac0e6842216e6151030818e43420317b51d3cbde', class: "modern-navbar" }, h("span", { key: 'de67f835d3709a5f8ea49fb56e124de62cf9a0ba', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '167dac2c4ca69b6d3bcad5a010253d06606a6a20', class: "navbar-container" }, h("div", { key: '76527dd7b0bde26c0cd52f313c55ec80a28d7ac2', class: "navbar-left" }, h("button", { key: '6ee722503fb793265d56506374ed749e9626a8d6', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '297b29013002fb4fc29e4661b941fbff1dfc9c1d', class: "hamburger-icon" }, h("span", { key: '00ba78da85a64c247af98944d68a09233e187483' }), h("span", { key: '2e56152ef3d2b78c683a8fd68fa0e77029ef3732' }), h("span", { key: 'd69596ace941d25ebcdd34cda05bf8d6bab27bf0' }))), h("div", { key: '198b1b3e369c9670648ca2d83efd1bc52c9c1a1f', class: "navbar-brand" }, "Logo"), h("div", { key: '48e27f7b2b43a91895a4f7d9364bd6b782f788e6', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'd4e9487a831bbcef2dedbf5cfd5a518ae38825c0', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '24910052c9e159db10ea468e0487cee88594cd32', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '46660b5b648255043c7165f6c54a22b8921a30e0', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '405e1da70c32700d07c55bae16c9bfe17b01349c', notifications: this.notifications }))), h("div", { key: 'a4c027f6fbec460fb5d005ade0f677edf4d7a75a', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '8d5b1605583c27ae9e30b42be055b01bcef0b9be', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'f027ab7649e2a437bff78a8492d17dc061654944', class: "navbar-right" }, h("ul", { key: '0f4a48a7bd3f977030e08f0057ef30266bfab0be', class: "nav-items d-none d-md-flex" }, h("li", { key: '6492409739886828db8015fe189b09afcc819034', class: "nav-item dropdown" }, h("a", { key: '70a72b97169a2e20f2253da66fd896ed94bfb664', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'f08e3d284e590b4820254deb12d3f29b4d07db83', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'a7a685d4fdd716c6ea54fdae02ea79ccc07eb44e' }, h("ul", { key: '1f2a121e02d0c870c3b18aec21a76fe73b369eb6', class: "ir-mega-menu-column" }, h("li", { key: 'a4f33a96d5fd99b5f4d2d06718f622ffb492e508', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'ad0ce188e26779346500a0265c9739af2e7303f2', class: "ir-mega-menu-row" }, h("a", { key: '3b3487c1a2e81b1b7606cb5f1484baf4add789f2', href: "userinline.aspx" }, "Users List")), h("li", { key: 'ba3a6da69c1dabd82b4a565764493cd193794ccf', class: "ir-mega-menu-row" }, h("a", { key: 'bba8f322ad9bdeaa2dcddf1048749643ddebdbd8', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '5a482a33d37ad00957edb196f64b11779e258aa5', class: "ir-mega-menu-row" }, h("a", { key: 'ee66f876d9a0e6aeb2d1bc4c9831c3f35a0be3db', href: "countryinline.aspx" }, "Countries")), h("li", { key: '0cf39e95c6949a187f745d383c556f089a25055d', class: "ir-mega-menu-row" }, h("a", { key: '4f3f5ce307e9aa8ae1add52df62cfc44bfb091cc', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'f5212a3afd6e6a0b3037dcd5a87eff5ffe7c8b30', class: "ir-mega-menu-row" }, h("a", { key: 'bf32eec58061de03c40e79ab9f625e374990f42a', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '159ae93ee1ff44339b0752b2f09de978140a8067', class: "ir-mega-menu-row" }, h("a", { key: '85ef6327fb826410b19c08aecde54d66bfffc6d1', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '5fe9d71b7b5df54dcfe481872ca5293f39fc831c', class: "ir-mega-menu-row" }, h("a", { key: 'e09269fcd512c4da3cce90f8b80996d4d95c9807', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'a21f9c79f4b8ff667dd66232b874ac23666fbf88', class: "ir-mega-menu-row" }, h("a", { key: 'cb3a3f587e2e98705556c8f6a7ffe686c98e1b91', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '0751c21c528242f63b4d2b3d40ce1737407c1bb9', class: "ir-mega-menu-row" }, h("a", { key: '5a50cb8e6277fc447a2e0fe99ff5e775befdd91f', href: "foodinline.aspx" }, "Food")), h("li", { key: '8010596cd79d3df1d71280622f24d7577f48b10b', class: "ir-mega-menu-row" }, h("a", { key: '824a551c2b870910f91ad8f9dc9ba2df0870bb54', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '2d37e5f4c117fc9e43f3f03496850c2588aa481d', class: "ir-mega-menu-row" }, h("a", { key: 'dfb8521bca0e6be4a45bbcc180eaabcc379bcf50', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'b83855ed6eb001874699bde90003c5c8f011e24a', class: "ir-mega-menu-row" }, h("a", { key: '198b21986ec506062f4ef9056df42616f694b4de', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '507166cd5dd216ae49ed5789c140319044938117', class: "ir-mega-menu-row" }, h("a", { key: '91aca9f77976255e5e510ec94c18a08ec13c2463', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '676177c52c83bd05d0b198fce54a5db23574272b' }, h("ul", { key: 'ff5a346d1d70479ebb84d1f22303d8467a498f68', class: "ir-mega-menu-column" }, h("li", { key: 'b85fdc1e3085b1caa65edf0da0b2aee4d9708ccd', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'ebbea67610f9cd323cbb63530a50f1b06e6aa4d5', class: "ir-mega-menu-row" }, h("a", { key: 'c00a8d57bb5c00d00692ccdac98c7f3b366ff7cf', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '92453e84b79bc47ac67feb5722badd86b73a5443', class: "ir-mega-menu-row" }, h("a", { key: '9f22c9c4fc060e086b6c58f517837f66f9e16bd8', href: "aclist.aspx" }, "Properties")), h("li", { key: '536db4783b176b4f9e8fcbc46ef082900759f8b4', class: "ir-mega-menu-row" }, h("a", { key: '5bc28b68b65b188f1565a3ab16d52d492468c37d', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'e267fc3901653c6c137ca53a0884e8c8a53ed4de', class: "ir-mega-menu-row" }, h("a", { key: '17f72d5288c8254d59a2abd30752646f86edb365', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'e2757268f5ae85738c0b9c14f12f8896d4d787ff', class: "ir-mega-menu-row" }, h("a", { key: '0a2ffaa7f437cd2522cc68a5ae6317b76647ae0c', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '2800686f95ed67490c15ac795f63fb9a99eca088', class: "ir-mega-menu-row" }, h("a", { key: '69b19939b8b3b688be0ed9cb3cb23b1075109ce3', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '66bb07d5cec3b28fd104e4071af0a7155ad0f6cc', class: "ir-mega-menu-row" }, h("a", { key: '3a259b9f93c9c43e3be9211b939389bf7fd3546b', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '9ab720bf50340c21b665117eeb75ca69f1133f9b', class: "ir-mega-menu-row" }, h("a", { key: '6b2322fd4e1d390dfa9c9cbc63bd04762a641731', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '5a61811ffef119f884312f33066b98ee580e4c26', class: "ir-mega-menu-row" }, h("a", { key: '851bfd8163ecc8298ade8943a377edc1ef96a1f9', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'f1fc80effd013b91ba375c3efebb10c2240e19e4', class: "ir-mega-menu-row" }, h("a", { key: '60d28ef12fac4f63e4b29e20f8a1bb46eefc2a8f', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '3ef7ff3be616a34c3c2c3400b6e26b43274d5f67', class: "ir-mega-menu-row" }, h("a", { key: '620e952a910a700fbdef0df9c0ba9312c9897945', href: "billing.aspx" }, "Billing")))), h("li", { key: '6b6fd34effca1fd96524dc4d1ef621ecc81490f0' }, h("ul", { key: '4e5c21ffa0047a3f5490a67b05589146eddec55b', class: "ir-mega-menu-column" }, h("li", { key: '925e3d8f4fd28c5fa897c9f4ded9254db4ddbfdc', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '4ebd2db7a0860def606f9a078aa3830561612c89', class: "ir-mega-menu-row" }, h("a", { key: 'f7c3d8e3aa27ba084b26ecaf2af8b4e87f5b2ada', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'c51ddea78c285c02eaceb93186f1a9bc3c9897c5', class: "ir-mega-menu-row" }, h("a", { key: '9fb1cab7e508a3e9e9a9effee06b74de6ca1e6aa', href: "poilist.aspx" }, "List")))), h("li", { key: 'e364e946d69db7b60634d5d6385ae03104b7cf23' }, h("ul", { key: 'a2a745c8e85b3dd65585e4ee686b2f2ab58fe56e', class: "ir-mega-menu-column" }, h("li", { key: '2922c052871f78e66b4e8b76cf8a965273650d36', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'd27a86701939a8d60c49dcbdb56ed59f4963a595', class: "ir-mega-menu-row" }, h("a", { key: '3bdc1be1b61ab855c7dcd2eda1667a3c959c2df0', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'b62e389cc81a31e90f5c687a1dd7749a0046768a', class: "ir-mega-menu-row" }, h("a", { key: '1bcd0ad927b365c2dabda378e81fe522469bdcea', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'a7d8572d40c09b31a71756f4064672600a2ce74e', class: "nav-item" }, h("a", { key: '4abab9b1548f8470eccad3b734e9415c55810efe', href: "#", class: "nav-link" }, "b")), h("li", { key: 'e41eb9ef23714ec646d620b3fb538829bc8d0d9a', class: "nav-item" }, h("a", { key: '93d998957ae4fc9994a7093e2ce7d3d76f6bae64', href: "#", class: "nav-link" }, "c")), h("li", { key: 'a40530dec7ca2eb9d00c55aaded9694b672283fe', class: "nav-item" }, h("a", { key: 'a38f79f4bff0848cb1c6965533f5a97a39c05619', href: "#", class: "nav-link" }, "d")), h("li", { key: '10c065be625887ab9ef592944d00b65ab97725db', class: "nav-item" }, h("div", { key: '6d46bfa57531b052da293c86d56142a3c2a99741', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'fcac15f899f2f141357364a77eca0650855950ca', notifications: this.notifications }))))), h("div", { key: '218d4669e0633f7af70ec9fdd4a9315861bfcf2d', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '974305a74004265124488c188139949a9edb2cbe', class: "mobile-menu-header" }, h("div", { key: '251bbbbd386f9b306706d951bc8d11ac202b01b8', class: "hotel-name" }, "Hotel Name"), h("button", { key: '00486511e9903f6927a07a2b98aa62301ad3a5b6', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '34ce0d9d1dd7c5a71dfbb71ec272d64ecd492302', class: "mobile-search" }, h("ir-m-combobox", { key: '20d629e5822786ef6bd953e82345160d5929454f', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '68d4e72108e4aa11cd5388bcd705d5be684cebea', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '22d1d237910e7aa36325505504297c2566bdb258', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '20d2ad8adb9fe4b5762528fbe97400d60fc4d58a', pages: this.pages }))), h("section", { key: '35ea338bbd1868b0530e568e19d0d3261c630f37', class: "p-2" }, h("div", { key: '766fadb8c7b3ecf73978e9df46e22abf78d41121', class: "row g-3" }, h("div", { key: '59d293cc67358927fe26485a8f5705c797ceeb00', class: "col-md-3" }, h("h5", { key: '4d481de85f064dd218c9303bff7e1075664aa8ca' }, "Static Options Example"), h("ir-m-combobox", { key: '63ce87a75cbbbaf7b7efe4e26071cc53ec109c63', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'a92759379174c20349651a764f2a3681fffb8bbe', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '585135bfd470efcf5ac104ddcbd7d16ca4f9715d', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '9855b7498a4d10fed764fd5b1f471bf30975572a', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'b7e0f62c3a4414745a66907ba7a3cb8411ac6118', class: "col-md-3" }, h("h5", { key: '5f2b1550239fa0b960e53e9ae59c1badcbf1f778' }, "External API - Countries"), h("ir-m-combobox", { key: '6bde61ba841d3900f614e25011d6ce0d6bc7b00f', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '2318ef677fb7ce009c2f2991931c5a473b7ea6b3', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '2334d2196947f68dd1c583a230da4346c35ae150', class: "col-md-3" }, h("h5", { key: '0d7e469cae41fd1e15634106f4de8b480d725324' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'd32699513684bed44fbd4d666b0f07e55de5f0d6', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '44b4e246570668f96a706223dfc22078a2b5733f', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '0cd845a69eff125e43287de68b814875a857f84d', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '066d2b628a9c0b4ab757bdee46262d3ab121dd6d', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '6d38e9ae2d4dc0cd5da58949aa925380c790ab5b', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'be256305c231b348cff9244fc77e00d805198541', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '9fca96722c6c1cde1626894998fd60de4bc03b06', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '102f3a219f371c67d6b449291cc678f33921dc3a', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '2d557cd62030ee31accc5ec839109a67709aa6a6', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '298340270d7aebe89f4b41821d9002f6609b4eff', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'ffaa5bc6688b110e2a09fb047075f28c1e734eab', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '63bee86128ba77281d4e03d84f77820fddf10dd9', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '450da8bdb06adc2f6dbe1749c711f7396fb330b7', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'aa866ae14e4d1f96b8f4c453b07c1f92f2c3c37a', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '3ca982194b31dc6269a289eaa646e3edd4da3bc6', class: "my-2" }), h("ir-select", { key: '4740bfc1994d5810b2587a3f4ee5864cc97041f3', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '5dc6340f088f9c315a01350070a3d2b9746e4cdb', class: "my-2" }), h("ir-select", { key: '4a3cf14cd3cd2da03213bf3b0d7d780ee62c9bf3', data: [{ value: '1', text: '1' }] }), h("div", { key: 'b42719e2abde25e4905a7843088e2839c0a2d029', class: "card p-1" }, [
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
