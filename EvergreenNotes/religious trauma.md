---
creation date: 2021-06-29
modification date: Tuesday 29th June 2021 23:55:28
note-type: evergreen-note,topic-note,ADSF
- evergreen-note
- topic-note
aliases:
- 
parent: [[trauma]]
---
 
###### [[religious trauma]]

ADHD

**Status**:: #EVER/SEED

Related-Topics:: `=this.file.outlinks`

**Last Edited**:: *`=this.file.mtime`*
###### [[religious trauma]] `=length([[religious trauma]].file.inlinks)` 

- ![[Deconstruction (Christianity)#this file link length this file inlinks]]

## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[religious trauma]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "religious trauma" and !contains([[religious trauma]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[religious trauma]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "religious trauma" and !contains([[religious trauma]].file.outlinks, link(file.name))
SORT Status
```

## References