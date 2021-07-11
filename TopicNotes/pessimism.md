---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:07:08
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[pessimism]]

inlinks

**Status**:: #EVER/SEED
###### [[pessimism]] `=length([[pessimism]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[pessimism]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "pessimism" and !contains([[pessimism]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[pessimism]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "pessimism" and !contains([[pessimism]].file.outlinks, link(file.name))
SORT Status
```

## References