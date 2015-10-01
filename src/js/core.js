import Templates from 'templates'
import Constants from 'constants'

/**
 * Capitalize first character
 *
 * @param {string} str
 * @return {string}
 */
function ucfirst (str) {
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
export default class Core {
    constructor(el, options) {
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
        this._name = Constants.PLUGIN_NAME;

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
    init() {
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
    events() {
        var that = this;

        this.$el
            .on('dragover drop', function (e) {
                e.preventDefault();
            })
            .on('keyup click', $.proxy(this, 'toggleButtons'))
            .on('selectstart mousedown', '.medium-insert, .medium-insert-buttons', $.proxy(this, 'disableSelection'))
            .on('click', '.medium-insert-buttons-show', $.proxy(this, 'toggleAddons'))
            .on('click', '.medium-insert-action', $.proxy(this, 'addonAction'))
            .on('paste', '.medium-insert-caption-placeholder', function (e) {
                $.proxy(that, 'removeCaptionPlaceholder')($(e.target));
            });

        $(window).on('resize', $.proxy(this, 'positionButtons', null));
    }

    /**
     * Return editor instance
     *
     * @return {object} MediumEditor
     */
    getEditor() {
        return this.options.editor;
    }

    /**
     * Extend editor's serialize function
     *
     * @return {object} Serialized data
     */
    editorSerialize() {
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
    editorDestroy() {
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
    editorSetup() {
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
    editorUpdatePlaceholder(el) {
        var $clone = $(el).clone(),
            cloneHtml;

        $clone.find('.medium-insert-buttons').remove();
        cloneHtml = $clone.html()
            .replace(/^\s+|\s+$/g, '')
            .replace(/^<p( class="medium-insert-active")?><br><\/p>$/, '');

        if (!(el.querySelector('img, blockquote')) && cloneHtml === '') {
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
    deselect() {
        document.getSelection().removeAllRanges();
    }

    /**
     * Disables the plugin
     *
     * @return {void}
     */
    disable() {
        this.options.enabled = false;

        this.$el.find('.medium-insert-buttons').addClass('hide');
    }

    /**
     * Enables the plugin
     *
     * @return {void}
     */
    enable() {
        this.options.enabled = true;

        this.$el.find('.medium-insert-buttons').removeClass('hide');
    };

    /**
     * Disables selectstart mousedown events on plugin elements except images
     *
     * @return {void}
     */
    disableSelection(e) {
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
    initAddons() {
        var that = this;

        if (!this.options.addons || this.options.addons.length === 0) {
            return;
        }

        $.each(this.options.addons, function (addon, options) {
            var addonName = this._name + ucfirst(addon);

            if (options === false) {
                delete that.options.addons[addon];
                return;
            }

            that.$el[addonName](options);
            that.options.addons[addon] = that.$el.data('plugin_' + addonName).options;
        }.bind(this));
    }

    /**
     * Cleans a content of the editor
     *
     * @return {void}
     */
    clean() {
        var that = this,
            $buttons, $lastEl, $text;

        if (this.options.enabled === false) {
            return;
        }

        // Fix #39
        // After deleting all content (ctrl+A and delete) in Firefox, all content is deleted and only <br> appears
        // To force placeholder to appear, set <p><br></p> as content of the $el

        if (this.$el.html().trim() === '' || this.$el.html().trim() === '<br>') {
            this.$el.html(Templates['core-empty-line.hbs']().trim());
        }

        // Fix #29
        // Wrap content text in <p></p> to avoid Firefox problems
        $text = this.$el
            .contents()
            .filter(function () {
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
            $buttons.before(Templates['core-empty-line.hbs']().trim());
        }
    }

    /**
     * Returns HTML template of buttons
     *
     * @return {string} HTML template of buttons
     */
    getButtons() {
        if (this.options.enabled === false) {
            return;
        }

        return Templates['core-buttons.hbs']({
            addons: this.options.addons
        }).trim();
    }

    /**
     * Appends buttons at the end of the $el
     *
     * @return {void}
     */
    addButtons() {
        if (this.$el.find('.medium-insert-buttons').length === 0) {
            this.$el.append(this.getButtons());
        }
    }

    /**
     * Move buttons to current active, empty paragraph and show them
     *
     * @return {void}
     */
    toggleButtons(e) {
        var $el = $(e.target),
            selection = window.getSelection(),
            that = this,
            range, $current, $p, activeAddon;

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

            if ($p.length && (($p.text().trim() === '' && !activeAddon) || activeAddon === 'images')) {
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
    showButtons(activeAddon) {
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
    hideButtons($el) {
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
    positionButtons(activeAddon) {
        let $buttons = this.$el.find('.medium-insert-buttons'),
            $p = this.$el.find('.medium-insert-active'),
            $first = $p.find('figure:first').length ? $p.find('figure:first') : $p

        if ($p.length) {
            let $addons = $buttons.find('.medium-insert-buttons-addons')
            let addonsLeft = parseInt($addons
                .css('left'), 10)
            let buttonMarginLeft = parseInt($addons
                    .find('a:first')
                    .css('margin-left'),
                10)
            let buttonHeight = parseInt($buttons.find('.mediu'))
            let pMarginTop = parseInt($p.css('margin-top'), 10)

            let editorOffset = this.$el.offset()

            // Get the position of paragraph inside the editor.
            let pEditorOffset = {
                left: $p.offset().left - this.$el.offset().left,
                top: $p.offset().top - this.$el.offset().top
            }

            let editorPosition = this.$el.position()

            let left = pEditorOffset.left
                - addonsLeft
                - buttonMarginLeft

            // Don't let the buttons go outside the window.
            if (editorOffset.left >= 0 && left < editorOffset.left / -1) {
                left = editorOffset.left
            }

            left += editorPosition.left

            let top = pEditorOffset.top
                + editorPosition.top

            if (activeAddon) {
                if ($p.position().left !== $first.position().left) {
                    left = $first.position().left;
                }

                //top += buttonHeight / 2; // 15px offset
            }

            $buttons.css({
                left: left,
                top: top
            });
        }
    }

    /**
     * Toggles addons buttons
     *
     * @return {void}
     */
    toggleAddons() {
        this.$el.find('.medium-insert-buttons-addons').fadeToggle();
        this.$el.find('.medium-insert-buttons-show').toggleClass('medium-insert-buttons-rotate');
    }

    /**
     * Hide addons buttons
     *
     * @return {void}
     */
    hideAddons() {
        this.$el.find('.medium-insert-buttons-addons').hide();
        this.$el.find('.medium-insert-buttons-show').removeClass('medium-insert-buttons-rotate');
    }

    /**
     * Call addon's action
     *
     * @param {Event} e
     * @return {void}
     */
    addonAction(e) {
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
    moveCaret($el, position) {
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
    addCaption($el, placeholder) {
        var $caption = $el.find('figcaption');

        if ($caption.length === 0) {
            $el.append(Templates['core-caption.hbs']({
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
    removeCaptions($ignore) {
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
    removeCaptionPlaceholder($el) {
        var $caption = $el.is('figcaption') ? $el : $el.find('figcaption');

        if ($caption.length) {
            $caption
                .removeClass('medium-insert-caption-placeholder')
                .removeAttr('data-placeholder');
        }
    }
}


let defaults = {
    editor: null,
    enabled: true,
    addons: {
        images: true, // boolean or object containing configuration
        embeds: true
    }
};
