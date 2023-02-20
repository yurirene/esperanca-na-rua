export default ({ app }, inject) => {
  app.head.script.push({
    src: '/assets/scripts/custom.js',
    async: false,
    defer: true
  })
}
