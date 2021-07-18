---
creation date: 2021-07-03
modification date: Saturday 3rd July 2021 00:05:03
note-type: 
- evergreen-note
- topic-note
aliases:
- eastern mysticism
---
 
###### [[eastern philosophy]]




**Status**:: #EVER/SEED
###### [[eastern philosophy]] `=length([[eastern philosophy]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[eastern philosophy]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "eastern philosophy" and !contains([[eastern philosophy]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[eastern philosophy]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "eastern philosophy" and !contains([[eastern philosophy]].file.outlinks, link(file.name))
SORT Status
```

## References