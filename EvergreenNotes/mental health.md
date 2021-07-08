---
creation date: 2021-05-29
modification date: Saturday 29th May 2021 05:01:37
note-type: 
- evergreen-note
- topic-note
parent: [[INDEX]]
embedded: [[anxiety]], [[ADHD]], [[trauma]]
---

##### [[mental health]] `=length([[mental health]].file.inlinks) + length([[mental health]].file.outlinks)`

[[mental health]] covers concepts that vary from [[mental disorders]] to [[neurodivergency]] to [[spirituality]] and how it effects us. 

**Status**:: #EVER/GREEN/GROWING 

**Last Edited**:: *`=[[mental health]].file.mtime`*
##### [[mental health]] `=length([[mental health]].file.inlinks)` 

- ![[anxiety#this file link length this file inlinks]]
- ![[ADHD#ADHD length ADHD file inlinks]]
- ![[trauma#trauma length trauma file inlinks]]
- [[mental disorders]]
- [[self-actualization]]
	- [[self-hate]]
	- [[self-love]]
	- [[self-improvement]]
- Coping mechanism
	- [[Tips for concentration]]
- [[Sadness is enlightenment and happiness is delusion]]


### <hr class="dataviews"/>
#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[mental health]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "mental health" and !contains([[mental health]].file.outlinks, link(file.name))
SORT Status
```
#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[mental health]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "mental health" and !contains([[mental health]].file.outlinks, link(file.name))
SORT Status
```



