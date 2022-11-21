export const getGifs = async (category)=>{
    try{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4xavPUUyTIK1r8yFvMAWryogJwLF38SA&q=${category}&limit=5`;
    const res = await fetch(url);
    const {data} = await res.json();
    
    const gifs = data.map(img=>({
        id:img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
    }
    catch(error){
        console.error(error);
    }
}