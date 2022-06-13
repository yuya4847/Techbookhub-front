class MyInject {
  constructor (ctx) {
    this.app = ctx.app
  }

  // i18nページタイトル変換
  pageTitle (routeName) {
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }

  // 日付のフォーマットの変換
  dateFormat (dateStr) {
    const dateTimeFormat = new Intl.DateTimeFormat(
      'ja', { dateStyle: 'medium', timeStyle: 'short' }
    )
    return dateTimeFormat.format(new Date(dateStr))
  }

  projectLinkTo (id, name = 'project-id-dashboard') {
    return { name, params: { id } }
  }
}

export default ({ app }, inject) => {
  inject('my', new MyInject({ app }))
}
