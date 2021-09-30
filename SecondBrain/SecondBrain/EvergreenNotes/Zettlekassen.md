---
created: 2021-05-30
modification date: Sunday 30th May 2021 00:02:10
note-type: 
  evergreen-note
  topic-note

---

# Outline
- 

# Evergreen Notes related to [[Zettlekassen]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[Zettlekassen]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```
# Content Notes related to [[Zettlekassen]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[Zettlekassen]] and "ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```

---

**Status**:: #EVER/SEED    

**Topics**::   
	
