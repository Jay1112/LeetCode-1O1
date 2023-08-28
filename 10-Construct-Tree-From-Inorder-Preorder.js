// TC : O(n)
// SC : O(H)

var makeTree = function(is,ie,inorder,ps,pe,preorder,map){
    if(is > ie || ps > pe){
        return null;
    }

    let node = new TreeNode(preorder[ps],null,null);
    let index = map.get(preorder[ps]);
    let leftInstances = index - is ;

    node.left  = makeTree(is,index-1,inorder,ps+1,ps+leftInstances,preorder,map);
    node.right = makeTree(index+1,ie,inorder,ps+leftInstances+1,pe,preorder,map);

    return node;
}

var buildTree = function(preorder, inorder) {
    if(preorder.length !== inorder.length){
        return null;
    }
    let map = new Map();
    for(let i = 0 ; i < inorder.length ; i++){
        map.set(inorder[i],i);
    }

    let is = 0 , ie = inorder.length - 1 ;
    let ps = 0 , pe = preorder.length - 1 ;

    const node = makeTree(is,ie,inorder,ps,pe,preorder,map);

    return node ;  
};