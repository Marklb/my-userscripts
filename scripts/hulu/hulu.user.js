// ==UserScript==
// @name         MB Hulu
// @namespace    https://userscripts.themarkthings.com
// @version      0.3
// @description  My Hulu Scripts
// @author       Mark Berry (https://github.com/Marklb)
// @match        https://www.hulu.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
  'use strict'

//
// Only feature at the moment is adding pause toggling by clicking anywhere on
// the video.
//
// TODO: Improve video detection and ensure it can reattach the event listener
//  if the wait on video function fails or the player container is recreated.
// 
// TODO: Look into other features.
//

console.log('[MB Hulu] Started')

function getPlayerApp() {
  return document.querySelector('.hulu-player-app')
}

function isWatchPage() {
  const url = location.href
  return url.indexOf('hulu.com/watch/') !== 0
}

function hasPlayerApp() {
  return !!getPlayerApp()
}

function getPlaybackButton() {
  return getPlayerApp().querySelector('.controls__playback-button')
}

function getPlayerContainer() {
  return getPlayerApp().querySelector('.player-container')
}

function _playerContainerClicked(e) {
  getPlaybackButton().click()
}

function _waitOnPlayerApp(_cb) {
  if (hasPlayerApp()) {
    _cb(true)
  } else {
    setTimeout(() => {
      _waitOnPlayerApp(_cb)
    }, 30)
  }
}

async function waitOnPlayerApp() {
  return new Promise((resolve, reject) => {
    _waitOnPlayerApp((result) => {
      if (result) {
        resolve()
      } else {
        reject()
      }
    })
  })
}

async function init() {
  if (isWatchPage()) {
    waitOnPlayerApp().then(() => {
      getPlayerContainer().addEventListener('click', _playerContainerClicked, false)
    })
  }
}

init()

})()