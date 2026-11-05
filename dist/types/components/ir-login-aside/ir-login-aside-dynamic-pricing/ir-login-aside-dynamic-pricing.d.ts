import type { TLocaleEntries } from "../../../stores/locales.store";
import { Beat } from './dynamic-pricing-story';
export declare class IrLoginAsideDynamicPricing {
    el: HTMLElement;
    /**
     * Translated labels from the server, keyed by `Lcz_*`. Any key that's missing (or the whole
     * object, until it arrives) falls back to the built-in English text.
     */
    localeEntries: TLocaleEntries | null;
    beat: Beat;
    extraProfit: number;
    extraBookings: number;
    private beatTimeout?;
    private countFrame?;
    private readonly week;
    private tr;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private schedule;
    private advance;
    private countUp;
    private reached;
    private renderRate;
    private renderOccupancy;
    render(): any;
}
