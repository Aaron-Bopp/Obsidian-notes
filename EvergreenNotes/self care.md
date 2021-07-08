---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:07:47
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[self care]]

 

**Status**:: #EVER/SEED
###### [[self care]] `=length([[self care]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[self care]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "self care" and !contains([[self care]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[self care]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "self care" and !contains([[self care]].file.outlinks, link(file.name))
SORT Status
```

## References