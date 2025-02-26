module.exports = {
  publicPath:
    process.env.NODE_ENV === 'beta'
      ? '/my-project/' // replace 'my-project' with your repo name
      : '/',
}
