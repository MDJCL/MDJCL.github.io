"use strict";
$(document).ready(function() {
    var myLeading = moltenLeading(".header-top-left", {
        minline: 1.9, // Integer: Minimum line-height for the element (multiplied by the element's font-size)
        maxline: 2.5, // Integer: Maximum line-height for the element (multiplied by the element's font-size)
        minwidth: 320, // Integer: Minimum element width where the adjustment starts
        maxwidth: 1500, // Integer: Maximum element width where the adjustment stops
        units: "px" // String: CSS units used for the min & max widths, can be "px", "em" or "rem"
    });
    $("img").unveil(900, function() {
        $(this).load(function() {
            this.style.opacity = 1;
        });
    });
});
var oldGrid = "homeScreenGrid";
var oldElement;
//var oldGrid = "calendarGrid";
function toHomeScreen() {
    $(".notSelected").removeClass("notSelected");
    $(".selected").not(".overlineContainer").collapse("hide");
    $(".selected").removeClass("selected");
    if (oldGrid !== "homeScreenGrid") {
        $("#homeScreenGrid").toggle("slide", {
            direction: "right"
        }, 2000);
        $("#" + oldGrid).toggle("slide", {
            direction: "left"
        }, 2000);
        oldGrid = "homeScreenGrid";
    }
}
$(".clickCollapse").click(function() {
    console.log(this);
    if (oldElement === this) {
        console.log("same elemetn 2x");
        toHomeScreen();
        oldElement = "";
    } else {
        $(".notSelected").removeClass("notSelected");
        $(".selected").not(".overlineContainer").collapse("hide");
        $(".selected").removeClass("selected");
        $($(this).attr("data-target")).collapse("show").addClass("selected");
        $(".clickCollapse").not(this).addClass("notSelected");
        if (this.href.indexOf("#") !== this.href.length - 1) {
            $(this.href.replace(/^.*\./, ".")).addClass("selected"); //.toggle()
        }
        $(this).addClass("selected");
        oldElement = this;
    }
});

function changeGrid(newGrid) {
    $("#" + newGrid + " img").trigger("unveil");
    if (oldGrid !== newGrid) {
        $("#" + newGrid).toggle("slide", {
            direction: "left"
        }, 2000);
        $("#" + oldGrid).toggle("slide", {
            direction: "right"
        }, 2000);
        oldGrid = newGrid;
    }
}