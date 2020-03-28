 var car = {type:"Fiat", 
                model:"500", 
                color:"white"};
    document.getElementById("demo").innerHTML =
    "The car type is " + car.color;
    
    var person = {
        firstName: "Ashur",
        lastName: "Kanwal",
        id: 707,
        fullName: function ()        
        {
            return `${this.firstName} ${this.lastName}`;
        }

     
    }; 

    //alert (person.fullName());
    document.getElementById("full_n").innerHTML =  "The person type is " + person.firstName;
  
    function onClick (){
        document.getElementById("date").innerHTML=Date();
    }