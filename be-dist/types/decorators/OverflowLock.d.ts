import { ComponentInterface } from '../stencil-public-runtime';
import { HTMLStencilElement } from '../stencil-public-runtime';
/**
 * Decorator: call on a method that *acquires* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowAdd('modal')
 *   openModal() { ... }
 */
export declare function OverflowAdd(tag?: string): (_proto: ComponentInterface, _methodName: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * Decorator: call on a method that *releases* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowRelease('modal')
 *   closeModal() { ... }
 */
export declare function OverflowRelease(tag?: string): (_proto: ComponentInterface, _methodName: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/** Host augmentation so we can track how many locks this host has per tag. */
export interface HTMLOverflowHostElement extends HTMLStencilElement {
    __overflowTags__?: Map<string, number>;
}
