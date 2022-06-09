const wordSearch = (letters, word) => {
  if (word === undefined || word > letters.length) return false;

  const horizontalJoin = letters.map((ls) => ls.join(''));
  console.log(horizontalJoin); //=> return array of string of each row
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (l.reverse.includes(word)) return true;
  }

  let columnLength = letters[0].length; //8
  const columnArray = [];

  for (let i = 0; i < columnLength; i++) {
    columnArray.push([]); //we push [] into our new columnArray => 8 new emty array based on the columnLength 
  }

  for (let i = 0; i < columnLength; i++) {
    for (let letterRow of letters) {
      columnArray[i].push(letterRow[i]);
    }
  }

  const verticalJoin = columnArray.map((ls) => ls.join(''));

  console.log('verticalJoinAray:', verticalJoin);
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

// //====TEST CODE=====
// const matrix = [
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ];
// const keyword = 'FRANK'; //false

// wordSearch(matrix, keyword);

module.exports = wordSearch;

//BACKWARD CHECK FROM THE END
//DIAGO : reverse
