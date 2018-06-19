<template>
    <section class="second-page">
        <div class="video-wrap" v-animate>
            <div class="shadow">
                <h3>京东超能玩家团</h3>
            </div>
            <div class="video">
                <!--<video src="https://media.html5media.info/video.mp4"-->
                       <!--preload-->
                       <!--controls-->
                       <!--ref="video"-->
                       <!--width="812px"-->
                       <!--height="465px"-->
                       <!--@click="pause">-->
                    <!--你的浏览器不支持该视频-->
                <!--</video>-->
                <!--<div class="play" @click="play" v-show="isShowPlay"></div>-->
                <iframe frameborder="0"
                        width="812px"
                        height="465px"
                        src="https://v.qq.com/iframe/player.html?vid=m0690l8zl0z&tiny=0&auto=0"
                        allowfullscreen>
                </iframe>
            </div>
        </div>
        <div class="pic-wrap" v-animate>
            <a href="http://www.jiguo.com/article/article/62706.html" target="_blank">
                <div class="shadow"></div>
                <div class="pic-content">
                    <img src="../assets/article.jpeg"/>
                    <p class="pic-title">这个夏天不仅有世界杯！超能玩家跨界集结，教你玩转数码</p>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isShowPlay: true
            }
        },
        methods: {
            play() {
                const myVideo = this.$refs['video']
                this.isShowPlay = false
                myVideo.play()
            },
            pause() {
                const myVideo = this.$refs['video']
                this.isShowPlay = true
                myVideo.pause()
            }
        }
    }
</script>

<style scoped>
    .second-page {
        margin-top: -252px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .second-page > div {
        position: relative;
        width: 821px;
    }

    .video-wrap {
        height: 556px;
    }

    .video-wrap .shadow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../assets/video-bg.png") no-repeat center;
        background-size: 100%;
        pointer-events: none;
    }

    .video-wrap .shadow h3 {
        margin-top: 25px;
        line-height: 53px;
        text-align: center;
        font-size: 28px;
        color: #fff;
        font-weight: normal;
    }

    .video-wrap iframe {
        margin-top: 90px;
        margin-left: 4px;
    }

    .play {
        width: 77px;
        height: 77px;
        background: url("../assets/play.png") no-repeat center;
        background-size: 100% auto;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -38.5px;
        cursor: pointer;
    }

    .pic-wrap {
        height: 465px;
        margin-top: 100px;
        position: relative;
    }

    .pic-wrap .shadow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../assets/pic-shadow.png") no-repeat top center;
        background-size: 100%;
        z-index: 2;
    }

    .pic-wrap .pic-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .pic-wrap .pic-content img {
        width: 100%;
    }

    .pic-wrap .pic-title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70px;
        line-height: 70px;
        color: #fff;
        font-size: 24px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.34);
    }

    video::-webkit-media-controls-overlay-play-button{
        display: none !important;
        -webkit-appearance: none;
    }
    video::-webkit-media-controls:not(.audio-only) [pseudo="-webkit-media-controls-panel"] [pseudo="-internal-media-controls-overflow-button"]{
        display: none !important;
    }
</style>