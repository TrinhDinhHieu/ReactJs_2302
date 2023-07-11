/* eslint-disable no-unused-vars */
// nơi đây sẽ hỗ trợ vc lấy dữ liệu từ store ra
// khi các action dispatch vaò store mà ko có j thay đổi sau những lần
// dispatch thì Reselect sẽ trả kết quả về cho action luôn mà ko cần Reducer cập nhật lại state

import { createSelector } from "reselect";
//lấy ra state trong reducer
const homeState = (state) => state.home; //lấy dữ liệu state của tk reducer

export const getDataHomePage = createSelector(homeState, (state) => {
  //state : chính là dữ liệu mà HomeState đang có
  // state.dataMovies : mảng chứa thông tin các bộ phim
  const data = state.dataMovie.map((item, index) => ({
    //các trường dữ liệu
    id: item.id,
    title: item.title,
    original_title: item.original_title,
    poster_path: item.poster_path
  }));
  return data; // dữ liệu sẽ lưu vào store
});

export const getLoadingDataHome =createSelector(
    homeState,// lưu dữ liệu từ reducer 
    state =>state.loading
)
export const getTotalPage = createSelector(
    homeState,
    state => state.totalPage
)
export const getTotalResult = createSelector(
    homeState,
    state => state.totalResult
)