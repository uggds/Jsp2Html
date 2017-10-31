define(['assets/js/modules/base'], function(base) {
  return {
    template: base.template,
    data: function() {
      return {
        path: '/mock/step02.html',
        options: [
          {
            id: 'error',
            title: 'サーバーサイドエラーメッセージ'
          },
        ]
      }
    },
    mixins: [
      base.mixins
    ],
  }
})
