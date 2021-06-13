import os
notes = {}
for folder in ["ContentNotes", "tharoline", "."]:
    with os.scandir(folder) as vault:
        for entry in vault:
            if entry.is_file() and entry.name.endswith(".md"):
                with open(entry.path, encoding='Latin') as text:
                    lines = text.read()
                    notes.setdefault(entry, lines)
                
for name in notes:               
    for tagPattern in ["[[Allignment", "[[Region", "[[Def", "[[Qoute","[[TO", "[[Ref", "[[Yes", "[[Inbox", "[[No", "[[Sometimes", "[[Fun", "[[EVER"]:
        end = True
        while end:
            try:
                tagStart = notes[name].index(tagPattern) + 2
                tagEnd = notes[name].index("]]", tagStart)
                tag = notes[name][tagStart:tagEnd]
                notes[name] = notes[name][0:tagStart - 2] + "#" + tag + notes[name][tagEnd+2:]
            except ValueError:
                end = False
    
for name in notes:
    with open(name, 'w') as f:
        f.write(notes[name])