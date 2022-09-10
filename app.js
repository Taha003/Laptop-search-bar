let Laptops=[
    {
        BrandName:"Hp",
        Model:'x3',
        ram:'8gb',
        rom:'256gb',
        ssd:'128',
        generation:'4th'
    },
    {
        BrandName:"Hp",
        Model:'z3',
        ram:'8gb',
        rom:'500gb',
        ssd:'256',
        generation:'3rd'
    },
    {
        BrandName:"Dell",
        Model:'T3',
        ram:'8gb',
        rom:'320gb',
        ssd:'320',
        generation:'5th'
    },
    {
        BrandName:"Dell",
        Model:'F3',
        ram:'8gb',
        rom:'500gb',
        ssd:'500',
        generation:'2nd'
    },
    {
        BrandName:"Lenovo",
        Model:'M3',
        ram:'8gb',
        rom:'128gb',
        ssd:'128',
        generation:'7th'
    },
    {
        BrandName:"Lenovo",
        Model:'K3',
        ram:'8gb',
        rom:'320gb',
        ssd:'128',
        generation:'3rd'
    },


]
let laptop=document.getElementById('lapName');

let Names=Laptops.map(function(x){
    return x.BrandName;
})

console.log(Names);

//Converting duplicates Names to unique set of array:
let newUniqueNames=[...new Set(Names)];
console.log(newUniqueNames);
//set contains unique values of array

newUniqueNames.forEach(function(y){
    laptop.innerHTML+=`<option>${y}</option>`
    
})


//get models:
function dropdown(){
    mod.disabled=false;
    let laptopModels=document.getElementById('mod');
    laptopModels.innerHTML="";
    laptopModels.innerHTML=`<option>Select Model</option>`

    let x=Laptops.filter(function(value){
        return value.BrandName==`${laptop.value}`
    })
    x.forEach(function(models){
        laptopModels.innerHTML+=`<option>${models.Model}</option>`
    })
}

function srch(){
    let parent=document.getElementById('parent');
    let selectedLaptop=Laptops.filter(function(value){
        return value.Model='${laptopModels.value}'
    })
    

    selectedLaptop.forEach(function(e){
        parent.innerHTML="";
        parent.innerHTML=`<h1>Specifications</h1><hr>
        <li>Ram: ${e.ram}</li>
        <li>Storage: ${e.rom}</li>
        <li>Genration: ${e.generation}</li>
        <li>Ssd: ${e.ssd}</li>`
    })
    
    
   
    
    // console.log(selectedLaptop);
    

}


    
