/*
 * MediaStream tech for webrtc peering
 *
 * @author   Dan Rossi <danielr@electroteque.org>
 * @license  MIT
 */

import videojs from 'video.js';

const Tech = videojs.getComponent('Tech'),
    Html5 = Tech.techs_["Html5"],
    supportsSrcObject = 'srcObject' in HTMLMediaElement.prototype;
export default class MediaStreamTech extends Html5 {
    constructor(options, ready) {
        super(options, ready);
    }
    /**
     * @override
     */
    setSrc(src) {}
    /**
     * @override
     */
    src() {}
    /**
     * @override
     */
    currentSrc() {}
    /**
     * @param {source} Source object with mediastream 
     * @override
     */
    setSource(source) {
        //mediastream is set on the stream property not src property
        if (supportsSrcObject) {
            this.el_.srcObject = source.stream;
        } else {
            this.el_.src = window.URL.createObjectURL(source.stream);
        }
        this.el_.play();
        this.trigger("playing");
    }
    /**
     * @override
     */
    static isSupported() {
        return true;
    }
    /**
     * @param {ssrcObj} Source object with mediastream 
     * @param {options} options
     * @override
     */
    static canPlaySource(srcObj, options) {
        //set to whatever mimetype required ie application/webrtc-peer
        return /webrtc-peer/.test(srcObj.type);
    }
    log(message) {
        videojs.log.debug(message);
    }
}