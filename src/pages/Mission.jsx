import Accordion from "../components/UI/Accordion";
import CardMission from "../components/UI/CardMission";


export default function Mission() {

    return (
        <section id="mission" className="min-h-[95vh]">
            <h2 className="text-center">Missoes</h2>
            <div className="w-10/12 mx-auto">
                <Accordion titulo={"Missoes Diarias"}>
                    <div className="p-5 border border-b-0 border-gray-200 grid grid-cols-1 sm:grid-cols-2 mdgrid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center">
                        <CardMission />
                        <CardMission />
                        <CardMission />
                        <CardMission />
                    </div>
                </Accordion>
                <Accordion titulo={"Missoes Diarias"}>
                    <div className="p-5 border border-b-0 border-gray-200 grid grid-cols-1 sm:grid-cols-2 mdgrid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center">
                        <CardMission />
                        <CardMission />
                        <CardMission />
                        <CardMission />
                    </div>
                </Accordion>
                <Accordion titulo={"Missoes Diarias"}>
                    <div className="p-5 border border-b-0 border-gray-200 grid grid-cols-1 sm:grid-cols-2 mdgrid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center">
                        <CardMission />
                        <CardMission />
                        <CardMission />
                        <CardMission />
                    </div>
                </Accordion>

            </div>
        </section>
    );
}
