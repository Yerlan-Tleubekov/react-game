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

export const objectClone = (item: any) => {
  return JSON.parse(JSON.stringify(item));
};

export const clone = (item: any) => {
  if (!item) {
    return item;
  }

  const types = [Number, String, Boolean];
  let result: any = [];

  types.forEach(function (type) {
    if (item instanceof type) {
      result = type(item);
    }
  });

  if (typeof result == "undefined") {
    if (Object.prototype.toString.call(item) === "[object Array]") {
      result = [];
      item.forEach(function (child: any, index: number, array: Array<any>) {
        result[index] = clone(child);
      });
    } else if (typeof item == "object") {
      if (item.nodeType && typeof item.cloneNode == "function") {
        result = item.cloneNode(true);
      } else if (!item.prototype) {
        if (item instanceof Date) {
          result = new Date(item);
        } else {
          result = {};
          for (var i in item) {
            result[i] = clone(item[i]);
          }
        }
      } else {
        if (false && item.constructor) {
          result = new item.constructor();
        } else {
          result = item;
        }
      }
    } else {
      result = item;
    }
  }

  return result;
};

interface Move {
  i: number;
  j: number;
}


export function random(array: Array<Move>): Move {
  const rndNumber = Math.trunc(Math.random() * (array.length - 1));

  return array[rndNumber];
}