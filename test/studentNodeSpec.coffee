Student = require '../src/studentNode'
chai = require('chai')
expect = chai.expect

describe 'Student', ->
  it 'should report grade', ->
    student = new Student score: 75
    expect(student.grade()).to.equal('C')
