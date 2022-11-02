export default function ({ store, redirect }) {
  if(store.state.maintenance){
    return redirect('/maintenance')
  }
}
