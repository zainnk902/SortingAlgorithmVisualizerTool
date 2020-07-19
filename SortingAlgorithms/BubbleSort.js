//this function returns the animations for the array being sorted
export function getBubbleSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    bubbleSort(auxillaryArray, animations);
    
    array = auxillaryArray;
    return [animations, array];
}
//actual bubble sort function
function bubbleSort(auxillaryArray, animations) {
    const N = auxillaryArray.length;
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i -1; j++) {
            //change color since these are the elements being compared
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (auxillaryArray[j] > auxillaryArray[j + 1]) {
                //color swap, then actually swap elements 
                animations.push([j, auxillaryArray[j + 1]]);
                animations.push([j + 1, auxillaryArray[j]]);
                swap(auxillaryArray, j, j + 1);
            }
            else {
                //color switch but no array swaps
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }
        }
    }
}
//swap function 
function swap(auxiliaryArray, firstIndex, secondIndex) {
    let temp = auxiliaryArray[firstIndex];
    auxiliaryArray[firstIndex] = auxiliaryArray[secondIndex];
    auxiliaryArray[secondIndex] = temp;
}