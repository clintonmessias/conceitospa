import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add('/index.html', "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contato", "/pages/contato.html")
router.add(404, "/pages/404.html")

// const routes = {
//   "/": "/pages/home.html",
//   "/about": "/pages/about.html",
//   "/contato": "/pages/contato.html",
//   404: "/pages/404.html"

// }




router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();