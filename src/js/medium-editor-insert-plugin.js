import Core from 'core'
import Images from 'images'
import Embeds from 'embeds'
import Constants from 'constants'
import 'sass/medium-editor-insert-plugin.scss'


export default function init(jQuery) {
    registerCore(jQuery)
    registerImages(jQuery)
    registerEmbeds(jQuery)
}

export function registerCore($) {
    /**
     * Core
     */

    /** Plugin initialization */
    $.fn[Constants.PLUGIN_NAME] = function (options) {
        return this.each(function () {
            var that = this,
                textareaId;

            if ($(that).is('textarea')) {
                textareaId = $(that).attr('medium-editor-textarea-id');
                that = $(that).siblings('[medium-editor-textarea-id="' + textareaId + '"]').get(0);
            }

            if (!$.data(that, 'plugin_' + Constants.PLUGIN_NAME)) {
                // Plugin initialization
                $.data(that,
                    'plugin_' + Constants.PLUGIN_NAME,
                    new Core(that, options));
                $.data(that,
                    'plugin_' + Constants.PLUGIN_NAME).init();
            } else if (typeof options === 'string' && $.data(that, 'plugin_' + Constants.PLUGIN_NAME)[options]) {
                // Method call
                $.data(that, 'plugin_' + Constants.PLUGIN_NAME)[options]();
            }
        });
    };
}

export function registerImages($) {
    /**
     * Images
     */
    let addonName = 'Images' // first char is uppercase

    /** Plugin initialization */
    $.fn[Constants.PLUGIN_NAME + addonName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + Constants.PLUGIN_NAME + addonName)) {
                $.data(this, 'plugin_' + Constants.PLUGIN_NAME + addonName, new Images(this, options));
            }
        });
    };
}

export function registerEmbeds($) {
    /**
     * Embeds
     */
    let addonName = 'Embeds' // first char is uppercase

    /** Plugin initialization */
    $.fn[Constants.PLUGIN_NAME + addonName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + Constants.PLUGIN_NAME + addonName)) {
                $.data(this, 'plugin_' + Constants.PLUGIN_NAME + addonName, new Embeds(this, options));
            }
        });
    };
}
