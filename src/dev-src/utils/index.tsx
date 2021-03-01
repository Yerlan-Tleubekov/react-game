export function setUniqueValues(values: Array<string>): Array<string> {
  const uniqueValuesSet = new Set(values);
  const uniqueValuesArray = Array.from(uniqueValuesSet);

  return uniqueValuesArray;
}

export const cloneDeepArray = (array: Array<any>) => {
  const newArray = array.map((row) => row.map((col: any) => col));
  return newArray;
};

export const getTwoDimenArrayIndexInOneDimenArray = (
  rowIndex: number,
  rowLength: number,
  colIndex: number
) => {
  return rowIndex * rowLength + colIndex;
};

export const hasOneEmptyCell = (array: Array<Array<number | null>>) => {
  const newArray = cloneDeepArray(array).flat();

  return newArray.includes(null);
};
