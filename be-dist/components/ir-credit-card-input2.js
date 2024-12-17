import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as detectCardType, l as localizedWords } from './utils.js';
import { z } from './index4.js';
import { I as IMask } from './index3.js';

// const cardNumberPatterns = {
//   VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
//   Mastercard: /^5[1-5][0-9]{14}$/,
//   AMEX: /^3[47][0-9]{13}$/,
// };
// const cvcPatterns = {
//   VISA: /^[0-9]{3}$/,
//   Mastercard: /^[0-9]{3}$/,
//   AMEX: /^[0-9]{4}$/,
// };
// const validateExpiryDate = (expiry: string) => {
//   const [month, year] = expiry.split('/').map(Number);
//   if (!month || !year || month < 1 || month > 12) {
//     return false;
//   }
//   const currentYear = new Date().getFullYear() % 100;
//   const currentMonth = new Date().getMonth() + 1;
//   if (year < currentYear || (year === currentYear && month < currentMonth)) {
//     return false;
//   }
//   return true;
// };
function validateCreditCardNumber(number) {
    // Remove all non-digit characters
    number = number.replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;
    // Traverse the number from right to left
    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number.charAt(i), 10);
        if (shouldDouble) {
            // Double the digit
            digit *= 2;
            // If the result is a two-digit number, add the digits together
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    // If the sum is divisible by 10, the number is valid
    return sum % 10 === 0;
}
const ZCreditCardSchemaWithCvc = z.object({
    cardNumber: z.string().refine(arg => validateCreditCardNumber(arg), {
        message: 'Invalid credit card number',
    }),
    cvc: z.string().regex(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),
    cardHolderName: z.string().min(1, 'Holder name is required'),
    expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry date must be in MM/YY format'),
});
z.object({
    cardNumber: z.string().regex(/^\d{15,16}$/, 'Card number must be 15 or 16 digits'),
    cardHolderName: z.string().min(1, 'Holder name is required'),
    expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry date must be in MM/YY format'),
});
// export const ZCreditCardSchema = z
//   .object({
//     cardNumber: z.string().refine(
//       val => {
//         return cardNumberPatterns.VISA.test(val) || cardNumberPatterns.Mastercard.test(val) || cardNumberPatterns.AMEX.test(val);
//       },
//       {
//         message: 'Invalid card number',
//       },
//     ),
//     cvc: z.string().min(3),
//     expiryDate: z.string().refine(validateExpiryDate, {
//       message: 'Invalid expiry date',
//     }),
//     cardHolderName: z.string().min(1, {
//       message: 'Cardholder name cannot be empty',
//     }),
//   })
//   .superRefine((data, ctx) => {
//     const cardType = Object.keys(cardNumberPatterns).find(type => cardNumberPatterns[type as keyof typeof cardNumberPatterns].test(data.cardNumber));
//     if (cardType && !cvcPatterns[cardType as keyof typeof cvcPatterns].test(data.cvc)) {
//       ctx.addIssue({
//         code: 'custom',
//         path: ['cvc'],
//         message: "'Invalid CVC",
//       });
//     }
//   });
const ICardProcessingWithoutCVC = z.object({
    code: z.literal('004'),
    cardNumber: z.string(),
    cardHolderName: z.string(),
    expiry_month: z.string(),
    expiry_year: z.string(),
});
const ICardProcessingWithCVC = z.object({
    code: z.literal('001'),
    cardNumber: z.string(),
    cardHolderName: z.string(),
    expiry_month: z.string(),
    expiry_year: z.string(),
    cvc: z.string(),
});
z.union([ICardProcessingWithoutCVC, ICardProcessingWithCVC]);

const irCreditCardInputCss = "*.sc-ir-credit-card-input,.sc-ir-credit-card-input:after,.sc-ir-credit-card-input:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-credit-card-input:after,.sc-ir-credit-card-input:before{--tw-content:\"\"}.sc-ir-credit-card-input-h,html.sc-ir-credit-card-input{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-credit-card-input{line-height:inherit;margin:0}hr.sc-ir-credit-card-input{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-credit-card-input:where([title]){text-decoration:underline dotted}h1.sc-ir-credit-card-input,h2.sc-ir-credit-card-input,h3.sc-ir-credit-card-input,h4.sc-ir-credit-card-input,h5.sc-ir-credit-card-input,h6.sc-ir-credit-card-input{font-size:inherit;font-weight:inherit}a.sc-ir-credit-card-input{color:inherit;text-decoration:inherit}b.sc-ir-credit-card-input,strong.sc-ir-credit-card-input{font-weight:bolder}code.sc-ir-credit-card-input,kbd.sc-ir-credit-card-input,pre.sc-ir-credit-card-input,samp.sc-ir-credit-card-input{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-credit-card-input{font-size:80%}sub.sc-ir-credit-card-input,sup.sc-ir-credit-card-input{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-credit-card-input{bottom:-.25em}sup.sc-ir-credit-card-input{top:-.5em}table.sc-ir-credit-card-input{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-credit-card-input,input.sc-ir-credit-card-input,optgroup.sc-ir-credit-card-input,select.sc-ir-credit-card-input,textarea.sc-ir-credit-card-input{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-credit-card-input,select.sc-ir-credit-card-input{text-transform:none}button.sc-ir-credit-card-input,input.sc-ir-credit-card-input:where([type=button]),input.sc-ir-credit-card-input:where([type=reset]),input.sc-ir-credit-card-input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-credit-card-input:-moz-focusring{outline:auto}.sc-ir-credit-card-input:-moz-ui-invalid{box-shadow:none}progress.sc-ir-credit-card-input{vertical-align:baseline}.sc-ir-credit-card-input::-webkit-inner-spin-button,.sc-ir-credit-card-input::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-credit-card-input{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-credit-card-input::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-credit-card-input::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-credit-card-input{display:list-item}blockquote.sc-ir-credit-card-input,dd.sc-ir-credit-card-input,dl.sc-ir-credit-card-input,fieldset.sc-ir-credit-card-input,figure.sc-ir-credit-card-input,h1.sc-ir-credit-card-input,h2.sc-ir-credit-card-input,h3.sc-ir-credit-card-input,h4.sc-ir-credit-card-input,h5.sc-ir-credit-card-input,h6.sc-ir-credit-card-input,hr.sc-ir-credit-card-input,p.sc-ir-credit-card-input,pre.sc-ir-credit-card-input{margin:0}fieldset.sc-ir-credit-card-input,legend.sc-ir-credit-card-input{padding:0}menu.sc-ir-credit-card-input,ol.sc-ir-credit-card-input,ul.sc-ir-credit-card-input{list-style:none;margin:0;padding:0}dialog.sc-ir-credit-card-input{padding:0}textarea.sc-ir-credit-card-input{resize:vertical}input.sc-ir-credit-card-input::placeholder,textarea.sc-ir-credit-card-input::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-credit-card-input,button.sc-ir-credit-card-input{cursor:pointer}.sc-ir-credit-card-input:disabled{cursor:default}audio.sc-ir-credit-card-input,canvas.sc-ir-credit-card-input,embed.sc-ir-credit-card-input,iframe.sc-ir-credit-card-input,img.sc-ir-credit-card-input,object.sc-ir-credit-card-input,svg.sc-ir-credit-card-input,video.sc-ir-credit-card-input{display:block;vertical-align:middle}img.sc-ir-credit-card-input,video.sc-ir-credit-card-input{height:auto;max-width:100%}[hidden].sc-ir-credit-card-input{display:none}.sc-ir-credit-card-input::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.absolute.sc-ir-credit-card-input{position:absolute}.relative.sc-ir-credit-card-input{position:relative}.block.sc-ir-credit-card-input{display:block}.flex.sc-ir-credit-card-input{display:flex}.transform.sc-ir-credit-card-input{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border.sc-ir-credit-card-input{border-width:1px}.outline.sc-ir-credit-card-input{outline-style:solid}.transition.sc-ir-credit-card-input{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.sc-ir-credit-card-input-h{display:block}.card-container.sc-ir-credit-card-input{align-items:center;background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:8px;display:flex;position:relative;transition:all .3s ease-in-out;width:100%}.card-container.error.sc-ir-credit-card-input,[data-state=error].sc-ir-credit-card-input-h .card-container.sc-ir-credit-card-input{border-color:var(--error-500,#f04438);border-width:2px}.card-container.error.sc-ir-credit-card-input .card-number.sc-ir-credit-card-input,[data-state=error].sc-ir-credit-card-input-h .card-container.sc-ir-credit-card-input .card-number.sc-ir-credit-card-input{color:var(--error-500,#f04438)}.card-container.sc-ir-credit-card-input input.sc-ir-credit-card-input{border:0;border-radius:8px;font-size:16px;outline:none;padding:.625rem .875rem;width:100%}.card-container.sc-ir-credit-card-input:focus-within{border-color:#000}.card-container.sc-ir-credit-card-input:focus-within .card-number.sc-ir-credit-card-input{color:#000}.card-number.sc-ir-credit-card-input{background:#fff;color:var(--gray-500,#667085);font-size:.75rem;line-height:1rem;padding:0;padding-inline:.3rem;position:absolute;text-align:center;top:-.6rem;z-index:1}.card-number.sc-ir-credit-card-input:dir(rtl){right:.575rem}.card-number.sc-ir-credit-card-input:dir(ltr){left:.575rem}.input-container.sc-ir-credit-card-input{align-items:center;background:#fff;border-radius:var(--radius,8px);display:flex;position:relative;width:100%}.icon-container.sc-ir-credit-card-input{pointer-events:none;position:absolute;right:.875rem;top:50%;transform:translateY(-50%);z-index:1}.static.sc-ir-credit-card-input{position:static}.sticky.sc-ir-credit-card-input{position:sticky}.top-0.sc-ir-credit-card-input{top:0}.z-20.sc-ir-credit-card-input{z-index:20}.m-0.sc-ir-credit-card-input{margin:0}.mx-auto.sc-ir-credit-card-input{margin-left:auto;margin-right:auto}.w-full.sc-ir-credit-card-input{width:100%}.max-w-6xl.sc-ir-credit-card-input{max-width:72rem}.flex-1.sc-ir-credit-card-input{flex:1 1 0%}.flex-col.sc-ir-credit-card-input{flex-direction:column}.space-y-5.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-credit-card-input{padding:0}.px-4.sc-ir-credit-card-input{padding-left:1rem;padding-right:1rem}.shadow.sc-ir-credit-card-input{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6.sc-ir-credit-card-input{padding-left:1.5rem;padding-right:1.5rem}}.mb-2\\.5.sc-ir-credit-card-input{margin-bottom:.625rem}.h-20.sc-ir-credit-card-input{height:5rem}.h-24.sc-ir-credit-card-input{height:6rem}.h-3.sc-ir-credit-card-input{height:.75rem}.h-4.sc-ir-credit-card-input{height:1rem}.w-60.sc-ir-credit-card-input{width:15rem}.items-center.sc-ir-credit-card-input{align-items:center}.justify-between.sc-ir-credit-card-input{justify-content:space-between}.space-y-1\\.5.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.divide-y.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-md.sc-ir-credit-card-input{border-radius:.375rem}.py-1.sc-ir-credit-card-input{padding-bottom:.25rem;padding-top:.25rem}.py-2.sc-ir-credit-card-input{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5.sc-ir-credit-card-input{padding-bottom:.625rem;padding-top:.625rem}.py-3.sc-ir-credit-card-input{padding-bottom:.75rem;padding-top:.75rem}.text-lg.sc-ir-credit-card-input{font-size:1.125rem;line-height:1.75rem}.text-xs.sc-ir-credit-card-input{font-size:.75rem;line-height:1rem}.font-medium.sc-ir-credit-card-input{font-weight:500}.text-gray-500.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.h-full.sc-ir-credit-card-input{height:100%}.grid.sc-ir-credit-card-input{display:grid}.hidden.sc-ir-credit-card-input{display:none}.aspect-\\[16\\/9\\].sc-ir-credit-card-input{aspect-ratio:16/9}.h-28.sc-ir-credit-card-input{height:7rem}.h-44.sc-ir-credit-card-input{height:11rem}.h-6.sc-ir-credit-card-input{height:1.5rem}.h-60.sc-ir-credit-card-input{height:15rem}.h-8.sc-ir-credit-card-input{height:2rem}.w-1\\/2.sc-ir-credit-card-input{width:50%}.w-24.sc-ir-credit-card-input{width:6rem}.w-3\\/4.sc-ir-credit-card-input{width:75%}.w-3\\/5.sc-ir-credit-card-input{width:60%}.w-40.sc-ir-credit-card-input{width:10rem}.w-48.sc-ir-credit-card-input{width:12rem}.w-80.sc-ir-credit-card-input{width:20rem}.gap-2.sc-ir-credit-card-input{gap:.5rem}.gap-4.sc-ir-credit-card-input{gap:1rem}.space-x-2.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4.sc-ir-credit-card-input{padding:1rem}@media (min-width:768px){.md\\:col-span-2.sc-ir-credit-card-input{grid-column:span 2/span 2}.md\\:grid.sc-ir-credit-card-input{display:grid}.md\\:h-20.sc-ir-credit-card-input{height:5rem}.md\\:grid-cols-3.sc-ir-credit-card-input{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row.sc-ir-credit-card-input{flex-direction:row}}@media (min-width:1024px){.lg\\:block.sc-ir-credit-card-input{display:block}.lg\\:grid-cols-2.sc-ir-credit-card-input{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6.sc-ir-credit-card-input{padding:1.5rem}}.size-6.sc-ir-credit-card-input{height:1.5rem;width:1.5rem}.pb-2.sc-ir-credit-card-input{padding-bottom:.5rem}.font-semibold.sc-ir-credit-card-input{font-weight:600}.text-red-500.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.top-\\[20\\%\\].sc-ir-credit-card-input{top:20%}.z-50.sc-ir-credit-card-input{z-index:50}.mt-1\\.5.sc-ir-credit-card-input{margin-top:.375rem}.aspect-\\[1\\/1\\].sc-ir-credit-card-input{aspect-ratio:1/1}.max-h-32.sc-ir-credit-card-input{max-height:8rem}.flex-wrap.sc-ir-credit-card-input{flex-wrap:wrap}.justify-center.sc-ir-credit-card-input{justify-content:center}.gap-1.sc-ir-credit-card-input{gap:.25rem}.gap-16.sc-ir-credit-card-input{gap:4rem}.space-y-2.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover.sc-ir-credit-card-input{object-fit:cover}.text-center.sc-ir-credit-card-input{text-align:center}.text-sm.sc-ir-credit-card-input{font-size:.875rem;line-height:1.25rem}.text-xl.sc-ir-credit-card-input{font-size:1.25rem;line-height:1.75rem}.text-gray-700.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-green-600.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit.sc-ir-credit-card-input{width:fit-content}.md\\:items-center.sc-ir-credit-card-input{align-items:center}.md\\:text-right.sc-ir-credit-card-input{text-align:right}}.bottom-2.sc-ir-credit-card-input{bottom:.5rem}.z-40.sc-ir-credit-card-input{z-index:40}.mb-5.sc-ir-credit-card-input{margin-bottom:1.25rem}.mt-14.sc-ir-credit-card-input{margin-top:3.5rem}.w-auto.sc-ir-credit-card-input{width:auto}.justify-end.sc-ir-credit-card-input{justify-content:flex-end}.bg-gray-700\\/80.sc-ir-credit-card-input{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-credit-card-input{padding-left:1.5rem;padding-right:1.5rem}.py-8.sc-ir-credit-card-input{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-credit-card-input{padding-bottom:1.25rem}.text-base.sc-ir-credit-card-input{font-size:1rem;line-height:1.5rem}.text-gray-200.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.filter.sc-ir-credit-card-input{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg.sc-ir-credit-card-input{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-credit-card-input{width:15rem}.lg\\:gap-10.sc-ir-credit-card-input{gap:2.5rem}.lg\\:text-2xl.sc-ir-credit-card-input{font-size:1.5rem;line-height:2rem}}.sr-only.sc-ir-credit-card-input{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table.sc-ir-credit-card-input{display:table}.mb-2.sc-ir-credit-card-input{margin-bottom:.5rem}.h-10.sc-ir-credit-card-input{height:2.5rem}.h-12.sc-ir-credit-card-input{height:3rem}.h-14.sc-ir-credit-card-input{height:3.5rem}.h-64.sc-ir-credit-card-input{height:16rem}.h-screen.sc-ir-credit-card-input{height:100vh}.min-h-screen.sc-ir-credit-card-input{min-height:100vh}.w-56.sc-ir-credit-card-input{width:14rem}.max-w-md.sc-ir-credit-card-input{max-width:28rem}.animate-pulse.sc-ir-credit-card-input{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center.sc-ir-credit-card-input{place-content:center}.self-center.sc-ir-credit-card-input{align-self:center}.rounded-full.sc-ir-credit-card-input{border-radius:9999px}.bg-gray-200.sc-ir-credit-card-input{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.py-4.sc-ir-credit-card-input{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden.sc-ir-credit-card-input{display:none}}.gap-2\\.5.sc-ir-credit-card-input{gap:.625rem}.space-y-8.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-credit-card-input{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky.sc-ir-credit-card-input{position:sticky}.md\\:top-20.sc-ir-credit-card-input{top:5rem}.md\\:flex.sc-ir-credit-card-input{display:flex}.md\\:max-w-4xl.sc-ir-credit-card-input{max-width:56rem}.md\\:max-w-md.sc-ir-credit-card-input{max-width:28rem}.md\\:items-start.sc-ir-credit-card-input{align-items:flex-start}.md\\:justify-end.sc-ir-credit-card-input{justify-content:flex-end}}@media (min-width:1024px){.lg\\:size-7.sc-ir-credit-card-input{height:1.75rem;width:1.75rem}}.capitalize.sc-ir-credit-card-input{text-transform:capitalize}.text-end.sc-ir-credit-card-input{text-align:end}.text-gray-400.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.h-5.sc-ir-credit-card-input{height:1.25rem}.w-5.sc-ir-credit-card-input{width:1.25rem}.visible.sc-ir-credit-card-input{visibility:visible}.fixed.sc-ir-credit-card-input{position:fixed}.mx-1.sc-ir-credit-card-input{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-credit-card-input{justify-content:flex-start}.gap-1\\.5.sc-ir-credit-card-input{gap:.375rem}@media (min-width:768px){.md\\:block.sc-ir-credit-card-input{display:block}}.resize.sc-ir-credit-card-input{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-credit-card-input{display:block}}.pointer-events-none.sc-ir-credit-card-input{pointer-events:none}.inset-y-0.sc-ir-credit-card-input{bottom:0;top:0}.end-1.sc-ir-credit-card-input{inset-inline-end:.25rem}.start-2.sc-ir-credit-card-input{inset-inline-start:.5rem}.px-\\[0\\.3rem\\].sc-ir-credit-card-input{padding-left:.3rem;padding-right:.3rem}.ps-9.sc-ir-credit-card-input{padding-inline-start:2.25rem}.pt-1.sc-ir-credit-card-input{padding-top:.25rem}.text-\\[\\#667085\\].sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.right-0.sc-ir-credit-card-input{right:0}.right-4.sc-ir-credit-card-input{right:1rem}.top-4.sc-ir-credit-card-input{top:1rem}.mt-8.sc-ir-credit-card-input{margin-top:2rem}.min-w-\\[70\\%\\].sc-ir-credit-card-input{min-width:70%}.max-w-full.sc-ir-credit-card-input{max-width:100%}.translate-x-0.sc-ir-credit-card-input{--tw-translate-x:0px}.translate-x-0.sc-ir-credit-card-input,.translate-x-\\[100\\%\\].sc-ir-credit-card-input{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-credit-card-input{--tw-translate-x:100%}.bg-white.sc-ir-credit-card-input{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow.sc-ir-credit-card-input,.shadow-md.sc-ir-credit-card-input{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-credit-card-input{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-credit-card-input{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-credit-card-input{transition-duration:.3s}.ease-in-out.sc-ir-credit-card-input{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-credit-card-input{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-credit-card-input,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-credit-card-input{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-credit-card-input{--tw-translate-x:0px}.max-w-xs.sc-ir-credit-card-input{max-width:20rem}.rounded-lg.sc-ir-credit-card-input{border-radius:.5rem}.px-3.sc-ir-credit-card-input{padding-left:.75rem;padding-right:.75rem}.mb-4.sc-ir-credit-card-input{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-credit-card-input{max-height:83vh}.overflow-y-auto.sc-ir-credit-card-input{overflow-y:auto}.font-normal.sc-ir-credit-card-input{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-credit-card-input{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-credit-card-input{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-credit-card-input{padding:1.5rem}}.size-4.sc-ir-credit-card-input{height:1rem;width:1rem}.gap-3.sc-ir-credit-card-input{gap:.75rem}@media (min-width:640px){.sm\\:hidden.sc-ir-credit-card-input{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity))}}.h-80.sc-ir-credit-card-input{height:20rem}.h-\\[80vh\\].sc-ir-credit-card-input{height:80vh}.overflow-x-auto.sc-ir-credit-card-input{overflow-x:auto}.overflow-x-hidden.sc-ir-credit-card-input{overflow-x:hidden}.px-\\[1\\.25rem\\].sc-ir-credit-card-input{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\].sc-ir-credit-card-input{padding-top:1rem}.lowercase.sc-ir-credit-card-input{text-transform:lowercase}@media (min-width:1024px){.lg\\:table-cell.sc-ir-credit-card-input{display:table-cell}}.mx-2.sc-ir-credit-card-input{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5.sc-ir-credit-card-input{margin-top:.625rem}.rounded-xl.sc-ir-credit-card-input{border-radius:.75rem}.bg-gray-100.sc-ir-credit-card-input{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6.sc-ir-credit-card-input{padding:1.5rem}.pt-2.sc-ir-credit-card-input{padding-top:.5rem}.leading-none.sc-ir-credit-card-input{line-height:1}.tracking-tight.sc-ir-credit-card-input{letter-spacing:-.025em}@media (min-width:640px){.sm\\:p-6.sc-ir-credit-card-input{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse.sc-ir-credit-card-input{flex-direction:row-reverse}}.mt-4.sc-ir-credit-card-input{margin-top:1rem}.h-\\[1px\\].sc-ir-credit-card-input{height:1px}.min-w-\\[1rem\\].sc-ir-credit-card-input{min-width:1rem}.cursor-pointer.sc-ir-credit-card-input{cursor:pointer}.space-y-1.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-credit-card-input{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-gray-300.sc-ir-credit-card-input{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300.sc-ir-credit-card-input{background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-gray-300.sc-ir-credit-card-input,.bg-white.sc-ir-credit-card-input{--tw-bg-opacity:1}.p-2.sc-ir-credit-card-input{padding:.5rem}.underline.sc-ir-credit-card-input{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm.sc-ir-credit-card-input{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-credit-card-input{aspect-ratio:16/9}}.ml-1.sc-ir-credit-card-input{margin-left:.25rem}.line-clamp-3.sc-ir-credit-card-input{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-credit-card-input{display:inline-flex}.h-16.sc-ir-credit-card-input{height:4rem}.w-16.sc-ir-credit-card-input{width:4rem}.max-w-\\[60\\%\\].sc-ir-credit-card-input{max-width:60%}.flex-row.sc-ir-credit-card-input{flex-direction:row}.space-y-9.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.25rem*var(--tw-space-y-reverse));margin-top:calc(2.25rem*(1 - var(--tw-space-y-reverse)))}.pb-1\\.5.sc-ir-credit-card-input{padding-bottom:.375rem}.pl-0.sc-ir-credit-card-input{padding-left:0}.pt-0\\.5.sc-ir-credit-card-input{padding-top:.125rem}.text-right.sc-ir-credit-card-input{text-align:right}.text-\\[var\\(--ir-green\\)\\].sc-ir-credit-card-input{color:var(--ir-green)}@media (min-width:768px){.md\\:w-full.sc-ir-credit-card-input{width:100%}.md\\:max-w-full.sc-ir-credit-card-input{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-credit-card-input{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-credit-card-input{font-size:1.25rem;line-height:1.75rem}}.size-\\[1\\.125rem\\].sc-ir-credit-card-input{height:1.125rem;width:1.125rem}.h-\\[14px\\].sc-ir-credit-card-input{height:14px}.h-\\[3rem\\].sc-ir-credit-card-input{height:3rem}.w-\\[12\\.25px\\].sc-ir-credit-card-input{width:12.25px}.gap-0\\.5.sc-ir-credit-card-input{gap:.125rem}.border-0.sc-ir-credit-card-input{border-width:0}.pt-14.sc-ir-credit-card-input{padding-top:3.5rem}.shadow.sc-ir-credit-card-input,.shadow-none.sc-ir-credit-card-input{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-credit-card-input{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-credit-card-input{width:auto}.sm\\:w-fit.sc-ir-credit-card-input{width:fit-content}.sm\\:border.sc-ir-credit-card-input{border-width:1px}.sm\\:pt-4.sc-ir-credit-card-input{padding-top:1rem}.sm\\:shadow-sm.sc-ir-credit-card-input{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.gap-12.sc-ir-credit-card-input{gap:3rem}.gap-8.sc-ir-credit-card-input{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-credit-card-input{max-width:24rem}}.text-start.sc-ir-credit-card-input{text-align:start}.size-3.sc-ir-credit-card-input{height:.75rem;width:.75rem}.col-span-6.sc-ir-credit-card-input{grid-column:span 6/span 6}.w-12.sc-ir-credit-card-input{width:3rem}.place-items-center.sc-ir-credit-card-input{place-items:center}.w-72.sc-ir-credit-card-input{width:18rem}.w-fit.sc-ir-credit-card-input{width:fit-content}@media (min-width:640px){.sm\\:w-full.sc-ir-credit-card-input{width:100%}}@media (min-width:768px){.md\\:p-4.sc-ir-credit-card-input{padding:1rem}}@media (min-width:1024px){.lg\\:w-fit.sc-ir-credit-card-input{width:fit-content}}.ml-4.sc-ir-credit-card-input{margin-left:1rem}.grid-cols-2.sc-ir-credit-card-input{grid-template-columns:repeat(2,minmax(0,1fr))}.items-end.sc-ir-credit-card-input{align-items:flex-end}.gap-6.sc-ir-credit-card-input{gap:1.5rem}.space-y-3.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-credit-card-input{padding-bottom:1.5rem}.text-gray-800.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-credit-card-input{flex-direction:row}.sm\\:items-center.sc-ir-credit-card-input{align-items:center}.sm\\:text-sm.sc-ir-credit-card-input{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-credit-card-input{grid-template-columns:repeat(3,minmax(0,1fr))}}.-bottom-0.sc-ir-credit-card-input{bottom:0}.left-8.sc-ir-credit-card-input{left:2rem}.top-8.sc-ir-credit-card-input{top:2rem}.z-0.sc-ir-credit-card-input{z-index:0}.z-10.sc-ir-credit-card-input{z-index:10}.mb-1.sc-ir-credit-card-input{margin-bottom:.25rem}.size-10.sc-ir-credit-card-input{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\].sc-ir-credit-card-input{max-height:80vh}.max-h-\\[90vh\\].sc-ir-credit-card-input{max-height:90vh}.overflow-hidden.sc-ir-credit-card-input{overflow:hidden}.bg-white\\/80.sc-ir-credit-card-input{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-credit-card-input{padding-left:.5rem;padding-right:.5rem}.pb-4.sc-ir-credit-card-input,.py-4.sc-ir-credit-card-input{padding-bottom:1rem}.pt-0.sc-ir-credit-card-input{padding-top:0}.ordinal.sc-ir-credit-card-input{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-credit-card-input:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:w-auto.sc-ir-credit-card-input{width:auto}.md\\:pt-0.sc-ir-credit-card-input{padding-top:0}.md\\:pt-4.sc-ir-credit-card-input{padding-top:1rem}.md\\:text-xl.sc-ir-credit-card-input{font-size:1.25rem;line-height:1.75rem}}.pt-2.sc-ir-credit-card-input,.py-2.sc-ir-credit-card-input{padding-top:.5rem}.pt-4.sc-ir-credit-card-input{padding-top:1rem}.text-slate-900.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}@media (min-width:768px){.md\\:space-y-2.sc-ir-credit-card-input>.sc-ir-credit-card-input:not([hidden])~.sc-ir-credit-card-input:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0.sc-ir-credit-card-input{padding:0}}.h-72.sc-ir-credit-card-input{height:18rem}.col-span-2.sc-ir-credit-card-input{grid-column:span 2/span 2}.mb-6.sc-ir-credit-card-input{margin-bottom:1.5rem}.mt-6.sc-ir-credit-card-input{margin-top:1.5rem}.min-h-\\[80vh\\].sc-ir-credit-card-input{min-height:80vh}.max-w-xl.sc-ir-credit-card-input{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2.sc-ir-credit-card-input{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-credit-card-input{color:hsl(var(--brand-600))}.size-\\[18px\\].sc-ir-credit-card-input{height:18px;width:18px}.text-slate-500.sc-ir-credit-card-input{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-credit-card-input{padding:1rem}}.border-solid.sc-ir-credit-card-input{border-style:solid}.w-\\[45\\%\\].sc-ir-credit-card-input{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-credit-card-input{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-credit-card-input{color:var(--gray-500)}";
const IrCreditCardInputStyle0 = irCreditCardInputCss;

const IrCreditCardInput = /*@__PURE__*/ proxyCustomElement(class IrCreditCardInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.creditCardChange = createEvent(this, "creditCardChange", 7);
        this.value = undefined;
        this.cardType = '';
        this.error = false;
    }
    applyMask(cardType) {
        if (this.mask) {
            this.mask.destroy();
        }
        const masks = {
            VISA: '0000 0000 0000 0000',
            Mastercard: '0000 0000 0000 0000',
            AMEX: '0000 000000 00000',
        };
        this.mask = IMask(this.input, {
            mask: masks[cardType] || masks['VISA'],
        });
    }
    componentDidLoad() {
        this.input = this.el.querySelector('input');
        this.applyMask(this.cardType);
    }
    handleInput(e) {
        const target = e.target;
        const value = target.value;
        this.creditCardChange.emit({ value, cardType: this.cardType });
        if (value === '') {
            this.cardType = '';
            this.error = false;
        }
        else {
            const detectedCardType = detectCardType(value);
            if (this.cardType !== detectedCardType) {
                this.cardType = detectedCardType;
                this.applyMask(this.cardType);
            }
            // if ((value.startsWith('3') && value.length > 2) || (detectedCardType === '' && value.length > 1)) {
            //   this.error = true;
            // } else {
            //   this.error = false;
            // }
        }
    }
    render() {
        return (h(Host, { key: '0a5a818f4019cbb494fa74823ad0248cbb8dc070' }, h("div", { key: '0624d6f3a48783f47a04deab31466e0f6681e578', class: `card-container ${this.error ? 'error' : ''}` }, h("label", { key: '3f384a5bd3e9726e4966a1b5cf59863988e9621d', htmlFor: "first_input", class: "card-number" }, localizedWords.entries.Lcz_CardNumber), h("div", { key: '4165c6ecffcdb02ef88c831e2215aef9e95232a8', class: "input-container" }, h("input", { key: 'f9f8e9c8a431c53d44c6ac3b7d0024419857724a', type: "text", class: "w-full", onFocus: () => {
                if (this.el.hasAttribute('data-state'))
                    this.el.removeAttribute('data-state');
            }, onBlur: e => {
                var _a;
                const target = e.target;
                const cardNumberSchema = ZCreditCardSchemaWithCvc.pick({ cardNumber: true });
                const cardNumberValidation = cardNumberSchema.safeParse({ cardNumber: (_a = target.value) === null || _a === void 0 ? void 0 : _a.replace(/ /g, '') });
                if (!cardNumberValidation.success) {
                    this.el.setAttribute('data-state', 'error');
                    this.el.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (this.el.hasAttribute('aria-invalid')) {
                        this.el.setAttribute('aria-invalid', 'false');
                    }
                }
            }, autocomplete: "cc-number", inputMode: "numeric", onInput: this.handleInput.bind(this) }), h("div", { key: '6d5f643217d446b9db367523cd1354f15778f128', class: "icon-container" }, this.renderIcon(this.cardType))))));
    }
    renderIcon(cardType) {
        const icons = {
            VISA: `<svg width="30" height="20" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white"/>
      <rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7501 15.8582H8.69031L7.14576 9.79235C7.07245 9.51332 6.91679 9.26664 6.68782 9.15038C6.11639 8.85821 5.48672 8.62568 4.7998 8.50841V8.27487H8.11789C8.57583 8.27487 8.91929 8.62568 8.97653 9.0331L9.77793 13.4086L11.8367 8.27487H13.8392L10.7501 15.8582ZM14.984 15.8582H13.0388L14.6406 8.27487H16.5858L14.984 15.8582ZM19.1025 10.3757C19.1597 9.96725 19.5032 9.73372 19.9039 9.73372C20.5336 9.67508 21.2195 9.79235 21.7919 10.0835L22.1354 8.45079C21.5629 8.21725 20.9333 8.09998 20.3619 8.09998C18.4738 8.09998 17.1 9.15038 17.1 10.6082C17.1 11.7173 18.0731 12.2996 18.7601 12.6504C19.5032 13.0002 19.7894 13.2337 19.7322 13.5835C19.7322 14.1082 19.1597 14.3418 18.5883 14.3418C17.9014 14.3418 17.2145 14.1669 16.5858 13.8747L16.2424 15.5084C16.9293 15.7996 17.6724 15.9169 18.3594 15.9169C20.4763 15.9745 21.7919 14.9251 21.7919 13.35C21.7919 11.3664 19.1025 11.2502 19.1025 10.3757ZM28.5998 15.8582L27.0553 8.27487H25.3962C25.0528 8.27487 24.7093 8.50841 24.5948 8.85821L21.7347 15.8582H23.7372L24.1369 14.7502H26.5973L26.8263 15.8582H28.5998ZM25.6824 10.3171L26.2539 13.1751H24.6521L25.6824 10.3171Z" fill="#172B85"/>
      </svg>
      `,
            AMEX: `<svg width="30" height="20" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="#1F72CD"/>
      <rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.09517 8.5L2.91406 15.7467H6.7223L7.19441 14.5913H8.27355L8.74566 15.7467H12.9375V14.8649L13.311 15.7467H15.4793L15.8528 14.8462V15.7467H24.5706L25.6307 14.6213L26.6232 15.7467L31.1009 15.7561L27.9097 12.1436L31.1009 8.5H26.6927L25.6608 9.60463L24.6995 8.5H15.2156L14.4013 10.3704L13.5678 8.5H9.7675V9.35186L9.34474 8.5H6.09517ZM6.83205 9.52905H8.68836L10.7984 14.4431V9.52905H12.8319L14.4617 13.0524L15.9637 9.52905H17.987V14.7291H16.7559L16.7458 10.6544L14.9509 14.7291H13.8495L12.0446 10.6544V14.7291H9.51179L9.03162 13.5633H6.43745L5.95827 14.728H4.60123L6.83205 9.52905ZM24.1196 9.52905H19.1134V14.726H24.0421L25.6307 13.0036L27.1618 14.726H28.7624L26.436 12.1426L28.7624 9.52905H27.2313L25.6507 11.2316L24.1196 9.52905ZM7.73508 10.4089L6.8804 12.4856H8.58876L7.73508 10.4089ZM20.3497 11.555V10.6057V10.6048H23.4734L24.8364 12.1229L23.413 13.6493H20.3497V12.613H23.0808V11.555H20.3497Z" fill="white"/>
      </svg>`,
            Mastercard: `<svg width="30" height="20" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white"/>
      <rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.179 16.8294C15.9949 17.8275 14.459 18.43 12.7807 18.43C9.03582 18.43 6 15.4303 6 11.73C6 8.02966 9.03582 5.02997 12.7807 5.02997C14.459 5.02997 15.9949 5.63247 17.179 6.63051C18.363 5.63247 19.8989 5.02997 21.5773 5.02997C25.3221 5.02997 28.358 8.02966 28.358 11.73C28.358 15.4303 25.3221 18.43 21.5773 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8294Z" fill="#ED0006"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1787 16.8294C18.6366 15.6005 19.5611 13.7719 19.5611 11.73C19.5611 9.68801 18.6366 7.85941 17.1787 6.63051C18.3628 5.63247 19.8987 5.02997 21.577 5.02997C25.3219 5.02997 28.3577 8.02966 28.3577 11.73C28.3577 15.4303 25.3219 18.43 21.577 18.43C19.8987 18.43 18.3628 17.8275 17.1787 16.8294Z" fill="#F9A000"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1793 16.8294C18.6372 15.6005 19.5616 13.7719 19.5616 11.73C19.5616 9.68805 18.6372 7.85946 17.1793 6.63055C15.7213 7.85946 14.7969 9.68805 14.7969 11.73C14.7969 13.7719 15.7213 15.6005 17.1793 16.8294Z" fill="#FF5E00"/>
      </svg>
      `,
        };
        return h("div", { innerHTML: icons[cardType] });
    }
    get el() { return this; }
    static get style() { return IrCreditCardInputStyle0; }
}, [2, "ir-credit-card-input", {
        "value": [1],
        "cardType": [32],
        "error": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-credit-card-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-credit-card-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCreditCardInput);
            }
            break;
    } });
}

export { IrCreditCardInput as I, ZCreditCardSchemaWithCvc as Z, defineCustomElement as d };

//# sourceMappingURL=ir-credit-card-input2.js.map