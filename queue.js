class Queue {
    constructor(){
        this.items = {},
        this.rear = 0,
        this.front = 0
    }
    enqueue(elem){
        this.items[this.rear] = elem
        this.rear++
    }
    dequeue(){
        const deletedItem = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return deletedItem
    }
    size(){
        console.log(this.rear-this.front)
    }
    isEmpty(){
        return this.rear-this.front ===0
    }
    print(){
        console.log(this.items)
    }
}
const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20);
queue.enqueue(150);
queue.enqueue(30);
queue.print()
queue.dequeue()
queue.print();
queue.size()

