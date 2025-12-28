import { z } from './index2.js';

const SelectedUnitSchema = z.object({
    roomtype_id: z.coerce.number(),
    unit_id: z.coerce.number(),
    rateplan_id: z.coerce.number(),
});

export { SelectedUnitSchema as S };

//# sourceMappingURL=types2.js.map