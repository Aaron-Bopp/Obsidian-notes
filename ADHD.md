---
creation date: 2021-05-08
modification date: Saturday 8th May 2021 17:03:29
note-type: 
- evergreen-note
- topic-note

---


---
# Outline
- [[Rejection Sensitivity]]
- [[Emotional Deregulation]]


---

**Status**:: #EVER/SEED/WATER  

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[ADHD]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[ADHD]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```
## Content Notes related to [[ADHD]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[ADHD]] and "ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```


