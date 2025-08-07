import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from './index-60982d00.js';
import { R as RoomService } from './room.service-39d12a8c.js';
import { B as BookingService } from './booking.service-388387ed.js';
import { l as formatLegendColors, n as calendar_dates, o as formatName, p as getRoomStatus, t as transformNewBooking, q as transformNewBLockedRooms, b as dateToFormattedString, r as bookingStatus, i as getPrivateNote, u as isBlockUnit, k as calculateDaysBetweenDates, v as getNextDay, w as addTwoMonthToDate, x as convertDMYToISO, y as computeEndDate, d as downloadFile } from './utils-cc0c2e69.js';
import { E as EventsService } from './events.service-6f4a1e28.js';
import { h as hooks } from './moment-ab846cee.js';
import { T as ToBeAssignedService } from './toBeAssigned.service-e5fd74c1.js';
import { l as locales } from './locales.store-629477c2.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import { h as handleUnAssignedDatesChange, a as addUnassignedDates, r as removeUnassignedDates } from './unassigned_dates.store-5083e678.js';
import { T as Token } from './Token-6c389e24.js';
import { v as v4 } from './v4-964634d6.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-e63a6d61.js';
import { s as setLoading, u as updateTasks, h as hkTasksStore, c as clearSelectedTasks, a as updateSelectedTasks } from './hk-tasks.store-73b92191.js';
import { P as PropertyService } from './property.service-022a41a2.js';
import { U as UserService } from './user.service-b106e4d2.js';
import './axios-aa1335b8.js';
import './index-c4cf83be.js';
import './index-6ecc32cd.js';

const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };

const withNativeBlob$1 = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView$1 = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob$1 && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(data, callback);
        }
    }
    else if (withNativeArrayBuffer$2 &&
        (data instanceof ArrayBuffer || isView$1(data))) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(new Blob([data]), callback);
        }
    }
    // plain string
    return callback(PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) {
        return data;
    }
    else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    }
    else {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob$1 && packet.data instanceof Blob) {
        return packet.data.arrayBuffer().then(toArray).then(callback);
    }
    else if (withNativeArrayBuffer$2 &&
        (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
        return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded) => {
        if (!TEXT_ENCODER) {
            TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
    });
}

// imported from https://github.com/socketio/base64-arraybuffer
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
    lookup$1[chars.charCodeAt(i)] = i;
}
const decode$1 = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup$1[base64.charCodeAt(i)];
        encoded2 = lookup$1[base64.charCodeAt(i + 1)];
        encoded3 = lookup$1[base64.charCodeAt(i + 2)];
        encoded4 = lookup$1[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};

const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType),
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType),
        };
    }
    const packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
        return ERROR_PACKET;
    }
    return encodedPacket.length > 1
        ? {
            type: PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1),
        }
        : {
            type: PACKET_TYPES_REVERSE[type],
        };
};
const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer$1) {
        const decoded = decode$1(data);
        return mapBinary(decoded, binaryType);
    }
    else {
        return { base64: true, data }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType) => {
    switch (binaryType) {
        case "blob":
            if (data instanceof Blob) {
                // from WebSocket + binaryType "blob"
                return data;
            }
            else {
                // from HTTP long-polling or WebTransport
                return new Blob([data]);
            }
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) {
                // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
                return data;
            }
            else {
                // from WebTransport (Uint8Array)
                return data.buffer;
            }
    }
};

const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        encodePacket(packet, false, (encodedPacket) => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = decodePacket(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform(packet, controller) {
            encodePacketToBinary(packet, (encodedPacket) => {
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                }
                else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                }
                else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") {
                    header[0] |= 0x80;
                }
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        },
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
        return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j = 0;
    for (let i = 0; i < size; i++) {
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) {
        chunks[0] = chunks[0].slice(j);
    }
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
        TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0 /* State.READ_HEADER */;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform(chunk, controller) {
            chunks.push(chunk);
            while (true) {
                if (state === 0 /* State.READ_HEADER */) {
                    if (totalLength(chunks) < 1) {
                        break;
                    }
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) {
                        state = 3 /* State.READ_PAYLOAD */;
                    }
                    else if (expectedLength === 126) {
                        state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
                    }
                    else {
                        state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
                    }
                }
                else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
                    if (totalLength(chunks) < 2) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
                    if (totalLength(chunks) < 8) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 53 - 32) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue(ERROR_PACKET);
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else {
                    if (totalLength(chunks) < expectedLength) {
                        break;
                    }
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue(decodePacket(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* State.READ_HEADER */;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue(ERROR_PACKET);
                    break;
                }
            }
        },
    });
}
const protocol$1 = 4;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

const nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
        return (cb) => Promise.resolve().then(cb);
    }
    else {
        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
})();
const globalThisShim = (() => {
    if (typeof self !== "undefined") {
        return self;
    }
    else if (typeof window !== "undefined") {
        return window;
    }
    else {
        return Function("return this")();
    }
})();
const defaultBinaryType = "arraybuffer";
function createCookieJar() { }

function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    }
    else {
        obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
        obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}
/**
 * Generates a random 8-characters string.
 */
function randomString() {
    return (Date.now().toString(36).substring(3) +
        Math.random().toString(36).substring(2, 5));
}

// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function encode(obj) {
    let str = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (str.length)
                str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}

class TransportError extends Error {
    constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
        super();
        this.writable = false;
        installTimerFunctions(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */
    open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */
    close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
        if (this.readyState === "open") {
            this.write(packets);
        }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
        const packet = decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) { }
    createUri(schema, query = {}) {
        return (schema +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(query));
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port &&
            ((this.opts.secure && Number(this.opts.port !== 443)) ||
                (!this.opts.secure && Number(this.opts.port) !== 80))) {
            return ":" + this.opts.port;
        }
        else {
            return "";
        }
    }
    _query(query) {
        const encodedQuery = encode(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}

class Polling extends Transport {
    constructor() {
        super(...arguments);
        this._polling = false;
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
        this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            this.readyState = "paused";
            onPause();
        };
        if (this._polling || !this.writable) {
            let total = 0;
            if (this._polling) {
                total++;
                this.once("pollComplete", function () {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function () {
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    _poll() {
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
        const callback = (packet) => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({ description: "transport closed by the server" });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        decodePayload(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this._polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this._poll();
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
        const close = () => {
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
        this.writable = false;
        encodePayload(packets, (data) => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = randomString();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}

// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' &&
        'withCredentials' in new XMLHttpRequest();
}
catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
}
const hasCORS = value;

function empty() { }
class BaseXHR extends Polling {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts) {
        super(opts);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd =
                (typeof location !== "undefined" &&
                    opts.hostname !== location.hostname) ||
                    port !== opts.port;
        }
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data,
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(createRequest, uri, opts) {
        super();
        this.createRequest = createRequest;
        installTimerFunctions(this, opts);
        this._opts = opts;
        this._method = opts.method || "GET";
        this._uri = uri;
        this._data = undefined !== opts.data ? opts.data : null;
        this._create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    _create() {
        var _a;
        const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this._opts.xd;
        const xhr = (this._xhr = this.createRequest(opts));
        try {
            xhr.open(this._method, this._uri, true);
            try {
                if (this._opts.extraHeaders) {
                    // @ts-ignore
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (let i in this._opts.extraHeaders) {
                        if (this._opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                        }
                    }
                }
            }
            catch (e) { }
            if ("POST" === this._method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                }
                catch (e) { }
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            }
            catch (e) { }
            (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this._opts.withCredentials;
            }
            if (this._opts.requestTimeout) {
                xhr.timeout = this._opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
                var _a;
                if (xhr.readyState === 3) {
                    (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(
                    // @ts-ignore
                    xhr.getResponseHeader("set-cookie"));
                }
                if (4 !== xhr.readyState)
                    return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this._onLoad();
                }
                else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(() => {
                        this._onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            xhr.send(this._data);
        }
        catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(() => {
                this._onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this._index = Request.requestsCount++;
            Request.requests[this._index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */
    _onError(err) {
        this.emitReserved("error", err, this._xhr);
        this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    _cleanup(fromError) {
        if ("undefined" === typeof this._xhr || null === this._xhr) {
            return;
        }
        this._xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this._xhr.abort();
            }
            catch (e) { }
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this._index];
        }
        this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
    _onLoad() {
        const data = this._xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this._cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
        this._cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    }
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}
const hasXHR2 = (function () {
    const xhr = newRequest({
        xdomain: false,
    });
    return xhr && xhr.responseType !== null;
})();
/**
 * HTTP long-polling based on the built-in `XMLHttpRequest` object.
 *
 * Usage: browser
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */
class XHR extends BaseXHR {
    constructor(opts) {
        super(opts);
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    request(opts = {}) {
        Object.assign(opts, { xd: this.xd }, this.opts);
        return new Request(newRequest, this.uri(), opts);
    }
}
function newRequest(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
            return new XMLHttpRequest();
        }
    }
    catch (e) { }
    if (!xdomain) {
        try {
            return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        }
        catch (e) { }
    }
}

// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product.toLowerCase() === "reactnative";
class BaseWS extends Transport {
    get name() {
        return "websocket";
    }
    doOpen() {
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative
            ? {}
            : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws = this.createSocket(uri, protocols, opts);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = (closeEvent) => this.onClose({
            description: "websocket connection closed",
            context: closeEvent,
        });
        this.ws.onmessage = (ev) => this.onData(ev.data);
        this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            encodePacket(packet, this.supportsBinary, (data) => {
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    this.doWrite(packet, data);
                }
                catch (e) {
                }
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    nextTick(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.onerror = () => { };
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = randomString();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}
const WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
/**
 * WebSocket transport based on the built-in `WebSocket` object.
 *
 * Usage: browser, Node.js (since v21), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * @see https://caniuse.com/mdn-api_websocket
 * @see https://nodejs.org/api/globals.html#websocket
 */
class WS extends BaseWS {
    createSocket(uri, protocols, opts) {
        return !isReactNative
            ? protocols
                ? new WebSocketCtor(uri, protocols)
                : new WebSocketCtor(uri)
            : new WebSocketCtor(uri, protocols, opts);
    }
    doWrite(_packet, data) {
        this.ws.send(data);
    }
}

/**
 * WebTransport transport based on the built-in `WebTransport` object.
 *
 * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
 * @see https://caniuse.com/webtransport
 */
class WT extends Transport {
    get name() {
        return "webtransport";
    }
    doOpen() {
        try {
            // @ts-ignore
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this._transport.closed
            .then(() => {
            this.onClose();
        })
            .catch((err) => {
            this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then((stream) => {
                const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const reader = stream.readable.pipeThrough(decoderStream).getReader();
                const encoderStream = createPacketEncoderStream();
                encoderStream.readable.pipeTo(stream.writable);
                this._writer = encoderStream.writable.getWriter();
                const read = () => {
                    reader
                        .read()
                        .then(({ done, value }) => {
                        if (done) {
                            return;
                        }
                        this.onPacket(value);
                        read();
                    })
                        .catch((err) => {
                    });
                };
                read();
                const packet = { type: "open" };
                if (this.query.sid) {
                    packet.data = `{"sid":"${this.query.sid}"}`;
                }
                this._writer.write(packet).then(() => this.onOpen());
            });
        });
    }
    write(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this._writer.write(packet).then(() => {
                if (lastPacket) {
                    nextTick(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        var _a;
        (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
    }
}

const transports = {
    websocket: WS,
    webtransport: WT,
    polling: XHR,
};

// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];
function parse(str) {
    if (str.length > 8000) {
        throw "URI too long";
    }
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while (i--) {
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}

const withEventListeners = typeof addEventListener === "function" &&
    typeof removeEventListener === "function";
const OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
    // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
    // script, so we create one single event listener here which will forward the event to the socket instances
    addEventListener("offline", () => {
        OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
    }, false);
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
 * successfully establishes the connection.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithoutUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithUpgrade
 * @see Socket
 */
class SocketWithoutUpgrade extends Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts) {
        super();
        this.binaryType = defaultBinaryType;
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        /**
         * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
         * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
         */
        this._pingTimeoutTime = Infinity;
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            const parsedUri = parse(uri);
            opts.hostname = parsedUri.host;
            opts.secure =
                parsedUri.protocol === "https" || parsedUri.protocol === "wss";
            opts.port = parsedUri.port;
            if (parsedUri.query)
                opts.query = parsedUri.query;
        }
        else if (opts.host) {
            opts.hostname = parse(opts.host).host;
        }
        installTimerFunctions(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = [];
        this._transportsByName = {};
        opts.transports.forEach((t) => {
            const transportName = t.prototype.name;
            this.transports.push(transportName);
            this._transportsByName[transportName] = t;
        });
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024,
            },
            transportOptions: {},
            closeOnBeforeunload: false,
        }, opts);
        this.opts.path =
            this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
            this.opts.query = decode(this.opts.query);
        }
        if (withEventListeners) {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this._beforeunloadEventListener = () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this._offlineEventListener = () => {
                    this._onClose("transport close", {
                        description: "network connection lost",
                    });
                };
                OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
            }
        }
        if (this.opts.withCredentials) {
            this._cookieJar = createCookieJar();
        }
        this._open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = protocol$1;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
        }, this.opts.transportOptions[name]);
        return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    _open() {
        if (this.transports.length === 0) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        const transportName = this.opts.rememberUpgrade &&
            SocketWithoutUpgrade.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1
            ? "websocket"
            : this.transports[0];
        this.readyState = "opening";
        const transport = this.createTransport(transportName);
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
        if (this.transport) {
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this._onDrain.bind(this))
            .on("packet", this._onPacket.bind(this))
            .on("error", this._onError.bind(this))
            .on("close", (reason) => this._onClose("transport close", reason));
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
        this.readyState = "open";
        SocketWithoutUpgrade.priorWebsocketSuccess =
            "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    _onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this._sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    this._resetPingTimeout();
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this._onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this._pingInterval = data.pingInterval;
        this._pingTimeout = data.pingTimeout;
        this._maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const delay = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + delay;
        this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout");
        }, delay);
        if (this.opts.autoUnref) {
            this._pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this._prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            const packets = this._getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this._prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    _getWritablePackets() {
        const shouldCheckPayloadSize = this._maxPayload &&
            this.transport.name === "polling" &&
            this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += byteLength(data);
            }
            if (i > 0 && payloadSize > this._maxPayload) {
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    /* private */ _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return true;
        const hasExpired = Date.now() > this._pingTimeoutTime;
        if (hasExpired) {
            this._pingTimeoutTime = 0;
            nextTick(() => {
                this._onClose("ping timeout");
            }, this.setTimeoutFn);
        }
        return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    send(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    _sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options,
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
        const close = () => {
            this._onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    _onError(err) {
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports &&
            this.transports.length > 1 &&
            this.readyState === "opening") {
            this.transports.shift();
            return this._open();
        }
        this.emitReserved("error", err);
        this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    _onClose(reason, description) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this._pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (withEventListeners) {
                if (this._beforeunloadEventListener) {
                    removeEventListener("beforeunload", this._beforeunloadEventListener, false);
                }
                if (this._offlineEventListener) {
                    const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
                    if (i !== -1) {
                        OFFLINE_EVENT_LISTENERS.splice(i, 1);
                    }
                }
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this._prevBufferLen = 0;
        }
    }
}
SocketWithoutUpgrade.protocol = protocol$1;
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see Socket
 */
class SocketWithUpgrade extends SocketWithoutUpgrade {
    constructor() {
        super(...arguments);
        this._upgrades = [];
    }
    onOpen() {
        super.onOpen();
        if ("open" === this.readyState && this.opts.upgrade) {
            for (let i = 0; i < this._upgrades.length; i++) {
                this._probe(this._upgrades[i]);
            }
        }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    _probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", (msg) => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    SocketWithoutUpgrade.priorWebsocketSuccess =
                        "websocket" === transport.name;
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err) => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this._upgrades.indexOf("webtransport") !== -1 &&
            name !== "webtransport") {
            // favor WebTransport
            this.setTimeoutFn(() => {
                if (!failed) {
                    transport.open();
                }
            }, 200);
        }
        else {
            transport.open();
        }
    }
    onHandshake(data) {
        this._upgrades = this._filterUpgrades(data.upgrades);
        super.onHandshake(data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    _filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        for (let i = 0; i < upgrades.length; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * @example
 * import { Socket } from "engine.io-client";
 *
 * const socket = new Socket();
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see SocketWithUpgrade
 */
class Socket$1 extends SocketWithUpgrade {
    constructor(uri, opts = {}) {
        const o = typeof uri === "object" ? uri : opts;
        if (!o.transports ||
            (o.transports && typeof o.transports[0] === "string")) {
            o.transports = (o.transports || ["polling", "websocket", "webtransport"])
                .map((transportName) => transports[transportName])
                .filter((t) => !!t);
        }
        super(uri, o);
    }
}

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        obj = parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}

const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (isBinary(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" &&
            data.num >= 0 &&
            data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        }
        else {
            throw new Error("illegal attachments");
        }
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}

/**
 * These strings must not be used as event names, as they have a special meaning.
 */
const RESERVED_EVENTS$1 = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener", // used by the Node.js EventEmitter
];
/**
 * Protocol version.
 *
 * @public
 */
const protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (hasBinary(obj)) {
                return this.encodeAsBinary({
                    type: obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK,
                    nsp: obj.nsp,
                    data: obj.data,
                    id: obj.id,
                });
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if (isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return (Array.isArray(payload) &&
                    (typeof payload[0] === "number" ||
                        (typeof payload[0] === "string" &&
                            RESERVED_EVENTS$1.indexOf(payload[0]) === -1)));
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

const parser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    protocol: protocol,
    get PacketType () { return PacketType; },
    Encoder: Encoder,
    Decoder: Decoder
});

function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}

/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */
class Socket extends Emitter {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */
        this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */
        this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */
        this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */
        this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */
        this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */
        this._queueSeq = 0;
        this.ids = 0;
        /**
         * A map containing acknowledgement handlers.
         *
         * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
         *
         * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
         * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
         * - `const value = await socket.emitWithAck("test")`
         *
         * From those that don't:
         *
         * - `socket.emit("test", (value) => { ... });`
         *
         * In the first case, the handlers will be called with an error when:
         *
         * - the timeout is reached
         * - the socket gets disconnected
         *
         * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
         * an acknowledgement from the server.
         *
         * @private
         */
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            on(io, "open", this.onopen.bind(this)),
            on(io, "packet", this.onpacket.bind(this)),
            on(io, "error", this.onerror.bind(this)),
            on(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
        var _a, _b, _c;
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
        const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
        const discardPacket = this.flags.volatile && !isTransportWritable;
        if (discardPacket) ;
        else if (isConnected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    this.sendBuffer.splice(i, 1);
                }
            }
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
            const fn = (arg1, arg2) => {
                return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
            ack = args.pop();
        }
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({ fromQueue: true }, this.flags),
        };
        args.push((err, ...responseArgs) => {
            if (packet !== this._queue[0]) {
                // the packet has already been acknowledged
                return;
            }
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) {
                        ack(err);
                    }
                }
            }
            else {
                this._queue.shift();
                if (ack) {
                    ack(null, ...responseArgs);
                }
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) {
            return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
            return;
        }
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this._sendConnectPacket(data);
            });
        }
        else {
            this._sendConnectPacket(this.auth);
        }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
        this.packet({
            type: PacketType.CONNECT,
            data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data)
                : data,
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */
    _clearAcks() {
        Object.keys(this.acks).forEach((id) => {
            const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
            if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError) {
                    ack.call(this, new Error("socket has been disconnected"));
                }
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    this.onconnect(packet.data.sid, packet.data.pid);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) {
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
            this._lastOffset = args[args.length - 1];
        }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            self.packet({
                type: PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") {
            return;
        }
        delete this.acks[packet.id];
        // @ts-ignore FIXME ack is incorrectly inferred as 'never'
        if (ack.withError) {
            packet.data.unshift(null);
        }
        // @ts-ignore
        ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
        if (this.connected) {
            this.packet({ type: PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
}

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
};

class Manager extends Emitter {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        if (!v) {
            this.skipReconnect = true;
        }
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new Socket$1(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        const onError = (err) => {
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                this.maybeReconnectOnOpen();
            }
        };
        // emit `error`
        const errorSub = on(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(() => {
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), 
        // @ts-ignore
        on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        try {
            this.decoder.add(data);
        }
        catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        nextTick(() => {
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        else if (this._autoConnect && !socket.active) {
            socket.connect();
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */
    onclose(reason, description) {
        var _a;
        this.cleanup();
        (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}

/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        io = new Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            cache[id] = new Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager,
    Socket,
    io: lookup,
    connect: lookup,
});

class BatchingQueue {
    constructor(processor, options) {
        this.queue = [];
        this.isProcessing = false;
        this.flushTimer = null;
        this.processor = processor;
        this.options = Object.assign({ maxQueueSize: 10000, onError: error => console.error('Queue processing error:', error), onBatchProcessed: () => { } }, options);
    }
    /**
     * Add a single item to the queue
     */
    offer(data) {
        if (this.queue.length >= this.options.maxQueueSize) {
            return false; // Queue is full
        }
        const item = {
            data,
            timestamp: Date.now(),
            id: this.generateId(),
        };
        this.queue.push(item);
        this.scheduleFlush();
        return true;
    }
    /**
     * Add multiple items to the queue
     */
    offerAll(items) {
        let added = 0;
        for (const item of items) {
            if (this.offer(item)) {
                added++;
            }
            else {
                break; // Queue is full
            }
        }
        return added;
    }
    /**
     * Get current queue size
     */
    size() {
        return this.queue.length;
    }
    /**
     * Check if queue is empty
     */
    isEmpty() {
        return this.queue.length === 0;
    }
    /**
     * Force flush the current queue
     */
    async flush() {
        if (this.flushTimer) {
            clearTimeout(this.flushTimer);
            this.flushTimer = null;
        }
        await this.processBatch();
    }
    /**
     * Clear all items from the queue
     */
    clear() {
        this.queue = [];
        if (this.flushTimer) {
            clearTimeout(this.flushTimer);
            this.flushTimer = null;
        }
    }
    /**
     * Shutdown the queue and process remaining items
     */
    async shutdown() {
        await this.flush();
    }
    scheduleFlush() {
        // If we've reached batch size, process immediately
        if (this.queue.length >= this.options.batchSize) {
            this.processBatch();
            return;
        }
        // If no timer is set, schedule one
        if (!this.flushTimer) {
            this.flushTimer = setTimeout(() => {
                this.processBatch();
            }, this.options.flushInterval);
        }
    }
    async processBatch() {
        if (this.isProcessing || this.queue.length === 0) {
            return;
        }
        this.isProcessing = true;
        try {
            // Extract batch to process
            const batchSize = Math.min(this.options.batchSize, this.queue.length);
            const batch = this.queue.splice(0, batchSize);
            const data = batch.map(item => item.data);
            const startTime = Date.now();
            // Process the batch
            await this.processor(data);
            const processingTime = Date.now() - startTime;
            this.options.onBatchProcessed(batchSize, processingTime);
            // Clear the timer since we've processed
            if (this.flushTimer) {
                clearTimeout(this.flushTimer);
                this.flushTimer = null;
            }
            // If there are more items, schedule next batch
            if (this.queue.length > 0) {
                this.scheduleFlush();
            }
        }
        catch (error) {
            this.options.onError(error);
        }
        finally {
            this.isProcessing = false;
        }
    }
    generateId() {
        return v4();
    }
}

const iglooCalendarCss = ".sc-igloo-calendar-h{display:block;position:relative;background-color:#ffffff;height:100%;text-align:center}.igl-calendar.sc-igloo-calendar{display:grid;grid-template-columns:1fr;height:100%}.calendarScrollContainer.sc-igloo-calendar{width:100%;height:100%;overflow:auto;position:relative;white-space:nowrap;border-left:2px solid grey}.showToBeAssigned.sc-igloo-calendar,.showLegend.sc-igloo-calendar{grid-template-columns:330px 1fr}#calendarContainer.sc-igloo-calendar{position:absolute}.legendContainer.sc-igloo-calendar,.tobeAssignedContainer.sc-igloo-calendar{display:none;height:100%;overflow-y:auto;padding-left:0.5em !important;padding-right:0.5em !important}.showToBeAssigned.sc-igloo-calendar .tobeAssignedContainer.sc-igloo-calendar{display:block}.showLegend.sc-igloo-calendar .legendContainer.sc-igloo-calendar{display:block}.tobeBooked.sc-igloo-calendar{padding-top:8px;padding-bottom:8px;text-align:left}";
const IglooCalendarStyle0 = iglooCalendarCss;

var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IglooCalendar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dragOverHighlightElement = createEvent(this, "dragOverHighlightElement", 7);
        this.moveBookingTo = createEvent(this, "moveBookingTo", 7);
        this.calculateUnassignedDates = createEvent(this, "calculateUnassignedDates", 7);
        this.reduceAvailableUnitEvent = createEvent(this, "reduceAvailableUnitEvent", 7);
        this.revertBooking = createEvent(this, "revertBooking", 7);
        this.openCalendarSidebar = createEvent(this, "openCalendarSidebar", 7);
        this.showRoomNightsDialog = createEvent(this, "showRoomNightsDialog", 7);
        this.ticket = '';
        this.calendarData = new Object();
        this.days = new Array();
        this.scrollViewDragging = false;
        this.dialogData = null;
        this.bookingItem = null;
        this.editBookingItem = null;
        this.showLegend = false;
        this.showPaymentDetails = false;
        this.showToBeAssigned = false;
        this.unassignedDates = {};
        this.roomNightsData = null;
        this.renderAgain = false;
        this.showBookProperty = false;
        this.isAuthenticated = false;
        this.bookingService = new BookingService();
        this.roomService = new RoomService();
        this.eventsService = new EventsService();
        this.toBeAssignedService = new ToBeAssignedService();
        // private auth = new Auth();
        this.countries = [];
        this.visibleCalendarCells = { x: [], y: [] };
        this.today = '';
        this.reachedEndOfCalendar = false;
        this.token = new Token();
        this.salesQueue = new BatchingQueue(this.processSalesBatch.bind(this), {
            batchSize: 50,
            flushInterval: 1000,
            maxQueueSize: 5000,
            onError: e => console.error('Batch Sales Update Error:', e),
        });
        this.availabilityQueue = new BatchingQueue(this.processAvailabilityBatch.bind(this), {
            batchSize: 50,
            flushInterval: 1000,
            maxQueueSize: 5000,
            onError: e => console.error('Batch Availability Update Error:', e),
        });
        this.roomTypeIdsCache = new Map();
        this.scrollViewDragPos = { top: 0, left: 0, x: 0, y: 0 };
        this.onScrollContentMoveHandler = (event) => {
            if (event.buttons !== 1) {
                return;
            }
            const dx = event.clientX - this.scrollViewDragPos.x;
            const dy = event.clientY - this.scrollViewDragPos.y;
            this.scrollContainer.scrollTop = this.scrollViewDragPos.top - dy;
            this.scrollContainer.scrollLeft = this.scrollViewDragPos.left - dx;
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                this.scrollViewDragging = true;
            }
        };
        this.onScrollContentMoveEndHandler = () => {
            document.removeEventListener('mousemove', this.onScrollContentMoveHandler);
            document.removeEventListener('mouseup', this.onScrollContentMoveEndHandler);
        };
    }
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        this.init();
    }
    componentDidLoad() {
        this.scrollToElement(this.today);
    }
    async handleDeleteEvent(ev) {
        try {
            ev.stopImmediatePropagation();
            ev.preventDefault();
            await this.eventsService.deleteEvent(ev.detail);
        }
        catch (error) {
            //toastr.error(error);
        }
    }
    async handleCalendarSidebarEvents(ev) {
        console.log('hit 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        this.calendarSidebarState = ev.detail;
    }
    scrollPageToRoom(event) {
        let targetScrollClass = event.detail.refClass;
        this.scrollContainer = this.scrollContainer || this.element.querySelector('.calendarScrollContainer');
        const topLeftCell = this.element.querySelector('.topLeftCell');
        const gotoRoom = this.element.querySelector('.' + targetScrollClass);
        if (gotoRoom) {
            this.scrollContainer.scrollTo({ top: 0 });
            const gotoRect = gotoRoom.getBoundingClientRect();
            const containerRect = this.scrollContainer.getBoundingClientRect();
            const topLeftCellRect = topLeftCell.getBoundingClientRect();
            this.scrollContainer.scrollTo({
                top: gotoRect.top - containerRect.top - topLeftCellRect.height - gotoRect.height,
            });
        }
    }
    handleShowDialog(event) {
        var _a;
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.dialogData = event.detail;
        (_a = this.calendarModalEl) === null || _a === void 0 ? void 0 : _a.openModal();
    }
    handleShowRoomNightsDialog(event) {
        this.roomNightsData = event.detail;
    }
    handleBookingDatasChange(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        let bookings = [...this.calendarData.bookingEvents];
        bookings = bookings.filter(bookingEvent => bookingEvent.ID !== 'NEW_TEMP_EVENT');
        bookings.push(...event.detail.filter(ev => ev.STATUS === 'PENDING-CONFIRMATION'));
        this.updateBookingEventsDateRange(event.detail);
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: bookings });
    }
    handleUpdateBookingEvent(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const newBookingEvent = e.detail;
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (newBookingEvent.ID === event.ID) {
                    return newBookingEvent;
                }
                return event;
            }) });
    }
    showBookingPopupEventDataHandler(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.onOptionSelect(event);
        //console.log("show booking event", event);
    }
    updateEventDataHandler(event) {
        let bookedData = this.calendarData.bookingEvents.find(bookedEvent => bookedEvent.id === event.detail.id);
        if (bookedData && event.detail && event.detail.data) {
            Object.entries(event.detail.data).forEach(([key, value]) => {
                bookedData[key] = value;
            });
        }
    }
    dragOverEventDataHandler(event) {
        if (event.detail.id === 'CALCULATE_DRAG_OVER_BOUNDS') {
            let topLeftCell = document.querySelector('igl-cal-header .topLeftCell');
            let containerDays = document.querySelectorAll('.headersContainer .headerCell');
            let containerRooms = document.querySelectorAll('.bodyContainer .roomRow .roomTitle');
            this.visibleCalendarCells = { x: [], y: [] };
            containerDays.forEach(element => {
                const htmlElement = element;
                this.visibleCalendarCells.x.push({
                    left: htmlElement.offsetLeft + topLeftCell.offsetWidth,
                    width: htmlElement.offsetWidth,
                    id: htmlElement.getAttribute('data-day'),
                });
            });
            containerRooms.forEach(element => {
                const htmlElement = element;
                this.visibleCalendarCells.y.push({
                    top: htmlElement.offsetTop,
                    height: htmlElement.offsetHeight,
                    id: htmlElement.getAttribute('data-room'),
                });
            });
            this.highlightDragOver(true, event.detail.data);
        }
        else if (event.detail.id === 'DRAG_OVER') {
            this.highlightDragOver(true, event.detail.data);
        }
        else if (event.detail.id === 'DRAG_OVER_END') {
            this.highlightDragOver(false, event.detail.data);
        }
        else if (event.detail.id === 'STRETCH_OVER_END') {
            this.highlightDragOver(false, event.detail.data);
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    init() {
        this.calDates = {
            from: this.from_date,
            to: this.to_date,
        };
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
        this.calDates = {
            from: this.from_date,
            to: this.to_date,
        };
        handleUnAssignedDatesChange('unassigned_dates', newValue => {
            if (Object.keys(newValue).length === 0 && this.highlightedDate !== '') {
                this.highlightedDate = '';
            }
        });
    }
    renderModalBody() {
        var _a, _b;
        switch ((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.reason) {
            case 'checkin': {
                return `Are you sure you want to Check In this unit?`;
            }
            case 'checkout': {
                return 'Are you sure you want to Check Out this unit?';
            }
            case 'reallocate':
                return ((_b = this.dialogData) === null || _b === void 0 ? void 0 : _b.description) || '';
            case 'stretch':
                return 'Warning ';
            default:
                return 'Unknown modal content';
        }
    }
    setUpCalendarData(roomResp, bookingResp) {
        this.calendarData.currency = roomResp['My_Result'].currency;
        this.calendarData.allowedBookingSources = roomResp['My_Result'].allowed_booking_sources;
        this.calendarData.adultChildConstraints = roomResp['My_Result'].adult_child_constraints;
        this.calendarData.legendData = this.getLegendData(roomResp);
        this.calendarData.is_vacation_rental = roomResp['My_Result'].is_vacation_rental;
        this.calendarData.from_date = bookingResp.My_Params_Get_Rooming_Data.FROM;
        this.calendarData.to_date = bookingResp.My_Params_Get_Rooming_Data.TO;
        this.calendarData.startingDate = new Date(bookingResp.My_Params_Get_Rooming_Data.FROM).getTime();
        this.calendarData.endingDate = new Date(bookingResp.My_Params_Get_Rooming_Data.TO).getTime();
        this.calendarData.formattedLegendData = formatLegendColors(this.calendarData.legendData);
        let bookings = bookingResp.myBookings || [];
        bookings = bookings.filter(bookingEvent => {
            const toDate = hooks(bookingEvent.TO_DATE, 'YYYY-MM-DD');
            const fromDate = hooks(bookingEvent.FROM_DATE, 'YYYY-MM-DD');
            return !toDate.isSame(fromDate);
        });
        this.calendarData.bookingEvents = bookings;
        this.calendarData.toBeAssignedEvents = [];
    }
    async initializeApp() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                    include_sales_rate_plans: true,
                });
                roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.bookingService.getCalendarData(propertyId, this.from_date, this.to_date),
                this.bookingService.getCountries(this.language),
                this.roomService.fetchLanguage(this.language),
            ];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                    include_sales_rate_plans: true,
                }));
            }
            const results = await Promise.all(requests);
            if (!roomResp) {
                roomResp = results[results.length - 1];
            }
            const [bookingResp, countries] = results;
            calendar_dates.days = bookingResp.days;
            calendar_dates.months = bookingResp.months;
            this.setRoomsData(roomResp);
            this.countries = countries;
            this.setUpCalendarData(roomResp, bookingResp);
            let paymentMethods = roomResp['My_Result']['allowed_payment_methods'];
            this.showPaymentDetails = paymentMethods.some(item => item.code === '001' || item.code === '004');
            this.updateBookingEventsDateRange(this.calendarData.bookingEvents);
            this.updateBookingEventsDateRange(this.calendarData.toBeAssignedEvents);
            this.today = this.transformDateForScroll(new Date());
            let startingDay = new Date(this.calendarData.startingDate);
            startingDay.setHours(0, 0, 0, 0);
            this.days = bookingResp.days;
            this.calendarData.days = this.days;
            this.calendarData.monthsInfo = bookingResp.months;
            calendar_dates.fromDate = this.calendarData.from_date;
            calendar_dates.toDate = this.calendarData.to_date;
            setTimeout(() => {
                this.scrollToElement(this.today);
            }, 200);
            if (!this.calendarData.is_vacation_rental) {
                const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, this.from_date, this.to_date);
                this.unassignedDates = { fromDate: this.from_date, toDate: this.to_date, data: Object.assign(Object.assign({}, this.unassignedDates), data) };
                this.calendarData = Object.assign(Object.assign({}, this.calendarData), { unassignedDates: data });
                addUnassignedDates(data);
            }
            this.socket = lookup('https://realtime.igloorooms.com/');
            this.socket.on('MSG', async (msg) => {
                await this.handleSocketMessage(msg);
            });
        }
        catch (error) {
            console.error('Initializing Calendar Error', error);
        }
    }
    async handleSocketMessage(msg) {
        const msgAsObject = JSON.parse(msg);
        if (!msgAsObject) {
            return;
        }
        const { REASON, KEY, PAYLOAD } = msgAsObject;
        if (KEY.toString() !== this.property_id.toString()) {
            return;
        }
        let result;
        if (['DELETE_CALENDAR_POOL', 'GET_UNASSIGNED_DATES'].includes(REASON)) {
            result = PAYLOAD;
        }
        else {
            result = JSON.parse(PAYLOAD);
        }
        console.log({ [REASON]: result });
        const reasonHandlers = {
            DORESERVATION: this.handleDoReservation,
            BLOCK_EXPOSED_UNIT: this.handleBlockExposedUnit,
            ASSIGN_EXPOSED_ROOM: this.handleAssignExposedRoom,
            REALLOCATE_EXPOSED_ROOM_BLOCK: this.handleReallocateExposedRoomBlock,
            DELETE_CALENDAR_POOL: this.handleDeleteCalendarPool,
            GET_UNASSIGNED_DATES: this.handleGetUnassignedDates,
            UPDATE_CALENDAR_AVAILABILITY: r => this.availabilityQueue.offer(r),
            CHANGE_IN_DUE_AMOUNT: this.handleChangeInDueAmount,
            CHANGE_IN_BOOK_STATUS: this.handleChangeInBookStatus,
            NON_TECHNICAL_CHANGE_IN_BOOKING: this.handleNonTechnicalChangeInBooking,
            ROOM_STATUS_CHANGED: this.handleRoomStatusChanged,
            UNIT_HK_STATUS_CHANGED: this.handleUnitHKStatusChanged,
            SHARING_PERSONS_UPDATED: this.handleSharingPersonsUpdated,
            ROOM_TYPE_CLOSE: r => this.salesQueue.offer(Object.assign(Object.assign({}, r), { is_available_to_book: false })),
            ROOM_TYPE_OPEN: r => this.salesQueue.offer(Object.assign(Object.assign({}, r), { is_available_to_book: true })),
        };
        const handler = reasonHandlers[REASON];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${REASON}`);
        }
    }
    handleSharingPersonsUpdated(result) {
        console.log('sharing persons updated', result);
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: [
                ...this.calendarData.bookingEvents.map(e => {
                    var _a;
                    if (e.IDENTIFIER === result.identifier) {
                        const mainGuest = (_a = result.guests) === null || _a === void 0 ? void 0 : _a.find(p => p.is_main);
                        return Object.assign(Object.assign({}, e), { NAME: formatName(mainGuest.first_name, mainGuest.last_name), ROOM_INFO: Object.assign(Object.assign({}, e.ROOM_INFO), { sharing_persons: result.guests }) });
                    }
                    return e;
                }),
            ] });
    }
    handleRoomStatusChanged(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: [
                ...this.calendarData.bookingEvents.map(e => {
                    if (e.IDENTIFIER === result.room_identifier) {
                        const STATUS = getRoomStatus({
                            from_date: e.FROM_DATE,
                            to_date: e.TO_DATE,
                            in_out: Object.assign(Object.assign({}, e.ROOM_INFO.in_out), { code: result.status }),
                            status_code: e.BASE_STATUS_CODE,
                        });
                        return Object.assign(Object.assign({}, e), { CHECKIN: result.status === '001', CHECKOUT: result.status === '002', STATUS });
                    }
                    return e;
                }),
            ] });
    }
    handleUnitHKStatusChanged(result) {
        console.log('hk unit change', result);
        const updatedRooms = [...this.calendarData.roomsInfo];
        const changedRoomTypeIdx = updatedRooms.findIndex((roomType) => roomType.id === result.ROOM_CATEGORY_ID);
        if (changedRoomTypeIdx !== -1) {
            const changedRoomType = Object.assign({}, updatedRooms[changedRoomTypeIdx]);
            const changedPhysicalRoomIdx = changedRoomType.physicalrooms.findIndex(room => room.id === result.PR_ID);
            if (changedPhysicalRoomIdx !== -1) {
                const updatedPhysicalRooms = [...changedRoomType.physicalrooms];
                const targetPhysicalRoom = Object.assign({}, updatedPhysicalRooms[changedPhysicalRoomIdx]);
                targetPhysicalRoom.hk_status = result.HKS_CODE;
                updatedPhysicalRooms[changedPhysicalRoomIdx] = targetPhysicalRoom;
                changedRoomType.physicalrooms = updatedPhysicalRooms;
                updatedRooms[changedRoomTypeIdx] = changedRoomType;
                this.calendarData = Object.assign(Object.assign({}, this.calendarData), { roomsInfo: updatedRooms });
            }
        }
    }
    async handleDoReservation(result) {
        const transformedBooking = transformNewBooking(result);
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleBlockExposedUnit(result) {
        const transformedBooking = [await transformNewBLockedRooms(result)];
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleAssignExposedRoom(result) {
        console.log(result);
        const transformedBooking = transformNewBooking(result);
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleReallocateExposedRoomBlock(result) {
        await this.handleBlockExposedUnit(result);
    }
    async handleDeleteCalendarPool(result) {
        console.log('delete calendar pool');
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.filter(e => e.POOL !== result) });
    }
    async handleGetUnassignedDates(result) {
        const parsedResult = this.parseDateRange(result);
        if (!this.calendarData.is_vacation_rental &&
            new Date(parsedResult.FROM_DATE).getTime() >= this.calendarData.startingDate &&
            new Date(parsedResult.TO_DATE).getTime() <= this.calendarData.endingDate) {
            const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, dateToFormattedString(new Date(parsedResult.FROM_DATE)), dateToFormattedString(new Date(parsedResult.TO_DATE)));
            addUnassignedDates(data);
            this.unassignedDates = {
                fromDate: dateToFormattedString(new Date(parsedResult.FROM_DATE)),
                toDate: dateToFormattedString(new Date(parsedResult.TO_DATE)),
                data,
            };
            if (Object.keys(data).length === 0) {
                removeUnassignedDates(dateToFormattedString(new Date(parsedResult.FROM_DATE)), dateToFormattedString(new Date(parsedResult.TO_DATE)));
                this.reduceAvailableUnitEvent.emit({
                    fromDate: dateToFormattedString(new Date(parsedResult.FROM_DATE)),
                    toDate: dateToFormattedString(new Date(parsedResult.TO_DATE)),
                });
            }
        }
    }
    parseDateRange(str) {
        const result = {};
        const pairs = str.split('|');
        pairs.forEach(pair => {
            const res = pair.split(':');
            result[res[0]] = res[1];
        });
        return result;
    }
    handleChangeInDueAmount(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (result.pools.includes(event.ID)) {
                    return Object.assign(Object.assign({}, event), { BALANCE: result.due_amount });
                }
                return event;
            }) });
    }
    handleChangeInBookStatus(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (result.pools.includes(event.ID)) {
                    return Object.assign(Object.assign({}, event), { STATUS: event.STATUS !== 'IN-HOUSE' ? bookingStatus[result.status_code] : result.status_code === '001' ? bookingStatus[result.status_code] : 'IN-HOUSE' });
                }
                return event;
            }) });
    }
    handleNonTechnicalChangeInBooking(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (event.BOOKING_NUMBER === result.booking_nbr) {
                    return Object.assign(Object.assign({}, event), { PRIVATE_NOTE: getPrivateNote(result.extras) });
                }
                return event;
            }) });
    }
    checkBookingAvailability(data) {
        return this.calendarData.bookingEvents.some(booking => booking.ID === data.ID || (booking.FROM_DATE === data.FROM_DATE && booking.TO_DATE === data.TO_DATE && booking.PR_ID === data.PR_ID));
    }
    updateBookingEventsDateRange(eventData) {
        eventData.forEach(bookingEvent => {
            var _a;
            bookingEvent.legendData = this.calendarData.formattedLegendData;
            bookingEvent.defaultDateRange = {};
            bookingEvent.defaultDateRange.fromDate = new Date(bookingEvent.FROM_DATE + 'T00:00:00');
            bookingEvent.defaultDateRange.fromDateStr = this.getDateStr(bookingEvent.defaultDateRange.fromDate);
            bookingEvent.defaultDateRange.fromDateTimeStamp = bookingEvent.defaultDateRange.fromDate.getTime();
            bookingEvent.defaultDateRange.toDate = new Date(bookingEvent.TO_DATE + 'T00:00:00');
            bookingEvent.defaultDateRange.toDateStr = this.getDateStr(bookingEvent.defaultDateRange.toDate);
            bookingEvent.defaultDateRange.toDateTimeStamp = bookingEvent.defaultDateRange.toDate.getTime();
            bookingEvent.defaultDateRange.dateDifference = bookingEvent.NO_OF_DAYS;
            bookingEvent.roomsInfo = [...this.calendarData.roomsInfo];
            if (!isBlockUnit(bookingEvent.STATUS_CODE)) {
                // if (calendar_data.checkin_enabled) {
                bookingEvent.STATUS = getRoomStatus({
                    in_out: (_a = bookingEvent.ROOM_INFO) === null || _a === void 0 ? void 0 : _a.in_out,
                    from_date: bookingEvent.FROM_DATE,
                    to_date: bookingEvent.TO_DATE,
                    status_code: bookingEvent.BASE_STATUS_CODE,
                });
                // } else {
                //   const toDate = moment(bookingEvent.TO_DATE, 'YYYY-MM-DD');
                //   const fromDate = moment(bookingEvent.FROM_DATE, 'YYYY-MM-DD');
                //   if (bookingEvent.STATUS !== 'PENDING') {
                //     if (fromDate.isSame(now, 'day') && now.hour() >= 12) {
                //       bookingEvent.STATUS = bookingStatus['000'];
                //     } else if (now.isAfter(fromDate, 'day') && now.isBefore(toDate, 'day')) {
                //       bookingEvent.STATUS = bookingStatus['000'];
                //     } else if (toDate.isSame(now, 'day') && now.hour() < 12) {
                //       bookingEvent.STATUS = bookingStatus['000'];
                //     } else if ((toDate.isSame(now, 'day') && now.hour() >= 12) || toDate.isBefore(now, 'day')) {
                //       bookingEvent.STATUS = bookingStatus['003'];
                //     }
                //   }
                // }
            }
        });
    }
    /**
     *
     *private updateBookingEventsDateRange(eventData) {
      const now = moment();
      eventData.forEach(bookingEvent => {
        bookingEvent.legendData = this.calendarData.formattedLegendData;
        bookingEvent.defaultDateRange = {};
        bookingEvent.defaultDateRange.fromDate = new Date(bookingEvent.FROM_DATE + 'T00:00:00');
        bookingEvent.defaultDateRange.fromDateStr = this.getDateStr(bookingEvent.defaultDateRange.fromDate);
        bookingEvent.defaultDateRange.fromDateTimeStamp = bookingEvent.defaultDateRange.fromDate.getTime();
  
        bookingEvent.defaultDateRange.toDate = new Date(bookingEvent.TO_DATE + 'T00:00:00');
        bookingEvent.defaultDateRange.toDateStr = this.getDateStr(bookingEvent.defaultDateRange.toDate);
        bookingEvent.defaultDateRange.toDateTimeStamp = bookingEvent.defaultDateRange.toDate.getTime();
  
        bookingEvent.defaultDateRange.dateDifference = bookingEvent.NO_OF_DAYS;
        bookingEvent.roomsInfo = [...this.calendarData.roomsInfo];
        if (!isBlockUnit(bookingEvent.STATUS_CODE)) {
          const toDate = moment(bookingEvent.TO_DATE, 'YYYY-MM-DD');
          const fromDate = moment(bookingEvent.FROM_DATE, 'YYYY-MM-DD');
          if (bookingEvent.STATUS !== 'PENDING') {
            if (fromDate.isSame(now, 'day') && now.hour() >= 12) {
              bookingEvent.STATUS = bookingStatus['000'];
            } else if (now.isAfter(fromDate, 'day') && now.isBefore(toDate, 'day')) {
              bookingEvent.STATUS = bookingStatus['000'];
            } else if (toDate.isSame(now, 'day') && now.hour() < 12) {
              bookingEvent.STATUS = bookingStatus['000'];
            } else if ((toDate.isSame(now, 'day') && now.hour() >= 12) || toDate.isBefore(now, 'day')) {
              bookingEvent.STATUS = bookingStatus['003'];
            }
          }
        }
      });
    }
     */
    processSalesBatch(batch) {
        const days = [...calendar_dates.days];
        const disabled_cells = new Map(calendar_dates.disabled_cells);
        for (const sale of batch) {
            // 1) find the day index
            const dayIdx = days.findIndex(d => d.value === sale.night);
            if (dayIdx === -1) {
                console.warn(`Couldn't find day ${sale.night}`);
                continue;
            }
            // 2) check cache entry
            let entry = this.roomTypeIdsCache.get(sale.rate_plan_id);
            if (entry === 'skip') {
                // previously determined no matching room type for this rate_plan_id
                continue;
            }
            // 3) if not cached, look it up and cache it
            if (!entry) {
                const rtIdx = days[dayIdx].rate.findIndex(rt => rt.rateplans.some(rp => rp.id === sale.rate_plan_id));
                if (rtIdx === -1) {
                    this.roomTypeIdsCache.set(sale.rate_plan_id, 'skip');
                    console.warn(`Couldn't find room type for rate plan ${sale.rate_plan_id}`);
                    continue;
                }
                const roomType = days[dayIdx].rate[rtIdx];
                const rpIdx = roomType.rateplans.findIndex(rp => rp.id === sale.rate_plan_id);
                entry = { id: rtIdx, index: rpIdx };
                this.roomTypeIdsCache.set(sale.rate_plan_id, entry);
            }
            // 4) apply cached indices
            const { id: roomTypeIdx, index: ratePlanIdx } = entry;
            const roomType = days[dayIdx].rate[roomTypeIdx];
            // 5) update that specific rateplan
            const updatedRateplans = roomType.rateplans.map((rp, i) => (i === ratePlanIdx ? Object.assign(Object.assign({}, rp), { is_available_to_book: sale.is_available_to_book }) : rp));
            const is_available_to_book = updatedRateplans.some(rp => rp.is_available_to_book);
            days[dayIdx].rate[roomTypeIdx] = Object.assign(Object.assign({}, roomType), { rateplans: updatedRateplans,
                // overall room availability = true if any rateplan is bookable
                is_available_to_book });
            //update the disabled cells
            for (const room of roomType.physicalrooms) {
                const key = `${room.id}_${days[dayIdx].value}`;
                disabled_cells.set(key, { disabled: !is_available_to_book, reason: 'stop_sale' });
            }
        }
        // 6) write back to the store
        calendar_dates['disabled_cells'] = new Map(disabled_cells);
        calendar_dates.days = days;
    }
    processAvailabilityBatch(batch) {
        let days = [...calendar_dates.days];
        const disabled_cells = new Map(calendar_dates.disabled_cells);
        for (const queue of batch) {
            //find the selected day
            const index = days.findIndex(day => day.value === queue.date);
            if (index === -1) {
                console.warn(`Couldn't find day ${queue.date}`);
                return;
            }
            //find room_type_id
            const room_type_index = days[index].rate.findIndex(room => room.id === queue.room_type_id);
            if (room_type_index === -1) {
                console.warn(`Couldn't find room type ${queue.room_type_id}`);
                return;
            }
            const room_type = days[index].rate[room_type_index];
            //update the availability
            room_type.exposed_inventory.rts = queue.availability;
            // if (queue.availability === 0) {
            const isClosed = room_type.rateplans.every(rp => !rp.is_available_to_book);
            for (const room of room_type.physicalrooms) {
                const key = `${room.id}_${queue.date}`;
                disabled_cells.set(key, { disabled: queue.availability === 0, reason: isClosed ? 'stop_sale' : 'inventory' });
            }
            // }
        }
        calendar_dates['disabled_cells'] = new Map(disabled_cells);
        calendar_dates.days = [...days];
    }
    setRoomsData(roomServiceResp) {
        var _a, _b;
        let roomsData = new Array();
        if ((_b = (_a = roomServiceResp.My_Result) === null || _a === void 0 ? void 0 : _a.roomtypes) === null || _b === void 0 ? void 0 : _b.length) {
            roomsData = roomServiceResp.My_Result.roomtypes;
            roomServiceResp.My_Result.roomtypes.forEach(roomCategory => {
                roomCategory.expanded = true;
            });
        }
        calendar_data.roomsInfo = roomsData;
        this.calendarData.roomsInfo = roomsData;
    }
    getLegendData(aData) {
        return aData['My_Result'].calendar_legends;
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    scrollToElement(goToDate) {
        this.scrollContainer = this.scrollContainer || this.element.querySelector('.calendarScrollContainer');
        const topLeftCell = this.element.querySelector('.topLeftCell');
        const gotoDay = this.element.querySelector('.day-' + goToDate);
        if (gotoDay) {
            this.scrollContainer.scrollTo({ left: 0 });
            const gotoRect = gotoDay.getBoundingClientRect();
            const containerRect = this.scrollContainer.getBoundingClientRect();
            const topLeftCellRect = topLeftCell.getBoundingClientRect();
            this.scrollContainer.scrollTo({
                left: gotoRect.left - containerRect.left - topLeftCellRect.width - gotoRect.width,
            });
        }
    }
    AddOrUpdateRoomBookings(data, pool = undefined) {
        let bookings = [...this.calendarData.bookingEvents];
        data.forEach(d => {
            if (!this.checkBookingAvailability(d)) {
                bookings = bookings.filter(booking => booking.ID !== d.ID);
            }
        });
        this.updateBookingEventsDateRange(data);
        if (pool) {
            bookings = bookings.filter(booking => booking.POOL === pool);
        }
        data.forEach(d => {
            if (!bookings.some(booking => booking.ID === d.ID)) {
                bookings.push(d);
            }
        });
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: bookings });
    }
    transformDateForScroll(date) {
        return hooks(date).format('D_M_YYYY');
    }
    shouldRenderCalendarView() {
        // console.log("rendering...")
        return this.calendarData && this.calendarData.days && this.calendarData.days.length;
    }
    onOptionSelect(event) {
        const opt = event.detail;
        const calendarElement = this.element.querySelector('#iglooCalendar');
        switch (opt.key) {
            case 'showAssigned':
                calendarElement.classList.remove('showLegend');
                calendarElement.classList.remove('showToBeAssigned');
                calendarElement.classList.toggle('showToBeAssigned');
                this.showLegend = false;
                this.showToBeAssigned = true;
                break;
            case 'showLegend':
                calendarElement.classList.remove('showToBeAssigned');
                calendarElement.classList.remove('showLegend');
                calendarElement.classList.toggle('showLegend');
                this.showLegend = true;
                this.showToBeAssigned = false;
                break;
            case 'calendar':
                let dt = new Date();
                if (opt.data.start !== undefined && opt.data.end !== undefined) {
                    dt = opt.data.start.toDate();
                    this.handleDateSearch(opt.data);
                }
                else {
                    //scroll to unassigned dates
                    dt = new Date(opt.data);
                    dt.setDate(dt.getDate() + 1);
                    if (!(opt === null || opt === void 0 ? void 0 : opt.noScroll)) {
                        this.scrollToElement(dt.getDate() + '_' + (dt.getMonth() + 1) + '_' + dt.getFullYear());
                    }
                }
                this.highlightedDate = this.transformDateForScroll(dt);
                break;
            case 'search':
                break;
            case 'bulk':
                this.calendarSidebarState = {
                    type: 'bulk-blocks',
                    payload: null,
                };
                break;
            case 'add':
                //console.log('data:', opt.data);
                if (opt.data.event_type !== 'EDIT_BOOKING') {
                    this.bookingItem = opt.data;
                }
                else {
                    this.editBookingItem = opt.data;
                }
                break;
            case 'gotoToday':
                this.scrollToElement(this.today);
                break;
            case 'closeSideMenu':
                this.closeSideMenu();
                this.highlightedDate = '';
                this.showBookProperty = false;
                break;
        }
    }
    async addDatesToCalendar(fromDate, toDate) {
        const results = await this.bookingService.getCalendarData(this.property_id, fromDate, toDate);
        const newBookings = results.myBookings || [];
        this.updateBookingEventsDateRange(newBookings);
        if (new Date(fromDate).getTime() < new Date(this.calendarData.startingDate).getTime()) {
            this.calendarData.startingDate = new Date(fromDate).getTime();
            this.calendarData.from_date = fromDate;
            calendar_dates.fromDate = this.calendarData.from_date;
            this.days = [...results.days, ...this.days];
            let newMonths = [...results.months];
            if (this.calendarData.monthsInfo[0].monthName === results.months[results.months.length - 1].monthName) {
                this.calendarData.monthsInfo[0].daysCount = this.calendarData.monthsInfo[0].daysCount + results.months[results.months.length - 1].daysCount;
                newMonths.pop();
            }
            let bookings = JSON.parse(JSON.stringify(newBookings));
            bookings = bookings.filter(newBooking => {
                const existingBookingIndex = this.calendarData.bookingEvents.findIndex(event => event.ID === newBooking.ID);
                if (existingBookingIndex !== -1) {
                    this.calendarData.bookingEvents[existingBookingIndex].FROM_DATE = newBooking.FROM_DATE;
                    this.calendarData.bookingEvents[existingBookingIndex].NO_OF_DAYS = calculateDaysBetweenDates(newBooking.FROM_DATE, this.calendarData.bookingEvents[existingBookingIndex].TO_DATE);
                    return false;
                }
                return true;
            });
            calendar_dates.days = this.days;
            this.calendarData = Object.assign(Object.assign({}, this.calendarData), { days: this.days, monthsInfo: [...newMonths, ...this.calendarData.monthsInfo], bookingEvents: [...this.calendarData.bookingEvents, ...bookings] });
            if (Math.abs(hooks().diff(hooks(fromDate, 'YYYY-MM-DD'), 'days')) <= 10) {
                const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, fromDate, toDate);
                this.calendarData.unassignedDates = Object.assign(Object.assign({}, this.calendarData.unassignedDates), data);
                this.unassignedDates = {
                    fromDate,
                    toDate,
                    data,
                };
                addUnassignedDates(data);
            }
        }
        else {
            this.calendarData.endingDate = new Date(toDate).getTime();
            this.calendarData.to_date = toDate;
            calendar_dates.toDate = this.calendarData.to_date;
            let newMonths = [...results.months];
            this.days = [...this.days, ...results.days];
            if (this.calendarData.monthsInfo[this.calendarData.monthsInfo.length - 1].monthName === results.months[0].monthName) {
                this.calendarData.monthsInfo[this.calendarData.monthsInfo.length - 1].daysCount =
                    this.calendarData.monthsInfo[this.calendarData.monthsInfo.length - 1].daysCount + results.months[0].daysCount;
                newMonths.shift();
            }
            let bookings = JSON.parse(JSON.stringify(newBookings));
            bookings = bookings.filter(newBooking => {
                const existingBookingIndex = this.calendarData.bookingEvents.findIndex(event => event.ID === newBooking.ID);
                if (existingBookingIndex !== -1) {
                    this.calendarData.bookingEvents[existingBookingIndex].TO_DATE = newBooking.TO_DATE;
                    this.calendarData.bookingEvents[existingBookingIndex].NO_OF_DAYS = calculateDaysBetweenDates(this.calendarData.bookingEvents[existingBookingIndex].FROM_DATE, newBooking.TO_DATE);
                    return false;
                }
                return true;
            });
            calendar_dates.days = this.days;
            //calendar_dates.months = bookingResp.months;
            this.calendarData = Object.assign(Object.assign({}, this.calendarData), { days: this.days, monthsInfo: [...this.calendarData.monthsInfo, ...newMonths], bookingEvents: [...this.calendarData.bookingEvents, ...bookings] });
            const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, fromDate, toDate);
            this.calendarData.unassignedDates = Object.assign(Object.assign({}, this.calendarData.unassignedDates), data);
            this.unassignedDates = {
                fromDate,
                toDate,
                data,
            };
            addUnassignedDates(data);
        }
    }
    async handleDateSearch(dates) {
        const startDate = hooks(dates.start).toDate();
        const defaultFromDate = hooks(this.calDates.from).toDate();
        const endDate = dates.end.toDate();
        const defaultToDate = this.calendarData.endingDate;
        if (startDate.getTime() < new Date(this.calDates.from).getTime()) {
            await this.addDatesToCalendar(hooks(startDate).add(-1, 'days').format('YYYY-MM-DD'), hooks(defaultFromDate).add(-1, 'days').format('YYYY-MM-DD'));
            this.calDates = Object.assign(Object.assign({}, this.calDates), { from: dates.start.add(-1, 'days').format('YYYY-MM-DD') });
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
        else if (startDate.getTime() > defaultFromDate.getTime() && startDate.getTime() < defaultToDate && endDate.getTime() < defaultToDate) {
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
        else if (startDate.getTime() > defaultToDate) {
            const nextDay = getNextDay(new Date(this.calendarData.endingDate));
            await this.addDatesToCalendar(nextDay, hooks(endDate).add(2, 'months').format('YYYY-MM-DD'));
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
    }
    closeSideMenu() {
        // const calendarElement = this.element.querySelector('#iglooCalendar');
        // calendarElement.classList.remove('showToBeAssigned');
        // calendarElement.classList.remove('showLegend');
        this.showLegend = false;
        this.showToBeAssigned = false;
    }
    dragScrollContent(event) {
        this.scrollViewDragging = false;
        let isPreventPageScroll = event && event.target ? this.hasAncestorWithClass(event.target, 'preventPageScroll') : false;
        if (!isPreventPageScroll && event.buttons === 1) {
            this.scrollViewDragPos = {
                left: this.scrollContainer.scrollLeft,
                top: this.scrollContainer.scrollTop,
                x: event.clientX,
                y: event.clientY,
            };
            document.addEventListener('mousemove', this.onScrollContentMoveHandler);
            document.addEventListener('mouseup', this.onScrollContentMoveEndHandler);
        }
    }
    calendarScrolling() {
        if (this.scrollContainer) {
            if (this.highlightedDate) {
                const highlightedElement = document.querySelector(`.day-${this.highlightedDate}`);
                if (highlightedElement) {
                    const { left, right } = highlightedElement.getBoundingClientRect();
                    const isVisible = left >= 0 && right <= window.innerWidth;
                    if (!isVisible) {
                        this.highlightedDate = '';
                    }
                }
            }
            const containerRect = this.scrollContainer.getBoundingClientRect();
            let leftSideMenuSize = 170;
            let maxWidth = containerRect.width - leftSideMenuSize;
            let leftX = containerRect.x + leftSideMenuSize;
            let rightX = containerRect.x + containerRect.width;
            let cells = Array.from(this.element.querySelectorAll('.monthCell'));
            if (cells.length) {
                cells.map(async (monthContainer) => {
                    let monthRect = monthContainer.getBoundingClientRect();
                    if (cells.indexOf(monthContainer) === cells.length - 1) {
                        if (monthRect.x + monthRect.width <= rightX && !this.reachedEndOfCalendar) {
                            this.reachedEndOfCalendar = true;
                            //await this.addNextTwoMonthsToCalendar();
                            const nextTwoMonths = addTwoMonthToDate(new Date(this.calendarData.endingDate));
                            const nextDay = getNextDay(new Date(this.calendarData.endingDate));
                            await this.addDatesToCalendar(nextDay, nextTwoMonths);
                            this.reachedEndOfCalendar = false;
                        }
                    }
                    if (monthRect.x + monthRect.width < leftX) ;
                    else if (monthRect.x > rightX) ;
                    else {
                        let titleElement = monthContainer.querySelector('.monthTitle');
                        let marginLeft = 0;
                        let monthWidth = monthRect.width;
                        if (monthRect.x < leftX) {
                            marginLeft = Math.abs(monthRect.x) - leftX;
                            marginLeft = monthRect.x < 0 ? Math.abs(monthRect.x) + leftX : Math.abs(marginLeft);
                            monthWidth = monthRect.x + monthRect.width > rightX ? maxWidth : monthRect.x + monthRect.width - leftX;
                        }
                        else {
                            monthWidth = maxWidth - monthWidth > monthWidth ? monthWidth : maxWidth - monthRect.x + leftX;
                        }
                        titleElement.style.marginLeft = marginLeft + 'px';
                        titleElement.style.width = monthWidth + 'px';
                    }
                });
            }
        }
    }
    hasAncestorWithClass(element, className) {
        let currentElement = element;
        while (currentElement !== null) {
            if (currentElement.matches(`.${className}`)) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }
    async highlightDragOver(hightLightElement, currentPosition) {
        let xElement, yElement;
        if (currentPosition) {
            xElement = this.visibleCalendarCells.x.find(pos => pos.left < currentPosition.x && currentPosition.x <= pos.left + pos.width);
            yElement = this.visibleCalendarCells.y.find(pos => pos.top < currentPosition.y && currentPosition.y <= pos.top + pos.height);
        }
        // console.log(hightLightElement+":::"+yElement.id+"_"+xElement.id);
        if (hightLightElement && xElement && yElement) {
            this.dragOverHighlightElement.emit({
                dragOverElement: yElement.id + '_' + xElement.id,
            });
        }
        else {
            this.dragOverHighlightElement.emit({ dragOverElement: '' });
        }
        if (!hightLightElement) {
            this.moveBookingTo.emit({
                bookingId: currentPosition.id,
                fromRoomId: currentPosition.fromRoomId,
                toRoomId: (yElement && yElement.id) || 'revert',
                moveToDay: (xElement && xElement.id) || 'revert',
                pool: currentPosition.pool,
                from_date: convertDMYToISO(xElement && xElement.id),
                to_date: computeEndDate(xElement && xElement.id, currentPosition.nbOfDays),
            });
        }
    }
    handleModalConfirm() {
        var _a;
        // Helper to reset modal state
        const resetModalState = () => {
            this.dialogData = null;
        };
        try {
            switch ((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.reason) {
                case 'checkin':
                case 'checkout': {
                    const { bookingNumber, roomIdentifier } = this.dialogData;
                    const status = this.dialogData.reason === 'checkin' ? '001' : '002';
                    this.bookingService.handleExposedRoomInOut({ booking_nbr: bookingNumber, room_identifier: roomIdentifier, status }).finally(resetModalState);
                    if (this.dialogData.reason === 'checkin') {
                        this.openCalendarSidebar.emit({ type: 'room-guests', payload: this.dialogData.sidebarPayload });
                    }
                    break;
                }
                case 'stretch':
                    const _b = this.dialogData, rest = __rest$2(_b, ["reason"]);
                    this.showRoomNightsDialog.emit(rest);
                    break;
                case 'reallocate': {
                    if (!this.dialogData) {
                        console.warn('No dialog data available for reallocation.');
                        return;
                    }
                    const { pool, toRoomId, from_date, to_date } = this.dialogData;
                    // Handle room reallocation
                    this.eventsService
                        .reallocateEvent(pool, toRoomId, from_date, to_date)
                        .then(resetModalState)
                        .catch(() => {
                        console.error('Reallocation failed. Reverting booking.');
                        this.revertBooking.emit(pool);
                    })
                        .finally(resetModalState);
                    break;
                }
                default:
                    resetModalState();
                    break;
            }
        }
        catch (error) {
            console.error('Error handling modal confirm:', error);
            resetModalState();
        }
    }
    handleModalCancel() {
        var _a;
        if (((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.reason) === 'reallocate' || this.dialogData.reason === 'stretch') {
            this.revertBooking.emit(this.dialogData.pool);
        }
        this.dialogData = null;
    }
    handleRoomNightsDialogClose(e) {
        if (e.detail.type === 'cancel') {
            this.revertBooking.emit(this.roomNightsData.pool);
        }
        this.roomNightsData = null;
    }
    handleSideBarToggle(e) {
        var _a;
        if (e.detail) {
            this.calendarSidebarState = null;
            if (this.editBookingItem) {
                this.editBookingItem = null;
            }
            if (this.roomNightsData) {
                this.revertBooking.emit(this.roomNightsData.pool);
                this.roomNightsData = null;
            }
            if (((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.reason) === 'reallocate') {
                this.revertBooking.emit(this.dialogData.pool);
                this.dialogData = null;
            }
        }
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        // if (!this.isAuthenticated) {
        //   return <ir-login onAuthFinish={() => this.auth.setIsAuthenticated(true)}></ir-login>;
        // }
        return (h(Host, { key: '53001fb356bf9229e6d5192cfb5b4f434413c7ff' }, h("ir-toast", { key: 'e8a18be9dd45931b1f0642dabaa045f5bf554091' }), h("ir-interceptor", { key: '695ced61af3d8bfe97717f152d1441f1c392f4ae' }), h("div", { key: 'a114ea6a20df2060978625a5471b669686e6b906', id: "iglooCalendar", class: { 'igl-calendar': true, 'showToBeAssigned': this.showToBeAssigned, 'showLegend': this.showLegend } }, this.shouldRenderCalendarView() ? (h(Fragment, { "data-testid": "ir-calendar" }, this.showToBeAssigned && (h("igl-to-be-assigned", { unassignedDatesProp: this.unassignedDates, to_date: this.to_date, from_date: this.from_date, propertyid: this.property_id, class: "tobeAssignedContainer", calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) })), this.showLegend && h("igl-legends", { class: "legendContainer", legendData: this.calendarData.legendData, onOptionEvent: evt => this.onOptionSelect(evt) }), h("div", { class: "calendarScrollContainer", onMouseDown: event => this.dragScrollContent(event), onScroll: () => this.calendarScrolling() }, h("div", { id: "calendarContainer" }, h("igl-cal-header", { unassignedDates: this.unassignedDates, to_date: this.to_date, propertyid: this.property_id, today: this.today, calendarData: this.calendarData, highlightedDate: this.highlightedDate, onOptionEvent: evt => this.onOptionSelect(evt) }), h("igl-cal-body", { propertyId: this.property_id, language: this.language, countries: this.countries, currency: this.calendarData.currency, today: this.today, highlightedDate: this.highlightedDate, isScrollViewDragging: this.scrollViewDragging, calendarData: this.calendarData }), h("igl-cal-footer", { highlightedDate: this.highlightedDate, today: this.today, calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) }))))) : (h("ir-loading-screen", { message: "Preparing Calendar Data" }))), this.bookingItem && (h("igl-book-property", { key: '8520d0bd619794271bc769280afa0f6acefeea48', allowedBookingSources: this.calendarData.allowedBookingSources, adultChildConstraints: this.calendarData.adultChildConstraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.property_id, bookingData: this.bookingItem, onCloseBookingWindow: () => this.handleCloseBookingWindow() })), h("ir-sidebar", { key: 'afac3cbcf5920a410cea111f2741fe3cf4890b38', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: !!this.calendarSidebarState || this.roomNightsData !== null || (this.editBookingItem && this.editBookingItem.event_type === 'EDIT_BOOKING'), showCloseButton: false, sidebarStyles: {
                width: ((_a = this.calendarSidebarState) === null || _a === void 0 ? void 0 : _a.type) === 'room-guests' ? '60rem' : this.editBookingItem ? '80rem' : 'var(--sidebar-width,40rem)',
                background: this.editBookingItem ? '#F2F3F8' : 'white',
            } }, this.roomNightsData && (h("ir-room-nights", { key: '8a6cd06670d9258c66710d13b88e48e6efed9f67', slot: "sidebar-body", pool: this.roomNightsData.pool, onCloseRoomNightsDialog: this.handleRoomNightsDialogClose.bind(this), language: this.language, bookingNumber: this.roomNightsData.bookingNumber, identifier: this.roomNightsData.identifier, toDate: this.roomNightsData.to_date, fromDate: this.roomNightsData.from_date, defaultDates: this.roomNightsData.defaultDates, ticket: this.ticket, propertyId: this.property_id })), this.editBookingItem && this.editBookingItem.event_type === 'EDIT_BOOKING' && (h("ir-booking-details", { key: 'fa325d9428c365842ca5a6dc3b4fd4cba150d90e', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.editBookingItem = null), is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.editBookingItem.BOOKING_NUMBER, ticket: this.ticket, language: this.language, hasRoomAdd: true })), ((_b = this.calendarSidebarState) === null || _b === void 0 ? void 0 : _b.type) === 'room-guests' && (h("ir-room-guests", { key: 'c4686e3151ccdbd1248124104ae7678f9f5f702b', countries: this.countries, language: this.language, identifier: (_d = (_c = this.calendarSidebarState) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.identifier, bookingNumber: (_e = this.calendarSidebarState) === null || _e === void 0 ? void 0 : _e.payload.bookingNumber, roomName: (_g = (_f = this.calendarSidebarState) === null || _f === void 0 ? void 0 : _f.payload) === null || _g === void 0 ? void 0 : _g.roomName, totalGuests: (_j = (_h = this.calendarSidebarState) === null || _h === void 0 ? void 0 : _h.payload) === null || _j === void 0 ? void 0 : _j.totalGuests, sharedPersons: (_l = (_k = this.calendarSidebarState) === null || _k === void 0 ? void 0 : _k.payload) === null || _l === void 0 ? void 0 : _l.sharing_persons, slot: "sidebar-body", checkIn: (_o = (_m = this.calendarSidebarState) === null || _m === void 0 ? void 0 : _m.payload) === null || _o === void 0 ? void 0 : _o.checkin, onCloseModal: () => (this.calendarSidebarState = null) })), ((_p = this.calendarSidebarState) === null || _p === void 0 ? void 0 : _p.type) === 'bulk-blocks' && (h("igl-bulk-stop-sale", { key: '4c172655a6cd8b40bb94897d6bf2fd6679090e3d', slot: "sidebar-body", property_id: this.property_id, onCloseModal: () => (this.calendarSidebarState = null) }))), h("ir-modal", { key: 'a56b15421ed7cb37c06f6e019cb5ecee7698b979', ref: el => (this.calendarModalEl = el), modalTitle: '', rightBtnActive: ((_q = this.dialogData) === null || _q === void 0 ? void 0 : _q.reason) === 'reallocate' ? !this.dialogData.hideConfirmButton : true, leftBtnText: (_r = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _r === void 0 ? void 0 : _r.Lcz_Cancel, rightBtnText: (_s = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _s === void 0 ? void 0 : _s.Lcz_Confirm, modalBody: this.renderModalBody(), onConfirmModal: this.handleModalConfirm.bind(this), onCancelModal: this.handleModalCancel.bind(this) })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IglooCalendar.style = IglooCalendarStyle0;

const irHkTasksCss = ".sc-ir-hk-tasks-h{display:block;box-sizing:border-box}.sc-ir-hk-tasks-h *.sc-ir-hk-tasks{box-sizing:border-box}.tasks-view.sc-ir-hk-tasks{display:flex;flex-direction:column}@media (min-width: 1024px){.tasks-view.sc-ir-hk-tasks{flex-direction:row}}";
const IrHkTasksStyle0 = irHkTasksCss;

const IrHkTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clearSelectedHkTasks = createEvent(this, "clearSelectedHkTasks", 7);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.isCleaningLoading = false;
        this.selectedDuration = '';
        this.selectedHouseKeeper = '0';
        this.selectedRoom = null;
        this.archiveOpened = false;
        this.hkNameCache = {};
        this.roomService = new RoomService();
        this.houseKeepingService = new HouseKeepingService();
        this.token = new Token();
        this.table_sorting = new Map();
    }
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    handleCloseSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isSidebarOpen = false;
    }
    handleSortingChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { field, direction } = e.detail;
        console.log(e.detail);
        if (field === 'date') {
            return;
        }
        this.table_sorting.set(field, direction);
    }
    handleSkipSelectedTask(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { task: e.detail, cause: 'skip' };
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.openModal();
    }
    async init() {
        try {
            this.isLoading = true;
            setLoading(true);
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.houseKeepingService.getHkTasks({ property_id: this.property_id, from_date: hooks().format('YYYY-MM-DD'), to_date: hooks().format('YYYY-MM-DD') }),
                this.houseKeepingService.getExposedHKSetup(this.property_id),
                this.roomService.fetchLanguage(this.language),
            ];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const results = await Promise.all(requests);
            const tasksResult = results[0];
            // updateTaskList();
            if (tasksResult === null || tasksResult === void 0 ? void 0 : tasksResult.tasks) {
                this.updateTasks(tasksResult.tasks);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            setLoading(false);
        }
    }
    buildHousekeeperNameCache() {
        var _a, _b;
        this.hkNameCache = {};
        (_b = (_a = housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.forEach(hk => {
            if (hk.id != null && hk.name != null) {
                this.hkNameCache[hk.id] = hk.name;
            }
        });
    }
    updateTasks(tasks) {
        this.buildHousekeeperNameCache();
        updateTasks(tasks.map(t => (Object.assign(Object.assign({}, t), { id: v4(), housekeeper: (() => {
                var _a, _b, _c;
                const name = this.hkNameCache[t.hkm_id];
                if (name) {
                    return name;
                }
                const hkName = (_c = (_b = (_a = housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.find(hk => hk.id === t.hkm_id)) === null || _c === void 0 ? void 0 : _c.name;
                this.hkNameCache[t.hkm_id] = hkName;
                return hkName;
            })() }))));
    }
    async handleHeaderButtonPress(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { name } = e.detail;
        switch (name) {
            case 'cleaned':
                (_a = this.modal) === null || _a === void 0 ? void 0 : _a.openModal();
                break;
            case 'export':
                const sortingArray = Array.from(this.table_sorting.entries()).map(([key, value]) => ({
                    key,
                    value,
                }));
                console.log(sortingArray);
                const { url } = await this.fetchTasksWithFilters(true);
                downloadFile(url);
                break;
            case 'archive':
                this.isSidebarOpen = true;
                break;
        }
    }
    handleSelectedTaskCleaningEvent(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modalCauses = { task: e.detail, cause: 'clean' };
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.openModal();
    }
    async handleModalConfirmation(e) {
        var _a;
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (hkTasksStore.selectedTasks.length === 0) {
                return;
            }
            this.isCleaningLoading = true;
            if (((_a = this.modalCauses) === null || _a === void 0 ? void 0 : _a.cause) === 'skip') {
                const { booking_nbr, date, unit } = this.modalCauses.task;
                await this.houseKeepingService.editHkSkip({
                    BOOK_NBR: booking_nbr,
                    DATE: date,
                    COMMENT: '',
                    HK_SKIP_ID: -1,
                    HK_SKIP_REASON_CODE: '001',
                    PR_ID: unit.id,
                });
            }
            else {
                await this.houseKeepingService.executeHKAction({
                    actions: hkTasksStore.selectedTasks.map(t => ({ description: 'Cleaned', hkm_id: t.hkm_id === 0 ? null : t.hkm_id, unit_id: t.unit.id, booking_nbr: t.booking_nbr })),
                });
            }
            await this.fetchTasksWithFilters();
        }
        finally {
            clearSelectedTasks();
            if (this.modalCauses) {
                this.modalCauses = null;
            }
            this.isCleaningLoading = false;
            // this.clearSelectedTasks.emit();
            this.modal.closeModal();
        }
    }
    async applyFilters(e) {
        try {
            this.isApplyFiltersLoading = true;
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.filters = Object.assign({}, e.detail);
            await this.fetchTasksWithFilters();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isApplyFiltersLoading = false;
        }
    }
    async fetchTasksWithFilters(export_to_excel = false) {
        var _a;
        const { cleaning_periods, housekeepers, cleaning_frequencies, dusty_units, highlight_check_ins } = (_a = this.filters) !== null && _a !== void 0 ? _a : {};
        const { tasks, url } = await this.houseKeepingService.getHkTasks({
            housekeepers,
            cleaning_frequency: cleaning_frequencies === null || cleaning_frequencies === void 0 ? void 0 : cleaning_frequencies.code,
            dusty_window: dusty_units === null || dusty_units === void 0 ? void 0 : dusty_units.code,
            highlight_window: highlight_check_ins === null || highlight_check_ins === void 0 ? void 0 : highlight_check_ins.code,
            property_id: this.property_id,
            from_date: hooks().format('YYYY-MM-DD'),
            to_date: (cleaning_periods === null || cleaning_periods === void 0 ? void 0 : cleaning_periods.code) || hooks().format('YYYY-MM-DD'),
            is_export_to_excel: export_to_excel,
        });
        console.log(tasks);
        if (tasks) {
            this.updateTasks(tasks);
        }
        return { tasks, url };
    }
    render() {
        var _a, _b, _c, _d;
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, { "data-testid": "hk_tasks_base" }, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-1 d-flex flex-column", style: { gap: '1rem' } }, h("h3", null, "Housekeeping Tasks"), h("div", { class: "tasks-view ", style: { gap: '1rem' } }, h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), h("div", { class: "d-flex w-100 flex-column", style: { gap: '1rem' } }, h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                updateSelectedTasks(e.detail);
            }, class: "flex-grow-1 w-100" })))), h("ir-modal", { autoClose: false, ref: el => (this.modal = el), isLoading: this.isCleaningLoading, onConfirmModal: this.handleModalConfirmation.bind(this), onCancelModal: () => {
                if (this.modalCauses) {
                    clearSelectedTasks();
                    this.modalCauses = null;
                }
            }, iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_Cancel, rightBtnText: locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: 'primary', modalTitle: locales.entries.Lcz_Confirmation, modalBody: this.modalCauses
                ? ((_a = this.modalCauses) === null || _a === void 0 ? void 0 : _a.cause) === 'clean'
                    ? `Update ${(_d = (_c = (_b = this.modalCauses) === null || _b === void 0 ? void 0 : _b.task) === null || _c === void 0 ? void 0 : _c.unit) === null || _d === void 0 ? void 0 : _d.name} to Clean`
                    : 'Skip cleaning and reschedule for tomorrow.'
                : 'Update selected unit(s) to Clean' }), h("ir-sidebar", { open: this.isSidebarOpen, id: "editGuestInfo", onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isSidebarOpen = false;
            },
            // sidebarStyles={{
            //   width: '80vw',
            // }}
            showCloseButton: false }, this.isSidebarOpen && h("ir-hk-archive", { ticket: this.token.getToken(), propertyId: this.property_id, slot: "sidebar-body" }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHkTasks.style = IrHkTasksStyle0;

const irMonthlyBookingsReportCss = ".sc-ir-monthly-bookings-report-h{display:block}";
const IrMonthlyBookingsReportStyle0 = irMonthlyBookingsReportCss;

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IrMonthlyBookingsReport = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.isPageLoading = true;
        this.isLoading = null;
        this.reports = [];
        this.tokenService = new Token();
        this.roomService = new RoomService();
        this.propertyService = new PropertyService();
    }
    componentWillLoad() {
        this.baseFilters = {
            date: {
                description: hooks().format('MMMM YYYY'),
                firstOfMonth: hooks().startOf('month').format('YYYY-MM-DD'),
                lastOfMonth: hooks().endOf('month').format('YYYY-MM-DD'),
            },
            include_previous_year: false,
        };
        this.filters = this.baseFilters;
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleApplyFiltersChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = e.detail;
        this.getReports();
    }
    async init() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.roomService.fetchLanguage(this.language), this.getReports()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getReports(isExportToExcel = false) {
        try {
            const getReportObj = (report) => {
                return {
                    day: report.Date,
                    units_booked: report.Units_booked,
                    occupancy_percent: report.Occupancy,
                    adr: report.ADR,
                    rooms_revenue: report.Rooms_Revenue,
                    total_guests: report === null || report === void 0 ? void 0 : report.Total_Guests,
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const { date, include_previous_year } = this.filters;
            const requests = [
                this.propertyService.getMonthlyStats({
                    from_date: date.firstOfMonth,
                    to_date: date.lastOfMonth,
                    property_id: this.property_id,
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (include_previous_year) {
                requests.push(this.propertyService.getMonthlyStats({
                    from_date: hooks(date.firstOfMonth, 'YYYY-MM-DD').add(-1, 'year').format('YYYY-MM-DD'),
                    to_date: hooks(date.lastOfMonth, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'),
                    property_id: this.property_id,
                }));
            }
            const results = await Promise.all(requests);
            const currentReports = results[0];
            let enrichedReports = [];
            const { DailyStats } = currentReports, rest = __rest$1(currentReports, ["DailyStats"]);
            this.stats = Object.assign({}, rest);
            if (include_previous_year && results[isExportToExcel ? 1 : 2]) {
                const previousYearReports = results[isExportToExcel ? 1 : 2];
                let formattedReports = previousYearReports.DailyStats.map(getReportObj);
                enrichedReports = DailyStats.map(getReportObj).map(current => {
                    const previous = formattedReports.find(prev => prev.day === hooks(current.day, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'));
                    return Object.assign(Object.assign({}, current), { last_year: previous !== null && previous !== void 0 ? previous : null });
                });
            }
            else {
                enrichedReports = DailyStats.map(getReportObj);
            }
            this.reports = [...enrichedReports];
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Daily Occupancy"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("section", null, h("div", { class: "d-flex flex-column flex-md-row w-100", style: { gap: '1rem', alignItems: 'stretch' } }, h("ir-report-stats-card", { icon: ((_b = this.stats) === null || _b === void 0 ? void 0 : _b.Occupancy_Difference_From_Previous_Month) < 0 ? 'arrow-trend-down' : 'arrow-trend-up', cardTitle: "Average Occupancy", value: this.stats.AverageOccupancy ? ((_c = this.stats) === null || _c === void 0 ? void 0 : _c.AverageOccupancy.toFixed(2)) + '%' : null, subtitle: `${((_d = this.stats) === null || _d === void 0 ? void 0 : _d.Occupancy_Difference_From_Previous_Month) < 0 ? '' : '+'}${(_e = this.stats) === null || _e === void 0 ? void 0 : _e.Occupancy_Difference_From_Previous_Month.toFixed(2)}% from last month` }), h("ir-report-stats-card", { icon: "hotel", cardTitle: "Total Units", value: ((_f = this.stats) === null || _f === void 0 ? void 0 : _f.TotalUnitsBooked) ? (_g = this.stats) === null || _g === void 0 ? void 0 : _g.TotalUnitsBooked.toString() : null, subtitle: "Booked" }), h("ir-report-stats-card", { icon: "user_group", cardTitle: "Total Guests", value: (_j = (_h = this.reports) === null || _h === void 0 ? void 0 : _h.reduce((prev, curr) => prev + curr.total_guests, 0)) === null || _j === void 0 ? void 0 : _j.toString(), subtitle: "Stayed" }), h("ir-report-stats-card", { icon: "calendar", cardTitle: "Peak Days", value: ((_k = this.stats) === null || _k === void 0 ? void 0 : _k.PeakDays.length) === 0 ? null : (_m = (_l = this.stats) === null || _l === void 0 ? void 0 : _l.PeakDays) === null || _m === void 0 ? void 0 : _m.map(pd => hooks(pd.Date, 'YYYY-MM-DD').format('D').concat('th')).join(' - '), subtitle: `${Math.max(...(((_o = this.stats.PeakDays) === null || _o === void 0 ? void 0 : _o.map(pd => pd.OccupancyPercent)) || []))}% occupancy` })), h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), h("ir-monthly-bookings-report-table", { reports: this.reports }))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrMonthlyBookingsReport.style = IrMonthlyBookingsReportStyle0;

const irSalesByCountryCss = ".sc-ir-sales-by-country-h{display:block}";
const IrSalesByCountryStyle0 = irSalesByCountryCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IrSalesByCountry = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.isLoading = null;
        this.isPageLoading = true;
        this.countries = new Map();
        this.token = new Token();
        this.roomService = new RoomService();
        this.propertyService = new PropertyService();
        this.bookingService = new BookingService();
        this.baseFilters = {
            FROM_DATE: hooks().add(-7, 'days').format('YYYY-MM-DD'),
            TO_DATE: hooks().format('YYYY-MM-DD'),
            BOOK_CASE: '001',
            WINDOW: 7,
            include_previous_year: false,
        };
    }
    componentWillLoad() {
        this.salesFilters = this.baseFilters;
        if (this.ticket) {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.bookingService.getCountries(this.language), this.roomService.fetchLanguage(this.language), this.getCountrySales()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [countries] = await Promise.all(requests);
            const mappedCountries = new Map();
            countries.map(country => {
                mappedCountries.set(country.id, {
                    flag: country.flag,
                    name: country.name,
                });
            });
            this.countries = mappedCountries;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getCountrySales(isExportToExcel = false) {
        const formatSalesData = (data) => {
            return {
                country: data.COUNTRY,
                country_id: data.COUNTRY_ID,
                nights: data.NIGHTS,
                percentage: data.PCT,
                revenue: data.REVENUE,
                number_of_guests: data.Total_Guests,
            };
        };
        try {
            const _a = this.salesFilters, { include_previous_year } = _a, filterParams = __rest(_a, ["include_previous_year"]);
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const currentSales = await this.propertyService.getCountrySales(Object.assign({ AC_ID: this.property_id, is_export_to_excel: isExportToExcel }, filterParams));
            const shouldFetchPreviousYear = !isExportToExcel && include_previous_year;
            let enrichedSales = [];
            if (shouldFetchPreviousYear) {
                const previousYearSales = await this.propertyService.getCountrySales(Object.assign(Object.assign({ AC_ID: this.property_id, is_export_to_excel: false }, filterParams), { FROM_DATE: hooks(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'), TO_DATE: hooks(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD') }));
                enrichedSales = currentSales.map(current => {
                    const previous = previousYearSales.find(prev => prev.COUNTRY.toLowerCase() === current.COUNTRY.toLowerCase());
                    return Object.assign(Object.assign({ id: v4() }, formatSalesData(current)), { last_year: previous ? formatSalesData(previous) : null });
                });
            }
            else {
                enrichedSales = currentSales.map(record => (Object.assign(Object.assign({ id: v4() }, formatSalesData(record)), { last_year: null })));
            }
            this.salesData = enrichedSales.sort((a, b) => {
                if (a.country_id === 0)
                    return -1;
                if (b.country_id === 0)
                    return 1;
                return 0;
            });
        }
        catch (error) {
            console.error('Failed to fetch sales data:', error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Sales by Country"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: locales.entries.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getCountrySales(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, h("ir-sales-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.salesFilters = e.detail;
                this.getCountrySales();
            }, class: "filters-card", baseFilters: this.baseFilters }), h("ir-sales-table", { mappedCountries: this.countries, class: "card mb-0", records: this.salesData })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrSalesByCountry.style = IrSalesByCountryStyle0;

const irUserManagementCss = ".sc-ir-user-management-h{display:block;height:100%}";
const IrUserManagementStyle0 = irUserManagementCss;

const IrUserManagement = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.language = '';
        this.isSuperAdmin = true;
        this.isLoading = true;
        this.users = [];
        this.allowedUsersTypes = [];
        this.token = new Token();
        this.roomService = new RoomService();
        this.userService = new UserService();
        this.bookingService = new BookingService();
        this.userTypes = new Map();
        this.superAdminId = '5';
    }
    componentWillLoad() {
        if (this.baseUrl) {
            this.token.setBaseUrl(this.baseUrl);
        }
        if (this.ticket) {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUsers();
    }
    async initializeApp() {
        try {
            if (this.baseUrl) {
                this.token.setBaseUrl(this.baseUrl);
            }
            this.isLoading = true;
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.fetchUserTypes(), this.fetchUsers(), this.roomService.fetchLanguage(this.language, ['_USER_MGT'])];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            this.socket = lookup('https://realtime.igloorooms.com/');
            this.socket.on('MSG', async (msg) => {
                await this.handleSocketMessage(msg);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleSocketMessage(msg) {
        const msgAsObject = JSON.parse(msg);
        if (!msgAsObject) {
            return;
        }
        const { REASON, KEY, PAYLOAD } = msgAsObject;
        if (KEY.toString() !== this.property_id.toString()) {
            return;
        }
        let result = JSON.parse(PAYLOAD);
        console.log(KEY, result);
        // const reasonHandlers: Partial<Record<bookingReasons, Function>> = {
        //   DORESERVATION: this.updateUserVerificationStatus,
        // };
        const reasonHandlers = {
            EMAIL_VERIFIED: this.updateUserVerificationStatus,
        };
        const handler = reasonHandlers[REASON];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${REASON}`);
        }
    }
    updateUserVerificationStatus(result) {
        const users = [...this.users];
        const idx = users.findIndex(u => u.id === result.id);
        if (idx === -1) {
            console.warn(`User ${result.id} not found`);
            return;
        }
        users[idx] = Object.assign(Object.assign({}, users[idx]), { is_email_verified: true });
        this.users = users;
    }
    async fetchUsers() {
        const users = await this.userService.getExposedPropertyUsers({ property_id: this.propertyid });
        this.users = [...users].sort((u1, u2) => {
            const priority = (u) => {
                const t = u.type.toString();
                if (t === this.superAdminId)
                    return 0;
                if (t === '17')
                    return 1;
                return 2;
            };
            //sort by priority
            const p1 = priority(u1), p2 = priority(u2);
            if (p1 !== p2) {
                return p1 - p2;
            }
            // //sort by user id
            // if (p1 === 1) {
            //   const id1 = u1.id.toString(),
            //     id2 = u2.id.toString(),
            //     me = this.userId.toString();
            //   if (id1 === me) return -1; // u1 is me → goes before u2
            //   if (id2 === me) return 1; // u2 is me → u1 goes after
            // }
            // 3) sort by username
            return u1.username.localeCompare(u2.username);
        });
    }
    async fetchUserTypes() {
        var _a, _b, _c, _d;
        const res = await Promise.all([this.bookingService.getSetupEntriesByTableName('_USER_TYPE'), this.bookingService.getLov()]);
        const allowedUsers = (_b = (_a = res[1]) === null || _a === void 0 ? void 0 : _a.My_Result) === null || _b === void 0 ? void 0 : _b.allowed_user_types;
        for (const e of res[0]) {
            const value = e[`CODE_VALUE_${(_d = (_c = this.language) === null || _c === void 0 ? void 0 : _c.toUpperCase()) !== null && _d !== void 0 ? _d : 'EN'}`];
            if (allowedUsers.find(f => f.code === e.CODE_NAME)) {
                this.allowedUsersTypes.push({ code: e.CODE_NAME, value });
            }
            this.userTypes.set(e.CODE_NAME.toString(), value);
        }
    }
    disconnectedCallback() {
        this.socket.disconnect();
    }
    render() {
        var _a, _b;
        if (this.isLoading) {
            return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("ir-loading-screen", null)));
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", { suppressToastEndpoints: ['/Change_User_Pwd', '/Handle_Exposed_User'] }), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex  pb-2 align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, locales.entries.Lcz_ExtranetUsers)), h("div", { class: "", style: { gap: '1rem' } }, h("ir-user-management-table", { property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: [this.superAdminId, '17'].includes((_a = this.userTypeCode) === null || _a === void 0 ? void 0 : _a.toString()), userTypes: this.userTypes, class: "card", isSuperAdmin: ((_b = this.userTypeCode) === null || _b === void 0 ? void 0 : _b.toString()) === this.superAdminId, users: this.users })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrUserManagement.style = IrUserManagementStyle0;

export { IglooCalendar as igloo_calendar, IrHkTasks as ir_hk_tasks, IrMonthlyBookingsReport as ir_monthly_bookings_report, IrSalesByCountry as ir_sales_by_country, IrUserManagement as ir_user_management };

//# sourceMappingURL=igloo-calendar_5.entry.js.map