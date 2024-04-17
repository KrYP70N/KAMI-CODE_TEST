import { Route } from "@angular/router"

interface CUSTOM_ROUTE extends Route {
  name: String
}

export const routerConfig: CUSTOM_ROUTE[] = []

export const routeList = routerConfig.map(({component, path, loadChildren}: Route) => {
  return {component, path, loadChildren}
})
