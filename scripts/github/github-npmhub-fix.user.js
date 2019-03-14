// ==UserScript==
// @name         MB npmhub-deps border fix
// @namespace    https://userscripts.themarkthings.com
// @version      0.3
// @description  Fix for border lines not using correct style for github dark compatability.
// @author       Mark Berry (https://github.com/Marklb)
// @match        https://github.com/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/Marklb/my-userscripts/master/scripts/github/github-npmhub-fix.user.user.js
// @downloadURL  https://raw.githubusercontent.com/Marklb/my-userscripts/master/scripts/github/github-npmhub-fix.user.user.js
// ==/UserScript==

(function() {
  'use strict'

  //
  // npmhub-deps either has a bug or just doesn't fully support the dark theme I
  // use, so this fixed the white divider.
  //

  console.log('[MB npmhub-deps border fix] Started')

  GM_addStyle('.npmhub-deps > li { border-bottom: 1px solid #343434 !important; }')

})()
