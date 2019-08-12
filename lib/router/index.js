class Router {
  constructor() {
    this.routes = [];
  }

  create(type, path, action, middlewares) {
    if(!this.routes[type]) {
      this.routes[type] = [];
    }

    this.routes[type][path] = {
      action,
    };
  }

  get(path, action) { this.create('GET', path, action) }
  put(path, action) { this.create('PUT', path, action) }
  post(path, action) { this.create('POST', path, action) }
  delete(path, action) { this.create('DELETE', path, action) }
}

module.exports = Router;