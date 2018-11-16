<template>
    <div class="unbuy">
        <div class="getpass_header">
            <a href="#/home/index"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            未购名额
        </div>
        <div class="unbuy_main">
            <table>
                <tr>
                    <th >序号</th>
                    <th >姓名</th>
                    <th >电话</th>
                </tr>
                <tr>
                    <td >1</td>
                    <td >asda</td>
                    <td >156464646</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>asda</td>
                    <td >156464646</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>asda</td>
                    <td>156464646</td>
                </tr>

            </table>

        </div>
    </div>
</template>
<script>

export default {
    mounted() {

    }
}
</script>
<style scoped>
.unbuy {
  width: 100%;
}
.unbuy .unbuy_main {
  width: 100%;
  background-color: #f3f3f3;
  padding-top: 0.1rem;
}
.unbuy .unbuy_main table {
  text-align: center;
  width: 100%;
  background-color: #fff;
}
.unbuy .unbuy_main table tr {
  border-bottom: 1px #f3f3f3 solid;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 14px;
  color: #333;
}
.unbuy .unbuy_main table tr th,
.unbuy .unbuy_main table tr td {
  width: 25%;
}
.unbuy .unbuy_main table tr th:last-of-type,
.unbuy .unbuy_main table tr td:last-of-type {
  width: 50%;
}
.unbuy .unbuy_main table tr:first-of-type {
  border: 0;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 12px;
}

</style>
