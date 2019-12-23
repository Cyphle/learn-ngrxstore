import { Params, RouterStateSnapshot } from '@angular/router';
import { Action } from '@ngrx/store';
import { RouterStateSerializer } from '@ngrx/router-store';
import { LoadHomePageAction } from './portfolio-route-resolver.action';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
  action: (payload: Params) => Action;
}

export class PortfolioRouteResolverSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {url, root: {queryParams}}: any = routerState;
    const {params}: any = route;

    const action = () => new LoadHomePageAction();

    return {url, params, queryParams, action};
  }
}
