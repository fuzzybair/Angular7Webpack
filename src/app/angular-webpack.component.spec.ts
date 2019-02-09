import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNG Components
import { DropdownModule, Dropdown } from 'primeng/dropdown';
import { DataItem } from './models/data-item';

import { MockComponent } from 'ng-mocks';
import { AngularWebpackComponent } from './angular-webpack.component';

describe('AngularSystemJSComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AngularWebpackComponent,
        MockComponent(Dropdown)
      ],
      imports: [FormsModule, NoopAnimationsModule],
      providers: []
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(AngularWebpackComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have greeting Hello Angular', () => {
    const fixture = TestBed.createComponent(AngularWebpackComponent);
    const component = fixture.componentInstance;
    expect(component.greeting()).toEqual('Hello, Angular');
  });

  it('should have greeting rendered in an h1', () => {
    const fixture = TestBed.createComponent(AngularWebpackComponent);
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(element.textContent).toContain('Hello, Angular');
  });

  it('should set item list in dropdown options', () => {
    const fixture = TestBed.createComponent(AngularWebpackComponent);
    fixture.detectChanges();
    const mockedDropdown = fixture.debugElement.query(By.css('#data-items')).componentInstance as Dropdown;
    expect(mockedDropdown.options).toEqual([new DataItem(1, 'Item 1'), new DataItem(2, 'Item 2')]);
  });
});
