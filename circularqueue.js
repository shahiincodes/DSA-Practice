class CircularQueue {
        constructor(capacity){

            this.items = new Array(capacity)
            this.capacity = capacity
            this.currentLength = 0;
            this.front = -1;
            this.rear = -1
        }
        isFull(){
            return this.capacity===this.currentLength
        }
        isEmpty(){
            return this.currentLength===0
        }
        enqueue(elem){
            if(!this.isFull()){
                this.rear +=1;
                this.items[this.rear]=elem
                this.currentLength+=1
                if(this.front==-1){
                    this.front=this.rear
                }
            }
        }
        dequeue(){
            if(!this.isEmpty()){
                const item = this.items[this.front]
                this.items[this.front]=null
                this.front +=1
                this.currentLength-=1
            }else if(this.isEmpty()){
                this.front = -1
                this.rear=-1
            }
        }
        peek(){
            if(!this.isEmpty()){
                console.log(this.items[this.front])
            }
        }


}