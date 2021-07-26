---
creation date: 2021-07-05

note-type: 
- evergreen-note
- topic-note
aliases:
- kharma
---
 
##### [[karma]] `=length(this.file.inlinks) + length(this.file.outlinks)`
[[conscious|consciousness]]

**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### [[karma]] `=length(this.file.inlinks)` 
- 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[karma]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "karma" and !contains([[karma]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[karma]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "karma" and !contains([[karma]].file.outlinks, link(file.name))
SORT Status
```

### References