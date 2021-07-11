---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 05:50:14
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[self-actualization]]



**Status**:: #EVER/SEED
###### [[self-actualization]] `=length([[self-actualization]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[self-actualization]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "self-actualization" and !contains([[self-actualization]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[self-actualization]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "self-actualization" and !contains([[self-actualization]].file.outlinks, link(file.name))
SORT Status
```

## References