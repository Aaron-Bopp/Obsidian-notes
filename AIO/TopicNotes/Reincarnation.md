---
creation date: 2021-07-05

note-type: 
- evergreen-note
- topic-note
aliases:
- samsara
- punabbhava
---
 
##### [[Reincarnation]] `=length(this.file.inlinks) + length(this.file.outlinks)`


**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### [[Reincarnation]] `=length(this.file.inlinks)` 
- 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[Reincarnation]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "Reincarnation" and !contains([[Reincarnation]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[Reincarnation]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "Reincarnation" and !contains([[Reincarnation]].file.outlinks, link(file.name))
SORT Status
```

### References