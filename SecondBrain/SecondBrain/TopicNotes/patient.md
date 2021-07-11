---
creation date: 2021-06-07
modification date: Monday 7th June 2021 20:02:52
note-type: 
- evergreen-note
- topic-note

---

###### [[patient]]



---
# Outline
- 

---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[patient]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[patient]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "patient"
SORT Status
```
## Content Notes related to [[patient]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[patient]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "patient"
SORT Status
```