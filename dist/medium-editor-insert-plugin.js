(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MediumEditorInsertPlugin"] = factory();
	else
		root["MediumEditorInsertPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************************!*\
  !*** ./src/js/medium-editor-insert-plugin.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = init;
	exports.registerCore = registerCore;
	exports.registerImages = registerImages;
	exports.registerEmbeds = registerEmbeds;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _core = __webpack_require__(/*! core */ 1);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _images = __webpack_require__(/*! images */ 32);
	
	var _images2 = _interopRequireDefault(_images);
	
	var _embeds = __webpack_require__(/*! embeds */ 33);
	
	var _embeds2 = _interopRequireDefault(_embeds);
	
	var _constants = __webpack_require__(/*! constants */ 31);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	__webpack_require__(/*! sass/medium-editor-insert-plugin.scss */ 34);
	
	function init(jQuery) {
	    registerImages(jQuery);
	    registerEmbeds(jQuery);
	    registerCore(jQuery);
	}
	
	function registerCore($) {
	    /**
	     * Core
	     */
	
	    /** Plugin initialization */
	    $.fn[_constants2['default'].PLUGIN_NAME] = function (options) {
	        return this.each(function () {
	            var that = this,
	                textareaId;
	
	            if ($(that).is('textarea')) {
	                textareaId = $(that).attr('medium-editor-textarea-id');
	                that = $(that).siblings('[medium-editor-textarea-id="' + textareaId + '"]').get(0);
	            }
	
	            if (!$.data(that, 'plugin_' + _constants2['default'].PLUGIN_NAME)) {
	                // Plugin initialization
	                $.data(that, 'plugin_' + _constants2['default'].PLUGIN_NAME, new _core2['default'](that, options));
	                $.data(that, 'plugin_' + _constants2['default'].PLUGIN_NAME).init();
	            } else if (typeof options === 'string' && $.data(that, 'plugin_' + _constants2['default'].PLUGIN_NAME)[options]) {
	                // Method call
	                $.data(that, 'plugin_' + _constants2['default'].PLUGIN_NAME)[options]();
	            }
	        });
	    };
	}
	
	function registerImages($) {
	    /**
	     * Images
	     */
	    var addonName = 'Images'; // first char is uppercase
	
	    /** Plugin initialization */
	    $.fn[_constants2['default'].PLUGIN_NAME + addonName] = function (options) {
	        return this.each(function () {
	            if (!$.data(this, 'plugin_' + _constants2['default'].PLUGIN_NAME + addonName)) {
	                $.data(this, 'plugin_' + _constants2['default'].PLUGIN_NAME + addonName, new _images2['default'](this, options));
	            }
	        });
	    };
	}
	
	function registerEmbeds($) {
	    /**
	     * Embeds
	     */
	    var addonName = 'Embeds'; // first char is uppercase
	
	    /** Plugin initialization */
	    $.fn[_constants2['default'].PLUGIN_NAME + addonName] = function (options) {
	        return this.each(function () {
	            if (!$.data(this, 'plugin_' + _constants2['default'].PLUGIN_NAME + addonName)) {
	                $.data(this, 'plugin_' + _constants2['default'].PLUGIN_NAME + addonName, new _embeds2['default'](this, options));
	            }
	        });
	    };
	}

/***/ },
/* 1 */
/*!************************!*\
  !*** ./src/js/core.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _templates = __webpack_require__(/*! templates */ 2);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	var _constants = __webpack_require__(/*! constants */ 31);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	/**
	 * Capitalize first character
	 *
	 * @param {string} str
	 * @return {string}
	 */
	function ucfirst(str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	}
	
	/**
	 * Core plugin's object
	 *
	 * Sets options, variables and calls init() function
	 *
	 * @constructor
	 * @param {DOM} el - DOM element to init the plugin on
	 * @param {object} options - Options to override defaults
	 * @return {void}
	 */
	
	var Core = (function () {
	    function Core(el, options) {
	        _classCallCheck(this, Core);
	
	        var editor;
	
	        this.el = el;
	        this.$el = $(el);
	
	        if (options) {
	            // Fix #142
	            // Avoid deep copying editor object, because since v2.3.0 it contains circular references which causes jQuery.extend to break
	            // Instead copy editor object to this.options manually
	            editor = options.editor;
	            options.editor = null;
	        }
	        this.options = $.extend(true, {}, defaults, options);
	        this.options.editor = editor;
	
	        this._defaults = defaults;
	        this._name = _constants2['default'].PLUGIN_NAME;
	
	        // Extend editor's functions
	        if (this.options && this.options.editor) {
	            this.options.editor._serialize = this.options.editor.serialize;
	            this.options.editor._destroy = this.options.editor.destroy;
	            this.options.editor._setup = this.options.editor.setup;
	            this.options.editor._hideInsertButtons = this.hideButtons;
	
	            this.options.editor.serialize = this.editorSerialize;
	            this.options.editor.destroy = this.editorDestroy;
	            this.options.editor.setup = this.editorSetup;
	
	            this.options.editor.getExtensionByName('placeholder').updatePlaceholder = this.editorUpdatePlaceholder;
	        }
	    }
	
	    /**
	     * Initialization
	     *
	     * @return {void}
	     */
	
	    _createClass(Core, [{
	        key: 'init',
	        value: function init() {
	            this.$el.addClass('medium-editor-insert-plugin');
	
	            if (typeof this.options.addons !== 'object' || Object.keys(this.options.addons).length === 0) {
	                this.disable();
	            }
	
	            this.initAddons();
	            this.clean();
	            this.events();
	        }
	
	        /**
	         * Event listeners
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'events',
	        value: function events() {
	            var that = this;
	
	            this.$el.on('dragover drop', function (e) {
	                e.preventDefault();
	            }).on('keyup click', $.proxy(this, 'toggleButtons')).on('selectstart mousedown', '.medium-insert, .medium-insert-buttons', $.proxy(this, 'disableSelection')).on('click', '.medium-insert-buttons-show', $.proxy(this, 'toggleAddons')).on('click', '.medium-insert-action', $.proxy(this, 'addonAction')).on('paste', '.medium-insert-caption-placeholder', function (e) {
	                $.proxy(that, 'removeCaptionPlaceholder')($(e.target));
	            });
	
	            $(window).on('resize', $.proxy(this, 'positionButtons', null));
	        }
	
	        /**
	         * Return editor instance
	         *
	         * @return {object} MediumEditor
	         */
	    }, {
	        key: 'getEditor',
	        value: function getEditor() {
	            return this.options.editor;
	        }
	
	        /**
	         * Extend editor's serialize function
	         *
	         * @return {object} Serialized data
	         */
	    }, {
	        key: 'editorSerialize',
	        value: function editorSerialize() {
	            var data = this._serialize();
	
	            $.each(data, function (key) {
	                var $data = $('<div />').html(data[key].value);
	
	                $data.find('.medium-insert-buttons').remove();
	
	                data[key].value = $data.html();
	            });
	
	            return data;
	        }
	
	        /**
	         * Extend editor's destroy function to deactivate this plugin too
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'editorDestroy',
	        value: function editorDestroy() {
	            $.each(this.elements, function (key, el) {
	                $(el).data('plugin_' + this._name).disable();
	            });
	
	            this._destroy();
	        }
	
	        /**
	         * Extend editor's setup function to activate this plugin too
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'editorSetup',
	        value: function editorSetup() {
	            this._setup();
	
	            $.each(this.elements, function (key, el) {
	                $(el).data('plugin_' + this._name).enable();
	            });
	        }
	
	        /**
	         * Extend editor's placeholder.updatePlaceholder function to show placeholder dispite of the plugin buttons
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'editorUpdatePlaceholder',
	        value: function editorUpdatePlaceholder(el) {
	            var $clone = $(el).clone(),
	                cloneHtml;
	
	            $clone.find('.medium-insert-buttons').remove();
	            cloneHtml = $clone.html().replace(/^\s+|\s+$/g, '').replace(/^<p( class="medium-insert-active")?><br><\/p>$/, '');
	
	            if (!el.querySelector('img, blockquote') && cloneHtml === '') {
	                this.showPlaceholder(el);
	                this.base._hideInsertButtons($(el));
	            } else {
	                this.hidePlaceholder(el);
	            }
	        }
	
	        /**
	         * Deselects selected text
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'deselect',
	        value: function deselect() {
	            document.getSelection().removeAllRanges();
	        }
	
	        /**
	         * Disables the plugin
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'disable',
	        value: function disable() {
	            this.options.enabled = false;
	
	            this.$el.find('.medium-insert-buttons').addClass('hide');
	        }
	
	        /**
	         * Enables the plugin
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'enable',
	        value: function enable() {
	            this.options.enabled = true;
	
	            this.$el.find('.medium-insert-buttons').removeClass('hide');
	        }
	    }, {
	        key: 'disableSelection',
	
	        /**
	         * Disables selectstart mousedown events on plugin elements except images
	         *
	         * @return {void}
	         */
	        value: function disableSelection(e) {
	            var $el = $(e.target);
	
	            if ($el.is('img') === false || $el.hasClass('medium-insert-buttons-show')) {
	                e.preventDefault();
	            }
	        }
	
	        /**
	         * Initialize addons
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'initAddons',
	        value: function initAddons() {
	            var that = this;
	
	            if (!this.options.addons || this.options.addons.length === 0) {
	                return;
	            }
	
	            $.each(this.options.addons, (function (addon, options) {
	                var addonName = this._name + ucfirst(addon);
	
	                if (options === false) {
	                    delete that.options.addons[addon];
	                    return;
	                }
	
	                that.$el[addonName](options);
	                that.options.addons[addon] = that.$el.data('plugin_' + addonName).options;
	            }).bind(this));
	        }
	
	        /**
	         * Cleans a content of the editor
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'clean',
	        value: function clean() {
	            var that = this,
	                $buttons,
	                $lastEl,
	                $text;
	
	            if (this.options.enabled === false) {
	                return;
	            }
	
	            // Fix #39
	            // After deleting all content (ctrl+A and delete) in Firefox, all content is deleted and only <br> appears
	            // To force placeholder to appear, set <p><br></p> as content of the $el
	
	            if (this.$el.html().trim() === '' || this.$el.html().trim() === '<br>') {
	                this.$el.html(_templates2['default']['core-empty-line.hbs']().trim());
	            }
	
	            // Fix #29
	            // Wrap content text in <p></p> to avoid Firefox problems
	            $text = this.$el.contents().filter(function () {
	                return this.nodeName === '#text' && $.trim($(this).text()) !== '';
	            });
	
	            $text.each(function () {
	                $(this).wrap('<p />');
	
	                // Fix #145
	                // Move caret at the end of the element that's being wrapped
	                that.moveCaret($(this).parent(), $(this).text().length);
	            });
	
	            this.addButtons();
	
	            $buttons = this.$el.find('.medium-insert-buttons');
	            $lastEl = $buttons.prev();
	            if ($lastEl.attr('class') && $lastEl.attr('class').match(/medium\-insert(?!\-active)/)) {
	                $buttons.before(_templates2['default']['core-empty-line.hbs']().trim());
	            }
	        }
	
	        /**
	         * Returns HTML template of buttons
	         *
	         * @return {string} HTML template of buttons
	         */
	    }, {
	        key: 'getButtons',
	        value: function getButtons() {
	            if (this.options.enabled === false) {
	                return;
	            }
	
	            return _templates2['default']['core-buttons.hbs']({
	                addons: this.options.addons
	            }).trim();
	        }
	
	        /**
	         * Appends buttons at the end of the $el
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'addButtons',
	        value: function addButtons() {
	            if (this.$el.find('.medium-insert-buttons').length === 0) {
	                this.$el.append(this.getButtons());
	            }
	        }
	
	        /**
	         * Move buttons to current active, empty paragraph and show them
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'toggleButtons',
	        value: function toggleButtons(e) {
	            var $el = $(e.target),
	                selection = window.getSelection(),
	                that = this,
	                range,
	                $current,
	                $p,
	                activeAddon;
	
	            if (this.options.enabled === false) {
	                return;
	            }
	
	            if (!selection || selection.rangeCount === 0) {
	                $current = $el;
	            } else {
	                range = selection.getRangeAt(0);
	                $current = $(range.commonAncestorContainer);
	            }
	
	            // When user clicks on  editor's placeholder in FF, $current el is editor itself, not the first paragraph as it should
	            if ($current.hasClass('medium-editor-insert-plugin')) {
	                $current = $current.find('p:first');
	            }
	
	            $p = $current.is('p') ? $current : $current.closest('p');
	
	            this.clean();
	
	            if ($el.hasClass('medium-editor-placeholder') === false && $el.closest('.medium-insert-buttons').length === 0 && $current.closest('.medium-insert-buttons').length === 0) {
	
	                this.$el.find('.medium-insert-active').removeClass('medium-insert-active');
	
	                $.each(this.options.addons, function (addon) {
	                    if ($el.closest('.medium-insert-' + addon).length) {
	                        $current = $el;
	                    }
	
	                    if ($current.closest('.medium-insert-' + addon).length) {
	                        $p = $current.closest('.medium-insert-' + addon);
	                        activeAddon = addon;
	                        return;
	                    }
	                });
	
	                if ($p.length && ($p.text().trim() === '' && !activeAddon || activeAddon === 'images')) {
	                    $p.addClass('medium-insert-active');
	
	                    // If buttons are displayed on addon paragraph, wait 100ms for possible captions to display
	                    setTimeout(function () {
	                        that.positionButtons(activeAddon);
	                        that.showButtons(activeAddon);
	                    }, activeAddon ? 100 : 0);
	                } else {
	                    this.hideButtons();
	                }
	            }
	        }
	
	        /**
	         * Show buttons
	         *
	         * @param {string} activeAddon - Name of active addon
	         * @returns {void}
	         */
	    }, {
	        key: 'showButtons',
	        value: function showButtons(activeAddon) {
	            var $buttons = this.$el.find('.medium-insert-buttons');
	
	            $buttons.show();
	            $buttons.find('li').show();
	
	            if (activeAddon) {
	                $buttons.find('li').hide();
	                $buttons.find('a[data-addon="' + activeAddon + '"]').parent().show();
	            }
	        }
	
	        /**
	         * Hides buttons
	         *
	         * @param {jQuery} $el - Editor element
	         * @returns {void}
	         */
	    }, {
	        key: 'hideButtons',
	        value: function hideButtons($el) {
	            $el = $el || this.$el;
	
	            $el.find('.medium-insert-buttons').hide();
	            $el.find('.medium-insert-buttons-addons').hide();
	            $el.find('.medium-insert-buttons-show').removeClass('medium-insert-buttons-rotate');
	        }
	
	        /**
	         * Position buttons
	         *
	         * @param {string} activeAddon - Name of active addon
	         * @return {void}
	         */
	    }, {
	        key: 'positionButtons',
	        value: function positionButtons(activeAddon) {
	            var $buttons = this.$el.find('.medium-insert-buttons'),
	                $p = this.$el.find('.medium-insert-active'),
	                $first = $p.find('figure:first').length ? $p.find('figure:first') : $p;
	
	            if ($p.length) {
	                var $addons = $buttons.find('.medium-insert-buttons-addons');
	                var addonsLeft = parseInt($addons.css('left'), 10);
	                var buttonMarginLeft = parseInt($addons.find('a:first').css('margin-left'), 10);
	                var buttonHeight = parseInt($buttons.find('.mediu'));
	                var pMarginTop = parseInt($p.css('margin-top'), 10);
	
	                var editorOffset = this.$el.offset();
	
	                // Get the position of paragraph inside the editor.
	                var pEditorOffset = {
	                    left: $p.offset().left - this.$el.offset().left,
	                    top: $p.offset().top - this.$el.offset().top
	                };
	
	                var editorPosition = this.$el.position();
	
	                var left = pEditorOffset.left - addonsLeft - buttonMarginLeft;
	
	                // Don't let the buttons go outside the window.
	                if (editorOffset.left >= 0 && left < editorOffset.left / -1) {
	                    left = editorOffset.left;
	                }
	
	                left += editorPosition.left;
	
	                var _top = pEditorOffset.top + editorPosition.top;
	
	                if (activeAddon) {
	                    if ($p.position().left !== $first.position().left) {
	                        left = $first.position().left;
	                    }
	
	                    //top += buttonHeight / 2; // 15px offset
	                }
	
	                $buttons.css({
	                    left: left,
	                    top: _top
	                });
	            }
	        }
	
	        /**
	         * Toggles addons buttons
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'toggleAddons',
	        value: function toggleAddons() {
	            this.$el.find('.medium-insert-buttons-addons').fadeToggle();
	            this.$el.find('.medium-insert-buttons-show').toggleClass('medium-insert-buttons-rotate');
	        }
	
	        /**
	         * Hide addons buttons
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'hideAddons',
	        value: function hideAddons() {
	            this.$el.find('.medium-insert-buttons-addons').hide();
	            this.$el.find('.medium-insert-buttons-show').removeClass('medium-insert-buttons-rotate');
	        }
	
	        /**
	         * Call addon's action
	         *
	         * @param {Event} e
	         * @return {void}
	         */
	    }, {
	        key: 'addonAction',
	        value: function addonAction(e) {
	            var $a = $(e.target).is('a') ? $(e.target) : $(e.target).closest('a'),
	                addon = $a.data('addon'),
	                action = $a.data('action');
	
	            this.$el.data('plugin_' + this._name + ucfirst(addon))[action]();
	        }
	
	        /**
	         * Move caret at the beginning of the empty paragraph
	         *
	         * @param {jQuery} $el Element where to place the caret
	         * @param {integer} position Position where to move caret. Default: 0
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'moveCaret',
	        value: function moveCaret($el, position) {
	            var range, sel, el;
	
	            position = position || 0;
	            range = document.createRange();
	            sel = window.getSelection();
	            el = $el.get(0);
	
	            if (!el.childNodes.length) {
	                var textEl = document.createTextNode(' ');
	                el.appendChild(textEl);
	            }
	
	            range.setStart(el.childNodes[0], position);
	            range.collapse(true);
	            sel.removeAllRanges();
	            sel.addRange(range);
	        }
	
	        /**
	         * Add caption
	         *
	         * @param {jQuery Element} $el
	         * @param {string} placeholder
	         * @return {void}
	         */
	    }, {
	        key: 'addCaption',
	        value: function addCaption($el, placeholder) {
	            var $caption = $el.find('figcaption');
	
	            if ($caption.length === 0) {
	                $el.append(_templates2['default']['core-caption.hbs']({
	                    placeholder: placeholder
	                }));
	            }
	        }
	
	        /**
	         * Remove captions
	         *
	         * @param {jQuery Element} $ignore
	         * @return {void}
	         */
	    }, {
	        key: 'removeCaptions',
	        value: function removeCaptions($ignore) {
	            var $captions = this.$el.find('figcaption');
	
	            if ($ignore) {
	                $captions = $captions.not($ignore);
	            }
	
	            $captions.each(function () {
	                if ($(this).hasClass('medium-insert-caption-placeholder') || $(this).text().trim() === '') {
	                    $(this).remove();
	                }
	            });
	        }
	
	        /**
	         * Remove caption placeholder
	         *
	         * @param {jQuery Element} $el
	         * @return {void}
	         */
	    }, {
	        key: 'removeCaptionPlaceholder',
	        value: function removeCaptionPlaceholder($el) {
	            var $caption = $el.is('figcaption') ? $el : $el.find('figcaption');
	
	            if ($caption.length) {
	                $caption.removeClass('medium-insert-caption-placeholder').removeAttr('data-placeholder');
	            }
	        }
	    }]);
	
	    return Core;
	})();
	
	exports['default'] = Core;
	
	var defaults = {
	    editor: null,
	    enabled: true,
	    addons: {
	        images: true, // boolean or object containing configuration
	        embeds: true
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/*!*****************************!*\
  !*** ./src/js/templates.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _coreButtonsHbs = __webpack_require__(/*! core-buttons.hbs */ 3);
	
	var _coreButtonsHbs2 = _interopRequireDefault(_coreButtonsHbs);
	
	var _coreCaptionHbs = __webpack_require__(/*! core-caption.hbs */ 23);
	
	var _coreCaptionHbs2 = _interopRequireDefault(_coreCaptionHbs);
	
	var _coreEmptyLineHbs = __webpack_require__(/*! core-empty-line.hbs */ 24);
	
	var _coreEmptyLineHbs2 = _interopRequireDefault(_coreEmptyLineHbs);
	
	var _embedsToolbarHbs = __webpack_require__(/*! embeds-toolbar.hbs */ 25);
	
	var _embedsToolbarHbs2 = _interopRequireDefault(_embedsToolbarHbs);
	
	var _embedsWrapperHbs = __webpack_require__(/*! embeds-wrapper.hbs */ 26);
	
	var _embedsWrapperHbs2 = _interopRequireDefault(_embedsWrapperHbs);
	
	var _imagesFileuploadHbs = __webpack_require__(/*! images-fileupload.hbs */ 27);
	
	var _imagesFileuploadHbs2 = _interopRequireDefault(_imagesFileuploadHbs);
	
	var _imagesImageHbs = __webpack_require__(/*! images-image.hbs */ 28);
	
	var _imagesImageHbs2 = _interopRequireDefault(_imagesImageHbs);
	
	var _imagesProgressbarHbs = __webpack_require__(/*! images-progressbar.hbs */ 29);
	
	var _imagesProgressbarHbs2 = _interopRequireDefault(_imagesProgressbarHbs);
	
	var _imagesToolbarHbs = __webpack_require__(/*! images-toolbar.hbs */ 30);
	
	var _imagesToolbarHbs2 = _interopRequireDefault(_imagesToolbarHbs);
	
	var filenames = {
	    'core-buttons.hbs': _coreButtonsHbs2['default'],
	    'core-caption.hbs': _coreCaptionHbs2['default'],
	    'core-empty-line.hbs': _coreEmptyLineHbs2['default'],
	    'embeds-toolbar.hbs': _embedsToolbarHbs2['default'],
	    'embeds-wrapper.hbs': _embedsWrapperHbs2['default'],
	    'images-fileupload.hbs': _imagesFileuploadHbs2['default'],
	    'images-image.hbs': _imagesImageHbs2['default'],
	    'images-progressbar.hbs': _imagesProgressbarHbs2['default'],
	    'images-toolbar.hbs': _imagesToolbarHbs2['default']
	};
	
	exports['default'] = filenames;
	module.exports = exports['default'];

/***/ },
/* 3 */
/*!****************************************!*\
  !*** ./src/templates/core-buttons.hbs ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 4);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";
	
	  return "            <li><a data-addon=\""
	    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
	    + "\" data-action=\"add\" class=\"medium-insert-action\">"
	    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "</a></li>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<div class=\"medium-insert-buttons\" contenteditable=\"false\" style=\"display: none\">\n    <a class=\"medium-insert-buttons-show\">+</a>\n    <ul class=\"medium-insert-buttons-addons\" style=\"display: none\">\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.addons : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "    </ul>\n</div>\n";
	},"useData":true});

/***/ },
/* 4 */
/*!*********************************!*\
  !*** ./~/handlebars/runtime.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	'use strict';
	
	module.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ 5)['default'];

/***/ },
/* 5 */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars.runtime.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	// istanbul ignore next
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj['default'] = obj;return newObj;
	  }
	}
	
	var _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ 6);
	
	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)
	
	var base = _interopRequireWildcard(_handlebarsBase);
	
	var _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ 20);
	
	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
	
	var _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ 8);
	
	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
	
	var _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ 7);
	
	var Utils = _interopRequireWildcard(_handlebarsUtils);
	
	var _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ 21);
	
	var runtime = _interopRequireWildcard(_handlebarsRuntime);
	
	var _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ 22);
	
	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	
	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
	
	function create() {
	  var hb = new base.HandlebarsEnvironment();
	
	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;
	
	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };
	
	  return hb;
	}
	
	var inst = create();
	inst.create = create;
	
	_handlebarsNoConflict2['default'](inst);
	
	inst['default'] = inst;
	
	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 6 */
/*!**************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/base.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _utils = __webpack_require__(/*! ./utils */ 7);
	
	var _exception = __webpack_require__(/*! ./exception */ 8);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	var _helpers = __webpack_require__(/*! ./helpers */ 9);
	
	var _decorators = __webpack_require__(/*! ./decorators */ 17);
	
	var _logger = __webpack_require__(/*! ./logger */ 19);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var VERSION = '4.0.3';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;
	
	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};
	
	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';
	
	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};
	
	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}
	
	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,
	
	  logger: _logger2['default'],
	  log: _logger2['default'].log,
	
	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },
	
	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },
	
	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};
	
	var log = _logger2['default'].log;
	
	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ },
/* 7 */
/*!***************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/utils.js ***!
  \***************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};
	
	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;
	
	function escapeChar(chr) {
	  return escape[chr];
	}
	
	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	var toString = Object.prototype.toString;
	
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	exports.toString = toString;
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;
	
	/* eslint-enable func-style */
	
	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};
	
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	exports.isArray = isArray;
	
	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }
	
	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }
	
	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}
	
	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}
	
	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}
	
	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}
	
	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 8 */
/*!*******************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/exception.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
	
	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;
	
	    message += ' - ' + line + ':' + column;
	  }
	
	  var tmp = Error.prototype.constructor.call(this, message);
	
	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }
	
	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }
	
	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}
	
	Exception.prototype = new Error();
	
	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 9 */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ 10);
	
	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
	
	var _helpersEach = __webpack_require__(/*! ./helpers/each */ 11);
	
	var _helpersEach2 = _interopRequireDefault(_helpersEach);
	
	var _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ 12);
	
	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
	
	var _helpersIf = __webpack_require__(/*! ./helpers/if */ 13);
	
	var _helpersIf2 = _interopRequireDefault(_helpersIf);
	
	var _helpersLog = __webpack_require__(/*! ./helpers/log */ 14);
	
	var _helpersLog2 = _interopRequireDefault(_helpersLog);
	
	var _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ 15);
	
	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
	
	var _helpersWith = __webpack_require__(/*! ./helpers/with */ 16);
	
	var _helpersWith2 = _interopRequireDefault(_helpersWith);
	
	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ },
/* 10 */
/*!**************************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(/*! ../utils */ 7);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;
	
	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }
	
	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }
	
	      return fn(context, options);
	    }
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 11 */
/*!**********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _utils = __webpack_require__(/*! ../utils */ 7);
	
	var _exception = __webpack_require__(/*! ../exception */ 8);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }
	
	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;
	
	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }
	
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }
	
	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }
	
	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;
	
	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }
	
	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }
	
	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;
	
	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }
	
	    if (i === 0) {
	      ret = inverse(this);
	    }
	
	    return ret;
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 12 */
/*!********************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _exception = __webpack_require__(/*! ../exception */ 8);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 13 */
/*!********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(/*! ../utils */ 7);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }
	
	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });
	
	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 14 */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }
	
	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;
	
	    instance.log.apply(instance, args);
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 15 */
/*!************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 16 */
/*!**********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(/*! ../utils */ 7);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }
	
	    var fn = options.fn;
	
	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }
	
	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 17 */
/*!********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/decorators.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ 18);
	
	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
	
	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ },
/* 18 */
/*!***************************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(/*! ../utils */ 7);
	
	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }
	
	    props.partials[options.args[0]] = options.fn;
	
	    return ret;
	  });
	};
	
	module.exports = exports['default'];

/***/ },
/* 19 */
/*!****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/logger.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(/*! ./utils */ 7);
	
	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',
	
	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }
	
	    return level;
	  },
	
	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);
	
	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }
	
	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }
	
	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};
	
	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 20 */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';
	
	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}
	
	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};
	
	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 21 */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/runtime.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	// istanbul ignore next
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj['default'] = obj;return newObj;
	  }
	}
	
	var _utils = __webpack_require__(/*! ./utils */ 7);
	
	var Utils = _interopRequireWildcard(_utils);
	
	var _exception = __webpack_require__(/*! ./exception */ 8);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	var _base = __webpack_require__(/*! ./base */ 6);
	
	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;
	
	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}
	
	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }
	
	  templateSpec.main.decorator = templateSpec.main_d;
	
	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);
	
	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }
	
	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);
	
	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }
	
	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }
	
	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },
	
	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,
	
	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },
	
	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },
	
	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;
	
	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }
	
	      return obj;
	    },
	
	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };
	
	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var data = options.data;
	
	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }
	
	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;
	
	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);
	
	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };
	
	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }
	
	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}
	
	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }
	
	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }
	
	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);
	
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}
	
	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}
	
	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }
	
	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;
	
	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }
	
	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }
	
	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}
	
	function noop() {
	  return '';
	}
	
	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}
	
	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ },
/* 22 */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 23 */
/*!****************************************!*\
  !*** ./src/templates/core-caption.hbs ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 4);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var helper;
	
	  return "<figcaption contenteditable=\"true\" class=\"medium-insert-caption-placeholder\" data-placeholder=\""
	    + container.escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"placeholder","hash":{},"data":data}) : helper)))
	    + "\"></figcaption>";
	},"useData":true});

/***/ },
/* 24 */
/*!*******************************************!*\
  !*** ./src/templates/core-empty-line.hbs ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 4);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<p><br></p>\n";
	},"useData":true});

/***/ },
/* 25 */
/*!******************************************!*\
  !*** ./src/templates/embeds-toolbar.hbs ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 4);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "    <div class=\"medium-insert-embeds-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active\">\n        <ul class=\"medium-editor-toolbar-actions clearfix\">\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.styles : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "        </ul>\n    </div>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"3":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";
	
	  return "                    <li>\n                        <button class=\"medium-editor-action\" data-action=\""
	    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
	    + "\">"
	    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "</button>\n                    </li>\n";
	},"5":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "    <div class=\"medium-insert-embeds-toolbar2 medium-editor-toolbar medium-editor-toolbar-active\">\n        <ul class=\"medium-editor-toolbar-actions clearfix\">\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "        </ul>\n    </div>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {};
	
	  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.styles : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.actions : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"useData":true});

/***/ },
/* 26 */
/*!******************************************!*\
  !*** ./src/templates/embeds-wrapper.hbs ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 4);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper;
	
	  return "<div class=\"medium-insert-embeds\" contenteditable=\"false\">\n	<figure>\n		<div class=\"medium-insert-embed\">\n			"
	    + ((stack1 = ((helper = (helper = helpers.html || (depth0 != null ? depth0.html : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"html","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "\n		</div>\n	</figure>\n	<div class=\"medium-insert-embeds-overlay\"></div>\n</div>\n";
	},"useData":true});

/***/ },
/* 27 */
/*!*********************************************!*\
  !*** ./src/templates/images-fileupload.hbs ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 4);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<input type=\"file\" multiple>";
	},"useData":true});

/***/ },
/* 28 */
/*!****************************************!*\
  !*** ./src/templates/images-image.hbs ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 4);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    return "        <div class=\"medium-insert-images-progress\"></div>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {};
	
	  return "<figure contenteditable=\"false\">\n    <img src=\""
	    + container.escapeExpression(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
	    + "\" alt=\"\">\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.progress : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</figure>\n";
	},"useData":true});

/***/ },
/* 29 */
/*!**********************************************!*\
  !*** ./src/templates/images-progressbar.hbs ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 4);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    return "<progress min=\"0\" max=\"100\" value=\"0\">0</progress>";
	},"useData":true});

/***/ },
/* 30 */
/*!******************************************!*\
  !*** ./src/templates/images-toolbar.hbs ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 4);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"2":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";
	
	  return "                <li>\n                    <button class=\"medium-editor-action\" data-action=\""
	    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
	    + "\">"
	    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "</button>\n                </li>\n";
	},"4":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return "	<div class=\"medium-insert-images-toolbar2 medium-editor-toolbar medium-editor-toolbar-active\">\n		<ul class=\"medium-editor-toolbar-actions clearfix\">\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "    	</ul>\n    </div>\n";
	},"5":function(container,depth0,helpers,partials,data) {
	    var stack1;
	
	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"6":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";
	
	  return "        	        <li>\n        	            <button class=\"medium-editor-action\" data-action=\""
	    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
	    + "\">"
	    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
	    + "</button>\n        	        </li>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=depth0 != null ? depth0 : {};
	
	  return "<div class=\"medium-insert-images-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active\">\n    <ul class=\"medium-editor-toolbar-actions clearfix\">\n"
	    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.styles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "    </ul>\n</div>\n\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.actions : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
	},"useData":true});

/***/ },
/* 31 */
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var Constants = {
	    PLUGIN_NAME: 'mediumInsert'
	};
	
	exports.Constants = Constants;
	exports['default'] = Constants;

/***/ },
/* 32 */
/*!**************************!*\
  !*** ./src/js/images.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _templates = __webpack_require__(/*! templates */ 2);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	var _constants = __webpack_require__(/*! constants */ 31);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	/**
	 * Images object
	 *
	 * Sets options, variables and calls init() function
	 *
	 * @constructor
	 * @param {DOM} el - DOM element to init the plugin on
	 * @param {object} options - Options to override defaults
	 * @return {void}
	 */
	
	var Images = (function () {
	    function Images(el, options) {
	        _classCallCheck(this, Images);
	
	        this._name = _constants2['default'].PLUGIN_NAME;
	
	        this.el = el;
	        this.$el = $(el);
	
	        this.core = this.$el.data('plugin_' + this._name);
	
	        this.options = $.extend(true, {}, defaults, options);
	        this._defaults = defaults;
	
	        // Allow image preview only in browsers, that support's that
	        if (this.options.preview && !window.FileReader) {
	            this.options.preview = false;
	        }
	
	        // Extend editor's functions
	        if (this.core.getEditor()) {
	            this.core.getEditor()._serializePreImages = this.core.getEditor().serialize;
	            this.core.getEditor().serialize = this.editorSerialize;
	        }
	
	        this.init();
	    }
	
	    /**
	     * Initialization
	     *
	     * @return {void}
	     */
	
	    _createClass(Images, [{
	        key: 'init',
	        value: function init() {
	            var $images = this.$el.find('.medium-insert-images');
	
	            $images.find('figcaption').attr('contenteditable', true);
	            $images.find('figure').attr('contenteditable', false);
	
	            this.events();
	            this.backwardsCompatibility();
	            this.sorting();
	        }
	
	        /**
	         * Event listeners
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'events',
	        value: function events() {
	            $(document).on('click', $.proxy(this, 'unselectImage')).on('keydown', $.proxy(this, 'removeImage')).on('click', '.medium-insert-images-toolbar .medium-editor-action', $.proxy(this, 'toolbarAction')).on('click', '.medium-insert-images-toolbar2 .medium-editor-action', $.proxy(this, 'toolbar2Action'));
	
	            this.$el.on('click', '.medium-insert-images img', $.proxy(this, 'selectImage'));
	        }
	
	        /**
	         * Replace v0.* class names with new ones
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'backwardsCompatibility',
	        value: function backwardsCompatibility() {
	            this.$el.find('.mediumInsert').removeClass('mediumInsert').addClass('medium-insert-images');
	
	            this.$el.find('.medium-insert-images.small').removeClass('small').addClass('medium-insert-images-left');
	        }
	
	        /**
	         * Extend editor's serialize function
	         *
	         * @return {object} Serialized data
	         */
	    }, {
	        key: 'editorSerialize',
	        value: function editorSerialize() {
	            var data = this._serializePreImages();
	
	            $.each(data, function (key) {
	                var $data = $('<div />').html(data[key].value);
	
	                $data.find('.medium-insert-images').find('figcaption, figure').removeAttr('contenteditable');
	
	                data[key].value = $data.html();
	            });
	
	            return data;
	        }
	
	        /**
	         * Add image
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'add',
	        value: function add() {
	            var that = this,
	                $file = $(_templates2['default']['images-fileupload.hbs']()),
	                fileUploadOptions = {
	                dataType: 'json',
	                add: function add(e, data) {
	                    $.proxy(that, 'uploadAdd', e, data)();
	                },
	                done: function done(e, data) {
	                    $.proxy(that, 'uploadDone', e, data)();
	                }
	            };
	
	            // Only add progress callbacks for browsers that support XHR2,
	            // and test for XHR2 per:
	            // http://stackoverflow.com/questions/6767887/
	            // what-is-the-best-way-to-check-for-xhr2-file-upload-support
	            if (new XMLHttpRequest().upload) {
	                fileUploadOptions.progress = function (e, data) {
	                    $.proxy(that, 'uploadProgress', e, data)();
	                };
	
	                fileUploadOptions.progressall = function (e, data) {
	                    $.proxy(that, 'uploadProgressall', e, data)();
	                };
	            }
	
	            $file.fileupload($.extend(true, {}, this.options.fileUploadOptions, fileUploadOptions));
	
	            $file.click();
	        }
	
	        /**
	         * Callback invoked as soon as files are added to the fileupload widget - via file input selection, drag & drop or add API call.
	         * https://github.com/blueimp/jQuery-File-Upload/wiki/Options#add
	         *
	         * @param {Event} e
	         * @param {object} data
	         * @return {void}
	         */
	    }, {
	        key: 'uploadAdd',
	        value: function uploadAdd(e, data) {
	            var $place = this.$el.find('.medium-insert-active'),
	                that = this,
	                uploadErrors = [],
	                file = data.files[0],
	                acceptFileTypes = this.options.fileUploadOptions.acceptFileTypes,
	                maxFileSize = this.options.fileUploadOptions.maxFileSize,
	                reader;
	
	            if (acceptFileTypes && !acceptFileTypes.test(file['type'])) {
	                uploadErrors.push(this.options.messages.acceptFileTypesError + file['name']);
	            } else if (maxFileSize && file['size'] > maxFileSize) {
	                uploadErrors.push(this.options.messages.maxFileSizeError + file['name']);
	            }
	            if (uploadErrors.length > 0) {
	                alert(uploadErrors.join("\n"));
	                return;
	            }
	
	            this.core.hideButtons();
	
	            // Replace paragraph with div, because figure elements can't be inside paragraph
	            if ($place.is('p')) {
	                $place.replaceWith('<div class="medium-insert-active">' + $place.html() + '</div>');
	                $place = this.$el.find('.medium-insert-active');
	                this.core.moveCaret($place);
	            }
	
	            $place.addClass('medium-insert-images');
	
	            if (this.options.preview === false && $place.find('progress').length === 0 && new XMLHttpRequest().upload) {
	                $place.append(_templates2['default']['images-progressbar.hbs']());
	            }
	
	            if (data.autoUpload || data.autoUpload !== false && $(e.target).fileupload('option', 'autoUpload')) {
	                data.process().done(function () {
	                    // If preview is set to true, let the showImage handle the upload start
	                    if (that.options.preview) {
	                        reader = new FileReader();
	
	                        reader.onload = function (e) {
	                            $.proxy(that, 'showImage', e.target.result, data)();
	                        };
	
	                        reader.readAsDataURL(data.files[0]);
	                    } else {
	                        data.submit();
	                    }
	                });
	            }
	        }
	
	        /**
	         * Callback for global upload progress events
	         * https://github.com/blueimp/jQuery-File-Upload/wiki/Options#progressall
	         *
	         * @param {Event} e
	         * @param {object} data
	         * @return {void}
	         */
	    }, {
	        key: 'uploadProgressall',
	        value: function uploadProgressall(e, data) {
	            var progress, $progressbar;
	
	            if (this.options.preview === false) {
	                progress = parseInt(data.loaded / data.total * 100, 10);
	                $progressbar = this.$el.find('.medium-insert-active').find('progress');
	
	                $progressbar.attr('value', progress).text(progress);
	
	                if (progress === 100) {
	                    $progressbar.remove();
	                }
	            }
	        }
	
	        /**
	         * Callback for upload progress events.
	         * https://github.com/blueimp/jQuery-File-Upload/wiki/Options#progress
	         *
	         * @param {Event} e
	         * @param {object} data
	         * @return {void}
	         */
	    }, {
	        key: 'uploadProgress',
	        value: function uploadProgress(e, data) {
	            var progress, $progressbar;
	
	            if (this.options.preview) {
	                progress = 100 - parseInt(data.loaded / data.total * 100, 10);
	                $progressbar = data.context.find('.medium-insert-images-progress');
	
	                $progressbar.css('width', progress + '%');
	
	                if (progress === 0) {
	                    $progressbar.remove();
	                }
	            }
	        }
	
	        /**
	         * Callback for successful upload requests.
	         * https://github.com/blueimp/jQuery-File-Upload/wiki/Options#done
	         *
	         * @param {Event} e
	         * @param {object} data
	         * @return {void}
	         */
	    }, {
	        key: 'uploadDone',
	        value: function uploadDone(e, data) {
	            var $el = $.proxy(this, 'showImage', data.result.files[0].url, data)();
	
	            this.core.clean();
	            this.sorting();
	
	            if (this.options.uploadCompleted) {
	                this.options.uploadCompleted($el, data);
	            }
	        }
	
	        /**
	         * Add uploaded / preview image to DOM
	         *
	         * @param {string} img
	         * @returns {void}
	         */
	    }, {
	        key: 'showImage',
	        value: function showImage(img, data) {
	            var $place = this.$el.find('.medium-insert-active'),
	                domImage,
	                that;
	
	            // Hide editor's placeholder
	            $place.click();
	
	            // If preview is allowed and preview image already exists,
	            // replace it with uploaded image
	            that = this;
	            if (this.options.preview && data.context) {
	                domImage = this.getDOMImage();
	                domImage.onload = function () {
	                    data.context.find('img').attr('src', domImage.src);
	                    that.$el.trigger('input');
	                };
	                domImage.src = img;
	            } else {
	                data.context = $(_templates2['default']['images-image.hbs']({
	                    img: img,
	                    progress: this.options.preview
	                })).appendTo($place);
	
	                $place.find('br').remove();
	
	                if (this.options.autoGrid && $place.find('figure').length >= this.options.autoGrid) {
	                    $.each(this.options.styles, function (style, options) {
	                        var className = 'medium-insert-images-' + style;
	
	                        $place.removeClass(className);
	
	                        if (options.removed) {
	                            options.removed($place);
	                        }
	                    });
	
	                    $place.addClass('medium-insert-images-grid');
	
	                    if (this.options.styles.grid.added) {
	                        this.options.styles.grid.added($place);
	                    }
	                }
	
	                if (this.options.preview) {
	                    data.submit();
	                }
	            }
	
	            this.$el.trigger('input');
	
	            return data.context;
	        }
	    }, {
	        key: 'getDOMImage',
	        value: function getDOMImage() {
	            return new window.Image();
	        }
	
	        /**
	         * Select clicked image
	         *
	         * @param {Event} e
	         * @returns {void}
	         */
	    }, {
	        key: 'selectImage',
	        value: function selectImage(e) {
	            if (this.core.options.enabled) {
	                var $image = $(e.target),
	                    that = this;
	
	                // Hide keyboard on mobile devices
	                this.$el.blur();
	
	                $image.addClass('medium-insert-image-active');
	                $image.closest('.medium-insert-images').addClass('medium-insert-active');
	
	                setTimeout(function () {
	                    that.addToolbar();
	
	                    if (that.options.captions) {
	                        that.core.addCaption($image.closest('figure'), that.options.captionPlaceholder);
	                    }
	                }, 50);
	            }
	        }
	
	        /**
	         * Unselect selected image
	         *
	         * @param {Event} e
	         * @returns {void}
	         */
	    }, {
	        key: 'unselectImage',
	        value: function unselectImage(e) {
	            var $el = $(e.target),
	                $image = this.$el.find('.medium-insert-image-active');
	
	            if ($el.is('img') && $el.hasClass('medium-insert-image-active')) {
	                $image.not($el).removeClass('medium-insert-image-active');
	                $('.medium-insert-images-toolbar, .medium-insert-images-toolbar2').remove();
	                this.core.removeCaptions($el);
	                return;
	            }
	
	            $image.removeClass('medium-insert-image-active');
	            $('.medium-insert-images-toolbar, .medium-insert-images-toolbar2').remove();
	
	            if ($el.is('.medium-insert-caption-placeholder')) {
	                this.core.removeCaptionPlaceholder($image.closest('figure'));
	            } else if ($el.is('figcaption') === false) {
	                this.core.removeCaptions();
	            }
	        }
	
	        /**
	         * Remove image
	         *
	         * @param {Event} e
	         * @returns {void}
	         */
	    }, {
	        key: 'removeImage',
	        value: function removeImage(e) {
	            var $image, $parent, $empty;
	
	            if (e.which === 8 || e.which === 46) {
	                $image = this.$el.find('.medium-insert-image-active');
	
	                if ($image.length) {
	                    e.preventDefault();
	
	                    this.deleteFile($image.attr('src'));
	
	                    $parent = $image.closest('.medium-insert-images');
	                    $image.closest('figure').remove();
	
	                    $('.medium-insert-images-toolbar, .medium-insert-images-toolbar2').remove();
	
	                    if ($parent.find('figure').length === 0) {
	                        $empty = $parent.next();
	                        if ($empty.is('p') === false || $empty.text() !== '') {
	                            $empty = $(_templates2['default']['core-empty-line.hbs']().trim());
	                            $parent.before($empty);
	                        }
	                        $parent.remove();
	
	                        // Hide addons
	                        this.core.hideAddons();
	
	                        this.core.moveCaret($empty);
	                    }
	
	                    this.$el.trigger('input');
	                }
	            }
	        }
	
	        /**
	         * Makes ajax call to deleteScript
	         *
	         * @param {String} file File name
	         * @returns {void}
	         */
	    }, {
	        key: 'deleteFile',
	        value: function deleteFile(file) {
	            if (this.options.deleteScript) {
	                // If deleteMethod is somehow undefined, defaults to POST
	                var method = this.options.deleteMethod || 'POST';
	
	                $.ajax({
	                    url: this.options.deleteScript,
	                    type: method,
	                    data: { file: file }
	                });
	            }
	        }
	
	        /**
	         * Adds image toolbar to editor
	         *
	         * @returns {void}
	         */
	    }, {
	        key: 'addToolbar',
	        value: function addToolbar() {
	            var $image = this.$el.find('.medium-insert-image-active'),
	                $p = $image.closest('.medium-insert-images'),
	                active = false,
	                $toolbar,
	                $toolbar2,
	                top;
	
	            $('body').append(_templates2['default']['images-toolbar.hbs']({
	                styles: this.options.styles,
	                actions: this.options.actions
	            }).trim());
	
	            $toolbar = $('.medium-insert-images-toolbar');
	            $toolbar2 = $('.medium-insert-images-toolbar2');
	
	            top = $image.offset().top - $toolbar.height() - 8 - 2 - 5; // 8px - hight of an arrow under toolbar, 2px - height of an image outset, 5px - distance from an image
	            if (top < 0) {
	                top = 0;
	            }
	
	            $toolbar.css({
	                top: top,
	                left: $image.offset().left + $image.width() / 2 - $toolbar.width() / 2
	            }).show();
	
	            $toolbar2.css({
	                top: $image.offset().top + 2, // 2px - distance from a border
	                left: $image.offset().left + $image.width() - $toolbar2.width() - 4 // 4px - distance from a border
	            }).show();
	
	            $toolbar.find('button').each(function () {
	                if ($p.hasClass('medium-insert-images-' + $(this).data('action'))) {
	                    $(this).addClass('medium-editor-button-active');
	                    active = true;
	                }
	            });
	
	            if (active === false) {
	                $toolbar.find('button').first().addClass('medium-editor-button-active');
	            }
	        }
	
	        /**
	         * Fires toolbar action
	         *
	         * @param {Event} e
	         * @returns {void}
	         */
	    }, {
	        key: 'toolbarAction',
	        value: function toolbarAction(e) {
	            var $button = $(e.target).is('button') ? $(e.target) : $(e.target).closest('button'),
	                $li = $button.closest('li'),
	                $ul = $li.closest('ul'),
	                $lis = $ul.find('li'),
	                $p = this.$el.find('.medium-insert-active'),
	                that = this;
	
	            $button.addClass('medium-editor-button-active');
	            $li.siblings().find('.medium-editor-button-active').removeClass('medium-editor-button-active');
	
	            $lis.find('button').each(function () {
	                var className = 'medium-insert-images-' + $(this).data('action');
	
	                if ($(this).hasClass('medium-editor-button-active')) {
	                    $p.addClass(className);
	
	                    if (that.options.styles[$(this).data('action')].added) {
	                        that.options.styles[$(this).data('action')].added($p);
	                    }
	                } else {
	                    $p.removeClass(className);
	
	                    if (that.options.styles[$(this).data('action')].removed) {
	                        that.options.styles[$(this).data('action')].removed($p);
	                    }
	                }
	            });
	
	            this.core.hideButtons();
	
	            this.$el.trigger('input');
	        }
	
	        /**
	         * Fires toolbar2 action
	         *
	         * @param {Event} e
	         * @returns {void}
	         */
	    }, {
	        key: 'toolbar2Action',
	        value: function toolbar2Action(e) {
	            var $button = $(e.target).is('button') ? $(e.target) : $(e.target).closest('button'),
	                callback = this.options.actions[$button.data('action')].clicked;
	
	            if (callback) {
	                callback(this.$el.find('.medium-insert-image-active'));
	            }
	
	            this.core.hideButtons();
	
	            this.$el.trigger('input');
	        }
	
	        /**
	         * Initialize sorting
	         *
	         * @returns {void}
	         */
	    }, {
	        key: 'sorting',
	        value: function sorting() {
	            this.options.sorting();
	        }
	    }]);
	
	    return Images;
	})();
	
	exports['default'] = Images;
	
	var defaults = {
	    label: '<span class="fa fa-camera"></span>',
	    deleteMethod: 'POST',
	    deleteScript: 'delete.php',
	    preview: true,
	    captions: true,
	    captionPlaceholder: 'Type caption for image (optional)',
	    autoGrid: 3,
	    fileUploadOptions: { // See https://github.com/blueimp/jQuery-File-Upload/wiki/Options
	        url: 'upload.php',
	        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
	    },
	    styles: {
	        wide: {
	            label: '<span class="fa fa-align-justify"></span>'
	        },
	        // added: function ($el) {},
	        // removed: function ($el) {}
	        left: {
	            label: '<span class="fa fa-align-left"></span>'
	        },
	        // added: function ($el) {},
	        // removed: function ($el) {}
	        right: {
	            label: '<span class="fa fa-align-right"></span>'
	        },
	        // added: function ($el) {},
	        // removed: function ($el) {}
	        grid: {
	            label: '<span class="fa fa-th"></span>'
	        }
	    },
	    // added: function ($el) {},
	    // removed: function ($el) {}
	    actions: {
	        remove: {
	            label: '<span class="fa fa-times"></span>',
	            clicked: function clicked() {
	                var $event = $.Event('keydown');
	
	                $event.which = 8;
	                $(document).trigger($event);
	            }
	        }
	    },
	    sorting: function sorting() {
	        var that = this;
	
	        $('.medium-insert-images').sortable({
	            group: 'medium-insert-images',
	            containerSelector: '.medium-insert-images',
	            itemSelector: 'figure',
	            placeholder: '<figure class="placeholder">',
	            handle: 'img',
	            nested: false,
	            vertical: false,
	            afterMove: function afterMove() {
	                that.$el.trigger('input');
	            }
	        });
	    },
	    messages: {
	        acceptFileTypesError: 'This file is not in a supported format: ',
	        maxFileSizeError: 'This file is too big: '
	    }
	    // uploadCompleted: function ($el, data) {}
	};
	module.exports = exports['default'];

/***/ },
/* 33 */
/*!**************************!*\
  !*** ./src/js/embeds.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _templates = __webpack_require__(/*! templates */ 2);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	var _constants = __webpack_require__(/*! constants */ 31);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	/**
	 * Embeds object
	 *
	 * Sets options, variables and calls init() function
	 *
	 * @constructor
	 * @param {DOM} el - DOM element to init the plugin on
	 * @param {object} options - Options to override defaults
	 * @return {void}
	 */
	
	var Embeds = (function () {
	    function Embeds(el, options) {
	        _classCallCheck(this, Embeds);
	
	        this._name = _constants2['default'].PLUGIN_NAME;
	        this.el = el;
	        this.$el = $(el);
	
	        this.core = this.$el.data('plugin_' + this._name);
	
	        this.options = $.extend(true, {}, defaults, options);
	        this._defaults = defaults;
	
	        // Extend editor's functions
	        if (this.core.getEditor()) {
	            this.core.getEditor()._serializePreEmbeds = this.core.getEditor().serialize;
	            this.core.getEditor().serialize = this.editorSerialize;
	        }
	
	        this.init();
	    }
	
	    /**
	     * Initialization
	     *
	     * @return {void}
	     */
	
	    _createClass(Embeds, [{
	        key: 'init',
	        value: function init() {
	            var $embeds = this.$el.find('.medium-insert-embeds');
	
	            $embeds.attr('contenteditable', false);
	            $embeds.each(function () {
	                if ($(this).find('.medium-insert-embeds-overlay').length === 0) {
	                    $(this).append($('<div />').addClass('medium-insert-embeds-overlay'));
	                }
	            });
	
	            this.events();
	            this.backwardsCompatibility();
	        }
	
	        /**
	         * Event listeners
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'events',
	        value: function events() {
	            $(document).on('click', $.proxy(this, 'unselectEmbed')).on('keydown', $.proxy(this, 'removeEmbed')).on('click', '.medium-insert-embeds-toolbar .medium-editor-action', $.proxy(this, 'toolbarAction')).on('click', '.medium-insert-embeds-toolbar2 .medium-editor-action', $.proxy(this, 'toolbar2Action'));
	
	            this.$el.on('keyup click paste', $.proxy(this, 'togglePlaceholder')).on('keydown', $.proxy(this, 'processLink')).on('click', '.medium-insert-embeds-overlay', $.proxy(this, 'selectEmbed')).on('contextmenu', '.medium-insert-embeds-placeholder', $.proxy(this, 'fixRightClickOnPlaceholder'));
	        }
	
	        /**
	         * Replace v0.* class names with new ones, wrap embedded content to new structure
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'backwardsCompatibility',
	        value: function backwardsCompatibility() {
	            var that = this;
	
	            this.$el.find('.mediumInsert-embeds').removeClass('mediumInsert-embeds').addClass('medium-insert-embeds');
	
	            this.$el.find('.medium-insert-embeds').each(function () {
	                if ($(this).find('.medium-insert-embed').length === 0) {
	                    $(this).after(that.templates['src/js/templates/embeds-wrapper.hbs']({
	                        html: $(this).html()
	                    }));
	                    $(this).remove();
	                }
	            });
	        }
	
	        /**
	         * Extend editor's serialize function
	         *
	         * @return {object} Serialized data
	         */
	    }, {
	        key: 'editorSerialize',
	        value: function editorSerialize() {
	            var data = this._serializePreEmbeds();
	
	            $.each(data, function (key) {
	                var $data = $('<div />').html(data[key].value);
	
	                $data.find('.medium-insert-embeds').removeAttr('contenteditable');
	                $data.find('.medium-insert-embeds-overlay').remove();
	
	                data[key].value = $data.html();
	            });
	
	            return data;
	        }
	
	        /**
	         * Add embedded element
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'add',
	        value: function add() {
	            var $place = this.$el.find('.medium-insert-active');
	
	            // Fix #132
	            // Make sure that the content of the paragraph is empty and <br> is wrapped in <p></p> to avoid Firefox problems
	            $place.html(_templates2['default']['core-empty-line.hbs']().trim());
	
	            // Replace paragraph with div to prevent #124 issue with pasting in Chrome,
	            // because medium editor wraps inserted content into paragraph and paragraphs can't be nested
	            if ($place.is('p')) {
	                $place.replaceWith('<div class="medium-insert-active">' + $place.html() + '</div>');
	                $place = this.$el.find('.medium-insert-active');
	                this.core.moveCaret($place);
	            }
	
	            $place.addClass('medium-insert-embeds medium-insert-embeds-input medium-insert-embeds-active');
	
	            this.togglePlaceholder({ target: $place.get(0) });
	
	            $place.click();
	            this.core.hideButtons();
	        }
	
	        /**
	         * Toggles placeholder
	         *
	         * @param {Event} e
	         * @return {void}
	         */
	    }, {
	        key: 'togglePlaceholder',
	        value: function togglePlaceholder(e) {
	            var $place = $(e.target),
	                selection = window.getSelection(),
	                range = undefined,
	                $current = undefined,
	                text = undefined;
	
	            if (!selection || selection.rangeCount === 0) {
	                return;
	            }
	
	            range = selection.getRangeAt(0);
	            $current = $(range.commonAncestorContainer);
	
	            if ($current.hasClass('medium-insert-embeds-active')) {
	                $place = $current;
	            } else if ($current.closest('.medium-insert-embeds-active').length) {
	                $place = $current.closest('.medium-insert-embeds-active');
	            }
	
	            if ($place.hasClass('medium-insert-embeds-active')) {
	
	                text = $place.text().trim();
	
	                if (text === '' && $place.hasClass('medium-insert-embeds-placeholder') === false) {
	                    $place.addClass('medium-insert-embeds-placeholder').attr('data-placeholder', this.options.placeholder);
	                } else if (text !== '' && $place.hasClass('medium-insert-embeds-placeholder')) {
	                    $place.removeClass('medium-insert-embeds-placeholder').removeAttr('data-placeholder');
	                }
	            } else {
	                this.$el.find('.medium-insert-embeds-active').remove();
	            }
	        }
	
	        /**
	         * Right click on placeholder in Chrome selects whole line. Fix this by placing caret at the end of line
	         *
	         * @param {Event} e
	         * @return {void}
	         */
	    }, {
	        key: 'fixRightClickOnPlaceholder',
	        value: function fixRightClickOnPlaceholder(e) {
	            this.core.moveCaret($(e.target));
	        }
	
	        /**
	         * Process link
	         *
	         * @param {Event} e
	         * @return {void}
	         */
	    }, {
	        key: 'processLink',
	        value: function processLink(e) {
	            var $place = this.$el.find('.medium-insert-embeds-active'),
	                url = undefined;
	
	            if (!$place.length) {
	                return;
	            }
	
	            url = $place.text().trim();
	
	            // Return empty placeholder on backspace, delete or enter
	            if (url === '' && [8, 46, 13].indexOf(e.which) !== -1) {
	                $place.remove();
	                return;
	            }
	
	            if (e.which === 13) {
	                e.preventDefault();
	                e.stopPropagation();
	
	                if (this.options.oembedProxy) {
	                    this.oembed(url);
	                } else {
	                    this.parseUrl(url);
	                }
	            }
	        }
	
	        /**
	         * Get HTML via oEmbed proxy
	         *
	         * @param {string} url
	         * @return {void}
	         */
	    }, {
	        key: 'oembed',
	        value: function oembed(url) {
	            var that = this;
	
	            $.support.cors = true;
	
	            $.ajax({
	                crossDomain: true,
	                cache: false,
	                url: this.options.oembedProxy,
	                dataType: 'json',
	                data: {
	                    url: url
	                },
	                success: function success(data) {
	                    var html = data && data.html;
	
	                    if (data && !data.html && data.type === 'photo' && data.url) {
	                        html = '<img src="' + data.url + '" alt="">';
	                    }
	
	                    $.proxy(that, 'embed', html)();
	                },
	                error: function error(jqXHR, textStatus, errorThrown) {
	                    var responseJSON = (function () {
	                        try {
	                            return JSON.parse(jqXHR.responseText);
	                        } catch (e) {}
	                    })();
	
	                    if (typeof window.console !== 'undefined') {
	                        window.console.log(responseJSON && responseJSON.error || jqXHR.status || errorThrown.message);
	                    } else {
	                        window.alert('Error requesting media from ' + that.options.oembedProxy + ' to insert: ' + errorThrown + ' (response status: ' + jqXHR.status + ')');
	                    }
	
	                    $.proxy(that, 'convertBadEmbed', url)();
	                }
	            });
	        }
	
	        /**
	         * Get HTML using regexp
	         *
	         * @param {string} url
	         * @return {void}
	         */
	    }, {
	        key: 'parseUrl',
	        value: function parseUrl(url) {
	            var html = undefined;
	
	            if (!new RegExp(['youtube', 'youtu.be', 'vimeo', 'instagram'].join('|')).test(url)) {
	                $.proxy(this, 'convertBadEmbed', url)();
	                return false;
	            }
	
	            html = url.replace(/\n?/g, '').replace(/^((http(s)?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|v\/)?)([a-zA-Z0-9\-_]+)(.*)?$/, '<div class="video video-youtube"><iframe width="420" height="315" src="//www.youtube.com/embed/$7" frameborder="0" allowfullscreen></iframe></div>').replace(/^https?:\/\/vimeo\.com(\/.+)?\/([0-9]+)$/, '<div class="video video-vimeo"><iframe src="//player.vimeo.com/video/$2" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>')
	            //.replace(/^https:\/\/twitter\.com\/(\w+)\/status\/(\d+)\/?$/, '<blockquote class="twitter-tweet" align="center" lang="en"><a href="https://twitter.com/$1/statuses/$2"></a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>')
	            //.replace(/^https:\/\/www\.facebook\.com\/(video.php|photo.php)\?v=(\d+).+$/, '<div class="fb-post" data-href="https://www.facebook.com/photo.php?v=$2"><div class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/photo.php?v=$2">Post</a></div></div>')
	            .replace(/^https?:\/\/instagram\.com\/p\/(.+)\/?$/, '<span class="instagram"><iframe src="//instagram.com/p/$1/embed/" width="612" height="710" frameborder="0" scrolling="no" allowtransparency="true"></iframe></span>');
	
	            this.embed(/<("[^"]*"|'[^']*'|[^'">])*>/.test(html) ? html : false);
	        }
	
	        /**
	         * Add html to page
	         *
	         * @param {string} html
	         * @return {void}
	         */
	    }, {
	        key: 'embed',
	        value: function embed(html) {
	            var $place = this.$el.find('.medium-insert-embeds-active');
	
	            if (!html) {
	                alert('Incorrect URL format specified');
	                return false;
	            } else {
	                $place.after(_templates2['default']['embeds-wrapper.hbs']({
	                    html: html
	                }));
	                $place.remove();
	
	                this.$el.trigger('input');
	
	                if (html.indexOf('facebook') !== -1) {
	                    if (typeof FB !== 'undefined') {
	                        setTimeout(function () {
	                            FB.XFBML.parse();
	                        }, 2000);
	                    }
	                }
	            }
	        }
	
	        /**
	         * Convert bad oEmbed content to an actual line.
	         * Instead of displaying the error message we convert the bad embed
	         *
	         * @param {string} content Bad content
	         *
	         * @return {void}
	         */
	    }, {
	        key: 'convertBadEmbed',
	        value: function convertBadEmbed(content) {
	            var $place = undefined,
	                $empty = undefined,
	                $content = undefined,
	                emptyTemplate = _templates2['default']['core-empty-line.hbs']().trim();
	
	            $place = this.$el.find('.medium-insert-embeds-active');
	
	            // convert embed node to an empty node and insert the bad embed inside
	            $content = $(emptyTemplate);
	            $place.before($content);
	            $place.remove();
	            $content.html(content);
	
	            // add an new empty node right after to simulate Enter press
	            $empty = $(emptyTemplate);
	            $content.after($empty);
	
	            this.$el.trigger('input');
	
	            this.core.moveCaret($place);
	        }
	
	        /**
	         * Select clicked embed
	         *
	         * @param {Event} e
	         * @returns {void}
	         */
	    }, {
	        key: 'selectEmbed',
	        value: function selectEmbed(e) {
	            var _this = this;
	
	            if (this.core.options.enabled) {
	                (function () {
	                    var $embed = $(e.target).hasClass('medium-insert-embeds') ? $(e.target) : $(e.target).closest('.medium-insert-embeds'),
	                        that = _this;
	
	                    $embed.addClass('medium-insert-embeds-selected');
	
	                    setTimeout(function () {
	                        that.addToolbar();
	
	                        if (that.options.captions) {
	                            that.core.addCaption($embed.find('figure'), that.options.captionPlaceholder);
	                        }
	                    }, 50);
	                })();
	            }
	        }
	
	        /**
	         * Unselect selected embed
	         *
	         * @param {Event} e
	         * @returns {void}
	         */
	    }, {
	        key: 'unselectEmbed',
	        value: function unselectEmbed(e) {
	            var $el = $(e.target).hasClass('medium-insert-embeds') ? $(e.target) : $(e.target).closest('.medium-insert-embeds'),
	                $embed = this.$el.find('.medium-insert-embeds-selected');
	
	            if ($el.hasClass('medium-insert-embeds-selected')) {
	                $embed.not($el).removeClass('medium-insert-embeds-selected');
	                $('.medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2').remove();
	                this.core.removeCaptions($el.find('figcaption'));
	
	                if ($(e.target).is('.medium-insert-caption-placeholder') || $(e.target).is('figcaption')) {
	                    $el.removeClass('medium-insert-embeds-selected');
	                    this.core.removeCaptionPlaceholder($el.find('figure'));
	                }
	                return;
	            }
	
	            $embed.removeClass('medium-insert-embeds-selected');
	            $('.medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2').remove();
	
	            if ($(e.target).is('.medium-insert-caption-placeholder')) {
	                this.core.removeCaptionPlaceholder($el.find('figure'));
	            } else if ($(e.target).is('figcaption') === false) {
	                this.core.removeCaptions();
	            }
	        }
	
	        /**
	         * Remove embed
	         *
	         * @param {Event} e
	         * @returns {void}
	         */
	    }, {
	        key: 'removeEmbed',
	        value: function removeEmbed(e) {
	            var $embed = undefined,
	                $empty = undefined;
	
	            if (e.which === 8 || e.which === 46) {
	                $embed = this.$el.find('.medium-insert-embeds-selected');
	
	                if ($embed.length) {
	                    e.preventDefault();
	
	                    $('.medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2').remove();
	
	                    $empty = $(_templates2['default']['core-empty-line.hbs']().trim());
	                    $embed.before($empty);
	                    $embed.remove();
	
	                    // Hide addons
	                    this.core.hideAddons();
	
	                    this.core.moveCaret($empty);
	                    this.$el.trigger('input');
	                }
	            }
	        }
	
	        /**
	         * Adds embed toolbar to editor
	         *
	         * @returns {void}
	         */
	    }, {
	        key: 'addToolbar',
	        value: function addToolbar() {
	            var $embed = this.$el.find('.medium-insert-embeds-selected'),
	                active = false,
	                $toolbar = undefined,
	                $toolbar2 = undefined,
	                top = undefined;
	
	            if ($embed.length === 0) {
	                return;
	            }
	
	            $('body').append(_templates2['default']['embeds-toolbar.hbs']({
	                styles: this.options.styles,
	                actions: this.options.actions
	            }).trim());
	
	            $toolbar = $('.medium-insert-embeds-toolbar');
	            $toolbar2 = $('.medium-insert-embeds-toolbar2');
	
	            top = $embed.offset().top - $toolbar.height() - 8 - 2 - 5; // 8px - hight of an arrow under toolbar, 2px - height of an embed outset, 5px - distance from an embed
	            if (top < 0) {
	                top = 0;
	            }
	
	            $toolbar.css({
	                top: top,
	                left: $embed.offset().left + $embed.width() / 2 - $toolbar.width() / 2
	            }).show();
	
	            $toolbar2.css({
	                top: $embed.offset().top + 2, // 2px - distance from a border
	                left: $embed.offset().left + $embed.width() - $toolbar2.width() - 4 // 4px - distance from a border
	            }).show();
	
	            $toolbar.find('button').each(function () {
	                if ($embed.hasClass('medium-insert-embeds-' + $(this).data('action'))) {
	                    $(this).addClass('medium-editor-button-active');
	                    active = true;
	                }
	            });
	
	            if (active === false) {
	                $toolbar.find('button').first().addClass('medium-editor-button-active');
	            }
	        }
	
	        /**
	         * Fires toolbar action
	         *
	         * @param {Event} e
	         * @returns {void}
	         */
	    }, {
	        key: 'toolbarAction',
	        value: function toolbarAction(e) {
	            var $button = $(e.target).is('button') ? $(e.target) : $(e.target).closest('button'),
	                $li = $button.closest('li'),
	                $ul = $li.closest('ul'),
	                $lis = $ul.find('li'),
	                $embed = this.$el.find('.medium-insert-embeds-selected'),
	                that = this;
	
	            $button.addClass('medium-editor-button-active');
	            $li.siblings().find('.medium-editor-button-active').removeClass('medium-editor-button-active');
	
	            $lis.find('button').each(function () {
	                var className = 'medium-insert-embeds-' + $(this).data('action');
	
	                if ($(this).hasClass('medium-editor-button-active')) {
	                    $embed.addClass(className);
	
	                    if (that.options.styles[$(this).data('action')].added) {
	                        that.options.styles[$(this).data('action')].added($embed);
	                    }
	                } else {
	                    $embed.removeClass(className);
	
	                    if (that.options.styles[$(this).data('action')].removed) {
	                        that.options.styles[$(this).data('action')].removed($embed);
	                    }
	                }
	            });
	
	            this.$el.trigger('input');
	        }
	
	        /**
	         * Fires toolbar2 action
	         *
	         * @param {Event} e
	         * @returns {void}
	         */
	    }, {
	        key: 'toolbar2Action',
	        value: function toolbar2Action(e) {
	            var $button = $(e.target).is('button') ? $(e.target) : $(e.target).closest('button'),
	                callback = this.options.actions[$button.data('action')].clicked;
	
	            if (callback) {
	                callback(this.$el.find('.medium-insert-embeds-selected'));
	            }
	
	            this.$el.trigger('input');
	        }
	    }]);
	
	    return Embeds;
	})();
	
	exports['default'] = Embeds;
	
	var defaults = {
	    label: '<span class="fa fa-youtube-play"></span>',
	    placeholder: 'Paste a YouTube, Vimeo, Facebook, Twitter or Instagram link and press Enter',
	    oembedProxy: 'http://medium.iframe.ly/api/oembed?iframe=1',
	    captions: true,
	    captionPlaceholder: 'Type caption (optional)',
	    styles: {
	        wide: {
	            label: '<span class="fa fa-align-justify"></span>'
	        },
	        // added: function ($el) {},
	        // removed: function ($el) {}
	        left: {
	            label: '<span class="fa fa-align-left"></span>'
	        },
	        // added: function ($el) {},
	        // removed: function ($el) {}
	        right: {
	            label: '<span class="fa fa-align-right"></span>'
	        }
	    },
	    // added: function ($el) {},
	    // removed: function ($el) {}
	    actions: {
	        remove: {
	            label: '<span class="fa fa-times"></span>',
	            clicked: function clicked() {
	                var $event = $.Event('keydown');
	
	                $event.which = 8;
	                $(document).trigger($event);
	            }
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 34 */
/*!***************************************************!*\
  !*** ./src/sass/medium-editor-insert-plugin.scss ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader!./medium-editor-insert-plugin.scss */ 35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 37)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./medium-editor-insert-plugin.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./medium-editor-insert-plugin.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/*!**********************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./src/sass/medium-editor-insert-plugin.scss ***!
  \**********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 36)();
	// imports
	
	
	// module
	exports.push([module.id, ".medium-insert-images, .mediumInsert {\n  text-align: center; }\n  .medium-insert-images figure, .mediumInsert figure {\n    margin: 0;\n    display: block; }\n    .medium-insert-images figure img, .mediumInsert figure img {\n      max-width: 100%;\n      margin-top: 1em;\n      vertical-align: top; }\n    .medium-insert-images figure:first-child img, .mediumInsert figure:first-child img {\n      margin-top: 0; }\n  .medium-insert-images.medium-insert-images-left, .medium-insert-images-left.mediumInsert, .mediumInsert.small {\n    max-width: 33.33%;\n    float: left;\n    margin: 0 30px 20px 0; }\n  .medium-insert-images.medium-insert-images-right, .medium-insert-images-right.mediumInsert {\n    max-width: 33.33%;\n    float: right;\n    margin: 0 0 20px 30px; }\n  .medium-insert-images.medium-insert-images-grid, .medium-insert-images-grid.mediumInsert {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: center;\n    margin: 0.5em -0.5em; }\n    .medium-insert-images.medium-insert-images-grid figure, .medium-insert-images-grid.mediumInsert figure {\n      width: 33.33%;\n      display: inline-block; }\n      .medium-insert-images.medium-insert-images-grid figure img, .medium-insert-images-grid.mediumInsert figure img {\n        max-width: calc(100% - 1em);\n        margin: 0.5em; }\n\n.medium-insert-embeds, .mediumInsert-embeds {\n  text-align: center;\n  margin: 1em 0;\n  position: relative; }\n  .medium-insert-embeds iframe, .mediumInsert-embeds iframe {\n    margin: 0 auto !important; }\n  .medium-insert-embeds div, .mediumInsert-embeds div {\n    margin: 0 auto !important; }\n  .medium-insert-embeds.medium-insert-embeds-left, .medium-insert-embeds-left.mediumInsert-embeds {\n    width: 33.33%;\n    float: left;\n    margin: 0 30px 20px 0; }\n  .medium-insert-embeds.medium-insert-embeds-right, .medium-insert-embeds-right.mediumInsert-embeds {\n    width: 33.33%;\n    float: right;\n    margin: 0 0 20px 30px; }\n\n.medium-insert-images figure, .mediumInsert figure, .medium-insert-embeds figure, .mediumInsert-embeds figure {\n  position: relative; }\n  .medium-insert-images figure figcaption, .mediumInsert figure figcaption, .medium-insert-embeds figure figcaption, .mediumInsert-embeds figure figcaption {\n    position: relative;\n    z-index: 1;\n    display: block;\n    text-align: center;\n    margin: 10px 0;\n    color: #ccc;\n    font-size: 0.8em;\n    font-style: italic;\n    outline: 0 solid transparent; }\n    .medium-insert-images figure figcaption:focus, .mediumInsert figure figcaption:focus, .medium-insert-embeds figure figcaption:focus, .mediumInsert-embeds figure figcaption:focus {\n      outline: 0 solid transparent; }\n\n.medium-editor-insert-plugin {\n  outline: 0 solid transparent; }\n  .medium-editor-insert-plugin:focus {\n    outline: 0 solid transparent; }\n  .medium-editor-insert-plugin .clearfix:before, .medium-editor-insert-plugin:before, .medium-editor-insert-plugin .clearfix:after, .medium-editor-insert-plugin:after {\n    content: \" \";\n    display: table;\n    clear: both; }\n  .medium-editor-insert-plugin p {\n    margin: 1em 0; }\n  .medium-editor-insert-plugin progress {\n    display: block;\n    margin: 1em auto; }\n  .medium-editor-insert-plugin .hide {\n    display: none; }\n  .medium-editor-insert-plugin.medium-editor-placeholder:after {\n    padding: 1em 0; }\n  .medium-editor-insert-plugin .medium-insert-buttons {\n    position: absolute;\n    color: #ddd;\n    font-size: 0.9em; }\n    .medium-editor-insert-plugin .medium-insert-buttons a {\n      text-decoration: underline;\n      cursor: pointer; }\n    .medium-editor-insert-plugin .medium-insert-buttons .medium-insert-buttons-show {\n      box-sizing: border-box;\n      display: block;\n      width: 32px;\n      height: 32px;\n      margin-top: -5px;\n      border-radius: 20px;\n      border: 1px solid;\n      font-size: 25px;\n      line-height: 28px;\n      text-align: center;\n      text-decoration: none;\n      background: #fff;\n      transform: rotate(0);\n      transition: transform 100ms; }\n      .medium-editor-insert-plugin .medium-insert-buttons .medium-insert-buttons-show.medium-insert-buttons-rotate {\n        transition: transform 250ms;\n        transform: rotate(45deg); }\n    .medium-editor-insert-plugin .medium-insert-buttons .medium-insert-buttons-addons {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n      display: none;\n      position: relative;\n      z-index: 2;\n      left: 55px;\n      top: -32px; }\n      .medium-editor-insert-plugin .medium-insert-buttons .medium-insert-buttons-addons li {\n        display: inline-block; }\n        .medium-editor-insert-plugin .medium-insert-buttons .medium-insert-buttons-addons li a {\n          background-color: #fff;\n          box-sizing: border-box;\n          display: inline-block;\n          margin: 0 5px;\n          width: 32px;\n          height: 32px;\n          border-radius: 20px;\n          border: 1px solid;\n          font-size: 20px;\n          line-height: 28px;\n          text-align: center; }\n          .medium-editor-insert-plugin .medium-insert-buttons .medium-insert-buttons-addons li a .fa {\n            font-size: 15px; }\n\n.medium-insert-caption-placeholder {\n  position: relative; }\n  .medium-insert-caption-placeholder:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    text-align: center;\n    content: attr(data-placeholder); }\n\n.dragging {\n  cursor: move; }\n\n.medium-insert-image-active {\n  outline: 2px solid #000; }\n\n.medium-insert-images-toolbar {\n  display: none; }\n\n.medium-insert-images, .mediumInsert {\n  margin: 1em 0; }\n  .medium-insert-images .dragged, .mediumInsert .dragged {\n    position: absolute;\n    top: 0;\n    opacity: .5;\n    z-index: 2000; }\n  .medium-insert-images .placeholder, .mediumInsert .placeholder {\n    position: relative;\n    margin: 0;\n    padding: 0;\n    border: none; }\n  .medium-insert-images .medium-insert-images-progress, .mediumInsert .medium-insert-images-progress {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    background: rgba(255, 255, 255, 0.4); }\n\n.medium-insert-embeds-input {\n  position: relative;\n  color: #ccc;\n  z-index: 1;\n  text-align: left; }\n\n.medium-insert-embeds-placeholder {\n  position: relative; }\n  .medium-insert-embeds-placeholder:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: attr(data-placeholder);\n    color: #ccc; }\n\n.medium-insert-embeds-selected .medium-insert-embed {\n  outline: 2px solid #000; }\n\n.medium-insert-embeds-toolbar {\n  display: none; }\n\n.medium-insert-embeds .medium-insert-embeds-overlay, .mediumInsert-embeds .medium-insert-embeds-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0; }\n", ""]);
	
	// exports


/***/ },
/* 36 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";
	
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 37 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=medium-editor-insert-plugin.js.map