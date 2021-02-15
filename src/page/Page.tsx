import { FC } from "react";
import { Link } from 'react-router-dom';

import AuthContext from "../shared/AuthContext";
import { Divider } from "../shared/Divider";

export const Page: FC = ({ children }) =>
  <div className="page">
    <div className="top-bar row">
      <div>
        <Link className="title" to="/">
          microblog
        </Link>
      </div>
      <div className="options">
        <AuthContext.Consumer>
          {value => value.authenticated
            ? (
              <div>
                <Link to="post">post</Link>
                <Divider />
                <Link to="settings">settings</Link>
              </div>
            )
            : (
              <input placeholder="access-code" />
            )}
        </AuthContext.Consumer>
      </div>
    </div>
    <div className="row">
      {children}
    </div>
  </div>