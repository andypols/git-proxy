const { expect } = require('chai');

// Helper to reload the module fresh each time
function loadApiBase() {
  delete require.cache[require.resolve('../../src/ui/apiBase')];
  return require('../../src/ui/apiBase');
}

describe('apiBase', () => {
  let originalEnv;

  before(() => {
    global.location = { origin: 'http://my-lovely-git-proxy.server' };
  });

  after(() => {
    delete global.location;
  });

  beforeEach(() => {
    originalEnv = process.env.VITE_API_URI;
    delete process.env.VITE_API_URI;
    delete require.cache[require.resolve('../../src/ui/apiBase')];
  });

  afterEach(() => {
    if (typeof originalEnv === 'undefined') {
      delete process.env.VITE_API_URI;
    } else {
      process.env.VITE_API_URI = originalEnv;
    }
    delete require.cache[require.resolve('../../src/ui/apiBase')];
  });

  it('should default API_BASE to empty string if VITE_API_URI is not set', () => {
    const { API_BASE } = loadApiBase();
    expect(API_BASE).to.equal('http://my-lovely-git-proxy.server');
  });

  it('should set API_BASE to VITE_API_URI value if no trailing slash', () => {
    process.env.VITE_API_URI = 'https://example.com';
    const { API_BASE } = loadApiBase();
    expect(API_BASE).to.equal('https://example.com');
  });

  it('should remove all trailing slashes from VITE_API_URI for API_BASE', () => {
    process.env.VITE_API_URI = 'https://example.com////';
    const { API_BASE } = loadApiBase();
    expect(API_BASE).to.equal('https://example.com');
  });
});
