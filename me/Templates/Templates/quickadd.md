<%*
const choices = [
        {option: "💭 Add a Thought", startSymbol: "~", path: "Templates/Templates/Inputs/Thought.md"},
        {option: "✔ Add a Task", startSymbol: "", path: "bins/templates/New Task.md", folder: "tasks"},
        {option: "📥 Add an Inbox item", format: `{{DATE:gggg-MM-DD-HH-MM-SS}} - {{NAME}}`, folder: "inbox", path: "bins/templates/Inbox Template.md"},
        {option: "✍ Quick Capture", captureTo: "inbox/appendToInbox.md", format: "# [[{{DATE:gggg-MM-DD - ddd MMM D}}]] {{DATE:hh:mm}}\n{{LINKCURRENT}}: {{VALUE}}\n\n", prepend: false},
        {option: "^ ✔ Quick Capture Task", captureTo: "\TASKS.md", task: true, format: "{{VALUE}} 📆 [[{{DATE}}]]\n"}
]

const out = await tp.user.QuickAdd(tp, choices);
if (out) tR = out;
%>
