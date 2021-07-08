### Notes not yet in outline
```dataviewjs
const thisFile = dv.pages().where(f => f.file.name == "mental health")
let displayed = [
	"anxiety",
	"ADHD",
	"trauma"
]
dv.paragraph(thisFile)
dv.list(dv.pages(dv.array(thisFile.link)))
```
