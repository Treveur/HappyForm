import { Routes } from '@angular/router';
import { PATH_HOME } from './app.routes.const';
import { HappyformContainerComponent } from './happyform-container/happyform-container.component';

export const ROUTES: Routes = [
{path: PATH_HOME, component: HappyformContainerComponent}
]