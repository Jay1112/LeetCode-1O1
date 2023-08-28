// TC : O(n)
// SC : O(H)

var makeTree = function(is,ie,inorder,ps,pe,postorder,map){
    if(is > ie || ps > pe){
        return null;
    }

    let node  = new TreeNode(postorder[pe]);
    let index = map.get(postorder[pe]);
    let leftInstances  = index - is ; 

    node.left  = makeTree(is,index-1,inorder,ps,ps+leftInstances-1,postorder,map) ; 
    node.right = makeTree(index+1,ie,inorder,ps+leftInstances,pe-1,postorder,map) ; 

    return node ;
}

var buildTree = function(inorder, postorder) {
    if(inorder.length !== postorder.length){
        return null;
    }

    let map = new Map();
    for(let i = 0 ; i < inorder.length ; i++){
        map.set(inorder[i],i);
    }

    let is = 0 , ie = inorder.length - 1 ; 
    let ps = 0 , pe = postorder.length - 1 ; 

    let node = makeTree(is,ie,inorder,ps,pe,postorder,map);

    return node ;
};