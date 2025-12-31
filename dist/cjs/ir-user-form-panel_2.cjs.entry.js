'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const locales_store = require('./locales.store-32782582.js');
const index$1 = require('./index-8bb117a0.js');
const housekeeping_service = require('./housekeeping.service-9e0d3074.js');
const constants = require('./constants-abd1d7db.js');
const user_service = require('./user.service-94313b71.js');
const calendarData = require('./calendar-data-0598de26.js');
const functions = require('./functions-1d46da3c.js');
const moment = require('./moment-1780b03a.js');
const _commonjsHelpers = require('./_commonjsHelpers-0192c5b3.js');
const InterceptorError = require('./InterceptorError-ed3c5d13.js');
const Token = require('./Token-8fd11984.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const system_service = require('./system.service-bd8ed6a9.js');
require('./index-fbf1fe1d.js');
require('./axios-6e678d52.js');
require('./utils-02a0d542.js');

var uaParser_pack = {exports: {}};

/* UAParser.js v2.0.3
   Copyright © 2012-2025 Faisal Salman <f@faisalman.com>
   AGPLv3 License */

(function (module, exports) {
((i,l)=>{function U(i){for(var e={},t=0;t<i.length;t++)e[i[t].toUpperCase()]=i[t];return e}var E=500,P="user-agent",w="",B="?",R="function",n="undefined",c="object",V="string",u="browser",h="cpu",p="device",m="engine",f="os",g="result",v="name",k="type",x="vendor",y="version",C="architecture",L="major",T="model",G="console",S="mobile",r="tablet",e="smarttv",t="wearable",F="xr",D="embedded",$="inapp",W="brands",_="formFactors",X="fullVersionList",q="platform",Y="platformVersion",K="bitness",o="sec-ch-ua",Q=o+"-full-version-list",Z=o+"-arch",J=o+"-"+K,ii=o+"-form-factors",ei=o+"-"+S,ti=o+"-"+T,oi=o+"-"+q,ri=oi+"-version",ai=[W,X,S,T,q,Y,C,_,K],si="Amazon",a="Apple",ni="ASUS",wi="BlackBerry",s="Google",bi="Huawei",di="Microsoft",li="Motorola",ci="Nvidia",ui="OnePlus",hi="OPPO",pi="Samsung",mi="Sony",fi="Xiaomi",gi="Zebra",vi="Chromium",b="Chromecast",ki="Firefox",d="Opera",xi="Facebook",A="Mobile ",yi=" Browser",Ci="Windows",Ti=typeof i!==n,z=Ti&&i.navigator?i.navigator:l,O=z&&z.userAgentData?z.userAgentData:l,Si=function(i,e){if(typeof i===c&&0<i.length){for(var t in i)if(M(i[t])==M(e))return !0;return !1}return !!H(i)&&-1!==M(e).indexOf(M(i))},_i=function(i,e){for(var t in i)return /^(browser|cpu|device|engine|os)$/.test(t)||!!e&&_i(i[t])},H=function(i){return typeof i===V},qi=function(i){if(!i)return l;for(var e,t=[],o=zi(/\\?\"/g,i).split(","),r=0;r<o.length;r++)-1<o[r].indexOf(";")?(e=Hi(o[r]).split(";v="),t[r]={brand:e[0],version:e[1]}):t[r]=Hi(o[r]);return t},M=function(i){return H(i)?i.toLowerCase():i},Ai=function(i){return H(i)?zi(/[^\d\.]/g,i).split(".")[0]:l},j=function(i){for(var e in i){e=i[e];typeof e==c&&2==e.length?this[e[0]]=e[1]:this[e]=l;}return this},zi=function(i,e){return H(e)?e.replace(i,w):e},Oi=function(i){return zi(/\\?\"/g,i)},Hi=function(i,e){if(H(i))return i=zi(/^\s\s*/,i),typeof e===n?i:i.substring(0,E)},Mi=function(i,e){if(i&&e)for(var t,o,r,a,s,n=0;n<e.length&&!a;){for(var w=e[n],b=e[n+1],d=t=0;d<w.length&&!a&&w[d];)if(a=w[d++].exec(i))for(o=0;o<b.length;o++)s=a[++t],typeof(r=b[o])===c&&0<r.length?2===r.length?typeof r[1]==R?this[r[0]]=r[1].call(this,s):this[r[0]]=r[1]:3===r.length?typeof r[1]!==R||r[1].exec&&r[1].test?this[r[0]]=s?s.replace(r[1],r[2]):l:this[r[0]]=s?r[1].call(this,s,r[2]):l:4===r.length&&(this[r[0]]=s?r[3].call(this,s.replace(r[1],r[2])):l):this[r]=s||l;n+=2;}},N=function(i,e){for(var t in e)if(typeof e[t]===c&&0<e[t].length){for(var o=0;o<e[t].length;o++)if(Si(e[t][o],i))return t===B?l:t}else if(Si(e[t],i))return t===B?l:t;return e.hasOwnProperty("*")?e["*"]:i},ji={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Ni={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":l},Ii={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[y,[v,A+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[y,[v,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[v,y],[/opios[\/ ]+([\w\.]+)/i],[y,[v,d+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[y,[v,d+" GX"]],[/\bopr\/([\w\.]+)/i],[y,[v,d]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[y,[v,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[y,[v,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,/(heytap|ovi|115|surf)browser\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[v,y],[/quark(?:pc)?\/([-\w\.]+)/i],[y,[v,"Quark"]],[/\bddg\/([\w\.]+)/i],[y,[v,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[y,[v,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[y,[v,"WeChat"]],[/konqueror\/([\w\.]+)/i],[y,[v,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[y,[v,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[y,[v,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[y,[v,"Smart Lenovo"+yi]],[/(avast|avg)\/([\w\.]+)/i],[[v,/(.+)/,"$1 Secure"+yi],y],[/\bfocus\/([\w\.]+)/i],[y,[v,ki+" Focus"]],[/\bopt\/([\w\.]+)/i],[y,[v,d+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[y,[v,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[y,[v,"Dolphin"]],[/coast\/([\w\.]+)/i],[y,[v,d+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[y,[v,"MIUI"+yi]],[/fxios\/([\w\.-]+)/i],[y,[v,A+ki]],[/\bqihoobrowser\/?([\w\.]*)/i],[y,[v,"360"]],[/\b(qq)\/([\w\.]+)/i],[[v,/(.+)/,"$1Browser"],y],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[v,/(.+)/,"$1"+yi],y],[/samsungbrowser\/([\w\.]+)/i],[y,[v,pi+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[y,[v,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[v,"Sogou Mobile"],y],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[v,y],[/(lbbrowser|rekonq)/i],[v],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[y,v],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[v,xi],y,[k,$]],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(instagram|snapchat)[\/ ]([-\w\.]+)/i],[v,y,[k,$]],[/\bgsa\/([\w\.]+) .*safari\//i],[y,[v,"GSA"],[k,$]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[y,[v,"TikTok"],[k,$]],[/\[(linkedin)app\]/i],[v,[k,$]],[/(chromium)[\/ ]([-\w\.]+)/i],[v,y],[/headlesschrome(?:\/([\w\.]+)| )/i],[y,[v,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[v,"Chrome WebView"],y],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[y,[v,"Android"+yi]],[/chrome\/([\w\.]+) mobile/i],[y,[v,A+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[v,y],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[y,[v,A+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[v,A+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[y,v],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[v,[y,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[v,y],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[v,A+ki],y],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[v,"Netscape"],y],[/(wolvic|librewolf)\/([\w\.]+)/i],[v,y],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[y,[v,ki+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[v,[y,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[v,[y,/[^\d\.]+./,w]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[C,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[C,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[C,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[C,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[C,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[C,/ower/,w,M]],[/ sun4\w[;\)]/i],[[C,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[C,M]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[T,[x,pi],[k,r]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[T,[x,pi],[k,S]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[T,[x,a],[k,S]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[T,[x,a],[k,r]],[/(macintosh);/i],[T,[x,a]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[T,[x,"Sharp"],[k,S]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[T,[x,"Honor"],[k,r]],[/honor([-\w ]+)[;\)]/i],[T,[x,"Honor"],[k,S]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[T,[x,bi],[k,r]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[T,[x,bi],[k,S]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[T,/_/g," "],[x,fi],[k,r]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[T,/_/g," "],[x,fi],[k,S]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[T,[x,hi],[k,S]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[T,[x,N,{OnePlus:["304","403","203"],"*":hi}],[k,r]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[T,[x,"BLU"],[k,S]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[T,[x,"Vivo"],[k,S]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[T,[x,"Realme"],[k,S]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[T,[x,li],[k,S]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[T,[x,li],[k,r]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[T,[x,"LG"],[k,r]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,/\blg-?([\d\w]+) bui/i],[T,[x,"LG"],[k,S]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[T,[x,"Lenovo"],[k,r]],[/(nokia) (t[12][01])/i],[x,T,[k,r]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[T,/_/g," "],[k,S],[x,"Nokia"]],[/(pixel (c|tablet))\b/i],[T,[x,s],[k,r]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[T,[x,s],[k,S]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[T,[x,mi],[k,S]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[T,"Xperia Tablet"],[x,mi],[k,r]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[T,[x,ui],[k,S]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[T,[x,si],[k,r]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[T,/(.+)/g,"Fire Phone $1"],[x,si],[k,S]],[/(playbook);[-\w\),; ]+(rim)/i],[T,x,[k,r]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[T,[x,wi],[k,S]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[T,[x,ni],[k,r]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[T,[x,ni],[k,S]],[/(nexus 9)/i],[T,[x,"HTC"],[k,r]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[x,[T,/_/g," "],[k,S]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[T,[x,"TCL"],[k,r]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[T,[x,"TCL"],[k,S]],[/(itel) ((\w+))/i],[[x,M],T,[k,N,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[T,[x,"Acer"],[k,r]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[T,[x,"Meizu"],[k,S]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[T,[x,"Ulefone"],[k,S]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[T,[x,"Energizer"],[k,S]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[T,[x,"Cat"],[k,S]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[T,[x,"Smartfren"],[k,S]],[/droid.+; (a(?:015|06[35]|142p?))/i],[T,[x,"Nothing"],[k,S]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[T,[x,"Archos"],[k,r]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[T,[x,"Archos"],[k,S]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[x,T,[k,r]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[x,T,[k,S]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[x,T,[k,r]],[/(surface duo)/i],[T,[x,di],[k,r]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[T,[x,"Fairphone"],[k,S]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[T,[x,ci],[k,r]],[/(sprint) (\w+)/i],[x,T,[k,S]],[/(kin\.[onetw]{3})/i],[[T,/\./g," "],[x,di],[k,S]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[T,[x,gi],[k,r]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[T,[x,gi],[k,S]],[/smart-tv.+(samsung)/i],[x,[k,e]],[/hbbtv.+maple;(\d+)/i],[[T,/^/,"SmartTV"],[x,pi],[k,e]],[/tcast.+(lg)e?. ([-\w]+)/i],[x,T,[k,e]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[x,"LG"],[k,e]],[/(apple) ?tv/i],[x,[T,a+" TV"],[k,e]],[/crkey.*devicetype\/chromecast/i],[[T,b+" Third Generation"],[x,s],[k,e]],[/crkey.*devicetype\/([^/]*)/i],[[T,/^/,"Chromecast "],[x,s],[k,e]],[/fuchsia.*crkey/i],[[T,b+" Nest Hub"],[x,s],[k,e]],[/crkey/i],[[T,b],[x,s],[k,e]],[/(portaltv)/i],[T,[x,xi],[k,e]],[/droid.+aft(\w+)( bui|\))/i],[T,[x,si],[k,e]],[/(shield \w+ tv)/i],[T,[x,ci],[k,e]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[T,[x,"Sharp"],[k,e]],[/(bravia[\w ]+)( bui|\))/i],[T,[x,mi],[k,e]],[/(mi(tv|box)-?\w+) bui/i],[T,[x,fi],[k,e]],[/Hbbtv.*(technisat) (.*);/i],[x,T,[k,e]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[x,Hi],[T,Hi],[k,e]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[T,[k,e]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[k,e]],[/(ouya)/i,/(nintendo) (\w+)/i],[x,T,[k,G]],[/droid.+; (shield)( bui|\))/i],[T,[x,ci],[k,G]],[/(playstation \w+)/i],[T,[x,mi],[k,G]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[T,[x,di],[k,G]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[T,[x,pi],[k,t]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[x,T,[k,t]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[T,[x,hi],[k,t]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[T,[x,a],[k,t]],[/(opwwe\d{3})/i],[T,[x,ui],[k,t]],[/(moto 360)/i],[T,[x,li],[k,t]],[/(smartwatch 3)/i],[T,[x,mi],[k,t]],[/(g watch r)/i],[T,[x,"LG"],[k,t]],[/droid.+; (wt63?0{2,3})\)/i],[T,[x,gi],[k,t]],[/droid.+; (glass) \d/i],[T,[x,s],[k,F]],[/(pico) (4|neo3(?: link|pro)?)/i],[x,T,[k,F]],[/(quest( \d| pro)?s?).+vr/i],[T,[x,xi],[k,F]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[x,[k,D]],[/(aeobc)\b/i],[T,[x,si],[k,D]],[/(homepod).+mac os/i],[T,[x,a],[k,D]],[/windows iot/i],[[k,D]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i],[T,[k,N,{mobile:"Mobile",xr:"VR","*":r}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[k,r]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[k,S]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[T,[x,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[y,[v,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[v,y],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[y,[v,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[v,y],[/ladybird\//i],[[v,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[y,v]],os:[[/microsoft (windows) (vista|xp)/i],[v,y],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[v,[y,N,ji]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[y,N,ji],[v,Ci]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[y,/_/g,"."],[v,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[v,"macOS"],[y,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[y,[v,b+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[y,[v,b+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[y,[v,b+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[y,[v,b+" Linux"]],[/crkey\/([\d\.]+)/i],[y,[v,b]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[y,v],[/(ubuntu) ([\w\.]+) like android/i],[[v,/(.+)/,"$1 Touch"],y],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i],[v,y],[/\(bb(10);/i],[y,[v,wi]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[y,[v,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[y,[v,ki+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[y,[v,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[y,[v,"watchOS"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[v,"Chrome OS"],y],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[v,y],[/(sunos) ?([\w\.\d]*)/i],[[v,"Solaris"],y],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[v,y]]},Ui=(d={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}},j.call(d.init,[[u,[v,y,L,k]],[h,[C]],[p,[k,T,x]],[m,[v,y]],[f,[v,y]]]),j.call(d.isIgnore,[[u,[y,L]],[m,[y]],[f,[y]]]),j.call(d.isIgnoreRgx,[[u,/ ?browser$/i],[f,/ ?os$/i]]),j.call(d.toString,[[u,[v,y]],[h,[C]],[p,[x,T]],[m,[v,y]],[f,[v,y]]]),d),Ei=function(e,i){var t=Ui.init[i],o=Ui.isIgnore[i]||0,r=Ui.isIgnoreRgx[i]||0,a=Ui.toString[i]||0;function s(){j.call(this,t);}return s.prototype.getItem=function(){return e},s.prototype.withClientHints=function(){return O?O.getHighEntropyValues(ai).then(function(i){return e.setCH(new Pi(i,!1)).parseCH().get()}):e.parseCH().get()},s.prototype.withFeatureCheck=function(){return e.detectFeature().get()},i!=g&&(s.prototype.is=function(i){var e,t=!1;for(e in this)if(this.hasOwnProperty(e)&&!Si(o,e)&&M(r?zi(r,this[e]):this[e])==M(r?zi(r,i):i)){if(t=!0,i!=n)break}else if(i==n&&t){t=!t;break}return t},s.prototype.toString=function(){var i,e=w;for(i in a)typeof this[a[i]]!==n&&(e+=(e?" ":w)+this[a[i]]);return e||n}),O||(s.prototype.then=function(i){function e(){for(var i in t)t.hasOwnProperty(i)&&(this[i]=t[i]);}var t=this,o=(e.prototype={is:s.prototype.is,toString:s.prototype.toString},new e);return i(o),o}),new s};function Pi(i,e){if(i=i||{},j.call(this,ai),e)j.call(this,[[W,qi(i[o])],[X,qi(i[Q])],[S,/\?1/.test(i[ei])],[T,Oi(i[ti])],[q,Oi(i[oi])],[Y,Oi(i[ri])],[C,Oi(i[Z])],[_,qi(i[ii])],[K,Oi(i[J])]]);else for(var t in i)this.hasOwnProperty(t)&&typeof i[t]!==n&&(this[t]=i[t]);}function Bi(i,e,t,o){return this.get=function(i){return i?this.data.hasOwnProperty(i)?this.data[i]:l:this.data},this.set=function(i,e){return this.data[i]=e,this},this.setCH=function(i){return this.uaCH=i,this},this.detectFeature=function(){if(z&&z.userAgent==this.ua)switch(this.itemType){case u:z.brave&&typeof z.brave.isBrave==R&&this.set(v,"Brave");break;case p:!this.get(k)&&O&&O[S]&&this.set(k,S),"Macintosh"==this.get(T)&&z&&typeof z.standalone!==n&&z.maxTouchPoints&&2<z.maxTouchPoints&&this.set(T,"iPad").set(k,r);break;case f:!this.get(v)&&O&&O[q]&&this.set(v,O[q]);break;case g:var e=this.data,i=function(i){return e[i].getItem().detectFeature().get()};this.set(u,i(u)).set(h,i(h)).set(p,i(p)).set(m,i(m)).set(f,i(f));}return this},this.parseUA=function(){return this.itemType!=g&&Mi.call(this.data,this.ua,this.rgxMap),this.itemType==u&&this.set(L,Ai(this.get(y))),this},this.parseCH=function(){var i,e=this.uaCH,t=this.rgxMap;switch(this.itemType){case u:case m:var o,r=e[X]||e[W];if(r)for(var a in r){var s=r[a].brand||r[a],a=r[a].version;this.itemType!=u||/not.a.brand/i.test(s)||o&&(!/chrom/i.test(o)||s==vi)||(s=N(s,{Chrome:"Google Chrome",Edge:"Microsoft Edge","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"}),this.set(v,s).set(y,a).set(L,Ai(a)),o=s),this.itemType==m&&s==vi&&this.set(y,a);}break;case h:var n=e[C];n&&("64"==e[K]&&(n+="64"),Mi.call(this.data,n+";",t));break;case p:if(e[S]&&this.set(k,S),e[T]&&(this.set(T,e[T]),this.get(k)&&this.get(x)||(Mi.call(n={},"droid 9; "+e[T]+")",t),!this.get(k)&&n.type&&this.set(k,n.type),!this.get(x)&&n.vendor&&this.set(x,n.vendor))),e[_]){if("string"!=typeof e[_])for(var w=0;!i&&w<e[_].length;)i=N(e[_][w++],Ni);else i=N(e[_],Ni);this.set(k,i);}break;case f:var b,n=e[q];n&&(b=e[Y],n==Ci&&(b=13<=parseInt(Ai(b),10)?"11":"10"),this.set(v,n).set(y,b)),this.get(v)==Ci&&"Xbox"==e[T]&&this.set(v,"Xbox").set(y,l);break;case g:var d=this.data,n=function(i){return d[i].getItem().setCH(e).parseCH().get()};this.set(u,n(u)).set(h,n(h)).set(p,n(p)).set(m,n(m)).set(f,n(f));}return this},j.call(this,[["itemType",i],["ua",e],["uaCH",o],["rgxMap",t],["data",Ei(this,i)]]),this}function I(i,e,t){var o,r,a,s,n;return typeof i===c?(e=_i(i,!0)?(typeof e===c&&(t=e),i):(t=i,l),i=l):typeof i!==V||_i(e,!0)||(t=e,e=l),t&&typeof t.append===R&&(o={},t.forEach(function(i,e){o[e]=i;}),t=o),this instanceof I?(r=typeof i===V?i:t&&t[P]?t[P]:z&&z.userAgent?z.userAgent:w,a=new Pi(t,!0),s=e?((i,e)=>{var t,o={},r=e;if(!_i(e))for(var a in r={},e)for(var s in e[a])r[s]=e[a][s].concat(r[s]||[]);for(t in i)o[t]=r[t]&&r[t].length%2==0?r[t].concat(i[t]):i[t];return o})(Ii,e):Ii,j.call(this,[["getBrowser",(n=function(i){return i==g?function(){return new Bi(i,r,s,a).set("ua",r).set(u,this.getBrowser()).set(h,this.getCPU()).set(p,this.getDevice()).set(m,this.getEngine()).set(f,this.getOS()).get()}:function(){return new Bi(i,r,s[i],a).parseUA().get()}})(u)],["getCPU",n(h)],["getDevice",n(p)],["getEngine",n(m)],["getOS",n(f)],["getResult",n(g)],["getUA",function(){return r}],["setUA",function(i){return H(i)&&(r=i.length>E?Hi(i,E):i),this}]]).setUA(r),this):new I(i,e,t).getResult()}I.VERSION="2.0.3",I.BROWSER=U([v,y,L,k]),I.CPU=U([C]),I.DEVICE=U([T,x,k,G,S,e,r,t,D]),I.ENGINE=I.OS=U([v,y]),(exports=module.exports?module.exports=I:exports).UAParser=I;var Ri,Vi=Ti&&(i.jQuery||i.Zepto);Vi&&!Vi.ua&&(Ri=new I,Vi.ua=Ri.getResult(),Vi.ua.get=function(){return Ri.getUA()},Vi.ua.set=function(i){Ri.setUA(i);var e,t=Ri.getResult();for(e in t)Vi.ua[e]=t[e];});})("object"==typeof window?window:_commonjsHelpers.commonjsGlobal);
}(uaParser_pack, uaParser_pack.exports));

const irUserFormPanelCss = ".sc-ir-user-form-panel-h{--font-family-sans-serif:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;--font-family-monospace:'Quicksand', Georgia, 'Times New Roman', Times, serif !important}.logins-history-section.sc-ir-user-form-panel{margin-top:1.5rem}.sc-ir-user-form-panel-h h4.sc-ir-user-form-panel{font-family:inherit !important}.logins-history-list.sc-ir-user-form-panel{border-radius:8px;list-style-type:none;padding:0;margin:0;margin-top:1rem}.login-entry.sc-ir-user-form-panel{padding:0.25rem 0rem;border-bottom:1px solid #e4e5ec}.login-entry.sc-ir-user-form-panel:last-child{border:none}.login-meta.sc-ir-user-form-panel{display:flex;gap:0.5rem}.login-datetime.sc-ir-user-form-panel,.login-location.sc-ir-user-form-panel{margin:0;font-size:0.75rem;color:#374151;font-weight:500}.login-user-agent.sc-ir-user-form-panel{font-size:0.75rem;color:#6b7280;margin:0;word-break:break-word}.login-user-agent.sc-ir-user-form-panel{font-size:0.75rem;color:#4b5563;margin-top:0.5rem;line-height:1.4}.login-user-agent.sc-ir-user-form-panel p.sc-ir-user-form-panel{margin:0}.ua-browser.sc-ir-user-form-panel{font-weight:600;color:#1f2937}.ua-os.sc-ir-user-form-panel{color:#374151}.ua-device.sc-ir-user-form-panel{font-style:italic;color:#6b7280}.login-location.sc-ir-user-form-panel{font-size:0.75rem;color:#4b5563;display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.login-location.sc-ir-user-form-panel span.sc-ir-user-form-panel{display:flex;align-items:center;gap:0.25rem}.login-location.sc-ir-user-form-panel i.sc-ir-user-form-panel{font-size:0.75rem;color:#9ca3af}";
const IrUserFormPanelStyle0 = irUserFormPanelCss;

const sheetCss = ".sc-ir-user-form-panel-h{height:100%}.sheet-container.sc-ir-user-form-panel{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-user-form-panel{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-user-form-panel{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-user-form-panel{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-user-form-panel{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-user-form-panel{flex-direction:row;align-items:center}}";
const IrUserFormPanelStyle1 = sheetCss;

const IrUserFormPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
    }
    user;
    userTypes = (Map);
    isEdit = false;
    language = 'en';
    property_id;
    haveAdminPrivileges;
    superAdminId = '5';
    userTypeCode;
    allowedUsersTypes = [];
    baseUserTypeCode;
    isLoading = false;
    autoValidate = false;
    showFullHistory = false;
    userInfo = {
        type: '',
        id: -1,
        is_active: true,
        sign_ins: null,
        created_on: null,
        mobile: '',
        name: '',
        note: '',
        password: '',
        email: '',
        property_id: null,
        username: null,
        phone_prefix: null,
    };
    errors = null;
    showPasswordValidation = false;
    isUsernameTaken;
    isOpen;
    emailErrorMessage;
    resetData;
    closeSideBar;
    housekeepingService = new housekeeping_service.HouseKeepingService();
    userService = new user_service.UserService();
    disableFields = false;
    isPropertyAdmin = false;
    token = new Token.Token();
    mobileMask = {};
    userSchema = index$1.z.object({
        mobile: index$1.z.string().optional(),
        email: index$1.z.string().email(),
        password: index$1.z
            .string()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return constants.CONSTANTS.PASSWORD.test(password);
        }, { message: 'Password must be at least 8 characters long.' }),
        type: index$1.z.union([index$1.z.literal(1), index$1.z.literal(Number(this.superAdminId?.toString() ?? '5')), index$1.z.coerce.string().nonempty().min(2)]),
        username: index$1.z
            .string()
            .min(3)
            .refine(async (name) => {
            if (this.user && this.user.username) {
                return true;
            }
            if (name.length >= 3) {
                return !(await new user_service.UserService().checkUserExistence({ UserName: name }));
            }
            return true;
        }, { message: 'Username already exists.' }),
    });
    //make user active by default
    async componentWillLoad() {
        if (!this.user) {
            this.userInfo['property_id'] = this.property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = { ...this.user, password: '' };
            // this.disableFields = true;
        }
        this.isPropertyAdmin = this.userTypeCode.toString() === '17';
        if (this.isPropertyAdmin) {
            this.updateUserField('type', '17');
        }
        this.mobileMask = {
            mask: `{${calendarData.calendar_data.country.phone_prefix}} 000000000000`,
            lazy: false,
            autofix: true,
            placeholderChar: '\u200B',
        };
    }
    updateUserField(key, value) {
        this.userInfo = { ...this.userInfo, [key]: value };
    }
    async createOrUpdateUser() {
        try {
            console.log('hello world');
            this.isLoading = true;
            this.emailErrorMessage = undefined;
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            const toValidateUserInfo = {
                ...this.userInfo,
                base_user_type_code: this.baseUserTypeCode,
                property_id: this.property_id,
                password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password,
                type: Number(this.userInfo.type),
            };
            console.log('toValidateUserInfo', { ...toValidateUserInfo, mobile: toValidateUserInfo.mobile?.split(' ')?.join('')?.replace(calendarData.calendar_data.country.phone_prefix, '') ?? '' });
            await this.userSchema.parseAsync({ ...toValidateUserInfo, mobile: toValidateUserInfo.mobile?.split(' ')?.join('')?.replace(calendarData.calendar_data.country.phone_prefix, '') ?? '' });
            if (this.errors) {
                this.errors = null;
            }
            await this.userService.handleExposedUser(toValidateUserInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.log(error);
            const e = {};
            if (error instanceof index$1.ZodError) {
                console.error(error);
                error.issues.map(err => {
                    e[err.path[0]] = true;
                });
            }
            else if (error instanceof InterceptorError.InterceptorError && error.code === 'EMAIL_EXISTS') {
                e['email'] = true;
                this.emailErrorMessage = 'This email is already in use. Please create another one.';
            }
            this.errors = e;
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleBlur(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.user || !this.userInfo.name) {
            return;
        }
        const usermame = await this.housekeepingService.generateUserName(this.userInfo.name);
        this.updateUserField('username', usermame);
    }
    render() {
        return (index.h("form", { key: '586dcf10fc50ed6c40ca52271c86329d2aa12c41', class: "sheet-container", onSubmit: async (e) => {
                e.preventDefault();
                await this.createOrUpdateUser();
            } }, index.h("ir-title", { key: '3061ae8f3d8046565bb6cdeb25b40e254b2028c5', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? this.user.username : 'Create New User' }), index.h("section", { key: 'f6c3ecc4480ea45fd858d18c10c2eafef0cb3e02', class: "px-1 sheet-body" }, index.h("ir-input-text", { key: 'ee85984a80a83f34ed0fc95803013f68548ff9f9', testId: "email", zod: this.userSchema.pick({ email: true }), wrapKey: "email", autoValidate: this.autoValidate, error: this.errors?.email, label: locales_store.locales.entries.Lcz_Email, placeholder: "", onTextChange: e => this.updateUserField('email', e.detail), value: this.userInfo.email, onInputBlur: this.handleBlur.bind(this), maxLength: 40, errorMessage: this.emailErrorMessage }), index.h("ir-input-text", { key: 'bf0f95a4f799eb0dbe4262cfa5e94d7f333b8d7b', testId: "mobile", disabled: this.disableFields, zod: this.userSchema.pick({ mobile: true }), wrapKey: "mobile", error: this.errors?.mobile, asyncParse: true, autoValidate: this.user ? (this.userInfo?.mobile !== this.user.mobile ? true : false) : this.autoValidate, label: locales_store.locales.entries.Lcz_Mobile, mask: this.mobileMask, placeholder: '', value: this.userInfo.mobile, onTextChange: e => this.updateUserField('mobile', e.detail) }), (this.user && this.user?.type?.toString() === this.superAdminId) || this.isPropertyAdmin ? null : (index.h("div", { class: "mb-1" }, index.h("ir-select", { testId: "user_type", error: this.errors?.type && !this.userInfo.type, disabled: this.disableFields, label: "Role", data: this.allowedUsersTypes.map(t => ({
                text: t.value,
                value: t.code,
            })), firstOption: locales_store.locales.entries.Lcz_Select, selectedValue: this.userInfo.type?.toString(), onSelectChange: e => this.updateUserField('type', e.detail) }))), this.user?.type?.toString() !== '5' && (index.h(index.Fragment, { key: 'c4cab99ec9274cf5e7430dc7a5ed23a47793b2d6' }, index.h("input", { key: 'd178eba6bd087857722650cb881ba9ed65c463c9', type: "text", name: "dummy", style: { display: 'none' } }), index.h("ir-input-text", { key: '1cc356a1ababcaf8701695daa3c5fc31b52a967f', testId: "username", zod: this.userSchema.pick({ username: true }), wrapKey: "username", autoValidate: this.autoValidate, error: this.errors?.username, label: locales_store.locales.entries.Lcz_Username, disabled: this.disableFields, placeholder: "", onTextChange: e => this.updateUserField('username', e.detail), value: this.userInfo.username,
            // onInputBlur={this.handleBlur.bind(this)}
            maxLength: 40, autoComplete: "off" }))), !this.user ? (index.h(index.Fragment, null, index.h("input", { type: "text", name: "dummy", style: { display: 'none' } }), index.h("ir-input-text", { testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: locales_store.locales.entries.Lcz_Password, value: this.userInfo.password, autoComplete: "off", type: "password", maxLength: 16, zod: this.userSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && index.h("ir-password-validator", { class: "mb-1", password: this.userInfo.password }))) : (
        // this.haveAdminPrivileges &&
        // this.user.type.toString() !== this.superAdminId &&
        // (this.user?.type.toString() === '17' && this.userTypeCode?.toString() === '17' ? null : (
        index.h("div", { class: "d-flex mt-2 align-items-center justify-content-between" }, index.h("h4", { class: "m-0 p-0 logins-history-title" }, locales_store.locales.entries.Lcz_Password), index.h("ir-button", { size: "sm", btn_styles: 'pr-0', onClickHandler: () => (this.isOpen = true), text: locales_store.locales.entries.Lcz_ChangePassword, btn_color: "link" }))
        // ))
        ), this.user?.sign_ins?.length > 0 && (index.h("section", { key: '2d8630472a5b452adceef92b07f93e15e4aeabab', class: "logins-history-section mt-2" }, index.h("div", { key: '6317e3f996aabfc4c0f3e34923bcd9d0d9bb953b', class: "d-flex align-items-center logins-history-title-container justify-content-between" }, index.h("h4", { key: 'b76f0837c1501cdb4195241130eaf876f773795b', class: "logins-history-title m-0 p-0" }, "Recent sign-ins"), this.user.sign_ins.length > 5 && (index.h("ir-button", { key: 'c51ca0b4b70a1390ec11cebab52d28f1e13adc65', btn_styles: 'pr-0', text: !this.showFullHistory ? locales_store.locales.entries.Lcz_ViewAll : locales_store.locales.entries.Lcz_ViewLess, btn_color: "link", size: "sm", onClickHandler: () => (this.showFullHistory = !this.showFullHistory) }))), index.h("ul", { key: '6b624cdb4bf9918fcc9154335e0eb4bdedb8b8e9', class: "logins-history-list" }, this.user.sign_ins.slice(0, this.showFullHistory ? this.user.sign_ins.length : 5).map((s, i) => {
            const ua = uaParser_pack.exports.UAParser(s.user_agent);
            return (index.h("li", { class: "login-entry", key: s.date + '_' + i }, index.h("div", { class: "login-meta" }, index.h("p", { class: "login-datetime" }, moment.hooks(s.date, 'YYYY-MM-DD').format('DD-MMM-YYYY'), " ", functions._formatTime(s.hour?.toString(), s.minute?.toString()), " |"), index.h("p", { class: "login-location" }, index.h("span", { class: "login-ip" }, locales_store.locales.entries.Lcz_IP, ": ", s.ip), ' ', "\u00A0|\u00A0", index.h("span", { class: "login-country" }, locales_store.locales.entries.Lcz_Location, ": ", s.country), ' ', "\u00A0|\u00A0", index.h("span", { class: "login-os" }, "OS: ", ua.os.name ?? 'N/A', " ", ua.os.version)))));
        })))), index.h("ir-sidebar", { key: '38227be0174ec85f82b347c9b2d4a6ca3137ad84', open: this.isOpen, showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
            }, onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            } }, this.isOpen && (index.h("ir-reset-password", { key: 'a11414c6d64b2f0e344629ef62ea4b1feee649cc', ticket: this.token.getToken(), skip2Fa: true, username: this.user.username, onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, slot: "sidebar-body" })))), index.h("div", { key: '7dd2849441c1648b31529519ebc04ba0af564ccc', class: "sheet-footer" }, index.h("ir-button", { key: '561f7c102eb1b39a529b9f4e5a5cc77126f9c4cb', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: 'dfc669391050a48339cb488e15bb52aa9cdf3310', "data-testid": "save", isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save }))));
    }
};
IrUserFormPanel.style = IrUserFormPanelStyle0 + IrUserFormPanelStyle1;

const irUserManagementTableCss = ".sc-ir-user-management-table-h{display:block}.badge.sc-ir-user-management-table{border:none;padding:0.2rem 0.3rem}.badge.sc-ir-user-management-table:disabled{cursor:default}";
const IrUserManagementTableStyle0 = irUserManagementTableCss;

const tableCss = ".ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-user-management-table{overflow-x:auto}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table tbody.sc-ir-user-management-table tr.sc-ir-user-management-table:last-child>td.sc-ir-user-management-table{border-bottom:0 !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-user-management-table .empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-user-management-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:#e3f3fa !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table,.ir-table-row.sc-ir-user-management-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize}.sortable.sc-ir-user-management-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--blue)}.sticky-column.sc-ir-user-management-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-user-management-table,.data-table.sc-ir-user-management-table{height:100%}";
const IrUserManagementTableStyle1 = tableCss;

const IrUserManagementTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
    }
    users = [];
    isSuperAdmin;
    userTypes = new Map();
    userTypeCode;
    haveAdminPrivileges;
    superAdminId = '5';
    allowedUsersTypes = [];
    baseUserTypeCode;
    property_id;
    currentTrigger = null;
    user = null;
    modalType;
    //Permissions
    canDelete;
    canEdit;
    canCreate;
    toast;
    resetData;
    modalRef;
    userService = new user_service.UserService();
    systemService = new system_service.SystemService();
    componentWillLoad() {
        this.assignPermissions();
    }
    handleChange(n, o) {
        if (n !== o) {
            this.assignPermissions();
        }
    }
    assignPermissions() {
        this.canCreate = this.haveAdminPrivileges;
        this.canDelete = this.haveAdminPrivileges;
        this.canEdit = true;
    }
    async handleUserActiveChange(e, user) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const res = await this.verifyAdminAction({ type: 'user', mode: 'update', user });
        if (res === 'cancelled') {
            return;
        }
        await this.userService.handleExposedUser({
            email: user.email,
            id: user.id,
            is_active: e.detail,
            mobile: user.mobile,
            password: user.password,
            type: user.type,
            username: user.username,
            base_user_type_code: this.baseUserTypeCode,
            property_id: this.property_id,
        });
        this.toast.emit({
            position: 'top-right',
            title: 'Saved Successfully',
            description: '',
            type: 'success',
        });
    }
    async executeUserAction(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            await this.userService.handleExposedUser({
                email: this.user.email,
                id: this.user.id,
                is_active: this.user.is_active,
                is_email_verified: this.modalType === 'verify' ? false : this.user.is_email_verified,
                mobile: this.user.mobile,
                password: this.user.password,
                type: this.user.type,
                username: this.user.username,
                is_to_remove: this.modalType === 'delete',
            });
            this.resetData.emit(null);
        }
        finally {
            this.resetModalState();
            this.modalRef.closeModal();
        }
    }
    // private async sendVerificationEmail(user: User) {
    //   try {
    //     console.log(user);
    //     await this.userService.sendVerificationEmail();
    //     this.toast.emit({
    //       position: 'top-right',
    //       title: `We've sent a verification email to ${this.maskEmail(user.email)}.`,
    //       description: '',
    //       type: 'success',
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    renderCurrentTrigger() {
        if (!this.currentTrigger) {
            return null;
        }
        return (index.h("ir-user-form-panel", { property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }));
    }
    openModal(user, type) {
        if (!this.modalRef || !user) {
            return;
        }
        this.user = user;
        this.modalType = type;
        this.modalRef.openModal();
    }
    maskEmail(email) {
        if (!email || !email.includes('@'))
            return '';
        const [localPart, domain] = email.split('@');
        const visible = localPart.slice(0, 1); // show only the first letter
        const masked = '*'.repeat(Math.max(localPart.length - 1, 1)); // mask rest
        return `${visible}${masked}@${domain}`;
    }
    resetModalState() {
        this.user = null;
        this.modalType = null;
    }
    async verifyAdminAction(params) {
        const res = await this.systemService.checkOTPNecessity({
            METHOD_NAME: 'Handle_Exposed_User',
        });
        if (res?.cancelled) {
            return 'cancelled';
        }
        const { mode, ...rest } = params;
        if (mode === 'edit' || mode === 'create') {
            this.currentTrigger = {
                ...rest,
                isEdit: mode === 'edit',
            };
        }
        return 'ok';
    }
    render() {
        return (index.h(index.Host, { key: '95437377992327db5b9e1922fb5806f92cac0d11' }, index.h("section", { key: 'd1e6c3ab757546c37271e159b59096b1b228fb1d', class: "table-container h-100 p-1 w-100 m-0 table-responsive" }, index.h("table", { key: '7f026bcc76a9045125e940c2fd59e38e317b4d3f', class: "table" }, index.h("thead", { key: 'a1a04621893637ed8c7001b54fcfe972bc5016a7' }, index.h("tr", { key: '7e529bb32d86d89668c267666ee29a509f0723ed' }, index.h("th", { key: '9c150534b6092e3a8e5d55cba0ed88d970681cef', class: "text-left" }, locales_store.locales.entries.Lcz_Username ?? 'Username'), index.h("th", { key: '0762876480db5bd41ed2cd0c19ee5631b32fa46b', class: "text-left" }, locales_store.locales.entries.Lcz_Email), index.h("th", { key: '76992c68cb549693f6db4785754d80dd277f31a4', class: "text-left" }, locales_store.locales.entries.Lcz_Mobile ?? 'Mobile'), index.h("th", { key: '42fc08653327ed5799a373568ad1ab0c3b89d585', class: "text-left" }, locales_store.locales.entries.Lcz_Role), index.h("th", { key: '562a6da16a9155691b4353ef7fea38fcb8c00b6d', class: "text-left small", style: { fontWeight: 'bold' } }, index.h("p", { key: 'cfcdbf28ae73376436b8277e9912b0744bca2c75', class: "m-0 p-0 " }, locales_store.locales.entries.Lcz_CreatedAt), index.h("p", { key: '992351ece5ad6e29d2a4184c8e67d1dba17cf75d', class: "m-0 p-0" }, locales_store.locales.entries.Lcz_LastSignedIn)), this.haveAdminPrivileges && index.h("th", { key: '4a1bd5e938a394f918706787fc75ac5b5ac6cb7d' }, locales_store.locales.entries.Lcz_Active), index.h("th", { key: 'a5e13c61cbb97e8f7610c0ae6f1d220b14b473cf', class: 'action-row' }, this.canCreate && (index.h("ir-icon", { key: '1585d4caa1ac6502c19ae1dc5368c5a69928300d', style: { paddingLeft: '0.875rem' }, "data-testid": "new_user", title: locales_store.locales.entries.Lcz_CreateUser, onIconClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    mode: 'create',
                    user: null,
                });
            } }, index.h("svg", { key: '1d22956cd7c4007e20b308bc1fc0c191f8901f39', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, index.h("path", { key: '3dc57f1ca7a2d1cd578b94061184c7d7f8513dd7', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))))), index.h("tbody", { key: '05ecae086adde5bb7130d287a350218f8e0aa79f' }, this.users.map(user => {
            const isUserSuperAdmin = user.type.toString() === this.superAdminId;
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            const latestSignInDate = latestSignIn ? moment.hooks(latestSignIn.date, 'YYYY-MM-DD') : null;
            const isLastSignInOld = latestSignInDate ? moment.hooks().diff(latestSignInDate, 'days') > 30 : false;
            return (index.h("tr", { key: user.id, class: "ir-table-row" }, index.h("td", null, user.username), index.h("td", null, user.email, this.haveAdminPrivileges && (index.h("span", { style: { marginLeft: '0.5rem' }, class: `small ${user.is_email_verified ? 'text-success' : 'text-danger'}` }, user.is_email_verified ? locales_store.locales.entries.Lcz_Verified : locales_store.locales.entries.Lcz_NotVerified))), index.h("td", null, user.mobile ?? 'N/A'), index.h("td", null, user.type.toString() === this.superAdminId ? locales_store.locales.entries.Lcz_SuperAdmin : this.userTypes.get(user.type.toString())), index.h("td", { class: "small" }, index.h("p", { class: "m-0 p-0" }, new Date(user.created_on).getFullYear() === 1900 || !user.created_on ? 'N/A' : moment.hooks(user.created_on, 'YYYY-MM-DD').format('DD-MMM-YYYY')), index.h("p", { class: `m-0 p-0 ${isLastSignInOld ? 'text-danger' : ''}` }, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? moment.hooks(latestSignIn.date, 'YYYY-MM-DD').format('DD-MMM-YYYY') + ' ' + functions._formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : 'N/A')), this.haveAdminPrivileges && (index.h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && index.h("ir-switch", { onCheckChange: e => this.handleUserActiveChange(e, user), checked: user.is_active }))), index.h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (index.h("div", { class: "icons-container  d-flex align-items-center", style: { gap: '0.5rem' } }, this.canEdit && (index.h("ir-icon", { "data-testid": "edit", title: locales_store.locales.entries.Lcz_EditUser, onIconClickHandler: () => {
                    this.verifyAdminAction({
                        type: 'user',
                        mode: 'edit',
                        user,
                    });
                }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, index.h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" })))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (index.h("ir-icon", { "data-testid": "delete", title: locales_store.locales.entries.Lcz_DeleteUser, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: async () => {
                    const res = await this.verifyAdminAction({
                        type: 'user',
                        mode: 'delete',
                        user,
                    });
                    if (res === 'cancelled') {
                        return;
                    }
                    this.openModal(user, 'delete');
                } }, index.h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))))))));
        })))), index.h("ir-sidebar", { key: '92e126ac25571c1bdf95870c5e2512b1a46a9ada', open: this.currentTrigger !== null && this.currentTrigger?.type !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
                '--sidebar-width': this.currentTrigger ? (this.currentTrigger?.type === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), index.h("ir-modal", { key: 'c4d1a1113fce333f496bbeb05a8bffc88c77a6ab', autoClose: false, modalBody: this.modalType === 'delete'
                ? `${locales_store.locales.entries.Lcz_AreYouSureToDelete} ${this.user?.username}?`
                : `${locales_store.locales.entries.Lcz_AreYouSureToUnverify} ${this.maskEmail(this.user?.email)}`, rightBtnColor: "danger", isLoading: irInterceptor_store.isRequestPending('/Handle_Exposed_User'), onCancelModal: this.resetModalState.bind(this), rightBtnText: this.modalType === 'verify' ? locales_store.locales.entries.Lcz_Confirm : locales_store.locales.entries.Lcz_Delete, onConfirmModal: this.executeUserAction.bind(this), ref: el => (this.modalRef = el) })));
    }
    static get watchers() { return {
        "haveAdminPrivileges": ["handleChange"]
    }; }
};
IrUserManagementTable.style = IrUserManagementTableStyle0 + IrUserManagementTableStyle1;

exports.ir_user_form_panel = IrUserFormPanel;
exports.ir_user_management_table = IrUserManagementTable;

//# sourceMappingURL=ir-user-form-panel_2.cjs.entry.js.map