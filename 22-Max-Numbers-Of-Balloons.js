// TC : O(n)
// sc : O(1)

var maxNumberOfBalloons = function(text) {
    if(!text){
        return 0;
    }
    let target = ['b','a','l','o','n'];

    const obj = {
        b : 0,
        a : 0,
        l : 0,
        o : 0,
        n : 0
    };

    for(let i = 0 ; i < text.length; i++)
    {
        const item = text[i] ; 
        if(obj.hasOwnProperty(item)){
            obj[item] = obj[item] + 1;
        }
    }

    // fix the frequencies 
    obj.l = Math.floor(obj.l / 2) ;
    obj.o = Math.floor(obj.o / 2) ;

    let counter = text.length ; 

    for(let i = 0 ; i < target.length ; i++){
        if(obj[target[i]] === 0){
            return 0;
        }
        if(obj[target[i]] < counter){
            counter = obj[target[i]];
        }
    }

    return counter;
};