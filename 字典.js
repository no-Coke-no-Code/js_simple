//字典
function dictionary(){
    var items = {};
    this.has = function(key){
        for(let i in items)
        {
            if(i === key)
            {
                return true;
            }
        }
        return false;
    };
    this.set = function(key,value){
        items[key] = value;
    };
    this.remove = function(key){
        if(items[key])
        {
            delete items[key];
            return true;
        }
        return false;
    };
    this.get = function(key){
        // if(this.has[key])   也可以
        if(items[key])
        {
            return items[key];
        }
        return undefined;
    };
    this.values = function(){
        var values = [];
        for(let i in items)
        {
            if(this.has(i))
            {
                values.push(items[i]);
            }
        }
        return values;
    };
    this.clear = function(){
        items = {};
    };
    this.size = function(){
        return Object.keys(items).length;
    };
    this.keys = function(){
        var keynum = [];
        for(let i in items)
        {
            keynum.push(i);
        }
        return keynum;
    };
};