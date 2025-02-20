import { injectHTML, injectHTMLAndRunScript } from "../../../utils/utils";
export class FacebookConversion {
    constructor(conversionId) {
        this.conversionId = conversionId;
    }
    init() {
        if (FacebookConversion.initialized)
            return;
        const script = `
      <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${this.conversionId}');
      fbq('track', 'PageView');
      </script>
      <noscript>
      <img height="1" width="1" src="https://www.facebook.com/tr?id=${this.conversionId}&ev=PageView&noscript=1" />
      </noscript>
      `;
        injectHTML(script, 'head', 'first');
        FacebookConversion.initialized = true;
    }
    trackCheckout({ currency, value }) {
        const script = `
        fbq('track', 'InitiateCheckout', {
          value: ${value},
          currency: ${currency}
         });
        `;
        injectHTMLAndRunScript(script, 'checkout');
    }
    trackSearch({ from_date, to_date }) {
        const script = `
        fbq('track', 'Search', {
          search_string: '${from_date} / ${to_date}'
        });
    `;
        injectHTMLAndRunScript(script, 'search');
    }
    trackPurchase({ currency, value }) {
        const script = `
      fbq('track', 'Purchase', {
        value: ${value},
        currency: ${currency}
      });
  `;
        injectHTMLAndRunScript(script, 'purchase');
    }
}
FacebookConversion.initialized = false;
//# sourceMappingURL=FacebookConversions.js.map
