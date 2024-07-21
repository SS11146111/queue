class Stack
{
    constructor()
    {
        this.q1=[];
        this.q2=[];
    }

    push(x)
    {
        this.q2.push(x);
        while(this.q1.length!=0) 
        {
            this.q2.push(this.q1[0]);
            this.q1.shift()
        }

        this.q=this.q1;
        this.q1=this.q2;
        this.q2=this.q;

    }

    pop()
    {
        const x = this.q1[0];
        this.q1.shift;
        return x;

    }

    top()
    {
        return this.q1[0]
    }

    print()
    {
        for(let i=0;i<=this.q1.length-1;i++)
        {
            console.log(this.q1[i])
        }
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

const ele=stack.pop();
console.log(ele)
const ele2=stack.pop();
console.log(ele)

//TC: O(n)
//SC: O(n)
