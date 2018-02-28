/**
 * @projectname Gulp-webpack
 *
 * @fileoverview main file, holds all our imports. This file is the entry file for Webpack. 
 * Bundle.js (same directory) is the compiled version (use this one in production).
 *
 * Yaro Schiffelers (c) 2018
 * www.github.com/yaroschiffelers
 */

'use strict'

/**
 * Imports
 */

/* Utility functions */
require('./util/util.js')

/* Components */
require('./components/storage/webstorage.js')