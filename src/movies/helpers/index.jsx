//check hàm xem có rỗng hay ko

function isEmptyObject(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}
function addDataMovieToLocal(movie = {}) {
  //lấy ra id đang muốn add vào
  let currentMovie = movie["id"];
  //lấy data từ local
  let dataMovie = window.localStorage.getItem("favoirteMovie");
  let arrDataMovie = [];

  if (!dataMovie) {
    //chưa có data
    arrDataMovie = [...arrDataMovie, movie];
    window.localStorage.setItem("favoirteMovie", JSON.stringify(arrDataMovie)); //chuyển mảng về string
  } else {
    //đã có data
    //ktra xem film cần add đã có data chưa.
    dataMovie = JSON.parse(dataMovie);
    //check currentData có nằm trong dataMovie ko
    const checking = dataMovie.some((item) => item.id === currentMovie);

    if (!checking) {
      arrDataMovie = [...dataMovie, movie];
      window.localStorage.setItem(
        "favoirteMovie",
        JSON.stringify(arrDataMovie)
      ); //chuyển mảng về string
    }
  }
}
function getDataMovieToLocal(){
  let dataMovie = window.localStorage.getItem("favoirteMovie");
  dataMovie = JSON.parse(dataMovie)
  return dataMovie
}
function checkDataMovieLocal(id = 0){
  id = Number.parseInt(id)
  const dataMovie = getDataMovieToLocal();
  return dataMovie !== null ? dataMovie.some(item =>item.id === id) : false // dừng hàm some sẽ ko nhận gtrij null
}
function removeMovieLocalId(id){
  id = Number.parseInt(id)
  const dataMovie = getDataMovieToLocal();
  let newDataMovie = dataMovie.filter(item =>item.id !== id)//loại bỏ id ko giống nhau
  if(newDataMovie !== undefined){
    // check data
    //set lai data
    window.localStorage.setItem('favoirteMovie',JSON.stringify(newDataMovie))
  }
  // checkDataMovieLocal(id);//gọi lại để check 
}
export const helpers = {
  isEmptyObject,
  addDataMovieToLocal,
  removeMovieLocalId,
  getDataMovieToLocal,
  checkDataMovieLocal,
};
