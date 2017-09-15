import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { routes } from './routes';
import { DashboardV1Component } from './dashboard/v1/v1.component';
import {MyDocumentComponent} from "./documentlist/my-document/my-document.component";
import {DocumentlistComponent} from "./documentlist/documentlist.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes, { useHash: false }),
        PagesModule
    ],
    declarations: [
        DashboardV1Component,
        DocumentlistComponent,
        MyDocumentComponent
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {}
