import os
notes = {}
# for folder in ["ContentNotes", "tharoline", "."]:
with os.scandir() as vault:
    for entryFolder in vault:
        if entryFolder.is_dir():
            with os.scandir(entryFolder) as folder:
                for entry in folder:
                    if entry.is_file() and entry.name.endswith(".md"):
                        with open(entry.path, encoding='utf-8') as text:
                            print(entry.path)
                            lines = text.read()
                            notes.setdefault(entry, lines)
                
for name in notes:               
    for tagPattern in ["[[Allignment", "[[Alignment", "[[Region", "[[Def", "[[Qoute","[[TO", "[[Ref", "[[Yes", "[[Inbox", "[[No", "[[Sometimes", "[[Fun", "[[EVER"]:
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
    with open(name, 'w', encoding='utf-8') as f:
        f.write(notes[name])