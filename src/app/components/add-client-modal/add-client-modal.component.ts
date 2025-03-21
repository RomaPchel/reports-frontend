import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.scss']
})
export class AddClientModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() addClient = new EventEmitter<any>();

  clientForm: FormGroup;
  platforms = ['Facebook', 'TikTok'];

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      platforms: [[], Validators.required]
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.addClient.emit(this.clientForm.value);
      this.close.emit();
    }
  }

  onClose() {
    this.close.emit();
  }

  togglePlatform(event: Event, platform: string) {
    const checkbox = event.target as HTMLInputElement;
    const currentPlatforms = this.clientForm.get('platforms')?.value as string[] || [];
    
    if (checkbox.checked) {
      // Add platform if checked
      this.clientForm.get('platforms')?.setValue([...currentPlatforms, platform]);
    } else {
      // Remove platform if unchecked
      this.clientForm.get('platforms')?.setValue(
        currentPlatforms.filter(p => p !== platform)
      );
    }
  }
} 