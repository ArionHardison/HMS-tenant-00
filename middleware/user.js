export default function ({ store, redirect }) {
  if(store.state.authData.accessToken===null){
    return redirect(`/sign-in`);
  }
}
