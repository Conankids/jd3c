<template>
    <section class="first-page">
        <div class="apply-wrap" v-animate>
            <span class="triangle left"></span>
            <a href="http://www.jiguo.com/event/index/2640.html" target="_blank" class="apply-btn">立即申请</a>
            <span class="triangle right"></span>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .first-page {
        height: 1347px;
        padding-top: 0.1px;
    }

    .apply-wrap {
        margin-top: 735px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .triangle {
        display: block;
        width: 0;
        height: 0;
        border: 10px solid transparent;
    }

    @keyframes moveLeft {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(10px, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    @keyframes moveRight {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(-10px, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    .triangle.left {
        border-left-color: #48b6f4;
        animation: moveLeft 1.2s ease-in-out infinite;
    }

    .triangle.right {
        border-right-color: #48b6f4;
        transform: translate(-10px, 0);
        animation: moveRight 1.2s ease-in-out infinite;
    }

    .apply-btn {
        display: block;
        width: 140px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        color: #183883;
        background-color: #48b6f4;
        font-size: 22px;
        border-radius: 4px;
        margin: 0 28px;
        box-shadow: 3px 4px 0 rgba(0, 0, 0, 0.2);
    }
</style>