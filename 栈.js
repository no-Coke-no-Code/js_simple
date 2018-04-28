function stack(){
    var items = [];
    this.push = function(item){
        return items.push(item);
    };
    this.pop = function(){
        return items.pop();
    };
    this.peak = function(){
        return items[items.length-1];
    };
    this.isEmpty = function(){
        if(items.length)
        {
            return false;
        }
        else
        {
            return true;
        }
    };
    this.clear = function(){
        items = [];
    };
    this.size = function(){
        return items.length;
    };
    this.printing = function(){
        console.log(items.join("-"));
    };
}


// 进制转换

// 10变2
function changing(num){
    var accepts = [];
    while(num > 0)
    {
        accept = Math.floor(num % 2);
        accepts.push(accept);
        num = Math.floor(num / 2);
    }
    var final = accepts.reverse().join("");
    return final;
}
console.log(changing(100));

// 2变10
function changing(num){
    var arr = num.toString().split("");
    var total = 0;
    for(let x = 0;x<arr.length;x++)
    {
        if(arr[x] == 1)
        {
            arr[x] = Math.pow(2,arr.length-1-x);
        }
        total += parseInt(arr[x]);
    }
    return total;
}
console.log(changing(10101));