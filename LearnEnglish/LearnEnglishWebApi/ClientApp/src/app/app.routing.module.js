import { HomeComponent } from './modules/home/home.component';
export const routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    }
];
//# sourceMappingURL=app.routing.module.js.map