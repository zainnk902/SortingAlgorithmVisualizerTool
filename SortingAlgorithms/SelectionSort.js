export function getSelectionSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    selectionSort(auxillaryArray, animations);
    array = auxillaryArray;
    return [animations, array];
}
function selectionSort(auxiliaryArray, animations){
    const N = auxiliaryArray.length;
    for (let i = 0; i < N-1; i++) {
        let smallest = auxiliaryArray[i];
        let idx = i;
        
        
        for(let j = i+1; j < N; j++){
            //We push three elements onto the array because we need an extra spot to see whether we need to make a color change or not when showing the animation
            animations.push(["first", j,  idx]);
            animations.push(["second", j, idx]);
            if(auxiliaryArray[j] < auxiliaryArray[idx]){
                idx = j;
            }
        }
        //switch the colors back after the comparisons are done 
        animations.push(["dummy", idx, auxiliaryArray[i]]);
        animations.push(["dummy", i, auxiliaryArray[idx]]);
        swap(auxiliaryArray, i, idx);

        
    }
}
function swap(auxiliaryArray, firstIndex, secondIndex) {
    let temp = auxiliaryArray[firstIndex];
    auxiliaryArray[firstIndex] = auxiliaryArray[secondIndex];
    auxiliaryArray[secondIndex] = temp;
}
