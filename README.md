# webpack port of medium-editor-insert-plugin

This is an ES6 webpack port of [medium-editor-insert-plugin][0].

[0]: https://github.com/orthes/medium-editor-insert-plugin


## Installation

```bash
npm install medium-editor-insert-plugin-webpack --save
```

## Quick Start


```javascript
import $ from 'jquery';
import 'imports?$=jquery!jquery-sortable';
import 'imports?$=jquery!blueimp-file-upload';
import activateInsertPlugin from 'medium-insert-plugin-webpack';
var editor = new MediumEditor('.editable');

activateInsertPlugin($)
```
Finally, you can initialize the insert plugin:

```javascript
$('.editable').mediumInsert({
    editor: editor
});
```

## [Documentation](https://github.com/orthes/medium-editor-insert-plugin/wiki)

- [Getting Started](https://github.com/orthes/medium-editor-insert-plugin/wiki/v1.0-Getting-Started)
- [Configuration](https://github.com/orthes/medium-editor-insert-plugin/wiki/v1.0-Configuration)
- [Server response](https://github.com/orthes/medium-editor-insert-plugin/wiki/Server-response)
- [Custom addons](https://github.com/orthes/medium-editor-insert-plugin/wiki/v1.0-Custom-addons)
- [Upgrading from v0.3](https://github.com/orthes/medium-editor-insert-plugin/wiki/v1.0-Upgrading-from-v0.3)
- [Versioning](https://github.com/orthes/medium-editor-insert-plugin/wiki/Versioning)
- [Development & Contributing](https://github.com/orthes/medium-editor-insert-plugin/wiki/Development-&-Contributing)
- [License](https://github.com/orthes/medium-editor-insert-plugin/wiki/License)
- [Author & Contributors](https://github.com/orthes/medium-editor-insert-plugin/wiki/Author-&-Contributors)

