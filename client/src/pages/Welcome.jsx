import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useChannelContext } from "../context/ChannelContext";

// All styled components here
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Form = styled.form`
  padding: 70px 50px;
  border: 1px solid black;

  > input {
    margin: 10px 0;
  }
`;

const Welcome = () => {
  const [joinConfig, setJoinConfig] = useState({ channel: "", username: "  " });
  const { channels, setChannels } = useChannelContext();
  const navigate = useNavigate();

  const joinChannel = (e) => {
    e.preventDefault();
    // Add the new channel to the list of channel
    if (!(joinConfig.channel in channels))
      setChannels((prevChannels) => {
        return { ...prevChannels, [joinConfig.channel]: [] };
      });
    // Navigate to the video call lobby of the channel
    navigate("/channel/" + joinConfig.channel);
  };

  const handleChange = (e) => {
    setJoinConfig((oldJoinConfig) => {
      return { ...oldJoinConfig, [e.target.name]: e.target.value };
    });
  };

  return (
    <Section>
      <Form action="" onSubmit={joinChannel}>
        <input
          type="text"
          name="username"
          value={joinConfig.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <br />
        <input
          type="text"
          name="channel"
          value={joinConfig.channel}
          onChange={handleChange}
          placeholder="Channel Name"
        />
        <br />
        <button type="submit">Join</button>
      </Form>
    </Section>
  );
};

export default Welcome;
