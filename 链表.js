function listitems(){
    var Node = function(element){
        this.element = element;
        this.next = null;
    };
    var length = 0;
    var head = null;
    this.append = function(element){                        //向链表尾部添加元素
        var node = new Node(element);                       //新建元素
        var current;
        if(head === null)                                   //若链表为空的情况下
        {
            head = node;
        }
        else                                                //若链表不为空的情况下
        {
            current = head;
            while(current.next)
            {
                current = current.next;
            }
            current.next=node;
        }
        length++;
    };
    this.removeAt = function(position){                     //删除链表元素
        if(position > -1 && position < length)
        {
            var current = head;
            var previous;
            var index = 0;
            if(position === 0)
            {
                head = current.next;                        //删除第一个链表元素
            }
            else                                            //删除中间或最后一个链表元素
            {
                while(index++ < position)                      //迭代列表，到达目标位置
                {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;                                       //减少长度
            return current.element;
        }
        else
        {
            return null;
        }
    };
    this.insert = function(position,element){                //插入链表元素
        if(position >= 0 && position <= length)              //检查输入索引是否在范围以内
        {
            var node = new Node(element);
            var current = head;
            var previous;
            var index = 0;
            if(position === 0)                               //在开头插入
            {
                node.next = current;
                head = node;
            }
            else                                              //在其他位置插入
            {
                while(index++ < position)                     //迭代列表，到达目标位置
                {
                    previous = current;
                    curent = current.next;
                }
                node.next = current;                           //拼接链表
                previous.next = node;
            }
            length++;                                           //增加长度
            return true;
        }
        else
        {
            return false;
        }
    };
    this.toString = function(){
        var current = head;
        var string = "";
        while(current)
        {
            string = string + current.element + ",";
            current = current.next;
        }
        string = string.split(",");
        string.splice(string.length-1,1);
        return string;
    };
    this.indexOf = function(element){
        var current = head;
        var index = -1;
        while(current)
        {
            if(current.element == element)
            {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.isEmpty = function(){
        return length === 0 ;
    };
    this.size = function(){
        return length;
    };
    this.getHead = function(){
        return head;
    };
}