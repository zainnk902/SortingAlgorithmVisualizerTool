//This function gets the animations for the array being sorted
export function getInsertionSortAnimations(array) {
    let animations  = [];
    let auxiliaryArray = array.slice();
    insertionSort(auxiliaryArray, animations);
    array = auxiliaryArray;
    return [animations, array];
}
function insertionSort(auxiliaryArray, animations){
    const N = auxiliaryArray.length;
    for (let i = 1; i < N; i++) {
        let key = auxiliaryArray[i];
        let j = i-1;
        animations.push([i,  i]);
        animations.push([i, i]);

        while(j >= 0 && key < auxiliaryArray[j]){
            animations.push(["dummy", j+1,  auxiliaryArray[j]]);
            auxiliaryArray[j + 1] = auxiliaryArray[j];
            j = j-1;
            if(j >= 0){
                animations.push(["first", j, i]);
                animations.push(["second", j, i]);
            }
        }
        animations.push(["dummy", j + 1, key]);
        auxiliaryArray[j + 1] = key;   
    }
}
function swap(auxiliaryArray, firstInd, secondInd) {
    let temp = auxiliaryArray[firstInd];
    auxiliaryArray[firstInd] = auxiliaryArray[secondInd];
    auxiliaryArray[secondInd] = temp;
}

