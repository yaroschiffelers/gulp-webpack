/**
 * @projectname Gulp-webpack
 *
 * @fileoverview util.js | Helper functions 
 *
 * Yaro Schiffelers (c) 2018
 * www.github.com/yaroschiffelers
 */
'use strict'

/**
 * Extends an object 
 */
function extend(a, b) {
    for (var key in b) {
        if (b.hasOwnProperty(key)) {
            a[key] = b[key]
        }
    }
    return a
}

/**
 * Create an element (whatever type you want) with a classname and innerHTML content 
 * @param  {string} type      - the type of html element you want is to be (ex: h1)
 * @param  {string} className - the classname this element should have (ex: class="my-header" (just insert 'my-header'))
 * @param  {sting} content   - the inner HTML of the element (ex: "hello world")
 * @return {element} - an HTML element (ex: <h1 class="my-header">hello world</h1>)
 */
function createDOMEl(type, className, content) {
    var el = document.createElement(type)
    el.className = className || ''
    el.innerHTML = content || ''
    return el
}

/**
 * Make extend() globally available 
 * @type {function}
 */
window.extend = extend 

/**
 * Make createDOMEL globally available 
 * @type {[type]}
 */
window.createDOMEl = createDOMEl