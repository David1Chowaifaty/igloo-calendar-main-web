import{z as e}from"./p-2ad5d597.js";function r(e){e=e.replace(/\D/g,"");let r=0;let d=false;for(let a=e.length-1;a>=0;a--){let t=parseInt(e.charAt(a),10);if(d){t*=2;if(t>9){t-=9}}r+=t;d=!d}return r%10===0}const d=e.object({cardNumber:e.string().refine((e=>r(e)),{message:"Invalid credit card number"}),cvc:e.string().regex(/^\d{3,4}$/,"CVV must be 3 or 4 digits"),cardHolderName:e.string().min(1,"Holder name is required"),expiryDate:e.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/,"Expiry date must be in MM/YY format")});e.object({cardNumber:e.string().regex(/^\d{15,16}$/,"Card number must be 15 or 16 digits"),cardHolderName:e.string().min(1,"Holder name is required"),expiryDate:e.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/,"Expiry date must be in MM/YY format")});const a=e.object({code:e.literal("004"),cardNumber:e.string(),cardHolderName:e.string(),expiry_month:e.string(),expiry_year:e.string()});const t=e.object({code:e.literal("001"),cardNumber:e.string(),cardHolderName:e.string(),expiry_month:e.string(),expiry_year:e.string(),cvc:e.string()});e.union([a,t]);export{d as Z};
//# sourceMappingURL=p-7f5837b0.js.map