---
creation date: 2021-07-10
parent: [[Neuroscience]]
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
##### [[socialization]] `=length(this.file.inlinks) + length(this.file.outlinks)`



**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### [[socialization]] `=length(this.file.inlinks)` 
- 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[socialization]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "socialization" and !contains([[socialization]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[socialization]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "socialization" and !contains([[socialization]].file.outlinks, link(file.name))
SORT Status
```

### References