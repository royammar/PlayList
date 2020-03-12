import Axios from 'axios'

// var axios = Axios.create({
//     withCredentials: true,
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//     }
// });


const BASE_URL = '//localhost:3000/book'

export default {
  
    getPlayList,
 
}

async function getPlayList(term){
console.log('here');

const {data}=await  Axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${term}&key=AIzaSyAig7ksAjASkE5RlOdU9D3laVy0XpAf3Bw`)
console.log(data,'data');
  return data
}

