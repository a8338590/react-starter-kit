export default (store) => ({
  path: 'help/:name',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      var pageName = nextState.params.name
      pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1)
      const HelpDetail = require(`./components/help${pageName}`).default
      cb(null, HelpDetail)
    })
  }
})
