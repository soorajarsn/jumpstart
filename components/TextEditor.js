import React, { Component } from "react";
import "./TextEditor.css";
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import FormatBoldRoundedIcon from "@material-ui/icons/FormatBoldRounded";
import FormatItalicRoundedIcon from "@material-ui/icons/FormatItalicRounded";
import FormatUnderlinedSharpIcon from "@material-ui/icons/FormatUnderlinedSharp";
// Font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faListOl } from "@fortawesome/free-solid-svg-icons";

class Editors extends Component {
  constructor(props) {
    super(props);
    if (this.props.raw) {
      this.state = { editorState: EditorState.createWithContent(convertFromRaw(this.props.raw)), characters: 0 };
    } else {
      this.state = { editorState: EditorState.createEmpty(), characters: 0 };
    }
    this.onChange = editorState => {
      let contentState = editorState.getCurrentContent();
      this.setState({ editorState: editorState, characters: contentState.getPlainText().length });
      // if(contentState.getPlainText().length <= 500){
      props.setMax(false);
      props.setDesc(convertToRaw(this.state.editorState.getCurrentContent()));
      // } else {
      //   props.setMax(true);
      // }
    };
  }

  handleKeyCommand(command)  {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  onItalicClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC"));
  };

  onBoldClick(){
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE"));
  };

  onULClick  () {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, "unordered-list-item"));
  };

  onOLClick  () {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, "ordered-list-item"));
  };

  render() {
    return (
      <div className="editor">
        <Editor
          value={this.props.value}
          editorState={this.state.editorState}
          placeholder="Leave a Comment"
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          className="editor__textarea scroll"
        />
        <div className="editor__buttons">
          <div onClick={this.onBoldClick}>
            <FormatBoldRoundedIcon />
          </div>
          <div onClick={this.onItalicClick}>
            <FormatItalicRoundedIcon />
          </div>
          <div onClick={this.onUnderlineClick}>
            <FormatUnderlinedSharpIcon />
          </div>
          <div className="icons" onClick={this.onULClick}>
            <FontAwesomeIcon icon={faList} size="1x" />
          </div>
          <div className="icons" onClick={this.onOLClick}>
            <FontAwesomeIcon icon={faListOl} size="1x" />
          </div>
        </div>
      </div>
    );
  }
}

export default Editors;