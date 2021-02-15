import { useState } from 'react';
import Post from '../model/Post';
import contentToHtml from './contentToHtml';
import { Divider } from './Divider';

export type EditorProps = {
  readonly post?: Post;
}

export const Editor: React.FC<EditorProps> = ({ post }) => {
  const [state, setState] = useState({
    title: post?.title || "",
    tag: post?.tag || "",
    content: post?.content || "",
    date: post?.date || new Date().toLocaleDateString('en-GB')
  });

  const submit = () => {
    console.log('NYI post')
    //Must do a check to see whether we're editing an existing post
  }

  return (
    <div className="editor">
      <textarea className="row content"
        name="content"
        value={state.content}
        onChange={(event) => setState({
          ...state,
          content: event.target.value
        })}
      />
      <div className="toolbar row">
        <input
          name="title"
          placeholder="title"
          value={state.title}
          onChange={(event) => setState({
            ...state,
            title: event.target.value
          })} />
        <input
          name="tag"
          placeholder="tag"
          value={state.tag}
          onChange={(event) => setState({
            ...state,
            tag: event.target.value
          })} />
        <button onClick={submit}>
          {post ? "update" : "post"}
        </button>
      </div>
      <hr />
      <div className="post row">
        <div className="header">
          <div> {state.title} </div>
          <div>
            {state.tag && <span><Divider /> {state.tag} <Divider /></span>}
            {state.date}
          </div>
        </div>
        <hr />
        <div className="content"
          dangerouslySetInnerHTML={contentToHtml(state.content)} />
      </div>
    </div>
  );
}