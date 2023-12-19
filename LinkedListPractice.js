class Node {
          constructor(value){
                    this.value = value,
                    this.next = null
          }
}

class LinkList{
          constructor(){
                    this.head=null,
                    this.size=0
          }
          isEmpty(){
                    return this.size===0
          }
          size(){
                    return this.size
          }
          prepend(value){
                    const node = new Node(value)
                    if(this.isEmpty()){
                              this.head=node
                    }else{
                              this.head=node,
                              this.next=this.head
                    }
                    this.size++
          }
          append(value){
                    const node = new Node(value)
                    if(this.isEmpty()){
                              this.head = node
                    }else{
                              let prev = this.head
                              while(prev.next){
                                        prev=prev.next
                              }
                              prev.next = node
                    }
                    this.size++
          }
          printList(){
                    if(this.isEmpty()){
                              console.log('the list is empty')
                    }else{
                              let cur = this.head
                              let list = ""
                              while(curr){
                                        list += `${cur.value}`
                                        cur = cur.next
                              }
                              console.log(list)
                    }
          }
}