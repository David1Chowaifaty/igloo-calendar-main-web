import { h } from "@stencil/core";
const IntegrationIcons = {
    '001': (h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { "clip-path": "url(#clip0_1256_132001)" }, h("path", { d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", null, h("clipPath", { id: "clip0_1256_132001" }, h("rect", { width: "24", height: "24", fill: "white" }))))),
    'google': (h("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { "clip-path": "url(#clip0_6707_5591)" }, h("path", { d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", null, h("clipPath", { id: "clip0_6707_5591" }, h("rect", { width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))),
    '002': (h("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("rect", { x: "2", y: "2", width: "28", height: "28", rx: "6", fill: "url(#paint0_radial_1334_663)" }), h("rect", { x: "2", y: "2", width: "28", height: "28", rx: "6", fill: "url(#paint1_radial_1334_663)" }), h("rect", { x: "2", y: "2", width: "28", height: "28", rx: "6", fill: "url(#paint2_radial_1334_663)" }), h("path", { d: "M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z", fill: "white" }), h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z", fill: "white" }), h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z", fill: "white" }), h("defs", null, h("radialGradient", { id: "paint0_radial_1334_663", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(12 23) rotate(-55.3758) scale(25.5196)" }, h("stop", { "stop-color": "#B13589" }), h("stop", { offset: "0.79309", "stop-color": "#C62F94" }), h("stop", { offset: "1", "stop-color": "#8A3AC8" })), h("radialGradient", { id: "paint1_radial_1334_663", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(11 31) rotate(-65.1363) scale(22.5942)" }, h("stop", { "stop-color": "#E0E8B7" }), h("stop", { offset: "0.444662", "stop-color": "#FB8A2E" }), h("stop", { offset: "0.71474", "stop-color": "#E2425C" }), h("stop", { offset: "1", "stop-color": "#E2425C", "stop-opacity": "0" })), h("radialGradient", { id: "paint2_radial_1334_663", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)" }, h("stop", { offset: "0.156701", "stop-color": "#406ADC" }), h("stop", { offset: "0.467799", "stop-color": "#6A45BE" }), h("stop", { offset: "1", "stop-color": "#6A45BE", "stop-opacity": "0" }))))),
    '005': (h("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("ellipse", { cx: "10.5", cy: "10", rx: "8.5", ry: "8", fill: "#184AA9" }), h("circle", { cx: "22", cy: "22", r: "8", fill: "#2173F0" }), h("circle", { cx: "16", cy: "16", r: "13", fill: "url(#paint0_linear_1334_765)" }), h("path", { d: "M16.0688 9C18.1822 9 21 10 20.2955 11.3333C19.3327 13.1557 17.4777 11.3333 16.0688 11.3333C14.6598 11.3333 13.9554 12 13.9554 12.6667C13.9554 13.3333 14.3076 14 16.0688 14.6667C17.8299 15.3333 21 16.3333 21 19C21 21.6667 18.5344 23 15.3643 23C12.5245 23 10.4331 21.6667 11.1375 20.3333C11.9477 18.8 13.9554 20.6667 15.3643 20.6667C16.7732 20.6667 18.1822 20.3333 18.1822 19C18.1822 17.6667 16.0687 17.3333 14.6598 16.6667C12.8986 15.8333 11.1375 15 11.1375 12.6667C11.1375 10.3333 13.9554 9 16.0688 9Z", fill: "white" }), h("defs", null, h("linearGradient", { id: "paint0_linear_1334_765", x1: "5.88889", y1: "8.05556", x2: "25.3889", y2: "24.3056", gradientUnits: "userSpaceOnUse" }, h("stop", { "stop-color": "#297AC0" }), h("stop", { offset: "1", "stop-color": "#48B0F9" }))))),
    '003': (h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.9455 23L10.396 15.0901L3.44886 23H0.509766L9.09209 13.2311L0.509766 1H8.05571L13.286 8.45502L19.8393 1H22.7784L14.5943 10.3165L23.4914 23H15.9455ZM19.2185 20.77H17.2398L4.71811 3.23H6.6971L11.7121 10.2532L12.5793 11.4719L19.2185 20.77Z", fill: "#242E36" }))),
    '004': (h("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M2.24451 9.94111C2.37304 7.96233 3.96395 6.41157 5.94447 6.31345C8.81239 6.17136 12.9115 6 16 6C19.0885 6 23.1876 6.17136 26.0555 6.31345C28.0361 6.41157 29.627 7.96233 29.7555 9.94111C29.8786 11.8369 30 14.1697 30 16C30 17.8303 29.8786 20.1631 29.7555 22.0589C29.627 24.0377 28.0361 25.5884 26.0555 25.6866C23.1876 25.8286 19.0885 26 16 26C12.9115 26 8.81239 25.8286 5.94447 25.6866C3.96395 25.5884 2.37304 24.0377 2.24451 22.0589C2.12136 20.1631 2 17.8303 2 16C2 14.1697 2.12136 11.8369 2.24451 9.94111Z", fill: "#FC0D1B" }), h("path", { d: "M13 12V20L21 16L13 12Z", fill: "white" }))),
    '007': (h("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M16 2C8.27813 2 2 8.27812 2 16C2 23.7219 8.27813 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z", fill: "#00AF87" }), h("path", { d: "M10 17C10 16.4091 10.4545 16 11 16C11.5455 16 12 16.4091 12 17C12 17.5909 11.5909 18 11 18C10.4091 18 10 17.5455 10 17Z", fill: "white" }), h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11 14C9.36364 14 8 15.2273 8 17C8 18.6364 9.22727 20 11 20C12.7727 20 14 18.7727 14 17C14 15.2273 12.6364 14 11 14ZM11 15C9.90909 15 9 15.8182 9 17C9 18.0909 9.81818 19 11 19C12.1818 19 13 18.1818 13 17C13 15.8182 12.0909 15 11 15Z", fill: "white" }), h("path", { d: "M22 17C22 16.4091 21.5455 16 21 16C20.4545 16 20 16.4091 20 17C20 17.5909 20.4091 18 21 18C21.5909 18 22 17.5455 22 17Z", fill: "white" }), h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21 14C22.6364 14 24 15.2273 24 17C24 18.6364 22.7727 20 21 20C19.2273 20 18 18.7727 18 17C18 15.2273 19.3636 14 21 14ZM21 15C22.0909 15 23 15.8182 23 17C23 18.0909 22.1818 19 21 19C19.8182 19 19 18.1818 19 17C19 15.8182 19.9091 15 21 15Z", fill: "white" }), h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9 11.9838C10.8511 10.8127 13.4311 10 16 10C18.5689 10 21.1489 10.8127 23 11.9838L26 12L24.9345 13.986C25.5389 14.7794 26 15.9044 26 17C26 19.7578 23.65 22 20.9678 22C19.3811 22 17.9444 21.0956 17 20L16 22L15 20C14.0556 21.0956 12.6189 22 11.0322 22C8.34998 22 6 19.7578 6 17C6 15.9044 6.46109 14.7794 7.06554 13.986L6 12L9 11.9838ZM16 16.5C16.1889 13.9689 18.3989 12.0378 20.9678 12C19.57 11.3956 17.7756 11 16 11C14.2244 11 12.43 11.3956 11.0322 12C13.6011 12.0378 15.8111 13.9689 16 16.5ZM11.0322 21.0178C8.84109 21.0178 7 19.1911 7 17C7 14.8089 8.84109 12.966 11.0322 12.966C13.2233 12.966 14.9989 14.8089 14.9989 17C14.9989 19.1533 13.2233 21.0178 11.0322 21.0178ZM20.9678 21.0178C23.1589 21.0178 25 19.1911 25 17C25 14.8089 23.1589 12.966 20.9678 12.966C18.7767 12.966 17.0011 14.8089 17.0011 17C17.0011 19.1533 18.7767 21.0178 20.9678 21.0178Z", fill: "white" }))),
    '006': (h("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z", fill: "#BFC8D0" }), h("path", { d: "M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z", fill: "url(#paint0_linear_1334_774)" }), h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z", fill: "white" }), h("path", { d: "M12.5 9.50001C12.1672 8.83143 11.6565 8.89062 11.1407 8.89062C10.2188 8.89062 8.78125 9.9949 8.78125 12.0501C8.78125 13.7344 9.52345 15.5782 12.0244 18.3362C14.438 20.998 17.6094 22.3749 20.2422 22.3281C22.875 22.2812 23.4167 20.0156 23.4167 19.2504C23.4167 18.9113 23.2062 18.7421 23.0613 18.6961C22.1641 18.2656 20.5093 17.4633 20.1328 17.3125C19.7563 17.1618 19.5597 17.3657 19.4375 17.4766C19.0961 17.802 18.4193 18.7609 18.1875 18.9766C17.9558 19.1923 17.6103 19.0831 17.4665 19.0016C16.9374 18.7893 15.5029 18.1512 14.3595 17.0427C12.9453 15.6719 12.8623 15.2003 12.5959 14.7804C12.3828 14.4446 12.5392 14.2385 12.6172 14.1484C12.9219 13.7969 13.3426 13.2541 13.5313 12.9844C13.7199 12.7147 13.5702 12.3051 13.4803 12.0501C13.0938 10.9531 12.7663 10.0349 12.5 9.50001Z", fill: "white" }), h("defs", null, h("linearGradient", { id: "paint0_linear_1334_774", x1: "26.5", y1: "7", x2: "4", y2: "28", gradientUnits: "userSpaceOnUse" }, h("stop", { "stop-color": "#5BD066" }), h("stop", { offset: "1", "stop-color": "#27B43E" }))))),
};
export default IntegrationIcons;
//# sourceMappingURL=integration_icons.js.map