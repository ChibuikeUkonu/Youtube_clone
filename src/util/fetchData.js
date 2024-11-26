const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const SearchVideos = async (param) => {
    const res = await fetch(`${BASE_URL}/${param}`,{
        method: 'GET',
        headers: {
       'x-rapidapi-key': 'a0a831c7femsh42019b9181c1534p1c1ec0jsne44b30ced176',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    })
    const result = await res.json();  
    return result;

}
