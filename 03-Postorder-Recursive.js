// TC : O(n)
// SC : O(n)

function PostOrder(root,result){
    if(root === null){
        return ;
    }
    PostOrder(root.left,result);
    PostOrder(root.right,result);
    result.push(root.val);
}
var postorderTraversal = function(root) {
    let result = [];
    PostOrder(root,result);
    return result ;
};