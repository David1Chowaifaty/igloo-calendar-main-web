import { Agent } from "../../services/agents/type";
/** Month name (3 letters), day, year — localized, and Hijri when that preference is active. */
export declare const _formatDate: (date: string) => string;
/** Day number/month number plus the weekday name. */
export declare const _getDay: (date: string) => string;
/**
 * Formats an hour/minute pair, honouring the platform's 12h/24h preference. Builds a real `Date`
 * rather than parsing `'9:5'` as a date string, which moment's loose parser handles unreliably.
 */
export declare const _formatTime: (hour: string, minute: string) => string;
export declare const isAgentMode: (agent: Agent) => boolean;
