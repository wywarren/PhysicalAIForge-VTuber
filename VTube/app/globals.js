import Hachiware from "./../assets/img/hachiware.jpg";
import Luna from "./../assets/img/Luna.jpg";
import KOLSample from "./../assets/img/kol-sample.png";
import TransferSample from "./../assets/img/sample-transfer.jpg";
import PlateSample from "./../assets/img/heidi-fin-2TLREZi7BUg-unsplash.jpg";
import FinalSample from "./../assets/img/sample-composite.png";

const data = {
    avatars: [
        {
            id: "luna",
            name: "Luna",
            thumbnail: Luna,
        },
        {
            id: "hachiware",
            name: "Hachiware",
            thumbnail: Hachiware,
        }
    ],
    clips: [
        {
            id: "kol-f01",
            name: "KOL Female 01",
            thumbnail: KOLSample,
            url: "https://media.qoobit.com/2026/09/06/kol1.mp4",
        },
        {
            id: "kol-f02",
            name: "KOL Female 02",
            thumbnail: "https://media.qoobit.com/2026/09/06/kol2.png",
            url: "https://media.qoobit.com/2026/09/06/kol2.mp4",
        }
    ],
    transfers: [
        {
            id: "luna-transfer-01",
            name: "KOL Female 01 > Luna",
            thumbnail: TransferSample,
            url: "https://media.qoobit.com/2026/09/06/lipsynckol1black.mp4",
        },
        {
            id: "luna-transfer-02",
            name: "KOL Female 02 > Luna",
            thumbnail: TransferSample,
            url: "https://media.qoobit.com/2026/09/06/lipsynckol1green.mp4",
        },
    ],
    plates: [
        {
            id: "noxcat-01",
            name: "NOXCAT CM1",
            thumbnail: "https://media.qoobit.com/2026/09/06/cmss1.png",
            url: "https://media.qoobit.com/2026/09/06/cm1.mp4",
        },
        {
            id: "noxcat-02",
            name: "NOXCAT CM2",
            thumbnail: "https://media.qoobit.com/2026/09/06/cm2.png",
            url: "https://media.qoobit.com/2026/09/06/cm2.mp4",
        },
    ],
    finals: [
        {
            id: "final-01",
            name: "Final Sample 01",
            thumbnail: "https://media.qoobit.com/2026/09/06/comp1.png",
            url: "https://media.qoobit.com/2026/09/06/cmfinallipsync.mp4",
        },
        {
            id: "final-02",
            name: "Final Sample 02",
            thumbnail: FinalSample,
            url: "https://media.qoobit.com/2026/09/06/cm2.mp4",
        },
    ],
};

export default data;
