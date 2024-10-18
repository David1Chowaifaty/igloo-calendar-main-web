'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const turndown_browser_es = require('./turndown.browser.es-8a1ff1d3.js');

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

const deburrLetter$1 = deburrLetter;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;

/** Used to compose unicode capture groups. */
var rsCombo$1 = '[' + rsComboRange$1 + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo$1, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = turndown_browser_es.toString(string);
  return string && string.replace(reLatin, deburrLetter$1).replace(reComboMark, '');
}

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos$1 = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = turndown_browser_es.toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = turndown_browser_es.createAssigner(function(object, source, srcIndex, customizer) {
  turndown_browser_es.baseMerge(object, source, srcIndex, customizer);
});

const mergeWith$1 = mergeWith;

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + turndown_browser_es.upperFirst(word);
});

const startCase$1 = startCase;

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * The block autoformatting engine. It allows to format various block patterns. For example,
 * it can be configured to turn a paragraph starting with `*` and followed by a space into a list item.
 *
 * The autoformatting operation is integrated with the undo manager,
 * so the autoformatting step can be undone if the user's intention was not to format the text.
 *
 * See the {@link module:autoformat/blockautoformatediting~blockAutoformatEditing `blockAutoformatEditing`} documentation
 * to learn how to create custom block autoformatters. You can also use
 * the {@link module:autoformat/autoformat~Autoformat} feature which enables a set of default autoformatters
 * (lists, headings, bold and italic).
 *
 * @module autoformat/blockautoformatediting
 */ /**
 * Creates a listener triggered on {@link module:engine/model/document~Document#event:change:data `change:data`} event in the document.
 * Calls the callback when inserted text matches the regular expression or the command name
 * if provided instead of the callback.
 *
 * Examples of usage:
 *
 * To convert a paragraph into heading 1 when `- ` is typed, using just the command name:
 *
 * ```ts
 * blockAutoformatEditing( editor, plugin, /^\- $/, 'heading1' );
 * ```
 *
 * To convert a paragraph into heading 1 when `- ` is typed, using just the callback:
 *
 * ```ts
 * blockAutoformatEditing( editor, plugin, /^\- $/, ( context ) => {
 * 	const { match } = context;
 * 	const headingLevel = match[ 1 ].length;
 *
 * 	editor.execute( 'heading', {
 * 		formatId: `heading${ headingLevel }`
 * 	} );
 * } );
 * ```
 *
 * @param editor The editor instance.
 * @param plugin The autoformat plugin instance.
 * @param pattern The regular expression to execute on just inserted text. The regular expression is tested against the text
 * from the beginning until the caret position.
 * @param callbackOrCommand The callback to execute or the command to run when the text is matched.
 * In case of providing the callback, it receives the following parameter:
 * * match RegExp.exec() result of matching the pattern to inserted text.
 */ function blockAutoformatEditing(editor, plugin, pattern, callbackOrCommand) {
    let callback;
    let command = null;
    if (typeof callbackOrCommand == 'function') {
        callback = callbackOrCommand;
    } else {
        // We assume that the actual command name was provided.
        command = editor.commands.get(callbackOrCommand);
        callback = ()=>{
            editor.execute(callbackOrCommand);
        };
    }
    editor.model.document.on('change:data', (evt, batch)=>{
        if (command && !command.isEnabled || !plugin.isEnabled) {
            return;
        }
        const range = turndown_browser_es.first(editor.model.document.selection.getRanges());
        if (!range.isCollapsed) {
            return;
        }
        if (batch.isUndo || !batch.isLocal) {
            return;
        }
        const changes = Array.from(editor.model.document.differ.getChanges());
        const entry = changes[0];
        // Typing is represented by only a single change.
        if (changes.length != 1 || entry.type !== 'insert' || entry.name != '$text' || entry.length != 1) {
            return;
        }
        const blockToFormat = entry.position.parent;
        // Block formatting should be disabled in codeBlocks (#5800).
        if (blockToFormat.is('element', 'codeBlock')) {
            return;
        }
        // Only list commands and custom callbacks can be applied inside a list.
        if (blockToFormat.is('element', 'listItem') && typeof callbackOrCommand !== 'function' && ![
            'numberedList',
            'bulletedList',
            'todoList'
        ].includes(callbackOrCommand)) {
            return;
        }
        // In case a command is bound, do not re-execute it over an existing block style which would result in a style removal.
        // Instead, just drop processing so that autoformat trigger text is not lost. E.g. writing "# " in a level 1 heading.
        if (command && command.value === true) {
            return;
        }
        const firstNode = blockToFormat.getChild(0);
        const firstNodeRange = editor.model.createRangeOn(firstNode);
        // Range is only expected to be within or at the very end of the first text node.
        if (!firstNodeRange.containsRange(range) && !range.end.isEqual(firstNodeRange.end)) {
            return;
        }
        const match = pattern.exec(firstNode.data.substr(0, range.end.offset));
        // ...and this text node's data match the pattern.
        if (!match) {
            return;
        }
        // Use enqueueChange to create new batch to separate typing batch from the auto-format changes.
        editor.model.enqueueChange((writer)=>{
            // Matched range.
            const start = writer.createPositionAt(blockToFormat, 0);
            const end = writer.createPositionAt(blockToFormat, match[0].length);
            const range = new turndown_browser_es.LiveRange(start, end);
            const wasChanged = callback({
                match
            });
            // Remove matched text.
            if (wasChanged !== false) {
                writer.remove(range);
                const selectionRange = editor.model.document.selection.getFirstRange();
                const blockRange = writer.createRangeIn(blockToFormat);
                // If the block is empty and the document selection has been moved when
                // applying formatting (e.g. is now in newly created block).
                if (blockToFormat.isEmpty && !blockRange.isEqual(selectionRange) && !blockRange.containsRange(selectionRange, true)) {
                    writer.remove(blockToFormat);
                }
            }
            range.detach();
            editor.model.enqueueChange(()=>{
                const deletePlugin = editor.plugins.get('Delete');
                deletePlugin.requestUndoOnBackspace();
            });
        });
    });
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */ /**
 * The inline autoformatting engine. It allows to format various inline patterns. For example,
 * it can be configured to make "foo" bold when typed `**foo**` (the `**` markers will be removed).
 *
 * The autoformatting operation is integrated with the undo manager,
 * so the autoformatting step can be undone if the user's intention was not to format the text.
 *
 * See the {@link module:autoformat/inlineautoformatediting~inlineAutoformatEditing `inlineAutoformatEditing`} documentation
 * to learn how to create custom inline autoformatters. You can also use
 * the {@link module:autoformat/autoformat~Autoformat} feature which enables a set of default autoformatters
 * (lists, headings, bold and italic).
 *
 * @module autoformat/inlineautoformatediting
 */ /**
 * Enables autoformatting mechanism for a given {@link module:core/editor/editor~Editor}.
 *
 * It formats the matched text by applying the given model attribute or by running the provided formatting callback.
 * On every {@link module:engine/model/document~Document#event:change:data data change} in the model document
 * the autoformatting engine checks the text on the left of the selection
 * and executes the provided action if the text matches given criteria (regular expression or callback).
 *
 * @param editor The editor instance.
 * @param plugin The autoformat plugin instance.
 * @param testRegexpOrCallback The regular expression or callback to execute on text.
 * Provided regular expression *must* have three capture groups. The first and the third capture group
 * should match opening and closing delimiters. The second capture group should match the text to format.
 *
 * ```ts
 * // Matches the `**bold text**` pattern.
 * // There are three capturing groups:
 * // - The first to match the starting `**` delimiter.
 * // - The second to match the text to format.
 * // - The third to match the ending `**` delimiter.
 * inlineAutoformatEditing( editor, plugin, /(\*\*)([^\*]+?)(\*\*)$/g, formatCallback );
 * ```
 *
 * When a function is provided instead of the regular expression, it will be executed with the text to match as a parameter.
 * The function should return proper "ranges" to delete and format.
 *
 * ```ts
 * {
 * 	remove: [
 * 		[ 0, 1 ],	// Remove the first letter from the given text.
 * 		[ 5, 6 ]	// Remove the 6th letter from the given text.
 * 	],
 * 	format: [
 * 		[ 1, 5 ]	// Format all letters from 2nd to 5th.
 * 	]
 * }
 * ```
 *
 * @param formatCallback A callback to apply actual formatting.
 * It should return `false` if changes should not be applied (e.g. if a command is disabled).
 *
 * ```ts
 * inlineAutoformatEditing( editor, plugin, /(\*\*)([^\*]+?)(\*\*)$/g, ( writer, rangesToFormat ) => {
 * 	const command = editor.commands.get( 'bold' );
 *
 * 	if ( !command.isEnabled ) {
 * 		return false;
 * 	}
 *
 * 	const validRanges = editor.model.schema.getValidRanges( rangesToFormat, 'bold' );
 *
 * 	for ( let range of validRanges ) {
 * 		writer.setAttribute( 'bold', true, range );
 * 	}
 * } );
 * ```
 */ function inlineAutoformatEditing(editor, plugin, testRegexpOrCallback, formatCallback) {
    let regExp;
    let testCallback;
    if (testRegexpOrCallback instanceof RegExp) {
        regExp = testRegexpOrCallback;
    } else {
        testCallback = testRegexpOrCallback;
    }
    // A test callback run on changed text.
    testCallback = testCallback || ((text)=>{
        let result;
        const remove = [];
        const format = [];
        while((result = regExp.exec(text)) !== null){
            // There should be full match and 3 capture groups.
            if (result && result.length < 4) {
                break;
            }
            let { index, '1': leftDel, '2': content, '3': rightDel } = result;
            // Real matched string - there might be some non-capturing groups so we need to recalculate starting index.
            const found = leftDel + content + rightDel;
            index += result[0].length - found.length;
            // Start and End offsets of delimiters to remove.
            const delStart = [
                index,
                index + leftDel.length
            ];
            const delEnd = [
                index + leftDel.length + content.length,
                index + leftDel.length + content.length + rightDel.length
            ];
            remove.push(delStart);
            remove.push(delEnd);
            format.push([
                index + leftDel.length,
                index + leftDel.length + content.length
            ]);
        }
        return {
            remove,
            format
        };
    });
    editor.model.document.on('change:data', (evt, batch)=>{
        if (batch.isUndo || !batch.isLocal || !plugin.isEnabled) {
            return;
        }
        const model = editor.model;
        const selection = model.document.selection;
        // Do nothing if selection is not collapsed.
        if (!selection.isCollapsed) {
            return;
        }
        const changes = Array.from(model.document.differ.getChanges());
        const entry = changes[0];
        // Typing is represented by only a single change.
        if (changes.length != 1 || entry.type !== 'insert' || entry.name != '$text' || entry.length != 1) {
            return;
        }
        const focus = selection.focus;
        const block = focus.parent;
        const { text, range } = getTextAfterCode(model.createRange(model.createPositionAt(block, 0), focus), model);
        const testOutput = testCallback(text);
        const rangesToFormat = testOutputToRanges(range.start, testOutput.format, model);
        const rangesToRemove = testOutputToRanges(range.start, testOutput.remove, model);
        if (!(rangesToFormat.length && rangesToRemove.length)) {
            return;
        }
        // Use enqueueChange to create new batch to separate typing batch from the auto-format changes.
        model.enqueueChange((writer)=>{
            // Apply format.
            const hasChanged = formatCallback(writer, rangesToFormat);
            // Strict check on `false` to have backward compatibility (when callbacks were returning `undefined`).
            if (hasChanged === false) {
                return;
            }
            // Remove delimiters - use reversed order to not mix the offsets while removing.
            for (const range of rangesToRemove.reverse()){
                writer.remove(range);
            }
            model.enqueueChange(()=>{
                const deletePlugin = editor.plugins.get('Delete');
                deletePlugin.requestUndoOnBackspace();
            });
        });
    });
}
/**
 * Converts output of the test function provided to the inlineAutoformatEditing and converts it to the model ranges
 * inside provided block.
 */ function testOutputToRanges(start, arrays, model) {
    return arrays.filter((array)=>array[0] !== undefined && array[1] !== undefined).map((array)=>{
        return model.createRange(start.getShiftedBy(array[0]), start.getShiftedBy(array[1]));
    });
}
/**
 * Returns the last text line after the last code element from the given range.
 * It is similar to {@link module:typing/utils/getlasttextline.getLastTextLine `getLastTextLine()`},
 * but it ignores any text before the last `code`.
 */ function getTextAfterCode(range, model) {
    let start = range.start;
    const text = Array.from(range.getItems()).reduce((rangeText, node)=>{
        // Trim text to a last occurrence of an inline element and update range start.
        if (!(node.is('$text') || node.is('$textProxy')) || node.getAttribute('code')) {
            start = model.createPositionAfter(node);
            return '';
        }
        return rangeText + node.data;
    }, '');
    return {
        text,
        range: model.createRange(start, range.end)
    };
}

/**
 * Enables a set of predefined autoformatting actions.
 *
 * For a detailed overview, check the {@glink features/autoformat Autoformatting} feature guide
 * and the {@glink api/autoformat package page}.
 */ class Autoformat extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            turndown_browser_es.Delete
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'Autoformat';
    }
    /**
	 * @inheritDoc
	 */ afterInit() {
        const editor = this.editor;
        const t = this.editor.t;
        this._addListAutoformats();
        this._addBasicStylesAutoformats();
        this._addHeadingAutoformats();
        this._addBlockQuoteAutoformats();
        this._addCodeBlockAutoformats();
        this._addHorizontalLineAutoformats();
        // Add the information about the keystroke to the accessibility database.
        editor.accessibility.addKeystrokeInfos({
            keystrokes: [
                {
                    label: t('Revert autoformatting action'),
                    keystroke: 'Backspace'
                }
            ]
        });
    }
    /**
	 * Adds autoformatting related to the {@link module:list/list~List}.
	 *
	 * When typed:
	 * - `* ` or `- ` &ndash; A paragraph will be changed into a bulleted list.
	 * - `1. ` or `1) ` &ndash; A paragraph will be changed into a numbered list ("1" can be any digit or a list of digits).
	 * - `[] ` or `[ ] ` &ndash; A paragraph will be changed into a to-do list.
	 * - `[x] ` or `[ x ] ` &ndash; A paragraph will be changed into a checked to-do list.
	 */ _addListAutoformats() {
        const commands = this.editor.commands;
        if (commands.get('bulletedList')) {
            blockAutoformatEditing(this.editor, this, /^[*-]\s$/, 'bulletedList');
        }
        if (commands.get('numberedList')) {
            blockAutoformatEditing(this.editor, this, /^1[.|)]\s$/, 'numberedList');
        }
        if (commands.get('todoList')) {
            blockAutoformatEditing(this.editor, this, /^\[\s?\]\s$/, 'todoList');
        }
        if (commands.get('checkTodoList')) {
            blockAutoformatEditing(this.editor, this, /^\[\s?x\s?\]\s$/, ()=>{
                this.editor.execute('todoList');
                this.editor.execute('checkTodoList');
            });
        }
    }
    /**
	 * Adds autoformatting related to the {@link module:basic-styles/bold~Bold},
	 * {@link module:basic-styles/italic~Italic}, {@link module:basic-styles/code~Code}
	 * and {@link module:basic-styles/strikethrough~Strikethrough}
	 *
	 * When typed:
	 * - `**foobar**` &ndash; `**` characters are removed and `foobar` is set to bold,
	 * - `__foobar__` &ndash; `__` characters are removed and `foobar` is set to bold,
	 * - `*foobar*` &ndash; `*` characters are removed and `foobar` is set to italic,
	 * - `_foobar_` &ndash; `_` characters are removed and `foobar` is set to italic,
	 * - ``` `foobar` &ndash; ``` ` ``` characters are removed and `foobar` is set to code,
	 * - `~~foobar~~` &ndash; `~~` characters are removed and `foobar` is set to strikethrough.
	 */ _addBasicStylesAutoformats() {
        const commands = this.editor.commands;
        if (commands.get('bold')) {
            const boldCallback = getCallbackFunctionForInlineAutoformat(this.editor, 'bold');
            inlineAutoformatEditing(this.editor, this, /(?:^|\s)(\*\*)([^*]+)(\*\*)$/g, boldCallback);
            inlineAutoformatEditing(this.editor, this, /(?:^|\s)(__)([^_]+)(__)$/g, boldCallback);
        }
        if (commands.get('italic')) {
            const italicCallback = getCallbackFunctionForInlineAutoformat(this.editor, 'italic');
            // The italic autoformatter cannot be triggered by the bold markers, so we need to check the
            // text before the pattern (e.g. `(?:^|[^\*])`).
            inlineAutoformatEditing(this.editor, this, /(?:^|\s)(\*)([^*_]+)(\*)$/g, italicCallback);
            inlineAutoformatEditing(this.editor, this, /(?:^|\s)(_)([^_]+)(_)$/g, italicCallback);
        }
        if (commands.get('code')) {
            const codeCallback = getCallbackFunctionForInlineAutoformat(this.editor, 'code');
            inlineAutoformatEditing(this.editor, this, /(`)([^`]+)(`)$/g, codeCallback);
        }
        if (commands.get('strikethrough')) {
            const strikethroughCallback = getCallbackFunctionForInlineAutoformat(this.editor, 'strikethrough');
            inlineAutoformatEditing(this.editor, this, /(~~)([^~]+)(~~)$/g, strikethroughCallback);
        }
    }
    /**
	 * Adds autoformatting related to {@link module:heading/heading~Heading}.
	 *
	 * It is using a number at the end of the command name to associate it with the proper trigger:
	 *
	 * * `heading` with a `heading1` value will be executed when typing `#`,
	 * * `heading` with a `heading2` value will be executed when typing `##`,
	 * * ... up to `heading6` for `######`.
	 */ _addHeadingAutoformats() {
        const command = this.editor.commands.get('heading');
        if (command) {
            command.modelElements.filter((name)=>name.match(/^heading[1-6]$/)).forEach((modelName)=>{
                const level = modelName[7];
                const pattern = new RegExp(`^(#{${level}})\\s$`);
                blockAutoformatEditing(this.editor, this, pattern, ()=>{
                    // Should only be active if command is enabled and heading style associated with pattern is inactive.
                    if (!command.isEnabled || command.value === modelName) {
                        return false;
                    }
                    this.editor.execute('heading', {
                        value: modelName
                    });
                });
            });
        }
    }
    /**
	 * Adds autoformatting related to {@link module:block-quote/blockquote~BlockQuote}.
	 *
	 * When typed:
	 * * `> ` &ndash; A paragraph will be changed to a block quote.
	 */ _addBlockQuoteAutoformats() {
        if (this.editor.commands.get('blockQuote')) {
            blockAutoformatEditing(this.editor, this, /^>\s$/, 'blockQuote');
        }
    }
    /**
	 * Adds autoformatting related to {@link module:code-block/codeblock~CodeBlock}.
	 *
	 * When typed:
	 * - `` ``` `` &ndash; A paragraph will be changed to a code block.
	 */ _addCodeBlockAutoformats() {
        const editor = this.editor;
        const selection = editor.model.document.selection;
        if (editor.commands.get('codeBlock')) {
            blockAutoformatEditing(editor, this, /^```$/, ()=>{
                if (selection.getFirstPosition().parent.is('element', 'listItem')) {
                    return false;
                }
                this.editor.execute('codeBlock', {
                    usePreviousLanguageChoice: true
                });
            });
        }
    }
    /**
	 * Adds autoformatting related to {@link module:horizontal-line/horizontalline~HorizontalLine}.
	 *
	 * When typed:
	 * - `` --- `` &ndash; Will be replaced with a horizontal line.
	 */ _addHorizontalLineAutoformats() {
        if (this.editor.commands.get('horizontalLine')) {
            blockAutoformatEditing(this.editor, this, /^---$/, 'horizontalLine');
        }
    }
}
/**
 * Helper function for getting `inlineAutoformatEditing` callbacks that checks if command is enabled.
 */ function getCallbackFunctionForInlineAutoformat(editor, attributeKey) {
    return (writer, rangesToFormat)=>{
        const command = editor.commands.get(attributeKey);
        if (!command.isEnabled) {
            return false;
        }
        const validRanges = editor.model.schema.getValidRanges(rangesToFormat, attributeKey);
        for (const range of validRanges){
            writer.setAttribute(attributeKey, true, range);
        }
        // After applying attribute to the text, remove given attribute from the selection.
        // This way user is able to type a text without attribute used by auto formatter.
        writer.removeSelectionAttribute(attributeKey);
    };
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals window */ /**
 * The {@link module:autosave/autosave~Autosave} plugin allows you to automatically save the data (e.g. send it to the server)
 * when needed (when the user changed the content).
 *
 * It listens to the {@link module:engine/model/document~Document#event:change:data `editor.model.document#change:data`}
 * and `window#beforeunload` events and calls the
 * {@link module:autosave/autosave~AutosaveAdapter#save `config.autosave.save()`} function.
 *
 * ```ts
 * ClassicEditor
 * 	.create( document.querySelector( '#editor' ), {
 * 		plugins: [ ArticlePluginSet, Autosave ],
 * 		toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo' ],
 * 		image: {
 * 			toolbar: [ 'imageStyle:block', 'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative' ],
 * 		},
 * 		autosave: {
 * 			save( editor: Editor ) {
 * 				// The saveData() function must return a promise
 * 				// which should be resolved when the data is successfully saved.
 * 				return saveData( editor.getData() );
 * 			}
 * 		}
 * 	} );
 * ```
 *
 * Read more about this feature in the {@glink features/autosave Autosave} feature guide.
 */ class Autosave extends turndown_browser_es.Plugin {
    /**
	 * The adapter is an object with a `save()` method. That method will be called whenever
	 * the data changes. It might be called some time after the change,
	 * since the event is throttled for performance reasons.
	 */ adapter;
    /**
	 * Debounced save method. The `save()` method is called the specified `waitingTime` after `debouncedSave()` is called,
	 * unless a new action happens in the meantime.
	 */ _debouncedSave;
    /**
	 * The last saved document version.
	 */ _lastDocumentVersion;
    /**
	 * Promise used for asynchronous save calls.
	 *
	 * Created to handle the autosave call to an external data source. It resolves when that call is finished. It is re-used if
	 * save is called before the promise has been resolved. It is set to `null` if there is no call in progress.
	 */ _savePromise;
    /**
	 * DOM emitter.
	 */ _domEmitter;
    /**
	 * The configuration of this plugins.
	 */ _config;
    /**
	 * Editor's pending actions manager.
	 */ _pendingActions;
    /**
	 * Informs whether there should be another autosave callback performed, immediately after current autosave callback finishes.
	 *
	 * This is set to `true` when there is a save request while autosave callback is already being processed
	 * and the model has changed since the last save.
	 */ _makeImmediateSave;
    /**
	 * An action that will be added to the pending action manager for actions happening in that plugin.
	 */ _action = null;
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'Autosave';
    }
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            turndown_browser_es.PendingActions
        ];
    }
    /**
	 * @inheritDoc
	 */ constructor(editor){
        super(editor);
        const config = editor.config.get('autosave') || {};
        // A minimum amount of time that needs to pass after the last action.
        // After that time the provided save callbacks are being called.
        const waitingTime = config.waitingTime || 1000;
        this.set('state', 'synchronized');
        this._debouncedSave = turndown_browser_es.debounce(this._save.bind(this), waitingTime);
        this._lastDocumentVersion = editor.model.document.version;
        this._savePromise = null;
        this._domEmitter = new (turndown_browser_es.DomEmitterMixin())();
        this._config = config;
        this._pendingActions = editor.plugins.get(turndown_browser_es.PendingActions);
        this._makeImmediateSave = false;
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const doc = editor.model.document;
        // Add the listener only after the editor is initialized to prevent firing save callback on data init.
        this.listenTo(editor, 'ready', ()=>{
            this.listenTo(doc, 'change:data', (evt, batch)=>{
                if (!this._saveCallbacks.length) {
                    return;
                }
                if (!batch.isLocal) {
                    return;
                }
                if (this.state === 'synchronized') {
                    this.state = 'waiting';
                    // Set pending action already when we are waiting for the autosave callback.
                    this._setPendingAction();
                }
                if (this.state === 'waiting') {
                    this._debouncedSave();
                }
            // If the plugin is in `saving` state, it will change its state later basing on the `document.version`.
            // If the `document.version` will be higher than stored `#_lastDocumentVersion`, then it means, that some `change:data`
            // event has fired in the meantime.
            });
        });
        // Flush on the editor's destroy listener with the highest priority to ensure that
        // `editor.getData()` will be called before plugins are destroyed.
        this.listenTo(editor, 'destroy', ()=>this._flush(), {
            priority: 'highest'
        });
        // It's not possible to easy test it because karma uses `beforeunload` event
        // to warn before full page reload and this event cannot be dispatched manually.
        /* istanbul ignore next -- @preserve */ this._domEmitter.listenTo(window, 'beforeunload', (evtInfo, domEvt)=>{
            if (this._pendingActions.hasAny) {
                domEvt.returnValue = this._pendingActions.first.message;
            }
        });
    }
    /**
	 * @inheritDoc
	 */ destroy() {
        // There's no need for canceling or flushing the throttled save, as
        // it's done on the editor's destroy event with the highest priority.
        this._domEmitter.stopListening();
        super.destroy();
    }
    /**
	 * Immediately calls autosave callback. All previously queued (debounced) callbacks are cleared. If there is already an autosave
	 * callback in progress, then the requested save will be performed immediately after the current callback finishes.
	 *
	 * @returns A promise that will be resolved when the autosave callback is finished.
	 */ save() {
        this._debouncedSave.cancel();
        return this._save();
    }
    /**
	 * Invokes the remaining `_save()` method call.
	 */ _flush() {
        this._debouncedSave.flush();
    }
    /**
	 * If the adapter is set and a new document version exists,
	 * the `_save()` method creates a pending action and calls the `adapter.save()` method.
	 * It waits for the result and then removes the created pending action.
	 *
	 * @returns A promise that will be resolved when the autosave callback is finished.
	 */ _save() {
        if (this._savePromise) {
            this._makeImmediateSave = this.editor.model.document.version > this._lastDocumentVersion;
            return this._savePromise;
        }
        // Make sure there is a pending action (in case if `_save()` was called through manual `save()` call).
        this._setPendingAction();
        this.state = 'saving';
        this._lastDocumentVersion = this.editor.model.document.version;
        // Wait one promise cycle to be sure that save callbacks are not called inside a conversion or when the editor's state changes.
        this._savePromise = Promise.resolve()// Make autosave callback.
        .then(()=>Promise.all(this._saveCallbacks.map((cb)=>cb(this.editor))))// When the autosave callback is finished, always clear `this._savePromise`, no matter if it was successful or not.
        .finally(()=>{
            this._savePromise = null;
        })// If the save was successful, we have three scenarios:
        //
        // 1. If a save was requested when an autosave callback was already processed, we need to immediately call
        // another autosave callback. In this case, `this._savePromise` will not be resolved until the next callback is done.
        // 2. Otherwise, if changes happened to the model, make a delayed autosave callback (like the change just happened).
        // 3. If no changes happened to the model, return to the `synchronized` state.
        .then(()=>{
            if (this._makeImmediateSave) {
                this._makeImmediateSave = false;
                // Start another autosave callback. Return a promise that will be resolved after the new autosave callback.
                // This way promises returned by `_save()` will not be resolved until all changes are saved.
                //
                // If `save()` was called when another (most often automatic) autosave callback was already processed,
                // the promise returned by `save()` call will be resolved only after new changes have been saved.
                //
                // Note that it would not work correctly if `this._savePromise` is not cleared.
                return this._save();
            } else {
                if (this.editor.model.document.version > this._lastDocumentVersion) {
                    this.state = 'waiting';
                    this._debouncedSave();
                } else {
                    this.state = 'synchronized';
                    this._pendingActions.remove(this._action);
                    this._action = null;
                }
            }
        })// In case of an error, retry the autosave callback after a delay (and also throw the original error).
        .catch((err)=>{
            // Change state to `error` so that listeners handling autosave error can be called.
            this.state = 'error';
            // Then, immediately change to the `saving` state as described above.
            // Being in the `saving` state ensures that the autosave callback won't be delayed further by the `change:data` listener.
            this.state = 'saving';
            this._debouncedSave();
            throw err;
        });
        return this._savePromise;
    }
    /**
	 * Creates a pending action if it is not set already.
	 */ _setPendingAction() {
        const t = this.editor.t;
        if (!this._action) {
            this._action = this._pendingActions.add(t('Saving changes'));
        }
    }
    /**
	 * Saves callbacks.
	 */ get _saveCallbacks() {
        const saveCallbacks = [];
        if (this.adapter && this.adapter.save) {
            saveCallbacks.push(this.adapter.save);
        }
        if (this._config.save) {
            saveCallbacks.push(this._config.save);
        }
        return saveCallbacks;
    }
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * An extension of the base {@link module:core/command~Command} class, which provides utilities for a command
 * that toggles a single attribute on a text or an element.
 *
 * `AttributeCommand` uses {@link module:engine/model/document~Document#selection}
 * to decide which nodes (if any) should be changed, and applies or removes the attribute from them.
 *
 * The command checks the {@link module:engine/model/model~Model#schema} to decide if it can be enabled
 * for the current selection and to which nodes the attribute can be applied.
 */ class AttributeCommand extends turndown_browser_es.Command {
    /**
	 * The attribute that will be set by the command.
	 */ attributeKey;
    /**
	 * @param attributeKey Attribute that will be set by the command.
	 */ constructor(editor, attributeKey){
        super(editor);
        this.attributeKey = attributeKey;
    }
    /**
	 * Updates the command's {@link #value} and {@link #isEnabled} based on the current selection.
	 */ refresh() {
        const model = this.editor.model;
        const doc = model.document;
        this.value = this._getValueFromFirstAllowedNode();
        this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, this.attributeKey);
    }
    /**
	 * Executes the command &ndash; applies the attribute to the selection or removes it from the selection.
	 *
	 * If the command is active (`value == true`), it will remove attributes. Otherwise, it will set attributes.
	 *
	 * The execution result differs, depending on the {@link module:engine/model/document~Document#selection}:
	 *
	 * * If the selection is on a range, the command applies the attribute to all nodes in that range
	 * (if they are allowed to have this attribute by the {@link module:engine/model/schema~Schema schema}).
	 * * If the selection is collapsed in a non-empty node, the command applies the attribute to the
	 * {@link module:engine/model/document~Document#selection} itself (note that typed characters copy attributes from the selection).
	 * * If the selection is collapsed in an empty node, the command applies the attribute to the parent node of the selection (note
	 * that the selection inherits all attributes from a node if it is in an empty node).
	 *
	 * @fires execute
	 * @param options Command options.
	 * @param options.forceValue If set, it will force the command behavior. If `true`,
	 * the command will apply the attribute, otherwise the command will remove the attribute.
	 * If not set, the command will look for its current value to decide what it should do.
	 */ execute(options = {}) {
        const model = this.editor.model;
        const doc = model.document;
        const selection = doc.selection;
        const value = options.forceValue === undefined ? !this.value : options.forceValue;
        model.change((writer)=>{
            if (selection.isCollapsed) {
                if (value) {
                    writer.setSelectionAttribute(this.attributeKey, true);
                } else {
                    writer.removeSelectionAttribute(this.attributeKey);
                }
            } else {
                const ranges = model.schema.getValidRanges(selection.getRanges(), this.attributeKey);
                for (const range of ranges){
                    if (value) {
                        writer.setAttribute(this.attributeKey, value, range);
                    } else {
                        writer.removeAttribute(this.attributeKey, range);
                    }
                }
            }
        });
    }
    /**
	 * Checks the attribute value of the first node in the selection that allows the attribute.
	 * For the collapsed selection returns the selection attribute.
	 *
	 * @returns The attribute value.
	 */ _getValueFromFirstAllowedNode() {
        const model = this.editor.model;
        const schema = model.schema;
        const selection = model.document.selection;
        if (selection.isCollapsed) {
            return selection.hasAttribute(this.attributeKey);
        }
        for (const range of selection.getRanges()){
            for (const item of range.getItems()){
                if (schema.checkAttribute(item, this.attributeKey)) {
                    return item.hasAttribute(this.attributeKey);
                }
            }
        }
        return false;
    }
}

const BOLD$1 = 'bold';
/**
 * The bold editing feature.
 *
 * It registers the `'bold'` command and introduces the `bold` attribute in the model which renders to the view
 * as a `<strong>` element.
 */ class BoldEditing extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'BoldEditing';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const t = this.editor.t;
        // Allow bold attribute on text nodes.
        editor.model.schema.extend('$text', {
            allowAttributes: BOLD$1
        });
        editor.model.schema.setAttributeProperties(BOLD$1, {
            isFormatting: true,
            copyOnEnter: true
        });
        // Build converter from model to view for data and editing pipelines.
        editor.conversion.attributeToElement({
            model: BOLD$1,
            view: 'strong',
            upcastAlso: [
                'b',
                (viewElement)=>{
                    const fontWeight = viewElement.getStyle('font-weight');
                    if (!fontWeight) {
                        return null;
                    }
                    // Value of the `font-weight` attribute can be defined as a string or a number.
                    if (fontWeight == 'bold' || Number(fontWeight) >= 600) {
                        return {
                            name: true,
                            styles: [
                                'font-weight'
                            ]
                        };
                    }
                    return null;
                }
            ]
        });
        // Create bold command.
        editor.commands.add(BOLD$1, new AttributeCommand(editor, BOLD$1));
        // Set the Ctrl+B keystroke.
        editor.keystrokes.set('CTRL+B', BOLD$1);
        // Add the information about the keystroke to the accessibility database.
        editor.accessibility.addKeystrokeInfos({
            keystrokes: [
                {
                    label: t('Bold text'),
                    keystroke: 'CTRL+B'
                }
            ]
        });
    }
}

/**
 * Returns a function that creates a (toolbar or menu bar) button for a basic style feature.
 */ function getButtonCreator({ editor, commandName, plugin, icon, label, keystroke }) {
    return (ButtonClass)=>{
        const command = editor.commands.get(commandName);
        const view = new ButtonClass(editor.locale);
        view.set({
            label,
            icon,
            keystroke,
            isToggleable: true
        });
        view.bind('isEnabled').to(command, 'isEnabled');
        view.bind('isOn').to(command, 'value');
        if (view instanceof turndown_browser_es.MenuBarMenuListItemButtonView) {
            view.set({
                role: 'menuitemcheckbox'
            });
        } else {
            view.set({
                tooltip: true
            });
        }
        // Execute the command.
        plugin.listenTo(view, 'execute', ()=>{
            editor.execute(commandName);
            editor.editing.view.focus();
        });
        return view;
    };
}

const BOLD = 'bold';
/**
 * The bold UI feature. It introduces the Bold button.
 */ class BoldUI extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'BoldUI';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const t = editor.locale.t;
        const createButton = getButtonCreator({
            editor,
            commandName: BOLD,
            plugin: this,
            icon: turndown_browser_es.icons.bold,
            label: t('Bold'),
            keystroke: 'CTRL+B'
        });
        // Add bold button to feature components.
        editor.ui.componentFactory.add(BOLD, ()=>createButton(turndown_browser_es.ButtonView));
        editor.ui.componentFactory.add('menuBar:' + BOLD, ()=>createButton(turndown_browser_es.MenuBarMenuListItemButtonView));
    }
}

/**
 * The bold feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature} guide
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/bold/boldediting~BoldEditing bold editing feature}
 * and {@link module:basic-styles/bold/boldui~BoldUI bold UI feature}.
 */ class Bold extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            BoldEditing,
            BoldUI
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'Bold';
    }
}

const ITALIC$1 = 'italic';
/**
 * The italic editing feature.
 *
 * It registers the `'italic'` command, the <kbd>Ctrl+I</kbd> keystroke and introduces the `italic` attribute in the model
 * which renders to the view as an `<i>` element.
 */ class ItalicEditing extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'ItalicEditing';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const t = this.editor.t;
        // Allow italic attribute on text nodes.
        editor.model.schema.extend('$text', {
            allowAttributes: ITALIC$1
        });
        editor.model.schema.setAttributeProperties(ITALIC$1, {
            isFormatting: true,
            copyOnEnter: true
        });
        editor.conversion.attributeToElement({
            model: ITALIC$1,
            view: 'i',
            upcastAlso: [
                'em',
                {
                    styles: {
                        'font-style': 'italic'
                    }
                }
            ]
        });
        // Create italic command.
        editor.commands.add(ITALIC$1, new AttributeCommand(editor, ITALIC$1));
        // Set the Ctrl+I keystroke.
        editor.keystrokes.set('CTRL+I', ITALIC$1);
        // Add the information about the keystroke to the accessibility database.
        editor.accessibility.addKeystrokeInfos({
            keystrokes: [
                {
                    label: t('Italic text'),
                    keystroke: 'CTRL+I'
                }
            ]
        });
    }
}

var italicIcon = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z\"/></svg>";

const ITALIC = 'italic';
/**
 * The italic UI feature. It introduces the Italic button.
 */ class ItalicUI extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'ItalicUI';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const t = editor.locale.t;
        const createButton = getButtonCreator({
            editor,
            commandName: ITALIC,
            plugin: this,
            icon: italicIcon,
            keystroke: 'CTRL+I',
            label: t('Italic')
        });
        // Add bold button to feature components.
        editor.ui.componentFactory.add(ITALIC, ()=>createButton(turndown_browser_es.ButtonView));
        editor.ui.componentFactory.add('menuBar:' + ITALIC, ()=>createButton(turndown_browser_es.MenuBarMenuListItemButtonView));
    }
}

/**
 * The italic feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature} guide
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/italic/italicediting~ItalicEditing} and
 * {@link module:basic-styles/italic/italicui~ItalicUI} plugins.
 */ class Italic extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            ItalicEditing,
            ItalicUI
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'Italic';
    }
}

const UNDERLINE$1 = 'underline';
/**
 * The underline editing feature.
 *
 * It registers the `'underline'` command, the <kbd>Ctrl+U</kbd> keystroke
 * and introduces the `underline` attribute in the model which renders to the view as an `<u>` element.
 */ class UnderlineEditing extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'UnderlineEditing';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const t = this.editor.t;
        // Allow strikethrough attribute on text nodes.
        editor.model.schema.extend('$text', {
            allowAttributes: UNDERLINE$1
        });
        editor.model.schema.setAttributeProperties(UNDERLINE$1, {
            isFormatting: true,
            copyOnEnter: true
        });
        editor.conversion.attributeToElement({
            model: UNDERLINE$1,
            view: 'u',
            upcastAlso: {
                styles: {
                    'text-decoration': 'underline'
                }
            }
        });
        // Create underline command.
        editor.commands.add(UNDERLINE$1, new AttributeCommand(editor, UNDERLINE$1));
        // Set the Ctrl+U keystroke.
        editor.keystrokes.set('CTRL+U', 'underline');
        // Add the information about the keystroke to the accessibility database.
        editor.accessibility.addKeystrokeInfos({
            keystrokes: [
                {
                    label: t('Underline text'),
                    keystroke: 'CTRL+U'
                }
            ]
        });
    }
}

var underlineIcon = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z\"/></svg>";

const UNDERLINE = 'underline';
/**
 * The underline UI feature. It introduces the Underline button.
 */ class UnderlineUI extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'UnderlineUI';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const t = editor.locale.t;
        const createButton = getButtonCreator({
            editor,
            commandName: UNDERLINE,
            plugin: this,
            icon: underlineIcon,
            label: t('Underline'),
            keystroke: 'CTRL+U'
        });
        // Add bold button to feature components.
        editor.ui.componentFactory.add(UNDERLINE, ()=>createButton(turndown_browser_es.ButtonView));
        editor.ui.componentFactory.add('menuBar:' + UNDERLINE, ()=>createButton(turndown_browser_es.MenuBarMenuListItemButtonView));
    }
}

/**
 * The underline feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature} guide
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/underline/underlineediting~UnderlineEditing} and
 * {@link module:basic-styles/underline/underlineui~UnderlineUI} plugins.
 */ class Underline extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            UnderlineEditing,
            UnderlineUI
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'Underline';
    }
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * The classic editor UI class.
 */ class ClassicEditorUI extends turndown_browser_es.EditorUI {
    /**
	 * The main (top–most) view of the editor UI.
	 */ view;
    /**
	 * A normalized `config.toolbar` object.
	 */ _toolbarConfig;
    /**
	 * The element replacer instance used to hide the editor's source element.
	 */ _elementReplacer;
    /**
	 * Creates an instance of the classic editor UI class.
	 *
	 * @param editor The editor instance.
	 * @param view The view of the UI.
	 */ constructor(editor, view){
        super(editor);
        this.view = view;
        this._toolbarConfig = turndown_browser_es.normalizeToolbarConfig(editor.config.get('toolbar'));
        this._elementReplacer = new turndown_browser_es.ElementReplacer();
        this.listenTo(editor.editing.view, 'scrollToTheSelection', this._handleScrollToTheSelectionWithStickyPanel.bind(this));
    }
    /**
	 * @inheritDoc
	 */ get element() {
        return this.view.element;
    }
    /**
	 * Initializes the UI.
	 *
	 * @param replacementElement The DOM element that will be the source for the created editor.
	 */ init(replacementElement) {
        const editor = this.editor;
        const view = this.view;
        const editingView = editor.editing.view;
        const editable = view.editable;
        const editingRoot = editingView.document.getRoot();
        // The editable UI and editing root should share the same name. Then name is used
        // to recognize the particular editable, for instance in ARIA attributes.
        editable.name = editingRoot.rootName;
        view.render();
        // The editable UI element in DOM is available for sure only after the editor UI view has been rendered.
        // But it can be available earlier if a DOM element has been passed to BalloonEditor.create().
        const editableElement = editable.element;
        // Register the editable UI view in the editor. A single editor instance can aggregate multiple
        // editable areas (roots) but the classic editor has only one.
        this.setEditableElement(editable.name, editableElement);
        // Let the editable UI element respond to the changes in the global editor focus
        // tracker. It has been added to the same tracker a few lines above but, in reality, there are
        // many focusable areas in the editor, like balloons, toolbars or dropdowns and as long
        // as they have focus, the editable should act like it is focused too (although technically
        // it isn't), e.g. by setting the proper CSS class, visually announcing focus to the user.
        // Doing otherwise will result in editable focus styles disappearing, once e.g. the
        // toolbar gets focused.
        view.editable.bind('isFocused').to(this.focusTracker);
        // Bind the editable UI element to the editing view, making it an end– and entry–point
        // of the editor's engine. This is where the engine meets the UI.
        editingView.attachDomRoot(editableElement);
        // If an element containing the initial data of the editor was provided, replace it with
        // an editor instance's UI in DOM until the editor is destroyed. For instance, a <textarea>
        // can be such element.
        if (replacementElement) {
            this._elementReplacer.replace(replacementElement, this.element);
        }
        this._initPlaceholder();
        this._initToolbar();
        if (view.menuBarView) {
            this._initMenuBar(view.menuBarView);
        }
        this._initDialogPluginIntegration();
        this._initContextualBalloonIntegration();
        this.fire('ready');
    }
    /**
	 * @inheritDoc
	 */ destroy() {
        super.destroy();
        const view = this.view;
        const editingView = this.editor.editing.view;
        this._elementReplacer.restore();
        if (editingView.getDomRoot(view.editable.name)) {
            editingView.detachDomRoot(view.editable.name);
        }
        view.destroy();
    }
    /**
	 * Initializes the editor toolbar.
	 */ _initToolbar() {
        const view = this.view;
        // Set–up the sticky panel with toolbar.
        view.stickyPanel.bind('isActive').to(this.focusTracker, 'isFocused');
        view.stickyPanel.limiterElement = view.element;
        view.stickyPanel.bind('viewportTopOffset').to(this, 'viewportOffset', ({ top })=>top || 0);
        view.toolbar.fillFromConfig(this._toolbarConfig, this.componentFactory);
        // Register the toolbar so it becomes available for Alt+F10 and Esc navigation.
        this.addToolbar(view.toolbar);
    }
    /**
	 * Enable the placeholder text on the editing root.
	 */ _initPlaceholder() {
        const editor = this.editor;
        const editingView = editor.editing.view;
        const editingRoot = editingView.document.getRoot();
        const sourceElement = editor.sourceElement;
        let placeholderText;
        const placeholder = editor.config.get('placeholder');
        if (placeholder) {
            placeholderText = typeof placeholder === 'string' ? placeholder : placeholder[this.view.editable.name];
        }
        if (!placeholderText && sourceElement && sourceElement.tagName.toLowerCase() === 'textarea') {
            placeholderText = sourceElement.getAttribute('placeholder');
        }
        if (placeholderText) {
            editingRoot.placeholder = placeholderText;
        }
        turndown_browser_es.enablePlaceholder({
            view: editingView,
            element: editingRoot,
            isDirectHost: false,
            keepOnFocus: true
        });
    }
    /**
	 * Provides an integration between the sticky toolbar and {@link module:ui/panel/balloon/contextualballoon contextual balloon plugin}.
	 * It allows the contextual balloon to consider the height of the
	 * {@link module:editor-classic/classiceditoruiview~ClassicEditorUIView#stickyPanel}. It prevents the balloon from overlapping
	 * the sticky toolbar by adjusting the balloon's position using viewport offset configuration.
	 */ _initContextualBalloonIntegration() {
        if (!this.editor.plugins.has('ContextualBalloon')) {
            return;
        }
        const { stickyPanel } = this.view;
        const contextualBalloon = this.editor.plugins.get('ContextualBalloon');
        contextualBalloon.on('getPositionOptions', (evt)=>{
            const position = evt.return;
            if (!position || !stickyPanel.isSticky || !stickyPanel.element) {
                return;
            }
            // Measure toolbar (and menu bar) height.
            const stickyPanelHeight = new turndown_browser_es.Rect(stickyPanel.element).height;
            // Handle edge case when the target element is larger than the limiter.
            // It's an issue because the contextual balloon can overlap top table cells when the table is larger than the viewport
            // and it's placed at the top of the editor. It's better to overlap toolbar in that situation.
            // Check this issue: https://github.com/ckeditor/ckeditor5/issues/15744
            const target = typeof position.target === 'function' ? position.target() : position.target;
            const limiter = typeof position.limiter === 'function' ? position.limiter() : position.limiter;
            if (target && limiter && new turndown_browser_es.Rect(target).height >= new turndown_browser_es.Rect(limiter).height - stickyPanelHeight) {
                return;
            }
            // Ensure that viewport offset is present, it can be undefined according to the typing.
            const viewportOffsetConfig = {
                ...position.viewportOffsetConfig
            };
            const newTopViewportOffset = (viewportOffsetConfig.top || 0) + stickyPanelHeight;
            evt.return = {
                ...position,
                viewportOffsetConfig: {
                    ...viewportOffsetConfig,
                    top: newTopViewportOffset
                }
            };
        }, {
            priority: 'low'
        });
        // Update balloon position when the toolbar becomes sticky or when ui viewportOffset changes.
        const updateBalloonPosition = ()=>{
            if (contextualBalloon.visibleView) {
                contextualBalloon.updatePosition();
            }
        };
        this.listenTo(stickyPanel, 'change:isSticky', updateBalloonPosition);
        this.listenTo(this.editor.ui, 'change:viewportOffset', updateBalloonPosition);
    }
    /**
	 * Provides an integration between the sticky toolbar and {@link module:utils/dom/scroll~scrollViewportToShowTarget}.
	 * It allows the UI-agnostic engine method to consider the geometry of the
	 * {@link module:editor-classic/classiceditoruiview~ClassicEditorUIView#stickyPanel} that pins to the
	 * edge of the viewport and can obscure the user caret after scrolling the window.
	 *
	 * @param evt The `scrollToTheSelection` event info.
	 * @param data The payload carried by the `scrollToTheSelection` event.
	 * @param originalArgs The original arguments passed to `scrollViewportToShowTarget()` method (see implementation to learn more).
	 */ _handleScrollToTheSelectionWithStickyPanel(evt, data, originalArgs) {
        const stickyPanel = this.view.stickyPanel;
        if (stickyPanel.isSticky) {
            const stickyPanelHeight = new turndown_browser_es.Rect(stickyPanel.element).height;
            data.viewportOffset.top += stickyPanelHeight;
        } else {
            const scrollViewportOnPanelGettingSticky = ()=>{
                this.editor.editing.view.scrollToTheSelection(originalArgs);
            };
            this.listenTo(stickyPanel, 'change:isSticky', scrollViewportOnPanelGettingSticky);
            // This works as a post-scroll-fixer because it's impossible predict whether the panel will be sticky after scrolling or not.
            // Listen for a short period of time only and if the toolbar does not become sticky very soon, cancel the listener.
            setTimeout(()=>{
                this.stopListening(stickyPanel, 'change:isSticky', scrollViewportOnPanelGettingSticky);
            }, 20);
        }
    }
    /**
	 * Provides an integration between the sticky toolbar and {@link module:ui/dialog/dialog the Dialog plugin}.
	 *
	 * It moves the dialog down to ensure that the
	 * {@link module:editor-classic/classiceditoruiview~ClassicEditorUIView#stickyPanel sticky panel}
	 * used by the editor UI will not get obscured by the dialog when the dialog uses one of its automatic positions.
	 */ _initDialogPluginIntegration() {
        if (!this.editor.plugins.has('Dialog')) {
            return;
        }
        const stickyPanel = this.view.stickyPanel;
        const dialogPlugin = this.editor.plugins.get('Dialog');
        dialogPlugin.on('show', ()=>{
            const dialogView = dialogPlugin.view;
            dialogView.on('moveTo', (evt, data)=>{
                // Engage only when the panel is sticky, and the dialog is using one of default positions.
                if (!stickyPanel.isSticky || dialogView.wasMoved) {
                    return;
                }
                const stickyPanelContentRect = new turndown_browser_es.Rect(stickyPanel.contentPanelElement);
                if (data[1] < stickyPanelContentRect.bottom + turndown_browser_es.DialogView.defaultOffset) {
                    data[1] = stickyPanelContentRect.bottom + turndown_browser_es.DialogView.defaultOffset;
                }
            }, {
                priority: 'high'
            });
        }, {
            priority: 'low'
        });
    }
}

/**
 * Classic editor UI view. Uses an inline editable and a sticky toolbar, all
 * enclosed in a boxed UI view.
 */ class ClassicEditorUIView extends turndown_browser_es.BoxedEditorUIView {
    /**
	 * Sticky panel view instance. This is a parent view of a {@link #toolbar}
	 * that makes toolbar sticky.
	 */ stickyPanel;
    /**
	 * Toolbar view instance.
	 */ toolbar;
    /**
	 * Editable UI view.
	 */ editable;
    /**
	 * Creates an instance of the classic editor UI view.
	 *
	 * @param locale The {@link module:core/editor/editor~Editor#locale} instance.
	 * @param editingView The editing view instance this view is related to.
	 * @param options Configuration options for the view instance.
	 * @param options.shouldToolbarGroupWhenFull When set `true` enables automatic items grouping
	 * in the main {@link module:editor-classic/classiceditoruiview~ClassicEditorUIView#toolbar toolbar}.
	 * See {@link module:ui/toolbar/toolbarview~ToolbarOptions#shouldGroupWhenFull} to learn more.
	 * @param options.label When set, this value will be used as an accessible `aria-label` of the
	 * {@link module:ui/editableui/editableuiview~EditableUIView editable view}.
	 */ constructor(locale, editingView, options = {}){
        super(locale);
        this.stickyPanel = new turndown_browser_es.StickyPanelView(locale);
        this.toolbar = new turndown_browser_es.ToolbarView(locale, {
            shouldGroupWhenFull: options.shouldToolbarGroupWhenFull
        });
        if (options.useMenuBar) {
            this.menuBarView = new turndown_browser_es.MenuBarView(locale);
        }
        this.editable = new turndown_browser_es.InlineEditableUIView(locale, editingView, undefined, {
            label: options.label
        });
    }
    /**
	 * @inheritDoc
	 */ render() {
        super.render();
        if (this.menuBarView) {
            // Set toolbar as a child of a stickyPanel and makes toolbar sticky.
            this.stickyPanel.content.addMany([
                this.menuBarView,
                this.toolbar
            ]);
        } else {
            this.stickyPanel.content.add(this.toolbar);
        }
        this.top.add(this.stickyPanel);
        this.main.add(this.editable);
    }
}

/**
 * The classic editor implementation. It uses an inline editable and a sticky toolbar, all enclosed in a boxed UI.
 * See the {@glink examples/builds/classic-editor demo}.
 *
 * In order to create a classic editor instance, use the static
 * {@link module:editor-classic/classiceditor~ClassicEditor.create `ClassicEditor.create()`} method.
 */ class ClassicEditor extends /* #__PURE__ */ turndown_browser_es.ElementApiMixin(turndown_browser_es.Editor) {
    /**
	 * @inheritDoc
	 */ ui;
    /**
	 * Creates an instance of the classic editor.
	 *
	 * **Note:** do not use the constructor to create editor instances. Use the static
	 * {@link module:editor-classic/classiceditor~ClassicEditor.create `ClassicEditor.create()`} method instead.
	 *
	 * @param sourceElementOrData The DOM element that will be the source for the created editor
	 * or the editor's initial data. For more information see
	 * {@link module:editor-classic/classiceditor~ClassicEditor.create `ClassicEditor.create()`}.
	 * @param config The editor configuration.
	 */ constructor(sourceElementOrData, config = {}){
        // If both `config.initialData` is set and initial data is passed as the constructor parameter, then throw.
        if (!isElement(sourceElementOrData) && config.initialData !== undefined) {
            // Documented in core/editor/editorconfig.jsdoc.
            // eslint-disable-next-line ckeditor5-rules/ckeditor-error-message
            throw new turndown_browser_es.CKEditorError('editor-create-initial-data', null);
        }
        super(config);
        this.config.define('menuBar.isVisible', false);
        if (this.config.get('initialData') === undefined) {
            this.config.set('initialData', getInitialData(sourceElementOrData));
        }
        if (isElement(sourceElementOrData)) {
            this.sourceElement = sourceElementOrData;
        }
        this.model.document.createRoot();
        const shouldToolbarGroupWhenFull = !this.config.get('toolbar.shouldNotGroupWhenFull');
        const menuBarConfig = this.config.get('menuBar');
        const view = new ClassicEditorUIView(this.locale, this.editing.view, {
            shouldToolbarGroupWhenFull,
            useMenuBar: menuBarConfig.isVisible,
            label: this.config.get('label')
        });
        this.ui = new ClassicEditorUI(this, view);
        turndown_browser_es.attachToForm(this);
    }
    /**
	 * Destroys the editor instance, releasing all resources used by it.
	 *
	 * Updates the original editor element with the data if the
	 * {@link module:core/editor/editorconfig~EditorConfig#updateSourceElementOnDestroy `updateSourceElementOnDestroy`}
	 * configuration option is set to `true`.
	 */ destroy() {
        if (this.sourceElement) {
            this.updateSourceElement();
        }
        this.ui.destroy();
        return super.destroy();
    }
    /**
	 * Creates a new classic editor instance.
	 *
	 * There are three ways how the editor can be initialized.
	 *
	 * # Replacing a DOM element (and loading data from it)
	 *
	 * You can initialize the editor using an existing DOM element:
	 *
	 * ```ts
	 * ClassicEditor
	 * 	.create( document.querySelector( '#editor' ) )
	 * 	.then( editor => {
	 * 		console.log( 'Editor was initialized', editor );
	 * 	} )
	 * 	.catch( err => {
	 * 		console.error( err.stack );
	 * 	} );
	 * ```
	 *
	 * The element's content will be used as the editor data and the element will be replaced by the editor UI.
	 *
	 * # Creating a detached editor
	 *
	 * Alternatively, you can initialize the editor by passing the initial data directly as a string.
	 * In this case, the editor will render an element that must be inserted into the DOM:
	 *
	 * ```ts
	 * ClassicEditor
	 * 	.create( '<p>Hello world!</p>' )
	 * 	.then( editor => {
	 * 		console.log( 'Editor was initialized', editor );
	 *
	 * 		// Initial data was provided so the editor UI element needs to be added manually to the DOM.
	 * 		document.body.appendChild( editor.ui.element );
	 * 	} )
	 * 	.catch( err => {
	 * 		console.error( err.stack );
	 * 	} );
	 * ```
	 *
	 * This lets you dynamically append the editor to your web page whenever it is convenient for you. You may use this method if your
	 * web page content is generated on the client side and the DOM structure is not ready at the moment when you initialize the editor.
	 *
	 * # Replacing a DOM element (and data provided in `config.initialData`)
	 *
	 * You can also mix these two ways by providing a DOM element to be used and passing the initial data through the configuration:
	 *
	 * ```ts
	 * ClassicEditor
	 * 	.create( document.querySelector( '#editor' ), {
	 * 		initialData: '<h2>Initial data</h2><p>Foo bar.</p>'
	 * 	} )
	 * 	.then( editor => {
	 * 		console.log( 'Editor was initialized', editor );
	 * 	} )
	 * 	.catch( err => {
	 * 		console.error( err.stack );
	 * 	} );
	 * ```
	 *
	 * This method can be used to initialize the editor on an existing element with the specified content in case if your integration
	 * makes it difficult to set the content of the source element.
	 *
	 * Note that an error will be thrown if you pass the initial data both as the first parameter and also in the configuration.
	 *
	 * # Configuring the editor
	 *
	 * See the {@link module:core/editor/editorconfig~EditorConfig editor configuration documentation} to learn more about
	 * customizing plugins, toolbar and more.
	 *
	 * @param sourceElementOrData The DOM element that will be the source for the created editor
	 * or the editor's initial data.
	 *
	 * If a DOM element is passed, its content will be automatically loaded to the editor upon initialization
	 * and the {@link module:editor-classic/classiceditorui~ClassicEditorUI#element editor element} will replace the passed element
	 * in the DOM (the original one will be hidden and the editor will be injected next to it).
	 *
	 * If the {@link module:core/editor/editorconfig~EditorConfig#updateSourceElementOnDestroy updateSourceElementOnDestroy}
	 * option is set to `true`, the editor data will be set back to the original element once the editor is destroyed and when a form,
	 * in which this element is contained, is submitted (if the original element is a `<textarea>`). This ensures seamless integration
	 * with native web forms.
	 *
	 * If the initial data is passed, a detached editor will be created. In this case you need to insert it into the DOM manually.
	 * It is available under the {@link module:editor-classic/classiceditorui~ClassicEditorUI#element `editor.ui.element`} property.
	 *
	 * @param config The editor configuration.
	 * @returns A promise resolved once the editor is ready. The promise resolves with the created editor instance.
	 */ static create(sourceElementOrData, config = {}) {
        return new Promise((resolve)=>{
            const editor = new this(sourceElementOrData, config);
            resolve(editor.initPlugins().then(()=>editor.ui.init(isElement(sourceElementOrData) ? sourceElementOrData : null)).then(()=>editor.data.init(editor.config.get('initialData'))).then(()=>editor.fire('ready')).then(()=>editor));
        });
    }
}
function getInitialData(sourceElementOrData) {
    return isElement(sourceElementOrData) ? turndown_browser_es.getDataFromElement(sourceElementOrData) : sourceElementOrData;
}
function isElement(value) {
    return turndown_browser_es.isElement(value);
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * The select all command.
 *
 * It is used by the {@link module:select-all/selectallediting~SelectAllEditing select all editing feature} to handle
 * the <kbd>Ctrl/⌘</kbd>+<kbd>A</kbd> keystroke.
 *
 * Executing this command changes the {@glink framework/architecture/editing-engine#model model}
 * selection so it contains the entire content of the editable root of the editor the selection is
 * {@link module:engine/model/selection~Selection#anchor anchored} in.
 *
 * If the selection was anchored in a {@glink framework/tutorials/widgets/implementing-a-block-widget nested editable}
 * (e.g. a caption of an image), the new selection will contain its entire content. Successive executions of this command
 * will expand the selection to encompass more and more content up to the entire editable root of the editor.
 */ class SelectAllCommand extends turndown_browser_es.Command {
    /**
	 * @inheritDoc
	 */ constructor(editor){
        super(editor);
        // It does not affect data so should be enabled in read-only mode.
        this.affectsData = false;
    }
    /**
	 * @inheritDoc
	 */ execute() {
        const model = this.editor.model;
        const selection = model.document.selection;
        let scopeElement = model.schema.getLimitElement(selection);
        // If an entire scope is selected, or the selection's ancestor is not a scope yet,
        // browse through ancestors to find the enclosing parent scope.
        if (selection.containsEntireContent(scopeElement) || !isSelectAllScope(model.schema, scopeElement)) {
            do {
                scopeElement = scopeElement.parent;
                // Do nothing, if the entire `root` is already selected.
                if (!scopeElement) {
                    return;
                }
            }while (!isSelectAllScope(model.schema, scopeElement))
        }
        model.change((writer)=>{
            writer.setSelection(scopeElement, 'in');
        });
    }
}
/**
 * Checks whether the element is a valid select-all scope. Returns true, if the element is a
 * {@link module:engine/model/schema~Schema#isLimit limit}, and can contain any text or paragraph.
 *
 * @param schema Schema to check against.
 * @param element Model element.
 */ function isSelectAllScope(schema, element) {
    return schema.isLimit(element) && (schema.checkChild(element, '$text') || schema.checkChild(element, 'paragraph'));
}

const SELECT_ALL_KEYSTROKE = /* #__PURE__ */ turndown_browser_es.parseKeystroke('Ctrl+A');
/**
 * The select all editing feature.
 *
 * It registers the `'selectAll'` {@link module:select-all/selectallcommand~SelectAllCommand command}
 * and the <kbd>Ctrl/⌘</kbd>+<kbd>A</kbd> keystroke listener which executes it.
 */ class SelectAllEditing extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'SelectAllEditing';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const t = editor.t;
        const view = editor.editing.view;
        const viewDocument = view.document;
        editor.commands.add('selectAll', new SelectAllCommand(editor));
        this.listenTo(viewDocument, 'keydown', (eventInfo, domEventData)=>{
            if (turndown_browser_es.getCode(domEventData) === SELECT_ALL_KEYSTROKE) {
                editor.execute('selectAll');
                domEventData.preventDefault();
            }
        });
        // Add the information about the keystroke to the accessibility database.
        editor.accessibility.addKeystrokeInfos({
            keystrokes: [
                {
                    label: t('Select all'),
                    keystroke: 'CTRL+A'
                }
            ]
        });
    }
}

var selectAllIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z\"/></svg>";

/**
 * The select all UI feature.
 *
 * It registers the `'selectAll'` UI button in the editor's
 * {@link module:ui/componentfactory~ComponentFactory component factory}. When clicked, the button
 * executes the {@link module:select-all/selectallcommand~SelectAllCommand select all command}.
 */ class SelectAllUI extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'SelectAllUI';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        editor.ui.componentFactory.add('selectAll', ()=>{
            const buttonView = this._createButton(turndown_browser_es.ButtonView);
            buttonView.set({
                tooltip: true
            });
            return buttonView;
        });
        editor.ui.componentFactory.add('menuBar:selectAll', ()=>{
            return this._createButton(turndown_browser_es.MenuBarMenuListItemButtonView);
        });
    }
    /**
	 * Creates a button for select all command to use either in toolbar or in menu bar.
	 */ _createButton(ButtonClass) {
        const editor = this.editor;
        const locale = editor.locale;
        const command = editor.commands.get('selectAll');
        const view = new ButtonClass(editor.locale);
        const t = locale.t;
        view.set({
            label: t('Select all'),
            icon: selectAllIcon,
            keystroke: 'Ctrl+A'
        });
        view.bind('isEnabled').to(command, 'isEnabled');
        // Execute the command.
        this.listenTo(view, 'execute', ()=>{
            editor.execute('selectAll');
            editor.editing.view.focus();
        });
        return view;
    }
}

/**
 * The select all feature.
 *
 * This is a "glue" plugin which loads the {@link module:select-all/selectallediting~SelectAllEditing select all editing feature}
 * and the {@link module:select-all/selectallui~SelectAllUI select all UI feature}.
 *
 * Please refer to the documentation of individual features to learn more.
 */ class SelectAll extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            SelectAllEditing,
            SelectAllUI
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'SelectAll';
    }
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Base class for the undo feature commands: {@link module:undo/undocommand~UndoCommand} and {@link module:undo/redocommand~RedoCommand}.
 */ class BaseCommand extends turndown_browser_es.Command {
    /**
	 * Stack of items stored by the command. These are pairs of:
	 *
	 * * {@link module:engine/model/batch~Batch batch} saved by the command,
	 * * {@link module:engine/model/selection~Selection selection} state at the moment of saving the batch.
	 */ _stack = [];
    /**
	 * Stores all batches that were created by this command.
	 *
	 * @internal
	 */ _createdBatches = new WeakSet();
    /**
	 * @inheritDoc
	 */ constructor(editor){
        super(editor);
        // Refresh state, so the command is inactive right after initialization.
        this.refresh();
        // This command should not depend on selection change.
        this._isEnabledBasedOnSelection = false;
        // Set the transparent batch for the `editor.data.set()` call if the
        // batch type is not set already.
        this.listenTo(editor.data, 'set', (evt, data)=>{
            // Create a shallow copy of the options to not change the original args.
            // And make sure that an object is assigned to data[ 1 ].
            data[1] = {
                ...data[1]
            };
            const options = data[1];
            // If batch type is not set, default to non-undoable batch.
            if (!options.batchType) {
                options.batchType = {
                    isUndoable: false
                };
            }
        }, {
            priority: 'high'
        });
        // Clear the stack for the `transparent` batches.
        this.listenTo(editor.data, 'set', (evt, data)=>{
            // We can assume that the object exists and it has a `batchType` property.
            // It was ensured with a higher priority listener before.
            const options = data[1];
            if (!options.batchType.isUndoable) {
                this.clearStack();
            }
        });
    }
    /**
	 * @inheritDoc
	 */ refresh() {
        this.isEnabled = this._stack.length > 0;
    }
    /**
	 * Returns all batches created by this command.
	 */ get createdBatches() {
        return this._createdBatches;
    }
    /**
	 * Stores a batch in the command, together with the selection state of the {@link module:engine/model/document~Document document}
	 * created by the editor which this command is registered to.
	 *
	 * @param batch The batch to add.
	 */ addBatch(batch) {
        const docSelection = this.editor.model.document.selection;
        const selection = {
            ranges: docSelection.hasOwnRange ? Array.from(docSelection.getRanges()) : [],
            isBackward: docSelection.isBackward
        };
        this._stack.push({
            batch,
            selection
        });
        this.refresh();
    }
    /**
	 * Removes all items from the stack.
	 */ clearStack() {
        this._stack = [];
        this.refresh();
    }
    /**
	 * Restores the {@link module:engine/model/document~Document#selection document selection} state after a batch was undone.
	 *
	 * @param ranges Ranges to be restored.
	 * @param isBackward A flag describing whether the restored range was selected forward or backward.
	 * @param operations Operations which has been applied since selection has been stored.
	 */ _restoreSelection(ranges, isBackward, operations) {
        const model = this.editor.model;
        const document = model.document;
        // This will keep the transformed selection ranges.
        const selectionRanges = [];
        // Transform all ranges from the restored selection.
        const transformedRangeGroups = ranges.map((range)=>range.getTransformedByOperations(operations));
        const allRanges = transformedRangeGroups.flat();
        for (const rangeGroup of transformedRangeGroups){
            // While transforming there could appear ranges that are contained by other ranges, we shall ignore them.
            const transformed = rangeGroup.filter((range)=>range.root != document.graveyard).filter((range)=>!isRangeContainedByAnyOtherRange(range, allRanges));
            // All the transformed ranges ended up in graveyard.
            if (!transformed.length) {
                continue;
            }
            // After the range got transformed, we have an array of ranges. Some of those
            // ranges may be "touching" -- they can be next to each other and could be merged.
            normalizeRanges(transformed);
            // For each `range` from `ranges`, we take only one transformed range.
            // This is because we want to prevent situation where single-range selection
            // got transformed to multi-range selection.
            selectionRanges.push(transformed[0]);
        }
        // @if CK_DEBUG_ENGINE // console.log( `Restored selection by undo: ${ selectionRanges.join( ', ' ) }` );
        // `selectionRanges` may be empty if all ranges ended up in graveyard. If that is the case, do not restore selection.
        if (selectionRanges.length) {
            model.change((writer)=>{
                writer.setSelection(selectionRanges, {
                    backward: isBackward
                });
            });
        }
    }
    /**
	 * Undoes a batch by reversing that batch, transforming reversed batch and finally applying it.
	 * This is a helper method for {@link #execute}.
	 *
	 * @param batchToUndo The batch to be undone.
	 * @param undoingBatch The batch that will contain undoing changes.
	 */ _undo(batchToUndo, undoingBatch) {
        const model = this.editor.model;
        const document = model.document;
        // All changes done by the command execution will be saved as one batch.
        this._createdBatches.add(undoingBatch);
        const operationsToUndo = batchToUndo.operations.slice().filter((operation)=>operation.isDocumentOperation);
        operationsToUndo.reverse();
        // We will process each operation from `batchToUndo`, in reverse order. If there were operations A, B and C in undone batch,
        // we need to revert them in reverse order, so first C' (reversed C), then B', then A'.
        for (const operationToUndo of operationsToUndo){
            const nextBaseVersion = operationToUndo.baseVersion + 1;
            const historyOperations = Array.from(document.history.getOperations(nextBaseVersion));
            const transformedSets = turndown_browser_es.transformSets([
                operationToUndo.getReversed()
            ], historyOperations, {
                useRelations: true,
                document: this.editor.model.document,
                padWithNoOps: false,
                forceWeakRemove: true
            });
            const reversedOperations = transformedSets.operationsA;
            // After reversed operation has been transformed by all history operations, apply it.
            for (let operation of reversedOperations){
                // Do not apply any operation on non-editable space.
                const affectedSelectable = operation.affectedSelectable;
                if (affectedSelectable && !model.canEditAt(affectedSelectable)) {
                    operation = new turndown_browser_es.NoOperation(operation.baseVersion);
                }
                // Before applying, add the operation to the `undoingBatch`.
                undoingBatch.addOperation(operation);
                model.applyOperation(operation);
                document.history.setOperationAsUndone(operationToUndo, operation);
            }
        }
    }
}
/**
 * Normalizes list of ranges by joining intersecting or "touching" ranges.
 *
 * @param ranges Ranges to be normalized.
 */ function normalizeRanges(ranges) {
    ranges.sort((a, b)=>a.start.isBefore(b.start) ? -1 : 1);
    for(let i = 1; i < ranges.length; i++){
        const previousRange = ranges[i - 1];
        const joinedRange = previousRange.getJoined(ranges[i], true);
        if (joinedRange) {
            // Replace the ranges on the list with the new joined range.
            i--;
            ranges.splice(i, 2, joinedRange);
        }
    }
}
function isRangeContainedByAnyOtherRange(range, ranges) {
    return ranges.some((otherRange)=>otherRange !== range && otherRange.containsRange(range, true));
}

/**
 * The undo command stores {@link module:engine/model/batch~Batch batches} applied to the
 * {@link module:engine/model/document~Document document} and is able to undo a batch by reversing it and transforming by
 * batches from {@link module:engine/model/document~Document#history history} that happened after the reversed batch.
 *
 * The undo command also takes care of restoring the {@link module:engine/model/document~Document#selection document selection}.
 */ class UndoCommand extends BaseCommand {
    /**
	 * Executes the command. This method reverts a {@link module:engine/model/batch~Batch batch} added to the command's stack, transforms
	 * and applies the reverted version on the {@link module:engine/model/document~Document document} and removes the batch from the stack.
	 * Then, it restores the {@link module:engine/model/document~Document#selection document selection}.
	 *
	 * @fires execute
	 * @fires revert
	 * @param batch A batch that should be undone. If not set, the last added batch will be undone.
	 */ execute(batch = null) {
        // If batch is not given, set `batchIndex` to the last index in command stack.
        const batchIndex = batch ? this._stack.findIndex((a)=>a.batch == batch) : this._stack.length - 1;
        const item = this._stack.splice(batchIndex, 1)[0];
        const undoingBatch = this.editor.model.createBatch({
            isUndo: true
        });
        // All changes have to be done in one `enqueueChange` callback so other listeners will not
        // step between consecutive operations, or won't do changes to the document before selection is properly restored.
        this.editor.model.enqueueChange(undoingBatch, ()=>{
            this._undo(item.batch, undoingBatch);
            const operations = this.editor.model.document.history.getOperations(item.batch.baseVersion);
            this._restoreSelection(item.selection.ranges, item.selection.isBackward, operations);
        });
        // Firing `revert` event after the change block to make sure that it includes all changes from post-fixers
        // and make sure that the selection is "stabilized" (the selection range is saved after undo is executed and then
        // restored on redo, so it is important that the selection range is saved after post-fixers are done).
        this.fire('revert', item.batch, undoingBatch);
        this.refresh();
    }
}

/**
 * The redo command stores {@link module:engine/model/batch~Batch batches} that were used to undo a batch by
 * {@link module:undo/undocommand~UndoCommand}. It is able to redo a previously undone batch by reversing the undoing
 * batches created by `UndoCommand`. The reversed batch is transformed by all the batches from
 * {@link module:engine/model/document~Document#history history} that happened after the reversed undo batch.
 *
 * The redo command also takes care of restoring the {@link module:engine/model/document~Document#selection document selection}.
 */ class RedoCommand extends BaseCommand {
    /**
	 * Executes the command. This method reverts the last {@link module:engine/model/batch~Batch batch} added to
	 * the command's stack, applies the reverted and transformed version on the
	 * {@link module:engine/model/document~Document document} and removes the batch from the stack.
	 * Then, it restores the {@link module:engine/model/document~Document#selection document selection}.
	 *
	 * @fires execute
	 */ execute() {
        const item = this._stack.pop();
        const redoingBatch = this.editor.model.createBatch({
            isUndo: true
        });
        // All changes have to be done in one `enqueueChange` callback so other listeners will not step between consecutive
        // operations, or won't do changes to the document before selection is properly restored.
        this.editor.model.enqueueChange(redoingBatch, ()=>{
            const lastOperation = item.batch.operations[item.batch.operations.length - 1];
            const nextBaseVersion = lastOperation.baseVersion + 1;
            const operations = this.editor.model.document.history.getOperations(nextBaseVersion);
            this._restoreSelection(item.selection.ranges, item.selection.isBackward, operations);
            this._undo(item.batch, redoingBatch);
        });
        this.refresh();
    }
}

/**
 * The undo engine feature.
 *
 * It introduces the `'undo'` and `'redo'` commands to the editor.
 */ class UndoEditing extends turndown_browser_es.Plugin {
    /**
	 * The command that manages the undo {@link module:engine/model/batch~Batch batches} stack (history).
	 * Created and registered during the {@link #init feature initialization}.
	 */ _undoCommand;
    /**
	 * The command that manages the redo {@link module:engine/model/batch~Batch batches} stack (history).
	 * Created and registered during the {@link #init feature initialization}.
	 */ _redoCommand;
    /**
	 * Keeps track of which batches were registered in undo.
	 */ _batchRegistry = new WeakSet();
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'UndoEditing';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const t = editor.t;
        // Create commands.
        this._undoCommand = new UndoCommand(editor);
        this._redoCommand = new RedoCommand(editor);
        // Register command to the editor.
        editor.commands.add('undo', this._undoCommand);
        editor.commands.add('redo', this._redoCommand);
        this.listenTo(editor.model, 'applyOperation', (evt, args)=>{
            const operation = args[0];
            // Do not register batch if the operation is not a document operation.
            // This prevents from creating empty undo steps, where all operations where non-document operations.
            // Non-document operations creates and alters content in detached tree fragments (for example, document fragments).
            // Most of time this is preparing data before it is inserted into actual tree (for example during copy & paste).
            // Such operations should not be reversed.
            if (!operation.isDocumentOperation) {
                return;
            }
            const batch = operation.batch;
            const isRedoBatch = this._redoCommand.createdBatches.has(batch);
            const isUndoBatch = this._undoCommand.createdBatches.has(batch);
            const wasProcessed = this._batchRegistry.has(batch);
            // Skip the batch if it was already processed.
            if (wasProcessed) {
                return;
            }
            // Add the batch to the registry so it will not be processed again.
            this._batchRegistry.add(batch);
            if (!batch.isUndoable) {
                return;
            }
            if (isRedoBatch) {
                // If this batch comes from `redoCommand`, add it to the `undoCommand` stack.
                this._undoCommand.addBatch(batch);
            } else if (!isUndoBatch) {
                // If the batch comes neither  from `redoCommand` nor from `undoCommand` then it is a new, regular batch.
                // Add the batch to the `undoCommand` stack and clear the `redoCommand` stack.
                this._undoCommand.addBatch(batch);
                this._redoCommand.clearStack();
            }
        }, {
            priority: 'highest'
        });
        this.listenTo(this._undoCommand, 'revert', (evt, undoneBatch, undoingBatch)=>{
            this._redoCommand.addBatch(undoingBatch);
        });
        editor.keystrokes.set('CTRL+Z', 'undo');
        editor.keystrokes.set('CTRL+Y', 'redo');
        editor.keystrokes.set('CTRL+SHIFT+Z', 'redo');
        // Add the information about the keystrokes to the accessibility database.
        editor.accessibility.addKeystrokeInfos({
            keystrokes: [
                {
                    label: t('Undo'),
                    keystroke: 'CTRL+Z'
                },
                {
                    label: t('Redo'),
                    keystroke: [
                        [
                            'CTRL+Y'
                        ],
                        [
                            'CTRL+SHIFT+Z'
                        ]
                    ]
                }
            ]
        });
    }
}

/**
 * The undo UI feature. It introduces the `'undo'` and `'redo'` buttons to the editor.
 */ class UndoUI extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'UndoUI';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const locale = editor.locale;
        const t = editor.t;
        const localizedUndoIcon = locale.uiLanguageDirection == 'ltr' ? turndown_browser_es.icons.undo : turndown_browser_es.icons.redo;
        const localizedRedoIcon = locale.uiLanguageDirection == 'ltr' ? turndown_browser_es.icons.redo : turndown_browser_es.icons.undo;
        this._addButtonsToFactory('undo', t('Undo'), 'CTRL+Z', localizedUndoIcon);
        this._addButtonsToFactory('redo', t('Redo'), 'CTRL+Y', localizedRedoIcon);
    }
    /**
	 * Creates a button for the specified command.
	 *
	 * @param name Command name.
	 * @param label Button label.
	 * @param keystroke Command keystroke.
	 * @param Icon Source of the icon.
	 */ _addButtonsToFactory(name, label, keystroke, Icon) {
        const editor = this.editor;
        editor.ui.componentFactory.add(name, ()=>{
            const buttonView = this._createButton(turndown_browser_es.ButtonView, name, label, keystroke, Icon);
            buttonView.set({
                tooltip: true
            });
            return buttonView;
        });
        editor.ui.componentFactory.add('menuBar:' + name, ()=>{
            return this._createButton(turndown_browser_es.MenuBarMenuListItemButtonView, name, label, keystroke, Icon);
        });
    }
    /**
	 * TODO
	 */ _createButton(ButtonClass, name, label, keystroke, Icon) {
        const editor = this.editor;
        const locale = editor.locale;
        const command = editor.commands.get(name);
        const view = new ButtonClass(locale);
        view.set({
            label,
            icon: Icon,
            keystroke
        });
        view.bind('isEnabled').to(command, 'isEnabled');
        this.listenTo(view, 'execute', ()=>{
            editor.execute(name);
            editor.editing.view.focus();
        });
        return view;
    }
}

/**
 * The undo feature.
 *
 * This is a "glue" plugin which loads the {@link module:undo/undoediting~UndoEditing undo editing feature}
 * and the {@link module:undo/undoui~UndoUI undo UI feature}.
 *
 * Below is an explanation of the undo mechanism working together with {@link module:engine/model/history~History History}:
 *
 * Whenever an {@link module:engine/model/operation/operation~Operation operation} is applied to the
 * {@link module:engine/model/document~Document document}, it is saved to `History` as is.
 * The {@link module:engine/model/batch~Batch batch} that owns that operation is also saved, in
 * {@link module:undo/undocommand~UndoCommand}, together with the selection that was present in the document before the
 * operation was applied. A batch is saved instead of the operation because changes are undone batch-by-batch, not operation-by-operation
 * and a batch is seen as one undo step.
 *
 * After changes happen to the document, the `History` and `UndoCommand` stack can be represented as follows:
 *
 * ```
 *    History                            Undo stack
 * ==============             ==================================
 * [operation A1]                      [  batch A  ]
 * [operation B1]                      [  batch B  ]
 * [operation B2]                      [  batch C  ]
 * [operation C1]
 * [operation C2]
 * [operation B3]
 * [operation C3]
 * ```
 *
 * Where operations starting with the same letter are from same batch.
 *
 * Undoing a batch means that a set of operations which will reverse the effects of that batch needs to be generated.
 * For example, if a batch added several letters, undoing the batch should remove them. It is important to apply undoing
 * operations in the reversed order, so if a batch has operation `X`, `Y`, `Z`, reversed operations `Zr`, `Yr` and `Xr`
 * need to be applied. Otherwise reversed operation `Xr` would operate on a wrong document state, because operation `X`
 * does not know that operations `Y` and `Z` happened.
 *
 * After operations from an undone batch got {@link module:engine/model/operation/operation~Operation#getReversed reversed},
 * one needs to make sure if they are ready to be applied. In the scenario above, operation `C3` is the last operation and `C3r`
 * bases on up-to-date document state, so it can be applied to the document.
 *
 * ```
 *      History                             Undo stack
 * =================             ==================================
 * [ operation A1  ]                      [  batch A  ]
 * [ operation B1  ]                      [  batch B  ]
 * [ operation B2  ]             [   processing undoing batch C   ]
 * [ operation C1  ]
 * [ operation C2  ]
 * [ operation B3  ]
 * [ operation C3  ]
 * [ operation C3r ]
 * ```
 *
 * Next is operation `C2`, reversed to `C2r`. `C2r` bases on `C2`, so it bases on the wrong document state. It needs to be
 * transformed by operations from history that happened after it, so it "knows" about them. Let us assume that `C2' = C2r * B3 * C3 * C3r`,
 * where `*` means "transformed by". Rest of operations from that batch are processed in the same fashion.
 *
 * ```
 *      History                             Undo stack                                      Redo stack
 * =================             ==================================             ==================================
 * [ operation A1  ]                      [  batch A  ]                                    [ batch Cr ]
 * [ operation B1  ]                      [  batch B  ]
 * [ operation B2  ]
 * [ operation C1  ]
 * [ operation C2  ]
 * [ operation B3  ]
 * [ operation C3  ]
 * [ operation C3r ]
 * [ operation C2' ]
 * [ operation C1' ]
 * ```
 *
 * Selective undo works on the same basis, however, instead of undoing the last batch in the undo stack, any batch can be undone.
 * The same algorithm applies: operations from a batch (i.e. `A1`) are reversed and then transformed by operations stored in history.
 *
 * Redo also is very similar to undo. It has its own stack that is filled with undoing (reversed batches). Operations from
 * the batch that is re-done are reversed-back, transformed in proper order and applied to the document.
 *
 * ```
 *      History                             Undo stack                                      Redo stack
 * =================             ==================================             ==================================
 * [ operation A1  ]                      [  batch A  ]
 * [ operation B1  ]                      [  batch B  ]
 * [ operation B2  ]                      [ batch Crr ]
 * [ operation C1  ]
 * [ operation C2  ]
 * [ operation B3  ]
 * [ operation C3  ]
 * [ operation C3r ]
 * [ operation C2' ]
 * [ operation C1' ]
 * [ operation C1'r]
 * [ operation C2'r]
 * [ operation C3rr]
 * ```
 */ class Undo extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            UndoEditing,
            UndoUI
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'Undo';
    }
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A plugin including all essential editing features. It represents a set of features that enables similar functionalities
 * to a `<textarea>` element.
 *
 * It includes:
 *
 * * {@link module:clipboard/clipboard~Clipboard},
 * * {@link module:enter/enter~Enter},
 * * {@link module:select-all/selectall~SelectAll},
 * * {@link module:enter/shiftenter~ShiftEnter},
 * * {@link module:typing/typing~Typing},
 * * {@link module:undo/undo~Undo}.
 *
 * This plugin set does not define any block-level containers (such as {@link module:paragraph/paragraph~Paragraph}).
 * If your editor is supposed to handle block content, make sure to include it.
 */ class Essentials extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            turndown_browser_es.AccessibilityHelp,
            turndown_browser_es.Clipboard,
            turndown_browser_es.Enter,
            SelectAll,
            turndown_browser_es.ShiftEnter,
            turndown_browser_es.Typing,
            Undo
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'Essentials';
    }
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * The paragraph command.
 */ class ParagraphCommand extends turndown_browser_es.Command {
    constructor(editor){
        super(editor);
        // Since this command may pass selection in execution block, it should be checked directly.
        this._isEnabledBasedOnSelection = false;
    }
    /**
	 * @inheritDoc
	 */ refresh() {
        const model = this.editor.model;
        const document = model.document;
        const block = turndown_browser_es.first(document.selection.getSelectedBlocks());
        this.value = !!block && block.is('element', 'paragraph');
        this.isEnabled = !!block && checkCanBecomeParagraph(block, model.schema);
    }
    /**
	 * Executes the command. All the blocks (see {@link module:engine/model/schema~Schema}) in the selection
	 * will be turned to paragraphs.
	 *
	 * @fires execute
	 * @param options Options for the executed command.
	 * @param options.selection The selection that the command should be applied to. By default,
	 * if not provided, the command is applied to the {@link module:engine/model/document~Document#selection}.
	 */ execute(options = {}) {
        const model = this.editor.model;
        const document = model.document;
        const selection = options.selection || document.selection;
        // Don't execute command if selection is in non-editable place.
        if (!model.canEditAt(selection)) {
            return;
        }
        model.change((writer)=>{
            const blocks = selection.getSelectedBlocks();
            for (const block of blocks){
                if (!block.is('element', 'paragraph') && checkCanBecomeParagraph(block, model.schema)) {
                    writer.rename(block, 'paragraph');
                }
            }
        });
    }
}
/**
 * Checks whether the given block can be replaced by a paragraph.
 *
 * @param block A block to be tested.
 * @param schema The schema of the document.
 */ function checkCanBecomeParagraph(block, schema) {
    return schema.checkChild(block.parent, 'paragraph') && !schema.isObject(block);
}

/**
 * The insert paragraph command. It inserts a new paragraph at a specific
 * {@link module:engine/model/position~Position document position}.
 *
 * ```ts
 * // Insert a new paragraph before an element in the document.
 * editor.execute( 'insertParagraph', {
 *   position: editor.model.createPositionBefore( element )
 * } );
 * ```
 *
 * If a paragraph is disallowed in the context of the specific position, the command
 * will attempt to split position ancestors to find a place where it is possible
 * to insert a paragraph.
 *
 * **Note**: This command moves the selection to the inserted paragraph.
 */ class InsertParagraphCommand extends turndown_browser_es.Command {
    constructor(editor){
        super(editor);
        // Since this command passes position in execution block instead of selection, it should be checked directly.
        this._isEnabledBasedOnSelection = false;
    }
    /**
	 * Executes the command.
	 *
	 * @param options Options for the executed command.
	 * @param options.position The model position at which the new paragraph will be inserted.
	 * @param options.attributes Attributes keys and values to set on a inserted paragraph.
	 * @fires execute
	 */ execute(options) {
        const model = this.editor.model;
        const attributes = options.attributes;
        let position = options.position;
        // Don't execute command if position is in non-editable place.
        if (!model.canEditAt(position)) {
            return;
        }
        model.change((writer)=>{
            position = this._findPositionToInsertParagraph(position, writer);
            if (!position) {
                return;
            }
            const paragraph = writer.createElement('paragraph');
            if (attributes) {
                model.schema.setAllowedAttributes(paragraph, attributes, writer);
            }
            model.insertContent(paragraph, position);
            writer.setSelection(paragraph, 'in');
        });
    }
    /**
	 * Returns the best position to insert a new paragraph.
	 */ _findPositionToInsertParagraph(position, writer) {
        const model = this.editor.model;
        if (model.schema.checkChild(position, 'paragraph')) {
            return position;
        }
        const allowedParent = model.schema.findAllowedParent(position, 'paragraph');
        // It could be there's no ancestor limit that would allow paragraph.
        // In theory, "paragraph" could be disallowed even in the "$root".
        if (!allowedParent) {
            return null;
        }
        const positionParent = position.parent;
        const isTextAllowed = model.schema.checkChild(positionParent, '$text');
        // At empty $block or at the end of $block.
        // <paragraph>[]</paragraph> ---> <paragraph></paragraph><paragraph>[]</paragraph>
        // <paragraph>foo[]</paragraph> ---> <paragraph>foo</paragraph><paragraph>[]</paragraph>
        if (positionParent.isEmpty || isTextAllowed && position.isAtEnd) {
            return model.createPositionAfter(positionParent);
        }
        // At the start of $block with text.
        // <paragraph>[]foo</paragraph> ---> <paragraph>[]</paragraph><paragraph>foo</paragraph>
        if (!positionParent.isEmpty && isTextAllowed && position.isAtStart) {
            return model.createPositionBefore(positionParent);
        }
        return writer.split(position, allowedParent).position;
    }
}

/**
 * The paragraph feature for the editor.
 *
 * It introduces the `<paragraph>` element in the model which renders as a `<p>` element in the DOM and data.
 *
 * It also brings two editors commands:
 *
 * * The {@link module:paragraph/paragraphcommand~ParagraphCommand `'paragraph'`} command that converts all
 * blocks in the model selection into paragraphs.
 * * The {@link module:paragraph/insertparagraphcommand~InsertParagraphCommand `'insertParagraph'`} command
 * that inserts a new paragraph at a specified location in the model.
 */ class Paragraph extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'Paragraph';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const model = editor.model;
        editor.commands.add('paragraph', new ParagraphCommand(editor));
        editor.commands.add('insertParagraph', new InsertParagraphCommand(editor));
        // Schema.
        model.schema.register('paragraph', {
            inheritAllFrom: '$block'
        });
        editor.conversion.elementToElement({
            model: 'paragraph',
            view: 'p'
        });
        // Conversion for paragraph-like elements which has not been converted by any plugin.
        editor.conversion.for('upcast').elementToElement({
            model: (viewElement, { writer })=>{
                if (!Paragraph.paragraphLikeElements.has(viewElement.name)) {
                    return null;
                }
                // Do not auto-paragraph empty elements.
                if (viewElement.isEmpty) {
                    return null;
                }
                return writer.createElement('paragraph');
            },
            view: /.+/,
            converterPriority: 'low'
        });
    }
    /**
	 * A list of element names which should be treated by the autoparagraphing algorithms as
	 * paragraph-like. This means that e.g. the following content:
	 *
	 * ```html
	 * <h1>Foo</h1>
	 * <table>
	 *   <tr>
	 *     <td>X</td>
	 *     <td>
	 *       <ul>
	 *         <li>Y</li>
	 *         <li>Z</li>
	 *       </ul>
	 *     </td>
	 *   </tr>
	 * </table>
	 * ```
	 *
	 * contains five paragraph-like elements: `<h1>`, two `<td>`s and two `<li>`s.
	 * Hence, if none of the features is going to convert those elements the above content will be automatically handled
	 * by the paragraph feature and converted to:
	 *
	 * ```html
	 * <p>Foo</p>
	 * <p>X</p>
	 * <p>Y</p>
	 * <p>Z</p>
	 * ```
	 *
	 * Note: The `<td>` containing two `<li>` elements was ignored as the innermost paragraph-like elements
	 * have a priority upon conversion.
	 */ static paragraphLikeElements = new Set([
        'blockquote',
        'dd',
        'div',
        'dt',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'li',
        'p',
        'td',
        'th'
    ]);
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
* Helper function for the downcast converter. Updates attributes on the given view element.
*
* @param writer The view writer.
* @param oldViewAttributes The previous GHS attribute value.
* @param newViewAttributes The current GHS attribute value.
* @param viewElement The view element to update.
*/ function updateViewAttributes(writer, oldViewAttributes, newViewAttributes, viewElement) {
    if (oldViewAttributes) {
        removeViewAttributes(writer, oldViewAttributes, viewElement);
    }
    if (newViewAttributes) {
        setViewAttributes(writer, newViewAttributes, viewElement);
    }
}
/**
 * Helper function for the downcast converter. Sets attributes on the given view element.
 *
 * @param writer The view writer.
 * @param viewAttributes The GHS attribute value.
 * @param viewElement The view element to update.
 */ function setViewAttributes(writer, viewAttributes, viewElement) {
    if (viewAttributes.attributes) {
        for (const [key, value] of Object.entries(viewAttributes.attributes)){
            writer.setAttribute(key, value, viewElement);
        }
    }
    if (viewAttributes.styles) {
        writer.setStyle(viewAttributes.styles, viewElement);
    }
    if (viewAttributes.classes) {
        writer.addClass(viewAttributes.classes, viewElement);
    }
}
/**
 * Helper function for the downcast converter. Removes attributes on the given view element.
 *
 * @param writer The view writer.
 * @param viewAttributes The GHS attribute value.
 * @param viewElement The view element to update.
 */ function removeViewAttributes(writer, viewAttributes, viewElement) {
    if (viewAttributes.attributes) {
        for (const [key] of Object.entries(viewAttributes.attributes)){
            writer.removeAttribute(key, viewElement);
        }
    }
    if (viewAttributes.styles) {
        for (const style of Object.keys(viewAttributes.styles)){
            writer.removeStyle(style, viewElement);
        }
    }
    if (viewAttributes.classes) {
        writer.removeClass(viewAttributes.classes, viewElement);
    }
}
/**
* Merges view element attribute objects.
*/ function mergeViewElementAttributes(target, source) {
    const result = turndown_browser_es.cloneDeep(target);
    let key = 'attributes';
    for(key in source){
        // Merge classes.
        if (key == 'classes') {
            result[key] = Array.from(new Set([
                ...target[key] || [],
                ...source[key]
            ]));
        } else {
            result[key] = {
                ...target[key],
                ...source[key]
            };
        }
    }
    return result;
}
function modifyGhsAttribute(writer, item, ghsAttributeName, subject, callback) {
    const oldValue = item.getAttribute(ghsAttributeName);
    const newValue = {};
    for (const kind of [
        'attributes',
        'styles',
        'classes'
    ]){
        // Properties other than `subject` should be assigned from `oldValue`.
        if (kind != subject) {
            if (oldValue && oldValue[kind]) {
                newValue[kind] = oldValue[kind];
            }
            continue;
        }
        // `callback` should be applied on property [`subject`].
        if (subject == 'classes') {
            const values = new Set(oldValue && oldValue.classes || []);
            callback(values);
            if (values.size) {
                newValue[kind] = Array.from(values);
            }
            continue;
        }
        const values = new Map(Object.entries(oldValue && oldValue[kind] || {}));
        callback(values);
        if (values.size) {
            newValue[kind] = Object.fromEntries(values);
        }
    }
    if (Object.keys(newValue).length) {
        if (item.is('documentSelection')) {
            writer.setSelectionAttribute(ghsAttributeName, newValue);
        } else {
            writer.setAttribute(ghsAttributeName, newValue, item);
        }
    } else if (oldValue) {
        if (item.is('documentSelection')) {
            writer.removeSelectionAttribute(ghsAttributeName);
        } else {
            writer.removeAttribute(ghsAttributeName, item);
        }
    }
}
/**
 * Transforms passed string to PascalCase format. Examples:
 * * `div` => `Div`
 * * `h1` => `H1`
 * * `table` => `Table`
 */ function toPascalCase(data) {
    return startCase$1(data).replace(/ /g, '');
}
/**
 * Returns the attribute name of the model element that holds raw HTML attributes.
 */ function getHtmlAttributeName(viewElementName) {
    return `html${toPascalCase(viewElementName)}Attributes`;
}

/**
 * View-to-model conversion helper for object elements.
 *
 * Preserves object element content in `htmlContent` attribute.
 *
 * @returns Returns a conversion callback.
*/ function viewToModelObjectConverter({ model: modelName }) {
    return (viewElement, conversionApi)=>{
        // Let's keep element HTML and its attributes, so we can rebuild element in downcast conversions.
        return conversionApi.writer.createElement(modelName, {
            htmlContent: viewElement.getCustomProperty('$rawContent')
        });
    };
}
/**
 * Conversion helper converting an object element to an HTML object widget.
 *
 * @returns Returns a conversion callback.
*/ function toObjectWidgetConverter(editor, { view: viewName, isInline }) {
    const t = editor.t;
    return (modelElement, { writer })=>{
        const widgetLabel = t('HTML object');
        const viewElement = createObjectView(viewName, modelElement, writer);
        const viewAttributes = modelElement.getAttribute(getHtmlAttributeName(viewName));
        writer.addClass('html-object-embed__content', viewElement);
        if (viewAttributes) {
            setViewAttributes(writer, viewAttributes, viewElement);
        }
        // Widget cannot be a raw element because the widget system would not be able
        // to add its UI to it. Thus, we need separate view container.
        const viewContainer = writer.createContainerElement(isInline ? 'span' : 'div', {
            class: 'html-object-embed',
            'data-html-object-embed-label': widgetLabel
        }, viewElement);
        return turndown_browser_es.toWidget(viewContainer, writer, {
            label: widgetLabel
        });
    };
}
/**
* Creates object view element from the given model element.
*/ function createObjectView(viewName, modelElement, writer) {
    return writer.createRawElement(viewName, null, (domElement, domConverter)=>{
        domConverter.setContentOf(domElement, modelElement.getAttribute('htmlContent'));
    });
}
/**
 * View-to-attribute conversion helper preserving inline element attributes on `$text`.
 *
 * @returns Returns a conversion callback.
*/ function viewToAttributeInlineConverter({ view: viewName, model: attributeKey, allowEmpty }, dataFilter) {
    return (dispatcher)=>{
        dispatcher.on(`element:${viewName}`, (evt, data, conversionApi)=>{
            let viewAttributes = dataFilter.processViewAttributes(data.viewItem, conversionApi);
            // Do not apply the attribute if the element itself is already consumed and there are no view attributes to store.
            if (!viewAttributes && !conversionApi.consumable.test(data.viewItem, {
                name: true
            })) {
                return;
            }
            // Otherwise, we might need to convert it to an empty object just to preserve element itself,
            // for example `<cite>` => <$text htmlCite="{}">.
            viewAttributes = viewAttributes || {};
            // Consume the element itself if it wasn't consumed by any other converter.
            conversionApi.consumable.consume(data.viewItem, {
                name: true
            });
            // Since we are converting to attribute we need a range on which we will set the attribute.
            // If the range is not created yet, we will create it.
            if (!data.modelRange) {
                data = Object.assign(data, conversionApi.convertChildren(data.viewItem, data.modelCursor));
            }
            // Convert empty inline element if allowed and has any attributes.
            if (allowEmpty && data.modelRange.isCollapsed && Object.keys(viewAttributes).length) {
                const modelElement = conversionApi.writer.createElement('htmlEmptyElement');
                if (!conversionApi.safeInsert(modelElement, data.modelCursor)) {
                    return;
                }
                const parts = conversionApi.getSplitParts(modelElement);
                data.modelRange = conversionApi.writer.createRange(data.modelRange.start, conversionApi.writer.createPositionAfter(parts[parts.length - 1]));
                conversionApi.updateConversionResult(modelElement, data);
                setAttributeOnItem(modelElement, viewAttributes, conversionApi);
                return;
            }
            // Set attribute on each item in range according to the schema.
            for (const node of data.modelRange.getItems()){
                setAttributeOnItem(node, viewAttributes, conversionApi);
            }
        }, {
            priority: 'low'
        });
    };
    function setAttributeOnItem(node, viewAttributes, conversionApi) {
        if (conversionApi.schema.checkAttribute(node, attributeKey)) {
            // Node's children are converted recursively, so node can already include model attribute.
            // We want to extend it, not replace.
            const nodeAttributes = node.getAttribute(attributeKey);
            const attributesToAdd = mergeViewElementAttributes(viewAttributes, nodeAttributes || {});
            conversionApi.writer.setAttribute(attributeKey, attributesToAdd, node);
        }
    }
}
/**
 * Conversion helper converting an empty inline model element to an HTML element or widget.
 */ function emptyInlineModelElementToViewConverter({ model: attributeKey, view: viewName }, asWidget) {
    return (item, { writer, consumable })=>{
        if (!item.hasAttribute(attributeKey)) {
            return null;
        }
        const viewElement = writer.createContainerElement(viewName);
        const attributeValue = item.getAttribute(attributeKey);
        consumable.consume(item, `attribute:${attributeKey}`);
        setViewAttributes(writer, attributeValue, viewElement);
        viewElement.getFillerOffset = ()=>null;
        return asWidget ? turndown_browser_es.toWidget(viewElement, writer) : viewElement;
    };
}
/**
 * Attribute-to-view conversion helper applying attributes to view element preserved on `$text`.
 *
 * @returns Returns a conversion callback.
*/ function attributeToViewInlineConverter({ priority, view: viewName }) {
    return (attributeValue, conversionApi)=>{
        if (!attributeValue) {
            return;
        }
        const { writer } = conversionApi;
        const viewElement = writer.createAttributeElement(viewName, null, {
            priority
        });
        setViewAttributes(writer, attributeValue, viewElement);
        return viewElement;
    };
}
/**
 * View-to-model conversion helper preserving allowed attributes on block element.
 *
 * All matched attributes will be preserved on `html*Attributes` attribute.
 *
 * @returns Returns a conversion callback.
*/ function viewToModelBlockAttributeConverter({ view: viewName }, dataFilter) {
    return (dispatcher)=>{
        dispatcher.on(`element:${viewName}`, (evt, data, conversionApi)=>{
            // Converting an attribute of an element that has not been converted to anything does not make sense
            // because there will be nowhere to set that attribute on. At this stage, the element should've already
            // been converted. A collapsed range can show up in to-do lists (<input>) or complex widgets (e.g. table).
            // (https://github.com/ckeditor/ckeditor5/issues/11000).
            if (!data.modelRange || data.modelRange.isCollapsed) {
                return;
            }
            const viewAttributes = dataFilter.processViewAttributes(data.viewItem, conversionApi);
            if (!viewAttributes) {
                return;
            }
            conversionApi.writer.setAttribute(getHtmlAttributeName(data.viewItem.name), viewAttributes, data.modelRange);
        }, {
            priority: 'low'
        });
    };
}
/**
 * Model-to-view conversion helper applying attributes preserved in `html*Attributes` attribute
 * for block elements.
 *
 * @returns Returns a conversion callback.
*/ function modelToViewBlockAttributeConverter({ view: viewName, model: modelName }) {
    return (dispatcher)=>{
        dispatcher.on(`attribute:${getHtmlAttributeName(viewName)}:${modelName}`, (evt, data, conversionApi)=>{
            if (!conversionApi.consumable.consume(data.item, evt.name)) {
                return;
            }
            const { attributeOldValue, attributeNewValue } = data;
            const viewWriter = conversionApi.writer;
            const viewElement = conversionApi.mapper.toViewElement(data.item);
            updateViewAttributes(viewWriter, attributeOldValue, attributeNewValue, viewElement);
        });
    };
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */ /**
 * @module html-support/schemadefinitions
 */ // Skipped elements due to HTML deprecation:
// * noframes (not sure if we should provide support for this element. CKE4 is not supporting frameset and frame,
//   but it will unpack <frameset><noframes>foobar</noframes></frameset> to <noframes>foobar</noframes>, so there
//   may be some content loss. Although using noframes as a standalone element seems invalid)
// * keygen (this one is also empty)
// * applet (support is limited mostly to old IE)
// * basefont (this one is also empty)
// * isindex (basically no support for modern browsers at all)
//
// Skipped elements due to lack empty element support:
// * hr
// * area
// * br
// * command
// * map
// * wbr
// * colgroup -> col
//
// Skipped elements due to complexity:
// * datalist with option elements used as a data source for input[list] element
//
// Skipped elements as they are handled as an object content:
// * track
// * source
// * option
// * param
// * optgroup
//
// Skipped full page HTML elements:
// * body
// * html
// * title
// * head
// * meta
// * link
// * etc...
//
// Skipped hidden elements:
// noscript
var defaultConfig = {
    block: [
        // Existing features.
        {
            model: 'codeBlock',
            view: 'pre'
        },
        {
            model: 'paragraph',
            view: 'p'
        },
        {
            model: 'blockQuote',
            view: 'blockquote'
        },
        {
            model: 'listItem',
            view: 'li'
        },
        {
            model: 'pageBreak',
            view: 'div'
        },
        {
            model: 'rawHtml',
            view: 'div'
        },
        {
            model: 'table',
            view: 'table'
        },
        {
            model: 'tableRow',
            view: 'tr'
        },
        {
            model: 'tableCell',
            view: 'td'
        },
        {
            model: 'tableCell',
            view: 'th'
        },
        {
            model: 'tableColumnGroup',
            view: 'colgroup'
        },
        {
            model: 'tableColumn',
            view: 'col'
        },
        {
            model: 'caption',
            view: 'caption'
        },
        {
            model: 'caption',
            view: 'figcaption'
        },
        {
            model: 'imageBlock',
            view: 'img'
        },
        {
            model: 'imageInline',
            view: 'img'
        },
        // Compatibility features.
        {
            model: 'htmlP',
            view: 'p',
            modelSchema: {
                inheritAllFrom: '$block'
            }
        },
        {
            model: 'htmlBlockquote',
            view: 'blockquote',
            modelSchema: {
                inheritAllFrom: '$container'
            }
        },
        {
            model: 'htmlTable',
            view: 'table',
            modelSchema: {
                allowWhere: '$block',
                isBlock: true
            }
        },
        {
            model: 'htmlTbody',
            view: 'tbody',
            modelSchema: {
                allowIn: 'htmlTable',
                isBlock: false
            }
        },
        {
            model: 'htmlThead',
            view: 'thead',
            modelSchema: {
                allowIn: 'htmlTable',
                isBlock: false
            }
        },
        {
            model: 'htmlTfoot',
            view: 'tfoot',
            modelSchema: {
                allowIn: 'htmlTable',
                isBlock: false
            }
        },
        {
            model: 'htmlCaption',
            view: 'caption',
            modelSchema: {
                allowIn: 'htmlTable',
                allowChildren: '$text',
                isBlock: false
            }
        },
        {
            model: 'htmlColgroup',
            view: 'colgroup',
            modelSchema: {
                allowIn: 'htmlTable',
                allowChildren: 'col',
                isBlock: false
            }
        },
        {
            model: 'htmlCol',
            view: 'col',
            modelSchema: {
                allowIn: 'htmlColgroup',
                isBlock: false
            }
        },
        {
            model: 'htmlTr',
            view: 'tr',
            modelSchema: {
                allowIn: [
                    'htmlTable',
                    'htmlThead',
                    'htmlTbody'
                ],
                isLimit: true
            }
        },
        // TODO can also include text.
        {
            model: 'htmlTd',
            view: 'td',
            modelSchema: {
                allowIn: 'htmlTr',
                allowContentOf: '$container',
                isLimit: true,
                isBlock: false
            }
        },
        // TODO can also include text.
        {
            model: 'htmlTh',
            view: 'th',
            modelSchema: {
                allowIn: 'htmlTr',
                allowContentOf: '$container',
                isLimit: true,
                isBlock: false
            }
        },
        // TODO can also include text.
        {
            model: 'htmlFigure',
            view: 'figure',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        // TODO can also include other block elements.
        {
            model: 'htmlFigcaption',
            view: 'figcaption',
            modelSchema: {
                allowIn: 'htmlFigure',
                allowChildren: '$text',
                isBlock: false
            }
        },
        // TODO can also include text.
        {
            model: 'htmlAddress',
            view: 'address',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        // TODO can also include text.
        {
            model: 'htmlAside',
            view: 'aside',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        // TODO can also include text.
        {
            model: 'htmlMain',
            view: 'main',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        // TODO can also include text.
        {
            model: 'htmlDetails',
            view: 'details',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        {
            model: 'htmlSummary',
            view: 'summary',
            modelSchema: {
                allowChildren: [
                    'htmlH1',
                    'htmlH2',
                    'htmlH3',
                    'htmlH4',
                    'htmlH5',
                    'htmlH6',
                    '$text'
                ],
                allowIn: 'htmlDetails',
                isBlock: false
            }
        },
        {
            model: 'htmlDiv',
            view: 'div',
            paragraphLikeModel: 'htmlDivParagraph',
            modelSchema: {
                inheritAllFrom: '$container'
            }
        },
        // TODO can also include text.
        {
            model: 'htmlFieldset',
            view: 'fieldset',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        // TODO can also include h1-h6.
        {
            model: 'htmlLegend',
            view: 'legend',
            modelSchema: {
                allowIn: 'htmlFieldset',
                allowChildren: '$text'
            }
        },
        // TODO can also include text.
        {
            model: 'htmlHeader',
            view: 'header',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        // TODO can also include text.
        {
            model: 'htmlFooter',
            view: 'footer',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        // TODO can also include text.
        {
            model: 'htmlForm',
            view: 'form',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: true
            }
        },
        {
            model: 'htmlHgroup',
            view: 'hgroup',
            modelSchema: {
                allowIn: [
                    '$root',
                    '$container'
                ],
                allowChildren: [
                    'paragraph',
                    'htmlP',
                    'htmlH1',
                    'htmlH2',
                    'htmlH3',
                    'htmlH4',
                    'htmlH5',
                    'htmlH6'
                ],
                isBlock: false
            }
        },
        {
            model: 'htmlH1',
            view: 'h1',
            modelSchema: {
                inheritAllFrom: '$block'
            }
        },
        {
            model: 'htmlH2',
            view: 'h2',
            modelSchema: {
                inheritAllFrom: '$block'
            }
        },
        {
            model: 'htmlH3',
            view: 'h3',
            modelSchema: {
                inheritAllFrom: '$block'
            }
        },
        {
            model: 'htmlH4',
            view: 'h4',
            modelSchema: {
                inheritAllFrom: '$block'
            }
        },
        {
            model: 'htmlH5',
            view: 'h5',
            modelSchema: {
                inheritAllFrom: '$block'
            }
        },
        {
            model: 'htmlH6',
            view: 'h6',
            modelSchema: {
                inheritAllFrom: '$block'
            }
        },
        {
            model: '$htmlList',
            modelSchema: {
                allowWhere: '$container',
                allowChildren: [
                    '$htmlList',
                    'htmlLi'
                ],
                isBlock: false
            }
        },
        {
            model: 'htmlDir',
            view: 'dir',
            modelSchema: {
                inheritAllFrom: '$htmlList'
            }
        },
        {
            model: 'htmlMenu',
            view: 'menu',
            modelSchema: {
                inheritAllFrom: '$htmlList'
            }
        },
        {
            model: 'htmlUl',
            view: 'ul',
            modelSchema: {
                inheritAllFrom: '$htmlList'
            }
        },
        {
            model: 'htmlOl',
            view: 'ol',
            modelSchema: {
                inheritAllFrom: '$htmlList'
            }
        },
        // TODO can also include other block elements.
        {
            model: 'htmlLi',
            view: 'li',
            modelSchema: {
                allowIn: '$htmlList',
                allowChildren: '$text',
                isBlock: false
            }
        },
        {
            model: 'htmlPre',
            view: 'pre',
            modelSchema: {
                inheritAllFrom: '$block'
            }
        },
        {
            model: 'htmlArticle',
            view: 'article',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        {
            model: 'htmlSection',
            view: 'section',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        // TODO can also include text.
        {
            model: 'htmlNav',
            view: 'nav',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        },
        {
            model: 'htmlDivDl',
            view: 'div',
            modelSchema: {
                allowChildren: [
                    'htmlDt',
                    'htmlDd'
                ],
                allowIn: 'htmlDl'
            }
        },
        {
            model: 'htmlDl',
            view: 'dl',
            modelSchema: {
                allowWhere: '$container',
                allowChildren: [
                    'htmlDt',
                    'htmlDd',
                    'htmlDivDl'
                ],
                isBlock: false
            }
        },
        {
            model: 'htmlDt',
            view: 'dt',
            modelSchema: {
                allowChildren: '$block',
                isBlock: false
            }
        },
        {
            model: 'htmlDd',
            view: 'dd',
            modelSchema: {
                allowChildren: '$block',
                isBlock: false
            }
        },
        {
            model: 'htmlCenter',
            view: 'center',
            modelSchema: {
                inheritAllFrom: '$container',
                isBlock: false
            }
        }
    ],
    inline: [
        // Existing features (attribute set on an existing model element).
        {
            model: 'htmlLiAttributes',
            view: 'li',
            appliesToBlock: true,
            coupledAttribute: 'listItemId'
        },
        {
            model: 'htmlOlAttributes',
            view: 'ol',
            appliesToBlock: true,
            coupledAttribute: 'listItemId'
        },
        {
            model: 'htmlUlAttributes',
            view: 'ul',
            appliesToBlock: true,
            coupledAttribute: 'listItemId'
        },
        {
            model: 'htmlFigureAttributes',
            view: 'figure',
            appliesToBlock: 'table'
        },
        {
            model: 'htmlTheadAttributes',
            view: 'thead',
            appliesToBlock: 'table'
        },
        {
            model: 'htmlTbodyAttributes',
            view: 'tbody',
            appliesToBlock: 'table'
        },
        {
            model: 'htmlFigureAttributes',
            view: 'figure',
            appliesToBlock: 'imageBlock'
        },
        // Compatibility features.
        {
            model: 'htmlAcronym',
            view: 'acronym',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlTt',
            view: 'tt',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlFont',
            view: 'font',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlTime',
            view: 'time',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlVar',
            view: 'var',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlBig',
            view: 'big',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlSmall',
            view: 'small',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlSamp',
            view: 'samp',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlQ',
            view: 'q',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlOutput',
            view: 'output',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlKbd',
            view: 'kbd',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlBdi',
            view: 'bdi',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlBdo',
            view: 'bdo',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlAbbr',
            view: 'abbr',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlA',
            view: 'a',
            priority: 5,
            coupledAttribute: 'linkHref'
        },
        {
            model: 'htmlStrong',
            view: 'strong',
            coupledAttribute: 'bold',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlB',
            view: 'b',
            coupledAttribute: 'bold',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlI',
            view: 'i',
            coupledAttribute: 'italic',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlEm',
            view: 'em',
            coupledAttribute: 'italic',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlS',
            view: 's',
            coupledAttribute: 'strikethrough',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        // TODO According to HTML-spec can behave as div-like element, although CKE4 only handles it as an inline element.
        {
            model: 'htmlDel',
            view: 'del',
            coupledAttribute: 'strikethrough',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        // TODO According to HTML-spec can behave as div-like element, although CKE4 only handles it as an inline element.
        {
            model: 'htmlIns',
            view: 'ins',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlU',
            view: 'u',
            coupledAttribute: 'underline',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlSub',
            view: 'sub',
            coupledAttribute: 'subscript',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlSup',
            view: 'sup',
            coupledAttribute: 'superscript',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlCode',
            view: 'code',
            coupledAttribute: 'code',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlMark',
            view: 'mark',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlSpan',
            view: 'span',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlCite',
            view: 'cite',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlLabel',
            view: 'label',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        {
            model: 'htmlDfn',
            view: 'dfn',
            attributeProperties: {
                copyOnEnter: true,
                isFormatting: true
            }
        },
        // Objects.
        {
            model: 'htmlObject',
            view: 'object',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlIframe',
            view: 'iframe',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlInput',
            view: 'input',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlButton',
            view: 'button',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlTextarea',
            view: 'textarea',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlSelect',
            view: 'select',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlVideo',
            view: 'video',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlEmbed',
            view: 'embed',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlOembed',
            view: 'oembed',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlAudio',
            view: 'audio',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlImg',
            view: 'img',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlCanvas',
            view: 'canvas',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        // TODO it could be probably represented as non-object element, although it has graphical representation,
        // so probably makes more sense to keep it as an object.
        {
            model: 'htmlMeter',
            view: 'meter',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        // TODO it could be probably represented as non-object element, although it has graphical representation,
        // so probably makes more sense to keep it as an object.
        {
            model: 'htmlProgress',
            view: 'progress',
            isObject: true,
            modelSchema: {
                inheritAllFrom: '$inlineObject'
            }
        },
        {
            model: 'htmlScript',
            view: 'script',
            modelSchema: {
                allowWhere: [
                    '$text',
                    '$block'
                ],
                isInline: true
            }
        },
        {
            model: 'htmlStyle',
            view: 'style',
            modelSchema: {
                allowWhere: [
                    '$text',
                    '$block'
                ],
                isInline: true
            }
        },
        {
            model: 'htmlCustomElement',
            view: '$customElement',
            modelSchema: {
                allowWhere: [
                    '$text',
                    '$block'
                ],
                allowAttributesOf: '$inlineObject',
                isInline: true
            }
        }
    ]
};

/**
 * Holds representation of the extended HTML document type definitions to be used by the
 * editor in HTML support.
 *
 * Data schema is represented by data schema definitions.
 *
 * To add new definition for block element,
 * use {@link module:html-support/dataschema~DataSchema#registerBlockElement} method:
 *
 * ```ts
 * dataSchema.registerBlockElement( {
 * 	view: 'section',
 * 	model: 'my-section',
 * 	modelSchema: {
 * 		inheritAllFrom: '$block'
 * 	}
 * } );
 * ```
 *
 * To add new definition for inline element,
 * use {@link module:html-support/dataschema~DataSchema#registerInlineElement} method:
 *
 * ```
 * dataSchema.registerInlineElement( {
 * 	view: 'span',
 * 	model: 'my-span',
 * 	attributeProperties: {
 * 		copyOnEnter: true
 * 	}
 * } );
 * ```
 */ class DataSchema extends turndown_browser_es.Plugin {
    /**
	 * A map of registered data schema definitions.
	 */ _definitions = [];
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'DataSchema';
    }
    /**
	 * @inheritDoc
	 */ init() {
        for (const definition of defaultConfig.block){
            this.registerBlockElement(definition);
        }
        for (const definition of defaultConfig.inline){
            this.registerInlineElement(definition);
        }
    }
    /**
	 * Add new data schema definition describing block element.
	 */ registerBlockElement(definition) {
        this._definitions.push({
            ...definition,
            isBlock: true
        });
    }
    /**
	 * Add new data schema definition describing inline element.
	 */ registerInlineElement(definition) {
        this._definitions.push({
            ...definition,
            isInline: true
        });
    }
    /**
	 * Updates schema definition describing block element with new properties.
	 *
	 * Creates new scheme if it doesn't exist.
	 * Array properties are concatenated with original values.
	 *
	 * @param definition Definition update.
	 */ extendBlockElement(definition) {
        this._extendDefinition({
            ...definition,
            isBlock: true
        });
    }
    /**
	 * Updates schema definition describing inline element with new properties.
	 *
	 * Creates new scheme if it doesn't exist.
	 * Array properties are concatenated with original values.
	 *
	 * @param definition Definition update.
	 */ extendInlineElement(definition) {
        this._extendDefinition({
            ...definition,
            isInline: true
        });
    }
    /**
	 * Returns all definitions matching the given view name.
	 *
	 * @param includeReferences Indicates if this method should also include definitions of referenced models.
	 */ getDefinitionsForView(viewName, includeReferences = false) {
        const definitions = new Set();
        for (const definition of this._getMatchingViewDefinitions(viewName)){
            if (includeReferences) {
                for (const reference of this._getReferences(definition.model)){
                    definitions.add(reference);
                }
            }
            definitions.add(definition);
        }
        return definitions;
    }
    /**
	 * Returns definitions matching the given model name.
	 */ getDefinitionsForModel(modelName) {
        return this._definitions.filter((definition)=>definition.model == modelName);
    }
    /**
	 * Returns definitions matching the given view name.
	 */ _getMatchingViewDefinitions(viewName) {
        return this._definitions.filter((def)=>def.view && testViewName(viewName, def.view));
    }
    /**
	 * Resolves all definition references registered for the given data schema definition.
	 *
	 * @param modelName Data schema model name.
	 */ *_getReferences(modelName) {
        const inheritProperties = [
            'inheritAllFrom',
            'inheritTypesFrom',
            'allowWhere',
            'allowContentOf',
            'allowAttributesOf'
        ];
        const definitions = this._definitions.filter((definition)=>definition.model == modelName);
        for (const { modelSchema } of definitions){
            if (!modelSchema) {
                continue;
            }
            for (const property of inheritProperties){
                for (const referenceName of turndown_browser_es.toArray(modelSchema[property] || [])){
                    const definitions = this._definitions.filter((definition)=>definition.model == referenceName);
                    for (const definition of definitions){
                        if (referenceName !== modelName) {
                            yield* this._getReferences(definition.model);
                            yield definition;
                        }
                    }
                }
            }
        }
    }
    /**
	 * Updates schema definition with new properties.
	 *
	 * Creates new scheme if it doesn't exist.
	 * Array properties are concatenated with original values.
	 *
	 * @param definition Definition update.
	 */ _extendDefinition(definition) {
        const currentDefinitions = Array.from(this._definitions.entries()).filter(([, currentDefinition])=>currentDefinition.model == definition.model);
        if (currentDefinitions.length == 0) {
            this._definitions.push(definition);
            return;
        }
        for (const [idx, currentDefinition] of currentDefinitions){
            this._definitions[idx] = mergeWith$1({}, currentDefinition, definition, (target, source)=>{
                return Array.isArray(target) ? target.concat(source) : undefined;
            });
        }
    }
}
/**
 * Test view name against the given pattern.
 */ function testViewName(pattern, viewName) {
    if (typeof pattern === 'string') {
        return pattern === viewName;
    }
    if (pattern instanceof RegExp) {
        return pattern.test(viewName);
    }
    return false;
}

/**
 * Allows to validate elements and element attributes registered by {@link module:html-support/dataschema~DataSchema}.
 *
 * To enable registered element in the editor, use {@link module:html-support/datafilter~DataFilter#allowElement} method:
 *
 * ```ts
 * dataFilter.allowElement( 'section' );
 * ```
 *
 * You can also allow or disallow specific element attributes:
 *
 * ```ts
 * // Allow `data-foo` attribute on `section` element.
 * dataFilter.allowAttributes( {
 * 	name: 'section',
 * 	attributes: {
 * 		'data-foo': true
 * 	}
 * } );
 *
 * // Disallow `color` style attribute on 'section' element.
 * dataFilter.disallowAttributes( {
 * 	name: 'section',
 * 	styles: {
 * 		color: /[\s\S]+/
 * 	}
 * } );
 * ```
 *
 * To apply the information about allowed and disallowed attributes in custom integration plugin,
 * use the {@link module:html-support/datafilter~DataFilter#processViewAttributes `processViewAttributes()`} method.
 */ class DataFilter extends turndown_browser_es.Plugin {
    /**
	 * An instance of the {@link module:html-support/dataschema~DataSchema}.
	 */ _dataSchema;
    /**
	 * {@link module:engine/view/matcher~Matcher Matcher} instance describing rules upon which
	 * content attributes should be allowed.
	 */ _allowedAttributes;
    /**
	 * {@link module:engine/view/matcher~Matcher Matcher} instance describing rules upon which
	 * content attributes should be disallowed.
	 */ _disallowedAttributes;
    /**
	 * Allowed element definitions by {@link module:html-support/datafilter~DataFilter#allowElement} method.
	*/ _allowedElements;
    /**
	 * Disallowed element names by {@link module:html-support/datafilter~DataFilter#disallowElement} method.
	 */ _disallowedElements;
    /**
	 * Indicates if {@link module:engine/controller/datacontroller~DataController editor's data controller}
	 * data has been already initialized.
	*/ _dataInitialized;
    /**
	 * Cached map of coupled attributes. Keys are the feature attributes names
	 * and values are arrays with coupled GHS attributes names.
	 */ _coupledAttributes;
    constructor(editor){
        super(editor);
        this._dataSchema = editor.plugins.get('DataSchema');
        this._allowedAttributes = new turndown_browser_es.Matcher();
        this._disallowedAttributes = new turndown_browser_es.Matcher();
        this._allowedElements = new Set();
        this._disallowedElements = new Set();
        this._dataInitialized = false;
        this._coupledAttributes = null;
        this._registerElementsAfterInit();
        this._registerElementHandlers();
        this._registerCoupledAttributesPostFixer();
        this._registerAssociatedHtmlAttributesPostFixer();
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'DataFilter';
    }
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataSchema,
            turndown_browser_es.Widget
        ];
    }
    /**
	 * Load a configuration of one or many elements, where their attributes should be allowed.
	 *
	 * **Note**: Rules will be applied just before next data pipeline data init or set.
	 *
	 * @param config Configuration of elements that should have their attributes accepted in the editor.
	 */ loadAllowedConfig(config) {
        for (const pattern of config){
            // MatcherPattern allows omitting `name` to widen the search of elements.
            // Let's keep it consistent and match every element if a `name` has not been provided.
            const elementName = pattern.name || /[\s\S]+/;
            const rules = splitRules(pattern);
            this.allowElement(elementName);
            rules.forEach((pattern)=>this.allowAttributes(pattern));
        }
    }
    /**
	 * Load a configuration of one or many elements, where their attributes should be disallowed.
	 *
	 * **Note**: Rules will be applied just before next data pipeline data init or set.
	 *
	 * @param config Configuration of elements that should have their attributes rejected from the editor.
	 */ loadDisallowedConfig(config) {
        for (const pattern of config){
            // MatcherPattern allows omitting `name` to widen the search of elements.
            // Let's keep it consistent and match every element if a `name` has not been provided.
            const elementName = pattern.name || /[\s\S]+/;
            const rules = splitRules(pattern);
            // Disallow element itself if there is no other rules.
            if (rules.length == 0) {
                this.disallowElement(elementName);
            } else {
                rules.forEach((pattern)=>this.disallowAttributes(pattern));
            }
        }
    }
    /**
	 * Load a configuration of one or many elements, where when empty should be allowed.
	 *
	 * **Note**: It modifies DataSchema so must be loaded before registering filtering rules.
	 *
	 * @param config Configuration of elements that should be preserved even if empty.
	 */ loadAllowedEmptyElementsConfig(config) {
        for (const elementName of config){
            this.allowEmptyElement(elementName);
        }
    }
    /**
	 * Allow the given element in the editor context.
	 *
	 * This method will only allow elements described by the {@link module:html-support/dataschema~DataSchema} used
	 * to create data filter.
	 *
	 * **Note**: Rules will be applied just before next data pipeline data init or set.
	 *
	 * @param viewName String or regular expression matching view name.
	 */ allowElement(viewName) {
        for (const definition of this._dataSchema.getDefinitionsForView(viewName, true)){
            this._addAllowedElement(definition);
            // Reset cached map to recalculate it on the next usage.
            this._coupledAttributes = null;
        }
    }
    /**
	 * Disallow the given element in the editor context.
	 *
	 * This method will only disallow elements described by the {@link module:html-support/dataschema~DataSchema} used
	 * to create data filter.
	 *
	 * @param viewName String or regular expression matching view name.
	 */ disallowElement(viewName) {
        for (const definition of this._dataSchema.getDefinitionsForView(viewName, false)){
            this._disallowedElements.add(definition.view);
        }
    }
    /**
	 * Allow the given empty element in the editor context.
	 *
	 * This method will only allow elements described by the {@link module:html-support/dataschema~DataSchema} used
	 * to create data filter.
	 *
	 * **Note**: It modifies DataSchema so must be called before registering filtering rules.
	 *
	 * @param viewName String or regular expression matching view name.
	 */ allowEmptyElement(viewName) {
        for (const definition of this._dataSchema.getDefinitionsForView(viewName, true)){
            if (definition.isInline) {
                this._dataSchema.extendInlineElement({
                    ...definition,
                    allowEmpty: true
                });
            }
        }
    }
    /**
	 * Allow the given attributes for view element allowed by {@link #allowElement} method.
	 *
	 * @param config Pattern matching all attributes which should be allowed.
	 */ allowAttributes(config) {
        this._allowedAttributes.add(config);
    }
    /**
	 * Disallow the given attributes for view element allowed by {@link #allowElement} method.
	 *
	 * @param config Pattern matching all attributes which should be disallowed.
	 */ disallowAttributes(config) {
        this._disallowedAttributes.add(config);
    }
    /**
	 * Processes all allowed and disallowed attributes on the view element by consuming them and returning the allowed ones.
	 *
	 * This method applies the configuration set up by {@link #allowAttributes `allowAttributes()`}
	 * and {@link #disallowAttributes `disallowAttributes()`} over the given view element by consuming relevant attributes.
	 * It returns the allowed attributes that were found on the given view element for further processing by integration code.
	 *
	 * ```ts
	 * dispatcher.on( 'element:myElement', ( evt, data, conversionApi ) => {
	 * 	// Get rid of disallowed and extract all allowed attributes from a viewElement.
	 * 	const viewAttributes = dataFilter.processViewAttributes( data.viewItem, conversionApi );
	 * 	// Do something with them, i.e. store inside a model as a dictionary.
	 * 	if ( viewAttributes ) {
	 * 		conversionApi.writer.setAttribute( 'htmlAttributesOfMyElement', viewAttributes, data.modelRange );
	 * 	}
	 * } );
	 * ```
	 *
	 * @see module:engine/conversion/viewconsumable~ViewConsumable#consume
	 *
	 * @returns Object with following properties:
	 * - attributes Set with matched attribute names.
	 * - styles Set with matched style names.
	 * - classes Set with matched class names.
	 */ processViewAttributes(viewElement, conversionApi) {
        const { consumable } = conversionApi;
        // Make sure that the disabled attributes are handled before the allowed attributes are called.
        // For example, for block images the <figure> converter triggers conversion for <img> first and then for other elements, i.e. <a>.
        matchAndConsumeAttributes(viewElement, this._disallowedAttributes, consumable);
        return prepareGHSAttribute(viewElement, matchAndConsumeAttributes(viewElement, this._allowedAttributes, consumable));
    }
    /**
	 * Adds allowed element definition and fires registration event.
	 */ _addAllowedElement(definition) {
        if (this._allowedElements.has(definition)) {
            return;
        }
        this._allowedElements.add(definition);
        // For attribute based integrations (table figure, document lists, etc.) register related element definitions.
        if ('appliesToBlock' in definition && typeof definition.appliesToBlock == 'string') {
            for (const relatedDefinition of this._dataSchema.getDefinitionsForModel(definition.appliesToBlock)){
                if (relatedDefinition.isBlock) {
                    this._addAllowedElement(relatedDefinition);
                }
            }
        }
        // We need to wait for all features to be initialized before we can register
        // element, so we can access existing features model schemas.
        // If the data has not been initialized yet, _registerElementsAfterInit() method will take care of
        // registering elements.
        if (this._dataInitialized) {
            // Defer registration to the next data pipeline data set so any disallow rules could be applied
            // even if added after allow rule (disallowElement).
            this.editor.data.once('set', ()=>{
                this._fireRegisterEvent(definition);
            }, {
                // With the highest priority listener we are able to register elements right before
                // running data conversion.
                priority: turndown_browser_es.priorities.highest + 1
            });
        }
    }
    /**
	 * Registers elements allowed by {@link module:html-support/datafilter~DataFilter#allowElement} method
	 * once {@link module:engine/controller/datacontroller~DataController editor's data controller} is initialized.
	*/ _registerElementsAfterInit() {
        this.editor.data.on('init', ()=>{
            this._dataInitialized = true;
            for (const definition of this._allowedElements){
                this._fireRegisterEvent(definition);
            }
        }, {
            // With highest priority listener we are able to register elements right before
            // running data conversion. Also:
            // * Make sure that priority is higher than the one used by `RealTimeCollaborationClient`,
            // as RTC is stopping event propagation.
            // * Make sure no other features hook into this event before GHS because otherwise the
            // downcast conversion (for these features) could run before GHS registered its converters
            // (https://github.com/ckeditor/ckeditor5/issues/11356).
            priority: turndown_browser_es.priorities.highest + 1
        });
    }
    /**
	 * Registers default element handlers.
	 */ _registerElementHandlers() {
        this.on('register', (evt, definition)=>{
            const schema = this.editor.model.schema;
            // Object element should be only registered for new features.
            // If the model schema is already registered, it should be handled by
            // #_registerBlockElement() or #_registerObjectElement() attribute handlers.
            if (definition.isObject && !schema.isRegistered(definition.model)) {
                this._registerObjectElement(definition);
            } else if (definition.isBlock) {
                this._registerBlockElement(definition);
            } else if (definition.isInline) {
                this._registerInlineElement(definition);
            } else {
                /**
				 * The definition cannot be handled by the data filter.
				 *
				 * Make sure that the registered definition is correct.
				 *
				 * @error data-filter-invalid-definition
				 */ throw new turndown_browser_es.CKEditorError('data-filter-invalid-definition', null, definition);
            }
            evt.stop();
        }, {
            priority: 'lowest'
        });
    }
    /**
	 * Registers a model post-fixer that is removing coupled GHS attributes of inline elements. Those attributes
	 * are removed if a coupled feature attribute is removed.
	 *
	 * For example, consider following HTML:
	 *
	 * ```html
	 * <a href="foo.html" id="myId">bar</a>
	 * ```
	 *
	 * Which would be upcasted to following text node in the model:
	 *
	 * ```html
	 * <$text linkHref="foo.html" htmlA="{ attributes: { id: 'myId' } }">bar</$text>
	 * ```
	 *
	 * When the user removes the link from that text (using UI), only `linkHref` attribute would be removed:
	 *
	 * ```html
	 * <$text htmlA="{ attributes: { id: 'myId' } }">bar</$text>
	 * ```
	 *
	 * The `htmlA` attribute would stay in the model and would cause GHS to generate an `<a>` element.
	 * This is incorrect from UX point of view, as the user wanted to remove the whole link (not only `href`).
	 */ _registerCoupledAttributesPostFixer() {
        const model = this.editor.model;
        const selection = model.document.selection;
        model.document.registerPostFixer((writer)=>{
            const changes = model.document.differ.getChanges();
            let changed = false;
            const coupledAttributes = this._getCoupledAttributesMap();
            for (const change of changes){
                // Handle only attribute removals.
                if (change.type != 'attribute' || change.attributeNewValue !== null) {
                    continue;
                }
                // Find a list of coupled GHS attributes.
                const attributeKeys = coupledAttributes.get(change.attributeKey);
                if (!attributeKeys) {
                    continue;
                }
                // Remove the coupled GHS attributes on the same range as the feature attribute was removed.
                for (const { item } of change.range.getWalker()){
                    for (const attributeKey of attributeKeys){
                        if (item.hasAttribute(attributeKey)) {
                            writer.removeAttribute(attributeKey, item);
                            changed = true;
                        }
                    }
                }
            }
            return changed;
        });
        this.listenTo(selection, 'change:attribute', (evt, { attributeKeys })=>{
            const removeAttributes = new Set();
            const coupledAttributes = this._getCoupledAttributesMap();
            for (const attributeKey of attributeKeys){
                // Handle only attribute removals.
                if (selection.hasAttribute(attributeKey)) {
                    continue;
                }
                // Find a list of coupled GHS attributes.
                const coupledAttributeKeys = coupledAttributes.get(attributeKey);
                if (!coupledAttributeKeys) {
                    continue;
                }
                for (const coupledAttributeKey of coupledAttributeKeys){
                    if (selection.hasAttribute(coupledAttributeKey)) {
                        removeAttributes.add(coupledAttributeKey);
                    }
                }
            }
            if (removeAttributes.size == 0) {
                return;
            }
            model.change((writer)=>{
                for (const attributeKey of removeAttributes){
                    writer.removeSelectionAttribute(attributeKey);
                }
            });
        });
    }
    /**
	 * Removes `html*Attributes` attributes from incompatible elements.
	 *
	 * For example, consider the following HTML:
	 *
	 * ```html
	 * <heading2 htmlH2Attributes="...">foobar[]</heading2>
	 * ```
	 *
	 * Pressing `enter` creates a new `paragraph` element that inherits
	 * the `htmlH2Attributes` attribute from `heading2`.
	 *
	 * ```html
	 * <heading2 htmlH2Attributes="...">foobar</heading2>
	 * <paragraph htmlH2Attributes="...">[]</paragraph>
	 * ```
	 *
	 * This postfixer ensures that this doesn't happen, and that elements can
	 * only have `html*Attributes` associated with them,
	 * e.g.: `htmlPAttributes` for `<p>`, `htmlDivAttributes` for `<div>`, etc.
	 *
	 * With it enabled, pressing `enter` at the end of `<heading2>` will create
	 * a new paragraph without the `htmlH2Attributes` attribute.
	 *
	 * ```html
	 * <heading2 htmlH2Attributes="...">foobar</heading2>
	 * <paragraph>[]</paragraph>
	 * ```
	 */ _registerAssociatedHtmlAttributesPostFixer() {
        const model = this.editor.model;
        model.document.registerPostFixer((writer)=>{
            const changes = model.document.differ.getChanges();
            let changed = false;
            for (const change of changes){
                if (change.type !== 'insert' || change.name === '$text') {
                    continue;
                }
                for (const attr of change.attributes.keys()){
                    if (!attr.startsWith('html') || !attr.endsWith('Attributes')) {
                        continue;
                    }
                    if (!model.schema.checkAttribute(change.name, attr)) {
                        writer.removeAttribute(attr, change.position.nodeAfter);
                        changed = true;
                    }
                }
            }
            return changed;
        });
    }
    /**
	 * Collects the map of coupled attributes. The returned map is keyed by the feature attribute name
	 * and coupled GHS attribute names are stored in the value array.
	 */ _getCoupledAttributesMap() {
        if (this._coupledAttributes) {
            return this._coupledAttributes;
        }
        this._coupledAttributes = new Map();
        for (const definition of this._allowedElements){
            if (definition.coupledAttribute && definition.model) {
                const attributeNames = this._coupledAttributes.get(definition.coupledAttribute);
                if (attributeNames) {
                    attributeNames.push(definition.model);
                } else {
                    this._coupledAttributes.set(definition.coupledAttribute, [
                        definition.model
                    ]);
                }
            }
        }
        return this._coupledAttributes;
    }
    /**
	 * Fires `register` event for the given element definition.
	 */ _fireRegisterEvent(definition) {
        if (definition.view && this._disallowedElements.has(definition.view)) {
            return;
        }
        this.fire(definition.view ? `register:${definition.view}` : 'register', definition);
    }
    /**
	 * Registers object element and attribute converters for the given data schema definition.
	 */ _registerObjectElement(definition) {
        const editor = this.editor;
        const schema = editor.model.schema;
        const conversion = editor.conversion;
        const { view: viewName, model: modelName } = definition;
        schema.register(modelName, definition.modelSchema);
        /* istanbul ignore next: paranoid check -- @preserve */ if (!viewName) {
            return;
        }
        schema.extend(definition.model, {
            allowAttributes: [
                getHtmlAttributeName(viewName),
                'htmlContent'
            ]
        });
        // Store element content in special `$rawContent` custom property to
        // avoid editor's data filtering mechanism.
        editor.data.registerRawContentMatcher({
            name: viewName
        });
        conversion.for('upcast').elementToElement({
            view: viewName,
            model: viewToModelObjectConverter(definition),
            // With a `low` priority, `paragraph` plugin auto-paragraphing mechanism is executed. Make sure
            // this listener is called before it. If not, some elements will be transformed into a paragraph.
            // `+ 2` is used to take priority over `_addDefaultH1Conversion` in the Heading plugin.
            converterPriority: turndown_browser_es.priorities.low + 2
        });
        conversion.for('upcast').add(viewToModelBlockAttributeConverter(definition, this));
        conversion.for('editingDowncast').elementToStructure({
            model: {
                name: modelName,
                attributes: [
                    getHtmlAttributeName(viewName)
                ]
            },
            view: toObjectWidgetConverter(editor, definition)
        });
        conversion.for('dataDowncast').elementToElement({
            model: modelName,
            view: (modelElement, { writer })=>{
                return createObjectView(viewName, modelElement, writer);
            }
        });
        conversion.for('dataDowncast').add(modelToViewBlockAttributeConverter(definition));
    }
    /**
	 * Registers block element and attribute converters for the given data schema definition.
	 */ _registerBlockElement(definition) {
        const editor = this.editor;
        const schema = editor.model.schema;
        const conversion = editor.conversion;
        const { view: viewName, model: modelName } = definition;
        if (!schema.isRegistered(definition.model)) {
            schema.register(definition.model, definition.modelSchema);
            if (!viewName) {
                return;
            }
            conversion.for('upcast').elementToElement({
                model: modelName,
                view: viewName,
                // With a `low` priority, `paragraph` plugin auto-paragraphing mechanism is executed. Make sure
                // this listener is called before it. If not, some elements will be transformed into a paragraph.
                // `+ 2` is used to take priority over `_addDefaultH1Conversion` in the Heading plugin.
                converterPriority: turndown_browser_es.priorities.low + 2
            });
            conversion.for('downcast').elementToElement({
                model: modelName,
                view: viewName
            });
        }
        if (!viewName) {
            return;
        }
        schema.extend(definition.model, {
            allowAttributes: getHtmlAttributeName(viewName)
        });
        conversion.for('upcast').add(viewToModelBlockAttributeConverter(definition, this));
        conversion.for('downcast').add(modelToViewBlockAttributeConverter(definition));
    }
    /**
	 * Registers inline element and attribute converters for the given data schema definition.
	 *
	 * Extends `$text` model schema to allow the given definition model attribute and its properties.
	 */ _registerInlineElement(definition) {
        const editor = this.editor;
        const schema = editor.model.schema;
        const conversion = editor.conversion;
        const attributeKey = definition.model;
        // This element is stored in the model as an attribute on a block element, for example DocumentLists.
        if (definition.appliesToBlock) {
            return;
        }
        schema.extend('$text', {
            allowAttributes: attributeKey
        });
        if (definition.attributeProperties) {
            schema.setAttributeProperties(attributeKey, definition.attributeProperties);
        }
        conversion.for('upcast').add(viewToAttributeInlineConverter(definition, this));
        conversion.for('downcast').attributeToElement({
            model: attributeKey,
            view: attributeToViewInlineConverter(definition)
        });
        if (!definition.allowEmpty) {
            return;
        }
        schema.setAttributeProperties(attributeKey, {
            copyFromObject: false
        });
        if (!schema.isRegistered('htmlEmptyElement')) {
            schema.register('htmlEmptyElement', {
                inheritAllFrom: '$inlineObject'
            });
        }
        editor.data.htmlProcessor.domConverter.registerInlineObjectMatcher((element)=>{
            // Element must be empty and have any attribute.
            if (element.name == definition.view && element.isEmpty && Array.from(element.getAttributeKeys()).length) {
                return {
                    name: true
                };
            }
            return null;
        });
        conversion.for('editingDowncast').elementToElement({
            model: 'htmlEmptyElement',
            view: emptyInlineModelElementToViewConverter(definition, true)
        });
        conversion.for('dataDowncast').elementToElement({
            model: 'htmlEmptyElement',
            view: emptyInlineModelElementToViewConverter(definition)
        });
    }
}
/**
 * Matches and consumes matched attributes.
 *
 * @returns Object with following properties:
 * - attributes Array with matched attribute names.
 * - classes Array with matched class names.
 * - styles Array with matched style names.
 */ function matchAndConsumeAttributes(viewElement, matcher, consumable) {
    const matches = matcher.matchAll(viewElement) || [];
    const stylesProcessor = viewElement.document.stylesProcessor;
    return matches.reduce((result, { match })=>{
        // Verify and consume styles.
        for (const style of match.styles || []){
            // Check longer forms of the same style as those could be matched
            // but not present in the element directly.
            // Consider only longhand (or longer than current notation) so that
            // we do not include all sides of the box if only one side is allowed.
            const sortedRelatedStyles = stylesProcessor.getRelatedStyles(style).filter((relatedStyle)=>relatedStyle.split('-').length > style.split('-').length).sort((a, b)=>b.split('-').length - a.split('-').length);
            for (const relatedStyle of sortedRelatedStyles){
                if (consumable.consume(viewElement, {
                    styles: [
                        relatedStyle
                    ]
                })) {
                    result.styles.push(relatedStyle);
                }
            }
            // Verify and consume style as specified in the matcher.
            if (consumable.consume(viewElement, {
                styles: [
                    style
                ]
            })) {
                result.styles.push(style);
            }
        }
        // Verify and consume class names.
        for (const className of match.classes || []){
            if (consumable.consume(viewElement, {
                classes: [
                    className
                ]
            })) {
                result.classes.push(className);
            }
        }
        // Verify and consume other attributes.
        for (const attributeName of match.attributes || []){
            if (consumable.consume(viewElement, {
                attributes: [
                    attributeName
                ]
            })) {
                result.attributes.push(attributeName);
            }
        }
        return result;
    }, {
        attributes: [],
        classes: [],
        styles: []
    });
}
/**
 * Prepares the GHS attribute value as an object with element attributes' values.
 */ function prepareGHSAttribute(viewElement, { attributes, classes, styles }) {
    if (!attributes.length && !classes.length && !styles.length) {
        return null;
    }
    return {
        ...attributes.length && {
            attributes: getAttributes(viewElement, attributes)
        },
        ...styles.length && {
            styles: getReducedStyles(viewElement, styles)
        },
        ...classes.length && {
            classes
        }
    };
}
/**
 * Returns attributes as an object with names and values.
 */ function getAttributes(viewElement, attributes) {
    const attributesObject = {};
    for (const key of attributes){
        const value = viewElement.getAttribute(key);
        if (value !== undefined && turndown_browser_es.isValidAttributeName(key)) {
            attributesObject[key] = value;
        }
    }
    return attributesObject;
}
/**
 * Returns styles as an object reduced to shorthand notation without redundant entries.
 */ function getReducedStyles(viewElement, styles) {
    // Use StyleMap to reduce style value to the minimal form (without shorthand and long-hand notation and duplication).
    const stylesMap = new turndown_browser_es.StylesMap(viewElement.document.stylesProcessor);
    for (const key of styles){
        const styleValue = viewElement.getStyle(key);
        if (styleValue !== undefined) {
            stylesMap.set(key, styleValue);
        }
    }
    return Object.fromEntries(stylesMap.getStylesEntries());
}
/**
 * Matcher by default has to match **all** patterns to count it as an actual match. Splitting the pattern
 * into separate patterns means that any matched pattern will be count as a match.
 *
 * @param pattern Pattern to split.
 * @param attributeName Name of the attribute to split (e.g. 'attributes', 'classes', 'styles').
 */ function splitPattern(pattern, attributeName) {
    const { name } = pattern;
    const attributeValue = pattern[attributeName];
    if (turndown_browser_es.isPlainObject(attributeValue)) {
        return Object.entries(attributeValue).map(([key, value])=>({
                name,
                [attributeName]: {
                    [key]: value
                }
            }));
    }
    if (Array.isArray(attributeValue)) {
        return attributeValue.map((value)=>({
                name,
                [attributeName]: [
                    value
                ]
            }));
    }
    return [
        pattern
    ];
}
/**
 * Rules are matched in conjunction (AND operation), but we want to have a match if *any* of the rules is matched (OR operation).
 * By splitting the rules we force the latter effect.
 */ function splitRules(rules) {
    const { name, attributes, classes, styles } = rules;
    const splitRules = [];
    if (attributes) {
        splitRules.push(...splitPattern({
            name,
            attributes
        }, 'attributes'));
    }
    if (classes) {
        splitRules.push(...splitPattern({
            name,
            classes
        }, 'classes'));
    }
    if (styles) {
        splitRules.push(...splitPattern({
            name,
            styles
        }, 'styles'));
    }
    return splitRules;
}

/**
 * Provides the General HTML Support integration with {@link module:code-block/codeblock~CodeBlock Code Block} feature.
 */ class CodeBlockElementSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataFilter
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'CodeBlockElementSupport';
    }
    /**
	 * @inheritDoc
	 */ init() {
        if (!this.editor.plugins.has('CodeBlockEditing')) {
            return;
        }
        const dataFilter = this.editor.plugins.get(DataFilter);
        dataFilter.on('register:pre', (evt, definition)=>{
            if (definition.model !== 'codeBlock') {
                return;
            }
            const editor = this.editor;
            const schema = editor.model.schema;
            const conversion = editor.conversion;
            // Extend codeBlock to allow attributes required by attribute filtration.
            schema.extend('codeBlock', {
                allowAttributes: [
                    'htmlPreAttributes',
                    'htmlContentAttributes'
                ]
            });
            conversion.for('upcast').add(viewToModelCodeBlockAttributeConverter(dataFilter));
            conversion.for('downcast').add(modelToViewCodeBlockAttributeConverter());
            evt.stop();
        });
    }
}
/**
 * View-to-model conversion helper preserving allowed attributes on {@link module:code-block/codeblock~CodeBlock Code Block}
 * feature model element.
 *
 * Attributes are preserved as a value of `html*Attributes` model attribute.
 * @param dataFilter
 * @returns Returns a conversion callback.
 */ function viewToModelCodeBlockAttributeConverter(dataFilter) {
    return (dispatcher)=>{
        dispatcher.on('element:code', (evt, data, conversionApi)=>{
            const viewCodeElement = data.viewItem;
            const viewPreElement = viewCodeElement.parent;
            if (!viewPreElement || !viewPreElement.is('element', 'pre')) {
                return;
            }
            preserveElementAttributes(viewPreElement, 'htmlPreAttributes');
            preserveElementAttributes(viewCodeElement, 'htmlContentAttributes');
            function preserveElementAttributes(viewElement, attributeName) {
                const viewAttributes = dataFilter.processViewAttributes(viewElement, conversionApi);
                if (viewAttributes) {
                    conversionApi.writer.setAttribute(attributeName, viewAttributes, data.modelRange);
                }
            }
        }, {
            priority: 'low'
        });
    };
}
/**
 * Model-to-view conversion helper applying attributes from {@link module:code-block/codeblock~CodeBlock Code Block}
 * feature model element.
 * @returns Returns a conversion callback.
 */ function modelToViewCodeBlockAttributeConverter() {
    return (dispatcher)=>{
        dispatcher.on('attribute:htmlPreAttributes:codeBlock', (evt, data, conversionApi)=>{
            if (!conversionApi.consumable.consume(data.item, evt.name)) {
                return;
            }
            const { attributeOldValue, attributeNewValue } = data;
            const viewCodeElement = conversionApi.mapper.toViewElement(data.item);
            const viewPreElement = viewCodeElement.parent;
            updateViewAttributes(conversionApi.writer, attributeOldValue, attributeNewValue, viewPreElement);
        });
        dispatcher.on('attribute:htmlContentAttributes:codeBlock', (evt, data, conversionApi)=>{
            if (!conversionApi.consumable.consume(data.item, evt.name)) {
                return;
            }
            const { attributeOldValue, attributeNewValue } = data;
            const viewCodeElement = conversionApi.mapper.toViewElement(data.item);
            updateViewAttributes(conversionApi.writer, attributeOldValue, attributeNewValue, viewCodeElement);
        });
    };
}

/**
 * Provides the General HTML Support integration for elements which can behave like sectioning element (e.g. article) or
 * element accepting only inline content (e.g. paragraph).
 *
 * The distinction between this two content models is important for choosing correct schema model and proper content conversion.
 * As an example, it ensures that:
 *
 * * children elements paragraphing is enabled for sectioning elements only,
 * * element and its content can be correctly handled by editing view (splitting and merging elements),
 * * model element HTML is semantically correct and easier to work with.
 *
 * If element contains any block element, it will be treated as a sectioning element and registered using
 * {@link module:html-support/dataschema~DataSchemaDefinition#model} and
 * {@link module:html-support/dataschema~DataSchemaDefinition#modelSchema} in editor schema.
 * Otherwise, it will be registered under {@link module:html-support/dataschema~DataSchemaBlockElementDefinition#paragraphLikeModel} model
 * name with model schema accepting only inline content (inheriting from `$block`).
 */ class DualContentModelElementSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataFilter
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'DualContentModelElementSupport';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const dataFilter = this.editor.plugins.get(DataFilter);
        dataFilter.on('register', (evt, definition)=>{
            const blockDefinition = definition;
            const editor = this.editor;
            const schema = editor.model.schema;
            const conversion = editor.conversion;
            if (!blockDefinition.paragraphLikeModel) {
                return;
            }
            // Can only apply to newly registered features.
            if (schema.isRegistered(blockDefinition.model) || schema.isRegistered(blockDefinition.paragraphLikeModel)) {
                return;
            }
            const paragraphLikeModelDefinition = {
                model: blockDefinition.paragraphLikeModel,
                view: blockDefinition.view
            };
            schema.register(blockDefinition.model, blockDefinition.modelSchema);
            schema.register(paragraphLikeModelDefinition.model, {
                inheritAllFrom: '$block'
            });
            conversion.for('upcast').elementToElement({
                view: blockDefinition.view,
                model: (viewElement, { writer })=>{
                    if (this._hasBlockContent(viewElement)) {
                        return writer.createElement(blockDefinition.model);
                    }
                    return writer.createElement(paragraphLikeModelDefinition.model);
                },
                // With a `low` priority, `paragraph` plugin auto-paragraphing mechanism is executed. Make sure
                // this listener is called before it. If not, some elements will be transformed into a paragraph.
                converterPriority: turndown_browser_es.priorities.low + 0.5
            });
            conversion.for('downcast').elementToElement({
                view: blockDefinition.view,
                model: blockDefinition.model
            });
            this._addAttributeConversion(blockDefinition);
            conversion.for('downcast').elementToElement({
                view: paragraphLikeModelDefinition.view,
                model: paragraphLikeModelDefinition.model
            });
            this._addAttributeConversion(paragraphLikeModelDefinition);
            evt.stop();
        });
    }
    /**
	 * Checks whether the given view element includes any other block element.
	 */ _hasBlockContent(viewElement) {
        const view = this.editor.editing.view;
        const blockElements = view.domConverter.blockElements;
        // Traversing the viewElement subtree looking for block elements.
        // Especially for the cases like <div><a href="#"><p>foo</p></a></div>.
        // https://github.com/ckeditor/ckeditor5/issues/11513
        for (const viewItem of view.createRangeIn(viewElement).getItems()){
            if (viewItem.is('element') && blockElements.includes(viewItem.name)) {
                return true;
            }
        }
        return false;
    }
    /**
	 * Adds attribute filtering conversion for the given data schema.
	 */ _addAttributeConversion(definition) {
        const editor = this.editor;
        const conversion = editor.conversion;
        const dataFilter = editor.plugins.get(DataFilter);
        editor.model.schema.extend(definition.model, {
            allowAttributes: getHtmlAttributeName(definition.view)
        });
        conversion.for('upcast').add(viewToModelBlockAttributeConverter(definition, dataFilter));
        conversion.for('downcast').add(modelToViewBlockAttributeConverter(definition));
    }
}

/**
 * Provides the General HTML Support integration with {@link module:heading/heading~Heading Heading} feature.
 */ class HeadingElementSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataSchema,
            turndown_browser_es.Enter
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'HeadingElementSupport';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        if (!editor.plugins.has('HeadingEditing')) {
            return;
        }
        const options = editor.config.get('heading.options');
        this.registerHeadingElements(editor, options);
    }
    /**
	 * Registers all elements supported by HeadingEditing to enable custom attributes for those elements.
	 */ registerHeadingElements(editor, options) {
        const dataSchema = editor.plugins.get(DataSchema);
        const headerModels = [];
        for (const option of options){
            if ('model' in option && 'view' in option) {
                dataSchema.registerBlockElement({
                    view: option.view,
                    model: option.model
                });
                headerModels.push(option.model);
            }
        }
        dataSchema.extendBlockElement({
            model: 'htmlHgroup',
            modelSchema: {
                allowChildren: headerModels
            }
        });
        dataSchema.extendBlockElement({
            model: 'htmlSummary',
            modelSchema: {
                allowChildren: headerModels
            }
        });
    }
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */ /**
 * @module html-support/integrations/integrationutils
 */ /**
 * Returns the first view element descendant matching the given view name.
 * Includes view element itself.
 *
 * @internal
 */ function getDescendantElement(writer, containerElement, elementName) {
    const range = writer.createRangeOn(containerElement);
    for (const { item } of range.getWalker()){
        if (item.is('element', elementName)) {
            return item;
        }
    }
}

/**
 * Provides the General HTML Support integration with the {@link module:image/image~Image Image} feature.
 */ class ImageElementSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataFilter
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'ImageElementSupport';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        // At least one image plugin should be loaded for the integration to work properly.
        if (!editor.plugins.has('ImageInlineEditing') && !editor.plugins.has('ImageBlockEditing')) {
            return;
        }
        const schema = editor.model.schema;
        const conversion = editor.conversion;
        const dataFilter = editor.plugins.get(DataFilter);
        dataFilter.on('register:figure', ()=>{
            conversion.for('upcast').add(viewToModelFigureAttributeConverter$1(dataFilter));
        });
        dataFilter.on('register:img', (evt, definition)=>{
            if (definition.model !== 'imageBlock' && definition.model !== 'imageInline') {
                return;
            }
            if (schema.isRegistered('imageBlock')) {
                schema.extend('imageBlock', {
                    allowAttributes: [
                        'htmlImgAttributes',
                        // Figure and Link don't have model counterpart.
                        // We will preserve attributes on image model element using these attribute keys.
                        'htmlFigureAttributes',
                        'htmlLinkAttributes'
                    ]
                });
            }
            if (schema.isRegistered('imageInline')) {
                schema.extend('imageInline', {
                    allowAttributes: [
                        // `htmlA` is needed for standard GHS link integration.
                        'htmlA',
                        'htmlImgAttributes'
                    ]
                });
            }
            conversion.for('upcast').add(viewToModelImageAttributeConverter(dataFilter));
            conversion.for('downcast').add(modelToViewImageAttributeConverter());
            if (editor.plugins.has('LinkImage')) {
                conversion.for('upcast').add(viewToModelLinkImageAttributeConverter(dataFilter, editor));
            }
            evt.stop();
        });
    }
}
/**
 * View-to-model conversion helper preserving allowed attributes on the {@link module:image/image~Image Image}
 * feature model element.
 *
 * @returns Returns a conversion callback.
 */ function viewToModelImageAttributeConverter(dataFilter) {
    return (dispatcher)=>{
        dispatcher.on('element:img', (evt, data, conversionApi)=>{
            if (!data.modelRange) {
                return;
            }
            const viewImageElement = data.viewItem;
            const viewAttributes = dataFilter.processViewAttributes(viewImageElement, conversionApi);
            if (viewAttributes) {
                conversionApi.writer.setAttribute('htmlImgAttributes', viewAttributes, data.modelRange);
            }
        }, {
            priority: 'low'
        });
    };
}
/**
 * View-to-model conversion helper preserving allowed attributes on {@link module:image/image~Image Image}
 * feature model element from link view element.
 *
 * @returns Returns a conversion callback.
 */ function viewToModelLinkImageAttributeConverter(dataFilter, editor) {
    const imageUtils = editor.plugins.get('ImageUtils');
    return (dispatcher)=>{
        dispatcher.on('element:a', (evt, data, conversionApi)=>{
            const viewLink = data.viewItem;
            const viewImage = imageUtils.findViewImgElement(viewLink);
            if (!viewImage) {
                return;
            }
            const modelImage = data.modelCursor.parent;
            if (!modelImage.is('element', 'imageBlock')) {
                return;
            }
            const viewAttributes = dataFilter.processViewAttributes(viewLink, conversionApi);
            if (viewAttributes) {
                conversionApi.writer.setAttribute('htmlLinkAttributes', viewAttributes, modelImage);
            }
        }, {
            priority: 'low'
        });
    };
}
/**
 * View-to-model conversion helper preserving allowed attributes on {@link module:image/image~Image Image}
 * feature model element from figure view element.
 *
 * @returns Returns a conversion callback.
 */ function viewToModelFigureAttributeConverter$1(dataFilter) {
    return (dispatcher)=>{
        dispatcher.on('element:figure', (evt, data, conversionApi)=>{
            const viewFigureElement = data.viewItem;
            if (!data.modelRange || !viewFigureElement.hasClass('image')) {
                return;
            }
            const viewAttributes = dataFilter.processViewAttributes(viewFigureElement, conversionApi);
            if (viewAttributes) {
                conversionApi.writer.setAttribute('htmlFigureAttributes', viewAttributes, data.modelRange);
            }
        }, {
            priority: 'low'
        });
    };
}
/**
 * A model-to-view conversion helper applying attributes from the {@link module:image/image~Image Image}
 * feature.
 * @returns Returns a conversion callback.
 */ function modelToViewImageAttributeConverter() {
    return (dispatcher)=>{
        addInlineAttributeConversion('htmlImgAttributes');
        addBlockAttributeConversion('img', 'htmlImgAttributes');
        addBlockAttributeConversion('figure', 'htmlFigureAttributes');
        addBlockAttributeConversion('a', 'htmlLinkAttributes');
        function addInlineAttributeConversion(attributeName) {
            dispatcher.on(`attribute:${attributeName}:imageInline`, (evt, data, conversionApi)=>{
                if (!conversionApi.consumable.consume(data.item, evt.name)) {
                    return;
                }
                const { attributeOldValue, attributeNewValue } = data;
                const viewElement = conversionApi.mapper.toViewElement(data.item);
                updateViewAttributes(conversionApi.writer, attributeOldValue, attributeNewValue, viewElement);
            }, {
                priority: 'low'
            });
        }
        function addBlockAttributeConversion(elementName, attributeName) {
            dispatcher.on(`attribute:${attributeName}:imageBlock`, (evt, data, conversionApi)=>{
                if (!conversionApi.consumable.test(data.item, evt.name)) {
                    return;
                }
                const { attributeOldValue, attributeNewValue } = data;
                const containerElement = conversionApi.mapper.toViewElement(data.item);
                const viewElement = getDescendantElement(conversionApi.writer, containerElement, elementName);
                if (viewElement) {
                    updateViewAttributes(conversionApi.writer, attributeOldValue, attributeNewValue, viewElement);
                    conversionApi.consumable.consume(data.item, evt.name);
                }
            }, {
                priority: 'low'
            });
            if (elementName === 'a') {
                // To have a link element in the view, we need to attach a converter to the `linkHref` attribute as well.
                dispatcher.on('attribute:linkHref:imageBlock', (evt, data, conversionApi)=>{
                    if (!conversionApi.consumable.consume(data.item, 'attribute:htmlLinkAttributes:imageBlock')) {
                        return;
                    }
                    const containerElement = conversionApi.mapper.toViewElement(data.item);
                    const viewElement = getDescendantElement(conversionApi.writer, containerElement, 'a');
                    setViewAttributes(conversionApi.writer, data.item.getAttribute('htmlLinkAttributes'), viewElement);
                }, {
                    priority: 'low'
                });
            }
        }
    };
}

/**
 * Provides the General HTML Support integration with {@link module:media-embed/mediaembed~MediaEmbed Media Embed} feature.
 */ class MediaEmbedElementSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataFilter
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'MediaEmbedElementSupport';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        // Stop here if MediaEmbed plugin is not provided or the integrator wants to output markup with previews as
        // we do not support filtering previews.
        if (!editor.plugins.has('MediaEmbed') || editor.config.get('mediaEmbed.previewsInData')) {
            return;
        }
        const schema = editor.model.schema;
        const conversion = editor.conversion;
        const dataFilter = this.editor.plugins.get(DataFilter);
        const dataSchema = this.editor.plugins.get(DataSchema);
        const mediaElementName = editor.config.get('mediaEmbed.elementName');
        // Overwrite GHS schema definition for a given elementName.
        dataSchema.registerBlockElement({
            model: 'media',
            view: mediaElementName
        });
        dataFilter.on('register:figure', ()=>{
            conversion.for('upcast').add(viewToModelFigureAttributesConverter(dataFilter));
        });
        dataFilter.on(`register:${mediaElementName}`, (evt, definition)=>{
            if (definition.model !== 'media') {
                return;
            }
            schema.extend('media', {
                allowAttributes: [
                    getHtmlAttributeName(mediaElementName),
                    'htmlFigureAttributes'
                ]
            });
            conversion.for('upcast').add(viewToModelMediaAttributesConverter(dataFilter, mediaElementName));
            conversion.for('dataDowncast').add(modelToViewMediaAttributeConverter(mediaElementName));
            evt.stop();
        });
    }
}
function viewToModelMediaAttributesConverter(dataFilter, mediaElementName) {
    const upcastMedia = (evt, data, conversionApi)=>{
        const viewMediaElement = data.viewItem;
        preserveElementAttributes(viewMediaElement, getHtmlAttributeName(mediaElementName));
        function preserveElementAttributes(viewElement, attributeName) {
            const viewAttributes = dataFilter.processViewAttributes(viewElement, conversionApi);
            if (viewAttributes) {
                conversionApi.writer.setAttribute(attributeName, viewAttributes, data.modelRange);
            }
        }
    };
    return (dispatcher)=>{
        dispatcher.on(`element:${mediaElementName}`, upcastMedia, {
            priority: 'low'
        });
    };
}
/**
 * View-to-model conversion helper preserving allowed attributes on {@link module:media-embed/mediaembed~MediaEmbed MediaEmbed}
 * feature model element from figure view element.
 *
 * @returns Returns a conversion callback.
 */ function viewToModelFigureAttributesConverter(dataFilter) {
    return (dispatcher)=>{
        dispatcher.on('element:figure', (evt, data, conversionApi)=>{
            const viewFigureElement = data.viewItem;
            if (!data.modelRange || !viewFigureElement.hasClass('media')) {
                return;
            }
            const viewAttributes = dataFilter.processViewAttributes(viewFigureElement, conversionApi);
            if (viewAttributes) {
                conversionApi.writer.setAttribute('htmlFigureAttributes', viewAttributes, data.modelRange);
            }
        }, {
            priority: 'low'
        });
    };
}
function modelToViewMediaAttributeConverter(mediaElementName) {
    return (dispatcher)=>{
        addAttributeConversionDispatcherHandler(mediaElementName, getHtmlAttributeName(mediaElementName));
        addAttributeConversionDispatcherHandler('figure', 'htmlFigureAttributes');
        function addAttributeConversionDispatcherHandler(elementName, attributeName) {
            dispatcher.on(`attribute:${attributeName}:media`, (evt, data, conversionApi)=>{
                if (!conversionApi.consumable.consume(data.item, evt.name)) {
                    return;
                }
                const { attributeOldValue, attributeNewValue } = data;
                const containerElement = conversionApi.mapper.toViewElement(data.item);
                const viewElement = getDescendantElement(conversionApi.writer, containerElement, elementName);
                updateViewAttributes(conversionApi.writer, attributeOldValue, attributeNewValue, viewElement);
            });
        }
    };
}

/**
 * Provides the General HTML Support for `script` elements.
 */ class ScriptElementSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataFilter
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'ScriptElementSupport';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const dataFilter = this.editor.plugins.get(DataFilter);
        dataFilter.on('register:script', (evt, definition)=>{
            const editor = this.editor;
            const schema = editor.model.schema;
            const conversion = editor.conversion;
            schema.register('htmlScript', definition.modelSchema);
            schema.extend('htmlScript', {
                allowAttributes: [
                    'htmlScriptAttributes',
                    'htmlContent'
                ],
                isContent: true
            });
            editor.data.registerRawContentMatcher({
                name: 'script'
            });
            conversion.for('upcast').elementToElement({
                view: 'script',
                model: viewToModelObjectConverter(definition)
            });
            conversion.for('upcast').add(viewToModelBlockAttributeConverter(definition, dataFilter));
            conversion.for('downcast').elementToElement({
                model: 'htmlScript',
                view: (modelElement, { writer })=>{
                    return createObjectView('script', modelElement, writer);
                }
            });
            conversion.for('downcast').add(modelToViewBlockAttributeConverter(definition));
            evt.stop();
        });
    }
}

/**
 * Provides the General HTML Support integration with {@link module:table/table~Table Table} feature.
 */ class TableElementSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataFilter
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'TableElementSupport';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        if (!editor.plugins.has('TableEditing')) {
            return;
        }
        const schema = editor.model.schema;
        const conversion = editor.conversion;
        const dataFilter = editor.plugins.get(DataFilter);
        const tableUtils = editor.plugins.get('TableUtils');
        dataFilter.on('register:figure', ()=>{
            conversion.for('upcast').add(viewToModelFigureAttributeConverter(dataFilter));
        });
        dataFilter.on('register:table', (evt, definition)=>{
            if (definition.model !== 'table') {
                return;
            }
            schema.extend('table', {
                allowAttributes: [
                    'htmlTableAttributes',
                    // Figure, thead and tbody elements don't have model counterparts.
                    // We will be preserving attributes on table element using these attribute keys.
                    'htmlFigureAttributes',
                    'htmlTheadAttributes',
                    'htmlTbodyAttributes'
                ]
            });
            conversion.for('upcast').add(viewToModelTableAttributeConverter(dataFilter));
            conversion.for('downcast').add(modelToViewTableAttributeConverter());
            editor.model.document.registerPostFixer(createHeadingRowsPostFixer(editor.model, tableUtils));
            evt.stop();
        });
    }
}
/**
 * Creates a model post-fixer for thead and tbody GHS related attributes.
 */ function createHeadingRowsPostFixer(model, tableUtils) {
    return (writer)=>{
        const changes = model.document.differ.getChanges();
        let wasFixed = false;
        for (const change of changes){
            if (change.type != 'attribute' || change.attributeKey != 'headingRows') {
                continue;
            }
            const table = change.range.start.nodeAfter;
            const hasTHeadAttributes = table.getAttribute('htmlTheadAttributes');
            const hasTBodyAttributes = table.getAttribute('htmlTbodyAttributes');
            if (hasTHeadAttributes && !change.attributeNewValue) {
                writer.removeAttribute('htmlTheadAttributes', table);
                wasFixed = true;
            } else if (hasTBodyAttributes && change.attributeNewValue == tableUtils.getRows(table)) {
                writer.removeAttribute('htmlTbodyAttributes', table);
                wasFixed = true;
            }
        }
        return wasFixed;
    };
}
/**
 * View-to-model conversion helper preserving allowed attributes on {@link module:table/table~Table Table}
 * feature model element.
 *
 * @returns Returns a conversion callback.
 */ function viewToModelTableAttributeConverter(dataFilter) {
    return (dispatcher)=>{
        dispatcher.on('element:table', (evt, data, conversionApi)=>{
            if (!data.modelRange) {
                return;
            }
            const viewTableElement = data.viewItem;
            preserveElementAttributes(viewTableElement, 'htmlTableAttributes');
            for (const childNode of viewTableElement.getChildren()){
                if (childNode.is('element', 'thead')) {
                    preserveElementAttributes(childNode, 'htmlTheadAttributes');
                }
                if (childNode.is('element', 'tbody')) {
                    preserveElementAttributes(childNode, 'htmlTbodyAttributes');
                }
            }
            function preserveElementAttributes(viewElement, attributeName) {
                const viewAttributes = dataFilter.processViewAttributes(viewElement, conversionApi);
                if (viewAttributes) {
                    conversionApi.writer.setAttribute(attributeName, viewAttributes, data.modelRange);
                }
            }
        }, {
            priority: 'low'
        });
    };
}
/**
 * View-to-model conversion helper preserving allowed attributes on {@link module:table/table~Table Table}
 * feature model element from figure view element.
 *
 * @returns Returns a conversion callback.
 */ function viewToModelFigureAttributeConverter(dataFilter) {
    return (dispatcher)=>{
        dispatcher.on('element:figure', (evt, data, conversionApi)=>{
            const viewFigureElement = data.viewItem;
            if (!data.modelRange || !viewFigureElement.hasClass('table')) {
                return;
            }
            const viewAttributes = dataFilter.processViewAttributes(viewFigureElement, conversionApi);
            if (viewAttributes) {
                conversionApi.writer.setAttribute('htmlFigureAttributes', viewAttributes, data.modelRange);
            }
        }, {
            priority: 'low'
        });
    };
}
/**
 * Model-to-view conversion helper applying attributes from {@link module:table/table~Table Table}
 * feature.
 *
 * @returns Returns a conversion callback.
 */ function modelToViewTableAttributeConverter() {
    return (dispatcher)=>{
        addAttributeConversionDispatcherHandler('table', 'htmlTableAttributes');
        addAttributeConversionDispatcherHandler('figure', 'htmlFigureAttributes');
        addAttributeConversionDispatcherHandler('thead', 'htmlTheadAttributes');
        addAttributeConversionDispatcherHandler('tbody', 'htmlTbodyAttributes');
        function addAttributeConversionDispatcherHandler(elementName, attributeName) {
            dispatcher.on(`attribute:${attributeName}:table`, (evt, data, conversionApi)=>{
                if (!conversionApi.consumable.test(data.item, evt.name)) {
                    return;
                }
                const containerElement = conversionApi.mapper.toViewElement(data.item);
                const viewElement = getDescendantElement(conversionApi.writer, containerElement, elementName);
                if (!viewElement) {
                    return;
                }
                conversionApi.consumable.consume(data.item, evt.name);
                updateViewAttributes(conversionApi.writer, data.attributeOldValue, data.attributeNewValue, viewElement);
            });
        }
    };
}

/**
 * Provides the General HTML Support for `style` elements.
 */ class StyleElementSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataFilter
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'StyleElementSupport';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const dataFilter = this.editor.plugins.get(DataFilter);
        dataFilter.on('register:style', (evt, definition)=>{
            const editor = this.editor;
            const schema = editor.model.schema;
            const conversion = editor.conversion;
            schema.register('htmlStyle', definition.modelSchema);
            schema.extend('htmlStyle', {
                allowAttributes: [
                    'htmlStyleAttributes',
                    'htmlContent'
                ],
                isContent: true
            });
            editor.data.registerRawContentMatcher({
                name: 'style'
            });
            conversion.for('upcast').elementToElement({
                view: 'style',
                model: viewToModelObjectConverter(definition)
            });
            conversion.for('upcast').add(viewToModelBlockAttributeConverter(definition, dataFilter));
            conversion.for('downcast').elementToElement({
                model: 'htmlStyle',
                view: (modelElement, { writer })=>{
                    return createObjectView('style', modelElement, writer);
                }
            });
            conversion.for('downcast').add(modelToViewBlockAttributeConverter(definition));
            evt.stop();
        });
    }
}

/**
 * Provides the General HTML Support integration with the {@link module:list/list~List List} feature.
 */ class ListElementSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataFilter
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'ListElementSupport';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        if (!editor.plugins.has('ListEditing')) {
            return;
        }
        const schema = editor.model.schema;
        const conversion = editor.conversion;
        const dataFilter = editor.plugins.get(DataFilter);
        const listEditing = editor.plugins.get('ListEditing');
        const listUtils = editor.plugins.get('ListUtils');
        const viewElements = [
            'ul',
            'ol',
            'li'
        ];
        // Register downcast strategy.
        // Note that this must be done before document list editing registers conversion in afterInit.
        listEditing.registerDowncastStrategy({
            scope: 'item',
            attributeName: 'htmlLiAttributes',
            setAttributeOnDowncast: setViewAttributes
        });
        listEditing.registerDowncastStrategy({
            scope: 'list',
            attributeName: 'htmlUlAttributes',
            setAttributeOnDowncast: setViewAttributes
        });
        listEditing.registerDowncastStrategy({
            scope: 'list',
            attributeName: 'htmlOlAttributes',
            setAttributeOnDowncast: setViewAttributes
        });
        dataFilter.on('register', (evt, definition)=>{
            if (!viewElements.includes(definition.view)) {
                return;
            }
            evt.stop();
            // Do not register same converters twice.
            if (schema.checkAttribute('$block', 'htmlLiAttributes')) {
                return;
            }
            const allowAttributes = viewElements.map((element)=>getHtmlAttributeName(element));
            schema.extend('$listItem', {
                allowAttributes
            });
            conversion.for('upcast').add((dispatcher)=>{
                dispatcher.on('element:ul', viewToModelListAttributeConverter('htmlUlAttributes', dataFilter), {
                    priority: 'low'
                });
                dispatcher.on('element:ol', viewToModelListAttributeConverter('htmlOlAttributes', dataFilter), {
                    priority: 'low'
                });
                dispatcher.on('element:li', viewToModelListAttributeConverter('htmlLiAttributes', dataFilter), {
                    priority: 'low'
                });
            });
        });
        // Make sure that all items in a single list (items at the same level & listType) have the same properties.
        listEditing.on('postFixer', (evt, { listNodes, writer })=>{
            for (const { node, previousNodeInList } of listNodes){
                // This is a first item of a nested list.
                if (!previousNodeInList) {
                    continue;
                }
                if (previousNodeInList.getAttribute('listType') == node.getAttribute('listType')) {
                    const attribute = getAttributeFromListType(previousNodeInList.getAttribute('listType'));
                    const value = previousNodeInList.getAttribute(attribute);
                    if (!turndown_browser_es.isEqual(node.getAttribute(attribute), value) && writer.model.schema.checkAttribute(node, attribute)) {
                        writer.setAttribute(attribute, value, node);
                        evt.return = true;
                    }
                }
                if (previousNodeInList.getAttribute('listItemId') == node.getAttribute('listItemId')) {
                    const value = previousNodeInList.getAttribute('htmlLiAttributes');
                    if (!turndown_browser_es.isEqual(node.getAttribute('htmlLiAttributes'), value) && writer.model.schema.checkAttribute(node, 'htmlLiAttributes')) {
                        writer.setAttribute('htmlLiAttributes', value, node);
                        evt.return = true;
                    }
                }
            }
        });
        // Remove `ol` attributes from `ul` elements and vice versa.
        listEditing.on('postFixer', (evt, { listNodes, writer })=>{
            for (const { node } of listNodes){
                const listType = node.getAttribute('listType');
                if (!listUtils.isNumberedListType(listType) && node.getAttribute('htmlOlAttributes')) {
                    writer.removeAttribute('htmlOlAttributes', node);
                    evt.return = true;
                }
                if (listUtils.isNumberedListType(listType) && node.getAttribute('htmlUlAttributes')) {
                    writer.removeAttribute('htmlUlAttributes', node);
                    evt.return = true;
                }
            }
        });
    }
    /**
	 * @inheritDoc
	 */ afterInit() {
        const editor = this.editor;
        if (!editor.commands.get('indentList')) {
            return;
        }
        // Reset list attributes after indenting list items.
        const indentList = editor.commands.get('indentList');
        this.listenTo(indentList, 'afterExecute', (evt, changedBlocks)=>{
            editor.model.change((writer)=>{
                for (const node of changedBlocks){
                    const attribute = getAttributeFromListType(node.getAttribute('listType'));
                    if (!editor.model.schema.checkAttribute(node, attribute)) {
                        continue;
                    }
                    // Just reset the attribute.
                    // If there is a previous indented list that this node should be merged into,
                    // the postfixer will unify all the attributes of both sub-lists.
                    writer.setAttribute(attribute, {}, node);
                }
            });
        });
    }
}
/**
 * View-to-model conversion helper preserving allowed attributes on {@link TODO}
 * feature model element.
 *
 * @returns Returns a conversion callback.
 */ function viewToModelListAttributeConverter(attributeName, dataFilter) {
    return (evt, data, conversionApi)=>{
        const viewElement = data.viewItem;
        if (!data.modelRange) {
            Object.assign(data, conversionApi.convertChildren(data.viewItem, data.modelCursor));
        }
        const viewAttributes = dataFilter.processViewAttributes(viewElement, conversionApi);
        for (const item of data.modelRange.getItems({
            shallow: true
        })){
            // Apply only to list item blocks.
            if (!item.hasAttribute('listItemId')) {
                continue;
            }
            // Set list attributes only on same level items, those nested deeper are already handled
            // by the recursive conversion.
            if (item.hasAttribute('htmlUlAttributes') || item.hasAttribute('htmlOlAttributes')) {
                continue;
            }
            if (conversionApi.writer.model.schema.checkAttribute(item, attributeName)) {
                conversionApi.writer.setAttribute(attributeName, viewAttributes || {}, item);
            }
        }
    };
}
/**
 * Returns HTML attribute name based on provided list type.
 */ function getAttributeFromListType(listType) {
    return listType === 'numbered' || listType == 'customNumbered' ? 'htmlOlAttributes' : 'htmlUlAttributes';
}

/**
 * Provides the General HTML Support for custom elements (not registered in the {@link module:html-support/dataschema~DataSchema}).
 */ class CustomElementSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataFilter,
            DataSchema
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'CustomElementSupport';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const dataFilter = this.editor.plugins.get(DataFilter);
        const dataSchema = this.editor.plugins.get(DataSchema);
        dataFilter.on('register:$customElement', (evt, definition)=>{
            evt.stop();
            const editor = this.editor;
            const schema = editor.model.schema;
            const conversion = editor.conversion;
            const unsafeElements = editor.editing.view.domConverter.unsafeElements;
            const preLikeElements = editor.data.htmlProcessor.domConverter.preElements;
            schema.register(definition.model, definition.modelSchema);
            schema.extend(definition.model, {
                allowAttributes: [
                    'htmlElementName',
                    'htmlCustomElementAttributes',
                    'htmlContent'
                ],
                isContent: true
            });
            // For the `<template>` element we use only raw-content because DOM API exposes its content
            // only as a document fragment in the `content` property (or innerHTML).
            editor.data.htmlProcessor.domConverter.registerRawContentMatcher({
                name: 'template'
            });
            // Being executed on the low priority, it will catch all elements that were not caught by other converters.
            conversion.for('upcast').elementToElement({
                view: /.*/,
                model: (viewElement, conversionApi)=>{
                    // Do not try to convert $comment fake element.
                    if (viewElement.name == '$comment') {
                        return null;
                    }
                    if (!isValidElementName(viewElement.name)) {
                        return null;
                    }
                    // Allow for fallback only if this element is not defined in data schema to make sure
                    // that this will handle only custom elements not registered in the data schema.
                    if (dataSchema.getDefinitionsForView(viewElement.name).size) {
                        return null;
                    }
                    // Make sure that this element will not render in the editing view.
                    if (!unsafeElements.includes(viewElement.name)) {
                        unsafeElements.push(viewElement.name);
                    }
                    // Make sure that whitespaces will not be trimmed or replaced by nbsps while stringify content.
                    if (!preLikeElements.includes(viewElement.name)) {
                        preLikeElements.push(viewElement.name);
                    }
                    const modelElement = conversionApi.writer.createElement(definition.model, {
                        htmlElementName: viewElement.name
                    });
                    const htmlAttributes = dataFilter.processViewAttributes(viewElement, conversionApi);
                    if (htmlAttributes) {
                        conversionApi.writer.setAttribute('htmlCustomElementAttributes', htmlAttributes, modelElement);
                    }
                    let htmlContent;
                    // For the `<template>` element we use only raw-content because DOM API exposes its content
                    // only as a document fragment in the `content` property.
                    if (viewElement.is('element', 'template') && viewElement.getCustomProperty('$rawContent')) {
                        htmlContent = viewElement.getCustomProperty('$rawContent');
                    } else {
                        // Store the whole element in the attribute so that DomConverter will be able to use the pre like element context.
                        const viewWriter = new turndown_browser_es.UpcastWriter(viewElement.document);
                        const documentFragment = viewWriter.createDocumentFragment(viewElement);
                        const domFragment = editor.data.htmlProcessor.domConverter.viewToDom(documentFragment);
                        const domElement = domFragment.firstChild;
                        while(domElement.firstChild){
                            domFragment.appendChild(domElement.firstChild);
                        }
                        domElement.remove();
                        htmlContent = editor.data.htmlProcessor.htmlWriter.getHtml(domFragment);
                    }
                    conversionApi.writer.setAttribute('htmlContent', htmlContent, modelElement);
                    // Consume the content of the element.
                    for (const { item } of editor.editing.view.createRangeIn(viewElement)){
                        conversionApi.consumable.consume(item, {
                            name: true
                        });
                    }
                    return modelElement;
                },
                converterPriority: 'low'
            });
            // Because this element is unsafe (DomConverter#unsafeElements), it will render as a transparent <span> but it must
            // be rendered anyway for the mapping between the model and the view to exist.
            conversion.for('editingDowncast').elementToElement({
                model: {
                    name: definition.model,
                    attributes: [
                        'htmlElementName',
                        'htmlCustomElementAttributes',
                        'htmlContent'
                    ]
                },
                view: (modelElement, { writer })=>{
                    const viewName = modelElement.getAttribute('htmlElementName');
                    const viewElement = writer.createRawElement(viewName);
                    if (modelElement.hasAttribute('htmlCustomElementAttributes')) {
                        setViewAttributes(writer, modelElement.getAttribute('htmlCustomElementAttributes'), viewElement);
                    }
                    return viewElement;
                }
            });
            conversion.for('dataDowncast').elementToElement({
                model: {
                    name: definition.model,
                    attributes: [
                        'htmlElementName',
                        'htmlCustomElementAttributes',
                        'htmlContent'
                    ]
                },
                view: (modelElement, { writer })=>{
                    const viewName = modelElement.getAttribute('htmlElementName');
                    const htmlContent = modelElement.getAttribute('htmlContent');
                    const viewElement = writer.createRawElement(viewName, null, (domElement, domConverter)=>{
                        domConverter.setContentOf(domElement, htmlContent);
                    });
                    if (modelElement.hasAttribute('htmlCustomElementAttributes')) {
                        setViewAttributes(writer, modelElement.getAttribute('htmlCustomElementAttributes'), viewElement);
                    }
                    return viewElement;
                }
            });
        });
    }
}
/**
 * Returns true if name is valid for a DOM element name.
 */ function isValidElementName(name) {
    try {
        document.createElement(name);
    } catch (error) {
        return false;
    }
    return true;
}

/**
 * The General HTML Support feature.
 *
 * This is a "glue" plugin which initializes the {@link module:html-support/datafilter~DataFilter data filter} configuration
 * and features integration with the General HTML Support.
 */ class GeneralHtmlSupport extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'GeneralHtmlSupport';
    }
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            DataFilter,
            CodeBlockElementSupport,
            DualContentModelElementSupport,
            HeadingElementSupport,
            ImageElementSupport,
            MediaEmbedElementSupport,
            ScriptElementSupport,
            TableElementSupport,
            StyleElementSupport,
            ListElementSupport,
            CustomElementSupport
        ];
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const dataFilter = editor.plugins.get(DataFilter);
        // Load the allowed empty inline elements' configuration.
        // Note that this modifies DataSchema so must be loaded before registering filtering rules.
        dataFilter.loadAllowedEmptyElementsConfig(editor.config.get('htmlSupport.allowEmpty') || []);
        // Load the filtering configuration.
        dataFilter.loadAllowedConfig(editor.config.get('htmlSupport.allow') || []);
        dataFilter.loadDisallowedConfig(editor.config.get('htmlSupport.disallow') || []);
    }
    /**
	 * Returns a GHS model attribute name related to a given view element name.
	 *
	 * @internal
	 * @param viewElementName A view element name.
	 */ getGhsAttributeNameForElement(viewElementName) {
        const dataSchema = this.editor.plugins.get('DataSchema');
        const definitions = Array.from(dataSchema.getDefinitionsForView(viewElementName, false));
        const inlineDefinition = definitions.find((definition)=>definition.isInline && !definitions[0].isObject);
        if (inlineDefinition) {
            return inlineDefinition.model;
        }
        return getHtmlAttributeName(viewElementName);
    }
    /**
	 * Updates GHS model attribute for a specified view element name, so it includes the given class name.
	 *
	 * @internal
	 * @param viewElementName A view element name.
	 * @param className The css class to add.
	 * @param selectable The selection or element to update.
	 */ addModelHtmlClass(viewElementName, className, selectable) {
        const model = this.editor.model;
        const ghsAttributeName = this.getGhsAttributeNameForElement(viewElementName);
        model.change((writer)=>{
            for (const item of getItemsToUpdateGhsAttribute(model, selectable, ghsAttributeName)){
                modifyGhsAttribute(writer, item, ghsAttributeName, 'classes', (classes)=>{
                    for (const value of turndown_browser_es.toArray(className)){
                        classes.add(value);
                    }
                });
            }
        });
    }
    /**
	 * Updates GHS model attribute for a specified view element name, so it does not include the given class name.
	 *
	 * @internal
	 * @param viewElementName A view element name.
	 * @param className The css class to remove.
	 * @param selectable The selection or element to update.
	 */ removeModelHtmlClass(viewElementName, className, selectable) {
        const model = this.editor.model;
        const ghsAttributeName = this.getGhsAttributeNameForElement(viewElementName);
        model.change((writer)=>{
            for (const item of getItemsToUpdateGhsAttribute(model, selectable, ghsAttributeName)){
                modifyGhsAttribute(writer, item, ghsAttributeName, 'classes', (classes)=>{
                    for (const value of turndown_browser_es.toArray(className)){
                        classes.delete(value);
                    }
                });
            }
        });
    }
    /**
	 * Updates GHS model attribute for a specified view element name, so it includes the given attribute.
	 *
	 * @param viewElementName A view element name.
	 * @param attributes The object with attributes to set.
	 * @param selectable The selection or element to update.
	 */ setModelHtmlAttributes(viewElementName, attributes, selectable) {
        const model = this.editor.model;
        const ghsAttributeName = this.getGhsAttributeNameForElement(viewElementName);
        model.change((writer)=>{
            for (const item of getItemsToUpdateGhsAttribute(model, selectable, ghsAttributeName)){
                modifyGhsAttribute(writer, item, ghsAttributeName, 'attributes', (attributesMap)=>{
                    for (const [key, value] of Object.entries(attributes)){
                        attributesMap.set(key, value);
                    }
                });
            }
        });
    }
    /**
	 * Updates GHS model attribute for a specified view element name, so it does not include the given attribute.
	 *
	 * @param viewElementName A view element name.
	 * @param attributeName The attribute name (or names) to remove.
	 * @param selectable The selection or element to update.
	 */ removeModelHtmlAttributes(viewElementName, attributeName, selectable) {
        const model = this.editor.model;
        const ghsAttributeName = this.getGhsAttributeNameForElement(viewElementName);
        model.change((writer)=>{
            for (const item of getItemsToUpdateGhsAttribute(model, selectable, ghsAttributeName)){
                modifyGhsAttribute(writer, item, ghsAttributeName, 'attributes', (attributesMap)=>{
                    for (const key of turndown_browser_es.toArray(attributeName)){
                        attributesMap.delete(key);
                    }
                });
            }
        });
    }
    /**
	 * Updates GHS model attribute for a specified view element name, so it includes a given style.
	 *
	 * @param viewElementName A view element name.
	 * @param styles The object with styles to set.
	 * @param selectable The selection or element to update.
	 */ setModelHtmlStyles(viewElementName, styles, selectable) {
        const model = this.editor.model;
        const ghsAttributeName = this.getGhsAttributeNameForElement(viewElementName);
        model.change((writer)=>{
            for (const item of getItemsToUpdateGhsAttribute(model, selectable, ghsAttributeName)){
                modifyGhsAttribute(writer, item, ghsAttributeName, 'styles', (stylesMap)=>{
                    for (const [key, value] of Object.entries(styles)){
                        stylesMap.set(key, value);
                    }
                });
            }
        });
    }
    /**
	 * Updates GHS model attribute for a specified view element name, so it does not include a given style.
	 *
	 * @param viewElementName A view element name.
	 * @param properties The style (or styles list) to remove.
	 * @param selectable The selection or element to update.
	 */ removeModelHtmlStyles(viewElementName, properties, selectable) {
        const model = this.editor.model;
        const ghsAttributeName = this.getGhsAttributeNameForElement(viewElementName);
        model.change((writer)=>{
            for (const item of getItemsToUpdateGhsAttribute(model, selectable, ghsAttributeName)){
                modifyGhsAttribute(writer, item, ghsAttributeName, 'styles', (stylesMap)=>{
                    for (const key of turndown_browser_es.toArray(properties)){
                        stylesMap.delete(key);
                    }
                });
            }
        });
    }
}
/**
 * Returns an iterator over an items in the selectable that accept given GHS attribute.
 */ function* getItemsToUpdateGhsAttribute(model, selectable, ghsAttributeName) {
    if (!selectable) {
        return;
    }
    if (!(Symbol.iterator in selectable) && selectable.is('documentSelection') && selectable.isCollapsed) {
        if (model.schema.checkAttributeInSelection(selectable, ghsAttributeName)) {
            yield selectable;
        }
    } else {
        for (const range of getValidRangesForSelectable(model, selectable, ghsAttributeName)){
            yield* range.getItems({
                shallow: true
            });
        }
    }
}
/**
 * Translates a given selectable to an iterable of ranges.
 */ function getValidRangesForSelectable(model, selectable, ghsAttributeName) {
    if (!(Symbol.iterator in selectable) && (selectable.is('node') || selectable.is('$text') || selectable.is('$textProxy'))) {
        if (model.schema.checkAttribute(selectable, ghsAttributeName)) {
            return [
                model.createRangeOn(selectable)
            ];
        } else {
            return [];
        }
    } else {
        return model.schema.getValidRanges(model.createSelection(selectable).getRanges(), ghsAttributeName);
    }
}

/**
 * The full page HTML data processor class.
 * This data processor implementation uses HTML as input and output data.
 */ class HtmlPageDataProcessor extends turndown_browser_es.HtmlDataProcessor {
    /**
	 * @inheritDoc
	 */ toView(data) {
        // Ignore content that is not a full page source.
        if (!/<(?:html|body|head|meta)(?:\s[^>]*)?>/i.test(data.trim().slice(0, 10_000))) {
            return super.toView(data);
        }
        // Store doctype and xml declaration in a separate properties as they can't be stringified later.
        let docType = '';
        let xmlDeclaration = '';
        data = data.trim().replace(/<\?xml\s[^?]*\?>/i, (match)=>{
            xmlDeclaration = match;
            return '';
        });
        data = data.trim().replace(/^<!DOCTYPE\s[^>]*?>/i, (match)=>{
            docType = match;
            return '';
        });
        // Convert input HTML data to DOM DocumentFragment.
        const domFragment = this._toDom(data);
        // Convert DOM DocumentFragment to view DocumentFragment.
        const viewFragment = this.domConverter.domToView(domFragment, {
            skipComments: this.skipComments
        });
        const writer = new turndown_browser_es.UpcastWriter(viewFragment.document);
        // Using the DOM document with body content extracted as a skeleton of the page.
        writer.setCustomProperty('$fullPageDocument', domFragment.ownerDocument.documentElement.outerHTML, viewFragment);
        if (docType) {
            writer.setCustomProperty('$fullPageDocType', docType, viewFragment);
        }
        if (xmlDeclaration) {
            writer.setCustomProperty('$fullPageXmlDeclaration', xmlDeclaration, viewFragment);
        }
        return viewFragment;
    }
    /**
	 * @inheritDoc
	 */ toData(viewFragment) {
        let data = super.toData(viewFragment);
        const page = viewFragment.getCustomProperty('$fullPageDocument');
        const docType = viewFragment.getCustomProperty('$fullPageDocType');
        const xmlDeclaration = viewFragment.getCustomProperty('$fullPageXmlDeclaration');
        if (page) {
            data = page.replace(/<\/body\s*>/, data + '$&');
            if (docType) {
                data = docType + '\n' + data;
            }
            if (xmlDeclaration) {
                data = xmlDeclaration + '\n' + data;
            }
        }
        return data;
    }
}

/**
 * The full page editing feature. It preserves the whole HTML page in the editor data.
 */ class FullPage extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'FullPage';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const properties = [
            '$fullPageDocument',
            '$fullPageDocType',
            '$fullPageXmlDeclaration'
        ];
        editor.data.processor = new HtmlPageDataProcessor(editor.data.viewDocument);
        editor.model.schema.extend('$root', {
            allowAttributes: properties
        });
        // Apply custom properties from view document fragment to the model root attributes.
        editor.data.on('toModel', (evt, [viewElementOrFragment])=>{
            const root = editor.model.document.getRoot();
            editor.model.change((writer)=>{
                for (const name of properties){
                    const value = viewElementOrFragment.getCustomProperty(name);
                    if (value) {
                        writer.setAttribute(name, value, root);
                    }
                }
            });
        }, {
            priority: 'low'
        });
        // Apply root attributes to the view document fragment.
        editor.data.on('toView', (evt, [modelElementOrFragment])=>{
            if (!modelElementOrFragment.is('rootElement')) {
                return;
            }
            const root = modelElementOrFragment;
            const viewFragment = evt.return;
            if (!root.hasAttribute('$fullPageDocument')) {
                return;
            }
            const writer = new turndown_browser_es.UpcastWriter(viewFragment.document);
            for (const name of properties){
                const value = root.getAttribute(name);
                if (value) {
                    writer.setCustomProperty(name, value, viewFragment);
                }
            }
        }, {
            priority: 'low'
        });
        // Clear root attributes related to full page editing on editor content reset.
        editor.data.on('set', ()=>{
            const root = editor.model.document.getRoot();
            editor.model.change((writer)=>{
                for (const name of properties){
                    if (root.hasAttribute(name)) {
                        writer.removeAttribute(name, root);
                    }
                }
            });
        }, {
            priority: 'high'
        });
        // Make sure that document is returned even if there is no content in the page body.
        editor.data.on('get', (evt, args)=>{
            if (!args[0]) {
                args[0] = {};
            }
            args[0].trim = false;
        }, {
            priority: 'high'
        });
    }
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * The page break command.
 *
 * The command is registered by {@link module:page-break/pagebreakediting~PageBreakEditing} as `'pageBreak'`.
 *
 * To insert a page break at the current selection, execute the command:
 *
 *		editor.execute( 'pageBreak' );
 */ class PageBreakCommand extends turndown_browser_es.Command {
    /**
	 * @inheritDoc
	 */ refresh() {
        const model = this.editor.model;
        const schema = model.schema;
        const selection = model.document.selection;
        this.isEnabled = isPageBreakAllowedInParent(selection, schema, model);
    }
    /**
	 * Executes the command.
	 *
	 * @fires execute
	 */ execute() {
        const model = this.editor.model;
        model.change((writer)=>{
            const pageBreakElement = writer.createElement('pageBreak');
            model.insertObject(pageBreakElement, null, null, {
                setSelection: 'after'
            });
        });
    }
}
/**
 * Checks if a page break is allowed by the schema in the optimal insertion parent.
 */ function isPageBreakAllowedInParent(selection, schema, model) {
    const parent = getInsertPageBreakParent(selection, model);
    return schema.checkChild(parent, 'pageBreak');
}
/**
 * Returns a node that will be used to insert a page break with `model.insertContent` to check if the page break can be placed there.
 */ function getInsertPageBreakParent(selection, model) {
    const insertionRange = turndown_browser_es.findOptimalInsertionRange(selection, model);
    const parent = insertionRange.start.parent;
    if (parent.isEmpty && !parent.is('element', '$root')) {
        return parent.parent;
    }
    return parent;
}

/**
 * The page break editing feature.
 */ class PageBreakEditing extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'PageBreakEditing';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        const schema = editor.model.schema;
        const t = editor.t;
        const conversion = editor.conversion;
        schema.register('pageBreak', {
            inheritAllFrom: '$blockObject'
        });
        conversion.for('dataDowncast').elementToStructure({
            model: 'pageBreak',
            view: (modelElement, { writer })=>{
                const divElement = writer.createContainerElement('div', {
                    class: 'page-break',
                    // If user has no `.ck-content` styles, it should always break a page during print.
                    style: 'page-break-after: always'
                }, // For a rationale of using span inside a div see:
                // https://github.com/ckeditor/ckeditor5-page-break/pull/1#discussion_r328934062.
                writer.createContainerElement('span', {
                    style: 'display: none'
                }));
                return divElement;
            }
        });
        conversion.for('editingDowncast').elementToStructure({
            model: 'pageBreak',
            view: (modelElement, { writer })=>{
                const label = t('Page break');
                const viewWrapper = writer.createContainerElement('div');
                const viewLabelElement = writer.createRawElement('span', {
                    class: 'page-break__label'
                }, function(domElement) {
                    domElement.innerText = t('Page break');
                });
                writer.addClass('page-break', viewWrapper);
                writer.insert(writer.createPositionAt(viewWrapper, 0), viewLabelElement);
                return toPageBreakWidget(viewWrapper, writer, label);
            }
        });
        conversion.for('upcast').elementToElement({
            view: (element)=>{
                // For upcast conversion it's enough if we check for element style and verify if it's empty
                // or contains only hidden span element.
                const hasPageBreakBefore = element.getStyle('page-break-before') == 'always';
                const hasPageBreakAfter = element.getStyle('page-break-after') == 'always';
                if (!hasPageBreakBefore && !hasPageBreakAfter) {
                    return null;
                }
                // The "page break" div accepts only single child or no child at all.
                if (element.childCount == 1) {
                    const viewSpan = element.getChild(0);
                    // The child must be the "span" element that is not displayed.
                    if (!viewSpan.is('element', 'span') || viewSpan.getStyle('display') != 'none') {
                        return null;
                    }
                } else if (element.childCount > 1) {
                    return null;
                }
                return {
                    name: true
                };
            },
            model: 'pageBreak',
            // This conversion must be checked before <br> conversion because some editors use
            // <br style="page-break-before:always"> as a page break marker.
            converterPriority: 'high'
        });
        editor.commands.add('pageBreak', new PageBreakCommand(editor));
    }
}
/**
 * Converts a given {@link module:engine/view/element~Element} to a page break widget:
 * * Adds a {@link module:engine/view/element~Element#_setCustomProperty custom property} allowing to
 *   recognize the page break widget element.
 * * Calls the {@link module:widget/utils~toWidget} function with the proper element's label creator.
 */ function toPageBreakWidget(viewElement, writer, label) {
    writer.setCustomProperty('pageBreak', true, viewElement);
    return turndown_browser_es.toWidget(viewElement, writer, {
        label
    });
}

var pageBreakIcon = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.598.687h1.5v5h-1.5zm14.5 0h1.5v5h-1.5z\"/><path d=\"M19.598 4.187v1.5h-16v-1.5zm-16 14.569h1.5v-5h-1.5zm14.5 0h1.5v-5h-1.5z\"/><path d=\"M19.598 15.256v-1.5h-16v1.5zM5.081 9h6v2h-6zm8 0h6v2h-6zm-9.483 1L0 12.5v-5z\"/></svg>";

/**
 * The page break UI plugin.
 */ class PageBreakUI extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'PageBreakUI';
    }
    /**
	 * @inheritDoc
	 */ init() {
        const editor = this.editor;
        // Add pageBreak button to feature components.
        editor.ui.componentFactory.add('pageBreak', ()=>{
            const view = this._createButton(turndown_browser_es.ButtonView);
            view.set({
                tooltip: true
            });
            return view;
        });
        editor.ui.componentFactory.add('menuBar:pageBreak', ()=>this._createButton(turndown_browser_es.MenuBarMenuListItemButtonView));
    }
    /**
	 * Creates a button for page break command to use either in toolbar or in menu bar.
	 */ _createButton(ButtonClass) {
        const editor = this.editor;
        const locale = editor.locale;
        const command = editor.commands.get('pageBreak');
        const view = new ButtonClass(editor.locale);
        const t = locale.t;
        view.set({
            label: t('Page break'),
            icon: pageBreakIcon
        });
        view.bind('isEnabled').to(command, 'isEnabled');
        // Execute the command.
        this.listenTo(view, 'execute', ()=>{
            editor.execute('pageBreak');
            editor.editing.view.focus();
        });
        return view;
    }
}

/**
 * The page break feature.
 *
 * It provides the possibility to insert a page break into the rich-text editor.
 *
 * For a detailed overview, check the {@glink features/page-break Page break feature} documentation.
 */ class PageBreak extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            PageBreakEditing,
            PageBreakUI,
            turndown_browser_es.Widget
        ];
    }
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'PageBreak';
    }
}

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */ /**
 * @module source-editing/utils/formathtml
 */ /**
 * A simple (and naive) HTML code formatter that returns a formatted HTML markup that can be easily
 * parsed by human eyes. It beautifies the HTML code by adding new lines between elements that behave like block elements
 * (https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
 * and a few more like `tr`, `td`, and similar ones) and inserting indents for nested content.
 *
 * WARNING: This function works only on a text that does not contain any indentations or new lines.
 * Calling this function on the already formatted text will damage the formatting.
 *
 * @param input An HTML string to format.
 */ function formatHtml(input) {
    // A list of block-like elements around which the new lines should be inserted, and within which
    // the indentation of their children should be increased.
    // The list is partially based on https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements that contains
    // a full list of HTML block-level elements.
    // A void element is an element that cannot have any child - https://html.spec.whatwg.org/multipage/syntax.html#void-elements.
    // Note that <pre> element is not listed on this list to avoid breaking whitespace formatting.
    // Note that <br> element is not listed and handled separately so no additional white spaces are injected.
    const elementsToFormat = [
        {
            name: 'address',
            isVoid: false
        },
        {
            name: 'article',
            isVoid: false
        },
        {
            name: 'aside',
            isVoid: false
        },
        {
            name: 'blockquote',
            isVoid: false
        },
        {
            name: 'details',
            isVoid: false
        },
        {
            name: 'dialog',
            isVoid: false
        },
        {
            name: 'dd',
            isVoid: false
        },
        {
            name: 'div',
            isVoid: false
        },
        {
            name: 'dl',
            isVoid: false
        },
        {
            name: 'dt',
            isVoid: false
        },
        {
            name: 'fieldset',
            isVoid: false
        },
        {
            name: 'figcaption',
            isVoid: false
        },
        {
            name: 'figure',
            isVoid: false
        },
        {
            name: 'footer',
            isVoid: false
        },
        {
            name: 'form',
            isVoid: false
        },
        {
            name: 'h1',
            isVoid: false
        },
        {
            name: 'h2',
            isVoid: false
        },
        {
            name: 'h3',
            isVoid: false
        },
        {
            name: 'h4',
            isVoid: false
        },
        {
            name: 'h5',
            isVoid: false
        },
        {
            name: 'h6',
            isVoid: false
        },
        {
            name: 'header',
            isVoid: false
        },
        {
            name: 'hgroup',
            isVoid: false
        },
        {
            name: 'hr',
            isVoid: true
        },
        {
            name: 'li',
            isVoid: false
        },
        {
            name: 'main',
            isVoid: false
        },
        {
            name: 'nav',
            isVoid: false
        },
        {
            name: 'ol',
            isVoid: false
        },
        {
            name: 'p',
            isVoid: false
        },
        {
            name: 'section',
            isVoid: false
        },
        {
            name: 'table',
            isVoid: false
        },
        {
            name: 'tbody',
            isVoid: false
        },
        {
            name: 'td',
            isVoid: false
        },
        {
            name: 'th',
            isVoid: false
        },
        {
            name: 'thead',
            isVoid: false
        },
        {
            name: 'tr',
            isVoid: false
        },
        {
            name: 'ul',
            isVoid: false
        }
    ];
    const elementNamesToFormat = elementsToFormat.map((element)=>element.name).join('|');
    // It is not the fastest way to format the HTML markup but the performance should be good enough.
    const lines = input// Add new line before and after `<tag>` and `</tag>`.
    // It may separate individual elements with two new lines, but this will be fixed below.
    .replace(new RegExp(`</?(${elementNamesToFormat})( .*?)?>`, 'g'), '\n$&\n')// Keep `<br>`s at the end of line to avoid adding additional whitespaces before `<br>`.
    .replace(/<br[^>]*>/g, '$&\n')// Divide input string into lines, which start with either an opening tag, a closing tag, or just a text.
    .split('\n');
    let indentCount = 0;
    let isPreformattedLine = false;
    return lines.filter((line)=>line.length).map((line)=>{
        isPreformattedLine = isPreformattedBlockLine(line, isPreformattedLine);
        if (isNonVoidOpeningTag(line, elementsToFormat)) {
            return indentLine(line, indentCount++);
        }
        if (isClosingTag(line, elementsToFormat)) {
            return indentLine(line, --indentCount);
        }
        if (isPreformattedLine === 'middle' || isPreformattedLine === 'last') {
            return line;
        }
        return indentLine(line, indentCount);
    }).join('\n');
}
/**
 * Checks, if an argument is an opening tag of a non-void element to be formatted.
 *
 * @param line String to check.
 * @param elementsToFormat Elements to be formatted.
 */ function isNonVoidOpeningTag(line, elementsToFormat) {
    return elementsToFormat.some((element)=>{
        if (element.isVoid) {
            return false;
        }
        if (!new RegExp(`<${element.name}( .*?)?>`).test(line)) {
            return false;
        }
        return true;
    });
}
/**
 * Checks, if an argument is a closing tag.
 *
 * @param line String to check.
 * @param elementsToFormat Elements to be formatted.
 */ function isClosingTag(line, elementsToFormat) {
    return elementsToFormat.some((element)=>{
        return new RegExp(`</${element.name}>`).test(line);
    });
}
/**
 * Indents a line by a specified number of characters.
 *
 * @param line Line to indent.
 * @param indentCount Number of characters to use for indentation.
 * @param indentChar Indentation character(s). 4 spaces by default.
 */ function indentLine(line, indentCount, indentChar = '    ') {
    // More about Math.max() here in https://github.com/ckeditor/ckeditor5/issues/10698.
    return `${indentChar.repeat(Math.max(0, indentCount))}${line}`;
}
/**
 * Checks whether a line belongs to a preformatted (`<pre>`) block.
 *
 * @param line Line to check.
 * @param isPreviousLinePreFormatted Information on whether the previous line was preformatted (and how).
 */ function isPreformattedBlockLine(line, isPreviousLinePreFormatted) {
    if (new RegExp('<pre( .*?)?>').test(line)) {
        return 'first';
    } else if (new RegExp('</pre>').test(line)) {
        return 'last';
    } else if (isPreviousLinePreFormatted === 'first' || isPreviousLinePreFormatted === 'middle') {
        return 'middle';
    } else {
        return false;
    }
}

var sourceEditingIcon = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m12.5 0 5 4.5v15.003h-16V0h11zM3 1.5v3.25l-1.497 1-.003 8 1.5 1v3.254L7.685 18l-.001 1.504H17.5V8.002L16 9.428l-.004-4.22-4.222-3.692L3 1.5z\"/><path d=\"M4.06 6.64a.75.75 0 0 1 .958 1.15l-.085.07L2.29 9.75l2.646 1.89c.302.216.4.62.232.951l-.058.095a.75.75 0 0 1-.951.232l-.095-.058-3.5-2.5V9.14l3.496-2.5zm4.194 6.22a.75.75 0 0 1-.958-1.149l.085-.07 2.643-1.89-2.646-1.89a.75.75 0 0 1-.232-.952l.058-.095a.75.75 0 0 1 .95-.232l.096.058 3.5 2.5v1.22l-3.496 2.5zm7.644-.836 2.122 2.122-5.825 5.809-2.125-.005.003-2.116zm2.539-1.847 1.414 1.414a.5.5 0 0 1 0 .707l-1.06 1.06-2.122-2.12 1.061-1.061a.5.5 0 0 1 .707 0z\"/></svg>";

const COMMAND_FORCE_DISABLE_ID = 'SourceEditingMode';
/**
 * The source editing feature.
 *
 * It provides the possibility to view and edit the source of the document.
 *
 * For a detailed overview, check the {@glink features/source-editing source editing feature documentation} and the
 * {@glink api/source-editing package page}.
 */ class SourceEditing extends turndown_browser_es.Plugin {
    /**
	 * @inheritDoc
	 */ static get pluginName() {
        return 'SourceEditing';
    }
    /**
	 * @inheritDoc
	 */ static get requires() {
        return [
            turndown_browser_es.PendingActions
        ];
    }
    /**
	 * The element replacer instance used to replace the editing roots with the wrapper elements containing the document source.
	 */ _elementReplacer;
    /**
	 * Maps all root names to wrapper elements containing the document source.
	 */ _replacedRoots;
    /**
	 * Maps all root names to their document data.
	 */ _dataFromRoots;
    /**
	 * @inheritDoc
	 */ constructor(editor){
        super(editor);
        this.set('isSourceEditingMode', false);
        this._elementReplacer = new turndown_browser_es.ElementReplacer();
        this._replacedRoots = new Map();
        this._dataFromRoots = new Map();
        editor.config.define('sourceEditing.allowCollaborationFeatures', false);
    }
    /**
	 * @inheritDoc
	 */ init() {
        this._checkCompatibility();
        const editor = this.editor;
        const t = editor.locale.t;
        editor.ui.componentFactory.add('sourceEditing', ()=>{
            const buttonView = this._createButton(turndown_browser_es.ButtonView);
            buttonView.set({
                label: t('Source'),
                icon: sourceEditingIcon,
                tooltip: true,
                class: 'ck-source-editing-button'
            });
            return buttonView;
        });
        editor.ui.componentFactory.add('menuBar:sourceEditing', ()=>{
            const buttonView = this._createButton(turndown_browser_es.MenuBarMenuListItemButtonView);
            buttonView.set({
                label: t('Show source'),
                role: 'menuitemcheckbox'
            });
            return buttonView;
        });
        // Currently, the plugin handles the source editing mode by itself only for the classic editor. To use this plugin with other
        // integrations, listen to the `change:isSourceEditingMode` event and act accordingly.
        if (this._isAllowedToHandleSourceEditingMode()) {
            this.on('change:isSourceEditingMode', (evt, name, isSourceEditingMode)=>{
                if (isSourceEditingMode) {
                    this._hideVisibleDialog();
                    this._showSourceEditing();
                    this._disableCommands();
                } else {
                    this._hideSourceEditing();
                    this._enableCommands();
                }
            });
            this.on('change:isEnabled', (evt, name, isEnabled)=>this._handleReadOnlyMode(!isEnabled));
            this.listenTo(editor, 'change:isReadOnly', (evt, name, isReadOnly)=>this._handleReadOnlyMode(isReadOnly));
        }
        // Update the editor data while calling editor.getData() in the source editing mode.
        editor.data.on('get', ()=>{
            if (this.isSourceEditingMode) {
                this.updateEditorData();
            }
        }, {
            priority: 'high'
        });
    }
    /**
	 * Updates the source data in all hidden editing roots.
	 */ updateEditorData() {
        const editor = this.editor;
        const data = {};
        for (const [rootName, domSourceEditingElementWrapper] of this._replacedRoots){
            const oldData = this._dataFromRoots.get(rootName);
            const newData = domSourceEditingElementWrapper.dataset.value;
            // Do not set the data unless some changes have been made in the meantime.
            // This prevents empty undo steps after switching to the normal editor.
            if (oldData !== newData) {
                data[rootName] = newData;
                this._dataFromRoots.set(rootName, newData);
            }
        }
        if (Object.keys(data).length) {
            editor.data.set(data, {
                batchType: {
                    isUndoable: true
                },
                suppressErrorInCollaboration: true
            });
        }
    }
    _checkCompatibility() {
        const editor = this.editor;
        const allowCollaboration = editor.config.get('sourceEditing.allowCollaborationFeatures');
        if (!allowCollaboration && editor.plugins.has('RealTimeCollaborativeEditing')) {
            /**
			 * Source editing feature is not fully compatible with real-time collaboration,
			 * and using it may lead to data loss. Please read
			 * {@glink features/source-editing#limitations-and-incompatibilities source editing feature guide} to learn more.
			 *
			 * If you understand the possible risk of data loss, you can enable the source editing
			 * by setting the
			 * {@link module:source-editing/sourceeditingconfig~SourceEditingConfig#allowCollaborationFeatures}
			 * configuration flag to `true`.
			 *
			 * @error source-editing-incompatible-with-real-time-collaboration
			 */ throw new turndown_browser_es.CKEditorError('source-editing-incompatible-with-real-time-collaboration', null);
        }
        const collaborationPluginNamesToWarn = [
            'CommentsEditing',
            'TrackChangesEditing',
            'RevisionHistory'
        ];
        // Currently, the basic integration with Collaboration Features is to display a warning in the console.
        //
        // If `allowCollaboration` flag is set, do not show these warnings. If the flag is set, we assume that the integrator read
        // appropriate section of the guide so there's no use to spam the console with warnings.
        //
        if (!allowCollaboration && collaborationPluginNamesToWarn.some((pluginName)=>editor.plugins.has(pluginName))) {
            console.warn('You initialized the editor with the source editing feature and at least one of the collaboration features. ' + 'Please be advised that the source editing feature may not work, and be careful when editing document source ' + 'that contains markers created by the collaboration features.');
        }
        // Restricted Editing integration can also lead to problems. Warn the user accordingly.
        if (editor.plugins.has('RestrictedEditingModeEditing')) {
            console.warn('You initialized the editor with the source editing feature and restricted editing feature. ' + 'Please be advised that the source editing feature may not work, and be careful when editing document source ' + 'that contains markers created by the restricted editing feature.');
        }
    }
    /**
	 * Creates source editing wrappers that replace each editing root. Each wrapper contains the document source from the corresponding
	 * root.
	 *
	 * The wrapper element contains a textarea and it solves the problem, that the textarea element cannot auto expand its height based on
	 * the content it contains. The solution is to make the textarea more like a plain div element, which expands in height as much as it
	 * needs to, in order to display the whole document source without scrolling. The wrapper element is a parent for the textarea and for
	 * the pseudo-element `::after`, that replicates the look, content, and position of the textarea. The pseudo-element replica is hidden,
	 * but it is styled to be an identical visual copy of the textarea with the same content. Then, the wrapper is a grid container and both
	 * of its children (the textarea and the `::after` pseudo-element) are positioned within a CSS grid to occupy the same grid cell. The
	 * content in the pseudo-element `::after` is set in CSS and it stretches the grid to the appropriate size based on the textarea value.
	 * Since both children occupy the same grid cell, both have always the same height.
	 */ _showSourceEditing() {
        const editor = this.editor;
        const editingView = editor.editing.view;
        const model = editor.model;
        model.change((writer)=>{
            writer.setSelection(null);
            writer.removeSelectionAttribute(model.document.selection.getAttributeKeys());
        });
        // It is not needed to iterate through all editing roots, as currently the plugin supports only the Classic Editor with a single
        // main root, but this code may help understand and use this feature in external integrations.
        for (const [rootName, domRootElement] of editingView.domRoots){
            const data = formatSource(editor.data.get({
                rootName
            }));
            const domSourceEditingElementTextarea = turndown_browser_es.createElement(domRootElement.ownerDocument, 'textarea', {
                rows: '1',
                'aria-label': 'Source code editing area'
            });
            const domSourceEditingElementWrapper = turndown_browser_es.createElement(domRootElement.ownerDocument, 'div', {
                class: 'ck-source-editing-area',
                'data-value': data
            }, [
                domSourceEditingElementTextarea
            ]);
            domSourceEditingElementTextarea.value = data;
            // Setting a value to textarea moves the input cursor to the end. We want the selection at the beginning.
            domSourceEditingElementTextarea.setSelectionRange(0, 0);
            // Bind the textarea's value to the wrapper's `data-value` property. Each change of the textarea's value updates the
            // wrapper's `data-value` property.
            domSourceEditingElementTextarea.addEventListener('input', ()=>{
                domSourceEditingElementWrapper.dataset.value = domSourceEditingElementTextarea.value;
                editor.ui.update();
            });
            editingView.change((writer)=>{
                const viewRoot = editingView.document.getRoot(rootName);
                writer.addClass('ck-hidden', viewRoot);
            });
            // Register the element so it becomes available for Alt+F10 and Esc navigation.
            editor.ui.setEditableElement('sourceEditing:' + rootName, domSourceEditingElementTextarea);
            this._replacedRoots.set(rootName, domSourceEditingElementWrapper);
            this._elementReplacer.replace(domRootElement, domSourceEditingElementWrapper);
            this._dataFromRoots.set(rootName, data);
        }
        this._focusSourceEditing();
    }
    /**
	 * Restores all hidden editing roots and sets the source data in them.
	 */ _hideSourceEditing() {
        const editor = this.editor;
        const editingView = editor.editing.view;
        this.updateEditorData();
        editingView.change((writer)=>{
            for (const [rootName] of this._replacedRoots){
                writer.removeClass('ck-hidden', editingView.document.getRoot(rootName));
            }
        });
        this._elementReplacer.restore();
        this._replacedRoots.clear();
        this._dataFromRoots.clear();
        editingView.focus();
    }
    /**
	 * Focuses the textarea containing document source from the first editing root.
	 */ _focusSourceEditing() {
        const editor = this.editor;
        const [domSourceEditingElementWrapper] = this._replacedRoots.values();
        const textarea = domSourceEditingElementWrapper.querySelector('textarea');
        // The FocusObserver was disabled by View.render() while the DOM root was getting hidden and the replacer
        // revealed the textarea. So it couldn't notice that the DOM root got blurred in the process.
        // Let's sync this state manually here because otherwise Renderer will attempt to render selection
        // in an invisible DOM root.
        editor.editing.view.document.isFocused = false;
        textarea.focus();
    }
    /**
	 * Disables all commands.
	 */ _disableCommands() {
        const editor = this.editor;
        for (const command of editor.commands.commands()){
            command.forceDisabled(COMMAND_FORCE_DISABLE_ID);
        }
        // Comments archive UI plugin will be disabled manually too.
        if (editor.plugins.has('CommentsArchiveUI')) {
            editor.plugins.get('CommentsArchiveUI').forceDisabled(COMMAND_FORCE_DISABLE_ID);
        }
    }
    /**
	 * Clears forced disable for all commands, that was previously set through {@link #_disableCommands}.
	 */ _enableCommands() {
        const editor = this.editor;
        for (const command of editor.commands.commands()){
            command.clearForceDisabled(COMMAND_FORCE_DISABLE_ID);
        }
        // Comments archive UI plugin will be enabled manually too.
        if (editor.plugins.has('CommentsArchiveUI')) {
            editor.plugins.get('CommentsArchiveUI').clearForceDisabled(COMMAND_FORCE_DISABLE_ID);
        }
    }
    /**
	 * Adds or removes the `readonly` attribute from the textarea from all roots, if document source mode is active.
	 *
	 * @param isReadOnly Indicates whether all textarea elements should be read-only.
	 */ _handleReadOnlyMode(isReadOnly) {
        if (!this.isSourceEditingMode) {
            return;
        }
        for (const [, domSourceEditingElementWrapper] of this._replacedRoots){
            domSourceEditingElementWrapper.querySelector('textarea').readOnly = isReadOnly;
        }
    }
    /**
	 * Checks, if the plugin is allowed to handle the source editing mode by itself. Currently, the source editing mode is supported only
	 * for the {@link module:editor-classic/classiceditor~ClassicEditor classic editor}.
	 */ _isAllowedToHandleSourceEditingMode() {
        const editor = this.editor;
        const editable = editor.ui.view.editable;
        // Checks, if the editor's editable belongs to the editor's DOM tree.
        return editable && !editable.hasExternalElement;
    }
    /**
	 * If any {@link module:ui/dialog/dialogview~DialogView editor dialog} is currently visible, hide it.
	 */ _hideVisibleDialog() {
        if (this.editor.plugins.has('Dialog')) {
            const dialogPlugin = this.editor.plugins.get('Dialog');
            if (dialogPlugin.isOpen) {
                dialogPlugin.hide();
            }
        }
    }
    _createButton(ButtonClass) {
        const editor = this.editor;
        const buttonView = new ButtonClass(editor.locale);
        buttonView.set({
            withText: true,
            isToggleable: true
        });
        buttonView.bind('isOn').to(this, 'isSourceEditingMode');
        // The button should be disabled if one of the following conditions is met:
        buttonView.bind('isEnabled').to(this, 'isEnabled', editor, 'isReadOnly', editor.plugins.get(turndown_browser_es.PendingActions), 'hasAny', (isEnabled, isEditorReadOnly, hasAnyPendingActions)=>{
            // (1) The plugin itself is disabled.
            if (!isEnabled) {
                return false;
            }
            // (2) The editor is in read-only mode.
            if (isEditorReadOnly) {
                return false;
            }
            // (3) Any pending action is scheduled. It may change the model, so modifying the document source should be prevented
            // until the model is finally set.
            if (hasAnyPendingActions) {
                return false;
            }
            return true;
        });
        this.listenTo(buttonView, 'execute', ()=>{
            this.isSourceEditingMode = !this.isSourceEditingMode;
        });
        return buttonView;
    }
}
/**
 * Formats the content for a better readability.
 *
 * For a non-HTML source the unchanged input string is returned.
 *
 * @param input Input string to check.
 */ function formatSource(input) {
    if (!isHtml(input)) {
        return input;
    }
    return formatHtml(input);
}
/**
 * Checks, if the document source is HTML. It is sufficient to just check the first character from the document data.
 *
 * @param input Input string to check.
 */ function isHtml(input) {
    return input.startsWith('<');
}

const irTextEditorCss = ":root{--ck-color-base-foreground:hsl(0, 0%, 98%);--ck-color-base-background:hsl(0, 0%, 100%);--ck-color-base-border:hsl(220, 6%, 81%);--ck-color-base-action:hsl(104, 50.2%, 42.5%);--ck-color-base-focus:hsl(209, 92%, 70%);--ck-color-base-text:hsl(0, 0%, 20%);--ck-color-base-active:hsl(218.1, 100%, 58%);--ck-color-base-active-focus:hsl(218.2, 100%, 52.5%);--ck-color-base-error:hsl(15, 100%, 43%);--ck-color-focus-border-coordinates:218, 81.8%, 56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:hsl(212.4, 89.3%, 89%);--ck-color-focus-disabled-shadow:hsla(209, 90%, 72%,.3);--ck-color-focus-error-shadow:hsla(9,100%,56%,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:hsla(0, 0%, 0%, 0.15);--ck-color-shadow-drop-active:hsla(0, 0%, 0%, 0.2);--ck-color-shadow-inner:hsla(0, 0%, 0%, 0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:hsl(0, 0%, 94.1%);--ck-color-button-default-active-background:hsl(0, 0%, 94.1%);--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:hsl(212, 100%, 97.1%);--ck-color-button-on-hover-background:hsl(211.7, 100%, 92.9%);--ck-color-button-on-active-background:hsl(211.7, 100%, 92.9%);--ck-color-button-on-disabled-background:hsl(211, 15%, 95%);--ck-color-button-on-color:hsl(218.1, 100%, 58%);--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:hsl(104, 53.2%, 40.2%);--ck-color-button-action-active-background:hsl(104, 53.2%, 40.2%);--ck-color-button-action-disabled-background:hsl(104, 44%, 58%);--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:hsl(120, 100%, 27%);--ck-color-button-cancel:hsl(15, 100%, 43%);--ck-color-switch-button-off-background:hsl(0, 0%, 57.6%);--ck-color-switch-button-off-hover-background:hsl(0, 0%, 49%);--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:hsl(104, 53.2%, 40.2%);--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:hsla(0, 0%, 0%, 0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:hsl(0, 0%, 95%);--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:hsl(0, 0%, 46%);--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:hsl(0, 0%, 44%);--ck-color-upload-bar-background:hsl(209, 92%, 70%);--ck-color-link-default:hsl(240, 100%, 47%);--ck-color-link-selected-background:hsla(201, 100%, 56%, 0.1);--ck-color-link-fake-selection:hsla(201, 100%, 56%, 0.3);--ck-color-highlight-background:hsl(60, 100%, 50%);--ck-color-light-red:hsl(0, 100%, 90%)}:root{--ck-disabled-opacity:.5}:root{--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border)}:root{--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica, Arial, Tahoma, Verdana, Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em}:root{--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck-reset_all *:not(.ck-reset_all-excluded *){box-sizing:border-box;width:auto;height:auto;position:static;margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck-reset_all *:not(.ck-reset_all-excluded *){border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck-reset_all .ck-rtl *:not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all textarea:not(.ck-reset_all-excluded *),.ck-reset_all input[type=\"text\"]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=\"password\"]:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=\"text\"][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=\"password\"][disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){padding:10px;border:2px groove hsl(255, 7%, 88%)}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{padding:0;border:0}.ck[dir=\"rtl\"],.ck[dir=\"rtl\"] .ck{text-align:right}:root{--ck-border-radius:2px}:root{--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active)}:root{--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit) * 1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit) * 0.8);--ck-spacing-small:calc(var(--ck-spacing-unit) * 0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit) * 0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit) * 0.16)}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{box-shadow:var(--ck-drop-shadow), 0 0;max-height:200px;overflow-y:auto;background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);min-width:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background);border-radius:0;white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out, border .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}@media (prefers-reduced-motion: reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,a.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow), 0 0}.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=\"ltr\"] .ck.ck-button .ck-button__label,[dir=\"ltr\"] a.ck.ck-button .ck-button__label{text-align:left}[dir=\"rtl\"] .ck.ck-button .ck-button__label,[dir=\"rtl\"] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=\"ltr\"] .ck.ck-button .ck-button__keystroke,[dir=\"ltr\"] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=\"rtl\"] .ck.ck-button .ck-button__keystroke,[dir=\"rtl\"] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow), 0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard);}[dir=\"ltr\"] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=\"ltr\"] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:var(--ck-spacing-medium)}[dir=\"rtl\"] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=\"rtl\"] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-medium)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background);color:var(--ck-color-button-on-color)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background);color:var(--ck-color-button-action-text)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:bold}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.0769230769em + 1px);--ck-switch-button-translation:calc(\r\n\t\tvar(--ck-switch-button-toggle-width) -\r\n\t\tvar(--ck-switch-button-toggle-inner-size) -\r\n\t\t2px \r\n\t);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton:hover,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:active{color:inherit;background:transparent}[dir=\"ltr\"] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2 * var(--ck-spacing-large))}[dir=\"rtl\"] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(2 * var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=\"ltr\"] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=\"rtl\"] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;border:1px solid transparent;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(.5 * var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all 300ms ease}@media (prefers-reduced-motion: reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;outline:none;box-shadow:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);outline-offset:1px;outline:var(--ck-focus-ring)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=\"ltr\"] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX( var( --ck-switch-button-translation ) )}[dir=\"rtl\"] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX( calc( -1 * var( --ck-switch-button-translation ) ) )}.ck.ck-button.ck-list-item-button{padding:var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard))}.ck.ck-button.ck-list-item-button,.ck.ck-button.ck-list-item-button.ck-on{background:var(--ck-color-list-background);color:var(--ck-color-text)}[dir=\"ltr\"] .ck.ck-button.ck-list-item-button:has(.ck-list-item-button__check-holder){padding-left:var(--ck-spacing-small)}[dir=\"rtl\"] .ck.ck-button.ck-list-item-button:has(.ck-list-item-button__check-holder){padding-right:var(--ck-spacing-small)}.ck.ck-button.ck-list-item-button:hover:not(.ck-disabled),.ck.ck-button.ck-list-item-button.ck-button.ck-on:hover,.ck.ck-button.ck-list-item-button.ck-on:not(.ck-list-item-button_toggleable),.ck.ck-button.ck-list-item-button.ck-on:hover{background:var(--ck-color-list-button-hover-background)}.ck.ck-button.ck-list-item-button:hover:not(.ck-disabled):not(.ck-disabled),.ck.ck-button.ck-list-item-button.ck-button.ck-on:hover:not(.ck-disabled),.ck.ck-button.ck-list-item-button.ck-on:not(.ck-list-item-button_toggleable):not(.ck-disabled),.ck.ck-button.ck-list-item-button.ck-on:hover:not(.ck-disabled){color:var(--ck-color-text)}:root{--ck-collapsible-arrow-size:calc(0.5 * var(--ck-icon-size))}.ck.ck-collapsible>.ck.ck-button{width:100%;font-weight:bold;border-radius:0;color:inherit}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:not(:focus),.ck.ck-collapsible>.ck.ck-button:hover:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:hsl(212, 81%, 46%)}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:.2s ease box-shadow}@media (forced-colors: none){.ck.ck-color-grid__tile{width:var(--ck-color-grid-tile-size);height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);padding:0;border:0}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors: active){.ck.ck-color-grid__tile{width:unset;height:unset;min-width:unset;min-height:unset;padding:0 var(--ck-spacing-small)}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion: reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{display:none;color:var(--ck-color-color-grid-check-icon)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{padding:calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=\"ltr\"] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=\"rtl\"] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer){width:15px;height:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}:root{--ck-dialog-overlay-background-color:hsla( 0, 0%, 0%, .5 );--ck-dialog-drop-shadow:0px 0px 6px 2px hsl(0deg 0% 0% / 15%);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{box-shadow:var(--ck-drop-shadow), 0 0;--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width);border:1px solid var(--ck-color-base-border)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:hsla( 0, 0%, 0%, 0 )}100%{background:var(--ck-dialog-overlay-background-color)}}.ck.ck-dialog .ck.ck-dialog__actions{padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}:root{--ck-dropdown-arrow-size:calc(0.5 * var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=\"ltr\"] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-standard)}[dir=\"rtl\"] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=\"ltr\"] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=\"rtl\"] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow), 0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow), 0 0;background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%;}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}:root{--ck-color-split-button-hover-background:hsl(0, 0%, 92%);--ck-color-split-button-hover-border:hsl(0, 0%, 70%)}[dir=\"ltr\"] .ck.ck-splitbutton:hover>.ck-splitbutton__action,[dir=\"ltr\"] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action{border-top-right-radius:unset;border-bottom-right-radius:unset}[dir=\"rtl\"] .ck.ck-splitbutton:hover>.ck-splitbutton__action,[dir=\"rtl\"] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action{border-top-left-radius:unset;border-bottom-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=\"ltr\"] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-left-radius:unset;border-bottom-left-radius:unset}[dir=\"rtl\"] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-right-radius:unset;border-bottom-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-top-width:0px;border-bottom-width:0px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled)::after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled)::after{content:'';position:absolute;width:1px;height:100%;background-color:var(--ck-color-split-button-hover-border)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus::after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus::after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=\"ltr\"] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled)::after,[dir=\"ltr\"] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled)::after{left:-1px}[dir=\"rtl\"] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled)::after,[dir=\"rtl\"] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled)::after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button{width:100%;padding:var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));border-radius:0}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-icon-spacing:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=\"ltr\"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{transform:rotate(-90deg);margin-right:calc(-1 * var(--ck-spacing-small))}[dir=\"rtl\"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{transform:rotate(90deg);margin-left:calc(-1 * var(--ck-spacing-small))}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-disabled>.ck-dropdown-menu-list__nested-menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=\"ltr\"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=\"ltr\"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-standard)}[dir=\"rtl\"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}[dir=\"rtl\"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}:root{--ck-dropdown-menu-menu-item-min-width:18em}.ck.ck-dropdown-menu-list__nested-menu__item{min-width:var(--ck-dropdown-menu-menu-item-min-width)}.ck-button.ck-dropdown-menu-list__nested-menu__item__button{border-radius:0}.ck-button.ck-dropdown-menu-list__nested-menu__item__button>.ck-spinner-container,.ck-button.ck-dropdown-menu-list__nested-menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck-button.ck-dropdown-menu-list__nested-menu__item__button>.ck-spinner-container{margin-left:calc(-1 * var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}.ck-button.ck-dropdown-menu-list__nested-menu__item__button:focus{border-color:transparent;box-shadow:none}.ck-button.ck-dropdown-menu-list__nested-menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}:root{--ck-dropdown-menu-menu-panel-max-width:75vw}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel{box-shadow:var(--ck-drop-shadow), 0 0;background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;height:fit-content;max-width:var(--ck-dropdown-menu-menu-panel-max-width);}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel::after,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel::before{display:none}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_es,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_se{border-top-left-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_ws,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_sw{border-top-right-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_en,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_ne{border-bottom-left-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_wn,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_nw{border-bottom-right-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel:focus{outline:none}:root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:hsl(220, 6%, 81%);--ck-accessibility-help-dialog-code-background-color:hsl(0deg 0% 92.94%);--ck-accessibility-help-dialog-kbd-shadow-color:hsl(0deg 0% 61%)}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{padding:var(--ck-spacing-large);max-width:var(--ck-accessibility-help-dialog-max-width);max-height:var(--ck-accessibility-help-dialog-max-height);overflow:auto;user-select:text;border:1px solid transparent}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow), 0 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content *{white-space:normal}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-weight:bold;font-size:1.2em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-weight:bold;font-size:1em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{display:grid;grid-template-columns:2fr 1fr;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);border-bottom:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{display:inline-block;background:var(--ck-accessibility-help-dialog-code-background-color);padding:.4em;vertical-align:middle;line-height:1;border-radius:2px;text-align:center;font-size:.9em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{min-width:1.8em;box-shadow:0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}:root{--ck-color-editable-blur-selection:hsl(0, 0%, 85%)}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow), 0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=\"ltr\"]{text-align:left}.ck.ck-editor__editable_inline[dir=\"rtl\"]{text-align:right}.ck.ck-editor__editable_inline>*:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>*:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=\"arrow_n\"]::after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=\"arrow_s\"]::after{border-top-color:var(--ck-color-panel-background)}:root{--ck-form-header-height:44px}.ck.ck-form__header{padding:var(--ck-spacing-small) var(--ck-spacing-large);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);border-bottom:1px solid var(--ck-color-base-border)}[dir=\"ltr\"] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=\"rtl\"] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:bold}:root{--ck-icon-size:calc(var(--ck-line-height-base) * var(--ck-font-size-normal));--ck-icon-font-size:.8333350694em}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:var(--ck-icon-font-size);cursor:inherit;will-change:transform}.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color{color:inherit}.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color *:not([fill]){fill:currentColor}:root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-width);min-height:var(--ck-ui-component-min-height);transition:box-shadow .1s ease-in-out, border .1s ease-in-out}@media (prefers-reduced-motion: reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow), 0 0}.ck.ck-input[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow), 0 0}.ck.ck-input.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-input-shake .3s ease both}@media (prefers-reduced-motion: reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow), 0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}.ck.ck-label{font-weight:bold}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0, 0, 0.24, 0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(0.6 * var(--ck-font-size-base));--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0px}[dir=\"ltr\"] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0px;transform-origin:0 0;transform:translate(var(--ck-spacing-medium), -6px) scale(.75)}[dir=\"rtl\"] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0px;transform-origin:100% 0;transform:translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{pointer-events:none;background:var(--ck-color-labeled-field-label-background);padding:0 calc(.5 * var(--ck-font-size-tiny));line-height:initial;font-weight:normal;text-overflow:ellipsis;overflow:hidden;max-width:100%;transition:transform var(--ck-labeled-field-view-transition),\r\n\t\t\t\tpadding var(--ck-labeled-field-view-transition),\r\n\t\t\t\tbackground var(--ck-labeled-field-view-transition)}@media (prefers-reduced-motion: reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=\"ltr\"] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=\"ltr\"] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=\"rtl\"] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=\"rtl\"] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));background:transparent;padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}.ck.ck-labeled-input .ck-labeled-input__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-input .ck-labeled-input__status_error{color:var(--ck-color-base-error)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background);padding:var(--ck-spacing-small) 0}.ck.ck-list__item{cursor:default;min-width:15em}.ck.ck-list__item>.ck-button:not(.ck-list-item-button){padding:var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));min-height:unset;width:100%;border-radius:0}[dir=\"ltr\"] .ck.ck-list__item>.ck-button:not(.ck-list-item-button){text-align:left}[dir=\"rtl\"] .ck.ck-list__item>.ck-button:not(.ck-list-item-button){text-align:right}.ck.ck-list__item>.ck-button:not(.ck-list-item-button) .ck-button__label{line-height:calc(var(--ck-line-height-base) * var(--ck-font-size-base))}.ck.ck-list__item>.ck-button:not(.ck-list-item-button):active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button){background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button):active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button):hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button):focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:not(.ck-list-item-button):hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-button.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-button.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);}.ck-list .ck-list__group:first-child{padding-top:0}*:not(.ck-hidden)~.ck-list .ck-list__group{border-top:1px solid var(--ck-color-base-border)}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:bold;padding:var(--ck-spacing-medium) var(--ck-spacing-large) 0}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border);margin:var(--ck-spacing-small) 0}.ck.ck-menu-bar{display:flex;flex-wrap:wrap;justify-content:flex-start;background:var(--ck-color-base-background);padding:var(--ck-spacing-small);gap:var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border);width:100%}.ck.ck-menu-bar__menu{font-size:inherit}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=\"ltr\"] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=\"rtl\"] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{padding:var(--ck-spacing-small) var(--ck-spacing-medium);min-height:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{width:unset;line-height:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=\"ltr\"] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg);margin-left:var(--ck-spacing-standard);margin-right:calc(-1 * var(--ck-spacing-small))}[dir=\"rtl\"] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg);left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small);margin-left:calc(-1 * var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}:root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{font-size:var(--ck-icon-font-size)}[dir=\"ltr\"] .ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-right:var(--ck-spacing-medium)}[dir=\"rtl\"] .ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:var(--ck-spacing-medium)}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{box-shadow:var(--ck-drop-shadow), 0 0;background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width);}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}.ck.ck-menu-bar .ck-list-item-button:focus,.ck.ck-menu-bar .ck-list-item-button:active{border-color:transparent;box-shadow:none}.ck.ck-menu-bar.ck-menu-bar_focus-border-enabled .ck-list-item-button:focus,.ck.ck-menu-bar.ck-menu-bar_focus-border-enabled .ck-list-item-button:active{position:relative;z-index:2;outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow), 0 0}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow), 0 0;min-height:15px;background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::before,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::after{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=\"arrow_n\"]::before,.ck.ck-balloon-panel[class*=\"arrow_n\"]::after{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=\"arrow_n\"]::before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc( -1 * var(--ck-balloon-border-width) )}.ck.ck-balloon-panel[class*=\"arrow_n\"]::after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) )}.ck.ck-balloon-panel[class*=\"arrow_s\"]::before,.ck.ck-balloon-panel[class*=\"arrow_s\"]::after{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=\"arrow_s\"]::before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc( -1 * var(--ck-balloon-border-width) )}.ck.ck-balloon-panel[class*=\"arrow_s\"]::after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) )}.ck.ck-balloon-panel[class*=\"arrow_e\"]::before,.ck.ck-balloon-panel[class*=\"arrow_e\"]::after{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=\"arrow_e\"]::before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc( -1 * var(--ck-balloon-border-width) )}.ck.ck-balloon-panel[class*=\"arrow_e\"]::after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) )}.ck.ck-balloon-panel[class*=\"arrow_w\"]::before,.ck.ck-balloon-panel[class*=\"arrow_w\"]::after{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=\"arrow_w\"]::before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc( -1 * var(--ck-balloon-border-width) )}.ck.ck-balloon-panel[class*=\"arrow_w\"]::after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) )}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n::after{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw::after{left:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne::after{right:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s::after{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw::after{left:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se::after{right:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme::after{right:25%;margin-right:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw::after{left:25%;margin-left:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme::after{right:25%;margin-right:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw::after{left:25%;margin-left:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e::after{right:calc(-1 * var(--ck-balloon-arrow-height));margin-top:calc(-1 * var(--ck-balloon-arrow-half-width));top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w::before,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w::after{left:calc(-1 * var(--ck-balloon-arrow-height));margin-top:calc(-1 * var(--ck-balloon-arrow-half-width));top:50%}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small);}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow), 0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:nth-child(1){margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical) * 2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical) * 3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow), 0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}.ck-vertical-form>.ck-button:nth-last-child(2)::after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=\"ltr\"] .ck.ck-responsive-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}[dir=\"rtl\"] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width: 600px){.ck.ck-responsive-form{padding:0;width:calc(.8 * var(--ck-input-width))}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2)::after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:nth-last-child(1),.ck.ck-responsive-form>.ck-button:nth-last-child(2){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-large);border-radius:0}.ck.ck-responsive-form>.ck-button:nth-last-child(1):not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=\"ltr\"] .ck.ck-responsive-form>.ck-button:nth-last-child(1),[dir=\"ltr\"] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=\"rtl\"] .ck.ck-responsive-form>.ck-button:nth-last-child(1),[dir=\"rtl\"] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=\"rtl\"] .ck.ck-responsive-form>.ck-button:nth-last-child(1):last-of-type,[dir=\"rtl\"] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=\"ltr\"] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{padding-left:var(--ck-search-field-view-horizontal-spacing)}[dir=\"rtl\"] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{min-width:auto;min-height:auto;background:none;opacity:.5;padding:0}[dir=\"ltr\"] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=\"rtl\"] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=\"ltr\"] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty){padding-right:var(--ck-search-field-view-horizontal-spacing)}[dir=\"rtl\"] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{width:100%;padding:var(--ck-spacing-medium) var(--ck-spacing-large)}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:bold}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{width:var(--ck-toolbar-spinner-size);height:var(--ck-toolbar-spinner-size);animation:1.5s infinite ck-spinner-rotate linear}@media (prefers-reduced-motion: reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{width:var(--ck-toolbar-spinner-size);height:var(--ck-toolbar-spinner-size);border-radius:50%;border:2px solid var(--ck-color-text);border-top-color:transparent}@keyframes ck-spinner-rotate{to{transform:rotate(360deg)}}.ck-textarea{overflow-x:hidden}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar .ck.ck-toolbar__separator{height:var(--ck-icon-size);width:1px;min-width:1px;background:var(--ck-color-toolbar-border);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>*:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>*:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0;}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{width:100%;margin:0;border-radius:0}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0;}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}[dir=\"rtl\"] .ck.ck-toolbar>.ck-toolbar__items>.ck,.ck.ck-toolbar[dir=\"rtl\"]>.ck-toolbar__items>.ck{margin-right:0}[dir=\"rtl\"] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,.ck.ck-toolbar[dir=\"rtl\"]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}[dir=\"rtl\"] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child,.ck.ck-toolbar[dir=\"rtl\"]>.ck-toolbar__items>.ck:last-child{margin-left:0}[dir=\"rtl\"] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,.ck.ck-toolbar.ck-toolbar_compact[dir=\"rtl\"]>.ck-toolbar__items>.ck:first-child{border-top-left-radius:0;border-bottom-left-radius:0}[dir=\"rtl\"] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,.ck.ck-toolbar.ck-toolbar_compact[dir=\"rtl\"]>.ck-toolbar__items>.ck:last-child{border-top-right-radius:0;border-bottom-right-radius:0}[dir=\"rtl\"] .ck.ck-toolbar>.ck.ck-toolbar__separator,.ck.ck-toolbar[dir=\"rtl\"]>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}[dir=\"rtl\"] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar.ck-toolbar_grouping[dir=\"rtl\"]>.ck-toolbar__items:not(:empty):not(:only-child){margin-left:var(--ck-spacing-small)}[dir=\"ltr\"] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child,.ck.ck-toolbar[dir=\"ltr\"]>.ck-toolbar__items>.ck:last-child{margin-right:0}[dir=\"ltr\"] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,.ck.ck-toolbar.ck-toolbar_compact[dir=\"ltr\"]>.ck-toolbar__items>.ck:first-child{border-top-right-radius:0;border-bottom-right-radius:0}[dir=\"ltr\"] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,.ck.ck-toolbar.ck-toolbar_compact[dir=\"ltr\"]>.ck-toolbar__items>.ck:last-child{border-top-left-radius:0;border-bottom-left-radius:0}[dir=\"ltr\"] .ck.ck-toolbar>.ck.ck-toolbar__separator,.ck.ck-toolbar[dir=\"ltr\"]>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}[dir=\"ltr\"] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar.ck-toolbar_grouping[dir=\"ltr\"]>.ck-toolbar__items:not(:empty):not(:only-child){margin-right:var(--ck-spacing-small)}.ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);box-shadow:none}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text)}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{white-space:break-spaces;display:inline-block;padding:var(--ck-tooltip-text-padding) 0;max-width:200px}.ck.ck-balloon-panel.ck-tooltip::before{display:none}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:1px solid var(--ck-color-base-border);border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar{border:0;border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{bottom:calc(-.5 * var(--ck-clipboard-drop-target-dot-height));top:calc(-.5 * var(--ck-clipboard-drop-target-dot-height));border:1px solid var(--ck-clipboard-drop-target-color);background:var(--ck-clipboard-drop-target-color);margin-left:-1px;}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span::after{content:'';width:0;height:0;display:block;position:absolute;left:50%;top:calc(-.5 * var(--ck-clipboard-drop-target-dot-height));transform:translateX(-50%);border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));border-style:solid}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:0.6;outline:none !important}.ck.ck-clipboard-drop-target-line{height:0;border:1px solid var(--ck-clipboard-drop-target-color);background:var(--ck-clipboard-drop-target-color);margin-top:-1px}.ck.ck-clipboard-drop-target-line::before{content:'';position:absolute;top:calc(-.5 * var(--ck-clipboard-drop-target-dot-width));width:0;height:0;border-style:solid}[dir=\"ltr\"] .ck.ck-clipboard-drop-target-line::before{left:-1px;border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color)}[dir=\"rtl\"] .ck.ck-clipboard-drop-target-line::before{right:-1px;border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent}:root{--ck-color-code-block-label-background:hsl(0, 0%, 46%)}.ck.ck-editor__editable pre[data-language]::after{top:-1px;right:10px;background:var(--ck-color-code-block-label-background);font-size:10px;font-family:var(--ck-font-face);line-height:16px;padding:var(--ck-spacing-tiny) var(--ck-spacing-medium);color:hsl(0, 0%, 100%);white-space:nowrap}.ck.ck-code-block-dropdown .ck-dropdown__panel{max-height:250px;overflow-y:auto;overflow-x:hidden}@media (forced-colors: active){.ck.ck-placeholder,.ck .ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck.ck-placeholder::before,.ck .ck-placeholder::before{cursor:text}@media (forced-colors: none){.ck.ck-placeholder::before,.ck .ck-placeholder::before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors: active){.ck.ck-placeholder::before,.ck .ck-placeholder::before{font-style:italic;margin-left:1px}}.ck.ck-find-and-replace-form{width:400px;}.ck.ck-find-and-replace-form:focus{outline:none}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs,.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions{flex:1 1 auto;flex-direction:row;flex-wrap:wrap;align-items:center;align-content:stretch;padding:var(--ck-spacing-large);margin:0}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs>.ck-button,.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions>.ck-button{flex:0 0 auto}[dir=\"ltr\"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs>*+*,[dir=\"ltr\"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__actions>*+*{margin-left:var(--ck-spacing-standard)}[dir=\"rtl\"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs>*+*,[dir=\"rtl\"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__actions>*+*{margin-right:var(--ck-spacing-standard)}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-labeled-field-view,.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions .ck-labeled-field-view{flex:1 1 auto}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-labeled-field-view .ck-input,.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions .ck-labeled-field-view .ck-input{width:100%;min-width:50px}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs{align-items:flex-start}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs>.ck-button-prev>.ck-icon{transform:rotate(90deg)}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs>.ck-button-next>.ck-icon{transform:rotate(-90deg)}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-results-counter{top:50%;transform:translateY(-50%)}[dir=\"ltr\"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-results-counter{right:var(--ck-spacing-standard)}[dir=\"rtl\"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-results-counter{left:var(--ck-spacing-standard)}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-results-counter{color:var(--ck-color-base-border)}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs>.ck-labeled-field-replace{flex:0 0 100%;padding-top:var(--ck-spacing-standard)}[dir=\"ltr\"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs>.ck-labeled-field-replace{margin-left:0}[dir=\"rtl\"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs>.ck-labeled-field-replace{margin-right:0}.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions{flex-wrap:wrap;justify-content:flex-end;margin-top:calc( -1 * var(--ck-spacing-large) )}.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions>.ck-button-find{font-weight:bold;}.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions>.ck-button-find .ck-button__label{padding-left:var(--ck-spacing-large);padding-right:var(--ck-spacing-large)}.ck.ck-find-and-replace-form .ck-switchbutton{width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}@media screen and (max-width: 600px){.ck.ck-find-and-replace-form{width:300px;max-width:100%;}.ck.ck-find-and-replace-form.ck-find-and-replace-form__input{flex-wrap:wrap}.ck.ck-find-and-replace-form.ck-find-and-replace-form__input .ck-labeled-field-view{flex:1 0 auto;width:100%;margin-bottom:var(--ck-spacing-standard)}.ck.ck-find-and-replace-form.ck-find-and-replace-form__input>.ck-button{text-align:center}.ck.ck-find-and-replace-form.ck-find-and-replace-form__input>.ck-button:first-of-type{flex:1 1 auto}[dir=\"ltr\"] .ck.ck-find-and-replace-form.ck-find-and-replace-form__input>.ck-button:first-of-type{margin-left:0}[dir=\"rtl\"] .ck.ck-find-and-replace-form.ck-find-and-replace-form__input>.ck-button:first-of-type{margin-right:0}.ck.ck-find-and-replace-form.ck-find-and-replace-form__input>.ck-button:first-of-type .ck-button__label{width:100%;text-align:center}.ck.ck-find-and-replace-form.ck-find-and-replace-form__actions>:not(.ck-labeled-field-view){flex-wrap:wrap;flex:1 1 auto}.ck.ck-find-and-replace-form.ck-find-and-replace-form__actions>:not(.ck-labeled-field-view)>.ck-button{text-align:center}.ck.ck-find-and-replace-form.ck-find-and-replace-form__actions>:not(.ck-labeled-field-view)>.ck-button:first-of-type{flex:1 1 auto}[dir=\"ltr\"] .ck.ck-find-and-replace-form.ck-find-and-replace-form__actions>:not(.ck-labeled-field-view)>.ck-button:first-of-type{margin-left:0}[dir=\"rtl\"] .ck.ck-find-and-replace-form.ck-find-and-replace-form__actions>:not(.ck-labeled-field-view)>.ck-button:first-of-type{margin-right:0}.ck.ck-find-and-replace-form.ck-find-and-replace-form__actions>:not(.ck-labeled-field-view)>.ck-button .ck-button__label{width:100%;text-align:center}}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}:root{--ck-html-embed-content-width:calc(100% - 1.5 * var(--ck-icon-size));--ck-html-embed-source-height:10em;--ck-html-embed-unfocused-outline-width:1px;--ck-html-embed-content-min-height:calc(var(--ck-icon-size) + var(--ck-spacing-standard));--ck-html-embed-source-disabled-background:var(--ck-color-base-foreground);--ck-html-embed-source-disabled-color:hsl(0deg 0% 45%)}.ck-widget.raw-html-embed{font-size:var(--ck-font-size-base);background-color:var(--ck-color-base-foreground)}.ck-widget.raw-html-embed:not(.ck-widget_selected):not(:hover){outline:var(--ck-html-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border)}.ck-widget.raw-html-embed[dir=\"ltr\"]{text-align:left}.ck-widget.raw-html-embed[dir=\"rtl\"]{text-align:right}.ck-widget.raw-html-embed::before{content:attr(data-html-embed-label);top:calc(-1 * var(--ck-html-embed-unfocused-outline-width));left:var(--ck-spacing-standard);background:hsl(0deg 0% 60%);transition:background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);padding:calc(var(--ck-spacing-tiny) + var(--ck-html-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius);color:var(--ck-color-base-background);font-size:var(--ck-font-size-tiny);font-family:var(--ck-font-face)}.ck-widget.raw-html-embed[dir=\"rtl\"]::before{left:auto;right:var(--ck-spacing-standard)}.ck-widget.raw-html-embed[dir=\"ltr\"] .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before{margin-left:50px}.ck.ck-editor__editable.ck-blurred .ck-widget.raw-html-embed.ck-widget_selected::before{top:0px;padding:var(--ck-spacing-tiny) var(--ck-spacing-small)}.ck.ck-editor__editable:not(.ck-blurred) .ck-widget.raw-html-embed.ck-widget_selected::before{top:0;padding:var(--ck-spacing-tiny) var(--ck-spacing-small);background:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck-widget.raw-html-embed:not(.ck-widget_selected):hover::before{top:0px;padding:var(--ck-spacing-tiny) var(--ck-spacing-small)}.ck-widget.raw-html-embed .raw-html-embed__content-wrapper{padding:var(--ck-spacing-standard)}.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper{top:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper .ck-button.raw-html-embed__save-button{color:var(--ck-color-button-save)}.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper .ck-button.raw-html-embed__cancel-button{color:var(--ck-color-button-cancel)}.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper .ck-button:not(:first-child){margin-top:var(--ck-spacing-small)}.ck-widget.raw-html-embed[dir=\"rtl\"] .raw-html-embed__buttons-wrapper{left:var(--ck-spacing-standard);right:auto}.ck-widget.raw-html-embed .raw-html-embed__source{box-sizing:border-box;height:var(--ck-html-embed-source-height);width:var(--ck-html-embed-content-width);resize:none;min-width:0;padding:var(--ck-spacing-standard);font-family:monospace;tab-size:4;white-space:pre-wrap;font-size:var(--ck-font-size-base);text-align:left;direction:ltr}.ck-widget.raw-html-embed .raw-html-embed__source[disabled]{background:var(--ck-html-embed-source-disabled-background);color:var(--ck-html-embed-source-disabled-color);-webkit-text-fill-color:var(--ck-html-embed-source-disabled-color);opacity:1}.ck-widget.raw-html-embed .raw-html-embed__preview{min-height:var(--ck-html-embed-content-min-height);width:var(--ck-html-embed-content-width);}.ck-editor__editable:not(.ck-read-only) .ck-widget.raw-html-embed .raw-html-embed__preview{pointer-events:none}.ck-widget.raw-html-embed .raw-html-embed__preview-content{box-sizing:border-box;background-color:var(--ck-color-base-foreground)}.ck-widget.raw-html-embed .raw-html-embed__preview-content>*{margin-left:auto;margin-right:auto}.ck-widget.raw-html-embed .raw-html-embed__preview-placeholder{color:var(--ck-html-embed-source-disabled-color)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;width:100%}[dir=\"ltr\"] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=\"rtl\"] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width);padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}:root{--ck-color-image-upload-icon:hsl(0, 0%, 100%);--ck-color-image-upload-icon-background:hsl(120, 100%, 27%);--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px, 100% - 50px, 1px)}.ck-image-upload-complete-icon{opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show, ck-upload-complete-icon-hide;animation-fill-mode:forwards, forwards;animation-duration:500ms, 500ms;font-size:calc(1px * var(--ck-image-upload-icon-size));animation-delay:0ms, 3000ms;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));}.ck-image-upload-complete-icon::after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:500ms;animation-delay:500ms;animation-fill-mode:forwards;box-sizing:border-box}@media (prefers-reduced-motion: reduce){.ck-image-upload-complete-icon{animation-duration:0ms}.ck-image-upload-complete-icon::after{animation:none;opacity:1;width:0.3em;height:0.45em}}@keyframes ck-upload-complete-icon-show{from{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{from{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:0.3em;height:0}100%{opacity:1;width:0.3em;height:0.45em}}:root{--ck-color-upload-placeholder-loader:hsl(0, 0%, 70%);--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-image-upload-placeholder.image-inline{width:calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) )}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader::before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate( 360deg )}}.ck.ck-editor__editable .image.ck-appear,.ck.ck-editor__editable .image-inline.ck-appear{animation:fadeIn 700ms}@media (prefers-reduced-motion: reduce){.ck.ck-editor__editable .image.ck-appear,.ck.ck-editor__editable .image-inline.ck-appear{opacity:1;animation:none}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width 100ms}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.ck .ck-link_selected{background:var(--ck-color-link-selected-background);}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{height:100%;border-right:1px solid var(--ck-color-base-text);margin-right:-1px;outline:solid 1px hsla(0, 0%, 100%, .5)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=\"ltr\"] .ck.ck-link-actions .ck-button:not(:first-child){margin-left:var(--ck-spacing-standard)}[dir=\"rtl\"] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width: 600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}[dir=\"ltr\"] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=\"rtl\"] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-width)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{padding:var(--ck-spacing-standard);margin:0;width:50%;border-radius:0}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=\"ltr\"] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=\"rtl\"] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=\"rtl\"] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:0 var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px, 100% - 50px, 1px)}.ck.ck-editor__editable figure.image>a::after,.ck.ck-editor__editable a span.image-inline::after{content:\"\";top:min(var(--ck-spacing-medium), 6%);right:min(var(--ck-spacing-medium), 6%);background-color:hsla(0, 0%, 0%, .4);background-image:url(\"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+\");background-size:14px;background-repeat:no-repeat;background-position:center;border-radius:100%;overflow:hidden;width:calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));height:calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size))}.ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat( 4, auto )}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;padding-left:0;padding-right:0;margin-bottom:calc(-1 * var(--ck-spacing-tiny))}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{box-shadow:none;border-color:transparent;background:none}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{grid-template-columns:repeat( 3, auto );row-gap:var(--ck-spacing-medium);column-gap:var(--ck-spacing-medium);padding:var(--ck-spacing-large)}.ck.ck-list-styles-list .ck-button{width:var(--ck-list-style-button-size);height:var(--ck-list-style-button-size);padding:0;margin:0;box-sizing:content-box}.ck.ck-list-styles-list .ck-button .ck-icon{width:var(--ck-list-style-button-size);height:var(--ck-list-style-button-size)}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:hsl(0, 0%, 46%);--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc( 3 * var(--ck-spacing-standard) );background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:center;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*=\"open.spotify.com\"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*=\"google.com/maps\"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*=\"goo.gl/maps\"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*=\"maps.google.com\"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*=\"maps.app.goo.gl\"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+)}.ck-media__wrapper[data-oembed-url*=\"facebook.com\"] .ck-media__placeholder{background:hsl(220, 46%, 48%)}.ck-media__wrapper[data-oembed-url*=\"facebook.com\"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+)}.ck-media__wrapper[data-oembed-url*=\"facebook.com\"] .ck-media__placeholder .ck-media__placeholder__url__text{color:hsl(220, 100%, 90%)}.ck-media__wrapper[data-oembed-url*=\"facebook.com\"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:hsl(0, 0%, 100%)}.ck-media__wrapper[data-oembed-url*=\"instagram.com\"] .ck-media__placeholder{background:linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%))}.ck-media__wrapper[data-oembed-url*=\"instagram.com\"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*=\"instagram.com\"] .ck-media__placeholder .ck-media__placeholder__url__text{color:hsl(302, 100%, 94%)}.ck-media__wrapper[data-oembed-url*=\"instagram.com\"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:hsl(0, 0%, 100%)}.ck-media__wrapper[data-oembed-url*=\"twitter.com\"] .ck.ck-media__placeholder{background:linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) )}.ck-media__wrapper[data-oembed-url*=\"twitter.com\"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+)}.ck-media__wrapper[data-oembed-url*=\"twitter.com\"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:hsl(201, 100%, 86%)}.ck-media__wrapper[data-oembed-url*=\"twitter.com\"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:hsl(0, 0%, 100%)}:root{--ck-color-mention-background:hsla(341, 100%, 30%, 0.1);--ck-color-mention-text:hsl(341, 100%, 30%)}.ck-content .mention{background:var(--ck-color-mention-background);color:var(--ck-color-mention-text)}:root{--ck-color-restricted-editing-exception-background:hsla(31, 100%, 65%, .2);--ck-color-restricted-editing-exception-hover-background:hsla(31, 100%, 65%, .35);--ck-color-restricted-editing-exception-brackets:hsla(31, 100%, 40%, .4);--ck-color-restricted-editing-selected-exception-background:hsla(31, 100%, 65%, .5);--ck-color-restricted-editing-selected-exception-brackets:hsla(31, 100%, 40%, .6)}.ck-editor__editable .restricted-editing-exception{transition:.2s ease-in-out background;background-color:var(--ck-color-restricted-editing-exception-background);border:1px solid;border-image:linear-gradient(\r\n\t\tto right,\r\n\t\tvar(--ck-color-restricted-editing-exception-brackets) 0%,\r\n\t\tvar(--ck-color-restricted-editing-exception-brackets) 5px,\r\n\t\thsla(0, 0%, 0%, 0) 6px,\r\n\t\thsla(0, 0%, 0%, 0) calc(100% - 6px),\r\n\t\tvar(--ck-color-restricted-editing-exception-brackets) calc(100% - 5px),\r\n\t\tvar(--ck-color-restricted-editing-exception-brackets) 100%\r\n\t) 1}@media (prefers-reduced-motion: reduce){.ck-editor__editable .restricted-editing-exception{transition:none}}.ck-editor__editable .restricted-editing-exception.restricted-editing-exception_selected{background-color:var(--ck-color-restricted-editing-selected-exception-background);border-image:linear-gradient(\r\n\t\t\tto right,\r\n\t\t\tvar(--ck-color-restricted-editing-selected-exception-brackets) 0%,\r\n\t\t\tvar(--ck-color-restricted-editing-selected-exception-brackets) 5px,\r\n\t\t\tvar(--ck-color-restricted-editing-selected-exception-brackets) calc(100% - 5px),\r\n\t\t\tvar(--ck-color-restricted-editing-selected-exception-brackets) 100%\r\n\t\t) 1}.ck-editor__editable .restricted-editing-exception.restricted-editing-exception_collapsed{padding-left:1ch}.ck-restricted-editing_mode_restricted{cursor:default;}.ck-restricted-editing_mode_restricted *{cursor:default}.ck-restricted-editing_mode_restricted .restricted-editing-exception{cursor:text}.ck-restricted-editing_mode_restricted .restricted-editing-exception *{cursor:text}.ck-restricted-editing_mode_restricted .restricted-editing-exception:hover{background:var(--ck-color-restricted-editing-exception-hover-background)}:root{--ck-character-grid-tile-size:24px}.ck.ck-character-grid{overflow-y:auto;overflow-x:hidden}.ck.ck-character-grid .ck-character-grid__tiles{grid-template-columns:repeat(auto-fill, minmax(var(--ck-character-grid-tile-size), 1fr));margin:var(--ck-spacing-standard) var(--ck-spacing-large);grid-gap:var(--ck-spacing-standard)}.ck.ck-character-grid .ck-character-grid__tile{width:var(--ck-character-grid-tile-size);height:var(--ck-character-grid-tile-size);min-width:var(--ck-character-grid-tile-size);min-height:var(--ck-character-grid-tile-size);font-size:1.5em;padding:0;transition:.2s ease box-shadow;border:0}@media (prefers-reduced-motion: reduce){.ck.ck-character-grid .ck-character-grid__tile{transition:none}}.ck.ck-character-grid .ck-character-grid__tile:focus:not(.ck-disabled),.ck.ck-character-grid .ck-character-grid__tile:hover:not(.ck-disabled){border:0;box-shadow:inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border)}.ck.ck-character-grid .ck-character-grid__tile .ck-button__label{line-height:var(--ck-character-grid-tile-size);width:100%;text-align:center}.ck.ck-character-info{padding:var(--ck-spacing-small) var(--ck-spacing-large);border-top:1px solid var(--ck-color-base-border)}.ck.ck-character-info>*{text-transform:uppercase;font-size:var(--ck-font-size-small)}.ck.ck-character-info .ck-character-info__name{max-width:280px;text-overflow:ellipsis;overflow:hidden}.ck.ck-character-info .ck-character-info__code{opacity:.6}.ck.ck-special-characters-navigation>.ck-label{max-width:160px;text-overflow:ellipsis;overflow:hidden}.ck.ck-special-characters-navigation>.ck-dropdown .ck-dropdown__panel{max-height:250px;overflow-y:auto;overflow-x:hidden}@media screen and (max-width: 600px){.ck.ck-special-characters-navigation{max-width:190px}.ck.ck-special-characters-navigation>.ck-form__header__label{text-overflow:ellipsis;overflow:hidden}}.ck.ck-dropdown.ck-style-dropdown.ck-style-dropdown_multiple-active>.ck-button>.ck-button__label{font-style:italic}:root{--ck-style-panel-button-width:120px;--ck-style-panel-button-height:80px;--ck-style-panel-button-label-background:hsl(0, 0%, 94.1%);--ck-style-panel-button-hover-label-background:hsl(0, 0%, 92.1%);--ck-style-panel-button-hover-border-color:hsl(0, 0%, 70%)}.ck.ck-style-panel .ck-style-grid{row-gap:var(--ck-spacing-large);column-gap:var(--ck-spacing-large)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button{--ck-color-button-default-hover-background:var(--ck-color-base-background);--ck-color-button-default-active-background:var(--ck-color-base-background);padding:0;width:var(--ck-style-panel-button-width);height:var(--ck-style-panel-button-height);}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-button__label{height:22px;line-height:22px;width:100%;padding:0 var(--ck-spacing-medium);overflow:hidden;text-overflow:ellipsis;flex-shrink:0}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-style-grid__button__preview{width:100%;overflow:hidden;opacity:.9;padding:var(--ck-spacing-medium);background:var(--ck-color-base-background);border:2px solid var(--ck-color-base-background)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled{--ck-color-button-default-disabled-background:var(--ck-color-base-foreground);}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled:not(:focus){border-color:var(--ck-style-panel-button-label-background)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled .ck-style-grid__button__preview{opacity:.4;border-color:var(--ck-color-base-foreground);filter:saturate(.3)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on{border-color:var(--ck-color-base-active)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on .ck-button__label{box-shadow:0 -1px 0 var(--ck-color-base-active);z-index:1;}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on:hover{border-color:var(--ck-color-base-active-focus)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(.ck-on) .ck-button__label{background:var(--ck-style-panel-button-label-background)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(.ck-on):hover .ck-button__label{background:var(--ck-style-panel-button-hover-label-background)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:hover:not(.ck-disabled):not(.ck-on){border-color:var(--ck-style-panel-button-hover-border-color)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:hover:not(.ck-disabled):not(.ck-on) .ck-style-grid__button__preview{opacity:1}.ck.ck-style-panel .ck-style-panel__style-group>.ck-label{margin:var(--ck-spacing-large) 0}.ck.ck-style-panel .ck-style-panel__style-group:first-child>.ck-label{margin-top:0}:root{--ck-style-panel-max-height:470px}.ck.ck-style-panel{padding:var(--ck-spacing-large);overflow-y:auto;max-height:var(--ck-style-panel-max-height)}[dir=\"ltr\"] .ck.ck-input-color>.ck.ck-input-text{border-top-right-radius:0;border-bottom-right-radius:0}[dir=\"rtl\"] .ck.ck-input-color>.ck.ck-input-text{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=\"ltr\"] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-top-left-radius:0;border-bottom-left-radius:0}[dir=\"ltr\"] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=\"rtl\"] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-top-right-radius:0;border-bottom-right-radius:0}[dir=\"rtl\"] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{width:20px;height:20px;border:1px solid var(--ck-color-input-border)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{top:-30%;left:50%;height:150%;width:8%;background:hsl(0, 100%, 50%);border-radius:2px;transform:rotate(45deg);transform-origin:50%}.ck.ck-input-color .ck.ck-input-color__remove-color{width:100%;padding:calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=\"ltr\"] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=\"rtl\"] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=\"rtl\"] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:0;margin-left:var(--ck-spacing-standard)}.ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0;}[dir=\"ltr\"] .ck.ck-form__row>*:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=\"rtl\"] .ck.ck-form__row>*:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{width:100%;min-width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{width:calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{min-width:var(--ck-insert-table-dropdown-box-width);min-height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-color-base-border);border-radius:1px;outline:none;transition:none}@media (prefers-reduced-motion: reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-color-focus-border);background:var(--ck-color-focus-outer-shadow)}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}:root{--ck-color-selector-focused-cell-background:hsla(212, 90%, 80%, .3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);outline:1px solid var(--ck-color-focus-border);outline-offset:-1px;}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{width:80px;min-width:80px;max-width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);padding:var(--ck-spacing-small) var(--ck-spacing-medium);min-width:var(--ck-table-properties-min-error-width);text-align:center;animation:ck-table-form-labeled-view-status-appear .15s ease both;}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status::after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);border-style:solid}@media (prefers-reduced-motion: reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}100%{opacity:1}}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}:root{--ck-table-selected-cell-background:hsla(208, 90%, 80%, .3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{position:relative;caret-color:transparent;outline:unset;box-shadow:unset;}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{content:'';pointer-events:none;background-color:var(--ck-table-selected-cell-background);position:absolute;top:0;left:0;right:0;bottom:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:hsl(0, 0%, 87%);--ck-color-widget-hover-border:hsl(43, 100%, 62%);--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion: reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent;}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{box-shadow:var(--ck-inner-shadow), 0 0}@media (forced-colors: none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused:not(td,th),.ck .ck-editor__nested-editable:focus:not(td,th){outline:none;border:var(--ck-focus-ring)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),\r\n\t\t\tvisibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),\r\n\t\t\topacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness));top:0}@media (prefers-reduced-motion: reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color);}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity 300ms var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion: reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-focus-border);}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=\"rtl\"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc( ( var(--ck-resizer-size) / -2 ) - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{width:var(--ck-resizer-size);height:var(--ck-resizer-size);background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);border-radius:var(--ck-resizer-border-radius)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{top:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{top:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{width:var(--ck-widget-type-around-button-size);height:var(--ck-widget-type-around-button-size);background:var(--ck-color-widget-type-around-button);border-radius:100px;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);opacity:0;pointer-events:none}@media (prefers-reduced-motion: reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{width:10px;height:8px;transform:translate(-50%,-50%);transition:transform .5s ease;margin-top:1px}@media (prefers-reduced-motion: reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite;}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion: reduce){.ck .ck-widget .ck-widget__type-around__button:hover{animation:none}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button::after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover::after{width:calc(var(--ck-widget-type-around-button-size) - 2px);height:calc(var(--ck-widget-type-around-button-size) - 2px);border-radius:100px;background:linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{pointer-events:none;height:1px;animation:ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;outline:solid 1px hsla(0, 0%, 100%, .5);background:var(--ck-color-base-text)}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle{opacity:0}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer{opacity:0}.ck[dir=\"rtl\"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:hsl(0,0%,60%)}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,100%{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,100%{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha))}100%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}100%{opacity:1}}.ck-content code{background-color:hsla(0, 0%, 78%, 0.3);padding:.15em;border-radius:2px}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0, 0%, 78%, 0.5)}.ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:solid 5px hsl(0, 0%, 80%)}.ck-content[dir=\"rtl\"] blockquote{border-left:0;border-right:solid 5px hsl(0, 0%, 80%)}:root{--ck-image-processing-highlight-color:hsl(220, 10%, 98%);--ck-image-processing-background-color:hsl(220, 10%, 90%)}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{content:'';position:absolute;top:0;left:0;z-index:1;height:100%;width:100%;background:linear-gradient(\r\n\t\t\t\t\t90deg,\r\n\t\t\t\t\tvar(--ck-image-processing-background-color),\r\n\t\t\t\t\tvar(--ck-image-processing-highlight-color),\r\n\t\t\t\t\tvar(--ck-image-processing-background-color)\r\n\t\t\t\t);background-size:200% 100%;animation:ck-image-processing-animation 2s linear infinite}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}100%{background-position:-200% 0}}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;position:relative;pointer-events:none}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle{display:none}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{position:absolute;pointer-events:none}.ck-content pre{padding:1em;color:hsl(0, 0%, 20.8%);background:hsla(0, 0%, 78%, 0.3);border:1px solid hsl(0, 0%, 77%);border-radius:2px;text-align:left;direction:ltr;tab-size:4;white-space:pre-wrap;font-style:normal;min-width:200px}.ck-content pre code{background:unset;padding:0;border-radius:0}.ck.ck-editor__editable pre{position:relative}.ck.ck-editor__editable pre[data-language]::after{content:attr(data-language);position:absolute}.ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-menu-bar{border:none;border-bottom:1px solid var(--ck-color-toolbar-border)}.ck.ck-placeholder,.ck .ck-placeholder{position:relative}.ck.ck-placeholder::before,.ck .ck-placeholder::before{position:absolute;left:0;right:0;content:attr(data-placeholder);pointer-events:none}.ck.ck-read-only .ck-placeholder::before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}.ck-find-result{background:var(--ck-color-highlight-background);color:var(--ck-color-text)}.ck-find-result_selected{background:hsl(29, 100%, 60%)}.ck.ck-find-and-replace-form{max-width:100%}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs,.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions{display:flex;}.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs.ck-find-and-replace-form__inputs .ck-results-counter,.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions.ck-find-and-replace-form__inputs .ck-results-counter{position:absolute}.ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}.ck.ck-heading_heading1 .ck-button__label{font-size:20px}.ck.ck-heading_heading2 .ck-button__label{font-size:17px}.ck.ck-heading_heading3 .ck-button__label{font-size:14px}.ck[class*=\"ck-heading_heading\"]{font-weight:bold}:root{--ck-highlight-marker-yellow:hsl(60, 97%, 73%);--ck-highlight-marker-green:hsl(120, 93%, 68%);--ck-highlight-marker-pink:hsl(345, 96%, 73%);--ck-highlight-marker-blue:hsl(201, 97%, 72%);--ck-highlight-pen-red:hsl(0, 85%, 49%);--ck-highlight-pen-green:hsl(112, 100%, 27%)}.ck-content .marker-yellow{background-color:var(--ck-highlight-marker-yellow)}.ck-content .marker-green{background-color:var(--ck-highlight-marker-green)}.ck-content .marker-pink{background-color:var(--ck-highlight-marker-pink)}.ck-content .marker-blue{background-color:var(--ck-highlight-marker-blue)}.ck-content .pen-red{color:var(--ck-highlight-pen-red);background-color:transparent}.ck-content .pen-green{color:var(--ck-highlight-pen-green);background-color:transparent}.ck-editor__editable .ck-horizontal-line{display:flow-root}.ck-content hr{margin:15px 0;height:4px;background:hsl(0, 0%, 87%);border:0}.ck-widget.raw-html-embed{margin:0.9em auto;position:relative;display:flow-root;min-width:15em;font-style:normal;}.ck-widget.raw-html-embed::before{position:absolute;z-index:1}.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper{position:absolute;display:flex;flex-direction:column}.ck-widget.raw-html-embed .raw-html-embed__preview{position:relative;overflow:hidden;display:flex}.ck-widget.raw-html-embed .raw-html-embed__preview-content{width:100%;position:relative;margin:auto;display:table;border-collapse:separate;border-spacing:7px}.ck-widget.raw-html-embed .raw-html-embed__preview-placeholder{position:absolute;left:0;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}:root{--ck-html-object-embed-unfocused-outline-width:1px}.ck-widget.html-object-embed{font-size:var(--ck-font-size-base);background-color:var(--ck-color-base-foreground);padding:var(--ck-spacing-small);padding-top:calc(var(--ck-font-size-tiny) + var(--ck-spacing-large));min-width:calc(76px + var(--ck-spacing-standard))}.ck-widget.html-object-embed:not(.ck-widget_selected):not(:hover){outline:var(--ck-html-object-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border)}.ck-widget.html-object-embed::before{font-weight:normal;font-style:normal;position:absolute;content:attr(data-html-object-embed-label);top:0;left:var(--ck-spacing-standard);background:hsl(0deg 0% 60%);transition:background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);padding:calc(var(--ck-spacing-tiny) + var(--ck-html-object-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius);color:var(--ck-color-base-background);font-size:var(--ck-font-size-tiny);font-family:var(--ck-font-face)}.ck-widget.html-object-embed .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before{margin-left:50px}.ck-widget.html-object-embed .html-object-embed__content{pointer-events:none}div.ck-widget.html-object-embed{margin:1em auto}span.ck-widget.html-object-embed{display:inline-block}:root{--ck-color-image-caption-background:hsl(0, 0%, 97%);--ck-color-image-caption-text:hsl(0, 0%, 20%);--ck-color-image-caption-highlighted-background:hsl(52deg 100% 50%)}.ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:var(--ck-color-image-caption-text);background-color:var(--ck-color-image-caption-background);padding:.6em;font-size:.75em;outline-offset:-1px;}@media (forced-colors: active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors: none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion: reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}100%{background-color:var(--ck-color-image-caption-background)}}.ck.ck-image-insert-url{width:400px;padding:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2, 1fr)}.ck-content img.image_resized{height:auto}.ck-content .image.image_resized{max-width:100%;display:block;box-sizing:border-box}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=\"ltr\"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=\"rtl\"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}.ck.ck-image-custom-resize-form{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width: 600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}:root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing) / 2)}.ck-content .image.image-style-block-align-left,.ck-content .image.image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image.image-style-align-left,.ck-content .image.image-style-align-right{clear:none}.ck-content .image.image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image.image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image.image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image.image-style-block-align-right{margin-right:0;margin-left:auto}.ck-content .image.image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content p+.image.image-style-align-left,.ck-content p+.image.image-style-align-right,.ck-content p+.image.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-top:var(--ck-inline-image-style-spacing);margin-bottom:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled)::after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled)::after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled)::after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled)::after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover)::after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover)::after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}.ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width: 600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}.ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{position:absolute;top:0;left:0}.ck-image-upload-complete-icon{display:block;position:absolute;top:min(var(--ck-spacing-medium), 6%);right:min(var(--ck-spacing-medium), 6%);border-radius:50%;z-index:1}.ck-image-upload-complete-icon::after{content:\"\";position:absolute}.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader::before{content:'';position:relative}.ck-content .image{display:table;clear:both;text-align:center;margin:0.9em auto;min-width:50px}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%;height:auto}.ck-content .image-inline{display:inline-flex;max-width:100%;align-items:flex-start;}.ck-content .image-inline picture{display:flex}.ck-content .image-inline picture,.ck-content .image-inline img{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder::before{padding-left:inherit;padding-right:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ck.ck-editor__editable .image{z-index:1;}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1;}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2;}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}.ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}.ck.ck-editor__editable figure.image>a::after,.ck.ck-editor__editable a span.image-inline::after{display:block;position:absolute}.ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width: 600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-form{display:flex;align-items:flex-start}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width: 600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block;}.ck.ck-link-form_layout-vertical .ck-button.ck-button-save,.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel{margin-top:var(--ck-spacing-medium)}.ck-editor__editable .ck-list-bogus-paragraph{display:block}.ck.ck-list-styles-list{display:grid}.ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul{list-style-type:square}.ck-content ul ul ul ul{list-style-type:square}:root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{position:relative;margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;display:inline-block;position:relative;width:var(--ck-todo-list-checkmark-size);height:var(--ck-todo-list-checkmark-size);vertical-align:middle;border:0;left:-25px;margin-right:-15px;right:0;margin-left:0;}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-right:0;right:-25px;margin-left:-15px}.ck-content .todo-list .todo-list__label>input::before{display:block;position:absolute;box-sizing:border-box;content:'';width:100%;height:100%;border:1px solid hsl(0, 0%, 20%);border-radius:2px;transition:250ms ease-in-out box-shadow}@media (prefers-reduced-motion: reduce){.ck-content .todo-list .todo-list__label>input::before{transition:none}}.ck-content .todo-list .todo-list__label>input::after{display:block;position:absolute;box-sizing:content-box;pointer-events:none;content:'';left:calc( var(--ck-todo-list-checkmark-size) / 3 );top:calc( var(--ck-todo-list-checkmark-size) / 5.3 );width:calc( var(--ck-todo-list-checkmark-size) / 5.3 );height:calc( var(--ck-todo-list-checkmark-size) / 2.6 );border-style:solid;border-color:transparent;border-width:0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;transform:rotate(45deg)}.ck-content .todo-list .todo-list__label>input[checked]::before{background:hsl(126, 64%, 41%);border-color:hsl(126, 64%, 41%)}.ck-content .todo-list .todo-list__label>input[checked]::after{border-color:hsl(0, 0%, 100%)}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover::before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover::before{box-shadow:0 0 0 5px hsla(0, 0%, 0%, 0.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;display:inline-block;position:relative;width:var(--ck-todo-list-checkmark-size);height:var(--ck-todo-list-checkmark-size);vertical-align:middle;border:0;left:-25px;margin-right:-15px;right:0;margin-left:0;}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-right:0;right:-25px;margin-left:-15px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input::before{display:block;position:absolute;box-sizing:border-box;content:'';width:100%;height:100%;border:1px solid hsl(0, 0%, 20%);border-radius:2px;transition:250ms ease-in-out box-shadow}@media (prefers-reduced-motion: reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input::before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input::after{display:block;position:absolute;box-sizing:content-box;pointer-events:none;content:'';left:calc( var(--ck-todo-list-checkmark-size) / 3 );top:calc( var(--ck-todo-list-checkmark-size) / 5.3 );width:calc( var(--ck-todo-list-checkmark-size) / 5.3 );height:calc( var(--ck-todo-list-checkmark-size) / 2.6 );border-style:solid;border-color:transparent;border-width:0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;transform:rotate(45deg)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]::before{background:hsl(126, 64%, 41%);border-color:hsl(126, 64%, 41%)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]::after{border-color:hsl(0, 0%, 100%)}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-content .media{clear:both;margin:0.9em 0;display:block;min-width:15em}.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*=\"twitter.com\"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*=\"google.com/maps\"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*=\"goo.gl/maps\"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*=\"maps.google.com\"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*=\"maps.app.goo.gl\"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*=\"facebook.com\"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*=\"instagram.com\"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>*:not(.ck-media__placeholder){pointer-events:none}.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}.ck-vertical-form .ck-button::after{content:\"\";width:0;position:absolute;right:-1px;top:-1px;bottom:-1px;z-index:1}.ck-vertical-form .ck-button:focus::after{display:none}@media screen and (max-width: 600px){.ck.ck-responsive-form .ck-button::after{content:\"\";width:0;position:absolute;right:-1px;top:-1px;bottom:-1px;z-index:1}.ck.ck-responsive-form .ck-button:focus::after{display:none}}.ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap;width:400px}.ck.ck-media-form .ck-labeled-field-view{display:inline-block;width:100%}.ck.ck-media-form .ck-label{display:none}.ck.ck-media-form .ck-input{width:100%}@media screen and (max-width: 600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}:root{--ck-mention-list-max-height:300px}.ck.ck-mentions{max-height:var(--ck-mention-list-max-height);overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;}.ck.ck-mentions>.ck-list__item{overflow:hidden;flex-shrink:0}:root{--ck-color-minimap-tracker-background:208, 0%, 51%;--ck-color-minimap-iframe-outline:hsl(0deg 0% 75%);--ck-color-minimap-iframe-shadow:hsl(0deg 0% 0% / 11%);--ck-color-minimap-progress-background:hsl(0,0%,40%)}.ck.ck-minimap{position:absolute;user-select:none;background:var(--ck-color-base-background)}.ck.ck-minimap,.ck.ck-minimap iframe{width:100%;height:100%}.ck.ck-minimap iframe{border:0;pointer-events:none;position:relative;outline:1px solid var(--ck-color-minimap-iframe-outline);box-shadow:0 2px 5px var(--ck-color-minimap-iframe-shadow);margin:0}.ck.ck-minimap .ck.ck-minimap__position-tracker{position:absolute;width:100%;top:0;background:hsla( var(--ck-color-minimap-tracker-background), .2 );z-index:1;transition:background 100ms ease-in-out}@media (prefers-reduced-motion: reduce){.ck.ck-minimap .ck.ck-minimap__position-tracker{transition:none}}.ck.ck-minimap .ck.ck-minimap__position-tracker:hover{background:hsla( var(--ck-color-minimap-tracker-background), .3 )}.ck.ck-minimap .ck.ck-minimap__position-tracker.ck-minimap__position-tracker_dragging,.ck.ck-minimap .ck.ck-minimap__position-tracker.ck-minimap__position-tracker_dragging:hover{background:hsla( var(--ck-color-minimap-tracker-background), .4 )}.ck.ck-minimap .ck.ck-minimap__position-tracker.ck-minimap__position-tracker_dragging::after,.ck.ck-minimap .ck.ck-minimap__position-tracker.ck-minimap__position-tracker_dragging:hover::after{opacity:1}.ck.ck-minimap .ck.ck-minimap__position-tracker::after{content:attr(data-progress) \"%\";position:absolute;top:5px;right:5px;background:var(--ck-color-minimap-progress-background);color:var(--ck-color-base-background);border:1px solid var(--ck-color-base-background);padding:2px 4px;font-size:10px;border-radius:3px;opacity:0;transition:opacity 100ms ease-in-out}@media (prefers-reduced-motion: reduce){.ck.ck-minimap .ck.ck-minimap__position-tracker::after{transition:none}}.ck-content .page-break{position:relative;clear:both;padding:5px 0;display:flex;align-items:center;justify-content:center}.ck-content .page-break::after{content:'';position:absolute;border-bottom:2px dashed hsl(0, 0%, 77%);width:100%}.ck-content .page-break__label{position:relative;z-index:1;padding:.3em .6em;display:block;text-transform:uppercase;border:1px solid hsl(0, 0%, 77%);border-radius:2px;font-family:Helvetica, Arial, Tahoma, Verdana, Sans-Serif;font-size:0.75em;font-weight:bold;color:hsl(0, 0%, 20%);background:hsl(0, 0%, 100%);box-shadow:2px 2px 1px hsla(0, 0%, 0%, 0.15);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media print{.ck-content .page-break{padding:0}.ck-content .page-break::after{display:none}.ck-content *:has(+.page-break){margin-bottom:0}}:root{--ck-show-blocks-border-color:hsl(0, 0%, 46%)}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ADDRESS</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ADDRESS</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ADDRESS</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ADDRESS</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ASIDE</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ASIDE</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ASIDE</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ASIDE</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>BLOCKQUOTE</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>BLOCKQUOTE</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>BLOCKQUOTE</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>BLOCKQUOTE</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DETAILS</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DETAILS</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DETAILS</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DETAILS</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget,.ck-widget *){background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget,.ck-widget *){background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DIV</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget,.ck-widget *){background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DIV</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget,.ck-widget *):not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget,.ck-widget *){background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DIV</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget,.ck-widget *){background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DIV</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FOOTER</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FOOTER</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FOOTER</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FOOTER</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H1</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H1</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H1</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H1</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H2</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H2</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H2</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H2</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H3</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H3</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H3</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H3</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H4</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H4</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H4</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H4</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H5</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H5</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H5</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H5</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H6</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H6</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H6</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H6</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>HEADER</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>HEADER</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>HEADER</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>HEADER</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>MAIN</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>MAIN</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>MAIN</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>MAIN</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>NAV</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>NAV</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>NAV</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>NAV</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>PRE</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>PRE</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>PRE</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>PRE</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>OL</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>OL</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>OL</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>OL</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>UL</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>UL</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>UL</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>UL</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>P</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>P</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>P</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>P</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>SECTION</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>SECTION</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>SECTION</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>SECTION</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image,figure.table) figcaption{background-repeat:no-repeat;padding-top:15px;}[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image,figure.table) figcaption{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FIGCAPTION</text></svg>\");background-position:1px 1px}[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image,figure.table) figcaption{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FIGCAPTION</text></svg>\");background-position:calc(100% - 1px) 1px}.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image,figure.table) figcaption:not(.ck-widget_selected):not(.ck-widget:hover){outline:1px dashed var(--ck-show-blocks-border-color)}[dir=\"ltr\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image,figure.table) figcaption{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='3' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FIGCAPTION</text></svg>\");background-position:1px 1px}[dir=\"rtl\"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image,figure.table) figcaption{background-image:url(\"data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px);transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FIGCAPTION</text></svg>\");background-position:calc(100% - 1px) 1px}.ck-source-editing-area{position:relative;overflow:hidden}.ck-source-editing-area::after,.ck-source-editing-area textarea{padding:var(--ck-spacing-large);margin:0;border:1px solid transparent;line-height:var(--ck-line-height-base);font-size:var(--ck-font-size-normal);font-family:monospace;white-space:pre-wrap}.ck-source-editing-area::after{content:attr(data-value) \" \";visibility:hidden;display:block}.ck-source-editing-area textarea{position:absolute;width:100%;height:100%;resize:none;outline:none;overflow:hidden;box-sizing:border-box;border-color:var(--ck-color-base-border);border-radius:0}.ck-rounded-corners .ck-source-editing-area textarea,.ck-source-editing-area textarea.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck-source-editing-area textarea:not([readonly]):focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow), 0 0}.ck.ck-character-grid{max-width:100%}.ck.ck-character-grid .ck-character-grid__tiles{display:grid}.ck.ck-character-info{display:flex;justify-content:space-between}.ck.ck-special-characters>.ck-dialog__content>div{width:350px;max-width:100%;height:100%;display:grid;grid-column-gap:0px;grid-row-gap:0px;grid-template-columns:1fr;grid-template-rows:auto 1fr auto}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-categories{grid-area:1 / 1 / 2 / 2;padding:var(--ck-spacing-medium) var(--ck-spacing-large)}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-categories>.ck-labeled-field-view{padding-top:var(--ck-spacing-standard);width:100%}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-categories>.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);padding:var(--ck-spacing-small) var(--ck-spacing-medium);min-width:var(--ck-table-properties-min-error-width);text-align:center;animation:ck-table-form-labeled-view-status-appear .15s ease both;}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-categories>.ck-labeled-field-view .ck.ck-labeled-field-view__status::after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);border-style:solid}@media (prefers-reduced-motion: reduce){.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-categories>.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-categories>.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-categories>.ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-categories .ck-dropdown{display:block;width:100%}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-categories .ck-dropdown>button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-categories .ck-dropdown>button>span{width:100%}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-grid{grid-area:2 / 1 / 3 / 2;max-height:200px}.ck.ck-special-characters>.ck-dialog__content>div>.ck-character-info{grid-area:3 / 1 / 4 / 2}:root{--ck-style-panel-columns:3}.ck.ck-style-panel .ck-style-grid{display:grid;grid-template-columns:repeat(var(--ck-style-panel-columns),auto);justify-content:start}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button{display:flex;justify-content:space-between;flex-direction:column}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-style-grid__button__preview{display:flex;align-content:center;justify-content:flex-start;align-items:center;flex-grow:1;flex-basis:100%}.ck-content .table{margin:0.9em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double hsl(0, 0%, 70%)}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border:1px solid hsl(0, 0%, 75%)}.ck-content .table table th{font-weight:bold;background:hsla(0, 0%, 0%, 5%)}@media print{.ck-content .table table{height:initial}}.ck-content[dir=\"rtl\"] .table th{text-align:right}.ck-content[dir=\"ltr\"] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}.ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;}.ck.ck-form__row>*:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-save,.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel{justify-content:center}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-input-color{width:100%;display:flex;flex-direction:row-reverse}.ck.ck-input-color>input.ck.ck-input-text{min-width:auto;flex-grow:1}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto;}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{position:relative;overflow:hidden}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{position:absolute;display:block}.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__background-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{flex-wrap:wrap;align-items:center}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{display:flex;flex-direction:column-reverse;align-items:center}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown{flex-grow:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{position:absolute;left:50%;bottom:calc( -1 * var(--ck-table-properties-error-arrow-size) );transform:translate(-50%,100%);z-index:1;}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status::after{content:\"\";position:absolute;top:calc( -1 * var(--ck-table-properties-error-arrow-size) );left:50%;transform:translateX( -50% )}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{flex-wrap:wrap;flex-basis:0;align-content:baseline}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}:root{--ck-color-selector-caption-background:hsl(0, 0%, 97%);--ck-color-selector-caption-text:hsl(0, 0%, 20%);--ck-color-selector-caption-highlighted-background:hsl(52deg 100% 50%)}.ck-content .table>figcaption{display:table-caption;caption-side:top;word-break:break-word;text-align:center;color:var(--ck-color-selector-caption-text);background-color:var(--ck-color-selector-caption-background);padding:.6em;font-size:.75em;outline-offset:-1px;}@media (forced-colors: active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors: none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder::before{padding-left:inherit;padding-right:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}100%{background-color:var(--ck-color-selector-caption-background)}}:root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{position:absolute;top:0;bottom:0;right:var(--ck-table-column-resizer-position-offset);width:var(--ck-table-column-resizer-width);cursor:col-resize;user-select:none;z-index:var(--ck-z-default)}.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);opacity:0.25;top:-999999px;bottom:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}.ck-hidden{display:none !important}:root{--ck-z-default:1;--ck-z-panel:calc( var(--ck-z-default) + 999 );--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none !important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:hsl(0, 0%, 31%);--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:hsl(0, 0%, 100%);--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);box-shadow:none;background:var(--ck-powered-by-background);min-height:unset;z-index:calc( var(--ck-z-panel) - 1 )}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{cursor:pointer;display:flex;align-items:center;opacity:.66;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{font-size:7.5px;letter-spacing:-.2px;padding-left:2px;text-transform:uppercase;font-weight:bold;margin-right:4px;cursor:pointer;line-height:normal;color:var(--ck-powered-by-text-color)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{display:block;cursor:pointer}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0%);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=\"position_inside\"]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=\"position_border\"]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}.ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center}[dir=\"ltr\"] .ck.ck-button,[dir=\"ltr\"] a.ck.ck-button{justify-content:left}[dir=\"rtl\"] .ck.ck-button,[dir=\"rtl\"] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button.ck-switchbutton .ck-button__toggle{display:block}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}.ck.ck-list-item-button{min-height:unset;width:100%;border-radius:0}[dir=\"ltr\"] .ck.ck-list-item-button{text-align:left}[dir=\"rtl\"] .ck.ck-list-item-button{text-align:right}[dir=\"ltr\"] .ck.ck-list-item-button.ck-list-item-button_toggleable{padding-left:var(--ck-spacing-small)}[dir=\"rtl\"] .ck.ck-list-item-button.ck-list-item-button_toggleable{padding-right:var(--ck-spacing-small)}.ck.ck-list-item-button .ck-list-item-button__check-holder{display:inline-flex;width:.9em;height:.9em}[dir=\"ltr\"] .ck.ck-list-item-button .ck-list-item-button__check-holder{margin-right:var(--ck-spacing-small)}[dir=\"rtl\"] .ck.ck-list-item-button .ck-list-item-button__check-holder{margin-left:var(--ck-spacing-small)}.ck.ck-list-item-button .ck-list-item-button__check-icon{height:100%}.ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}.ck.ck-color-grid{display:grid}.color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-top:var(--ck-spacing-tiny);padding-right:var(--ck-spacing-medium)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{display:flex;align-items:center}[dir=\"rtl\"] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color,[dir=\"rtl\"] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel{flex:1}.ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end}.ck.ck-dialog-overlay{user-select:none;overscroll-behavior:none;position:fixed;bottom:0;left:0;right:0;top:0}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{pointer-events:none;animation:none;background:none}.ck.ck-dialog{overscroll-behavior:none;width:fit-content;position:absolute}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;z-index:var(--ck-z-panel);max-width:var(--ck-dropdown-max-width);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{top:100%;bottom:auto}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0px}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0px}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc( var(--ck-z-panel) + 1 )}.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{width:max-content;max-width:var(--ck-toolbar-dropdown-max-width)}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel{position:absolute;max-height:314px;overflow-y:auto;z-index:calc(var(--ck-z-panel) + 1)}.ck.ck-dropdown-menu-list__nested-menu{display:block}.ck.ck-aria-live-announcer{position:absolute;left:-10000px;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}.ck.ck-form__header{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}.ck.ck-icon{vertical-align:middle}.ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}.ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>*:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::before,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::after{content:\"\";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=\"arrow_n\"]::before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=\"arrow_n\"]::after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=\"arrow_s\"]::before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=\"arrow_s\"]::after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}.ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:nth-child(1){z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-panel);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{top:100%;bottom:auto}.ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=\"ltr\"] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=\"rtl\"] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}.ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);vertical-align:initial;font-weight:inherit;line-height:inherit;font-size:inherit}.ck.ck-balloon-panel.ck-tooltip{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc( var(--ck-z-dialog) + 100 )}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{position:absolute;top:50%;left:0;right:0;margin:0 auto;transform:translateY(-50%);z-index:1}.ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row nowrap;align-items:center}.ck.ck-toolbar>.ck-toolbar__items{display:flex;flex-flow:row wrap;align-items:center;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block;}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}:root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{z-index:var(--ck-z-panel);max-width:var(--ck-menu-bar-menu-max-width);position:absolute}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{top:100%;bottom:auto}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{left:calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) )}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{right:calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) )}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0px}.ck.ck-menu-bar__menu{display:block;position:relative}:root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:hsl(0, 0%, 15%);--ck-color-resizer-tooltip-text:hsl(0, 0%, 95%);--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small) * 2 + 10px)}.ck .ck-widget{position:relative}.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:0 var(--ck-spacing-small);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height)}.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-above-center{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{top:calc(var(--ck-resizer-tooltip-height) * -1);left:50%;transform:translate(-50%)}.ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;position:absolute;pointer-events:none;left:0;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{position:absolute;pointer-events:all}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{cursor:nesw-resize}.ck .ck-widget .ck-widget__type-around__button{display:block;position:absolute;overflow:hidden;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{position:absolute;top:50%;left:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{top:calc(-0.5 * var(--ck-widget-outline-thickness));left:min(10%, 30px);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(-0.5 * var(--ck-widget-outline-thickness));right:min(10%, 30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button::after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover::after{content:\"\";display:block;position:absolute;top:1px;left:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;position:absolute;left:0;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc( -1 * var(--ck-widget-outline-thickness) );right:calc( -1 * var(--ck-widget-outline-thickness) )}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:calc( -1 * var(--ck-widget-outline-thickness) - 1px );display:block}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc( -1 * var(--ck-widget-outline-thickness) - 1px );display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around{display:none}.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around{display:none}.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:host{display:block;margin:0;padding:0}@media print{body{margin:0 !important}}.ck-content{height:var(--ir-editor-height, 100%)}.ck-content p{margin:0;padding:0}.error{border-color:red !important}";
const IrTextEditorStyle0 = irTextEditorCss;

const IrTextEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.baseToolbarItems = ['undo', 'redo', '|', 'sourceEditing', '|', 'bold', 'italic', 'underline'];
        this.basePlugins = [
            SourceEditing,
            GeneralHtmlSupport,
            turndown_browser_es.AccessibilityHelp,
            Autoformat,
            turndown_browser_es.AutoLink,
            Autosave,
            Bold,
            Underline,
            PageBreak,
            Essentials,
            turndown_browser_es.Enter,
            Italic,
            Paragraph,
            SelectAll,
            turndown_browser_es.TextTransformation,
            Undo,
            turndown_browser_es.ShiftEnter,
            FullPage,
        ];
        this.value = undefined;
        this.error = undefined;
        this.placeholder = undefined;
        this.plugins = [];
        this.pluginsMode = 'add';
        this.toolbarItems = [];
        this.toolbarItemsMode = 'add';
    }
    componentDidLoad() {
        this.initEditor();
    }
    onValueChanged(newValue) {
        if (this.editorInstance) {
            const currentEditorValue = this.editorInstance.getData();
            if (newValue !== currentEditorValue) {
                this.editorInstance.setData(newValue);
            }
        }
    }
    onErrorChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            const editorElement = this.el.querySelector('.ck-content');
            if (editorElement) {
                console.log('first');
                editorElement.classList.toggle('error', newValue);
            }
        }
    }
    async initEditor() {
        const plugins = this.pluginsMode === 'replace' ? this.plugins : this.basePlugins.concat(this.plugins);
        const items = this.toolbarItemsMode === 'replace' ? this.toolbarItems : this.baseToolbarItems.concat(this.toolbarItems);
        const editorConfig = {
            toolbar: {
                items,
                shouldNotGroupWhenFull: false,
            },
            plugins,
            initialData: this.value,
            htmlSupport: {
                allow: [
                    {
                        name: /^(b|strong|br|p)$/,
                        attributes: true,
                        classes: true,
                        styles: true,
                    },
                ],
            },
            // licenseKey: '',
            placeholder: this.placeholder,
        };
        if (this.editorInstance) {
            return;
        }
        const editorElement = this.el.querySelector('#editor');
        try {
            this.editorInstance = await ClassicEditor.create(editorElement, editorConfig);
            this.editorInstance.editing.view.document.on('clipboardInput', (evt, data) => {
                const textData = data.dataTransfer.getData('text/plain');
                const htmlRegex = /<\/?[a-z][\s\S]*>/i;
                if (htmlRegex.test(textData)) {
                    // Process the text containing HTML tags
                    const fragment = this.editorInstance.data.htmlProcessor.toView(textData);
                    data.content = fragment;
                    // Prevent the default handling
                    evt.stop();
                    // Fire the 'inputTransformation' event manually
                    this.editorInstance.plugins.get('ClipboardPipeline').fire('inputTransformation', { content: fragment });
                }
            });
            this.editorInstance.model.document.on('change:data', () => {
                const editorData = this.editorInstance.getData();
                this.handletextChange(editorData);
            });
            this.editorInstance.plugins.get('Enter').fire('');
        }
        catch (error) {
            console.error('There was a problem initializing the editor:', error);
        }
    }
    handletextChange(data) {
        this.textChange.emit(data);
    }
    disconnectedCallback() {
        if (this.editorInstance) {
            this.editorInstance.destroy().catch((error) => {
                console.error('Error destroying editor:', error);
            });
        }
    }
    render() {
        return (index.h(index.Host, { key: '1a57e44669bcd4c4a5f293d100d134f5f9f4367a' }, index.h("div", { key: 'd41b345c2af57c6da5143c8aaa6c51054927a2de', id: "editor" })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["onValueChanged"],
        "error": ["onErrorChanged"]
    }; }
};
IrTextEditor.style = IrTextEditorStyle0;

exports.ir_text_editor = IrTextEditor;

//# sourceMappingURL=ir-text-editor.cjs.entry.js.map