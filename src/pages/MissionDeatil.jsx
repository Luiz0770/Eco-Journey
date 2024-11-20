import { useParams } from "react-router-dom";

export default function MissionDetail() {

    const { missionId } = useParams()

    console.log(missionId)

    return (
        <>
            <h3>Missão: {missionId}</h3>
        </>
    );
}
