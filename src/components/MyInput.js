import React from 'react';
import {convertToRaw, Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './MyInput.scss'
class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    console.log("prop",props)
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = editorState => {
      this.setState({editorState})
      const contentState = editorState.getCurrentContent();
      const rawContentState = convertToRaw(contentState);
      const contentAsText = JSON.stringify(rawContentState);
      this.props.setComment(contentAsText);
    };
  }
  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} placeholder='Add new comment'/>
    );
  }
}

export default MyEditor;