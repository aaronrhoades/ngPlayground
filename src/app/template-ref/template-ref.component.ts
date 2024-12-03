import { AfterViewInit, Component, inject, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  standalone: true,
  imports: [],
  templateUrl: './template-ref.component.html',
  styleUrl: './template-ref.component.scss'
})
export class TemplateRefComponent implements AfterViewInit {
  @ViewChild('theActualTemplate') theActualTemplate!: TemplateRef<{title: string}>;
  vcr = inject(ViewContainerRef);
  injector = inject(Injector);

  context = [{ 
    title: 'templateRef Title',
    someMethod(title: string) {
      alert(`Alert for ${title}`);
    }
  },
  { 
    title: 'templateRef Title 2',
    someMethod(title: string) {
      alert(`Alert again for ${title}`);
    }
  }];
  
  ngAfterViewInit() {
    console.log(this.theActualTemplate);
    this.vcr.createEmbeddedView<{title: string}>(
      this.theActualTemplate,
      this.context[0], {
      injector: this.injector,
    });
    this.vcr.createEmbeddedView<{title: string}>(
      this.theActualTemplate,
      this.context[1], {
      injector: this.injector,
    });
  }

}
