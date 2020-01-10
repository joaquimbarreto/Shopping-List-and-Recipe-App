import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Curry",
      "Chicken curry",
      "https://statics.cucchiaio.it/content/cucchiaio/it/ricette/2018/07/spezzatino-di-vitello-al-curry/jcr:content/header-par/image-single.img10.jpg/1530691026192.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
