const Node = require('./node');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var new_node = new Node(data, this._tail, null)
        if (this.length) {
            this._tail.next = new_node;
            this._tail = new_node;
        } else {
            this._head = this._tail = new_node;
        }
        this.length++;
        return this;
    }

    head() {
        if(this._head)
            return this._head.data
        else
            return null;
    }

    tail() {
        if(this._tail)
            return this._tail.data
        else
            return null;

    }

    at(index) {
        if (index > -1 && index < this.length) {
            var node = this._head;
            while (index--) {
                node = node.next;
            }
            return node.data;
        }
        return null
    }

    insertAt(index, data) {
        if (index > -1 && index < this.length) {
            if (index == this.length || index == 0) {
                this.append(data)
            } else {
                var new_node = new Node(data, this._tail, null)
                var node_next = this._head;

                while (index--) {
                    node_next = node_next.next;
                }
                var prevNode = node_next.prev;
                prevNode.next = new_node;
                prevNode.prev = prevNode;
                new_node.next = node_next;
                node_next.prev = node_next.next;
            }
        }
        return this;
    }

    isEmpty() {
        if (this.length)
            return false;
        else
            return true;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (index > -1 && index < this.length) {
            if (index == 0) {
                this.clear();
            } else if (index == this.length) {
                this._tail = this.node._tail.prev;
                this._tail.prev = null;
            } else {
                var node = this._head;
                while (index--) {
                    node = node.next;
                }
                var node_prev = node.prev;
                var node_next = node.next;
                node_prev.next = node_next;
                node_next.prev = node_prev;
            }
            this.length--;
        }
        return this;
    }

    reverse() {
        if (this.length > 1) {
            let left = this._head;
            let right = this._tail;
            for (let i = 0; i * 2 < this.length; i++) {
                [left.data, right.data] = [right.data, left.data]
                left = left.next;
                right = right.prev;
            }
        }
        return this;
    }

    indexOf(data) {
        var node;
        node = this._head;
        for (let i = 0; i < this.length; i++) {
            if (node.data == data) {
                return i
            }
            node = node.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
