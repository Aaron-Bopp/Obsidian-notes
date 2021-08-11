---
creation date: 2021-07-05

note-type: 
- evergreen-note
- topic-note
aliases:
- consciousness
- consciously
---
 
##### [[conscious]] `=length(this.file.inlinks) + length(this.file.outlinks)`
consciousness

**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### [[conscious]] `=length(this.file.inlinks)` 
- 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[conscious]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "conscious" and !contains([[conscious]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[conscious]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "conscious" and !contains([[conscious]].file.outlinks, link(file.name))
SORT Status
```

### References