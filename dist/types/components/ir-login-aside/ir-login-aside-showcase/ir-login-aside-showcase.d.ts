import type { TLocaleEntries } from "../../../stores/locales.store";
export declare class IrLoginAsideShowcase {
    /** Server-provided `Lcz_*` translations, passed through to the slides. */
    localeEntries: TLocaleEntries | null;
    /** Index into `SLIDES` of the slide on show. */
    active: number;
    /** The slide fading out underneath the active one, while a switch is in progress. */
    leaving: number | null;
    /** How many times each slide has been shown. It keys the slide, so every showing is a fresh mount. */
    showings: number[];
    /** Half-turns of the loop icon: it only ever spins forward. */
    turns: number;
    private crossfadeTimeout?;
    private tr;
    disconnectedCallback(): void;
    private show;
    private next;
    private handleLoopClick;
    private renderSlide;
    render(): any;
}
