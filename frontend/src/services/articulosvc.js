const URL = 'http://localhost:3000/articulos'

async function getArticulos(){
    const res = await fetch(URL)
    const data = await res.json()
    return data;
}

async function getArticulosDetalle(id){
    const res = await fetch(URL+'/'+id)
    const data = await res.json()
    return data
}


async function saveArticulo(data){    
    /*console.log(data)
   
    axios.put(URL, data)
    axion.POST(URL, {params: {id: data.id}})*/
    console.log(data.Id)
    let res = null
    if(data.Id === undefined)
        res = await fetch(URL,{method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)})
    else    
        res = await fetch(URL,{method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)})
    return await res.json()
}

export default {getArticulos, getArticulosDetalle, saveArticulo}