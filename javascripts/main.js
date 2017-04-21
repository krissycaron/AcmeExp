$(document).ready(function(){

    var expolsive = [];
    var productsArray = [];
    var typesArray = [];
    var categoriesArray = [];

///// Writing the induvidual cards to the DOM /////
    function writeDOM(){
        var domString = "";
        for(var i=0; i<expolsive.length; i++){
            domString += `<div class="col-sm-6 col-md-4 container">`
            domString += `<div class="row" id="card-${[i]}">`
            domString += `<h1>${expolsive[i].name}</h1>`;
            domString += `<h1>${expolsive[i].description}</h1>`;
            domString += `</div></div>`;
        }

    };
    

    //// Functions for creating the drop downs ////

    function catArrayPrint(){
        var catString = "";
            catString += `<select>`
            catString += `<option>Select Category</option>`
        for (var k=0; k<categoriesArray.length; k++){
            catString += `<option>${categoriesArray[k].name}</option>`
        }
            catString += `</select>`;
            $("#explosiveDiv").append(catString);
    
    }

    function typeArrayPrint(){
        var typeString = "";
            typeString += `<select>`
            typeString += `<option>Select Type</option>`
        for (var k=0; k<typesArray.length; k++){
            typeString += `<option>${typesArray[k].name}</option>`
        }
            typeString += `</select>`;
            $("#explosiveDiv").append(typeString);
    
    }

    function productArrayPrint(){
        var productString = "";
            productString += `<select>`
            productString += `<option>Select Product</option>`
        for (var k=0; k<productsArray.length; k++){
            productString += `<option>${productsArray[k].name}</option>`
        }
            productString += `</select>`;
            $("#explosiveDiv").append(productString);
    
    }

    writeDOM();
    

    var categoriesJSON = function(){
        return new Promise(function(resolve, reject){
            $.ajax("./db/categories.json").done(function(data1){
                resolve(data1.categories);
            }).fail(function(error1){
                reject(error1);
            })
        })
    };

    var typesJSON = function(){
        return new Promise(function(resolve, reject){
            $.ajax("./db/types.json").done(function(data2){
                resolve(data2.types);
            }).fail(function(error2){
                reject(error2);
            })
        })
    };

    var productsJSON = function(){
        return new Promise(function(resolve, reject){
            $.ajax("./db/products.json").done(function(data3){
                resolve(data3.products);
            }).fail(function(error3){
                reject(error3);
            })
        })
    };




////////////// Taking the parsed data and adding to arrays ////////////////////

        categoriesJSON().then(function(category){
            category.forEach(function(cat){
            categoriesArray.push(cat);
            })
            catArrayPrint(categoriesArray);
        });

        typesJSON().then(function(typesfile){
            typesfile.forEach(function(type){
            typesArray.push(type);
            })
            typeArrayPrint(typesArray);
        });
        productsJSON().then(function(products){
            products.forEach(function(prod){
            productsArray.push(prod);
            })
            productArrayPrint(productsArray);
        });
           console.log(productsArray); 
    
        // // writeDOM();
        // console.log(writeDOM);
    // //this method works the best for this solution
    // Promise.all([typesJSON(), productsJSON()])
    //     .then(function(results){
    //         console.log("results", results);
    //         results.forEach(function(ajaxCalls){
    //             ajaxCalls.forEach(function(boom){
    //                 expolsive.push(boom);
    //             })
    //         })
           
    //     })
});

