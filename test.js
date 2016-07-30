var DateGenerator = function (date) {
  this.date = date
}

DateGenerator.prototype.getMonday = function (){
  var startDate = new Date(this.date);
  var day = startDate.getDay();
  console.log(startDate);
  var diffToMonday = startDate.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(startDate.setDate(diffToMonday));
}

DateGenerator.prototype.createWeeks = function () {

}

var test = new DateGenerator(new Date()).getMonday().getYear();

console.log(test);
