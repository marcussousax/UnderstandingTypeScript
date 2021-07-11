"use strict";
function add(n1, n2) {
    return n1 + n2;
}
var results = add(2, 90);
var Container = document.getElementById('content');
Container.innerHTML = "<p>" + results + "</p>";
