---
creation date: 2021-05-22
modification date: Saturday 22nd May 2021 23:07:02
note-type: 
  evergreen-note
  organizational-note

---

This is a constantly updated index of entry points and topics for my personal flavor of [[Zettlekassen]]/[[second brain]]/[[personal knowledge management]] system.

- Entry Points
	- [[my TO(DO) and EVER(GREEN) structure]]
	- [[QUICKNOTE]]
	- [[TASKS]]
- Topic Outlines
	- [[personal knowledge management]]
		- The [[second brain]]
		- [[My Second Brain]]
		- [[Zettlekassen]]
	- [[mental health]]

# [[My Second Brain]]
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and outgoing([[My Second Brain]])
WHERE file.name != "QUICKNOTE"
SORT Status
```

# Evergreens
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and #EVER/GREEN 
WHERE file.name != "QUICKNOTE"
SORT Status DESC, file.mtime DESC 
```
# Eversprouts
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and #EVER/SPROUT 
WHERE file.name != "my TO(DO) and EVER(GREEN) structure" and file.name != "QUICKNOTE"
SORT Status DESC, file.mtime DESC 
```
# Everseedlings
```dataview
TABLE Status, file.mday AS "Edited", file.cday AS "Created"
FROM -"tharoline" and -"Templates" and #EVER/SEED 
WHERE file.name != "my TO(DO) and EVER(GREEN) structure" and file.name != "QUICKNOTE"
SORT Status DESC, file.mtime DESC 
```