export default function ({ store, redirect }) {

    console.log("MWARE")
    console.log(store.state)

  if(store.state.authData.accessToken!==null){
    return redirect(`/`);
  }
}
