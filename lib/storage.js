import firebaseApp, {firestorePath} from '@/lib/firebase';
import {
    getStorage, ref, getDownloadURL,
     } from "firebase/storage";

    const storage = getStorage(firebaseApp, firestorePath);
    function getImage ( imagePath ) {
        console.log('storage imagePath>>'+imagePath);
        const imageRef = ref(storage, imagePath);
        let imageUrl;
        const url = getDownloadURL(imageRef);
        // .then((url) => {
        //     console.log('storage url>>'+url);
        //     imageUrl = url;
        // })
        // .catch((error) => {
        //     console.log('error in get Image'+error);
        // });
        console.log('imageUrl aziz>>'+imageUrl);
        return imageUrl;
    }    

    async function getCategoryImages () {
        try {
            const imageRef = ref(storage, 'categories');
            const url = await getDownloadURL(imageRef);
            console.log('getData url:', url)
            return url
        } catch (error) {
            // Handle any errors
        }
    }
    
    export {getImage, getCategories};
