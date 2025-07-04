import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistComponent } from './task-list.component';

describe('TasklistComponent', () => {
  let component: TasklistComponent;
  let fixture: ComponentFixture<TasklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
