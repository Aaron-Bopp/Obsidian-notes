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
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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

var ObsidianCodeMirrorOptionsSettings = /** @class */ (function () {
    function ObsidianCodeMirrorOptionsSettings() {
        this.dynamicCursor = false;
        this.markSelection = false;
        this.activeLineOnSelect = false;
        this.enableCMinPreview = false;
        this.enablePrismJSStyling = false;
        this.editModeHideTokens = false;
        this.editModeClickHandler = false;
        this.showLineNums = false;
        this.copyButton = false;
        this.copyButtonOnPRE = false;
    }
    return ObsidianCodeMirrorOptionsSettings;
}());
var ObsidianCodeMirrorOptionsSettingsTab = /** @class */ (function (_super) {
    __extends(ObsidianCodeMirrorOptionsSettingsTab, _super);
    function ObsidianCodeMirrorOptionsSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    ObsidianCodeMirrorOptionsSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl("h2", { text: "CodeMirror Options" });
        new obsidian.Setting(containerEl)
            .setName("Hide Markdown Tokens")
            .setDesc("This mode emulates WYSIWYG in edit mode by hiding markdown tokens on inactive lines. This mode will tag all inactive lines \n       with .hmd-inactive-line and all hidden tokens with .hmd-hidden-token")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.editModeHideTokens).onChange(function (value) {
                _this.plugin.settings.editModeHideTokens = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.applyCodeMirrorOptions();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Edit Mode Click Handler")
            .setDesc("Currently supports clicking checkboxes in edit mode. Disable this is you encounter any issues with mouse clicks.")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.editModeClickHandler).onChange(function (value) {
                _this.plugin.settings.editModeClickHandler = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.applyCodeMirrorOptions();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Dynamic cursor size")
            .setDesc("When enabled, the cursor height will be determined by the max height of the entire line. \n         When disabled, the cursor's height is based on the height of the adjacent reference character.")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.dynamicCursor).onChange(function (value) {
                _this.plugin.settings.dynamicCursor = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.applyCodeMirrorOptions();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Style active selection")
            .setDesc("When enabled, selected text will be marked with the CSS class .CodeMirror-selectedtext. \n         Useful to force the styling of selected text when ::selection is not sufficient.")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.markSelection).onChange(function (value) {
                _this.plugin.settings.markSelection = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.applyCodeMirrorOptions();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Retain active line on selection")
            .setDesc("When enabled, text selection will not remove the .active-line class on the current line. \n         When disabled text selection on the active line will remove the .active-line class.")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.activeLineOnSelect).onChange(function (value) {
                _this.plugin.settings.activeLineOnSelect = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.applyCodeMirrorOptions();
            });
        });
        if (
        //@ts-ignore
        this.app.plugins.plugins["cm-editor-syntax-highlight-obsidian"]) {
            new obsidian.Setting(containerEl)
                .setName("Use CodeMirror for syntax highlighting in preview mode")
                .setDesc("This setting creates consistent highlighting between edit and preview by using CodeMirror to highlight in both modes. \n           Note: This setting requires the \"Editor Syntax Highlight\" plugin to function properly.")
                .addToggle(function (toggle) {
                return toggle.setValue(_this.plugin.settings.enableCMinPreview).onChange(function (value) {
                    _this.plugin.settings.enableCMinPreview = value;
                    _this.plugin.saveData(_this.plugin.settings);
                    _this.plugin.toggleHighlighting();
                });
            });
            new obsidian.Setting(containerEl)
                .setName("Experimental: Show line numbers for code blocks in preview mode")
                .setDesc("This setting will add line numbers to code blocks in preview mode.")
                .addToggle(function (toggle) {
                return toggle.setValue(_this.plugin.settings.showLineNums).onChange(function (value) {
                    _this.plugin.settings.showLineNums = value;
                    _this.plugin.saveData(_this.plugin.settings);
                    _this.plugin.toggleCodeBlockSettings();
                });
            });
            new obsidian.Setting(containerEl)
                .setName("Experimental: Enable copy button to code blocks in preview mode")
                .setDesc("This setting will add a copy button to the bottom left corner of code blocks in preview mode. The button will show up on code block hover.")
                .addToggle(function (toggle) {
                return toggle.setValue(_this.plugin.settings.copyButton).onChange(function (value) {
                    _this.plugin.settings.copyButton = value;
                    _this.plugin.saveData(_this.plugin.settings);
                    _this.plugin.toggleCodeBlockSettings();
                });
            });
            new obsidian.Setting(containerEl)
                .setName("Experimental: Enable copy button to all PRE blocks in preview mode")
                .setDesc("This setting will add a copy button to any PRE element. This could negatively impact certain plugins that render PRE blocks.")
                .addToggle(function (toggle) {
                return toggle.setValue(_this.plugin.settings.copyButtonOnPRE).onChange(function (value) {
                    _this.plugin.settings.copyButtonOnPRE = value;
                    _this.plugin.saveData(_this.plugin.settings);
                    _this.plugin.toggleCodeBlockSettings();
                });
            });
        }
        else {
            new obsidian.Setting(containerEl)
                .setName("Use CodeMirror for syntax highlighting in preview mode")
                .setDesc('Warning: Install the plugin "Editor Syntax Highlight" in order to use this feature')
                .setClass("cm-warning");
        }
        new obsidian.Setting(containerEl)
            .setName("Fallback: Unify the default prism.js code block styling")
            .setDesc("This setting is a fallback option if you do not want to inject CM into preview mode. \n         It will try and unify the prism.js colors to match CM as close as possible.")
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.enablePrismJSStyling).onChange(function (value) {
                _this.plugin.settings.enablePrismJSStyling = value;
                _this.plugin.saveData(_this.plugin.settings);
                // TODO: make this toggle styling properly
                _this.plugin.applyCodeMirrorOptions();
            });
        });
        containerEl.createEl("h4", {
            text: "To customize the syntax highlighting theme, \n             install the Style Settings plugin and explore the \"CodeMirror Options\" section",
        });
    };
    return ObsidianCodeMirrorOptionsSettingsTab;
}(obsidian.PluginSettingTab));

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, 0);
}

CodeMirror.runMode = function (string, modespec, callback, options) {
  var mode = CodeMirror.getMode(CodeMirror.defaults, modespec);
  var lineNumber = 1;
  if (callback.nodeType == 1) {
    var tabSize = (options && options.tabSize) || CodeMirror.defaults.tabSize;
    var lineNums = (options && options.lineNums) || false;
    var node = callback,
      col = 0;
    node.innerHTML = "";
    callback = function (text, style) {
      if (text == "\n") {
        if (lineNums) {
          lineNumber++; //increment line number
          var lineNum = document.createElement("span");
          lineNum.addClass("cm-linenumber");
          var content = document.createTextNode(leftFillNum(lineNumber, 2) + " ");
          lineNum.appendChild(content);
          node.appendChild(document.createTextNode(text));
          node.appendChild(lineNum);
        } else {
          node.appendChild(document.createTextNode(text));
        }
        col = 0;
        return;
      }
      var content = "";
      // replace tabs
      for (var pos = 0; ; ) {
        var idx = text.indexOf("\t", pos);
        if (idx == -1) {
          content += text.slice(pos);
          col += text.length - pos;
          break;
        } else {
          col += idx - pos;
          content += text.slice(pos, idx);
          var size = tabSize - (col % tabSize);
          col += size;
          for (var i = 0; i < size; ++i) content += " ";
          pos = idx + 1;
        }
      }

      if (style) {
        var sp = node.appendChild(document.createElement("span"));
        sp.className = "cm-" + style.replace(/ +/g, " cm-");
        sp.appendChild(document.createTextNode(content));
      } else {
        node.appendChild(document.createTextNode(content));
      }
    };
  }

  var lines = CodeMirror.splitLines(string),
    state = (options && options.state) || CodeMirror.startState(mode);
  var lineLength = lineNums && mode.name !== "yaml" ? lines.length - 1 : lines.length;
  for (var i = 0, e = lineLength; i < e; ++i) {
    if (i) callback("\n");
    var stream = new CodeMirror.StringStream(lines[i]);
    while (!stream.eol()) {
      var style = mode.token(stream, state);
      callback(stream.current(), style, i, stream.start);
      stream.start = stream.pos;
    }
  }
  if (lineNums) {
    var outputDiv = node;
    var firstLine = document.createElement("span");
    firstLine.addClass("cm-linenumber");
    var content = document.createTextNode(leftFillNum(1, 2) + " ");
    firstLine.appendChild(content);
    outputDiv?.insertBefore(firstLine, outputDiv.firstChild);
  }
};

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

CodeMirror.colorize = (function () {
  var isBlock = /^(p|li|div|h\\d|pre|blockquote|td)$/;

  function textContent(node, out) {
    if (node.nodeType == 3) return out.push(node.nodeValue);
    for (var ch = node.firstChild; ch; ch = ch.nextSibling) {
      textContent(ch, out);
      if (isBlock.test(node.nodeType)) out.push("\n");
    }
  }

  return function (collection, defaultMode, showLineNums = false) {
    if (!collection) collection = document.body.getElementsByTagName("pre");

    for (var i = 0; i < collection.length; ++i) {
      var node = collection[i];
      var mode = node.getAttribute("data-lang") || defaultMode;
      if (!mode) continue;

      var text = [];
      textContent(node, text);
      node.innerHTML = "";
      CodeMirror.runMode(text.join(""), mode, node, { lineNums: showLineNums });
      node.parentElement.className += " cm-s-obsidian";
    }
  };
})();

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// Because sometimes you need to mark the selected *text*.
//
// Adds an option 'styleSelectedText' which, when enabled, gives
// selected text the CSS class given as option value, or
// "CodeMirror-selectedtext" when the value is not a string.

(function(mod) {
    mod(CodeMirror);
})(function(CodeMirror) {

  CodeMirror.defineOption("styleSelectedText", false, function(cm, val, old) {
    var prev = old && old != CodeMirror.Init;
    if (val && !prev) {
      cm.state.markedSelection = [];
      cm.state.markedSelectionStyle = typeof val == "string" ? val : "CodeMirror-selectedtext";
      reset(cm);
      cm.on("cursorActivity", onCursorActivity);
      cm.on("change", onChange);
    } else if (!val && prev) {
      cm.off("cursorActivity", onCursorActivity);
      cm.off("change", onChange);
      clear(cm);
      cm.state.markedSelection = cm.state.markedSelectionStyle = null;
    }
  });

  function onCursorActivity(cm) {
    if (cm.state.markedSelection)
      cm.operation(function() { update(cm); });
  }

  function onChange(cm) {
    if (cm.state.markedSelection && cm.state.markedSelection.length)
      cm.operation(function() { clear(cm); });
  }

  var CHUNK_SIZE = 8;
  var Pos = CodeMirror.Pos;
  var cmp = CodeMirror.cmpPos;

  function coverRange(cm, from, to, addAt) {
    if (cmp(from, to) == 0) return;
    var array = cm.state.markedSelection;
    var cls = cm.state.markedSelectionStyle;
    for (var line = from.line;;) {
      var start = line == from.line ? from : Pos(line, 0);
      var endLine = line + CHUNK_SIZE, atEnd = endLine >= to.line;
      var end = atEnd ? to : Pos(endLine, 0);
      var mark = cm.markText(start, end, {className: cls});
      if (addAt == null) array.push(mark);
      else array.splice(addAt++, 0, mark);
      if (atEnd) break;
      line = endLine;
    }
  }

  function clear(cm) {
    var array = cm.state.markedSelection;
    for (var i = 0; i < array.length; ++i) array[i].clear();
    array.length = 0;
  }

  function reset(cm) {
    clear(cm);
    var ranges = cm.listSelections();
    for (var i = 0; i < ranges.length; i++)
      coverRange(cm, ranges[i].from(), ranges[i].to());
  }

  function update(cm) {
    if (!cm.somethingSelected()) return clear(cm);
    if (cm.listSelections().length > 1) return reset(cm);

    var from = cm.getCursor("start"), to = cm.getCursor("end");

    var array = cm.state.markedSelection;
    if (!array.length) return coverRange(cm, from, to);

    var coverStart = array[0].find(), coverEnd = array[array.length - 1].find();
    if (!coverStart || !coverEnd || to.line - from.line <= CHUNK_SIZE ||
        cmp(from, coverEnd.to) >= 0 || cmp(to, coverStart.from) <= 0)
      return reset(cm);

    while (cmp(from, coverStart.from) > 0) {
      array.shift().clear();
      coverStart = array[0].find();
    }
    if (cmp(from, coverStart.from) < 0) {
      if (coverStart.to.line - from.line < CHUNK_SIZE) {
        array.shift().clear();
        coverRange(cm, from, coverStart.to, 0);
      } else {
        coverRange(cm, from, coverStart.from, 0);
      }
    }

    while (cmp(to, coverEnd.to) < 0) {
      array.pop().clear();
      coverEnd = array[array.length - 1].find();
    }
    if (cmp(to, coverEnd.to) > 0) {
      if (to.line - coverEnd.from.line < CHUNK_SIZE) {
        array.pop().clear();
        coverRange(cm, coverEnd.from, to);
      } else {
        coverRange(cm, coverEnd.to, to);
      }
    }
  }
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
  mod(CodeMirror);
})(function (CodeMirror) {
  var WRAP_CLASS = "CodeMirror-activeline";
  var BACK_CLASS = "CodeMirror-activeline-background";
  var GUTT_CLASS = "CodeMirror-activeline-gutter";

  CodeMirror.defineOption("styleActiveLine", false, function (cm, val, old) {
    var prev = old == CodeMirror.Init ? false : old;
    if (val == prev) return;
    if (prev) {
      cm.off("beforeSelectionChange", selectionChange);
      clearActiveLines(cm);
      delete cm.state.activeLines;
    }
    if (val) {
      cm.state.activeLines = [];
      updateActiveLines(cm, cm.listSelections());
      cm.on("beforeSelectionChange", selectionChange);
      cm.refresh();
    }
  });

  function clearActiveLines(cm) {
    for (var i = 0; i < cm.state.activeLines.length; i++) {
      cm.removeLineClass(cm.state.activeLines[i], "wrap", WRAP_CLASS);
      cm.removeLineClass(cm.state.activeLines[i], "background", BACK_CLASS);
      cm.removeLineClass(cm.state.activeLines[i], "gutter", GUTT_CLASS);
    }
  }

  function sameArray(a, b) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++) if (a[i] != b[i]) return false;
    return true;
  }

  function updateActiveLines(cm, ranges) {
    var active = [];
    for (var i = 0; i < ranges.length; i++) {
      var range = ranges[i];
      var option = cm.getOption("styleActiveLine");
      // if (typeof option == "object" && option.nonEmpty ? range.anchor.line != range.head.line : !range.empty())
      // nothingislost: modified the nonEmpty option to support multiple selected lines
      if (typeof option == "object" && option.nonEmpty ? false : !range.empty()) continue;
      // nothingislost: support forwards and backwards multi line selections
      if (range.head.line > range.anchor.line) {
        var start = range.anchor.line,
          end = range.head.line;
      } else {
        var start = range.head.line,
          end = range.anchor.line;
      }
      // nothingislost: get the visual start for all lines in the selection
      for (var j = start; j < end + 1; ++j) {
        var line = cm.getLineHandleVisualStart(j);
        if (active[active.length - 1] != line) active.push(line);
      }
    }
    if (sameArray(cm.state.activeLines, active)) return;
    cm.operation(function () {
      clearActiveLines(cm);
      for (var i = 0; i < active.length; i++) {
        cm.addLineClass(active[i], "wrap", WRAP_CLASS);
        cm.addLineClass(active[i], "background", BACK_CLASS);
        cm.addLineClass(active[i], "gutter", GUTT_CLASS);
      }
      cm.state.activeLines = active;
    });
  }

  function selectionChange(cm, sel) {
    updateActiveLines(cm, sel.ranges);
  }
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

createCommonjsModule(function (module) {
/*!
 * HyperMD, copyright (c) by laobubu
 * Distributed under an MIT license: http://laobubu.net/HyperMD/LICENSE
 *
 * Break the Wall between writing and preview, in a Markdown Editor.
 *
 * HyperMD makes Markdown editor on web WYSIWYG, based on CodeMirror
 *
 * Homepage: http://laobubu.net/HyperMD/
 * Issues: https://github.com/laobubu/HyperMD/issues
 */
(function (global, factory) {
  (global = typeof globalThis !== "undefined" ? globalThis : global || self),
    factory((global.HyperMD = {}), global.CodeMirror);
})(commonjsGlobal, function (exports, CodeMirror) {

  /**
   * Provides some common PolyFill
   *
   * @internal Part of HyperMD core.
   *
   * You shall NOT import this file; please import "core" instead
   */
  if (typeof Object["assign"] != "function") {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) {
        var arguments$1 = arguments;

        if (target == null) {
          // TypeError if undefined or null
          throw new TypeError("Cannot convert undefined or null to object");
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments$1[index];
          if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true,
    });
  }

  /**
   * Provides some universal utils
   *
   * @internal Part of HyperMD core.
   *
   * You shall NOT import this file; please import "core" instead
   */
  /** Simple FlipFlop */
  var FlipFlop = /** @class */ (function () {
    /**
     * Simple FlipFlop
     *
     * @param {function} on_cb see FlipFlop.ON(callback)
     * @param {function} off_cb see FlipFlop.OFF(callback)
     * @param {T} [state] initial state. default: false (boolean)
     * @param {string} [subkey] if get an object, use this key to retrive status. default: "enabled"
     */
    function FlipFlop(on_cb, off_cb, state, subkey) {
      if (state === void 0) {
        state = false;
      }
      if (subkey === void 0) {
        subkey = "enabled";
      }
      this.on_cb = on_cb;
      this.off_cb = off_cb;
      this.state = state;
      this.subkey = subkey;
    }
    /** set a callback when state is changed and is **NOT** `null`, `false` etc. */
    FlipFlop.prototype.ON = function (callback) {
      this.on_cb = callback;
      return this;
    };
    /** set a callback when state is set to `null`, `false` etc. */
    FlipFlop.prototype.OFF = function (callback) {
      this.off_cb = callback;
      return this;
    };
    /**
     * Update FlipFlop status, and trig callback function if needed
     *
     * @param {T|object} state new status value. can be a object
     * @param {boolean} [toBool] convert retrived value to boolean. default: false
     */
    FlipFlop.prototype.set = function (state, toBool) {
      var newVal = typeof state === "object" && state ? state[this.subkey] : state;
      if (toBool) {
        newVal = !!newVal;
      }
      if (newVal === this.state) {
        return;
      }
      if ((this.state = newVal)) {
        this.on_cb && this.on_cb(newVal);
      } else {
        this.off_cb && this.off_cb(newVal);
      }
    };
    FlipFlop.prototype.setBool = function (state) {
      return this.set(state, true);
    };
    /**
     * Bind to a object's property with `Object.defineProperty`
     * so that you may set state with `obj.enable = true`
     */
    FlipFlop.prototype.bind = function (obj, key, toBool) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var _this = this;
      Object.defineProperty(obj, key, {
        get: function () {
          return _this.state;
        },
        set: function (v) {
          return _this.set(v, toBool);
        },
        configurable: true,
        enumerable: true,
      });
      return this;
    };
    return FlipFlop;
  })();
  /** async run a function, and retry up to N times until it returns true */
  function tryToRun(fn, times, onFailed) {
    times = ~~times || 5;
    var delayTime = 250;
    function nextCycle() {
      if (!times--) {
        if (onFailed) {
          onFailed();
        }
        return;
      }
      try {
        if (fn()) {
          return;
        }
      } catch (e) {}
      setTimeout(nextCycle, delayTime);
      delayTime *= 2;
    }
    setTimeout(nextCycle, 0);
  }
  /**
   * make a debounced function
   *
   * @param {Function} fn
   * @param {number} delay in ms
   */
  function debounce(fn, delay) {
    var deferTask = null;
    var notClearBefore = 0;
    var run = function () {
      fn();
      deferTask = 0;
    };
    var ans = function () {
      var nowTime = +new Date();
      if (deferTask) {
        if (nowTime < notClearBefore) {
          return;
        } else {
          clearTimeout(deferTask);
        }
      }
      deferTask = setTimeout(run, delay);
      notClearBefore = nowTime + 100; // allow 100ms error
    };
    ans.stop = function () {
      if (!deferTask) {
        return;
      }
      clearTimeout(deferTask);
      deferTask = 0;
    };
    return ans;
  }
  /**
   * addClass / removeClass etc.
   *
   * using CodeMirror's (although they're legacy API)
   */
  var addClass = CodeMirror.addClass;
  var rmClass = CodeMirror.rmClass;
  var contains = CodeMirror.contains;
  /**
   * a fallback for new Array(count).fill(data)
   */
  function repeat(item, count) {
    var ans = new Array(count);
    if (ans["fill"]) {
      ans["fill"](item);
    } else {
      for (var i = 0; i < count; i++) {
        ans[i] = item;
      }
    }
    return ans;
  }
  function repeatStr(item, count) {
    var ans = "";
    while (count-- > 0) {
      ans += item;
    }
    return ans;
  }
  /**
   * Visit element nodes and their children
   */
  function visitElements(seeds, handler) {
    var queue = [seeds],
      tmp;
    while ((tmp = queue.shift())) {
      for (var i = 0; i < tmp.length; i++) {
        var el = tmp[i];
        if (!el || el.nodeType != Node.ELEMENT_NODE) {
          continue;
        }
        handler(el);
        if (el.children && el.children.length > 0) {
          queue.push(el.children);
        }
      }
    }
  }
  /**
   * A lazy and simple Element size watcher. NOT WORK with animations
   */
  function watchSize(el, onChange, needPoll) {
    var _a = el.getBoundingClientRect(),
      width = _a.width,
      height = _a.height;
    /** check size and trig onChange */
    var check = debounce(function () {
      var rect = el.getBoundingClientRect();
      var newWidth = rect.width,
        newHeight = rect.height;
      if (width != newWidth || height != newHeight) {
        onChange(newWidth, newHeight, width, height);
        width = newWidth;
        height = newHeight;
        setTimeout(check, 200); // maybe changed again later?
      }
    }, 100);
    var nextTimer = null;
    function pollOnce() {
      if (nextTimer) {
        clearTimeout(nextTimer);
      }
      if (!stopped) {
        nextTimer = setTimeout(pollOnce, 200);
      }
      check();
    }
    var stopped = false;
    function stop() {
      stopped = true;
      check.stop();
      if (nextTimer) {
        clearTimeout(nextTimer);
        nextTimer = null;
      }
      for (var i = 0; i < eventBinded.length; i++) {
        eventBinded[i][0].removeEventListener(eventBinded[i][1], check, false);
      }
    }
    var eventBinded = [];
    function bindEvents(el) {
      var tagName = el.tagName;
      var computedStyle = getComputedStyle(el);
      var getStyle = function (name) {
        return computedStyle.getPropertyValue(name) || "";
      };
      if (getStyle("resize") != "none") {
        needPoll = true;
      }
      // size changes if loaded
      if (/^(?:img|video)$/i.test(tagName)) {
        el.addEventListener("load", check, false);
        el.addEventListener("error", check, false);
      } else if (/^(?:details|summary)$/i.test(tagName)) {
        el.addEventListener("click", check, false);
      }
    }
    if (!needPoll) {
      visitElements([el], bindEvents);
    }
    // bindEvents will update `needPoll`
    if (needPoll) {
      nextTimer = setTimeout(pollOnce, 200);
    }
    return {
      check: check,
      stop: stop,
    };
  }
  function makeSymbol(name) {
    if (typeof Symbol === "function") {
      return Symbol(name);
    }
    return "_\n" + name + "\n_" + Math.floor(Math.random() * 0xffff).toString(16);
  }

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

  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };

  /**
   * Ready-to-use functions that powers up your Markdown editor
   *
   * @internal Part of HyperMD core.
   *
   * You shall NOT import this file; please import "core" instead
   */
  // if (HyperMD_Mark in editor), the editor was a HyperMD mode at least once
  var HyperMD_Mark = "__hypermd__";
  /**
   * The default configuration that used by `HyperMD.fromTextArea`
   *
   * Addons may update this object freely!
   */
  var suggestedEditorConfig = {
    lineNumbers: true,
    lineWrapping: true,
    theme: "light",
    mode: "text/x-hypermd",
    tabSize: 4,
    autoCloseBrackets: true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "HyperMD-goback"],
  };
  /**
   * Editor Options that disable HyperMD WYSIWYG visual effects.
   * These option will be applied when user invoke `switchToNormal`.
   *
   * Addons about visual effects, shall update this object!
   */
  var normalVisualConfig = {
    theme: "default",
  };
  /**
   * Initialize an editor from a <textarea>
   * Calling `CodeMirror.fromTextArea` with recommended HyperMD options
   *
   * @see CodeMirror.fromTextArea
   *
   * @param {HTMLTextAreaElement} textArea
   * @param {object} [config]
   * @returns {cm_t}
   */
  function fromTextArea(textArea, config) {
    var final_config = __assign(__assign({}, suggestedEditorConfig), config);
    var cm = CodeMirror.fromTextArea(textArea, final_config);
    cm[HyperMD_Mark] = true;
    return cm;
  }
  function switchToNormal(editor, options_or_theme) {
    // this CodeMirror editor has never been in HyperMD mode. `switchToNormal` is meanless
    if (!editor[HyperMD_Mark]) {
      return;
    }
    if (typeof options_or_theme === "string") {
      options_or_theme = { theme: options_or_theme };
    }
    var opt = __assign(
      __assign(__assign({}, normalVisualConfig), { theme: editor.getOption("theme") }),
      options_or_theme
    );
    for (var key in opt) {
      editor.setOption(key, opt[key]);
    }
  }
  function switchToHyperMD(editor, options_or_theme) {
    if (typeof options_or_theme === "string") {
      options_or_theme = { theme: options_or_theme };
    }
    var opt = {};
    if (HyperMD_Mark in editor) {
      // has been HyperMD mode once. Only modify visual-related options
      for (var key in normalVisualConfig) {
        opt[key] = suggestedEditorConfig[key];
      }
      Object.assign(opt, { theme: editor.getOption("theme") }, options_or_theme);
    } else {
      // this CodeMirror editor is new to HyperMD
      Object.assign(opt, suggestedEditorConfig, { theme: editor.getOption("theme") }, options_or_theme);
      editor[HyperMD_Mark] = true;
    }
    for (var key in opt) {
      editor.setOption(key, opt[key]);
    }
  }

  /**
    @internal DO NOT IMPORT THIS MODULE!
              If you want to use this module, import it from `core`:

                  import { cm_internal } from "../core"

    The following few functions are from CodeMirror's source code.

    MIT License

    Copyright (C) 2017 by Marijn Haverbeke <marijnh@gmail.com> and others

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

    */
  /**
   * Find the view element corresponding to a given line. Return null when the line isn't visible.
   *
   * @see codemirror\src\measurement\position_measurement.js 5.37.0
   * @param n lineNo
   */
  function findViewIndex(cm, n) {
    if (n >= cm.display.viewTo) {
      return null;
    }
    n -= cm.display.viewFrom;
    if (n < 0) {
      return null;
    }
    var view = cm.display.view;
    for (var i = 0; i < view.length; i++) {
      n -= view[i].size;
      if (n < 0) {
        return i;
      }
    }
  }
  /**
   * Find a line view that corresponds to the given line number.
   *
   * @see codemirror\src\measurement\position_measurement.js 5.37.0
   */
  function findViewForLine(cm, lineN) {
    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo) {
      return cm.display.view[findViewIndex(cm, lineN)];
    }
    var ext = cm.display.externalMeasured;
    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size) {
      return ext;
    }
  }
  /**
   * Find a line map (mapping character offsets to text nodes) and a
   * measurement cache for the given line number. (A line view might
   * contain multiple lines when collapsed ranges are present.)
   *
   * @see codemirror\src\measurement\position_measurement.js 5.37.0
   */
  function mapFromLineView(lineView, line, lineN) {
    if (lineView.line == line) {
      return {
        map: lineView.measure.map,
        cache: lineView.measure.cache,
        before: false,
      };
    }
    for (var i = 0; i < lineView.rest.length; i++) {
      if (lineView.rest[i] == line) {
        return {
          map: lineView.measure.maps[i],
          cache: lineView.measure.caches[i],
          before: false,
        };
      }
    }
    for (var i = 0; i < lineView.rest.length; i++) {
      if (lineView.rest[i].lineNo() > lineN) {
        return {
          map: lineView.measure.maps[i],
          cache: lineView.measure.caches[i],
          before: true,
        };
      }
    }
  }

  var cm_internal = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    findViewIndex: findViewIndex,
    findViewForLine: findViewForLine,
    mapFromLineView: mapFromLineView,
  });

  /**
   * CodeMirror-related utils
   *
   * @internal Part of HyperMD core.
   *
   * You shall NOT import this file; please import "core" instead
   */
  /**
   * Useful tool to seek for tokens
   *
   *     var seeker = new TokenSeeker(cm)
   *     seeker.setPos(0, 0) // set to line 0, char 0
   *     var ans = seeker.findNext(/fomratting-em/)
   *
   */
  var TokenSeeker = /** @class */ (function () {
    function TokenSeeker(cm) {
      this.cm = cm;
    }
    TokenSeeker.prototype.findNext = function (condition, varg, since) {
      var lineNo = this.lineNo;
      var tokens = this.lineTokens;
      var token = null;
      var i_token = this.i_token + 1;
      var maySpanLines = false;
      if (varg === true) {
        maySpanLines = true;
      } else if (typeof varg === "number") {
        i_token = varg;
      }
      if (since) {
        if (since.line > lineNo) {
          i_token = tokens.length; // just ignore current line
        } else if (since.line < lineNo);
        else {
          for (; i_token < tokens.length; i_token++) {
            if (tokens[i_token].start >= since.ch) {
              break;
            }
          }
        }
      }
      for (; i_token < tokens.length; i_token++) {
        var token_tmp = tokens[i_token];
        if (typeof condition === "function" ? condition(token_tmp, tokens, i_token) : condition.test(token_tmp.type)) {
          token = token_tmp;
          break;
        }
      }
      if (!token && maySpanLines) {
        var cm_1 = this.cm;
        var startLine = Math.max(since ? since.line : 0, lineNo + 1);
        cm_1.eachLine(startLine, cm_1.lastLine() + 1, function (line_i) {
          lineNo = line_i.lineNo();
          tokens = cm_1.getLineTokens(lineNo);
          i_token = 0;
          if (since && lineNo === since.line) {
            for (; i_token < tokens.length; i_token++) {
              if (tokens[i_token].start >= since.ch) {
                break;
              }
            }
          }
          for (; i_token < tokens.length; i_token++) {
            var token_tmp = tokens[i_token];
            if (
              typeof condition === "function" ? condition(token_tmp, tokens, i_token) : condition.test(token_tmp.type)
            ) {
              token = token_tmp;
              return true; // stop `eachLine`
            }
          }
        });
      }
      return token ? { lineNo: lineNo, token: token, i_token: i_token } : null;
    };
    TokenSeeker.prototype.findPrev = function (condition, varg, since) {
      var lineNo = this.lineNo;
      var tokens = this.lineTokens;
      var token = null;
      var i_token = this.i_token - 1;
      var maySpanLines = false;
      if (varg === true) {
        maySpanLines = true;
      } else if (typeof varg === "number") {
        i_token = varg;
      }
      if (since) {
        if (since.line < lineNo) {
          i_token = -1; // just ignore current line
        } else if (since.line > lineNo);
        else {
          for (; i_token < tokens.length; i_token++) {
            if (tokens[i_token].start >= since.ch) {
              break;
            }
          }
        }
      }
      if (i_token >= tokens.length) {
        i_token = tokens.length - 1;
      }
      for (; i_token >= 0; i_token--) {
        var token_tmp = tokens[i_token];
        if (typeof condition === "function" ? condition(token_tmp, tokens, i_token) : condition.test(token_tmp.type)) {
          token = token_tmp;
          break;
        }
      }
      if (!token && maySpanLines) {
        var cm = this.cm;
        var startLine = Math.min(since ? since.line : cm.lastLine(), lineNo - 1);
        var endLine = cm.firstLine();
        // cm.eachLine doesn't support reversed searching
        // use while... loop to iterate
        lineNo = startLine + 1;
        while (!token && endLine <= --lineNo) {
          cm.getLineHandle(lineNo);
          tokens = cm.getLineTokens(lineNo);
          i_token = 0;
          if (since && lineNo === since.line) {
            for (; i_token < tokens.length; i_token++) {
              if (tokens[i_token].start >= since.ch) {
                break;
              }
            }
          }
          if (i_token >= tokens.length) {
            i_token = tokens.length - 1;
          }
          for (; i_token >= 0; i_token--) {
            var token_tmp = tokens[i_token];
            if (
              typeof condition === "function" ? condition(token_tmp, tokens, i_token) : condition.test(token_tmp.type)
            ) {
              token = token_tmp;
              break; // FOUND token !
            }
          }
        }
      }
      return token ? { lineNo: lineNo, token: token, i_token: i_token } : null;
    };
    /**
     * return a range in which every token has the same style, or meet same condition
     */
    TokenSeeker.prototype.expandRange = function (style, maySpanLines) {
      var cm = this.cm;
      var isStyled;
      if (typeof style === "function") {
        isStyled = style;
      } else {
        if (typeof style === "string") {
          style = new RegExp("(?:^|\\s)" + style + "(?:\\s|$)");
        }
        isStyled = function (token) {
          return token ? style.test(token.type || "") : false;
        };
      }
      var from = {
        lineNo: this.lineNo,
        i_token: this.i_token,
        token: this.lineTokens[this.i_token],
      };
      var to = Object.assign({}, from);
      // find left
      var foundUnstyled = false,
        tokens = this.lineTokens,
        i = this.i_token;
      while (!foundUnstyled) {
        if (i >= tokens.length) {
          i = tokens.length - 1;
        }
        for (; i >= 0; i--) {
          var token = tokens[i];
          if (!isStyled(token, tokens, i)) {
            foundUnstyled = true;
            break;
          } else {
            from.i_token = i;
            from.token = token;
          }
        }
        if (foundUnstyled || !(maySpanLines && from.lineNo > cm.firstLine())) {
          break;
        } // found, or no more lines
        tokens = cm.getLineTokens(--from.lineNo);
        i = tokens.length - 1;
      }
      // find right
      var foundUnstyled = false,
        tokens = this.lineTokens,
        i = this.i_token;
      while (!foundUnstyled) {
        if (i < 0) {
          i = 0;
        }
        for (; i < tokens.length; i++) {
          var token = tokens[i];
          if (!isStyled(token, tokens, i)) {
            foundUnstyled = true;
            break;
          } else {
            to.i_token = i;
            to.token = token;
          }
        }
        if (foundUnstyled || !(maySpanLines && to.lineNo < cm.lastLine())) {
          break;
        } // found, or no more lines
        tokens = cm.getLineTokens(++to.lineNo);
        i = 0;
      }
      return { from: from, to: to };
    };
    TokenSeeker.prototype.setPos = function (line, ch, precise) {
      if (ch === void 0) {
        ch = line;
        line = this.line;
      } else if (typeof line === "number") {
        line = this.cm.getLineHandle(line);
      }
      var sameLine = line === this.line;
      var i_token = 0;
      if (precise || !sameLine) {
        this.line = line;
        if (!line) {
          // 👈 0xGG Team: This is sometimes null?
          return;
        }
        this.lineNo = line.lineNo();
        this.lineTokens = this.cm.getLineTokens(this.lineNo);
      } else {
        // try to speed-up seeking
        i_token = this.i_token;
        var token = this.lineTokens[i_token];
        if (token.start > ch) {
          i_token = 0;
        }
      }
      var tokens = this.lineTokens;
      for (; i_token < tokens.length; i_token++) {
        if (tokens[i_token].end > ch) {
          break;
        } // found
      }
      this.i_token = i_token;
    };
    /** get (current or idx-th) token */
    TokenSeeker.prototype.getToken = function (idx) {
      if (typeof idx !== "number") {
        idx = this.i_token;
      }
      return this.lineTokens[idx];
    };
    /** get (current or idx-th) token type. always return a string */
    TokenSeeker.prototype.getTokenType = function (idx) {
      if (typeof idx !== "number") {
        idx = this.i_token;
      }
      var t = this.lineTokens[idx];
      return (t && t.type) || "";
    };
    return TokenSeeker;
  })();
  /**
   * CodeMirror's `getLineTokens` might merge adjacent chars with same styles,
   * but this one won't.
   *
   * This one will consume more memory.
   *
   * @param {CodeMirror.LineHandle} line
   * @returns {string[]} every char's style
   */
  function getEveryCharToken(line) {
    var ans = new Array(line.text.length);
    var ss = line.styles;
    var i = 0;
    if (ss) {
      // CodeMirror already parsed this line. Use cache
      for (var j = 1; j < ss.length; j += 2) {
        var i_to = ss[j],
          s = ss[j + 1];
        while (i < i_to) {
          ans[i++] = s;
        }
      }
    } else {
      // Emmm... slow method
      var cm = line.parent.cm || line.parent.parent.cm || line.parent.parent.parent.cm;
      var ss_1 = cm.getLineTokens(line.lineNo());
      for (var j = 0; j < ss_1.length; j++) {
        var i_to = ss_1[j].end,
          s = ss_1[j].type;
        while (i < i_to) {
          ans[i++] = s;
        }
      }
    }
    return ans;
  }
  /**
   * return a range in which every char has the given style (aka. token type).
   * assuming char at `pos` already has the style.
   *
   * the result will NOT span lines.
   *
   * @param style aka. token type
   * @see TokenSeeker if you want to span lines
   */
  function expandRange(cm, pos, style) {
    var line = pos.line;
    var from = { line: line, ch: 0 };
    var to = { line: line, ch: pos.ch };
    var styleFn = typeof style === "function" ? style : false;
    var styleRE = !styleFn && new RegExp("(?:^|\\s)" + style + "(?:\\s|$)");
    var tokens = cm.getLineTokens(line);
    var iSince;
    for (iSince = 0; iSince < tokens.length; iSince++) {
      if (tokens[iSince].end >= pos.ch) {
        break;
      }
    }
    if (iSince === tokens.length) {
      return null;
    }
    for (var i = iSince; i < tokens.length; i++) {
      var token = tokens[i];
      if (styleFn ? styleFn(token) : styleRE.test(token.type)) {
        to.ch = token.end;
      } else {
        break;
      }
    }
    for (var i = iSince; i >= 0; i--) {
      var token = tokens[i];
      if (!(styleFn ? styleFn(token) : styleRE.test(token.type))) {
        from.ch = token.end;
        break;
      }
    }
    return { from: from, to: to };
  }
  /**
   * Get ordered range from `CodeMirror.Range`-like object or `[Position, Position]`
   *
   * In an ordered range, The first `Position` must NOT be after the second.
   */
  function orderedRange(range) {
    if ("anchor" in range) {
      range = [range.head, range.anchor];
    }
    if (CodeMirror.cmpPos(range[0], range[1]) > 0) {
      return [range[1], range[0]];
    } else {
      return [range[0], range[1]];
    }
  }
  /**
   * Check if two range has intersection.
   *
   * @param range1 ordered range 1  (start <= end)
   * @param range2 ordered range 2  (start <= end)
   */
  function rangesIntersect(range1, range2) {
    var from1 = range1[0],
      to1 = range1[1];
    var from2 = range2[0],
      to2 = range2[1];
    return !(CodeMirror.cmpPos(to1, from2) < 0 || CodeMirror.cmpPos(from1, to2) > 0);
  }

  /**
   * Post-process CodeMirror-mode-parsed lines, find the ranges
   *
   * for example, a parsed line `[**Hello** World](xxx.txt)` will gives you:
   *
   * 1. link from `[` to `)`
   * 2. bold text from `**` to another `**`
   */
  var LineSpanExtractor = /** @class */ (function () {
    function LineSpanExtractor(cm) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var _this = this;
      this.cm = cm;
      this.caches = []; // cache for each lines
      cm.on("change", function (cm, change) {
        var line = change.from.line;
        if (_this.caches.length > line) {
          _this.caches.splice(line);
        }
      });
    }
    LineSpanExtractor.prototype.getTokenTypes = function (token, prevToken) {
      var prevState = prevToken ? prevToken.state : {};
      var state = token.state;
      var styles = " " + token.type + " ";
      var ans = {
        // em
        em: state.em ? 1 /* IS_THIS_TYPE */ : prevState.em ? 2 /* LEAVING_THIS_TYPE */ : 0 /* NOTHING */,
        // strikethrough
        strikethrough: state.strikethrough
          ? 1 /* IS_THIS_TYPE */
          : prevState.strikethrough
          ? 2 /* LEAVING_THIS_TYPE */
          : 0 /* NOTHING */,
        // strong
        strong: state.strong ? 1 /* IS_THIS_TYPE */ : prevState.strong ? 2 /* LEAVING_THIS_TYPE */ : 0 /* NOTHING */,
        // mark
        mark: state.mark ? 1 /* IS_THIS_TYPE */ : prevState.mark ? 2 /* LEAVING_THIS_TYPE */ : 0 /* NOTHING */,
        // ins
        ins: state.ins ? 1 /* IS_THIS_TYPE */ : prevState.ins ? 2 /* LEAVING_THIS_TYPE */ : 0 /* NOTHING */,
        // sub
        sub: state.sub ? 1 /* IS_THIS_TYPE */ : prevState.sub ? 2 /* LEAVING_THIS_TYPE */ : 0 /* NOTHING */,
        // sup
        sup: state.sup ? 1 /* IS_THIS_TYPE */ : prevState.sup ? 2 /* LEAVING_THIS_TYPE */ : 0 /* NOTHING */,
        // code
        code: state.code ? 1 /* IS_THIS_TYPE */ : prevState.code ? 2 /* LEAVING_THIS_TYPE */ : 0 /* NOTHING */,
        // linkText
        linkText: state.linkText
          ? state.hmdLinkType === 3 /* NORMAL */ ||
            state.hmdLinkType === 7 /* BARELINK2 */ ||
            state.hmdLinkType === 4 /* WIKILINK */
            ? 1 /* IS_THIS_TYPE */
            : 0 /* NOTHING */
          : prevState.linkText
          ? 2 /* LEAVING_THIS_TYPE */
          : 0 /* NOTHING */,
        // linkHref
        linkHref:
          state.linkHref && !state.linkText
            ? 1 /* IS_THIS_TYPE */
            : !state.linkHref && !state.linkText && prevState.linkHref && !prevState.linkText
            ? 2 /* LEAVING_THIS_TYPE */
            : 0 /* NOTHING */,
        // task checkbox
        task:
          styles.indexOf(" formatting-task ") !== -1
            ? 1 /* IS_THIS_TYPE */ | 2 /* LEAVING_THIS_TYPE */
            : 0 /* NOTHING */,
        // hashtag
        hashtag: state.hmdHashtag
          ? 1 /* IS_THIS_TYPE */
          : prevState.hmdHashtag
          ? 2 /* LEAVING_THIS_TYPE */
          : 0 /* NOTHING */,
      };
      return ans;
    };
    /** get spans from a line and update the cache */
    LineSpanExtractor.prototype.extract = function (lineNo, precise) {
      if (!precise) {
        // maybe cache is valid?
        var cc = this.caches[lineNo];
        if (cc) {
          return cc;
        }
      }
      var tokens = this.cm.getLineTokens(lineNo);
      var lineText = this.cm.getLine(lineNo);
      var lineLength = lineText.length;
      var ans = [];
      var unclosed = {};
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        var types = this.getTokenTypes(token, tokens[i - 1]);
        for (var type in types) {
          var span = unclosed[type];
          if (types[type] & 1 /* IS_THIS_TYPE */) {
            // style is active
            if (!span) {
              // create a new span if needed
              span = {
                type: type,
                begin: token.start,
                end: lineLength,
                head: token,
                head_i: i,
                tail: tokens[tokens.length - 1],
                tail_i: tokens.length - 1,
                text: lineText.slice(token.start),
              };
              ans.push(span);
              unclosed[type] = span;
            }
          }
          if (types[type] & 2 /* LEAVING_THIS_TYPE */) {
            // a style is exiting
            if (span) {
              // close an unclosed span
              span.tail = token;
              span.tail_i = i;
              span.end = token.end;
              span.text = span.text.slice(0, span.end - span.begin);
              unclosed[type] = null;
            }
          }
        }
      }
      this.caches[lineNo] = ans;
      return ans;
    };
    LineSpanExtractor.prototype.findSpansAt = function (pos) {
      var spans = this.extract(pos.line);
      var ch = pos.ch;
      var ans = [];
      for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        if (span.begin > ch) {
          break;
        }
        if (ch >= span.begin && span.end >= ch) {
          ans.push(span);
        }
      }
      return ans;
    };
    LineSpanExtractor.prototype.findSpanWithTypeAt = function (pos, type) {
      var spans = this.extract(pos.line);
      var ch = pos.ch;
      for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        if (span.begin > ch) {
          break;
        }
        if (ch >= span.begin && span.end >= ch && span.type === type) {
          return span;
        }
      }
      return null;
    };
    return LineSpanExtractor;
  })();
  var extractor_symbol = makeSymbol("LineSpanExtractor");
  /**
   * Get a `LineSpanExtractor` to extract spans from CodeMirror parsed lines
   *
   * for example, a parsed line `[**Hello** World](xxx.txt)` will gives you:
   *
   * 1. link from `[` to `)`
   * 2. bold text from `**` to another `**`
   */
  function getLineSpanExtractor(cm) {
    if (extractor_symbol in cm) {
      return cm[extractor_symbol];
    }
    var inst = (cm[extractor_symbol] = new LineSpanExtractor(cm));
    return inst;
  }

  function updateCursorDisplay(cm, skipCacheCleaning) {
    if (!skipCacheCleaning) {
      var lvs = cm.display.view; // LineView s
      for (var lineView of lvs) {
        if (lineView.measure) lineView.measure.cache = {};
      }
    }
  
    setTimeout(function () {
      cm.display.input.showSelection(cm.display.input.prepareSelection());
    }, 60); // wait for css style
  }

  /**
   * Utils for HyperMD addons
   *
   * @internal Part of HyperMD core.
   *
   * You shall NOT import this file; please import "core" instead
   */
  var Addon = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function Addon(cm) {}
    return Addon;
  })();
  /** make a Singleton getter */
  function Getter(name, ClassCtor, defaultOption) {
    return function (cm) {
      if (!cm.hmd) {
        cm.hmd = {};
      }
      if (!cm.hmd[name]) {
        var inst = new ClassCtor(cm);
        cm.hmd[name] = inst;
        if (defaultOption) {
          for (var k in defaultOption) {
            inst[k] = defaultOption[k];
          }
        }
        return inst;
      }
      return cm.hmd[name];
    };
  }

  var addon = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Addon: Addon,
    Getter: Getter,
  });

  Object.defineProperty(exports, "cmpPos", {
    enumerable: true,
    get: function () {
      return CodeMirror.cmpPos;
    },
  });
  exports.Addon = addon;
  exports.FlipFlop = FlipFlop;
  exports.TokenSeeker = TokenSeeker;
  exports.addClass = addClass;
  exports.cm_internal = cm_internal;
  exports.contains = contains;
  exports.debounce = debounce;
  exports.updateCursorDisplay = updateCursorDisplay;
  exports.expandRange = expandRange;
  exports.fromTextArea = fromTextArea;
  exports.getEveryCharToken = getEveryCharToken;
  exports.getLineSpanExtractor = getLineSpanExtractor;
  exports.makeSymbol = makeSymbol;
  exports.normalVisualConfig = normalVisualConfig;
  exports.orderedRange = orderedRange;
  exports.rangesIntersect = rangesIntersect;
  exports.repeat = repeat;
  exports.repeatStr = repeatStr;
  exports.rmClass = rmClass;
  exports.suggestedEditorConfig = suggestedEditorConfig;
  exports.switchToHyperMD = switchToHyperMD;
  exports.switchToNormal = switchToNormal;
  exports.tryToRun = tryToRun;
  exports.visitElements = visitElements;
  exports.watchSize = watchSize;

  Object.defineProperty(exports, "__esModule", { value: true });
});
});

createCommonjsModule(function (module) {
// HyperMD, copyright (c) by laobubu
// Distributed under an MIT license: http://laobubu.net/HyperMD/LICENSE
//
// DESCRIPTION: Click to open links / jump to footnotes / toggle TODOs, and more.
//
// With custom ClickHandler supported
//
var __createBinding =
  (commonjsGlobal && commonjsGlobal.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (commonjsGlobal && commonjsGlobal.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (commonjsGlobal && commonjsGlobal.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };

(function (mod) {
  //[HyperMD] UMD patched!
  /*plain env*/ mod(null, (HyperMD.Click = HyperMD.Click || {}), CodeMirror, HyperMD, HyperMD.ReadLink);
})(function (require, exports, CodeMirror, core_1, read_link_1) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getAddon =
    exports.Click =
    exports.suggestedOption =
    exports.defaultOption =
    exports.defaultClickHandler =
      void 0;
  CodeMirror = __importStar(CodeMirror);
  //#endregion
  /********************************************************************************** */
  //#region defaultClickHandler
  var defaultClickHandler = function (info, cm) {
    info.text;
      var type = info.type;
      info.url;
      var pos = info.pos;
    if (type === "todo") {
      var _a = core_1.expandRange(cm, pos, "formatting-task"),
        from = _a.from,
        to = _a.to;
      var text_1 = cm.getRange(from, to);
      text_1 = text_1 === "[ ]" ? "[x]" : "[ ]";
      cm.replaceRange(text_1, from, to);
    }
  };
  exports.defaultClickHandler = defaultClickHandler;

  exports.defaultOption = {
    enabled: false,
    handler: null,
  };
  exports.suggestedOption = {
    enabled: true,
  };
  core_1.suggestedEditorConfig.hmdClick = exports.suggestedOption;
  CodeMirror.defineOption("hmdClick", exports.defaultOption, function (cm, newVal) {
    ///// convert newVal's type to `Partial<Options>`, if it is not.
    if (!newVal || typeof newVal === "boolean") {
      newVal = { enabled: !!newVal };
    } else if (typeof newVal === "function") {
      newVal = { enabled: true, handler: newVal };
    }
    ///// apply config and write new values into cm
    var inst = exports.getAddon(cm);
    for (var k in exports.defaultOption) {
      inst[k] = k in newVal ? newVal[k] : exports.defaultOption[k];
    }
  });
  //#endregion
  /********************************************************************************** */
  //#region Addon Class
  var Click = /** @class */ (function () {
    function Click(cm) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var _this = this;
      this.cm = cm;
      /** remove modifier className to editor DOM */
      this._mouseMove_keyDetect = function (ev) {
        var el = _this.el;
        var className = el.className,
          newClassName = className;
        var altClass = "HyperMD-with-alt";
        var ctrlClass = "HyperMD-with-ctrl";
        if (!ev.altKey && className.indexOf(altClass) >= 0) {
          newClassName = className.replace(altClass, "");
        }
        if (!ev.ctrlKey && className.indexOf(ctrlClass) >= 0) {
          newClassName = className.replace(ctrlClass, "");
        }
        if (!ev.altKey && !ev.ctrlKey) {
          _this._KeyDetectorActive = false;
          el.removeEventListener("mousemove", _this._mouseMove_keyDetect, false);
        }
        if (className != newClassName) el.className = newClassName.trim();
      };
      /** add modifier className to editor DOM */
      this._keyDown = function (ev) {
        var kc = ev.keyCode || ev.which;
        var className = "";
        if (kc == 17) className = "HyperMD-with-ctrl";
        if (kc == 18) className = "HyperMD-with-alt";
        var el = _this.el;
        if (className && el.className.indexOf(className) == -1) {
          el.className += " " + className;
        }
        if (!_this._KeyDetectorActive) {
          _this._KeyDetectorActive = true;
          _this.el.addEventListener("mousemove", _this._mouseMove_keyDetect, false);
        }
      };
      /**
       * Unbind _mouseUp, then call ClickHandler if mouse not bounce
       */
      this._mouseUp = function (ev) {
        var cinfo = _this._cinfo;
        _this.lineDiv.removeEventListener("mouseup", _this._mouseUp, false);
        if (Math.abs(ev.clientX - cinfo.clientX) > 5 || Math.abs(ev.clientY - cinfo.clientY) > 5) return;
        if (typeof _this.handler === "function" && _this.handler(cinfo, _this.cm) === false) return;
        exports.defaultClickHandler(cinfo, _this.cm);
      };
      /**
       * Try to construct ClickInfo and bind _mouseUp
       */
      this._mouseDown = function (ev) {
        var button = ev.button,
          clientX = ev.clientX,
          clientY = ev.clientY,
          ctrlKey = ev.ctrlKey,
          altKey = ev.altKey,
          shiftKey = ev.shiftKey;
        var cm = _this.cm;
        if (ev.target.tagName === "PRE") return;
        var pos = cm.coordsChar({ left: clientX, top: clientY }, "window");
        var range;
        var token = cm.getTokenAt(pos);
        token.state;
        var styles = " " + token.type + " ";
        var type = null;
        var text, url;
        if (styles.match(/\sformatting-task\s/)) {
          // TO-DO checkbox
          type = "todo";
          range = core_1.expandRange(cm, pos, "formatting-task");
          range.to.ch = cm.getLine(pos.line).length;
          text = cm.getRange(range.from, range.to);
          url = null;
        }
        if (type !== null) {
          _this._cinfo = {
            type: type,
            text: text,
            url: url,
            pos: pos,
            button: button,
            clientX: clientX,
            clientY: clientY,
            ctrlKey: ctrlKey,
            altKey: altKey,
            shiftKey: shiftKey,
          };
          _this.lineDiv.addEventListener("mouseup", _this._mouseUp, false);
        }
      };
      this.lineDiv = cm.display.lineDiv;
      var el = (this.el = cm.getWrapperElement());
      new core_1.FlipFlop(
        /* ON  */ function () {
          _this.lineDiv.addEventListener("mousedown", _this._mouseDown, false);
          el.addEventListener("keydown", _this._keyDown, false);
        },
        /* OFF */ function () {
          _this.lineDiv.removeEventListener("mousedown", _this._mouseDown, false);
          el.removeEventListener("keydown", _this._keyDown, false);
        }
      ).bind(this, "enabled", true);
    }
    return Click;
  })();
  exports.Click = Click;
  //#endregion
  /** ADDON GETTER (Singleton Pattern): a editor can have only one Click instance */
  exports.getAddon = core_1.Addon.Getter("Click", Click, exports.defaultOption /** if has options */);
});
});

createCommonjsModule(function (module) {
// HyperMD, copyright (c) by laobubu
// Distributed under an MIT license: http://laobubu.net/HyperMD/LICENSE
//
// DESCRIPTION: Auto show/hide markdown tokens like `##` or `*`
//
// Only works with `hypermd` mode, require special CSS rules
//
var __createBinding =
  (commonjsGlobal && commonjsGlobal.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (commonjsGlobal && commonjsGlobal.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (commonjsGlobal && commonjsGlobal.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };

(function (mod) {
  //[HyperMD] UMD patched!
  /*plain env*/ mod(null, {}, CodeMirror, HyperMD, null);
})(function (require, exports, CodeMirror, core_1) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getAddon = exports.HideToken = exports.suggestedOption = exports.defaultOption = void 0;
  CodeMirror = __importStar(CodeMirror);
  //#region Internal Function...
  /** check if has the class and remove it */
  function rmClass(el, className) {
    var c = " " + el.className + " ",
      cnp = " " + className + " ";
    if (c.indexOf(cnp) === -1) return false;
    el.className = c.replace(cnp, "").trim();
    return true;
  }
  /** check if NOT has the class and add it */
  function addClass(el, className) {
    var c = " " + el.className + " ",
      cnp = " " + className + " ";
    if (c.indexOf(cnp) !== -1) return false;
    el.className = el.className + " " + className;
    return true;
  }
  exports.defaultOption = {
    enabled: false,
    line: true,
    tokenTypes: "em|strong|mark|ins|sub|sup|strikethrough|code|linkText|task".split("|"),
  };
  exports.suggestedOption = {
    enabled: true,
  };
  core_1.suggestedEditorConfig.hmdHideToken = exports.suggestedOption;
  core_1.normalVisualConfig.hmdHideToken = false;
  CodeMirror.defineOption("hmdHideToken", exports.defaultOption, function (cm, newVal) {
    ///// convert newVal's type to `Partial<Options>`, if it is not.
    if (!newVal || typeof newVal === "boolean") {
      newVal = { enabled: !!newVal };
    } else if (typeof newVal === "string") {
      newVal = { enabled: true, tokenTypes: newVal.split("|") };
    } else if (newVal instanceof Array) {
      newVal = { enabled: true, tokenTypes: newVal };
    }
    ///// apply config and write new values into cm
    var inst = exports.getAddon(cm);
    for (var k in exports.defaultOption) {
      inst[k] = k in newVal ? newVal[k] : exports.defaultOption[k];
    }
  });
  //#endregion
  /********************************************************************************** */
  //#region Addon Class
  var hideClassName = "hmd-hidden-token";
  var lineInactiveClassName = "hmd-inactive-line";
  var HideToken = /** @class */ (function () {
    function HideToken(cm) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var _this = this;
      this.cm = cm;
      this.renderLineHandler = function (cm, line, el) {
        // TODO: if we procLine now, we can only get the outdated lineView, lineViewMeasure and lineViewMap. Calling procLine will be wasteful!
        _this.procLine(line, el);
      };
      this.cursorActivityHandler = function (/*doc: CodeMirror.Doc*/) {
        // _this.update();
        core_1.updateCursorDisplay(cm, false);
      };
      this.update = core_1.debounce(function () {
        return _this.updateImmediately();
      }, 100);
      /** Current user's selections, in each line */
      this._rangesInLine = {};
      new core_1.FlipFlop(
        /* ON  */ function () {
          cm.on("cursorActivity", _this.cursorActivityHandler);
          cm.on("renderLine", _this.renderLineHandler);
          cm.on("update", _this.update);
          _this.update();
          cm.refresh();
        },
        /* OFF */ function () {
          cm.off("cursorActivity", _this.cursorActivityHandler);
          cm.off("renderLine", _this.renderLineHandler);
          cm.off("update", _this.update);
          _this.update.stop();
          cm.refresh();
        }
      ).bind(this, "enabled", true);
    }
    /**
     * hide/show <span>s in one line, based on `this._rangesInLine`
     * @returns line changed or not
     */
    HideToken.prototype.procLine = function (line, pre) {
      var cm = this.cm;
      var lineNo = typeof line === "number" ? line : line.lineNo();
      if (typeof line === "number") line = cm.getLineHandle(line);
      var rangesInLine = this._rangesInLine[lineNo] || [];
      var lv = core_1.cm_internal.findViewForLine(cm, lineNo);
      if (!lv || lv.hidden || !lv.measure) return false;
      if (!pre) pre = lv.text;
      if (!pre) return false;
      var mapInfo = core_1.cm_internal.mapFromLineView(lv, line, lineNo);
      var map = mapInfo.map;
      var nodeCount = map.length / 3;
      var changed = false;
      // change line status
      if (rangesInLine.length === 0) {
        // inactiveLine
        if (addClass(pre, lineInactiveClassName)) changed = true;
      } else {
        // activeLine
        if (rmClass(pre, lineInactiveClassName)) changed = true;
      }
      // show or hide tokens
      /**
       * @returns if there are Span Nodes changed
       */
      function changeVisibilityForSpan(span, shallHideTokens, iNodeHint) {
        var changed = false;
        iNodeHint = iNodeHint || 0;
        // iterate the map
        for (var i = iNodeHint; i < nodeCount; i++) {
          var begin = map[i * 3];
            map[i * 3 + 1];
          var domNode = map[i * 3 + 2];
          if (begin === span.head.start) {
            // find the leading token!
            if (/formatting-/.test(span.head.type) && domNode.nodeType === Node.TEXT_NODE) {
              // if (DEBUG) console.log("DOMNODE", shallHideTokens, domNode, begin, span)
              // good. this token can be changed
              var domParent = domNode.parentElement;
              if (shallHideTokens ? addClass(domParent, hideClassName) : rmClass(domParent, hideClassName)) {
                // if (DEBUG) console.log("HEAD DOM CHANGED")
                changed = true;
              }
              // Yiyi: Wikilink
              if (domParent.nextElementSibling && domParent.nextElementSibling.classList.contains("cm-wikilink-url")) {
                if (
                  shallHideTokens
                    ? addClass(domParent.nextElementSibling, hideClassName)
                    : rmClass(domParent.nextElementSibling, hideClassName)
                ) {
                  // if (DEBUG) console.log("HEAD DOM CHANGED")
                  changed = true;
                }
              }
            }
            //FIXME: if leading formatting token is separated into two, the latter will not be hidden/shown!
            // search for the tailing token
            if (span.tail && /formatting-/.test(span.tail.type)) {
              for (var j = i + 1; j < nodeCount; j++) {
                var begin_1 = map[j * 3];
                  map[j * 3 + 1];
                var domNode_1 = map[j * 3 + 2];
                if (begin_1 == span.tail.start) {
                  // if (DEBUG) console.log("TAIL DOM CHANGED", domNode)
                  if (domNode_1.nodeType === Node.TEXT_NODE) {
                    // good. this token can be changed
                    var domParent = domNode_1.parentElement;
                    if (shallHideTokens ? addClass(domParent, hideClassName) : rmClass(domParent, hideClassName)) {
                      changed = true;
                    }
                  }
                }
                if (begin_1 >= span.tail.end) break;
              }
            }
          }
          // whoops, next time we can start searching since here
          // return the hint value
          if (begin >= span.begin) break;
        }
        return changed;
      }
      var spans = core_1.getLineSpanExtractor(cm).extract(lineNo);
      var iNodeHint = 0;
      for (var iSpan = 0; iSpan < spans.length; iSpan++) {
        var span = spans[iSpan];
        if (this.tokenTypes.indexOf(span.type) === -1) continue; // not-interested span type
        /* TODO: Use AST, instead of crafted Position */
        var spanRange = [
          { line: lineNo, ch: span.begin },
          { line: lineNo, ch: span.end },
        ];
        /* TODO: If use AST, compute `spanBeginCharInCurrentLine` in another way */
        var spanBeginCharInCurrentLine = span.begin;
        while (iNodeHint < nodeCount && map[iNodeHint * 3 + 1] < spanBeginCharInCurrentLine) iNodeHint++;
        var shallHideTokens = true;
        for (var iLineRange = 0; iLineRange < rangesInLine.length; iLineRange++) {
          var userRange = rangesInLine[iLineRange];
          if (core_1.rangesIntersect(spanRange, userRange)) {
            shallHideTokens = false;
            break;
          }
        }
        if (changeVisibilityForSpan(span, shallHideTokens, iNodeHint)) {
          changed = true;
        }
      }
      // finally clean the cache (if needed) and report the result
      if (changed) {
        // clean CodeMirror measure cache
        delete lv.measure.heights;
        lv.measure.cache = {};
      }
      return changed;
    };
    HideToken.prototype.updateImmediately = function () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var _this = this;
      this.update.stop();
      var cm = this.cm;
      var selections = cm.listSelections();
      var caretAtLines = {};
      var activedLines = {};
      cm.state.refreshCaretLine = null;
      var lastActivedLines = this._rangesInLine;
      for (var _i = 0, selections_1 = selections; _i < selections_1.length; _i++) {
        var selection = selections_1[_i];
        var oRange = core_1.orderedRange(selection);
        var line0 = oRange[0].line,
          line1 = oRange[1].line;
        caretAtLines[line0] = caretAtLines[line1] = true;
        for (var line = line0; line <= line1; line++) {
          if (!activedLines[line]) activedLines[line] = [oRange];
          else activedLines[line].push(oRange);
        }
      }
      this._rangesInLine = activedLines;
      cm.operation(function () {
        // adding "inactive" class
        for (var line in lastActivedLines) {
          if (activedLines[line]) {
            continue; // line is still active. do nothing
          }
          _this.procLine(~~line); // or, try adding "inactive" class to the <pre>s
        }
        var caretLineChanged = false;
        for (var line in activedLines) {
          var lineChanged = _this.procLine(~~line);
          if (lineChanged && caretAtLines[line]) caretLineChanged = true;
        }
        // refresh cursor position if needed
        if (caretLineChanged) {
          var lineHandle = cm.getLineHandle(line);
          if (lineHandle.height === 0) ; else {
            core_1.updateCursorDisplay(cm, false);
          }
        }
      });
    };
    return HideToken;
  })();
  exports.HideToken = HideToken;
  //#endregion
  /** ADDON GETTER (Singleton Pattern): a editor can have only one HideToken instance */
  exports.getAddon = core_1.Addon.Getter("HideToken", HideToken, exports.defaultOption /** if has options */);
});
});

var ObsidianCodeMirrorOptionsPlugin = /** @class */ (function (_super) {
    __extends(ObsidianCodeMirrorOptionsPlugin, _super);
    function ObsidianCodeMirrorOptionsPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdProcessor = function (el) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.injectCM(el);
                }, 100);
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    ObsidianCodeMirrorOptionsPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // load settings
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        // load settings
                        _a.settings = (_b.sent()) || new ObsidianCodeMirrorOptionsSettings();
                        // add the settings tab
                        this.addSettingTab(new ObsidianCodeMirrorOptionsSettingsTab(this.app, this));
                        this.app.workspace.onLayoutReady(function () {
                            _this.applyCodeMirrorOptions();
                            _this.toggleHighlighting();
                            _this.toggleCodeBlockSettings();
                            if (_this.settings.enableCMinPreview) {
                                setTimeout(function () {
                                    // we wait 1 second here since the prism.js rendering of code blocks is delayed on load
                                    // this will force the CM injection after 1 second, only on startup
                                    _this.refreshPanes();
                                }, 1000);
                            }
                        });
                        this.registerEvent(this.app.workspace.on("layout-change", function () {
                            _this.applyCodeMirrorOptions();
                        }));
                        return [2 /*return*/];
                }
            });
        });
    }; // close onload
    ObsidianCodeMirrorOptionsPlugin.prototype.injectCM = function (el) {
        // only get code block elements with a language but not any that have already been colorized
        var preElement = el.firstChild;
        var codeElement = el.firstChild.firstChild;
        if (!codeElement)
            return;
        if (codeElement.tagName !== "CODE")
            return;
        if (!codeElement.classList.value.includes("language-")) {
            if (this.settings.copyButtonOnPRE) {
                this.addCopyButton(preElement);
            }
            return;
        }
        if (preElement.classList.value.includes("cm-s-obsidian"))
            return;
        codeElement.classList.forEach(function (className) {
            if (className.startsWith("language-")) {
                // set data-lang to the code block language for easier colorize usage
                var language = className.replace("language-", "");
                switch (language) {
                    case "html":
                        language = "htmlmixed";
                        break;
                    case "js":
                        language = "javascript";
                        break;
                    case "json":
                        language = "javascript";
                        break;
                }
                codeElement.setAttribute("data-lang", language);
            }
        });
        //@ts-ignore
        CodeMirror.colorize([codeElement], null, this.settings.showLineNums);
        preElement.querySelector(".copy-code-button").remove();
        this.addCopyButton(preElement);
    };
    ObsidianCodeMirrorOptionsPlugin.prototype.addCopyButton = function (element) {
        if (this.settings.copyButton) {
            var codeBlock_1 = element;
            var copyButton_1 = document.createElement("button");
            copyButton_1.className = "copy";
            copyButton_1.type = "button";
            // copyButton.ariaLabel = 'Copy code to clipboard';
            copyButton_1.innerText = "Copy";
            codeBlock_1.append(copyButton_1);
            copyButton_1.addEventListener("click", function () {
                // exclude line numbers when copying code to clipboard
                var code = codeBlock_1.querySelector("code");
                var clone = code.cloneNode(true);
                clone.findAll("span.cm-linenumber").forEach(function (e) { return e.remove(); });
                var codeText = clone.textContent.trim();
                window.navigator.clipboard.writeText(codeText);
                copyButton_1.innerText = "Copied";
                setTimeout(function () {
                    copyButton_1.innerText = "Copy";
                }, 4000);
            });
        }
    };
    ObsidianCodeMirrorOptionsPlugin.prototype.toggleCodeBlockSettings = function () {
        if (this.settings.showLineNums) {
            document.body.addClass("cm-show-line-nums");
        }
        else {
            document.body.removeClass("cm-show-line-nums");
        }
        if (this.settings.copyButtonOnPRE) {
            document.body.addClass("cm-show-copy-button-on-pre");
        }
        else {
            document.body.removeClass("cm-show-copy-button-on-pre");
        }
        this.refreshPanes();
    };
    ObsidianCodeMirrorOptionsPlugin.prototype.toggleHighlighting = function () {
        if (this.settings.enableCMinPreview) {
            document.body.addClass("unified-cm-highlighting");
            this.registerMarkdownPostProcessor(this.mdProcessor);
            this.refreshPanes();
        }
        else {
            document.body.removeClass("unified-cm-highlighting");
            obsidian.MarkdownPreviewRenderer.unregisterPostProcessor(this.mdProcessor);
            this.refreshPanes();
        }
    };
    ObsidianCodeMirrorOptionsPlugin.prototype.applyCodeMirrorOptions = function () {
        var _this = this;
        this.app.workspace.iterateCodeMirrors(function (cm) {
            _this.setCodeMirrorOption(cm, "styleSelectedText", _this.settings.markSelection);
            _this.setCodeMirrorOption(cm, "singleCursorHeightPerLine", _this.settings.dynamicCursor);
            _this.setCodeMirrorOption(cm, "styleActiveLine", _this.settings.activeLineOnSelect);
            _this.setCodeMirrorOption(cm, "hmdHideToken", _this.settings.editModeHideTokens);
            _this.setCodeMirrorOption(cm, "hmdClick", _this.settings.editModeClickHandler);
        });
        if (this.settings.editModeHideTokens) {
            document.body.addClass("hide-tokens");
        }
        else {
            document.body.removeClass("hide-tokens");
        }
        if (this.settings.markSelection) {
            document.body.addClass("style-active-selection");
        }
        else {
            document.body.removeClass("style-active-selection");
        }
        if (this.settings.enablePrismJSStyling) {
            document.body.addClass("fallback-highlighting");
        }
        else {
            document.body.removeClass("fallback-highlighting");
        }
    };
    ObsidianCodeMirrorOptionsPlugin.prototype.unsetCodeMirrorOptions = function () {
        this.app.workspace.iterateCodeMirrors(function (cm) {
            // revert CodeMirror options back to the CM/Obsidian defaults
            cm.setOption("styleSelectedText", false);
            cm.setOption("singleCursorHeightPerLine", true);
            cm.setOption("styleActiveLine", true);
            cm.setOption("hmdHideToken", false);
            cm.setOption("hmdClick", false);
        });
    };
    ObsidianCodeMirrorOptionsPlugin.prototype.refreshPanes = function () {
        this.app.workspace.getLeavesOfType("markdown").forEach(function (leaf) {
            if (leaf.view instanceof obsidian.MarkdownView) {
                leaf.view.previewMode.rerender(true);
            }
        });
    };
    ObsidianCodeMirrorOptionsPlugin.prototype.getActiveCmEditor = function () {
        var _a;
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (view)
            return (_a = view.sourceMode) === null || _a === void 0 ? void 0 : _a.cmEditor;
        return null;
    };
    ObsidianCodeMirrorOptionsPlugin.prototype.setCodeMirrorOption = function (cm, optionKey, optionValue) {
        // styleActiveLine requires an object to set the behavior we want
        if (optionKey === "styleActiveLine")
            optionValue = optionValue === true ? { nonEmpty: true } : true;
        // we want to pass the opposite boolean to what is chosen in settings
        if (optionKey === "singleCursorHeightPerLine")
            optionValue = !optionValue;
        if (cm && cm.getOption(optionKey) != optionValue) {
            cm.setOption(optionKey, optionValue);
        }
    };
    ObsidianCodeMirrorOptionsPlugin.prototype.onunload = function () {
        this.unsetCodeMirrorOptions();
        obsidian.MarkdownPreviewRenderer.unregisterPostProcessor(this.mdProcessor);
        this.refreshPanes();
    };
    return ObsidianCodeMirrorOptionsPlugin;
}(obsidian.Plugin));

module.exports = ObsidianCodeMirrorOptionsPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy9zZXR0aW5ncy50cyIsIi4uL3NyYy9ydW5tb2RlLmpzIiwiLi4vc3JjL2NvbG9yaXplLmpzIiwiLi4vc3JjL21hcmstc2VsZWN0aW9uLmpzIiwiLi4vc3JjL2FjdGl2ZS1saW5lLmpzIiwiLi4vc3JjL2htZC1jb3JlLmpzIiwiLi4vc3JjL2htZC1jbGljay5qcyIsIi4uL3NyYy9obWQtaGlkZS10b2tlbi5qcyIsIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG5pbXBvcnQgT2JzaWRpYW5Db2RlTWlycm9yT3B0aW9uc1BsdWdpbiBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZXhwb3J0IGNsYXNzIE9ic2lkaWFuQ29kZU1pcnJvck9wdGlvbnNTZXR0aW5ncyB7XG4gIGR5bmFtaWNDdXJzb3IgPSBmYWxzZTtcbiAgbWFya1NlbGVjdGlvbiA9IGZhbHNlO1xuICBhY3RpdmVMaW5lT25TZWxlY3QgPSBmYWxzZTtcbiAgZW5hYmxlQ01pblByZXZpZXcgPSBmYWxzZTtcbiAgZW5hYmxlUHJpc21KU1N0eWxpbmcgPSBmYWxzZTtcbiAgZWRpdE1vZGVIaWRlVG9rZW5zID0gZmFsc2U7XG4gIGVkaXRNb2RlQ2xpY2tIYW5kbGVyID0gZmFsc2U7XG4gIHNob3dMaW5lTnVtcyA9IGZhbHNlO1xuICBjb3B5QnV0dG9uID0gZmFsc2U7XG4gIGNvcHlCdXR0b25PblBSRSA9IGZhbHNlO1xufVxuXG5leHBvcnQgY2xhc3MgT2JzaWRpYW5Db2RlTWlycm9yT3B0aW9uc1NldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogT2JzaWRpYW5Db2RlTWlycm9yT3B0aW9uc1BsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPYnNpZGlhbkNvZGVNaXJyb3JPcHRpb25zUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuXG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDJcIiwgeyB0ZXh0OiBcIkNvZGVNaXJyb3IgT3B0aW9uc1wiIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkhpZGUgTWFya2Rvd24gVG9rZW5zXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgYFRoaXMgbW9kZSBlbXVsYXRlcyBXWVNJV1lHIGluIGVkaXQgbW9kZSBieSBoaWRpbmcgbWFya2Rvd24gdG9rZW5zIG9uIGluYWN0aXZlIGxpbmVzLiBUaGlzIG1vZGUgd2lsbCB0YWcgYWxsIGluYWN0aXZlIGxpbmVzIFxuICAgICAgIHdpdGggLmhtZC1pbmFjdGl2ZS1saW5lIGFuZCBhbGwgaGlkZGVuIHRva2VucyB3aXRoIC5obWQtaGlkZGVuLXRva2VuYFxuICAgICAgKVxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRNb2RlSGlkZVRva2Vucykub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRNb2RlSGlkZVRva2VucyA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5hcHBseUNvZGVNaXJyb3JPcHRpb25zKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkVkaXQgTW9kZSBDbGljayBIYW5kbGVyXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgYEN1cnJlbnRseSBzdXBwb3J0cyBjbGlja2luZyBjaGVja2JveGVzIGluIGVkaXQgbW9kZS4gRGlzYWJsZSB0aGlzIGlzIHlvdSBlbmNvdW50ZXIgYW55IGlzc3VlcyB3aXRoIG1vdXNlIGNsaWNrcy5gXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE1vZGVDbGlja0hhbmRsZXIpLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0TW9kZUNsaWNrSGFuZGxlciA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5hcHBseUNvZGVNaXJyb3JPcHRpb25zKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkR5bmFtaWMgY3Vyc29yIHNpemVcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBgV2hlbiBlbmFibGVkLCB0aGUgY3Vyc29yIGhlaWdodCB3aWxsIGJlIGRldGVybWluZWQgYnkgdGhlIG1heCBoZWlnaHQgb2YgdGhlIGVudGlyZSBsaW5lLiBcbiAgICAgICAgIFdoZW4gZGlzYWJsZWQsIHRoZSBjdXJzb3IncyBoZWlnaHQgaXMgYmFzZWQgb24gdGhlIGhlaWdodCBvZiB0aGUgYWRqYWNlbnQgcmVmZXJlbmNlIGNoYXJhY3Rlci5gXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZHluYW1pY0N1cnNvcikub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmR5bmFtaWNDdXJzb3IgPSB2YWx1ZTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uYXBwbHlDb2RlTWlycm9yT3B0aW9ucygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJTdHlsZSBhY3RpdmUgc2VsZWN0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgYFdoZW4gZW5hYmxlZCwgc2VsZWN0ZWQgdGV4dCB3aWxsIGJlIG1hcmtlZCB3aXRoIHRoZSBDU1MgY2xhc3MgLkNvZGVNaXJyb3Itc2VsZWN0ZWR0ZXh0LiBcbiAgICAgICAgIFVzZWZ1bCB0byBmb3JjZSB0aGUgc3R5bGluZyBvZiBzZWxlY3RlZCB0ZXh0IHdoZW4gOjpzZWxlY3Rpb24gaXMgbm90IHN1ZmZpY2llbnQuYFxuICAgICAgKVxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm1hcmtTZWxlY3Rpb24pLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXJrU2VsZWN0aW9uID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIHRoaXMucGx1Z2luLmFwcGx5Q29kZU1pcnJvck9wdGlvbnMoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiUmV0YWluIGFjdGl2ZSBsaW5lIG9uIHNlbGVjdGlvblwiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIGBXaGVuIGVuYWJsZWQsIHRleHQgc2VsZWN0aW9uIHdpbGwgbm90IHJlbW92ZSB0aGUgLmFjdGl2ZS1saW5lIGNsYXNzIG9uIHRoZSBjdXJyZW50IGxpbmUuIFxuICAgICAgICAgV2hlbiBkaXNhYmxlZCB0ZXh0IHNlbGVjdGlvbiBvbiB0aGUgYWN0aXZlIGxpbmUgd2lsbCByZW1vdmUgdGhlIC5hY3RpdmUtbGluZSBjbGFzcy5gXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlTGluZU9uU2VsZWN0KS5vbkNoYW5nZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlTGluZU9uU2VsZWN0ID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIHRoaXMucGx1Z2luLmFwcGx5Q29kZU1pcnJvck9wdGlvbnMoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgaWYgKFxuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzLmFwcC5wbHVnaW5zLnBsdWdpbnNbXCJjbS1lZGl0b3Itc3ludGF4LWhpZ2hsaWdodC1vYnNpZGlhblwiXVxuICAgICkge1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKFwiVXNlIENvZGVNaXJyb3IgZm9yIHN5bnRheCBoaWdobGlnaHRpbmcgaW4gcHJldmlldyBtb2RlXCIpXG4gICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgIGBUaGlzIHNldHRpbmcgY3JlYXRlcyBjb25zaXN0ZW50IGhpZ2hsaWdodGluZyBiZXR3ZWVuIGVkaXQgYW5kIHByZXZpZXcgYnkgdXNpbmcgQ29kZU1pcnJvciB0byBoaWdobGlnaHQgaW4gYm90aCBtb2Rlcy4gXG4gICAgICAgICAgIE5vdGU6IFRoaXMgc2V0dGluZyByZXF1aXJlcyB0aGUgXCJFZGl0b3IgU3ludGF4IEhpZ2hsaWdodFwiIHBsdWdpbiB0byBmdW5jdGlvbiBwcm9wZXJseS5gXG4gICAgICAgIClcbiAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT5cbiAgICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlQ01pblByZXZpZXcpLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZUNNaW5QcmV2aWV3ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi50b2dnbGVIaWdobGlnaHRpbmcoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKFwiRXhwZXJpbWVudGFsOiBTaG93IGxpbmUgbnVtYmVycyBmb3IgY29kZSBibG9ja3MgaW4gcHJldmlldyBtb2RlXCIpXG4gICAgICAgIC5zZXREZXNjKGBUaGlzIHNldHRpbmcgd2lsbCBhZGQgbGluZSBudW1iZXJzIHRvIGNvZGUgYmxvY2tzIGluIHByZXZpZXcgbW9kZS5gKVxuICAgICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PlxuICAgICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93TGluZU51bXMpLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dMaW5lTnVtcyA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4udG9nZ2xlQ29kZUJsb2NrU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKFwiRXhwZXJpbWVudGFsOiBFbmFibGUgY29weSBidXR0b24gdG8gY29kZSBibG9ja3MgaW4gcHJldmlldyBtb2RlXCIpXG4gICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgIGBUaGlzIHNldHRpbmcgd2lsbCBhZGQgYSBjb3B5IGJ1dHRvbiB0byB0aGUgYm90dG9tIGxlZnQgY29ybmVyIG9mIGNvZGUgYmxvY2tzIGluIHByZXZpZXcgbW9kZS4gVGhlIGJ1dHRvbiB3aWxsIHNob3cgdXAgb24gY29kZSBibG9jayBob3Zlci5gXG4gICAgICAgIClcbiAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT5cbiAgICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY29weUJ1dHRvbikub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY29weUJ1dHRvbiA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4udG9nZ2xlQ29kZUJsb2NrU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKFwiRXhwZXJpbWVudGFsOiBFbmFibGUgY29weSBidXR0b24gdG8gYWxsIFBSRSBibG9ja3MgaW4gcHJldmlldyBtb2RlXCIpXG4gICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgIGBUaGlzIHNldHRpbmcgd2lsbCBhZGQgYSBjb3B5IGJ1dHRvbiB0byBhbnkgUFJFIGVsZW1lbnQuIFRoaXMgY291bGQgbmVnYXRpdmVseSBpbXBhY3QgY2VydGFpbiBwbHVnaW5zIHRoYXQgcmVuZGVyIFBSRSBibG9ja3MuYFxuICAgICAgICApXG4gICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+XG4gICAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNvcHlCdXR0b25PblBSRSkub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY29weUJ1dHRvbk9uUFJFID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi50b2dnbGVDb2RlQmxvY2tTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAuc2V0TmFtZShcIlVzZSBDb2RlTWlycm9yIGZvciBzeW50YXggaGlnaGxpZ2h0aW5nIGluIHByZXZpZXcgbW9kZVwiKVxuICAgICAgICAuc2V0RGVzYygnV2FybmluZzogSW5zdGFsbCB0aGUgcGx1Z2luIFwiRWRpdG9yIFN5bnRheCBIaWdobGlnaHRcIiBpbiBvcmRlciB0byB1c2UgdGhpcyBmZWF0dXJlJylcbiAgICAgICAgLnNldENsYXNzKFwiY20td2FybmluZ1wiKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiRmFsbGJhY2s6IFVuaWZ5IHRoZSBkZWZhdWx0IHByaXNtLmpzIGNvZGUgYmxvY2sgc3R5bGluZ1wiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIGBUaGlzIHNldHRpbmcgaXMgYSBmYWxsYmFjayBvcHRpb24gaWYgeW91IGRvIG5vdCB3YW50IHRvIGluamVjdCBDTSBpbnRvIHByZXZpZXcgbW9kZS4gXG4gICAgICAgICBJdCB3aWxsIHRyeSBhbmQgdW5pZnkgdGhlIHByaXNtLmpzIGNvbG9ycyB0byBtYXRjaCBDTSBhcyBjbG9zZSBhcyBwb3NzaWJsZS5gXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlUHJpc21KU1N0eWxpbmcpLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5lbmFibGVQcmlzbUpTU3R5bGluZyA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICAvLyBUT0RPOiBtYWtlIHRoaXMgdG9nZ2xlIHN0eWxpbmcgcHJvcGVybHlcbiAgICAgICAgICB0aGlzLnBsdWdpbi5hcHBseUNvZGVNaXJyb3JPcHRpb25zKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDRcIiwge1xuICAgICAgdGV4dDogYFRvIGN1c3RvbWl6ZSB0aGUgc3ludGF4IGhpZ2hsaWdodGluZyB0aGVtZSwgXG4gICAgICAgICAgICAgaW5zdGFsbCB0aGUgU3R5bGUgU2V0dGluZ3MgcGx1Z2luIGFuZCBleHBsb3JlIHRoZSBcIkNvZGVNaXJyb3IgT3B0aW9uc1wiIHNlY3Rpb25gLFxuICAgIH0pO1xuICB9XG59XG4iLCIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG5mdW5jdGlvbiBsZWZ0RmlsbE51bShudW0sIHRhcmdldExlbmd0aCkge1xuICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCAwKTtcbn1cblxuQ29kZU1pcnJvci5ydW5Nb2RlID0gZnVuY3Rpb24gKHN0cmluZywgbW9kZXNwZWMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHZhciBtb2RlID0gQ29kZU1pcnJvci5nZXRNb2RlKENvZGVNaXJyb3IuZGVmYXVsdHMsIG1vZGVzcGVjKTtcbiAgdmFyIGxpbmVOdW1iZXIgPSAxO1xuICBpZiAoY2FsbGJhY2subm9kZVR5cGUgPT0gMSkge1xuICAgIHZhciB0YWJTaXplID0gKG9wdGlvbnMgJiYgb3B0aW9ucy50YWJTaXplKSB8fCBDb2RlTWlycm9yLmRlZmF1bHRzLnRhYlNpemU7XG4gICAgdmFyIGxpbmVOdW1zID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5saW5lTnVtcykgfHwgZmFsc2U7XG4gICAgdmFyIG5vZGUgPSBjYWxsYmFjayxcbiAgICAgIGNvbCA9IDA7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKHRleHQsIHN0eWxlKSB7XG4gICAgICBpZiAodGV4dCA9PSBcIlxcblwiKSB7XG4gICAgICAgIGlmIChsaW5lTnVtcykge1xuICAgICAgICAgIGxpbmVOdW1iZXIrKzsgLy9pbmNyZW1lbnQgbGluZSBudW1iZXJcbiAgICAgICAgICB2YXIgbGluZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIGxpbmVOdW0uYWRkQ2xhc3MoXCJjbS1saW5lbnVtYmVyXCIpO1xuICAgICAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGVmdEZpbGxOdW0obGluZU51bWJlciwgMikgKyBcIiBcIik7XG4gICAgICAgICAgbGluZU51bS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcbiAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGxpbmVOdW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbCA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIC8vIHJlcGxhY2UgdGFic1xuICAgICAgZm9yICh2YXIgcG9zID0gMDsgOyApIHtcbiAgICAgICAgdmFyIGlkeCA9IHRleHQuaW5kZXhPZihcIlxcdFwiLCBwb3MpO1xuICAgICAgICBpZiAoaWR4ID09IC0xKSB7XG4gICAgICAgICAgY29udGVudCArPSB0ZXh0LnNsaWNlKHBvcyk7XG4gICAgICAgICAgY29sICs9IHRleHQubGVuZ3RoIC0gcG9zO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbCArPSBpZHggLSBwb3M7XG4gICAgICAgICAgY29udGVudCArPSB0ZXh0LnNsaWNlKHBvcywgaWR4KTtcbiAgICAgICAgICB2YXIgc2l6ZSA9IHRhYlNpemUgLSAoY29sICUgdGFiU2l6ZSk7XG4gICAgICAgICAgY29sICs9IHNpemU7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIGNvbnRlbnQgKz0gXCIgXCI7XG4gICAgICAgICAgcG9zID0gaWR4ICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgdmFyIHNwID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSk7XG4gICAgICAgIHNwLmNsYXNzTmFtZSA9IFwiY20tXCIgKyBzdHlsZS5yZXBsYWNlKC8gKy9nLCBcIiBjbS1cIik7XG4gICAgICAgIHNwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgbGluZXMgPSBDb2RlTWlycm9yLnNwbGl0TGluZXMoc3RyaW5nKSxcbiAgICBzdGF0ZSA9IChvcHRpb25zICYmIG9wdGlvbnMuc3RhdGUpIHx8IENvZGVNaXJyb3Iuc3RhcnRTdGF0ZShtb2RlKTtcbiAgdmFyIGxpbmVMZW5ndGggPSBsaW5lTnVtcyAmJiBtb2RlLm5hbWUgIT09IFwieWFtbFwiID8gbGluZXMubGVuZ3RoIC0gMSA6IGxpbmVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGUgPSBsaW5lTGVuZ3RoOyBpIDwgZTsgKytpKSB7XG4gICAgaWYgKGkpIGNhbGxiYWNrKFwiXFxuXCIpO1xuICAgIHZhciBzdHJlYW0gPSBuZXcgQ29kZU1pcnJvci5TdHJpbmdTdHJlYW0obGluZXNbaV0pO1xuICAgIHdoaWxlICghc3RyZWFtLmVvbCgpKSB7XG4gICAgICB2YXIgc3R5bGUgPSBtb2RlLnRva2VuKHN0cmVhbSwgc3RhdGUpO1xuICAgICAgY2FsbGJhY2soc3RyZWFtLmN1cnJlbnQoKSwgc3R5bGUsIGksIHN0cmVhbS5zdGFydCk7XG4gICAgICBzdHJlYW0uc3RhcnQgPSBzdHJlYW0ucG9zO1xuICAgIH1cbiAgfVxuICBpZiAobGluZU51bXMpIHtcbiAgICB2YXIgb3V0cHV0RGl2ID0gbm9kZTtcbiAgICB2YXIgZmlyc3RMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZmlyc3RMaW5lLmFkZENsYXNzKFwiY20tbGluZW51bWJlclwiKTtcbiAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxlZnRGaWxsTnVtKDEsIDIpICsgXCIgXCIpO1xuICAgIGZpcnN0TGluZS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBvdXRwdXREaXY/Lmluc2VydEJlZm9yZShmaXJzdExpbmUsIG91dHB1dERpdi5maXJzdENoaWxkKTtcbiAgfVxufTtcbiIsIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbkNvZGVNaXJyb3IuY29sb3JpemUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgaXNCbG9jayA9IC9eKHB8bGl8ZGl2fGhcXFxcZHxwcmV8YmxvY2txdW90ZXx0ZCkkLztcblxuICBmdW5jdGlvbiB0ZXh0Q29udGVudChub2RlLCBvdXQpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSAzKSByZXR1cm4gb3V0LnB1c2gobm9kZS5ub2RlVmFsdWUpO1xuICAgIGZvciAodmFyIGNoID0gbm9kZS5maXJzdENoaWxkOyBjaDsgY2ggPSBjaC5uZXh0U2libGluZykge1xuICAgICAgdGV4dENvbnRlbnQoY2gsIG91dCk7XG4gICAgICBpZiAoaXNCbG9jay50ZXN0KG5vZGUubm9kZVR5cGUpKSBvdXQucHVzaChcIlxcblwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGRlZmF1bHRNb2RlLCBzaG93TGluZU51bXMgPSBmYWxzZSkge1xuICAgIGlmICghY29sbGVjdGlvbikgY29sbGVjdGlvbiA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwcmVcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbGxlY3Rpb24ubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBub2RlID0gY29sbGVjdGlvbltpXTtcbiAgICAgIHZhciBtb2RlID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxhbmdcIikgfHwgZGVmYXVsdE1vZGU7XG4gICAgICBpZiAoIW1vZGUpIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgdGV4dCA9IFtdO1xuICAgICAgdGV4dENvbnRlbnQobm9kZSwgdGV4dCk7XG4gICAgICBub2RlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBDb2RlTWlycm9yLnJ1bk1vZGUodGV4dC5qb2luKFwiXCIpLCBtb2RlLCBub2RlLCB7IGxpbmVOdW1zOiBzaG93TGluZU51bXMgfSk7XG4gICAgICBub2RlLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGNtLXMtb2JzaWRpYW5cIjtcbiAgICB9XG4gIH07XG59KSgpO1xuIiwiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuLy8gQmVjYXVzZSBzb21ldGltZXMgeW91IG5lZWQgdG8gbWFyayB0aGUgc2VsZWN0ZWQgKnRleHQqLlxuLy9cbi8vIEFkZHMgYW4gb3B0aW9uICdzdHlsZVNlbGVjdGVkVGV4dCcgd2hpY2gsIHdoZW4gZW5hYmxlZCwgZ2l2ZXNcbi8vIHNlbGVjdGVkIHRleHQgdGhlIENTUyBjbGFzcyBnaXZlbiBhcyBvcHRpb24gdmFsdWUsIG9yXG4vLyBcIkNvZGVNaXJyb3Itc2VsZWN0ZWR0ZXh0XCIgd2hlbiB0aGUgdmFsdWUgaXMgbm90IGEgc3RyaW5nLlxuXG4oZnVuY3Rpb24obW9kKSB7XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcInN0eWxlU2VsZWN0ZWRUZXh0XCIsIGZhbHNlLCBmdW5jdGlvbihjbSwgdmFsLCBvbGQpIHtcbiAgICB2YXIgcHJldiA9IG9sZCAmJiBvbGQgIT0gQ29kZU1pcnJvci5Jbml0O1xuICAgIGlmICh2YWwgJiYgIXByZXYpIHtcbiAgICAgIGNtLnN0YXRlLm1hcmtlZFNlbGVjdGlvbiA9IFtdO1xuICAgICAgY20uc3RhdGUubWFya2VkU2VsZWN0aW9uU3R5bGUgPSB0eXBlb2YgdmFsID09IFwic3RyaW5nXCIgPyB2YWwgOiBcIkNvZGVNaXJyb3Itc2VsZWN0ZWR0ZXh0XCI7XG4gICAgICByZXNldChjbSk7XG4gICAgICBjbS5vbihcImN1cnNvckFjdGl2aXR5XCIsIG9uQ3Vyc29yQWN0aXZpdHkpO1xuICAgICAgY20ub24oXCJjaGFuZ2VcIiwgb25DaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAoIXZhbCAmJiBwcmV2KSB7XG4gICAgICBjbS5vZmYoXCJjdXJzb3JBY3Rpdml0eVwiLCBvbkN1cnNvckFjdGl2aXR5KTtcbiAgICAgIGNtLm9mZihcImNoYW5nZVwiLCBvbkNoYW5nZSk7XG4gICAgICBjbGVhcihjbSk7XG4gICAgICBjbS5zdGF0ZS5tYXJrZWRTZWxlY3Rpb24gPSBjbS5zdGF0ZS5tYXJrZWRTZWxlY3Rpb25TdHlsZSA9IG51bGw7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBvbkN1cnNvckFjdGl2aXR5KGNtKSB7XG4gICAgaWYgKGNtLnN0YXRlLm1hcmtlZFNlbGVjdGlvbilcbiAgICAgIGNtLm9wZXJhdGlvbihmdW5jdGlvbigpIHsgdXBkYXRlKGNtKTsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZShjbSkge1xuICAgIGlmIChjbS5zdGF0ZS5tYXJrZWRTZWxlY3Rpb24gJiYgY20uc3RhdGUubWFya2VkU2VsZWN0aW9uLmxlbmd0aClcbiAgICAgIGNtLm9wZXJhdGlvbihmdW5jdGlvbigpIHsgY2xlYXIoY20pOyB9KTtcbiAgfVxuXG4gIHZhciBDSFVOS19TSVpFID0gODtcbiAgdmFyIFBvcyA9IENvZGVNaXJyb3IuUG9zO1xuICB2YXIgY21wID0gQ29kZU1pcnJvci5jbXBQb3M7XG5cbiAgZnVuY3Rpb24gY292ZXJSYW5nZShjbSwgZnJvbSwgdG8sIGFkZEF0KSB7XG4gICAgaWYgKGNtcChmcm9tLCB0bykgPT0gMCkgcmV0dXJuO1xuICAgIHZhciBhcnJheSA9IGNtLnN0YXRlLm1hcmtlZFNlbGVjdGlvbjtcbiAgICB2YXIgY2xzID0gY20uc3RhdGUubWFya2VkU2VsZWN0aW9uU3R5bGU7XG4gICAgZm9yICh2YXIgbGluZSA9IGZyb20ubGluZTs7KSB7XG4gICAgICB2YXIgc3RhcnQgPSBsaW5lID09IGZyb20ubGluZSA/IGZyb20gOiBQb3MobGluZSwgMCk7XG4gICAgICB2YXIgZW5kTGluZSA9IGxpbmUgKyBDSFVOS19TSVpFLCBhdEVuZCA9IGVuZExpbmUgPj0gdG8ubGluZTtcbiAgICAgIHZhciBlbmQgPSBhdEVuZCA/IHRvIDogUG9zKGVuZExpbmUsIDApO1xuICAgICAgdmFyIG1hcmsgPSBjbS5tYXJrVGV4dChzdGFydCwgZW5kLCB7Y2xhc3NOYW1lOiBjbHN9KTtcbiAgICAgIGlmIChhZGRBdCA9PSBudWxsKSBhcnJheS5wdXNoKG1hcmspO1xuICAgICAgZWxzZSBhcnJheS5zcGxpY2UoYWRkQXQrKywgMCwgbWFyayk7XG4gICAgICBpZiAoYXRFbmQpIGJyZWFrO1xuICAgICAgbGluZSA9IGVuZExpbmU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoY20pIHtcbiAgICB2YXIgYXJyYXkgPSBjbS5zdGF0ZS5tYXJrZWRTZWxlY3Rpb247XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7ICsraSkgYXJyYXlbaV0uY2xlYXIoKTtcbiAgICBhcnJheS5sZW5ndGggPSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoY20pIHtcbiAgICBjbGVhcihjbSk7XG4gICAgdmFyIHJhbmdlcyA9IGNtLmxpc3RTZWxlY3Rpb25zKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpKyspXG4gICAgICBjb3ZlclJhbmdlKGNtLCByYW5nZXNbaV0uZnJvbSgpLCByYW5nZXNbaV0udG8oKSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoY20pIHtcbiAgICBpZiAoIWNtLnNvbWV0aGluZ1NlbGVjdGVkKCkpIHJldHVybiBjbGVhcihjbSk7XG4gICAgaWYgKGNtLmxpc3RTZWxlY3Rpb25zKCkubGVuZ3RoID4gMSkgcmV0dXJuIHJlc2V0KGNtKTtcblxuICAgIHZhciBmcm9tID0gY20uZ2V0Q3Vyc29yKFwic3RhcnRcIiksIHRvID0gY20uZ2V0Q3Vyc29yKFwiZW5kXCIpO1xuXG4gICAgdmFyIGFycmF5ID0gY20uc3RhdGUubWFya2VkU2VsZWN0aW9uO1xuICAgIGlmICghYXJyYXkubGVuZ3RoKSByZXR1cm4gY292ZXJSYW5nZShjbSwgZnJvbSwgdG8pO1xuXG4gICAgdmFyIGNvdmVyU3RhcnQgPSBhcnJheVswXS5maW5kKCksIGNvdmVyRW5kID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV0uZmluZCgpO1xuICAgIGlmICghY292ZXJTdGFydCB8fCAhY292ZXJFbmQgfHwgdG8ubGluZSAtIGZyb20ubGluZSA8PSBDSFVOS19TSVpFIHx8XG4gICAgICAgIGNtcChmcm9tLCBjb3ZlckVuZC50bykgPj0gMCB8fCBjbXAodG8sIGNvdmVyU3RhcnQuZnJvbSkgPD0gMClcbiAgICAgIHJldHVybiByZXNldChjbSk7XG5cbiAgICB3aGlsZSAoY21wKGZyb20sIGNvdmVyU3RhcnQuZnJvbSkgPiAwKSB7XG4gICAgICBhcnJheS5zaGlmdCgpLmNsZWFyKCk7XG4gICAgICBjb3ZlclN0YXJ0ID0gYXJyYXlbMF0uZmluZCgpO1xuICAgIH1cbiAgICBpZiAoY21wKGZyb20sIGNvdmVyU3RhcnQuZnJvbSkgPCAwKSB7XG4gICAgICBpZiAoY292ZXJTdGFydC50by5saW5lIC0gZnJvbS5saW5lIDwgQ0hVTktfU0laRSkge1xuICAgICAgICBhcnJheS5zaGlmdCgpLmNsZWFyKCk7XG4gICAgICAgIGNvdmVyUmFuZ2UoY20sIGZyb20sIGNvdmVyU3RhcnQudG8sIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY292ZXJSYW5nZShjbSwgZnJvbSwgY292ZXJTdGFydC5mcm9tLCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAoY21wKHRvLCBjb3ZlckVuZC50bykgPCAwKSB7XG4gICAgICBhcnJheS5wb3AoKS5jbGVhcigpO1xuICAgICAgY292ZXJFbmQgPSBhcnJheVthcnJheS5sZW5ndGggLSAxXS5maW5kKCk7XG4gICAgfVxuICAgIGlmIChjbXAodG8sIGNvdmVyRW5kLnRvKSA+IDApIHtcbiAgICAgIGlmICh0by5saW5lIC0gY292ZXJFbmQuZnJvbS5saW5lIDwgQ0hVTktfU0laRSkge1xuICAgICAgICBhcnJheS5wb3AoKS5jbGVhcigpO1xuICAgICAgICBjb3ZlclJhbmdlKGNtLCBjb3ZlckVuZC5mcm9tLCB0byk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3ZlclJhbmdlKGNtLCBjb3ZlckVuZC50bywgdG8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4iLCIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24gKG1vZCkge1xuICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbiAoQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIFdSQVBfQ0xBU1MgPSBcIkNvZGVNaXJyb3ItYWN0aXZlbGluZVwiO1xuICB2YXIgQkFDS19DTEFTUyA9IFwiQ29kZU1pcnJvci1hY3RpdmVsaW5lLWJhY2tncm91bmRcIjtcbiAgdmFyIEdVVFRfQ0xBU1MgPSBcIkNvZGVNaXJyb3ItYWN0aXZlbGluZS1ndXR0ZXJcIjtcblxuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcInN0eWxlQWN0aXZlTGluZVwiLCBmYWxzZSwgZnVuY3Rpb24gKGNtLCB2YWwsIG9sZCkge1xuICAgIHZhciBwcmV2ID0gb2xkID09IENvZGVNaXJyb3IuSW5pdCA/IGZhbHNlIDogb2xkO1xuICAgIGlmICh2YWwgPT0gcHJldikgcmV0dXJuO1xuICAgIGlmIChwcmV2KSB7XG4gICAgICBjbS5vZmYoXCJiZWZvcmVTZWxlY3Rpb25DaGFuZ2VcIiwgc2VsZWN0aW9uQ2hhbmdlKTtcbiAgICAgIGNsZWFyQWN0aXZlTGluZXMoY20pO1xuICAgICAgZGVsZXRlIGNtLnN0YXRlLmFjdGl2ZUxpbmVzO1xuICAgIH1cbiAgICBpZiAodmFsKSB7XG4gICAgICBjbS5zdGF0ZS5hY3RpdmVMaW5lcyA9IFtdO1xuICAgICAgdXBkYXRlQWN0aXZlTGluZXMoY20sIGNtLmxpc3RTZWxlY3Rpb25zKCkpO1xuICAgICAgY20ub24oXCJiZWZvcmVTZWxlY3Rpb25DaGFuZ2VcIiwgc2VsZWN0aW9uQ2hhbmdlKTtcbiAgICAgIGNtLnJlZnJlc2goKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsZWFyQWN0aXZlTGluZXMoY20pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNtLnN0YXRlLmFjdGl2ZUxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjbS5yZW1vdmVMaW5lQ2xhc3MoY20uc3RhdGUuYWN0aXZlTGluZXNbaV0sIFwid3JhcFwiLCBXUkFQX0NMQVNTKTtcbiAgICAgIGNtLnJlbW92ZUxpbmVDbGFzcyhjbS5zdGF0ZS5hY3RpdmVMaW5lc1tpXSwgXCJiYWNrZ3JvdW5kXCIsIEJBQ0tfQ0xBU1MpO1xuICAgICAgY20ucmVtb3ZlTGluZUNsYXNzKGNtLnN0YXRlLmFjdGl2ZUxpbmVzW2ldLCBcImd1dHRlclwiLCBHVVRUX0NMQVNTKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzYW1lQXJyYXkoYSwgYikge1xuICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykgaWYgKGFbaV0gIT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQWN0aXZlTGluZXMoY20sIHJhbmdlcykge1xuICAgIHZhciBhY3RpdmUgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJhbmdlID0gcmFuZ2VzW2ldO1xuICAgICAgdmFyIG9wdGlvbiA9IGNtLmdldE9wdGlvbihcInN0eWxlQWN0aXZlTGluZVwiKTtcbiAgICAgIC8vIGlmICh0eXBlb2Ygb3B0aW9uID09IFwib2JqZWN0XCIgJiYgb3B0aW9uLm5vbkVtcHR5ID8gcmFuZ2UuYW5jaG9yLmxpbmUgIT0gcmFuZ2UuaGVhZC5saW5lIDogIXJhbmdlLmVtcHR5KCkpXG4gICAgICAvLyBub3RoaW5naXNsb3N0OiBtb2RpZmllZCB0aGUgbm9uRW1wdHkgb3B0aW9uIHRvIHN1cHBvcnQgbXVsdGlwbGUgc2VsZWN0ZWQgbGluZXNcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09IFwib2JqZWN0XCIgJiYgb3B0aW9uLm5vbkVtcHR5ID8gZmFsc2UgOiAhcmFuZ2UuZW1wdHkoKSkgY29udGludWU7XG4gICAgICAvLyBub3RoaW5naXNsb3N0OiBzdXBwb3J0IGZvcndhcmRzIGFuZCBiYWNrd2FyZHMgbXVsdGkgbGluZSBzZWxlY3Rpb25zXG4gICAgICBpZiAocmFuZ2UuaGVhZC5saW5lID4gcmFuZ2UuYW5jaG9yLmxpbmUpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gcmFuZ2UuYW5jaG9yLmxpbmUsXG4gICAgICAgICAgZW5kID0gcmFuZ2UuaGVhZC5saW5lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gcmFuZ2UuaGVhZC5saW5lLFxuICAgICAgICAgIGVuZCA9IHJhbmdlLmFuY2hvci5saW5lO1xuICAgICAgfVxuICAgICAgLy8gbm90aGluZ2lzbG9zdDogZ2V0IHRoZSB2aXN1YWwgc3RhcnQgZm9yIGFsbCBsaW5lcyBpbiB0aGUgc2VsZWN0aW9uXG4gICAgICBmb3IgKHZhciBqID0gc3RhcnQ7IGogPCBlbmQgKyAxOyArK2opIHtcbiAgICAgICAgdmFyIGxpbmUgPSBjbS5nZXRMaW5lSGFuZGxlVmlzdWFsU3RhcnQoaik7XG4gICAgICAgIGlmIChhY3RpdmVbYWN0aXZlLmxlbmd0aCAtIDFdICE9IGxpbmUpIGFjdGl2ZS5wdXNoKGxpbmUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2FtZUFycmF5KGNtLnN0YXRlLmFjdGl2ZUxpbmVzLCBhY3RpdmUpKSByZXR1cm47XG4gICAgY20ub3BlcmF0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyQWN0aXZlTGluZXMoY20pO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY20uYWRkTGluZUNsYXNzKGFjdGl2ZVtpXSwgXCJ3cmFwXCIsIFdSQVBfQ0xBU1MpO1xuICAgICAgICBjbS5hZGRMaW5lQ2xhc3MoYWN0aXZlW2ldLCBcImJhY2tncm91bmRcIiwgQkFDS19DTEFTUyk7XG4gICAgICAgIGNtLmFkZExpbmVDbGFzcyhhY3RpdmVbaV0sIFwiZ3V0dGVyXCIsIEdVVFRfQ0xBU1MpO1xuICAgICAgfVxuICAgICAgY20uc3RhdGUuYWN0aXZlTGluZXMgPSBhY3RpdmU7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3Rpb25DaGFuZ2UoY20sIHNlbCkge1xuICAgIHVwZGF0ZUFjdGl2ZUxpbmVzKGNtLCBzZWwucmFuZ2VzKTtcbiAgfVxufSk7XG4iLCIvKiFcbiAqIEh5cGVyTUQsIGNvcHlyaWdodCAoYykgYnkgbGFvYnVidVxuICogRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHA6Ly9sYW9idWJ1Lm5ldC9IeXBlck1EL0xJQ0VOU0VcbiAqXG4gKiBCcmVhayB0aGUgV2FsbCBiZXR3ZWVuIHdyaXRpbmcgYW5kIHByZXZpZXcsIGluIGEgTWFya2Rvd24gRWRpdG9yLlxuICpcbiAqIEh5cGVyTUQgbWFrZXMgTWFya2Rvd24gZWRpdG9yIG9uIHdlYiBXWVNJV1lHLCBiYXNlZCBvbiBDb2RlTWlycm9yXG4gKlxuICogSG9tZXBhZ2U6IGh0dHA6Ly9sYW9idWJ1Lm5ldC9IeXBlck1EL1xuICogSXNzdWVzOiBodHRwczovL2dpdGh1Yi5jb20vbGFvYnVidS9IeXBlck1EL2lzc3Vlc1xuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYpLFxuICAgIGZhY3RvcnkoKGdsb2JhbC5IeXBlck1EID0ge30pLCBnbG9iYWwuQ29kZU1pcnJvcik7XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvKipcbiAgICogUHJvdmlkZXMgc29tZSBjb21tb24gUG9seUZpbGxcbiAgICpcbiAgICogQGludGVybmFsIFBhcnQgb2YgSHlwZXJNRCBjb3JlLlxuICAgKlxuICAgKiBZb3Ugc2hhbGwgTk9UIGltcG9ydCB0aGlzIGZpbGU7IHBsZWFzZSBpbXBvcnQgXCJjb3JlXCIgaW5zdGVhZFxuICAgKi9cbiAgaWYgKHR5cGVvZiBPYmplY3RbXCJhc3NpZ25cIl0gIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gTXVzdCBiZSB3cml0YWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QsIFwiYXNzaWduXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCB2YXJBcmdzKSB7XG4gICAgICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAvLyBUeXBlRXJyb3IgaWYgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzJDFbaW5kZXhdO1xuICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgIC8vIEF2b2lkIGJ1Z3Mgd2hlbiBoYXNPd25Qcm9wZXJ0eSBpcyBzaGFkb3dlZFxuICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bztcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBzb21lIHVuaXZlcnNhbCB1dGlsc1xuICAgKlxuICAgKiBAaW50ZXJuYWwgUGFydCBvZiBIeXBlck1EIGNvcmUuXG4gICAqXG4gICAqIFlvdSBzaGFsbCBOT1QgaW1wb3J0IHRoaXMgZmlsZTsgcGxlYXNlIGltcG9ydCBcImNvcmVcIiBpbnN0ZWFkXG4gICAqL1xuICAvKiogU2ltcGxlIEZsaXBGbG9wICovXG4gIHZhciBGbGlwRmxvcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBTaW1wbGUgRmxpcEZsb3BcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uX2NiIHNlZSBGbGlwRmxvcC5PTihjYWxsYmFjaylcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvZmZfY2Igc2VlIEZsaXBGbG9wLk9GRihjYWxsYmFjaylcbiAgICAgKiBAcGFyYW0ge1R9IFtzdGF0ZV0gaW5pdGlhbCBzdGF0ZS4gZGVmYXVsdDogZmFsc2UgKGJvb2xlYW4pXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtzdWJrZXldIGlmIGdldCBhbiBvYmplY3QsIHVzZSB0aGlzIGtleSB0byByZXRyaXZlIHN0YXR1cy4gZGVmYXVsdDogXCJlbmFibGVkXCJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGbGlwRmxvcChvbl9jYiwgb2ZmX2NiLCBzdGF0ZSwgc3Via2V5KSB7XG4gICAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgICBzdGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHN1YmtleSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHN1YmtleSA9IFwiZW5hYmxlZFwiO1xuICAgICAgfVxuICAgICAgdGhpcy5vbl9jYiA9IG9uX2NiO1xuICAgICAgdGhpcy5vZmZfY2IgPSBvZmZfY2I7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICB0aGlzLnN1YmtleSA9IHN1YmtleTtcbiAgICB9XG4gICAgLyoqIHNldCBhIGNhbGxiYWNrIHdoZW4gc3RhdGUgaXMgY2hhbmdlZCBhbmQgaXMgKipOT1QqKiBgbnVsbGAsIGBmYWxzZWAgZXRjLiAqL1xuICAgIEZsaXBGbG9wLnByb3RvdHlwZS5PTiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdGhpcy5vbl9jYiA9IGNhbGxiYWNrO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKiogc2V0IGEgY2FsbGJhY2sgd2hlbiBzdGF0ZSBpcyBzZXQgdG8gYG51bGxgLCBgZmFsc2VgIGV0Yy4gKi9cbiAgICBGbGlwRmxvcC5wcm90b3R5cGUuT0ZGID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9mZl9jYiA9IGNhbGxiYWNrO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgRmxpcEZsb3Agc3RhdHVzLCBhbmQgdHJpZyBjYWxsYmFjayBmdW5jdGlvbiBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHxvYmplY3R9IHN0YXRlIG5ldyBzdGF0dXMgdmFsdWUuIGNhbiBiZSBhIG9iamVjdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RvQm9vbF0gY29udmVydCByZXRyaXZlZCB2YWx1ZSB0byBib29sZWFuLiBkZWZhdWx0OiBmYWxzZVxuICAgICAqL1xuICAgIEZsaXBGbG9wLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoc3RhdGUsIHRvQm9vbCkge1xuICAgICAgdmFyIG5ld1ZhbCA9IHR5cGVvZiBzdGF0ZSA9PT0gXCJvYmplY3RcIiAmJiBzdGF0ZSA/IHN0YXRlW3RoaXMuc3Via2V5XSA6IHN0YXRlO1xuICAgICAgaWYgKHRvQm9vbCkge1xuICAgICAgICBuZXdWYWwgPSAhIW5ld1ZhbDtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdWYWwgPT09IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCh0aGlzLnN0YXRlID0gbmV3VmFsKSkge1xuICAgICAgICB0aGlzLm9uX2NiICYmIHRoaXMub25fY2IobmV3VmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub2ZmX2NiICYmIHRoaXMub2ZmX2NiKG5ld1ZhbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBGbGlwRmxvcC5wcm90b3R5cGUuc2V0Qm9vbCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KHN0YXRlLCB0cnVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEJpbmQgdG8gYSBvYmplY3QncyBwcm9wZXJ0eSB3aXRoIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgXG4gICAgICogc28gdGhhdCB5b3UgbWF5IHNldCBzdGF0ZSB3aXRoIGBvYmouZW5hYmxlID0gdHJ1ZWBcbiAgICAgKi9cbiAgICBGbGlwRmxvcC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdG9Cb29sKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnN0YXRlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNldCh2LCB0b0Jvb2wpO1xuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIEZsaXBGbG9wO1xuICB9KSgpO1xuICAvKiogYXN5bmMgcnVuIGEgZnVuY3Rpb24sIGFuZCByZXRyeSB1cCB0byBOIHRpbWVzIHVudGlsIGl0IHJldHVybnMgdHJ1ZSAqL1xuICBmdW5jdGlvbiB0cnlUb1J1bihmbiwgdGltZXMsIG9uRmFpbGVkKSB7XG4gICAgdGltZXMgPSB+fnRpbWVzIHx8IDU7XG4gICAgdmFyIGRlbGF5VGltZSA9IDI1MDtcbiAgICBmdW5jdGlvbiBuZXh0Q3ljbGUoKSB7XG4gICAgICBpZiAoIXRpbWVzLS0pIHtcbiAgICAgICAgaWYgKG9uRmFpbGVkKSB7XG4gICAgICAgICAgb25GYWlsZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZm4oKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHNldFRpbWVvdXQobmV4dEN5Y2xlLCBkZWxheVRpbWUpO1xuICAgICAgZGVsYXlUaW1lICo9IDI7XG4gICAgfVxuICAgIHNldFRpbWVvdXQobmV4dEN5Y2xlLCAwKTtcbiAgfVxuICAvKipcbiAgICogbWFrZSBhIGRlYm91bmNlZCBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgaW4gbXNcbiAgICovXG4gIGZ1bmN0aW9uIGRlYm91bmNlKGZuLCBkZWxheSkge1xuICAgIHZhciBkZWZlclRhc2sgPSBudWxsO1xuICAgIHZhciBub3RDbGVhckJlZm9yZSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuKCk7XG4gICAgICBkZWZlclRhc2sgPSAwO1xuICAgIH07XG4gICAgdmFyIGFucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBub3dUaW1lID0gK25ldyBEYXRlKCk7XG4gICAgICBpZiAoZGVmZXJUYXNrKSB7XG4gICAgICAgIGlmIChub3dUaW1lIDwgbm90Q2xlYXJCZWZvcmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGFzayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlZmVyVGFzayA9IHNldFRpbWVvdXQocnVuLCBkZWxheSk7XG4gICAgICBub3RDbGVhckJlZm9yZSA9IG5vd1RpbWUgKyAxMDA7IC8vIGFsbG93IDEwMG1zIGVycm9yXG4gICAgfTtcbiAgICBhbnMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghZGVmZXJUYXNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRhc2spO1xuICAgICAgZGVmZXJUYXNrID0gMDtcbiAgICB9O1xuICAgIHJldHVybiBhbnM7XG4gIH1cbiAgLyoqXG4gICAqIGFkZENsYXNzIC8gcmVtb3ZlQ2xhc3MgZXRjLlxuICAgKlxuICAgKiB1c2luZyBDb2RlTWlycm9yJ3MgKGFsdGhvdWdoIHRoZXkncmUgbGVnYWN5IEFQSSlcbiAgICovXG4gIHZhciBhZGRDbGFzcyA9IENvZGVNaXJyb3IuYWRkQ2xhc3M7XG4gIHZhciBybUNsYXNzID0gQ29kZU1pcnJvci5ybUNsYXNzO1xuICB2YXIgY29udGFpbnMgPSBDb2RlTWlycm9yLmNvbnRhaW5zO1xuICAvKipcbiAgICogYSBmYWxsYmFjayBmb3IgbmV3IEFycmF5KGNvdW50KS5maWxsKGRhdGEpXG4gICAqL1xuICBmdW5jdGlvbiByZXBlYXQoaXRlbSwgY291bnQpIHtcbiAgICB2YXIgYW5zID0gbmV3IEFycmF5KGNvdW50KTtcbiAgICBpZiAoYW5zW1wiZmlsbFwiXSkge1xuICAgICAgYW5zW1wiZmlsbFwiXShpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGFuc1tpXSA9IGl0ZW07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbnM7XG4gIH1cbiAgZnVuY3Rpb24gcmVwZWF0U3RyKGl0ZW0sIGNvdW50KSB7XG4gICAgdmFyIGFucyA9IFwiXCI7XG4gICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgICBhbnMgKz0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGFucztcbiAgfVxuICAvKipcbiAgICogVmlzaXQgZWxlbWVudCBub2RlcyBhbmQgdGhlaXIgY2hpbGRyZW5cbiAgICovXG4gIGZ1bmN0aW9uIHZpc2l0RWxlbWVudHMoc2VlZHMsIGhhbmRsZXIpIHtcbiAgICB2YXIgcXVldWUgPSBbc2VlZHNdLFxuICAgICAgdG1wO1xuICAgIHdoaWxlICgodG1wID0gcXVldWUuc2hpZnQoKSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbCA9IHRtcFtpXTtcbiAgICAgICAgaWYgKCFlbCB8fCBlbC5ub2RlVHlwZSAhPSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZXIoZWwpO1xuICAgICAgICBpZiAoZWwuY2hpbGRyZW4gJiYgZWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHF1ZXVlLnB1c2goZWwuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBIGxhenkgYW5kIHNpbXBsZSBFbGVtZW50IHNpemUgd2F0Y2hlci4gTk9UIFdPUksgd2l0aCBhbmltYXRpb25zXG4gICAqL1xuICBmdW5jdGlvbiB3YXRjaFNpemUoZWwsIG9uQ2hhbmdlLCBuZWVkUG9sbCkge1xuICAgIHZhciBfYSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgd2lkdGggPSBfYS53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAvKiogY2hlY2sgc2l6ZSBhbmQgdHJpZyBvbkNoYW5nZSAqL1xuICAgIHZhciBjaGVjayA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgbmV3V2lkdGggPSByZWN0LndpZHRoLFxuICAgICAgICBuZXdIZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgIGlmICh3aWR0aCAhPSBuZXdXaWR0aCB8fCBoZWlnaHQgIT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgIG9uQ2hhbmdlKG5ld1dpZHRoLCBuZXdIZWlnaHQsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIHNldFRpbWVvdXQoY2hlY2ssIDIwMCk7IC8vIG1heWJlIGNoYW5nZWQgYWdhaW4gbGF0ZXI/XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgICB2YXIgbmV4dFRpbWVyID0gbnVsbDtcbiAgICBmdW5jdGlvbiBwb2xsT25jZSgpIHtcbiAgICAgIGlmIChuZXh0VGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG5leHRUaW1lcik7XG4gICAgICB9XG4gICAgICBpZiAoIXN0b3BwZWQpIHtcbiAgICAgICAgbmV4dFRpbWVyID0gc2V0VGltZW91dChwb2xsT25jZSwgMjAwKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrKCk7XG4gICAgfVxuICAgIHZhciBzdG9wcGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgY2hlY2suc3RvcCgpO1xuICAgICAgaWYgKG5leHRUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQobmV4dFRpbWVyKTtcbiAgICAgICAgbmV4dFRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRCaW5kZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZXZlbnRCaW5kZWRbaV1bMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudEJpbmRlZFtpXVsxXSwgY2hlY2ssIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGV2ZW50QmluZGVkID0gW107XG4gICAgZnVuY3Rpb24gYmluZEV2ZW50cyhlbCkge1xuICAgICAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgIHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSkgfHwgXCJcIjtcbiAgICAgIH07XG4gICAgICBpZiAoZ2V0U3R5bGUoXCJyZXNpemVcIikgIT0gXCJub25lXCIpIHtcbiAgICAgICAgbmVlZFBvbGwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gc2l6ZSBjaGFuZ2VzIGlmIGxvYWRlZFxuICAgICAgaWYgKC9eKD86aW1nfHZpZGVvKSQvaS50ZXN0KHRhZ05hbWUpKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrLCBmYWxzZSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBjaGVjaywgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICgvXig/OmRldGFpbHN8c3VtbWFyeSkkL2kudGVzdCh0YWdOYW1lKSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2ssIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFuZWVkUG9sbCkge1xuICAgICAgdmlzaXRFbGVtZW50cyhbZWxdLCBiaW5kRXZlbnRzKTtcbiAgICB9XG4gICAgLy8gYmluZEV2ZW50cyB3aWxsIHVwZGF0ZSBgbmVlZFBvbGxgXG4gICAgaWYgKG5lZWRQb2xsKSB7XG4gICAgICBuZXh0VGltZXIgPSBzZXRUaW1lb3V0KHBvbGxPbmNlLCAyMDApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY2hlY2s6IGNoZWNrLFxuICAgICAgc3RvcDogc3RvcCxcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VTeW1ib2wobmFtZSkge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiBTeW1ib2wobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBcIl9cXG5cIiArIG5hbWUgKyBcIlxcbl9cIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZikudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG4gIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxuICBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbiAgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuICBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbiAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcbiAgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuICBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4gIHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9XG4gICAgICBPYmplY3QuYXNzaWduIHx8XG4gICAgICBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlYWR5LXRvLXVzZSBmdW5jdGlvbnMgdGhhdCBwb3dlcnMgdXAgeW91ciBNYXJrZG93biBlZGl0b3JcbiAgICpcbiAgICogQGludGVybmFsIFBhcnQgb2YgSHlwZXJNRCBjb3JlLlxuICAgKlxuICAgKiBZb3Ugc2hhbGwgTk9UIGltcG9ydCB0aGlzIGZpbGU7IHBsZWFzZSBpbXBvcnQgXCJjb3JlXCIgaW5zdGVhZFxuICAgKi9cbiAgLy8gaWYgKEh5cGVyTURfTWFyayBpbiBlZGl0b3IpLCB0aGUgZWRpdG9yIHdhcyBhIEh5cGVyTUQgbW9kZSBhdCBsZWFzdCBvbmNlXG4gIHZhciBIeXBlck1EX01hcmsgPSBcIl9faHlwZXJtZF9fXCI7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHRoYXQgdXNlZCBieSBgSHlwZXJNRC5mcm9tVGV4dEFyZWFgXG4gICAqXG4gICAqIEFkZG9ucyBtYXkgdXBkYXRlIHRoaXMgb2JqZWN0IGZyZWVseSFcbiAgICovXG4gIHZhciBzdWdnZXN0ZWRFZGl0b3JDb25maWcgPSB7XG4gICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgbGluZVdyYXBwaW5nOiB0cnVlLFxuICAgIHRoZW1lOiBcImxpZ2h0XCIsXG4gICAgbW9kZTogXCJ0ZXh0L3gtaHlwZXJtZFwiLFxuICAgIHRhYlNpemU6IDQsXG4gICAgYXV0b0Nsb3NlQnJhY2tldHM6IHRydWUsXG4gICAgZm9sZEd1dHRlcjogdHJ1ZSxcbiAgICBndXR0ZXJzOiBbXCJDb2RlTWlycm9yLWxpbmVudW1iZXJzXCIsIFwiQ29kZU1pcnJvci1mb2xkZ3V0dGVyXCIsIFwiSHlwZXJNRC1nb2JhY2tcIl0sXG4gIH07XG4gIC8qKlxuICAgKiBFZGl0b3IgT3B0aW9ucyB0aGF0IGRpc2FibGUgSHlwZXJNRCBXWVNJV1lHIHZpc3VhbCBlZmZlY3RzLlxuICAgKiBUaGVzZSBvcHRpb24gd2lsbCBiZSBhcHBsaWVkIHdoZW4gdXNlciBpbnZva2UgYHN3aXRjaFRvTm9ybWFsYC5cbiAgICpcbiAgICogQWRkb25zIGFib3V0IHZpc3VhbCBlZmZlY3RzLCBzaGFsbCB1cGRhdGUgdGhpcyBvYmplY3QhXG4gICAqL1xuICB2YXIgbm9ybWFsVmlzdWFsQ29uZmlnID0ge1xuICAgIHRoZW1lOiBcImRlZmF1bHRcIixcbiAgfTtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYW4gZWRpdG9yIGZyb20gYSA8dGV4dGFyZWE+XG4gICAqIENhbGxpbmcgYENvZGVNaXJyb3IuZnJvbVRleHRBcmVhYCB3aXRoIHJlY29tbWVuZGVkIEh5cGVyTUQgb3B0aW9uc1xuICAgKlxuICAgKiBAc2VlIENvZGVNaXJyb3IuZnJvbVRleHRBcmVhXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTFRleHRBcmVhRWxlbWVudH0gdGV4dEFyZWFcbiAgICogQHBhcmFtIHtvYmplY3R9IFtjb25maWddXG4gICAqIEByZXR1cm5zIHtjbV90fVxuICAgKi9cbiAgZnVuY3Rpb24gZnJvbVRleHRBcmVhKHRleHRBcmVhLCBjb25maWcpIHtcbiAgICB2YXIgZmluYWxfY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHN1Z2dlc3RlZEVkaXRvckNvbmZpZyksIGNvbmZpZyk7XG4gICAgdmFyIGNtID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEodGV4dEFyZWEsIGZpbmFsX2NvbmZpZyk7XG4gICAgY21bSHlwZXJNRF9NYXJrXSA9IHRydWU7XG4gICAgcmV0dXJuIGNtO1xuICB9XG4gIGZ1bmN0aW9uIHN3aXRjaFRvTm9ybWFsKGVkaXRvciwgb3B0aW9uc19vcl90aGVtZSkge1xuICAgIC8vIHRoaXMgQ29kZU1pcnJvciBlZGl0b3IgaGFzIG5ldmVyIGJlZW4gaW4gSHlwZXJNRCBtb2RlLiBgc3dpdGNoVG9Ob3JtYWxgIGlzIG1lYW5sZXNzXG4gICAgaWYgKCFlZGl0b3JbSHlwZXJNRF9NYXJrXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnNfb3JfdGhlbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG9wdGlvbnNfb3JfdGhlbWUgPSB7IHRoZW1lOiBvcHRpb25zX29yX3RoZW1lIH07XG4gICAgfVxuICAgIHZhciBvcHQgPSBfX2Fzc2lnbihcbiAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCBub3JtYWxWaXN1YWxDb25maWcpLCB7IHRoZW1lOiBlZGl0b3IuZ2V0T3B0aW9uKFwidGhlbWVcIikgfSksXG4gICAgICBvcHRpb25zX29yX3RoZW1lXG4gICAgKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb3B0KSB7XG4gICAgICBlZGl0b3Iuc2V0T3B0aW9uKGtleSwgb3B0W2tleV0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzd2l0Y2hUb0h5cGVyTUQoZWRpdG9yLCBvcHRpb25zX29yX3RoZW1lKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zX29yX3RoZW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBvcHRpb25zX29yX3RoZW1lID0geyB0aGVtZTogb3B0aW9uc19vcl90aGVtZSB9O1xuICAgIH1cbiAgICB2YXIgb3B0ID0ge307XG4gICAgaWYgKEh5cGVyTURfTWFyayBpbiBlZGl0b3IpIHtcbiAgICAgIC8vIGhhcyBiZWVuIEh5cGVyTUQgbW9kZSBvbmNlLiBPbmx5IG1vZGlmeSB2aXN1YWwtcmVsYXRlZCBvcHRpb25zXG4gICAgICBmb3IgKHZhciBrZXkgaW4gbm9ybWFsVmlzdWFsQ29uZmlnKSB7XG4gICAgICAgIG9wdFtrZXldID0gc3VnZ2VzdGVkRWRpdG9yQ29uZmlnW2tleV07XG4gICAgICB9XG4gICAgICBPYmplY3QuYXNzaWduKG9wdCwgeyB0aGVtZTogZWRpdG9yLmdldE9wdGlvbihcInRoZW1lXCIpIH0sIG9wdGlvbnNfb3JfdGhlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzIENvZGVNaXJyb3IgZWRpdG9yIGlzIG5ldyB0byBIeXBlck1EXG4gICAgICBPYmplY3QuYXNzaWduKG9wdCwgc3VnZ2VzdGVkRWRpdG9yQ29uZmlnLCB7IHRoZW1lOiBlZGl0b3IuZ2V0T3B0aW9uKFwidGhlbWVcIikgfSwgb3B0aW9uc19vcl90aGVtZSk7XG4gICAgICBlZGl0b3JbSHlwZXJNRF9NYXJrXSA9IHRydWU7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBvcHQpIHtcbiAgICAgIGVkaXRvci5zZXRPcHRpb24oa2V5LCBvcHRba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAgQGludGVybmFsIERPIE5PVCBJTVBPUlQgVEhJUyBNT0RVTEUhXG4gICAgICAgICAgICAgIElmIHlvdSB3YW50IHRvIHVzZSB0aGlzIG1vZHVsZSwgaW1wb3J0IGl0IGZyb20gYGNvcmVgOlxuXG4gICAgICAgICAgICAgICAgICBpbXBvcnQgeyBjbV9pbnRlcm5hbCB9IGZyb20gXCIuLi9jb3JlXCJcblxuICAgIFRoZSBmb2xsb3dpbmcgZmV3IGZ1bmN0aW9ucyBhcmUgZnJvbSBDb2RlTWlycm9yJ3Mgc291cmNlIGNvZGUuXG5cbiAgICBNSVQgTGljZW5zZVxuXG4gICAgQ29weXJpZ2h0IChDKSAyMDE3IGJ5IE1hcmlqbiBIYXZlcmJla2UgPG1hcmlqbmhAZ21haWwuY29tPiBhbmQgb3RoZXJzXG5cbiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gICAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICAgIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gICAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gICAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gICAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gICAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gICAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gICAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICAgIFRIRSBTT0ZUV0FSRS5cblxuICAgICovXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB2aWV3IGVsZW1lbnQgY29ycmVzcG9uZGluZyB0byBhIGdpdmVuIGxpbmUuIFJldHVybiBudWxsIHdoZW4gdGhlIGxpbmUgaXNuJ3QgdmlzaWJsZS5cbiAgICpcbiAgICogQHNlZSBjb2RlbWlycm9yXFxzcmNcXG1lYXN1cmVtZW50XFxwb3NpdGlvbl9tZWFzdXJlbWVudC5qcyA1LjM3LjBcbiAgICogQHBhcmFtIG4gbGluZU5vXG4gICAqL1xuICBmdW5jdGlvbiBmaW5kVmlld0luZGV4KGNtLCBuKSB7XG4gICAgaWYgKG4gPj0gY20uZGlzcGxheS52aWV3VG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBuIC09IGNtLmRpc3BsYXkudmlld0Zyb207XG4gICAgaWYgKG4gPCAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHZpZXcgPSBjbS5kaXNwbGF5LnZpZXc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBuIC09IHZpZXdbaV0uc2l6ZTtcbiAgICAgIGlmIChuIDwgMCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEZpbmQgYSBsaW5lIHZpZXcgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgZ2l2ZW4gbGluZSBudW1iZXIuXG4gICAqXG4gICAqIEBzZWUgY29kZW1pcnJvclxcc3JjXFxtZWFzdXJlbWVudFxccG9zaXRpb25fbWVhc3VyZW1lbnQuanMgNS4zNy4wXG4gICAqL1xuICBmdW5jdGlvbiBmaW5kVmlld0ZvckxpbmUoY20sIGxpbmVOKSB7XG4gICAgaWYgKGxpbmVOID49IGNtLmRpc3BsYXkudmlld0Zyb20gJiYgbGluZU4gPCBjbS5kaXNwbGF5LnZpZXdUbykge1xuICAgICAgcmV0dXJuIGNtLmRpc3BsYXkudmlld1tmaW5kVmlld0luZGV4KGNtLCBsaW5lTildO1xuICAgIH1cbiAgICB2YXIgZXh0ID0gY20uZGlzcGxheS5leHRlcm5hbE1lYXN1cmVkO1xuICAgIGlmIChleHQgJiYgbGluZU4gPj0gZXh0LmxpbmVOICYmIGxpbmVOIDwgZXh0LmxpbmVOICsgZXh0LnNpemUpIHtcbiAgICAgIHJldHVybiBleHQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBGaW5kIGEgbGluZSBtYXAgKG1hcHBpbmcgY2hhcmFjdGVyIG9mZnNldHMgdG8gdGV4dCBub2RlcykgYW5kIGFcbiAgICogbWVhc3VyZW1lbnQgY2FjaGUgZm9yIHRoZSBnaXZlbiBsaW5lIG51bWJlci4gKEEgbGluZSB2aWV3IG1pZ2h0XG4gICAqIGNvbnRhaW4gbXVsdGlwbGUgbGluZXMgd2hlbiBjb2xsYXBzZWQgcmFuZ2VzIGFyZSBwcmVzZW50LilcbiAgICpcbiAgICogQHNlZSBjb2RlbWlycm9yXFxzcmNcXG1lYXN1cmVtZW50XFxwb3NpdGlvbl9tZWFzdXJlbWVudC5qcyA1LjM3LjBcbiAgICovXG4gIGZ1bmN0aW9uIG1hcEZyb21MaW5lVmlldyhsaW5lVmlldywgbGluZSwgbGluZU4pIHtcbiAgICBpZiAobGluZVZpZXcubGluZSA9PSBsaW5lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXA6IGxpbmVWaWV3Lm1lYXN1cmUubWFwLFxuICAgICAgICBjYWNoZTogbGluZVZpZXcubWVhc3VyZS5jYWNoZSxcbiAgICAgICAgYmVmb3JlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZVZpZXcucmVzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpbmVWaWV3LnJlc3RbaV0gPT0gbGluZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1hcDogbGluZVZpZXcubWVhc3VyZS5tYXBzW2ldLFxuICAgICAgICAgIGNhY2hlOiBsaW5lVmlldy5tZWFzdXJlLmNhY2hlc1tpXSxcbiAgICAgICAgICBiZWZvcmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVWaWV3LnJlc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaW5lVmlldy5yZXN0W2ldLmxpbmVObygpID4gbGluZU4pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtYXA6IGxpbmVWaWV3Lm1lYXN1cmUubWFwc1tpXSxcbiAgICAgICAgICBjYWNoZTogbGluZVZpZXcubWVhc3VyZS5jYWNoZXNbaV0sXG4gICAgICAgICAgYmVmb3JlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjbV9pbnRlcm5hbCA9IC8qI19fUFVSRV9fKi8gT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGZpbmRWaWV3SW5kZXg6IGZpbmRWaWV3SW5kZXgsXG4gICAgZmluZFZpZXdGb3JMaW5lOiBmaW5kVmlld0ZvckxpbmUsXG4gICAgbWFwRnJvbUxpbmVWaWV3OiBtYXBGcm9tTGluZVZpZXcsXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBDb2RlTWlycm9yLXJlbGF0ZWQgdXRpbHNcbiAgICpcbiAgICogQGludGVybmFsIFBhcnQgb2YgSHlwZXJNRCBjb3JlLlxuICAgKlxuICAgKiBZb3Ugc2hhbGwgTk9UIGltcG9ydCB0aGlzIGZpbGU7IHBsZWFzZSBpbXBvcnQgXCJjb3JlXCIgaW5zdGVhZFxuICAgKi9cbiAgLyoqXG4gICAqIFVzZWZ1bCB0b29sIHRvIHNlZWsgZm9yIHRva2Vuc1xuICAgKlxuICAgKiAgICAgdmFyIHNlZWtlciA9IG5ldyBUb2tlblNlZWtlcihjbSlcbiAgICogICAgIHNlZWtlci5zZXRQb3MoMCwgMCkgLy8gc2V0IHRvIGxpbmUgMCwgY2hhciAwXG4gICAqICAgICB2YXIgYW5zID0gc2Vla2VyLmZpbmROZXh0KC9mb21yYXR0aW5nLWVtLylcbiAgICpcbiAgICovXG4gIHZhciBUb2tlblNlZWtlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb2tlblNlZWtlcihjbSkge1xuICAgICAgdGhpcy5jbSA9IGNtO1xuICAgIH1cbiAgICBUb2tlblNlZWtlci5wcm90b3R5cGUuZmluZE5leHQgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCB2YXJnLCBzaW5jZSkge1xuICAgICAgdmFyIGxpbmVObyA9IHRoaXMubGluZU5vO1xuICAgICAgdmFyIHRva2VucyA9IHRoaXMubGluZVRva2VucztcbiAgICAgIHZhciB0b2tlbiA9IG51bGw7XG4gICAgICB2YXIgaV90b2tlbiA9IHRoaXMuaV90b2tlbiArIDE7XG4gICAgICB2YXIgbWF5U3BhbkxpbmVzID0gZmFsc2U7XG4gICAgICBpZiAodmFyZyA9PT0gdHJ1ZSkge1xuICAgICAgICBtYXlTcGFuTGluZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFyZyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBpX3Rva2VuID0gdmFyZztcbiAgICAgIH1cbiAgICAgIGlmIChzaW5jZSkge1xuICAgICAgICBpZiAoc2luY2UubGluZSA+IGxpbmVObykge1xuICAgICAgICAgIGlfdG9rZW4gPSB0b2tlbnMubGVuZ3RoOyAvLyBqdXN0IGlnbm9yZSBjdXJyZW50IGxpbmVcbiAgICAgICAgfSBlbHNlIGlmIChzaW5jZS5saW5lIDwgbGluZU5vKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm9yICg7IGlfdG9rZW4gPCB0b2tlbnMubGVuZ3RoOyBpX3Rva2VuKyspIHtcbiAgICAgICAgICAgIGlmICh0b2tlbnNbaV90b2tlbl0uc3RhcnQgPj0gc2luY2UuY2gpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKDsgaV90b2tlbiA8IHRva2Vucy5sZW5ndGg7IGlfdG9rZW4rKykge1xuICAgICAgICB2YXIgdG9rZW5fdG1wID0gdG9rZW5zW2lfdG9rZW5dO1xuICAgICAgICBpZiAodHlwZW9mIGNvbmRpdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gY29uZGl0aW9uKHRva2VuX3RtcCwgdG9rZW5zLCBpX3Rva2VuKSA6IGNvbmRpdGlvbi50ZXN0KHRva2VuX3RtcC50eXBlKSkge1xuICAgICAgICAgIHRva2VuID0gdG9rZW5fdG1wO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXRva2VuICYmIG1heVNwYW5MaW5lcykge1xuICAgICAgICB2YXIgY21fMSA9IHRoaXMuY207XG4gICAgICAgIHZhciBzdGFydExpbmUgPSBNYXRoLm1heChzaW5jZSA/IHNpbmNlLmxpbmUgOiAwLCBsaW5lTm8gKyAxKTtcbiAgICAgICAgY21fMS5lYWNoTGluZShzdGFydExpbmUsIGNtXzEubGFzdExpbmUoKSArIDEsIGZ1bmN0aW9uIChsaW5lX2kpIHtcbiAgICAgICAgICBsaW5lTm8gPSBsaW5lX2kubGluZU5vKCk7XG4gICAgICAgICAgdG9rZW5zID0gY21fMS5nZXRMaW5lVG9rZW5zKGxpbmVObyk7XG4gICAgICAgICAgaV90b2tlbiA9IDA7XG4gICAgICAgICAgaWYgKHNpbmNlICYmIGxpbmVObyA9PT0gc2luY2UubGluZSkge1xuICAgICAgICAgICAgZm9yICg7IGlfdG9rZW4gPCB0b2tlbnMubGVuZ3RoOyBpX3Rva2VuKyspIHtcbiAgICAgICAgICAgICAgaWYgKHRva2Vuc1tpX3Rva2VuXS5zdGFydCA+PSBzaW5jZS5jaCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAoOyBpX3Rva2VuIDwgdG9rZW5zLmxlbmd0aDsgaV90b2tlbisrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW5fdG1wID0gdG9rZW5zW2lfdG9rZW5dO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0eXBlb2YgY29uZGl0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBjb25kaXRpb24odG9rZW5fdG1wLCB0b2tlbnMsIGlfdG9rZW4pIDogY29uZGl0aW9uLnRlc3QodG9rZW5fdG1wLnR5cGUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdG9rZW4gPSB0b2tlbl90bXA7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBzdG9wIGBlYWNoTGluZWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuID8geyBsaW5lTm86IGxpbmVObywgdG9rZW46IHRva2VuLCBpX3Rva2VuOiBpX3Rva2VuIH0gOiBudWxsO1xuICAgIH07XG4gICAgVG9rZW5TZWVrZXIucHJvdG90eXBlLmZpbmRQcmV2ID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgdmFyZywgc2luY2UpIHtcbiAgICAgIHZhciBsaW5lTm8gPSB0aGlzLmxpbmVObztcbiAgICAgIHZhciB0b2tlbnMgPSB0aGlzLmxpbmVUb2tlbnM7XG4gICAgICB2YXIgdG9rZW4gPSBudWxsO1xuICAgICAgdmFyIGlfdG9rZW4gPSB0aGlzLmlfdG9rZW4gLSAxO1xuICAgICAgdmFyIG1heVNwYW5MaW5lcyA9IGZhbHNlO1xuICAgICAgaWYgKHZhcmcgPT09IHRydWUpIHtcbiAgICAgICAgbWF5U3BhbkxpbmVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhcmcgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaV90b2tlbiA9IHZhcmc7XG4gICAgICB9XG4gICAgICBpZiAoc2luY2UpIHtcbiAgICAgICAgaWYgKHNpbmNlLmxpbmUgPCBsaW5lTm8pIHtcbiAgICAgICAgICBpX3Rva2VuID0gLTE7IC8vIGp1c3QgaWdub3JlIGN1cnJlbnQgbGluZVxuICAgICAgICB9IGVsc2UgaWYgKHNpbmNlLmxpbmUgPiBsaW5lTm8pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmb3IgKDsgaV90b2tlbiA8IHRva2Vucy5sZW5ndGg7IGlfdG9rZW4rKykge1xuICAgICAgICAgICAgaWYgKHRva2Vuc1tpX3Rva2VuXS5zdGFydCA+PSBzaW5jZS5jaCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpX3Rva2VuID49IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgaV90b2tlbiA9IHRva2Vucy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgZm9yICg7IGlfdG9rZW4gPj0gMDsgaV90b2tlbi0tKSB7XG4gICAgICAgIHZhciB0b2tlbl90bXAgPSB0b2tlbnNbaV90b2tlbl07XG4gICAgICAgIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBjb25kaXRpb24odG9rZW5fdG1wLCB0b2tlbnMsIGlfdG9rZW4pIDogY29uZGl0aW9uLnRlc3QodG9rZW5fdG1wLnR5cGUpKSB7XG4gICAgICAgICAgdG9rZW4gPSB0b2tlbl90bXA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdG9rZW4gJiYgbWF5U3BhbkxpbmVzKSB7XG4gICAgICAgIHZhciBjbSA9IHRoaXMuY207XG4gICAgICAgIHZhciBzdGFydExpbmUgPSBNYXRoLm1pbihzaW5jZSA/IHNpbmNlLmxpbmUgOiBjbS5sYXN0TGluZSgpLCBsaW5lTm8gLSAxKTtcbiAgICAgICAgdmFyIGVuZExpbmUgPSBjbS5maXJzdExpbmUoKTtcbiAgICAgICAgLy8gY20uZWFjaExpbmUgZG9lc24ndCBzdXBwb3J0IHJldmVyc2VkIHNlYXJjaGluZ1xuICAgICAgICAvLyB1c2Ugd2hpbGUuLi4gbG9vcCB0byBpdGVyYXRlXG4gICAgICAgIGxpbmVObyA9IHN0YXJ0TGluZSArIDE7XG4gICAgICAgIHdoaWxlICghdG9rZW4gJiYgZW5kTGluZSA8PSAtLWxpbmVObykge1xuICAgICAgICAgIGNtLmdldExpbmVIYW5kbGUobGluZU5vKTtcbiAgICAgICAgICB0b2tlbnMgPSBjbS5nZXRMaW5lVG9rZW5zKGxpbmVObyk7XG4gICAgICAgICAgaV90b2tlbiA9IDA7XG4gICAgICAgICAgaWYgKHNpbmNlICYmIGxpbmVObyA9PT0gc2luY2UubGluZSkge1xuICAgICAgICAgICAgZm9yICg7IGlfdG9rZW4gPCB0b2tlbnMubGVuZ3RoOyBpX3Rva2VuKyspIHtcbiAgICAgICAgICAgICAgaWYgKHRva2Vuc1tpX3Rva2VuXS5zdGFydCA+PSBzaW5jZS5jaCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpX3Rva2VuID49IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlfdG9rZW4gPSB0b2tlbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yICg7IGlfdG9rZW4gPj0gMDsgaV90b2tlbi0tKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW5fdG1wID0gdG9rZW5zW2lfdG9rZW5dO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0eXBlb2YgY29uZGl0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBjb25kaXRpb24odG9rZW5fdG1wLCB0b2tlbnMsIGlfdG9rZW4pIDogY29uZGl0aW9uLnRlc3QodG9rZW5fdG1wLnR5cGUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdG9rZW4gPSB0b2tlbl90bXA7XG4gICAgICAgICAgICAgIGJyZWFrOyAvLyBGT1VORCB0b2tlbiAhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW4gPyB7IGxpbmVObzogbGluZU5vLCB0b2tlbjogdG9rZW4sIGlfdG9rZW46IGlfdG9rZW4gfSA6IG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiByZXR1cm4gYSByYW5nZSBpbiB3aGljaCBldmVyeSB0b2tlbiBoYXMgdGhlIHNhbWUgc3R5bGUsIG9yIG1lZXQgc2FtZSBjb25kaXRpb25cbiAgICAgKi9cbiAgICBUb2tlblNlZWtlci5wcm90b3R5cGUuZXhwYW5kUmFuZ2UgPSBmdW5jdGlvbiAoc3R5bGUsIG1heVNwYW5MaW5lcykge1xuICAgICAgdmFyIGNtID0gdGhpcy5jbTtcbiAgICAgIHZhciBpc1N0eWxlZDtcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBpc1N0eWxlZCA9IHN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHN0eWxlID0gbmV3IFJlZ0V4cChcIig/Ol58XFxcXHMpXCIgKyBzdHlsZSArIFwiKD86XFxcXHN8JClcIik7XG4gICAgICAgIH1cbiAgICAgICAgaXNTdHlsZWQgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW4gPyBzdHlsZS50ZXN0KHRva2VuLnR5cGUgfHwgXCJcIikgOiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHZhciBmcm9tID0ge1xuICAgICAgICBsaW5lTm86IHRoaXMubGluZU5vLFxuICAgICAgICBpX3Rva2VuOiB0aGlzLmlfdG9rZW4sXG4gICAgICAgIHRva2VuOiB0aGlzLmxpbmVUb2tlbnNbdGhpcy5pX3Rva2VuXSxcbiAgICAgIH07XG4gICAgICB2YXIgdG8gPSBPYmplY3QuYXNzaWduKHt9LCBmcm9tKTtcbiAgICAgIC8vIGZpbmQgbGVmdFxuICAgICAgdmFyIGZvdW5kVW5zdHlsZWQgPSBmYWxzZSxcbiAgICAgICAgdG9rZW5zID0gdGhpcy5saW5lVG9rZW5zLFxuICAgICAgICBpID0gdGhpcy5pX3Rva2VuO1xuICAgICAgd2hpbGUgKCFmb3VuZFVuc3R5bGVkKSB7XG4gICAgICAgIGlmIChpID49IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICBpID0gdG9rZW5zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgIGlmICghaXNTdHlsZWQodG9rZW4sIHRva2VucywgaSkpIHtcbiAgICAgICAgICAgIGZvdW5kVW5zdHlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb20uaV90b2tlbiA9IGk7XG4gICAgICAgICAgICBmcm9tLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmb3VuZFVuc3R5bGVkIHx8ICEobWF5U3BhbkxpbmVzICYmIGZyb20ubGluZU5vID4gY20uZmlyc3RMaW5lKCkpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gZm91bmQsIG9yIG5vIG1vcmUgbGluZXNcbiAgICAgICAgdG9rZW5zID0gY20uZ2V0TGluZVRva2VucygtLWZyb20ubGluZU5vKTtcbiAgICAgICAgaSA9IHRva2Vucy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgLy8gZmluZCByaWdodFxuICAgICAgdmFyIGZvdW5kVW5zdHlsZWQgPSBmYWxzZSxcbiAgICAgICAgdG9rZW5zID0gdGhpcy5saW5lVG9rZW5zLFxuICAgICAgICBpID0gdGhpcy5pX3Rva2VuO1xuICAgICAgd2hpbGUgKCFmb3VuZFVuc3R5bGVkKSB7XG4gICAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICAgIGkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgIGlmICghaXNTdHlsZWQodG9rZW4sIHRva2VucywgaSkpIHtcbiAgICAgICAgICAgIGZvdW5kVW5zdHlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvLmlfdG9rZW4gPSBpO1xuICAgICAgICAgICAgdG8udG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvdW5kVW5zdHlsZWQgfHwgIShtYXlTcGFuTGluZXMgJiYgdG8ubGluZU5vIDwgY20ubGFzdExpbmUoKSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBmb3VuZCwgb3Igbm8gbW9yZSBsaW5lc1xuICAgICAgICB0b2tlbnMgPSBjbS5nZXRMaW5lVG9rZW5zKCsrdG8ubGluZU5vKTtcbiAgICAgICAgaSA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBmcm9tOiBmcm9tLCB0bzogdG8gfTtcbiAgICB9O1xuICAgIFRva2VuU2Vla2VyLnByb3RvdHlwZS5zZXRQb3MgPSBmdW5jdGlvbiAobGluZSwgY2gsIHByZWNpc2UpIHtcbiAgICAgIGlmIChjaCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNoID0gbGluZTtcbiAgICAgICAgbGluZSA9IHRoaXMubGluZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpbmUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgbGluZSA9IHRoaXMuY20uZ2V0TGluZUhhbmRsZShsaW5lKTtcbiAgICAgIH1cbiAgICAgIHZhciBzYW1lTGluZSA9IGxpbmUgPT09IHRoaXMubGluZTtcbiAgICAgIHZhciBpX3Rva2VuID0gMDtcbiAgICAgIGlmIChwcmVjaXNlIHx8ICFzYW1lTGluZSkge1xuICAgICAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgICAgICBpZiAoIWxpbmUpIHtcbiAgICAgICAgICAvLyDwn5GIIDB4R0cgVGVhbTogVGhpcyBpcyBzb21ldGltZXMgbnVsbD9cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saW5lTm8gPSBsaW5lLmxpbmVObygpO1xuICAgICAgICB0aGlzLmxpbmVUb2tlbnMgPSB0aGlzLmNtLmdldExpbmVUb2tlbnModGhpcy5saW5lTm8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdHJ5IHRvIHNwZWVkLXVwIHNlZWtpbmdcbiAgICAgICAgaV90b2tlbiA9IHRoaXMuaV90b2tlbjtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5saW5lVG9rZW5zW2lfdG9rZW5dO1xuICAgICAgICBpZiAodG9rZW4uc3RhcnQgPiBjaCkge1xuICAgICAgICAgIGlfdG9rZW4gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgdG9rZW5zID0gdGhpcy5saW5lVG9rZW5zO1xuICAgICAgZm9yICg7IGlfdG9rZW4gPCB0b2tlbnMubGVuZ3RoOyBpX3Rva2VuKyspIHtcbiAgICAgICAgaWYgKHRva2Vuc1tpX3Rva2VuXS5lbmQgPiBjaCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIGZvdW5kXG4gICAgICB9XG4gICAgICB0aGlzLmlfdG9rZW4gPSBpX3Rva2VuO1xuICAgIH07XG4gICAgLyoqIGdldCAoY3VycmVudCBvciBpZHgtdGgpIHRva2VuICovXG4gICAgVG9rZW5TZWVrZXIucHJvdG90eXBlLmdldFRva2VuID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgaWYgKHR5cGVvZiBpZHggIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaWR4ID0gdGhpcy5pX3Rva2VuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubGluZVRva2Vuc1tpZHhdO1xuICAgIH07XG4gICAgLyoqIGdldCAoY3VycmVudCBvciBpZHgtdGgpIHRva2VuIHR5cGUuIGFsd2F5cyByZXR1cm4gYSBzdHJpbmcgKi9cbiAgICBUb2tlblNlZWtlci5wcm90b3R5cGUuZ2V0VG9rZW5UeXBlID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgaWYgKHR5cGVvZiBpZHggIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaWR4ID0gdGhpcy5pX3Rva2VuO1xuICAgICAgfVxuICAgICAgdmFyIHQgPSB0aGlzLmxpbmVUb2tlbnNbaWR4XTtcbiAgICAgIHJldHVybiAodCAmJiB0LnR5cGUpIHx8IFwiXCI7XG4gICAgfTtcbiAgICByZXR1cm4gVG9rZW5TZWVrZXI7XG4gIH0pKCk7XG4gIC8qKlxuICAgKiBDb2RlTWlycm9yJ3MgYGdldExpbmVUb2tlbnNgIG1pZ2h0IG1lcmdlIGFkamFjZW50IGNoYXJzIHdpdGggc2FtZSBzdHlsZXMsXG4gICAqIGJ1dCB0aGlzIG9uZSB3b24ndC5cbiAgICpcbiAgICogVGhpcyBvbmUgd2lsbCBjb25zdW1lIG1vcmUgbWVtb3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge0NvZGVNaXJyb3IuTGluZUhhbmRsZX0gbGluZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119IGV2ZXJ5IGNoYXIncyBzdHlsZVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RXZlcnlDaGFyVG9rZW4obGluZSkge1xuICAgIHZhciBhbnMgPSBuZXcgQXJyYXkobGluZS50ZXh0Lmxlbmd0aCk7XG4gICAgdmFyIHNzID0gbGluZS5zdHlsZXM7XG4gICAgdmFyIGkgPSAwO1xuICAgIGlmIChzcykge1xuICAgICAgLy8gQ29kZU1pcnJvciBhbHJlYWR5IHBhcnNlZCB0aGlzIGxpbmUuIFVzZSBjYWNoZVxuICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBzcy5sZW5ndGg7IGogKz0gMikge1xuICAgICAgICB2YXIgaV90byA9IHNzW2pdLFxuICAgICAgICAgIHMgPSBzc1tqICsgMV07XG4gICAgICAgIHdoaWxlIChpIDwgaV90bykge1xuICAgICAgICAgIGFuc1tpKytdID0gcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBFbW1tLi4uIHNsb3cgbWV0aG9kXG4gICAgICB2YXIgY20gPSBsaW5lLnBhcmVudC5jbSB8fCBsaW5lLnBhcmVudC5wYXJlbnQuY20gfHwgbGluZS5wYXJlbnQucGFyZW50LnBhcmVudC5jbTtcbiAgICAgIHZhciBzc18xID0gY20uZ2V0TGluZVRva2VucyhsaW5lLmxpbmVObygpKTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc3NfMS5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgaV90byA9IHNzXzFbal0uZW5kLFxuICAgICAgICAgIHMgPSBzc18xW2pdLnR5cGU7XG4gICAgICAgIHdoaWxlIChpIDwgaV90bykge1xuICAgICAgICAgIGFuc1tpKytdID0gcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYW5zO1xuICB9XG4gIC8qKlxuICAgKiByZXR1cm4gYSByYW5nZSBpbiB3aGljaCBldmVyeSBjaGFyIGhhcyB0aGUgZ2l2ZW4gc3R5bGUgKGFrYS4gdG9rZW4gdHlwZSkuXG4gICAqIGFzc3VtaW5nIGNoYXIgYXQgYHBvc2AgYWxyZWFkeSBoYXMgdGhlIHN0eWxlLlxuICAgKlxuICAgKiB0aGUgcmVzdWx0IHdpbGwgTk9UIHNwYW4gbGluZXMuXG4gICAqXG4gICAqIEBwYXJhbSBzdHlsZSBha2EuIHRva2VuIHR5cGVcbiAgICogQHNlZSBUb2tlblNlZWtlciBpZiB5b3Ugd2FudCB0byBzcGFuIGxpbmVzXG4gICAqL1xuICBmdW5jdGlvbiBleHBhbmRSYW5nZShjbSwgcG9zLCBzdHlsZSkge1xuICAgIHZhciBsaW5lID0gcG9zLmxpbmU7XG4gICAgdmFyIGZyb20gPSB7IGxpbmU6IGxpbmUsIGNoOiAwIH07XG4gICAgdmFyIHRvID0geyBsaW5lOiBsaW5lLCBjaDogcG9zLmNoIH07XG4gICAgdmFyIHN0eWxlRm4gPSB0eXBlb2Ygc3R5bGUgPT09IFwiZnVuY3Rpb25cIiA/IHN0eWxlIDogZmFsc2U7XG4gICAgdmFyIHN0eWxlUkUgPSAhc3R5bGVGbiAmJiBuZXcgUmVnRXhwKFwiKD86XnxcXFxccylcIiArIHN0eWxlICsgXCIoPzpcXFxcc3wkKVwiKTtcbiAgICB2YXIgdG9rZW5zID0gY20uZ2V0TGluZVRva2VucyhsaW5lKTtcbiAgICB2YXIgaVNpbmNlO1xuICAgIGZvciAoaVNpbmNlID0gMDsgaVNpbmNlIDwgdG9rZW5zLmxlbmd0aDsgaVNpbmNlKyspIHtcbiAgICAgIGlmICh0b2tlbnNbaVNpbmNlXS5lbmQgPj0gcG9zLmNoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaVNpbmNlID09PSB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IGlTaW5jZTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgaWYgKHN0eWxlRm4gPyBzdHlsZUZuKHRva2VuKSA6IHN0eWxlUkUudGVzdCh0b2tlbi50eXBlKSkge1xuICAgICAgICB0by5jaCA9IHRva2VuLmVuZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gaVNpbmNlOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgaWYgKCEoc3R5bGVGbiA/IHN0eWxlRm4odG9rZW4pIDogc3R5bGVSRS50ZXN0KHRva2VuLnR5cGUpKSkge1xuICAgICAgICBmcm9tLmNoID0gdG9rZW4uZW5kO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZnJvbTogZnJvbSwgdG86IHRvIH07XG4gIH1cbiAgLyoqXG4gICAqIEdldCBvcmRlcmVkIHJhbmdlIGZyb20gYENvZGVNaXJyb3IuUmFuZ2VgLWxpa2Ugb2JqZWN0IG9yIGBbUG9zaXRpb24sIFBvc2l0aW9uXWBcbiAgICpcbiAgICogSW4gYW4gb3JkZXJlZCByYW5nZSwgVGhlIGZpcnN0IGBQb3NpdGlvbmAgbXVzdCBOT1QgYmUgYWZ0ZXIgdGhlIHNlY29uZC5cbiAgICovXG4gIGZ1bmN0aW9uIG9yZGVyZWRSYW5nZShyYW5nZSkge1xuICAgIGlmIChcImFuY2hvclwiIGluIHJhbmdlKSB7XG4gICAgICByYW5nZSA9IFtyYW5nZS5oZWFkLCByYW5nZS5hbmNob3JdO1xuICAgIH1cbiAgICBpZiAoQ29kZU1pcnJvci5jbXBQb3MocmFuZ2VbMF0sIHJhbmdlWzFdKSA+IDApIHtcbiAgICAgIHJldHVybiBbcmFuZ2VbMV0sIHJhbmdlWzBdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtyYW5nZVswXSwgcmFuZ2VbMV1dO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgdHdvIHJhbmdlIGhhcyBpbnRlcnNlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSByYW5nZTEgb3JkZXJlZCByYW5nZSAxICAoc3RhcnQgPD0gZW5kKVxuICAgKiBAcGFyYW0gcmFuZ2UyIG9yZGVyZWQgcmFuZ2UgMiAgKHN0YXJ0IDw9IGVuZClcbiAgICovXG4gIGZ1bmN0aW9uIHJhbmdlc0ludGVyc2VjdChyYW5nZTEsIHJhbmdlMikge1xuICAgIHZhciBmcm9tMSA9IHJhbmdlMVswXSxcbiAgICAgIHRvMSA9IHJhbmdlMVsxXTtcbiAgICB2YXIgZnJvbTIgPSByYW5nZTJbMF0sXG4gICAgICB0bzIgPSByYW5nZTJbMV07XG4gICAgcmV0dXJuICEoQ29kZU1pcnJvci5jbXBQb3ModG8xLCBmcm9tMikgPCAwIHx8IENvZGVNaXJyb3IuY21wUG9zKGZyb20xLCB0bzIpID4gMCk7XG4gIH1cblxuICAvKipcbiAgICogUG9zdC1wcm9jZXNzIENvZGVNaXJyb3ItbW9kZS1wYXJzZWQgbGluZXMsIGZpbmQgdGhlIHJhbmdlc1xuICAgKlxuICAgKiBmb3IgZXhhbXBsZSwgYSBwYXJzZWQgbGluZSBgWyoqSGVsbG8qKiBXb3JsZF0oeHh4LnR4dClgIHdpbGwgZ2l2ZXMgeW91OlxuICAgKlxuICAgKiAxLiBsaW5rIGZyb20gYFtgIHRvIGApYFxuICAgKiAyLiBib2xkIHRleHQgZnJvbSBgKipgIHRvIGFub3RoZXIgYCoqYFxuICAgKi9cbiAgdmFyIExpbmVTcGFuRXh0cmFjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpbmVTcGFuRXh0cmFjdG9yKGNtKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLmNtID0gY207XG4gICAgICB0aGlzLmNhY2hlcyA9IFtdOyAvLyBjYWNoZSBmb3IgZWFjaCBsaW5lc1xuICAgICAgY20ub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGNtLCBjaGFuZ2UpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBjaGFuZ2UuZnJvbS5saW5lO1xuICAgICAgICBpZiAoX3RoaXMuY2FjaGVzLmxlbmd0aCA+IGxpbmUpIHtcbiAgICAgICAgICBfdGhpcy5jYWNoZXMuc3BsaWNlKGxpbmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgTGluZVNwYW5FeHRyYWN0b3IucHJvdG90eXBlLmdldFRva2VuVHlwZXMgPSBmdW5jdGlvbiAodG9rZW4sIHByZXZUb2tlbikge1xuICAgICAgdmFyIHByZXZTdGF0ZSA9IHByZXZUb2tlbiA/IHByZXZUb2tlbi5zdGF0ZSA6IHt9O1xuICAgICAgdmFyIHN0YXRlID0gdG9rZW4uc3RhdGU7XG4gICAgICB2YXIgc3R5bGVzID0gXCIgXCIgKyB0b2tlbi50eXBlICsgXCIgXCI7XG4gICAgICB2YXIgYW5zID0ge1xuICAgICAgICAvLyBlbVxuICAgICAgICBlbTogc3RhdGUuZW0gPyAxIC8qIElTX1RISVNfVFlQRSAqLyA6IHByZXZTdGF0ZS5lbSA/IDIgLyogTEVBVklOR19USElTX1RZUEUgKi8gOiAwIC8qIE5PVEhJTkcgKi8sXG4gICAgICAgIC8vIHN0cmlrZXRocm91Z2hcbiAgICAgICAgc3RyaWtldGhyb3VnaDogc3RhdGUuc3RyaWtldGhyb3VnaFxuICAgICAgICAgID8gMSAvKiBJU19USElTX1RZUEUgKi9cbiAgICAgICAgICA6IHByZXZTdGF0ZS5zdHJpa2V0aHJvdWdoXG4gICAgICAgICAgPyAyIC8qIExFQVZJTkdfVEhJU19UWVBFICovXG4gICAgICAgICAgOiAwIC8qIE5PVEhJTkcgKi8sXG4gICAgICAgIC8vIHN0cm9uZ1xuICAgICAgICBzdHJvbmc6IHN0YXRlLnN0cm9uZyA/IDEgLyogSVNfVEhJU19UWVBFICovIDogcHJldlN0YXRlLnN0cm9uZyA/IDIgLyogTEVBVklOR19USElTX1RZUEUgKi8gOiAwIC8qIE5PVEhJTkcgKi8sXG4gICAgICAgIC8vIG1hcmtcbiAgICAgICAgbWFyazogc3RhdGUubWFyayA/IDEgLyogSVNfVEhJU19UWVBFICovIDogcHJldlN0YXRlLm1hcmsgPyAyIC8qIExFQVZJTkdfVEhJU19UWVBFICovIDogMCAvKiBOT1RISU5HICovLFxuICAgICAgICAvLyBpbnNcbiAgICAgICAgaW5zOiBzdGF0ZS5pbnMgPyAxIC8qIElTX1RISVNfVFlQRSAqLyA6IHByZXZTdGF0ZS5pbnMgPyAyIC8qIExFQVZJTkdfVEhJU19UWVBFICovIDogMCAvKiBOT1RISU5HICovLFxuICAgICAgICAvLyBzdWJcbiAgICAgICAgc3ViOiBzdGF0ZS5zdWIgPyAxIC8qIElTX1RISVNfVFlQRSAqLyA6IHByZXZTdGF0ZS5zdWIgPyAyIC8qIExFQVZJTkdfVEhJU19UWVBFICovIDogMCAvKiBOT1RISU5HICovLFxuICAgICAgICAvLyBzdXBcbiAgICAgICAgc3VwOiBzdGF0ZS5zdXAgPyAxIC8qIElTX1RISVNfVFlQRSAqLyA6IHByZXZTdGF0ZS5zdXAgPyAyIC8qIExFQVZJTkdfVEhJU19UWVBFICovIDogMCAvKiBOT1RISU5HICovLFxuICAgICAgICAvLyBjb2RlXG4gICAgICAgIGNvZGU6IHN0YXRlLmNvZGUgPyAxIC8qIElTX1RISVNfVFlQRSAqLyA6IHByZXZTdGF0ZS5jb2RlID8gMiAvKiBMRUFWSU5HX1RISVNfVFlQRSAqLyA6IDAgLyogTk9USElORyAqLyxcbiAgICAgICAgLy8gbGlua1RleHRcbiAgICAgICAgbGlua1RleHQ6IHN0YXRlLmxpbmtUZXh0XG4gICAgICAgICAgPyBzdGF0ZS5obWRMaW5rVHlwZSA9PT0gMyAvKiBOT1JNQUwgKi8gfHxcbiAgICAgICAgICAgIHN0YXRlLmhtZExpbmtUeXBlID09PSA3IC8qIEJBUkVMSU5LMiAqLyB8fFxuICAgICAgICAgICAgc3RhdGUuaG1kTGlua1R5cGUgPT09IDQgLyogV0lLSUxJTksgKi9cbiAgICAgICAgICAgID8gMSAvKiBJU19USElTX1RZUEUgKi9cbiAgICAgICAgICAgIDogMCAvKiBOT1RISU5HICovXG4gICAgICAgICAgOiBwcmV2U3RhdGUubGlua1RleHRcbiAgICAgICAgICA/IDIgLyogTEVBVklOR19USElTX1RZUEUgKi9cbiAgICAgICAgICA6IDAgLyogTk9USElORyAqLyxcbiAgICAgICAgLy8gbGlua0hyZWZcbiAgICAgICAgbGlua0hyZWY6XG4gICAgICAgICAgc3RhdGUubGlua0hyZWYgJiYgIXN0YXRlLmxpbmtUZXh0XG4gICAgICAgICAgICA/IDEgLyogSVNfVEhJU19UWVBFICovXG4gICAgICAgICAgICA6ICFzdGF0ZS5saW5rSHJlZiAmJiAhc3RhdGUubGlua1RleHQgJiYgcHJldlN0YXRlLmxpbmtIcmVmICYmICFwcmV2U3RhdGUubGlua1RleHRcbiAgICAgICAgICAgID8gMiAvKiBMRUFWSU5HX1RISVNfVFlQRSAqL1xuICAgICAgICAgICAgOiAwIC8qIE5PVEhJTkcgKi8sXG4gICAgICAgIC8vIHRhc2sgY2hlY2tib3hcbiAgICAgICAgdGFzazpcbiAgICAgICAgICBzdHlsZXMuaW5kZXhPZihcIiBmb3JtYXR0aW5nLXRhc2sgXCIpICE9PSAtMVxuICAgICAgICAgICAgPyAxIC8qIElTX1RISVNfVFlQRSAqLyB8IDIgLyogTEVBVklOR19USElTX1RZUEUgKi9cbiAgICAgICAgICAgIDogMCAvKiBOT1RISU5HICovLFxuICAgICAgICAvLyBoYXNodGFnXG4gICAgICAgIGhhc2h0YWc6IHN0YXRlLmhtZEhhc2h0YWdcbiAgICAgICAgICA/IDEgLyogSVNfVEhJU19UWVBFICovXG4gICAgICAgICAgOiBwcmV2U3RhdGUuaG1kSGFzaHRhZ1xuICAgICAgICAgID8gMiAvKiBMRUFWSU5HX1RISVNfVFlQRSAqL1xuICAgICAgICAgIDogMCAvKiBOT1RISU5HICovLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBhbnM7XG4gICAgfTtcbiAgICAvKiogZ2V0IHNwYW5zIGZyb20gYSBsaW5lIGFuZCB1cGRhdGUgdGhlIGNhY2hlICovXG4gICAgTGluZVNwYW5FeHRyYWN0b3IucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAobGluZU5vLCBwcmVjaXNlKSB7XG4gICAgICBpZiAoIXByZWNpc2UpIHtcbiAgICAgICAgLy8gbWF5YmUgY2FjaGUgaXMgdmFsaWQ/XG4gICAgICAgIHZhciBjYyA9IHRoaXMuY2FjaGVzW2xpbmVOb107XG4gICAgICAgIGlmIChjYykge1xuICAgICAgICAgIHJldHVybiBjYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHRva2VucyA9IHRoaXMuY20uZ2V0TGluZVRva2VucyhsaW5lTm8pO1xuICAgICAgdmFyIGxpbmVUZXh0ID0gdGhpcy5jbS5nZXRMaW5lKGxpbmVObyk7XG4gICAgICB2YXIgbGluZUxlbmd0aCA9IGxpbmVUZXh0Lmxlbmd0aDtcbiAgICAgIHZhciBhbnMgPSBbXTtcbiAgICAgIHZhciB1bmNsb3NlZCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICB2YXIgdHlwZXMgPSB0aGlzLmdldFRva2VuVHlwZXModG9rZW4sIHRva2Vuc1tpIC0gMV0pO1xuICAgICAgICBmb3IgKHZhciB0eXBlIGluIHR5cGVzKSB7XG4gICAgICAgICAgdmFyIHNwYW4gPSB1bmNsb3NlZFt0eXBlXTtcbiAgICAgICAgICBpZiAodHlwZXNbdHlwZV0gJiAxIC8qIElTX1RISVNfVFlQRSAqLykge1xuICAgICAgICAgICAgLy8gc3R5bGUgaXMgYWN0aXZlXG4gICAgICAgICAgICBpZiAoIXNwYW4pIHtcbiAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3IHNwYW4gaWYgbmVlZGVkXG4gICAgICAgICAgICAgIHNwYW4gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBiZWdpbjogdG9rZW4uc3RhcnQsXG4gICAgICAgICAgICAgICAgZW5kOiBsaW5lTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGhlYWQ6IHRva2VuLFxuICAgICAgICAgICAgICAgIGhlYWRfaTogaSxcbiAgICAgICAgICAgICAgICB0YWlsOiB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgIHRhaWxfaTogdG9rZW5zLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgdGV4dDogbGluZVRleHQuc2xpY2UodG9rZW4uc3RhcnQpLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBhbnMucHVzaChzcGFuKTtcbiAgICAgICAgICAgICAgdW5jbG9zZWRbdHlwZV0gPSBzcGFuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZXNbdHlwZV0gJiAyIC8qIExFQVZJTkdfVEhJU19UWVBFICovKSB7XG4gICAgICAgICAgICAvLyBhIHN0eWxlIGlzIGV4aXRpbmdcbiAgICAgICAgICAgIGlmIChzcGFuKSB7XG4gICAgICAgICAgICAgIC8vIGNsb3NlIGFuIHVuY2xvc2VkIHNwYW5cbiAgICAgICAgICAgICAgc3Bhbi50YWlsID0gdG9rZW47XG4gICAgICAgICAgICAgIHNwYW4udGFpbF9pID0gaTtcbiAgICAgICAgICAgICAgc3Bhbi5lbmQgPSB0b2tlbi5lbmQ7XG4gICAgICAgICAgICAgIHNwYW4udGV4dCA9IHNwYW4udGV4dC5zbGljZSgwLCBzcGFuLmVuZCAtIHNwYW4uYmVnaW4pO1xuICAgICAgICAgICAgICB1bmNsb3NlZFt0eXBlXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNhY2hlc1tsaW5lTm9dID0gYW5zO1xuICAgICAgcmV0dXJuIGFucztcbiAgICB9O1xuICAgIExpbmVTcGFuRXh0cmFjdG9yLnByb3RvdHlwZS5maW5kU3BhbnNBdCA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHZhciBzcGFucyA9IHRoaXMuZXh0cmFjdChwb3MubGluZSk7XG4gICAgICB2YXIgY2ggPSBwb3MuY2g7XG4gICAgICB2YXIgYW5zID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzcGFuID0gc3BhbnNbaV07XG4gICAgICAgIGlmIChzcGFuLmJlZ2luID4gY2gpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ggPj0gc3Bhbi5iZWdpbiAmJiBzcGFuLmVuZCA+PSBjaCkge1xuICAgICAgICAgIGFucy5wdXNoKHNwYW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYW5zO1xuICAgIH07XG4gICAgTGluZVNwYW5FeHRyYWN0b3IucHJvdG90eXBlLmZpbmRTcGFuV2l0aFR5cGVBdCA9IGZ1bmN0aW9uIChwb3MsIHR5cGUpIHtcbiAgICAgIHZhciBzcGFucyA9IHRoaXMuZXh0cmFjdChwb3MubGluZSk7XG4gICAgICB2YXIgY2ggPSBwb3MuY2g7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzcGFuID0gc3BhbnNbaV07XG4gICAgICAgIGlmIChzcGFuLmJlZ2luID4gY2gpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ggPj0gc3Bhbi5iZWdpbiAmJiBzcGFuLmVuZCA+PSBjaCAmJiBzcGFuLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gTGluZVNwYW5FeHRyYWN0b3I7XG4gIH0pKCk7XG4gIHZhciBleHRyYWN0b3Jfc3ltYm9sID0gbWFrZVN5bWJvbChcIkxpbmVTcGFuRXh0cmFjdG9yXCIpO1xuICAvKipcbiAgICogR2V0IGEgYExpbmVTcGFuRXh0cmFjdG9yYCB0byBleHRyYWN0IHNwYW5zIGZyb20gQ29kZU1pcnJvciBwYXJzZWQgbGluZXNcbiAgICpcbiAgICogZm9yIGV4YW1wbGUsIGEgcGFyc2VkIGxpbmUgYFsqKkhlbGxvKiogV29ybGRdKHh4eC50eHQpYCB3aWxsIGdpdmVzIHlvdTpcbiAgICpcbiAgICogMS4gbGluayBmcm9tIGBbYCB0byBgKWBcbiAgICogMi4gYm9sZCB0ZXh0IGZyb20gYCoqYCB0byBhbm90aGVyIGAqKmBcbiAgICovXG4gIGZ1bmN0aW9uIGdldExpbmVTcGFuRXh0cmFjdG9yKGNtKSB7XG4gICAgaWYgKGV4dHJhY3Rvcl9zeW1ib2wgaW4gY20pIHtcbiAgICAgIHJldHVybiBjbVtleHRyYWN0b3Jfc3ltYm9sXTtcbiAgICB9XG4gICAgdmFyIGluc3QgPSAoY21bZXh0cmFjdG9yX3N5bWJvbF0gPSBuZXcgTGluZVNwYW5FeHRyYWN0b3IoY20pKTtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUN1cnNvckRpc3BsYXkoY20sIHNraXBDYWNoZUNsZWFuaW5nKSB7XG4gICAgaWYgKCFza2lwQ2FjaGVDbGVhbmluZykge1xuICAgICAgdmFyIGx2cyA9IGNtLmRpc3BsYXkudmlldyAvLyBMaW5lVmlldyBzXG4gICAgICBmb3IgKHZhciBsaW5lVmlldyBvZiBsdnMpIHtcbiAgICAgICAgaWYgKGxpbmVWaWV3Lm1lYXN1cmUpIGxpbmVWaWV3Lm1lYXN1cmUuY2FjaGUgPSB7fVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjbS5kaXNwbGF5LmlucHV0LnNob3dTZWxlY3Rpb24oY20uZGlzcGxheS5pbnB1dC5wcmVwYXJlU2VsZWN0aW9uKCkpXG4gICAgfSwgNjApIC8vIHdhaXQgZm9yIGNzcyBzdHlsZVxuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxzIGZvciBIeXBlck1EIGFkZG9uc1xuICAgKlxuICAgKiBAaW50ZXJuYWwgUGFydCBvZiBIeXBlck1EIGNvcmUuXG4gICAqXG4gICAqIFlvdSBzaGFsbCBOT1QgaW1wb3J0IHRoaXMgZmlsZTsgcGxlYXNlIGltcG9ydCBcImNvcmVcIiBpbnN0ZWFkXG4gICAqL1xuICB2YXIgQWRkb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgIGZ1bmN0aW9uIEFkZG9uKGNtKSB7fVxuICAgIHJldHVybiBBZGRvbjtcbiAgfSkoKTtcbiAgLyoqIG1ha2UgYSBTaW5nbGV0b24gZ2V0dGVyICovXG4gIGZ1bmN0aW9uIEdldHRlcihuYW1lLCBDbGFzc0N0b3IsIGRlZmF1bHRPcHRpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNtKSB7XG4gICAgICBpZiAoIWNtLmhtZCkge1xuICAgICAgICBjbS5obWQgPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmICghY20uaG1kW25hbWVdKSB7XG4gICAgICAgIHZhciBpbnN0ID0gbmV3IENsYXNzQ3RvcihjbSk7XG4gICAgICAgIGNtLmhtZFtuYW1lXSA9IGluc3Q7XG4gICAgICAgIGlmIChkZWZhdWx0T3B0aW9uKSB7XG4gICAgICAgICAgZm9yICh2YXIgayBpbiBkZWZhdWx0T3B0aW9uKSB7XG4gICAgICAgICAgICBpbnN0W2tdID0gZGVmYXVsdE9wdGlvbltrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4gY20uaG1kW25hbWVdO1xuICAgIH07XG4gIH1cblxuICB2YXIgYWRkb24gPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBBZGRvbjogQWRkb24sXG4gICAgR2V0dGVyOiBHZXR0ZXIsXG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNtcFBvc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBDb2RlTWlycm9yLmNtcFBvcztcbiAgICB9LFxuICB9KTtcbiAgZXhwb3J0cy5BZGRvbiA9IGFkZG9uO1xuICBleHBvcnRzLkZsaXBGbG9wID0gRmxpcEZsb3A7XG4gIGV4cG9ydHMuVG9rZW5TZWVrZXIgPSBUb2tlblNlZWtlcjtcbiAgZXhwb3J0cy5hZGRDbGFzcyA9IGFkZENsYXNzO1xuICBleHBvcnRzLmNtX2ludGVybmFsID0gY21faW50ZXJuYWw7XG4gIGV4cG9ydHMuY29udGFpbnMgPSBjb250YWlucztcbiAgZXhwb3J0cy5kZWJvdW5jZSA9IGRlYm91bmNlO1xuICBleHBvcnRzLnVwZGF0ZUN1cnNvckRpc3BsYXkgPSB1cGRhdGVDdXJzb3JEaXNwbGF5XG4gIGV4cG9ydHMuZXhwYW5kUmFuZ2UgPSBleHBhbmRSYW5nZTtcbiAgZXhwb3J0cy5mcm9tVGV4dEFyZWEgPSBmcm9tVGV4dEFyZWE7XG4gIGV4cG9ydHMuZ2V0RXZlcnlDaGFyVG9rZW4gPSBnZXRFdmVyeUNoYXJUb2tlbjtcbiAgZXhwb3J0cy5nZXRMaW5lU3BhbkV4dHJhY3RvciA9IGdldExpbmVTcGFuRXh0cmFjdG9yO1xuICBleHBvcnRzLm1ha2VTeW1ib2wgPSBtYWtlU3ltYm9sO1xuICBleHBvcnRzLm5vcm1hbFZpc3VhbENvbmZpZyA9IG5vcm1hbFZpc3VhbENvbmZpZztcbiAgZXhwb3J0cy5vcmRlcmVkUmFuZ2UgPSBvcmRlcmVkUmFuZ2U7XG4gIGV4cG9ydHMucmFuZ2VzSW50ZXJzZWN0ID0gcmFuZ2VzSW50ZXJzZWN0O1xuICBleHBvcnRzLnJlcGVhdCA9IHJlcGVhdDtcbiAgZXhwb3J0cy5yZXBlYXRTdHIgPSByZXBlYXRTdHI7XG4gIGV4cG9ydHMucm1DbGFzcyA9IHJtQ2xhc3M7XG4gIGV4cG9ydHMuc3VnZ2VzdGVkRWRpdG9yQ29uZmlnID0gc3VnZ2VzdGVkRWRpdG9yQ29uZmlnO1xuICBleHBvcnRzLnN3aXRjaFRvSHlwZXJNRCA9IHN3aXRjaFRvSHlwZXJNRDtcbiAgZXhwb3J0cy5zd2l0Y2hUb05vcm1hbCA9IHN3aXRjaFRvTm9ybWFsO1xuICBleHBvcnRzLnRyeVRvUnVuID0gdHJ5VG9SdW47XG4gIGV4cG9ydHMudmlzaXRFbGVtZW50cyA9IHZpc2l0RWxlbWVudHM7XG4gIGV4cG9ydHMud2F0Y2hTaXplID0gd2F0Y2hTaXplO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbn0pO1xuIiwiLy8gSHlwZXJNRCwgY29weXJpZ2h0IChjKSBieSBsYW9idWJ1XG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cDovL2xhb2J1YnUubmV0L0h5cGVyTUQvTElDRU5TRVxuLy9cbi8vIERFU0NSSVBUSU9OOiBDbGljayB0byBvcGVuIGxpbmtzIC8ganVtcCB0byBmb290bm90ZXMgLyB0b2dnbGUgVE9ET3MsIGFuZCBtb3JlLlxuLy9cbi8vIFdpdGggY3VzdG9tIENsaWNrSGFuZGxlciBzdXBwb3J0ZWRcbi8vXG52YXIgX19jcmVhdGVCaW5kaW5nID1cbiAgKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8XG4gIChPYmplY3QuY3JlYXRlXG4gICAgPyBmdW5jdGlvbiAobywgbSwgaywgazIpIHtcbiAgICAgICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBtW2tdO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIDogZnVuY3Rpb24gKG8sIG0sIGssIGsyKSB7XG4gICAgICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgICAgIG9bazJdID0gbVtrXTtcbiAgICAgIH0pO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9XG4gICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fFxuICAoT2JqZWN0LmNyZWF0ZVxuICAgID8gZnVuY3Rpb24gKG8sIHYpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xuICAgICAgfVxuICAgIDogZnVuY3Rpb24gKG8sIHYpIHtcbiAgICAgICAgb1tcImRlZmF1bHRcIl0gPSB2O1xuICAgICAgfSk7XG52YXIgX19pbXBvcnRTdGFyID1cbiAgKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8XG4gIGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpXG4gICAgICBmb3IgKHZhciBrIGluIG1vZClcbiAgICAgICAgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuKGZ1bmN0aW9uIChtb2QpIHtcbiAgLy9bSHlwZXJNRF0gVU1EIHBhdGNoZWQhXG4gIC8qcGxhaW4gZW52Ki8gbW9kKG51bGwsIChIeXBlck1ELkNsaWNrID0gSHlwZXJNRC5DbGljayB8fCB7fSksIENvZGVNaXJyb3IsIEh5cGVyTUQsIEh5cGVyTUQuUmVhZExpbmspO1xufSkoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIENvZGVNaXJyb3IsIGNvcmVfMSwgcmVhZF9saW5rXzEpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgZXhwb3J0cy5nZXRBZGRvbiA9XG4gICAgZXhwb3J0cy5DbGljayA9XG4gICAgZXhwb3J0cy5zdWdnZXN0ZWRPcHRpb24gPVxuICAgIGV4cG9ydHMuZGVmYXVsdE9wdGlvbiA9XG4gICAgZXhwb3J0cy5kZWZhdWx0Q2xpY2tIYW5kbGVyID1cbiAgICAgIHZvaWQgMDtcbiAgQ29kZU1pcnJvciA9IF9faW1wb3J0U3RhcihDb2RlTWlycm9yKTtcbiAgLy8jZW5kcmVnaW9uXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gIC8vI3JlZ2lvbiBkZWZhdWx0Q2xpY2tIYW5kbGVyXG4gIHZhciBkZWZhdWx0Q2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGluZm8sIGNtKSB7XG4gICAgdmFyIHRleHQgPSBpbmZvLnRleHQsXG4gICAgICB0eXBlID0gaW5mby50eXBlLFxuICAgICAgdXJsID0gaW5mby51cmwsXG4gICAgICBwb3MgPSBpbmZvLnBvcztcbiAgICBpZiAodHlwZSA9PT0gXCJ0b2RvXCIpIHtcbiAgICAgIHZhciBfYSA9IGNvcmVfMS5leHBhbmRSYW5nZShjbSwgcG9zLCBcImZvcm1hdHRpbmctdGFza1wiKSxcbiAgICAgICAgZnJvbSA9IF9hLmZyb20sXG4gICAgICAgIHRvID0gX2EudG87XG4gICAgICB2YXIgdGV4dF8xID0gY20uZ2V0UmFuZ2UoZnJvbSwgdG8pO1xuICAgICAgdGV4dF8xID0gdGV4dF8xID09PSBcIlsgXVwiID8gXCJbeF1cIiA6IFwiWyBdXCI7XG4gICAgICBjbS5yZXBsYWNlUmFuZ2UodGV4dF8xLCBmcm9tLCB0byk7XG4gICAgfVxuICB9O1xuICBleHBvcnRzLmRlZmF1bHRDbGlja0hhbmRsZXIgPSBkZWZhdWx0Q2xpY2tIYW5kbGVyO1xuXG4gIGV4cG9ydHMuZGVmYXVsdE9wdGlvbiA9IHtcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBoYW5kbGVyOiBudWxsLFxuICB9O1xuICBleHBvcnRzLnN1Z2dlc3RlZE9wdGlvbiA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICB9O1xuICBjb3JlXzEuc3VnZ2VzdGVkRWRpdG9yQ29uZmlnLmhtZENsaWNrID0gZXhwb3J0cy5zdWdnZXN0ZWRPcHRpb247XG4gIENvZGVNaXJyb3IuZGVmaW5lT3B0aW9uKFwiaG1kQ2xpY2tcIiwgZXhwb3J0cy5kZWZhdWx0T3B0aW9uLCBmdW5jdGlvbiAoY20sIG5ld1ZhbCkge1xuICAgIC8vLy8vIGNvbnZlcnQgbmV3VmFsJ3MgdHlwZSB0byBgUGFydGlhbDxPcHRpb25zPmAsIGlmIGl0IGlzIG5vdC5cbiAgICBpZiAoIW5ld1ZhbCB8fCB0eXBlb2YgbmV3VmFsID09PSBcImJvb2xlYW5cIikge1xuICAgICAgbmV3VmFsID0geyBlbmFibGVkOiAhIW5ld1ZhbCB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5ld1ZhbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBuZXdWYWwgPSB7IGVuYWJsZWQ6IHRydWUsIGhhbmRsZXI6IG5ld1ZhbCB9O1xuICAgIH1cbiAgICAvLy8vLyBhcHBseSBjb25maWcgYW5kIHdyaXRlIG5ldyB2YWx1ZXMgaW50byBjbVxuICAgIHZhciBpbnN0ID0gZXhwb3J0cy5nZXRBZGRvbihjbSk7XG4gICAgZm9yICh2YXIgayBpbiBleHBvcnRzLmRlZmF1bHRPcHRpb24pIHtcbiAgICAgIGluc3Rba10gPSBrIGluIG5ld1ZhbCA/IG5ld1ZhbFtrXSA6IGV4cG9ydHMuZGVmYXVsdE9wdGlvbltrXTtcbiAgICB9XG4gIH0pO1xuICAvLyNlbmRyZWdpb25cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgLy8jcmVnaW9uIEFkZG9uIENsYXNzXG4gIHZhciBDbGljayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDbGljayhjbSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5jbSA9IGNtO1xuICAgICAgLyoqIHJlbW92ZSBtb2RpZmllciBjbGFzc05hbWUgdG8gZWRpdG9yIERPTSAqL1xuICAgICAgdGhpcy5fbW91c2VNb3ZlX2tleURldGVjdCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB2YXIgZWwgPSBfdGhpcy5lbDtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZSxcbiAgICAgICAgICBuZXdDbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIHZhciBhbHRDbGFzcyA9IFwiSHlwZXJNRC13aXRoLWFsdFwiO1xuICAgICAgICB2YXIgY3RybENsYXNzID0gXCJIeXBlck1ELXdpdGgtY3RybFwiO1xuICAgICAgICBpZiAoIWV2LmFsdEtleSAmJiBjbGFzc05hbWUuaW5kZXhPZihhbHRDbGFzcykgPj0gMCkge1xuICAgICAgICAgIG5ld0NsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKGFsdENsYXNzLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWV2LmN0cmxLZXkgJiYgY2xhc3NOYW1lLmluZGV4T2YoY3RybENsYXNzKSA+PSAwKSB7XG4gICAgICAgICAgbmV3Q2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoY3RybENsYXNzLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWV2LmFsdEtleSAmJiAhZXYuY3RybEtleSkge1xuICAgICAgICAgIF90aGlzLl9LZXlEZXRlY3RvckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgX3RoaXMuX21vdXNlTW92ZV9rZXlEZXRlY3QsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3NOYW1lICE9IG5ld0NsYXNzTmFtZSkgZWwuY2xhc3NOYW1lID0gbmV3Q2xhc3NOYW1lLnRyaW0oKTtcbiAgICAgIH07XG4gICAgICAvKiogYWRkIG1vZGlmaWVyIGNsYXNzTmFtZSB0byBlZGl0b3IgRE9NICovXG4gICAgICB0aGlzLl9rZXlEb3duID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBrYyA9IGV2LmtleUNvZGUgfHwgZXYud2hpY2g7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICBpZiAoa2MgPT0gMTcpIGNsYXNzTmFtZSA9IFwiSHlwZXJNRC13aXRoLWN0cmxcIjtcbiAgICAgICAgaWYgKGtjID09IDE4KSBjbGFzc05hbWUgPSBcIkh5cGVyTUQtd2l0aC1hbHRcIjtcbiAgICAgICAgdmFyIGVsID0gX3RoaXMuZWw7XG4gICAgICAgIGlmIChjbGFzc05hbWUgJiYgZWwuY2xhc3NOYW1lLmluZGV4T2YoY2xhc3NOYW1lKSA9PSAtMSkge1xuICAgICAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV90aGlzLl9LZXlEZXRlY3RvckFjdGl2ZSkge1xuICAgICAgICAgIF90aGlzLl9LZXlEZXRlY3RvckFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgX3RoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBfdGhpcy5fbW91c2VNb3ZlX2tleURldGVjdCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBVbmJpbmQgX21vdXNlVXAsIHRoZW4gY2FsbCBDbGlja0hhbmRsZXIgaWYgbW91c2Ugbm90IGJvdW5jZVxuICAgICAgICovXG4gICAgICB0aGlzLl9tb3VzZVVwID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBjaW5mbyA9IF90aGlzLl9jaW5mbztcbiAgICAgICAgX3RoaXMubGluZURpdi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBfdGhpcy5fbW91c2VVcCwgZmFsc2UpO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZXYuY2xpZW50WCAtIGNpbmZvLmNsaWVudFgpID4gNSB8fCBNYXRoLmFicyhldi5jbGllbnRZIC0gY2luZm8uY2xpZW50WSkgPiA1KSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgX3RoaXMuaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiICYmIF90aGlzLmhhbmRsZXIoY2luZm8sIF90aGlzLmNtKSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgZXhwb3J0cy5kZWZhdWx0Q2xpY2tIYW5kbGVyKGNpbmZvLCBfdGhpcy5jbSk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBUcnkgdG8gY29uc3RydWN0IENsaWNrSW5mbyBhbmQgYmluZCBfbW91c2VVcFxuICAgICAgICovXG4gICAgICB0aGlzLl9tb3VzZURvd24gPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGV2LmJ1dHRvbixcbiAgICAgICAgICBjbGllbnRYID0gZXYuY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZID0gZXYuY2xpZW50WSxcbiAgICAgICAgICBjdHJsS2V5ID0gZXYuY3RybEtleSxcbiAgICAgICAgICBhbHRLZXkgPSBldi5hbHRLZXksXG4gICAgICAgICAgc2hpZnRLZXkgPSBldi5zaGlmdEtleTtcbiAgICAgICAgdmFyIGNtID0gX3RoaXMuY207XG4gICAgICAgIGlmIChldi50YXJnZXQudGFnTmFtZSA9PT0gXCJQUkVcIikgcmV0dXJuO1xuICAgICAgICB2YXIgcG9zID0gY20uY29vcmRzQ2hhcih7IGxlZnQ6IGNsaWVudFgsIHRvcDogY2xpZW50WSB9LCBcIndpbmRvd1wiKTtcbiAgICAgICAgdmFyIHJhbmdlO1xuICAgICAgICB2YXIgdG9rZW4gPSBjbS5nZXRUb2tlbkF0KHBvcyk7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRva2VuLnN0YXRlO1xuICAgICAgICB2YXIgc3R5bGVzID0gXCIgXCIgKyB0b2tlbi50eXBlICsgXCIgXCI7XG4gICAgICAgIHZhciBtYXQ7XG4gICAgICAgIHZhciB0eXBlID0gbnVsbDtcbiAgICAgICAgdmFyIHRleHQsIHVybDtcbiAgICAgICAgaWYgKHN0eWxlcy5tYXRjaCgvXFxzZm9ybWF0dGluZy10YXNrXFxzLykpIHtcbiAgICAgICAgICAvLyBUTy1ETyBjaGVja2JveFxuICAgICAgICAgIHR5cGUgPSBcInRvZG9cIjtcbiAgICAgICAgICByYW5nZSA9IGNvcmVfMS5leHBhbmRSYW5nZShjbSwgcG9zLCBcImZvcm1hdHRpbmctdGFza1wiKTtcbiAgICAgICAgICByYW5nZS50by5jaCA9IGNtLmdldExpbmUocG9zLmxpbmUpLmxlbmd0aDtcbiAgICAgICAgICB0ZXh0ID0gY20uZ2V0UmFuZ2UocmFuZ2UuZnJvbSwgcmFuZ2UudG8pO1xuICAgICAgICAgIHVybCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBfdGhpcy5fY2luZm8gPSB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgICBidXR0b246IGJ1dHRvbixcbiAgICAgICAgICAgIGNsaWVudFg6IGNsaWVudFgsXG4gICAgICAgICAgICBjbGllbnRZOiBjbGllbnRZLFxuICAgICAgICAgICAgY3RybEtleTogY3RybEtleSxcbiAgICAgICAgICAgIGFsdEtleTogYWx0S2V5LFxuICAgICAgICAgICAgc2hpZnRLZXk6IHNoaWZ0S2V5LFxuICAgICAgICAgIH07XG4gICAgICAgICAgX3RoaXMubGluZURpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBfdGhpcy5fbW91c2VVcCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5saW5lRGl2ID0gY20uZGlzcGxheS5saW5lRGl2O1xuICAgICAgdmFyIGVsID0gKHRoaXMuZWwgPSBjbS5nZXRXcmFwcGVyRWxlbWVudCgpKTtcbiAgICAgIG5ldyBjb3JlXzEuRmxpcEZsb3AoXG4gICAgICAgIC8qIE9OICAqLyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMubGluZURpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIF90aGlzLl9tb3VzZURvd24sIGZhbHNlKTtcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBfdGhpcy5fa2V5RG93biwgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICAvKiBPRkYgKi8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmxpbmVEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBfdGhpcy5fbW91c2VEb3duLCBmYWxzZSk7XG4gICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgX3RoaXMuX2tleURvd24sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgKS5iaW5kKHRoaXMsIFwiZW5hYmxlZFwiLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIENsaWNrO1xuICB9KSgpO1xuICBleHBvcnRzLkNsaWNrID0gQ2xpY2s7XG4gIC8vI2VuZHJlZ2lvblxuICAvKiogQURET04gR0VUVEVSIChTaW5nbGV0b24gUGF0dGVybik6IGEgZWRpdG9yIGNhbiBoYXZlIG9ubHkgb25lIENsaWNrIGluc3RhbmNlICovXG4gIGV4cG9ydHMuZ2V0QWRkb24gPSBjb3JlXzEuQWRkb24uR2V0dGVyKFwiQ2xpY2tcIiwgQ2xpY2ssIGV4cG9ydHMuZGVmYXVsdE9wdGlvbiAvKiogaWYgaGFzIG9wdGlvbnMgKi8pO1xufSk7XG4iLCIvLyBIeXBlck1ELCBjb3B5cmlnaHQgKGMpIGJ5IGxhb2J1YnVcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwOi8vbGFvYnVidS5uZXQvSHlwZXJNRC9MSUNFTlNFXG4vL1xuLy8gREVTQ1JJUFRJT046IEF1dG8gc2hvdy9oaWRlIG1hcmtkb3duIHRva2VucyBsaWtlIGAjI2Agb3IgYCpgXG4vL1xuLy8gT25seSB3b3JrcyB3aXRoIGBoeXBlcm1kYCBtb2RlLCByZXF1aXJlIHNwZWNpYWwgQ1NTIHJ1bGVzXG4vL1xudmFyIF9fY3JlYXRlQmluZGluZyA9XG4gICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fFxuICAoT2JqZWN0LmNyZWF0ZVxuICAgID8gZnVuY3Rpb24gKG8sIG0sIGssIGsyKSB7XG4gICAgICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwge1xuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbVtrXTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICA6IGZ1bmN0aW9uIChvLCBtLCBrLCBrMikge1xuICAgICAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgICAgICBvW2syXSA9IG1ba107XG4gICAgICB9KTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPVxuICAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHxcbiAgKE9iamVjdC5jcmVhdGVcbiAgICA/IGZ1bmN0aW9uIChvLCB2KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbiAgICAgIH1cbiAgICA6IGZ1bmN0aW9uIChvLCB2KSB7XG4gICAgICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbiAgICAgIH0pO1xudmFyIF9faW1wb3J0U3RhciA9XG4gICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fFxuICBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKVxuICAgICAgZm9yICh2YXIgayBpbiBtb2QpXG4gICAgICAgIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbihmdW5jdGlvbiAobW9kKSB7XG4gIC8vW0h5cGVyTURdIFVNRCBwYXRjaGVkIVxuICAvKnBsYWluIGVudiovIG1vZChudWxsLCB7fSwgQ29kZU1pcnJvciwgSHlwZXJNRCwgbnVsbCk7XG59KShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgQ29kZU1pcnJvciwgY29yZV8xKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gIGV4cG9ydHMuZ2V0QWRkb24gPSBleHBvcnRzLkhpZGVUb2tlbiA9IGV4cG9ydHMuc3VnZ2VzdGVkT3B0aW9uID0gZXhwb3J0cy5kZWZhdWx0T3B0aW9uID0gdm9pZCAwO1xuICBDb2RlTWlycm9yID0gX19pbXBvcnRTdGFyKENvZGVNaXJyb3IpO1xuICB2YXIgREVCVUcgPSBmYWxzZTtcbiAgLy8jcmVnaW9uIEludGVybmFsIEZ1bmN0aW9uLi4uXG4gIC8qKiBjaGVjayBpZiBoYXMgdGhlIGNsYXNzIGFuZCByZW1vdmUgaXQgKi9cbiAgZnVuY3Rpb24gcm1DbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGMgPSBcIiBcIiArIGVsLmNsYXNzTmFtZSArIFwiIFwiLFxuICAgICAgY25wID0gXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICBpZiAoYy5pbmRleE9mKGNucCkgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgZWwuY2xhc3NOYW1lID0gYy5yZXBsYWNlKGNucCwgXCJcIikudHJpbSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKiBjaGVjayBpZiBOT1QgaGFzIHRoZSBjbGFzcyBhbmQgYWRkIGl0ICovXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgYyA9IFwiIFwiICsgZWwuY2xhc3NOYW1lICsgXCIgXCIsXG4gICAgICBjbnAgPSBcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiO1xuICAgIGlmIChjLmluZGV4T2YoY25wKSAhPT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBleHBvcnRzLmRlZmF1bHRPcHRpb24gPSB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgbGluZTogdHJ1ZSxcbiAgICB0b2tlblR5cGVzOiBcImVtfHN0cm9uZ3xtYXJrfGluc3xzdWJ8c3VwfHN0cmlrZXRocm91Z2h8Y29kZXxsaW5rVGV4dHx0YXNrXCIuc3BsaXQoXCJ8XCIpLFxuICB9O1xuICBleHBvcnRzLnN1Z2dlc3RlZE9wdGlvbiA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICB9O1xuICBjb3JlXzEuc3VnZ2VzdGVkRWRpdG9yQ29uZmlnLmhtZEhpZGVUb2tlbiA9IGV4cG9ydHMuc3VnZ2VzdGVkT3B0aW9uO1xuICBjb3JlXzEubm9ybWFsVmlzdWFsQ29uZmlnLmhtZEhpZGVUb2tlbiA9IGZhbHNlO1xuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcImhtZEhpZGVUb2tlblwiLCBleHBvcnRzLmRlZmF1bHRPcHRpb24sIGZ1bmN0aW9uIChjbSwgbmV3VmFsKSB7XG4gICAgLy8vLy8gY29udmVydCBuZXdWYWwncyB0eXBlIHRvIGBQYXJ0aWFsPE9wdGlvbnM+YCwgaWYgaXQgaXMgbm90LlxuICAgIGlmICghbmV3VmFsIHx8IHR5cGVvZiBuZXdWYWwgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBuZXdWYWwgPSB7IGVuYWJsZWQ6ICEhbmV3VmFsIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbmV3VmFsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBuZXdWYWwgPSB7IGVuYWJsZWQ6IHRydWUsIHRva2VuVHlwZXM6IG5ld1ZhbC5zcGxpdChcInxcIikgfTtcbiAgICB9IGVsc2UgaWYgKG5ld1ZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBuZXdWYWwgPSB7IGVuYWJsZWQ6IHRydWUsIHRva2VuVHlwZXM6IG5ld1ZhbCB9O1xuICAgIH1cbiAgICAvLy8vLyBhcHBseSBjb25maWcgYW5kIHdyaXRlIG5ldyB2YWx1ZXMgaW50byBjbVxuICAgIHZhciBpbnN0ID0gZXhwb3J0cy5nZXRBZGRvbihjbSk7XG4gICAgZm9yICh2YXIgayBpbiBleHBvcnRzLmRlZmF1bHRPcHRpb24pIHtcbiAgICAgIGluc3Rba10gPSBrIGluIG5ld1ZhbCA/IG5ld1ZhbFtrXSA6IGV4cG9ydHMuZGVmYXVsdE9wdGlvbltrXTtcbiAgICB9XG4gIH0pO1xuICAvLyNlbmRyZWdpb25cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgLy8jcmVnaW9uIEFkZG9uIENsYXNzXG4gIHZhciBoaWRlQ2xhc3NOYW1lID0gXCJobWQtaGlkZGVuLXRva2VuXCI7XG4gIHZhciBsaW5lSW5hY3RpdmVDbGFzc05hbWUgPSBcImhtZC1pbmFjdGl2ZS1saW5lXCI7XG4gIHZhciBIaWRlVG9rZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGlkZVRva2VuKGNtKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLmNtID0gY207XG4gICAgICB0aGlzLnJlbmRlckxpbmVIYW5kbGVyID0gZnVuY3Rpb24gKGNtLCBsaW5lLCBlbCkge1xuICAgICAgICAvLyBUT0RPOiBpZiB3ZSBwcm9jTGluZSBub3csIHdlIGNhbiBvbmx5IGdldCB0aGUgb3V0ZGF0ZWQgbGluZVZpZXcsIGxpbmVWaWV3TWVhc3VyZSBhbmQgbGluZVZpZXdNYXAuIENhbGxpbmcgcHJvY0xpbmUgd2lsbCBiZSB3YXN0ZWZ1bCFcbiAgICAgICAgdmFyIGNoYW5nZWQgPSBfdGhpcy5wcm9jTGluZShsaW5lLCBlbCk7XG4gICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJyZW5kZXJMaW5lIHJldHVybiBcIiArIGNoYW5nZWQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuY3Vyc29yQWN0aXZpdHlIYW5kbGVyID0gZnVuY3Rpb24gKC8qZG9jOiBDb2RlTWlycm9yLkRvYyovKSB7XG4gICAgICAgIC8vIF90aGlzLnVwZGF0ZSgpO1xuICAgICAgICBjb3JlXzEudXBkYXRlQ3Vyc29yRGlzcGxheShjbSwgZmFsc2UpO1xuICAgICAgfTtcbiAgICAgIHRoaXMudXBkYXRlID0gY29yZV8xLmRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUltbWVkaWF0ZWx5KCk7XG4gICAgICB9LCAxMDApO1xuICAgICAgLyoqIEN1cnJlbnQgdXNlcidzIHNlbGVjdGlvbnMsIGluIGVhY2ggbGluZSAqL1xuICAgICAgdGhpcy5fcmFuZ2VzSW5MaW5lID0ge307XG4gICAgICBuZXcgY29yZV8xLkZsaXBGbG9wKFxuICAgICAgICAvKiBPTiAgKi8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNtLm9uKFwiY3Vyc29yQWN0aXZpdHlcIiwgX3RoaXMuY3Vyc29yQWN0aXZpdHlIYW5kbGVyKTtcbiAgICAgICAgICBjbS5vbihcInJlbmRlckxpbmVcIiwgX3RoaXMucmVuZGVyTGluZUhhbmRsZXIpO1xuICAgICAgICAgIGNtLm9uKFwidXBkYXRlXCIsIF90aGlzLnVwZGF0ZSk7XG4gICAgICAgICAgX3RoaXMudXBkYXRlKCk7XG4gICAgICAgICAgY20ucmVmcmVzaCgpO1xuICAgICAgICB9LFxuICAgICAgICAvKiBPRkYgKi8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNtLm9mZihcImN1cnNvckFjdGl2aXR5XCIsIF90aGlzLmN1cnNvckFjdGl2aXR5SGFuZGxlcik7XG4gICAgICAgICAgY20ub2ZmKFwicmVuZGVyTGluZVwiLCBfdGhpcy5yZW5kZXJMaW5lSGFuZGxlcik7XG4gICAgICAgICAgY20ub2ZmKFwidXBkYXRlXCIsIF90aGlzLnVwZGF0ZSk7XG4gICAgICAgICAgX3RoaXMudXBkYXRlLnN0b3AoKTtcbiAgICAgICAgICBjbS5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICkuYmluZCh0aGlzLCBcImVuYWJsZWRcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGhpZGUvc2hvdyA8c3Bhbj5zIGluIG9uZSBsaW5lLCBiYXNlZCBvbiBgdGhpcy5fcmFuZ2VzSW5MaW5lYFxuICAgICAqIEByZXR1cm5zIGxpbmUgY2hhbmdlZCBvciBub3RcbiAgICAgKi9cbiAgICBIaWRlVG9rZW4ucHJvdG90eXBlLnByb2NMaW5lID0gZnVuY3Rpb24gKGxpbmUsIHByZSkge1xuICAgICAgdmFyIGNtID0gdGhpcy5jbTtcbiAgICAgIHZhciBsaW5lTm8gPSB0eXBlb2YgbGluZSA9PT0gXCJudW1iZXJcIiA/IGxpbmUgOiBsaW5lLmxpbmVObygpO1xuICAgICAgaWYgKHR5cGVvZiBsaW5lID09PSBcIm51bWJlclwiKSBsaW5lID0gY20uZ2V0TGluZUhhbmRsZShsaW5lKTtcbiAgICAgIHZhciByYW5nZXNJbkxpbmUgPSB0aGlzLl9yYW5nZXNJbkxpbmVbbGluZU5vXSB8fCBbXTtcbiAgICAgIHZhciBsdiA9IGNvcmVfMS5jbV9pbnRlcm5hbC5maW5kVmlld0ZvckxpbmUoY20sIGxpbmVObyk7XG4gICAgICBpZiAoIWx2IHx8IGx2LmhpZGRlbiB8fCAhbHYubWVhc3VyZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFwcmUpIHByZSA9IGx2LnRleHQ7XG4gICAgICBpZiAoIXByZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKERFQlVHKSBpZiAoIXByZS5pc1NhbWVOb2RlKGx2LnRleHQpKSBjb25zb2xlLndhcm4oXCJwcm9jTGluZSBnb3QgZGlmZmVyZW50IG5vZGUuLi4gXCIgKyBsaW5lTm8pO1xuICAgICAgdmFyIG1hcEluZm8gPSBjb3JlXzEuY21faW50ZXJuYWwubWFwRnJvbUxpbmVWaWV3KGx2LCBsaW5lLCBsaW5lTm8pO1xuICAgICAgdmFyIG1hcCA9IG1hcEluZm8ubWFwO1xuICAgICAgdmFyIG5vZGVDb3VudCA9IG1hcC5sZW5ndGggLyAzO1xuICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIC8vIGNoYW5nZSBsaW5lIHN0YXR1c1xuICAgICAgaWYgKHJhbmdlc0luTGluZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gaW5hY3RpdmVMaW5lXG4gICAgICAgIGlmIChhZGRDbGFzcyhwcmUsIGxpbmVJbmFjdGl2ZUNsYXNzTmFtZSkpIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWN0aXZlTGluZVxuICAgICAgICBpZiAocm1DbGFzcyhwcmUsIGxpbmVJbmFjdGl2ZUNsYXNzTmFtZSkpIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gc2hvdyBvciBoaWRlIHRva2Vuc1xuICAgICAgLyoqXG4gICAgICAgKiBAcmV0dXJucyBpZiB0aGVyZSBhcmUgU3BhbiBOb2RlcyBjaGFuZ2VkXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNoYW5nZVZpc2liaWxpdHlGb3JTcGFuKHNwYW4sIHNoYWxsSGlkZVRva2VucywgaU5vZGVIaW50KSB7XG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGlOb2RlSGludCA9IGlOb2RlSGludCB8fCAwO1xuICAgICAgICAvLyBpdGVyYXRlIHRoZSBtYXBcbiAgICAgICAgZm9yICh2YXIgaSA9IGlOb2RlSGludDsgaSA8IG5vZGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGJlZ2luID0gbWFwW2kgKiAzXSxcbiAgICAgICAgICAgIGVuZCA9IG1hcFtpICogMyArIDFdO1xuICAgICAgICAgIHZhciBkb21Ob2RlID0gbWFwW2kgKiAzICsgMl07XG4gICAgICAgICAgaWYgKGJlZ2luID09PSBzcGFuLmhlYWQuc3RhcnQpIHtcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGxlYWRpbmcgdG9rZW4hXG4gICAgICAgICAgICBpZiAoL2Zvcm1hdHRpbmctLy50ZXN0KHNwYW4uaGVhZC50eXBlKSAmJiBkb21Ob2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgICAvLyBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiRE9NTk9ERVwiLCBzaGFsbEhpZGVUb2tlbnMsIGRvbU5vZGUsIGJlZ2luLCBzcGFuKVxuICAgICAgICAgICAgICAvLyBnb29kLiB0aGlzIHRva2VuIGNhbiBiZSBjaGFuZ2VkXG4gICAgICAgICAgICAgIHZhciBkb21QYXJlbnQgPSBkb21Ob2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgIGlmIChzaGFsbEhpZGVUb2tlbnMgPyBhZGRDbGFzcyhkb21QYXJlbnQsIGhpZGVDbGFzc05hbWUpIDogcm1DbGFzcyhkb21QYXJlbnQsIGhpZGVDbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkhFQUQgRE9NIENIQU5HRURcIilcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBZaXlpOiBXaWtpbGlua1xuICAgICAgICAgICAgICBpZiAoZG9tUGFyZW50Lm5leHRFbGVtZW50U2libGluZyAmJiBkb21QYXJlbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcImNtLXdpa2lsaW5rLXVybFwiKSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHNoYWxsSGlkZVRva2Vuc1xuICAgICAgICAgICAgICAgICAgICA/IGFkZENsYXNzKGRvbVBhcmVudC5uZXh0RWxlbWVudFNpYmxpbmcsIGhpZGVDbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAgIDogcm1DbGFzcyhkb21QYXJlbnQubmV4dEVsZW1lbnRTaWJsaW5nLCBoaWRlQ2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgLy8gaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkhFQUQgRE9NIENIQU5HRURcIilcbiAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9GSVhNRTogaWYgbGVhZGluZyBmb3JtYXR0aW5nIHRva2VuIGlzIHNlcGFyYXRlZCBpbnRvIHR3bywgdGhlIGxhdHRlciB3aWxsIG5vdCBiZSBoaWRkZW4vc2hvd24hXG4gICAgICAgICAgICAvLyBzZWFyY2ggZm9yIHRoZSB0YWlsaW5nIHRva2VuXG4gICAgICAgICAgICBpZiAoc3Bhbi50YWlsICYmIC9mb3JtYXR0aW5nLS8udGVzdChzcGFuLnRhaWwudHlwZSkpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbm9kZUNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYmVnaW5fMSA9IG1hcFtqICogM10sXG4gICAgICAgICAgICAgICAgICBlbmRfMSA9IG1hcFtqICogMyArIDFdO1xuICAgICAgICAgICAgICAgIHZhciBkb21Ob2RlXzEgPSBtYXBbaiAqIDMgKyAyXTtcbiAgICAgICAgICAgICAgICBpZiAoYmVnaW5fMSA9PSBzcGFuLnRhaWwuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlmIChERUJVRykgY29uc29sZS5sb2coXCJUQUlMIERPTSBDSEFOR0VEXCIsIGRvbU5vZGUpXG4gICAgICAgICAgICAgICAgICBpZiAoZG9tTm9kZV8xLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnb29kLiB0aGlzIHRva2VuIGNhbiBiZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgIHZhciBkb21QYXJlbnQgPSBkb21Ob2RlXzEucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWxsSGlkZVRva2VucyA/IGFkZENsYXNzKGRvbVBhcmVudCwgaGlkZUNsYXNzTmFtZSkgOiBybUNsYXNzKGRvbVBhcmVudCwgaGlkZUNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmVnaW5fMSA+PSBzcGFuLnRhaWwuZW5kKSBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB3aG9vcHMsIG5leHQgdGltZSB3ZSBjYW4gc3RhcnQgc2VhcmNoaW5nIHNpbmNlIGhlcmVcbiAgICAgICAgICAvLyByZXR1cm4gdGhlIGhpbnQgdmFsdWVcbiAgICAgICAgICBpZiAoYmVnaW4gPj0gc3Bhbi5iZWdpbikgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgICB9XG4gICAgICB2YXIgc3BhbnMgPSBjb3JlXzEuZ2V0TGluZVNwYW5FeHRyYWN0b3IoY20pLmV4dHJhY3QobGluZU5vKTtcbiAgICAgIHZhciBpTm9kZUhpbnQgPSAwO1xuICAgICAgZm9yICh2YXIgaVNwYW4gPSAwOyBpU3BhbiA8IHNwYW5zLmxlbmd0aDsgaVNwYW4rKykge1xuICAgICAgICB2YXIgc3BhbiA9IHNwYW5zW2lTcGFuXTtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5UeXBlcy5pbmRleE9mKHNwYW4udHlwZSkgPT09IC0xKSBjb250aW51ZTsgLy8gbm90LWludGVyZXN0ZWQgc3BhbiB0eXBlXG4gICAgICAgIC8qIFRPRE86IFVzZSBBU1QsIGluc3RlYWQgb2YgY3JhZnRlZCBQb3NpdGlvbiAqL1xuICAgICAgICB2YXIgc3BhblJhbmdlID0gW1xuICAgICAgICAgIHsgbGluZTogbGluZU5vLCBjaDogc3Bhbi5iZWdpbiB9LFxuICAgICAgICAgIHsgbGluZTogbGluZU5vLCBjaDogc3Bhbi5lbmQgfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyogVE9ETzogSWYgdXNlIEFTVCwgY29tcHV0ZSBgc3BhbkJlZ2luQ2hhckluQ3VycmVudExpbmVgIGluIGFub3RoZXIgd2F5ICovXG4gICAgICAgIHZhciBzcGFuQmVnaW5DaGFySW5DdXJyZW50TGluZSA9IHNwYW4uYmVnaW47XG4gICAgICAgIHdoaWxlIChpTm9kZUhpbnQgPCBub2RlQ291bnQgJiYgbWFwW2lOb2RlSGludCAqIDMgKyAxXSA8IHNwYW5CZWdpbkNoYXJJbkN1cnJlbnRMaW5lKSBpTm9kZUhpbnQrKztcbiAgICAgICAgdmFyIHNoYWxsSGlkZVRva2VucyA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGlMaW5lUmFuZ2UgPSAwOyBpTGluZVJhbmdlIDwgcmFuZ2VzSW5MaW5lLmxlbmd0aDsgaUxpbmVSYW5nZSsrKSB7XG4gICAgICAgICAgdmFyIHVzZXJSYW5nZSA9IHJhbmdlc0luTGluZVtpTGluZVJhbmdlXTtcbiAgICAgICAgICBpZiAoY29yZV8xLnJhbmdlc0ludGVyc2VjdChzcGFuUmFuZ2UsIHVzZXJSYW5nZSkpIHtcbiAgICAgICAgICAgIHNoYWxsSGlkZVRva2VucyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VWaXNpYmlsaXR5Rm9yU3BhbihzcGFuLCBzaGFsbEhpZGVUb2tlbnMsIGlOb2RlSGludCkpIHtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZmluYWxseSBjbGVhbiB0aGUgY2FjaGUgKGlmIG5lZWRlZCkgYW5kIHJlcG9ydCB0aGUgcmVzdWx0XG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAvLyBjbGVhbiBDb2RlTWlycm9yIG1lYXN1cmUgY2FjaGVcbiAgICAgICAgZGVsZXRlIGx2Lm1lYXN1cmUuaGVpZ2h0cztcbiAgICAgICAgbHYubWVhc3VyZS5jYWNoZSA9IHt9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgfTtcbiAgICBIaWRlVG9rZW4ucHJvdG90eXBlLnVwZGF0ZUltbWVkaWF0ZWx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy51cGRhdGUuc3RvcCgpO1xuICAgICAgdmFyIGNtID0gdGhpcy5jbTtcbiAgICAgIHZhciBzZWxlY3Rpb25zID0gY20ubGlzdFNlbGVjdGlvbnMoKTtcbiAgICAgIHZhciBjYXJldEF0TGluZXMgPSB7fTtcbiAgICAgIHZhciBhY3RpdmVkTGluZXMgPSB7fTtcbiAgICAgIGNtLnN0YXRlLnJlZnJlc2hDYXJldExpbmUgPSBudWxsO1xuICAgICAgdmFyIGxhc3RBY3RpdmVkTGluZXMgPSB0aGlzLl9yYW5nZXNJbkxpbmU7XG4gICAgICBmb3IgKHZhciBfaSA9IDAsIHNlbGVjdGlvbnNfMSA9IHNlbGVjdGlvbnM7IF9pIDwgc2VsZWN0aW9uc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgc2VsZWN0aW9uID0gc2VsZWN0aW9uc18xW19pXTtcbiAgICAgICAgdmFyIG9SYW5nZSA9IGNvcmVfMS5vcmRlcmVkUmFuZ2Uoc2VsZWN0aW9uKTtcbiAgICAgICAgdmFyIGxpbmUwID0gb1JhbmdlWzBdLmxpbmUsXG4gICAgICAgICAgbGluZTEgPSBvUmFuZ2VbMV0ubGluZTtcbiAgICAgICAgY2FyZXRBdExpbmVzW2xpbmUwXSA9IGNhcmV0QXRMaW5lc1tsaW5lMV0gPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBsaW5lID0gbGluZTA7IGxpbmUgPD0gbGluZTE7IGxpbmUrKykge1xuICAgICAgICAgIGlmICghYWN0aXZlZExpbmVzW2xpbmVdKSBhY3RpdmVkTGluZXNbbGluZV0gPSBbb1JhbmdlXTtcbiAgICAgICAgICBlbHNlIGFjdGl2ZWRMaW5lc1tsaW5lXS5wdXNoKG9SYW5nZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jhbmdlc0luTGluZSA9IGFjdGl2ZWRMaW5lcztcbiAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCI9PT09PT09IE9QIFNUQVJUIFwiICsgT2JqZWN0LmtleXMoYWN0aXZlZExpbmVzKSk7XG4gICAgICBsZXQgcHJvY1Jlc3VsdCA9IGZhbHNlO1xuICAgICAgY20ub3BlcmF0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYWRkaW5nIFwiaW5hY3RpdmVcIiBjbGFzc1xuICAgICAgICBmb3IgKHZhciBsaW5lIGluIGxhc3RBY3RpdmVkTGluZXMpIHtcbiAgICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwibGluZSBpbiBsYXN0QWN0aXZlZExpbmVzXCIpO1xuICAgICAgICAgIGlmIChhY3RpdmVkTGluZXNbbGluZV0pIHtcbiAgICAgICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJsaW5lIGluIGxhc3RBY3RpdmVkTGluZXM6IGNvbnRpbnVlXCIpO1xuICAgICAgICAgICAgY29udGludWU7IC8vIGxpbmUgaXMgc3RpbGwgYWN0aXZlLiBkbyBub3RoaW5nXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJwcm9jTGluZVwiLCB+fmxpbmUpO1xuICAgICAgICAgIF90aGlzLnByb2NMaW5lKH5+bGluZSk7IC8vIG9yLCB0cnkgYWRkaW5nIFwiaW5hY3RpdmVcIiBjbGFzcyB0byB0aGUgPHByZT5zXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhcmV0TGluZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNhcmV0TGluZU5vO1xuICAgICAgICAvLyBwcm9jZXNzIGFjdGl2ZSBsaW5lc1xuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiYWN0aXZlIGxpbmVzXCIsIGFjdGl2ZWRMaW5lcyk7XG4gICAgICAgIGZvciAodmFyIGxpbmUgaW4gYWN0aXZlZExpbmVzKSB7XG4gICAgICAgICAgdmFyIGxpbmVDaGFuZ2VkID0gcHJvY1Jlc3VsdCA/IHByb2NSZXN1bHQgOiBfdGhpcy5wcm9jTGluZSh+fmxpbmUpO1xuICAgICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJsaW5lQ2hhbmdlZCAmJiBjYXJldEF0TGluZXNbbGluZV1cIiwgbGluZUNoYW5nZWQsIGNhcmV0QXRMaW5lc1tsaW5lXSk7XG4gICAgICAgICAgaWYgKGxpbmVDaGFuZ2VkICYmIGNhcmV0QXRMaW5lc1tsaW5lXSkgY2FyZXRMaW5lQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgY2FyZXRMaW5lTm8gPSBjYXJldEF0TGluZXNbbGluZV07XG4gICAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcImNhcmV0IGxpbmVcIiwgbGluZSwgY2FyZXRMaW5lQ2hhbmdlZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVmcmVzaCBjdXJzb3IgcG9zaXRpb24gaWYgbmVlZGVkXG4gICAgICAgIGlmIChjYXJldExpbmVDaGFuZ2VkKSB7XG4gICAgICAgICAgdmFyIGxpbmVIYW5kbGUgPSBjbS5nZXRMaW5lSGFuZGxlKGxpbmUpO1xuICAgICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJjYXJldExpbmVDaGFuZ2VkXCIsIGNhcmV0TGluZUNoYW5nZWQsIGNhcmV0TGluZU5vLCBsaW5lSGFuZGxlKTtcbiAgICAgICAgICBpZiAobGluZUhhbmRsZS5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGVkaXRlZCBieSBub3RoaW5naXNsb3N0IGFzIHRoaXMgd2FzIGNhdXNpbmcgYW4gaW5maW5pdGUgcmVmcmVzaCBsb29wIG9uIGZvbGRlZCBzZWN0aW9uc1xuICAgICAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIm5vdCByZWZyZXNoaW5nIGR1ZSB0byAwIGhlaWdodFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29yZV8xLnVwZGF0ZUN1cnNvckRpc3BsYXkoY20sIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIj09PT09PT0gT1AgRU5EIFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBIaWRlVG9rZW47XG4gIH0pKCk7XG4gIGV4cG9ydHMuSGlkZVRva2VuID0gSGlkZVRva2VuO1xuICAvLyNlbmRyZWdpb25cbiAgLyoqIEFERE9OIEdFVFRFUiAoU2luZ2xldG9uIFBhdHRlcm4pOiBhIGVkaXRvciBjYW4gaGF2ZSBvbmx5IG9uZSBIaWRlVG9rZW4gaW5zdGFuY2UgKi9cbiAgZXhwb3J0cy5nZXRBZGRvbiA9IGNvcmVfMS5BZGRvbi5HZXR0ZXIoXCJIaWRlVG9rZW5cIiwgSGlkZVRva2VuLCBleHBvcnRzLmRlZmF1bHRPcHRpb24gLyoqIGlmIGhhcyBvcHRpb25zICovKTtcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXHJcbmltcG9ydCB7IE9ic2lkaWFuQ29kZU1pcnJvck9wdGlvbnNTZXR0aW5ncywgT2JzaWRpYW5Db2RlTWlycm9yT3B0aW9uc1NldHRpbmdzVGFiIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IFwiLi9ydW5tb2RlXCI7XHJcbmltcG9ydCBcIi4vY29sb3JpemVcIjtcclxuaW1wb3J0IFwiLi9tYXJrLXNlbGVjdGlvblwiO1xyXG5pbXBvcnQgXCIuL2FjdGl2ZS1saW5lXCI7XHJcblxyXG5pbXBvcnQgXCIuL2htZC1jb3JlXCI7XHJcbmltcG9ydCBcIi4vaG1kLWNsaWNrXCI7XHJcbmltcG9ydCBcIi4vaG1kLWhpZGUtdG9rZW5cIjtcclxuXHJcbmltcG9ydCB7IE1hcmtkb3duVmlldywgTWFya2Rvd25QcmV2aWV3UmVuZGVyZXIsIFBsdWdpbiB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgdHlwZSBjb2RlbWlycm9yIGZyb20gXCJjb2RlbWlycm9yXCI7XHJcbmltcG9ydCB7IEVkaXRvckNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiY29kZW1pcnJvclwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJjb2RlbWlycm9yXCIge1xyXG4gIC8vIFRoZXNlIHR5cGVzY3JpcHQgZGVmaW5pdGlvbnMgd2VyZSBwdWxsZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRGVmaW5pdGVseVR5cGVkL0RlZmluaXRlbHlUeXBlZC90cmVlL21hc3Rlci90eXBlcy9jb2RlbWlycm9yXHJcbiAgLy8gSSBjb3VsZG4ndCBnZXQgdGhlIGRpcmVjdCBUUyBpbXBvcnRzIG9mIHRoZXNlIHdvcmtpbmcgd2l0aG91dCBoYXZpbmcgdGhlIGVudGlyZSBDb2RlTWlycm9yIGxpYnJhcnkgZW5kaW5nIHVwIGluIG1haW4uanNcclxuXHJcbiAgaW50ZXJmYWNlIFN0eWxlQWN0aXZlTGluZSB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnRyb2xzIHdoZXRoZXIgc2luZ2xlLWxpbmUgc2VsZWN0aW9ucywgb3IganVzdCBjdXJzb3Igc2VsZWN0aW9ucywgYXJlIHN0eWxlZC4gRGVmYXVsdHMgdG8gZmFsc2UgKG9ubHkgY3Vyc29yIHNlbGVjdGlvbnMpLlxyXG4gICAgICovXHJcbiAgICBub25FbXB0eTogYm9vbGVhbjtcclxuICB9XHJcbiAgaW50ZXJmYWNlIEVkaXRvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBzZXQgdG8gdHJ1ZSAodGhlIGRlZmF1bHQpLCB3aWxsIGtlZXAgdGhlIGN1cnNvciBoZWlnaHQgY29uc3RhbnQgZm9yIGFuIGVudGlyZSBsaW5lIChvciB3cmFwcGVkIHBhcnQgb2YgYSBsaW5lKS5cclxuICAgICAqIFdoZW4gZmFsc2UsIHRoZSBjdXJzb3IncyBoZWlnaHQgaXMgYmFzZWQgb24gdGhlIGhlaWdodCBvZiB0aGUgYWRqYWNlbnQgcmVmZXJlbmNlIGNoYXJhY3Rlci5cclxuICAgICAqL1xyXG4gICAgc2luZ2xlQ3Vyc29ySGVpZ2h0UGVyTGluZT86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIENhdXNlcyB0aGUgc2VsZWN0ZWQgdGV4dCB0byBiZSBtYXJrZWQgd2l0aCB0aGUgQ1NTIGNsYXNzIENvZGVNaXJyb3Itc2VsZWN0ZWR0ZXh0IG9yIGEgY3VzdG9tIGNsYXNzIHdoZW4gdGhlIHN0eWxlU2VsZWN0ZWRUZXh0IG9wdGlvbiBpcyBlbmFibGVkLlxyXG4gICAgICogVXNlZnVsIHRvIGNoYW5nZSB0aGUgY29sb3VyIG9mIHRoZSBzZWxlY3Rpb24gKGluIGFkZGl0aW9uIHRvIHRoZSBiYWNrZ3JvdW5kKS5cclxuICAgICAqL1xyXG4gICAgc3R5bGVTZWxlY3RlZFRleHQ/OiBib29sZWFuIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgaG1kQ2xpY2s/OiBib29sZWFuIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgaG1kSGlkZVRva2VuPzogYm9vbGVhbiB8IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBlbmFibGVkIGdpdmVzIHRoZSB3cmFwcGVyIG9mIHRoZSBsaW5lIHRoYXQgY29udGFpbnMgdGhlIGN1cnNvciB0aGUgY2xhc3MgQ29kZU1pcnJvci1hY3RpdmVsaW5lLFxyXG4gICAgICogYWRkcyBhIGJhY2tncm91bmQgd2l0aCB0aGUgY2xhc3MgQ29kZU1pcnJvci1hY3RpdmVsaW5lLWJhY2tncm91bmQsIGFuZCBhZGRzIHRoZSBjbGFzcyBDb2RlTWlycm9yLWFjdGl2ZWxpbmUtZ3V0dGVyIHRvIHRoZSBsaW5lJ3MgZ3V0dGVyIHNwYWNlIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHN0eWxlQWN0aXZlTGluZT86IFN0eWxlQWN0aXZlTGluZSB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNvbG9yaXplKGNvbGxlY3Rpb24/OiBBcnJheUxpa2U8RWxlbWVudD4sIGRlZmF1bHRNb2RlPzogc3RyaW5nLCBzaG93TGluZU51bXM/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzaWRpYW5Db2RlTWlycm9yT3B0aW9uc1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcbiAgc2V0dGluZ3M6IE9ic2lkaWFuQ29kZU1pcnJvck9wdGlvbnNTZXR0aW5ncztcclxuXHJcbiAgYXN5bmMgb25sb2FkKCkge1xyXG4gICAgLy8gbG9hZCBzZXR0aW5nc1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IChhd2FpdCB0aGlzLmxvYWREYXRhKCkpIHx8IG5ldyBPYnNpZGlhbkNvZGVNaXJyb3JPcHRpb25zU2V0dGluZ3MoKTtcclxuXHJcbiAgICAvLyBhZGQgdGhlIHNldHRpbmdzIHRhYlxyXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBPYnNpZGlhbkNvZGVNaXJyb3JPcHRpb25zU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub25MYXlvdXRSZWFkeSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBwbHlDb2RlTWlycm9yT3B0aW9ucygpO1xyXG4gICAgICB0aGlzLnRvZ2dsZUhpZ2hsaWdodGluZygpO1xyXG4gICAgICB0aGlzLnRvZ2dsZUNvZGVCbG9ja1NldHRpbmdzKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVDTWluUHJldmlldykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgLy8gd2Ugd2FpdCAxIHNlY29uZCBoZXJlIHNpbmNlIHRoZSBwcmlzbS5qcyByZW5kZXJpbmcgb2YgY29kZSBibG9ja3MgaXMgZGVsYXllZCBvbiBsb2FkXHJcbiAgICAgICAgICAvLyB0aGlzIHdpbGwgZm9yY2UgdGhlIENNIGluamVjdGlvbiBhZnRlciAxIHNlY29uZCwgb25seSBvbiBzdGFydHVwXHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hQYW5lcygpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImxheW91dC1jaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYXBwbHlDb2RlTWlycm9yT3B0aW9ucygpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9IC8vIGNsb3NlIG9ubG9hZFxyXG5cclxuICBtZFByb2Nlc3NvciA9IGFzeW5jIChlbDogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmluamVjdENNKGVsKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfTtcclxuXHJcbiAgaW5qZWN0Q00oZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAvLyBvbmx5IGdldCBjb2RlIGJsb2NrIGVsZW1lbnRzIHdpdGggYSBsYW5ndWFnZSBidXQgbm90IGFueSB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIGNvbG9yaXplZFxyXG4gICAgY29uc3QgcHJlRWxlbWVudCA9IGVsLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBjb2RlRWxlbWVudCA9IGVsLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICghY29kZUVsZW1lbnQpIHJldHVybjtcclxuICAgIGlmIChjb2RlRWxlbWVudC50YWdOYW1lICE9PSBcIkNPREVcIikgcmV0dXJuO1xyXG4gICAgaWYgKCFjb2RlRWxlbWVudC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoXCJsYW5ndWFnZS1cIikpIHtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY29weUJ1dHRvbk9uUFJFKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDb3B5QnV0dG9uKHByZUVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChwcmVFbGVtZW50LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImNtLXMtb2JzaWRpYW5cIikpIHJldHVybjtcclxuICAgIGNvZGVFbGVtZW50LmNsYXNzTGlzdC5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAoY2xhc3NOYW1lLnN0YXJ0c1dpdGgoXCJsYW5ndWFnZS1cIikpIHtcclxuICAgICAgICAvLyBzZXQgZGF0YS1sYW5nIHRvIHRoZSBjb2RlIGJsb2NrIGxhbmd1YWdlIGZvciBlYXNpZXIgY29sb3JpemUgdXNhZ2VcclxuICAgICAgICBsZXQgbGFuZ3VhZ2UgPSBjbGFzc05hbWUucmVwbGFjZShcImxhbmd1YWdlLVwiLCBcIlwiKTtcclxuICAgICAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XHJcbiAgICAgICAgICBjYXNlIFwiaHRtbFwiOlxyXG4gICAgICAgICAgICBsYW5ndWFnZSA9IFwiaHRtbG1peGVkXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImpzXCI6XHJcbiAgICAgICAgICAgIGxhbmd1YWdlID0gXCJqYXZhc2NyaXB0XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImpzb25cIjpcclxuICAgICAgICAgICAgbGFuZ3VhZ2UgPSBcImphdmFzY3JpcHRcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvZGVFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtbGFuZ1wiLCBsYW5ndWFnZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBDb2RlTWlycm9yLmNvbG9yaXplKFtjb2RlRWxlbWVudF0sIG51bGwsIHRoaXMuc2V0dGluZ3Muc2hvd0xpbmVOdW1zKTtcclxuICAgIHByZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3B5LWNvZGUtYnV0dG9uXCIpLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5hZGRDb3B5QnV0dG9uKHByZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29weUJ1dHRvbihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY29weUJ1dHRvbikge1xyXG4gICAgICBjb25zdCBjb2RlQmxvY2sgPSBlbGVtZW50O1xyXG4gICAgICBjb25zdCBjb3B5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgY29weUJ1dHRvbi5jbGFzc05hbWUgPSBcImNvcHlcIjtcclxuICAgICAgY29weUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgLy8gY29weUJ1dHRvbi5hcmlhTGFiZWwgPSAnQ29weSBjb2RlIHRvIGNsaXBib2FyZCc7XHJcbiAgICAgIGNvcHlCdXR0b24uaW5uZXJUZXh0ID0gXCJDb3B5XCI7XHJcbiAgICAgIGNvZGVCbG9jay5hcHBlbmQoY29weUJ1dHRvbik7XHJcbiAgICAgIGNvcHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBleGNsdWRlIGxpbmUgbnVtYmVycyB3aGVuIGNvcHlpbmcgY29kZSB0byBjbGlwYm9hcmRcclxuICAgICAgICBjb25zdCBjb2RlID0gY29kZUJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCJjb2RlXCIpO1xyXG4gICAgICAgIGNvbnN0IGNsb25lID0gY29kZS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY2xvbmUuZmluZEFsbChcInNwYW4uY20tbGluZW51bWJlclwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XHJcbiAgICAgICAgY29uc3QgY29kZVRleHQgPSBjbG9uZS50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGVUZXh0KTtcclxuICAgICAgICBjb3B5QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29waWVkXCI7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBjb3B5QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29weVwiO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUNvZGVCbG9ja1NldHRpbmdzKCkge1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd0xpbmVOdW1zKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkQ2xhc3MoXCJjbS1zaG93LWxpbmUtbnVtc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2xhc3MoXCJjbS1zaG93LWxpbmUtbnVtc1wiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNvcHlCdXR0b25PblBSRSkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZENsYXNzKFwiY20tc2hvdy1jb3B5LWJ1dHRvbi1vbi1wcmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNsYXNzKFwiY20tc2hvdy1jb3B5LWJ1dHRvbi1vbi1wcmVcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZnJlc2hQYW5lcygpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSGlnaGxpZ2h0aW5nKCkge1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlQ01pblByZXZpZXcpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hZGRDbGFzcyhcInVuaWZpZWQtY20taGlnaGxpZ2h0aW5nXCIpO1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyTWFya2Rvd25Qb3N0UHJvY2Vzc29yKHRoaXMubWRQcm9jZXNzb3IpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hQYW5lcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDbGFzcyhcInVuaWZpZWQtY20taGlnaGxpZ2h0aW5nXCIpO1xyXG4gICAgICBNYXJrZG93blByZXZpZXdSZW5kZXJlci51bnJlZ2lzdGVyUG9zdFByb2Nlc3Nvcih0aGlzLm1kUHJvY2Vzc29yKTtcclxuICAgICAgdGhpcy5yZWZyZXNoUGFuZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5Q29kZU1pcnJvck9wdGlvbnMoKSB7XHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UuaXRlcmF0ZUNvZGVNaXJyb3JzKGNtID0+IHtcclxuICAgICAgdGhpcy5zZXRDb2RlTWlycm9yT3B0aW9uKGNtLCBcInN0eWxlU2VsZWN0ZWRUZXh0XCIsIHRoaXMuc2V0dGluZ3MubWFya1NlbGVjdGlvbik7XHJcbiAgICAgIHRoaXMuc2V0Q29kZU1pcnJvck9wdGlvbihjbSwgXCJzaW5nbGVDdXJzb3JIZWlnaHRQZXJMaW5lXCIsIHRoaXMuc2V0dGluZ3MuZHluYW1pY0N1cnNvcik7XHJcbiAgICAgIHRoaXMuc2V0Q29kZU1pcnJvck9wdGlvbihjbSwgXCJzdHlsZUFjdGl2ZUxpbmVcIiwgdGhpcy5zZXR0aW5ncy5hY3RpdmVMaW5lT25TZWxlY3QpO1xyXG4gICAgICB0aGlzLnNldENvZGVNaXJyb3JPcHRpb24oY20sIFwiaG1kSGlkZVRva2VuXCIsIHRoaXMuc2V0dGluZ3MuZWRpdE1vZGVIaWRlVG9rZW5zKTtcclxuICAgICAgdGhpcy5zZXRDb2RlTWlycm9yT3B0aW9uKGNtLCBcImhtZENsaWNrXCIsIHRoaXMuc2V0dGluZ3MuZWRpdE1vZGVDbGlja0hhbmRsZXIpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lZGl0TW9kZUhpZGVUb2tlbnMpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hZGRDbGFzcyhcImhpZGUtdG9rZW5zXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDbGFzcyhcImhpZGUtdG9rZW5zXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubWFya1NlbGVjdGlvbikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZENsYXNzKFwic3R5bGUtYWN0aXZlLXNlbGVjdGlvblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2xhc3MoXCJzdHlsZS1hY3RpdmUtc2VsZWN0aW9uXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlUHJpc21KU1N0eWxpbmcpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hZGRDbGFzcyhcImZhbGxiYWNrLWhpZ2hsaWdodGluZ1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2xhc3MoXCJmYWxsYmFjay1oaWdobGlnaHRpbmdcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bnNldENvZGVNaXJyb3JPcHRpb25zKCkge1xyXG4gICAgdGhpcy5hcHAud29ya3NwYWNlLml0ZXJhdGVDb2RlTWlycm9ycyhjbSA9PiB7XHJcbiAgICAgIC8vIHJldmVydCBDb2RlTWlycm9yIG9wdGlvbnMgYmFjayB0byB0aGUgQ00vT2JzaWRpYW4gZGVmYXVsdHNcclxuICAgICAgY20uc2V0T3B0aW9uKFwic3R5bGVTZWxlY3RlZFRleHRcIiwgZmFsc2UpO1xyXG4gICAgICBjbS5zZXRPcHRpb24oXCJzaW5nbGVDdXJzb3JIZWlnaHRQZXJMaW5lXCIsIHRydWUpO1xyXG4gICAgICBjbS5zZXRPcHRpb24oXCJzdHlsZUFjdGl2ZUxpbmVcIiwgdHJ1ZSk7XHJcbiAgICAgIGNtLnNldE9wdGlvbihcImhtZEhpZGVUb2tlblwiLCBmYWxzZSk7XHJcbiAgICAgIGNtLnNldE9wdGlvbihcImhtZENsaWNrXCIsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFBhbmVzKCkge1xyXG4gICAgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShcIm1hcmtkb3duXCIpLmZvckVhY2gobGVhZiA9PiB7XHJcbiAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpIHtcclxuICAgICAgICBsZWFmLnZpZXcucHJldmlld01vZGUucmVyZW5kZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aXZlQ21FZGl0b3IoKTogY29kZW1pcnJvci5FZGl0b3Ige1xyXG4gICAgY29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcbiAgICBpZiAodmlldykgcmV0dXJuIHZpZXcuc291cmNlTW9kZT8uY21FZGl0b3I7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHNldENvZGVNaXJyb3JPcHRpb24oXHJcbiAgICBjbTogQ29kZU1pcnJvci5FZGl0b3IsXHJcbiAgICBvcHRpb25LZXk6IGtleW9mIEVkaXRvckNvbmZpZ3VyYXRpb24sXHJcbiAgICBvcHRpb25WYWx1ZTogYm9vbGVhbiB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+XHJcbiAgKSB7XHJcbiAgICAvLyBzdHlsZUFjdGl2ZUxpbmUgcmVxdWlyZXMgYW4gb2JqZWN0IHRvIHNldCB0aGUgYmVoYXZpb3Igd2Ugd2FudFxyXG4gICAgaWYgKG9wdGlvbktleSA9PT0gXCJzdHlsZUFjdGl2ZUxpbmVcIikgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZSA9PT0gdHJ1ZSA/IHsgbm9uRW1wdHk6IHRydWUgfSA6IHRydWU7XHJcbiAgICAvLyB3ZSB3YW50IHRvIHBhc3MgdGhlIG9wcG9zaXRlIGJvb2xlYW4gdG8gd2hhdCBpcyBjaG9zZW4gaW4gc2V0dGluZ3NcclxuICAgIGlmIChvcHRpb25LZXkgPT09IFwic2luZ2xlQ3Vyc29ySGVpZ2h0UGVyTGluZVwiKSBvcHRpb25WYWx1ZSA9ICFvcHRpb25WYWx1ZTtcclxuICAgIGlmIChjbSAmJiBjbS5nZXRPcHRpb24ob3B0aW9uS2V5KSAhPSBvcHRpb25WYWx1ZSkge1xyXG4gICAgICBjbS5zZXRPcHRpb24ob3B0aW9uS2V5LCBvcHRpb25WYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbnVubG9hZCgpIHtcclxuICAgIHRoaXMudW5zZXRDb2RlTWlycm9yT3B0aW9ucygpO1xyXG4gICAgTWFya2Rvd25QcmV2aWV3UmVuZGVyZXIudW5yZWdpc3RlclBvc3RQcm9jZXNzb3IodGhpcy5tZFByb2Nlc3Nvcik7XHJcbiAgICB0aGlzLnJlZnJlc2hQYW5lcygpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiLCJ0aGlzIiwiTWFya2Rvd25QcmV2aWV3UmVuZGVyZXIiLCJNYXJrZG93blZpZXciLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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UyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENB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LElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzNELE1BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsV0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxQyxNQUFNLElBQUksS0FBSyxFQUFFLE1BQU07QUFDdkIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ3JCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLFNBQVMsS0FBSyxDQUFDLEVBQUUsRUFBRTtBQUNyQixJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO0FBQ3pDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzVELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDckIsR0FBRztBQUNIO0FBQ0EsRUFBRSxTQUFTLEtBQUssQ0FBQyxFQUFFLEVBQUU7QUFDckIsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDZCxJQUFJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNyQyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtBQUMxQyxNQUFNLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVB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
