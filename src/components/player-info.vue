<template>
    <section class="third-wrap">
        <div class="title">
            <img src="../assets/player-title.png" alt="">
        </div>
        <div class="player-list">
            <div class="player-item" v-for="(item,index) in playerList" :key="index" v-animate>
                <div class="player-pic" v-if="index%2==0">
                    <a :href="item.url" target="_blank">
                        <img :src="item.playerPic" alt="">
                    </a>
                </div>
                <div class="player-content">
                    <div class="player-title">
                        <img :src="item.titlePic" alt="">
                    </div>
                    <div class="player-desc">{{item.desc}}</div>
                </div>
                <div class="player-pic" v-if="index%2!=0">
                    <a :href="item.url" target="_blank">
                        <img :src="item.playerPic" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                playerList:[
                    {
                        playerPic: require('../assets/xingkai.png'),
                        titlePic: require('../assets/xingkai-title.png'),
                        url: 'http://www.jiguo.com/article/article/42677.html',
                        desc: '中国MOD第一人，德国科隆游戏展国际性德国电脑机箱改造锦标赛（DCMM）世界冠军，FUXK品牌创始人。'
                    },
                    {
                        playerPic: require('../assets/maggie.png'),
                        titlePic: require('../assets/maggie-title.png'),
                        url: 'http://www.jiguo.com/article/article/29262.html',
                        desc: '知名无人机女性玩家，FunPilot社区创始人及CEO，国内首位带着无人机穿越无人区、沙漠的女飞手，曾与大疆、GoPro展开官方合作。'
                    },
                    {q
                        playerPic: require('../assets/sitan.png'),
                        titlePic: require('../assets/sitan-title.png'),
                        url: 'http://www.jiguo.com/article/article/62465.html',
                        desc: '国内资深高端音频设备玩家，国内最早的数码科技类期刊《新潮电子》特约作者。'
                    },
                    {
                        playerPic: require('../assets/yanlei.png'),
                        titlePic: require('../assets/yanlei-title.png'),
                        url: 'http://www.jiguo.com/article/article/62470.html',
                        desc: '视觉中国签约摄影师，央视纪录片特邀摄影师，四川叁眸视觉联合创始人、首席摄影师，四川摄影协会会员。'
                    }

                ]
            }
        }
    }
</script>

<style scoped>
    .third-wrap {
        margin-top: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .player-list {
        margin-top: 140px;
    }

    .player-item {
        width: 980px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 100px;
    }

    .player-content {
        width: 414px;
    }

    .player-desc {
        margin-top: 40px;
        padding: 35px 30px;
        line-height: 35px;
        font-size: 20px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.21);
    }
</style>