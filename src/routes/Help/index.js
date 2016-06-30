import Help from './containers/HelpContainer'
import reducer from './modules/help'
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'help',
  getComponent (nextState, cb) {
    injectReducer(store, { key: 'help', reducer })
    cb(null, Help)
  }
})
