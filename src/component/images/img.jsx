export default function ImagesComponent({...prop}) {
  //prop là 1 tham số dạng Object
  // nhận tất cả các dữ liệu từ Component truyền vào
  return (
    <>
      <img
         width={prop.w} 
         height={prop.h} 
         src={prop.sourc}
      />
    </>
  );
}
