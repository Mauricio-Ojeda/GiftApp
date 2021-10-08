import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['messi'])

    
    return (
        <>
            <h2 className="animate__fadeInDownBig animate__fadeOutDownBig">GiftExpertApp</h2>
            <AddCategory 
                setCategories = { setCategories }
            />
            <hr/>            
            <ol>
                {
                    categories.map( (category, index ) => {
                      return  <GifGrid 
                            key = { category + index }
                            category = { category }
                        />
                    })
                }
                
            </ol>      

        </>
    )
}

export default GiftExpertApp
