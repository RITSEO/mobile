function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        selectedBackgroundColor: "#666",
        selectedColor: "white",
        backgroundColor: "white",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId0"
    });
    $.__views.row.add($.__views.__alloyId0);
    $.__views.label = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "16"
        },
        id: "label"
    });
    $.__views.__alloyId0.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.label.text = args.label || "";
    $.row.customView = args.customView || "";
    $.row.customTitle = $.label.text;
    $.row.addEventListener("click", function() {
        var _ = Alloy.Globals.ds;
        var code = args.code;
        _.innerwin.remove(Alloy.Globals.currentView);
        Alloy.Globals.getJobsForCategory(code, function(results) {
            var listData = {
                code: args.code,
                label: args.label,
                data: results
            };
            console.log(listData);
            Alloy.Globals.currentView = Allow.createController("jobList", listData).getView();
            _.innerwin.add(Alloy.Globals.currentView);
        });
        _.toggleSlider();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;