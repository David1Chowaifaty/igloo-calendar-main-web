export declare class QueryStringValidator {
    private errors;
    private dateSchema;
    validateCheckin(checkinStr: string): Date | null;
    validateAges(str: string): boolean;
    validateCheckout(checkoutStr: string, checkinDate: Date): Date | null;
    validateAdultCount(adultCount: string): boolean;
    validateChildrenCount(children: string): boolean;
    getErrors(): string[];
}
