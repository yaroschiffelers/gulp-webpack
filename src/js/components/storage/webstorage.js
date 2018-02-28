/**
 * @projectname Gulp-webpack
 *
 * @fileoverview Web storage objects
 *
 * Yaro Schiffelers (c) 2018
 * www.github.com/yaroschiffelers
 */

'use strict'

/**
 * storageAvailable - a function that detects whether localStorage is both supported and available
 *
 * Credit: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 * 
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
function storageAvailable(type) {
    try {
        let storage = window[type]
        let x = '__storage_test__'
        storage.setItem(x, x)
        storage.removeItem(x)
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0
    }
}

/**
 * Use storegeAvailable to check wheter localStorage is both available and supported
 * If it is, call our function
 * If not, return 
 * 
 * @param  {[type]} storageAvailable('localStorage') [description]
 * @return {[type]}                                  [description]
 */
if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
}
else {
  // Too bad, no localStorage for us
}