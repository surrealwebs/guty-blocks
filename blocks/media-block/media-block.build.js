/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_block_editor_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_block_editor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__media_block_editor_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_block_view_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_block_view_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__media_block_view_css__);



const {
    registerBlockType,
    Editable, // Text field - will be replaced by RichText in future updates
    InspectorControls, // allows us to add controls on the sidebar
    MediaUpload // allows us to upload images
} = wp.blocks;

registerBlockType('guty-blocks/media-block', {
    title: 'Media Item Block',
    icon: 'smiley',
    category: 'common',

    attributes: { // Somewhat like setting initial state in a react app
        content: {
            type: 'string',
            default: 'Editable block content...'
        },
        imageUrl: {
            type: 'string',
            default: null
        }
    },

    // The editor "render" function
    edit(props) {

        let { content, imageUrl, focus } = props.attributes;

        function onChangeContent(updatedContent) {
            props.setAttributes({ content: updatedContent });
        }

        function setImage(image) {
            console.log(imageUrl);
            props.setAttributes({ imageUrl: image.url });
        }

        // If an image isn't selected show the upload button
        // otherwise, show the image
        let imageSide = null;
        if (imageUrl) {
            imageSide = wp.element.createElement('img', { src: imageUrl, alt: '' });
        } else {
            imageSide = wp.element.createElement(MediaUpload, {
                type: 'image',
                onSelect: setImage,
                render: ({ open }) => wp.element.createElement(
                    'button',
                    { onClick: open },
                    'Open Media Library'
                )
            });
        }

        // Actual elements being rendered
        return [!!focus && wp.element.createElement(
            InspectorControls,
            { key: 'controls' },
            wp.element.createElement(
                'p',
                null,
                'This is where some style options can be presented for your block!'
            )
        ), wp.element.createElement(
            'div',
            { className: props.className },
            wp.element.createElement(
                'div',
                { 'class': 'left' },
                imageSide
            ),
            wp.element.createElement(
                'div',
                { 'class': 'right' },
                wp.element.createElement(Editable, {
                    key: 'editable',
                    tagName: 'p',
                    onChange: onChangeContent,
                    value: content,
                    focus: props.focus,
                    onFocus: props.setFocus
                })
            )
        )];
    },

    // The save "render" function
    save(props) {
        return wp.element.createElement(
            'div',
            { className: props.className },
            wp.element.createElement(
                'div',
                { 'class': 'left' },
                wp.element.createElement('img', { src: props.attributes.imageUrl, alt: '' })
            ),
            wp.element.createElement(
                'div',
                { 'class': 'right' },
                wp.element.createElement(
                    'p',
                    null,
                    ' ',
                    props.attributes.content,
                    ' '
                )
            )
        );
    }

});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);