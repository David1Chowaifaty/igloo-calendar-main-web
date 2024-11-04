import { z } from "zod";
export const ZCurrency = z.object({
    code: z.string(),
    name: z.string().optional(),
    symbol: z.string(),
    id: z.coerce.number().optional(),
});
export class Identifier {
}
//# sourceMappingURL=common.js.map
