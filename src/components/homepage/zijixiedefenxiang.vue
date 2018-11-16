<template>
  <div>
   
		<div id="dcontent" class="dcontent">
			<br/>
			<p class="heading">分享内容：</p>
			<textarea id="sharecontent" rows="3">什么玩意</textarea>
			<br/><br/>
			<p class="heading">分享图片：</p>
			<table style="width:100%;">
				<tbody>
					<tr>
						<td style="width:30%"><div class="button button-select" onclick="shareCameraPicture()">拍照</div></td>
						<td style="width:30%"><div class="button button-select" onclick="shareGalleryPicture()">相册选取</div></td>
						<td style="width:30%"><div class="button button-select" onclick="shareLogoPicture()">使用logo图</div></td>
					</tr>
				</tbody>
			</table>
			<img id="pic" src=""/>
			<br/>
			<div class="button" onclick="shareShow()">分 享</div>
			<div style="padding: 0.5em 1em;"><hr color="#EEE"/></div>
			<p class="heading">链接地址：</p>
			<input id="sharehref" class="sharehref" type="url" :value="params" placeholder="请输入要分享的链接地址"/>
			<p class="heading">链接标题：</p>
			<input id="sharehrefTitle" class="sharehref" type="text" value="gpos" placeholder="请输入要分享的链接标题"/>
			<p class="heading">链接描述：</p>
			<input id="sharehrefDes" class="sharehref" type="text" value="体验！" placeholder="请输入要分享的链接描述"/>
			<div class="button" onclick="shareHref()">分享链接</div>
			<br/><br/>
			<!-- <div style="padding: 0.5em 1em;"><hr color="#EEE"/></div>
			<p class="des">如果需要解除分享中绑定的用户信息，请点击解除授权：</p>
			<div class="button" onclick="cancelAuth()">解除授权</div> -->
		</div>
	
  </div>
</template>
<script>
require("../../lib/js/h5/common");
require("../../lib/js/h5/immersed");
export default {
    data(){
        return {
            params:window.location.href,
        }
    },
    methods:{
          
    },
  mounted(){
      
      var shares=null;
// H5 plus事件处理
function plusReady(){
	updateSerivces();
}
if(window.plus){
	plusReady();
}else{
	document.addEventListener('plusready', plusReady, false);
}
/**
 * 更新分享服务
 */
function updateSerivces(){
	plus.share.getServices(function(s){
		shares={};
		for(var i in s){
			var t=s[i];
			shares[t.id]=t;
        }
        alert(shares)
	}, function(e){
		outSet('获取分享服务列表失败：'+e.message);
	});
}

/**
   * 分享操作
   * @param {JSON} sb 分享操作对象s.s为分享通道对象(plus.share.ShareService)
   * @param {Boolean} bh 是否分享链接
   */
function shareAction(sb,bh) {
	outSet('分享操作：');
	if(!sb||!sb.s){
		outLine('无效的分享服务！');
		return;
	}
	var msg={content:sharecontent.value,extra:{scene:sb.x}};
	if(bh){
		msg.href=sharehref.value;
		if(sharehrefTitle&&sharehrefTitle.value!=''){
			msg.title=sharehrefTitle.value;
		}
		if(sharehrefDes&&sharehrefDes.value!=''){
			msg.content=sharehrefDes.value;
		}
		msg.thumbs=['_www/logo.png'];
		msg.pictures=['_www/logo.png'];
	}else{
		if(pic&&pic.realUrl){
			msg.pictures=[pic.realUrl];
		}
	}
	// 发送分享
	if(sb.s.authenticated){
		outLine('---已授权---');
		shareMessage(msg, sb.s);
	}else{
		outLine('---未授权---');
		sb.s.authorize(function(){
			shareMessage(msg,sb.s);
		}, function(e){
			outLine('认证授权失败：'+e.code+' - '+e.message);
		});
	}
}
/**
   * 发送分享消息
   * @param {JSON} msg
   * @param {plus.share.ShareService} s
   */
function shareMessage(msg, s){
	outLine(JSON.stringify(msg));
	s.send(msg, function(){
		outLine('分享到"'+s.description+'"成功！');
	}, function(e){
		outLine('分享到"'+s.description+'"失败: '+JSON.stringify(e));
	});
}
/**
 * 解除所有分享服务的授权
 */
// function cancelAuth(){try{
// 	outSet('解除授权：');
// 	for(var i in shares){
// 		var s=shares[i];
// 		if(s.authenticated){
// 			outLine('取消"'+s.description+'"');
// 		}
// 		s.forbid();
// 	}
// 	// 取消授权后需要更新服务列表
// 	updateSerivces();
// 	outLine('操作成功！');}catch(e){alert(e);}
// }
// 拍照添加图片分享
function shareCameraPicture(){
	outSet('拍照添加分享图片：');
	var cmr=plus.camera.getCamera();
	cmr.captureImage(function(p){
		plus.io.resolveLocalFileSystemURL(p,function(entry){
			pic.src=entry.toLocalURL();
			pic.realUrl=p;
			outLine('拍照图片：'+pic.realUrl);
		},function(e){
			outLine('读取拍照文件错误：'+e.message);
		} );
	},function(e){
		outLine('拍照失败：'+e.message);
	});
}
// 从相册添加图片分享
function shareGalleryPicture(){
	outSet('从相册添加分享图片：');
	plus.gallery.pick(function(p){
		// 从相册返回的路径不需要转换可以直接使用
		pic.src=p;
		pic.realUrl=pic.src;
		outLine('选择图片：'+pic.realUrl);
//      plus.io.resolveLocalFileSystemURL(p,function(entry){
//			pic.src=entry.toLocalURL();
//			pic.realUrl=pic.src;
//			outLine('选择图片：'+pic.realUrl);
//		},function(e){
//			outLine('读取拍照文件错误：'+e.message);
//		} );
    });
}

// 打开分享
function shareShow(){
	var shareBts=[];
	// 更新分享列表
	var ss=shares['weixin'];
	if(navigator.userAgent.indexOf('qihoo')<0){  //在360流应用中微信不支持分享图片
		ss&&ss.nativeClient&&(shareBts.push({title:'微信朋友圈',s:ss,x:'WXSceneTimeline'}),
		shareBts.push({title:'微信好友',s:ss,x:'WXSceneSession'}));
	}
	ss=shares['sinaweibo'];
	ss&&shareBts.push({title:'新浪微博',s:ss});
	ss=shares['qq'];
	ss&&ss.nativeClient&&shareBts.push({title:'QQ',s:ss});
	// 弹出分享列表
	shareBts.length>0?plus.nativeUI.actionSheet({title:'分享',cancel:'取消',buttons:shareBts}, function(e){
		(e.index>0)&&shareAction(shareBts[e.index-1],false);
	}):plus.nativeUI.alert('当前环境无法支持分享操作!');
}
// 分析链接
function shareHref(){
	var shareBts=[];
	// 更新分享列表
	var ss=shares['weixin'];
	ss&&ss.nativeClient&&(shareBts.push({title:'微信朋友圈',s:ss,x:'WXSceneTimeline'}),
	shareBts.push({title:'微信好友',s:ss,x:'WXSceneSession'}));
	ss=shares['qq'];
	ss&&ss.nativeClient&&shareBts.push({title:'QQ',s:ss});
	// 弹出分享列表
	shareBts.length>0?plus.nativeUI.actionSheet({title:'分享链接',cancel:'取消',buttons:shareBts},function(e){
		(e.index>0)&&shareAction(shareBts[e.index-1],true);
	}):plus.nativeUI.alert('当前环境无法支持分享链接操作!');
}
  }
}
</script>
<style scoped>
@import "../../lib/css/common.css";
</style>
