import { Injectable } from '@angular/core';

interface SignUpFormData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignUpFormService {
  private formData: SignUpFormData = {
    email: '',
    password: ''
  };

  saveFormData(data: SignUpFormData) {
    this.formData = { ...data };
  }

  getFormData(): SignUpFormData {
    return { ...this.formData };
  }

  clearFormData() {
    this.formData = {
      email: '',
      password: ''
    };
  }
} 