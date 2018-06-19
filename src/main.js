import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

let animateElArray = []
Vue.directive('animate', {
    bind(el) {
        $(el).addClass('into-init')
        animateElArray.push(el)
    },
    unbind(el) {
        let index = animateElArray.indexOf(el)
        if (index > -1) {
            animateElArray.splice(index, 1)
        }
    },
})

new Vue({
    el: '#app',
    render: h => h(App),
    mounted() {
        var winHeight = $(window).height()
        var lastTime = 0
        $(window).on('scroll.into.animate', function () {
            if (lastTime + 30 > new Date().getTime()) {
                return
            }
            lastTime = new Date().getTime()
            var scrollTop = $(window).scrollTop()
            animateElArray.forEach((el) => {
                if ($(el).hasClass('into-k-animate')) {
                    return false
                }
                if (scrollTop + winHeight > $(el).offset().top+50) {
                    $(el).addClass('into-k-animate')
                    return false
                }
                return true
            })
        }).trigger('scroll.into.animate')
    },

})
