---
creation date: 2021-06-13
modification date: Sunday 13th June 2021 22:24:59
note-type: 
- evergreen-note
- topic-note

---

###### [[self-improvement]]

---
# Outline
- 

---

**Status**:: #EVER/SEED 

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[self-improvement]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[self-improvement]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "self-improvement"
SORT Status
```
## Content Notes related to [[self-improvement]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[self-improvement]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "self-improvement"
SORT Status
```