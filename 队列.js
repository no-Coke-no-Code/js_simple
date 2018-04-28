function lining(){
    var items = [];
    this.enqueue = function(item){
        return items.push(item);
    };
    this.dequeue = function(){
        return items.shift();
    };
    this.front = function(){
        return items[0];
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
    this.size = function(){
        return items.length;
    };
    this.printing = function(){
        console.log(items.join());
    };
}