import { AuthService } from "../../../../../services/api/auth.service";
import app_store from "../../../../../stores/app.store";
import { Host, h } from "@stencil/core";
export class IrQuickAuth {
    constructor() {
        this.authService = new AuthService();
    }
    componentWillLoad() {
        this.authService.setToken(app_store.app_data.token);
        this.authService.initializeFacebookSignIn();
        if (!document.querySelector('.custom-google-button')) {
            this.authService.loadGoogleSignInScript(this.googleButtonWrapper);
        }
    }
    render() {
        return (h(Host, { key: '3af4563b6260fe225d4d78e2c19e9818c91d58ab' }, h("div", { key: 'f2554d566cb4782e81d4a64565f37876329b8eb6', class: 'quick-auth-container' }, h("div", { key: '6c200205075bafabf98940b41946e746ea4996af', class: "booking-reminder" }, h("ir-icons", { key: '9cd604c99d582bae0cce0159d9dd9f4543f4d206', name: "arrow_right" }), h("p", { key: '42813fde26a3a387f218899302fcdd04f3eab530', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: '813133e6dd72f9c35b8414ea962b99d3e4e27b26', class: "social-container" }, h("ir-button", { key: 'bead9aea9937879084678a7ebe1a3e54d82543e6', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '7596f6085eb2711c5d4b334260212f7728009b8e', slot: "left-icon" }, h("svg", { key: '915c046c084c025a90bacbd8b9639a480bf068ee', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '9e255678ee8437c27e162f6cadeb60386b840d02', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '26f25572caa7ecbb7f15f13aea66a1afc8d00367', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '36576511aa5ff805f439a623b5560f5996fa79c6', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: 'cd1f1cdcff19c11105233f038582fd3a7bee6421', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '0a20b94b56f812a44d7cf3a7bc5a7f7bf149b9da', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '8d19f5ed093c180498758750be61a2761783039b' }, h("clipPath", { key: '06c1bdacb009f9bdc638547e7ef4ca50788b8c42', id: "clip0_6707_5591" }, h("rect", { key: '70a0e9518d2343140cb7d7675fee27cffcafb2b1', width: "24", height: "24", fill: "white", transform: "translate(0.5)" })))))), h("ir-button", { key: 'c087d5eba6a41a945336570b236bebc4f1770519', variants: "outline", haveLeftIcon: true, label: "Continue with Facebook" }, h("svg", { key: '7738cd5e9e15952708cf5d2e11ce2166b49e2d90', slot: "left-icon", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'c828084cb0fe707ce06a0e8bc9b8216c6380e703', "clip-path": "url(#clip0_1256_132001)" }, h("path", { key: 'ac9433eb1356fbc03f72dc2768da0d3f1f9b0079', d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z", fill: "#1877F2" }), h("path", { key: '020d9c3a1f11ef83fd6cb82ca8447a25d1a1ec46', d: "M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z", fill: "white" })), h("defs", { key: '84995d30e5b9e578f2375da689216618880a64d4' }, h("clipPath", { key: '764da73d6ec5317cd57fe42a5d09773e097da252', id: "clip0_1256_132001" }, h("rect", { key: '3690e139920d1ed376b46bc145707c35f0367d77', width: "24", height: "24", fill: "white" })))))))));
    }
    static get is() { return "ir-quick-auth"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-quick-auth.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-quick-auth.css"]
        };
    }
}
//# sourceMappingURL=ir-quick-auth.js.map
