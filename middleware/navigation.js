export default function ({ store, route }) {
  if(!store.state.authData.accessToken){
    const ignoreRoutes = ['/sign-in', '/sign-up', '/reset-password', '/maintenance'];
    if(!ignoreRoutes.includes(route.path)){
        store.commit("setUrl", route.path);
    }
  }
}
