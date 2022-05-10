import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {

  @Input() item: any;
  @Input() type: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  goToPage() {
    if(this.item.id === null) this.router.navigate(['/'+this.type], {relativeTo: this.route});
    else this.router.navigate(['/' + this.type + '/detail', this.item.id], { relativeTo: this.route });
  }

  goToDetail() {
    this.router.navigate(['/' + this.type + '/detail', this.item.id], { relativeTo: this.route });
  }

}
