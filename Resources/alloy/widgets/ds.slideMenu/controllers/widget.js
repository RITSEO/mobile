function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ds.slideMenu/" + s : s.substring(0, index) + "/ds.slideMenu/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("ds.slideMenu");
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.leftMenu = Ti.UI.createWindow({
        top: "0dp",
        left: "0dp",
        width: "250dp",
        zIndex: "1",
        id: "leftMenu"
    });
    $.__views.leftMenu && $.addTopLevelView($.__views.leftMenu);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView"
    });
    $.__views.leftMenu.add($.__views.tableView);
    $.__views.win = Ti.UI.createWindow({
        left: "0dp",
        zIndex: "10",
        backgroundColor: "white",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.shadowview = Ti.UI.createView({
        shadowColor: "black",
        shadowOffset: {
            x: "0",
            y: "0"
        },
        shadowRadius: "2.5",
        ZIndex: "10",
        id: "shadowview"
    });
    $.__views.win.add($.__views.shadowview);
    $.__views.innerwin = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Slider Menu",
        barColor: "black",
        left: "0",
        zIndex: "10",
        id: "innerwin"
    });
    $.__views.nav = Ti.UI.MobileWeb.createNavigationGroup({
        left: "0",
        width: Ti.Platform.displayCaps.platformWidth,
        window: $.__views.innerwin,
        id: "nav"
    });
    $.__views.shadowview.add($.__views.nav);
    $.__views.button = Ti.UI.createButton({
        image: "/ds.slideMenu/ButtonMenu.png",
        left: "10",
        top: "7",
        width: "35",
        height: "30",
        style: "none",
        id: "button"
    });
    $.__views.shadowview.add($.__views.button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animateLeft = Ti.UI.createAnimation({
        left: 250,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var animateRight = Ti.UI.createAnimation({
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var touchStartX = 0;
    var touchStarted = false;
    $.innerwin.addEventListener("touchstart", function(e) {
        touchStartX = parseInt(e.x, 10);
    });
    $.innerwin.addEventListener("touchend", function() {
        touchStarted = false;
        if ($.win.left >= 150) {
            $.win.animate(animateLeft);
            hasSlided = true;
        } else {
            $.win.animate(animateRight);
            hasSlided = false;
        }
    });
    $.innerwin.addEventListener("touchmove", function(e) {
        var x = parseInt(e.globalPoint.x, 10);
        var newLeft = x - touchStartX;
        touchStarted && 250 >= newLeft && newLeft >= 0 && ($.win.left = newLeft);
        newLeft > 30 && (touchStarted = true);
    });
    $.button.addEventListener("singletap", function() {
        $.toggleSlider();
    });
    var hasSlided = false;
    exports.toggleSlider = function() {
        if (hasSlided) {
            $.win.animate(animateRight);
            hasSlided = false;
        } else {
            $.win.animate(animateLeft);
            hasSlided = true;
        }
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;