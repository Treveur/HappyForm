import { Routes } from '@angular/router';
import { PATH_HOME, PATH_FORM } from './app.routes.const';
import { HappyformContainerComponent } from './happyform-container/happyform-container.component';
import { FormComponent } from './form/form.component';

export const ROUTES: Routes = [
{path: PATH_HOME, component: HappyformContainerComponent},
{path: PATH_FORM, component: FormComponent}
];
