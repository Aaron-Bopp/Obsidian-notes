---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:04:24
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[societal trauma]]




**Status**:: #EVER/SEED
###### [[societal trauma]] `=length([[societal trauma]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[societal trauma]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "societal trauma" and !contains([[societal trauma]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[societal trauma]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "societal trauma" and !contains([[societal trauma]].file.outlinks, link(file.name))
SORT Status
```

## References