class TimeLimitedCache {
    private cache: Map<number, { value: number, expiresAt: number }> = new Map();

    constructor() {}

    set(key: number, value: number, duration: number): boolean {
        const now = Date.now();
        const expiresAt = now + duration;

        const existing = this.cache.get(key);
        const isUnexpired = existing && existing.expiresAt > now;

        // Store/overwrite the key with new value and expiry
        this.cache.set(key, { value, expiresAt });

        return !!isUnexpired; // Return true if key existed and wasn't expired
    }

    get(key: number): number {
        const now = Date.now();
        const entry = this.cache.get(key);

        if (!entry) return -1;
        if (entry.expiresAt <= now) {
            this.cache.delete(key); // Clean up expired key
            return -1;
        }

        return entry.value;
    }

    count(): number {
        const now = Date.now();
        let active = 0;

        for (const [key, entry] of this.cache.entries()) {
            if (entry.expiresAt > now) {
                active++;
            } else {
                this.cache.delete(key); // Cleanup expired ones
            }
        }

        return active;
    }
}

/**
 * Example usage:
 * const timeLimitedCache = new TimeLimitedCache();
 * console.log(timeLimitedCache.set(1, 42, 1000)); // false
 * console.log(timeLimitedCache.get(1)); // 42
 * console.log(timeLimitedCache.count()); // 1
 */
