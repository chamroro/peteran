import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import QnA from "./routes/QnA";
import Mypage from "./routes/Mypage";
import Clinic from "./routes/Clinic";
import SearchPage from "./routes/Search";

function App() {
  return <Router>
    <Switch>
    <Route exact path="/">
        <Home />
      </Route>
    <Route exact path="/qna">
        <QnA />
      </Route>

      <Route exact path="/search">
        <SearchPage />
      </Route>
     
      <Route exact path="/clinic">
        <Clinic />
      </Route>
      
      <Route exact path="/mypage">
        <Mypage />
      </Route>
      <Route exact path="/qna/:id">
        <Detail />
      </Route>
    </Switch>
  </Router>;
}
export default App;