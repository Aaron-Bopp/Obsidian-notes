---
creation date: 2021-05-22
modification date: Saturday 22nd May 2021 18:10:30
note-type: 
  evergreen-note

---

###### [[organizational notes]] `=length([[What is a organizational note]].file.inlinks) + length([[What is a organizational note]].file.outlinks)`


An organizational note is one that helps the user access other notes. This can take the form of a hierarchical outline, or as a temporary tag that can be used to comeback to points in other notes and should be temporary. 

The purpose of organizational notes is two-fold: to provide form to the knowledge stored in a [[personal knowledge management | pkm system]] and to provide entry points into the [[web of thought]]. 

Organizational notes should be consistent and unique from other notes. Some methods could be a unique symbol, a unique type style, or a builtin method like tags. 

Examples of organizational notes:
```dataview
TABLE file.mtime as Edited, file.ctime as Created
from ""
SORT file.ctime DESC
WHERE contains(note-type, "organizational-note")
```


---

**Status**:: #EVER/SPROUT  

**Related-Topics**:: [[Make your inbox into an entry point]], [[personal knowledge management]], [[My Second Brain]], [[Zettlekassen]]
	
**Sub-Topics**::
	
**References**