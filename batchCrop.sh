#!/bin/bash
for i in $(ls images/*);do
        node ./node_modules/smartcrop-cli/smartcrop-cli.js --width 651 --height 435 --quality 90 $i outputImages/$i
        echo $i
done
