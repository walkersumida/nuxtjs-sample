import colors from 'vuetify/es5/util/colors'

var options = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  icons: {
    iconfont: 'fa',
    values: {
      post: 'fa fa-lg fa-file',
      profile: 'fa fa-user fa-lg',
      logout: 'fa fa-lg fa-sign-out'
    }
  }
}
export default options
