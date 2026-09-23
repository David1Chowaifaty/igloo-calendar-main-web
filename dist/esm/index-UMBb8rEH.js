import { B as BRAND, D as DIRTY, E as EMPTY_PATH, I as INVALID, N as NEVER, O as OK, P as ParseStatus, i as ZodType, j as ZodAny, k as ZodArray, m as ZodBigInt, p as ZodBoolean, q as ZodBranded, r as ZodCatch, t as ZodDate, v as ZodDefault, w as ZodDiscriminatedUnion, x as ZodEffects, y as ZodEnum, Z as ZodError, z as ZodFirstPartyTypeKind, A as ZodFunction, C as ZodIntersection, a as ZodIssueCode, F as ZodLazy, G as ZodLiteral, H as ZodMap, J as ZodNaN, K as ZodNativeEnum, L as ZodNever, M as ZodNull, Q as ZodNullable, R as ZodNumber, S as ZodObject, T as ZodOptional, U as ZodParsedType, V as ZodPipeline, W as ZodPromise, X as ZodReadonly, Y as ZodRecord, _ as ZodSet, $ as ZodString, a0 as ZodSymbol, a1 as ZodTuple, a2 as ZodUndefined, a3 as ZodUnion, a4 as ZodUnknown, a5 as ZodVoid, a6 as addIssueToContext, g as anyType, d as arrayType, a7 as bigIntType, b as booleanType, c as coerce, h as custom, a8 as dateType, a9 as datetimeRegex, aa as errorMap, ab as discriminatedUnionType, ac as effectsType, e as enumType, ad as functionType, ae as getErrorMap, af as getParsedType, ag as instanceOfType, ah as intersectionType, ai as isAborted, aj as isAsync, ak as isDirty, al as isValid, am as late, an as lazyType, l as literalType, ao as makeIssue, ap as mapType, aq as nanType, ar as nativeEnumType, as as neverType, f as nullType, at as nullableType, n as numberType, o as objectType, au as objectUtil, av as oboolean, aw as onumber, ax as optionalType, ay as ostring, az as pipelineType, aA as preprocessType, aB as promiseType, aC as quotelessJson, aD as recordType, aE as setType, aF as setErrorMap, aG as strictObjectType, s as stringType, aH as symbolType, aI as tupleType, aJ as undefinedType, u as unionType, aK as unknownType, aL as util, aM as voidType } from './types-BWKgfE54.js';
import { c as createStore } from './locales.store-CXJn6ls-.js';
import { a as axios } from './axios-B50ozOIF.js';
import { P as PropertyIdSchema } from './commonSchemas-DOpzu-TI.js';

var z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BRAND: BRAND,
    DIRTY: DIRTY,
    EMPTY_PATH: EMPTY_PATH,
    INVALID: INVALID,
    NEVER: NEVER,
    OK: OK,
    ParseStatus: ParseStatus,
    Schema: ZodType,
    ZodAny: ZodAny,
    ZodArray: ZodArray,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodBranded: ZodBranded,
    ZodCatch: ZodCatch,
    ZodDate: ZodDate,
    ZodDefault: ZodDefault,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodEffects: ZodEffects,
    ZodEnum: ZodEnum,
    ZodError: ZodError,
    get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
    ZodFunction: ZodFunction,
    ZodIntersection: ZodIntersection,
    ZodIssueCode: ZodIssueCode,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodMap: ZodMap,
    ZodNaN: ZodNaN,
    ZodNativeEnum: ZodNativeEnum,
    ZodNever: ZodNever,
    ZodNull: ZodNull,
    ZodNullable: ZodNullable,
    ZodNumber: ZodNumber,
    ZodObject: ZodObject,
    ZodOptional: ZodOptional,
    ZodParsedType: ZodParsedType,
    ZodPipeline: ZodPipeline,
    ZodPromise: ZodPromise,
    ZodReadonly: ZodReadonly,
    ZodRecord: ZodRecord,
    ZodSchema: ZodType,
    ZodSet: ZodSet,
    ZodString: ZodString,
    ZodSymbol: ZodSymbol,
    ZodTransformer: ZodEffects,
    ZodTuple: ZodTuple,
    ZodType: ZodType,
    ZodUndefined: ZodUndefined,
    ZodUnion: ZodUnion,
    ZodUnknown: ZodUnknown,
    ZodVoid: ZodVoid,
    addIssueToContext: addIssueToContext,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    coerce: coerce,
    custom: custom,
    date: dateType,
    datetimeRegex: datetimeRegex,
    defaultErrorMap: errorMap,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    enum: enumType,
    function: functionType,
    getErrorMap: getErrorMap,
    getParsedType: getParsedType,
    instanceof: instanceOfType,
    intersection: intersectionType,
    isAborted: isAborted,
    isAsync: isAsync,
    isDirty: isDirty,
    isValid: isValid,
    late: late,
    lazy: lazyType,
    literal: literalType,
    makeIssue: makeIssue,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    null: nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    get objectUtil () { return objectUtil; },
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    quotelessJson: quotelessJson,
    record: recordType,
    set: setType,
    setErrorMap: setErrorMap,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    undefined: undefinedType,
    union: unionType,
    unknown: unknownType,
    get util () { return util; },
    void: voidType
});

const SetHKTaskLabelsParamsSchema = objectType({
    property_id: numberType(),
    t1_label: stringType().optional(),
    t1_freq: stringType().optional(),
    t2_label: stringType().optional(),
    t2_freq: stringType().optional(),
});
const ResolveHKIssueParamsSchema = objectType({
    issue_ids: arrayType(numberType().min(0)),
});
const OverrideHKTaskOwnershipParamsSchema = objectType({
    property_id: numberType(),
    is_to_remove: booleanType().optional().default(false),
    assignments: arrayType(objectType({
        PR_ID: numberType(),
        DATE: stringType(),
        HK_TASK_TYPE_CODE: stringType(),
        HKM_ID: numberType().nullable(),
    })),
});
const SkipHKTasksParamsSchema = objectType({
    property_id: numberType(),
    tasks_to_skip: arrayType(objectType({
        unit_id: numberType(),
        booking_nbr: stringType(),
        date: stringType(),
        reason_code: stringType().optional().default('001'),
    })),
});

const initialValue = {
    default_properties: undefined,
    hk_criteria: undefined,
    hk_tasks: undefined,
    pending_housekeepers: [],
};
const { state: housekeeping_store } = createStore(initialValue);
function updateHKStore(key, value) {
    housekeeping_store[key] = value;
}
function getDefaultProperties() {
    return housekeeping_store.default_properties;
}

const GetExposedHKSetupParamsSchema = z.object({
    property_id: PropertyIdSchema,
    language: z.string().optional().default('en'),
});

class HouseKeepingService {
    async getExposedHKSetup(params) {
        const payload = GetExposedHKSetupParamsSchema.parse(params);
        const { data } = await axios.post(`/Get_Exposed_HK_Setup`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        updateHKStore('hk_criteria', data['My_Result']);
        return data['My_Result'];
    }
    async resolveHKIssue(params) {
        const payload = ResolveHKIssueParamsSchema.parse(params);
        const { data } = await axios.post('/Resolve_HK_Issue', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async overrideHKTaskOwnership(params) {
        const payload = OverrideHKTaskOwnershipParamsSchema.parse(params);
        const { data } = await axios.post(`/Override_HK_Task_Ownership`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async setHKTaskLabels(params) {
        const payload = SetHKTaskLabelsParamsSchema.parse(params);
        const { data } = await axios.post(`/Set_HK_Task_Labels`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async getExposedHKStatusCriteria(property_id) {
        const { data } = await axios.post(`/Get_Exposed_HK_Status_Criteria`, { property_id });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        updateHKStore('hk_tasks', data['My_Result']);
        return data['My_Result'];
    }
    async skipHKTasks(params) {
        const payload = SkipHKTasksParamsSchema.parse(params);
        const { data } = await axios.post(`/Skip_HK_Tasks`, payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
    async getArchivedHKTasks(params) {
        const { data } = await axios.post(`/Get_Archived_HK_Tasks`, params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return { url: data.My_Params_Get_Archived_HK_Tasks.Link_excel, tasks: data['My_Result'] ?? [] };
    }
    async setExposedInspectionMode(property_id, mode) {
        const { data } = await axios.post(`/Set_Exposed_Inspection_Mode`, {
            property_id,
            mode,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async manageExposedAssignedUnitToHKM(property_id, assignments) {
        const { data } = await axios.post(`/Manage_Exposed_Assigned_Unit_To_HKM`, {
            property_id,
            links: assignments,
        });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async editExposedHKM(params, is_to_remove = false) {
        const { data } = await axios.post(`/Edit_Exposed_HKM`, { ...params, is_to_remove });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async getHKPendingActions(params) {
        const { data } = await axios.post(`/Get_HK_Pending_Actions`, { ...params });
        updateHKStore('pending_housekeepers', [...data['My_Result']].map(d => ({ original: d, selected: false })));
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async setExposedUnitHKStatus(params) {
        const { data } = await axios.post(`/Set_Exposed_Unit_HK_Status`, { ...params });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
    async getHkTasks(params) {
        const { data } = await axios.post('https://gateway.igloorooms.com/IR/Get_HK_Tasks', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return { url: data.My_Params_Get_HK_Tasks?.Link_excel, tasks: data.My_Result };
    }
    async executeHKAction(params) {
        const { data } = await axios.post(`/Execute_HK_Action`, { ...params });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
    }
    async generateUserName(name) {
        const { data } = await axios.post(`/Generate_UserName`, { name });
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async getHkIssues(params) {
        try {
            const { data } = await axios.post('/Get_HK_Issues', params);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data['My_Result'] ?? [];
        }
        catch {
            return [];
        }
    }
    async getConnectedHk() {
        const { data } = await axios.post('/Get_Connected_HK', {});
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data['My_Result'];
    }
}

export { HouseKeepingService as H, getDefaultProperties as g, housekeeping_store as h, updateHKStore as u };
