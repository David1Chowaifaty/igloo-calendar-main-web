import { AuthService } from "../../../../../services/api/auth.service";
import { Host, h } from "@stencil/core";
export class IrQuickAuth {
    constructor() {
        this.authService = new AuthService();
    }
    componentWillLoad() {
        this.authService.initializeFacebookSignIn();
        if (!document.querySelector('.custom-google-button')) {
            this.authService.loadGoogleSignInScript(this.googleButtonWrapper);
        }
    }
    render() {
        return (h(Host, { key: 'ee56964c9cf1b42704dfd3a6cc5a0e99923df870' }, h("div", { key: '2d862cbc04a2e74ccaba57d386de07a58420eaca', class: 'quick-auth-container' }, h("div", { key: 'bd7bb5228b7915a7c8bbcbd0a632fc2b4aea68c2', class: "booking-reminder" }, h("ir-icons", { key: '4a9e91a824814da0bae6d9696541a48e920ad71e', name: "arrow_right" }), h("p", { key: '1a73f74234e9c5907e47fbc47753fc50c32e86a7', class: "auth-instruction" }, "Sign in to book faster or continue with email")), h("div", { key: 'eb0fa0a4db8260b69a767891b43038848a6f0efa', class: "social-container" }, h("ir-button", { key: '2540c2342ab2a7c6c4d30c4af59af52f64cd4d8f', variants: "outline", haveLeftIcon: true, onButtonClick: () => window.handleGoogleLogin(), label: "Continue with Google" }, h("span", { key: '4986136cc7651562398833182de3feb2a05688bc', slot: "left-icon" }, h("svg", { key: '1a4cd9822264b0cc901056ee343638ca49ca5041', width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'aeb424a32ed69f6ef59236c53a7e029484e44f49', "clip-path": "url(#clip0_6707_5591)" }, h("path", { key: '111cf1f084a487c0fbcb91b383c4eb23a32b315c', d: "M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z", fill: "#4285F4" }), h("path", { key: '2ed80120efcf6c207cb7acc8deff5ffbb4f071f3', d: "M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z", fill: "#34A853" }), h("path", { key: '263714b4ed5321f7d981eeda0791cd8cd70065e5', d: "M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z", fill: "#FBBC04" }), h("path", { key: '62724b5ff08fe6259a42b4c08a8ccb14df36a8e0', d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z", fill: "#EA4335" })), h("defs", { key: '3ccdbc5561f97a4769308f5e0ea3052cf1e81098' }, h("clipPath", { key: '50388b90c3aee5003c55118bcc6cdc49aa83c141', id: "clip0_6707_5591" }, h("rect", { key: 'b7c3e643964aa9cc77bbc317860fc43b22f459fe', width: "24", height: "24", fill: "white", transform: "translate(0.5)" }))))))))));
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
