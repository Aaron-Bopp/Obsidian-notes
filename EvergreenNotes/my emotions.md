---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 19:44:37
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[my emotions]]

, [[My relationship with my parents]]

**Status**:: #EVER/SEED
###### [[my emotions]] `=length([[my emotions]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[my emotions]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "my emotions" and !contains([[my emotions]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[my emotions]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "my emotions" and !contains([[my emotions]].file.outlinks, link(file.name))
SORT Status
```

## References