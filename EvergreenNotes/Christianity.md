---
creation date: 2021-06-28
modification date: Monday 28th June 2021 18:53:45
note-type: 
- evergreen-note
- topic-note
aliases:
- christian
parent: [[INDEX]]
---
##### `=this.file.link` `=length(this.file.inlinks) + length(this.file.outlinks)`



**Status**:: #EVER/SEED

**Last Edited**:: *`=this.file.mtime`*
##### `=this.file.link` `=length(this.file.inlinks)` 
- [[The biblical christian God is evil and does not deserved to be worshipped]]
- [[the politicization of the christian church]]
	- [[Evangelicalism]]
		- [[The brain is powerful enough to create supernatural experiences]]
	- [[Non-faith issues have been co-opted to keep people in the christian church]]
	- [[People have been conditioned to believe the bible has to be infallible]]
		- [[The bible is god breathed]]
- [[The many transgressions of the christian church]]
	- [[Fear of hell is baked into Christianity]]
	- [[Christians struggle to feel empathy because they must believe that non-christians are going to hell]]
- [[Jesus' teachings are anti-thetical to the modern christian church]]
	- [[The church will fail if christians keep aligning themselves with hate instead of love]]
	- [[Loving a a non-believer requires loving the fact that they are going to hell]]
- ![[Deconstruction (Christianity)#this file link length this file inlinks]]

### <hr class="dataviews"/>

#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[Christianity]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "Christianity" and !contains([[Christianity]].file.outlinks, link(file.name))
SORT Status
```

#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[Christianity]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "Christianity" and !contains([[Christianity]].file.outlinks, link(file.name))
SORT Status
```

### References