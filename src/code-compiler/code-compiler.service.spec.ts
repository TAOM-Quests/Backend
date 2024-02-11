import { Test, TestingModule } from '@nestjs/testing';
import { CodeCompilerService } from './code-compiler.service';

describe('CodeCompilerService', () => {
  let service: CodeCompilerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeCompilerService],
    }).compile();

    service = module.get<CodeCompilerService>(CodeCompilerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
