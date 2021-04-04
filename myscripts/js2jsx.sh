#!/bin/bash
allfiles=`find ../front-end/src`
for file in $allfiles
do
    if [[ $file == *".js" ]] && [[ $file != *".jsx" ]]; then
        if grep -q 'import React' $file; then
            mv $file "$file"x
            echo "Renamed $file to jsx"
        fi
    fi
done