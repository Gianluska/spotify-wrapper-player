import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify Wrapper', () => {
  it('should be an object', () => {
    expect(spotify).to.be.an.object;
  });

  it('should have search methods', () => {
    expect(spotify.search).to.exist;
  });

  it('should have album method', () => {
    expect(spotify.album).to.exist;

  })
});
