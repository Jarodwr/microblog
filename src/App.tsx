import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthContext from './shared/AuthContext';
import { List } from './page/List';
import { Page } from "./page/Page";
import { View } from "./page/View";
import { Edit } from "./page/Edit";
import { Settings } from "./page/Settings";
import { Post } from "./page/Post";

const App = () =>
  <BrowserRouter>
    <AuthContext.Provider value={{ authenticated: true }}>
      <Page>
        <Switch>
          <Route path="/settings" children={<Settings />} />
          <Route path="/post" children={<Post />} />
          <Route path="/edit/:id" children={<Edit />} />
          <Route path="/view/:id" children={<View />} />
          <Route exact path="/" children={<List />} />
        </Switch>
      </Page>
    </AuthContext.Provider>
  </BrowserRouter>;

export default App;
