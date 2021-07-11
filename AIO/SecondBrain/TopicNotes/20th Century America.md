---
creation date: 2021-05-31
modification date: Monday 31st May 2021 21:32:31
note-type: 
- evergreen-note
- topic-note

---



---
# Outline
- [[1920's General Notes]]
- [[1930's General Notes]]
- [[1940's General Notes]]
- [[1950's General Notes]]
- [[1960's General Notes]]
- [[1970's General Notes]]
- [[1980's General Notes]]
- [[1990's General Notes]]

---

**Status**:: #EVER/GREEN/GROWING  

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[20th Century America]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[20th Century America]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```
## Content Notes related to [[20th Century America]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[20th Century America]] and "ContentNotes"
WHERE file.name != "QUICKNOTE"
SORT Status
```