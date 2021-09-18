```js
const thisFile = dv.pages().where(f => f.file.path == dv.current().file.path)[0]
function formatDate(date){
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) 
		month = '0' + month;
	if (day.length < 2) 
		day = '0' + day;

	return [year, month, day].join('-');
}

function wrap(name) {
	return '[[' + name + ']]'
}

function getIO(file) {
	return `${file.inlinks.length}/${file.outlinks.length}`
}

const statusDict = {
	"GREEN":0,
	"SPROUT":1,
	"SEED":2
}

const statusLevel = (status) => {
	const [_, growth, state] = status.split("/")
	return statusDict[growth]
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}

function lastEdited (page) {
	let days = datediff(new Date(page.file.mtime), new Date())
	if (days === 0) {
		return "Today"
	} 
	return `${days} days ago`
	
}
<% tp.file.cursor() %><% tp.system.clipboard() %>
```