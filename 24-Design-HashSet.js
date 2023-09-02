class ListNode {
    next = null ; 
    data = null ; 

    constructor(d){
        this.data = d;
    }
}

var MyHashSet = function() {
    this.maxLength = 10000;
    this.hashset = new Array(this.maxLength).fill(new ListNode(-1));
};

MyHashSet.prototype.find = function(key){
    let insert_key = key % this.maxLength ; 
    let follow = null ;
    let start = this.hashset[insert_key] ;
    while(start !== null && start.data !== key){
        follow = start ; 
        start = start.next ;
    }
    return {start,follow};
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const res = this.find(key);
    if(res.start){
        return ;
    }
    let start = res.follow ; 
    start.next = new ListNode(key);
};

/** 
 * @param {number} key
 * @return {void}
 */

MyHashSet.prototype.remove = function(key) {
    const res = this.find(key);
    if(!res.start){
        return ;
    }
    let start = res.follow ; 
    let next = start.next ; 
    start.next = next.next ; 
    next = null ;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const res = this.find(key);
    return res.start !== null ? true : false;
};