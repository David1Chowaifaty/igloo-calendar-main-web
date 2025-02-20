import { FacebookConversion } from "./FacebookConversions";
import { GoogleConversion } from "./GoogleConversions";
export function Analytics(type, conversionId) {
    switch (type) {
        case 'google':
            return new GoogleConversion(conversionId);
        case 'facebook':
            return new FacebookConversion(conversionId);
        default:
            throw new Error(`Unsupported conversion type: ${type}`);
    }
}
//# sourceMappingURL=index.js.map
