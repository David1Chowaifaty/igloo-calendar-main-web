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
        return (h("div", { key: 'c5ecf6234b4f1758387ef75ce1df8a0723f4fc0a', class: "mx-auto h-full  max-w-6xl space-y-4 p-4 lg:space-y-10 lg:p-6" }, h("div", { key: '675a5f895a2d096ab6fbb5230b190980271e3071', class: "flex items-center justify-between" }, this.Skeleton('h-8 w-48'), h(Skeleton, { key: 'd78f601ad59d82f535ab258828b6970a8a7cf53a', className: "h-8 w-24" }), " "), h("div", { key: 'fae8c2b5e7b7e8c074e2718bf53b06ab6396fe70', class: "grid gap-2 md:grid-cols-3" }, h(Skeleton, { key: '314696247e1b5ed33647c290c1b1c5ad13c3bad2', className: "h-60 w-full md:col-span-2" }), " ", h("div", { key: 'd93a2a57612faa84ffee6d7c31133665802ef0d4', class: " hidden h-60 gap-2 md:grid lg:grid-cols-2" }, h(Skeleton, { key: '37a02c988610ab85aa0a2c9b2abb3b3b7ab808ec', className: "h-full w-full" }), h(Skeleton, { key: '3db406fcf848995448bc516581e96f39c5e1eeda', className: "h-full w-full" }), h(Skeleton, { key: '21de1330533fc967c5405a7365e2bb9e68dfa01d', className: "hidden h-full w-full lg:block" }), h(Skeleton, { key: '5981f554a30c420bff4aaa0fed68d620b1746be7', className: "hidden h-full w-full lg:block" }))), h("div", { key: 'c51d2846f7c087b2a29e9aa8d030d9253799be5a', class: "flex space-x-2" }, h(Skeleton, { key: '257d5b703d433eb070a665b4e1da3012c1b1b038', className: "h-28 w-full md:h-20" }), " "), h("div", { key: 'd65773715df99dc72f3ba63e30025e5602ca506c', class: "space-y-4" }, [...new Array(6)].map((_, idx) => (h("div", { key: idx, class: "flex space-x-4" }, h(Skeleton, { className: "aspect-[16/9] h-44" }), " ", h("div", { class: "flex-1 space-y-2" }, h(Skeleton, { className: "h-6 w-3/4" }), " ", h(Skeleton, { className: "h-4 w-full" }), " ", h(Skeleton, { className: "h-4 w-1/2" }), " "))))), h("div", { key: '99b1d9f01a59f049219c02e8381f6fb9659deeb8', class: "space-y-4" }, h("div", { key: '942e8d1352a55ae38c521559a5d4eec6935bd0cf', class: "flex space-x-4" }, h("div", { key: 'd42731ea3c4329e487cb618c641316c4ca909dfc', class: "flex-1 space-y-2" }, h(Skeleton, { key: '8c4e54b4ba160412a2c3f90acc2cd33de04fb884', className: "h-6 w-3/4" }), h(Skeleton, { key: '86ad82950c8af50ab1d64cb5fa85ccff8d1dad07', className: "h-4 w-full" }), h(Skeleton, { key: '264a236ef76bf90e7925d7c0c027bcbd2af71f80', className: "h-4 w-1/2" }), h(Skeleton, { key: '534371644716e8f71af04deacd5d113b7119f4c9', className: "h-4 w-3/5" }), [...new Array(5)].map((_, idx) => (h("div", { key: idx }, h(Skeleton, { className: "h-4 w-3/5" })))))))));
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
