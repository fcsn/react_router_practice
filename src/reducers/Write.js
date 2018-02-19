import { createAction, handleActions } from 'redux-actions';

const CREATE_POST = 'CREATE_POST';
// export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
// export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
// export const RESET_NEW_POST = 'RESET_NEW_POST';
export const createPost = createAction(CREATE_POST); // {index, title, contents}

const initialState = {
  posts: [],
  post: {
        index: 0,
        title: '',
        contents: ''
        }   
};

export default function write(state=initialState, action) {
    const { posts } = state;
  switch(action.type) {
        case CREATE_POST:
        return{ ...state, posts: [
            ...posts, {
                title: action.title,
                contents: action.contents
            }
        ]
    };
  }
}
