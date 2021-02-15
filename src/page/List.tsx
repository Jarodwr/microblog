import React, { useState, FC } from 'react';

import stub from '../stub';
import AuthContext from '../shared/AuthContext';
import { Divider } from '../shared/Divider';
import { Link } from 'react-router-dom';
import contentToHtml from '../shared/contentToHtml';

const separator = ';'

export type ListProps = {}

export const List: FC<ListProps> = (props) => {
  const [state, setState] = useState({
    tags: "",
    from: null as (Date | null),
    to: null as (Date | null)
  });

  const tagsList = state.tags
    .split(separator)
    .filter(title => title !== "");

  const addTag = (tag: string) =>
    setState({
      ...state,
      tags: Array.from(new Set(tagsList.concat([tag]))).join(separator)
    });

  const setFromDate = (value: Date | null) => setState({
    ...state,
    from: value
  });

  const setToDate = (value: Date | null) => setState({
    ...state,
    to: value
  });

  //TODO: make into network call
  const getPosts = () => {
    return stub.posts;
  }

  return (
    <>
      <div className="filter row">
        <div className="tags">
          {stub.tags.map(tag =>
            <a key={tag}
              href="#"
              onClick={event => {
                event.preventDefault();
                addTag(tag);
              }}>
              {tag}
            </a>)}
        </div>
        <form>
          <input
            name="tags"
            placeholder='tags'
            value={state.tags}
            onChange={event => setState({
              ...state,
              tags: event.target.value
            })} />
          <input
            name="from"
            type="date"
            placeholder='from'
            onChange={event => setFromDate(event.target.valueAsDate)} />
          <input
            name="to"
            type="date"
            placeholder='to'
            onChange={event => setToDate(event.target.valueAsDate)} />
        </form>
      </div>

      {getPosts().map(post =>
        <div key={post.id} className="post row">
          <div className="header">
            <div>
              {post.title}
              <AuthContext.Consumer>
                {value => value.authenticated && (
                  <>
                    <Divider />
                    <Link to={`edit/${post.id}`}>edit</Link>
                    <Divider />
                    <Link to={`view/${post.id}`}>view</Link>
                  </>
                )}
              </AuthContext.Consumer>
            </div>
            <div>
              <Divider />
              <a href="#"
                onClick={event => {
                  event.preventDefault();
                  addTag(post.tag);
                }}>
                {post.tag}
              </a>
              <Divider />
              {post.date.toLocaleDateString('en-GB')}
            </div>
          </div>
          <hr />
          <div className="content" dangerouslySetInnerHTML={contentToHtml(post.content)} />
        </div>
      )}
    </>);
}