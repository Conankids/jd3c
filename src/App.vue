<template>
    <div id="app">
        <MyHeader/>
        <VideoTest/>
        <PlayerTest/>
    </div>
</template>

<script>
    import MyHeader from './components/my-header'
    import VideoTest from './components/video-test'
    import PlayerTest from './components/player-info'

    export default {
        name: 'App',
        components: {
            MyHeader,
            VideoTest,
            PlayerTest
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: #0e031c;
        min-width: 1200px;
        font-size: 14px;
        color: #48b6f4;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url("./assets/header-bg.jpg"), url("./assets/bg.jpg");
        background-repeat: no-repeat;
        background-position: 50% 0, 50% 0;
    }

    .into-init {
        transform: translateY(15px);
        opacity: 0;
    }

    .into-k-animate {
        transition: all 1s;
        transform: translateY(0);
        opacity: 1;
    }
</style>
