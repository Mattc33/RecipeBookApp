import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './Containers/header/header.component'

import { RecipeBookComponent } from './Containers/recipe-book/recipe-book.component'
    import { RecipeDetailComponent } from './Components/recipes/recipe-detail/recipe-detail.component'
    import { RecipeListComponent } from './Components/recipes/recipe-list/recipe-list.component'
        import { RecipeItemComponent } from './Components/recipes/recipe-list/recipe-item/recipe-item.component'

import { ShoppingListComponent } from './Containers/shopping-list/shopping-list.component'
    import { ShoppingEditComponent } from './Components/shopping/shopping-edit/shopping-edit.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingListComponent,
        RecipeBookComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipeItemComponent,
        ShoppingEditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
