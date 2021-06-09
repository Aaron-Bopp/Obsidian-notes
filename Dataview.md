---
creation date: 2021-05-29
modification date: Saturday 29th May 2021 20:52:39
note-type: [evergreen-note, tools, topic-note]

---



[[Dataview]] is an plugin for [[Obsidian (software)]] that allows for [[SQL]] like queries over the notes in your Obsidian vault.

Source Code:: https://github.com/blacksmithgu/obsidian-dataview
Documentation:: https://blacksmithgu.github.io/obsidian-dataview/
Snippets:: https://forum.obsidian.md/t/dataviewjs-snippet-showcase/17847/2, https://forum.obsidian.md/t/dataview-plugin-snippet-showcase/13673, https://forum.obsidian.md/t/dataview-plugin-snippet-showcase/13673/104


- Inline Query
	- Can be used to perform expressions inline with `"= <Expression>"`
		- Today's Date: **`= date(today)`** 
		- [[Dataview]]'s note types: *`= [[Dataview]].note-type`*
	- Some don't work outside of a dataview block
		- `= [[Dataview]].mtime`
		- `= [[Dataview]].tags`
- Expressions
	- anything that yields a value
- Fields
	- [[Dataview]] simplifies fields defined in line to lower-case-no-special-characters



	
# Queries
## Basic Syntax
```
TABLE|LIST|TASK <field> [AS "Column Name"], <field>, ..., <field> FROM<source> (like [[tag]] or "folder")`
WHERE <expression> (like 'field = value')
SORT <expression> [ASC/DESC] (like 'field ASC')
... other data commands
```
## From Tags
```dataviewx
TABLE  file.tags AS Tags, file.mtime AS "Last Modified" FROM #TO
flatten file.tags
```



---

**Status**:: #EVER/SPROUT 

**Related-Topics**:: [[SQL]], [[data querrying]], [[obsidian plugins]]
	
**Sub-Topics**::
	
**References**