import { IExposedProperty } from "../../models/property";
type HSLColor = {
    h: number;
    s: number;
    l: number;
};
export declare class Colors {
    hexToRgb(hex: any): {
        r: number;
        g: number;
        b: number;
    };
    rgbToHsl(rgb: any): {
        h: number;
        s: number;
        l: number;
    };
    hexToHSL(hex: string): HSLColor;
    generateColorShades(baseHex: string): string[];
    initTheme(property: IExposedProperty): void;
}
export {};
