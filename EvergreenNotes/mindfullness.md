---
creation date: 2021-06-24
modification date: Thursday 24th June 2021 14:31:46
note-type: 
- evergreen-note
- topic-note

---

###### [[mindfullness]]



---
# Outline
- 

---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[mindfullness]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[mindfullness]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != mindfullness.md"
SORT Status
```
## Content Notes related to [[mindfullness]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[mindfullness]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != mindfullness"
SORT Status
```