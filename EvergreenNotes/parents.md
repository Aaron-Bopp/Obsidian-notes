---
creation date: 2021-06-28
modification date: Monday 28th June 2021 21:12:32
note-type: 
- evergreen-note
- topic-note
- personal-note

---

###### [[parents]]



---
# Outline


---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[parents]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[parents]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "parents"
SORT Status
```
## Content Notes related to [[parents]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[parents]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "parents"
SORT Status
```