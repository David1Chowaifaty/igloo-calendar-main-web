export class Colors {
    hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        return { r, g, b };
    }
    rgbToHsl(rgb) {
        let r = parseInt(rgb.r);
        let g = parseInt(rgb.g);
        let b = parseInt(rgb.b);
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0;
        if (delta == 0)
            h = 0;
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            h = (b - r) / delta + 2;
        else
            h = (r - g) / delta + 4;
        h = Math.round(h * 60);
        if (h < 0)
            h += 360;
        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        return { h: Math.round(h), s: Math.round(s), l: Math.round(l) };
    }
    hexToHSL(hex) {
        const rgb = this.hexToRgb(hex);
        return this.rgbToHsl(rgb);
    }
    generateColorShades(baseHex) {
        const { h, s, l: baseL } = this.hexToHSL(baseHex);
        let shades = [];
        for (let i = -3; i <= 6; i++) {
            let l = baseL + i * 4;
            shades.push({ h, s, l: Math.min(Math.max(l, 0), 100) });
        }
        return shades;
    }
    initTheme(property) {
        let base_theme_color = '#e93e57';
        let radius = null;
        if (property.space_theme) {
            base_theme_color = property.space_theme.button_bg_color;
            radius = property.space_theme.button_border_radius;
        }
        const root = document.documentElement;
        const shades = this.generateColorShades(base_theme_color);
        let shade_number = 900;
        shades.forEach((shade, index) => {
            root.style.setProperty(`--brand-${shade_number}`, `${shade.h}, ${shade.s}%, ${shade.l}%`);
            if (index === 9) {
                shade_number = 25;
            }
            else if (index === 8) {
                shade_number = 50;
            }
            else {
                shade_number = shade_number - 100;
            }
        });
        if (!radius) {
            return;
        }
        root.style.setProperty('--radius', radius + 'px');
    }
}
//# sourceMappingURL=colors.service.js.map
