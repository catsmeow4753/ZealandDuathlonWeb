Vue.createApp({
    data() {
        return {
            isShowing: false,
            bip: 104,
            name: "",
            age: null,
            ageGroup: 1,
            bike: null,
            run: null,
            duathletes: [
                {
                    bip: 100,
                    name: "Eddy Quick Feet",
                    ageGroup: 4,
                    bike: 7200,
                    run: 2100,
                    total: 9300
                },
                {
                    bip: 101,
                    name: "Heavy Peter",
                    ageGroup: 3,
                    bike: 7520,
                    run: 2190,
                    total: 9710
                },
                {
                    bip: 102,
                    name: "Big Mike",
                    ageGroup: 2,
                    bike: 7350,
                    run: 2390,
                    total: 9740
                },
                {
                    bip: 103,
                    name: "Fat Joey",
                    ageGroup: 4,
                    bike: 8256,
                    run: 2676,
                    total: 10932
                },
                {
                    bip: 104,
                    name: "Magic Thomson",
                    ageGroup: 1,
                    bike: 6475,
                    run: 2025,
                    total: 8500
                }
            ]
        }
    },
    methods: {
        show() {
            this.isShowing = !this.isShowing
        },
        create() {
            this.bip = this.bip + 1

            if (this.age < 25)
            {
                this.ageGroup = 1
            }
            else if (this.age >= 25 && this.age <= 35)
            {
                this.ageGroup = 2
            }
            else if (this.age >= 36 && this.age <= 45)
            {
                this.ageGroup = 3
            }
            else if (this.age > 45)
            {
                this.ageGroup = 4
            }

            this.duathletes.push({
                bip: this.bip,
                name: this.name,
                ageGroup: this.ageGroup,
                bike: this.bike,
                run: this.run,
                total: this.bike + this.run
            })
        },
        clear() {
            this.duathletes = []
        }
    }
}).mount("#app")