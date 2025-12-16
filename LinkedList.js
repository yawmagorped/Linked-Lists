const LinkedList = () => {
    let head = Node();
    let tail = Node();

    const append = (value) => {
        let newNode = Node();
        if (head.getNextNode() === null) { //first element
            newNode.initialize(value, null, null);
            head.setNextNode(newNode);
            tail.setPrevNode(newNode);
        } else {
            newNode.initialize(value, tail.getPrevNode(), null);
            tail.setPrevNode(newNode);
        }
    } 

    const prepend = (value) => {
        let newNode = Node();
        if (head.getNextNode() === null) {
            newNode.initialize(value, null, null);
            head.setNextNode(newNode);
            tail.setPrevNode(newNode);
        } else {
            newNode.initialize(value, null, head.getNextNode());
            head.setNextNode(newNode);
        }
    }

    return {append, prepend};
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

    const copyNode = (node) => {
        _value = node.value;
        _nextNode = node.nextNode;
        _prevNode = node.prevNode;
    }

    const setValue = (value) => {
        value = value;
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

    return {initialize, setNextNode, getNextNode, setPrevNode, getPrevNode, setValue, getValue, copyNode};
}

let linkedList = LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);