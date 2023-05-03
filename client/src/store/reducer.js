import { combineReducers } from 'redux-immutable'

import { reducer as headerReducer } from '../common/header/store'
import { reducer as loginReducer } from '../common/login/store'
import { reducer as registerReducer } from '../common/register/store'
import { reducer as newsReducer } from '../pages/allnews/store'
import { reducer as articleReducer } from '../pages/articlePage/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as searchReducer } from '../pages/searchPage/store'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  login: loginReducer,
  register: registerReducer,
  allnews: newsReducer,
  article: articleReducer,
  search: searchReducer
})

export default reducer
