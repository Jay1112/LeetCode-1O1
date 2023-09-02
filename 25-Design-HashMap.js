class ListNode{
    key = null ; 
    value = null ;
    next = null ;

    constructor(k,v){
        this.key = k;
        this.value = v; 
    }
}


var MyHashMap = function() {
    this.maxLength = 10000;
    this.hashmap = new Array(this.maxLength).fill(new ListNode(-1,-1));
};

MyHashMap.prototype.find = function(key){
    let insert_key = key % this.maxLength ; 
    let follow = null ; 
    let start = this.hashmap[insert_key] ; 
    while(start !== null && start.key !== key){
        follow = start ;
        start = start.next ; 
    }
    return {start,follow};
}

MyHashMap.prototype.put = function(key, value) {
    const {start, follow} = this.find(key);
    if(start){
        start.value = value ; 
    }else{
        follow.next = new ListNode(key,value);
    }
};

MyHashMap.prototype.get = function(key) {
    const {start, follow} = this.find(key);
    if(start){
        return start.value;
    }else{
        return -1;
    }
};

MyHashMap.prototype.remove = function(key) {
    let {start, follow} = this.find(key);
    if(start){
        follow.next = start.next ;
        start = null ;
    }
};