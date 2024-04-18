import { Component, Input } from "@angular/core";
import { StatusService } from "./status.service";

export interface STATUS {
  user?: number
  post?: number
  album?: number
}

@Component({
  selector: 'status-widget',
  templateUrl: './status.widget.html',
  styleUrl: './status.widget.scss',
})

export class StatusWidget {
  status: STATUS = {}

  constructor(private statusService: StatusService) {
    this.statusService.getData()
    .subscribe(([posts, album, users]) => {
      // backend side need to refactor: (need to separate get status API)
      this.status = {
        post: posts.length,
        album: album.length,
        user: users.length
      }
    })
  }
}
