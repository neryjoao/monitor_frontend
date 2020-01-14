import React, {useEffect, useRef} from 'react';
import { getHost } from '../helpers/utilities'
import WSAcvPlayer from 'ws-avc-player';

export const VideoStream = () => {
    const streamHtmlElement = useRef(null);

    useEffect(() => {
        const wsavc = new WSAcvPlayer(streamHtmlElement, "webgl");
        streamHtmlElement.current.appendChild(wsavc.AvcPlayer.canvas);
        var protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        wsavc.connect(protocol + getHost() + '/camera');
    }, []);

    return <>
        <div className="videostream-camera" ref={streamHtmlElement}/>
        </>;
};