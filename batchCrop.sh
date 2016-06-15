#!/bin/bash
for i in $(ls /home/jonah/Dropbox/Public/MDJCL/app/images/miscGallery/*);do
        node /home/jonah/Dropbox/Public/MDJCL/node_modules/smartcrop-cli/smartcrop-cli.js --width 651 --height 435 --quality 90 $i /home/jonah/Dropbox/Public/MDJCL/app/images/miscGallery/batchCrop/`echo $i|sed "s/.*\///g"`
        echo $i
done
