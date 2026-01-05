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
        return (h(Host, { key: 'adf81ae47a4d84d18a668cabf4df295bee473881' }, h("nav", { key: 'c57577ceed23cd743c686ee80f3c83efa38491de', class: "modern-navbar" }, h("span", { key: 'b067189dc63a77d8528c28d8c39c6be3dce9b07c', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '3d36d31fa93a270ded6f666eeeb4bc31aadc1d73', class: "navbar-container" }, h("div", { key: '3468a211b62e0de109c6eac7d17f9bb57521f6bc', class: "navbar-left" }, h("button", { key: 'e03124ebeef4b2f5d1e2980a36bb7983b2556c28', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '7ec8f420ddb13da09ccafd5c99cfcc9a048a542b', class: "hamburger-icon" }, h("span", { key: 'ff0ed78a9fbd98e2af0865b8508df6a0a38e5280' }), h("span", { key: '49c865a8848f73d2e07cf1c82c8cc429b455eb8f' }), h("span", { key: '95e81a79d6c308a664861f1ef4b56a56e162dad1' }))), h("div", { key: '39c0513ccbf10fb329111eca336d0fdde60b0db5', class: "navbar-brand" }, "Logo"), h("div", { key: 'cfa586d09e038379876874c631fc6f6ae1dfe9a2', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'd6e9a54537ab3e3f82785ebe3d4aaa2c99c2a86d', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'd650372a66eac185e9aee8873f1c279fbe67a1f3', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'baa6cae23aea758ede9ae1e20a4c672932d3da76', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'cb8f90f6c9fb8d1d6c780af451bc2b7ce72ba56f', notifications: this.notifications }))), h("div", { key: '5ed0a31ec60640fdb86c56c78325d073c243eea9', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '7a1c058fac1cb0cda7cc1ff9ce639bba96a464d5', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'fbad4c7d938a1f0671b4b02fbbc66f6a2e8f5902', class: "navbar-right" }, h("ul", { key: '398ad3e0ffef128a4c448f85a39eff888c273897', class: "nav-items d-none d-md-flex" }, h("li", { key: 'd329d83e09f1820c53fbd499ab1dd5705c742b05', class: "nav-item dropdown" }, h("a", { key: 'c32ad2a21560dcaacb85c7fb46dbcb7aa60e3e03', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '1a09cb2002626bcfab101f0b6333a3688cadcfde', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '3adcc35c7856c4b2f80b6d96533df447d0487ccc' }, h("ul", { key: '91e537843c2b187e890c355c775e0560695b6009', class: "ir-mega-menu-column" }, h("li", { key: 'd0a5a44788f10e55d4440e635281236a81dce57b', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '493a2aa15ec97dcb71e9114a4014609e5388aaad', class: "ir-mega-menu-row" }, h("a", { key: '250c9441d242b2e1fa51f86f8e364170c2120b76', href: "userinline.aspx" }, "Users List")), h("li", { key: 'c7c1b9dcd5d419233b1b582feaf8e4d1eb7037f8', class: "ir-mega-menu-row" }, h("a", { key: 'e6b1de786926b124ec6fde1e9a75239d843e8ada', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '33f8e5050352900d4d5e6d65a9687474aaa0ba35', class: "ir-mega-menu-row" }, h("a", { key: '67fbc742f846ffa7b0c74ab1416e33ab6843e2a9', href: "countryinline.aspx" }, "Countries")), h("li", { key: '829ab19c02869e4fa10e3086bdc565ecdcbb8d7f', class: "ir-mega-menu-row" }, h("a", { key: '0224b88e83f999dc608d2d71dd21aeae5f4c2298', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'bf6f41b52b2d7bf708e71dbbe5844d5f9cb4bdf0', class: "ir-mega-menu-row" }, h("a", { key: 'a1990c025adc717d55ce2abab616152c0385c652', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '22fdec4f1550be74b5f1f4679474a06501c131a0', class: "ir-mega-menu-row" }, h("a", { key: '1ceb438bb3e2ca730c4b2ed8683b91a731c2011f', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '81dd74b5936891ce33e03fb1020005668ad3b6a0', class: "ir-mega-menu-row" }, h("a", { key: '988a54dcb519af280a02947f5a593c1ebc28c222', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'ce36f13af179a2efd38e348ccb3f101964eb1674', class: "ir-mega-menu-row" }, h("a", { key: 'f12cb8863e2878032a80bcca542af316cfaf959a', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '023eeeae08415cc10dd98709b6c8d201c5a8f0aa', class: "ir-mega-menu-row" }, h("a", { key: '206a3a5b439f0c99a5359718c6d068ef9fdc3ce7', href: "foodinline.aspx" }, "Food")), h("li", { key: 'd3bed125e848850f132da5778bbfa4f42ea2206b', class: "ir-mega-menu-row" }, h("a", { key: 'd48ee7a02f3617fd48791523597562fd7f3cb855', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '6491ec1e419088e5f4303ed62fb124cda25e514f', class: "ir-mega-menu-row" }, h("a", { key: '5753509b7da4dc6c54dc6a493c909748d1229afd', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '86055996fa3ea689a72ef05d622dd02b4313510b', class: "ir-mega-menu-row" }, h("a", { key: '6f6ee286b7422efca3265ebc2ef7f0ce1b877955', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '310a66f7ca4c8aa154b3e8ce89172017b02cdbc1', class: "ir-mega-menu-row" }, h("a", { key: '829f44372cb487d3eb664d54c119c3d607a5a6dd', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '5cbf3c095d9aa27d3637005e470501c45def6b1b' }, h("ul", { key: '8e0ea1fd759d9aa43219bf2bbefda887de1760bf', class: "ir-mega-menu-column" }, h("li", { key: '95b4d12e7821d766ba05d03fe3005f891f8c05d7', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '33f359d378239140d45c73e68b8b527ea2ac93c1', class: "ir-mega-menu-row" }, h("a", { key: '36144af51bd3aaf1d9bac70e75eb3ad6510eb363', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '5a67c1a5f4fa59b68ed3ad4c49c54c2e2cbc9320', class: "ir-mega-menu-row" }, h("a", { key: 'da9d8ca33afec855962a5b09aaffe421386711d6', href: "aclist.aspx" }, "Properties")), h("li", { key: '9cdd767ef672d3b6c5e984482203a3bf1f1de1cf', class: "ir-mega-menu-row" }, h("a", { key: '3bcda6c38c9904dec9a2b8941974bf87f761296e', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '2d7599e7688fc6a9aa5ea64341afde60dc15a33c', class: "ir-mega-menu-row" }, h("a", { key: 'dc0a97e3b2e4515a21d5df6c1f711ab18ad82241', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '9b36b302ce3b83925e8c00707490426f9acb0660', class: "ir-mega-menu-row" }, h("a", { key: '22e62ac9a7ec77833e51ec6acf1e18c7c4d396ca', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '6a1e11928c4c3159ace84eab8f043a0fe2695675', class: "ir-mega-menu-row" }, h("a", { key: '071e2a9edc7c8af8e73801479c9c1f39cd73f5f1', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'dec7b5c11aebdb1d1522ccd70448d842189ea300', class: "ir-mega-menu-row" }, h("a", { key: '048d28fbfb150f3d254eefe15339ce2b6a0cb4c9', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '62bedc6e914f304c2f305702e9986ebd042b99a5', class: "ir-mega-menu-row" }, h("a", { key: '01dcff4bd228649e6ef2a041a3a6d40b35b88928', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '27eadea0b7c718eda6bca5a0ba6643407a307913', class: "ir-mega-menu-row" }, h("a", { key: 'c7e755ba09faa116c8702e15f05faf6d8d9cc1a6', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '555f6da21a30e19774ba5deae1d02f4ad3b3be8a', class: "ir-mega-menu-row" }, h("a", { key: '828fecd703ea8e7e98e6892af6a78bb32499cc40', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '0268aa655204de50f4828a2f4379f45d36f96975', class: "ir-mega-menu-row" }, h("a", { key: 'a92e6a924c68186607bd0bc1c957d87b1768d4ca', href: "billing.aspx" }, "Billing")))), h("li", { key: '10ad3d3589f6da6a62030fddd25e7e4dc38989ed' }, h("ul", { key: 'fd50527b1f5279f14b84bccd5c70b5ee594bef8b', class: "ir-mega-menu-column" }, h("li", { key: '3d1951256ebf37ad2114728d538a878ca3be3dbc', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '12f4414832185808efa9435f4a0baf731fbe447b', class: "ir-mega-menu-row" }, h("a", { key: '50669353f442ef658b325cc319e24451bd9cf127', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'e8ee40998bd1e095b4451b487d153b55c7a5dad1', class: "ir-mega-menu-row" }, h("a", { key: '6ea78c896a115e49f80d6d2651c394f01e6a4a0c', href: "poilist.aspx" }, "List")))), h("li", { key: '022124939ac9ab2ac95ad4df231001b1303e16c1' }, h("ul", { key: 'bdcdc5aa98b0641d712f4f18f09e4c50d01861d0', class: "ir-mega-menu-column" }, h("li", { key: '204c884c4207506c8c1678fa20f62f65bfc2cd35', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'ad8ded21611a3b6accf9d5588f58e952423165fd', class: "ir-mega-menu-row" }, h("a", { key: '6d7ea66efba8a544c809eea7cbcfa71471e451ec', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'c6690375772d36b601ce0adbc36acb832700eac3', class: "ir-mega-menu-row" }, h("a", { key: 'ee81dd141a3dd7644182e3cedf13b2a6b48b577a', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'db895815ee5f12cefcaff0f0ead15df4dce2f9b6', class: "nav-item" }, h("a", { key: 'a3cc4b9f7523ff22e24fdbdb643697620d683f8a', href: "#", class: "nav-link" }, "b")), h("li", { key: '908b82cd61c03376ec8fccbb5f54f8b4d7e96918', class: "nav-item" }, h("a", { key: '841f426b9c7b4f2f68d19f44b88f6c5a5c7043e8', href: "#", class: "nav-link" }, "c")), h("li", { key: '071692a40d773bbabe1c177a708b9c8c2c506c5b', class: "nav-item" }, h("a", { key: 'ea63150ca6cf3d767cf83d7d9a89f21a6f183b42', href: "#", class: "nav-link" }, "d")), h("li", { key: 'bd1ad2c035f871d9b40947366d51c66a08d08310', class: "nav-item" }, h("div", { key: 'a6d9cd78c7c648d7fd5afdf84ffaf0afd494d24b', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '336c787563bd5f0add08f729eb224643dfa1d0e8', notifications: this.notifications }))))), h("div", { key: '6cb65b16580af271796d24d7ca09da8b953772fe', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'c3dfd06b6f671f235714a5eeebea26b4a36ff773', class: "mobile-menu-header" }, h("div", { key: '91ec44bb535bd7b5159f7eb52d2f0db2d0d0ba8f', class: "hotel-name" }, "Hotel Name"), h("button", { key: '0fcef4859eb07c94da799b384e74b06375c4c1fd', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'd875d13c17d7ee43c1905a348b6e69fb7ad4b098', class: "mobile-search" }, h("ir-m-combobox", { key: '8343670c1c65f9de31d8abb9873a20e0cc75110a', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '15acbf64f64004a4f240b54538a85324e6b4d7a9', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'c18b54aacd4fd0784f8c04747cda7c1ae67df5ba', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'a03e7295757be2f2c9aa71bb52ccd32a88bbd405', pages: this.pages }))), h("section", { key: '9b7b84aaf1348f62bcdfa36d4d18892fe036e72b', class: "p-2" }, h("div", { key: '5384b6a58ddd0c027203efc3ef2ad556f669298e', class: "row g-3" }, h("div", { key: 'b0b9adad0f694a40feb17e55e4ada582f5c68603', class: "col-md-3" }, h("h5", { key: '433265667e7d7814e7d7eb9397329310db685882' }, "Static Options Example"), h("ir-m-combobox", { key: 'cfb7763676c4d4ec56e86da2cc52d76763b4ca01', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'e43a2fa4a3fcf2ed7d98225c4194f9beeef81187', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '0090ee773b7f14f3637168c13bbd38adc9137b2c', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'c2ca0466c5d9cd3f962c48a90367a96bb255d5ca', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'e72317b8ac40d176285446d66cca06fef42fc48e', class: "col-md-3" }, h("h5", { key: 'b9e0660f73ee5a8948ee2c8f2ac2beb2691b53e5' }, "External API - Countries"), h("ir-m-combobox", { key: 'ff092d4bfb81514ea5572706a84d45f115d24255', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '5201137645d30c72b9e4a45a4526822e76da784f', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '788dba632d6b6eff54eb72942fbe624f218ee100', class: "col-md-3" }, h("h5", { key: '82d83391882ef6cf73600c181523d067740e7d88' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'c7e521e7fa22975124eed0db479489fb8e2e639f', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'ca1b49d803af1901da77760968c085dd581cdcc5', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'b9ca9c06a41091da06c3bdd66c16761f8d0299d9', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '92bdf86d4a1ebda7b646cc6337242baf4eea81a5', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'e1170a4486d70d69dd2ede086a66f895daa23a63', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '3c39b71ff1fc52446044c5e919dc3e9c1370d776', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'dd55ced06624f2bad534e497135ff6e26b00476a', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'b4e3e9e92c21dbdff8146fcb21bae23ba89010de', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'fac343f88ada32d5b526636d7f42e0bb30bd9dfc', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '9f67907d26560088d293165a131e49e948a76d08', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'caf735b018bb006f4c971dc5522615cfbd8f39ca', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '0f6ebbe1b5ac5dd96906b992ceec2973d7a8905e', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'f2ebbcfebc2f0d8b9b4ebaf065bca8184ed3b02e', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'd398ca78ba634a875b0398f195be8aa2bcbdb8bb', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'de437903ba258f8f06f67edc4825973229f54337', class: "my-2" }), h("ir-select", { key: 'b9172f96385dd77009b84d2a3247d4fc439218a7', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '799e7caf5e59b2d22abcab0088472a0922296f56', class: "my-2" }), h("ir-select", { key: 'c21e0057865c12d2c47fdb9bf6f23e9635274542', data: [{ value: '1', text: '1' }] }), h("div", { key: '372edfa8e2ccc7567bd9a14f215c4b7e644905ad', class: "card p-1" }, [
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
