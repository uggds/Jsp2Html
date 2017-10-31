define(function() {
  return {
    template: `
<div class="view">
  <div class="ui grid u-m--xs">
    <div>
      <iframe id="iframe" :src="path" height="667px" width="375px"></iframe>
    </div>
    <div class="u-display--inlineBlock">
      <div class="ui form">
        <div class="grouped fields" v-for="option in options">
          <h4 class="ui top attached block header">{{option.title}}</h4>
          <div class="ui bottom attached segment">
            <div class="field">
              <div class="ui radio checkbox" :class="'js-show-' + option.id">
                <input :id="option.id + '1'" :name="option.id" type="radio" class="custom-control-input">
                <label for="radio1">表示</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox" :class="'js-hide-' + option.id">
                <input :id="option.id + '2'" :name="option.id" type="radio" class="custom-control-input" checked>
                <label for="radio2">非表示</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
    mixins: {
      created: function() {
        this.$nextTick(function () {
          $('#iframe').on('load', function() {
            var $iframe = $('#iframe');
            var ifrmDoc = $iframe[0].contentWindow.document;
            var $ele  = $('button[type="submit"]', ifrmDoc);
            $ele.on('click', function (e) {
              e.preventDefault()
            });
          })
          $('.js-show-error').on('click', function () {
            var $iframe = $('#iframe');
            var ifrmDoc = $iframe[0].contentWindow.document;
            var $ele  = $('[test="${isError}"]', ifrmDoc);
            $ele.show()
          });
          $('.js-hide-error').on('click', function () {
            var $iframe = $('#iframe');
            var ifrmDoc = $iframe[0].contentWindow.document;
            var $ele  = $('[test="${isError}"]', ifrmDoc);
            $ele.hide()
          });
        })
      }
    }
  }
})
