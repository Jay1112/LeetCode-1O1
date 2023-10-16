// TC : O(1)
// SC : O(1)


function getBoxNumber(row,col){
    const num = ( Math.floor( row / 3 ) * 3) + 
                ( Math.floor( col / 3 ) + 1 );
    return num ;
}

var isValidSudoku = function(board) {
    let rows = new Map();
    let cols = new Map();
    let boxes = new Map();

    for(let i = 0 ; i < 9 ; i++){
        rows.set(i,[]);
        cols.set(i,[]);
        boxes.set(i+1,[]);
    }

    for(let i = 0 ; i < 9; i++){
        for(let j = 0 ; j < 9; j++){
            const item = board[i][j] ;

            if(item === "."){
                continue;
            }

            const boxNumber = getBoxNumber(i,j);

            const rowsMap = rows.get(i);
            const colsMap = cols.get(j);
            const boxesMap = boxes.get(boxNumber);

            if(rowsMap.indexOf(item) !== -1){
                return false;
            }

            if(colsMap.indexOf(item) !== -1){
                return false;
            }

            if(boxesMap.indexOf(item) !== -1){
                return false;
            }

            rows.set(i,[...rowsMap,item]);
            cols.set(j,[...colsMap,item]);
            boxes.set(boxNumber,[...boxesMap,item]);
        }
    }

    return true;
};