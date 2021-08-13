---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:06:44
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[defense-mechanisms]]



**Status**:: #EVER/SEED
###### [[defense-mechanisms]] `=length([[defense-mechanisms]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[defense-mechanisms]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "defense-mechanisms" and !contains([[defense-mechanisms]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[defense-mechanisms]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "defense-mechanisms" and !contains([[defense-mechanisms]].file.outlinks, link(file.name))
SORT Status
```

## References