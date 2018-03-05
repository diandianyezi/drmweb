<template>
  <div class="main">
   <!--<video height="500" controls>
    <source :src='"/drm/media/download.do?id="+this.$route.query.id' type="video/mp4">
    您的浏览器不支持 video 标签。
   </video>-->
    <video height="500" controls v-if="done">
      <source :src="media.m3u8Path">
      您的浏览器不支持 video 标签。
     </video>
   <!-- {{media.m3u8Path}}-->
   <!-- <video height="500" controls>
      <source src="http://localhost:9000/vedio/1504763941776/CAO.m3u8" type="application/x-mpegURL">
      您的浏览器不支持 video 标签。
     </video>
-->
    <!--<video-player  class="video-player-box"
                   ref="videoPlayer"
                   :options="playerOptions"
                   :playsinline="true"
                   customEventName="customstatechangedeventname"
                   @play="onPlayerPlay($event)"
                   @pause="onPlayerPause($event)"
                   @ended="onPlayerEnded($event)"
                   @waiting="onPlayerWaiting($event)"
                   @playing="onPlayerPlaying($event)"
                   @loadeddata="onPlayerLoadeddata($event)"
                   @timeupdate="onPlayerTimeupdate($event)"
                   @canplay="onPlayerCanplay($event)"
                   @canplaythrough="onPlayerCanplaythrough($event)"

                   @statechanged="playerStateChanged($event)"
                   @ready="playerReadied">
    </video-player>-->
    <aside>
        视频信息
    </aside>
  </div>

</template>

<script>

  export default {

    data (){
      return {
        playerOptions: {
          // videojs options
          muted: true,
          autoplay: true,
          //controls: true,
          height: 640,
          width: 800,
          language: 'zh-Hant-CN',
          loop: false,
          preload: true,
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "/drm/test/testDownload.do",
//            src: "https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8",
//            type: "application/x-mpegURL",
//            src: "../../../static/test111.m3u8"
          }],
          poster: "",
        },
        media: {},
        done: false
      }
    },
    mounted (){
    	console.log(this.$route.query.id)
      this.getMediaById(this.$route.query.id);
    },

    methods: {
    	getMediaById (id){
    		this.$http.get('/drm/media/getMediaById.do', {params:{id: id}})
          .then(function(res){
          	this.done = true;
          	this.media = res.body.result;
          },function(error){

          })
          .catch(function(error){

          })
      }

    }
  }
</script>
<style>
  div.main {
    text-align: center;
  }

  aside {
    float: right;
    width: 30%;
  }
</style>
