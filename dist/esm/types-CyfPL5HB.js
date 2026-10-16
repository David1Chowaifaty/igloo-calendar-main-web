import { o as objectType, c as coerce } from './types-Cvnhk41g.js';

const SelectedUnitSchema = objectType({
    roomtype_id: coerce.number(),
    unit_id: coerce.number(),
    rateplan_id: coerce.number(),
});

export { SelectedUnitSchema as S };
