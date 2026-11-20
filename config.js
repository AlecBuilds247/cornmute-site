// Chrome Web Store item ID (32 letters a–p). While empty, the "Leave a review" button stays hidden.
window.CORNMUTE_ITEM_ID = '';
(function () {
  var id = window.CORNMUTE_ITEM_ID;
  if (!/^[a-p]{32}$/.test(id)) return;
  document.querySelectorAll('[data-review]').forEach(function (el) {
    el.href = 'https://chromewebstore.google.com/detail/' + id + '/reviews';
    el.hidden = false;
  });
})();
