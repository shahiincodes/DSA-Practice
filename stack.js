class Stack {
    constructor(){
        this.items=[]
    }
    push(elem){
        this.items.push(elem)
    }
    pop(elem){
        return this.items.pop(elem)
    }
    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        return this.items[this.items.length-1]
    }
    size(){
        return this.items.length
    }
    print(){
        return this.items.toString()
    }
}

const stack = new Stack()

console.log(stack.isEmpty())
console.log(stack.size());
// console.log(stack.peek());
stack.push(3)
stack.push(316)
stack.push(32)
stack.push(3)
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.print())




