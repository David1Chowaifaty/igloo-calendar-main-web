import type { TLocaleEntries } from "../../stores/locales.store";
export type LoginAsideView = 'image' | 'calendar';
export declare class IrLoginAside {
    /** Which aside content to render. */
    view: LoginAsideView;
    /** Image URL, used when `view` is `image`. */
    imageSrc: string;
    /** Alternative text for the image. Empty means decorative. */
    imageAlt: string;
    /** Server-provided `Lcz_*` translations, passed through to the calendar view. */
    localeEntries: TLocaleEntries | null;
    render(): any;
}
