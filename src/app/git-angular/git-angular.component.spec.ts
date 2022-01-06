import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitAngularComponent } from './git-angular.component';

describe('GitAngularComponent', () => {
  let component: GitAngularComponent;
  let fixture: ComponentFixture<GitAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
