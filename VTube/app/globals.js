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
        },
        {
            id: "kol-f02",
            name: "KOL Female 02",
            thumbnail: KOLSample,
        },
        {
            id: "kol-m01",
            name: "KOL Male 01",
            thumbnail: KOLSample,
        },
        {
            id: "kol-m02",
            name: "KOL Male 02",
            thumbnail: KOLSample,
        },
        {
            id: "kol-m03",
            name: "KOL Male 03",
            thumbnail: KOLSample,
        },
        {
            id: "kol-m04",
            name: "KOL Male 04",
            thumbnail: KOLSample,
        },
        {
            id: "kol-m05",
            name: "KOL Male 05",
            thumbnail: KOLSample,
        },
    ],
    transfers: [
        {
            id: "luna-transfer-01",
            name: "KOL Female 01 > Luna",
            thumbnail: TransferSample,
        },
        {
            id: "luna-transfer-02",
            name: "KOL Female 02 > Luna",
            thumbnail: TransferSample,
        },
    ],
    plates: [
        {
            id: "plate-01",
            name: "Plate Sample 01",
            thumbnail: PlateSample,
        },
        {
            id: "plate-02",
            name: "Plate Sample 02",
            thumbnail: PlateSample,
        },
    ],
    finals: [
        {
            id: "final-01",
            name: "Final Sample 01",
            thumbnail: FinalSample,
        },
        {
            id: "final-02",
            name: "Final Sample 02",
            thumbnail: FinalSample,
        },
    ],
};

export default data;
