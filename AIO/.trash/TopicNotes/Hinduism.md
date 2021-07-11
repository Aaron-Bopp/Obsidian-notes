---
creation date: 2021-07-05

note-type: 
- evergreen-note
- topic-note
aliases:
- Hindu
---
 
##### [[Hinduism]] `=length(this.file.inlinks) + length(this.file.outlinks)`


**Status**:: #EVER/SEED
**Parent-Topics**:: [[religion]]
**Last Edited**:: *`=this.file.mtime`*
##### [[Hinduism]] `=length(this.file.inlinks)` 
- 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[Hinduism]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "Hinduism" and !contains([[Hinduism]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[Hinduism]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "Hinduism" and !contains([[Hinduism]].file.outlinks, link(file.name))
SORT Status
```

### References