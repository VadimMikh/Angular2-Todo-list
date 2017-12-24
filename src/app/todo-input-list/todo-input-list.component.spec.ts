import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputListComponent } from './todo-input-list.component';

describe('TodoInputListComponent', () => {
  let component: TodoInputListComponent;
  let fixture: ComponentFixture<TodoInputListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInputListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
