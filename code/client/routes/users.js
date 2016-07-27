export default {
    path: 'users',

    getChildRoutes(location,cb) {
        require.ensure([], (require) => {
            cb(null, [
                { path: 'userlist',
                  component: require('../pages/users')},
                { path: 'notfound',
                  component: require('../pages/not found') }
            ]);
        })
    },

}