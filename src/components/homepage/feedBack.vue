<template>
  <div class="feed_back">
    <div class="getpass_header">
      <a href="#/home/mySet/systemSet"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
      意见反馈
    </div>
    <div class="user_main">
      <div class="main_radio">
        您的反馈是:
        <form class="mui-input-group">
          <div class="mui-radio">
            <input name="radio1" type="radio" checked>
            <label>咨询</label>
          </div>
          <div class="mui-radio">
            <input name="radio1" type="radio">
            <label>建议</label>
          </div>
          <div class="mui-radio">
            <input name="radio1" type="radio">
            <label>其他</label>
          </div>
        </form>
      </div>
      <!--意见  -->
      <div class="row mui-input-row">
        <textarea id='question' v-on:keyup="call" placeholder="请详细描述你的问题和意见...">
        </textarea>
        <span id="quest_nub">0/100</span>
      </div>
    </div>
    <!-- 选填 -->
    <form class="mui-input-group">
      <div class="mui-input-row" style=" margin-top: 0.08rem;margin-bottom: 0.08rem">
        <label>邮箱(选填)
          <span style="float:right">:</span>
        </label>
        <input type="text" placeholder="以便我们给您回复">
      </div>
      <div class="mui-input-row">
        <label>其他(选填)
          <span style="float:right">:</span>
        </label>
        <input type="text" placeholder="其他联系方式(QQ或手机号)">
      </div>
    </form>
    <div class="user_but">
      <button>提交</button>
    </div>
  </div>
</template>
<script>

// import "../../../static/mui/js/feedback"
export default {
  methods: {
    call: function() {

      if ($("#question").val().length <= 100) {

        let nub = $("#question").val().length;

        $("#quest_nub").text(nub + "/100")
      }
      else {
        return false
      }
    }
  },
  mounted() {

  }
}

</script>
<style scoped>
@import "../../../static/mui/css/feedback.css";
.feed_back {
  height: 100%;
  background-color: #f3f3f3;
}

.mui-radio {
  float: left;
}

.user_main .main_radio {
  font-size: 14px;
  color: #343434;
  height: 0.77rem;
  margin-top: 0.08rem;
  background-color: #fff;
  margin-bottom: 0.08rem;
  padding-left: 0.15rem;
  padding-top: 0.07rem;
}

.user_main .main_radio form {
  margin-top: 0.16rem;
}

.mui-input-group:after {
  display: none;
}

.mui-input-group:before {
  display: none;
}

.mui-radio input[type=radio] {
  left: 0;
  top: 0;
}

.row {
  position: relative;
  background-color: #fff;
}

.row #question {
  height: 1.5rem;
  margin-bottom: 0.2rem;
  border: 0;
  border-bottom: 1px #bdbdbd dashed;
}

.row #question::-webkit-input-placeholder {
  color: #bdbdbd;
  font-size: 14px;
}

.row span {
  position: absolute;
  bottom: 0.3rem;
  right: 0.1rem;
  color: #bdbdbd;
  font-size: 14px;
}

.mui-radio label {
  padding-right: 0.1rem;
  padding-left: 0.2rem;
  width: 0.92rem;
}

.mui-radio input[type=radio]:before {
  font-size: 14px;
}

.mui-input-group {
  background-color: #f3f3f3;
}

.mui-input-group .mui-input-row {
  background-color: #fff;
}

.mui-input-group .mui-input-row:after {
  display: none;
}

.mui-input-row label {
  font-size: 14px;
  color: #333;
}

.mui-input-group input::-webkit-input-placeholder {
  font-size: 14px;
  color: #999;
}
.mui-input-group input {
   font-size: 14px;
  color: #333;
}
.user_but {
  margin-top: 0.35rem;
}
</style>
