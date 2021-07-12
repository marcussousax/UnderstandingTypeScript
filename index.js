'use strict'

function add(n1, n2) {
  return n1 + n2
}

var results = add(2, 90)
// Flat Array
var data = [[1], [2, 3, 4], [[[5]]]]
var flatData = data.flat(3)
var Container = document.getElementById('content')
Container.innerHTML = '\n  <p>' + results + '</p> \n  <hr />\n  <h2>Flat Array </h2>\n  <p>' + JSON.stringify(flatData) + '</p>\n'
