export default function ContentComponent({children}){
    //prop là 1 thuộc tính, giúp truyền tải dữ liệu giữa các Component với nhau
    //prop children là nội dung nằm trong thẻ mở và thẻ đóng của 1 component 
    return(
        <>
            <main>
                 {/* cú phấp {} để hiển thị data của hàm  */}
                {children}
            </main>
        </>
    )
}