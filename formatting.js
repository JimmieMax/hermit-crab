let arr = [2, 3, 5, 8, 1, 9, 20];

function findSum(result) {
    let index1,index2;
    arr.find((num, index) => {
        return arr.find((otherNum, otherIndex) => {
            if(index !== otherIndex && num + otherNum === result) {
                [index1, index2] = [index, otherIndex];
                return true;
            } else {
                return false;
            }
        });
    })
    return [index1, index2];
}

function findAllSum(result) {
    let targets = [];
    arr.forEach((num, index) => {
        return arr.forEach((otherNum, otherIndex) => {
            if(index !== otherIndex && num + otherNum === result) {
                targets.push([index, otherIndex])
            }
        });
    })
    return targets;
}
console.log('find:', findSum(29));
console.log('findAll:', findAllSum(10));