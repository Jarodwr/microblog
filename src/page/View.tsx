import { FC } from "react";
import { useParams } from "react-router-dom";
import contentToHtml from "../shared/contentToHtml";
import { Divider } from "../shared/Divider";
import stub from "../stub";

export type ViewProps = {}

export const View: FC = () => {
  const { id } = useParams<{ id: string }>();

  const post = stub.posts[Number.parseInt(id)];

  return (
    <div className="post row">
      <div className="header">
        <div> {post.title} </div>
        <div>
          <Divider />
          <a> {post.tag} </a>
          <Divider />
          {post.date.toLocaleDateString('en-GB')}
        </div>
      </div>
      <hr />
      <div className="content" dangerouslySetInnerHTML={contentToHtml(post.content)} />
    </div>);
}