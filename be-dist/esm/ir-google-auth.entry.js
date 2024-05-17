import { r as registerInstance, h } from './index-21632897.js';

const irGoogleAuthCss = "*.sc-ir-google-auth,.sc-ir-google-auth:after,.sc-ir-google-auth:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-google-auth:after,.sc-ir-google-auth:before{--tw-content:\"\"}.sc-ir-google-auth-h,html.sc-ir-google-auth{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-google-auth{line-height:inherit;margin:0}hr.sc-ir-google-auth{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-google-auth:where([title]){text-decoration:underline dotted}h1.sc-ir-google-auth,h2.sc-ir-google-auth,h3.sc-ir-google-auth,h4.sc-ir-google-auth,h5.sc-ir-google-auth,h6.sc-ir-google-auth{font-size:inherit;font-weight:inherit}a.sc-ir-google-auth{color:inherit;text-decoration:inherit}b.sc-ir-google-auth,strong.sc-ir-google-auth{font-weight:bolder}code.sc-ir-google-auth,kbd.sc-ir-google-auth,pre.sc-ir-google-auth,samp.sc-ir-google-auth{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-google-auth{font-size:80%}sub.sc-ir-google-auth,sup.sc-ir-google-auth{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-google-auth{bottom:-.25em}sup.sc-ir-google-auth{top:-.5em}table.sc-ir-google-auth{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-google-auth,input.sc-ir-google-auth,optgroup.sc-ir-google-auth,select.sc-ir-google-auth,textarea.sc-ir-google-auth{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-google-auth,select.sc-ir-google-auth{text-transform:none}[type=button].sc-ir-google-auth,[type=reset].sc-ir-google-auth,[type=submit].sc-ir-google-auth,button.sc-ir-google-auth{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-google-auth:-moz-focusring{outline:auto}.sc-ir-google-auth:-moz-ui-invalid{box-shadow:none}progress.sc-ir-google-auth{vertical-align:baseline}.sc-ir-google-auth::-webkit-inner-spin-button,.sc-ir-google-auth::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-google-auth{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-google-auth::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-google-auth::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-google-auth{display:list-item}blockquote.sc-ir-google-auth,dd.sc-ir-google-auth,dl.sc-ir-google-auth,fieldset.sc-ir-google-auth,figure.sc-ir-google-auth,h1.sc-ir-google-auth,h2.sc-ir-google-auth,h3.sc-ir-google-auth,h4.sc-ir-google-auth,h5.sc-ir-google-auth,h6.sc-ir-google-auth,hr.sc-ir-google-auth,p.sc-ir-google-auth,pre.sc-ir-google-auth{margin:0}fieldset.sc-ir-google-auth,legend.sc-ir-google-auth{padding:0}menu.sc-ir-google-auth,ol.sc-ir-google-auth,ul.sc-ir-google-auth{list-style:none;margin:0;padding:0}dialog.sc-ir-google-auth{padding:0}textarea.sc-ir-google-auth{resize:vertical}input.sc-ir-google-auth::placeholder,textarea.sc-ir-google-auth::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-google-auth,button.sc-ir-google-auth{cursor:pointer}.sc-ir-google-auth:disabled{cursor:default}audio.sc-ir-google-auth,canvas.sc-ir-google-auth,embed.sc-ir-google-auth,iframe.sc-ir-google-auth,img.sc-ir-google-auth,object.sc-ir-google-auth,svg.sc-ir-google-auth,video.sc-ir-google-auth{display:block;vertical-align:middle}img.sc-ir-google-auth,video.sc-ir-google-auth{height:auto;max-width:100%}[hidden].sc-ir-google-auth{display:none}.sc-ir-google-auth::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-google-auth{display:block}.sc-ir-google-auth-h{display:block}.static.sc-ir-google-auth{position:static}.outline.sc-ir-google-auth{outline-style:solid}";
const IrGoogleAuthStyle0 = irGoogleAuthCss;

const IrGoogleAuth = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h("div", { key: 'a91ff84e649b2896f4327caa25bfcc8ec01f4caf' }, h("p", { key: '9cf27bf504bc28e81633dc82df5da2fbba2d35ab' }, "Google auth"), h("div", { key: 'e7455cba97f389f932a73c3e55a0e393a8bba961', id: "buttonDiv" })));
    }
};
IrGoogleAuth.style = IrGoogleAuthStyle0;

export { IrGoogleAuth as ir_google_auth };

//# sourceMappingURL=ir-google-auth.entry.js.map