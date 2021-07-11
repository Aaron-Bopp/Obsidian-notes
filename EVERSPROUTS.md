---
creation date: 2021-07-05
parent: [[Dataview]]
note-type:
- organizational-note
---
```dataview
TABLE replace(Status, "#EVER/SPROUT/", "#") as Status, (date(today) - file.mday) as "Last Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and #EVER/SPROUT 
WHERE file.name != "my TO(DO) and EVER(GREEN) structure" and file.name != "QUICKNOTE"
SORT Status DESC, file.mtime DESC 
```