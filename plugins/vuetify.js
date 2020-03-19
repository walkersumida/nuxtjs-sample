import colors from 'vuetify/es5/util/colors'

var options = {
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.lightBlue.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      dark: {
        primary: colors.blue.darken4,
        accent: colors.grey.darken4,
        secondary: colors.amber.darken4,
        info: colors.lightBlue.darken3,
        warning: colors.amber.darken4,
        error: colors.deepOrange.darken4,
        success: colors.green.darken4
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
