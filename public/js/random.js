var app = new Vue({
  el: '#app',
  data:
    {
      user:{
        name:"",
          email: "",
          dob: "",
          age: "",
          nat: "",
          picture:""
        }
    },
    methods: {
      fetchuser() {
        fetch("https://randomuser.me/api/")
        .then(response=>response.json().results[0])
        .then(json=>{app.user=json.results;})
    }
  },
    created(){
      this.fetchuser();
    }
  });
