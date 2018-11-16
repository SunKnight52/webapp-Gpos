<template>
  <div class="share">
	   <div class="getpass_header">
             <a href="#/home/mySet"><img src="../../lib/img/icon_fanhui.png" alt=""> </a>
            分享
        </div>
		<div class="share_mai">
			<div class="barcode">
				<img src="../../lib/img/icon_ewm.png" alt="/">
				<p>长按可识别二维码</p>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.share .getpass_header {
	z-index: 3;
	background-color: #fff;
}

.share {
	width: 100%;
	height: 100%;
}
.share .share_mai {
	width: 100%;
	height: 100%;
	background-color: #5871ff;

	padding-top: 1rem;
	margin-top: -0.66rem;
	z-index: 0;
}
.share .share_mai .barcode{ 
	width: 2.7rem;
	margin: 0 auto;
	background-color: #fff;
	text-align: center;
	padding-top: 0.5rem;
	height: 4rem;

}
.share .share_mai .barcode img {
	width: 1.72rem;
	margin-bottom: 0.5rem;
}
</style>
