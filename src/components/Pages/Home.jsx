import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../redux/actionCreators";
import store from "../../redux/store";
import Banner from "../Organisms/Banner";
import Publication from "../Organisms/Publication";

const Home = ({ posts }) => {
    useEffect(() => {
        store.dispatch(getAllPosts());
    }, []);
    return (
        <>
            <Banner
                color="dark-color"
                image=""
                title="Bienvenido a la experiencia más increíble de educación online. Comienza hoy mismo a  aprender."
                subtitle="Plataforma de educación más innovadora."
                home
                poster=""
            />
            <main className="ed-grid m-grid-3">
                <div className="l-section m-cols-2">
                    <h2>Últimas Publicaciones</h2>
                    {posts ? (
                        <div>
                            {posts.map((p) => (
                                <Publication
                                    title={p.title}
                                    author={p.author}
                                    fecha={p.fecha}
                                    content={p.content}
                                    key={p.id}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No existen publicaciones por el momento</p>
                    )}
                </div>
                <div>
                    <h3>Lista de categorías</h3>
                    <ul className="feature-list">
                        <li>
                            <span>React.js</span>
                        </li>
                        <li>
                            <span>React Native</span>
                        </li>
                        <li>
                            <span>Angular</span>
                        </li>
                        <li>
                            <span>Html</span>
                        </li>
                        <li>
                            <span>Css</span>
                        </li>
                        <li>
                            <span>Python</span>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};
const mapStateToProps = (state) => ({
    posts: state.postReducer.posts,
});
export default connect(mapStateToProps, {})(Home);
