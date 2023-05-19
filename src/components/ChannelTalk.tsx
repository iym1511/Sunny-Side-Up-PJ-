import ChannelService from "../module/ChannelService";

const ChannelTalk = () => {

  ChannelService.loadScript();

  ChannelService.boot({
    "pluginKey": "d5aab86b-b967-41f9-961c-a6c501a974fb",
  })

  return (  
    <>
    </>
  );
}

export default ChannelTalk;