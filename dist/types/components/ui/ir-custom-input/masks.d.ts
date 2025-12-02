import { MaskedRange, MaskedNumber } from 'imask';
export declare const masks: {
    readonly price: {
        readonly mask: typeof MaskedNumber;
        readonly scale: 2;
        readonly radix: ".";
        readonly mapToRadix: readonly [","];
        readonly normalizeZeros: true;
        readonly padFractionalZeros: true;
        readonly thousandsSeparator: ",";
    };
    readonly url: {
        readonly mask: RegExp;
        readonly overwrite: false;
        readonly prepare: (appended: any) => any;
        readonly commit: (value: any, masked: any) => void;
    };
    readonly time: {
        readonly mask: "HH:mm";
        readonly blocks: {
            readonly HH: {
                readonly mask: typeof MaskedRange;
                readonly from: 0;
                readonly to: 23;
                readonly placeholderChar: "H";
            };
            readonly mm: {
                readonly mask: typeof MaskedRange;
                readonly from: 0;
                readonly to: 59;
                readonly placeholderChar: "m";
            };
        };
        readonly lazy: false;
        readonly placeholderChar: "_";
    };
    readonly date: {
        readonly mask: DateConstructor;
        readonly pattern: "DD/MM/YYYY";
        readonly lazy: false;
        readonly min: Date;
        readonly max: Date;
        readonly format: (date: any) => string;
        readonly parse: (str: any) => Date;
        readonly autofix: true;
        readonly placeholderChar: "_";
        readonly blocks: {
            readonly YYYY: {
                readonly mask: typeof MaskedRange;
                readonly from: 1900;
                readonly to: string;
                readonly placeholderChar: "Y";
            };
            readonly MM: {
                readonly mask: typeof MaskedRange;
                readonly from: 1;
                readonly to: 12;
                readonly placeholderChar: "M";
            };
            readonly DD: {
                readonly mask: typeof MaskedRange;
                readonly from: 1;
                readonly to: 31;
                readonly placeholderChar: "D";
            };
        };
    };
};
