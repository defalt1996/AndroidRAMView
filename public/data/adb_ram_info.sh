#!/bin/bash
while :
do
    adb shell cat proc/meminfo | grep -i "memfree" >> adb_ram_infos
    sleep 1
done