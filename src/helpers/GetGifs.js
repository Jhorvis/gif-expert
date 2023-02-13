export const getGif = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=M7HDzEZN4PgcAbJMmkQMYz2Syz4HqV42&q=${category}&limit=5`
    const rsp = await fetch(url)
    const {data} = await rsp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    //console.log(gifs)
    return gifs;
}