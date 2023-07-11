export const REQUEST_DATA_HOME = "REQUEST_DATA_HOME"
//action nayf se di qua Middleware Redux-saga , 
// ko trực tiếp dk dispatch vào trong store
export const getRequestDataHome = page =>({
    type:REQUEST_DATA_HOME,
    page
})
// sau đây là các action của redux saga khi nhận action từ bên ngoài truyền vào
//action của redu saga sẽ là action dk dispatch vào trong store

export const LOADING_REQUEST_DATA = 'LOADING_REQUEST_DATA'
export const loadingRequesData = loading =>({
    type:LOADING_REQUEST_DATA,
    loading
})

export const REQUEST_DATA_HOME_SECCESS = "REQUEST_DATA_HOME_SECCESS"
export const getRequestDataHomeSuccess = dataMovie =>({
    type:REQUEST_DATA_HOME_SECCESS,
    dataMovie
})

export const REQUEST_DATA_HOME_FAILURE = "REQUEST_DATA_HOME_FAILURE"
export const requestDataHomeFailure = error =>({
    type:REQUEST_DATA_HOME_FAILURE,
    error
})
// từ 1 action sẽ dk đẩy vào Middleware và đợi xử lý xog r đẩy 3 action con trên ra reducer với các action con
