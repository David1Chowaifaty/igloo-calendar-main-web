import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';
import { T as Token } from './Token-add81d36.js';
import { P as PropertyService } from './property.service-60a05284.js';
import { R as RoomService } from './room.service-1f08b13d.js';
import { l as locales } from './locales.store-daef23cc.js';
import { h as hooks } from './moment-ab846cee.js';
import './index-5ba472df.js';
import './index-40c31d5b.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './utils-7eaed9ad.js';

const irSalesByChannelCss = ".sc-ir-sales-by-channel-h{display:block}";

const IrSalesByChannel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    language = '';
    ticket = '';
    propertyid;
    p;
    mode;
    isLoading = null;
    isPageLoading = true;
    salesData;
    channelSalesFilters;
    allowedProperties = [];
    propertyID;
    token = new Token();
    roomService = new RoomService();
    propertyService = new PropertyService();
    baseFilters = {
        FROM_DATE: hooks().add(-7, 'days').format('YYYY-MM-DD'),
        TO_DATE: hooks().format('YYYY-MM-DD'),
        BOOK_CASE: '001',
        WINDOW: 7,
        include_previous_year: false,
        is_export_to_excel: false,
    };
    componentWillLoad() {
        this.channelSalesFilters = this.baseFilters;
        if (this.ticket) {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            this.isPageLoading = true;
            if (!this.mode) {
                throw new Error("Missing required 'mode'. Please set it to either 'property' or 'mpo'.");
            }
            if (!this.propertyid && this.mode === 'property' && !this.p) {
                throw new Error('Missing Property ID or aname');
            }
            if (this.mode === 'property') {
                const property = await this.propertyService.getExposedProperty({
                    id: Number(this.propertyid ?? 0),
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                this.propertyID = property.My_Result.id;
            }
            const requests = [, this.roomService.fetchLanguage(this.language)];
            if (this.mode === 'mpo') {
                requests.unshift(this.propertyService.getExposedAllowedProperties());
                const [properties] = await Promise.all(requests);
                this.allowedProperties = [...properties];
            }
            else {
                await Promise.all(requests);
            }
            this.baseFilters = { ...this.baseFilters, LIST_AC_ID: this.allowedProperties?.map(p => p.id) };
            this.channelSalesFilters = { ...this.baseFilters };
            await this.getChannelSales();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getChannelSales(isExportToExcel = false) {
        try {
            const { include_previous_year, LIST_AC_ID, ...filterParams } = this.channelSalesFilters;
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const currentSales = await this.propertyService.getChannelSales({
                is_export_to_excel: isExportToExcel,
                ...filterParams,
                AC_ID: this.propertyID ? this.propertyID.toString() : undefined,
                ...filterParams,
                LIST_AC_ID: this.propertyID ? null : LIST_AC_ID,
            });
            const shouldFetchPreviousYear = !isExportToExcel && include_previous_year;
            let enrichedSales = [];
            if (shouldFetchPreviousYear) {
                const previousYearSales = await this.propertyService.getChannelSales({
                    AC_ID: this.propertyID ? this.propertyID.toString() : undefined,
                    ...filterParams,
                    LIST_AC_ID: this.propertyID ? null : LIST_AC_ID,
                    FROM_DATE: hooks(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                    TO_DATE: hooks(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                });
                enrichedSales = currentSales.map(current => {
                    const previous = previousYearSales.find(prev => prev.SOURCE.toLowerCase() === current.SOURCE.toLowerCase());
                    return {
                        ...current,
                        last_year: previous ? previous : null,
                    };
                });
            }
            else {
                enrichedSales = currentSales.map(record => ({
                    ...record,
                    last_year: null,
                }));
            }
            /**
             * Groups sales records by SOURCE and currency.id, summing numeric fields
             * and recalculating PCT based on the total REVENUE.
             */
            const groupSalesRecordsBySource = (records) => {
                if (!records || records.length === 0)
                    return records;
                // Helper to extract currency ID from various possible formats
                const getCurrencyId = (r) => {
                    return r?.currency ?? null;
                };
                // Create unique key for grouping
                const createKey = (r) => {
                    const source = r.SOURCE.toString().toLowerCase().trim();
                    const currencyId = getCurrencyId(r);
                    return `${source}__${currencyId ?? 'null'}`;
                };
                // Sum two values safely
                const sumValues = (a, b) => {
                    return (a ?? 0) + (b ?? 0);
                };
                // Merge numeric fields from last_year objects
                const mergeLastYear = (base, incoming) => {
                    if (!incoming)
                        return base;
                    if (!base)
                        return { ...incoming };
                    return {
                        NIGHTS: sumValues(base.NIGHTS, incoming.NIGHTS),
                        PCT: sumValues(base.PCT, incoming.PCT), // Will recalculate later
                        REVENUE: sumValues(base.REVENUE, incoming.REVENUE),
                        SOURCE: base.SOURCE,
                        PROPERTY_ID: base.PROPERTY_ID,
                        PROPERTY_NAME: base.PROPERTY_NAME,
                        currency: base.currency,
                    };
                };
                // Group records by key
                const grouped = new Map();
                for (const record of records) {
                    const key = createKey(record);
                    const existing = grouped.get(key);
                    if (!existing) {
                        // First record for this key - clone it
                        grouped.set(key, { ...record });
                    }
                    else {
                        // Merge with existing record
                        const merged = {
                            ...existing,
                            NIGHTS: sumValues(existing.NIGHTS, record.NIGHTS),
                            PCT: 0, // Will recalculate after summing all REVENUE
                            REVENUE: sumValues(existing.REVENUE, record.REVENUE),
                            last_year: mergeLastYear(existing.last_year, record.last_year),
                        };
                        grouped.set(key, merged);
                    }
                }
                // Convert to array
                const result = Array.from(grouped.values());
                // Recalculate PCT based on total REVENUE
                const totalRevenue = result.reduce((sum, r) => sum + (r.REVENUE ?? 0), 0);
                if (totalRevenue > 0) {
                    for (const record of result) {
                        record.PCT = (record.REVENUE / totalRevenue) * 100;
                        // Also recalculate last_year PCT if it exists
                        if (record.last_year) {
                            const lastYearTotal = result.reduce((sum, r) => sum + (r.last_year?.REVENUE ?? 0), 0);
                            if (lastYearTotal > 0) {
                                record.last_year.PCT = (record.last_year.REVENUE / lastYearTotal) * 100;
                            }
                        }
                    }
                }
                return result;
            };
            this.salesData = [...groupSalesRecordsBySource(enrichedSales)];
        }
        catch (error) {
            console.error('Failed to fetch sales data:', error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Sales by Channel"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales.entries.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getChannelSales(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, h("ir-sales-by-channel-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.channelSalesFilters = { ...e.detail };
                this.getChannelSales();
            }, allowedProperties: this.allowedProperties, baseFilters: this.baseFilters }), h("ir-sales-by-channel-table", { mode: this.mode, allowedProperties: this.allowedProperties, class: "card mb-0", records: this.salesData })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrSalesByChannel.style = irSalesByChannelCss;

export { IrSalesByChannel as ir_sales_by_channel };

//# sourceMappingURL=ir-sales-by-channel.entry.js.map