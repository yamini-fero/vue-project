module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/vue-project/' // replace 'my-project' with your repo name
      : '/vue-project/',
}
