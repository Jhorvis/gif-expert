import { useFetchGift } from "../hooks/useFetchGift"
import { GiftCard } from "./GiftCard"


export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGift(category)
    console.log(isLoading);
    return (
   <>
        
        <h2>{category}</h2>
            {
                isLoading && <h3>Cargando...</h3>
            }
       <div className="card-grid">
            {
                images.map((img) => (
                    <GiftCard 
                        key={img.id}
                        {...img} //exparsiendo propiedades
                    
                    />
                ))
            }
       </div>
   </>
  )
}
