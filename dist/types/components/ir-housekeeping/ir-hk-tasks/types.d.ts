export type TaskFilters = {
    cleaning_periods: {
        code: string;
    };
    housekeepers: {
        ids: number[];
    };
    cleaning_frequencies: {
        code: string;
    };
    dusty_units: {
        code: string;
    };
    highlight_check_ins: {
        code: string;
    };
};
