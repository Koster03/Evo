import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ItemModel {
  id: number;
  name: string;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  public model!: ItemModel;

  private items: Array<ItemModel> = [
    {
      id: 1,
      name: 'Шило',
    },
    {
      id: 2,
      name: 'Мыло',
    },
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.model = this.items.find(x => x.id === +this.route.snapshot.params['id'])!;
  }
}
