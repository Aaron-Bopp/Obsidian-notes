---
creation date: 2021-06-13
modification date: Sunday 13th June 2021 22:23:57
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[early childhood]]

- 


**Status**:: #EVER/SEED
###### [[early childhood]] `=length([[early childhood]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[early childhood]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "early childhood" and !contains([[early childhood]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[early childhood]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "early childhood" and !contains([[early childhood]].file.outlinks, link(file.name))
SORT Status
```

## References