// TC : O(N)
// SC : O(H)

function isBalancedBT(node){
	if(node=== null){
		return 0 ;
	}

	let left_height  = isBalancedBT(node.left);
	let right_height = isBalancedBT(node.right);

	if(left_height === -1 || right_height === -1){
		return -1;
	}

	if(Math.abs(left_height - right_height) > 1){
		return -1 ;
	}

	return 1 + Math.max(left_height,right_height) ; 
}

module.exports = { 

	isBalanced : function(A){
		let res = isBalancedBT(A);
		return res === -1 ? 0 : 1 ;
	}
};