---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 19:44:49
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[my gender]]

, [[My relationship with my parents]]

**Status**:: #EVER/SEED
###### [[my gender]] `=length([[my gender]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[my gender]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "my gender" and !contains([[my gender]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[my gender]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "my gender" and !contains([[my gender]].file.outlinks, link(file.name))
SORT Status
```

## References