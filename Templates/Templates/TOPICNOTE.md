---
creation date: <% tp.file.creation_date("YYYY-MM-DD") %>
modification date: <% tp.file.creation_date("dddd Do MMMM YYYY HH:mm:ss") %>
note-type: 
- evergreen-note
- topic-note

---

###### [[<% tp.file.title %>]]

<% tp.file.selection() %>

---
# Outline
- 

---

**Status**:: #EVER/SEED

**Related-Topics**:: 
	
**Sub-Topics**::
	
**References**

# Dataviews 
## Evergreen Notes related to [[<% tp.file.title %>]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[<% tp.file.title %>]] and -"ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != <% tp.file.title %>"
SORT Status
```
## Content Notes related to [[<% tp.file.title %>]]
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and [[<% tp.file.title %>]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and "file.name != <% tp.file.title %>"
SORT Status
```