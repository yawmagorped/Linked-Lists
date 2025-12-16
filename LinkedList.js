const LinkedList = () => {
    let head = null;
    let tail = null;

    const append = (value) => {
        let newNode = Node();
        if (head === null) { //first element
            newNode.initialize(value, null, null);
            head = newNode;
            tail = newNode;
        } else {
            newNode.initialize(value, tail, null);
            tail.nextNode = newNode;
            tail = newNode;
        }
    } 

    return {};
}

const Node = () => {
    let value;
    let nextNode = null;
    let prevNode = null;

    const initialize = (value, prev, next) => {
        value = value;
        prev = prev;
        next = next;
    }

    const setNext = (node) => {
        nextNode = node.nextNode;
    } 
    const setPrev = (node) => {
        prevNode = node.prevNode;
    } 

    return {initialize, setNext, setPrev};
}