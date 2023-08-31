const notes = [10, 20, 50, 100];
const output = [];

function insertValue(value) {
  if (!checkValue(value)) {
    return false;
  }
  return value;
}

function checkValue(value) {
  let check = false;
  for (let nota of notes) {
    if (value >= nota) {
      check = true;
    }
  }
  return check;
}

function modValue (value) {
  if(value % 2 === 0) return true
  return false
}

module.exports = {
  insertValue,
  checkValue,
  modValue,
};
