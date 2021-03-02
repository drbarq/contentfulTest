import React, { useEffect, useState } from 'react'
// import contentful from 'contentful'

const contentful = require('contentful')


const client = contentful.createClient({
    space: '89124x1xlxyy',
    accessToken: `${process.env.REACT_APP_CONTENTFUL_DELIVERY_API_TOKEN}`
})


function Image() {
    const [imageInfo, setImageInfo] = useState({})

    useEffect(() => {
        async function getImageInfo() {
            const results = await client.getAsset('3WaafbaTPzK6gu40Don0No').then((entry) => entry).catch(error => console.error(error))
            setImageInfo(results)
        }
        getImageInfo()
        console.log("here")

        console.log("there")
        // console.log(imageInfo, "image")

        // console.log(result)
    }, [])
// console.log(getAsset)
// console.log("hello")
// console.log(imageInfo, "image")

// console.log(result, "result")


//    let imgURL = getAsset()
    // console.log(getAsset())
    // getAsset()


    return (
        <div>
        <h2>Image</h2>
        {/* <img src={imageInfo.fields.file.url} alt="pic"/> */}
        </div>

    )
}

export default Image