import { h } from "@stencil/core";
// import { Skeleton } from '../ui/skeleton';
import { cn } from "../../utils/utils";
import { Skeleton } from "../ui/skeleton";
export class IrHomeLoader {
    constructor() {
        this.Skeleton = (className) => {
            return h("div", { class: cn('block animate-pulse rounded-md bg-gray-200', className) });
        };
    }
    render() {
        return (h("div", { key: '7df6c1e051238d38f1245c2b94ac8d332fad4d97', class: "mx-auto h-full  max-w-6xl space-y-4 p-4 lg:space-y-10 lg:p-6" }, h("div", { key: 'f192add84cedba5c52155cf994866b19dffc4998', class: "flex items-center justify-between" }, this.Skeleton('h-8 w-48'), h(Skeleton, { key: '35a8c96db2ac039684dfffee39232be25c676591', className: "h-8 w-24" }), " "), h("div", { key: '702193e11f605c79bc643cb9f3629baacaabb85d', class: "grid gap-2 md:grid-cols-3" }, h(Skeleton, { key: '8e65721ae85c9799a47f4f77cb0d2b109ee19d2a', className: "h-60 w-full md:col-span-2" }), " ", h("div", { key: 'e3cc365b3f9fd46c2d7691020da10860e575b037', class: " hidden h-60 gap-2 md:grid lg:grid-cols-2" }, h(Skeleton, { key: '13aa0d8fdf14f2df290b8d744cd0fec718b30e9b', className: "h-full w-full" }), h(Skeleton, { key: 'f3af4187c929e772ac32df19731233cdee12d3d5', className: "h-full w-full" }), h(Skeleton, { key: 'f4b7494fd525b2dd1ffcf464db90393ae985eacf', className: "hidden h-full w-full lg:block" }), h(Skeleton, { key: '26578d945eb4fc9d9d0876276e71e175b8232f97', className: "hidden h-full w-full lg:block" }))), h("div", { key: 'd3cbf4f18ee3c929809c2c503fb6a169ba0f8643', class: "flex space-x-2" }, h(Skeleton, { key: '1f81b9eedab87deb6d82a37f2db5044e35426bee', className: "h-28 w-full md:h-20" }), " "), h("div", { key: 'a015456bd39aab0a265631686c801fd56068306e', class: "space-y-4" }, [...new Array(6)].map((_, idx) => (h("div", { key: idx, class: "flex space-x-4" }, h(Skeleton, { className: "aspect-[16/9] h-44" }), " ", h("div", { class: "flex-1 space-y-2" }, h(Skeleton, { className: "h-6 w-3/4" }), " ", h(Skeleton, { className: "h-4 w-full" }), " ", h(Skeleton, { className: "h-4 w-1/2" }), " "))))), h("div", { key: '63d43274ac5b51cf86084e13ed72b54232c18999', class: "space-y-4" }, h("div", { key: '1dedeb1c22674cd26e73cc90c53d99998476ef0a', class: "flex space-x-4" }, h("div", { key: 'c126288e3cfcc803a9ce1639d51081617904286f', class: "flex-1 space-y-2" }, h(Skeleton, { key: '225e15be2f231e2f25a0322f316c5400188592f4', className: "h-6 w-3/4" }), h(Skeleton, { key: 'cc5dbb80048a6e32fecd061561c5650bd8853184', className: "h-4 w-full" }), h(Skeleton, { key: '1feb409b567cb99d500c46b02ca01142eb5ae893', className: "h-4 w-1/2" }), h(Skeleton, { key: '22aa33776dfc1840507f46140b52f38e30a50afc', className: "h-4 w-3/5" }), [...new Array(5)].map((_, idx) => (h("div", { key: idx }, h(Skeleton, { className: "h-4 w-3/5" })))))))));
    }
    static get is() { return "ir-home-loader"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-home-loader.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-home-loader.css"]
        };
    }
}
//# sourceMappingURL=ir-home-loader.js.map
