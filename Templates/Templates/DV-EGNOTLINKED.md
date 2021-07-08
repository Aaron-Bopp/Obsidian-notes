#### Linked notes not in the outline
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM "EvergreenNotes"  and [[<% tp.file.title %>]]
WHERE file.name != "QUICKNOTE" and file.name != "INDEX" and file.name != "<% tp.file.title %>" and !contains([[<% tp.file.title %>]].file.outlinks, link(file.name))
SORT Status
```