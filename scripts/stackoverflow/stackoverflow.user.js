// ==UserScript==
// @name         MB StackOverflow Tweaks
// @namespace    https://userscripts.themarkthings.com
// @version      0.2
// @description  Small stackoverflow tweaks
// @author       Mark Berry
// @run-at       document-idle
// @match        http*://stackoverflow.com/questions/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict'

  console.log('[MB StackOverflow Tweaks] Started')

  GM_addStyle(`
    .post-layout--right { padding-right: 20px; }
  `)

  var tEl = Array.from(document.querySelectorAll('.nav-links .nav-links')).find(el => { return el.innerText.indexOf('Teams+Slack') !== -1 })
  if (tEl) { tEl.parentElement.style.display = 'none' }

  var lEl = document.querySelector('.post-form .form-item.new-post-login')
  if (lEl) {
    lEl.style.setProperty('padding-left', '10px', 'important')
    lEl.style.setProperty('padding-right', '10px', 'important')
  }
})()
