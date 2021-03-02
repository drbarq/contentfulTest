import React, { useEffect, useState } from 'react'
const contentful = require('contentful')


const client = contentful.createClient({
    space: '89124x1xlxyy',
    accessToken: `${process.env.REACT_APP_CONTENTFUL_DELIVERY_API_TOKEN}`
})


function Image() {
    const [imageInfo, setImageInfo] = useState() 


    useEffect(() => {
        async function getImageInfo() {
            const results = await client.getAsset('3WaafbaTPzK6gu40Don0No').then((entry) => entry).catch(error => console.error(error))
            setImageInfo(results)
        }
        getImageInfo()
    }, [])
    
    // Need a loading state while the promise resolves
    if (!imageInfo) {
        return "Loading...";
      }

    const imageURLSmall = `${imageInfo.fields.file.url}?w=100&h=100`

    return (
        <div>
            <h2>Image</h2>
            <img src={imageURLSmall} alt="pic"/> 
        </div>
    )     
}

export default Image