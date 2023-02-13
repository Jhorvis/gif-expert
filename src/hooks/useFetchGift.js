import { useEffect, useState } from "react"
import { getGif } from "../helpers/GetGifs"

export const useFetchGift = (category) => {
const [isLoading, setIsloading] = useState(true)
const [images, setImages]= useState([])

    const getImages = async() =>{
        const gif = await getGif(category)
        setImages(gif)
        setIsloading(false);

    }

    useEffect(() =>{
       getImages();
    },[])

    return {
        images,
        isLoading
    }

}
