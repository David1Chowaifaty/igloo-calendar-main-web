// import { Skeleton } from '@/components/ui/skeleton';
// import { FunctionalComponent, h } from '@stencil/core';
// export const HotelPageSkeleton = () => {
//   return (
//     <div class={'h-8 w-48 bg-red-200 text-gray-300'}>p</div>
//     // <div class="h-full space-y-4  p-4">
//     //   {/* Header */}p
//     //   <div class="flex items-center justify-between bg-red-100">
//     //     <Skeleton className="h-8 w-48" /> {/* Hotel Name */}
//     //     <Skeleton className="h-8 w-24" /> {/* Booking Code */}
//     //   </div>
//     //   {/* Hotel Images */}
//     //   <div class="grid grid-cols-3 gap-2">
//     //     <Skeleton className="col-span-2 h-40 w-full" /> {/* Main Image */}
//     //     <div class="space-y-2">
//     //       <Skeleton className="h-16 w-full" />
//     //       <Skeleton className="h-16 w-full" />
//     //       <Skeleton className="h-16 w-full" />
//     //     </div>
//     //   </div>
//     //   {/* Date and Guest Selection */}
//     //   <div class="flex space-x-2">
//     //     <Skeleton className="h-10 w-full" /> {/* Check-in/Check-out */}
//     //     <Skeleton className="h-10 w-full" /> {/* Guests Selection */}
//     //   </div>
//     //   {/* Buttons */}
//     //   <div class="flex space-x-2">
//     //     <Skeleton className="h-10 w-full" /> {/* Have a Coupon */}
//     //     <Skeleton className="h-10 w-full" /> {/* Get Loyalty Discount */}
//     //   </div>
//     //   {/* Room List */}
//     //   <div class="space-y-4">
//     //     {[1, 2, 3].map((_, idx) => (
//     //       <div key={idx} class="flex space-x-4">
//     //         <Skeleton className="h-32 w-32" /> {/* Room Image */}
//     //         <div class="flex-1 space-y-2">
//     //           <Skeleton className="h-6 w-3/4" /> {/* Room Title */}
//     //           <Skeleton className="h-4 w-full" /> {/* Room Description */}
//     //           <Skeleton className="h-4 w-1/2" /> {/* Room Details */}
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//   );
// };
import { Skeleton } from "../../ui/skeleton";
import { h } from "@stencil/core";
export default function InvoiceSkeleton() {
    return (h("div", { class: "space-y-4 p-4" }, h("div", { class: "flex space-x-2" }, h(Skeleton, { className: "h-8 w-32 rounded-full" }), h(Skeleton, { className: "h-8 w-32 rounded-full" })), h("div", { class: "space-y-2" }, h(Skeleton, { className: "h-4 w-48" }), h(Skeleton, { className: "h-4 w-40" }), h(Skeleton, { className: "h-4 w-56" }), h(Skeleton, { className: "h-4 w-52" }), h(Skeleton, { className: "h-4 w-44" })), h(Skeleton, { className: "h-px w-full" }), h("div", { class: "flex items-center justify-between" }, h("div", { class: "flex items-center space-x-2" }, h(Skeleton, { className: "h-6 w-64" })), h(Skeleton, { className: "h-4 w-40" })), h("div", { class: "space-y-2" }, h(Skeleton, { className: "h-4 w-32" }), h(Skeleton, { className: "h-4 w-48" }), h(Skeleton, { className: "h-4 w-64" }), h(Skeleton, { className: "h-4 w-72" }), h(Skeleton, { className: "h-4 w-80" })), h(Skeleton, { className: "h-8 w-24 text-right text-green-500" }), h("div", { class: "space-y-2" }, h(Skeleton, { className: "h-4 w-32" }), h(Skeleton, { className: "h-4 w-48" }), h(Skeleton, { className: "h-4 w-64" }), h(Skeleton, { className: "h-4 w-72" }), h(Skeleton, { className: "h-4 w-80" })), h(Skeleton, { className: "h-8 w-24 text-right text-green-500" }), h("div", { class: "flex items-center space-x-2" }, h(Skeleton, { className: "h-6 w-48" })), h(Skeleton, { className: "h-8 w-24 text-right text-green-500" })));
}
//# sourceMappingURL=HomeSkeleton.js.map
