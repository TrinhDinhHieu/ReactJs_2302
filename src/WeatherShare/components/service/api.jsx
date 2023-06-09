import axios from "axios";

const getDataWeather = async(city ='')=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric&lang=vi`;
    const response = await axios.get(url);//lấy data từ api
    return await response.status ===200 ? await response.data : {}
}
export const api = {
    getDataWeather
}