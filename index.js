function getToken() {
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjYwNTUxMjcsIkNMQUlNLTAxIjoicktLMi9DY1dQQnM9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiQUVxVnRCMm1kWTg9IiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThFYVVYM0JOQXR3MyIsIkNMQUlNLTA2IjoiQUVxVnRCMm1kWTg9In0.wbumhILckvq3YpbXdMGaBK42xHxWH_FsvMTd8yzOIS4"
}
function getId() {
    return "42"
}

const links = [
    {
        href: "index.html", name: "Housekeeping", current: false, subroutes: [
            { href: "tasks.html", name: "Housekeeping tasks", current: false, subroutes: null },
        ]
    },
    { href: "front-desk.html", name: "Front desk", current: false, subroutes: null },
    { href: "property-payment.html", name: "Payment Option", current: false, subroutes: null },
    { href: "booking-details.html", name: "Booking details", current: false, subroutes: null },
    { href: "booking-listing.html", name: "Booking listing", current: false, subroutes: null },
    { href: "channel.html", name: "Channel", current: false, subroutes: null },
    {
        href: "be-demo.html", name: "BE", current: false, subroutes: [
            { href: "be-casa-mespilea.html", name: "Casa Mespilea", current: false, subroutes: null },
            { href: "be-napa.html", name: "Napa City Apartments", current: false, subroutes: null },
            { href: "be-regency-palace.html", name: "Regency Palace Hotel", current: false, subroutes: null },
            { href: "be-theo.html", name: "Theo Sunset Bay Hotel", current: false, subroutes: null },
            { href: "be-demo-injected.html", name: "Demo injected", current: false, subroutes: null },
        ]
    },
    { href: "booking-widget.html", name: "BE Widget", current: false, subroutes: null },
];
function injectBootstrapResources() {
    const resources = [
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

injectBootstrapResources();

function renderNavbar(active_link) {
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'mr-auto');

    links.forEach(link => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        if (link.href === active_link) {
            li.classList.add('active');
        }

        if (link.subroutes) {
            // Create dropdown menu if subroutes exist
            li.classList.add('nav-item', 'dropdown');

            const a = document.createElement('a');
            a.classList.add('nav-link', 'dropdown-toggle');
            a.href = '#';
            a.role = 'button';
            a.dataset.toggle = 'dropdown';
            a.setAttribute('aria-expanded', 'false');
            a.textContent = link.name;

            const dropdownMenu = document.createElement('div');
            dropdownMenu.classList.add('dropdown-menu');

            link.subroutes.forEach(subroute => {
                const dropdownItem = document.createElement('a');
                dropdownItem.classList.add('dropdown-item');
                dropdownItem.href = subroute.href;
                dropdownItem.textContent = subroute.name;

                dropdownMenu.appendChild(dropdownItem);
            });

            li.appendChild(a);
            li.appendChild(dropdownMenu);
        } else {
            // Regular link
            const a = document.createElement('a');
            a.classList.add('nav-link');
            a.href = link.href;
            a.textContent = link.name;
            if (link.current) {
                const span = document.createElement('span');
                span.classList.add('sr-only');
                span.textContent = "(current)";
                a.appendChild(span);
            }

            li.appendChild(a);
        }

        ul.appendChild(li);
    });
    document.getElementById('navbarSupportedContent').appendChild(ul);
}
