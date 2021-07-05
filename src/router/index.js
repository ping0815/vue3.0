const router = [{
    path: '/index',
    component: () => import(/* webpackChunkName: "home" */ '../components/HelloWorld'),
}]
export default router;