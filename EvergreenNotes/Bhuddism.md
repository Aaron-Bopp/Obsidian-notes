---
creation date: 2021-07-05
note-type: 
- evergreen-note
- topic-note
aliases:
- 
---
 
##### [[Bhuddism]] `=length(this.file.inlinks) + length(this.file.outlinks)`

**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### [[Bhuddism]] `=length(this.file.inlinks)` 
- 

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[Bhuddism]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "Bhuddism" and !contains([[Bhuddism]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[Bhuddism]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "Bhuddism" and !contains([[Bhuddism]].file.outlinks, link(file.name))
SORT Status
```

### References