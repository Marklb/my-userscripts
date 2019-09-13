// ==UserScript==
// @name         [Github] Octotree Toggle Old Button
// @namespace    https://userscripts.themarkthings.com
// @version      0.3
// @description  Adds a toggle button similar to the original. The new one is inconvenient and difficult to use.
// @author       Mark Berry (https://github.com/Marklb)
// @match        https://github.com/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/Marklb/my-userscripts/master/scripts/github/github-npmhub-fix.user.js
// @downloadURL  https://raw.githubusercontent.com/Marklb/my-userscripts/master/scripts/github/github-npmhub-fix.user.js
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(`
.refined-github .octotree-sidebar.octotree-github-sidebar .octotree-views .octotree-tree-view .jstree-anchor {
  color: #4183C4 !important;
}

.octotree:not(.octotree-show) .octotree-sidebar.octotree-github-sidebar .ui-resizable-e {
  width: 0px !important;
}

.octotree-sidebar .octotree-toggle {
  display: none !important;
}

.octotree-sidebar .octotree-old-btn {
  width: 34px;
  position: absolute;
  top: 10px;
  right: -44px;
}

.octotree-sidebar .octotree-old-btn::before {
  content: '\\f078';
  font-family: octicons;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  width: 16px;
  line-height: 1;
  position: relative;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
}

.octotree.octotree-show .octotree-sidebar .octotree-old-btn::before {
  transform: scale(-1, 1);
  left: -7px;
}

/* Remove footer */
.octotree-sidebar.octotree-github-sidebar {
  padding-bottom: 0 !important;
}
.octotree-sidebar.octotree-github-sidebar .octotree-footer {
  display: none !important;
}
  `)

  function waitOnElem(selector, cb) {
      const elem = document.querySelector(selector)
      if (elem) {
          cb(elem)
      } else {
          setTimeout(() => waitOnElem(selector, cb), 30)
      }
  }

  waitOnElem('.octotree-sidebar .octotree-toggle', (elem) => {
      const octotree = document.querySelector('.octotree-sidebar')
      const btn = document.createElement('button')
      btn.classList.add('octotree-old-btn')
      btn.classList.add('btn')

      const icon = document.createElement('i')
      icon.classList.add('octotree-toggle-icon')
      btn.appendChild(icon)

      octotree.appendChild(btn)

      btn.addEventListener('click', () => {
          const isPinned = !!document.querySelector('.octotree-pinned')
          const octotreePin = document.querySelector('.octotree-pin')
          octotreePin.click()
          setTimeout(() => {
              console.log('isPinned', isPinned, !!document.querySelector('.octotree-pinned'))
              if (!isPinned && !document.querySelector('.octotree-pinned')) {
                  octotreePin.click()
              }
          }, 500)
          event.preventDefault()
          event.stopImmediatePropagation()
          event.stopPropagation()
          return false
      })

      octotree.addEventListener('focusin', () => {
          setTimeout(() => {
              if (!!document.querySelector('.octotree-show') && !document.querySelector('.octotree-pinned')) {
                  const octotreePin = document.querySelector('.octotree-pin')
                  octotreePin.click()
              }
          }, 100)
      })

      btn.addEventListener('mousemove', (event) => {
          event.preventDefault()
          event.stopImmediatePropagation()
          event.stopPropagation()
          return false
      })
  })
})();