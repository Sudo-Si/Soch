import sanityClient from'@sanity/client'
import imageUrlBuilder from'@sanity/image-url'
export const client = sanityClient({

    projectId: 'f3efg7ue',
    dataset: 'production', 
    apiVerion:'2022-11-10',
    useCdn:true,
    token:'skqaqSdEmm78SJ0yKXhLeQc9szXbDf71ONIXBUsOTacHnG2gNgJ0DN9qTh3RSEkBqYBIl09vNVbWP7yJ9metL8zP83JsqFoj1TUb6ufLeNKQfHaMuZSIC9cw5jhVxWlrAIg4beo9F38S3bqNf4iVVZuqINv27nBW2UZPWmWMSPIgkmbQG1t8',

})

 const builder = imageUrlBuilder(client);
 export const urlFor = (source) => builder/imageUrlBuilder(source);