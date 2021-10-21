'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

const modifiers = /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|AltGr|Option|Alt|Shift|Super)/i;
const keyCodes = /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen|F24|F23|F22|F21|F20|F19|F18|F17|F16|F15|F14|F13|F12|F11|F10|F9|F8|F7|F6|F5|F4|F3|F2|F1|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i;
const UNSUPPORTED = {};

function _command(accelerator, event, modifier) {
	if (process.platform !== 'darwin') {
		return UNSUPPORTED;
	}

	if (event.metaKey) {
		throw new Error('Double `Command` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {metaKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _super(accelerator, event, modifier) {
	if (event.metaKey) {
		throw new Error('Double `Super` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {metaKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _commandorcontrol(accelerator, event, modifier) {
	if (process.platform === 'darwin') {
		if (event.metaKey) {
			throw new Error('Double `Command` modifier specified.');
		}

		return {
			event: Object.assign({}, event, {metaKey: true}),
			accelerator: accelerator.slice(modifier.length)
		};
	}

	if (event.ctrlKey) {
		throw new Error('Double `Control` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {ctrlKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _alt(accelerator, event, modifier) {
	if (modifier === 'option' && process.platform !== 'darwin') {
		return UNSUPPORTED;
	}

	if (event.altKey) {
		throw new Error('Double `Alt` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {altKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _shift(accelerator, event, modifier) {
	if (event.shiftKey) {
		throw new Error('Double `Shift` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {shiftKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _control(accelerator, event, modifier) {
	if (event.ctrlKey) {
		throw new Error('Double `Control` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {ctrlKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function reduceModifier({accelerator, event}, modifier) {
	switch (modifier) {
		case 'command':
		case 'cmd': {
			return _command(accelerator, event, modifier);
		}

		case 'super': {
			return _super(accelerator, event, modifier);
		}

		case 'control':
		case 'ctrl': {
			return _control(accelerator, event, modifier);
		}

		case 'commandorcontrol':
		case 'cmdorctrl': {
			return _commandorcontrol(accelerator, event, modifier);
		}

		case 'option':
		case 'altgr':
		case 'alt': {
			return _alt(accelerator, event, modifier);
		}

		case 'shift': {
			return _shift(accelerator, event, modifier);
		}

		default:
			console.error(modifier);
	}
}

function reducePlus({accelerator, event}) {
	return {
		event,
		accelerator: accelerator.trim().slice(1)
	};
}

const virtualKeyCodes = {
	0: 'Digit0',
	1: 'Digit1',
	2: 'Digit2',
	3: 'Digit3',
	4: 'Digit4',
	5: 'Digit5',
	6: 'Digit6',
	7: 'Digit7',
	8: 'Digit8',
	9: 'Digit9',
	'-': 'Minus',
	'=': 'Equal',
	Q: 'KeyQ',
	W: 'KeyW',
	E: 'KeyE',
	R: 'KeyR',
	T: 'KeyT',
	Y: 'KeyY',
	U: 'KeyU',
	I: 'KeyI',
	O: 'KeyO',
	P: 'KeyP',
	'[': 'BracketLeft',
	']': 'BracketRight',
	A: 'KeyA',
	S: 'KeyS',
	D: 'KeyD',
	F: 'KeyF',
	G: 'KeyG',
	H: 'KeyH',
	J: 'KeyJ',
	K: 'KeyK',
	L: 'KeyL',
	';': 'Semicolon',
	'\'': 'Quote',
	'`': 'Backquote',
	'/': 'Backslash',
	Z: 'KeyZ',
	X: 'KeyX',
	C: 'KeyC',
	V: 'KeyV',
	B: 'KeyB',
	N: 'KeyN',
	M: 'KeyM',
	',': 'Comma',
	'.': 'Period',
	'\\': 'Slash',
	' ': 'Space'
};

function reduceKey({accelerator, event}, key) {
	if (key.length > 1 || event.key) {
		throw new Error(`Unvalid keycode \`${key}\`.`);
	}

	const code =
		key.toUpperCase() in virtualKeyCodes ?
			virtualKeyCodes[key.toUpperCase()] :
			null;

	return {
		event: Object.assign({}, event, {key}, code ? {code} : null),
		accelerator: accelerator.trim().slice(key.length)
	};
}

const domKeys = Object.assign(Object.create(null), {
	plus: 'Add',
	space: 'Space',
	tab: 'Tab',
	backspace: 'Backspace',
	delete: 'Delete',
	insert: 'Insert',
	return: 'Return',
	enter: 'Return',
	up: 'ArrowUp',
	down: 'ArrowDown',
	left: 'ArrowLeft',
	right: 'ArrowRight',
	home: 'Home',
	end: 'End',
	pageup: 'PageUp',
	pagedown: 'PageDown',
	escape: 'Escape',
	esc: 'Escape',
	volumeup: 'AudioVolumeUp',
	volumedown: 'AudioVolumeDown',
	volumemute: 'AudioVolumeMute',
	medianexttrack: 'MediaTrackNext',
	mediaprevioustrack: 'MediaTrackPrevious',
	mediastop: 'MediaStop',
	mediaplaypause: 'MediaPlayPause',
	printscreen: 'PrintScreen'
});

// Add function keys
for (let i = 1; i <= 24; i++) {
	domKeys[`f${i}`] = `F${i}`;
}

function reduceCode({accelerator, event}, {code, key}) {
	if (event.code) {
		throw new Error(`Duplicated keycode \`${key}\`.`);
	}

	return {
		event: Object.assign({}, event, {key}, code ? {code} : null),
		accelerator: accelerator.trim().slice((key && key.length) || 0)
	};
}

/**
 * This function transform an Electron Accelerator string into
 * a DOM KeyboardEvent object.
 *
 * @param  {string} accelerator an Electron Accelerator string, e.g. `Ctrl+C` or `Shift+Space`.
 * @return {object} a DOM KeyboardEvent object derivate from the `accelerator` argument.
 */
function toKeyEvent(accelerator) {
	let state = {accelerator, event: {}};
	while (state.accelerator !== '') {
		const modifierMatch = state.accelerator.match(modifiers);
		if (modifierMatch) {
			const modifier = modifierMatch[0].toLowerCase();
			state = reduceModifier(state, modifier);
			if (state === UNSUPPORTED) {
				return {unsupportedKeyForPlatform: true};
			}
		} else if (state.accelerator.trim()[0] === '+') {
			state = reducePlus(state);
		} else {
			const codeMatch = state.accelerator.match(keyCodes);
			if (codeMatch) {
				const code = codeMatch[0].toLowerCase();
				if (code in domKeys) {
					state = reduceCode(state, {
						code: domKeys[code],
						key: code
					});
				} else {
					state = reduceKey(state, code);
				}
			} else {
				throw new Error(`Unvalid accelerator: "${state.accelerator}"`);
			}
		}
	}

	return state.event;
}

var keyboardeventFromElectronAccelerator = {
	UNSUPPORTED,
	reduceModifier,
	reducePlus,
	reduceKey,
	reduceCode,
	toKeyEvent
};

var DEFAULT_SETTINGS = {
    vimrcFileName: ".obsidian.vimrc",
    displayChord: false,
    displayVimMode: false,
    fixedNormalModeLayout: false,
    capturedKeyboardMap: {}
};
// NOTE: to future maintainers, please make sure all mapping commands are included in this array.
var mappingCommands = [
    "map",
    "nmap",
    "noremap",
];
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
var VimrcPlugin = /** @class */ (function (_super) {
    __extends(VimrcPlugin, _super);
    function VimrcPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastYankBuffer = new Array(0);
        _this.lastSystemClipboard = "";
        _this.yankToSystemClipboard = false;
        _this.currentKeyChord = [];
        _this.vimChordStatusBar = null;
        _this.vimStatusBar = null;
        _this.currentVimStatus = "\uD83D\uDFE2" /* normal */;
        _this.customVimKeybinds = {};
        _this.currentSelection = null;
        _this.isInsertMode = false;
        return _this;
    }
    VimrcPlugin.prototype.captureKeyboardLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keyMap, layout, doneIterating;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyMap = {};
                        return [4 /*yield*/, navigator.keyboard.getLayoutMap()];
                    case 1:
                        layout = _a.sent();
                        doneIterating = new Promise(function (resolve, reject) {
                            var counted = 0;
                            layout.forEach(function (value, index) {
                                keyMap[index] = value;
                                counted += 1;
                                if (counted === layout.size)
                                    resolve();
                            });
                        });
                        return [4 /*yield*/, doneIterating];
                    case 2:
                        _a.sent();
                        new obsidian.Notice('Keyboard layout captured');
                        return [2 /*return*/, keyMap];
                }
            });
        });
    };
    VimrcPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading Vimrc plugin');
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new SettingsTab(this.app, this));
                        this.registerEvent(this.app.workspace.on('file-open', function (file) {
                            var VIMRC_FILE_NAME = _this.settings.vimrcFileName;
                            _this.app.vault.adapter.read(VIMRC_FILE_NAME).
                                then(function (lines) { return _this.readVimInit(lines); }).
                                catch(function (error) { console.log('Error loading vimrc file', VIMRC_FILE_NAME, 'from the vault root', error); });
                        }));
                        this.app.workspace.on('codemirror', function (cm) {
                            cm.on('vim-mode-change', function (modeObj) {
                                if (modeObj)
                                    _this.logVimModeChange(modeObj);
                            });
                            _this.defineFixedLayout(cm);
                        });
                        this.registerDomEvent(document, 'click', function () {
                            _this.captureYankBuffer();
                        });
                        this.registerDomEvent(document, 'keyup', function () {
                            _this.captureYankBuffer();
                        });
                        this.registerDomEvent(document, 'focusin', function () {
                            _this.captureYankBuffer();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VimrcPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        data = _a.sent();
                        this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
                        return [2 /*return*/];
                }
            });
        });
    };
    VimrcPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VimrcPlugin.prototype.logVimModeChange = function (modeObj) {
        this.isInsertMode = modeObj.mode === 'insert';
        switch (modeObj.mode) {
            case "insert":
                this.currentVimStatus = "\uD83D\uDFE0" /* insert */;
                break;
            case "normal":
                this.currentVimStatus = "\uD83D\uDFE2" /* normal */;
                break;
            case "visual":
                this.currentVimStatus = "\uD83D\uDFE1" /* visual */;
                break;
            case "replace":
                this.currentVimStatus = "\uD83D\uDD34" /* replace */;
                break;
        }
        this.vimStatusBar.setText(this.currentVimStatus);
    };
    VimrcPlugin.prototype.onunload = function () {
        console.log('unloading Vimrc plugin (but Vim commands that were already loaded will still work)');
    };
    VimrcPlugin.prototype.getActiveView = function () {
        return this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
    };
    VimrcPlugin.prototype.getEditor = function (view) {
        var _a;
        return (_a = view.sourceMode) === null || _a === void 0 ? void 0 : _a.cmEditor;
    };
    VimrcPlugin.prototype.readVimInit = function (vimCommands) {
        var _this = this;
        var view = this.getActiveView();
        if (view) {
            var cmEditor = this.getEditor(view);
            if (cmEditor && !CodeMirror.Vim.loadedVimrc) {
                this.defineBasicCommands(CodeMirror.Vim);
                this.defineSendKeys(CodeMirror.Vim);
                this.defineObCommand(CodeMirror.Vim);
                this.defineSurround(CodeMirror.Vim);
                // Record the position of selections
                CodeMirror.on(cmEditor, "cursorActivity", function (cm) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.currentSelection = cm.listSelections();
                        return [2 /*return*/];
                    });
                }); });
                vimCommands.split("\n").forEach(function (line, index, arr) {
                    if (line.trim().length > 0 && line.trim()[0] != '"') {
                        var split = line.split(" ");
                        if (mappingCommands.includes(split[0])) {
                            // Have to do this because "vim-command-done" event doesn't actually work properly, or something.
                            this.customVimKeybinds[split[1]] = true;
                        }
                        CodeMirror.Vim.handleEx(cmEditor, line);
                    }
                }.bind(this) // Faster than an arrow function. https://stackoverflow.com/questions/50375440/binding-vs-arrow-function-for-react-onclick-event
                );
                this.prepareChordDisplay();
                this.prepareVimModeDisplay();
                // Make sure that we load it just once per CodeMirror instance.
                // This is supposed to work because the Vim state is kept at the keymap level, hopefully
                // there will not be bugs caused by operations that are kept at the object level instead
                CodeMirror.Vim.loadedVimrc = true;
            }
        }
    };
    VimrcPlugin.prototype.defineBasicCommands = function (vimObject) {
        var _this = this;
        vimObject.defineOption('clipboard', '', 'string', ['clip'], function (value, cm) {
            if (value) {
                if (value.trim() == 'unnamed' || value.trim() == 'unnamedplus') {
                    if (!_this.yankToSystemClipboard) {
                        _this.yankToSystemClipboard = true;
                        console.log("Vim is now set to yank to system clipboard.");
                    }
                }
                else {
                    throw new Error("Unrecognized clipboard option, supported are 'unnamed' and 'unnamedplus' (and they do the same)");
                }
            }
        });
        vimObject.defineOption('tabstop', 4, 'number', [], function (value, cm) {
            if (value && cm) {
                cm.setOption('tabSize', value);
            }
        });
        vimObject.defineEx('iunmap', '', function (cm, params) {
            if (params.argString.trim()) {
                CodeMirror.Vim.unmap(params.argString.trim(), 'insert');
            }
        });
        vimObject.defineEx('noremap', '', function (cm, params) {
            var _a;
            if (!((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length)) {
                throw new Error('Invalid mapping: noremap');
            }
            if (params.argString.trim()) {
                CodeMirror.Vim.noremap.apply(CodeMirror.Vim, params.args);
            }
        });
        // Allow the user to register an Ex command
        vimObject.defineEx('exmap', '', function (cm, params) {
            var _a;
            if (((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length) && params.args.length < 2) {
                throw new Error("exmap requires at least 2 parameters: [name] [actions...]");
            }
            var commandName = params.args[0];
            params.args.shift();
            var commandContent = params.args.join(' ');
            // The content of the user's Ex command is just the remaining parameters of the exmap command
            CodeMirror.Vim.defineEx(commandName, '', function (cm, params) {
                CodeMirror.Vim.handleEx(cm, commandContent);
            });
        });
    };
    VimrcPlugin.prototype.defineSendKeys = function (vimObject) {
        var _this = this;
        vimObject.defineEx('sendkeys', '', function (cm, params) { return __awaiter(_this, void 0, void 0, function () {
            var allGood, events, _i, _a, key, delay, keyEvent, _b, events_1;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!((_c = params === null || params === void 0 ? void 0 : params.args) === null || _c === void 0 ? void 0 : _c.length)) {
                            console.log(params);
                            throw new Error("The sendkeys command requires a list of keys, e.g. sendKeys Ctrl+p a b Enter");
                        }
                        allGood = true;
                        events = [];
                        _i = 0, _a = params.args;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        key = _a[_i];
                        if (!key.startsWith('wait')) return [3 /*break*/, 3];
                        delay = key.slice(4);
                        return [4 /*yield*/, sleep(delay * 1000)];
                    case 2:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        keyEvent = null;
                        try {
                            keyEvent = new KeyboardEvent('keydown', keyboardeventFromElectronAccelerator.toKeyEvent(key));
                            events.push(keyEvent);
                        }
                        catch (e) {
                            allGood = false;
                            throw new Error("Key '" + key + "' couldn't be read as an Electron Accelerator");
                        }
                        if (allGood) {
                            for (_b = 0, events_1 = events; _b < events_1.length; _b++) {
                                keyEvent = events_1[_b];
                                window.postMessage(JSON.parse(JSON.stringify(keyEvent)), '*');
                            }
                            // view.containerEl.dispatchEvent(keyEvent);
                        }
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    VimrcPlugin.prototype.defineObCommand = function (vimObject) {
        var _this = this;
        vimObject.defineEx('obcommand', '', function (cm, params) { return __awaiter(_this, void 0, void 0, function () {
            var availableCommands, view, editor, command, callback, checkCallback, editorCallback, editorCheckCallback;
            var _a;
            return __generator(this, function (_b) {
                availableCommands = this.app.commands.commands;
                if (!((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length) || params.args.length != 1) {
                    console.log("Available commands: " + Object.keys(availableCommands).join('\n'));
                    throw new Error("obcommand requires exactly 1 parameter");
                }
                view = this.getActiveView();
                editor = view.editor;
                command = params.args[0];
                if (command in availableCommands) {
                    callback = availableCommands[command].callback;
                    checkCallback = availableCommands[command].checkCallback;
                    editorCallback = availableCommands[command].editorCallback;
                    editorCheckCallback = availableCommands[command].editorCheckCallback;
                    if (editorCheckCallback)
                        editorCheckCallback(false, editor, view);
                    else if (editorCallback)
                        editorCallback(editor, view);
                    else if (checkCallback)
                        checkCallback(false);
                    else if (callback)
                        callback();
                    else
                        throw new Error("Command " + command + " doesn't have an Obsidian callback");
                }
                else
                    throw new Error("Command " + command + " was not found, try 'obcommand' with no params to see in the developer console what's available");
                return [2 /*return*/];
            });
        }); });
    };
    VimrcPlugin.prototype.defineSurround = function (vimObject) {
        var _this = this;
        // Function to surround selected text or highlighted word.
        var surroundFunc = function (cm, params) {
            var _a;
            if (!((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length)) {
                throw new Error("surround requires exactly 2 parameters: prefix and postfix text.");
            }
            var newArgs = params.args.join(" ").match(/(\\.|[^\s\\\\]+)+/g);
            if (newArgs.length != 2) {
                throw new Error("surround requires exactly 2 parameters: prefix and postfix text.");
            }
            var beginning = newArgs[0].replace("\\\\", "\\").replace("\\ ", " "); // Get the beginning surround text
            var ending = newArgs[1].replace("\\\\", "\\").replace("\\ ", " "); // Get the ending surround text
            var currentSelection = _this.currentSelection[0];
            if (_this.currentSelection.length > 1) {
                console.log("WARNING: Multiple selections in surround. Attempt to select matching cursor. (obsidian-vimrc-support)");
                for (var i = 0; i < _this.currentSelection.length; i++) {
                    var selection = _this.currentSelection[i];
                    var cursorPos = cm.getCursor();
                    if (selection.head.line == cursorPos.line && selection.head.ch == cursorPos.ch) {
                        console.log("RESOLVED: Selection matching cursor found. (obsidian-vimrc-support)");
                        currentSelection = selection;
                        break;
                    }
                }
            }
            if (currentSelection.anchor == currentSelection.head) {
                // No range of selected text, so select word.
                var wordRange = cm.findWordAt(currentSelection.anchor);
                var currText = cm.getRange(wordRange.from(), wordRange.to());
                cm.replaceRange(beginning + currText + ending, wordRange.from(), wordRange.to());
            }
            else {
                var currText = cm.getRange(currentSelection.from(), currentSelection.to());
                cm.replaceRange(beginning + currText + ending, currentSelection.from(), currentSelection.to());
            }
        };
        vimObject.defineEx("surround", "", surroundFunc);
        vimObject.defineEx("pasteinto", "", function (cm, params) {
            // Using the register for when this.yankToSystemClipboard == false
            surroundFunc(cm, { args: ["[", "](" + vimObject.getRegisterController().getRegister('yank').keyBuffer + ")"] });
        });
        var cmEditor = this.getEditor(this.getActiveView());
        // Handle the surround dialog input
        var surroundDialogCallback = function (value) {
            if ((/^\[+$/).test(value)) { // check for 1-inf [ and match them with ]
                surroundFunc(cmEditor, { args: [value, "]".repeat(value.length)] });
            }
            else if ((/^\(+$/).test(value)) { // check for 1-inf ( and match them with )
                surroundFunc(cmEditor, { args: [value, ")".repeat(value.length)] });
            }
            else if ((/^\{+$/).test(value)) { // check for 1-inf { and match them with }
                surroundFunc(cmEditor, { args: [value, "}".repeat(value.length)] });
            }
            else { // Else, just put it before and after.
                surroundFunc(cmEditor, { args: [value, value] });
            }
        };
        vimObject.defineOperator("surroundOperator", function (cm, args, ranges) {
            var p = "<span>Surround with: <input type='text'></span>";
            cm.openDialog(p, surroundDialogCallback, { bottom: true, selectValueOnOpen: false });
        });
        vimObject.mapCommand("<A-y>s", "operator", "surroundOperator");
    };
    VimrcPlugin.prototype.captureYankBuffer = function () {
        var _this = this;
        if (this.yankToSystemClipboard) {
            var currentBuffer = CodeMirror.Vim.getRegisterController().getRegister('yank').keyBuffer;
            if (currentBuffer != this.lastYankBuffer) {
                if (this.lastYankBuffer.length > 0 && currentBuffer.length > 0 && currentBuffer[0]) {
                    navigator.clipboard.writeText(currentBuffer[0]);
                    navigator.clipboard.readText().then(function (value) { _this.lastSystemClipboard = value; });
                }
                this.lastYankBuffer = currentBuffer;
                return;
            }
            var currentClipboard = navigator.clipboard.readText().then(function (value) {
                if (value != _this.lastSystemClipboard) {
                    var yankRegister = CodeMirror.Vim.getRegisterController().getRegister('yank');
                    yankRegister.setText(value);
                    _this.lastYankBuffer = yankRegister.keyBuffer;
                    _this.lastSystemClipboard = value;
                }
            });
        }
    };
    VimrcPlugin.prototype.prepareChordDisplay = function () {
        var _this = this;
        if (this.settings.displayChord) {
            // Add status bar item
            this.vimChordStatusBar = this.addStatusBarItem();
            // Move vimChordStatusBar to the leftmost position and center it.
            var parent_1 = this.vimChordStatusBar.parentElement;
            this.vimChordStatusBar.parentElement.insertBefore(this.vimChordStatusBar, parent_1.firstChild);
            this.vimChordStatusBar.style.marginRight = "auto";
            var cmEditor = this.getEditor(this.getActiveView());
            // See https://codemirror.net/doc/manual.html#vimapi_events for events.
            CodeMirror.on(cmEditor, "vim-keypress", function (vimKey) { return __awaiter(_this, void 0, void 0, function () {
                var tempS, _i, _a, s;
                return __generator(this, function (_b) {
                    if (vimKey != "<Esc>") { // TODO figure out what to actually look for to exit commands.
                        this.currentKeyChord.push(vimKey);
                        if (this.customVimKeybinds[this.currentKeyChord.join("")] != undefined) { // Custom key chord exists.
                            this.currentKeyChord = [];
                        }
                    }
                    else {
                        this.currentKeyChord = [];
                    }
                    tempS = "";
                    for (_i = 0, _a = this.currentKeyChord; _i < _a.length; _i++) {
                        s = _a[_i];
                        tempS += " " + s;
                    }
                    if (tempS != "") {
                        tempS += "-";
                    }
                    this.vimChordStatusBar.setText(tempS);
                    return [2 /*return*/];
                });
            }); });
            CodeMirror.on(cmEditor, "vim-command-done", function (reason) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.vimChordStatusBar.setText("");
                    this.currentKeyChord = [];
                    return [2 /*return*/];
                });
            }); });
        }
    };
    VimrcPlugin.prototype.prepareVimModeDisplay = function () {
        if (this.settings.displayVimMode) {
            this.vimStatusBar = this.addStatusBarItem(); // Add status bar item
            this.vimStatusBar.setText("\uD83D\uDFE2" /* normal */); // Init the vimStatusBar with normal mode
        }
    };
    VimrcPlugin.prototype.defineFixedLayout = function (cm) {
        var _this = this;
        cm.on('keydown', function (instance, ev) {
            if (_this.settings.fixedNormalModeLayout) {
                var keyMap = _this.settings.capturedKeyboardMap;
                if (!_this.isInsertMode && !ev.shiftKey &&
                    ev.code in keyMap && ev.key != keyMap[ev.code]) {
                    CodeMirror.Vim.handleKey(instance, keyMap[ev.code], 'mapping');
                    ev.preventDefault();
                    return false;
                }
            }
        });
    };
    return VimrcPlugin;
}(obsidian.Plugin));
var SettingsTab = /** @class */ (function (_super) {
    __extends(SettingsTab, _super);
    function SettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    SettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Vimrc Settings' });
        new obsidian.Setting(containerEl)
            .setName('Vimrc file name')
            .setDesc('Relative to vault directory (requires restart)')
            .addText(function (text) {
            text.setPlaceholder(DEFAULT_SETTINGS.vimrcFileName);
            text.setValue(_this.plugin.settings.vimrcFileName || DEFAULT_SETTINGS.vimrcFileName);
            text.onChange(function (value) {
                _this.plugin.settings.vimrcFileName = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Vim chord display')
            .setDesc('Displays the current chord until completion. Ex: "<Space> f-" (requires restart)')
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.displayChord || DEFAULT_SETTINGS.displayChord);
            toggle.onChange(function (value) {
                _this.plugin.settings.displayChord = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Vim mode display')
            .setDesc('Displays the current vim mode (requires restart)')
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.displayVimMode || DEFAULT_SETTINGS.displayVimMode);
            toggle.onChange(function (value) {
                _this.plugin.settings.displayVimMode = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Use a fixed keyboard layout for Normal mode')
            .setDesc('Define a keyboard layout to always use when in Normal mode, regardless of the input language (experimental).')
            .addButton(function (button) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                button.setButtonText('Capture current layout');
                button.onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this.plugin.settings;
                                return [4 /*yield*/, this.plugin.captureKeyboardLayout()];
                            case 1:
                                _a.capturedKeyboardMap = _b.sent();
                                this.plugin.saveSettings();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); })
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.fixedNormalModeLayout || DEFAULT_SETTINGS.fixedNormalModeLayout);
            toggle.onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.plugin.settings.fixedNormalModeLayout = value;
                            if (!(value && Object.keys(this.plugin.settings.capturedKeyboardMap).length === 0)) return [3 /*break*/, 2];
                            _a = this.plugin.settings;
                            return [4 /*yield*/, this.plugin.captureKeyboardLayout()];
                        case 1:
                            _a.capturedKeyboardMap = _b.sent();
                            _b.label = 2;
                        case 2:
                            this.plugin.saveSettings();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    return SettingsTab;
}(obsidian.PluginSettingTab));

module.exports = VimrcPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9rZXlib2FyZGV2ZW50LWZyb20tZWxlY3Ryb24tYWNjZWxlcmF0b3IvaW5kZXguanMiLCJtYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImNvbnN0IG1vZGlmaWVycyA9IC9eKENvbW1hbmRPckNvbnRyb2x8Q21kT3JDdHJsfENvbW1hbmR8Q21kfENvbnRyb2x8Q3RybHxBbHRHcnxPcHRpb258QWx0fFNoaWZ0fFN1cGVyKS9pO1xuY29uc3Qga2V5Q29kZXMgPSAvXihQbHVzfFNwYWNlfFRhYnxCYWNrc3BhY2V8RGVsZXRlfEluc2VydHxSZXR1cm58RW50ZXJ8VXB8RG93bnxMZWZ0fFJpZ2h0fEhvbWV8RW5kfFBhZ2VVcHxQYWdlRG93bnxFc2NhcGV8RXNjfFZvbHVtZVVwfFZvbHVtZURvd258Vm9sdW1lTXV0ZXxNZWRpYU5leHRUcmFja3xNZWRpYVByZXZpb3VzVHJhY2t8TWVkaWFTdG9wfE1lZGlhUGxheVBhdXNlfFByaW50U2NyZWVufEYyNHxGMjN8RjIyfEYyMXxGMjB8RjE5fEYxOHxGMTd8RjE2fEYxNXxGMTR8RjEzfEYxMnxGMTF8RjEwfEY5fEY4fEY3fEY2fEY1fEY0fEYzfEYyfEYxfFswLTlBLVopIUAjJCVeJiooOis8Xz4/fnt8fVwiOz0sXFwtLi9gW1xcXFxcXF0nXSkvaTtcbmNvbnN0IFVOU1VQUE9SVEVEID0ge307XG5cbmZ1bmN0aW9uIF9jb21tYW5kKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0cmV0dXJuIFVOU1VQUE9SVEVEO1xuXHR9XG5cblx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RvdWJsZSBgQ29tbWFuZGAgbW9kaWZpZXIgc3BlY2lmaWVkLicpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRldmVudDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQsIHttZXRhS2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RvdWJsZSBgU3VwZXJgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7bWV0YUtleTogdHJ1ZX0pLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9jb21tYW5kb3Jjb250cm9sKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG5cdFx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBDb21tYW5kYCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge21ldGFLZXk6IHRydWV9KSxcblx0XHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdFx0fTtcblx0fVxuXG5cdGlmIChldmVudC5jdHJsS2V5KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEb3VibGUgYENvbnRyb2xgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7Y3RybEtleTogdHJ1ZX0pLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9hbHQoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcikge1xuXHRpZiAobW9kaWZpZXIgPT09ICdvcHRpb24nICYmIHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0cmV0dXJuIFVOU1VQUE9SVEVEO1xuXHR9XG5cblx0aWYgKGV2ZW50LmFsdEtleSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBBbHRgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7YWx0S2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX3NoaWZ0KGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEb3VibGUgYFNoaWZ0YCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge3NoaWZ0S2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX2NvbnRyb2woYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcikge1xuXHRpZiAoZXZlbnQuY3RybEtleSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBDb250cm9sYCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge2N0cmxLZXk6IHRydWV9KSxcblx0XHRhY2NlbGVyYXRvcjogYWNjZWxlcmF0b3Iuc2xpY2UobW9kaWZpZXIubGVuZ3RoKVxuXHR9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VNb2RpZmllcih7YWNjZWxlcmF0b3IsIGV2ZW50fSwgbW9kaWZpZXIpIHtcblx0c3dpdGNoIChtb2RpZmllcikge1xuXHRcdGNhc2UgJ2NvbW1hbmQnOlxuXHRcdGNhc2UgJ2NtZCc6IHtcblx0XHRcdHJldHVybiBfY29tbWFuZChhY2NlbGVyYXRvciwgZXZlbnQsIG1vZGlmaWVyKTtcblx0XHR9XG5cblx0XHRjYXNlICdzdXBlcic6IHtcblx0XHRcdHJldHVybiBfc3VwZXIoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnY29udHJvbCc6XG5cdFx0Y2FzZSAnY3RybCc6IHtcblx0XHRcdHJldHVybiBfY29udHJvbChhY2NlbGVyYXRvciwgZXZlbnQsIG1vZGlmaWVyKTtcblx0XHR9XG5cblx0XHRjYXNlICdjb21tYW5kb3Jjb250cm9sJzpcblx0XHRjYXNlICdjbWRvcmN0cmwnOiB7XG5cdFx0XHRyZXR1cm4gX2NvbW1hbmRvcmNvbnRyb2woYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRjYXNlICdhbHRncic6XG5cdFx0Y2FzZSAnYWx0Jzoge1xuXHRcdFx0cmV0dXJuIF9hbHQoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnc2hpZnQnOiB7XG5cdFx0XHRyZXR1cm4gX3NoaWZ0KGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpO1xuXHRcdH1cblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRjb25zb2xlLmVycm9yKG1vZGlmaWVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWR1Y2VQbHVzKHthY2NlbGVyYXRvciwgZXZlbnR9KSB7XG5cdHJldHVybiB7XG5cdFx0ZXZlbnQsXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnRyaW0oKS5zbGljZSgxKVxuXHR9O1xufVxuXG5jb25zdCB2aXJ0dWFsS2V5Q29kZXMgPSB7XG5cdDA6ICdEaWdpdDAnLFxuXHQxOiAnRGlnaXQxJyxcblx0MjogJ0RpZ2l0MicsXG5cdDM6ICdEaWdpdDMnLFxuXHQ0OiAnRGlnaXQ0Jyxcblx0NTogJ0RpZ2l0NScsXG5cdDY6ICdEaWdpdDYnLFxuXHQ3OiAnRGlnaXQ3Jyxcblx0ODogJ0RpZ2l0OCcsXG5cdDk6ICdEaWdpdDknLFxuXHQnLSc6ICdNaW51cycsXG5cdCc9JzogJ0VxdWFsJyxcblx0UTogJ0tleVEnLFxuXHRXOiAnS2V5VycsXG5cdEU6ICdLZXlFJyxcblx0UjogJ0tleVInLFxuXHRUOiAnS2V5VCcsXG5cdFk6ICdLZXlZJyxcblx0VTogJ0tleVUnLFxuXHRJOiAnS2V5SScsXG5cdE86ICdLZXlPJyxcblx0UDogJ0tleVAnLFxuXHQnWyc6ICdCcmFja2V0TGVmdCcsXG5cdCddJzogJ0JyYWNrZXRSaWdodCcsXG5cdEE6ICdLZXlBJyxcblx0UzogJ0tleVMnLFxuXHREOiAnS2V5RCcsXG5cdEY6ICdLZXlGJyxcblx0RzogJ0tleUcnLFxuXHRIOiAnS2V5SCcsXG5cdEo6ICdLZXlKJyxcblx0SzogJ0tleUsnLFxuXHRMOiAnS2V5TCcsXG5cdCc7JzogJ1NlbWljb2xvbicsXG5cdCdcXCcnOiAnUXVvdGUnLFxuXHQnYCc6ICdCYWNrcXVvdGUnLFxuXHQnLyc6ICdCYWNrc2xhc2gnLFxuXHRaOiAnS2V5WicsXG5cdFg6ICdLZXlYJyxcblx0QzogJ0tleUMnLFxuXHRWOiAnS2V5VicsXG5cdEI6ICdLZXlCJyxcblx0TjogJ0tleU4nLFxuXHRNOiAnS2V5TScsXG5cdCcsJzogJ0NvbW1hJyxcblx0Jy4nOiAnUGVyaW9kJyxcblx0J1xcXFwnOiAnU2xhc2gnLFxuXHQnICc6ICdTcGFjZSdcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZUtleSh7YWNjZWxlcmF0b3IsIGV2ZW50fSwga2V5KSB7XG5cdGlmIChrZXkubGVuZ3RoID4gMSB8fCBldmVudC5rZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYFVudmFsaWQga2V5Y29kZSBcXGAke2tleX1cXGAuYCk7XG5cdH1cblxuXHRjb25zdCBjb2RlID1cblx0XHRrZXkudG9VcHBlckNhc2UoKSBpbiB2aXJ0dWFsS2V5Q29kZXMgP1xuXHRcdFx0dmlydHVhbEtleUNvZGVzW2tleS50b1VwcGVyQ2FzZSgpXSA6XG5cdFx0XHRudWxsO1xuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7a2V5fSwgY29kZSA/IHtjb2RlfSA6IG51bGwpLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci50cmltKCkuc2xpY2Uoa2V5Lmxlbmd0aClcblx0fTtcbn1cblxuY29uc3QgZG9tS2V5cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwge1xuXHRwbHVzOiAnQWRkJyxcblx0c3BhY2U6ICdTcGFjZScsXG5cdHRhYjogJ1RhYicsXG5cdGJhY2tzcGFjZTogJ0JhY2tzcGFjZScsXG5cdGRlbGV0ZTogJ0RlbGV0ZScsXG5cdGluc2VydDogJ0luc2VydCcsXG5cdHJldHVybjogJ1JldHVybicsXG5cdGVudGVyOiAnUmV0dXJuJyxcblx0dXA6ICdBcnJvd1VwJyxcblx0ZG93bjogJ0Fycm93RG93bicsXG5cdGxlZnQ6ICdBcnJvd0xlZnQnLFxuXHRyaWdodDogJ0Fycm93UmlnaHQnLFxuXHRob21lOiAnSG9tZScsXG5cdGVuZDogJ0VuZCcsXG5cdHBhZ2V1cDogJ1BhZ2VVcCcsXG5cdHBhZ2Vkb3duOiAnUGFnZURvd24nLFxuXHRlc2NhcGU6ICdFc2NhcGUnLFxuXHRlc2M6ICdFc2NhcGUnLFxuXHR2b2x1bWV1cDogJ0F1ZGlvVm9sdW1lVXAnLFxuXHR2b2x1bWVkb3duOiAnQXVkaW9Wb2x1bWVEb3duJyxcblx0dm9sdW1lbXV0ZTogJ0F1ZGlvVm9sdW1lTXV0ZScsXG5cdG1lZGlhbmV4dHRyYWNrOiAnTWVkaWFUcmFja05leHQnLFxuXHRtZWRpYXByZXZpb3VzdHJhY2s6ICdNZWRpYVRyYWNrUHJldmlvdXMnLFxuXHRtZWRpYXN0b3A6ICdNZWRpYVN0b3AnLFxuXHRtZWRpYXBsYXlwYXVzZTogJ01lZGlhUGxheVBhdXNlJyxcblx0cHJpbnRzY3JlZW46ICdQcmludFNjcmVlbidcbn0pO1xuXG4vLyBBZGQgZnVuY3Rpb24ga2V5c1xuZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuXHRkb21LZXlzW2BmJHtpfWBdID0gYEYke2l9YDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlQ29kZSh7YWNjZWxlcmF0b3IsIGV2ZW50fSwge2NvZGUsIGtleX0pIHtcblx0aWYgKGV2ZW50LmNvZGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZWQga2V5Y29kZSBcXGAke2tleX1cXGAuYCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge2tleX0sIGNvZGUgPyB7Y29kZX0gOiBudWxsKSxcblx0XHRhY2NlbGVyYXRvcjogYWNjZWxlcmF0b3IudHJpbSgpLnNsaWNlKChrZXkgJiYga2V5Lmxlbmd0aCkgfHwgMClcblx0fTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRyYW5zZm9ybSBhbiBFbGVjdHJvbiBBY2NlbGVyYXRvciBzdHJpbmcgaW50b1xuICogYSBET00gS2V5Ym9hcmRFdmVudCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBhY2NlbGVyYXRvciBhbiBFbGVjdHJvbiBBY2NlbGVyYXRvciBzdHJpbmcsIGUuZy4gYEN0cmwrQ2Agb3IgYFNoaWZ0K1NwYWNlYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBET00gS2V5Ym9hcmRFdmVudCBvYmplY3QgZGVyaXZhdGUgZnJvbSB0aGUgYGFjY2VsZXJhdG9yYCBhcmd1bWVudC5cbiAqL1xuZnVuY3Rpb24gdG9LZXlFdmVudChhY2NlbGVyYXRvcikge1xuXHRsZXQgc3RhdGUgPSB7YWNjZWxlcmF0b3IsIGV2ZW50OiB7fX07XG5cdHdoaWxlIChzdGF0ZS5hY2NlbGVyYXRvciAhPT0gJycpIHtcblx0XHRjb25zdCBtb2RpZmllck1hdGNoID0gc3RhdGUuYWNjZWxlcmF0b3IubWF0Y2gobW9kaWZpZXJzKTtcblx0XHRpZiAobW9kaWZpZXJNYXRjaCkge1xuXHRcdFx0Y29uc3QgbW9kaWZpZXIgPSBtb2RpZmllck1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRzdGF0ZSA9IHJlZHVjZU1vZGlmaWVyKHN0YXRlLCBtb2RpZmllcik7XG5cdFx0XHRpZiAoc3RhdGUgPT09IFVOU1VQUE9SVEVEKSB7XG5cdFx0XHRcdHJldHVybiB7dW5zdXBwb3J0ZWRLZXlGb3JQbGF0Zm9ybTogdHJ1ZX07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzdGF0ZS5hY2NlbGVyYXRvci50cmltKClbMF0gPT09ICcrJykge1xuXHRcdFx0c3RhdGUgPSByZWR1Y2VQbHVzKHN0YXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY29kZU1hdGNoID0gc3RhdGUuYWNjZWxlcmF0b3IubWF0Y2goa2V5Q29kZXMpO1xuXHRcdFx0aWYgKGNvZGVNYXRjaCkge1xuXHRcdFx0XHRjb25zdCBjb2RlID0gY29kZU1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGlmIChjb2RlIGluIGRvbUtleXMpIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHJlZHVjZUNvZGUoc3RhdGUsIHtcblx0XHRcdFx0XHRcdGNvZGU6IGRvbUtleXNbY29kZV0sXG5cdFx0XHRcdFx0XHRrZXk6IGNvZGVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHJlZHVjZUtleShzdGF0ZSwgY29kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW52YWxpZCBhY2NlbGVyYXRvcjogXCIke3N0YXRlLmFjY2VsZXJhdG9yfVwiYCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0YXRlLmV2ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VU5TVVBQT1JURUQsXG5cdHJlZHVjZU1vZGlmaWVyLFxuXHRyZWR1Y2VQbHVzLFxuXHRyZWR1Y2VLZXksXG5cdHJlZHVjZUNvZGUsXG5cdHRvS2V5RXZlbnRcbn07XG4iLCJpbXBvcnQgKiBhcyBrZXlGcm9tQWNjZWxlcmF0b3IgZnJvbSAna2V5Ym9hcmRldmVudC1mcm9tLWVsZWN0cm9uLWFjY2VsZXJhdG9yJztcclxuaW1wb3J0IHsgTm90aWNlLCBBcHAsIE1hcmtkb3duVmlldywgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBURmlsZSB9IGZyb20gJ29ic2lkaWFuJztcclxuXHJcbmRlY2xhcmUgY29uc3QgQ29kZU1pcnJvcjogYW55O1xyXG5cclxuaW50ZXJmYWNlIFNldHRpbmdzIHtcclxuXHR2aW1yY0ZpbGVOYW1lOiBzdHJpbmcsXHJcblx0ZGlzcGxheUNob3JkOiBib29sZWFuLFxyXG5cdGRpc3BsYXlWaW1Nb2RlOiBib29sZWFuLFxyXG5cdGZpeGVkTm9ybWFsTW9kZUxheW91dDogYm9vbGVhbixcclxuXHRjYXB0dXJlZEtleWJvYXJkTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFNldHRpbmdzID0ge1xyXG5cdHZpbXJjRmlsZU5hbWU6IFwiLm9ic2lkaWFuLnZpbXJjXCIsXHJcblx0ZGlzcGxheUNob3JkOiBmYWxzZSxcclxuXHRkaXNwbGF5VmltTW9kZTogZmFsc2UsXHJcblx0Zml4ZWROb3JtYWxNb2RlTGF5b3V0OiBmYWxzZSxcclxuXHRjYXB0dXJlZEtleWJvYXJkTWFwOiB7fVxyXG59XHJcblxyXG5jb25zdCBlbnVtIHZpbVN0YXR1cyB7XHJcblx0bm9ybWFsID0gXCLwn5+iXCIsXHJcblx0aW5zZXJ0ID0gXCLwn5+gXCIsXHJcblx0cmVwbGFjZSA9IFwi8J+UtFwiLFxyXG5cdHZpc3VhbCA9IFwi8J+foVwiXHJcbn1cclxuXHJcbi8vIE5PVEU6IHRvIGZ1dHVyZSBtYWludGFpbmVycywgcGxlYXNlIG1ha2Ugc3VyZSBhbGwgbWFwcGluZyBjb21tYW5kcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyBhcnJheS5cclxuY29uc3QgbWFwcGluZ0NvbW1hbmRzOiBTdHJpbmdbXSA9IFtcclxuXHRcIm1hcFwiLFxyXG5cdFwibm1hcFwiLFxyXG5cdFwibm9yZW1hcFwiLFxyXG5dXHJcblxyXG5mdW5jdGlvbiBzbGVlcChtczogbnVtYmVyKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaW1yY1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0c2V0dGluZ3M6IFNldHRpbmdzO1xyXG5cclxuXHRwcml2YXRlIGxhc3RZYW5rQnVmZmVyID0gbmV3IEFycmF5PHN0cmluZz4oMCk7XHJcblx0cHJpdmF0ZSBsYXN0U3lzdGVtQ2xpcGJvYXJkID0gXCJcIjtcclxuXHRwcml2YXRlIHlhbmtUb1N5c3RlbUNsaXBib2FyZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgY3VycmVudEtleUNob3JkOiBhbnkgPSBbXTtcclxuXHRwcml2YXRlIHZpbUNob3JkU3RhdHVzQmFyOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblx0cHJpdmF0ZSB2aW1TdGF0dXNCYXI6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuXHRwcml2YXRlIGN1cnJlbnRWaW1TdGF0dXM6IHZpbVN0YXR1cyA9IHZpbVN0YXR1cy5ub3JtYWw7XHJcblx0cHJpdmF0ZSBjdXN0b21WaW1LZXliaW5kczogeyBbbmFtZTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcblx0cHJpdmF0ZSBjdXJyZW50U2VsZWN0aW9uOiBbQ29kZU1pcnJvci5SYW5nZV0gPSBudWxsO1xyXG5cdHByaXZhdGUgaXNJbnNlcnRNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGFzeW5jIGNhcHR1cmVLZXlib2FyZExheW91dCgpIHtcclxuXHRcdC8vIFRoaXMgaXMgZXhwZXJpbWVudGFsIEFQSSBhbmQgaXQgbWlnaHQgYnJlYWsgYXQgc29tZSBwb2ludDpcclxuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZExheW91dE1hcFxyXG5cdFx0bGV0IGtleU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG5cdFx0bGV0IGxheW91dCA9IGF3YWl0IChuYXZpZ2F0b3IgYXMgYW55KS5rZXlib2FyZC5nZXRMYXlvdXRNYXAoKTtcclxuXHRcdGxldCBkb25lSXRlcmF0aW5nID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRsZXQgY291bnRlZCA9IDA7XHJcblx0XHRcdGxheW91dC5mb3JFYWNoKCh2YWx1ZTogYW55LCBpbmRleDogYW55KSA9PiB7XHJcblx0XHRcdFx0a2V5TWFwW2luZGV4XSA9IHZhbHVlO1xyXG5cdFx0XHRcdGNvdW50ZWQgKz0gMTtcclxuXHRcdFx0XHRpZiAoY291bnRlZCA9PT0gbGF5b3V0LnNpemUpXHJcblx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRhd2FpdCBkb25lSXRlcmF0aW5nO1xyXG5cdFx0bmV3IE5vdGljZSgnS2V5Ym9hcmQgbGF5b3V0IGNhcHR1cmVkJyk7XHJcblx0XHRyZXR1cm4ga2V5TWFwO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgb25sb2FkKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgVmltcmMgcGx1Z2luJyk7XHJcblxyXG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKVxyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2ZpbGUtb3BlbicsIChmaWxlOiBURmlsZSkgPT4ge1xyXG5cdFx0XHRjb25zdCBWSU1SQ19GSUxFX05BTUUgPSB0aGlzLnNldHRpbmdzLnZpbXJjRmlsZU5hbWU7XHJcblx0XHRcdHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIucmVhZChWSU1SQ19GSUxFX05BTUUpLlxyXG5cdFx0XHRcdHRoZW4oKGxpbmVzKSA9PiB0aGlzLnJlYWRWaW1Jbml0KGxpbmVzKSkuXHJcblx0XHRcdFx0Y2F0Y2goZXJyb3IgPT4geyBjb25zb2xlLmxvZygnRXJyb3IgbG9hZGluZyB2aW1yYyBmaWxlJywgVklNUkNfRklMRV9OQU1FLCAnZnJvbSB0aGUgdmF1bHQgcm9vdCcsIGVycm9yKSB9KTtcclxuXHRcdH0pKTtcclxuXHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2NvZGVtaXJyb3InLCAoY206IENvZGVNaXJyb3IuRWRpdG9yKSA9PiB7XHJcblx0XHRcdGNtLm9uKCd2aW0tbW9kZS1jaGFuZ2UnLCAobW9kZU9iajogYW55KSA9PiB7XHJcblx0XHRcdFx0aWYgKG1vZGVPYmopXHJcblx0XHRcdFx0XHR0aGlzLmxvZ1ZpbU1vZGVDaGFuZ2UobW9kZU9iaik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRlZmluZUZpeGVkTGF5b3V0KGNtKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJEb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmNhcHR1cmVZYW5rQnVmZmVyKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMucmVnaXN0ZXJEb21FdmVudChkb2N1bWVudCwgJ2tleXVwJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmNhcHR1cmVZYW5rQnVmZmVyKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMucmVnaXN0ZXJEb21FdmVudChkb2N1bWVudCwgJ2ZvY3VzaW4nLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuY2FwdHVyZVlhbmtCdWZmZXIoKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuXHR9XHJcblxyXG5cdGxvZ1ZpbU1vZGVDaGFuZ2UobW9kZU9iajogYW55KSB7XHJcblx0XHR0aGlzLmlzSW5zZXJ0TW9kZSA9IG1vZGVPYmoubW9kZSA9PT0gJ2luc2VydCc7XHJcblx0XHRzd2l0Y2ggKG1vZGVPYmoubW9kZSkge1xyXG5cdFx0XHRjYXNlIFwiaW5zZXJ0XCI6XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VmltU3RhdHVzID0gdmltU3RhdHVzLmluc2VydDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIm5vcm1hbFwiOlxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFZpbVN0YXR1cyA9IHZpbVN0YXR1cy5ub3JtYWw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJ2aXN1YWxcIjpcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRWaW1TdGF0dXMgPSB2aW1TdGF0dXMudmlzdWFsO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwicmVwbGFjZVwiOlxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFZpbVN0YXR1cyA9IHZpbVN0YXR1cy5yZXBsYWNlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy52aW1TdGF0dXNCYXIuc2V0VGV4dCh0aGlzLmN1cnJlbnRWaW1TdGF0dXMpO1xyXG5cdH1cclxuXHJcblx0b251bmxvYWQoKSB7XHJcblx0XHRjb25zb2xlLmxvZygndW5sb2FkaW5nIFZpbXJjIHBsdWdpbiAoYnV0IFZpbSBjb21tYW5kcyB0aGF0IHdlcmUgYWxyZWFkeSBsb2FkZWQgd2lsbCBzdGlsbCB3b3JrKScpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRBY3RpdmVWaWV3KCk6IE1hcmtkb3duVmlldyB7XHJcblx0XHRyZXR1cm4gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0RWRpdG9yKHZpZXc6IE1hcmtkb3duVmlldyk6IENvZGVNaXJyb3IuRWRpdG9yIHtcclxuXHRcdHJldHVybiB2aWV3LnNvdXJjZU1vZGU/LmNtRWRpdG9yO1xyXG5cdH1cclxuXHJcblx0cmVhZFZpbUluaXQodmltQ29tbWFuZHM6IHN0cmluZykge1xyXG5cdFx0bGV0IHZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXcoKTtcclxuXHRcdGlmICh2aWV3KSB7XHJcblx0XHRcdHZhciBjbUVkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKHZpZXcpO1xyXG5cdFx0XHRpZiAoY21FZGl0b3IgJiYgIUNvZGVNaXJyb3IuVmltLmxvYWRlZFZpbXJjKSB7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVCYXNpY0NvbW1hbmRzKENvZGVNaXJyb3IuVmltKTtcclxuXHRcdFx0XHR0aGlzLmRlZmluZVNlbmRLZXlzKENvZGVNaXJyb3IuVmltKTtcclxuXHRcdFx0XHR0aGlzLmRlZmluZU9iQ29tbWFuZChDb2RlTWlycm9yLlZpbSk7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVTdXJyb3VuZChDb2RlTWlycm9yLlZpbSk7XHJcblxyXG5cdFx0XHRcdC8vIFJlY29yZCB0aGUgcG9zaXRpb24gb2Ygc2VsZWN0aW9uc1xyXG5cdFx0XHRcdENvZGVNaXJyb3Iub24oY21FZGl0b3IsIFwiY3Vyc29yQWN0aXZpdHlcIiwgYXN5bmMgKGNtOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudFNlbGVjdGlvbiA9IGNtLmxpc3RTZWxlY3Rpb25zKClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHR2aW1Db21tYW5kcy5zcGxpdChcIlxcblwiKS5mb3JFYWNoKFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKGxpbmU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyOiBbc3RyaW5nXSkge1xyXG5cdFx0XHRcdFx0XHRpZiAobGluZS50cmltKCkubGVuZ3RoID4gMCAmJiBsaW5lLnRyaW0oKVswXSAhPSAnXCInKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHNwbGl0ID0gbGluZS5zcGxpdChcIiBcIilcclxuXHRcdFx0XHRcdFx0XHRpZiAobWFwcGluZ0NvbW1hbmRzLmluY2x1ZGVzKHNwbGl0WzBdKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gSGF2ZSB0byBkbyB0aGlzIGJlY2F1c2UgXCJ2aW0tY29tbWFuZC1kb25lXCIgZXZlbnQgZG9lc24ndCBhY3R1YWxseSB3b3JrIHByb3Blcmx5LCBvciBzb21ldGhpbmcuXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmN1c3RvbVZpbUtleWJpbmRzW3NwbGl0WzFdXSA9IHRydWVcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Q29kZU1pcnJvci5WaW0uaGFuZGxlRXgoY21FZGl0b3IsIGxpbmUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LmJpbmQodGhpcykgLy8gRmFzdGVyIHRoYW4gYW4gYXJyb3cgZnVuY3Rpb24uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUwMzc1NDQwL2JpbmRpbmctdnMtYXJyb3ctZnVuY3Rpb24tZm9yLXJlYWN0LW9uY2xpY2stZXZlbnRcclxuXHRcdFx0XHQpXHJcblxyXG5cdFx0XHRcdHRoaXMucHJlcGFyZUNob3JkRGlzcGxheSgpO1xyXG5cdFx0XHRcdHRoaXMucHJlcGFyZVZpbU1vZGVEaXNwbGF5KCk7XHJcblxyXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlIGxvYWQgaXQganVzdCBvbmNlIHBlciBDb2RlTWlycm9yIGluc3RhbmNlLlxyXG5cdFx0XHRcdC8vIFRoaXMgaXMgc3VwcG9zZWQgdG8gd29yayBiZWNhdXNlIHRoZSBWaW0gc3RhdGUgaXMga2VwdCBhdCB0aGUga2V5bWFwIGxldmVsLCBob3BlZnVsbHlcclxuXHRcdFx0XHQvLyB0aGVyZSB3aWxsIG5vdCBiZSBidWdzIGNhdXNlZCBieSBvcGVyYXRpb25zIHRoYXQgYXJlIGtlcHQgYXQgdGhlIG9iamVjdCBsZXZlbCBpbnN0ZWFkXHJcblx0XHRcdFx0Q29kZU1pcnJvci5WaW0ubG9hZGVkVmltcmMgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWZpbmVCYXNpY0NvbW1hbmRzKHZpbU9iamVjdDogYW55KSB7XHJcblx0XHR2aW1PYmplY3QuZGVmaW5lT3B0aW9uKCdjbGlwYm9hcmQnLCAnJywgJ3N0cmluZycsIFsnY2xpcCddLCAodmFsdWU6IHN0cmluZywgY206IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAodmFsdWUpIHtcclxuXHRcdFx0XHRpZiAodmFsdWUudHJpbSgpID09ICd1bm5hbWVkJyB8fCB2YWx1ZS50cmltKCkgPT0gJ3VubmFtZWRwbHVzJykge1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnlhbmtUb1N5c3RlbUNsaXBib2FyZCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnlhbmtUb1N5c3RlbUNsaXBib2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiVmltIGlzIG5vdyBzZXQgdG8geWFuayB0byBzeXN0ZW0gY2xpcGJvYXJkLlwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5yZWNvZ25pemVkIGNsaXBib2FyZCBvcHRpb24sIHN1cHBvcnRlZCBhcmUgJ3VubmFtZWQnIGFuZCAndW5uYW1lZHBsdXMnIChhbmQgdGhleSBkbyB0aGUgc2FtZSlcIilcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVPcHRpb24oJ3RhYnN0b3AnLCA0LCAnbnVtYmVyJywgW10sICh2YWx1ZTogbnVtYmVyLCBjbTogYW55KSA9PiB7XHJcblx0XHRcdGlmICh2YWx1ZSAmJiBjbSkge1xyXG5cdFx0XHRcdGNtLnNldE9wdGlvbigndGFiU2l6ZScsIHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdpdW5tYXAnLCAnJywgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGlmIChwYXJhbXMuYXJnU3RyaW5nLnRyaW0oKSkge1xyXG5cdFx0XHRcdENvZGVNaXJyb3IuVmltLnVubWFwKHBhcmFtcy5hcmdTdHJpbmcudHJpbSgpLCAnaW5zZXJ0Jyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeCgnbm9yZW1hcCcsICcnLCAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKCFwYXJhbXM/LmFyZ3M/Lmxlbmd0aCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtYXBwaW5nOiBub3JlbWFwJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChwYXJhbXMuYXJnU3RyaW5nLnRyaW0oKSkge1xyXG5cdFx0XHRcdENvZGVNaXJyb3IuVmltLm5vcmVtYXAuYXBwbHkoQ29kZU1pcnJvci5WaW0sIHBhcmFtcy5hcmdzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gQWxsb3cgdGhlIHVzZXIgdG8gcmVnaXN0ZXIgYW4gRXggY29tbWFuZFxyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdleG1hcCcsICcnLCAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKHBhcmFtcz8uYXJncz8ubGVuZ3RoICYmIHBhcmFtcy5hcmdzLmxlbmd0aCA8IDIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYGV4bWFwIHJlcXVpcmVzIGF0IGxlYXN0IDIgcGFyYW1ldGVyczogW25hbWVdIFthY3Rpb25zLi4uXWApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBjb21tYW5kTmFtZSA9IHBhcmFtcy5hcmdzWzBdO1xyXG5cdFx0XHRwYXJhbXMuYXJncy5zaGlmdCgpO1xyXG5cdFx0XHRsZXQgY29tbWFuZENvbnRlbnQgPSBwYXJhbXMuYXJncy5qb2luKCcgJyk7XHJcblx0XHRcdC8vIFRoZSBjb250ZW50IG9mIHRoZSB1c2VyJ3MgRXggY29tbWFuZCBpcyBqdXN0IHRoZSByZW1haW5pbmcgcGFyYW1ldGVycyBvZiB0aGUgZXhtYXAgY29tbWFuZFxyXG5cdFx0XHRDb2RlTWlycm9yLlZpbS5kZWZpbmVFeChjb21tYW5kTmFtZSwgJycsIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRcdENvZGVNaXJyb3IuVmltLmhhbmRsZUV4KGNtLCBjb21tYW5kQ29udGVudCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkZWZpbmVTZW5kS2V5cyh2aW1PYmplY3Q6IGFueSkge1xyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdzZW5ka2V5cycsICcnLCBhc3luYyAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKCFwYXJhbXM/LmFyZ3M/Lmxlbmd0aCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGUgc2VuZGtleXMgY29tbWFuZCByZXF1aXJlcyBhIGxpc3Qgb2Yga2V5cywgZS5nLiBzZW5kS2V5cyBDdHJsK3AgYSBiIEVudGVyYCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBhbGxHb29kID0gdHJ1ZTtcclxuXHRcdFx0bGV0IGV2ZW50czogS2V5Ym9hcmRFdmVudFtdID0gW107XHJcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIHBhcmFtcy5hcmdzKSB7XHJcblx0XHRcdFx0aWYgKGtleS5zdGFydHNXaXRoKCd3YWl0JykpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGRlbGF5ID0ga2V5LnNsaWNlKDQpO1xyXG5cdFx0XHRcdFx0YXdhaXQgc2xlZXAoZGVsYXkgKiAxMDAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQga2V5RXZlbnQ6IEtleWJvYXJkRXZlbnQgPSBudWxsO1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0a2V5RXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIGtleUZyb21BY2NlbGVyYXRvci50b0tleUV2ZW50KGtleSkpO1xyXG5cdFx0XHRcdFx0XHRldmVudHMucHVzaChrZXlFdmVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHRhbGxHb29kID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgS2V5ICcke2tleX0nIGNvdWxkbid0IGJlIHJlYWQgYXMgYW4gRWxlY3Ryb24gQWNjZWxlcmF0b3JgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChhbGxHb29kKSB7XHJcblx0XHRcdFx0XHRcdGZvciAoa2V5RXZlbnQgb2YgZXZlbnRzKVxyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5wb3N0TWVzc2FnZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGtleUV2ZW50KSksICcqJyk7XHJcblx0XHRcdFx0XHRcdC8vIHZpZXcuY29udGFpbmVyRWwuZGlzcGF0Y2hFdmVudChrZXlFdmVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRlZmluZU9iQ29tbWFuZCh2aW1PYmplY3Q6IGFueSkge1xyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdvYmNvbW1hbmQnLCAnJywgYXN5bmMgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGNvbnN0IGF2YWlsYWJsZUNvbW1hbmRzID0gKHRoaXMuYXBwIGFzIGFueSkuY29tbWFuZHMuY29tbWFuZHM7XHJcblx0XHRcdGlmICghcGFyYW1zPy5hcmdzPy5sZW5ndGggfHwgcGFyYW1zLmFyZ3MubGVuZ3RoICE9IDEpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhgQXZhaWxhYmxlIGNvbW1hbmRzOiAke09iamVjdC5rZXlzKGF2YWlsYWJsZUNvbW1hbmRzKS5qb2luKCdcXG4nKX1gKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgb2Jjb21tYW5kIHJlcXVpcmVzIGV4YWN0bHkgMSBwYXJhbWV0ZXJgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlldygpO1xyXG5cdFx0XHRsZXQgZWRpdG9yID0gdmlldy5lZGl0b3I7XHJcblx0XHRcdGNvbnN0IGNvbW1hbmQgPSBwYXJhbXMuYXJnc1swXTtcclxuXHRcdFx0aWYgKGNvbW1hbmQgaW4gYXZhaWxhYmxlQ29tbWFuZHMpIHtcclxuXHRcdFx0XHRsZXQgY2FsbGJhY2sgPSBhdmFpbGFibGVDb21tYW5kc1tjb21tYW5kXS5jYWxsYmFjaztcclxuXHRcdFx0XHRsZXQgY2hlY2tDYWxsYmFjayA9IGF2YWlsYWJsZUNvbW1hbmRzW2NvbW1hbmRdLmNoZWNrQ2FsbGJhY2s7XHJcblx0XHRcdFx0bGV0IGVkaXRvckNhbGxiYWNrID0gYXZhaWxhYmxlQ29tbWFuZHNbY29tbWFuZF0uZWRpdG9yQ2FsbGJhY2s7XHJcblx0XHRcdFx0bGV0IGVkaXRvckNoZWNrQ2FsbGJhY2sgPSBhdmFpbGFibGVDb21tYW5kc1tjb21tYW5kXS5lZGl0b3JDaGVja0NhbGxiYWNrO1xyXG5cdFx0XHRcdGlmIChlZGl0b3JDaGVja0NhbGxiYWNrKVxyXG5cdFx0XHRcdFx0ZWRpdG9yQ2hlY2tDYWxsYmFjayhmYWxzZSwgZWRpdG9yLCB2aWV3KTtcclxuXHRcdFx0XHRlbHNlIGlmIChlZGl0b3JDYWxsYmFjaylcclxuXHRcdFx0XHRcdGVkaXRvckNhbGxiYWNrKGVkaXRvciwgdmlldyk7XHJcblx0XHRcdFx0ZWxzZSBpZiAoY2hlY2tDYWxsYmFjaylcclxuXHRcdFx0XHRcdGNoZWNrQ2FsbGJhY2soZmFsc2UpO1xyXG5cdFx0XHRcdGVsc2UgaWYgKGNhbGxiYWNrKVxyXG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbW1hbmQgJHtjb21tYW5kfSBkb2Vzbid0IGhhdmUgYW4gT2JzaWRpYW4gY2FsbGJhY2tgKTtcclxuXHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb21tYW5kICR7Y29tbWFuZH0gd2FzIG5vdCBmb3VuZCwgdHJ5ICdvYmNvbW1hbmQnIHdpdGggbm8gcGFyYW1zIHRvIHNlZSBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgd2hhdCdzIGF2YWlsYWJsZWApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkZWZpbmVTdXJyb3VuZCh2aW1PYmplY3Q6IGFueSkge1xyXG5cdFx0Ly8gRnVuY3Rpb24gdG8gc3Vycm91bmQgc2VsZWN0ZWQgdGV4dCBvciBoaWdobGlnaHRlZCB3b3JkLlxyXG5cdFx0dmFyIHN1cnJvdW5kRnVuYyA9IChjbTogQ29kZU1pcnJvci5FZGl0b3IsIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGlmICghcGFyYW1zPy5hcmdzPy5sZW5ndGgpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJzdXJyb3VuZCByZXF1aXJlcyBleGFjdGx5IDIgcGFyYW1ldGVyczogcHJlZml4IGFuZCBwb3N0Zml4IHRleHQuXCIpXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IG5ld0FyZ3MgPSBwYXJhbXMuYXJncy5qb2luKFwiIFwiKS5tYXRjaCgvKFxcXFwufFteXFxzXFxcXFxcXFxdKykrL2cpXHJcblx0XHRcdGlmIChuZXdBcmdzLmxlbmd0aCAhPSAyKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwic3Vycm91bmQgcmVxdWlyZXMgZXhhY3RseSAyIHBhcmFtZXRlcnM6IHByZWZpeCBhbmQgcG9zdGZpeCB0ZXh0LlwiKVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgYmVnaW5uaW5nID0gbmV3QXJnc1swXS5yZXBsYWNlKFwiXFxcXFxcXFxcIiwgXCJcXFxcXCIpLnJlcGxhY2UoXCJcXFxcIFwiLCBcIiBcIikgLy8gR2V0IHRoZSBiZWdpbm5pbmcgc3Vycm91bmQgdGV4dFxyXG5cdFx0XHRsZXQgZW5kaW5nID0gbmV3QXJnc1sxXS5yZXBsYWNlKFwiXFxcXFxcXFxcIiwgXCJcXFxcXCIpLnJlcGxhY2UoXCJcXFxcIFwiLCBcIiBcIikgLy8gR2V0IHRoZSBlbmRpbmcgc3Vycm91bmQgdGV4dFxyXG5cclxuXHRcdFx0bGV0IGN1cnJlbnRTZWxlY3Rpb246IENvZGVNaXJyb3IuUmFuZ2UgPSB0aGlzLmN1cnJlbnRTZWxlY3Rpb25bMF1cclxuXHRcdFx0aWYgKHRoaXMuY3VycmVudFNlbGVjdGlvbi5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJXQVJOSU5HOiBNdWx0aXBsZSBzZWxlY3Rpb25zIGluIHN1cnJvdW5kLiBBdHRlbXB0IHRvIHNlbGVjdCBtYXRjaGluZyBjdXJzb3IuIChvYnNpZGlhbi12aW1yYy1zdXBwb3J0KVwiKVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50U2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmN1cnJlbnRTZWxlY3Rpb25baV1cclxuXHRcdFx0XHRcdGNvbnN0IGN1cnNvclBvcyA9IGNtLmdldEN1cnNvcigpXHJcblx0XHRcdFx0XHRpZiAoc2VsZWN0aW9uLmhlYWQubGluZSA9PSBjdXJzb3JQb3MubGluZSAmJiBzZWxlY3Rpb24uaGVhZC5jaCA9PSBjdXJzb3JQb3MuY2gpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJSRVNPTFZFRDogU2VsZWN0aW9uIG1hdGNoaW5nIGN1cnNvciBmb3VuZC4gKG9ic2lkaWFuLXZpbXJjLXN1cHBvcnQpXCIpXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRTZWxlY3Rpb24gPSBzZWxlY3Rpb25cclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGN1cnJlbnRTZWxlY3Rpb24uYW5jaG9yID09IGN1cnJlbnRTZWxlY3Rpb24uaGVhZCkge1xyXG5cdFx0XHRcdC8vIE5vIHJhbmdlIG9mIHNlbGVjdGVkIHRleHQsIHNvIHNlbGVjdCB3b3JkLlxyXG5cdFx0XHRcdGxldCB3b3JkUmFuZ2UgPSBjbS5maW5kV29yZEF0KGN1cnJlbnRTZWxlY3Rpb24uYW5jaG9yKVxyXG5cdFx0XHRcdGxldCBjdXJyVGV4dCA9IGNtLmdldFJhbmdlKHdvcmRSYW5nZS5mcm9tKCksIHdvcmRSYW5nZS50bygpKVxyXG5cdFx0XHRcdGNtLnJlcGxhY2VSYW5nZShiZWdpbm5pbmcgKyBjdXJyVGV4dCArIGVuZGluZywgd29yZFJhbmdlLmZyb20oKSwgd29yZFJhbmdlLnRvKCkpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGV0IGN1cnJUZXh0ID0gY20uZ2V0UmFuZ2UoY3VycmVudFNlbGVjdGlvbi5mcm9tKCksIGN1cnJlbnRTZWxlY3Rpb24udG8oKSlcclxuXHRcdFx0XHRjbS5yZXBsYWNlUmFuZ2UoYmVnaW5uaW5nICsgY3VyclRleHQgKyBlbmRpbmcsIGN1cnJlbnRTZWxlY3Rpb24uZnJvbSgpLCBjdXJyZW50U2VsZWN0aW9uLnRvKCkpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoXCJzdXJyb3VuZFwiLCBcIlwiLCBzdXJyb3VuZEZ1bmMpO1xyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeChcInBhc3RlaW50b1wiLCBcIlwiLCAoY206IENvZGVNaXJyb3IuRWRpdG9yLCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHQvLyBVc2luZyB0aGUgcmVnaXN0ZXIgZm9yIHdoZW4gdGhpcy55YW5rVG9TeXN0ZW1DbGlwYm9hcmQgPT0gZmFsc2VcclxuXHRcdFx0c3Vycm91bmRGdW5jKGNtLCB7IGFyZ3M6IFtcIltcIiwgXCJdKFwiICsgdmltT2JqZWN0LmdldFJlZ2lzdGVyQ29udHJvbGxlcigpLmdldFJlZ2lzdGVyKCd5YW5rJykua2V5QnVmZmVyICsgXCIpXCJdIH0pXHJcblx0XHR9KVxyXG5cclxuXHRcdGxldCBjbUVkaXRvciA9IHRoaXMuZ2V0RWRpdG9yKHRoaXMuZ2V0QWN0aXZlVmlldygpKTtcclxuXHRcdC8vIEhhbmRsZSB0aGUgc3Vycm91bmQgZGlhbG9nIGlucHV0XHJcblx0XHR2YXIgc3Vycm91bmREaWFsb2dDYWxsYmFjayA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGlmICgoL15cXFsrJC8pLnRlc3QodmFsdWUpKSB7IC8vIGNoZWNrIGZvciAxLWluZiBbIGFuZCBtYXRjaCB0aGVtIHdpdGggXVxyXG5cdFx0XHRcdHN1cnJvdW5kRnVuYyhjbUVkaXRvciwgeyBhcmdzOiBbdmFsdWUsIFwiXVwiLnJlcGVhdCh2YWx1ZS5sZW5ndGgpXSB9KVxyXG5cdFx0XHR9IGVsc2UgaWYgKCgvXlxcKCskLykudGVzdCh2YWx1ZSkpIHsgLy8gY2hlY2sgZm9yIDEtaW5mICggYW5kIG1hdGNoIHRoZW0gd2l0aCApXHJcblx0XHRcdFx0c3Vycm91bmRGdW5jKGNtRWRpdG9yLCB7IGFyZ3M6IFt2YWx1ZSwgXCIpXCIucmVwZWF0KHZhbHVlLmxlbmd0aCldIH0pXHJcblx0XHRcdH0gZWxzZSBpZiAoKC9eXFx7KyQvKS50ZXN0KHZhbHVlKSkgeyAvLyBjaGVjayBmb3IgMS1pbmYgeyBhbmQgbWF0Y2ggdGhlbSB3aXRoIH1cclxuXHRcdFx0XHRzdXJyb3VuZEZ1bmMoY21FZGl0b3IsIHsgYXJnczogW3ZhbHVlLCBcIn1cIi5yZXBlYXQodmFsdWUubGVuZ3RoKV0gfSlcclxuXHRcdFx0fSBlbHNlIHsgLy8gRWxzZSwganVzdCBwdXQgaXQgYmVmb3JlIGFuZCBhZnRlci5cclxuXHRcdFx0XHRzdXJyb3VuZEZ1bmMoY21FZGl0b3IsIHsgYXJnczogW3ZhbHVlLCB2YWx1ZV0gfSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVPcGVyYXRvcihcInN1cnJvdW5kT3BlcmF0b3JcIiwgKGNtOiBhbnksIGFyZ3M6IGFueSwgcmFuZ2VzOiBhbnkpID0+IHtcclxuXHRcdFx0bGV0IHAgPSBcIjxzcGFuPlN1cnJvdW5kIHdpdGg6IDxpbnB1dCB0eXBlPSd0ZXh0Jz48L3NwYW4+XCJcclxuXHRcdFx0Y20ub3BlbkRpYWxvZyhwLCBzdXJyb3VuZERpYWxvZ0NhbGxiYWNrLCB7IGJvdHRvbTogdHJ1ZSwgc2VsZWN0VmFsdWVPbk9wZW46IGZhbHNlIH0pXHJcblx0XHR9KVxyXG5cclxuXHJcblx0XHR2aW1PYmplY3QubWFwQ29tbWFuZChcIjxBLXk+c1wiLCBcIm9wZXJhdG9yXCIsIFwic3Vycm91bmRPcGVyYXRvclwiKVxyXG5cclxuXHR9XHJcblxyXG5cdGNhcHR1cmVZYW5rQnVmZmVyKCkge1xyXG5cdFx0aWYgKHRoaXMueWFua1RvU3lzdGVtQ2xpcGJvYXJkKSB7XHJcblx0XHRcdGxldCBjdXJyZW50QnVmZmVyID0gQ29kZU1pcnJvci5WaW0uZ2V0UmVnaXN0ZXJDb250cm9sbGVyKCkuZ2V0UmVnaXN0ZXIoJ3lhbmsnKS5rZXlCdWZmZXI7XHJcblx0XHRcdGlmIChjdXJyZW50QnVmZmVyICE9IHRoaXMubGFzdFlhbmtCdWZmZXIpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5sYXN0WWFua0J1ZmZlci5sZW5ndGggPiAwICYmIGN1cnJlbnRCdWZmZXIubGVuZ3RoID4gMCAmJiBjdXJyZW50QnVmZmVyWzBdKSB7XHJcblx0XHRcdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjdXJyZW50QnVmZmVyWzBdKTtcclxuXHRcdFx0XHRcdG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLmxhc3RTeXN0ZW1DbGlwYm9hcmQgPSB2YWx1ZTsgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubGFzdFlhbmtCdWZmZXIgPSBjdXJyZW50QnVmZmVyO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgY3VycmVudENsaXBib2FyZCA9IG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdGlmICh2YWx1ZSAhPSB0aGlzLmxhc3RTeXN0ZW1DbGlwYm9hcmQpIHtcclxuXHRcdFx0XHRcdGxldCB5YW5rUmVnaXN0ZXIgPSBDb2RlTWlycm9yLlZpbS5nZXRSZWdpc3RlckNvbnRyb2xsZXIoKS5nZXRSZWdpc3RlcigneWFuaycpXHJcblx0XHRcdFx0XHR5YW5rUmVnaXN0ZXIuc2V0VGV4dCh2YWx1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLmxhc3RZYW5rQnVmZmVyID0geWFua1JlZ2lzdGVyLmtleUJ1ZmZlcjtcclxuXHRcdFx0XHRcdHRoaXMubGFzdFN5c3RlbUNsaXBib2FyZCA9IHZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByZXBhcmVDaG9yZERpc3BsYXkoKSB7XHJcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5kaXNwbGF5Q2hvcmQpIHtcclxuXHRcdFx0Ly8gQWRkIHN0YXR1cyBiYXIgaXRlbVxyXG5cdFx0XHR0aGlzLnZpbUNob3JkU3RhdHVzQmFyID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XHJcblxyXG5cdFx0XHQvLyBNb3ZlIHZpbUNob3JkU3RhdHVzQmFyIHRvIHRoZSBsZWZ0bW9zdCBwb3NpdGlvbiBhbmQgY2VudGVyIGl0LlxyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy52aW1DaG9yZFN0YXR1c0Jhci5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHR0aGlzLnZpbUNob3JkU3RhdHVzQmFyLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMudmltQ2hvcmRTdGF0dXNCYXIsIHBhcmVudC5maXJzdENoaWxkKTtcclxuXHRcdFx0dGhpcy52aW1DaG9yZFN0YXR1c0Jhci5zdHlsZS5tYXJnaW5SaWdodCA9IFwiYXV0b1wiO1xyXG5cclxuXHRcdFx0bGV0IGNtRWRpdG9yID0gdGhpcy5nZXRFZGl0b3IodGhpcy5nZXRBY3RpdmVWaWV3KCkpO1xyXG5cdFx0XHQvLyBTZWUgaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9kb2MvbWFudWFsLmh0bWwjdmltYXBpX2V2ZW50cyBmb3IgZXZlbnRzLlxyXG5cdFx0XHRDb2RlTWlycm9yLm9uKGNtRWRpdG9yLCBcInZpbS1rZXlwcmVzc1wiLCBhc3luYyAodmltS2V5OiBhbnkpID0+IHtcclxuXHRcdFx0XHRpZiAodmltS2V5ICE9IFwiPEVzYz5cIikgeyAvLyBUT0RPIGZpZ3VyZSBvdXQgd2hhdCB0byBhY3R1YWxseSBsb29rIGZvciB0byBleGl0IGNvbW1hbmRzLlxyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50S2V5Q2hvcmQucHVzaCh2aW1LZXkpO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY3VzdG9tVmltS2V5YmluZHNbdGhpcy5jdXJyZW50S2V5Q2hvcmQuam9pbihcIlwiKV0gIT0gdW5kZWZpbmVkKSB7IC8vIEN1c3RvbSBrZXkgY2hvcmQgZXhpc3RzLlxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gQnVpbGQga2V5Y2hvcmQgdGV4dFxyXG5cdFx0XHRcdGxldCB0ZW1wUyA9IFwiXCI7XHJcblx0XHRcdFx0Zm9yIChjb25zdCBzIG9mIHRoaXMuY3VycmVudEtleUNob3JkKSB7XHJcblx0XHRcdFx0XHR0ZW1wUyArPSBcIiBcIiArIHM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0ZW1wUyAhPSBcIlwiKSB7XHJcblx0XHRcdFx0XHR0ZW1wUyArPSBcIi1cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52aW1DaG9yZFN0YXR1c0Jhci5zZXRUZXh0KHRlbXBTKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdENvZGVNaXJyb3Iub24oY21FZGl0b3IsIFwidmltLWNvbW1hbmQtZG9uZVwiLCBhc3luYyAocmVhc29uOiBhbnkpID0+IHsgLy8gUmVzZXQgZGlzcGxheVxyXG5cdFx0XHRcdHRoaXMudmltQ2hvcmRTdGF0dXNCYXIuc2V0VGV4dChcIlwiKTtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByZXBhcmVWaW1Nb2RlRGlzcGxheSgpIHtcclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmRpc3BsYXlWaW1Nb2RlKSB7XHJcblx0XHRcdHRoaXMudmltU3RhdHVzQmFyID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCkgLy8gQWRkIHN0YXR1cyBiYXIgaXRlbVxyXG5cdFx0XHR0aGlzLnZpbVN0YXR1c0Jhci5zZXRUZXh0KHZpbVN0YXR1cy5ub3JtYWwpIC8vIEluaXQgdGhlIHZpbVN0YXR1c0JhciB3aXRoIG5vcm1hbCBtb2RlXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWZpbmVGaXhlZExheW91dChjbTogQ29kZU1pcnJvci5FZGl0b3IpIHtcclxuXHRcdGNtLm9uKCdrZXlkb3duJywgKGluc3RhbmNlOiBDb2RlTWlycm9yLkVkaXRvciwgZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuZml4ZWROb3JtYWxNb2RlTGF5b3V0KSB7XHJcblx0XHRcdFx0Y29uc3Qga2V5TWFwID0gdGhpcy5zZXR0aW5ncy5jYXB0dXJlZEtleWJvYXJkTWFwO1xyXG5cdFx0XHRcdGlmICghdGhpcy5pc0luc2VydE1vZGUgJiYgIWV2LnNoaWZ0S2V5ICYmXHJcblx0XHRcdFx0XHRldi5jb2RlIGluIGtleU1hcCAmJiBldi5rZXkgIT0ga2V5TWFwW2V2LmNvZGVdKSB7XHJcblx0XHRcdFx0XHRDb2RlTWlycm9yLlZpbS5oYW5kbGVLZXkoaW5zdGFuY2UsIGtleU1hcFtldi5jb2RlXSwgJ21hcHBpbmcnKTtcclxuXHRcdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcblx0cGx1Z2luOiBWaW1yY1BsdWdpbjtcclxuXHJcblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogVmltcmNQbHVnaW4pIHtcclxuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG5cdH1cclxuXHJcblx0ZGlzcGxheSgpOiB2b2lkIHtcclxuXHRcdGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnVmltcmMgU2V0dGluZ3MnIH0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnVmltcmMgZmlsZSBuYW1lJylcclxuXHRcdFx0LnNldERlc2MoJ1JlbGF0aXZlIHRvIHZhdWx0IGRpcmVjdG9yeSAocmVxdWlyZXMgcmVzdGFydCknKVxyXG5cdFx0XHQuYWRkVGV4dCgodGV4dCkgPT4ge1xyXG5cdFx0XHRcdHRleHQuc2V0UGxhY2Vob2xkZXIoREVGQVVMVF9TRVRUSU5HUy52aW1yY0ZpbGVOYW1lKTtcclxuXHRcdFx0XHR0ZXh0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbXJjRmlsZU5hbWUgfHwgREVGQVVMVF9TRVRUSU5HUy52aW1yY0ZpbGVOYW1lKTtcclxuXHRcdFx0XHR0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbXJjRmlsZU5hbWUgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnVmltIGNob3JkIGRpc3BsYXknKVxyXG5cdFx0XHQuc2V0RGVzYygnRGlzcGxheXMgdGhlIGN1cnJlbnQgY2hvcmQgdW50aWwgY29tcGxldGlvbi4gRXg6IFwiPFNwYWNlPiBmLVwiIChyZXF1aXJlcyByZXN0YXJ0KScpXHJcblx0XHRcdC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xyXG5cdFx0XHRcdHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXNwbGF5Q2hvcmQgfHwgREVGQVVMVF9TRVRUSU5HUy5kaXNwbGF5Q2hvcmQpO1xyXG5cdFx0XHRcdHRvZ2dsZS5vbkNoYW5nZSh2YWx1ZSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXNwbGF5Q2hvcmQgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnVmltIG1vZGUgZGlzcGxheScpXHJcblx0XHRcdC5zZXREZXNjKCdEaXNwbGF5cyB0aGUgY3VycmVudCB2aW0gbW9kZSAocmVxdWlyZXMgcmVzdGFydCknKVxyXG5cdFx0XHQuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcclxuXHRcdFx0XHR0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGlzcGxheVZpbU1vZGUgfHwgREVGQVVMVF9TRVRUSU5HUy5kaXNwbGF5VmltTW9kZSk7XHJcblx0XHRcdFx0dG9nZ2xlLm9uQ2hhbmdlKHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmRpc3BsYXlWaW1Nb2RlID0gdmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1VzZSBhIGZpeGVkIGtleWJvYXJkIGxheW91dCBmb3IgTm9ybWFsIG1vZGUnKVxyXG5cdFx0XHQuc2V0RGVzYygnRGVmaW5lIGEga2V5Ym9hcmQgbGF5b3V0IHRvIGFsd2F5cyB1c2Ugd2hlbiBpbiBOb3JtYWwgbW9kZSwgcmVnYXJkbGVzcyBvZiB0aGUgaW5wdXQgbGFuZ3VhZ2UgKGV4cGVyaW1lbnRhbCkuJylcclxuXHRcdFx0LmFkZEJ1dHRvbihhc3luYyAoYnV0dG9uKSA9PiB7XHJcblx0XHRcdFx0YnV0dG9uLnNldEJ1dHRvblRleHQoJ0NhcHR1cmUgY3VycmVudCBsYXlvdXQnKTtcclxuXHRcdFx0XHRidXR0b24ub25DbGljayhhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXB0dXJlZEtleWJvYXJkTWFwID0gYXdhaXQgdGhpcy5wbHVnaW4uY2FwdHVyZUtleWJvYXJkTGF5b3V0KCk7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XHJcblx0XHRcdFx0dG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmZpeGVkTm9ybWFsTW9kZUxheW91dCB8fCBERUZBVUxUX1NFVFRJTkdTLmZpeGVkTm9ybWFsTW9kZUxheW91dCk7XHJcblx0XHRcdFx0dG9nZ2xlLm9uQ2hhbmdlKGFzeW5jIHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmZpeGVkTm9ybWFsTW9kZUxheW91dCA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0aWYgKHZhbHVlICYmIE9iamVjdC5rZXlzKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhcHR1cmVkS2V5Ym9hcmRNYXApLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FwdHVyZWRLZXlib2FyZE1hcCA9IGF3YWl0IHRoaXMucGx1Z2luLmNhcHR1cmVLZXlib2FyZExheW91dCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pXHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOb3RpY2UiLCJNYXJrZG93blZpZXciLCJrZXlGcm9tQWNjZWxlcmF0b3IudG9LZXlFdmVudCIsIlBsdWdpbiIsIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FB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
