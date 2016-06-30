export default (store) => ({
  path: 'notice',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      var NoticeView = require('./components/Notice').default
      cb(null, NoticeView)
    })
  }
})
