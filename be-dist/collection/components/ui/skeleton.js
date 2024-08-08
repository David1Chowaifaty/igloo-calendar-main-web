import { cn } from "../../utils/utils";
import { h } from "@stencil/core";
export const Skeleton = ({ className }) => {
    return h("div", { class: cn('block animate-pulse rounded-md bg-gray-200', className) });
};
//# sourceMappingURL=skeleton.js.map
