<%*
const choices = [
	{option: "!! Quick Capture", captureTo: "QUICKNOTE.md", format: "[[{{DATE:gggg-MM-DD}}]] {{DATE:hh:mm}}: {{VALUE}}\n", prepend: false},
	{option: "~ Evergreen Note", startSymbol: "", path: "Templates/Templates/EGNOTE.md", folder: "EvergreenNotes"},
	{option: "# Content Note", startSymbol: "", path: "Templates/Templates/CONTENT.md", folder: "ContentNotes"},
	{option: "@ Bio Note", startSymbol: "", path: "Templates/Templates/BIONOTE.md", folder: "EvergreenNotes"},
	{option: "@ Topic Note", startSymbol: "", path: "Templates/Templates/TOPICNOTE.md", folder: "EvergreenNotes"}
]

const out = await tp.user.QuickAdd(tp, choices);
if (out) tR = out;
%>



