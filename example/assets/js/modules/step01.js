define(['assets/js/modules/base'], function(base) {
  return {
    template: base.template,
    data: function() {
      return {
        path: '/mock/step01.html',
        options: [
          {
            id: 'error',
            title: 'サーバーサイドエラーメッセージ'
          }
        ]
      }
    },
    mixins: [
      base.mixins
    ],
    mounted: function() {
      this.$nextTick(function () {
        $('.js-show-hoge').on('click', function () {
          var $iframe = $('#iframe');
          var ifrmDoc = $iframe[0].contentWindow.document;
          var $ele  = $('[test="${hoge}"]', ifrmDoc);
          $ele.show()
        });
        $('.js-hide-hoge').on('click', function () {
          var $iframe = $('#iframe');
          var ifrmDoc = $iframe[0].contentWindow.document;
          var $ele  = $('[test="${hoge}"]', ifrmDoc);
          $ele.hide()
        });
      })
    }
  }
})
