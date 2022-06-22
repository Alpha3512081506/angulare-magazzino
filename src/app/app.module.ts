import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategoryComponent } from './components/category/category.component';
import { LocalisationComponent } from './components/localisation/localisation.component';
import { IncomeComponent } from './components/income/income.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { AddLocationComponent } from './components/localisation/add-location/add-location.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ProductPracticeComponent } from './product-practice/product-practice.component';
import { NavigationComponent } from './components/product/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductComponent,
    HomeComponent,
    CategoryComponent,
    LocalisationComponent,
    IncomeComponent,
    AddProductComponent,
    AddLocationComponent,
    AddCategoryComponent,
    ProductPracticeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
