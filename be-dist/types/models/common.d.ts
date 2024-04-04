export interface ICurrency {
    code: string;
    id: number;
    symbol: string;
}
export type TDirection = 'LTR' | 'RTL';
export interface IExposedLanguages {
    code: string;
    culture: string;
    description: string;
    direction: TDirection;
    entries: null;
    id: number;
}
export interface DataStructure {
    ExceptionCode: any;
    ExceptionMsg: string;
    My_Params_Get_Exposed_Property: any;
    My_Result: any;
}
