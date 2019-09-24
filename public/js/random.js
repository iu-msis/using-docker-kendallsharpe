var app = new Vue({
  el: '#app',
  data:
    {
      user: {
        name:"",
        email: "",
        dob: {
          date: "",
          age: ""
        },
        nat: "",
        picture: {
          large: ""
        }
      }
    },
    methods: {
      fetchuser() {
        fetch("https://randomuser.me/api/")
        .then(response=>response.json())
        .then(json=>{app.user=json.results[0];});
    }
  },
    created() {
      this.fetchuser();
    }
  });
