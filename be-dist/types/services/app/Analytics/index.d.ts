import { ConversionType } from './types';
import { FacebookConversion } from './FacebookConversions';
import { GoogleConversion } from './GoogleConversions';
export type TAnalytics = GoogleConversion | FacebookConversion;
export declare function Analytics(type: ConversionType, conversionId: string): TAnalytics;
