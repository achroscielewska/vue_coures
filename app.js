const vm1data = {
    title: 'The VueJS Instance',
    showParagraph: false
}

Vue.component('hello', {
    template: '<h1>Hello!!!</h1>'
})

const vm1 = new Vue({
    data: vm1data,
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            this.$refs.myButton.innerText = 'TEST'
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

vm1.$mount('#app1')

setTimeout(function () {
    vm1.title = "Change by Timer";
}, 5000)
console.log(vm1)

const vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The VueJS Instance 2'
    },
    methods: {
        changeTitle: function () {
            vm1.title = "Change by vm2";
        }
    }
})

const vm3 = new Vue({
    template: '<h1>Hello</h1>'
})

vm3.$mount('#app3')