//集合
function Set(){
    var items = {};
    this.has = function(value){
        // return value in items;
        return items.hasOwnProperty(value);
    };
    this.add = function(value){
        if(!this.has(value))
        {
            items[value] = value;
            return true;
        }
        else
        {
            return false;
        }
    };
    this.remove = function(value){
        if(this.has(value))
        {
            delete items[value];
            return true;
        }
        else
        {
            return false;
        }
    };
    this.clear = function(){
        items = {};
    };
    this.size = function(){
        return Object.keys(items).length;
    };
    this.size2 = function(){
        var count = 0;
        for(var i in items)
        {
            if(items.hasOwnProperty(i))
            {
                count++;
            }
        }
        return count;
    };
    this.values = function(){
        // return Object.keys(items);
        var content = [];
        for(var i in items)
        {
            content.push(items[i]);
        }
        return content;
    };
    this.union =function(other){
        var newset = new Set();
        var values = [];
        values = this.values();
        for(let i = 0;i<values.length;i++)
        {
            newset.add(values[i])
        }
        values = other.values();
        for(let i = 0;i<values.length;i++)
        {
            newset.add(values[i]);
        }
        return newset
    };
    this.jiaoji = function(other){
        var newset = new Set();
        var values = this.values();
        for(let i = 0;i<values.length;i++)
        {
            if(other.has(values[i]))
            {
                newset.add(values[i]);
            }
        }
        return newset;
    };
    this.chaji = function(other){
        var newset = new Set();
        var values = this.values();
        for(let i = 0;i<values.length;i++)
        {
            if(!other.has(values[i]))
            {
                newset.add(values[i]);
            }
        }
        return newset; 
    };
    this.ischildren = function(other){
        if(this.values().length <= other.values().length)
        {  
            var values = this.values();
            for(let i = 0;i<values.length;i++)
            {
                if(!other.has(values[i]))
                {
                    return false;
                }
            }
            return true;
        }
        else
        {
            return false;
        }
    };
};