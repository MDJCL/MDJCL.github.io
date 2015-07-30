// "use strict";
$(document).ready(function() {
    oldGrid = "homeScreenGrid";
    // oldGrid = "documentGrid"
    oldElement = "";
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
    allImages = ["images/resized/miscGallery/0001-resized.jpg", "images/resized/miscGallery/0001-resized.png", "images/resized/miscGallery/0002-resized.jpg", "images/resized/miscGallery/0002-resized.png", "images/resized/miscGallery/0003-resized.jpg", "images/resized/miscGallery/0003-resized.png", "images/resized/miscGallery/0004-resized.jpg", "images/resized/miscGallery/0004-resized.png", "images/resized/miscGallery/0005-resized.jpg", "images/resized/miscGallery/0005-resized.png", "images/resized/miscGallery/0006-resized.jpg", "images/resized/miscGallery/0007-resized.jpg", "images/resized/miscGallery/0008-resized.jpg", "images/resized/miscGallery/0009-resized.jpg", "images/resized/miscGallery/0010-resized.jpg", "images/resized/miscGallery/0011-resized.jpg", "images/resized/miscGallery/0012-resized.jpg", "images/resized/miscGallery/0013-resized.jpg", "images/resized/miscGallery/0014-resized.jpg", "images/resized/miscGallery/0015-resized.jpg", "images/resized/miscGallery/0016-resized.jpg", "images/resized/miscGallery/0017-resized.jpg", "images/resized/miscGallery/0018-resized.jpg", "images/resized/miscGallery/0019-resized.jpg", "images/resized/miscGallery/0020-resized.jpg", "images/resized/miscGallery/0021-resized.jpg", "images/resized/miscGallery/0022-resized.jpg", "images/resized/miscGallery/0023-resized.jpg", "images/resized/miscGallery/0024-resized.jpg", "images/resized/miscGallery/0025-resized.jpg", "images/resized/miscGallery/0026-resized.jpg", "images/resized/miscGallery/0027-resized.jpg", "images/resized/miscGallery/0028-resized.jpg", "images/resized/miscGallery/0029-resized.jpg", "images/resized/miscGallery/0030-resized.jpg", "images/resized/miscGallery/0031-resized.jpg", "images/resized/miscGallery/0032-resized.jpg", "images/resized/miscGallery/0033-resized.jpg", "images/resized/miscGallery/0034-resized.jpg", "images/resized/miscGallery/0035-resized.jpg", "images/resized/miscGallery/0036-resized.jpg", "images/resized/miscGallery/0037-resized.jpg", "images/resized/miscGallery/0038-resized.jpg", "images/resized/miscGallery/0039-resized.jpg", "images/resized/miscGallery/0040-resized.jpg", "images/resized/miscGallery/0041-resized.jpg", "images/resized/miscGallery/0042-resized.jpg", "images/resized/miscGallery/0043-resized.jpg", "images/resized/miscGallery/0044-resized.jpg", "images/resized/miscGallery/0045-resized.jpg", "images/resized/miscGallery/0046-resized.jpg", "images/resized/miscGallery/0047-resized.jpg", "images/resized/miscGallery/0048-resized.jpg", "images/resized/miscGallery/0049-resized.jpg", "images/resized/miscGallery/0050-resized.jpg", "images/resized/miscGallery/0051-resized.jpg", "images/resized/miscGallery/0052-resized.jpg", "images/resized/miscGallery/0053-resized.jpg", "images/resized/miscGallery/0054-resized.jpg", "images/resized/miscGallery/0055-resized.jpg", "images/resized/miscGallery/0056-resized.jpg", "images/resized/miscGallery/0057-resized.jpg", "images/resized/miscGallery/0058-resized.jpg", "images/resized/miscGallery/0059-resized.jpg", "images/resized/miscGallery/0060-resized.jpg", "images/resized/miscGallery/0061-resized.jpg", "images/resized/miscGallery/0062-resized.jpg", "images/resized/miscGallery/0063-resized.jpg", "images/resized/miscGallery/0064-resized.jpg", "images/resized/miscGallery/0065-resized.jpg", "images/resized/miscGallery/0066-resized.jpg", "images/resized/miscGallery/0067-resized.jpg", "images/resized/miscGallery/0068-resized.jpg", "images/resized/miscGallery/0069-resized.jpg", "images/resized/miscGallery/0070-resized.jpg", "images/resized/miscGallery/0071-resized.jpg", "images/resized/miscGallery/0072-resized.jpg", "images/resized/miscGallery/0073-resized.jpg", "images/resized/miscGallery/0074-resized.jpg", "images/resized/miscGallery/0075-resized.jpg", "images/resized/miscGallery/0076-resized.jpg", "images/resized/miscGallery/0077-resized.jpg", "images/resized/miscGallery/0078-resized.jpg", "images/resized/miscGallery/0079-resized.jpg", "images/resized/miscGallery/0080-resized.jpg", "images/resized/miscGallery/0081-resized.jpg", "images/resized/miscGallery/0082-resized.jpg", "images/resized/miscGallery/0083-resized.jpg", "images/resized/miscGallery/0084-resized.jpg", "images/resized/miscGallery/0085-resized.jpg", "images/resized/miscGallery/0086-resized.jpg", "images/resized/miscGallery/0087-resized.jpg", "images/resized/miscGallery/0088-resized.jpg", "images/resized/miscGallery/0089-resized.jpg", "images/resized/miscGallery/0090-resized.jpg", "images/resized/miscGallery/0091-resized.jpg", "images/resized/miscGallery/0092-resized.jpg", "images/resized/miscGallery/0093-resized.jpg", "images/resized/miscGallery/0094-resized.jpg", "images/resized/miscGallery/0095-resized.jpg", "images/resized/miscGallery/0096-resized.jpg", "images/resized/miscGallery/0097-resized.jpg", "images/resized/miscGallery/0098-resized.jpg", "images/resized/miscGallery/0099-resized.jpg", "images/resized/miscGallery/0100-resized.jpg", "images/resized/miscGallery/0101-resized.jpg", "images/resized/miscGallery/0102-resized.jpg", "images/resized/miscGallery/0103-resized.jpg", "images/resized/miscGallery/0104-resized.jpg", "images/resized/miscGallery/0105-resized.jpg", "images/resized/miscGallery/0106-resized.jpg", "images/resized/miscGallery/0107-resized.jpg", "images/resized/miscGallery/0108-resized.jpg", "images/resized/miscGallery/0109-resized.jpg", "images/resized/miscGallery/0110-resized.jpg", "images/resized/miscGallery/0111-resized.jpg", "images/resized/miscGallery/0112-resized.jpg", "images/resized/miscGallery/0113-resized.jpg", "images/resized/miscGallery/0114-resized.jpg", "images/resized/miscGallery/0115-resized.jpg", "images/resized/miscGallery/0116-resized.jpg", "images/resized/miscGallery/0117-resized.jpg", "images/resized/miscGallery/0118-resized.jpg", "images/resized/miscGallery/0119-resized.jpg", "images/resized/miscGallery/0120-resized.jpg", "images/resized/miscGallery/0121-resized.jpg", "images/resized/miscGallery/0122-resized.jpg", "images/resized/miscGallery/0123-resized.jpg", "images/resized/miscGallery/0124-resized.jpg", "images/resized/miscGallery/0125-resized.jpg", "images/resized/miscGallery/0126-resized.jpg", "images/resized/miscGallery/0127-resized.jpg", "images/resized/miscGallery/0128-resized.jpg", "images/resized/miscGallery/0129-resized.jpg", "images/resized/miscGallery/0130-resized.jpg", "images/resized/miscGallery/0131-resized.jpg", "images/resized/miscGallery/0132-resized.jpg", "images/resized/miscGallery/0133-resized.jpg", "images/resized/miscGallery/0134-resized.jpg", "images/resized/miscGallery/0135-resized.jpg", "images/resized/miscGallery/0136-resized.jpg", "images/resized/miscGallery/0137-resized.jpg", "images/resized/miscGallery/0138-resized.jpg", "images/resized/miscGallery/0139-resized.jpg", "images/resized/miscGallery/0140-resized.jpg", "images/resized/miscGallery/0141-resized.jpg", "images/resized/miscGallery/0142-resized.jpg", "images/resized/miscGallery/0143-resized.jpg", "images/resized/miscGallery/0144-resized.jpg", "images/resized/miscGallery/0145-resized.jpg", "images/resized/miscGallery/0146-resized.jpg", "images/resized/miscGallery/0147-resized.jpg", "images/resized/miscGallery/0148-resized.jpg", "images/resized/miscGallery/0149-resized.jpg", "images/resized/miscGallery/0150-resized.jpg", "images/resized/miscGallery/0151-resized.jpg", "images/resized/miscGallery/0152-resized.jpg", "images/resized/miscGallery/0153-resized.jpg", "images/resized/miscGallery/0154-resized.jpg", "images/resized/miscGallery/0155-resized.jpg", "images/resized/miscGallery/0156-resized.jpg", "images/resized/miscGallery/0157-resized.jpg", "images/resized/miscGallery/0158-resized.jpg", "images/resized/miscGallery/0159-resized.jpg", "images/resized/miscGallery/0160-resized.jpg", "images/resized/miscGallery/0161-resized.jpg", "images/resized/miscGallery/0162-resized.jpg", "images/resized/miscGallery/0163-resized.jpg", "images/resized/miscGallery/0164-resized.jpg", "images/resized/miscGallery/0165-resized.jpg", "images/resized/miscGallery/0166-resized.jpg", "images/resized/miscGallery/0167-resized.jpg", "images/resized/miscGallery/0168-resized.jpg", "images/resized/miscGallery/0169-resized.jpg", "images/resized/miscGallery/0170-resized.jpg", "images/resized/miscGallery/0171-resized.jpg", "images/resized/miscGallery/0172-resized.jpg", "images/resized/miscGallery/0173-resized.jpg", "images/resized/miscGallery/0174-resized.jpg", "images/resized/miscGallery/0175-resized.jpg", "images/resized/miscGallery/0176-resized.jpg", "images/resized/miscGallery/0177-resized.jpg", "images/resized/miscGallery/0178-resized.jpg", "images/resized/miscGallery/0179-resized.jpg", "images/resized/miscGallery/0180-resized.jpg", "images/resized/miscGallery/0181-resized.jpg", "images/resized/miscGallery/0182-resized.jpg", "images/resized/miscGallery/0183-resized.jpg", "images/resized/miscGallery/0184-resized.jpg", "images/resized/miscGallery/0185-resized.jpg", "images/resized/miscGallery/0186-resized.jpg", "images/resized/miscGallery/0187-resized.jpg", "images/resized/miscGallery/0188-resized.jpg", "images/resized/miscGallery/0189-resized.jpg", "images/resized/miscGallery/0190-resized.jpg", "images/resized/miscGallery/0191-resized.jpg", "images/resized/miscGallery/0192-resized.jpg", "images/resized/miscGallery/0193-resized.jpg", "images/resized/miscGallery/0194-resized.jpg", "images/resized/miscGallery/0195-resized.jpg", "images/resized/miscGallery/0196-resized.jpg", "images/resized/miscGallery/0197-resized.jpg", "images/resized/miscGallery/0198-resized.jpg", "images/resized/miscGallery/0199-resized.jpg", "images/resized/miscGallery/0200-resized.jpg", "images/resized/miscGallery/0201-resized.jpg", "images/resized/miscGallery/0202-resized.jpg", "images/resized/miscGallery/0203-resized.jpg", "images/resized/miscGallery/0204-resized.jpg", "images/resized/miscGallery/0205-resized.jpg", "images/resized/miscGallery/0206-resized.jpg", "images/resized/miscGallery/0207-resized.jpg", "images/resized/miscGallery/0208-resized.jpg", "images/resized/miscGallery/0209-resized.jpg", "images/resized/miscGallery/0210-resized.jpg", "images/resized/miscGallery/0211-resized.jpg", "images/resized/miscGallery/0212-resized.jpg", "images/resized/miscGallery/0213-resized.jpg", "images/resized/miscGallery/0214-resized.jpg", "images/resized/miscGallery/0215-resized.jpg", "images/resized/miscGallery/0216-resized.jpg", "images/resized/miscGallery/0217-resized.jpg", "images/resized/miscGallery/0218-resized.jpg", "images/resized/miscGallery/0219-resized.jpg", "images/resized/miscGallery/0220-resized.jpg", "images/resized/miscGallery/0221-resized.jpg", "images/resized/miscGallery/0222-resized.jpg", "images/resized/miscGallery/0223-resized.jpg", "images/resized/miscGallery/0224-resized.jpg", "images/resized/miscGallery/0225-resized.jpg", "images/resized/miscGallery/0226-resized.jpg", "images/resized/miscGallery/0227-resized.jpg", "images/resized/miscGallery/0228-resized.jpg", "images/resized/miscGallery/0229-resized.jpg", "images/resized/miscGallery/0230-resized.jpg", "images/resized/miscGallery/0231-resized.jpg", "images/resized/miscGallery/0232-resized.jpg", "images/resized/miscGallery/0233-resized.jpg", "images/resized/miscGallery/0234-resized.jpg", "images/resized/miscGallery/0235-resized.jpg", "images/resized/miscGallery/0236-resized.jpg", "images/resized/miscGallery/0237-resized.jpg", "images/resized/miscGallery/0238-resized.jpg", "images/resized/miscGallery/0239-resized.jpg", "images/resized/miscGallery/0240-resized.jpg", "images/resized/miscGallery/0241-resized.jpg", "images/resized/miscGallery/0242-resized.jpg", "images/resized/miscGallery/0243-resized.jpg", "images/resized/miscGallery/0244-resized.jpg", "images/resized/miscGallery/0245-resized.jpg", "images/resized/miscGallery/0246-resized.jpg", "images/resized/miscGallery/0247-resized.jpg", "images/resized/miscGallery/0248-resized.jpg", "images/resized/miscGallery/0249-resized.jpg", "images/resized/miscGallery/0250-resized.jpg", "images/resized/miscGallery/0251-resized.jpg", "images/resized/miscGallery/0252-resized.jpg", "images/resized/miscGallery/0253-resized.jpg", "images/resized/miscGallery/0254-resized.jpg", "images/resized/miscGallery/0255-resized.jpg", "images/resized/miscGallery/0256-resized.jpg", "images/resized/miscGallery/0257-resized.jpg", "images/resized/miscGallery/0258-resized.jpg", "images/resized/miscGallery/0259-resized.jpg", "images/resized/miscGallery/0260-resized.jpg", "images/resized/miscGallery/0261-resized.jpg", "images/resized/miscGallery/0262-resized.jpg", "images/resized/miscGallery/0263-resized.jpg", "images/resized/miscGallery/0264-resized.jpg", "images/resized/miscGallery/0265-resized.jpg", "images/resized/miscGallery/0266-resized.jpg", "images/resized/miscGallery/0267-resized.jpg", "images/resized/miscGallery/0268-resized.jpg", "images/resized/miscGallery/0269-resized.jpg", "images/resized/miscGallery/0270-resized.jpg", "images/resized/miscGallery/0271-resized.jpg", "images/resized/miscGallery/0272-resized.jpg", "images/resized/miscGallery/0273-resized.jpg", "images/resized/miscGallery/0274-resized.jpg", "images/resized/miscGallery/0275-resized.jpg", "images/resized/miscGallery/0276-resized.jpg", "images/resized/miscGallery/0277-resized.jpg", "images/resized/miscGallery/0278-resized.jpg", "images/resized/miscGallery/0279-resized.jpg", "images/resized/miscGallery/0280-resized.jpg", "images/resized/miscGallery/0281-resized.jpg", "images/resized/miscGallery/0282-resized.jpg", "images/resized/miscGallery/0283-resized.jpg", "images/resized/miscGallery/0284-resized.jpg", "images/resized/miscGallery/0285-resized.jpg", "images/resized/miscGallery/0286-resized.jpg", "images/resized/miscGallery/0287-resized.jpg", "images/resized/miscGallery/0288-resized.jpg", "images/resized/miscGallery/0289-resized.jpg", "images/resized/miscGallery/0290-resized.jpg", "images/resized/miscGallery/0291-resized.jpg", "images/resized/miscGallery/0292-resized.jpg", "images/resized/miscGallery/0293-resized.jpg", "images/resized/miscGallery/0294-resized.jpg", "images/resized/miscGallery/0295-resized.jpg", "images/resized/miscGallery/0296-resized.jpg", "images/resized/miscGallery/0297-resized.jpg", "images/resized/miscGallery/0298-resized.jpg", "images/resized/miscGallery/0299-resized.jpg", "images/resized/miscGallery/0300-resized.jpg", "images/resized/miscGallery/0301-resized.jpg", "images/resized/miscGallery/0302-resized.jpg", "images/resized/miscGallery/0303-resized.jpg", "images/resized/miscGallery/0304-resized.jpg", "images/resized/miscGallery/0305-resized.jpg", "images/resized/miscGallery/0306-resized.jpg", "images/resized/miscGallery/0307-resized.jpg", "images/resized/miscGallery/0308-resized.jpg", "images/resized/miscGallery/0309-resized.jpg", "images/resized/miscGallery/0310-resized.jpg", "images/resized/miscGallery/0311-resized.jpg", "images/resized/miscGallery/0312-resized.jpg", "images/resized/miscGallery/0313-resized.jpg", "images/resized/miscGallery/0314-resized.jpg", "images/resized/miscGallery/0315-resized.jpg", "images/resized/miscGallery/0316-resized.jpg", "images/resized/miscGallery/0317-resized.jpg", "images/resized/miscGallery/0318-resized.jpg", "images/resized/miscGallery/0319-resized.jpg", "images/resized/miscGallery/0320-resized.jpg", "images/resized/miscGallery/0321-resized.jpg", "images/resized/miscGallery/0322-resized.jpg", "images/resized/miscGallery/0323-resized.jpg", "images/resized/miscGallery/0324-resized.jpg", "images/resized/miscGallery/0325-resized.jpg", "images/resized/miscGallery/0326-resized.jpg", "images/resized/miscGallery/0327-resized.jpg", "images/resized/miscGallery/0328-resized.jpg", "images/resized/miscGallery/0329-resized.jpg", "images/resized/miscGallery/0330-resized.jpg", "images/resized/miscGallery/0331-resized.jpg", "images/resized/miscGallery/0332-resized.jpg", "images/resized/miscGallery/0333-resized.jpg"];
    shuffle(allImages);
    var myLeading = moltenLeading(".header-top-left", {
        minline: 1.9, // Integer: Minimum line-height for the element (multiplied by the element's font-size)
        maxline: 2.5, // Integer: Maximum line-height for the element (multiplied by the element's font-size)
        minwidth: 320, // Integer: Minimum element width where the adjustment starts
        maxwidth: 1500, // Integer: Maximum element width where the adjustment stops
        units: "px" // String: CSS units used for the min & max widths, can be "px", "em" or "rem"
    });
    $("img.lazyload").unveil(1000, function() {
        $(this).load(function() {
            // $(this).hide().fadeIn("slow");
        });
    });
    var toAdd = "<div class='row no-gutter'>" + $("#test").html() + "</div>";
    startingNumber = 0;
    $(window).scroll(function() {
        if (oldGrid === "photoGrid" && $(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
            console.log('end of page');
            append();
        }
    });
    append();
});

function append() {
    html = '<div class="row no-gutter"><div class="col-md-4 first"><div class="img-overlay"><img class="img-responsive lazyload" data-src="' + allImages.slice(startingNumber, startingNumber + 3).join('" src="images/resized/NJCL_smaller-resized.jpg"></div></div><div class="col-md-4"><div class="img-overlay"><img class="img-responsive lazyload" data-src="') + '" src="images/resized/NJCL_smaller-resized.jpg"></div></div></div>';
    startingNumber += 3;
    html += '<div class="row no-gutter"><div class="col-md-4 first"><div class="img-overlay"><img class="img-responsive lazyload" data-src="' + allImages.slice(startingNumber, startingNumber + 3).join('" src="images/resized/NJCL_smaller-resized.jpg"></div></div><div class="col-md-4"><div class="img-overlay"><img class="img-responsive lazyload" data-src="') + '" src="images/resized/NJCL_smaller-resized.jpg"></div></div></div>';
    startingNumber += 3;
    $("#photoContainer").append(html);
    $("#photoGrid img").unveil();
}
//var oldGrid = "calendarGrid";
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
