Video.JS MediaStreamTech
============================

A Video.JS tech useful for playing back MediaStream sources.

Usage
-----


```
import MediaStreamTech from './MediaStreamTech';

const Tech = videojs.getComponent('Tech');

Tech.registerTech('RTCSubscriberTech', RTCSubscriberTech);
```

Examples
--------

### Basic Example

```javascript
var player = videojs("peer", {
	live: true,
    sources: [
    	{type: "application/webrtc-peer", src: "", stream: mediaStream},
    ]
});

```