const transpose = function(matrix) {
    let returnArray = [];
    for (row = 0; row < matrix[0].length; row++) {
      let newArray = [];
      for (column = 0; column < matrix.length; column++) {
        newArray.push(matrix[column][row]);
      }
      returnArray.push(newArray);
    }
    return returnArray;
}

const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
    } 
}
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
 
}



module.exports = wordSearch