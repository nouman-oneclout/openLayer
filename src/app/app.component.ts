import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {
  defaults, 
  ScaleLine, 
  ZoomSlider,
  Rotate,
  FullScreen,
  ZoomToExtent,
  MousePosition,
  OverviewMap} from 'ol/control';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'openLayer';
  map!: Map;
  ngOnInit(){
    this.map = new Map({
      view: new View({
        center: [0,0],
        zoom: 1
      }),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: "map",
      controls: defaults().extend([
        new ScaleLine(),
        new ZoomSlider(),
        new Rotate(),
        new FullScreen(),
        new ZoomToExtent(),
        new MousePosition(),
        new OverviewMap()
      ])
    })

  }
}
