async function getToken() {
    try {
        if (!document.getElementById("jwt-decode-cdn")) {
            console.log("Injecting jwt-decode script...");
            const script = document.createElement('script');
            script.src = "jwt-decode.js";
            script.id = "jwt-decode-cdn";

            await new Promise((resolve, reject) => {
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });

            console.log("jwt-decode script loaded.");
        }

        // Load token from localStorage or fallback
        let token = localStorage.getItem("token");

        let isExpired = true;

        if (token) {
            const decoded = jwt_decode(token);
            isExpired = Date.now() > decoded.exp * 1000;
            console.log("Token expiration:", new Date(decoded.exp * 1000), "Now:", new Date(), "Expired?", isExpired);
        }

        if (!token || isExpired) {
            console.log("Token missing or expired. Fetching new one...");
            const newToken = await authenticate("A35", "H@mburger9");

            if (newToken) {
                localStorage.setItem("token", newToken);
                token = newToken;
                console.log("New token saved to localStorage.");
            } else {
                console.error("Failed to get new token.");
            }
        }

        return token;
    } catch (error) {
        console.error("getToken error:", error);
    }
}

function getId() {
    return "42"
}

const authenticate = async (username = "A35", password = "12345") => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("x-ir-bypass", "123");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "Cookie_1=value");

        const raw = JSON.stringify({
            "username": username,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const res = await fetch('https://gateway.igloorooms.com/IR/Authenticate', requestOptions);
        const data = await res.json();
        return data.My_Result;
    } catch (error) {
        console.error(error);
        return null;
    }
};

function injectBootstrapResources() {
    let resources = [
        {
            tag: 'link',
            attributes: {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css',
                integrity: 'sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N',
                crossorigin: 'anonymous'
            }
        },
        {
            tag: 'script',
            attributes: {
                src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
                integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
                crossorigin: 'anonymous'
            }
        },
        {
            tag: 'script',
            attributes: {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js',
                integrity: 'sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct',
                crossorigin: 'anonymous'
            }
        }
    ];


    function createAndAppendElement(tag, attributes) {
        const element = document.createElement(tag);
        for (let attr in attributes) {
            element.setAttribute(attr, attributes[attr]);
        }
        document.head.appendChild(element);
    }
    resources.forEach(resource => {
        const existingElement = Array.from(document.head.children).find(child => {
            return child.tagName.toLowerCase() === resource.tag &&
                Object.entries(resource.attributes).every(([key, value]) => child.getAttribute(key) === value);
        });

        if (!existingElement) {
            createAndAppendElement(resource.tag, resource.attributes);
        }
    });
}

