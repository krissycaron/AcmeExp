$(document).ready(function(){

    var expolsive = [];


    function writeDOM(){
        var domString = "";
        for(var i=0; i<expolsive.length; i++){
            domString += `<h1>${expolsive[i].name}</h1>`;
        }
        $("#explosiveDiv").append(domString);
    }


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


   

    //this method works the best for this solution
    Promise.all([categoriesJSON(), typesJSON(), productsJSON()])
        .then(function(resultz){
            console.log("resultz", resultz);
            resultz.forEach(function(ajaxCalls){
                ajaxCalls.forEach(function(boom){
                    expolsive.push(boom);
                })
            })
            writeDOM();
        })
});

