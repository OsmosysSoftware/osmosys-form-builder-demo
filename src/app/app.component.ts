import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { configs } from '../assets/config';
import {
  JsonEditorOptions,
  JsonEditorComponent,
  NgJsonEditorModule,
} from 'ang-jsoneditor';
import { OsmosysFormComponent } from 'osmosys-form';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, NgJsonEditorModule, OsmosysFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'Demo: Osmosys Form';
  jsonData: any = configs.simpleForm;
  previewData: any = configs.simpleForm; // This will be updated for preview
  formData: any = { // Data object for ngModel
    name: 'John Doe',
    email: 'john.doe@example.com',
    feedback: 'This is a sample feedback'
  };
  showPreview = true;
  public editorOptions!: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent, { static: false })
  editor!: JsonEditorComponent;

  ngOnInit() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';
  }

  updateConfig() {
    try {
      this.previewData = this.editor.get();
      this.showPreview = false; // Hide the component
      setTimeout(() => {
        this.showPreview = true; // Show the component again
      }, 10);
    } catch (error) {
      console.error('Invalid JSON format:', error);
    }
  }

  onFormSubmit(data: any) {
    console.log('Form submitted:', data);
  }

  onButtonAction(action: string, form: any) {
    if (action === 'customAction') {
      console.log('Custom action triggered:', form.value);
    } else if (action === 'reset') {
      form.reset();
    } else {
      console.log('Button action:', action);
    }
  }
}
