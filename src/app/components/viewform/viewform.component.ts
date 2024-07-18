import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { OsmosysFormComponent } from '../../../../../osmosys-form-builder/dist/osmosys-form';
import { configs } from '../../../assets/config';

@Component({
  selector: 'app-viewform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, NgJsonEditorModule, OsmosysFormComponent,],
  templateUrl: './viewform.component.html',
  styleUrl: './viewform.component.scss'
})
export class ViewformComponent implements OnInit {
  configItems = [
    { label: 'Simple Form', value: 'Simple Form' },
    { label: 'addBatches', value: 'addBatches' },
    { label: 'addExamCreation', value: 'addExamCreation' },
    { label: 'addQuestion', value: 'addQuestion' },
    { label: 'addQuestionPaper', value: 'addQuestionPaper' },
    { label: 'addSection', value: 'addSection' },
    { label: 'addService', value: 'addService' },
    { label: 'addSubSection', value: 'addSubSection' }
  ];

  previewData: any = configs.simpleForm;

  showPreview = true;

  formData: any = { // Data object for ngModel
    name: 'John Doe',
    email: 'john.doe@example.com',
    feedback: 'This is a sample feedback'
  };

  ngOnInit(): void {
  }

  returnConfig(input: string): any {
    switch(input) {
      case ('Simple Form'):
        return configs.simpleForm;
      case ('addBatches'):
        return configs.addBatches;
      case ('addExamCreation'):
        return configs.addExamCreation;
      case ('addQuestion'):
        return configs.addQuestion;
      case ('addQuestionPaper'):
        return configs.addQuestionPaper;
      case ('addSection'):
        return configs.addSection;
      case ('addService'):
        return configs.addService;
      case ('addSubSection'):
        return configs.addSubSection;
    }
    return false;
  }

  onConfigChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue);
    this.updateConfig(selectedValue);
  }

  updateConfig(selectedValue: any) {
    try {
      this.previewData = this.returnConfig(selectedValue);
      console.log(this.returnConfig(selectedValue));
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
