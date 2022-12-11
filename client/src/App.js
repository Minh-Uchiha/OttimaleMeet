import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome, VideoCall, Analysis } from "./pages";
import { useChannelContext } from "./context/ChannelContext";

const App = () => {
  const { channels } = useChannelContext();
  const channelNames = Object.keys(channels);
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* Set up routes for multiple channels */}
          {channelNames.map((channel) => {
            return (
              <Route path={`/channel/${channel}`} elements={<VideoCall />} />
            );
          })}
          {channelNames.map((channel) => {
            return (
              <Route path={`/analysis/${channel}`} elements={<Analysis />} />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
