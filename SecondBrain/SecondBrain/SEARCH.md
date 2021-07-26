---
creation date: 2021-07-05
parent: [[Dataview]]
note-type:
- organizational-note
---
searchType:: tags
searchTerm:: EVER/SEED/UNPLANTED
 [Search](https://github.com/torantine/obsidian-snippets#across-vault-word-count)
<%*

// thanks to [[Christianity|Christian]] for the MetaEdit Plugin and help with containers
// https://github.com/chhoumann/MetaEdit

dv.paragraph("If you have MetaEdit enabled, you can use the dropdown menus below to choose a search type and a term.<br><br>")

const metaeditEnabled = app.plugins.enabledPlugins.has("metaedit");

if(metaeditEnabled === true) {

	const {update} = this.app.plugins.plugins["metaedit"].api;
	const thisFile = dv.pages().where(f => f.file.path == dv.current().file.path)
	let searchType = dv.pages().where(f => f.file.path == dv.current().file.path).searchType;
	let searchTerm = dv.pages().where(f => f.file.path == dv.current().file.path).searchTerm;
	function formatDate(date){

	//https://stackoverflow.com/questions/23593052/format-[[javascript]]-date-as-yyyy-mm-dd#:~:text=The%20simplest%20way%20to%20convert,getTimezoneOffset()%20*%2060000%20))%20.

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

	let mtime = dv.pages().where(p => formatDate(p.file.mtime) == searchTerm)

	const dateMaker = (pn, fpath) => {
		let searchTerm = dv.pages().where(f => f.file.path == dv.current().file.path).searchTerm;
		const file = this.app.vault.getAbstractFileByPath(fpath)
		const regex = new RegExp("\d{4}-\d{2}-\d{2}")
		const textBox = this.container.createEl('input');
		textBox.type = "date";
		textBox.value = searchTerm;
		// regex.test(searchTerm) ? textBox.value = searchTerm.toString()

		textBox.placeholder = "Enter tag to search for";
		textBox.addEventListener('input', async (evt) => {
			evt.preventDefault();
			await update(pn, '\"'+textBox.value+ '\"', file)
		})
		return textBox
	}

	const searchTypeDropdownMaker = (pn, fpath) => {
		const file = this.app.vault.getAbstractFileByPath(fpath)
		const optionsText = ["tags", "modified date"];
		const optionsValue = ["tags", "mdate"]

		const dropdown = this.container.createEl('select');
		const option1 = dropdown.createEl('option');
		option1.text = optionsText[0];
		option1.value = optionsValue[0];
		const option2 = dropdown.createEl('option');
		option2.text = optionsText[1];
		option2.value = optionsValue[1];

		dropdown.selectedIndex != null ? dropdown.selectedIndex = optionsValue.indexOf(searchType.toString()) : dropdown.selectedIndex = 0;

		dropdown.addEventListener('change', async evt => {
			evt.preventDefault();
			await update(pn, optionsValue[dropdown.selectedIndex], file)
		})
		return dropdown
	}

	const tagsDropdownMaker = (pn, fpath) => {
		const file = this.app.vault.getAbstractFileByPath(fpath)
		const tags = Object.keys(app.metadataCache.getTags()).sort();
		tags.unshift("#")
		const dropdown = this.container.createEl('select');

		// https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array

		tags.forEach((tag, [[index]]) => {
			var opt = tag;
			var el = dropdown.createEl('option');
			opt != "#" ? el.textContent = opt : el.textContent = "All Pages";
			el.value = opt;
			dropdown.appendChild(el);
		})

		tags.indexOf("#"+searchTerm.toString()) < 0 ? dropdown.selectedIndex = 0 : dropdown.selectedIndex = tags.indexOf("#"+searchTerm.toString())

		// dropdown.selectedIndex != null ? dropdown.selectedIndex = tags.indexOf("#"+searchTerm.toString()) : dropdown.selectedIndex = 0;

		// const option1 = dropdown.createEl('option');
		// option1.text = tags[0];
		// option1.value = tags[0];
		dropdown.addEventListener('change', async evt => {
			evt.preventDefault();
			await update(pn, tags[dropdown.selectedIndex].slice(1), file)
		})
		return dropdown
	}

	// Output
		dv.paragraph("Search Type: ")
		// dv.paragraph(buttonMaker('Tag','searchFor', 'tag', thisFile.file.path))
		// dv.paragraph(buttonMaker('Modified Date','searchFor', 'mdate', thisFile.file.path))
		dv.paragraph(searchTypeDropdownMaker('searchType', thisFile.file.path))
		dv.paragraph("<br>Search For: ")
		if(searchType.values[0] === "tags"){
			dv.paragraph(tagsDropdownMaker('searchTerm', thisFile.file.path));
		} else if (searchType.values[0] === "mdate"){
			dv.paragraph(dateMaker('searchTerm', thisFile.file.path));
		} else {
			dv.paragraph("Please Choose A Valid Search Type")
		}
} else {
	dv.paragraph("<strong>!!! Please enable the MetaEdit plugin then reload this page to search via menus. !!!</strong>")
}
%>

```
