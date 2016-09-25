import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormCompoenent } from './user-form.component';
import { PreventUnsavedChangesGuard } from '../prevent-unsaved-changes-guard.service';


export const usersRouting = RouterModule.forChild([
    {
        path: 'users/:id',
        component: UserFormCompoenent,
        canDeactivate: [PreventUnsavedChangesGuard]
    },
    {
        path: 'users/new',
        component: UserFormCompoenent,
        canDeactivate: [PreventUnsavedChangesGuard]
    },
    {
        path: 'users',
        component: UsersComponent
    }
]); 