import { injectHTML, injectHTMLAndRunScript } from "../../../utils/utils";
export class GoogleConversion {
    constructor(conversionId) {
        this.conversionId = conversionId;
        // this.init();
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
        const script = `
    fbq('track', 'Search', {
      search_string: '${from_date} / ${to_date}'
    });
`;
        injectHTMLAndRunScript(script, 'search');
        // this.trackEvent('search', {
        //   from_date,
        //   to_date,
        // });
    }
    trackCheckout({ currency, value }) {
        const script = `
        fbq('track', 'InitiateCheckout', {
          value: ${value},
          currency: ${currency}
         });
        `;
        injectHTMLAndRunScript(script, 'checkout');
        // this.trackEvent('begin_checkout', {
        //   value,
        //   currency,
        // });
    }
    // private static isGtagAvailable(): boolean {
    //   return typeof window !== 'undefined' && typeof window.gtag === 'function';
    // }
    trackPurchase({ currency, roomnights, transaction_id, value }) {
        // this.trackEvent('purchase', {
        //   value,
        //   currency,
        //   roomnights,
        //   transaction_id,
        // });
        const script = `
      fbq('track', 'Purchase', {
        value: ${value},
        currency: ${currency},
        roomnights:${roomnights},
        transaction_id:${transaction_id}
      });
  `;
        injectHTMLAndRunScript(script, 'purchase');
    }
    /**
     * Sends an event to Google Analytics.
     *
     * @param eventName The name of the event.
     * @param eventParams Optional parameters to send with the event.
     */
    // private trackEvent(eventName: string, eventParams?: { [key: string]: any }): void {
    //   if (GoogleConversion.isGtagAvailable()) {
    //     window.gtag!('event', eventName, eventParams);
    //     console.log(`GA4 Event Tracked: ${eventName}`, eventParams || {});
    //   } else {
    //     console.warn('Google Analytics (gtag) is not available. Event not tracked:', eventName, eventParams || {});
    //   }
    // }
    trackConversion() { }
}
GoogleConversion.initialized = false;
//# sourceMappingURL=GoogleConversions.js.map
