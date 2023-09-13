/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.currSmall  = 0 ; 
    this.currMedium = 0 ;
    this.currBig    = 0 ;

    this.maxSmall  = small ;
    this.maxMedium = medium ; 
    this.maxBig    = big ;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(carType === 1){
        if(this.currBig === this.maxBig){
            return false;
        }else{
            this.currBig = this.currBig + 1;
            return true;
        }
    }

    if(carType === 2){
        if(this.currMedium === this.maxMedium){
            return false;
        }else{
            this.currMedium = this.currMedium + 1;
            return true;
        }
    }

    if(carType === 3){
        if(this.currSmall === this.maxSmall){
            return false;
        }else{
            this.currSmall = this.currSmall + 1;
            return true;
        }
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */