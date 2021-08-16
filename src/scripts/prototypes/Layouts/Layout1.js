function tabs(idTab, idContent, label, badge, content, actions) {
    this.idTab = idTab
    this.idContent = idContent
    this.label = label
    this.badge = badge
    this.content = content
    this.actions = actions
}
function actionN(label, id, icon, url, action) {
    this.label = label
    this.id = id
    this.icon = icon
    this.url = url
    this.action = action
}
function infoError(text, val) {
    this.text = text
    this.val = val
}
function modelBreadCrum(label, link, icon) {
    this.label = label
    this.link = link
    this.icon = icon
}
class Layout {
    constructor() {
        this.breadcrums = []
        this.title = {}
        this.navLeft = []
        this.navRight = []
        this.Tabs = []
    }
    validInfo(obj) {
        let ob = Object.keys(obj)
        let empty = []
        ob.forEach(e => {
            if (obj[e] !== undefined) {
                if (obj[e] === '') {
                    empty.push(e)
                }
            } else {
                empty.push(e)
            }
        })
        return empty
    }
    addBreadcrum(label, link, icon) {
        let modelBread = new modelBreadCrum(label, link, icon)
        let valid = this.validInfo({ 'label': label })
        if (valid.length > 0) {
            this.error = new infoError('El breadcrum no es valido', 'El campo ' + valid[0] + ' esta vacio o no fue definido')
        } else {
            this.breadcrums.push(modelBread)
        }
    }
    setTitle(PageTitle, ContentTitle) {
        this.title.PageTitle = PageTitle
        this.title.ContentTitle = ContentTitle
    }
    addNavItemLeft(label, id, icon, url, action) {
        let navItem = new actionN(label, id, icon, url, action)
        let valid = this.validInfo({ 'id': id })
        if (valid.length > 0) {
            this.error = new infoError('La accion no es valida', 'El campo ' + valid[0] + ' esta vacio o no fue definido')
        } else {
            this.navLeft.push(navItem)
        }
    }
    addNavItemRight(label, id, icon, url, action) {
        let navItem = new actionN(label, id, icon, url, action)
        let valid = this.validInfo({ 'id': id })
        if (valid.length > 0) {
            this.error = new infoError('La accion no es valida', 'El campo ' + valid[0] + ' esta vacio o no fue definido')
        } else {
            this.navRight.push(navItem)
        }
    }
    addNavItemLeftList(list) {
        if (list.error !== undefined) {
            this.error = list.error
        }
        this.navLeft.push(list.listOptions)
    }
    addNavItemRightList(list) {
        if (list.error !== undefined) {
            this.error = list.error
        }
        this.navRight.push(list.listOptions)
    }
    addTabs(idTab, idContent, label, badge, content, actions) {
        let setTab = new tabs(idTab, idContent, label, badge, content, actions)
        let valid = this.validInfo({ "idTab": idTab, "idContent": idContent, "label": label, "content": content })
        if (valid.length > 0) {
            this.error = new infoError('El tab no es valido', 'El campo ' + valid[0] + ' esta vacio o no fue definido')
        } else {
            this.Tabs.push(setTab)
        }
    }
}
export { infoError }
export default Layout