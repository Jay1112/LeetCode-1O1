// TC : O(n)
// SC : O(n)

function InOrder(root,result){
    if(root === null){
        return ;
    }
    InOrder(root.left,result);
    result.push(root.val);
    InOrder(root.right,result);
}
var inorderTraversal = function(root) {
    let result = [];
    InOrder(root,result);
    return result ;
};