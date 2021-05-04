import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSpeciality } from "../../redux/actionCreators";
import store from "../../redux/store";
import Banner from "../Organisms/Banner";

const Speciality = ({ speciality }) => {
    useEffect(() => {
        store.dispatch(getSpeciality(1));
    }, []);

    return (
        <>
            {speciality && (
                <>
                    <Banner
                        color="dark-color"
                        title={speciality.data.name}
                        subtitle={speciality.data.subtitle}
                        image={{
                            src: "https://via.placeholder.com/1920x600?text=Foto+ Banner",
                            alt: speciality.data.name,
                        }}
                        courseBanner
                        poster={speciality.data.picture}
                        info={speciality.data.information}
                    />
                    <main className="ed-grid lg-grid-10">
                        <div className="lg-cols-7">
                            <div className="course-features ed-grid lg-grid-3 l-block s-border s-pxy-2 s-radius s-bg-white s-shadow-bottom">
                                <div className="">
                                    <h3 className="t4">¿Qué aprenderás?</h3>
                                    {speciality.data.abilities.map((a) => (
                                        <li key={a.id}>{a.description}</li>
                                    ))}
                                </div>
                                <div className="">
                                    <h3 className="t4">Conociminetos previos</h3>
                                    <ul>
                                        {speciality.data.knowledge.map((k) => (
                                            <li key={k.id}>{k.description}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="">
                                    <h3 className="t4">Nivel</h3>
                                    <p>{speciality.data.level}</p>
                                </div>
                            </div>
                            <h2>Temario de la especialidad</h2>
                            <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                                {speciality.data.courses.map((cl) => (
                                    <div className="course-class l-section" key={cl.id}>
                                        <div className="ed-grid m-grid-3">
                                            <img src={cl.picture} alt={cl.name} />
                                            <div className="m-cols-2">
                                                <h3>{cl.name}</h3>
                                                <p>{cl.information}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    speciality: state.specialityReducer.speciality,
});

export default connect(mapStateToProps, {})(Speciality);
