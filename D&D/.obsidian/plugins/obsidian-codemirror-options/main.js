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
      node.className += " cm-s-obsidian";
      const innerHTML = node.innerHTML;
      node.empty();
      const codeEl = node.createEl("code");
      codeEl.innerHTML = innerHTML;
      codeEl.addClass("language-" + node.getAttribute("data-lang"));
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
        _this.updateImmediately();
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
          // if (DEBUG)
          var lineHandle = cm.getLineHandle(line);
          if (lineHandle.height === 0) ; else {
            // cm.doc.children[0].height -= 10;
            cm.height -= 10;
            cm.refresh();
          }

          // this refresh fixes the cursor placement issues but is expensive
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
                }, 0);
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
        var element = el.firstChild;
        if (!element)
            return;
        if (element.tagName !== "PRE")
            return;
        if (!element.classList.value.includes("language-")) {
            if (this.settings.copyButtonOnPRE)
                this.addCopyButton(element);
            return;
        }
        if (element.classList.value.includes("cm-s-obsidian"))
            return;
        element.classList.forEach(function (className) {
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
                element.setAttribute("data-lang", language);
            }
        });
        //@ts-ignore
        CodeMirror.colorize([element], null, this.settings.showLineNums);
        this.addCopyButton(element);
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
        this.setCodeMirrorOption("styleSelectedText", this.settings.markSelection);
        this.setCodeMirrorOption("singleCursorHeightPerLine", this.settings.dynamicCursor);
        this.setCodeMirrorOption("styleActiveLine", this.settings.activeLineOnSelect);
        this.setCodeMirrorOption("hmdHideToken", this.settings.editModeHideTokens);
        this.setCodeMirrorOption("hmdClick", this.settings.editModeClickHandler);
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
    ObsidianCodeMirrorOptionsPlugin.prototype.getCmEditor = function () {
        var _a;
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (view)
            return (_a = view.sourceMode) === null || _a === void 0 ? void 0 : _a.cmEditor;
        return null;
    };
    ObsidianCodeMirrorOptionsPlugin.prototype.setCodeMirrorOption = function (optionKey, optionValue) {
        var cmEditor = this.getCmEditor();
        // styleActiveLine requires an object to set the behavior we want
        if (optionKey === "styleActiveLine")
            optionValue = optionValue === true ? { nonEmpty: true } : true;
        // we want to pass the opposite boolean to what is chosen in settings
        if (optionKey === "singleCursorHeightPerLine")
            optionValue = !optionValue;
        if (cmEditor && cmEditor.getOption(optionKey) != optionValue) {
            cmEditor.setOption(optionKey, optionValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy9zZXR0aW5ncy50cyIsIi4uL3NyYy9ydW5tb2RlLmpzIiwiLi4vc3JjL2NvbG9yaXplLmpzIiwiLi4vc3JjL21hcmstc2VsZWN0aW9uLmpzIiwiLi4vc3JjL2FjdGl2ZS1saW5lLmpzIiwiLi4vc3JjL2htZC1jb3JlLmpzIiwiLi4vc3JjL2htZC1jbGljay5qcyIsIi4uL3NyYy9obWQtaGlkZS10b2tlbi5qcyIsIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG5pbXBvcnQgT2JzaWRpYW5Db2RlTWlycm9yT3B0aW9uc1BsdWdpbiBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuZXhwb3J0IGNsYXNzIE9ic2lkaWFuQ29kZU1pcnJvck9wdGlvbnNTZXR0aW5ncyB7XG4gIGR5bmFtaWNDdXJzb3IgPSBmYWxzZTtcbiAgbWFya1NlbGVjdGlvbiA9IGZhbHNlO1xuICBhY3RpdmVMaW5lT25TZWxlY3QgPSBmYWxzZTtcbiAgZW5hYmxlQ01pblByZXZpZXcgPSBmYWxzZTtcbiAgZW5hYmxlUHJpc21KU1N0eWxpbmcgPSBmYWxzZTtcbiAgZWRpdE1vZGVIaWRlVG9rZW5zID0gZmFsc2U7XG4gIGVkaXRNb2RlQ2xpY2tIYW5kbGVyID0gZmFsc2U7XG4gIHNob3dMaW5lTnVtcyA9IGZhbHNlO1xuICBjb3B5QnV0dG9uID0gZmFsc2U7XG4gIGNvcHlCdXR0b25PblBSRSA9IGZhbHNlO1xufVxuXG5leHBvcnQgY2xhc3MgT2JzaWRpYW5Db2RlTWlycm9yT3B0aW9uc1NldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogT2JzaWRpYW5Db2RlTWlycm9yT3B0aW9uc1BsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPYnNpZGlhbkNvZGVNaXJyb3JPcHRpb25zUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuXG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDJcIiwgeyB0ZXh0OiBcIkNvZGVNaXJyb3IgT3B0aW9uc1wiIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkhpZGUgTWFya2Rvd24gVG9rZW5zXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgYFRoaXMgbW9kZSBlbXVsYXRlcyBXWVNJV1lHIGluIGVkaXQgbW9kZSBieSBoaWRpbmcgbWFya2Rvd24gdG9rZW5zIG9uIGluYWN0aXZlIGxpbmVzLiBUaGlzIG1vZGUgd2lsbCB0YWcgYWxsIGluYWN0aXZlIGxpbmVzIFxuICAgICAgIHdpdGggLmhtZC1pbmFjdGl2ZS1saW5lIGFuZCBhbGwgaGlkZGVuIHRva2VucyB3aXRoIC5obWQtaGlkZGVuLXRva2VuYFxuICAgICAgKVxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRNb2RlSGlkZVRva2Vucykub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRNb2RlSGlkZVRva2VucyA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5hcHBseUNvZGVNaXJyb3JPcHRpb25zKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkVkaXQgTW9kZSBDbGljayBIYW5kbGVyXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgYEN1cnJlbnRseSBzdXBwb3J0cyBjbGlja2luZyBjaGVja2JveGVzIGluIGVkaXQgbW9kZS4gRGlzYWJsZSB0aGlzIGlzIHlvdSBlbmNvdW50ZXIgYW55IGlzc3VlcyB3aXRoIG1vdXNlIGNsaWNrcy5gXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZWRpdE1vZGVDbGlja0hhbmRsZXIpLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0TW9kZUNsaWNrSGFuZGxlciA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5hcHBseUNvZGVNaXJyb3JPcHRpb25zKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIkR5bmFtaWMgY3Vyc29yIHNpemVcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBgV2hlbiBlbmFibGVkLCB0aGUgY3Vyc29yIGhlaWdodCB3aWxsIGJlIGRldGVybWluZWQgYnkgdGhlIG1heCBoZWlnaHQgb2YgdGhlIGVudGlyZSBsaW5lLiBcbiAgICAgICAgIFdoZW4gZGlzYWJsZWQsIHRoZSBjdXJzb3IncyBoZWlnaHQgaXMgYmFzZWQgb24gdGhlIGhlaWdodCBvZiB0aGUgYWRqYWNlbnQgcmVmZXJlbmNlIGNoYXJhY3Rlci5gXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZHluYW1pY0N1cnNvcikub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmR5bmFtaWNDdXJzb3IgPSB2YWx1ZTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uYXBwbHlDb2RlTWlycm9yT3B0aW9ucygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJTdHlsZSBhY3RpdmUgc2VsZWN0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgYFdoZW4gZW5hYmxlZCwgc2VsZWN0ZWQgdGV4dCB3aWxsIGJlIG1hcmtlZCB3aXRoIHRoZSBDU1MgY2xhc3MgLkNvZGVNaXJyb3Itc2VsZWN0ZWR0ZXh0LiBcbiAgICAgICAgIFVzZWZ1bCB0byBmb3JjZSB0aGUgc3R5bGluZyBvZiBzZWxlY3RlZCB0ZXh0IHdoZW4gOjpzZWxlY3Rpb24gaXMgbm90IHN1ZmZpY2llbnQuYFxuICAgICAgKVxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm1hcmtTZWxlY3Rpb24pLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5tYXJrU2VsZWN0aW9uID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIHRoaXMucGx1Z2luLmFwcGx5Q29kZU1pcnJvck9wdGlvbnMoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiUmV0YWluIGFjdGl2ZSBsaW5lIG9uIHNlbGVjdGlvblwiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIGBXaGVuIGVuYWJsZWQsIHRleHQgc2VsZWN0aW9uIHdpbGwgbm90IHJlbW92ZSB0aGUgLmFjdGl2ZS1saW5lIGNsYXNzIG9uIHRoZSBjdXJyZW50IGxpbmUuIFxuICAgICAgICAgV2hlbiBkaXNhYmxlZCB0ZXh0IHNlbGVjdGlvbiBvbiB0aGUgYWN0aXZlIGxpbmUgd2lsbCByZW1vdmUgdGhlIC5hY3RpdmUtbGluZSBjbGFzcy5gXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlTGluZU9uU2VsZWN0KS5vbkNoYW5nZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlTGluZU9uU2VsZWN0ID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgIHRoaXMucGx1Z2luLmFwcGx5Q29kZU1pcnJvck9wdGlvbnMoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgaWYgKFxuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzLmFwcC5wbHVnaW5zLnBsdWdpbnNbXCJjbS1lZGl0b3Itc3ludGF4LWhpZ2hsaWdodC1vYnNpZGlhblwiXVxuICAgICkge1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKFwiVXNlIENvZGVNaXJyb3IgZm9yIHN5bnRheCBoaWdobGlnaHRpbmcgaW4gcHJldmlldyBtb2RlXCIpXG4gICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgIGBUaGlzIHNldHRpbmcgY3JlYXRlcyBjb25zaXN0ZW50IGhpZ2hsaWdodGluZyBiZXR3ZWVuIGVkaXQgYW5kIHByZXZpZXcgYnkgdXNpbmcgQ29kZU1pcnJvciB0byBoaWdobGlnaHQgaW4gYm90aCBtb2Rlcy4gXG4gICAgICAgICAgIE5vdGU6IFRoaXMgc2V0dGluZyByZXF1aXJlcyB0aGUgXCJFZGl0b3IgU3ludGF4IEhpZ2hsaWdodFwiIHBsdWdpbiB0byBmdW5jdGlvbiBwcm9wZXJseS5gXG4gICAgICAgIClcbiAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT5cbiAgICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlQ01pblByZXZpZXcpLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZUNNaW5QcmV2aWV3ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi50b2dnbGVIaWdobGlnaHRpbmcoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKFwiRXhwZXJpbWVudGFsOiBTaG93IGxpbmUgbnVtYmVycyBmb3IgY29kZSBibG9ja3MgaW4gcHJldmlldyBtb2RlXCIpXG4gICAgICAgIC5zZXREZXNjKGBUaGlzIHNldHRpbmcgd2lsbCBhZGQgbGluZSBudW1iZXJzIHRvIGNvZGUgYmxvY2tzIGluIHByZXZpZXcgbW9kZS5gKVxuICAgICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PlxuICAgICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93TGluZU51bXMpLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dMaW5lTnVtcyA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4udG9nZ2xlQ29kZUJsb2NrU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKFwiRXhwZXJpbWVudGFsOiBFbmFibGUgY29weSBidXR0b24gdG8gY29kZSBibG9ja3MgaW4gcHJldmlldyBtb2RlXCIpXG4gICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgIGBUaGlzIHNldHRpbmcgd2lsbCBhZGQgYSBjb3B5IGJ1dHRvbiB0byB0aGUgYm90dG9tIGxlZnQgY29ybmVyIG9mIGNvZGUgYmxvY2tzIGluIHByZXZpZXcgbW9kZS4gVGhlIGJ1dHRvbiB3aWxsIHNob3cgdXAgb24gY29kZSBibG9jayBob3Zlci5gXG4gICAgICAgIClcbiAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT5cbiAgICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY29weUJ1dHRvbikub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY29weUJ1dHRvbiA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4udG9nZ2xlQ29kZUJsb2NrU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgIC5zZXROYW1lKFwiRXhwZXJpbWVudGFsOiBFbmFibGUgY29weSBidXR0b24gdG8gYWxsIFBSRSBibG9ja3MgaW4gcHJldmlldyBtb2RlXCIpXG4gICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgIGBUaGlzIHNldHRpbmcgd2lsbCBhZGQgYSBjb3B5IGJ1dHRvbiB0byBhbnkgUFJFIGVsZW1lbnQuIFRoaXMgY291bGQgbmVnYXRpdmVseSBpbXBhY3QgY2VydGFpbiBwbHVnaW5zIHRoYXQgcmVuZGVyIFBSRSBibG9ja3MuYFxuICAgICAgICApXG4gICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+XG4gICAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNvcHlCdXR0b25PblBSRSkub25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY29weUJ1dHRvbk9uUFJFID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi50b2dnbGVDb2RlQmxvY2tTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAuc2V0TmFtZShcIlVzZSBDb2RlTWlycm9yIGZvciBzeW50YXggaGlnaGxpZ2h0aW5nIGluIHByZXZpZXcgbW9kZVwiKVxuICAgICAgICAuc2V0RGVzYygnV2FybmluZzogSW5zdGFsbCB0aGUgcGx1Z2luIFwiRWRpdG9yIFN5bnRheCBIaWdobGlnaHRcIiBpbiBvcmRlciB0byB1c2UgdGhpcyBmZWF0dXJlJylcbiAgICAgICAgLnNldENsYXNzKFwiY20td2FybmluZ1wiKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiRmFsbGJhY2s6IFVuaWZ5IHRoZSBkZWZhdWx0IHByaXNtLmpzIGNvZGUgYmxvY2sgc3R5bGluZ1wiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIGBUaGlzIHNldHRpbmcgaXMgYSBmYWxsYmFjayBvcHRpb24gaWYgeW91IGRvIG5vdCB3YW50IHRvIGluamVjdCBDTSBpbnRvIHByZXZpZXcgbW9kZS4gXG4gICAgICAgICBJdCB3aWxsIHRyeSBhbmQgdW5pZnkgdGhlIHByaXNtLmpzIGNvbG9ycyB0byBtYXRjaCBDTSBhcyBjbG9zZSBhcyBwb3NzaWJsZS5gXG4gICAgICApXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlUHJpc21KU1N0eWxpbmcpLm9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5lbmFibGVQcmlzbUpTU3R5bGluZyA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgICAgICAgICAvLyBUT0RPOiBtYWtlIHRoaXMgdG9nZ2xlIHN0eWxpbmcgcHJvcGVybHlcbiAgICAgICAgICB0aGlzLnBsdWdpbi5hcHBseUNvZGVNaXJyb3JPcHRpb25zKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDRcIiwge1xuICAgICAgdGV4dDogYFRvIGN1c3RvbWl6ZSB0aGUgc3ludGF4IGhpZ2hsaWdodGluZyB0aGVtZSwgXG4gICAgICAgICAgICAgaW5zdGFsbCB0aGUgU3R5bGUgU2V0dGluZ3MgcGx1Z2luIGFuZCBleHBsb3JlIHRoZSBcIkNvZGVNaXJyb3IgT3B0aW9uc1wiIHNlY3Rpb25gLFxuICAgIH0pO1xuICB9XG59XG4iLCIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG5mdW5jdGlvbiBsZWZ0RmlsbE51bShudW0sIHRhcmdldExlbmd0aCkge1xuICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCAwKTtcbn1cblxuQ29kZU1pcnJvci5ydW5Nb2RlID0gZnVuY3Rpb24gKHN0cmluZywgbW9kZXNwZWMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHZhciBtb2RlID0gQ29kZU1pcnJvci5nZXRNb2RlKENvZGVNaXJyb3IuZGVmYXVsdHMsIG1vZGVzcGVjKTtcbiAgdmFyIGxpbmVOdW1iZXIgPSAxO1xuICBpZiAoY2FsbGJhY2subm9kZVR5cGUgPT0gMSkge1xuICAgIHZhciB0YWJTaXplID0gKG9wdGlvbnMgJiYgb3B0aW9ucy50YWJTaXplKSB8fCBDb2RlTWlycm9yLmRlZmF1bHRzLnRhYlNpemU7XG4gICAgdmFyIGxpbmVOdW1zID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5saW5lTnVtcykgfHwgZmFsc2U7XG4gICAgdmFyIG5vZGUgPSBjYWxsYmFjayxcbiAgICAgIGNvbCA9IDA7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKHRleHQsIHN0eWxlKSB7XG4gICAgICBpZiAodGV4dCA9PSBcIlxcblwiKSB7XG4gICAgICAgIGlmIChsaW5lTnVtcykge1xuICAgICAgICAgIGxpbmVOdW1iZXIrKzsgLy9pbmNyZW1lbnQgbGluZSBudW1iZXJcbiAgICAgICAgICB2YXIgbGluZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIGxpbmVOdW0uYWRkQ2xhc3MoXCJjbS1saW5lbnVtYmVyXCIpO1xuICAgICAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGVmdEZpbGxOdW0obGluZU51bWJlciwgMikgKyBcIiBcIik7XG4gICAgICAgICAgbGluZU51bS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcbiAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGxpbmVOdW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbCA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIC8vIHJlcGxhY2UgdGFic1xuICAgICAgZm9yICh2YXIgcG9zID0gMDsgOyApIHtcbiAgICAgICAgdmFyIGlkeCA9IHRleHQuaW5kZXhPZihcIlxcdFwiLCBwb3MpO1xuICAgICAgICBpZiAoaWR4ID09IC0xKSB7XG4gICAgICAgICAgY29udGVudCArPSB0ZXh0LnNsaWNlKHBvcyk7XG4gICAgICAgICAgY29sICs9IHRleHQubGVuZ3RoIC0gcG9zO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbCArPSBpZHggLSBwb3M7XG4gICAgICAgICAgY29udGVudCArPSB0ZXh0LnNsaWNlKHBvcywgaWR4KTtcbiAgICAgICAgICB2YXIgc2l6ZSA9IHRhYlNpemUgLSAoY29sICUgdGFiU2l6ZSk7XG4gICAgICAgICAgY29sICs9IHNpemU7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIGNvbnRlbnQgKz0gXCIgXCI7XG4gICAgICAgICAgcG9zID0gaWR4ICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgdmFyIHNwID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSk7XG4gICAgICAgIHNwLmNsYXNzTmFtZSA9IFwiY20tXCIgKyBzdHlsZS5yZXBsYWNlKC8gKy9nLCBcIiBjbS1cIik7XG4gICAgICAgIHNwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgbGluZXMgPSBDb2RlTWlycm9yLnNwbGl0TGluZXMoc3RyaW5nKSxcbiAgICBzdGF0ZSA9IChvcHRpb25zICYmIG9wdGlvbnMuc3RhdGUpIHx8IENvZGVNaXJyb3Iuc3RhcnRTdGF0ZShtb2RlKTtcbiAgdmFyIGxpbmVMZW5ndGggPSBsaW5lTnVtcyAmJiBtb2RlLm5hbWUgIT09IFwieWFtbFwiID8gbGluZXMubGVuZ3RoIC0gMSA6IGxpbmVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGUgPSBsaW5lTGVuZ3RoOyBpIDwgZTsgKytpKSB7XG4gICAgaWYgKGkpIGNhbGxiYWNrKFwiXFxuXCIpO1xuICAgIHZhciBzdHJlYW0gPSBuZXcgQ29kZU1pcnJvci5TdHJpbmdTdHJlYW0obGluZXNbaV0pO1xuICAgIHdoaWxlICghc3RyZWFtLmVvbCgpKSB7XG4gICAgICB2YXIgc3R5bGUgPSBtb2RlLnRva2VuKHN0cmVhbSwgc3RhdGUpO1xuICAgICAgY2FsbGJhY2soc3RyZWFtLmN1cnJlbnQoKSwgc3R5bGUsIGksIHN0cmVhbS5zdGFydCk7XG4gICAgICBzdHJlYW0uc3RhcnQgPSBzdHJlYW0ucG9zO1xuICAgIH1cbiAgfVxuICBpZiAobGluZU51bXMpIHtcbiAgICB2YXIgb3V0cHV0RGl2ID0gbm9kZTtcbiAgICB2YXIgZmlyc3RMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZmlyc3RMaW5lLmFkZENsYXNzKFwiY20tbGluZW51bWJlclwiKTtcbiAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxlZnRGaWxsTnVtKDEsIDIpICsgXCIgXCIpO1xuICAgIGZpcnN0TGluZS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBvdXRwdXREaXY/Lmluc2VydEJlZm9yZShmaXJzdExpbmUsIG91dHB1dERpdi5maXJzdENoaWxkKTtcbiAgfVxufTtcbiIsIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbkNvZGVNaXJyb3IuY29sb3JpemUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgaXNCbG9jayA9IC9eKHB8bGl8ZGl2fGhcXFxcZHxwcmV8YmxvY2txdW90ZXx0ZCkkLztcblxuICBmdW5jdGlvbiB0ZXh0Q29udGVudChub2RlLCBvdXQpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSAzKSByZXR1cm4gb3V0LnB1c2gobm9kZS5ub2RlVmFsdWUpO1xuICAgIGZvciAodmFyIGNoID0gbm9kZS5maXJzdENoaWxkOyBjaDsgY2ggPSBjaC5uZXh0U2libGluZykge1xuICAgICAgdGV4dENvbnRlbnQoY2gsIG91dCk7XG4gICAgICBpZiAoaXNCbG9jay50ZXN0KG5vZGUubm9kZVR5cGUpKSBvdXQucHVzaChcIlxcblwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGRlZmF1bHRNb2RlLCBzaG93TGluZU51bXMgPSBmYWxzZSkge1xuICAgIGlmICghY29sbGVjdGlvbikgY29sbGVjdGlvbiA9IGRvY3VtZW50LmJvZHkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwcmVcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbGxlY3Rpb24ubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBub2RlID0gY29sbGVjdGlvbltpXTtcbiAgICAgIHZhciBtb2RlID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxhbmdcIikgfHwgZGVmYXVsdE1vZGU7XG4gICAgICBpZiAoIW1vZGUpIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgdGV4dCA9IFtdO1xuICAgICAgdGV4dENvbnRlbnQobm9kZSwgdGV4dCk7XG4gICAgICBub2RlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBDb2RlTWlycm9yLnJ1bk1vZGUodGV4dC5qb2luKFwiXCIpLCBtb2RlLCBub2RlLCB7IGxpbmVOdW1zOiBzaG93TGluZU51bXMgfSk7XG4gICAgICBub2RlLmNsYXNzTmFtZSArPSBcIiBjbS1zLW9ic2lkaWFuXCI7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBub2RlLmlubmVySFRNTDtcbiAgICAgIG5vZGUuZW1wdHkoKTtcbiAgICAgIGNvbnN0IGNvZGVFbCA9IG5vZGUuY3JlYXRlRWwoXCJjb2RlXCIpO1xuICAgICAgY29kZUVsLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICAgIGNvZGVFbC5hZGRDbGFzcyhcImxhbmd1YWdlLVwiICsgbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxhbmdcIikpO1xuICAgIH1cbiAgfTtcbn0pKCk7XG4iLCIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4vLyBCZWNhdXNlIHNvbWV0aW1lcyB5b3UgbmVlZCB0byBtYXJrIHRoZSBzZWxlY3RlZCAqdGV4dCouXG4vL1xuLy8gQWRkcyBhbiBvcHRpb24gJ3N0eWxlU2VsZWN0ZWRUZXh0JyB3aGljaCwgd2hlbiBlbmFibGVkLCBnaXZlc1xuLy8gc2VsZWN0ZWQgdGV4dCB0aGUgQ1NTIGNsYXNzIGdpdmVuIGFzIG9wdGlvbiB2YWx1ZSwgb3Jcbi8vIFwiQ29kZU1pcnJvci1zZWxlY3RlZHRleHRcIiB3aGVuIHRoZSB2YWx1ZSBpcyBub3QgYSBzdHJpbmcuXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIENvZGVNaXJyb3IuZGVmaW5lT3B0aW9uKFwic3R5bGVTZWxlY3RlZFRleHRcIiwgZmFsc2UsIGZ1bmN0aW9uKGNtLCB2YWwsIG9sZCkge1xuICAgIHZhciBwcmV2ID0gb2xkICYmIG9sZCAhPSBDb2RlTWlycm9yLkluaXQ7XG4gICAgaWYgKHZhbCAmJiAhcHJldikge1xuICAgICAgY20uc3RhdGUubWFya2VkU2VsZWN0aW9uID0gW107XG4gICAgICBjbS5zdGF0ZS5tYXJrZWRTZWxlY3Rpb25TdHlsZSA9IHR5cGVvZiB2YWwgPT0gXCJzdHJpbmdcIiA/IHZhbCA6IFwiQ29kZU1pcnJvci1zZWxlY3RlZHRleHRcIjtcbiAgICAgIHJlc2V0KGNtKTtcbiAgICAgIGNtLm9uKFwiY3Vyc29yQWN0aXZpdHlcIiwgb25DdXJzb3JBY3Rpdml0eSk7XG4gICAgICBjbS5vbihcImNoYW5nZVwiLCBvbkNoYW5nZSk7XG4gICAgfSBlbHNlIGlmICghdmFsICYmIHByZXYpIHtcbiAgICAgIGNtLm9mZihcImN1cnNvckFjdGl2aXR5XCIsIG9uQ3Vyc29yQWN0aXZpdHkpO1xuICAgICAgY20ub2ZmKFwiY2hhbmdlXCIsIG9uQ2hhbmdlKTtcbiAgICAgIGNsZWFyKGNtKTtcbiAgICAgIGNtLnN0YXRlLm1hcmtlZFNlbGVjdGlvbiA9IGNtLnN0YXRlLm1hcmtlZFNlbGVjdGlvblN0eWxlID0gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9uQ3Vyc29yQWN0aXZpdHkoY20pIHtcbiAgICBpZiAoY20uc3RhdGUubWFya2VkU2VsZWN0aW9uKVxuICAgICAgY20ub3BlcmF0aW9uKGZ1bmN0aW9uKCkgeyB1cGRhdGUoY20pOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGNtKSB7XG4gICAgaWYgKGNtLnN0YXRlLm1hcmtlZFNlbGVjdGlvbiAmJiBjbS5zdGF0ZS5tYXJrZWRTZWxlY3Rpb24ubGVuZ3RoKVxuICAgICAgY20ub3BlcmF0aW9uKGZ1bmN0aW9uKCkgeyBjbGVhcihjbSk7IH0pO1xuICB9XG5cbiAgdmFyIENIVU5LX1NJWkUgPSA4O1xuICB2YXIgUG9zID0gQ29kZU1pcnJvci5Qb3M7XG4gIHZhciBjbXAgPSBDb2RlTWlycm9yLmNtcFBvcztcblxuICBmdW5jdGlvbiBjb3ZlclJhbmdlKGNtLCBmcm9tLCB0bywgYWRkQXQpIHtcbiAgICBpZiAoY21wKGZyb20sIHRvKSA9PSAwKSByZXR1cm47XG4gICAgdmFyIGFycmF5ID0gY20uc3RhdGUubWFya2VkU2VsZWN0aW9uO1xuICAgIHZhciBjbHMgPSBjbS5zdGF0ZS5tYXJrZWRTZWxlY3Rpb25TdHlsZTtcbiAgICBmb3IgKHZhciBsaW5lID0gZnJvbS5saW5lOzspIHtcbiAgICAgIHZhciBzdGFydCA9IGxpbmUgPT0gZnJvbS5saW5lID8gZnJvbSA6IFBvcyhsaW5lLCAwKTtcbiAgICAgIHZhciBlbmRMaW5lID0gbGluZSArIENIVU5LX1NJWkUsIGF0RW5kID0gZW5kTGluZSA+PSB0by5saW5lO1xuICAgICAgdmFyIGVuZCA9IGF0RW5kID8gdG8gOiBQb3MoZW5kTGluZSwgMCk7XG4gICAgICB2YXIgbWFyayA9IGNtLm1hcmtUZXh0KHN0YXJ0LCBlbmQsIHtjbGFzc05hbWU6IGNsc30pO1xuICAgICAgaWYgKGFkZEF0ID09IG51bGwpIGFycmF5LnB1c2gobWFyayk7XG4gICAgICBlbHNlIGFycmF5LnNwbGljZShhZGRBdCsrLCAwLCBtYXJrKTtcbiAgICAgIGlmIChhdEVuZCkgYnJlYWs7XG4gICAgICBsaW5lID0gZW5kTGluZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcihjbSkge1xuICAgIHZhciBhcnJheSA9IGNtLnN0YXRlLm1hcmtlZFNlbGVjdGlvbjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgKytpKSBhcnJheVtpXS5jbGVhcigpO1xuICAgIGFycmF5Lmxlbmd0aCA9IDA7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldChjbSkge1xuICAgIGNsZWFyKGNtKTtcbiAgICB2YXIgcmFuZ2VzID0gY20ubGlzdFNlbGVjdGlvbnMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkrKylcbiAgICAgIGNvdmVyUmFuZ2UoY20sIHJhbmdlc1tpXS5mcm9tKCksIHJhbmdlc1tpXS50bygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShjbSkge1xuICAgIGlmICghY20uc29tZXRoaW5nU2VsZWN0ZWQoKSkgcmV0dXJuIGNsZWFyKGNtKTtcbiAgICBpZiAoY20ubGlzdFNlbGVjdGlvbnMoKS5sZW5ndGggPiAxKSByZXR1cm4gcmVzZXQoY20pO1xuXG4gICAgdmFyIGZyb20gPSBjbS5nZXRDdXJzb3IoXCJzdGFydFwiKSwgdG8gPSBjbS5nZXRDdXJzb3IoXCJlbmRcIik7XG5cbiAgICB2YXIgYXJyYXkgPSBjbS5zdGF0ZS5tYXJrZWRTZWxlY3Rpb247XG4gICAgaWYgKCFhcnJheS5sZW5ndGgpIHJldHVybiBjb3ZlclJhbmdlKGNtLCBmcm9tLCB0byk7XG5cbiAgICB2YXIgY292ZXJTdGFydCA9IGFycmF5WzBdLmZpbmQoKSwgY292ZXJFbmQgPSBhcnJheVthcnJheS5sZW5ndGggLSAxXS5maW5kKCk7XG4gICAgaWYgKCFjb3ZlclN0YXJ0IHx8ICFjb3ZlckVuZCB8fCB0by5saW5lIC0gZnJvbS5saW5lIDw9IENIVU5LX1NJWkUgfHxcbiAgICAgICAgY21wKGZyb20sIGNvdmVyRW5kLnRvKSA+PSAwIHx8IGNtcCh0bywgY292ZXJTdGFydC5mcm9tKSA8PSAwKVxuICAgICAgcmV0dXJuIHJlc2V0KGNtKTtcblxuICAgIHdoaWxlIChjbXAoZnJvbSwgY292ZXJTdGFydC5mcm9tKSA+IDApIHtcbiAgICAgIGFycmF5LnNoaWZ0KCkuY2xlYXIoKTtcbiAgICAgIGNvdmVyU3RhcnQgPSBhcnJheVswXS5maW5kKCk7XG4gICAgfVxuICAgIGlmIChjbXAoZnJvbSwgY292ZXJTdGFydC5mcm9tKSA8IDApIHtcbiAgICAgIGlmIChjb3ZlclN0YXJ0LnRvLmxpbmUgLSBmcm9tLmxpbmUgPCBDSFVOS19TSVpFKSB7XG4gICAgICAgIGFycmF5LnNoaWZ0KCkuY2xlYXIoKTtcbiAgICAgICAgY292ZXJSYW5nZShjbSwgZnJvbSwgY292ZXJTdGFydC50bywgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3ZlclJhbmdlKGNtLCBmcm9tLCBjb3ZlclN0YXJ0LmZyb20sIDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlIChjbXAodG8sIGNvdmVyRW5kLnRvKSA8IDApIHtcbiAgICAgIGFycmF5LnBvcCgpLmNsZWFyKCk7XG4gICAgICBjb3ZlckVuZCA9IGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdLmZpbmQoKTtcbiAgICB9XG4gICAgaWYgKGNtcCh0bywgY292ZXJFbmQudG8pID4gMCkge1xuICAgICAgaWYgKHRvLmxpbmUgLSBjb3ZlckVuZC5mcm9tLmxpbmUgPCBDSFVOS19TSVpFKSB7XG4gICAgICAgIGFycmF5LnBvcCgpLmNsZWFyKCk7XG4gICAgICAgIGNvdmVyUmFuZ2UoY20sIGNvdmVyRW5kLmZyb20sIHRvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdmVyUmFuZ2UoY20sIGNvdmVyRW5kLnRvLCB0byk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbiIsIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbiAobW9kKSB7XG4gIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uIChDb2RlTWlycm9yKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgV1JBUF9DTEFTUyA9IFwiQ29kZU1pcnJvci1hY3RpdmVsaW5lXCI7XG4gIHZhciBCQUNLX0NMQVNTID0gXCJDb2RlTWlycm9yLWFjdGl2ZWxpbmUtYmFja2dyb3VuZFwiO1xuICB2YXIgR1VUVF9DTEFTUyA9IFwiQ29kZU1pcnJvci1hY3RpdmVsaW5lLWd1dHRlclwiO1xuXG4gIENvZGVNaXJyb3IuZGVmaW5lT3B0aW9uKFwic3R5bGVBY3RpdmVMaW5lXCIsIGZhbHNlLCBmdW5jdGlvbiAoY20sIHZhbCwgb2xkKSB7XG4gICAgdmFyIHByZXYgPSBvbGQgPT0gQ29kZU1pcnJvci5Jbml0ID8gZmFsc2UgOiBvbGQ7XG4gICAgaWYgKHZhbCA9PSBwcmV2KSByZXR1cm47XG4gICAgaWYgKHByZXYpIHtcbiAgICAgIGNtLm9mZihcImJlZm9yZVNlbGVjdGlvbkNoYW5nZVwiLCBzZWxlY3Rpb25DaGFuZ2UpO1xuICAgICAgY2xlYXJBY3RpdmVMaW5lcyhjbSk7XG4gICAgICBkZWxldGUgY20uc3RhdGUuYWN0aXZlTGluZXM7XG4gICAgfVxuICAgIGlmICh2YWwpIHtcbiAgICAgIGNtLnN0YXRlLmFjdGl2ZUxpbmVzID0gW107XG4gICAgICB1cGRhdGVBY3RpdmVMaW5lcyhjbSwgY20ubGlzdFNlbGVjdGlvbnMoKSk7XG4gICAgICBjbS5vbihcImJlZm9yZVNlbGVjdGlvbkNoYW5nZVwiLCBzZWxlY3Rpb25DaGFuZ2UpO1xuICAgICAgY20ucmVmcmVzaCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xlYXJBY3RpdmVMaW5lcyhjbSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY20uc3RhdGUuYWN0aXZlTGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNtLnJlbW92ZUxpbmVDbGFzcyhjbS5zdGF0ZS5hY3RpdmVMaW5lc1tpXSwgXCJ3cmFwXCIsIFdSQVBfQ0xBU1MpO1xuICAgICAgY20ucmVtb3ZlTGluZUNsYXNzKGNtLnN0YXRlLmFjdGl2ZUxpbmVzW2ldLCBcImJhY2tncm91bmRcIiwgQkFDS19DTEFTUyk7XG4gICAgICBjbS5yZW1vdmVMaW5lQ2xhc3MoY20uc3RhdGUuYWN0aXZlTGluZXNbaV0sIFwiZ3V0dGVyXCIsIEdVVFRfQ0xBU1MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNhbWVBcnJheShhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSBpZiAoYVtpXSAhPSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVMaW5lcyhjbSwgcmFuZ2VzKSB7XG4gICAgdmFyIGFjdGl2ZSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmFuZ2UgPSByYW5nZXNbaV07XG4gICAgICB2YXIgb3B0aW9uID0gY20uZ2V0T3B0aW9uKFwic3R5bGVBY3RpdmVMaW5lXCIpO1xuICAgICAgLy8gaWYgKHR5cGVvZiBvcHRpb24gPT0gXCJvYmplY3RcIiAmJiBvcHRpb24ubm9uRW1wdHkgPyByYW5nZS5hbmNob3IubGluZSAhPSByYW5nZS5oZWFkLmxpbmUgOiAhcmFuZ2UuZW1wdHkoKSlcbiAgICAgIC8vIG5vdGhpbmdpc2xvc3Q6IG1vZGlmaWVkIHRoZSBub25FbXB0eSBvcHRpb24gdG8gc3VwcG9ydCBtdWx0aXBsZSBzZWxlY3RlZCBsaW5lc1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gXCJvYmplY3RcIiAmJiBvcHRpb24ubm9uRW1wdHkgPyBmYWxzZSA6ICFyYW5nZS5lbXB0eSgpKSBjb250aW51ZTtcbiAgICAgIC8vIG5vdGhpbmdpc2xvc3Q6IHN1cHBvcnQgZm9yd2FyZHMgYW5kIGJhY2t3YXJkcyBtdWx0aSBsaW5lIHNlbGVjdGlvbnNcbiAgICAgIGlmIChyYW5nZS5oZWFkLmxpbmUgPiByYW5nZS5hbmNob3IubGluZSkge1xuICAgICAgICB2YXIgc3RhcnQgPSByYW5nZS5hbmNob3IubGluZSxcbiAgICAgICAgICBlbmQgPSByYW5nZS5oZWFkLmxpbmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc3RhcnQgPSByYW5nZS5oZWFkLmxpbmUsXG4gICAgICAgICAgZW5kID0gcmFuZ2UuYW5jaG9yLmxpbmU7XG4gICAgICB9XG4gICAgICAvLyBub3RoaW5naXNsb3N0OiBnZXQgdGhlIHZpc3VhbCBzdGFydCBmb3IgYWxsIGxpbmVzIGluIHRoZSBzZWxlY3Rpb25cbiAgICAgIGZvciAodmFyIGogPSBzdGFydDsgaiA8IGVuZCArIDE7ICsraikge1xuICAgICAgICB2YXIgbGluZSA9IGNtLmdldExpbmVIYW5kbGVWaXN1YWxTdGFydChqKTtcbiAgICAgICAgaWYgKGFjdGl2ZVthY3RpdmUubGVuZ3RoIC0gMV0gIT0gbGluZSkgYWN0aXZlLnB1c2gobGluZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzYW1lQXJyYXkoY20uc3RhdGUuYWN0aXZlTGluZXMsIGFjdGl2ZSkpIHJldHVybjtcbiAgICBjbS5vcGVyYXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJBY3RpdmVMaW5lcyhjbSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjbS5hZGRMaW5lQ2xhc3MoYWN0aXZlW2ldLCBcIndyYXBcIiwgV1JBUF9DTEFTUyk7XG4gICAgICAgIGNtLmFkZExpbmVDbGFzcyhhY3RpdmVbaV0sIFwiYmFja2dyb3VuZFwiLCBCQUNLX0NMQVNTKTtcbiAgICAgICAgY20uYWRkTGluZUNsYXNzKGFjdGl2ZVtpXSwgXCJndXR0ZXJcIiwgR1VUVF9DTEFTUyk7XG4gICAgICB9XG4gICAgICBjbS5zdGF0ZS5hY3RpdmVMaW5lcyA9IGFjdGl2ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdGlvbkNoYW5nZShjbSwgc2VsKSB7XG4gICAgdXBkYXRlQWN0aXZlTGluZXMoY20sIHNlbC5yYW5nZXMpO1xuICB9XG59KTtcbiIsIi8qIVxuICogSHlwZXJNRCwgY29weXJpZ2h0IChjKSBieSBsYW9idWJ1XG4gKiBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cDovL2xhb2J1YnUubmV0L0h5cGVyTUQvTElDRU5TRVxuICpcbiAqIEJyZWFrIHRoZSBXYWxsIGJldHdlZW4gd3JpdGluZyBhbmQgcHJldmlldywgaW4gYSBNYXJrZG93biBFZGl0b3IuXG4gKlxuICogSHlwZXJNRCBtYWtlcyBNYXJrZG93biBlZGl0b3Igb24gd2ViIFdZU0lXWUcsIGJhc2VkIG9uIENvZGVNaXJyb3JcbiAqXG4gKiBIb21lcGFnZTogaHR0cDovL2xhb2J1YnUubmV0L0h5cGVyTUQvXG4gKiBJc3N1ZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9sYW9idWJ1L0h5cGVyTUQvaXNzdWVzXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiksXG4gICAgZmFjdG9yeSgoZ2xvYmFsLkh5cGVyTUQgPSB7fSksIGdsb2JhbC5Db2RlTWlycm9yKTtcbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBDb2RlTWlycm9yKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBzb21lIGNvbW1vbiBQb2x5RmlsbFxuICAgKlxuICAgKiBAaW50ZXJuYWwgUGFydCBvZiBIeXBlck1EIGNvcmUuXG4gICAqXG4gICAqIFlvdSBzaGFsbCBOT1QgaW1wb3J0IHRoaXMgZmlsZTsgcGxlYXNlIGltcG9ydCBcImNvcmVcIiBpbnN0ZWFkXG4gICAqL1xuICBpZiAodHlwZW9mIE9iamVjdFtcImFzc2lnblwiXSAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBNdXN0IGJlIHdyaXRhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCwgXCJhc3NpZ25cIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHZhckFyZ3MpIHtcbiAgICAgICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgIC8vIFR5cGVFcnJvciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHMkMVtpbmRleF07XG4gICAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gU2tpcCBvdmVyIGlmIHVuZGVmaW5lZCBvciBudWxsXG4gICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgLy8gQXZvaWQgYnVncyB3aGVuIGhhc093blByb3BlcnR5IGlzIHNoYWRvd2VkXG4gICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIHNvbWUgdW5pdmVyc2FsIHV0aWxzXG4gICAqXG4gICAqIEBpbnRlcm5hbCBQYXJ0IG9mIEh5cGVyTUQgY29yZS5cbiAgICpcbiAgICogWW91IHNoYWxsIE5PVCBpbXBvcnQgdGhpcyBmaWxlOyBwbGVhc2UgaW1wb3J0IFwiY29yZVwiIGluc3RlYWRcbiAgICovXG4gIC8qKiBTaW1wbGUgRmxpcEZsb3AgKi9cbiAgdmFyIEZsaXBGbG9wID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIFNpbXBsZSBGbGlwRmxvcFxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25fY2Igc2VlIEZsaXBGbG9wLk9OKGNhbGxiYWNrKVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9mZl9jYiBzZWUgRmxpcEZsb3AuT0ZGKGNhbGxiYWNrKVxuICAgICAqIEBwYXJhbSB7VH0gW3N0YXRlXSBpbml0aWFsIHN0YXRlLiBkZWZhdWx0OiBmYWxzZSAoYm9vbGVhbilcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3N1YmtleV0gaWYgZ2V0IGFuIG9iamVjdCwgdXNlIHRoaXMga2V5IHRvIHJldHJpdmUgc3RhdHVzLiBkZWZhdWx0OiBcImVuYWJsZWRcIlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEZsaXBGbG9wKG9uX2NiLCBvZmZfY2IsIHN0YXRlLCBzdWJrZXkpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHN0YXRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc3Via2V5ID09PSB2b2lkIDApIHtcbiAgICAgICAgc3Via2V5ID0gXCJlbmFibGVkXCI7XG4gICAgICB9XG4gICAgICB0aGlzLm9uX2NiID0gb25fY2I7XG4gICAgICB0aGlzLm9mZl9jYiA9IG9mZl9jYjtcbiAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIHRoaXMuc3Via2V5ID0gc3Via2V5O1xuICAgIH1cbiAgICAvKiogc2V0IGEgY2FsbGJhY2sgd2hlbiBzdGF0ZSBpcyBjaGFuZ2VkIGFuZCBpcyAqKk5PVCoqIGBudWxsYCwgYGZhbHNlYCBldGMuICovXG4gICAgRmxpcEZsb3AucHJvdG90eXBlLk9OID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uX2NiID0gY2FsbGJhY2s7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKiBzZXQgYSBjYWxsYmFjayB3aGVuIHN0YXRlIGlzIHNldCB0byBgbnVsbGAsIGBmYWxzZWAgZXRjLiAqL1xuICAgIEZsaXBGbG9wLnByb3RvdHlwZS5PRkYgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub2ZmX2NiID0gY2FsbGJhY2s7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBGbGlwRmxvcCBzdGF0dXMsIGFuZCB0cmlnIGNhbGxiYWNrIGZ1bmN0aW9uIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtUfG9iamVjdH0gc3RhdGUgbmV3IHN0YXR1cyB2YWx1ZS4gY2FuIGJlIGEgb2JqZWN0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdG9Cb29sXSBjb252ZXJ0IHJldHJpdmVkIHZhbHVlIHRvIGJvb2xlYW4uIGRlZmF1bHQ6IGZhbHNlXG4gICAgICovXG4gICAgRmxpcEZsb3AucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChzdGF0ZSwgdG9Cb29sKSB7XG4gICAgICB2YXIgbmV3VmFsID0gdHlwZW9mIHN0YXRlID09PSBcIm9iamVjdFwiICYmIHN0YXRlID8gc3RhdGVbdGhpcy5zdWJrZXldIDogc3RhdGU7XG4gICAgICBpZiAodG9Cb29sKSB7XG4gICAgICAgIG5ld1ZhbCA9ICEhbmV3VmFsO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1ZhbCA9PT0gdGhpcy5zdGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoKHRoaXMuc3RhdGUgPSBuZXdWYWwpKSB7XG4gICAgICAgIHRoaXMub25fY2IgJiYgdGhpcy5vbl9jYihuZXdWYWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vZmZfY2IgJiYgdGhpcy5vZmZfY2IobmV3VmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIEZsaXBGbG9wLnByb3RvdHlwZS5zZXRCb29sID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoc3RhdGUsIHRydWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQmluZCB0byBhIG9iamVjdCdzIHByb3BlcnR5IHdpdGggYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWBcbiAgICAgKiBzbyB0aGF0IHlvdSBtYXkgc2V0IHN0YXRlIHdpdGggYG9iai5lbmFibGUgPSB0cnVlYFxuICAgICAqL1xuICAgIEZsaXBGbG9wLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKG9iaiwga2V5LCB0b0Jvb2wpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuc3RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0KHYsIHRvQm9vbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gRmxpcEZsb3A7XG4gIH0pKCk7XG4gIC8qKiBhc3luYyBydW4gYSBmdW5jdGlvbiwgYW5kIHJldHJ5IHVwIHRvIE4gdGltZXMgdW50aWwgaXQgcmV0dXJucyB0cnVlICovXG4gIGZ1bmN0aW9uIHRyeVRvUnVuKGZuLCB0aW1lcywgb25GYWlsZWQpIHtcbiAgICB0aW1lcyA9IH5+dGltZXMgfHwgNTtcbiAgICB2YXIgZGVsYXlUaW1lID0gMjUwO1xuICAgIGZ1bmN0aW9uIG5leHRDeWNsZSgpIHtcbiAgICAgIGlmICghdGltZXMtLSkge1xuICAgICAgICBpZiAob25GYWlsZWQpIHtcbiAgICAgICAgICBvbkZhaWxlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChmbigpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgc2V0VGltZW91dChuZXh0Q3ljbGUsIGRlbGF5VGltZSk7XG4gICAgICBkZWxheVRpbWUgKj0gMjtcbiAgICB9XG4gICAgc2V0VGltZW91dChuZXh0Q3ljbGUsIDApO1xuICB9XG4gIC8qKlxuICAgKiBtYWtlIGEgZGVib3VuY2VkIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBpbiBtc1xuICAgKi9cbiAgZnVuY3Rpb24gZGVib3VuY2UoZm4sIGRlbGF5KSB7XG4gICAgdmFyIGRlZmVyVGFzayA9IG51bGw7XG4gICAgdmFyIG5vdENsZWFyQmVmb3JlID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm4oKTtcbiAgICAgIGRlZmVyVGFzayA9IDA7XG4gICAgfTtcbiAgICB2YXIgYW5zID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5vd1RpbWUgPSArbmV3IERhdGUoKTtcbiAgICAgIGlmIChkZWZlclRhc2spIHtcbiAgICAgICAgaWYgKG5vd1RpbWUgPCBub3RDbGVhckJlZm9yZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoZGVmZXJUYXNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVmZXJUYXNrID0gc2V0VGltZW91dChydW4sIGRlbGF5KTtcbiAgICAgIG5vdENsZWFyQmVmb3JlID0gbm93VGltZSArIDEwMDsgLy8gYWxsb3cgMTAwbXMgZXJyb3JcbiAgICB9O1xuICAgIGFucy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFkZWZlclRhc2spIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGFzayk7XG4gICAgICBkZWZlclRhc2sgPSAwO1xuICAgIH07XG4gICAgcmV0dXJuIGFucztcbiAgfVxuICAvKipcbiAgICogYWRkQ2xhc3MgLyByZW1vdmVDbGFzcyBldGMuXG4gICAqXG4gICAqIHVzaW5nIENvZGVNaXJyb3IncyAoYWx0aG91Z2ggdGhleSdyZSBsZWdhY3kgQVBJKVxuICAgKi9cbiAgdmFyIGFkZENsYXNzID0gQ29kZU1pcnJvci5hZGRDbGFzcztcbiAgdmFyIHJtQ2xhc3MgPSBDb2RlTWlycm9yLnJtQ2xhc3M7XG4gIHZhciBjb250YWlucyA9IENvZGVNaXJyb3IuY29udGFpbnM7XG4gIC8qKlxuICAgKiBhIGZhbGxiYWNrIGZvciBuZXcgQXJyYXkoY291bnQpLmZpbGwoZGF0YSlcbiAgICovXG4gIGZ1bmN0aW9uIHJlcGVhdChpdGVtLCBjb3VudCkge1xuICAgIHZhciBhbnMgPSBuZXcgQXJyYXkoY291bnQpO1xuICAgIGlmIChhbnNbXCJmaWxsXCJdKSB7XG4gICAgICBhbnNbXCJmaWxsXCJdKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgYW5zW2ldID0gaXRlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFucztcbiAgfVxuICBmdW5jdGlvbiByZXBlYXRTdHIoaXRlbSwgY291bnQpIHtcbiAgICB2YXIgYW5zID0gXCJcIjtcbiAgICB3aGlsZSAoY291bnQtLSA+IDApIHtcbiAgICAgIGFucyArPSBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gYW5zO1xuICB9XG4gIC8qKlxuICAgKiBWaXNpdCBlbGVtZW50IG5vZGVzIGFuZCB0aGVpciBjaGlsZHJlblxuICAgKi9cbiAgZnVuY3Rpb24gdmlzaXRFbGVtZW50cyhzZWVkcywgaGFuZGxlcikge1xuICAgIHZhciBxdWV1ZSA9IFtzZWVkc10sXG4gICAgICB0bXA7XG4gICAgd2hpbGUgKCh0bXAgPSBxdWV1ZS5zaGlmdCgpKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0bXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsID0gdG1wW2ldO1xuICAgICAgICBpZiAoIWVsIHx8IGVsLm5vZGVUeXBlICE9IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlcihlbCk7XG4gICAgICAgIGlmIChlbC5jaGlsZHJlbiAmJiBlbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcXVldWUucHVzaChlbC5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEEgbGF6eSBhbmQgc2ltcGxlIEVsZW1lbnQgc2l6ZSB3YXRjaGVyLiBOT1QgV09SSyB3aXRoIGFuaW1hdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIHdhdGNoU2l6ZShlbCwgb25DaGFuZ2UsIG5lZWRQb2xsKSB7XG4gICAgdmFyIF9hID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB3aWR0aCA9IF9hLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgIC8qKiBjaGVjayBzaXplIGFuZCB0cmlnIG9uQ2hhbmdlICovXG4gICAgdmFyIGNoZWNrID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBuZXdXaWR0aCA9IHJlY3Qud2lkdGgsXG4gICAgICAgIG5ld0hlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgaWYgKHdpZHRoICE9IG5ld1dpZHRoIHx8IGhlaWdodCAhPSBuZXdIZWlnaHQpIHtcbiAgICAgICAgb25DaGFuZ2UobmV3V2lkdGgsIG5ld0hlaWdodCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgc2V0VGltZW91dChjaGVjaywgMjAwKTsgLy8gbWF5YmUgY2hhbmdlZCBhZ2FpbiBsYXRlcj9cbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICAgIHZhciBuZXh0VGltZXIgPSBudWxsO1xuICAgIGZ1bmN0aW9uIHBvbGxPbmNlKCkge1xuICAgICAgaWYgKG5leHRUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQobmV4dFRpbWVyKTtcbiAgICAgIH1cbiAgICAgIGlmICghc3RvcHBlZCkge1xuICAgICAgICBuZXh0VGltZXIgPSBzZXRUaW1lb3V0KHBvbGxPbmNlLCAyMDApO1xuICAgICAgfVxuICAgICAgY2hlY2soKTtcbiAgICB9XG4gICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgc3RvcHBlZCA9IHRydWU7XG4gICAgICBjaGVjay5zdG9wKCk7XG4gICAgICBpZiAobmV4dFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChuZXh0VGltZXIpO1xuICAgICAgICBuZXh0VGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudEJpbmRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBldmVudEJpbmRlZFtpXVswXS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50QmluZGVkW2ldWzFdLCBjaGVjaywgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZXZlbnRCaW5kZWQgPSBbXTtcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKGVsKSB7XG4gICAgICB2YXIgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG4gICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgdmFyIGdldFN0eWxlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSB8fCBcIlwiO1xuICAgICAgfTtcbiAgICAgIGlmIChnZXRTdHlsZShcInJlc2l6ZVwiKSAhPSBcIm5vbmVcIikge1xuICAgICAgICBuZWVkUG9sbCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBzaXplIGNoYW5nZXMgaWYgbG9hZGVkXG4gICAgICBpZiAoL14oPzppbWd8dmlkZW8pJC9pLnRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2ssIGZhbHNlKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGNoZWNrLCBmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKC9eKD86ZGV0YWlsc3xzdW1tYXJ5KSQvaS50ZXN0KHRhZ05hbWUpKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVjaywgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5lZWRQb2xsKSB7XG4gICAgICB2aXNpdEVsZW1lbnRzKFtlbF0sIGJpbmRFdmVudHMpO1xuICAgIH1cbiAgICAvLyBiaW5kRXZlbnRzIHdpbGwgdXBkYXRlIGBuZWVkUG9sbGBcbiAgICBpZiAobmVlZFBvbGwpIHtcbiAgICAgIG5leHRUaW1lciA9IHNldFRpbWVvdXQocG9sbE9uY2UsIDIwMCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjaGVjazogY2hlY2ssXG4gICAgICBzdG9wOiBzdG9wLFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWFrZVN5bWJvbChuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIFN5bWJvbChuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiX1xcblwiICsgbmFtZSArIFwiXFxuX1wiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHhmZmZmKS50b1N0cmluZygxNik7XG4gIH1cblxuICAvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cbiAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG4gIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG4gIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuICBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG4gIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbiAgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID1cbiAgICAgIE9iamVjdC5hc3NpZ24gfHxcbiAgICAgIGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVhZHktdG8tdXNlIGZ1bmN0aW9ucyB0aGF0IHBvd2VycyB1cCB5b3VyIE1hcmtkb3duIGVkaXRvclxuICAgKlxuICAgKiBAaW50ZXJuYWwgUGFydCBvZiBIeXBlck1EIGNvcmUuXG4gICAqXG4gICAqIFlvdSBzaGFsbCBOT1QgaW1wb3J0IHRoaXMgZmlsZTsgcGxlYXNlIGltcG9ydCBcImNvcmVcIiBpbnN0ZWFkXG4gICAqL1xuICAvLyBpZiAoSHlwZXJNRF9NYXJrIGluIGVkaXRvciksIHRoZSBlZGl0b3Igd2FzIGEgSHlwZXJNRCBtb2RlIGF0IGxlYXN0IG9uY2VcbiAgdmFyIEh5cGVyTURfTWFyayA9IFwiX19oeXBlcm1kX19cIjtcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdGhhdCB1c2VkIGJ5IGBIeXBlck1ELmZyb21UZXh0QXJlYWBcbiAgICpcbiAgICogQWRkb25zIG1heSB1cGRhdGUgdGhpcyBvYmplY3QgZnJlZWx5IVxuICAgKi9cbiAgdmFyIHN1Z2dlc3RlZEVkaXRvckNvbmZpZyA9IHtcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgICBsaW5lV3JhcHBpbmc6IHRydWUsXG4gICAgdGhlbWU6IFwibGlnaHRcIixcbiAgICBtb2RlOiBcInRleHQveC1oeXBlcm1kXCIsXG4gICAgdGFiU2l6ZTogNCxcbiAgICBhdXRvQ2xvc2VCcmFja2V0czogdHJ1ZSxcbiAgICBmb2xkR3V0dGVyOiB0cnVlLFxuICAgIGd1dHRlcnM6IFtcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIiwgXCJDb2RlTWlycm9yLWZvbGRndXR0ZXJcIiwgXCJIeXBlck1ELWdvYmFja1wiXSxcbiAgfTtcbiAgLyoqXG4gICAqIEVkaXRvciBPcHRpb25zIHRoYXQgZGlzYWJsZSBIeXBlck1EIFdZU0lXWUcgdmlzdWFsIGVmZmVjdHMuXG4gICAqIFRoZXNlIG9wdGlvbiB3aWxsIGJlIGFwcGxpZWQgd2hlbiB1c2VyIGludm9rZSBgc3dpdGNoVG9Ob3JtYWxgLlxuICAgKlxuICAgKiBBZGRvbnMgYWJvdXQgdmlzdWFsIGVmZmVjdHMsIHNoYWxsIHVwZGF0ZSB0aGlzIG9iamVjdCFcbiAgICovXG4gIHZhciBub3JtYWxWaXN1YWxDb25maWcgPSB7XG4gICAgdGhlbWU6IFwiZGVmYXVsdFwiLFxuICB9O1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhbiBlZGl0b3IgZnJvbSBhIDx0ZXh0YXJlYT5cbiAgICogQ2FsbGluZyBgQ29kZU1pcnJvci5mcm9tVGV4dEFyZWFgIHdpdGggcmVjb21tZW5kZWQgSHlwZXJNRCBvcHRpb25zXG4gICAqXG4gICAqIEBzZWUgQ29kZU1pcnJvci5mcm9tVGV4dEFyZWFcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MVGV4dEFyZWFFbGVtZW50fSB0ZXh0QXJlYVxuICAgKiBAcGFyYW0ge29iamVjdH0gW2NvbmZpZ11cbiAgICogQHJldHVybnMge2NtX3R9XG4gICAqL1xuICBmdW5jdGlvbiBmcm9tVGV4dEFyZWEodGV4dEFyZWEsIGNvbmZpZykge1xuICAgIHZhciBmaW5hbF9jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3VnZ2VzdGVkRWRpdG9yQ29uZmlnKSwgY29uZmlnKTtcbiAgICB2YXIgY20gPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSh0ZXh0QXJlYSwgZmluYWxfY29uZmlnKTtcbiAgICBjbVtIeXBlck1EX01hcmtdID0gdHJ1ZTtcbiAgICByZXR1cm4gY207XG4gIH1cbiAgZnVuY3Rpb24gc3dpdGNoVG9Ob3JtYWwoZWRpdG9yLCBvcHRpb25zX29yX3RoZW1lKSB7XG4gICAgLy8gdGhpcyBDb2RlTWlycm9yIGVkaXRvciBoYXMgbmV2ZXIgYmVlbiBpbiBIeXBlck1EIG1vZGUuIGBzd2l0Y2hUb05vcm1hbGAgaXMgbWVhbmxlc3NcbiAgICBpZiAoIWVkaXRvcltIeXBlck1EX01hcmtdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uc19vcl90aGVtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgb3B0aW9uc19vcl90aGVtZSA9IHsgdGhlbWU6IG9wdGlvbnNfb3JfdGhlbWUgfTtcbiAgICB9XG4gICAgdmFyIG9wdCA9IF9fYXNzaWduKFxuICAgICAgX19hc3NpZ24oX19hc3NpZ24oe30sIG5vcm1hbFZpc3VhbENvbmZpZyksIHsgdGhlbWU6IGVkaXRvci5nZXRPcHRpb24oXCJ0aGVtZVwiKSB9KSxcbiAgICAgIG9wdGlvbnNfb3JfdGhlbWVcbiAgICApO1xuICAgIGZvciAodmFyIGtleSBpbiBvcHQpIHtcbiAgICAgIGVkaXRvci5zZXRPcHRpb24oa2V5LCBvcHRba2V5XSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHN3aXRjaFRvSHlwZXJNRChlZGl0b3IsIG9wdGlvbnNfb3JfdGhlbWUpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNfb3JfdGhlbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG9wdGlvbnNfb3JfdGhlbWUgPSB7IHRoZW1lOiBvcHRpb25zX29yX3RoZW1lIH07XG4gICAgfVxuICAgIHZhciBvcHQgPSB7fTtcbiAgICBpZiAoSHlwZXJNRF9NYXJrIGluIGVkaXRvcikge1xuICAgICAgLy8gaGFzIGJlZW4gSHlwZXJNRCBtb2RlIG9uY2UuIE9ubHkgbW9kaWZ5IHZpc3VhbC1yZWxhdGVkIG9wdGlvbnNcbiAgICAgIGZvciAodmFyIGtleSBpbiBub3JtYWxWaXN1YWxDb25maWcpIHtcbiAgICAgICAgb3B0W2tleV0gPSBzdWdnZXN0ZWRFZGl0b3JDb25maWdba2V5XTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0LCB7IHRoZW1lOiBlZGl0b3IuZ2V0T3B0aW9uKFwidGhlbWVcIikgfSwgb3B0aW9uc19vcl90aGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMgQ29kZU1pcnJvciBlZGl0b3IgaXMgbmV3IHRvIEh5cGVyTURcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0LCBzdWdnZXN0ZWRFZGl0b3JDb25maWcsIHsgdGhlbWU6IGVkaXRvci5nZXRPcHRpb24oXCJ0aGVtZVwiKSB9LCBvcHRpb25zX29yX3RoZW1lKTtcbiAgICAgIGVkaXRvcltIeXBlck1EX01hcmtdID0gdHJ1ZTtcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIG9wdCkge1xuICAgICAgZWRpdG9yLnNldE9wdGlvbihrZXksIG9wdFtrZXldKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICBAaW50ZXJuYWwgRE8gTk9UIElNUE9SVCBUSElTIE1PRFVMRSFcbiAgICAgICAgICAgICAgSWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgbW9kdWxlLCBpbXBvcnQgaXQgZnJvbSBgY29yZWA6XG5cbiAgICAgICAgICAgICAgICAgIGltcG9ydCB7IGNtX2ludGVybmFsIH0gZnJvbSBcIi4uL2NvcmVcIlxuXG4gICAgVGhlIGZvbGxvd2luZyBmZXcgZnVuY3Rpb25zIGFyZSBmcm9tIENvZGVNaXJyb3IncyBzb3VyY2UgY29kZS5cblxuICAgIE1JVCBMaWNlbnNlXG5cbiAgICBDb3B5cmlnaHQgKEMpIDIwMTcgYnkgTWFyaWpuIEhhdmVyYmVrZSA8bWFyaWpuaEBnbWFpbC5jb20+IGFuZCBvdGhlcnNcblxuICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gICAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICAgIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gICAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gICAgVEhFIFNPRlRXQVJFLlxuXG4gICAgKi9cbiAgLyoqXG4gICAqIEZpbmQgdGhlIHZpZXcgZWxlbWVudCBjb3JyZXNwb25kaW5nIHRvIGEgZ2l2ZW4gbGluZS4gUmV0dXJuIG51bGwgd2hlbiB0aGUgbGluZSBpc24ndCB2aXNpYmxlLlxuICAgKlxuICAgKiBAc2VlIGNvZGVtaXJyb3JcXHNyY1xcbWVhc3VyZW1lbnRcXHBvc2l0aW9uX21lYXN1cmVtZW50LmpzIDUuMzcuMFxuICAgKiBAcGFyYW0gbiBsaW5lTm9cbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRWaWV3SW5kZXgoY20sIG4pIHtcbiAgICBpZiAobiA+PSBjbS5kaXNwbGF5LnZpZXdUbykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG4gLT0gY20uZGlzcGxheS52aWV3RnJvbTtcbiAgICBpZiAobiA8IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgdmlldyA9IGNtLmRpc3BsYXkudmlldztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIG4gLT0gdmlld1tpXS5zaXplO1xuICAgICAgaWYgKG4gPCAwKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogRmluZCBhIGxpbmUgdmlldyB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBnaXZlbiBsaW5lIG51bWJlci5cbiAgICpcbiAgICogQHNlZSBjb2RlbWlycm9yXFxzcmNcXG1lYXN1cmVtZW50XFxwb3NpdGlvbl9tZWFzdXJlbWVudC5qcyA1LjM3LjBcbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRWaWV3Rm9yTGluZShjbSwgbGluZU4pIHtcbiAgICBpZiAobGluZU4gPj0gY20uZGlzcGxheS52aWV3RnJvbSAmJiBsaW5lTiA8IGNtLmRpc3BsYXkudmlld1RvKSB7XG4gICAgICByZXR1cm4gY20uZGlzcGxheS52aWV3W2ZpbmRWaWV3SW5kZXgoY20sIGxpbmVOKV07XG4gICAgfVxuICAgIHZhciBleHQgPSBjbS5kaXNwbGF5LmV4dGVybmFsTWVhc3VyZWQ7XG4gICAgaWYgKGV4dCAmJiBsaW5lTiA+PSBleHQubGluZU4gJiYgbGluZU4gPCBleHQubGluZU4gKyBleHQuc2l6ZSkge1xuICAgICAgcmV0dXJuIGV4dDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEZpbmQgYSBsaW5lIG1hcCAobWFwcGluZyBjaGFyYWN0ZXIgb2Zmc2V0cyB0byB0ZXh0IG5vZGVzKSBhbmQgYVxuICAgKiBtZWFzdXJlbWVudCBjYWNoZSBmb3IgdGhlIGdpdmVuIGxpbmUgbnVtYmVyLiAoQSBsaW5lIHZpZXcgbWlnaHRcbiAgICogY29udGFpbiBtdWx0aXBsZSBsaW5lcyB3aGVuIGNvbGxhcHNlZCByYW5nZXMgYXJlIHByZXNlbnQuKVxuICAgKlxuICAgKiBAc2VlIGNvZGVtaXJyb3JcXHNyY1xcbWVhc3VyZW1lbnRcXHBvc2l0aW9uX21lYXN1cmVtZW50LmpzIDUuMzcuMFxuICAgKi9cbiAgZnVuY3Rpb24gbWFwRnJvbUxpbmVWaWV3KGxpbmVWaWV3LCBsaW5lLCBsaW5lTikge1xuICAgIGlmIChsaW5lVmlldy5saW5lID09IGxpbmUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hcDogbGluZVZpZXcubWVhc3VyZS5tYXAsXG4gICAgICAgIGNhY2hlOiBsaW5lVmlldy5tZWFzdXJlLmNhY2hlLFxuICAgICAgICBiZWZvcmU6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lVmlldy5yZXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGluZVZpZXcucmVzdFtpXSA9PSBsaW5lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWFwOiBsaW5lVmlldy5tZWFzdXJlLm1hcHNbaV0sXG4gICAgICAgICAgY2FjaGU6IGxpbmVWaWV3Lm1lYXN1cmUuY2FjaGVzW2ldLFxuICAgICAgICAgIGJlZm9yZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZVZpZXcucmVzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpbmVWaWV3LnJlc3RbaV0ubGluZU5vKCkgPiBsaW5lTikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1hcDogbGluZVZpZXcubWVhc3VyZS5tYXBzW2ldLFxuICAgICAgICAgIGNhY2hlOiBsaW5lVmlldy5tZWFzdXJlLmNhY2hlc1tpXSxcbiAgICAgICAgICBiZWZvcmU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNtX2ludGVybmFsID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgZmluZFZpZXdJbmRleDogZmluZFZpZXdJbmRleCxcbiAgICBmaW5kVmlld0ZvckxpbmU6IGZpbmRWaWV3Rm9yTGluZSxcbiAgICBtYXBGcm9tTGluZVZpZXc6IG1hcEZyb21MaW5lVmlldyxcbiAgfSk7XG5cbiAgLyoqXG4gICAqIENvZGVNaXJyb3ItcmVsYXRlZCB1dGlsc1xuICAgKlxuICAgKiBAaW50ZXJuYWwgUGFydCBvZiBIeXBlck1EIGNvcmUuXG4gICAqXG4gICAqIFlvdSBzaGFsbCBOT1QgaW1wb3J0IHRoaXMgZmlsZTsgcGxlYXNlIGltcG9ydCBcImNvcmVcIiBpbnN0ZWFkXG4gICAqL1xuICAvKipcbiAgICogVXNlZnVsIHRvb2wgdG8gc2VlayBmb3IgdG9rZW5zXG4gICAqXG4gICAqICAgICB2YXIgc2Vla2VyID0gbmV3IFRva2VuU2Vla2VyKGNtKVxuICAgKiAgICAgc2Vla2VyLnNldFBvcygwLCAwKSAvLyBzZXQgdG8gbGluZSAwLCBjaGFyIDBcbiAgICogICAgIHZhciBhbnMgPSBzZWVrZXIuZmluZE5leHQoL2ZvbXJhdHRpbmctZW0vKVxuICAgKlxuICAgKi9cbiAgdmFyIFRva2VuU2Vla2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRva2VuU2Vla2VyKGNtKSB7XG4gICAgICB0aGlzLmNtID0gY207XG4gICAgfVxuICAgIFRva2VuU2Vla2VyLnByb3RvdHlwZS5maW5kTmV4dCA9IGZ1bmN0aW9uIChjb25kaXRpb24sIHZhcmcsIHNpbmNlKSB7XG4gICAgICB2YXIgbGluZU5vID0gdGhpcy5saW5lTm87XG4gICAgICB2YXIgdG9rZW5zID0gdGhpcy5saW5lVG9rZW5zO1xuICAgICAgdmFyIHRva2VuID0gbnVsbDtcbiAgICAgIHZhciBpX3Rva2VuID0gdGhpcy5pX3Rva2VuICsgMTtcbiAgICAgIHZhciBtYXlTcGFuTGluZXMgPSBmYWxzZTtcbiAgICAgIGlmICh2YXJnID09PSB0cnVlKSB7XG4gICAgICAgIG1heVNwYW5MaW5lcyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YXJnID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGlfdG9rZW4gPSB2YXJnO1xuICAgICAgfVxuICAgICAgaWYgKHNpbmNlKSB7XG4gICAgICAgIGlmIChzaW5jZS5saW5lID4gbGluZU5vKSB7XG4gICAgICAgICAgaV90b2tlbiA9IHRva2Vucy5sZW5ndGg7IC8vIGp1c3QgaWdub3JlIGN1cnJlbnQgbGluZVxuICAgICAgICB9IGVsc2UgaWYgKHNpbmNlLmxpbmUgPCBsaW5lTm8pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmb3IgKDsgaV90b2tlbiA8IHRva2Vucy5sZW5ndGg7IGlfdG9rZW4rKykge1xuICAgICAgICAgICAgaWYgKHRva2Vuc1tpX3Rva2VuXS5zdGFydCA+PSBzaW5jZS5jaCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoOyBpX3Rva2VuIDwgdG9rZW5zLmxlbmd0aDsgaV90b2tlbisrKSB7XG4gICAgICAgIHZhciB0b2tlbl90bXAgPSB0b2tlbnNbaV90b2tlbl07XG4gICAgICAgIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBjb25kaXRpb24odG9rZW5fdG1wLCB0b2tlbnMsIGlfdG9rZW4pIDogY29uZGl0aW9uLnRlc3QodG9rZW5fdG1wLnR5cGUpKSB7XG4gICAgICAgICAgdG9rZW4gPSB0b2tlbl90bXA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdG9rZW4gJiYgbWF5U3BhbkxpbmVzKSB7XG4gICAgICAgIHZhciBjbV8xID0gdGhpcy5jbTtcbiAgICAgICAgdmFyIHN0YXJ0TGluZSA9IE1hdGgubWF4KHNpbmNlID8gc2luY2UubGluZSA6IDAsIGxpbmVObyArIDEpO1xuICAgICAgICBjbV8xLmVhY2hMaW5lKHN0YXJ0TGluZSwgY21fMS5sYXN0TGluZSgpICsgMSwgZnVuY3Rpb24gKGxpbmVfaSkge1xuICAgICAgICAgIGxpbmVObyA9IGxpbmVfaS5saW5lTm8oKTtcbiAgICAgICAgICB0b2tlbnMgPSBjbV8xLmdldExpbmVUb2tlbnMobGluZU5vKTtcbiAgICAgICAgICBpX3Rva2VuID0gMDtcbiAgICAgICAgICBpZiAoc2luY2UgJiYgbGluZU5vID09PSBzaW5jZS5saW5lKSB7XG4gICAgICAgICAgICBmb3IgKDsgaV90b2tlbiA8IHRva2Vucy5sZW5ndGg7IGlfdG9rZW4rKykge1xuICAgICAgICAgICAgICBpZiAodG9rZW5zW2lfdG9rZW5dLnN0YXJ0ID49IHNpbmNlLmNoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yICg7IGlfdG9rZW4gPCB0b2tlbnMubGVuZ3RoOyBpX3Rva2VuKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbl90bXAgPSB0b2tlbnNbaV90b2tlbl07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb25kaXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IGNvbmRpdGlvbih0b2tlbl90bXAsIHRva2VucywgaV90b2tlbikgOiBjb25kaXRpb24udGVzdCh0b2tlbl90bXAudHlwZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0b2tlbiA9IHRva2VuX3RtcDtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIHN0b3AgYGVhY2hMaW5lYFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW4gPyB7IGxpbmVObzogbGluZU5vLCB0b2tlbjogdG9rZW4sIGlfdG9rZW46IGlfdG9rZW4gfSA6IG51bGw7XG4gICAgfTtcbiAgICBUb2tlblNlZWtlci5wcm90b3R5cGUuZmluZFByZXYgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCB2YXJnLCBzaW5jZSkge1xuICAgICAgdmFyIGxpbmVObyA9IHRoaXMubGluZU5vO1xuICAgICAgdmFyIHRva2VucyA9IHRoaXMubGluZVRva2VucztcbiAgICAgIHZhciB0b2tlbiA9IG51bGw7XG4gICAgICB2YXIgaV90b2tlbiA9IHRoaXMuaV90b2tlbiAtIDE7XG4gICAgICB2YXIgbWF5U3BhbkxpbmVzID0gZmFsc2U7XG4gICAgICBpZiAodmFyZyA9PT0gdHJ1ZSkge1xuICAgICAgICBtYXlTcGFuTGluZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFyZyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBpX3Rva2VuID0gdmFyZztcbiAgICAgIH1cbiAgICAgIGlmIChzaW5jZSkge1xuICAgICAgICBpZiAoc2luY2UubGluZSA8IGxpbmVObykge1xuICAgICAgICAgIGlfdG9rZW4gPSAtMTsgLy8ganVzdCBpZ25vcmUgY3VycmVudCBsaW5lXG4gICAgICAgIH0gZWxzZSBpZiAoc2luY2UubGluZSA+IGxpbmVObyk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZvciAoOyBpX3Rva2VuIDwgdG9rZW5zLmxlbmd0aDsgaV90b2tlbisrKSB7XG4gICAgICAgICAgICBpZiAodG9rZW5zW2lfdG9rZW5dLnN0YXJ0ID49IHNpbmNlLmNoKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlfdG9rZW4gPj0gdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICBpX3Rva2VuID0gdG9rZW5zLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICBmb3IgKDsgaV90b2tlbiA+PSAwOyBpX3Rva2VuLS0pIHtcbiAgICAgICAgdmFyIHRva2VuX3RtcCA9IHRva2Vuc1tpX3Rva2VuXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IGNvbmRpdGlvbih0b2tlbl90bXAsIHRva2VucywgaV90b2tlbikgOiBjb25kaXRpb24udGVzdCh0b2tlbl90bXAudHlwZSkpIHtcbiAgICAgICAgICB0b2tlbiA9IHRva2VuX3RtcDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0b2tlbiAmJiBtYXlTcGFuTGluZXMpIHtcbiAgICAgICAgdmFyIGNtID0gdGhpcy5jbTtcbiAgICAgICAgdmFyIHN0YXJ0TGluZSA9IE1hdGgubWluKHNpbmNlID8gc2luY2UubGluZSA6IGNtLmxhc3RMaW5lKCksIGxpbmVObyAtIDEpO1xuICAgICAgICB2YXIgZW5kTGluZSA9IGNtLmZpcnN0TGluZSgpO1xuICAgICAgICAvLyBjbS5lYWNoTGluZSBkb2Vzbid0IHN1cHBvcnQgcmV2ZXJzZWQgc2VhcmNoaW5nXG4gICAgICAgIC8vIHVzZSB3aGlsZS4uLiBsb29wIHRvIGl0ZXJhdGVcbiAgICAgICAgbGluZU5vID0gc3RhcnRMaW5lICsgMTtcbiAgICAgICAgd2hpbGUgKCF0b2tlbiAmJiBlbmRMaW5lIDw9IC0tbGluZU5vKSB7XG4gICAgICAgICAgY20uZ2V0TGluZUhhbmRsZShsaW5lTm8pO1xuICAgICAgICAgIHRva2VucyA9IGNtLmdldExpbmVUb2tlbnMobGluZU5vKTtcbiAgICAgICAgICBpX3Rva2VuID0gMDtcbiAgICAgICAgICBpZiAoc2luY2UgJiYgbGluZU5vID09PSBzaW5jZS5saW5lKSB7XG4gICAgICAgICAgICBmb3IgKDsgaV90b2tlbiA8IHRva2Vucy5sZW5ndGg7IGlfdG9rZW4rKykge1xuICAgICAgICAgICAgICBpZiAodG9rZW5zW2lfdG9rZW5dLnN0YXJ0ID49IHNpbmNlLmNoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlfdG9rZW4gPj0gdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgaV90b2tlbiA9IHRva2Vucy5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKDsgaV90b2tlbiA+PSAwOyBpX3Rva2VuLS0pIHtcbiAgICAgICAgICAgIHZhciB0b2tlbl90bXAgPSB0b2tlbnNbaV90b2tlbl07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb25kaXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IGNvbmRpdGlvbih0b2tlbl90bXAsIHRva2VucywgaV90b2tlbikgOiBjb25kaXRpb24udGVzdCh0b2tlbl90bXAudHlwZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0b2tlbiA9IHRva2VuX3RtcDtcbiAgICAgICAgICAgICAgYnJlYWs7IC8vIEZPVU5EIHRva2VuICFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbiA/IHsgbGluZU5vOiBsaW5lTm8sIHRva2VuOiB0b2tlbiwgaV90b2tlbjogaV90b2tlbiB9IDogbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHJldHVybiBhIHJhbmdlIGluIHdoaWNoIGV2ZXJ5IHRva2VuIGhhcyB0aGUgc2FtZSBzdHlsZSwgb3IgbWVldCBzYW1lIGNvbmRpdGlvblxuICAgICAqL1xuICAgIFRva2VuU2Vla2VyLnByb3RvdHlwZS5leHBhbmRSYW5nZSA9IGZ1bmN0aW9uIChzdHlsZSwgbWF5U3BhbkxpbmVzKSB7XG4gICAgICB2YXIgY20gPSB0aGlzLmNtO1xuICAgICAgdmFyIGlzU3R5bGVkO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlzU3R5bGVkID0gc3R5bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgc3R5bGUgPSBuZXcgUmVnRXhwKFwiKD86XnxcXFxccylcIiArIHN0eWxlICsgXCIoPzpcXFxcc3wkKVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpc1N0eWxlZCA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgIHJldHVybiB0b2tlbiA/IHN0eWxlLnRlc3QodG9rZW4udHlwZSB8fCBcIlwiKSA6IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIGZyb20gPSB7XG4gICAgICAgIGxpbmVObzogdGhpcy5saW5lTm8sXG4gICAgICAgIGlfdG9rZW46IHRoaXMuaV90b2tlbixcbiAgICAgICAgdG9rZW46IHRoaXMubGluZVRva2Vuc1t0aGlzLmlfdG9rZW5dLFxuICAgICAgfTtcbiAgICAgIHZhciB0byA9IE9iamVjdC5hc3NpZ24oe30sIGZyb20pO1xuICAgICAgLy8gZmluZCBsZWZ0XG4gICAgICB2YXIgZm91bmRVbnN0eWxlZCA9IGZhbHNlLFxuICAgICAgICB0b2tlbnMgPSB0aGlzLmxpbmVUb2tlbnMsXG4gICAgICAgIGkgPSB0aGlzLmlfdG9rZW47XG4gICAgICB3aGlsZSAoIWZvdW5kVW5zdHlsZWQpIHtcbiAgICAgICAgaWYgKGkgPj0gdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgIGkgPSB0b2tlbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgaWYgKCFpc1N0eWxlZCh0b2tlbiwgdG9rZW5zLCBpKSkge1xuICAgICAgICAgICAgZm91bmRVbnN0eWxlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbS5pX3Rva2VuID0gaTtcbiAgICAgICAgICAgIGZyb20udG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvdW5kVW5zdHlsZWQgfHwgIShtYXlTcGFuTGluZXMgJiYgZnJvbS5saW5lTm8gPiBjbS5maXJzdExpbmUoKSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBmb3VuZCwgb3Igbm8gbW9yZSBsaW5lc1xuICAgICAgICB0b2tlbnMgPSBjbS5nZXRMaW5lVG9rZW5zKC0tZnJvbS5saW5lTm8pO1xuICAgICAgICBpID0gdG9rZW5zLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICAvLyBmaW5kIHJpZ2h0XG4gICAgICB2YXIgZm91bmRVbnN0eWxlZCA9IGZhbHNlLFxuICAgICAgICB0b2tlbnMgPSB0aGlzLmxpbmVUb2tlbnMsXG4gICAgICAgIGkgPSB0aGlzLmlfdG9rZW47XG4gICAgICB3aGlsZSAoIWZvdW5kVW5zdHlsZWQpIHtcbiAgICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgICAgaSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgaWYgKCFpc1N0eWxlZCh0b2tlbiwgdG9rZW5zLCBpKSkge1xuICAgICAgICAgICAgZm91bmRVbnN0eWxlZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG8uaV90b2tlbiA9IGk7XG4gICAgICAgICAgICB0by50b2tlbiA9IHRva2VuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZm91bmRVbnN0eWxlZCB8fCAhKG1heVNwYW5MaW5lcyAmJiB0by5saW5lTm8gPCBjbS5sYXN0TGluZSgpKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIGZvdW5kLCBvciBubyBtb3JlIGxpbmVzXG4gICAgICAgIHRva2VucyA9IGNtLmdldExpbmVUb2tlbnMoKyt0by5saW5lTm8pO1xuICAgICAgICBpID0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGZyb206IGZyb20sIHRvOiB0byB9O1xuICAgIH07XG4gICAgVG9rZW5TZWVrZXIucHJvdG90eXBlLnNldFBvcyA9IGZ1bmN0aW9uIChsaW5lLCBjaCwgcHJlY2lzZSkge1xuICAgICAgaWYgKGNoID09PSB2b2lkIDApIHtcbiAgICAgICAgY2ggPSBsaW5lO1xuICAgICAgICBsaW5lID0gdGhpcy5saW5lO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGluZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBsaW5lID0gdGhpcy5jbS5nZXRMaW5lSGFuZGxlKGxpbmUpO1xuICAgICAgfVxuICAgICAgdmFyIHNhbWVMaW5lID0gbGluZSA9PT0gdGhpcy5saW5lO1xuICAgICAgdmFyIGlfdG9rZW4gPSAwO1xuICAgICAgaWYgKHByZWNpc2UgfHwgIXNhbWVMaW5lKSB7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgICAgIGlmICghbGluZSkge1xuICAgICAgICAgIC8vIPCfkYggMHhHRyBUZWFtOiBUaGlzIGlzIHNvbWV0aW1lcyBudWxsP1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmVObyA9IGxpbmUubGluZU5vKCk7XG4gICAgICAgIHRoaXMubGluZVRva2VucyA9IHRoaXMuY20uZ2V0TGluZVRva2Vucyh0aGlzLmxpbmVObyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0cnkgdG8gc3BlZWQtdXAgc2Vla2luZ1xuICAgICAgICBpX3Rva2VuID0gdGhpcy5pX3Rva2VuO1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmxpbmVUb2tlbnNbaV90b2tlbl07XG4gICAgICAgIGlmICh0b2tlbi5zdGFydCA+IGNoKSB7XG4gICAgICAgICAgaV90b2tlbiA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciB0b2tlbnMgPSB0aGlzLmxpbmVUb2tlbnM7XG4gICAgICBmb3IgKDsgaV90b2tlbiA8IHRva2Vucy5sZW5ndGg7IGlfdG9rZW4rKykge1xuICAgICAgICBpZiAodG9rZW5zW2lfdG9rZW5dLmVuZCA+IGNoKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gZm91bmRcbiAgICAgIH1cbiAgICAgIHRoaXMuaV90b2tlbiA9IGlfdG9rZW47XG4gICAgfTtcbiAgICAvKiogZ2V0IChjdXJyZW50IG9yIGlkeC10aCkgdG9rZW4gKi9cbiAgICBUb2tlblNlZWtlci5wcm90b3R5cGUuZ2V0VG9rZW4gPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICBpZiAodHlwZW9mIGlkeCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBpZHggPSB0aGlzLmlfdG9rZW47XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5saW5lVG9rZW5zW2lkeF07XG4gICAgfTtcbiAgICAvKiogZ2V0IChjdXJyZW50IG9yIGlkeC10aCkgdG9rZW4gdHlwZS4gYWx3YXlzIHJldHVybiBhIHN0cmluZyAqL1xuICAgIFRva2VuU2Vla2VyLnByb3RvdHlwZS5nZXRUb2tlblR5cGUgPSBmdW5jdGlvbiAoaWR4KSB7XG4gICAgICBpZiAodHlwZW9mIGlkeCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBpZHggPSB0aGlzLmlfdG9rZW47XG4gICAgICB9XG4gICAgICB2YXIgdCA9IHRoaXMubGluZVRva2Vuc1tpZHhdO1xuICAgICAgcmV0dXJuICh0ICYmIHQudHlwZSkgfHwgXCJcIjtcbiAgICB9O1xuICAgIHJldHVybiBUb2tlblNlZWtlcjtcbiAgfSkoKTtcbiAgLyoqXG4gICAqIENvZGVNaXJyb3IncyBgZ2V0TGluZVRva2Vuc2AgbWlnaHQgbWVyZ2UgYWRqYWNlbnQgY2hhcnMgd2l0aCBzYW1lIHN0eWxlcyxcbiAgICogYnV0IHRoaXMgb25lIHdvbid0LlxuICAgKlxuICAgKiBUaGlzIG9uZSB3aWxsIGNvbnN1bWUgbW9yZSBtZW1vcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7Q29kZU1pcnJvci5MaW5lSGFuZGxlfSBsaW5lXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gZXZlcnkgY2hhcidzIHN0eWxlXG4gICAqL1xuICBmdW5jdGlvbiBnZXRFdmVyeUNoYXJUb2tlbihsaW5lKSB7XG4gICAgdmFyIGFucyA9IG5ldyBBcnJheShsaW5lLnRleHQubGVuZ3RoKTtcbiAgICB2YXIgc3MgPSBsaW5lLnN0eWxlcztcbiAgICB2YXIgaSA9IDA7XG4gICAgaWYgKHNzKSB7XG4gICAgICAvLyBDb2RlTWlycm9yIGFscmVhZHkgcGFyc2VkIHRoaXMgbGluZS4gVXNlIGNhY2hlXG4gICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHNzLmxlbmd0aDsgaiArPSAyKSB7XG4gICAgICAgIHZhciBpX3RvID0gc3Nbal0sXG4gICAgICAgICAgcyA9IHNzW2ogKyAxXTtcbiAgICAgICAgd2hpbGUgKGkgPCBpX3RvKSB7XG4gICAgICAgICAgYW5zW2krK10gPSBzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEVtbW0uLi4gc2xvdyBtZXRob2RcbiAgICAgIHZhciBjbSA9IGxpbmUucGFyZW50LmNtIHx8IGxpbmUucGFyZW50LnBhcmVudC5jbSB8fCBsaW5lLnBhcmVudC5wYXJlbnQucGFyZW50LmNtO1xuICAgICAgdmFyIHNzXzEgPSBjbS5nZXRMaW5lVG9rZW5zKGxpbmUubGluZU5vKCkpO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzc18xLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBpX3RvID0gc3NfMVtqXS5lbmQsXG4gICAgICAgICAgcyA9IHNzXzFbal0udHlwZTtcbiAgICAgICAgd2hpbGUgKGkgPCBpX3RvKSB7XG4gICAgICAgICAgYW5zW2krK10gPSBzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbnM7XG4gIH1cbiAgLyoqXG4gICAqIHJldHVybiBhIHJhbmdlIGluIHdoaWNoIGV2ZXJ5IGNoYXIgaGFzIHRoZSBnaXZlbiBzdHlsZSAoYWthLiB0b2tlbiB0eXBlKS5cbiAgICogYXNzdW1pbmcgY2hhciBhdCBgcG9zYCBhbHJlYWR5IGhhcyB0aGUgc3R5bGUuXG4gICAqXG4gICAqIHRoZSByZXN1bHQgd2lsbCBOT1Qgc3BhbiBsaW5lcy5cbiAgICpcbiAgICogQHBhcmFtIHN0eWxlIGFrYS4gdG9rZW4gdHlwZVxuICAgKiBAc2VlIFRva2VuU2Vla2VyIGlmIHlvdSB3YW50IHRvIHNwYW4gbGluZXNcbiAgICovXG4gIGZ1bmN0aW9uIGV4cGFuZFJhbmdlKGNtLCBwb3MsIHN0eWxlKSB7XG4gICAgdmFyIGxpbmUgPSBwb3MubGluZTtcbiAgICB2YXIgZnJvbSA9IHsgbGluZTogbGluZSwgY2g6IDAgfTtcbiAgICB2YXIgdG8gPSB7IGxpbmU6IGxpbmUsIGNoOiBwb3MuY2ggfTtcbiAgICB2YXIgc3R5bGVGbiA9IHR5cGVvZiBzdHlsZSA9PT0gXCJmdW5jdGlvblwiID8gc3R5bGUgOiBmYWxzZTtcbiAgICB2YXIgc3R5bGVSRSA9ICFzdHlsZUZuICYmIG5ldyBSZWdFeHAoXCIoPzpefFxcXFxzKVwiICsgc3R5bGUgKyBcIig/OlxcXFxzfCQpXCIpO1xuICAgIHZhciB0b2tlbnMgPSBjbS5nZXRMaW5lVG9rZW5zKGxpbmUpO1xuICAgIHZhciBpU2luY2U7XG4gICAgZm9yIChpU2luY2UgPSAwOyBpU2luY2UgPCB0b2tlbnMubGVuZ3RoOyBpU2luY2UrKykge1xuICAgICAgaWYgKHRva2Vuc1tpU2luY2VdLmVuZCA+PSBwb3MuY2gpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpU2luY2UgPT09IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gaVNpbmNlOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBpZiAoc3R5bGVGbiA/IHN0eWxlRm4odG9rZW4pIDogc3R5bGVSRS50ZXN0KHRva2VuLnR5cGUpKSB7XG4gICAgICAgIHRvLmNoID0gdG9rZW4uZW5kO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBpU2luY2U7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBpZiAoIShzdHlsZUZuID8gc3R5bGVGbih0b2tlbikgOiBzdHlsZVJFLnRlc3QodG9rZW4udHlwZSkpKSB7XG4gICAgICAgIGZyb20uY2ggPSB0b2tlbi5lbmQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBmcm9tOiBmcm9tLCB0bzogdG8gfTtcbiAgfVxuICAvKipcbiAgICogR2V0IG9yZGVyZWQgcmFuZ2UgZnJvbSBgQ29kZU1pcnJvci5SYW5nZWAtbGlrZSBvYmplY3Qgb3IgYFtQb3NpdGlvbiwgUG9zaXRpb25dYFxuICAgKlxuICAgKiBJbiBhbiBvcmRlcmVkIHJhbmdlLCBUaGUgZmlyc3QgYFBvc2l0aW9uYCBtdXN0IE5PVCBiZSBhZnRlciB0aGUgc2Vjb25kLlxuICAgKi9cbiAgZnVuY3Rpb24gb3JkZXJlZFJhbmdlKHJhbmdlKSB7XG4gICAgaWYgKFwiYW5jaG9yXCIgaW4gcmFuZ2UpIHtcbiAgICAgIHJhbmdlID0gW3JhbmdlLmhlYWQsIHJhbmdlLmFuY2hvcl07XG4gICAgfVxuICAgIGlmIChDb2RlTWlycm9yLmNtcFBvcyhyYW5nZVswXSwgcmFuZ2VbMV0pID4gMCkge1xuICAgICAgcmV0dXJuIFtyYW5nZVsxXSwgcmFuZ2VbMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW3JhbmdlWzBdLCByYW5nZVsxXV07XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gcmFuZ2UgaGFzIGludGVyc2VjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHJhbmdlMSBvcmRlcmVkIHJhbmdlIDEgIChzdGFydCA8PSBlbmQpXG4gICAqIEBwYXJhbSByYW5nZTIgb3JkZXJlZCByYW5nZSAyICAoc3RhcnQgPD0gZW5kKVxuICAgKi9cbiAgZnVuY3Rpb24gcmFuZ2VzSW50ZXJzZWN0KHJhbmdlMSwgcmFuZ2UyKSB7XG4gICAgdmFyIGZyb20xID0gcmFuZ2UxWzBdLFxuICAgICAgdG8xID0gcmFuZ2UxWzFdO1xuICAgIHZhciBmcm9tMiA9IHJhbmdlMlswXSxcbiAgICAgIHRvMiA9IHJhbmdlMlsxXTtcbiAgICByZXR1cm4gIShDb2RlTWlycm9yLmNtcFBvcyh0bzEsIGZyb20yKSA8IDAgfHwgQ29kZU1pcnJvci5jbXBQb3MoZnJvbTEsIHRvMikgPiAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3N0LXByb2Nlc3MgQ29kZU1pcnJvci1tb2RlLXBhcnNlZCBsaW5lcywgZmluZCB0aGUgcmFuZ2VzXG4gICAqXG4gICAqIGZvciBleGFtcGxlLCBhIHBhcnNlZCBsaW5lIGBbKipIZWxsbyoqIFdvcmxkXSh4eHgudHh0KWAgd2lsbCBnaXZlcyB5b3U6XG4gICAqXG4gICAqIDEuIGxpbmsgZnJvbSBgW2AgdG8gYClgXG4gICAqIDIuIGJvbGQgdGV4dCBmcm9tIGAqKmAgdG8gYW5vdGhlciBgKipgXG4gICAqL1xuICB2YXIgTGluZVNwYW5FeHRyYWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGluZVNwYW5FeHRyYWN0b3IoY20pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMuY20gPSBjbTtcbiAgICAgIHRoaXMuY2FjaGVzID0gW107IC8vIGNhY2hlIGZvciBlYWNoIGxpbmVzXG4gICAgICBjbS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoY20sIGNoYW5nZSkge1xuICAgICAgICB2YXIgbGluZSA9IGNoYW5nZS5mcm9tLmxpbmU7XG4gICAgICAgIGlmIChfdGhpcy5jYWNoZXMubGVuZ3RoID4gbGluZSkge1xuICAgICAgICAgIF90aGlzLmNhY2hlcy5zcGxpY2UobGluZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBMaW5lU3BhbkV4dHJhY3Rvci5wcm90b3R5cGUuZ2V0VG9rZW5UeXBlcyA9IGZ1bmN0aW9uICh0b2tlbiwgcHJldlRva2VuKSB7XG4gICAgICB2YXIgcHJldlN0YXRlID0gcHJldlRva2VuID8gcHJldlRva2VuLnN0YXRlIDoge307XG4gICAgICB2YXIgc3RhdGUgPSB0b2tlbi5zdGF0ZTtcbiAgICAgIHZhciBzdHlsZXMgPSBcIiBcIiArIHRva2VuLnR5cGUgKyBcIiBcIjtcbiAgICAgIHZhciBhbnMgPSB7XG4gICAgICAgIC8vIGVtXG4gICAgICAgIGVtOiBzdGF0ZS5lbSA/IDEgLyogSVNfVEhJU19UWVBFICovIDogcHJldlN0YXRlLmVtID8gMiAvKiBMRUFWSU5HX1RISVNfVFlQRSAqLyA6IDAgLyogTk9USElORyAqLyxcbiAgICAgICAgLy8gc3RyaWtldGhyb3VnaFxuICAgICAgICBzdHJpa2V0aHJvdWdoOiBzdGF0ZS5zdHJpa2V0aHJvdWdoXG4gICAgICAgICAgPyAxIC8qIElTX1RISVNfVFlQRSAqL1xuICAgICAgICAgIDogcHJldlN0YXRlLnN0cmlrZXRocm91Z2hcbiAgICAgICAgICA/IDIgLyogTEVBVklOR19USElTX1RZUEUgKi9cbiAgICAgICAgICA6IDAgLyogTk9USElORyAqLyxcbiAgICAgICAgLy8gc3Ryb25nXG4gICAgICAgIHN0cm9uZzogc3RhdGUuc3Ryb25nID8gMSAvKiBJU19USElTX1RZUEUgKi8gOiBwcmV2U3RhdGUuc3Ryb25nID8gMiAvKiBMRUFWSU5HX1RISVNfVFlQRSAqLyA6IDAgLyogTk9USElORyAqLyxcbiAgICAgICAgLy8gbWFya1xuICAgICAgICBtYXJrOiBzdGF0ZS5tYXJrID8gMSAvKiBJU19USElTX1RZUEUgKi8gOiBwcmV2U3RhdGUubWFyayA/IDIgLyogTEVBVklOR19USElTX1RZUEUgKi8gOiAwIC8qIE5PVEhJTkcgKi8sXG4gICAgICAgIC8vIGluc1xuICAgICAgICBpbnM6IHN0YXRlLmlucyA/IDEgLyogSVNfVEhJU19UWVBFICovIDogcHJldlN0YXRlLmlucyA/IDIgLyogTEVBVklOR19USElTX1RZUEUgKi8gOiAwIC8qIE5PVEhJTkcgKi8sXG4gICAgICAgIC8vIHN1YlxuICAgICAgICBzdWI6IHN0YXRlLnN1YiA/IDEgLyogSVNfVEhJU19UWVBFICovIDogcHJldlN0YXRlLnN1YiA/IDIgLyogTEVBVklOR19USElTX1RZUEUgKi8gOiAwIC8qIE5PVEhJTkcgKi8sXG4gICAgICAgIC8vIHN1cFxuICAgICAgICBzdXA6IHN0YXRlLnN1cCA/IDEgLyogSVNfVEhJU19UWVBFICovIDogcHJldlN0YXRlLnN1cCA/IDIgLyogTEVBVklOR19USElTX1RZUEUgKi8gOiAwIC8qIE5PVEhJTkcgKi8sXG4gICAgICAgIC8vIGNvZGVcbiAgICAgICAgY29kZTogc3RhdGUuY29kZSA/IDEgLyogSVNfVEhJU19UWVBFICovIDogcHJldlN0YXRlLmNvZGUgPyAyIC8qIExFQVZJTkdfVEhJU19UWVBFICovIDogMCAvKiBOT1RISU5HICovLFxuICAgICAgICAvLyBsaW5rVGV4dFxuICAgICAgICBsaW5rVGV4dDogc3RhdGUubGlua1RleHRcbiAgICAgICAgICA/IHN0YXRlLmhtZExpbmtUeXBlID09PSAzIC8qIE5PUk1BTCAqLyB8fFxuICAgICAgICAgICAgc3RhdGUuaG1kTGlua1R5cGUgPT09IDcgLyogQkFSRUxJTksyICovIHx8XG4gICAgICAgICAgICBzdGF0ZS5obWRMaW5rVHlwZSA9PT0gNCAvKiBXSUtJTElOSyAqL1xuICAgICAgICAgICAgPyAxIC8qIElTX1RISVNfVFlQRSAqL1xuICAgICAgICAgICAgOiAwIC8qIE5PVEhJTkcgKi9cbiAgICAgICAgICA6IHByZXZTdGF0ZS5saW5rVGV4dFxuICAgICAgICAgID8gMiAvKiBMRUFWSU5HX1RISVNfVFlQRSAqL1xuICAgICAgICAgIDogMCAvKiBOT1RISU5HICovLFxuICAgICAgICAvLyBsaW5rSHJlZlxuICAgICAgICBsaW5rSHJlZjpcbiAgICAgICAgICBzdGF0ZS5saW5rSHJlZiAmJiAhc3RhdGUubGlua1RleHRcbiAgICAgICAgICAgID8gMSAvKiBJU19USElTX1RZUEUgKi9cbiAgICAgICAgICAgIDogIXN0YXRlLmxpbmtIcmVmICYmICFzdGF0ZS5saW5rVGV4dCAmJiBwcmV2U3RhdGUubGlua0hyZWYgJiYgIXByZXZTdGF0ZS5saW5rVGV4dFxuICAgICAgICAgICAgPyAyIC8qIExFQVZJTkdfVEhJU19UWVBFICovXG4gICAgICAgICAgICA6IDAgLyogTk9USElORyAqLyxcbiAgICAgICAgLy8gdGFzayBjaGVja2JveFxuICAgICAgICB0YXNrOlxuICAgICAgICAgIHN0eWxlcy5pbmRleE9mKFwiIGZvcm1hdHRpbmctdGFzayBcIikgIT09IC0xXG4gICAgICAgICAgICA/IDEgLyogSVNfVEhJU19UWVBFICovIHwgMiAvKiBMRUFWSU5HX1RISVNfVFlQRSAqL1xuICAgICAgICAgICAgOiAwIC8qIE5PVEhJTkcgKi8sXG4gICAgICAgIC8vIGhhc2h0YWdcbiAgICAgICAgaGFzaHRhZzogc3RhdGUuaG1kSGFzaHRhZ1xuICAgICAgICAgID8gMSAvKiBJU19USElTX1RZUEUgKi9cbiAgICAgICAgICA6IHByZXZTdGF0ZS5obWRIYXNodGFnXG4gICAgICAgICAgPyAyIC8qIExFQVZJTkdfVEhJU19UWVBFICovXG4gICAgICAgICAgOiAwIC8qIE5PVEhJTkcgKi8sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGFucztcbiAgICB9O1xuICAgIC8qKiBnZXQgc3BhbnMgZnJvbSBhIGxpbmUgYW5kIHVwZGF0ZSB0aGUgY2FjaGUgKi9cbiAgICBMaW5lU3BhbkV4dHJhY3Rvci5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChsaW5lTm8sIHByZWNpc2UpIHtcbiAgICAgIGlmICghcHJlY2lzZSkge1xuICAgICAgICAvLyBtYXliZSBjYWNoZSBpcyB2YWxpZD9cbiAgICAgICAgdmFyIGNjID0gdGhpcy5jYWNoZXNbbGluZU5vXTtcbiAgICAgICAgaWYgKGNjKSB7XG4gICAgICAgICAgcmV0dXJuIGNjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgdG9rZW5zID0gdGhpcy5jbS5nZXRMaW5lVG9rZW5zKGxpbmVObyk7XG4gICAgICB2YXIgbGluZVRleHQgPSB0aGlzLmNtLmdldExpbmUobGluZU5vKTtcbiAgICAgIHZhciBsaW5lTGVuZ3RoID0gbGluZVRleHQubGVuZ3RoO1xuICAgICAgdmFyIGFucyA9IFtdO1xuICAgICAgdmFyIHVuY2xvc2VkID0ge307XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHZhciB0eXBlcyA9IHRoaXMuZ2V0VG9rZW5UeXBlcyh0b2tlbiwgdG9rZW5zW2kgLSAxXSk7XG4gICAgICAgIGZvciAodmFyIHR5cGUgaW4gdHlwZXMpIHtcbiAgICAgICAgICB2YXIgc3BhbiA9IHVuY2xvc2VkW3R5cGVdO1xuICAgICAgICAgIGlmICh0eXBlc1t0eXBlXSAmIDEgLyogSVNfVEhJU19UWVBFICovKSB7XG4gICAgICAgICAgICAvLyBzdHlsZSBpcyBhY3RpdmVcbiAgICAgICAgICAgIGlmICghc3Bhbikge1xuICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgc3BhbiBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgc3BhbiA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIGJlZ2luOiB0b2tlbi5zdGFydCxcbiAgICAgICAgICAgICAgICBlbmQ6IGxpbmVMZW5ndGgsXG4gICAgICAgICAgICAgICAgaGVhZDogdG9rZW4sXG4gICAgICAgICAgICAgICAgaGVhZF9pOiBpLFxuICAgICAgICAgICAgICAgIHRhaWw6IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICAgICAgdGFpbF9pOiB0b2tlbnMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBsaW5lVGV4dC5zbGljZSh0b2tlbi5zdGFydCksXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGFucy5wdXNoKHNwYW4pO1xuICAgICAgICAgICAgICB1bmNsb3NlZFt0eXBlXSA9IHNwYW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlc1t0eXBlXSAmIDIgLyogTEVBVklOR19USElTX1RZUEUgKi8pIHtcbiAgICAgICAgICAgIC8vIGEgc3R5bGUgaXMgZXhpdGluZ1xuICAgICAgICAgICAgaWYgKHNwYW4pIHtcbiAgICAgICAgICAgICAgLy8gY2xvc2UgYW4gdW5jbG9zZWQgc3BhblxuICAgICAgICAgICAgICBzcGFuLnRhaWwgPSB0b2tlbjtcbiAgICAgICAgICAgICAgc3Bhbi50YWlsX2kgPSBpO1xuICAgICAgICAgICAgICBzcGFuLmVuZCA9IHRva2VuLmVuZDtcbiAgICAgICAgICAgICAgc3Bhbi50ZXh0ID0gc3Bhbi50ZXh0LnNsaWNlKDAsIHNwYW4uZW5kIC0gc3Bhbi5iZWdpbik7XG4gICAgICAgICAgICAgIHVuY2xvc2VkW3R5cGVdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2FjaGVzW2xpbmVOb10gPSBhbnM7XG4gICAgICByZXR1cm4gYW5zO1xuICAgIH07XG4gICAgTGluZVNwYW5FeHRyYWN0b3IucHJvdG90eXBlLmZpbmRTcGFuc0F0ID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgdmFyIHNwYW5zID0gdGhpcy5leHRyYWN0KHBvcy5saW5lKTtcbiAgICAgIHZhciBjaCA9IHBvcy5jaDtcbiAgICAgIHZhciBhbnMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BhbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNwYW4gPSBzcGFuc1tpXTtcbiAgICAgICAgaWYgKHNwYW4uYmVnaW4gPiBjaCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaCA+PSBzcGFuLmJlZ2luICYmIHNwYW4uZW5kID49IGNoKSB7XG4gICAgICAgICAgYW5zLnB1c2goc3Bhbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhbnM7XG4gICAgfTtcbiAgICBMaW5lU3BhbkV4dHJhY3Rvci5wcm90b3R5cGUuZmluZFNwYW5XaXRoVHlwZUF0ID0gZnVuY3Rpb24gKHBvcywgdHlwZSkge1xuICAgICAgdmFyIHNwYW5zID0gdGhpcy5leHRyYWN0KHBvcy5saW5lKTtcbiAgICAgIHZhciBjaCA9IHBvcy5jaDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BhbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNwYW4gPSBzcGFuc1tpXTtcbiAgICAgICAgaWYgKHNwYW4uYmVnaW4gPiBjaCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaCA+PSBzcGFuLmJlZ2luICYmIHNwYW4uZW5kID49IGNoICYmIHNwYW4udHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgIHJldHVybiBzcGFuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBMaW5lU3BhbkV4dHJhY3RvcjtcbiAgfSkoKTtcbiAgdmFyIGV4dHJhY3Rvcl9zeW1ib2wgPSBtYWtlU3ltYm9sKFwiTGluZVNwYW5FeHRyYWN0b3JcIik7XG4gIC8qKlxuICAgKiBHZXQgYSBgTGluZVNwYW5FeHRyYWN0b3JgIHRvIGV4dHJhY3Qgc3BhbnMgZnJvbSBDb2RlTWlycm9yIHBhcnNlZCBsaW5lc1xuICAgKlxuICAgKiBmb3IgZXhhbXBsZSwgYSBwYXJzZWQgbGluZSBgWyoqSGVsbG8qKiBXb3JsZF0oeHh4LnR4dClgIHdpbGwgZ2l2ZXMgeW91OlxuICAgKlxuICAgKiAxLiBsaW5rIGZyb20gYFtgIHRvIGApYFxuICAgKiAyLiBib2xkIHRleHQgZnJvbSBgKipgIHRvIGFub3RoZXIgYCoqYFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0TGluZVNwYW5FeHRyYWN0b3IoY20pIHtcbiAgICBpZiAoZXh0cmFjdG9yX3N5bWJvbCBpbiBjbSkge1xuICAgICAgcmV0dXJuIGNtW2V4dHJhY3Rvcl9zeW1ib2xdO1xuICAgIH1cbiAgICB2YXIgaW5zdCA9IChjbVtleHRyYWN0b3Jfc3ltYm9sXSA9IG5ldyBMaW5lU3BhbkV4dHJhY3RvcihjbSkpO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxzIGZvciBIeXBlck1EIGFkZG9uc1xuICAgKlxuICAgKiBAaW50ZXJuYWwgUGFydCBvZiBIeXBlck1EIGNvcmUuXG4gICAqXG4gICAqIFlvdSBzaGFsbCBOT1QgaW1wb3J0IHRoaXMgZmlsZTsgcGxlYXNlIGltcG9ydCBcImNvcmVcIiBpbnN0ZWFkXG4gICAqL1xuICB2YXIgQWRkb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgIGZ1bmN0aW9uIEFkZG9uKGNtKSB7fVxuICAgIHJldHVybiBBZGRvbjtcbiAgfSkoKTtcbiAgLyoqIG1ha2UgYSBTaW5nbGV0b24gZ2V0dGVyICovXG4gIGZ1bmN0aW9uIEdldHRlcihuYW1lLCBDbGFzc0N0b3IsIGRlZmF1bHRPcHRpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNtKSB7XG4gICAgICBpZiAoIWNtLmhtZCkge1xuICAgICAgICBjbS5obWQgPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmICghY20uaG1kW25hbWVdKSB7XG4gICAgICAgIHZhciBpbnN0ID0gbmV3IENsYXNzQ3RvcihjbSk7XG4gICAgICAgIGNtLmhtZFtuYW1lXSA9IGluc3Q7XG4gICAgICAgIGlmIChkZWZhdWx0T3B0aW9uKSB7XG4gICAgICAgICAgZm9yICh2YXIgayBpbiBkZWZhdWx0T3B0aW9uKSB7XG4gICAgICAgICAgICBpbnN0W2tdID0gZGVmYXVsdE9wdGlvbltrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4gY20uaG1kW25hbWVdO1xuICAgIH07XG4gIH1cblxuICB2YXIgYWRkb24gPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBBZGRvbjogQWRkb24sXG4gICAgR2V0dGVyOiBHZXR0ZXIsXG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNtcFBvc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBDb2RlTWlycm9yLmNtcFBvcztcbiAgICB9LFxuICB9KTtcbiAgZXhwb3J0cy5BZGRvbiA9IGFkZG9uO1xuICBleHBvcnRzLkZsaXBGbG9wID0gRmxpcEZsb3A7XG4gIGV4cG9ydHMuVG9rZW5TZWVrZXIgPSBUb2tlblNlZWtlcjtcbiAgZXhwb3J0cy5hZGRDbGFzcyA9IGFkZENsYXNzO1xuICBleHBvcnRzLmNtX2ludGVybmFsID0gY21faW50ZXJuYWw7XG4gIGV4cG9ydHMuY29udGFpbnMgPSBjb250YWlucztcbiAgZXhwb3J0cy5kZWJvdW5jZSA9IGRlYm91bmNlO1xuICBleHBvcnRzLmV4cGFuZFJhbmdlID0gZXhwYW5kUmFuZ2U7XG4gIGV4cG9ydHMuZnJvbVRleHRBcmVhID0gZnJvbVRleHRBcmVhO1xuICBleHBvcnRzLmdldEV2ZXJ5Q2hhclRva2VuID0gZ2V0RXZlcnlDaGFyVG9rZW47XG4gIGV4cG9ydHMuZ2V0TGluZVNwYW5FeHRyYWN0b3IgPSBnZXRMaW5lU3BhbkV4dHJhY3RvcjtcbiAgZXhwb3J0cy5tYWtlU3ltYm9sID0gbWFrZVN5bWJvbDtcbiAgZXhwb3J0cy5ub3JtYWxWaXN1YWxDb25maWcgPSBub3JtYWxWaXN1YWxDb25maWc7XG4gIGV4cG9ydHMub3JkZXJlZFJhbmdlID0gb3JkZXJlZFJhbmdlO1xuICBleHBvcnRzLnJhbmdlc0ludGVyc2VjdCA9IHJhbmdlc0ludGVyc2VjdDtcbiAgZXhwb3J0cy5yZXBlYXQgPSByZXBlYXQ7XG4gIGV4cG9ydHMucmVwZWF0U3RyID0gcmVwZWF0U3RyO1xuICBleHBvcnRzLnJtQ2xhc3MgPSBybUNsYXNzO1xuICBleHBvcnRzLnN1Z2dlc3RlZEVkaXRvckNvbmZpZyA9IHN1Z2dlc3RlZEVkaXRvckNvbmZpZztcbiAgZXhwb3J0cy5zd2l0Y2hUb0h5cGVyTUQgPSBzd2l0Y2hUb0h5cGVyTUQ7XG4gIGV4cG9ydHMuc3dpdGNoVG9Ob3JtYWwgPSBzd2l0Y2hUb05vcm1hbDtcbiAgZXhwb3J0cy50cnlUb1J1biA9IHRyeVRvUnVuO1xuICBleHBvcnRzLnZpc2l0RWxlbWVudHMgPSB2aXNpdEVsZW1lbnRzO1xuICBleHBvcnRzLndhdGNoU2l6ZSA9IHdhdGNoU2l6ZTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG59KTtcbiIsIi8vIEh5cGVyTUQsIGNvcHlyaWdodCAoYykgYnkgbGFvYnVidVxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHA6Ly9sYW9idWJ1Lm5ldC9IeXBlck1EL0xJQ0VOU0Vcbi8vXG4vLyBERVNDUklQVElPTjogQ2xpY2sgdG8gb3BlbiBsaW5rcyAvIGp1bXAgdG8gZm9vdG5vdGVzIC8gdG9nZ2xlIFRPRE9zLCBhbmQgbW9yZS5cbi8vXG4vLyBXaXRoIGN1c3RvbSBDbGlja0hhbmRsZXIgc3VwcG9ydGVkXG4vL1xudmFyIF9fY3JlYXRlQmluZGluZyA9XG4gICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fFxuICAoT2JqZWN0LmNyZWF0ZVxuICAgID8gZnVuY3Rpb24gKG8sIG0sIGssIGsyKSB7XG4gICAgICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwge1xuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbVtrXTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICA6IGZ1bmN0aW9uIChvLCBtLCBrLCBrMikge1xuICAgICAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgICAgICBvW2syXSA9IG1ba107XG4gICAgICB9KTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPVxuICAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHxcbiAgKE9iamVjdC5jcmVhdGVcbiAgICA/IGZ1bmN0aW9uIChvLCB2KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbiAgICAgIH1cbiAgICA6IGZ1bmN0aW9uIChvLCB2KSB7XG4gICAgICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbiAgICAgIH0pO1xudmFyIF9faW1wb3J0U3RhciA9XG4gICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fFxuICBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKVxuICAgICAgZm9yICh2YXIgayBpbiBtb2QpXG4gICAgICAgIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbihmdW5jdGlvbiAobW9kKSB7XG4gIC8vW0h5cGVyTURdIFVNRCBwYXRjaGVkIVxuICAvKnBsYWluIGVudiovIG1vZChudWxsLCAoSHlwZXJNRC5DbGljayA9IEh5cGVyTUQuQ2xpY2sgfHwge30pLCBDb2RlTWlycm9yLCBIeXBlck1ELCBIeXBlck1ELlJlYWRMaW5rKTtcbn0pKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBDb2RlTWlycm9yLCBjb3JlXzEsIHJlYWRfbGlua18xKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gIGV4cG9ydHMuZ2V0QWRkb24gPVxuICAgIGV4cG9ydHMuQ2xpY2sgPVxuICAgIGV4cG9ydHMuc3VnZ2VzdGVkT3B0aW9uID1cbiAgICBleHBvcnRzLmRlZmF1bHRPcHRpb24gPVxuICAgIGV4cG9ydHMuZGVmYXVsdENsaWNrSGFuZGxlciA9XG4gICAgICB2b2lkIDA7XG4gIENvZGVNaXJyb3IgPSBfX2ltcG9ydFN0YXIoQ29kZU1pcnJvcik7XG4gIC8vI2VuZHJlZ2lvblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICAvLyNyZWdpb24gZGVmYXVsdENsaWNrSGFuZGxlclxuICB2YXIgZGVmYXVsdENsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChpbmZvLCBjbSkge1xuICAgIHZhciB0ZXh0ID0gaW5mby50ZXh0LFxuICAgICAgdHlwZSA9IGluZm8udHlwZSxcbiAgICAgIHVybCA9IGluZm8udXJsLFxuICAgICAgcG9zID0gaW5mby5wb3M7XG4gICAgaWYgKHR5cGUgPT09IFwidG9kb1wiKSB7XG4gICAgICB2YXIgX2EgPSBjb3JlXzEuZXhwYW5kUmFuZ2UoY20sIHBvcywgXCJmb3JtYXR0aW5nLXRhc2tcIiksXG4gICAgICAgIGZyb20gPSBfYS5mcm9tLFxuICAgICAgICB0byA9IF9hLnRvO1xuICAgICAgdmFyIHRleHRfMSA9IGNtLmdldFJhbmdlKGZyb20sIHRvKTtcbiAgICAgIHRleHRfMSA9IHRleHRfMSA9PT0gXCJbIF1cIiA/IFwiW3hdXCIgOiBcIlsgXVwiO1xuICAgICAgY20ucmVwbGFjZVJhbmdlKHRleHRfMSwgZnJvbSwgdG8pO1xuICAgIH1cbiAgfTtcbiAgZXhwb3J0cy5kZWZhdWx0Q2xpY2tIYW5kbGVyID0gZGVmYXVsdENsaWNrSGFuZGxlcjtcblxuICBleHBvcnRzLmRlZmF1bHRPcHRpb24gPSB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgaGFuZGxlcjogbnVsbCxcbiAgfTtcbiAgZXhwb3J0cy5zdWdnZXN0ZWRPcHRpb24gPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfTtcbiAgY29yZV8xLnN1Z2dlc3RlZEVkaXRvckNvbmZpZy5obWRDbGljayA9IGV4cG9ydHMuc3VnZ2VzdGVkT3B0aW9uO1xuICBDb2RlTWlycm9yLmRlZmluZU9wdGlvbihcImhtZENsaWNrXCIsIGV4cG9ydHMuZGVmYXVsdE9wdGlvbiwgZnVuY3Rpb24gKGNtLCBuZXdWYWwpIHtcbiAgICAvLy8vLyBjb252ZXJ0IG5ld1ZhbCdzIHR5cGUgdG8gYFBhcnRpYWw8T3B0aW9ucz5gLCBpZiBpdCBpcyBub3QuXG4gICAgaWYgKCFuZXdWYWwgfHwgdHlwZW9mIG5ld1ZhbCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIG5ld1ZhbCA9IHsgZW5hYmxlZDogISFuZXdWYWwgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBuZXdWYWwgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbmV3VmFsID0geyBlbmFibGVkOiB0cnVlLCBoYW5kbGVyOiBuZXdWYWwgfTtcbiAgICB9XG4gICAgLy8vLy8gYXBwbHkgY29uZmlnIGFuZCB3cml0ZSBuZXcgdmFsdWVzIGludG8gY21cbiAgICB2YXIgaW5zdCA9IGV4cG9ydHMuZ2V0QWRkb24oY20pO1xuICAgIGZvciAodmFyIGsgaW4gZXhwb3J0cy5kZWZhdWx0T3B0aW9uKSB7XG4gICAgICBpbnN0W2tdID0gayBpbiBuZXdWYWwgPyBuZXdWYWxba10gOiBleHBvcnRzLmRlZmF1bHRPcHRpb25ba107XG4gICAgfVxuICB9KTtcbiAgLy8jZW5kcmVnaW9uXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gIC8vI3JlZ2lvbiBBZGRvbiBDbGFzc1xuICB2YXIgQ2xpY2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2xpY2soY20pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMuY20gPSBjbTtcbiAgICAgIC8qKiByZW1vdmUgbW9kaWZpZXIgY2xhc3NOYW1lIHRvIGVkaXRvciBET00gKi9cbiAgICAgIHRoaXMuX21vdXNlTW92ZV9rZXlEZXRlY3QgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdmFyIGVsID0gX3RoaXMuZWw7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBlbC5jbGFzc05hbWUsXG4gICAgICAgICAgbmV3Q2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICB2YXIgYWx0Q2xhc3MgPSBcIkh5cGVyTUQtd2l0aC1hbHRcIjtcbiAgICAgICAgdmFyIGN0cmxDbGFzcyA9IFwiSHlwZXJNRC13aXRoLWN0cmxcIjtcbiAgICAgICAgaWYgKCFldi5hbHRLZXkgJiYgY2xhc3NOYW1lLmluZGV4T2YoYWx0Q2xhc3MpID49IDApIHtcbiAgICAgICAgICBuZXdDbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShhbHRDbGFzcywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFldi5jdHJsS2V5ICYmIGNsYXNzTmFtZS5pbmRleE9mKGN0cmxDbGFzcykgPj0gMCkge1xuICAgICAgICAgIG5ld0NsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKGN0cmxDbGFzcywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFldi5hbHRLZXkgJiYgIWV2LmN0cmxLZXkpIHtcbiAgICAgICAgICBfdGhpcy5fS2V5RGV0ZWN0b3JBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIF90aGlzLl9tb3VzZU1vdmVfa2V5RGV0ZWN0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzTmFtZSAhPSBuZXdDbGFzc05hbWUpIGVsLmNsYXNzTmFtZSA9IG5ld0NsYXNzTmFtZS50cmltKCk7XG4gICAgICB9O1xuICAgICAgLyoqIGFkZCBtb2RpZmllciBjbGFzc05hbWUgdG8gZWRpdG9yIERPTSAqL1xuICAgICAgdGhpcy5fa2V5RG93biA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB2YXIga2MgPSBldi5rZXlDb2RlIHx8IGV2LndoaWNoO1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgaWYgKGtjID09IDE3KSBjbGFzc05hbWUgPSBcIkh5cGVyTUQtd2l0aC1jdHJsXCI7XG4gICAgICAgIGlmIChrYyA9PSAxOCkgY2xhc3NOYW1lID0gXCJIeXBlck1ELXdpdGgtYWx0XCI7XG4gICAgICAgIHZhciBlbCA9IF90aGlzLmVsO1xuICAgICAgICBpZiAoY2xhc3NOYW1lICYmIGVsLmNsYXNzTmFtZS5pbmRleE9mKGNsYXNzTmFtZSkgPT0gLTEpIHtcbiAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfdGhpcy5fS2V5RGV0ZWN0b3JBY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy5fS2V5RGV0ZWN0b3JBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIF90aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgX3RoaXMuX21vdXNlTW92ZV9rZXlEZXRlY3QsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogVW5iaW5kIF9tb3VzZVVwLCB0aGVuIGNhbGwgQ2xpY2tIYW5kbGVyIGlmIG1vdXNlIG5vdCBib3VuY2VcbiAgICAgICAqL1xuICAgICAgdGhpcy5fbW91c2VVcCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB2YXIgY2luZm8gPSBfdGhpcy5fY2luZm87XG4gICAgICAgIF90aGlzLmxpbmVEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgX3RoaXMuX21vdXNlVXAsIGZhbHNlKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGV2LmNsaWVudFggLSBjaW5mby5jbGllbnRYKSA+IDUgfHwgTWF0aC5hYnMoZXYuY2xpZW50WSAtIGNpbmZvLmNsaWVudFkpID4gNSkgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIF90aGlzLmhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIiAmJiBfdGhpcy5oYW5kbGVyKGNpbmZvLCBfdGhpcy5jbSkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIGV4cG9ydHMuZGVmYXVsdENsaWNrSGFuZGxlcihjaW5mbywgX3RoaXMuY20pO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogVHJ5IHRvIGNvbnN0cnVjdCBDbGlja0luZm8gYW5kIGJpbmQgX21vdXNlVXBcbiAgICAgICAqL1xuICAgICAgdGhpcy5fbW91c2VEb3duID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBidXR0b24gPSBldi5idXR0b24sXG4gICAgICAgICAgY2xpZW50WCA9IGV2LmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IGV2LmNsaWVudFksXG4gICAgICAgICAgY3RybEtleSA9IGV2LmN0cmxLZXksXG4gICAgICAgICAgYWx0S2V5ID0gZXYuYWx0S2V5LFxuICAgICAgICAgIHNoaWZ0S2V5ID0gZXYuc2hpZnRLZXk7XG4gICAgICAgIHZhciBjbSA9IF90aGlzLmNtO1xuICAgICAgICBpZiAoZXYudGFyZ2V0LnRhZ05hbWUgPT09IFwiUFJFXCIpIHJldHVybjtcbiAgICAgICAgdmFyIHBvcyA9IGNtLmNvb3Jkc0NoYXIoeyBsZWZ0OiBjbGllbnRYLCB0b3A6IGNsaWVudFkgfSwgXCJ3aW5kb3dcIik7XG4gICAgICAgIHZhciByYW5nZTtcbiAgICAgICAgdmFyIHRva2VuID0gY20uZ2V0VG9rZW5BdChwb3MpO1xuICAgICAgICB2YXIgc3RhdGUgPSB0b2tlbi5zdGF0ZTtcbiAgICAgICAgdmFyIHN0eWxlcyA9IFwiIFwiICsgdG9rZW4udHlwZSArIFwiIFwiO1xuICAgICAgICB2YXIgbWF0O1xuICAgICAgICB2YXIgdHlwZSA9IG51bGw7XG4gICAgICAgIHZhciB0ZXh0LCB1cmw7XG4gICAgICAgIGlmIChzdHlsZXMubWF0Y2goL1xcc2Zvcm1hdHRpbmctdGFza1xccy8pKSB7XG4gICAgICAgICAgLy8gVE8tRE8gY2hlY2tib3hcbiAgICAgICAgICB0eXBlID0gXCJ0b2RvXCI7XG4gICAgICAgICAgcmFuZ2UgPSBjb3JlXzEuZXhwYW5kUmFuZ2UoY20sIHBvcywgXCJmb3JtYXR0aW5nLXRhc2tcIik7XG4gICAgICAgICAgcmFuZ2UudG8uY2ggPSBjbS5nZXRMaW5lKHBvcy5saW5lKS5sZW5ndGg7XG4gICAgICAgICAgdGV4dCA9IGNtLmdldFJhbmdlKHJhbmdlLmZyb20sIHJhbmdlLnRvKTtcbiAgICAgICAgICB1cmwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMuX2NpbmZvID0ge1xuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgICAgYnV0dG9uOiBidXR0b24sXG4gICAgICAgICAgICBjbGllbnRYOiBjbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WTogY2xpZW50WSxcbiAgICAgICAgICAgIGN0cmxLZXk6IGN0cmxLZXksXG4gICAgICAgICAgICBhbHRLZXk6IGFsdEtleSxcbiAgICAgICAgICAgIHNoaWZ0S2V5OiBzaGlmdEtleSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIF90aGlzLmxpbmVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgX3RoaXMuX21vdXNlVXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMubGluZURpdiA9IGNtLmRpc3BsYXkubGluZURpdjtcbiAgICAgIHZhciBlbCA9ICh0aGlzLmVsID0gY20uZ2V0V3JhcHBlckVsZW1lbnQoKSk7XG4gICAgICBuZXcgY29yZV8xLkZsaXBGbG9wKFxuICAgICAgICAvKiBPTiAgKi8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmxpbmVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBfdGhpcy5fbW91c2VEb3duLCBmYWxzZSk7XG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgX3RoaXMuX2tleURvd24sIGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyogT0ZGICovIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5saW5lRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgX3RoaXMuX21vdXNlRG93biwgZmFsc2UpO1xuICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIF90aGlzLl9rZXlEb3duLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICkuYmluZCh0aGlzLCBcImVuYWJsZWRcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBDbGljaztcbiAgfSkoKTtcbiAgZXhwb3J0cy5DbGljayA9IENsaWNrO1xuICAvLyNlbmRyZWdpb25cbiAgLyoqIEFERE9OIEdFVFRFUiAoU2luZ2xldG9uIFBhdHRlcm4pOiBhIGVkaXRvciBjYW4gaGF2ZSBvbmx5IG9uZSBDbGljayBpbnN0YW5jZSAqL1xuICBleHBvcnRzLmdldEFkZG9uID0gY29yZV8xLkFkZG9uLkdldHRlcihcIkNsaWNrXCIsIENsaWNrLCBleHBvcnRzLmRlZmF1bHRPcHRpb24gLyoqIGlmIGhhcyBvcHRpb25zICovKTtcbn0pO1xuIiwiLy8gSHlwZXJNRCwgY29weXJpZ2h0IChjKSBieSBsYW9idWJ1XG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cDovL2xhb2J1YnUubmV0L0h5cGVyTUQvTElDRU5TRVxuLy9cbi8vIERFU0NSSVBUSU9OOiBBdXRvIHNob3cvaGlkZSBtYXJrZG93biB0b2tlbnMgbGlrZSBgIyNgIG9yIGAqYFxuLy9cbi8vIE9ubHkgd29ya3Mgd2l0aCBgaHlwZXJtZGAgbW9kZSwgcmVxdWlyZSBzcGVjaWFsIENTUyBydWxlc1xuLy9cbnZhciBfX2NyZWF0ZUJpbmRpbmcgPVxuICAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHxcbiAgKE9iamVjdC5jcmVhdGVcbiAgICA/IGZ1bmN0aW9uIChvLCBtLCBrLCBrMikge1xuICAgICAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1ba107XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgOiBmdW5jdGlvbiAobywgbSwgaywgazIpIHtcbiAgICAgICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICAgICAgb1trMl0gPSBtW2tdO1xuICAgICAgfSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID1cbiAgKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8XG4gIChPYmplY3QuY3JlYXRlXG4gICAgPyBmdW5jdGlvbiAobywgdikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG4gICAgICB9XG4gICAgOiBmdW5jdGlvbiAobywgdikge1xuICAgICAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG4gICAgICB9KTtcbnZhciBfX2ltcG9ydFN0YXIgPVxuICAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHxcbiAgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbClcbiAgICAgIGZvciAodmFyIGsgaW4gbW9kKVxuICAgICAgICBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4oZnVuY3Rpb24gKG1vZCkge1xuICAvL1tIeXBlck1EXSBVTUQgcGF0Y2hlZCFcbiAgLypwbGFpbiBlbnYqLyBtb2QobnVsbCwge30sIENvZGVNaXJyb3IsIEh5cGVyTUQsIG51bGwpO1xufSkoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIENvZGVNaXJyb3IsIGNvcmVfMSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBleHBvcnRzLmdldEFkZG9uID0gZXhwb3J0cy5IaWRlVG9rZW4gPSBleHBvcnRzLnN1Z2dlc3RlZE9wdGlvbiA9IGV4cG9ydHMuZGVmYXVsdE9wdGlvbiA9IHZvaWQgMDtcbiAgQ29kZU1pcnJvciA9IF9faW1wb3J0U3RhcihDb2RlTWlycm9yKTtcbiAgdmFyIERFQlVHID0gZmFsc2U7XG4gIC8vI3JlZ2lvbiBJbnRlcm5hbCBGdW5jdGlvbi4uLlxuICAvKiogY2hlY2sgaWYgaGFzIHRoZSBjbGFzcyBhbmQgcmVtb3ZlIGl0ICovXG4gIGZ1bmN0aW9uIHJtQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIHZhciBjID0gXCIgXCIgKyBlbC5jbGFzc05hbWUgKyBcIiBcIixcbiAgICAgIGNucCA9IFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCI7XG4gICAgaWYgKGMuaW5kZXhPZihjbnApID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIGVsLmNsYXNzTmFtZSA9IGMucmVwbGFjZShjbnAsIFwiXCIpLnRyaW0oKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKiogY2hlY2sgaWYgTk9UIGhhcyB0aGUgY2xhc3MgYW5kIGFkZCBpdCAqL1xuICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGMgPSBcIiBcIiArIGVsLmNsYXNzTmFtZSArIFwiIFwiLFxuICAgICAgY25wID0gXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICBpZiAoYy5pbmRleE9mKGNucCkgIT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZXhwb3J0cy5kZWZhdWx0T3B0aW9uID0ge1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIGxpbmU6IHRydWUsXG4gICAgdG9rZW5UeXBlczogXCJlbXxzdHJvbmd8bWFya3xpbnN8c3VifHN1cHxzdHJpa2V0aHJvdWdofGNvZGV8bGlua1RleHR8dGFza1wiLnNwbGl0KFwifFwiKSxcbiAgfTtcbiAgZXhwb3J0cy5zdWdnZXN0ZWRPcHRpb24gPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfTtcbiAgY29yZV8xLnN1Z2dlc3RlZEVkaXRvckNvbmZpZy5obWRIaWRlVG9rZW4gPSBleHBvcnRzLnN1Z2dlc3RlZE9wdGlvbjtcbiAgY29yZV8xLm5vcm1hbFZpc3VhbENvbmZpZy5obWRIaWRlVG9rZW4gPSBmYWxzZTtcbiAgQ29kZU1pcnJvci5kZWZpbmVPcHRpb24oXCJobWRIaWRlVG9rZW5cIiwgZXhwb3J0cy5kZWZhdWx0T3B0aW9uLCBmdW5jdGlvbiAoY20sIG5ld1ZhbCkge1xuICAgIC8vLy8vIGNvbnZlcnQgbmV3VmFsJ3MgdHlwZSB0byBgUGFydGlhbDxPcHRpb25zPmAsIGlmIGl0IGlzIG5vdC5cbiAgICBpZiAoIW5ld1ZhbCB8fCB0eXBlb2YgbmV3VmFsID09PSBcImJvb2xlYW5cIikge1xuICAgICAgbmV3VmFsID0geyBlbmFibGVkOiAhIW5ld1ZhbCB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5ld1ZhbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbmV3VmFsID0geyBlbmFibGVkOiB0cnVlLCB0b2tlblR5cGVzOiBuZXdWYWwuc3BsaXQoXCJ8XCIpIH07XG4gICAgfSBlbHNlIGlmIChuZXdWYWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbmV3VmFsID0geyBlbmFibGVkOiB0cnVlLCB0b2tlblR5cGVzOiBuZXdWYWwgfTtcbiAgICB9XG4gICAgLy8vLy8gYXBwbHkgY29uZmlnIGFuZCB3cml0ZSBuZXcgdmFsdWVzIGludG8gY21cbiAgICB2YXIgaW5zdCA9IGV4cG9ydHMuZ2V0QWRkb24oY20pO1xuICAgIGZvciAodmFyIGsgaW4gZXhwb3J0cy5kZWZhdWx0T3B0aW9uKSB7XG4gICAgICBpbnN0W2tdID0gayBpbiBuZXdWYWwgPyBuZXdWYWxba10gOiBleHBvcnRzLmRlZmF1bHRPcHRpb25ba107XG4gICAgfVxuICB9KTtcbiAgLy8jZW5kcmVnaW9uXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gIC8vI3JlZ2lvbiBBZGRvbiBDbGFzc1xuICB2YXIgaGlkZUNsYXNzTmFtZSA9IFwiaG1kLWhpZGRlbi10b2tlblwiO1xuICB2YXIgbGluZUluYWN0aXZlQ2xhc3NOYW1lID0gXCJobWQtaW5hY3RpdmUtbGluZVwiO1xuICB2YXIgSGlkZVRva2VuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhpZGVUb2tlbihjbSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5jbSA9IGNtO1xuICAgICAgdGhpcy5yZW5kZXJMaW5lSGFuZGxlciA9IGZ1bmN0aW9uIChjbSwgbGluZSwgZWwpIHtcbiAgICAgICAgLy8gVE9ETzogaWYgd2UgcHJvY0xpbmUgbm93LCB3ZSBjYW4gb25seSBnZXQgdGhlIG91dGRhdGVkIGxpbmVWaWV3LCBsaW5lVmlld01lYXN1cmUgYW5kIGxpbmVWaWV3TWFwLiBDYWxsaW5nIHByb2NMaW5lIHdpbGwgYmUgd2FzdGVmdWwhXG4gICAgICAgIHZhciBjaGFuZ2VkID0gX3RoaXMucHJvY0xpbmUobGluZSwgZWwpO1xuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwicmVuZGVyTGluZSByZXR1cm4gXCIgKyBjaGFuZ2VkKTtcbiAgICAgIH07XG4gICAgICB0aGlzLmN1cnNvckFjdGl2aXR5SGFuZGxlciA9IGZ1bmN0aW9uICgvKmRvYzogQ29kZU1pcnJvci5Eb2MqLykge1xuICAgICAgICAvLyBfdGhpcy51cGRhdGUoKTtcbiAgICAgICAgX3RoaXMudXBkYXRlSW1tZWRpYXRlbHkoKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnVwZGF0ZSA9IGNvcmVfMS5kZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51cGRhdGVJbW1lZGlhdGVseSgpO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIC8qKiBDdXJyZW50IHVzZXIncyBzZWxlY3Rpb25zLCBpbiBlYWNoIGxpbmUgKi9cbiAgICAgIHRoaXMuX3Jhbmdlc0luTGluZSA9IHt9O1xuICAgICAgbmV3IGNvcmVfMS5GbGlwRmxvcChcbiAgICAgICAgLyogT04gICovIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbS5vbihcImN1cnNvckFjdGl2aXR5XCIsIF90aGlzLmN1cnNvckFjdGl2aXR5SGFuZGxlcik7XG4gICAgICAgICAgY20ub24oXCJyZW5kZXJMaW5lXCIsIF90aGlzLnJlbmRlckxpbmVIYW5kbGVyKTtcbiAgICAgICAgICBjbS5vbihcInVwZGF0ZVwiLCBfdGhpcy51cGRhdGUpO1xuICAgICAgICAgIF90aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgIGNtLnJlZnJlc2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyogT0ZGICovIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbS5vZmYoXCJjdXJzb3JBY3Rpdml0eVwiLCBfdGhpcy5jdXJzb3JBY3Rpdml0eUhhbmRsZXIpO1xuICAgICAgICAgIGNtLm9mZihcInJlbmRlckxpbmVcIiwgX3RoaXMucmVuZGVyTGluZUhhbmRsZXIpO1xuICAgICAgICAgIGNtLm9mZihcInVwZGF0ZVwiLCBfdGhpcy51cGRhdGUpO1xuICAgICAgICAgIF90aGlzLnVwZGF0ZS5zdG9wKCk7XG4gICAgICAgICAgY20ucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICApLmJpbmQodGhpcywgXCJlbmFibGVkXCIsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBoaWRlL3Nob3cgPHNwYW4+cyBpbiBvbmUgbGluZSwgYmFzZWQgb24gYHRoaXMuX3Jhbmdlc0luTGluZWBcbiAgICAgKiBAcmV0dXJucyBsaW5lIGNoYW5nZWQgb3Igbm90XG4gICAgICovXG4gICAgSGlkZVRva2VuLnByb3RvdHlwZS5wcm9jTGluZSA9IGZ1bmN0aW9uIChsaW5lLCBwcmUpIHtcbiAgICAgIHZhciBjbSA9IHRoaXMuY207XG4gICAgICB2YXIgbGluZU5vID0gdHlwZW9mIGxpbmUgPT09IFwibnVtYmVyXCIgPyBsaW5lIDogbGluZS5saW5lTm8oKTtcbiAgICAgIGlmICh0eXBlb2YgbGluZSA9PT0gXCJudW1iZXJcIikgbGluZSA9IGNtLmdldExpbmVIYW5kbGUobGluZSk7XG4gICAgICB2YXIgcmFuZ2VzSW5MaW5lID0gdGhpcy5fcmFuZ2VzSW5MaW5lW2xpbmVOb10gfHwgW107XG4gICAgICB2YXIgbHYgPSBjb3JlXzEuY21faW50ZXJuYWwuZmluZFZpZXdGb3JMaW5lKGNtLCBsaW5lTm8pO1xuICAgICAgaWYgKCFsdiB8fCBsdi5oaWRkZW4gfHwgIWx2Lm1lYXN1cmUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghcHJlKSBwcmUgPSBsdi50ZXh0O1xuICAgICAgaWYgKCFwcmUpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChERUJVRykgaWYgKCFwcmUuaXNTYW1lTm9kZShsdi50ZXh0KSkgY29uc29sZS53YXJuKFwicHJvY0xpbmUgZ290IGRpZmZlcmVudCBub2RlLi4uIFwiICsgbGluZU5vKTtcbiAgICAgIHZhciBtYXBJbmZvID0gY29yZV8xLmNtX2ludGVybmFsLm1hcEZyb21MaW5lVmlldyhsdiwgbGluZSwgbGluZU5vKTtcbiAgICAgIHZhciBtYXAgPSBtYXBJbmZvLm1hcDtcbiAgICAgIHZhciBub2RlQ291bnQgPSBtYXAubGVuZ3RoIC8gMztcbiAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAvLyBjaGFuZ2UgbGluZSBzdGF0dXNcbiAgICAgIGlmIChyYW5nZXNJbkxpbmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIGluYWN0aXZlTGluZVxuICAgICAgICBpZiAoYWRkQ2xhc3MocHJlLCBsaW5lSW5hY3RpdmVDbGFzc05hbWUpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFjdGl2ZUxpbmVcbiAgICAgICAgaWYgKHJtQ2xhc3MocHJlLCBsaW5lSW5hY3RpdmVDbGFzc05hbWUpKSBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIHNob3cgb3IgaGlkZSB0b2tlbnNcbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybnMgaWYgdGhlcmUgYXJlIFNwYW4gTm9kZXMgY2hhbmdlZFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBjaGFuZ2VWaXNpYmlsaXR5Rm9yU3BhbihzcGFuLCBzaGFsbEhpZGVUb2tlbnMsIGlOb2RlSGludCkge1xuICAgICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBpTm9kZUhpbnQgPSBpTm9kZUhpbnQgfHwgMDtcbiAgICAgICAgLy8gaXRlcmF0ZSB0aGUgbWFwXG4gICAgICAgIGZvciAodmFyIGkgPSBpTm9kZUhpbnQ7IGkgPCBub2RlQ291bnQ7IGkrKykge1xuICAgICAgICAgIHZhciBiZWdpbiA9IG1hcFtpICogM10sXG4gICAgICAgICAgICBlbmQgPSBtYXBbaSAqIDMgKyAxXTtcbiAgICAgICAgICB2YXIgZG9tTm9kZSA9IG1hcFtpICogMyArIDJdO1xuICAgICAgICAgIGlmIChiZWdpbiA9PT0gc3Bhbi5oZWFkLnN0YXJ0KSB7XG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBsZWFkaW5nIHRva2VuIVxuICAgICAgICAgICAgaWYgKC9mb3JtYXR0aW5nLS8udGVzdChzcGFuLmhlYWQudHlwZSkgJiYgZG9tTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAgICAgLy8gaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcIkRPTU5PREVcIiwgc2hhbGxIaWRlVG9rZW5zLCBkb21Ob2RlLCBiZWdpbiwgc3BhbilcbiAgICAgICAgICAgICAgLy8gZ29vZC4gdGhpcyB0b2tlbiBjYW4gYmUgY2hhbmdlZFxuICAgICAgICAgICAgICB2YXIgZG9tUGFyZW50ID0gZG9tTm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICBpZiAoc2hhbGxIaWRlVG9rZW5zID8gYWRkQ2xhc3MoZG9tUGFyZW50LCBoaWRlQ2xhc3NOYW1lKSA6IHJtQ2xhc3MoZG9tUGFyZW50LCBoaWRlQ2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIChERUJVRykgY29uc29sZS5sb2coXCJIRUFEIERPTSBDSEFOR0VEXCIpXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gWWl5aTogV2lraWxpbmtcbiAgICAgICAgICAgICAgaWYgKGRvbVBhcmVudC5uZXh0RWxlbWVudFNpYmxpbmcgJiYgZG9tUGFyZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJjbS13aWtpbGluay11cmxcIikpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBzaGFsbEhpZGVUb2tlbnNcbiAgICAgICAgICAgICAgICAgICAgPyBhZGRDbGFzcyhkb21QYXJlbnQubmV4dEVsZW1lbnRTaWJsaW5nLCBoaWRlQ2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICAgICA6IHJtQ2xhc3MoZG9tUGFyZW50Lm5leHRFbGVtZW50U2libGluZywgaGlkZUNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlmIChERUJVRykgY29uc29sZS5sb2coXCJIRUFEIERPTSBDSEFOR0VEXCIpXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRklYTUU6IGlmIGxlYWRpbmcgZm9ybWF0dGluZyB0b2tlbiBpcyBzZXBhcmF0ZWQgaW50byB0d28sIHRoZSBsYXR0ZXIgd2lsbCBub3QgYmUgaGlkZGVuL3Nob3duIVxuICAgICAgICAgICAgLy8gc2VhcmNoIGZvciB0aGUgdGFpbGluZyB0b2tlblxuICAgICAgICAgICAgaWYgKHNwYW4udGFpbCAmJiAvZm9ybWF0dGluZy0vLnRlc3Qoc3Bhbi50YWlsLnR5cGUpKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IG5vZGVDb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJlZ2luXzEgPSBtYXBbaiAqIDNdLFxuICAgICAgICAgICAgICAgICAgZW5kXzEgPSBtYXBbaiAqIDMgKyAxXTtcbiAgICAgICAgICAgICAgICB2YXIgZG9tTm9kZV8xID0gbWFwW2ogKiAzICsgMl07XG4gICAgICAgICAgICAgICAgaWYgKGJlZ2luXzEgPT0gc3Bhbi50YWlsLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiVEFJTCBET00gQ0hBTkdFRFwiLCBkb21Ob2RlKVxuICAgICAgICAgICAgICAgICAgaWYgKGRvbU5vZGVfMS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ29vZC4gdGhpcyB0b2tlbiBjYW4gYmUgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgZG9tUGFyZW50ID0gZG9tTm9kZV8xLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFsbEhpZGVUb2tlbnMgPyBhZGRDbGFzcyhkb21QYXJlbnQsIGhpZGVDbGFzc05hbWUpIDogcm1DbGFzcyhkb21QYXJlbnQsIGhpZGVDbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJlZ2luXzEgPj0gc3Bhbi50YWlsLmVuZCkgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gd2hvb3BzLCBuZXh0IHRpbWUgd2UgY2FuIHN0YXJ0IHNlYXJjaGluZyBzaW5jZSBoZXJlXG4gICAgICAgICAgLy8gcmV0dXJuIHRoZSBoaW50IHZhbHVlXG4gICAgICAgICAgaWYgKGJlZ2luID49IHNwYW4uYmVnaW4pIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgICAgfVxuICAgICAgdmFyIHNwYW5zID0gY29yZV8xLmdldExpbmVTcGFuRXh0cmFjdG9yKGNtKS5leHRyYWN0KGxpbmVObyk7XG4gICAgICB2YXIgaU5vZGVIaW50ID0gMDtcbiAgICAgIGZvciAodmFyIGlTcGFuID0gMDsgaVNwYW4gPCBzcGFucy5sZW5ndGg7IGlTcGFuKyspIHtcbiAgICAgICAgdmFyIHNwYW4gPSBzcGFuc1tpU3Bhbl07XG4gICAgICAgIGlmICh0aGlzLnRva2VuVHlwZXMuaW5kZXhPZihzcGFuLnR5cGUpID09PSAtMSkgY29udGludWU7IC8vIG5vdC1pbnRlcmVzdGVkIHNwYW4gdHlwZVxuICAgICAgICAvKiBUT0RPOiBVc2UgQVNULCBpbnN0ZWFkIG9mIGNyYWZ0ZWQgUG9zaXRpb24gKi9cbiAgICAgICAgdmFyIHNwYW5SYW5nZSA9IFtcbiAgICAgICAgICB7IGxpbmU6IGxpbmVObywgY2g6IHNwYW4uYmVnaW4gfSxcbiAgICAgICAgICB7IGxpbmU6IGxpbmVObywgY2g6IHNwYW4uZW5kIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qIFRPRE86IElmIHVzZSBBU1QsIGNvbXB1dGUgYHNwYW5CZWdpbkNoYXJJbkN1cnJlbnRMaW5lYCBpbiBhbm90aGVyIHdheSAqL1xuICAgICAgICB2YXIgc3BhbkJlZ2luQ2hhckluQ3VycmVudExpbmUgPSBzcGFuLmJlZ2luO1xuICAgICAgICB3aGlsZSAoaU5vZGVIaW50IDwgbm9kZUNvdW50ICYmIG1hcFtpTm9kZUhpbnQgKiAzICsgMV0gPCBzcGFuQmVnaW5DaGFySW5DdXJyZW50TGluZSkgaU5vZGVIaW50Kys7XG4gICAgICAgIHZhciBzaGFsbEhpZGVUb2tlbnMgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBpTGluZVJhbmdlID0gMDsgaUxpbmVSYW5nZSA8IHJhbmdlc0luTGluZS5sZW5ndGg7IGlMaW5lUmFuZ2UrKykge1xuICAgICAgICAgIHZhciB1c2VyUmFuZ2UgPSByYW5nZXNJbkxpbmVbaUxpbmVSYW5nZV07XG4gICAgICAgICAgaWYgKGNvcmVfMS5yYW5nZXNJbnRlcnNlY3Qoc3BhblJhbmdlLCB1c2VyUmFuZ2UpKSB7XG4gICAgICAgICAgICBzaGFsbEhpZGVUb2tlbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlVmlzaWJpbGl0eUZvclNwYW4oc3Bhbiwgc2hhbGxIaWRlVG9rZW5zLCBpTm9kZUhpbnQpKSB7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGZpbmFsbHkgY2xlYW4gdGhlIGNhY2hlIChpZiBuZWVkZWQpIGFuZCByZXBvcnQgdGhlIHJlc3VsdFxuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgLy8gY2xlYW4gQ29kZU1pcnJvciBtZWFzdXJlIGNhY2hlXG4gICAgICAgIGRlbGV0ZSBsdi5tZWFzdXJlLmhlaWdodHM7XG4gICAgICAgIGx2Lm1lYXN1cmUuY2FjaGUgPSB7fTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH07XG4gICAgSGlkZVRva2VuLnByb3RvdHlwZS51cGRhdGVJbW1lZGlhdGVseSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMudXBkYXRlLnN0b3AoKTtcbiAgICAgIHZhciBjbSA9IHRoaXMuY207XG4gICAgICB2YXIgc2VsZWN0aW9ucyA9IGNtLmxpc3RTZWxlY3Rpb25zKCk7XG4gICAgICB2YXIgY2FyZXRBdExpbmVzID0ge307XG4gICAgICB2YXIgYWN0aXZlZExpbmVzID0ge307XG4gICAgICBjbS5zdGF0ZS5yZWZyZXNoQ2FyZXRMaW5lID0gbnVsbDtcbiAgICAgIHZhciBsYXN0QWN0aXZlZExpbmVzID0gdGhpcy5fcmFuZ2VzSW5MaW5lO1xuICAgICAgZm9yICh2YXIgX2kgPSAwLCBzZWxlY3Rpb25zXzEgPSBzZWxlY3Rpb25zOyBfaSA8IHNlbGVjdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHNlbGVjdGlvbnNfMVtfaV07XG4gICAgICAgIHZhciBvUmFuZ2UgPSBjb3JlXzEub3JkZXJlZFJhbmdlKHNlbGVjdGlvbik7XG4gICAgICAgIHZhciBsaW5lMCA9IG9SYW5nZVswXS5saW5lLFxuICAgICAgICAgIGxpbmUxID0gb1JhbmdlWzFdLmxpbmU7XG4gICAgICAgIGNhcmV0QXRMaW5lc1tsaW5lMF0gPSBjYXJldEF0TGluZXNbbGluZTFdID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgbGluZSA9IGxpbmUwOyBsaW5lIDw9IGxpbmUxOyBsaW5lKyspIHtcbiAgICAgICAgICBpZiAoIWFjdGl2ZWRMaW5lc1tsaW5lXSkgYWN0aXZlZExpbmVzW2xpbmVdID0gW29SYW5nZV07XG4gICAgICAgICAgZWxzZSBhY3RpdmVkTGluZXNbbGluZV0ucHVzaChvUmFuZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9yYW5nZXNJbkxpbmUgPSBhY3RpdmVkTGluZXM7XG4gICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiPT09PT09PSBPUCBTVEFSVCBcIiArIE9iamVjdC5rZXlzKGFjdGl2ZWRMaW5lcykpO1xuICAgICAgbGV0IHByb2NSZXN1bHQgPSBmYWxzZVxuICAgICAgY20ub3BlcmF0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYWRkaW5nIFwiaW5hY3RpdmVcIiBjbGFzc1xuICAgICAgICBmb3IgKHZhciBsaW5lIGluIGxhc3RBY3RpdmVkTGluZXMpIHtcbiAgICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwibGluZSBpbiBsYXN0QWN0aXZlZExpbmVzXCIpXG4gICAgICAgICAgaWYgKGFjdGl2ZWRMaW5lc1tsaW5lXSkgeyBcbiAgICAgICAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcImxpbmUgaW4gbGFzdEFjdGl2ZWRMaW5lczogY29udGludWVcIilcbiAgICAgICAgICAgICAgY29udGludWU7IC8vIGxpbmUgaXMgc3RpbGwgYWN0aXZlLiBkbyBub3RoaW5nXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coJ3Byb2NMaW5lJywgfn5saW5lKVxuICAgICAgICAgIF90aGlzLnByb2NMaW5lKH5+bGluZSk7IC8vIG9yLCB0cnkgYWRkaW5nIFwiaW5hY3RpdmVcIiBjbGFzcyB0byB0aGUgPHByZT5zXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhcmV0TGluZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNhcmV0TGluZU5vO1xuICAgICAgICAvLyBwcm9jZXNzIGFjdGl2ZSBsaW5lc1xuICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKCdhY3RpdmUgbGluZXMnLCBhY3RpdmVkTGluZXMpXG4gICAgICAgIGZvciAodmFyIGxpbmUgaW4gYWN0aXZlZExpbmVzKSB7XG4gICAgICAgICAgdmFyIGxpbmVDaGFuZ2VkID0gcHJvY1Jlc3VsdCA/IHByb2NSZXN1bHQgOiBfdGhpcy5wcm9jTGluZSh+fmxpbmUpO1xuICAgICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coJ2xpbmVDaGFuZ2VkICYmIGNhcmV0QXRMaW5lc1tsaW5lXScsIGxpbmVDaGFuZ2VkLCBjYXJldEF0TGluZXNbbGluZV0pXG4gICAgICAgICAgaWYgKGxpbmVDaGFuZ2VkICYmIGNhcmV0QXRMaW5lc1tsaW5lXSkgY2FyZXRMaW5lQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgY2FyZXRMaW5lTm8gPSBjYXJldEF0TGluZXNbbGluZV07XG4gICAgICAgICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcImNhcmV0IGxpbmVcIiwgbGluZSwgY2FyZXRMaW5lQ2hhbmdlZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVmcmVzaCBjdXJzb3IgcG9zaXRpb24gaWYgbmVlZGVkXG4gICAgICAgIGlmIChjYXJldExpbmVDaGFuZ2VkKSB7XG4gICAgICAgICAgLy8gaWYgKERFQlVHKVxuICAgICAgICAgIHZhciBsaW5lSGFuZGxlID0gY20uZ2V0TGluZUhhbmRsZShsaW5lKTtcbiAgICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiY2FyZXRMaW5lQ2hhbmdlZFwiLCBjYXJldExpbmVDaGFuZ2VkLCBjYXJldExpbmVObywgbGluZUhhbmRsZSk7XG4gICAgICAgICAgaWYgKGxpbmVIYW5kbGUuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICAvLyBlZGl0ZWQgYnkgbm90aGluZ2lzbG9zdCBhcyB0aGlzIHdhcyBjYXVzaW5nIGFuIGluZmluaXRlIHJlZnJlc2ggbG9vcCBvbiBmb2xkZWQgc2VjdGlvbnNcbiAgICAgICAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJub3QgcmVmcmVzaGluZyBkdWUgdG8gMCBoZWlnaHRcIik7IFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwicmVmcmVzaGVkXCIpXG4gICAgICAgICAgICAvLyBjbS5kb2MuY2hpbGRyZW5bMF0uaGVpZ2h0IC09IDEwO1xuICAgICAgICAgICAgY20uaGVpZ2h0IC09IDEwO1xuICAgICAgICAgICAgY20ucmVmcmVzaCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRoaXMgcmVmcmVzaCBmaXhlcyB0aGUgY3Vyc29yIHBsYWNlbWVudCBpc3N1ZXMgYnV0IGlzIGV4cGVuc2l2ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCI9PT09PT09IE9QIEVORCBcIik7XG4gICAgfTtcbiAgICByZXR1cm4gSGlkZVRva2VuO1xuICB9KSgpO1xuICBleHBvcnRzLkhpZGVUb2tlbiA9IEhpZGVUb2tlbjtcbiAgLy8jZW5kcmVnaW9uXG4gIC8qKiBBRERPTiBHRVRURVIgKFNpbmdsZXRvbiBQYXR0ZXJuKTogYSBlZGl0b3IgY2FuIGhhdmUgb25seSBvbmUgSGlkZVRva2VuIGluc3RhbmNlICovXG4gIGV4cG9ydHMuZ2V0QWRkb24gPSBjb3JlXzEuQWRkb24uR2V0dGVyKFwiSGlkZVRva2VuXCIsIEhpZGVUb2tlbiwgZXhwb3J0cy5kZWZhdWx0T3B0aW9uIC8qKiBpZiBoYXMgb3B0aW9ucyAqLyk7XG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xyXG5pbXBvcnQgeyBPYnNpZGlhbkNvZGVNaXJyb3JPcHRpb25zU2V0dGluZ3MsIE9ic2lkaWFuQ29kZU1pcnJvck9wdGlvbnNTZXR0aW5nc1RhYiB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCBcIi4vcnVubW9kZVwiO1xyXG5pbXBvcnQgXCIuL2NvbG9yaXplXCI7XHJcbmltcG9ydCBcIi4vbWFyay1zZWxlY3Rpb25cIjtcclxuaW1wb3J0IFwiLi9hY3RpdmUtbGluZVwiO1xyXG5cclxuaW1wb3J0IFwiLi9obWQtY29yZVwiO1xyXG5pbXBvcnQgXCIuL2htZC1jbGlja1wiO1xyXG5pbXBvcnQgXCIuL2htZC1oaWRlLXRva2VuXCI7XHJcblxyXG5pbXBvcnQgeyBNYXJrZG93blZpZXcsIE1hcmtkb3duUHJldmlld1JlbmRlcmVyLCBQbHVnaW4gfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHR5cGUgY29kZW1pcnJvciBmcm9tIFwiY29kZW1pcnJvclwiO1xyXG5pbXBvcnQgeyBFZGl0b3JDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvZGVtaXJyb3JcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiY29kZW1pcnJvclwiIHtcclxuICAvLyBUaGVzZSB0eXBlc2NyaXB0IGRlZmluaXRpb25zIHdlcmUgcHVsbGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0RlZmluaXRlbHlUeXBlZC9EZWZpbml0ZWx5VHlwZWQvdHJlZS9tYXN0ZXIvdHlwZXMvY29kZW1pcnJvclxyXG4gIC8vIEkgY291bGRuJ3QgZ2V0IHRoZSBkaXJlY3QgVFMgaW1wb3J0cyBvZiB0aGVzZSB3b3JraW5nIHdpdGhvdXQgaGF2aW5nIHRoZSBlbnRpcmUgQ29kZU1pcnJvciBsaWJyYXJ5IGVuZGluZyB1cCBpbiBtYWluLmpzXHJcblxyXG4gIGludGVyZmFjZSBTdHlsZUFjdGl2ZUxpbmUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb250cm9scyB3aGV0aGVyIHNpbmdsZS1saW5lIHNlbGVjdGlvbnMsIG9yIGp1c3QgY3Vyc29yIHNlbGVjdGlvbnMsIGFyZSBzdHlsZWQuIERlZmF1bHRzIHRvIGZhbHNlIChvbmx5IGN1cnNvciBzZWxlY3Rpb25zKS5cclxuICAgICAqL1xyXG4gICAgbm9uRW1wdHk6IGJvb2xlYW47XHJcbiAgfVxyXG4gIGludGVyZmFjZSBFZGl0b3JDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogSWYgc2V0IHRvIHRydWUgKHRoZSBkZWZhdWx0KSwgd2lsbCBrZWVwIHRoZSBjdXJzb3IgaGVpZ2h0IGNvbnN0YW50IGZvciBhbiBlbnRpcmUgbGluZSAob3Igd3JhcHBlZCBwYXJ0IG9mIGEgbGluZSkuXHJcbiAgICAgKiBXaGVuIGZhbHNlLCB0aGUgY3Vyc29yJ3MgaGVpZ2h0IGlzIGJhc2VkIG9uIHRoZSBoZWlnaHQgb2YgdGhlIGFkamFjZW50IHJlZmVyZW5jZSBjaGFyYWN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHNpbmdsZUN1cnNvckhlaWdodFBlckxpbmU/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYXVzZXMgdGhlIHNlbGVjdGVkIHRleHQgdG8gYmUgbWFya2VkIHdpdGggdGhlIENTUyBjbGFzcyBDb2RlTWlycm9yLXNlbGVjdGVkdGV4dCBvciBhIGN1c3RvbSBjbGFzcyB3aGVuIHRoZSBzdHlsZVNlbGVjdGVkVGV4dCBvcHRpb24gaXMgZW5hYmxlZC5cclxuICAgICAqIFVzZWZ1bCB0byBjaGFuZ2UgdGhlIGNvbG91ciBvZiB0aGUgc2VsZWN0aW9uIChpbiBhZGRpdGlvbiB0byB0aGUgYmFja2dyb3VuZCkuXHJcbiAgICAgKi9cclxuICAgIHN0eWxlU2VsZWN0ZWRUZXh0PzogYm9vbGVhbiB8IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGhtZENsaWNrPzogYm9vbGVhbiB8IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIGhtZEhpZGVUb2tlbj86IGJvb2xlYW4gfCBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gZW5hYmxlZCBnaXZlcyB0aGUgd3JhcHBlciBvZiB0aGUgbGluZSB0aGF0IGNvbnRhaW5zIHRoZSBjdXJzb3IgdGhlIGNsYXNzIENvZGVNaXJyb3ItYWN0aXZlbGluZSxcclxuICAgICAqIGFkZHMgYSBiYWNrZ3JvdW5kIHdpdGggdGhlIGNsYXNzIENvZGVNaXJyb3ItYWN0aXZlbGluZS1iYWNrZ3JvdW5kLCBhbmQgYWRkcyB0aGUgY2xhc3MgQ29kZU1pcnJvci1hY3RpdmVsaW5lLWd1dHRlciB0byB0aGUgbGluZSdzIGd1dHRlciBzcGFjZSBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBzdHlsZUFjdGl2ZUxpbmU/OiBTdHlsZUFjdGl2ZUxpbmUgfCBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjb2xvcml6ZShjb2xsZWN0aW9uPzogQXJyYXlMaWtlPEVsZW1lbnQ+LCBkZWZhdWx0TW9kZT86IHN0cmluZywgc2hvd0xpbmVOdW1zPzogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2lkaWFuQ29kZU1pcnJvck9wdGlvbnNQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xyXG4gIHNldHRpbmdzOiBPYnNpZGlhbkNvZGVNaXJyb3JPcHRpb25zU2V0dGluZ3M7XHJcblxyXG4gIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgIC8vIGxvYWQgc2V0dGluZ3NcclxuICAgIHRoaXMuc2V0dGluZ3MgPSAoYXdhaXQgdGhpcy5sb2FkRGF0YSgpKSB8fCBuZXcgT2JzaWRpYW5Db2RlTWlycm9yT3B0aW9uc1NldHRpbmdzKCk7XHJcblxyXG4gICAgLy8gYWRkIHRoZSBzZXR0aW5ncyB0YWJcclxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgT2JzaWRpYW5Db2RlTWlycm9yT3B0aW9uc1NldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5hcHAud29ya3NwYWNlLm9uTGF5b3V0UmVhZHkoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwcGx5Q29kZU1pcnJvck9wdGlvbnMoKTtcclxuICAgICAgdGhpcy50b2dnbGVIaWdobGlnaHRpbmcoKTtcclxuICAgICAgdGhpcy50b2dnbGVDb2RlQmxvY2tTZXR0aW5ncygpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlQ01pblByZXZpZXcpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIC8vIHdlIHdhaXQgMSBzZWNvbmQgaGVyZSBzaW5jZSB0aGUgcHJpc20uanMgcmVuZGVyaW5nIG9mIGNvZGUgYmxvY2tzIGlzIGRlbGF5ZWQgb24gbG9hZFxyXG4gICAgICAgICAgLy8gdGhpcyB3aWxsIGZvcmNlIHRoZSBDTSBpbmplY3Rpb24gYWZ0ZXIgMSBzZWNvbmQsIG9ubHkgb24gc3RhcnR1cFxyXG4gICAgICAgICAgdGhpcy5yZWZyZXNoUGFuZXMoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxyXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJsYXlvdXQtY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLmFwcGx5Q29kZU1pcnJvck9wdGlvbnMoKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfSAvLyBjbG9zZSBvbmxvYWRcclxuXHJcbiAgbWRQcm9jZXNzb3IgPSBhc3luYyAoZWw6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5pbmplY3RDTShlbCk7XHJcbiAgICB9LCAwKTtcclxuICB9O1xyXG5cclxuICBpbmplY3RDTShlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIC8vIG9ubHkgZ2V0IGNvZGUgYmxvY2sgZWxlbWVudHMgd2l0aCBhIGxhbmd1YWdlIGJ1dCBub3QgYW55IHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gY29sb3JpemVkXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWwuZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSAhPT0gXCJQUkVcIikgcmV0dXJuO1xyXG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcyhcImxhbmd1YWdlLVwiKSkge1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5jb3B5QnV0dG9uT25QUkUpIHRoaXMuYWRkQ29weUJ1dHRvbihlbGVtZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKFwiY20tcy1vYnNpZGlhblwiKSkgcmV0dXJuO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKGNsYXNzTmFtZS5zdGFydHNXaXRoKFwibGFuZ3VhZ2UtXCIpKSB7XHJcbiAgICAgICAgLy8gc2V0IGRhdGEtbGFuZyB0byB0aGUgY29kZSBibG9jayBsYW5ndWFnZSBmb3IgZWFzaWVyIGNvbG9yaXplIHVzYWdlXHJcbiAgICAgICAgbGV0IGxhbmd1YWdlID0gY2xhc3NOYW1lLnJlcGxhY2UoXCJsYW5ndWFnZS1cIiwgXCJcIik7XHJcbiAgICAgICAgc3dpdGNoIChsYW5ndWFnZSkge1xyXG4gICAgICAgICAgY2FzZSBcImh0bWxcIjpcclxuICAgICAgICAgICAgbGFuZ3VhZ2UgPSBcImh0bWxtaXhlZFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJqc1wiOlxyXG4gICAgICAgICAgICBsYW5ndWFnZSA9IFwiamF2YXNjcmlwdFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJqc29uXCI6XHJcbiAgICAgICAgICAgIGxhbmd1YWdlID0gXCJqYXZhc2NyaXB0XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtbGFuZ1wiLCBsYW5ndWFnZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBDb2RlTWlycm9yLmNvbG9yaXplKFtlbGVtZW50XSwgbnVsbCwgdGhpcy5zZXR0aW5ncy5zaG93TGluZU51bXMpO1xyXG4gICAgdGhpcy5hZGRDb3B5QnV0dG9uKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29weUJ1dHRvbihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY29weUJ1dHRvbikge1xyXG4gICAgICBjb25zdCBjb2RlQmxvY2sgPSBlbGVtZW50O1xyXG4gICAgICBjb25zdCBjb3B5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgY29weUJ1dHRvbi5jbGFzc05hbWUgPSBcImNvcHlcIjtcclxuICAgICAgY29weUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgLy8gY29weUJ1dHRvbi5hcmlhTGFiZWwgPSAnQ29weSBjb2RlIHRvIGNsaXBib2FyZCc7XHJcbiAgICAgIGNvcHlCdXR0b24uaW5uZXJUZXh0ID0gXCJDb3B5XCI7XHJcbiAgICAgIGNvZGVCbG9jay5hcHBlbmQoY29weUJ1dHRvbik7XHJcbiAgICAgIGNvcHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBleGNsdWRlIGxpbmUgbnVtYmVycyB3aGVuIGNvcHlpbmcgY29kZSB0byBjbGlwYm9hcmRcclxuICAgICAgICBjb25zdCBjb2RlID0gY29kZUJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCJjb2RlXCIpO1xyXG4gICAgICAgIGNvbnN0IGNsb25lID0gY29kZS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY2xvbmUuZmluZEFsbChcInNwYW4uY20tbGluZW51bWJlclwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XHJcbiAgICAgICAgY29uc3QgY29kZVRleHQgPSBjbG9uZS50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGVUZXh0KTtcclxuICAgICAgICBjb3B5QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29waWVkXCI7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBjb3B5QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29weVwiO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUNvZGVCbG9ja1NldHRpbmdzKCkge1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd0xpbmVOdW1zKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkQ2xhc3MoXCJjbS1zaG93LWxpbmUtbnVtc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2xhc3MoXCJjbS1zaG93LWxpbmUtbnVtc1wiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNvcHlCdXR0b25PblBSRSkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZENsYXNzKFwiY20tc2hvdy1jb3B5LWJ1dHRvbi1vbi1wcmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNsYXNzKFwiY20tc2hvdy1jb3B5LWJ1dHRvbi1vbi1wcmVcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZnJlc2hQYW5lcygpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSGlnaGxpZ2h0aW5nKCkge1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlQ01pblByZXZpZXcpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hZGRDbGFzcyhcInVuaWZpZWQtY20taGlnaGxpZ2h0aW5nXCIpO1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyTWFya2Rvd25Qb3N0UHJvY2Vzc29yKHRoaXMubWRQcm9jZXNzb3IpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hQYW5lcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDbGFzcyhcInVuaWZpZWQtY20taGlnaGxpZ2h0aW5nXCIpO1xyXG4gICAgICBNYXJrZG93blByZXZpZXdSZW5kZXJlci51bnJlZ2lzdGVyUG9zdFByb2Nlc3Nvcih0aGlzLm1kUHJvY2Vzc29yKTtcclxuICAgICAgdGhpcy5yZWZyZXNoUGFuZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5Q29kZU1pcnJvck9wdGlvbnMoKSB7XHJcbiAgICB0aGlzLnNldENvZGVNaXJyb3JPcHRpb24oXCJzdHlsZVNlbGVjdGVkVGV4dFwiLCB0aGlzLnNldHRpbmdzLm1hcmtTZWxlY3Rpb24pO1xyXG4gICAgdGhpcy5zZXRDb2RlTWlycm9yT3B0aW9uKFwic2luZ2xlQ3Vyc29ySGVpZ2h0UGVyTGluZVwiLCB0aGlzLnNldHRpbmdzLmR5bmFtaWNDdXJzb3IpO1xyXG4gICAgdGhpcy5zZXRDb2RlTWlycm9yT3B0aW9uKFwic3R5bGVBY3RpdmVMaW5lXCIsIHRoaXMuc2V0dGluZ3MuYWN0aXZlTGluZU9uU2VsZWN0KTtcclxuICAgIHRoaXMuc2V0Q29kZU1pcnJvck9wdGlvbihcImhtZEhpZGVUb2tlblwiLCB0aGlzLnNldHRpbmdzLmVkaXRNb2RlSGlkZVRva2Vucyk7XHJcbiAgICB0aGlzLnNldENvZGVNaXJyb3JPcHRpb24oXCJobWRDbGlja1wiLCB0aGlzLnNldHRpbmdzLmVkaXRNb2RlQ2xpY2tIYW5kbGVyKTtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmVkaXRNb2RlSGlkZVRva2Vucykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZENsYXNzKFwiaGlkZS10b2tlbnNcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNsYXNzKFwiaGlkZS10b2tlbnNcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5tYXJrU2VsZWN0aW9uKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkQ2xhc3MoXCJzdHlsZS1hY3RpdmUtc2VsZWN0aW9uXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDbGFzcyhcInN0eWxlLWFjdGl2ZS1zZWxlY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVQcmlzbUpTU3R5bGluZykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZENsYXNzKFwiZmFsbGJhY2staGlnaGxpZ2h0aW5nXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDbGFzcyhcImZhbGxiYWNrLWhpZ2hsaWdodGluZ1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVuc2V0Q29kZU1pcnJvck9wdGlvbnMoKSB7XHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UuaXRlcmF0ZUNvZGVNaXJyb3JzKGNtID0+IHtcclxuICAgICAgLy8gcmV2ZXJ0IENvZGVNaXJyb3Igb3B0aW9ucyBiYWNrIHRvIHRoZSBDTS9PYnNpZGlhbiBkZWZhdWx0c1xyXG4gICAgICBjbS5zZXRPcHRpb24oXCJzdHlsZVNlbGVjdGVkVGV4dFwiLCBmYWxzZSk7XHJcbiAgICAgIGNtLnNldE9wdGlvbihcInNpbmdsZUN1cnNvckhlaWdodFBlckxpbmVcIiwgdHJ1ZSk7XHJcbiAgICAgIGNtLnNldE9wdGlvbihcInN0eWxlQWN0aXZlTGluZVwiLCB0cnVlKTtcclxuICAgICAgY20uc2V0T3B0aW9uKFwiaG1kSGlkZVRva2VuXCIsIGZhbHNlKTtcclxuICAgICAgY20uc2V0T3B0aW9uKFwiaG1kQ2xpY2tcIiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoUGFuZXMoKSB7XHJcbiAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFwibWFya2Rvd25cIikuZm9yRWFjaChsZWFmID0+IHtcclxuICAgICAgaWYgKGxlYWYudmlldyBpbnN0YW5jZW9mIE1hcmtkb3duVmlldykge1xyXG4gICAgICAgIGxlYWYudmlldy5wcmV2aWV3TW9kZS5yZXJlbmRlcih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRDbUVkaXRvcigpOiBjb2RlbWlycm9yLkVkaXRvciB7XHJcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuICAgIGlmICh2aWV3KSByZXR1cm4gdmlldy5zb3VyY2VNb2RlPy5jbUVkaXRvcjtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29kZU1pcnJvck9wdGlvbihvcHRpb25LZXk6IGtleW9mIEVkaXRvckNvbmZpZ3VyYXRpb24sIG9wdGlvblZhbHVlOiBib29sZWFuIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHtcclxuICAgIGNvbnN0IGNtRWRpdG9yID0gdGhpcy5nZXRDbUVkaXRvcigpO1xyXG4gICAgLy8gc3R5bGVBY3RpdmVMaW5lIHJlcXVpcmVzIGFuIG9iamVjdCB0byBzZXQgdGhlIGJlaGF2aW9yIHdlIHdhbnRcclxuICAgIGlmIChvcHRpb25LZXkgPT09IFwic3R5bGVBY3RpdmVMaW5lXCIpIG9wdGlvblZhbHVlID0gb3B0aW9uVmFsdWUgPT09IHRydWUgPyB7IG5vbkVtcHR5OiB0cnVlIH0gOiB0cnVlO1xyXG4gICAgLy8gd2Ugd2FudCB0byBwYXNzIHRoZSBvcHBvc2l0ZSBib29sZWFuIHRvIHdoYXQgaXMgY2hvc2VuIGluIHNldHRpbmdzXHJcbiAgICBpZiAob3B0aW9uS2V5ID09PSBcInNpbmdsZUN1cnNvckhlaWdodFBlckxpbmVcIikgb3B0aW9uVmFsdWUgPSAhb3B0aW9uVmFsdWU7XHJcbiAgICBpZiAoY21FZGl0b3IgJiYgY21FZGl0b3IuZ2V0T3B0aW9uKG9wdGlvbktleSkgIT0gb3B0aW9uVmFsdWUpIHtcclxuICAgICAgY21FZGl0b3Iuc2V0T3B0aW9uKG9wdGlvbktleSwgb3B0aW9uVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb251bmxvYWQoKSB7XHJcbiAgICB0aGlzLnVuc2V0Q29kZU1pcnJvck9wdGlvbnMoKTtcclxuICAgIE1hcmtkb3duUHJldmlld1JlbmRlcmVyLnVucmVnaXN0ZXJQb3N0UHJvY2Vzc29yKHRoaXMubWRQcm9jZXNzb3IpO1xyXG4gICAgdGhpcy5yZWZyZXNoUGFuZXMoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIiwidGhpcyIsIk1hcmtkb3duUHJldmlld1JlbmRlcmVyIiwiTWFya2Rvd25WaWV3IiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FB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QyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM1QixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkMsS0FBSztBQUNMLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDeEMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFO0FBQ3ZELFFBQVEsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzlCLFFBQVEsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQyxPQUFPLE1BQU07QUFDYixRQUFRLFVBQVUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakQsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDckMsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDMUIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEQsS0FBSztBQUNMLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDbEMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFO0FBQ3JELFFBQVEsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxD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
