import { createAction, handleActions } from 'redux-actions';

const CREATE_POST = 'CREATE_POST';
// export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
// export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
// export const RESET_NEW_POST = 'RESET_NEW_POST';
export const createPost = createAction(CREATE_POST); // {index, title, contents}

const initialState = {
 
  posts: [{
        index: 0,
        title: 'a',
        contents: 'aaa'
        },{
            index: 0,
            title: 'b',
            contents: 'bbb'
        },{
            index: 0,
            title: 'c',
            contents: 'ccc'
        }]   
};

export default function reducer(state=initialState, action) {
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
