var DateGenerator = function (date) {
  this.date = date
}

DateGenerator.prototype.getMonday = function (){
  var startDate = new Date(this.date);
  var day = startDate.getDay();
  var diffToMonday = startDate.getDate() - day + (day === 0 ? -6 : 1);
    //how do I format the date? Do I do it here, or in creae weeks?
    return new Date(startDate.setDate(diffToMonday));
}

DateGenerator.prototype.getWeeks = function () {
  var dateArr = [];
  //do math, and push it into the dateArr
  return ['2016-07-25', '2016-08-01', '2016-08-08', '2016-08-15', '2016-08-22', '2016-08-29']
}

var test = new DateGenerator(new Date('2016, 07, 26')).getMonday();

console.log(new Date(test).getTime());
