import ChannelService from "../module/ChannelService";

const ChannelTalk = () => {
  ChannelService.loadScript();

  ChannelService.boot({
    "pluginKey": "d5aab86b-b967-41f9-961c-a6c501a974fb",
  })

  return (  
    <div>
      <p>하이 채널톡</p>
    </div>
  );
}
 
export default ChannelTalk;