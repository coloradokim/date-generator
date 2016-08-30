var getWeeks = require('../src/date')
var expect = require('chai').expect

describe('getWeeks', function () {
  it ('returns an array of 52 Mondays', function () {
    var date = getWeeks(new Date(2016, 07, 26))
    expect(date[0]).to.equal('2016-07-25')
    expect(date[1]).to.equal('2016-08-01')
    expect(date[2]).to.equal('2016-08-08')
    expect(date[3]).to.equal('2016-08-15')
    expect(date[4]).to.equal('2016-08-22')
    expect(date[5]).to.equal('2016-08-29')
    expect(date.length).to.equal(52)
  })
  xit ('works when you start with a Friday', function () {
    //write the test!
    var date = getWeeks(new Date(2016, 07, 26))
    expect(date[0]).to.equal('2016-07-25')
    expect(date[1]).to.equal('2016-08-01')
    expect(date[1]).to.equal('2016-08-01')
    expect(date[1]).to.equal('2016-08-01')
    expect(date[1]).to.equal('2016-08-01')
    expect(date[1]).to.equal('2016-08-01')
    expect(date[1]).to.equal('2016-08-01')
    expect(date[1]).to.equal('2016-08-01')
    expect(date[1]).to.equal('2016-08-01')
    expect(date[1]).to.equal('2016-08-01')
    expect(date[1]).to.equal('2016-08-01')
  })
  //write the test!
  xit ('works when you start with a Monday', function () {
    var date = getWeeks(new Date(2016, 07, 26))
    expect(date[0]).to.equal('2016-07-25')
    expect(date[1]).to.equal('2016-08-01')
  })
})
