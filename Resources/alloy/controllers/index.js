function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.ds = Alloy.createWidget("ds.slideMenu", "widget", {
        id: "ds",
        __parentSymbol: $.__views.win
    });
    $.__views.ds.setParent($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    Alloy.Globals.getCategories(function(results) {
        var section = Ti.UI.createTableViewSection();
        section.add(Alloy.createController("category", {
            code: null,
            label: "All Jobs"
        }).getView());
        for (x in results) {
            var args = {
                code: x,
                label: results[x]
            };
            section.add(Alloy.createController("category", args).getView());
        }
        data.push(section);
        $.ds.tableView.data = data;
    });
    Alloy.Globals.ds = $.ds;
    Alloy.Globals.currentView = Alloy.createController("jobList").getView();
    $.ds.innerwin.add(Alloy.Globals.currentView);
    $.win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;