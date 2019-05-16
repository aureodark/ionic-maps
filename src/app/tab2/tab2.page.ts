import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private posLat: number = 0;
  private posLog: number = 0;
  maps: string = null
  imagem = "https://imagens.canaltech.com.br/236607.471195-Lua.jpg";

  constructor(
    private geolocation: Geolocation
  ) { }

  local() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.posLat = resp.coords.latitude
      this.posLog = resp.coords.longitude
      this.maps = "https://www.youtube.com/"
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
