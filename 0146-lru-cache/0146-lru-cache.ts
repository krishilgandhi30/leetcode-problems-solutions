class DNode {
    key: number;
    value: number;
    prev: DNode | null = null;
    next: DNode | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    private capacity: number;
    private map: Map<number, DNode>;
    private head: DNode;
    private tail: DNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();

        // Dummy head and tail
        this.head = new DNode(0, 0);
        this.tail = new DNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        const node = this.map.get(key);
        if (!node) return -1;

        this.remove(node);
        this.insert(node);
        return node.value;
    }

    put(key: number, value: number): void {
        const node = this.map.get(key);

        if (node) {
            node.value = value;
            this.remove(node);
            this.insert(node);
        } else {
            if (this.map.size === this.capacity) {
                const lru = this.tail.prev!;
                this.remove(lru);
                this.map.delete(lru.key);
            }

            const newNode = new DNode(key, value);
            this.insert(newNode);
            this.map.set(key, newNode);
        }
    }

    private remove(node: DNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    private insert(node: DNode): void {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next!.prev = node;
        this.head.next = node;
    }
}
