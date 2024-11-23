const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const SearchVideos = async (param) => {
    const res = await fetch(`${BASE_URL}/${param}`,{
        method: 'GET',
        header: {
        'x-rapidapi-key': '56d50f7a1dmsh9dccaeef3a195dcp1bac01jsnf041a191dfc2',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'  
        }
    })
    const result = await res.json();  
    return result;

}
