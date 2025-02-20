// import { injectHTML } from '@/utils/utils';
// type ConversionType = 'google' | 'facebook';
// // conversions/IConversion.ts
// export interface IConversion {
//     init(): void;
//     trackSearch(params: { from_date: string; to_date: string }): void;
//     // you could add more generic track events e.g. trackPurchase, trackSignup, etc.
//   }
// export class ConversionsService implements IConversion {
//   private conversionType: ConversionType;
//   private conversionId: string;
//   public static initialized: boolean = false;
//   constructor(type: ConversionType, id: string) {
//     this.conversionType = type;
//     this.conversionId = id;
//     this.init();
//   }
//   private init() {
//     if (ConversionsService.initialized) {
//       return;
//     }
//     if (this.conversionType === 'facebook') {
//       this.initializeFacebookConversion();
//     } else {
//       this.initializeGoogleConversion();
//     }
//     ConversionsService.initialized = true;
//   }
//   private initializeGoogleConversion() {
//     const script = `
//       <script async src="https://www.googletagmanager.com/gtag/js?id=${this.conversionId}"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', ${this.conversionId});
// </script>
//         `;
//     injectHTML(script, 'head', 'first');
//   }
//   private initializeFacebookConversion() {
//     const script = `
//       <script>
//       !function(f,b,e,v,n,t,s)
//       {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//       n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//       if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//       n.queue=[];t=b.createElement(e);t.async=!0;
//       t.src=v;s=b.getElementsByTagName(e)[0];
//       s.parentNode.insertBefore(t,s)}(window,document,'script',
//       'https://connect.facebook.net/en_US/fbevents.js');
//       fbq('init', ${this.conversionId});
//       fbq('track', 'PageView');
//       </script>
//       <noscript>
//       <img height="1" width="1" src="https://www.facebook.com/tr?id=1234567890123456&ev=PageView&noscript=1"/>
//       </noscript>`;
//     injectHTML(script, 'head', 'first');
//   }
//   public emitSearch({ from_date, to_date }: { from_date: string; to_date: string }) {
//     let script = '';
//     if (this.conversionType === 'google') {
//       script = `gtag('event', 'search', {
//     search_term: 'Check availability',
//     start_date: ${from_date},
//     end_date: ${to_date}
// });`;
//     } else {
//       script = `fbq('track', 'Search', {
//     search_string: ${from_date} / ${to_date}
// });`;
//     }
//     injectHTML(script, 'body', 'first');
//   }
// }
//# sourceMappingURL=conversions.service.js.map
