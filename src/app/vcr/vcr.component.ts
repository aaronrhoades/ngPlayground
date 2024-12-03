import { AfterViewInit, Component, ElementRef, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-vcr',
  standalone: true,
  imports: [],
  templateUrl: './vcr.component.html',
  styleUrl: './vcr.component.scss'
})
export class VCRComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  @ViewChild('viewChildTest', {read: ElementRef}) viewChildTest!: ElementRef;


  ngAfterViewInit() {
    console.log('vcr', this.vcr);
    console.log('viewChildTest', this.viewChildTest);
    console.log(this.viewChildTest.nativeElement.innerText);

    this.vcr.createComponent(TestComponent);

  }
}
