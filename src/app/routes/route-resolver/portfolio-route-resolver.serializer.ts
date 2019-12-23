import { Params, RouterStateSnapshot } from '@angular/router';
import { Action } from '@ngrx/store';
import { RouterStateSerializer } from '@ngrx/router-store';

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

    // Ceci est un exemple et sera modifié une fois les pages créées
    // const action = url.indexOf('experiences') >= 0 ? () => new LoadExperiencesAction() : () => new LoadHomePageAction();
    const action = undefined;

    return {url, params, queryParams, action};
  }
}
