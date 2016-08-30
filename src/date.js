function getWeeks(date) {
  console.log(date);
  var startDate = new Date(date);
  console.log(startDate);
  //the month is one greater than the actual month
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
      return year + "-" + month + "-" + day
  })
}
// console.log(getWeeks(new Date(2016, 07, 26)));
getWeeks(new Date(2016, 08, 30))
module.exports = getWeeks
