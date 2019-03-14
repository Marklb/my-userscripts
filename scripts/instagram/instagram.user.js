// ==UserScript==
// @name         MB InstaDownload
// @namespace    https://userscripts.themarkthings.com
// @version      0.3
// @description  Add links to images
// @author       Mark Berry (https://github.com/Marklb)
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict'

//
// Adds direct links to the popup images in usually the original size.
//
// NOTE: This is very roughly thrown together, so you may only want to enable it
//  if you need access to a full size picture.
//

  console.log('[MB InstaDownload] Started')
  

  window.addEventListener('popstate', listener)

  const addBtns = () => {
      console.log('addBtns')
      const articles = document.querySelectorAll('article')
      if (articles.length > 1) {
          const parent = articles[1]
          const elem = parent.querySelector('.FFVAD')
          for (const set of elem.srcset.split(',')) {
              const setArr = set.split(' ')
              const url = setArr[0]
              console.log(url)

              const btn = document.createElement('div')
              btn.innerText = setArr[1]

              const parent = document.querySelectorAll('article')[1]
              console.log(parent)
              parent.appendChild(btn)

              btn.addEventListener('click', () => {
                  window.open(setArr[0])
              })
          }
      }
  }

  document.addEventListener('click', (e) => {
      console.log('click', e)
      if (e.buttons === 0) {
          console.log('click2')
          setTimeout(addBtns, 1000)
      }
  })
})()
