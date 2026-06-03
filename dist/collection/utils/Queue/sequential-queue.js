export class SequentialQueue {
    maxSize;
    queue = [];
    draining = false;
    handler = null;
    destroyed = false;
    constructor(maxSize = 1000) {
        this.maxSize = maxSize;
    }
    setHandler(fn) {
        this.handler = fn;
    }
    enqueue(item) {
        if (this.destroyed)
            return;
        if (this.queue.length >= this.maxSize) {
            this.queue.shift(); // drop oldest when full
        }
        this.queue.push(item);
        if (!this.draining) {
            this.drain();
        }
    }
    async drain() {
        if (!this.handler)
            return;
        this.draining = true;
        while (this.queue.length > 0 && !this.destroyed) {
            const item = this.queue.shift();
            try {
                await this.handler(item);
            }
            catch (e) {
                console.error('SequentialQueue handler error', e);
            }
        }
        this.draining = false;
    }
    destroy() {
        this.destroyed = true;
        this.queue = [];
        this.handler = null;
    }
}
//# sourceMappingURL=sequential-queue.js.map
