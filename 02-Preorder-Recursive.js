// TC : O(n)
// SC : O(n)

function PreOrder(root,result){
    if(root === null){
        return ;
    }
    result.push(root.val);
    PreOrder(root.left,result);
    PreOrder(root.right,result);
}
var preorderTraversal = function(root) {
    let result = [];
    PreOrder(root,result);
    return result ;
};