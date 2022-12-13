export const FETCH_PERSONAL_DATA = 'fetch_personal_data';

export const fetchPersonalData = async (dispatch) => {

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userInfo: {
          userName: '张三',
          job: '前端工程师'
        }
      })
    }, 2000)
  })

  dispatch({
    type: FETCH_PERSONAL_DATA,
    payload: data
  })
}