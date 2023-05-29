export default function Students() {
  const check = true;
  const dataStudent = [
    {
      id: 1,
      name: "Teo",
      phone: "1234",
      gerder: 0,
      //   img: uri('https://watermark.lovepik.com/photo/20211125/large/lovepik-cat-picture_501043548.jpg'),
      show: true,
    },
    {
      id: 2,
      name: "Ty",
      phone: "2343",
      gerder: 0,
      //   img: uri('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXV82d3dZi5Mg_--O5DRzVGFThV6BnfoWgmIsxgP7&s'),
      show: false,
    },
    {
      id: 3,
      name: "Mao",
      phone: "6666",
      gerder: 0,
      //   img: uri('https://life.thanhcong.vn/wp-content/uploads/2023/01/con-vat-yeu-thich-con-meo.jpg'),
      show: true,
    },
    {
      id: 4,
      name: "Tam",
      phone: "4343",
      gerder: 1,
      //   img: uri('https://life.thanhcong.vn/wp-content/uploads/2023/01/con-vat-yeu-thich-con-meo.jpg'),
      show: false,
    },
    {
      id: 5,
      name: "Bao",
      phone: "6565",
      gerder: 1,
      //   img: uri('https://life.thanhcong.vn/wp-content/uploads/2023/01/con-vat-yeu-thich-con-meo.jpg'),
      show: true,
    },
  ];

  const renderColor = (index) => {
    return (index + 1) % 2 == 0
      ? { backgroundColor: "green" }
      : { backgroundColor: "yellow" };
  };


  if (!check) {
    return (
      <>
        <p>ko có data</p>
      </>
    );
  }
  
  return (
    <>
      <h1>Danh sách sinh vien</h1>
      <table width="100%" border={1} cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th>MSV</th>
            <th>Ho ten</th>
            <th>SDT</th>
            <th>Giới tính</th>
            <th>Hình ảnh</th>
          </tr>
        </thead>
        <tbody>
          {dataStudent.map((item, index) => (
            <tr
              key={index}
              style={
                // C1

                // (index + 1) % 2 == 0
                //   ? { backgroundColor: "green" }
                //   : { backgroundColor: "yellow" }

                //C2
                renderColor(index)
              }
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.gerder == 1 ? "Nam" : "Nữ"}</td>
              <td>{item.show && <img src={item.img} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
