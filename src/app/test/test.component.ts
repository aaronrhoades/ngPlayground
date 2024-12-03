import { Component } from '@angular/core';
import { TemplateRefComponent } from "../template-ref/template-ref.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TemplateRefComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  textInterpolation = 'This is text interpolation.';
}
