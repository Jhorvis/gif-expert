import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

        const [categories, setCategories] = useState([])

        const addCategory = (newCategory) => {
            if (categories.includes(newCategory)) return;
            setCategories([newCategory/*...categories // para encolar*/])
        }

    return (
        <>
            <h1>GifExpert App</h1>

            <AddCategory 
                onNewCategory = {(value) => addCategory(value)}
            />


            
                { categories.map((category) => (

                    <GifGrid 
                        key={category}
                        category={category}
                    />

                )) }
        
          
        </>
    )
}