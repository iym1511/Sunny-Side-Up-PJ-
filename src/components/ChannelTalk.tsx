import ChannelService from "../module/ChannelService";

const ChannelTalk = () => {
  ChannelService.loadScript();

  ChannelService.boot({
    "pluginKey": "646321f52b2478131110",
  })

  return (  
    <div>
      <p>하이 채널톡</p>
    </div>
  );
}
 
export default ChannelTalk;