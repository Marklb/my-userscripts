// ==UserScript==
// @name         MB Medium No Full Width
// @namespace    https://userscripts.themarkthings.com
// @version      0.3
// @description  Prevent full width sections, because they are to big on an ultra wide monitor
// @author       Mark Berry (https://github.com/Marklb)
// @match        http*://medium.com/*
// @match        *blog.angularindepth.com/*
// @match        *blog.prototypr.io/*
// @match        *journal.artfuldev.com/*
// @match        *netbasal.com/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/Marklb/my-userscripts/master/scripts/medium/medium.user.js
// @downloadURL  https://raw.githubusercontent.com/Marklb/my-userscripts/master/scripts/medium/medium.user.js
// ==/UserScript==

(function() {
  'use strict'

  // NOTE: Right now the only way to add a new medium site is to add a new
  //  match, so you are probably just better off copying the small script and
  //  maintaining your own match list.

  console.log('[MB Medium No Full Width] Started')

  GM_addStyle(`
    .section-inner.sectionLayout--fullWidth {
      max-width: 1000px;
      margin: 0 auto;
    }
  `)
})()
