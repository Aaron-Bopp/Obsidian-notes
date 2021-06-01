import os
notes = {}
with os.scandir() as vault:
    for entry in vault:
        if entry.is_file() and entry.name.endswith(".md"):
            with open(entry.path) as text:
                lines = text.read()
                notes.setdefault(entry, lines)
                
for name in notes:               
    for tagPattern in ["[[TO", "[[Ref", "[[Yes", "[[Inbox", "[[No", "[[Sometimes", "[[Fun", "[[EVER"]:
        end = True
        while end:
            try:
                tagStart = notes[name].index(tagPattern) + 2
                tagEnd = notes[name].index("]]", tagStart)
                tag = notes[name][tagStart:tagEnd]
                notes[name] = notes[name][0:tagStart - 2] + "#" + tag + notes[name][tagEnd+2:]
            except ValueError:
                if tagPattern == "[[EVER":
                    end = False
    
for name in notes:
    with open(name, 'w') as f:
        f.write(notes[name])