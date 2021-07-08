---
creation date: 2021-07-02
modification date: Friday 2nd July 2021 22:54:44
note-type: 
- evergreen-note
- topic-note
aliases:
- subconsciously
---
 
###### [[subconscious]]

from his dad's death


**Status**:: #EVER/SEED
###### [[subconscious]] `=length([[subconscious]].file.inlinks)` 

- 


## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[subconscious]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "subconscious" and !contains([[subconscious]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[subconscious]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "subconscious" and !contains([[subconscious]].file.outlinks, link(file.name))
SORT Status
```

## References