---
created: 2021-05-22
note-type:
- evergreen-note
- organizational-note
- topic-note
date modified: Sunday, October 3rd 2021, 11:17:19 am
---
```ActivityHistory
/
```
This is a constantly updated index of entry points and topics for my personal flavor of [[Zettlekassen]]/[[second brain]]/[[personal knowledge management]] system.
```dataviewjs
dv.list(dv.current())
```
# Entry Points

- [[QUICKNOTE]]
- [[Journal]]
- [[TODO]]
	- [[my TO(DO) and EVER(GREEN) structure]]

- [[SEARCH]]

	- [[RELATED-TOPICS]]

- Forest

	- [[EVERGREENS]]
	- [[EVERSPROUTS]]
	- [[EVERSEEDS]]

- Notes not in outline

	- [[TOPICNOTES]]
	- [[EVERGREENNOTES]]
	- [[CONTENTNOTES]]



# Topic Outlines
- 
	- ![[mental health#mental health customJS dv_funcs topicOutlineHeader dv this]]
- 
	- ![[gender#gender customJS dv_funcs topicOutlineHeader dv this]]
- 
	 - ![[Neuroscience#Neuroscience customJS dv_funcs topicOutlineHeader dv this]]
- 
	- ![[self#self customJS dv_funcs topicOutlineHeader dv this]]
- 
	- ![[Politics#Politics customJS dv_funcs topicOutlineHeader dv this]]
- 
	 - ![[personal knowledge management#personal knowledge management customJS dv_funcs topicOutlineHeader dv this]]
- 
	 - ![[Christianity#Christianity customJS dv_funcs topicOutlineHeader dv this]]

# Notes not in outline
```dataviewjs
const {dv_funcs} = customJS
const pages = dv.pages()
console.log(dv.array())
dv_funcs.statusTable({
	dv,
	that:this,
	all: true,
	whereCheck: (p => p.file.outlinks.length <= 1 && p.file.path.contains('TopicNotes')),
	title: 'Topic Seeds'
})
dv_funcs.statusTable({
	dv,
	that:this,
	all: true,
	whereCheck: (p => p.file.outlinks.length > 1 && p.file.path.contains('TopicNotes')),
	title: 'Growing Topics'
})
```
