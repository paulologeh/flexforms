#!/bin/bash
allfiles=`find ../front-end/src`
for file in $allfiles
do
    if [[ $file == *".js" ]] || [[ $file == *".jsx" ]]; then
        if [ -f "$file" ]; then
            sed -i '' 's/;//g' $file
        fi
    fi
done