---
creation date: 2021-07-05
parent: [[INDEX]]
note-type:
- organizational-note
---
```dataview
TABLE length(file.inlinks) + length(file.outlinks) as Links, replace(Status, "#EVER/GREEN/", "#") as Status, (date(today) - file.mday) as "Last Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and #EVER/GREEN 
WHERE file.name != "QUICKNOTE" 
SORT Status DESC, file.mtime DESC 
```