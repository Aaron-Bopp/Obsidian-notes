---
creation date: 2021-05-29
modification date: saturday 29th may 2021 20:52:39
note-type: [evergreen-note, tools, topic-note]

---



[[dataview]] is an plugin for [[obsidian (software)]] that allows for [[sql]] like queries over the notes in your obsidian vault.

source code:: https://github.com/blacksmithgu/obsidian-dataview
documentation:: https://blacksmithgu.github.io/obsidian-dataview/
snippets:: https://forum.obsidian.md/t/dataviewjs-snippet-showcase/17847/2, https://forum.obsidian.md/t/dataview-plugin-snippet-showcase/13673, https://forum.obsidian.md/t/dataview-plugin-snippet-showcase/13673/104


- inline query
	- can be used to perform expressions inline with `"= <expression>"`
		- today's date: **`= date(today)`** 
		- [[dataview]]'s note types: *`= [[dataview]].note-type`*
	- some don't work outside of a dataview block
		- `= [[dataview]].mtime`
		- `= [[dataview]].tags`
- expressions
	- anything that yields a value
- fields
	- [[dataview]] simplifies fields defined in line to lower-case-no-special-characters
- functions
	- `replace([string], replaced, inserted)`
	
# queries
## basic syntax
```
table|list|task <field> [as "column name"], <field>, ..., <field> from<source> (like [[tag]] or "folder")`
where <expression> (like 'field = value')
sort <expression> [asc/desc] (like 'field asc')
... other data commands
```
## from tags
```dataviewx
table  file.tags as tags, file.mtime as "last modified" from #to
flatten file.tags
```

## [tasks that are overdue](https://forum.obsidian.md/t/dataviewjs-snippet-showcase/17847/23)
```dataviewjs
function overdue(t) {
  let dvalidate = moment(t.text, 'yyyy-mm-dd', true);
  let d = moment(t.text, 'yyyy-mm-dd');
  let containsvaliddate = dvalidate._pf.unusedtokens.length==0 ;
  let isoverdue = d.diff(moment()) <= 0;
  return (containsvaliddate && isoverdue);
}

dv.tasklist(dv.pages("").file.tasks
	.where (t => overdue(t))
	.where (t => !t.completed))
```
## Hierarchy
```dataviewjs
const getTotalLinks = page => {
	return Number(page.file.outlinks.length + page.file.inlinks.length) 
}
const sortedPages = (pages, size) => dv.pages(pages.where(p => getTotalLinks(p) > size).sort(page => {
	return getTotalLinks(page)
}, 'desc').map(page => {
	return page
}))
//const maxLinks = (pages) => getTotalLinks(pages.first())
for (const page of sortedPages(dv.pages(''), 8)) {
	dv.header(3, page.file.name)
	dv.list(sortedPages(page.file.inlinks, Number(getTotalLinks(page)/2)))
	dv.list(dv.array(page.file.outlinks))
}
//dv.list(dv.pages('').flatMap((page) => {
	//return sortedPages(dv.pages(page.file.outlinks), 0)
	
	//return [dv.header(1, page.file.name, dv.array(page.file.outlinks)]
//}))
	
```


---

**Status**:: #EVER/SPROUT 

**Related-Topics**:: [[SQL]], [[data querrying]], 
	
**Sub-Topics**::
	
**References**