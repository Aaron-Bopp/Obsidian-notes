---
creation date: 2021-06-17
modification date: Thursday 17th June 2021 23:47:11
note-type: 
- evergreen-note
- topic-note

---

###### [[empathy]]



---
# Outline
- 

---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[empathy]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[empathy]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != empathy"
SORT Status
```
## Content Notes related to [[empathy]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[empathy]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != empathy"
SORT Status
```