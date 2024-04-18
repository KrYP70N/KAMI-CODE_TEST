import { Component, EventEmitter, Input, Output } from "@angular/core";
import { env } from "../../../env/env";
import { HttpClient } from "@angular/common/http";
import { PostService } from "./post.service";

@Component({
  selector: 'post-widget',
  templateUrl: './posts.widget.html',
  styleUrl: './posts.widget.scss',
})

export class PostWidget {
  @Input() postPerPage: number = 10;
  @Input() page: number = 0
  @Input() param: any = ''
  @Output() triggerTotalPost = new EventEmitter()

  maxPage!: number

  data: any = []
  pageData: any = []

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.postService.getData(this.param)
    .subscribe(data => {
      this.data = data

      this.maxPage = this.data.length / this.postPerPage

      if(this.page >= this.maxPage) {
        this.page = this.maxPage - 1
      }

      this.pageData = this.data.slice((this.page) * this.postPerPage, (this.page * this.postPerPage) + this.postPerPage)

      this.triggerTotalPost.emit(this.maxPage)
    })
  }

  navigate() {

  }

}
