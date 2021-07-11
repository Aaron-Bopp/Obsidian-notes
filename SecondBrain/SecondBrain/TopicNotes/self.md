---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:01:03
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[self]]


**Status**:: #EVER/SEED
###### [[self]] `=length([[self]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[self]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "self" and !contains([[self]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[self]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "self" and !contains([[self]].file.outlinks, link(file.name))
SORT Status
```

## References