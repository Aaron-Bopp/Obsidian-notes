---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:08:32
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
###### [[gender dysphoria]]

 

**Status**:: #EVER/SEED
###### [[gender dysphoria]] `=length([[gender dysphoria]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[gender dysphoria]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "gender dysphoria" and !contains([[gender dysphoria]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[gender dysphoria]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "gender dysphoria" and !contains([[gender dysphoria]].file.outlinks, link(file.name))
SORT Status
```

## References