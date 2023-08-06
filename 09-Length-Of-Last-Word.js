// TC : O(n)
// SC : O(n)

var lengthOfLastWord = function(s) {
    const trimmed = s.trim();
    const arr = trimmed.split(' ');

    const ans = arr[arr.length - 1];

    return ans.length ;
};