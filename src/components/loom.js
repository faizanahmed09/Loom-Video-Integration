import { setup, isSupported } from "@loomhq/record-sdk";
import {oembed} from "@loomhq/loom-embed";
import { useEffect, useState } from "react";

const PUBLIC_APP_ID = "public-app-id-obtained-from-developer-portal";
const BUTTON_ID = "loom-record-sdk-button";
let i=0;

export default function Loom() {
    const [videoHTML, setVideoHTML] = useState("");
    const [url, setUrl] = useState("");


    useEffect(() => {

        async function setupLoom() {
            const { supported, error } = await isSupported();

            if (!supported) {
                console.warn(`Error setting up Loom: ${error}`);
                return;
            }

            const button = document.getElementById(BUTTON_ID);

            if (!button) {
                return;
            }

            const { configureButton } = await setup({
                publicAppId: '1745b3fd-44b5-488d-8b8e-3f41ec2e8ae9',
                onRecordingStarted: () => {
                    console.log("Recording started");
                }
            });

            const sdkButton = configureButton({ element: button });

            // sdkButton.on("insert-click", async (video) => {
            //     const { html } = await oembed(video.sharedUrl, { width: 400 });
            //     console.log("Loom.js: html: " + html);
            //     setVideoHTML(html);
            //
            // });
            sdkButton.on("recording-complete", async (video) => {
                const { html } = await oembed(video.sharedUrl, { width: 400 });
                let cutUrl = html.split("<iframe")[1].split("</iframe>")[0];
                let cutUrl2 = cutUrl.split("src=")[1].split(" ")[0];
                setUrl(cutUrl2);
                setVideoHTML(html);
            });
        }

        setupLoom();
    }, []);

    return (
        <>
            <button  id={BUTTON_ID}>Record</button>
            {/*<div dangerouslySetInnerHTML={{ __html: videoHTML }}></div>*/}

        </>
    );
}
