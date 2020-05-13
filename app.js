new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://gooogle.com',
        finishedLink: '<a href="http://gooogle.com" target="_blank">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
        name: 'Agnieszka',
        myCounter: 0,
        attachRed: false,
        color: 'green',
        width: 200
    },
    computed: {
        output: function () {
            return this.myCounter > 5 ? 'Greater 5' : 'Smaller 5'
        },
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    },
    watch: {
        myCounter: function () {
            var vm = this;
            setTimeout(function () {
                vm.myCounter = 0;
            }, 2000);
        }
    },
    methods: {
        changeTitle: function (e) {
            this.title = e.target.value;
        },
        sayHello: () => {
            return "Hello TEST"
        },
        increase: function (step, event) {
            this.counter += step;
        },
        updateCoordinates: function (e) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function () {
            alert('Alert');
        },
        result: function () {
            return this.myCounter > 5 ? 'Greater 5' : 'Smaller 5'
        }

    }
});