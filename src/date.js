function getMonday(startDate) {
  var day = startDate.getDay()
  var diffToMonday = startDate.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(startDate.setDate(diffToMonday));
}

console.log(this.getMonday(1));



// find last Monday (first column header)
// continue to add 7 days to that date 52 times
// for each time, add that new date to an array
// result = an array that starts last Monday and goes until Monday a year from now

// Hint
// do {
//} while (true);



module.exports = getWeeks
