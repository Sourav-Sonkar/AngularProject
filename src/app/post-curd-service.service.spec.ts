import { TestBed } from '@angular/core/testing';

import { PostCurdServiceService } from './post-curd-service.service';

describe('PostCurdServiceService', () => {
  let service: PostCurdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCurdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
