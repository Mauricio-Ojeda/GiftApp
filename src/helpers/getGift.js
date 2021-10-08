export const getGift = async( category ) =>{
    
    const  url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=bzfJ2m6sLAYFDW3iljr7LZnX1NlAF1up`; 
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url:img.images?.downsized_medium.url
        }
    })
    
    return  gifs;
}