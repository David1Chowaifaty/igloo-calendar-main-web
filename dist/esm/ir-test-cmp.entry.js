import { r as registerInstance, h, H as Host } from './index-60982d00.js';
import { Q as sleep } from './utils-3885814a.js';
import { c as colorVariants } from './icons-5bea2cc2.js';
import './moment-ab846cee.js';
import './index-6ecc32cd.js';
import './calendar-data-462ba979.js';
import './index-c4cf83be.js';
import './locales.store-629477c2.js';
import './axios-aa1335b8.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'b671b343990166a8641b155c8a66d99fc3946be7' }, h("nav", { key: 'b0345ad942a7c3f8910ef32f94ae17564573c702', class: "modern-navbar" }, h("span", { key: 'd9e2e1c6af1881ac039aab0a3366d565fb216f86', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'ba7539e7e8e116651e39da8a707e6d015c0ec710', class: "navbar-container" }, h("div", { key: 'd73a57aaf3455cd918ac496de983522528d66b0c', class: "navbar-left" }, h("button", { key: '7352bda56f0b48c90fccc3de1702b35b617b9def', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'a24493ae9e9046f430ea102a8fbcd7ef39faa81a', class: "hamburger-icon" }, h("span", { key: '80ab13fd576ea09fee3017d1d442aaeafa685874' }), h("span", { key: '804ca5fea1c3d7efc7d7d0329caab67caf3a287c' }), h("span", { key: '52a7dbe4b8d3eadefdf9a7e030d51df9ae645a7e' }))), h("div", { key: 'a7b06a98941cb28973e72b3691c7bdeda88ab05a', class: "navbar-brand" }, "Logo"), h("div", { key: '9196238aad163272b4728f9ed330d8a8261ca92e', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '416b9504ab3626092652163723c6e47fb6cbab73', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '625ab56e8251bf9e84fc5e7d9ef881706ce28f81', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '9a62b48d677cbd693bf4cbf5ba9a7b121b20e8dc', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '78bfd05a4a91e47e40e66be35e0c34acfb3b8c67', notifications: this.notifications }))), h("div", { key: '91a91700ccbf0b0e49b8ebfe9f86942f72e5cfc0', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'e5e112668312a69cda429d572b1fb6052da58c1f', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'a5a10d3d0a2bdbf3af935a80591bc27e26b3f404', class: "navbar-right" }, h("ul", { key: 'd7ce4edeab0eaab033e1450773ec7812f7eea2ba', class: "nav-items d-none d-md-flex" }, h("li", { key: '37c772b8a327d15e9fe1db221c8cad99e9ed50df', class: "nav-item dropdown" }, h("a", { key: '53a450acfdde277d191919ba477fb01bb6b81352', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'e252de59d4c2eac4308665e0e6ee03ea254f7eb6', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'ce0f3fb92d465ee5c0398100d23768cb3f56a229' }, h("ul", { key: '856e96961ab6e63ab7a519b5c3d9e11d99de1749', class: "ir-mega-menu-column" }, h("li", { key: '44a8f32ee20f1db1455c0640dc960e746f33cb1a', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '2fedab33d3700096550e515eadfdb5a47cc7e6b6', class: "ir-mega-menu-row" }, h("a", { key: '8eed6de13d1b21af85fe411bd4b040e6b4bfafc1', href: "userinline.aspx" }, "Users List")), h("li", { key: '059101cff13c954f473c6a8eb72cc37b1613b4a0', class: "ir-mega-menu-row" }, h("a", { key: '37d252cb94740e8045e40dd915c882adf268db89', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'e4ed641f5426b6453830a803623492f6dbfe4fe7', class: "ir-mega-menu-row" }, h("a", { key: '2da81922f567cc847d613f1b99256f41ecc0a25f', href: "countryinline.aspx" }, "Countries")), h("li", { key: '325624cf3299ac92e4f0025975b7682fd0585ed8', class: "ir-mega-menu-row" }, h("a", { key: '835eeee2098922012c3cc24303abc9486f59f472', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'cb08cd1946df343f51ff9eb15b268e2d0be41dee', class: "ir-mega-menu-row" }, h("a", { key: '1c27950daa47a866c09b58b3e773871646164d5b', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '70689544c35e3d2689febe36601b73128886f406', class: "ir-mega-menu-row" }, h("a", { key: 'bc3feeda4f7238e41617c3a35757a4f9f61b8d24', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'e487124a3b10737da54234db6b63939c1daf12c1', class: "ir-mega-menu-row" }, h("a", { key: '8022cbfcab1675a6304fdaeda971c535eb72b421', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '3c11d8c2b09b501372a21c7b002636a211602a9e', class: "ir-mega-menu-row" }, h("a", { key: '661af5e854e3db11b6ff5b4def440a813ff9066f', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'f49f19d24955528845a7ad17e585641632132fb0', class: "ir-mega-menu-row" }, h("a", { key: 'e36a6fd35ca0a488d5467748cdd087e15caa34c0', href: "foodinline.aspx" }, "Food")), h("li", { key: 'f940ac40c9c2ac3d7086ea4426a860190ab562e5', class: "ir-mega-menu-row" }, h("a", { key: '57cce751de8992356d37e80b4f2da1f6edbe61df', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '663b99dfe944702edb7affa95153c68126a6196a', class: "ir-mega-menu-row" }, h("a", { key: '9597a3241ed0afb04606763332cab57a050f8af6', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'a3c30dbec62c3e47a7a5f7decfd169c84498bba6', class: "ir-mega-menu-row" }, h("a", { key: '44696fcc93f1144acd80f8918f61147b29f94d1a', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'bc640fa3daefe5e350d25c6e869d19ff2a472511', class: "ir-mega-menu-row" }, h("a", { key: '507cf615569e615812e0e24f38da0ffc74d92924', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '794b728a6be38c06610eb637770de5c9020791bd' }, h("ul", { key: '74692fd99f7f45f0b0670d581924d1e8ea473468', class: "ir-mega-menu-column" }, h("li", { key: 'a9ae5fec553c95935bdb6b15034cc1875dad8f44', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '6faa27dc265f760fb1516ec366782aa90190b317', class: "ir-mega-menu-row" }, h("a", { key: '65327ea28f42ca3bae72c05c58d66831ca3a48d4', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'a0e6a673cb94e4c1ad3767325980225f6af07cba', class: "ir-mega-menu-row" }, h("a", { key: 'd78da11326d274eec657b7187924c708685fec23', href: "aclist.aspx" }, "Properties")), h("li", { key: '55efa24c6f0594d6aa486001eba53ae8ab563ec3', class: "ir-mega-menu-row" }, h("a", { key: '7f979660a2bd8eac37d4d9ea7d1bb4be7eaadb0c', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '54c47d87a560ae348ed8f9f38b8de46f1ece1b1c', class: "ir-mega-menu-row" }, h("a", { key: '472e32001dd7342593ef32981fc8b612ac74b1c7', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '2b0c73dff62ed883161ec7fbf7741d90e400d640', class: "ir-mega-menu-row" }, h("a", { key: '473da86808375b105b7bf95ea20949f15fd5b4b3', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '1d9f7b0ca5f062bcc62459d09732d0b47cdf4abf', class: "ir-mega-menu-row" }, h("a", { key: 'cbb43a0ffcfddc49adb8f3bc7771dba2a4fef1cb', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'f440b872ab3219622deba7ef24b483caeaad552d', class: "ir-mega-menu-row" }, h("a", { key: '8bce0c99dac44a3d96b61b88677c11b383117d34', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'a74ee090a8b1e208a2fd524df6caeefeb4901186', class: "ir-mega-menu-row" }, h("a", { key: '796503440d049ceeb3d65ccf07220087aa50d8d8', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'bbaaa2386a3eff09992d809b726f1978dc253851', class: "ir-mega-menu-row" }, h("a", { key: 'f115828b18d8a643827f6cf097f85f683c7e2614', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'ce23e7feb798ccde6fce242791dfb7c872b81caa', class: "ir-mega-menu-row" }, h("a", { key: 'cab8b14ef9e5aaa5d44deeea291d45810d67c77b', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'e1e5b41fa1bf906f0087dfbf796efb698104de37', class: "ir-mega-menu-row" }, h("a", { key: '328f010101dae3a2c60eb202a53a40ca2950ea74', href: "billing.aspx" }, "Billing")))), h("li", { key: 'adbbd21b76269a72138a8298639356c0c9720a20' }, h("ul", { key: '00d9012cd5b697627168174acf667e4a23bea096', class: "ir-mega-menu-column" }, h("li", { key: '3389b3aac0e83abdef20b946157304279cd57832', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '32021dd5df02fc982e94917f4b297ff51c6c1293', class: "ir-mega-menu-row" }, h("a", { key: '0a320c5edebcebeb2d5728e4b5b850b0cab361aa', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '71f25a61a66c8e833044e9e0996b919dc9ba391e', class: "ir-mega-menu-row" }, h("a", { key: 'fe24d13f71ea8487730b91bb64f692db220c30fa', href: "poilist.aspx" }, "List")))), h("li", { key: '93d052b1489592e8aa6ef821baefbcfaa4d72fda' }, h("ul", { key: '38f6de68d6c675d47f7ea2cb926af42615e7cfca', class: "ir-mega-menu-column" }, h("li", { key: 'ec77363b5b162bfdfe22258b04cca20413a38647', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'fc24be74eda4c44f331c5012e850cd84644dbce5', class: "ir-mega-menu-row" }, h("a", { key: 'a12525c13a60309d4ad01e8ef902b885efdc1054', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'f56b5082bb6f257ee0017853219155b8a4be795f', class: "ir-mega-menu-row" }, h("a", { key: 'e404baf36ad767c68b435eb8b337e8f4506c4188', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '5165efce59b45e6a33c925c04827edfd3d148388', class: "nav-item" }, h("a", { key: 'f2499fad795a3bccb529a2f38f15162d41e3a150', href: "#", class: "nav-link" }, "b")), h("li", { key: 'c2c3e84f8b94cf73586dcc114779cad954da5c37', class: "nav-item" }, h("a", { key: '7be22ca7ad65dd437fb6191bb26973e5b7f68d82', href: "#", class: "nav-link" }, "c")), h("li", { key: 'ae62e7ebddc32045fd19ee824163bbe7fa1a5fcf', class: "nav-item" }, h("a", { key: '237927345a1b8927632635ca72d87864a6b48520', href: "#", class: "nav-link" }, "d")), h("li", { key: '5354a53a53af3bb8a8e3917c22a30aef23b4af4b', class: "nav-item" }, h("div", { key: 'aaa25e2dfaa48a7852f884570c20dc737938c76b', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '0531f0a888f58aef8e50a52dfc7fcdb834077ca6', notifications: this.notifications }))))), h("div", { key: '246194cea646982e984805fd5c365fcedcc7af0e', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'be09a9aac0c7c0dd2ed2ad00b04db024f39e810e', class: "mobile-menu-header" }, h("div", { key: '7212a6afa90f9945bdb4ae1e4c4305da99293d26', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'd8d0777c9b6b3da1556e5c35e4cb5643ba44ebb2', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '61a85d39a23df202dc535d6c4cb3bdca31bd1789', class: "mobile-search" }, h("ir-m-combobox", { key: 'e51144a67ec83c774d3a2c84815e2be8a5c48991', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '3bead1469d207e1ebdc3deaf21c4c3a73eedab4f', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '4f9bede74c65ad8464527a565b64164cef6c0239', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '97274d2348b097fa35b54fc38c69816923eff5fb', pages: this.pages }))), h("section", { key: 'b2d08b31970630a9382604df971b11115b41756e', class: "p-2" }, h("div", { key: '3ef0396f3b6f67d428bcc1f3f233b3f9a752e517', class: "row g-3" }, h("div", { key: '7034fa816b9f19ede7a3a6b5997a5f617cba27ad', class: "col-md-3" }, h("h5", { key: '192054e2a3b29902abd0e651d4d6f3fdb988614f' }, "Static Options Example"), h("ir-m-combobox", { key: '37cc20bfc2f7822d7832615d4b5452df30e4af06', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'bb2dc240729bc26cc8822cbf79e69da44fa89379', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '89b540a7e0c7cdb8ad9de5a58c11616777371af8', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '56afd8a64f3ca6a650d7c514050403e7ffaf88bb', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '143e7b8bf984ecf68e5aabb790c56f8142ebe60e', class: "col-md-3" }, h("h5", { key: '0c6905d3c60b82f0a9cacad747033948de3f2b18' }, "External API - Countries"), h("ir-m-combobox", { key: '56cfdc04b9a289b35497c8a7d0877dde6a7bbf1e', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '1f1beee5e072f2eec03da0f25e29b755e26229e5', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '7ef06fa50e3e70bc0695487188c3436f3d5a9fb8', class: "col-md-3" }, h("h5", { key: 'b9e3d69efff96de5e18e90c4283eda084e10b69c' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '8b38c30755b558c334b97986bdb1923b754a57cf', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '66960c262cecfd042b956352eb6db53d13ba446c', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '4e86024610b86e705e39897269c49d95a1e4c5e2', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'ea7132ead66f82f32e59523751cffd27a0dc1af2', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '1f2e239b2441fe3434b950d66802f209d2de1a3d', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'b61e653254c333cb763b4e5da33fe0390a6e4b41', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'dc551f57af04eb1a02f7789014212ea982427a6d', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '00d189f350cd0300c2397f4096d09974ed46430a', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'bcb5d01f74a663fb1ec2453e8c4e7c0313bbf3c4', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '05bf6230016a3635fc971915de568bb5222054d3', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '2da16c6f506629a123ce81eae26ece7f4c087f6a', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '395ae5908a2b1bedc1bf520ab2b6949c90abc5f2', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'ec1e321ecb5bae0f72ca63c253f67b71a2fbb9da', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'aa7363421c639fceae8bf67e813560195e2634f5', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '3378a3cdbae40b2a9fdf71086b102e9349221998', class: "my-2" }), h("ir-select", { key: 'b304aebfefdcbf2be3580063ec9b9b2b3821eaa4', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '48cb03631fc9023920a44e102a4685a2daf097c8', class: "my-2" }), h("ir-select", { key: 'd4abf796fce5a84d0869316214043f22a4b7b137', data: [{ value: '1', text: '1' }] }), h("div", { key: '027de9515cd56d06bc7f92e33259ef61fd245e99', class: "card p-1" }, [
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
};
IrTestCmp.style = IrTestCmpStyle0;

export { IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ir-test-cmp.entry.js.map