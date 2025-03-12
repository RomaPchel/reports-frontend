import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbLoginCallbackComponent } from './fb-login-callback.component';

describe('FbLoginCallbackComponent', () => {
  let component: FbLoginCallbackComponent;
  let fixture: ComponentFixture<FbLoginCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FbLoginCallbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FbLoginCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
