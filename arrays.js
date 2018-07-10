var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,elem){
    array = array.slice(1);
    return array;
}
function destructivelyAddElementToBeginningOfArray(array,elem){
    array.shift(elem);
    return array;

}



function destructivelyRemoveElementFromBeginningOfArray(array1){
  array1.shift();
}
