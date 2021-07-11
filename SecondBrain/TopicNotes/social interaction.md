---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:04:38
note-type: 
- evergreen-note
- topic-note
aliases:
- 
Parent-Topic: [[]]
---
 
###### [[social interaction]]




**Status**:: #EVER/SEED
###### [[social interaction]] `=length([[social interaction]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[social interaction]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "social interaction" and !contains([[social interaction]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[social interaction]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "social interaction" and !contains([[social interaction]].file.outlinks, link(file.name))
SORT Status
```

## References