import { Component } from '@angular/core';
import { ChennelService } from './chennel.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp-angular';
  channelList: any = [];
  p: number = 1;
  name: string = "";
  rank: string = "";
  grade: string = "";
  videoUploads: string = "";
  subscribers : string = "";
  videoViews : number = 0;

  constructor(public channelservice: ChennelService) {}

  ngOnInit() {
    var url = "http://localhost:3000/channels/list";
    this.getChannels(url);

  }


  getChannels(url) {
    this.channelservice.doGET(url).subscribe(
      suc => {
        console.log("channels",suc);
        this.channelList = suc;
      },
      err=> {
        console.log("err",err);
      }
    )
  }

  getChannelInfo(channel) {
    console.log(channel)
    this.name = channel.Channelname;
    this.grade = channel.Grade;
    this.rank = channel.Rank;
    this.subscribers = channel.Subscribers;
    this.videoUploads = channel.Videouploads;
    this.videoViews = channel.Videoviews;
  }
}
