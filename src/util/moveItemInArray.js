/**
 * Shifts element array to designated position in array.
 * @param {array} array: array for which items will be shifted
 * @param {number} fromIndex: index of array item that is going to move
 * @param {number} toIndex: Designated position in array for which the element
 * is shifted to
 * @returns array
 */
export default function moveItemInArray(array, fromIndex, toIndex) {
  if (fromIndex === toIndex) return array;

  const newArray = [...array];

  const target = newArray[fromIndex];
  const inc = toIndex < fromIndex ? -1 : 1;

  for (let i = fromIndex; i !== toIndex; i += inc) {
    newArray[i] = newArray[i + inc];
  }

  newArray[toIndex] = target;

  return newArray;
}
