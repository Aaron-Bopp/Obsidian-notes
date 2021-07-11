---
creation date: 2021-06-13

note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
##### [[my parents]] `=length(this.file.inlinks) + length(this.file.outlinks)`


**Status**:: #EVER/SEED

**Parent**:: [[my emotions]]
**Last Edited**:: *`=this.file.mtime`*
##### [[my parents]] `=length(this.file.inlinks)` 
- 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[my parents]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "my parents" and !contains([[my parents]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[my parents]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "my parents" and !contains([[my parents]].file.outlinks, link(file.name))
SORT Status
```

### References