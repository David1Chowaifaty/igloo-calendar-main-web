export function facebookInit() {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
    window.fbAsyncInit = () => {
        FB.init({
            appId: 'your-app-id',
            cookie: true,
            xfbml: true,
            version: 'v9.0',
        });
    };
}
//# sourceMappingURL=auth.service.js.map