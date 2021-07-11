---
creation date: 2021-05-29
modification date: Saturday 29th May 2021 03:25:42
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[evergreen notes]]

An evergreen note is one that is both easy to start and easy to add on to. 

**Status**:: #EVER/SEED
###### [[evergreen notes]] `=length([[Evergreen note]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[Evergreen note]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "Evergreen note" and !contains([[Evergreen note]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[Evergreen note]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "Evergreen note" and !contains([[Evergreen note]].file.outlinks, link(file.name))
SORT Status
```

## References
