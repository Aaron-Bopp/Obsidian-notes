#### Content Notes related to this topic
```dataview
TABLE type, file.mday AS "Edited", file.cday AS "Created"
FROM [[<% tp.file.title %>]] and "ContentNotes"
WHERE file.name != "QUICKNOTE" and file.name != "<% tp.file.title %>" and !contains([[<% tp.file.title %>]].file.outlinks, link(file.name))
SORT Status
```
