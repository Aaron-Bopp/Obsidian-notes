---
created: 2021-05-30
cssclass: topic
tags: topic

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
*edited `=this.file.mtime`*

**Topics**:: 
*`$=customJS.dv_funcs.outlinedIn(dv, this)`*

