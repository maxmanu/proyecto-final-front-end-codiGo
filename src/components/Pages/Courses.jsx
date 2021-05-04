import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCourses } from "../../redux/actionCreators";
import store from "../../redux/store";
import Banner from "../Organisms/Banner";
import Card from "../Organisms/Card";

const Courses = ({ courses }) => {
    useEffect(() => {
        store.dispatch(getAllCourses());
    }, []);

    return (
        <>
            <Banner
                color="dark-color"
                image={{
                    src:
                        "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                    alt: "Banner especialidades",
                }}
                title="Nuestros cursos"
                subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnología"
            />
            {courses && (
                <main className="ed-grid m-grid-5">
                    {courses.map((c) => (
                        <Card
                            path="cursos"
                            picture={c.picture}
                            name={c.name}
                            key={c.id}
                            cardId={c.id}
                        />
                    ))}
                </main>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    courses: state.courseReducer.courses,
});

export default connect(mapStateToProps, {})(Courses);
