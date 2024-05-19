
const myli = document.querySelector('ul')





const showall = (productArray) => {
    let li = ''


    const newmenu = productArray.forEach(item => {


        li += `  
        <li>
        <img class="img-product" src="${item.src}">
        <p class="name-product">${item.name}</p>
        <p class="name-product preco-product">${ valueconvert(item.price)}</p>
        </li> 
        
        `
        myli.innerHTML = li

    });

}


const map = () => {

    const addiscount = menuOptions.map(item => ({

        ...item,
        price: item.price * 0.9,


    }))

    showall(addiscount)


}


const allPrices = () => {

    const sumprice = menuOptions.reduce((acc, price) => {

        return acc + price.price

    }, 0)


    myli.innerHTML = `

    <li>
    <p>o preço total é de : ${valueconvert(sumprice)}</p>
    </li> 
    `
}


const fillter = () =>{

      
const filterproduct = menuOptions.filter(product =>{

    return product.vegan ? true : false

})


showall(filterproduct)



}



function valueconvert (value){

   return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}











