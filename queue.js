class Queue
{
    constructor(n)
    {
        this.size = n;
        this.queue = new Array(this.size)
        this.front=-1;
        this.rear=-1;

    }

    enqueue(data)
    {
        if(this.rear==this.size-1)
        {
            console.log("Queue is full");
            return false;
        }

        if(this.front==-1)
            this.front=0

        this.rear++;
        this.queue[this.rear]=data;
        return true;

    }

    deque()
    {
        if(this.isEmpty())
        {
            console.log("Queue is empty")
            return false
        }

        for(let i=this.front; i<=this.rear-1; i++)
        {
            this.queue[i] = this.queue[i+1]
        }

        this.rear--;
        return true;
    }

    isEmpty()
    {
        if(this.rear==-1)
            {
                console.log("Queue is empty")
                return true
            }

            return false;
    }

    peek()
    {
        if(this.isEmpty())
        {
            console.log("Queue is empty")
            return false

        }

        return this.queue[this.front]
    }

    rearEle()
    {
        if(this.isEmpty())
            {
                console.log("Queue is empty")
                return false
    
            }
    
            return this.queue[this.rear]

    }

    isFull()
    {
        if(this.rear == this.size-1)
        {
            console.log("Queue is full")
                return true
        }

        return false
    }

    print()
    {
        if(this.rear==-1)
        {
            console.log("Queue is empty")
            return false
        }
        for(let i= this.front;i<=this.rear;i++)
        {
            console.log(this.queue[i])
        }
    }
}

let newQueue = new Queue(5)
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);
newQueue.enqueue(0);

newQueue.print()

//TC of enqueue : O(1)
//SC of enqueue : O(1)

/*newQueue.deque();
newQueue.print();
console.log("-------")
newQueue.deque();
newQueue.print();
console.log("-------")
newQueue.deque();
newQueue.print();
console.log("-------")
newQueue.deque();
newQueue.print();
console.log("-------")
newQueue.deque();
newQueue.print();
console.log("-------")*/

console.log(newQueue.peek())
console.log(newQueue.rearEle())
newQueue.isEmpty()
newQueue.isFull()

//TC of deque : O(n)
//SC of deque : O(1)

//TC of peek, rear, isEmpty, isFull : O(1)
//SC of peek, rear, isEmpty, isFull : O(1)

