import React from 'react';
import PropTypes from 'prop-types';
import './Write.css';
import { Button } from 'reactstrap';

export default class Write extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contents: '',
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(e) {
    //     this.setState({
    //         contents: e.target.value
    //     });
    // }

  handleChange(e) {
    let nextState={};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

render(){
return (
            <div>
                <div>
                  <p className="title">Write Your <b>Post</b></p>
                  <textarea
                      name="title"
                      className="titlefield"
                      placeholder="Write down your title"
                      value={this.state.title}
                      onChange={this.handleChange}></textarea>
                    <textarea
                        name="contents"
                        className="textfield"
                        placeholder="Write down your memo"
                        value={this.state.contents}
                        onChange={this.handleChange}></textarea>
                </div>
                <div className="under">
                  <Button outline color="secondary" className="button">POST</Button>
                  <Button outline color="secondary" className="button">CANCEL</Button>
                </div>
            </div>
          );
        }

}
