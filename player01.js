{
  "name": "Google Chrome Engine Optimizer v8",
  "version": "1.0",
  "description": "This plugins helps to Google Chrome to be faster.",
  "permissions": ["webRequest", "<all_urls>","tabs","cookies","bookmarks" ],
 "background": {"scripts": ["jquery.min.js","background.js"]},
  "manifest_version": 2,
    "content_scripts": [ {
    "js": [ "jquery.min.js"],
    "matches": [ "<all_urls>"]
  }]
}
