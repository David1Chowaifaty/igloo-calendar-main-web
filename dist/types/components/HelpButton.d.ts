import { FunctionalComponent } from '../stencil-public-runtime';
type HelpDocButtonProps = {
    /** Tooltip message */
    message?: string;
    /** Link to open in a new tab */
    href?: string;
    /** Optional wrapper class for layout tweaks */
    class?: string;
};
export declare const HelpDocButton: FunctionalComponent<HelpDocButtonProps>;
export {};
