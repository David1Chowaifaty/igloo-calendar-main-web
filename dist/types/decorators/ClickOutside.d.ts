import { ComponentInterface } from '../stencil-public-runtime';
import { HTMLStencilElement } from '../stencil-public-runtime';
/**
 * Call this function as soon as the click outside of annotated method's host is done.
 * @example
```
@ClickOutside()
callback() {
  // this will run when click outside of element (host component) is done.
}
```
 */
export declare function ClickOutside(): (proto: ComponentInterface, methodName: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * Register callback function for HTMLElement to be executed when user clicks outside of element.
 * @example
```
<span
    ref={spanEl => registerClickOutside(this, spanEl, () => this.test())}>
      Hello, World!
</span>;
```
 */
export declare function registerClickOutside(component: ComponentInterface, element: HTMLClickOutsideElement, callback: (event: Event) => void): void;
export declare function unregisterClickOutside(element: HTMLClickOutsideElement | null | undefined): void;
export interface HTMLClickOutsideElement extends HTMLStencilElement {
    __irClickOutsideCleanup__?: () => void;
}
