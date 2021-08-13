<%*
const filename = String(tp.file.selection()).trim()
const template = tp.file.find_tfile("TOPICNOTE") 
await tp.file.create_new(template, filename, false)
%><% tp.file.selection() %>