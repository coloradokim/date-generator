var DateGenerator = function (date) {
  this.date = date
}

DateGenerator.prototype.getMonday= function(){
  var startDate = new Date(this.date);
  var day = startDate.getDay();
  var diffToMonday = startDate.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(startDate.setDate(diffToMonday));
}

var test = new DateGenerator(new Date()).getMonday();

console.log(test);
