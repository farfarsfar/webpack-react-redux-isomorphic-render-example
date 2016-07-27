export default {

    path: 'notfound',

    getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/not found'))
    })
  }

}