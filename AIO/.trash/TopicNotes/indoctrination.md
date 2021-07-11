---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:04:09
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[indoctrination]]




**Status**:: #EVER/SEED
###### [[indoctrination]] `=length([[indoctrination]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[indoctrination]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "indoctrination" and !contains([[indoctrination]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[indoctrination]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "indoctrination" and !contains([[indoctrination]].file.outlinks, link(file.name))
SORT Status
```

## References