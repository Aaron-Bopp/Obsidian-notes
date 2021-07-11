---
creation date: 2021-06-16
modification date: Wednesday 16th June 2021 22:37:05
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[unconditional love]]


**Status**:: #EVER/SEED
###### [[unconditional love]] `=length([[unconditional love]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[unconditional love]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "unconditional love" and !contains([[unconditional love]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[unconditional love]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "unconditional love" and !contains([[unconditional love]].file.outlinks, link(file.name))
SORT Status
```

## References