import { ComponentInterface } from '../stencil-public-runtime';
/**
 * Decorator: call on a method that *acquires* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowAdd('modal')
 *   openModal() { ... }
 *
 * NOTE: this decorator no longer controls overflow (body locking). It's kept as a
 * pass-through so existing usages keep compiling. It still ensures the
 * `--ir-scrollbar-width` CSS variable is available on `:root`.
 */
export declare function OverflowAdd(tag?: string): (_proto: ComponentInterface, _methodName: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * Decorator: call on a method that *releases* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowRelease('modal')
 *   closeModal() { ... }
 *
 * NOTE: this decorator no longer controls overflow (body locking). It's kept as a
 * pass-through so existing usages keep compiling.
 */
export declare function OverflowRelease(_tag?: string): (_proto: ComponentInterface, _methodName: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
