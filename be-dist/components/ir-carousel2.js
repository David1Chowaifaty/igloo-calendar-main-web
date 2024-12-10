import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { m as makeElementsArray, e as elementOuterSize, a as elementIndex, c as createElementIfNotDefined, b as elementParents, S as Swiper, N as Navigation } from './navigation.js';
import { o as onAppDataChange } from './app.store.js';

function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}

function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.filter(subEl => {
          if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}

const irCarouselCss = "*.sc-ir-carousel,.sc-ir-carousel:after,.sc-ir-carousel:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-carousel:after,.sc-ir-carousel:before{--tw-content:\"\"}.sc-ir-carousel-h,html.sc-ir-carousel{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-carousel{line-height:inherit;margin:0}hr.sc-ir-carousel{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-carousel:where([title]){text-decoration:underline dotted}h1.sc-ir-carousel,h2.sc-ir-carousel,h3.sc-ir-carousel,h4.sc-ir-carousel,h5.sc-ir-carousel,h6.sc-ir-carousel{font-size:inherit;font-weight:inherit}a.sc-ir-carousel{color:inherit;text-decoration:inherit}b.sc-ir-carousel,strong.sc-ir-carousel{font-weight:bolder}code.sc-ir-carousel,kbd.sc-ir-carousel,pre.sc-ir-carousel,samp.sc-ir-carousel{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-carousel{font-size:80%}sub.sc-ir-carousel,sup.sc-ir-carousel{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-carousel{bottom:-.25em}sup.sc-ir-carousel{top:-.5em}table.sc-ir-carousel{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-carousel,input.sc-ir-carousel,optgroup.sc-ir-carousel,select.sc-ir-carousel,textarea.sc-ir-carousel{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-carousel,select.sc-ir-carousel{text-transform:none}button.sc-ir-carousel,input.sc-ir-carousel:where([type=button]),input.sc-ir-carousel:where([type=reset]),input.sc-ir-carousel:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-carousel:-moz-focusring{outline:auto}.sc-ir-carousel:-moz-ui-invalid{box-shadow:none}progress.sc-ir-carousel{vertical-align:baseline}.sc-ir-carousel::-webkit-inner-spin-button,.sc-ir-carousel::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-carousel{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-carousel::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-carousel::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-carousel{display:list-item}blockquote.sc-ir-carousel,dd.sc-ir-carousel,dl.sc-ir-carousel,fieldset.sc-ir-carousel,figure.sc-ir-carousel,h1.sc-ir-carousel,h2.sc-ir-carousel,h3.sc-ir-carousel,h4.sc-ir-carousel,h5.sc-ir-carousel,h6.sc-ir-carousel,hr.sc-ir-carousel,p.sc-ir-carousel,pre.sc-ir-carousel{margin:0}fieldset.sc-ir-carousel,legend.sc-ir-carousel{padding:0}menu.sc-ir-carousel,ol.sc-ir-carousel,ul.sc-ir-carousel{list-style:none;margin:0;padding:0}dialog.sc-ir-carousel{padding:0}textarea.sc-ir-carousel{resize:vertical}input.sc-ir-carousel::placeholder,textarea.sc-ir-carousel::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-carousel,button.sc-ir-carousel{cursor:pointer}.sc-ir-carousel:disabled{cursor:default}audio.sc-ir-carousel,canvas.sc-ir-carousel,embed.sc-ir-carousel,iframe.sc-ir-carousel,img.sc-ir-carousel,object.sc-ir-carousel,svg.sc-ir-carousel,video.sc-ir-carousel{display:block;vertical-align:middle}img.sc-ir-carousel,video.sc-ir-carousel{height:auto;max-width:100%}[hidden].sc-ir-carousel{display:none}.sc-ir-carousel::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.absolute.sc-ir-carousel{position:absolute}.relative.sc-ir-carousel{position:relative}.block.sc-ir-carousel{display:block}.flex.sc-ir-carousel{display:flex}.hidden.sc-ir-carousel{display:none}.transform.sc-ir-carousel{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.blur.sc-ir-carousel{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-filter.sc-ir-carousel{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition.sc-ir-carousel{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}@font-face{font-family:swiper-icons;font-style:normal;font-weight:400;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\")}.sc-ir-carousel:root{--swiper-theme-color:#007aff;--swiper-navigation-size:44px}.sc-ir-carousel-h{--ir-carousel-opacity:0;--swiper-theme-color:#fff;display:block;height:100%;margin-left:auto;margin-right:auto;position:relative;width:100%;z-index:1}.swiper.sc-ir-carousel{border-radius:min(var(--radius,.5rem),1rem);display:block;height:100%;list-style:none;margin:0;overflow:hidden;padding:0;position:relative;width:100%;z-index:1}.swiper-vertical.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel{flex-direction:column}.swiper-wrapper.sc-ir-carousel{box-sizing:content-box;display:flex;height:100%;position:relative;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);width:100%;z-index:1}.swiper-android.sc-ir-carousel .swiper-slide.sc-ir-carousel,.swiper-ios.sc-ir-carousel .swiper-slide.sc-ir-carousel,.swiper-wrapper.sc-ir-carousel{transform:translateZ(0)}.swiper-horizontal.sc-ir-carousel{touch-action:pan-y}.swiper-vertical.sc-ir-carousel{touch-action:pan-x}.swiper-slide.sc-ir-carousel{display:block;flex-shrink:0;height:100%;margin:0!important;padding:0!important;position:relative;transition-property:transform;transition:transform .3s ease-in-out;width:100%}.swiper-slide-invisible-blank.sc-ir-carousel{visibility:hidden}.swiper-autoheight.sc-ir-carousel,.swiper-autoheight.sc-ir-carousel .swiper-slide.sc-ir-carousel{height:auto}.swiper-autoheight.sc-ir-carousel .swiper-wrapper.sc-ir-carousel{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden.sc-ir-carousel .swiper-slide.sc-ir-carousel{backface-visibility:hidden;transform:translateZ(0)}.swiper-3d.swiper-css-mode.sc-ir-carousel .swiper-wrapper.sc-ir-carousel{perspective:1200px}.swiper-3d.sc-ir-carousel .swiper-wrapper.sc-ir-carousel{transform-style:preserve-3d}.swiper-3d.sc-ir-carousel{perspective:1200px}.swiper-3d.sc-ir-carousel .swiper-cube-shadow.sc-ir-carousel,.swiper-3d.sc-ir-carousel .swiper-slide.sc-ir-carousel{transform-style:preserve-3d}.swiper-css-mode.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel{-ms-overflow-style:none;overflow:auto;scrollbar-width:none}.swiper-css-mode.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel::-webkit-scrollbar{display:none}.swiper-css-mode.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel>.swiper-slide.sc-ir-carousel{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel>.swiper-slide.sc-ir-carousel{scroll-snap-align:none}.swiper-css-mode.swiper-centered.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel:before{content:\"\";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel>.swiper-slide.sc-ir-carousel{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel>.swiper-slide.sc-ir-carousel:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel>.swiper-slide.sc-ir-carousel:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel:before{height:var(--swiper-centered-offset-after);min-width:1px;width:100%}.swiper-3d.sc-ir-carousel .swiper-slide-shadow.sc-ir-carousel,.swiper-3d.sc-ir-carousel .swiper-slide-shadow-bottom.sc-ir-carousel,.swiper-3d.sc-ir-carousel .swiper-slide-shadow-left.sc-ir-carousel,.swiper-3d.sc-ir-carousel .swiper-slide-shadow-right.sc-ir-carousel,.swiper-3d.sc-ir-carousel .swiper-slide-shadow-top.sc-ir-carousel{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-3d.sc-ir-carousel .swiper-slide-shadow.sc-ir-carousel{background:rgba(0,0,0,.15)}.swiper-3d.sc-ir-carousel .swiper-slide-shadow-left.sc-ir-carousel{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-3d.sc-ir-carousel .swiper-slide-shadow-right.sc-ir-carousel{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-3d.sc-ir-carousel .swiper-slide-shadow-top.sc-ir-carousel{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-3d.sc-ir-carousel .swiper-slide-shadow-bottom.sc-ir-carousel{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-lazy-preloader.sc-ir-carousel{border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent;box-sizing:border-box;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10}.swiper-watch-progress.sc-ir-carousel .swiper-slide-visible.sc-ir-carousel .swiper-lazy-preloader.sc-ir-carousel,.swiper.sc-ir-carousel:not(.swiper-watch-progress) .swiper-lazy-preloader.sc-ir-carousel{animation:swiper-preloader-spin 1s linear infinite}.swiper-lazy-preloader-white.sc-ir-carousel{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black.sc-ir-carousel{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.swiper-virtual.sc-ir-carousel .swiper-slide.sc-ir-carousel{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode.sc-ir-carousel .swiper-wrapper.sc-ir-carousel:after{content:\"\";left:0;pointer-events:none;position:absolute;top:0}.swiper-virtual.swiper-css-mode.swiper-horizontal.sc-ir-carousel .swiper-wrapper.sc-ir-carousel:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical.sc-ir-carousel .swiper-wrapper.sc-ir-carousel:after{height:var(--swiper-virtual-size);width:1px}.swiper-button-next.sc-ir-carousel,.swiper-button-prev.sc-ir-carousel{align-items:center;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);background:var(--gray-200,#eaecf0);border-radius:50%;box-sizing:border-box;color:var(--swiper-navigation-color,var(--swiper-theme-color));color:var(--gray-600,#475467);cursor:pointer;display:flex;height:var(--swiper-navigation-size);height:24px;justify-content:center;margin-top:calc(0px - var(--swiper-navigation-size)/2);padding:5px;position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/44*27);width:24px;z-index:10}.swiper-button-next.swiper-button-disabled.sc-ir-carousel,.swiper-button-prev.swiper-button-disabled.sc-ir-carousel{cursor:auto;opacity:.35;pointer-events:none}.swiper-button-next.swiper-button-hidden.sc-ir-carousel,.swiper-button-prev.swiper-button-hidden.sc-ir-carousel{cursor:auto;opacity:0;pointer-events:none}.swiper-navigation-disabled.sc-ir-carousel .swiper-button-next.sc-ir-carousel,.swiper-navigation-disabled.sc-ir-carousel .swiper-button-prev.sc-ir-carousel{display:none!important}.swiper-button-next.sc-ir-carousel svg.sc-ir-carousel,.swiper-button-prev.sc-ir-carousel svg.sc-ir-carousel{height:100%;-o-object-fit:contain;object-fit:contain;transform-origin:center;width:100%}.swiper-rtl.sc-ir-carousel .swiper-button-next.sc-ir-carousel svg.sc-ir-carousel,.swiper-rtl.sc-ir-carousel .swiper-button-prev.sc-ir-carousel svg.sc-ir-carousel{transform:rotate(180deg)}.swiper-button-prev.sc-ir-carousel,.swiper-rtl.sc-ir-carousel .swiper-button-next.sc-ir-carousel{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next.sc-ir-carousel,.swiper-rtl.sc-ir-carousel .swiper-button-prev.sc-ir-carousel{left:auto;right:var(--swiper-navigation-sides-offset,10px)}.swiper-button-lock.sc-ir-carousel{display:none}.swiper-button-next.sc-ir-carousel:after,.swiper-button-prev.sc-ir-carousel:after{content:none;display:none;font-family:swiper-icons;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important}.swiper-button-prev.sc-ir-carousel:after,.swiper-rtl.sc-ir-carousel .swiper-button-next.sc-ir-carousel:after{content:\"prev\"}.swiper-button-next.sc-ir-carousel:after,.swiper-rtl.sc-ir-carousel .swiper-button-prev.sc-ir-carousel:after{content:\"next\"}.swiper-pagination.sc-ir-carousel{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}.swiper-pagination.swiper-pagination-hidden.sc-ir-carousel{opacity:0}.swiper-pagination-disabled.sc-ir-carousel>.swiper-pagination.sc-ir-carousel,.swiper-pagination.swiper-pagination-disabled.sc-ir-carousel{display:none!important}.swiper-horizontal.sc-ir-carousel>.swiper-pagination-bullets.sc-ir-carousel,.swiper-pagination-bullets.swiper-pagination-horizontal.sc-ir-carousel,.swiper-pagination-custom.sc-ir-carousel,.swiper-pagination-fraction.sc-ir-carousel{bottom:var(--swiper-pagination-bottom,8px);left:0;top:var(--swiper-pagination-top,auto);width:100%}.swiper-pagination-bullets-dynamic.sc-ir-carousel{font-size:0;overflow:hidden}.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel{position:relative;transform:scale(.33)}.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet-active.sc-ir-carousel,.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet-active-main.sc-ir-carousel{transform:scale(1)}.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet-active-prev.sc-ir-carousel{transform:scale(.66)}.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet-active-prev-prev.sc-ir-carousel{transform:scale(.33)}.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet-active-next.sc-ir-carousel{transform:scale(.66)}.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet-active-next-next.sc-ir-carousel{transform:scale(.33)}.swiper-pagination-bullet.sc-ir-carousel{background:var(--swiper-pagination-bullet-inactive-color,#000);border-radius:var(--swiper-pagination-bullet-border-radius,50%);display:inline-block;height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));opacity:var(--swiper-pagination-bullet-inactive-opacity,.2);width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px))}button.swiper-pagination-bullet.sc-ir-carousel{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;margin:0;padding:0}.swiper-pagination-clickable.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel{cursor:pointer}.swiper-pagination-bullet.sc-ir-carousel:only-child{display:none!important}.swiper-pagination-bullet-active.sc-ir-carousel{background:var(--swiper-pagination-color,var(--swiper-theme-color));opacity:var(--swiper-pagination-bullet-opacity,1)}.swiper-pagination-vertical.swiper-pagination-bullets.sc-ir-carousel,.swiper-vertical.sc-ir-carousel>.swiper-pagination-bullets.sc-ir-carousel{left:var(--swiper-pagination-left,auto);right:var(--swiper-pagination-right,8px);top:50%;transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel,.swiper-vertical.sc-ir-carousel>.swiper-pagination-bullets.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel{display:block;margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic.sc-ir-carousel,.swiper-vertical.sc-ir-carousel>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic.sc-ir-carousel{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel,.swiper-vertical.sc-ir-carousel>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel{display:inline-block;transition:transform .2s,top .2s}.swiper-horizontal.sc-ir-carousel>.swiper-pagination-bullets.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel,.swiper-pagination-horizontal.swiper-pagination-bullets.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal.sc-ir-carousel>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic.sc-ir-carousel,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic.sc-ir-carousel{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal.sc-ir-carousel>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel{transition:transform .2s,left .2s}.swiper-horizontal.swiper-rtl.sc-ir-carousel>.swiper-pagination-bullets-dynamic.sc-ir-carousel .swiper-pagination-bullet.sc-ir-carousel{transition:transform .2s,right .2s}.swiper-pagination-fraction.sc-ir-carousel{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar.sc-ir-carousel{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar.sc-ir-carousel .swiper-pagination-progressbar-fill.sc-ir-carousel{background:var(--swiper-pagination-color,var(--swiper-theme-color));height:100%;left:0;position:absolute;top:0;transform:scale(0);transform-origin:left top;width:100%}.swiper-rtl.sc-ir-carousel .swiper-pagination-progressbar.sc-ir-carousel .swiper-pagination-progressbar-fill.sc-ir-carousel{transform-origin:right top}.swiper-horizontal.sc-ir-carousel>.swiper-pagination-progressbar.sc-ir-carousel,.swiper-pagination-progressbar.swiper-pagination-horizontal.sc-ir-carousel,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite.sc-ir-carousel,.swiper-vertical.sc-ir-carousel>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite.sc-ir-carousel{height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0;width:100%}.swiper-horizontal.sc-ir-carousel>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite.sc-ir-carousel,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite.sc-ir-carousel,.swiper-pagination-progressbar.swiper-pagination-vertical.sc-ir-carousel,.swiper-vertical.sc-ir-carousel>.swiper-pagination-progressbar.sc-ir-carousel{height:100%;left:0;top:0;width:var(--swiper-pagination-progressbar-size,4px)}.swiper-pagination-lock.sc-ir-carousel{display:none}.swiper-scrollbar.sc-ir-carousel{background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1));border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none}.swiper-scrollbar-disabled.sc-ir-carousel>.swiper-scrollbar.sc-ir-carousel,.swiper-scrollbar.swiper-scrollbar-disabled.sc-ir-carousel{display:none!important}.swiper-horizontal.sc-ir-carousel>.swiper-scrollbar.sc-ir-carousel,.swiper-scrollbar.swiper-scrollbar-horizontal.sc-ir-carousel{bottom:var(--swiper-scrollbar-bottom,4px);height:var(--swiper-scrollbar-size,4px);left:var(--swiper-scrollbar-sides-offset,1%);position:absolute;top:var(--swiper-scrollbar-top,auto);width:calc(100% - var(--swiper-scrollbar-sides-offset,1%)*2);z-index:50}.swiper-scrollbar.swiper-scrollbar-vertical.sc-ir-carousel,.swiper-vertical.sc-ir-carousel>.swiper-scrollbar.sc-ir-carousel{height:calc(100% - var(--swiper-scrollbar-sides-offset,1%)*2);left:var(--swiper-scrollbar-left,auto);position:absolute;right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);width:var(--swiper-scrollbar-size,4px);z-index:50}.swiper-scrollbar-drag.sc-ir-carousel{background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);height:100%;left:0;position:relative;top:0;width:100%}.swiper-scrollbar-cursor-drag.sc-ir-carousel{cursor:move}.swiper-scrollbar-lock.sc-ir-carousel{display:none}.swiper-zoom-container.sc-ir-carousel{align-items:center;display:flex;height:100%;justify-content:center;text-align:center;width:100%}.swiper-zoom-container.sc-ir-carousel>canvas.sc-ir-carousel,.swiper-zoom-container.sc-ir-carousel>img.sc-ir-carousel,.swiper-zoom-container.sc-ir-carousel>svg.sc-ir-carousel{max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed.sc-ir-carousel{cursor:move;touch-action:none}.swiper.sc-ir-carousel .swiper-notification.sc-ir-carousel{left:0;opacity:0;pointer-events:none;position:absolute;top:0;z-index:-1000}.swiper-free-mode.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel{margin:0 auto;transition-timing-function:ease-out}.swiper-grid.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel{flex-wrap:wrap}.swiper-grid-column.sc-ir-carousel>.swiper-wrapper.sc-ir-carousel{flex-direction:column;flex-wrap:wrap}.swiper-fade.swiper-free-mode.sc-ir-carousel .swiper-slide.sc-ir-carousel{transition-timing-function:ease-out}.swiper-fade.sc-ir-carousel .swiper-slide.sc-ir-carousel{pointer-events:none;transition-property:opacity}.swiper-fade.sc-ir-carousel .swiper-slide.sc-ir-carousel .swiper-slide.sc-ir-carousel{pointer-events:none}.swiper-fade.sc-ir-carousel .swiper-slide-active.sc-ir-carousel,.swiper-fade.sc-ir-carousel .swiper-slide-active.sc-ir-carousel .swiper-slide-active.sc-ir-carousel{pointer-events:auto}.swiper-cube.sc-ir-carousel{overflow:visible}.swiper-cube.sc-ir-carousel .swiper-slide.sc-ir-carousel{backface-visibility:hidden;height:100%;pointer-events:none;transform-origin:0 0;visibility:hidden;width:100%;z-index:1}.swiper-cube.sc-ir-carousel .swiper-slide.sc-ir-carousel .swiper-slide.sc-ir-carousel{pointer-events:none}.swiper-cube.swiper-rtl.sc-ir-carousel .swiper-slide.sc-ir-carousel{transform-origin:100% 0}.swiper-cube.sc-ir-carousel .swiper-slide-active.sc-ir-carousel,.swiper-cube.sc-ir-carousel .swiper-slide-active.sc-ir-carousel .swiper-slide-active.sc-ir-carousel{pointer-events:auto}.swiper-cube.sc-ir-carousel .swiper-slide-active.sc-ir-carousel,.swiper-cube.sc-ir-carousel .swiper-slide-next.sc-ir-carousel,.swiper-cube.sc-ir-carousel .swiper-slide-prev.sc-ir-carousel{pointer-events:auto;visibility:visible}.swiper-cube.sc-ir-carousel .swiper-cube-shadow.sc-ir-carousel{bottom:0;height:100%;left:0;opacity:.6;position:absolute;width:100%;z-index:0}.swiper-cube.sc-ir-carousel .swiper-cube-shadow.sc-ir-carousel:before{background:#000;bottom:0;content:\"\";filter:blur(50px);left:0;position:absolute;right:0;top:0}.swiper-cube.sc-ir-carousel .swiper-slide-next.sc-ir-carousel+.swiper-slide.sc-ir-carousel{pointer-events:auto;visibility:visible}.swiper-cube.sc-ir-carousel .swiper-slide-shadow-cube.swiper-slide-shadow-bottom.sc-ir-carousel,.swiper-cube.sc-ir-carousel .swiper-slide-shadow-cube.swiper-slide-shadow-left.sc-ir-carousel,.swiper-cube.sc-ir-carousel .swiper-slide-shadow-cube.swiper-slide-shadow-right.sc-ir-carousel,.swiper-cube.sc-ir-carousel .swiper-slide-shadow-cube.swiper-slide-shadow-top.sc-ir-carousel{backface-visibility:hidden;z-index:0}.swiper-flip.sc-ir-carousel{overflow:visible}.swiper-flip.sc-ir-carousel .swiper-slide.sc-ir-carousel{backface-visibility:hidden;pointer-events:none;z-index:1}.swiper-flip.sc-ir-carousel .swiper-slide.sc-ir-carousel .swiper-slide.sc-ir-carousel{pointer-events:none}.swiper-flip.sc-ir-carousel .swiper-slide-active.sc-ir-carousel,.swiper-flip.sc-ir-carousel .swiper-slide-active.sc-ir-carousel .swiper-slide-active.sc-ir-carousel{pointer-events:auto}.swiper-flip.sc-ir-carousel .swiper-slide-shadow-flip.swiper-slide-shadow-bottom.sc-ir-carousel,.swiper-flip.sc-ir-carousel .swiper-slide-shadow-flip.swiper-slide-shadow-left.sc-ir-carousel,.swiper-flip.sc-ir-carousel .swiper-slide-shadow-flip.swiper-slide-shadow-right.sc-ir-carousel,.swiper-flip.sc-ir-carousel .swiper-slide-shadow-flip.swiper-slide-shadow-top.sc-ir-carousel{backface-visibility:hidden;z-index:0}.swiper-creative.sc-ir-carousel .swiper-slide.sc-ir-carousel{backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards.sc-ir-carousel{overflow:visible}.swiper-cards.sc-ir-carousel .swiper-slide.sc-ir-carousel{backface-visibility:hidden;overflow:hidden;transform-origin:center bottom}.swiper-slide.sc-ir-carousel img.sc-ir-carousel{cursor:pointer;display:block;height:100%;margin:0;-o-object-fit:cover;object-fit:cover;padding:0;width:100%}.swiper-button-next.sc-ir-carousel:active,.swiper-button-prev.sc-ir-carousel:active{background:var(--gray-300,#d0d5dd);color:var(--gray-700,#344054)}.swiper.sc-ir-carousel:hover{--ir-carousel-opacity:1}.swiper-slide[data-swipable].sc-ir-carousel img.sc-ir-carousel{cursor:grab;-o-object-fit:contain;object-fit:contain}.swiper-slide[data-swipable].sc-ir-carousel img.sc-ir-carousel:active{cursor:grabbing}.static.sc-ir-carousel{position:static}.sticky.sc-ir-carousel{position:sticky}.top-0.sc-ir-carousel{top:0}.z-20.sc-ir-carousel{z-index:20}.m-0.sc-ir-carousel{margin:0}.mx-auto.sc-ir-carousel{margin-left:auto;margin-right:auto}.w-full.sc-ir-carousel{width:100%}.max-w-6xl.sc-ir-carousel{max-width:72rem}.flex-1.sc-ir-carousel{flex:1 1 0%}.flex-col.sc-ir-carousel{flex-direction:column}.space-y-5.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0.sc-ir-carousel{padding:0}.px-4.sc-ir-carousel{padding-left:1rem;padding-right:1rem}.shadow.sc-ir-carousel{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:1024px){.lg\\:px-6.sc-ir-carousel{padding-left:1.5rem;padding-right:1.5rem}}.h-full.sc-ir-carousel{height:100%}.grid.sc-ir-carousel{display:grid}.aspect-\\[16\\/9\\].sc-ir-carousel{aspect-ratio:16/9}.h-28.sc-ir-carousel{height:7rem}.h-4.sc-ir-carousel{height:1rem}.h-44.sc-ir-carousel{height:11rem}.h-6.sc-ir-carousel{height:1.5rem}.h-60.sc-ir-carousel{height:15rem}.h-8.sc-ir-carousel{height:2rem}.w-1\\/2.sc-ir-carousel{width:50%}.w-24.sc-ir-carousel{width:6rem}.w-3\\/4.sc-ir-carousel{width:75%}.w-3\\/5.sc-ir-carousel{width:60%}.w-40.sc-ir-carousel{width:10rem}.w-48.sc-ir-carousel{width:12rem}.w-80.sc-ir-carousel{width:20rem}.items-center.sc-ir-carousel{align-items:center}.justify-between.sc-ir-carousel{justify-content:space-between}.gap-2.sc-ir-carousel{gap:.5rem}.gap-4.sc-ir-carousel{gap:1rem}.space-x-2.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-4.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.p-4.sc-ir-carousel{padding:1rem}@media (min-width:768px){.md\\:col-span-2.sc-ir-carousel{grid-column:span 2/span 2}.md\\:grid.sc-ir-carousel{display:grid}.md\\:h-20.sc-ir-carousel{height:5rem}.md\\:grid-cols-3.sc-ir-carousel{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row.sc-ir-carousel{flex-direction:row}}@media (min-width:1024px){.lg\\:block.sc-ir-carousel{display:block}.lg\\:grid-cols-2.sc-ir-carousel{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:space-y-10.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2.5rem*var(--tw-space-y-reverse));margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)))}.lg\\:p-6.sc-ir-carousel{padding:1.5rem}}.size-6.sc-ir-carousel{height:1.5rem;width:1.5rem}.pb-2.sc-ir-carousel{padding-bottom:.5rem}.text-lg.sc-ir-carousel{font-size:1.125rem;line-height:1.75rem}.font-semibold.sc-ir-carousel{font-weight:600}.text-red-500.sc-ir-carousel{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.outline.sc-ir-carousel{outline-style:solid}.top-\\[20\\%\\].sc-ir-carousel{top:20%}.z-50.sc-ir-carousel{z-index:50}.mt-1\\.5.sc-ir-carousel{margin-top:.375rem}.aspect-\\[1\\/1\\].sc-ir-carousel{aspect-ratio:1/1}.max-h-32.sc-ir-carousel{max-height:8rem}.flex-wrap.sc-ir-carousel{flex-wrap:wrap}.justify-center.sc-ir-carousel{justify-content:center}.gap-1.sc-ir-carousel{gap:.25rem}.gap-16.sc-ir-carousel{gap:4rem}.space-y-2.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.object-cover.sc-ir-carousel{object-fit:cover}.text-center.sc-ir-carousel{text-align:center}.text-sm.sc-ir-carousel{font-size:.875rem;line-height:1.25rem}.text-xl.sc-ir-carousel{font-size:1.25rem;line-height:1.75rem}.text-xs.sc-ir-carousel{font-size:.75rem;line-height:1rem}.font-medium.sc-ir-carousel{font-weight:500}.text-gray-700.sc-ir-carousel{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-green-600.sc-ir-carousel{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit.sc-ir-carousel{width:fit-content}.md\\:items-center.sc-ir-carousel{align-items:center}.md\\:text-right.sc-ir-carousel{text-align:right}}.mb-2.sc-ir-carousel{margin-bottom:.5rem}.h-10.sc-ir-carousel{height:2.5rem}.h-12.sc-ir-carousel{height:3rem}.h-14.sc-ir-carousel{height:3.5rem}.h-64.sc-ir-carousel{height:16rem}.h-screen.sc-ir-carousel{height:100vh}.min-h-screen.sc-ir-carousel{min-height:100vh}.w-56.sc-ir-carousel{width:14rem}.max-w-md.sc-ir-carousel{max-width:28rem}.animate-pulse.sc-ir-carousel{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.place-content-center.sc-ir-carousel{place-content:center}.self-center.sc-ir-carousel{align-self:center}.rounded-full.sc-ir-carousel{border-radius:9999px}.rounded-md.sc-ir-carousel{border-radius:.375rem}.bg-gray-200.sc-ir-carousel{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.py-4.sc-ir-carousel{padding-bottom:1rem;padding-top:1rem}@media (min-width:768px){.md\\:hidden.sc-ir-carousel{display:none}}@media (min-width:1024px){.lg\\:size-7.sc-ir-carousel{height:1.75rem;width:1.75rem}}.bottom-2.sc-ir-carousel{bottom:.5rem}.z-40.sc-ir-carousel{z-index:40}.mb-5.sc-ir-carousel{margin-bottom:1.25rem}.mt-14.sc-ir-carousel{margin-top:3.5rem}.w-auto.sc-ir-carousel{width:auto}.justify-end.sc-ir-carousel{justify-content:flex-end}.bg-gray-700\\/80.sc-ir-carousel{background-color:rgba(55,65,81,.8)}.px-6.sc-ir-carousel{padding-left:1.5rem;padding-right:1.5rem}.py-2.sc-ir-carousel{padding-bottom:.5rem;padding-top:.5rem}.py-8.sc-ir-carousel{padding-bottom:2rem;padding-top:2rem}.pb-5.sc-ir-carousel{padding-bottom:1.25rem}.text-base.sc-ir-carousel{font-size:1rem;line-height:1.5rem}.text-gray-200.sc-ir-carousel{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.filter.sc-ir-carousel{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:text-lg.sc-ir-carousel{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60.sc-ir-carousel{width:15rem}.lg\\:gap-10.sc-ir-carousel{gap:2.5rem}.lg\\:text-2xl.sc-ir-carousel{font-size:1.5rem;line-height:2rem}}.gap-2\\.5.sc-ir-carousel{gap:.625rem}.space-y-8.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl.sc-ir-carousel{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky.sc-ir-carousel{position:sticky}.md\\:top-20.sc-ir-carousel{top:5rem}.md\\:flex.sc-ir-carousel{display:flex}.md\\:max-w-4xl.sc-ir-carousel{max-width:56rem}.md\\:max-w-md.sc-ir-carousel{max-width:28rem}.md\\:items-start.sc-ir-carousel{align-items:flex-start}.md\\:justify-end.sc-ir-carousel{justify-content:flex-end}}.sr-only.sc-ir-carousel{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table.sc-ir-carousel{display:table}.capitalize.sc-ir-carousel{text-transform:capitalize}.fixed.sc-ir-carousel{position:fixed}.mx-1.sc-ir-carousel{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-carousel{justify-content:flex-start}.gap-1\\.5.sc-ir-carousel{gap:.375rem}@media (min-width:768px){.md\\:block.sc-ir-carousel{display:block}}.h-5.sc-ir-carousel{height:1.25rem}.w-5.sc-ir-carousel{width:1.25rem}.text-end.sc-ir-carousel{text-align:end}.text-gray-400.sc-ir-carousel{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.mb-4.sc-ir-carousel{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-carousel{max-height:83vh}.overflow-y-auto.sc-ir-carousel{overflow-y:auto}.font-normal.sc-ir-carousel{font-weight:400}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-carousel{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-carousel{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-carousel{padding:1.5rem}}.resize.sc-ir-carousel{resize:both}@media (min-width:640px){.sm\\:block.sc-ir-carousel{display:block}}.right-0.sc-ir-carousel{right:0}.right-4.sc-ir-carousel{right:1rem}.top-4.sc-ir-carousel{top:1rem}.mt-8.sc-ir-carousel{margin-top:2rem}.min-w-\\[70\\%\\].sc-ir-carousel{min-width:70%}.max-w-full.sc-ir-carousel{max-width:100%}.translate-x-0.sc-ir-carousel{--tw-translate-x:0px}.translate-x-0.sc-ir-carousel,.translate-x-\\[100\\%\\].sc-ir-carousel{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-carousel{--tw-translate-x:100%}.bg-white.sc-ir-carousel{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow.sc-ir-carousel,.shadow-md.sc-ir-carousel{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md.sc-ir-carousel{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform.sc-ir-carousel{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-carousel{transition-duration:.3s}.ease-in-out.sc-ir-carousel{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-carousel{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-carousel,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-carousel{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-carousel{--tw-translate-x:0px}.pointer-events-none.sc-ir-carousel{pointer-events:none}.inset-y-0.sc-ir-carousel{bottom:0;top:0}.end-1.sc-ir-carousel{inset-inline-end:.25rem}.start-2.sc-ir-carousel{inset-inline-start:.5rem}.px-\\[0\\.3rem\\].sc-ir-carousel{padding-left:.3rem;padding-right:.3rem}.ps-9.sc-ir-carousel{padding-inline-start:2.25rem}.pt-1.sc-ir-carousel{padding-top:.25rem}.text-\\[\\#667085\\].sc-ir-carousel{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.max-w-xs.sc-ir-carousel{max-width:20rem}.rounded-lg.sc-ir-carousel{border-radius:.5rem}.px-3.sc-ir-carousel{padding-left:.75rem;padding-right:.75rem}.visible.sc-ir-carousel{visibility:visible}.size-\\[1\\.125rem\\].sc-ir-carousel{height:1.125rem;width:1.125rem}.h-\\[14px\\].sc-ir-carousel{height:14px}.h-\\[3rem\\].sc-ir-carousel{height:3rem}.w-\\[12\\.25px\\].sc-ir-carousel{width:12.25px}.gap-0\\.5.sc-ir-carousel{gap:.125rem}.border-0.sc-ir-carousel{border-width:0}.pt-14.sc-ir-carousel{padding-top:3.5rem}.lowercase.sc-ir-carousel{text-transform:lowercase}.shadow.sc-ir-carousel,.shadow-none.sc-ir-carousel{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none.sc-ir-carousel{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto.sc-ir-carousel{width:auto}.sm\\:w-fit.sc-ir-carousel{width:fit-content}.sm\\:border.sc-ir-carousel{border-width:1px}.sm\\:pt-4.sc-ir-carousel{padding-top:1rem}.sm\\:shadow-sm.sc-ir-carousel{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.size-4.sc-ir-carousel{height:1rem;width:1rem}.gap-3.sc-ir-carousel{gap:.75rem}@media (min-width:640px){.sm\\:hidden.sc-ir-carousel{display:none}}@media (min-width:1280px){.xl\\:text-cyan-50.sc-ir-carousel{--tw-text-opacity:1;color:rgb(236 254 255/var(--tw-text-opacity))}}.mx-2.sc-ir-carousel{margin-left:.5rem;margin-right:.5rem}.mt-2\\.5.sc-ir-carousel{margin-top:.625rem}.space-y-1\\.5.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl.sc-ir-carousel{border-radius:.75rem}.bg-gray-100.sc-ir-carousel{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6.sc-ir-carousel{padding:1.5rem}.pt-2.sc-ir-carousel{padding-top:.5rem}.leading-none.sc-ir-carousel{line-height:1}.tracking-tight.sc-ir-carousel{letter-spacing:-.025em}.ml-1.sc-ir-carousel{margin-left:.25rem}.line-clamp-3.sc-ir-carousel{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex.sc-ir-carousel{display:inline-flex}.h-16.sc-ir-carousel{height:4rem}.w-16.sc-ir-carousel{width:4rem}.max-w-\\[60\\%\\].sc-ir-carousel{max-width:60%}.flex-row.sc-ir-carousel{flex-direction:row}.space-y-14.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0.sc-ir-carousel{padding-left:0}.pt-0\\.5.sc-ir-carousel{padding-top:.125rem}.text-right.sc-ir-carousel{text-align:right}.text-\\[var\\(--ir-green\\)\\].sc-ir-carousel{color:var(--ir-green)}.text-gray-500.sc-ir-carousel{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-full.sc-ir-carousel{width:100%}.md\\:max-w-full.sc-ir-carousel{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row.sc-ir-carousel{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl.sc-ir-carousel{font-size:1.25rem;line-height:1.75rem}}@media (min-width:640px){.sm\\:p-6.sc-ir-carousel{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse.sc-ir-carousel{flex-direction:row-reverse}}.h-80.sc-ir-carousel{height:20rem}.h-\\[80vh\\].sc-ir-carousel{height:80vh}.overflow-x-auto.sc-ir-carousel{overflow-x:auto}.overflow-x-hidden.sc-ir-carousel{overflow-x:hidden}.px-\\[1\\.25rem\\].sc-ir-carousel{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\].sc-ir-carousel{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell.sc-ir-carousel{display:table-cell}}.mt-4.sc-ir-carousel{margin-top:1rem}.h-\\[1px\\].sc-ir-carousel{height:1px}.min-w-\\[1rem\\].sc-ir-carousel{min-width:1rem}.cursor-pointer.sc-ir-carousel{cursor:pointer}.space-y-1.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-t-md.sc-ir-carousel{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border.sc-ir-carousel{border-width:1px}.border-gray-300.sc-ir-carousel{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300.sc-ir-carousel{background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-gray-300.sc-ir-carousel,.bg-white.sc-ir-carousel{--tw-bg-opacity:1}.p-2.sc-ir-carousel{padding:.5rem}.underline.sc-ir-carousel{text-decoration-line:underline}@media (min-width:768px){.md\\:max-w-sm.sc-ir-carousel{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\].sc-ir-carousel{aspect-ratio:16/9}}.text-start.sc-ir-carousel{text-align:start}.h-24.sc-ir-carousel{height:6rem}.gap-12.sc-ir-carousel{gap:3rem}.gap-8.sc-ir-carousel{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm.sc-ir-carousel{max-width:24rem}}.size-3.sc-ir-carousel{height:.75rem;width:.75rem}.w-72.sc-ir-carousel{width:18rem}.w-fit.sc-ir-carousel{width:fit-content}@media (min-width:640px){.sm\\:w-full.sc-ir-carousel{width:100%}}@media (min-width:768px){.md\\:p-4.sc-ir-carousel{padding:1rem}}@media (min-width:1024px){.lg\\:w-fit.sc-ir-carousel{width:fit-content}}.ml-4.sc-ir-carousel{margin-left:1rem}.grid-cols-2.sc-ir-carousel{grid-template-columns:repeat(2,minmax(0,1fr))}.items-end.sc-ir-carousel{align-items:flex-end}.gap-6.sc-ir-carousel{gap:1.5rem}.space-y-3.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6.sc-ir-carousel{padding-bottom:1.5rem}.text-gray-800.sc-ir-carousel{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row.sc-ir-carousel{flex-direction:row}.sm\\:items-center.sc-ir-carousel{align-items:center}.sm\\:text-sm.sc-ir-carousel{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3.sc-ir-carousel{grid-template-columns:repeat(3,minmax(0,1fr))}}.col-span-6.sc-ir-carousel{grid-column:span 6/span 6}.w-12.sc-ir-carousel{width:3rem}.place-items-center.sc-ir-carousel{place-items:center}.-bottom-0.sc-ir-carousel{bottom:0}.z-0.sc-ir-carousel{z-index:0}.z-10.sc-ir-carousel{z-index:10}.mb-1.sc-ir-carousel{margin-bottom:.25rem}.size-10.sc-ir-carousel{height:2.5rem;width:2.5rem}.max-h-\\[80vh\\].sc-ir-carousel{max-height:80vh}.overflow-hidden.sc-ir-carousel{overflow:hidden}.bg-white\\/80.sc-ir-carousel{background-color:hsla(0,0%,100%,.8)}.px-2.sc-ir-carousel{padding-left:.5rem;padding-right:.5rem}.pb-4.sc-ir-carousel,.py-4.sc-ir-carousel{padding-bottom:1rem}.pt-0.sc-ir-carousel{padding-top:0}.ordinal.sc-ir-carousel{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white.sc-ir-carousel{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400.sc-ir-carousel:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\].sc-ir-carousel{max-height:200px}.md\\:w-auto.sc-ir-carousel{width:auto}.md\\:pt-0.sc-ir-carousel{padding-top:0}.md\\:pt-4.sc-ir-carousel{padding-top:1rem}.md\\:text-xl.sc-ir-carousel{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\].sc-ir-carousel{max-height:250px}}.pt-2.sc-ir-carousel,.py-2.sc-ir-carousel{padding-top:.5rem}.pt-4.sc-ir-carousel{padding-top:1rem}.text-slate-900.sc-ir-carousel{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}@media (min-width:768px){.md\\:space-y-2.sc-ir-carousel>.sc-ir-carousel:not([hidden])~.sc-ir-carousel:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-0.sc-ir-carousel{padding:0}}.h-72.sc-ir-carousel{height:18rem}.col-span-2.sc-ir-carousel{grid-column:span 2/span 2}.mb-6.sc-ir-carousel{margin-bottom:1.5rem}.mt-6.sc-ir-carousel{margin-top:1.5rem}.min-h-\\[80vh\\].sc-ir-carousel{min-height:80vh}.max-w-xl.sc-ir-carousel{max-width:36rem}@media (min-width:768px){.md\\:grid-cols-2.sc-ir-carousel{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\].sc-ir-carousel{color:hsl(var(--brand-600))}.size-\\[18px\\].sc-ir-carousel{height:18px;width:18px}.text-slate-500.sc-ir-carousel{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4.sc-ir-carousel{padding:1rem}}.border-solid.sc-ir-carousel{border-style:solid}.mb-2\\.5.sc-ir-carousel{margin-bottom:.625rem}.w-\\[45\\%\\].sc-ir-carousel{width:45%}.bg-\\[var\\(--gray-200\\)\\].sc-ir-carousel{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-carousel{color:var(--gray-500)}";
const IrCarouselStyle0 = irCarouselCss;

const IrCarousel = /*@__PURE__*/ proxyCustomElement(class IrCarousel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.carouselImageClicked = createEvent(this, "carouselImageClicked", 7);
        this.carouselImageIndexChange = createEvent(this, "carouselImageIndexChange", 7);
        this.slides = [];
        this.activeIndex = 0;
        this.enableCarouselSwipe = false;
        this.styles = undefined;
        this.carouselClasses = undefined;
    }
    componentWillLoad() {
        onAppDataChange('dir', () => {
            this.reinitializeSwiper();
        });
    }
    componentDidLoad() {
        this.initializeSwiper();
        setTimeout(() => {
            this.applyStyles();
        }, 10);
    }
    handleStylesChange() {
        this.applyStyles();
    }
    applyStyles() {
        if (!this.styles || !this.carouselEl) {
            return;
        }
        for (const property in this.styles) {
            if (this.styles.hasOwnProperty(property)) {
                this.carouselEl.style[property] = this.styles[property];
            }
        }
    }
    reinitializeSwiper() {
        if (this.swiperInstance) {
            this.swiperInstance.destroy(true, true);
            this.swiperInstance = null;
        }
        this.initializeSwiper();
    }
    initializeSwiper() {
        if (this.swiperInstance) {
            return;
        }
        this.swiperInstance = new Swiper(this.carouselEl, {
            modules: [Navigation, Pagination],
            simulateTouch: this.enableCarouselSwipe,
            allowTouchMove: this.enableCarouselSwipe,
            direction: 'horizontal',
            touchMoveStopPropagation: this.enableCarouselSwipe,
            navigation: {
                nextEl: this.nextEl,
                prevEl: this.prevEl,
            },
        });
        this.swiperInstance.on('slideChange', s => {
            this.carouselImageIndexChange.emit(s.activeIndex);
        });
        this.swiperInstance.slideTo(this.activeIndex);
    }
    handleActiveIndexChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.swiperInstance.slideTo(newValue);
        }
    }
    render() {
        var _a;
        return (h("div", { key: '8b1dc4a4c1d97e9602e616eda613f79813b6806a', class: `swiper ${(_a = this.carouselClasses) !== null && _a !== void 0 ? _a : ''}`, ref: el => (this.carouselEl = el) }, h("div", { key: '259311e62d00f8327b5ad4c12bd7842bb15f3090', class: "swiper-wrapper" }, this.slides.map(slide => (h("div", { class: "swiper-slide", "data-swipable": this.enableCarouselSwipe }, h("img", { loading: "lazy", src: slide.image_uri, onClick: () => this.carouselImageClicked.emit(null), key: slide.id, alt: slide.alt }))))), h("div", { key: '5be3ea6c453eb2c62958dac9bd3354d8e6fb60b8', class: "swiper-pagination" }), h("div", { key: '2f86a5555cb7d166694fef30259225d4e9715927', class: "swiper-button-prev lg:size-7", ref: el => (this.prevEl = el) }, h("svg", { key: 'f827d039aaca270b1c7afcec7acc43929e21a535', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '6c3b17dc6d890d47a02f02641a085bb2ec8288d7', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("div", { key: '527e2abc630e74b9b17b2187bb872f24afcb433b', class: "swiper-button-next lg:size-7", ref: el => (this.nextEl = el) }, h("svg", { key: '630d8695c18ad4e9dcd600405be4a8d89d027d4f', xmlns: "http://www.w3.org/2000/svg", height: "10", width: "6.25", viewBox: "0 0 320 512" }, h("path", { key: '8782f9684c31e8732537231c8450c491009c31f1', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))));
    }
    static get watchers() { return {
        "styles": ["handleStylesChange"],
        "activeIndex": ["handleActiveIndexChange"]
    }; }
    static get style() { return IrCarouselStyle0; }
}, [2, "ir-carousel", {
        "slides": [16],
        "activeIndex": [2, "active-index"],
        "enableCarouselSwipe": [4, "enable-carousel-swipe"],
        "styles": [16],
        "carouselClasses": [1, "carousel-classes"]
    }, undefined, {
        "styles": ["handleStylesChange"],
        "activeIndex": ["handleActiveIndexChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-carousel"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-carousel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCarousel);
            }
            break;
    } });
}

export { IrCarousel as I, defineCustomElement as d };

//# sourceMappingURL=ir-carousel2.js.map