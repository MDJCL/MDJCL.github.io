// "use strict";
// to add grid, add to allGrid with display:none in inline style
$(document).ready(function() {
    oldGrid = "homeScreenGrid";
    // oldGrid = "documentGrid"
    oldElement = "";
    allGrid = ["constitGrid", "FAQGrid", "calendarGrid", "photoGrid", "documentGrid", "officerGrid", "songCreedGrid", "contactGrid", "pastTorchGrid"];
    //run below
    //     a=1;
    // for i in *.png; do
    //   new=$(printf "%04d.png" "$a") #04 pad to length of 4
    //   mv -- "$i" "$new"
    //   let a=a+1
    // done
    // $("#homeScreenGrid").css("display", "none")
    $("#constitGrid").css("display", "none");
    $("#FAQGrid").css("display", "none");
    $("#calendarGrid").css("display", "none");
    $("#photoGrid").css("display", "none");
    $("#documentGrid").css("display", "none");
    $("#officerGrid").css("display", "none");
    $("#songCreedGrid").css("display", "none");
    $("#contactGrid").css("display", "none");
    $("#pastTorchGrid").css("display", "none");
    //WILL BE ADDING "images/resized/miscGallery" TO ALL IMAGES
    //MAKE SURE IS IN the -resized /resized directory
    allImages = ["acatest2-resized.JPG", "acatest-resized.JPG", "bazaarbreak-resized.JPG", "CirceAphrodite-resized.JPG", "dinner-resized.JPG", "discus2-resized.JPG", "discus3-resized.JPG", "discus4-resized.JPG", "discuss1-resized.JPG", "electionspeeches1-resized.JPG", "electionspeeches2-resized.JPG", "finalcertamen1-resized.JPG", "finalcertamen2-resized.JPG", "gladiator1-resized.JPG", "gladiator2-resized.JPG", "gladiator4-resized.JPG", "gladiator5-resized.JPG", "Greekdancing-resized.png", "hephaestusaphrodite-resized.JPG", "LucasMaleah-resized.JPG", "NationalConvention0000-resized.jpg", "NationalConvention0001-resized.jpg", "NationalConvention0003-resized.jpg", "NationalConvention0004-resized.jpg", "NationalConvention0005-resized.jpg", "NationalConvention0007-resized.jpg", "NationalConvention0008-resized.jpg", "NationalConvention0009-resized.jpg", "NationalConvention0010-resized.jpg", "NationalConvention0011-resized.jpg", "NationalConvention0012-resized.jpg", "NationalConvention0013-resized.jpg", "NationalConvention0014-resized.jpg", "NationalConvention0015-resized.jpg", "NationalConvention0017-resized.jpg", "NationalConvention0018-resized.jpg", "NationalConvention0021-resized.jpg", "NationalConvention0023-resized.jpg", "newofficers-resized.JPG", "oldWix0001-resized.jpg", "oldWix0002-resized.jpg", "oldWix0003-resized.jpg", "oldWix0006-resized.jpg", "oldWix0007-resized.jpg", "oldWix0008-resized.jpg", "oldWix0011-resized.jpg", "oldWix0012-resized.jpg", "oldWix0013-resized.jpg", "oldWix0014-resized.jpg", "oldWix0015-resized.jpg", "oldWix0016-resized.jpg", "oldWix0017-resized.jpg", "oldWix0018-resized.jpg", "oldWix0019-resized.jpg", "oldWix0020-resized.jpg", "oldWix0022-resized.jpg", "oldWix0023-resized.jpg", "oldWix0024-resized.jpg", "oldWix0025-resized.jpg", "oldWix0026-resized.jpg", "oldWix0027-resized.jpg", "oldWix0028-resized.jpg", "oldWix0029-resized.jpg", "oldWix0030-resized.jpg", "oldWix0031-resized.jpg", "oldWix0032-resized.jpg", "oldWix0033-resized.jpg", "oldWix0034-resized.jpg", "oldWix0035-resized.jpg", "oldWix0036-resized.jpg", "oldWix0037-resized.jpg", "oldWix0039-resized.jpg", "oldWix0040-resized.jpg", "oldWix0041-resized.jpg", "oldWix0042-resized.jpg", "oldWix0043-resized.jpg", "oldWix0044-resized.jpg", "oldWix0045-resized.jpg", "oldWix0046-resized.jpg", "oldWix0047-resized.jpg", "oldWix0050-resized.jpg", "oldWix0051-resized.jpg", "oldWix0052-resized.jpg", "oldWix0053-resized.jpg", "oldWix0054-resized.jpg", "oldWix0056-resized.jpg", "oldWix0058-resized.jpg", "oldWix0059-resized.jpg", "oldWix0060-resized.jpg", "oldWix0061-resized.jpg", "oldWix0063-resized.jpg", "oldWix0064-resized.jpg", "oldWix0065-resized.jpg", "oldWix0066-resized.jpg", "oldWix0069-resized.jpg", "oldWix0071-resized.jpg", "oldWix0072-resized.jpg", "oldWix0073-resized.jpg", "oldWix0074-resized.jpg", "oldWix0075-resized.jpg", "oldWix0076-resized.jpg", "oldWix0077-resized.jpg", "oldWix0078-resized.jpg", "oldWix0079-resized.jpg", "oldWix0080-resized.jpg", "oldWix0081-resized.jpg", "oldWix0082-resized.jpg", "oldWix0083-resized.jpg", "oldWix0085-resized.jpg", "oldWix0088-resized.jpg", "oldWix0089-resized.jpg", "oldWix0090-resized.jpg", "oldWix0092-resized.jpg", "oldWix0093-resized.jpg", "oldWix0095-resized.jpg", "oldWix0096-resized.jpg", "oldWix0097-resized.jpg", "oldWix0098-resized.jpg", "oldWix0099-resized.jpg", "oldWix0100-resized.jpg", "oldWix0101-resized.jpg", "oldWix0102-resized.jpg", "oldWix0103-resized.jpg", "oldWix0105-resized.jpg", "oldWix0106-resized.jpg", "oldWix0108-resized.jpg", "oldWix0109-resized.jpg", "oldWix0110-resized.jpg", "oldWix0111-resized.jpg", "oldWix0113-resized.jpg", "oldWix0115-resized.jpg", "oldWix0116-resized.jpg", "oldWix0117-resized.jpg", "oldWix0118-resized.jpg", "oldWix0119-resized.jpg", "oldWix0120-resized.jpg", "oldWix0122-resized.jpg", "oldWix0123-resized.jpg", "oldWix0124-resized.jpg", "oldWix0125-resized.jpg", "oldWix0126-resized.jpg", "oldWix0127-resized.jpg", "oldWix0128-resized.jpg", "oldWix0129-resized.jpg", "oldWix0130-resized.jpg", "oldWix0131-resized.jpg", "oldWix0132-resized.jpg", "oldWix0133-resized.jpg", "oldWix0135-resized.jpg", "oldWix0136-resized.jpg", "oldWix0137-resized.jpg", "oldWix0138-resized.jpg", "oldWix0139-resized.jpg", "oldWix0140-resized.jpg", "oldWix0143-resized.jpg", "oldWix0144-resized.jpg", "oldWix0146-resized.jpg", "oldWix0147-resized.jpg", "oldWix0148-resized.jpg", "oldWix0150-resized.jpg", "oldWix0152-resized.jpg", "oldWix0154-resized.jpg", "oldWix0155-resized.jpg", "oldWix0157-resized.jpg", "oldWix0158-resized.jpg", "oldWix0159-resized.jpg", "oldWix0160-resized.jpg", "oldWix0163-resized.jpg", "oldWix0164-resized.jpg", "oldWix0165-resized.jpg", "oldWix0166-resized.jpg", "oldWix0167-resized.jpg", "oldWix0168-resized.jpg", "oldWix0169-resized.jpg", "oldWix0170-resized.jpg", "oldWix0171-resized.jpg", "oldWix0172-resized.jpg", "oldWix0174-resized.jpg", "oldWix0175-resized.jpg", "oldWix0176-resized.jpg", "oldWix0177-resized.jpg", "oldWix0178-resized.jpg", "oldWix0179-resized.jpg", "oldWix0180-resized.jpg", "oldWix0182-resized.jpg", "oldWix0183-resized.jpg", "oldWix0186-resized.jpg", "oldWix0187-resized.jpg", "oldWix0188-resized.jpg", "oldWix0189-resized.jpg", "oldWix0190-resized.jpg", "oldWix0191-resized.jpg", "oldWix0193-resized.jpg", "oldWix0194-resized.jpg", "oldWix0195-resized.jpg", "oldWix0196-resized.jpg", "oldWix0197-resized.jpg", "oldWix0198-resized.jpg", "oldWix0199-resized.jpg", "oldWix0201-resized.jpg", "oldWix0202-resized.jpg", "oldWix0203-resized.jpg", "oldWix0205-resized.jpg", "oldWix0206-resized.jpg", "oldWix0207-resized.jpg", "oldWix0208-resized.jpg", "oldWix0209-resized.jpg", "oldWix0210-resized.jpg", "oldWix0211-resized.jpg", "oldWix0212-resized.jpg", "oldWix0213-resized.jpg", "oldWix0217-resized.jpg", "oldWix0219-resized.jpg", "oldWix0220-resized.jpg", "oldWix0221-resized.jpg", "oldWix0222-resized.jpg", "oldWix0223-resized.jpg", "oldWix0224-resized.jpg", "oldWix0225-resized.jpg", "oldWix0227-resized.jpg", "oldWix0228-resized.jpg", "oldWix0229-resized.jpg", "oldWix0230-resized.jpg", "oldWix0231-resized.jpg", "oldWix0233-resized.jpg", "oldWix0234-resized.jpg", "oldWix0235-resized.jpg", "oldWix0236-resized.jpg", "oldWix0237-resized.jpg", "oldWix0238-resized.jpg", "oldWix0239-resized.jpg", "oldWix0240-resized.jpg", "oldWix0242-resized.jpg", "oldWix0243-resized.jpg", "oldWix0244-resized.jpg", "oldWix0245-resized.jpg", "oldWix0246-resized.jpg", "oldWix0247-resized.jpg", "oldWix0248-resized.jpg", "oldWix0249-resized.jpg", "oldWix0250-resized.jpg", "oldWix0251-resized.jpg", "oldWix0252-resized.jpg", "oldWix0253-resized.jpg", "oldWix0254-resized.jpg", "oldWix0255-resized.jpg", "oldWix0256-resized.jpg", "oldWix0259-resized.jpg", "oldWix0260-resized.jpg", "oldWix0261-resized.jpg", "oldWix0262-resized.jpg", "oldWix0263-resized.jpg", "oldWix0264-resized.jpg", "oldWix0265-resized.jpg", "oldWix0266-resized.jpg", "oldWix0267-resized.jpg", "oldWix0270-resized.jpg", "oldWix0271-resized.jpg", "oldWix0272-resized.jpg", "oldWix0274-resized.jpg", "oldWix0275-resized.jpg", "oldWix0276-resized.jpg", "oldWix0277-resized.jpg", "oldWix0278-resized.jpg", "oldWix0279-resized.jpg", "oldWix0280-resized.jpg", "oldWix0283-resized.jpg", "oldWix0284-resized.jpg", "oldWix0285-resized.jpg", "oldWix0286-resized.jpg", "oldWix0287-resized.jpg", "oldWix0288-resized.jpg", "oldWix0289-resized.jpg", "oldWix0290-resized.jpg", "oldWix0291-resized.jpg", "oldWix0292-resized.jpg", "oldWix0293-resized.jpg", "oldWix0294-resized.jpg", "oldWix0295-resized.jpg", "oldWix0296-resized.jpg", "oldWix0297-resized.jpg", "oldWix0298-resized.jpg", "oldWix0299-resized.jpg", "oldWix0300-resized.jpg", "oldWix0301-resized.jpg", "oldWix0302-resized.jpg", "oldWix0303-resized.jpg", "oldWix0304-resized.jpg", "oldWix0305-resized.jpg", "oldWix0306-resized.jpg", "oldWix0307-resized.jpg", "oldWix0308-resized.jpg", "oldWix0309-resized.jpg", "oldWix0310-resized.jpg", "oldWix0311-resized.jpg", "oldWix0312-resized.jpg", "oldWix0314-resized.jpg", "oldWix0315-resized.jpg", "oldWix0316-resized.jpg", "oldWix0317-resized.jpg", "oldWix0318-resized.jpg", "oldWix0319-resized.jpg", "oldWix0320-resized.jpg", "oldWix0321-resized.jpg", "oldWix0322-resized.jpg", "oldWix0323-resized.jpg", "oldWix0324-resized.jpg", "oldWix0326-resized.jpg", "oldWix0327-resized.jpg", "oldWix0328-resized.jpg", "oldWix0329-resized.jpg", "oldWix0330-resized.jpg", "oldWix0332-resized.jpg", "oldWix0333-resized.jpg", "peepcontest1-resized.png", "peepcontest2-resized.png", "squadoriginal-resized.jpeg", "squad-resized.jpeg", "talentshow1-resized.JPG", "talentshow2-resized.JPG", "talentshow3-resized.JPG", "Tweets0000-resized.jpg", "Tweets0001-resized.jpg", "Tweets0002-resized.jpg", "Tweets0003-resized.jpg", "Tweets0004-resized.jpg", "weaponspile-resized.jpg"];

    // cd /home/jonah/Dropbox/Public/MDJCL/yeoman/app/images/resized/miscGallery; echo '["'`ls| tr "\n" "@"|sed 's/@/","/g'|sed 's/","$//g'`'"]'|copy
    shuffle(allImages);
    // var myLeading = moltenLeading(".header-top-left", {
    //     minline: 1.9, // Integer: Minimum line-height for the element (multiplied by the element's font-size)
    //     maxline: 2.5, // Integer: Maximum line-height for the element (multiplied by the element's font-size)
    //     minwidth: 320, // Integer: Minimum element width where the adjustment starts
    //     maxwidth: 1500, // Integer: Maximum element width where the adjustment stops
    //     units: "px" // String: CSS units used for the min & max widths, can be "px", "em" or "rem"
    // });
    //
    $("img.lazyload").unveil(500)

    // $("img.lazyload").unveil(1000, function() {
    //     // $(this).load(function() {
    //     //     $(this).hide().fadeIn("slow");
    //     // });
    // });
    var toAdd = "<div class='row no-gutter'>" + $("#test").html() + "</div>";
    startingNumber = 0;
    $(window).scroll(function() {
        if (oldGrid === "photoGrid" && $(window).scrollTop() >= $(document).height() - $(window).height() - 400) {
            console.log('end of page');
            append();
        }
    });
    append();
    setTimeout(function() {
        onHashChange("start");
    }, 500);
    window.onhashchange = onHashChange;
});

function append() {
    console.log("appending");
    html = '<div class="row no-gutter"><div class="col-md-4 first"><div class="img-overlay"><img class="img-responsive lazyload" data-src="images/resized/miscGallery/' + allImages.slice(startingNumber, startingNumber + 3).join('" src="images/resized/NJCL_smaller-resized.jpg"></div></div><div class="col-md-4"><div class="img-overlay"><img class="img-responsive lazyload" data-src="images/resized/miscGallery/') + '" src="images/resized/NJCL_smaller-resized.jpg"></div></div></div>';
    startingNumber += 3;
    html += '<div class="row no-gutter"><div class="col-md-4 first"><div class="img-overlay"><img class="img-responsive lazyload" data-src="images/resized/miscGallery/' + allImages.slice(startingNumber, startingNumber + 3).join('" src="images/resized/NJCL_smaller-resized.jpg"></div></div><div class="col-md-4"><div class="img-overlay"><img class="img-responsive lazyload" data-src="images/resized/miscGallery/') + '" src="images/resized/NJCL_smaller-resized.jpg"></div></div></div>';
    startingNumber += 3;
    html += '<div class="row no-gutter"><div class="col-md-4 first"><div class="img-overlay"><img class="img-responsive lazyload" data-src="images/resized/miscGallery/' + allImages.slice(startingNumber, startingNumber + 3).join('" src="images/resized/NJCL_smaller-resized.jpg"></div></div><div class="col-md-4"><div class="img-overlay"><img class="img-responsive lazyload" data-src="images/resized/miscGallery/') + '" src="images/resized/NJCL_smaller-resized.jpg"></div></div></div>';
    startingNumber += 3;
    $("#photoContainer").append(html);
    $("#photoGrid img").unveil().trigger("unveil");
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function toHomeScreen() {
        // console.log("tohomescreen");
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
        document.location.hash = "";
    }
    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }

    };
}

onClickMenu = debounce(function(e) {
    //so if double click, won't go back and forth. Only runs every 500ms
    console.log(this);
    e.preventDefault();
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
}, 500);

$(".clickCollapse").click(onClickMenu);

function changeGrid(newGrid) {
    // console.log(newGrid);
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
    document.location.hash = newGrid.replace("Grid", "");
}

function onHashChange(isStart) {
    hashLocation = document.location.hash.replace("#", "") + "Grid";
    if (hashLocation !== "" && allGrid.indexOf(hashLocation) !== -1) {
        // console.log(hashLocation)
        changeGrid(hashLocation);
        if (isStart === "start") {
            hashThis = $('a[onclick*="' + hashLocation + '"]');

            if (hashThis.attr("class").indexOf("clickCollapse") != -1) {
                //Is a main menu not a sub part of a menu
                hashThis = $('a[onclick*="' + hashLocation + '"]');
                hashThis.addClass("selected");
                $($(hashThis).attr("data-target")).collapse("show").addClass("selected");
                $(".clickCollapse").not(hashThis).addClass("notSelected");

            } else {
                //is a sub menu
                 parentDataAttr = hashThis.eq(0).parent().attr("class").match(/collapseRow[A-z]+/)[0]
                         parentElem=  $('[data-target=".'+parentDataAttr+'"]')
            $("." + parentDataAttr).collapse("show").addClass("selected");
                 parentElem.addClass("selected")
                         $(".clickCollapse").not(parentElem).addClass("notSelected")

            }
        }
    }
}
