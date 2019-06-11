# Think back on my edit

## description

QA information has been added to "[How did you contribute to OpenStreetMap?](http://hdyc.neis-one.org/)". We can improve OSM more using this information. You will want to improve your own it.

This software converts osmose's user feed into GeoJSON for your easy-to-use QA tool. Let's make improvement small tasks and improve them little by little.

Don't forget follows:

> Warning 1: Do not map for Osmose, keepright, etc. Only fix real errors which you understand and know how to improve correctly!!!
> 
> Warning 2: Avoid mechanical edits. If it was a case for automatic edit, osmose was able to do so!
> 
> <cite style="display:block;text-align:right;">[_Osmose - OpenStreetMap Wiki_](https://wiki.openstreetmap.org/wiki/Osmose)</cite>
 

## usage

### environment

- node.js v10.15
- npm 6.9.0

### command

```
$ npm run start -- "<username>"
```

e.g.

`npm run start -- "k_zoar"`

This tool can create up to 500 feature tasks.

Load result.geojson with your QA tool.  

...But wait a minute, could you be able to improve all its QA tasks? Keep it in an amount that allows you to complete all of the tasks when you import to a QA tool. A large number of tasks have already been registered for famous tools.

---
2019 K'z Minor Release - Zoar