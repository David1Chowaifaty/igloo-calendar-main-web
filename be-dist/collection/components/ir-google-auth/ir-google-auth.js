import { h } from "@stencil/core";
export class IrGoogleAuth {
    componentDidLoad() {
        this.loadGoogleSignInScript();
    }
    loadGoogleSignInScript() {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => this.initializeGoogleSignIn();
        document.head.appendChild(script);
    }
    initializeGoogleSignIn() {
        // Initialization logic here
        window.google.accounts.id.initialize({
            client_id: '1035240403483-60urt17notg4vmvjbq739p0soqup0o87.apps.googleusercontent.com',
            callback: this.handleCredentialResponse,
            auto_select: true,
            itp_support: true,
            ux_mode: true,
            context: 'popup',
        });
        window.google.accounts.id.renderButton(document.getElementById('buttonDiv'), { theme: 'outline', size: 'large' });
    }
    async handleCredentialResponse(response) {
        console.log(response);
        // const { data } = await axios.post(
        //   'https://gateway.igloorooms.com/IR/Exposed_Guest_SignIn?Ticket=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTY0NzAzMjYsIkNMQUlNLTAxIjoiZE1TL0hDV21NdW89IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiQUVxVnRCMm1kWTg9IiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThITHBnTWQvOWV5aSJ9.9hKPGjcvmTuRMAOE8BmXUY1NT3DDqSYDKgEokUV2N6U',
        //   { google_token: response.credential },
        // );
        // console.log(data);
    }
    signOut() {
        window.google.accounts.id.disableAutoSelect();
        window.google.accounts.id.revoke(this.handleCredentialResponse, () => {
            console.log('User signed out.');
        });
    }
    render() {
        return (h("div", { key: '1b5011a1af4e8d29881d5bdda971e12128677e78' }, h("p", { key: 'bc8a56467450945af59582392d1fb24784f538eb' }, "Google auth"), h("div", { key: '2f0d3404a609723ad4743c1e65ecfafcb41d0790', id: "buttonDiv" })));
    }
    static get is() { return "ir-google-auth"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-google-auth.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-google-auth.css"]
        };
    }
}
//# sourceMappingURL=ir-google-auth.js.map