function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.view3 = Ti.UI.createWindow({
        id: "view3"
    });
    $.__views.view3 && $.addTopLevelView($.__views.view3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "View 3",
        id: "__alloyId4"
    });
    $.__views.view3.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;