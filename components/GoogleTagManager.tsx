import { GoogleTagManager as GoogleTagManagerPage } from '@next/third-parties/google'

const GTM_ID = 'GTM-MPBB4DV6';

export default function GoogleTagManager() {
    return (
        <>
            <noscript
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
                }}
            />
            <GoogleTagManagerPage gtmId={GTM_ID} />
        </>

    );
}