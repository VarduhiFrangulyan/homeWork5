/*
// խնդիր1

Array.prototype.myConcat = function () {
    const concatArr = [...this];
    for (let i = 0; i < arguments.length; ++i) {
        if (Array.isArray(arguments[i])) concatArr.push(...arguments[i]);
        else concatArr.push(arguments[i]);
    }
    return [...concatArr];
};

Array.prototype.myFill = function(value, start = 0, end = this.length) {
    if ((typeof start === "number") || (typeof end === "number")) {
        const forStart = (Math.abs(start) !== start)? this.length + start: start;
        const forEnd = (Math.abs(end) !== end)? this.length + end: end;
        if (((forStart < this.length) && (forStart > -1)) || ((forEnd > 0) && (forEnd < this.length + 1))) {
            for (let i = forStart; i < forEnd; ++i) {
                this[i] = value;
            }
        }
    }
    return [...this];
};

Array.prototype.myFind = function()  {
      for (let i = 0; i < this.length;++i) {
          if (arguments[0](this[i], i, this)) {
              return this[i];
          }
      }
}

Array.prototype.myFindIndex = function()  {
    for (let i = 0; i < this.length;++i) {
        if (arguments[0](this[i], i, this)) {
            return i;
        }
    }
    return - 1;
};

Array.prototype.myFlat = function (depth = 1) {
    let returnArr = [...this];
    if ((typeof depth === "number") && (depth > 0)) {
        for (let i = 0; i < depth; ++i) {
            const newArr = [];
            for (let j = 0; j < returnArr.length; ++j) {
                if (Array.isArray(returnArr[j])) newArr.push(...returnArr[j]);
                else newArr.push(returnArr[j]);
            }
            returnArr = newArr;
        }
    }
    return [...returnArr];
};

Array.prototype.myMap = function()  {
    const myMapArr = new Array(this.length);
    for (let i = 0; i < this.length;++i) {
        myMapArr[i] = arguments[0](this[i], i, this);
    }
    return [...myMapArr];
};

Array.prototype.myReduce = function()  {
    if ((typeof arguments[1] === undefined) && (this.length === 0)) {
        throw new Error("Error massage");
    }
    else if (((this.length === 1) && (typeof arguments[1] === "undefined")) || ((this.length === 0) && (typeof arguments[1] !== "undefined"))) {
        return this[0] ?? arguments[1]
    }
    else {
        let accumulator;
        let currentValue;
        if (typeof arguments[1] !== "undefined") {
            accumulator = arguments[1];
            currentValue = this[0];
        }
        else {
            accumulator = this[0];
            currentValue = this[1];
        }
        for (let i = currentValue; i < this.length; ++i) {
            accumulator = arguments[0](accumulator, this[i], i, this);
        }
        return accumulator;
    }
};*/


/*
// խնդիր2
const defineIsniqueArr =  (arr = []) => {
    const isUniquesItems = new Set(arr).size === arr.length;
    return isUniquesItems;
};
*/


/*
// խնդիր3
const defineIsniqueStr =  (str = "") => {
    const withoutSpaceStr = str.replace(/ /g,"");
    const isUniquesLetters = new Set(withoutSpaceStr).size === withoutSpaceStr.length;
    return isUniquesLetters;
};
*/


//խնդիր4
const myIntersection = function (arr1, ...remainingArr) {
    const unicalItems = [arr1[0]];
    for (let i = 1; i < arr1.length; ++i) {
        const comparedValue = arr1[i];
        let notValue = true;
        for (let j = 0; j < unicalItems.length; ++j) {
            if (comparedValue === unicalItems[j]) {
                notValue = false;
                break;
            }
        }
        if (notValue) unicalItems.push(comparedValue);
    }
    if (remainingArr.length === 0) return unicalItems;
    else {
    forI: for (let i = 0; i < unicalItems.length; ++i) {
        forJ: for (let j = 0; j < remainingArr.length; ++j) {
            if (!(Array.isArray(remainingArr[j]))) return [];
                for (let k = 0; k < remainingArr[j].length; ++k) {
                    if (unicalItems[i] === remainingArr[j][k]) continue forJ;
                }
                for (let k = i; k > 0; k--) {
                    unicalItems[k] = unicalItems[k - 1];
                }
                unicalItems.shift();
                continue forI; 
            }
        }
        return unicalItems;
    }    
}

const myPull = function(arr, ...arg) {
   forI: for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arg.length; ++j) {
            if (arr[i] === arg[j]) {
                for (let k = i; k > 0; k--) {
                    arr[k] = arr[k - 1];
                }
                arr.shift();
                --i;
                continue forI;
            }
        }

    } 
    return arr;
}

const myTail = function(arr) {
    const result = [];
    for (let i = 1; i < arr.length; ++i) {
        result[i -1] = arr[i];
    }
    return result;
}

const myTake = function(arr, counItems) {
    const result = [arr[0]];
    if (counItems < 1) return [];
    else if (counItems === 1) return result;
    else {
        counItems = (counItems > arr.length)? arr.length : counItems;
        for (let i = 1; i < counItems; ++i) {
            result[i] = arr[i];
        }
        return result;
    }
}

