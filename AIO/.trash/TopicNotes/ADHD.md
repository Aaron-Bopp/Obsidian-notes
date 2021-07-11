---
creation date: 2021-06-07
modification date: Monday 7th June 2021 20:02:52
note-type: 
- evergreen-note
- topic-note
aliases:
- 
parent: [[mental health]]
---
 
###### [[ADHD]]

**Status**:: #EVER/SPROUT 
###### [[ADHD]] `=length([[ADHD]].file.inlinks)` 
- Symptoms
	- [[Rejection Sensitivity]]
	- [[Emotional Deregulation]]
	- [[How ADHD effects concentration]]
- Coping mechanisms
	- [[Tips for concentration]]

## Evergreen Notes
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[ADHD]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "ADHD" and !contains([[ADHD]].file.outlinks, link(file.name))
SORT Status
```
## Content Notes
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[ADHD]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "ADHD" and !contains([[ADHD]].file.outlinks, link(file.name))
SORT Status
```

## References

