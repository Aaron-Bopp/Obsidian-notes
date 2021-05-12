import os

if __name__ == '__main__':
    notes = {}
    with os.scandir() as it:
        for entry in it:
            if entry.is_file() and entry.name.endswith(".md") and entry.name != 'GDB Notes.md':
                with open(entry.path, encoding='utf8') as f:
                    text = f.read()
                    notes.setdefault(entry.name, text)

    sections = {'#Yes':[], '#No':[], '#Sometimes':[]}
    for name in notes:
        note = notes[name]
        # for tag in sections:
        #     sections[tag].append(f"From [[{name.split('.')[0]}]]")
        i = 0
        while i < len(note):
            try:
                i = note.index('#', i)
            except ValueError:
                i = len(note)
                continue
            for tag in sections:
                if note[i:i+len(tag)] == tag:
                    sections[tag].append(f"- From [[{name.split('.')[0]}]]\n")
                    end = note.index('==', i+len(tag)+3)
                    sections[tag].append('    - ' + note[i+len(tag)+3:end] + '\n')
                    i = end
                    break
                else:
                    continue
            i += 1 
    
    with open("I relate to.md", 'w') as f:
        for tag in sections:
            f.write(f"# {tag}\n\n")
            f.write(''.join(list(dict.fromkeys(list(sections[tag])))))        
