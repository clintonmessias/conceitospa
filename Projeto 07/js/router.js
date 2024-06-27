export class Router {
  routes = {};

  add(routeName, page){
    this.routes[routeName] = page
  }


  route(event){
    event = event || window.event
    event.preventDefault();
    
    window.history.pushState({}, "", event.target.href);
  
    this.handle();
  }

  handle(){
    const {pathname} = window.location;
    const route = this.routes[pathname] || this.routes[404];
  
    fetch(route)
    .then((data) => data.text())
    .then((html) => {
      document.querySelector('#app').innerHTML = html;
    });
  }
}

class Passaro {

  voar(){
    alert('estou voando')
  }
}

class Pato extends Passaro{
  constructor(){
    super();
  }
}

class Galinha extends Passaro {
  constructor(){
    super();
  }

  voar(){
    alert('não voa tão bem');
  }
}

const pato = new Pato();
pato.voar();

const galinha = new Galinha();
galinha.voar();