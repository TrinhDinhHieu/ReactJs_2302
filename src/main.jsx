//import ở đây là tất cả component trong src đều gùng dk
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'; 
// import AppContext from './Context/AppContext'; 
import AppWeather from './WeatherShare/AppWeather';
import AppCorona from './Covid/App';
import App from './weather/App';
import AppTodo from './todolist/component/AppTodo';
import Movies from './movies/AppMovies';


// import './index.css'

//build ReactDOM vào id root
// Convert HTML sang jsx để hiện lên trang web 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppTodo /> */}
    {/* <AppCorona/> */}
    {/* <AppWeather/> */}
    {/* <App/> */}
    <Movies/>
  </React.StrictMode>,
)
