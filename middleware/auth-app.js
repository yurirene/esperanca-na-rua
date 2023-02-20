export default ({store, redirect}) => {
  if (
    !store.state.autenticacao.autenticado
    || ((new Date()) >= store.state.autenticacao.dadosAutenticacao.limite)
  ) {
    redirect('/login');
  }
}
