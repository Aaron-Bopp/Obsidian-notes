---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:05:23
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[self-hate]]




**Status**:: #EVER/SEED
###### [[self-hate]] `=length([[self-hate]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[self-hate]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "self-hate" and !contains([[self-hate]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[self-hate]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "self-hate" and !contains([[self-hate]].file.outlinks, link(file.name))
SORT Status
```

## References