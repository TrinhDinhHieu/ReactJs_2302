// Component là con của UI, thành phần cấu tạo lên 1 UI
// khi có nhiều Component sẽ tạo nên 1 UI hoàn chỉnh
// state : trạng thái của ứng dụng.
// khi state thay đổi thì ứng dụng thay đổi

// STATE có thể thay đổi, PROP sẽ ko bị thay đổi

import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeardComponent from "./component/Hearder";
import FooterComponent from "./component/Footer";
import ContentComponent from "./component/Content";
import ImagesComponent from "./component/images/img";
import Logo01 from "./assets/img1.jpg";
import Logo02 from "./assets/img2.jpg";
import Logo03 from "./assets/img3.jpg";
import InputComponent from "./component/Input";
import Button from "./component/Button";
import Students from "./component/Students";

function App() {
  const [count, setCount] = useState(0); // return về 1 mảng
  // khi useState thay đổi thì UI/Ux sẽ cập nhật lại
  const [number,setNumber] = useState()

  const Up = (event) => {
    setCount(count + number);
    const nameButton = event.target.name;// check thuộc tính name của button 
    console.log(nameButton);
    console.log(event);
  };

  const Dwn = () => {
    setCount(count - number);
    if (count === 0) {
      alert("lỗi counter ");
    }
  };
  const handerNumber = (event) => {
    let value = event.target.value.trim();
    if(!isNaN(value) && value.length >0){ //kiểm tra Value xem là NaN hay không && chiều dài value > 0 hay ko
      // lưu số người dùng nhập vào state đã khai báo (cập nhật state number)
      value = parseInt(value);// chuyển String về number
      setNumber(value); //lưu value ở input vào state
      
    }
  }
  const myChange = (event) => {
    //log giá trị value 
    console.log(event.target.value); 
  };
  return (
    //JSX React
    <>
    <HeardComponent/>
      <h1>
        Hello world <i> React js</i> !!
      </h1>
      <h1>{count}</h1>
      <div>
        {/* <Button type='button' name='increment'></Button> */}
        <Button handerCick={Up}> + </Button>
        <Button handerCick={Dwn}> - </Button> <br/>
        <input  type="text" defaultValue={number} onChange={handerNumber} />
      </div>

      {/* <HeardComponent /> */}

      <ContentComponent children={"Hello"}>
        {/* <ImagesComponent
          //ảnh 1
          w={100}
          h={100}
          source={""}
        />
        <ImagesComponent
          //ảnh 2
          w={200}
          h={200}
          source={""}
        /> */}
        <InputComponent type="password" name="pass" change={myChange} />
        {/*type, name, change là các tham số để truyền data để Component nhận được trong qua khai báo props bên hàm đó */}
        <InputComponent type="email" name={""} />
        {/* <Students/> */}
      </ContentComponent>

      <FooterComponent />

    </>
  );
}

export default App;
