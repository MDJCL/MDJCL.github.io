// "use strict";
// to add grid, add to allGrid with display:none in inline style
$(document).ready(function() {
    oldGrid = "homeScreenGrid";
    // oldGrid = "documentGrid"
    oldElement = "";
    allGrid = ["constitGrid", "FAQGrid", "calendarGrid", "photoGrid", "documentGrid", "officerGrid", "songCreedGrid", "contactGrid", "pastTorchGrid", "eastonGrid", "dulaneyGrid", "countryGrid", "loyolaGrid", "eleanorGrid", "certamenGrid", "spellingGrid", "museumGrid", "linganoreGrid"];
    //run below
    //     a=1;
    // for i in *.png; do
    //   new=$(printf "%04d.png" "$a") #04 pad to length of 4
    //   mv -- "$i" "$new"
    //   let a=a+1
    // done
    // $("#homeScreenGrid").css("display", "none")
    //
    // $("#constitGrid").css("display", "none");
    // $("#FAQGrid").css("display", "none");
    // $("#calendarGrid").css("display", "none");
    // $("#photoGrid").css("display", "none");
    // $("#documentGrid").css("display", "none");
    // $("#officerGrid").css("display", "none");
    // $("#songCreedGrid").css("display", "none");
    // $("#contactGrid").css("display", "none");
    // $("#pastTorchGrid").css("display", "none");
    // $("#eastonGrid").css("display", "none");
    // $("#dulaneyGrid").css("display", "none");
    // $("#countryGrid").css("display", "none");
    // $("#loyolaGrid").css("display", "none");
    // $("#eleanorGrid").css("display", "none");
    // $("#certamenGrid").css("display", "none");
    // $("#spellingGrid").css("display", "none");
    // $("#museumGrid").css("display", "none");
    //WILL BE ADDING "images/resized/miscGallery" TO ALL IMAGES
    //MAKE SURE IS IN the -resized /resized directory
allImages = ["EllieKilmonNationalConvention__0000-resized.jpg","EllieKilmonNationalConvention__0001-resized.jpg","EllieKilmonNationalConvention__0002-resized.jpg","EllieKilmonNationalConvention__0004-resized.jpg","EllieKilmonNationalConvention__0005-resized.jpg","EllieKilmonNationalConvention__0007-resized.jpg","EllieKilmonNationalConvention__0008-resized.jpg","MagistraKunzConvention_0000-resized.jpg","MagistraKunzConvention_0001-resized.jpg","MagistraKunzConvention_0002-resized.jpg","MagistraKunzConvention_0003-resized.jpg","MagistraKunzConvention_0005-resized.jpg","MagistraKunzConvention_0006-resized.jpg","MagistraKunzConvention_0007-resized.jpg","MagistraKunzConvention_0008-resized.jpg","MagistraKunzConvention_0009-resized.jpg","MagistraKunzConvention_0010-resized.jpg","MagistraKunzConvention_0011-resized.jpg","MagistraKunzConvention_0012-resized.jpg","MagistraKunzConvention_0013-resized.jpg","MagistraKunzConvention_0015-resized.jpg","MagistraKunzConvention_0016-resized.jpg","MagistraKunzConvention_0017-resized.jpg","MagistraKunzConvention_0018-resized.jpg","MagistraKunzConvention_0019-resized.jpg","MagistraKunzConvention_0020-resized.jpg","MagistraKunzConvention_0021-resized.jpg","MagistraKunzConvention_0022-resized.jpg","MagistraKunzConvention_0023-resized.jpg","MagistraKunzConvention_0024-resized.jpg","MagistraKunzConvention_0026-resized.jpg","MagistraKunzConvention_0027-resized.jpg","MagistraKunzConvention_0028-resized.jpg","MagistraKunzConvention_0029-resized.jpg","MagistraKunzConvention_0030-resized.jpg","MagistraKunzConvention_0031-resized.jpg","MagistraKunzConvention_0032-resized.jpg","MagistraKunzConvention_0033-resized.jpg","MagistraKunzConvention_0034-resized.jpg","MagistraKunzConvention_0035-resized.jpg","MagistraKunzConvention_0036-resized.jpg","MagistraKunzConvention_0038-resized.jpg","MagistraKunzConvention_0039-resized.jpg","MagistraKunzConvention_0041-resized.jpg","MagistraKunzConvention_0042-resized.jpg","MagistraKunzConvention_0043-resized.jpg","MagistraKunzConvention_0044-resized.jpg","MagistraKunzConvention_0045-resized.jpg","MagistraKunzConvention_0046-resized.jpg","MagistraKunzConvention_0048-resized.jpg","MagistraKunzConvention_0049-resized.jpg","MagistraKunzConvention_0050-resized.jpg","MagistraKunzConvention_0051-resized.jpg","MagistraKunzConvention_0054-resized.jpg","MagistraKunzConvention_0055-resized.jpg","MagistraKunzConvention_0056-resized.jpg","MagistraKunzConvention_0059-resized.jpg","MagistraKunzConvention_0060-resized.jpg","MagistraKunzConvention_0061-resized.jpg","MagistraKunzConvention_0062-resized.jpg","MagistraKunzConvention_0063-resized.jpg","MagistraKunzConvention_0065-resized.jpg","MagistraKunzConvention_0066-resized.jpg","MagistraKunzConvention_0067-resized.jpg","MagistraKunzConvention_0069-resized.jpg","MagistraKunzConvention_0070-resized.jpg","MagistraKunzConvention_0072-resized.jpg","MagistraKunzConvention_0073-resized.jpg","MagistraKunzConvention_0074-resized.jpg","MagistraKunzConvention_0075-resized.jpg","MagistraKunzConvention_0076-resized.jpg","MagistraKunzConvention_0077-resized.jpg","MagistraKunzConvention_0078-resized.jpg","MagistraKunzConvention_0079-resized.jpg","MagistraKunzConvention_0080-resized.jpg","MagistraKunzConvention_0081-resized.jpg","MagistraKunzConvention_0082-resized.jpg","MagistraKunzConvention_0083-resized.jpg","MagistraKunzConvention_0084-resized.jpg","MagistraKunzConvention_0085-resized.jpg","MagistraKunzConvention_0086-resized.jpg","MagistraKunzConvention_0087-resized.jpg","MagistraKunzConvention_0088-resized.jpg","MagistraKunzConvention_0089-resized.jpg","MagistraKunzConvention_0090-resized.jpg","MagistraKunzConvention_0093-resized.jpg","MagistraKunzConvention_0094-resized.jpg","MagistraKunzConvention_0095-resized.jpg","MagistraKunzConvention_0096-resized.jpg","MagistraKunzConvention_0097-resized.jpg","MagistraKunzConvention_0098-resized.jpg","MagistraKunzConvention_0099-resized.jpg","MagistraKunzConvention_0100-resized.jpg","MagistraKunzConvention_0101-resized.jpg","MagistraKunzConvention_0102-resized.jpg","MagistraKunzConvention_0103-resized.jpg","MagistraKunzConvention_0104-resized.jpg","MagistraKunzConvention_0105-resized.jpg","MagistraKunzConvention_0106-resized.jpg","MagistraKunzConvention_0107-resized.jpg","MagistraKunzConvention_0108-resized.jpg","MagistraKunzConvention_0109-resized.jpg","MagistraKunzConvention_0111-resized.jpg","MagistraKunzConvention_0112-resized.jpg","MagistraKunzConvention_0114-resized.jpg","MagistraKunzConvention_0115-resized.jpg","MagistraKunzConvention_0116-resized.jpg","MagistraKunzConvention_0117-resized.jpg","MagistraKunzConvention_0118-resized.jpg","MagistraKunzConvention_0119-resized.jpg","MagistraKunzConvention_0120-resized.jpg","MagistraKunzConvention_0121-resized.jpg","MagistraKunzConvention_0122-resized.jpg","MagistraKunzConvention_0123-resized.jpg","MagistraKunzConvention_0124-resized.jpg","MagistraKunzConvention_0125-resized.jpg","MagistraKunzConvention_0126-resized.jpg","MagistraKunzConvention_0127-resized.jpg","MagistraKunzConvention_0128-resized.jpg","MagistraKunzConvention_0129-resized.jpg","MagistraKunzConvention_0130-resized.jpg","MagistraKunzConvention_0131-resized.jpg","MagistraKunzConvention_0132-resized.jpg","MagistraKunzConvention_0133-resized.jpg","MagistraKunzConvention_0134-resized.jpg","MagistraKunzConvention_0135-resized.jpg","MagistraKunzConvention_0136-resized.jpg","MagistraKunzConvention_0137-resized.jpg","MagistraKunzConvention_0138-resized.jpg","MagistraKunzConvention_0140-resized.jpg","MagistraKunzConvention_0141-resized.jpg","MagistraKunzConvention_0142-resized.jpg","MagistraKunzConvention_0143-resized.jpg","MagistraKunzConvention_0145-resized.jpg","MagistraKunzConvention_0146-resized.jpg","MagistraKunzConvention_0147-resized.jpg","MagistraKunzConvention_0148-resized.jpg","MagistraKunzConvention_0149-resized.jpg","MagistraKunzConvention_0151-resized.jpg","MagistraKunzConvention_0152-resized.jpg","MagistraKunzConvention_0153-resized.jpg","MagistraKunzConvention_0155-resized.jpg","MagistraKunzConvention_0156-resized.jpg","MagistraKunzConvention_0159-resized.jpg","MagistraKunzConvention_0160-resized.jpg","MagistraKunzConvention_0161-resized.jpg","MagistraKunzConvention_0162-resized.jpg","MagistraKunzConvention_0163-resized.jpg","MagistraKunzConvention_0164-resized.jpg","MagistraKunzConvention_0165-resized.jpg","MagistraKunzConvention_0166-resized.jpg","MagistraKunzConvention_0168-resized.jpg","MagistraKunzConvention_0169-resized.jpg","MagistraKunzConvention_0170-resized.jpg","MagistraKunzConvention_0171-resized.jpg","MagistraKunzConvention_0172-resized.jpg","MagistraKunzConvention_0173-resized.jpg","MagistraKunzConvention_0174-resized.jpg","MagistraKunzConvention_0175-resized.jpg","MagistraKunzConvention_0177-resized.jpg","MagistraKunzConvention_0178-resized.jpg","MagistraKunzConvention_0179-resized.jpg","MagistraKunzConvention_0182-resized.jpg","MagistraKunzConvention_0183-resized.jpg","MagistraKunzConvention_0185-resized.jpg","MagistraKunzConvention_0187-resized.jpg","MagistraKunzConvention_0188-resized.jpg","MagistraKunzConvention_0189-resized.jpg","MagistraKunzConvention_0193-resized.jpg","MagistraKunzConvention_0194-resized.jpg","MagistraKunzConvention_0195-resized.jpg","MagistraKunzConvention_0196-resized.jpg","MagistraKunzConvention_0197-resized.jpg","MagistraKunzConvention_0198-resized.jpg","MagistraKunzConvention_0200-resized.jpg","MagistraKunzConvention_0201-resized.jpg","MagistraKunzConvention_0202-resized.jpg","MagistraKunzConvention_0203-resized.jpg","MagistraKunzConvention_0204-resized.jpg","MagistraKunzConvention_0206-resized.jpg","MagistraKunzConvention_0207-resized.jpg","MagistraKunzConvention_0208-resized.jpg","MagistraKunzConvention_0209-resized.jpg","MagistraKunzConvention_0210-resized.jpg","MagistraKunzConvention_0211-resized.jpg","MagistraKunzConvention_0212-resized.jpg","MagistraKunzConvention_0215-resized.jpg","MagistraKunzConvention_0216-resized.jpg","MagistraKunzConvention_0217-resized.jpg","MagistraKunzConvention_0221-resized.jpg","MagistraKunzConvention_0222-resized.jpg","MagistraKunzConvention_0226-resized.jpg","MagistraKunzConvention_0231-resized.jpg","MagistraKunzConvention_0232-resized.jpg","MagistraKunzConvention_0233-resized.jpg","MagistraKunzConvention_0234-resized.jpg","MagistraKunzConvention_0235-resized.jpg","MagistraKunzConvention_0236-resized.jpg","MagistraKunzConvention_0237-resized.jpg","MagistraKunzConvention_0238-resized.jpg","MagistraKunzConvention_0239-resized.jpg","MagistraKunzConvention_0240-resized.jpg","MagistraKunzConvention_0243-resized.jpg","MagistraKunzConvention_0245-resized.jpg","MagistraKunzConvention_0246-resized.jpg","MagistraKunzConvention_0248-resized.jpg","MagistraKunzConvention_0249-resized.jpg","MagistraKunzConvention_0250-resized.jpg","MagistraKunzConvention_0251-resized.jpg","MagistraKunzConvention_0252-resized.jpg","MagistraKunzConvention_0253-resized.jpg","MagistraKunzConvention_0254-resized.jpg","MagistraKunzConvention_0255-resized.jpg","MagistraKunzConvention_0257-resized.jpg","MagistraKunzConvention_0258-resized.jpg","MagistraKunzConvention_0259-resized.jpg","MagistraKunzConvention_0260-resized.jpg","MagistraKunzConvention_0261-resized.jpg","MagistraKunzConvention_0262-resized.jpg","MagistraKunzConvention_0263-resized.jpg","MagistraKunzConvention_0264-resized.jpg","MagistraKunzConvention_0265-resized.jpg","MagistraKunzConvention_0266-resized.jpg","MagistraKunzConvention_0267-resized.jpg","MagistraKunzConvention_0268-resized.jpg","MagistraKunzConvention_0269-resized.jpg","MagistraKunzConvention_0270-resized.jpg","MagistraKunzConvention_0271-resized.jpg","MagistraKunzConvention_0272-resized.jpg","MagistraKunzConvention_0273-resized.jpg","MagistraKunzConvention_0274-resized.jpg","MagistraKunzConvention_0275-resized.jpg","MagistraKunzConvention_0279-resized.jpg","MagistraKunzConvention_0280-resized.jpg","MagistraKunzConvention_0281-resized.jpg","MagistraKunzConvention_0282-resized.jpg","MagistraKunzConvention_0283-resized.jpg","MagistraKunzConvention_0285-resized.jpg","MagistraKunzConvention_0286-resized.jpg","MagistraKunzConvention_0287-resized.jpg","MagistraKunzConvention_0288-resized.jpg","MagistraKunzConvention_0289-resized.jpg","MagistraKunzConvention_0290-resized.jpg","MagistraKunzConvention_0291-resized.jpg","MagistraKunzConvention_0293-resized.jpg","MagistraKunzConvention_0294-resized.jpg","MagistraKunzConvention_0296-resized.jpg","MagistraKunzConvention_0299-resized.jpg","MagistraKunzConvention_0300-resized.jpg","MagistraKunzConvention_0304-resized.jpg","MagistraKunzConvention_0305-resized.jpg","MagistraKunzConvention_0306-resized.jpg","MagistraKunzConvention_0307-resized.jpg","MagistraKunzConvention_0309-resized.jpg","MagistraKunzConvention_0310-resized.jpg","MagistraKunzConvention_0313-resized.jpg","MagistraKunzConvention_0314-resized.jpg","MagistraKunzConvention_0316-resized.jpg","MagistraKunzConvention_0317-resized.jpg","MagistraKunzConvention_0318-resized.jpg","MagistraKunzConvention_0320-resized.jpg","MagistraKunzConvention_0321-resized.jpg","MagistraKunzConvention_0324-resized.jpg","MagistraKunzConvention_0325-resized.jpg","MagistraKunzConvention_0329-resized.jpg","MagistraKunzConvention_0330-resized.jpg","MagistraKunzConvention_0331-resized.jpg","MagistraKunzConvention_0332-resized.jpg","MagistraKunzConvention_0333-resized.jpg","MagistraKunzConvention_0334-resized.jpg","MagistraKunzConvention_0335-resized.jpg","MagistraKunzConvention_0336-resized.jpg","MagistraKunzConvention_0337-resized.jpg","MagistraKunzConvention_0338-resized.jpg","MagistraKunzConvention_0339-resized.jpg","MagistraKunzConvention_0340-resized.jpg","MagistraKunzConvention_0341-resized.jpg","MagistraKunzConvention_0342-resized.jpg","MagistraKunzConvention_0343-resized.jpg","MagistraKunzConvention_0344-resized.jpg","MagistraKunzConvention_0345-resized.jpg","MagistraKunzConvention_0346-resized.jpg","MagistraKunzConvention_0347-resized.jpg","MagistraKunzConvention_0348-resized.jpg","MagistraKunzConvention_0349-resized.jpg","MagistraKunzConvention_0350-resized.jpg","MagistraKunzConvention_0351-resized.jpg","MagistraKunzConvention_0352-resized.jpg","MagistraKunzConvention_0353-resized.jpg","MagistraKunzConvention_0354-resized.jpg","MagistraKunzConvention_0355-resized.jpg","MagistraKunzConvention_0356-resized.jpg","MagistraKunzConvention_0357-resized.jpg","MagistraKunzConvention_0358-resized.jpg","MagistraKunzConvention_0360-resized.jpg","MagistraKunzConvention_0361-resized.jpg","MagistraKunzConvention_0362-resized.jpg","MagistraKunzConvention_0363-resized.jpg","MagistraKunzConvention_0364-resized.jpg","MagistraKunzConvention_0365-resized.jpg","MagistraKunzConvention_0366-resized.jpg","MagistraKunzConvention_0367-resized.jpg","MagistraKunzConvention_0368-resized.jpg","MagistraKunzConvention_0369-resized.jpg","MagistraKunzConvention_0370-resized.jpg","MagistraKunzConvention_0371-resized.jpg","MagistraKunzConvention_0372-resized.jpg","MagistraKunzConvention_0375-resized.jpg","MagistraKunzConvention_0376-resized.jpg","MagistraKunzConvention_0377-resized.jpg","MagistraKunzConvention_0378-resized.jpg","MagistraKunzConvention_0379-resized.jpg","MagistraKunzConvention_0380-resized.jpg","MagistraKunzConvention_0381-resized.jpg","MagistraKunzConvention_0382-resized.jpg","MagistraKunzConvention_0383-resized.jpg","MagistraKunzConvention_0384-resized.jpg","MagistraKunzConvention_0385-resized.jpg","MagistraKunzConvention_0386-resized.jpg","MagistraKunzConvention_0387-resized.jpg","MagistraKunzConvention_0388-resized.jpg","MagistraKunzConvention_0389-resized.jpg","MagistraKunzConvention_0390-resized.jpg","MagistraKunzConvention_0391-resized.jpg","MagistraKunzConvention_0392-resized.jpg","MagistraKunzConvention_0393-resized.jpg","MagistraKunzConvention_0394-resized.jpg","MagistraKunzConvention_0395-resized.jpg","MagistraKunzConvention_0396-resized.jpg","MagistraKunzConvention_0397-resized.jpg","MagistraKunzConvention_0398-resized.jpg","MagistraKunzConvention_0400-resized.jpg","MagistraKunzConvention_0401-resized.jpg","MagistraKunzConvention_0402-resized.jpg","MagistraKunzConvention_0403-resized.jpg","MagistraKunzConvention_0404-resized.jpg","MagistraKunzConvention_0405-resized.jpg","MagistraKunzConvention_0406-resized.jpg","MagistraKunzConvention_0407-resized.jpg","MagistraKunzConvention_0408-resized.jpg","MagistraKunzConvention_0410-resized.jpg","MagistraKunzConvention_0411-resized.jpg","MagistraKunzConvention_0412-resized.jpg","MagistraKunzConvention_0413-resized.jpg","MagistraKunzConvention_0414-resized.jpg","MagistraKunzConvention_0415-resized.jpg","MagistraKunzConvention_0416-resized.jpg","MagistraKunzConvention_0417-resized.jpg","MagistraKunzConvention_0418-resized.jpg","MagistraKunzConvention_0419-resized.jpg","MagistraKunzConvention_0420-resized.jpg","MagistraKunzConvention_0421-resized.jpg","MagistraKunzConvention_0422-resized.jpg","MagistraKunzConvention_0423-resized.jpg","MagistraKunzConvention_0424-resized.jpg","MagistraKunzConvention_0425-resized.jpg","MagistraKunzConvention_0426-resized.jpg","MagistraKunzConvention_0427-resized.jpg","MagistraKunzConvention_0428-resized.jpg","MagistraKunzConvention_0429-resized.jpg","MagistraKunzConvention_0430-resized.jpg","MagistraKunzConvention_0431-resized.jpg","MagistraKunzConvention_0432-resized.jpg","MagistraKunzConvention_0433-resized.jpg","MagistraKunzConvention_0434-resized.jpg","MagistraKunzConvention_0435-resized.jpg","MagistraKunzConvention_0437-resized.jpg","MagistraKunzConvention_0438-resized.jpg","MagistraKunzConvention_0439-resized.jpg","MagistraKunzConvention_0440-resized.jpg","MagistraKunzConvention_0441-resized.jpg","MagistraKunzConvention_0442-resized.jpg","MagistraKunzConvention_0443-resized.jpg","MagistraKunzConvention_0444-resized.jpg","MagistraKunzConvention_weaponspile-resized.jpg","NationalConvention0000-resized.jpg","NationalConvention0001-resized.jpg","NationalConvention0003-resized.jpg","NationalConvention0004-resized.jpg","NationalConvention0005-resized.jpg","NationalConvention0007-resized.jpg","NationalConvention0008-resized.jpg","NationalConvention0009-resized.jpg","NationalConvention0010-resized.jpg","NationalConvention0011-resized.jpg","NationalConvention0012-resized.jpg","NationalConvention0014-resized.jpg","NationalConvention0015-resized.jpg","NationalConvention0017-resized.jpg","NationalConvention0021-resized.jpg","NationalConvention0023-resized.jpg","Tweets0000-resized.jpg","Tweets0001-resized.jpg","Tweets0002-resized.jpg","Tweets0003-resized.jpg","Tweets0004-resized.jpg"];

    // cd /home/jonah/Dropbox/Public/MDJCL/app/images/resized/miscGallery; echo '["'`ls| tr "\n" "@"|sed 's/@/","/g'|sed 's/","$//g'`'"]'|copy
    shuffle(allImages);
    // var myLeading = moltenLeading(".header-top-left", {
    //     minline: 1.9, // Integer: Minimum line-height for the element (multiplied by the element's font-size)
    //     maxline: 2.5, // Integer: Maximum line-height for the element (multiplied by the element's font-size)
    //     minwidth: 320, // Integer: Minimum element width where the adjustment starts
    //     maxwidth: 1500, // Integer: Maximum element width where the adjustment stops
    //     units: "px" // String: CSS units used for the min & max widths, can be "px", "em" or "rem"
    // });
    //
    $("img.lazyload").unveil(500);

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
    if (startingNumber >= allImages.length - 11) {
        document.getElementById("appendBtn").innerText = "Sorry, That's All the Photos We Have So Far :(";
        document.getElementById("appendBtn").disabled = true;
        return;
    }
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
    // console.log("changing grid to "+newGrid);
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
    // console.log("going to "+hashLocation)
    if (hashLocation !== "" && allGrid.indexOf(hashLocation) !== -1) {
        // console.log(hashLocation)
        changeGrid(hashLocation);
        if (isStart === "start") {
            hashThis = $('a[onclick*="' + hashLocation + '"]');

            if (hashThis.attr("class").indexOf("clickCollapse") !== -1) {
                //Is a main menu not a sub part of a menu
                hashThis = $('a[onclick*="' + hashLocation + '"]');
                hashThis.addClass("selected");
                $($(hashThis).attr("data-target")).collapse("show").addClass("selected");
                $(".clickCollapse").not(hashThis).addClass("notSelected");

            } else {
                //is a sub menu
                parentDataAttr = hashThis.eq(0).parent().attr("class").match(/collapseRow[A-z]+/)[0];
                parentElem = $('[data-target=".' + parentDataAttr + '"]');
                $("." + parentDataAttr).collapse("show").addClass("selected");
                parentElem.addClass("selected");
                $(".clickCollapse").not(parentElem).addClass("notSelected");

            }
        }
    } else {
        console.log("either blank changeGrid or invalid");
    }
}
