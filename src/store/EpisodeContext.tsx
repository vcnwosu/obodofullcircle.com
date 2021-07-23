import { createContext, useState, useEffect, Context } from "react";
import { toast } from "react-toastify";
import { getRequest } from '../http/httpService';
import { AudioCardType } from "../modules/Episodes/components/AllEpisodes/components/AudioCard";
import CustomSpinner from "../shared/components/Spinner";

export interface Season {
    episodes: AudioCardType[];
    season_id: number;
}
const EpisodeContext: Context<any> = createContext({
    seasonList: []
});

export const EpisodeContextProvider = (props: any) => {
    const [seasonList, setSeasonList] = useState<Season[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getEpisodeList();
    }, [])

    const getEpisodeList = () => {
        setLoading(true);
        getRequest('get-episodes')
            .then(res => {
                setLoading(false);
                if (res.data.code >= 1000 && res.data.code <= 2000) {
                    toast.error(res.data.message);
                } else {
                setSeasonList(() => res.data.data);
                }
            })

    }
    const context = {
        seasonList
    };
    return (
        <>
            <EpisodeContext.Provider value={context}>
                {props.children}
            </EpisodeContext.Provider>
            <CustomSpinner show={loading} />
        </>
    )
}

export default EpisodeContext;