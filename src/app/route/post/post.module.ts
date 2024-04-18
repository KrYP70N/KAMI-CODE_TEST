import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KAMI_UI } from '../../module/kami-ui/kami-ui.module';
import { KAMI_WIDGET } from '../../module/widget/widget.module';
import { PostList } from './component/list/post-list.component';
import { PostRoutingModule } from './post.routing.module';


@NgModule({
  declarations: [
    PostList
  ],
  imports: [
    CommonModule,
    KAMI_UI,
    KAMI_WIDGET,
    PostRoutingModule
  ],
  providers:[
  ]
})
export class PostModule { }
