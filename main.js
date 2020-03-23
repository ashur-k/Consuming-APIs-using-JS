const baseURL = "https://swapi.co/api/";
function getData(type, cb){
    var xhr = new XMLHttpRequest(); //inbuild object java allow us to consume API
    xhr.open ("GET", baseURL + type + "/");
    xhr.send();
// we are starting a function which checks whenever states open that ready state is 4 and status is 200
xhr.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
        
        
    //     document.getElementById("data").innerHTML = this.responseText;
    //    console.log(typeof(this.responseText));
    //  console.log(typeof(JSON.parse(this.responseText)));
    //console.log(JSON.parse(this.responseText));
    //data = this.responseText;
    }   

};

}
function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<td>${key}</td>`);
    });

    return`<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = "";
    getData(type, function(data){
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);
        
        data.forEach (function(item){
                var dataRow = [];

                Object.keys(item).forEach(function(key){
                    var rowData = item[key].toString();
                    var truncattedData = rowData.substring(0, 15)

                        dataRow.push(`<td>${truncattedData}</td>`)
                });
                tableRows.push(`<tr>${dataRow}</tr>`);
                
               // el.innerHTML += "<h6>" + item.name + "</h6>";
        });
            el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`
 
    });
}
