new Vue({
  el: "#vue-app",
  data: {
    name: "Sulay",
    job: "Artist",
    website: "https://sulaysumaria.github.io",
    websiteTag:
      '<a href="https://sulaysumaria.github.io" target="_blank">Sulay Sumaria</a>',
    age: 23,
    x: 0,
    y: 0
  },
  methods: {
    greet(time) {
      return `Good ${time}, ${this.name}`;
    },
    addYear(years) {
      this.age += years;
    },
    subtractYear(years) {
      this.age -= years;
    },
    updateXY(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click() {
      alert("You clicked me");
    },
    logName() {
      console.log("You have entered name.");
    },
    logAge() {
      console.log("You have entered age.");
    }
  }
});
