# %%
import json
import os
with open('entities.json') as f:
    entities = json.load(f)

# %%


def load_notes():
    notes = {}
    with os.scandir() as vault:
        for entry in vault:
            if entry.is_dir() and entry.name != ".obsidian":
                with os.scandir(entry.path) as vault_folder:
                    for note in vault_folder:
                        if note.name.endswith(".md"):
                            name = note.name.split(".")[0]
                            with open(note.path) as text:
                                lines = text.readlines()
                                notes.setdefault(name, lines)
            if entry.is_file():
                if entry.name.endswith(".md"):
                    name = entry.name.split(".")[0]
                    with open(entry.path) as text:
                        lines = text.readlines()
                        notes.setdefault(name, lines)
    return notes
# %%
