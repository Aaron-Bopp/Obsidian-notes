---
creation date: 2021-06-16
modification date: Wednesday 16th June 2021 11:08:47
note-type: 
- evergreen-note
- topic-note
aliases:
- neurological
parent: [[INDEX]]
---
##### `=this.file.link` `=length(this.file.inlinks) + length(this.file.outlinks)`

**Status**:: #EVER/SPROUT/WATER 

**Last Edited**:: *`=this.file.mtime`*
##### `=this.file.link` `=length(this.file.inlinks)` 
- [[How Neuroscience impacts our daily lives]]
	- [[Complex emotions are intellectual understandings of primal urges]]
	- [[neurodivergency]]
- ![[social fitness#this file link length this file inlinks]]
- [[The brain is powerful enough to create supernatural experiences]]

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[Neuroscience]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "Neuroscience" and !contains([[Neuroscience]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[Neuroscience]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "Neuroscience" and !contains([[Neuroscience]].file.outlinks, link(file.name))
SORT Status
```

### References