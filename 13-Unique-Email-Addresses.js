// TC : O(N*M)
// SC : O(N)

function makeValidLocalName(str){
    let ans = '';
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === '+'){
            break;
        }else if(str[i] === '.'){
            continue;
        }else{
            ans = ans + str[i];
        }
    }
    return ans;
}

var numUniqueEmails = function(emails) {
    let store = new Map() ; 
    
    for(let i = 0 ; i < emails.length; i++){
        const sep = emails[i].split('@');
        const local_name = makeValidLocalName(sep[0]) ; 
        const domain_name = sep[1] ;

        const new_email = local_name + '@' + domain_name ; 
        store.set(new_email,1);
    }

    return store.size ;
};
