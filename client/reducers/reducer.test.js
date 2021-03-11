import postsReducer from './postsReducer';
import scratchReducer from './scratchReducer';


//Post Reducer Tests 
describe('Posts Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      posts: [],
      newPostTitle: '',
      newPostBody: '',
    }
  })

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(postsReducer(undefined, {type: undefined})).toEqual(state)
    })
  })

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(postsReducer(state, action)).toBe(state);
    });
  });

})




//Scratch Reducer Tests
describe('Scratch Reducer', () => {
  let state;
  
  beforeEach(() => {
    state = {
      user: null,
    }
  })

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(scratchReducer(undefined, {type: undefined})).toEqual(state)
    })
  })

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(scratchReducer(state, action)).toBe(state);
    });
  });


})