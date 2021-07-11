---
creation date: 2021-06-13
modification date: Sunday 13th June 2021 21:32:59
note-type: 
- evergreen-note
- topic-note
aliases:
- inter-personal relationships
---
 
###### [[inter-personal communication]]



**Status**:: #EVER/SEED
###### [[inter-personal communication]] `=length([[inter-personal communication]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[inter-personal communication]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "inter-personal communication" and !contains([[inter-personal communication]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[inter-personal communication]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "inter-personal communication" and !contains([[inter-personal communication]].file.outlinks, link(file.name))
SORT Status
```

## References