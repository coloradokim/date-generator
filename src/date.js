function getWeeks(date) {
  var startDate = new Date(date);
  var day = date.getDay();
  var diffToMonday = startDate.getDate() - day + (day === 0 ? -6 : 1);
  var firstMonday =  new Date(startDate.setDate(diffToMonday));
  var result = [];
  do {
    result.push(new Date(firstMonday.setDate(firstMonday.getDate() + 7)));
  } while (result.length < 52)
  return result.map(function(item) {
    return item.toString()
  })
}
console.log(getWeeks(new Date(2016, 06, 26)));


module.exports = getWeeks
