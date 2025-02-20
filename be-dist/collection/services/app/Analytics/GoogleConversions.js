import { injectHTML } from "../../../utils/utils";
export class GoogleConversion {
    constructor(conversionId) {
        this.conversionId = conversionId;
        this.init();
    }
    init() {
        if (GoogleConversion.initialized)
            return;
        const script = `
      <script async src="https://www.googletagmanager.com/gtag/js?id=${this.conversionId}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', '${this.conversionId}');
      </script>
    `;
        injectHTML(script, 'head', 'first');
        GoogleConversion.initialized = true;
    }
    trackSearch({ from_date, to_date }) {
        this.trackEvent('search', {
            from_date,
            to_date,
        });
    }
    trackCheckout({ currency, value }) {
        this.trackEvent('begin_checkout', {
            value,
            currency,
        });
    }
    static isGtagAvailable() {
        return typeof window !== 'undefined' && typeof window.gtag === 'function';
    }
    trackPurchase({ currency, roomnights, transaction_id, value }) {
        this.trackEvent('purchase', {
            value,
            currency,
            roomnights,
            transaction_id,
        });
    }
    /**
     * Sends an event to Google Analytics.
     *
     * @param eventName The name of the event.
     * @param eventParams Optional parameters to send with the event.
     */
    trackEvent(eventName, eventParams) {
        if (GoogleConversion.isGtagAvailable()) {
            window.gtag('event', eventName, eventParams);
            console.log(`GA4 Event Tracked: ${eventName}`, eventParams || {});
        }
        else {
            console.warn('Google Analytics (gtag) is not available. Event not tracked:', eventName, eventParams || {});
        }
    }
    trackConversion() { }
}
GoogleConversion.initialized = false;
//# sourceMappingURL=GoogleConversions.js.map
