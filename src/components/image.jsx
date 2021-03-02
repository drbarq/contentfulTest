import React from 'react'
import axios from 'axios'

import contentful from 'contentful'


const client = contentful.createClient({
    space: '89124x1xlxyy',
    accessToken: `${process.env.REACT_APP_CONTENTFUL_DELIVERY_API_TOKEN}`
})

// console.log(${process.env.REACT_APP_CONTENTFUL_DELIVERY_API_TOKEN})

// const imageBaseUrl = 'https://images.ctfassets.net'

function getAsset() {
    client.getAsset('3WaafbaTPzK6gu40Don0No').then((asset) => console.log(asset))
}


function Image() {

    const image = getAsset()

    console.log(image)
    return (
        <h2>Image</h2>
    )
}

export default Image