---
creation date: 2021-07-04
modification date: Sunday 4th July 2021 06:17:09
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
##### [[Civil Rights]] `=length([[Civil Rights]].file.inlinks) + length([[Civil Rights]].file.outlinks)`
/UNPLANTED 

**Status**:: #EVER/SEED

**Last Edited**:: *`=[[Civil Rights]].file.mtime`*
##### [[Civil Rights]] `=length([[Civil Rights]].file.inlinks)` 
- 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[Civil Rights]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "Civil Rights" and !contains([[Civil Rights]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[Civil Rights]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "Civil Rights" and !contains([[Civil Rights]].file.outlinks, link(file.name))
SORT Status
```

### References