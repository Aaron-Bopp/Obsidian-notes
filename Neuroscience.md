---
creation date: 2021-06-16
modification date: Wednesday 16th June 2021 11:08:47
note-type: 
- evergreen-note
- topic-note

---

###### [[Neuroscience]]



---
# Outline
- 

---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[Neuroscience]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[Neuroscience]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != Neuroscience"
SORT Status
```
## Content Notes related to [[Neuroscience]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[Neuroscience]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != Neuroscience"
SORT Status
```