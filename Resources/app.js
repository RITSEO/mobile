var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.baseUrl = "http://localhost/seo/";

Alloy.Globals.getCategories = function(callback) {
    var url = "?/api";
    this.fetch(url, function() {
        var response = JSON.parse(this.responseText);
        var results = response.types;
        callback(results);
    });
};

Alloy.Globals.getJobList = function(callback) {
    var url = "?/api";
    this.fetch(url, function() {
        var response = JSON.parse(this.responseText);
        var results = response.results;
        callback(results);
    });
};

Alloy.Globals.getJobsForCategory = function(category, callback) {
    var url = "?/api/category/" + category;
    this.fetch(url, function() {
        var response = JSON.parse(this.responseText);
        var results = response.results;
        callback(results);
    });
};

Alloy.Globals.getJob = function(number, callback) {
    var url = "?/api/detail/" + number;
    this.fetch(url, function() {
        var response = JSON.parse(this.responseText);
        var result = response.result;
        callback(result);
    });
};

Alloy.Globals.fetch = function(url, callback) {
    var xhr = Titanium.Network.createHTTPClient();
    xhr.onload = callback;
    xhr.open("GET", this.baseUrl + url);
    xhr.send();
};

Alloy.createController("index");