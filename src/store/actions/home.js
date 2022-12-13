export const FETCH_HOME_DATA = 'fetch_home_data';

const articles = [
  {
    id: 1,
    title: '头条，测试哈哈哈哈111111111111',
    content: '内容头条，111111111111111发啊1'
  },
  {
    id: 2,
    title: '可以堂食了，哦耶',
    content: '文章内容2文章内容2文章内容2文章内容2文章内容2文章内容2'
  },
]; 

export const fetchHomeData = async (dispatch) => {

  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        articles 
      })
    }, 2000)
  })

  dispatch({
    type: FETCH_HOME_DATA,
    payload: data
  })
}