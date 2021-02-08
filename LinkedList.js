class LinkedList {
    constructor () {
        this.head = null
        this.tail = null
    }

    append(data) {  // Add element to the end of the list
        const newNode = {value: data, next: null}

        if (this.tail) {
            this.tail.next = newNode // if the current list has a tail, set the current tail's next point to the new data
        }

        this.tail = newNode

        if (!this.head) {
            this.head = newNode // if the current head does not have a value, means the list is empty, add the new data to the head of the list.
        }
    }
    prepend(data) {
        const newNode = {value: data, next: null}

        const curHead = this.head

        this.head = newNode // set the new data to the head

        if (curHead) {
            this.head.next = curHead // if the list already has a head, set the new head's next data to the current head.
        }
    }

    removeHead() {
        const removedHead = this.head

        if (!removedHead) {
            return // if the head needs to remove does not exist, return to stop
        }
        this.head = removedHead.next // set the removed head's next data to be the new head.
    }

    delete(data) {
        if (!this.head) {
            return
        }
        while (this.head && this.head.value === data) {
            this.head = this.head.next
        }

        let curNode = this.head
        while (curNode.next) {
            if (curNode.next.value === data) {
                curNode.next = curNode.next.next
            } else {
                curNode = curNode.next
            }
        }

        if (this.tail.value === data) {
            this.tail = curNode
        }
    }

    find(data) {
        if (!this.head) {
            return
        }

        let curNode = this.head

        while (curNode) {
            if (curNode.value === data) {
                return curNode
            }

            curNode = curNode.next
        }

        return null
    }

    insertAfter(data, afterData) {
        const nodeExist = this.find(afterData)

        if (nodeExist) {
            const newNode = {value: data, next: nodeExist.next}
            nodeExist.next = newNode
        }
    }
    
    toArray() {
        const elements = []
        let curNode = this.head
        while (curNode) {
            elements.push(curNode)
            curNode = curNode.next
        }
        return elements
    }
}
