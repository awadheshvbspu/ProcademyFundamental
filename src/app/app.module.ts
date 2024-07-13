import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './container/product/product.component';
import { FilterComponent } from './product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { SetBackground } from './customDirectives/SetBackGround.directive';
import { HighlightDirective } from './customDirectives/highlight.directive';
import { AppHoverDirective } from './customDirectives/app-hover.directive';
import { DisableProductDirective } from './customDirectives/disable-product.directive';
import { ClassDirective } from './customDirectives/class.directive';
import { StyleDirective } from './customDirectives/style.directive';
import { IfDirective } from './customDirectives/If.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    NgTemplateComponent,
    FeaturedBrandsComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    DemoComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective,
    DisableProductDirective,
    ClassDirective,
    StyleDirective,
    IfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
