import React  from 'react';

import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

     
    const {data:images, loading} = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>

            { loading && <h2 className=" animate__hinge "> Cargando... 🐱‍🏍</h2> }
            
            <div className="card-grid ">
                {
                    images.map( img =>(
                    
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />

                    ))}
            </div>
        </>
    )
}

export default GifGrid
