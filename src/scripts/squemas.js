import Functions from "./Functions";
function Sidebar(active, badge, icon, title, separador, link, list, padre) {
  this.active = active;
  this.badge = badge;
  this.icon = icon;
  this.title = title;
  this.separador = separador;
  this.link = link;
  this.list = list;
  this.padre = padre;
}
  
Sidebar.prototype.add = function() {
  let data = {}
  data.active = this.active
  data.badge = this.badge
  data.icon = this.icon
  data.title = this.title
  data.separador = this.separador
  data.link = this.link
  data.list = this.list
  data.padre = this.padre
  data.type = 'correctProperty'
  return Functions.validSquemas('sidebar',data)
}
Sidebar.prototype.remove = function() {
  let data = {}
  data.type = 'deleteItem'
  data.indice = this.active
  return data
}

export default Sidebar