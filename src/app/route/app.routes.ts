import { Route } from "@angular/router"

interface CUSTOM_ROUTE extends Route {
  name: String
}

export const routerConfig: CUSTOM_ROUTE[] = [
  {
    name: 'Post',
    path: 'post',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
  {
    name: 'Dashboard',
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
]

export const routeList = routerConfig.map(({component, path, loadChildren}: Route) => {
  return {component, path, loadChildren}
})
