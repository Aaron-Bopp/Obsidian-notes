---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 05:52:45
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[Autism]]



**Status**:: #EVER/SEED
###### [[Autism]] `=length([[Autism]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[Autism]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "Autism" and !contains([[Autism]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[Autism]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "Autism" and !contains([[Autism]].file.outlinks, link(file.name))
SORT Status
```

## References