---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:07:21
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[childhood trauma]]



**Status**:: #EVER/SEED
###### [[childhood trauma]] `=length([[childhood trauma]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[childhood trauma]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "childhood trauma" and !contains([[childhood trauma]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[childhood trauma]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "childhood trauma" and !contains([[childhood trauma]].file.outlinks, link(file.name))
SORT Status
```

## References