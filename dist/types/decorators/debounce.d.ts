/**
 * Debounce decorator that delays method execution until after wait milliseconds
 * have elapsed since the last time it was invoked.
 *
 * @param wait - The number of milliseconds to delay
 * @param options - Configuration options
 * @param options.leading - Execute on the leading edge (default: false)
 * @param options.trailing - Execute on the trailing edge (default: true)
 */
export declare function Debounce(wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): (_: any, __: any, descriptor: PropertyDescriptor) => PropertyDescriptor;
