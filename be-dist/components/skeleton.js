import { c as cn } from './utils.js';
import { h } from '@stencil/core/internal/client';

const Skeleton = ({ className }) => {
    return h("div", { class: cn('block animate-pulse rounded-md bg-gray-200', className) });
};

export { Skeleton as S };

//# sourceMappingURL=skeleton.js.map