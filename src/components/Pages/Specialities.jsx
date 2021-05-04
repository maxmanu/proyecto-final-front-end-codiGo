import React, { useEffect } from "react";
import store from "../../redux/store";
import Banner from "../Organisms/Banner";
import { connect } from "react-redux";
import { getAllSpecialities } from "../../redux/actionCreators";
import Card from "../Organisms/Card";

const Specialities = ({ specialities }) => {
    useEffect(() => {
        store.dispatch(getAllSpecialities());
    }, []);

    return (
        <>
            <Banner
                color="first-color"
                image={{
                    src:
                        "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                    alt: "Banner especialidades",
                }}
                title="Especialidades"
                subtitle="Domina una tecnlogía con las rutas de aprendizaje que te ofrecemos"
            />
            {specialities && (
                <main className="ed-grid m-grid-3">
                    {specialities.map((s) => (
                        <Card
                            path="especialidades"
                            key={s.id}
                            picture={s.picture}
                            name={s.name}
                            cardId={s.id}
                        />
                    ))}
                </main>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    specialities: state.specialityReducer.specialities,
});

export default connect(mapStateToProps, {})(Specialities);
