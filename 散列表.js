散列表
function hashtable(){
    var table = [];
    var loselosehashcode = function(key){
        var hash = 0;
        for(let i = 0;i<key.length;i++)
        {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    this.put = function(key,value){
        var position = loselosehashcode(key);
        table[position] = value;
        console.log(position + "-" + key);
    };
    this.get = function(key){
        if(table.length>0)
        {
            var position = loselosehashcode(key);
            if(table[position])
            {
                return table[position];
            }
            else
            {
                return "没有,滚";
            }
        }
        else
        {
            return false;
        }
    };
    this.remove = function(key){
        table[loselosehashcode(key)] = undefined;
        // return table.filter(function(value){   undefined的元素不能删去，不然会改变其他元素的位置
        //     return !(value === undefined);
        // });
    };
};


// 散列表有可能会出现数据冲突的问题   因为键的ASCII码有可能会重复  会造成值与值覆盖
// 以下为两种解决方法:分离链接，线性探查
// 1.分离链接:在每一个散列表的位置建立链表
function hashtable(){
    var table = [];
    var loselosehashcode = function(key){
        var hash = 0;
        for(let i = 0;i<key.length;i++)
        {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    var valuepair = function(key,value){
        this.key = key;
        this.value = value;
        this.tostring = function(){
            return "["+this.key+ "-" + this.value + "]";
        };
    };
    this.put = function(key,value){
        var position = loselosehashcode(key);
        if(table[position] == undefined)
        {
            table[position] = new listitems();
        }
        table[position].append(new valuepair(key,value));
    };
    this.get = function(key){
        var position = loselosehashcode(key);
        if(table[position] !== undefined)
        {
            var current = table[position].getHead();        //定位链表的头部
            while(current.next)                             //若有next,则不是最后一个元素
            {
                if(current.element.key === key)             //若链表中元素的key与形参的key相同,则找到了        
                {
                    return current.element.value;
                }
                current = current.next;                     //还没找到，继续遍历
            }
            if(current.element.key === key)   //检查元素在链表的第一个或最后一个位置
            {
                return current.element.value;
            }
        }
        else                                                 //链表包含next指针与element属性。element属性又是valuepair的实例，所以有value和key           
        {
            return undefined;
        }
    };
    this.remove = function(key){
        var position = loselosehashcode(key);
        if(table[position] !== undefined)
        {
            var current = table[position].getHead();
            while(current.next)
            {
                if(current.element.key === key)
                {
                    table[position].removeAt(current.element);
                    if(table[position].isEmpty())
                    {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if(current.element.key === key)
            {
                table[position].removeAt(current.element);
                if(table[position].isEmpty())
                {
                    table[position] = undefined;
                }
                return true;
            }
        }
    };

    //链表的代码
    function listitems(){
        function Node(element){
            this.element = element;
            this.next = null;
        };
        var head = null;
        var length = 0;
        this.append = function(element){
            var node = new Node(element);
            var current;
            if(head === null)
            {
                head = node;
            }
            else
            {
                current = head;
                while(current.next)
                {
                    current = current.next;
                }
                current.next = node;
            }
            length++;
        };
        this.removeAt = function(position){
            if(position>=0 && position<=length)
            {
                var previous;
                var current = head;
                var index = 0;
                if(position === 0)
                {
                    head = current.next;
                }
                else
                {
                    while(index<position)
                    {
                        index++;
                        previous = current;
                        current = current.next;
                    }
                    previous.next = current.next;
                }
                length--;
                return current.element;
            }
            else
            {
                return null;
            }
        };
        this.insert = function(position,element){
            if(position>=0 && position<=length)
            {
                var node = new Node(element);
                var previous;
                var index = 0;
                var current = head;
                if(position === 0)
                {
                    node.next = current;
                    head = node;
                }
                else
                {
                    while(index<position)
                    {
                        index++;
                        previous = current;
                        current = current.next;
                    }
                    previous.next = node;
                    node.next = current;
                }
                length++;
                return true;
            }
            else
            {
                return false;
            }
        };
        this.showing = function(){
            var string = "";
            var current = head;
            while(current)
            {
                string = string + current.element;
                current = current.next;
            }
            return string;
        };
        this.getHead = function(){
            return head;
        };
        this.isEmpty = function(){
            return length === 0;
        };
    };
    //
};


//2.线性探查:当相向表中某个位置加入新元素时，若位置index已经被占据，就尝试index+1的位置，如此类推
function hashtable(){
    var table = [];
    var loselosehashcode = function(key){
        var hash = 0;
        for(let i = 0;i<key.length;i++)
        {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    var valuepair = function(key,value){
        this.key = key;
        this.value = value;
        this.tostring = function(){
            return "["+this.key+ "-" + this.value + "]";
        };
    };
    this.put = function(key,value){
        var position = loselosehashcode(key);
        if(table[position] == undefined)
        {
            table[position] = new valuepair(key,value);
        }
        else
        {
            var index = ++position;
            while(table[position] !== undefined)
            {
                index++;
            }
            table[index] = new valuepair(key,value);
        }
        console.log(position + "-" + value);
    };
    this.get = function(key){
        var position = loselosehashcode(key);
        if(table[position] !== undefined)
        {
            if(table[position].key === key)
            {
                return table[position].value;
            }
            else
            {
                var index = ++position;
                while(table[index] === undefined || table[index].key !== key)
                {
                    index++;
                }
                if(table[index].key === key)
                {
                    return table[index].value;
                }
            }
        }
        return undefined;
    };
    this.remove = function(key){
        var position = loselosehashcode(key);
        if(table[position] !== undefined)
        {
            if(table[position].key === key)
            {
                table[position].value = undefined;
            }
            else
            {
                var index = ++position;
                while(table[index] === undefined || table[index].key !== key)
                {
                    index++;
                }
                if(table[index].key === key)
                {
                    table[index].value = undefined;
                }
            }
        }
        return undefined;
    };
}
