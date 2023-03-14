fetch ("https://fakestoreapi.com/products").then((data) =>{

     return data.json();

}).then((Objectdata)=>{
    console.log(Objectdata[0].title);
     let tabledata = "";
      Objectdata.map((values) =>{
        tabledata+=`<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
      
      });
       document.getElementById("table-body").innerHTML= tabledata;

});
    