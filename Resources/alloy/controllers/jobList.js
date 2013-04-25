function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.jobList = Ti.UI.createView({
        backgroundColor: "white",
        id: "jobList"
    });
    $.__views.jobList && $.addTopLevelView($.__views.jobList);
    $.__views.jobList = Ti.UI.createTableView({
        id: "jobList"
    });
    $.__views.jobList.add($.__views.jobList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;