import { useContext, useEffect, useState } from "react";
import TranscriptCard from "./components/TranscriptCard";
import { TranscriptCardType } from "./components/TranscriptCard";
import "./allTranscripts.scss";
import EpisodeContext, { Season } from "../../../../store/EpisodeContext";

interface Props {
  id: string;
}
const AllTranscripts = ({ id }: Props) => {
  const seasonContext = useContext(EpisodeContext);
  const [currentSeason, setCurrentSeason] = useState(0);
  const [currentSeasonId, setCurrentSeasonId] = useState(1);
  const [seasonList, setSeasonList] = useState<Season[]>([]);
  const [currentEpisodeList, setCurrentEpisodeList] = useState<
    TranscriptCardType[]
  >([]);

  useEffect(() => {
    const list = seasonContext.seasonList.sort(
      (a: Season, b: Season) => a.season_id - b.season_id
    );

    setSeasonList(list);

    if (seasonContext.seasonList.length > 0) {
      setCurrentEpisodeList(() =>
        [
          ...seasonContext.seasonList[currentSeason]?.episodes.filter(
            (item: any) => !item.found
          ),
        ].reverse()
      );
      setCurrentSeasonId(seasonContext.seasonList[currentSeason]?.season_id);
    }
  }, [seasonContext]);

  const showCurrentSeasonEpisodes = (index: number) => {
    setCurrentSeason(index);
    setCurrentEpisodeList(() =>
      [
        ...seasonContext.seasonList[index]?.episodes.filter(
          (item: any) => !item.found
        ),
      ].reverse()
    );
    setCurrentSeasonId(seasonContext.seasonList[index]?.season_id);
  };

  return (
    <div className="all-transcripts-div">
      <div className="wrapper">
        <h2>All Episodes Transcripts</h2>

        <div className="d-flex season-container">
          {seasonList?.length > 0
            ? seasonList.map((season, index) => (
                <div
                  key={season.season_id || index}
                  className={currentSeason === index ? "active" : ""}
                  onClick={() => showCurrentSeasonEpisodes(index)}
                >
                  Season {season.season_id}
                </div>
              ))
            : null}
        </div>

        <div className="transcript-cards-container">
          {currentEpisodeList?.length > 0
            ? currentEpisodeList.map((card, index) => (
                <TranscriptCard
                  id={`s${currentSeason}epi${index}`}
                  active={id}
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  price="$5.50"
                  episdode_no={card.episdode_no}
                  currentSeason={currentSeasonId}
                  image={card.image}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default AllTranscripts;
