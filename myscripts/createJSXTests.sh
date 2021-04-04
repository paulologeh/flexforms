#!/bin/bash
allfiles=`ls -R ../front-end/src`
for file in $allfiles
do
    if [[ $file == *".jsx" ]]; then
        filetotest="$file"
        testfile=`echo "$filetotest" | sed 's/.jsx//g'`
        echo "$filetotest, $testfile"
        touch
    fi
done