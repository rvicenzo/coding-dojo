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

module.exports = {
  insertValue,
  checkValue,
};
