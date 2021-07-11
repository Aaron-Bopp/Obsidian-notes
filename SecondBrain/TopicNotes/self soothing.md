---
creation date: 2021-07-02
modification date: Friday 2nd July 2021 23:54:00
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[self soothing]]



**Status**:: #EVER/SEED
###### [[self soothing]] `=length([[self soothing]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[self soothing]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "self soothing" and !contains([[self soothing]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[self soothing]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "self soothing" and !contains([[self soothing]].file.outlinks, link(file.name))
SORT Status
```

## References