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
    var month = item.getUTCMonth() + 1;
    var day = item.getUTCDate();
    var year = item.getUTCFullYear();
      return year + "-0" + month + "-" + day
  })
}
console.log(getWeeks(new Date(2016, 06, 26)));


module.exports = getWeeks
