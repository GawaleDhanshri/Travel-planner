// Mock global document and other browser-specific objects if necessary
global.document = {
    getElementById: jest.fn(() => ({
      addEventListener: jest.fn(),
      value: ''
    }))
  };
  