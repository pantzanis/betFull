// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Watch video in fullscreen');
  console.log(tab.title);

  chrome.tabs.executeScript({
    file: '/bet365_fullscreen_function.js'
  });
});