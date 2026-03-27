import { z } from 'zod';
export declare const SetHKTaskLabelsParamsSchema: z.ZodObject<{
    property_id: z.ZodNumber;
    t1_label: z.ZodOptional<z.ZodString>;
    t1_freq: z.ZodOptional<z.ZodString>;
    t2_label: z.ZodOptional<z.ZodString>;
    t2_freq: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
    t1_label?: string;
    t1_freq?: string;
    t2_label?: string;
    t2_freq?: string;
}, {
    property_id?: number;
    t1_label?: string;
    t1_freq?: string;
    t2_label?: string;
    t2_freq?: string;
}>;
export type SetHKTaskLabelsParams = z.infer<typeof SetHKTaskLabelsParamsSchema>;
export declare const OverrideHKTaskOwnershipParamsSchema: z.ZodObject<{
    property_id: z.ZodNumber;
    is_to_remove: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    assignments: z.ZodArray<z.ZodObject<{
        PR_ID: z.ZodNumber;
        DATE: z.ZodString;
        HK_TASK_TYPE_CODE: z.ZodString;
        HKM_ID: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        PR_ID?: number;
        DATE?: string;
        HK_TASK_TYPE_CODE?: string;
        HKM_ID?: number;
    }, {
        PR_ID?: number;
        DATE?: string;
        HK_TASK_TYPE_CODE?: string;
        HKM_ID?: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
    is_to_remove?: boolean;
    assignments?: {
        PR_ID?: number;
        DATE?: string;
        HK_TASK_TYPE_CODE?: string;
        HKM_ID?: number;
    }[];
}, {
    property_id?: number;
    is_to_remove?: boolean;
    assignments?: {
        PR_ID?: number;
        DATE?: string;
        HK_TASK_TYPE_CODE?: string;
        HKM_ID?: number;
    }[];
}>;
export type OverrideHKTaskOwnershipParams = z.infer<typeof OverrideHKTaskOwnershipParamsSchema>;
export interface IExposedHouseKeepingSetup {
    statuses: IHKStatuses[];
    housekeepers: IHouseKeepers[];
    units_assignments: IUnitAssignments;
    cleaning_frequencies: ExposedHKSetup[];
    cleaning_periods: ExposedHKSetup[];
    dusty_periods: ExposedHKSetup[];
    highlight_checkin_options: ExposedHKSetup[];
    t1_config: HousekeepingTasksConfig;
    t2_config: HousekeepingTasksConfig;
}
export interface HousekeepingTasksConfig {
    freq: string;
    label: string;
}
export interface ExposedHKSetup {
    code: string;
    description: string;
}
export interface IHouseKeepers {
    id: number;
    is_active: boolean;
    is_soft_deleted: boolean;
    mobile: string;
    name: string;
    note: string;
    password: string;
    property_id: number;
    phone_prefix: string;
    username: string;
    assigned_units: IUnit[];
}
export type THKUser = Omit<IHouseKeepers, 'is_soft_deleted' | 'is_active' | 'assigned_units'>;
export type TPendingHkSetupParams = {
    property_id: number;
    bracket: {
        code: string;
    };
    housekeeper: {
        id: number;
    };
};
export interface IHKTasks {
    brackets: IBrackets[];
    housekeepers: IHouseKeepers[];
}
export interface IBrackets {
    code: string;
    description: string;
}
export interface IUnit {
    calendar_cell: string | null;
    housekeeper: null;
    id: number;
    name: string;
    is_active: boolean;
}
export interface IUnitAssignments {
    assigned: number;
    total: number;
    un_assigned: number;
    unassigned_units: IUnit[];
}
export interface IHKStatuses {
    action: string;
    code: string;
    description: string;
    inspection_mode: IInspectionMode;
    style: IHKStatusesStyle;
}
export interface IHKStatusesStyle {
    color: string;
    shape: TShape;
}
export interface IInspectionMode {
    is_active: boolean;
    window: number;
}
export type TShape = 'smallcircle' | 'bigcircle';
export interface ICauseBase {
    type: string;
}
export interface IUnassignedUnitsCause extends ICauseBase {
    type: 'unassigned_units';
    user: IHouseKeepers | null;
}
export interface IUserCause extends ICauseBase {
    type: 'user';
    isEdit: boolean;
    user: THKUser | null;
}
export interface IDeleteCause extends ICauseBase {
    type: 'delete';
    user: IHouseKeepers;
}
export type THousekeepingTrigger = IUnassignedUnitsCause | IUserCause | IDeleteCause;
export interface IPropertyHousekeepingAssignment {
    hkm_id: number;
    unit_id: number;
    is_to_assign: boolean;
}
export interface IPendingActions {
    arrival: string;
    arrival_time: string;
    housekeeper: IHouseKeepers;
    status: IHKStatuses;
    unit: IUnit;
}
export interface ArchivedTask {
    booking_nbr: string;
    date: string;
    house_keeper: string;
    unit: string;
}
export interface Task {
    id: string;
    adult: number;
    child: number;
    date: string;
    is_highlight: boolean;
    formatted_date: string;
    hint: string;
    hkm_id: number;
    task_type: {
        code: 'CLN' | 'T1' | 'T2';
        description: string;
    };
    infant: number;
    status: TaskStatus;
    unit: IUnit;
    housekeeper: string;
    booking_nbr: string | null;
    extra_task: Task[] | null;
}
export type TaskStatus = {
    code: string;
    description: string;
};
export type TaskStatusCode = 'IH' | 'CI' | 'CO' | 'VA';
export type CleanTaskEvent = {
    task: Task;
    status?: '001' | '004';
};
export declare const SkipHKTasksParamsSchema: z.ZodObject<{
    property_id: z.ZodNumber;
    tasks_to_skip: z.ZodArray<z.ZodObject<{
        unit_id: z.ZodNumber;
        booking_nbr: z.ZodString;
        date: z.ZodString;
        reason_code: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        date?: string;
        unit_id?: number;
        booking_nbr?: string;
        reason_code?: string;
    }, {
        date?: string;
        unit_id?: number;
        booking_nbr?: string;
        reason_code?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    property_id?: number;
    tasks_to_skip?: {
        date?: string;
        unit_id?: number;
        booking_nbr?: string;
        reason_code?: string;
    }[];
}, {
    property_id?: number;
    tasks_to_skip?: {
        date?: string;
        unit_id?: number;
        booking_nbr?: string;
        reason_code?: string;
    }[];
}>;
export type SkipHKTasksParams = z.infer<typeof SkipHKTasksParamsSchema>;
