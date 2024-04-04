import { h } from "@stencil/core";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
export class MyComponent {
    componentDidLoad() {
        new Swiper(this.carouselEl, {
            modules: [Navigation],
            keyboard: {
                enabled: true,
            },
            grabCursor: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
                1500: {
                    slidesPerView: 5,
                },
            },
            navigation: {
                enabled: true,
                nextEl: this.nextEl,
                prevEl: this.prevEl,
            },
            loop: false,
        });
    }
    checkImageOrientation(imageUrl) {
        let image = new Image();
        image.onload = function () {
            if (image.naturalWidth > image.naturalHeight) {
                console.log('The image is horizontal.');
            }
            else if (image.naturalWidth < image.naturalHeight) {
                console.log('The image is vertical.');
            }
            else {
                console.log('The image is square.');
            }
        };
        // Handle the error case
        image.onerror = function () {
            console.log('There was an error loading the image.');
        };
        // Set the image source to the provided URL
        image.src = imageUrl;
    }
    componentWillLoad() {
        this.checkImageOrientation('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800');
    }
    render() {
        const sliders = [
            [
                {
                    image_uri: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Forest Pathway',
                    id: '1234567',
                    alt: 'A serene forest pathway surrounded by green trees',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Modern Workstation',
                    id: '2345678',
                    alt: 'A modern computer workstation setup with dual monitors',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'City Skyline',
                    id: '3456789',
                    alt: 'An evening city skyline showing skyscrapers under a twilight sky',
                },
            ],
            [
                {
                    image_uri: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Forest Pathway',
                    id: '1234567',
                    alt: 'A serene forest pathway surrounded by green trees',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Modern Workstation',
                    id: '2345678',
                    alt: 'A modern computer workstation setup with dual monitors',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'City Skyline',
                    id: '3456789',
                    alt: 'An evening city skyline showing skyscrapers under a twilight sky',
                },
            ],
            [
                {
                    image_uri: 'https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Forest Pathway',
                    id: '1234567',
                    alt: 'A serene forest pathway surrounded by green trees',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Modern Workstation',
                    id: '2345678',
                    alt: 'A modern computer workstation setup with dual monitors',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'City Skyline',
                    id: '3456789',
                    alt: 'An evening city skyline showing skyscrapers under a twilight sky',
                },
            ],
            [
                {
                    image_uri: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Forest Pathway',
                    id: '1234567',
                    alt: 'A serene forest pathway surrounded by green trees',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Modern Workstation',
                    id: '2345678',
                    alt: 'A modern computer workstation setup with dual monitors',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'City Skyline',
                    id: '3456789',
                    alt: 'An evening city skyline showing skyscrapers under a twilight sky',
                },
            ],
            [
                {
                    image_uri: 'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Forest Pathway',
                    id: '1234567',
                    alt: 'A serene forest pathway surrounded by green trees',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Modern Workstation',
                    id: '2345678',
                    alt: 'A modern computer workstation setup with dual monitors',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'City Skyline',
                    id: '3456789',
                    alt: 'An evening city skyline showing skyscrapers under a twilight sky',
                },
            ],
            [
                {
                    image_uri: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Forest Pathway',
                    id: '1234567',
                    alt: 'A serene forest pathway surrounded by green trees',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'Modern Workstation',
                    id: '2345678',
                    alt: 'A modern computer workstation setup with dual monitors',
                },
                {
                    image_uri: 'https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=800',
                    title: 'City Skyline',
                    id: '3456789',
                    alt: 'An evening city skyline showing skyscrapers under a twilight sky',
                },
            ],
        ];
        return (h("div", { key: '5a4734aeded2d58e6752d6960d9038e311539a81' }, h("div", { key: 'f425bf7bae2fd9d009120fdd003d67da7ced2e43', class: "swiper slider ", ref: el => (this.carouselEl = el) }, h("ul", { key: 'ad77ee99a31c0eea4c67c7ee94417f40fbbb3721', class: "swiper-wrapper max-w-[250px]" }, sliders.map((i, index) => (h("li", { key: index, class: "swiper-slide " }, h("div", { class: "shadow-md rounded-md mx-2" }, h("ir-carousel", { slides: i }), h("div", { class: "p-2" }, h("h4", { class: "mt-2 font-medium text-lg" }, "Nostra Hotel"), h("p", { class: "text-sm text-gray-500 mt-1" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae, consequatur enim autem esse eveniet distinctio adipisci laborum suscipit, tempore qui, omnis sed quidem earum ipsa magni ex sunt. Vel!"))))))), h("div", { key: 'edd005dfec1f8cccea6017c55d4a675a3001e516', class: "flex items-center justify-center gap-4" }, h("div", { key: '477cdb8357f207dec9505f814b4d348f300552c8', class: "swiper-button-prev main-prev", ref: el => (this.prevEl = el) }, h("svg", { key: '40e569d52601c683d2b974b1b58835daf71f7d01', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '0664451d8ceae0a671c3e91435598ed2706827c7', d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), "...", h("div", { key: 'bc3addb203a6e2e318545340333f0bf2e17faba3', class: "swiper-button-next main-next", ref: el => (this.nextEl = el) }, h("svg", { key: '0ec8fb62a307b329b75022fc31616b44b51c6283', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '8f6c1062086b37fb4b9bcaa458b881f45aa8f512', d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))))));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
}
//# sourceMappingURL=my-component.js.map
