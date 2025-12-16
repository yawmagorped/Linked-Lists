const LinkedList = () => {
    let head = Node();
    let tail = Node();
    head.setValue("head");
    tail.setValue("tail");

    const append = (value) => {
        let newNode = Node();
        if (head.getNextNode() === null) { //first element
            newNode.initialize(value, head, tail);
            head.setNextNode(newNode);
            tail.setPrevNode(newNode);

        } else {
            newNode.initialize(value, tail.getPrevNode(), null);
            tail.getPrevNode().setNextNode(newNode);
            tail.setPrevNode(newNode);
            newNode.setNextNode(tail);
        }
    } 
    
    const prepend = (value) => {
        let newNode = Node();
        if (head.getNextNode() === null) {
            newNode.initialize(value, head, tail);
            head.setNextNode(newNode);
            tail.setPrevNode(newNode);
        } else {
            newNode.initialize(value, null, head.getNextNode());
            head.getNextNode().setPrevNode(newNode);
            head.setNextNode(newNode);
            newNode.setPrevNode(head);
        }
    }
    
    const size = () => {
        let counter = 0;
        let node = head.getNextNode();
        // console.log(head.getNextNode().getValue());
        // console.log(head.getNextNode().getNextNode().getValue());
        while(node !== null && node.getNextNode() !== null) {
            node = node.getNextNode();
            counter++;
        }
        return counter;
    }

    return {append, prepend, size};
}

const Node = () => {
    let _value;
    let _nextNode = null;
    let _prevNode = null;

    const initialize = (value, prev, next) => {
        _value = value;
        _prevNode = prev;
        _nextNode = next;
    }

    const printNode = (name) => {
        console.log("this is -> " + name);
        console.log("value:" + _value);
        console.log("nextNode:" + _nextNode().getValue());
        console.log("prevNode:" + _prevNode().getValue());
    }

    const copyNode = (node) => {
        _value = node.value;
        _nextNode = node.nextNode;
        _prevNode = node.prevNode;
    }

    const setValue = (value) => {
        _value = value;
    } 
    const getValue = () => {
        return _value;
    }
    const setNextNode = (node) => {
        _nextNode = node;
    } 
    const getNextNode = () => {
        return _nextNode;
    }
    const setPrevNode = (node) => {
        _prevNode = node;
    }
    const getPrevNode = () => {
        return _prevNode;
    } 

    return {initialize, setNextNode, getNextNode, setPrevNode, getPrevNode, setValue, getValue, copyNode, printNode};
}

let linkedList = LinkedList();

console.log(linkedList.size());
linkedList.append(1);
console.log(linkedList.size());
linkedList.prepend(2);
console.log(linkedList.size());
linkedList.append(3);
console.log(linkedList.size());
linkedList.prepend(4);
console.log(linkedList.size());