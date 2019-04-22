export default ({ store, redirect }) => {
  if (!store.getters['user/isAuthenticated']) {
    return redirect('/sign_in')
  }
}
