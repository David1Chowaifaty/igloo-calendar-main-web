import momentHijri from 'moment-hijri';
import 'moment/locale/ar';
import 'moment/locale/ar-dz';
import 'moment/locale/ar-kw';
import 'moment/locale/ar-ly';
import 'moment/locale/ar-ma';
import 'moment/locale/ar-ps';
import 'moment/locale/ar-sa';
import 'moment/locale/ar-tn';
import 'moment/locale/de';
import 'moment/locale/el';
import 'moment/locale/fr';
import 'moment/locale/he';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/uk';
/**
 * Idempotently applies the Arabic Hijri month tables to every Arabic variant and pins moment's
 * global locale to `'en'`.
 * Safe (and cheap) to call on every format. Runs lazily so that it is guaranteed to execute
 * after the side-effect locale imports above, whatever order the bundler emits them in.
 */
export declare function configureMoment(): void;
export { momentHijri };
export default momentHijri;
