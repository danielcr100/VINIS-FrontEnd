import React from "react";
import "./styles/Experiencias.css";

class Experiencias extends React.Component {
    render(){
        return(
            <div className="Experiencias">
                <h3 className="mt-5 text-center txtcol-poppy">EXPERIENCIA Y SATISFACCION GARANTIZADA</h3>
                <div className="card-columns container "
                    style="background-image: url(https://i.ya-webdesign.com/images/birthday-confetti-png-3.png); background-size: 100%;">
                        <div className="container for-about">
                            <div className="card border rounded-pill">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Maria Perez</h5>
                                    <p className="card-text text-center">La experiencia con VINIS no se compara con caulquiera, es conveniente y competitivo.</p>
                                </div>
                            </div>
                            <div className="card p-3">
                                <blockquote class="blockquote mb-0 card-body">
                                    <p>AMO VINIS es la mejor aplicacion que pueda existir, ninguno como ellos.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                        Sofia Corrales <cite title="Source Title">Diseñadora Web</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                                </div>
                                <div className="card rounded-pill bgcol-petal">
                                    <div className="card-body ">
                                        <h5 className="card-title text-center">Karla Sanchez</h5>
                                        <p className="card-text text-center">Ha sido la mejor experiencia de mi vida, los recomiendo al 100% cumplen lo
                                        que dicen</p>
                                        <p className="card-text text-center"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="card bgcol-petal text-white text-center p-3 ">
                                    <blockquote className="blockquote mb-0">
                                    <p>Sin VINIS no tendria tiempo para arreglar mis uñas, desde que existen han solucionado mi tiempo y mi vida,
                                    ya no tengo que estar buscando donde hacerme las uñas.</p>
                                    <footer className="blockquote-footer text-white">
                                        <small>
                                            Laura <cite title="Source Title">Hacker en DEV.F</cite>
                                        </small>
                                    </footer>
                                    </blockquote>
                                    </div>
                                    <div className="card text-center">
                                        <div className="card-body">
                                            <h5 className="card-title">Luis Fitoria</h5>
                                            <p className="card-text">Me encanta ahora soy dueño de mi tiempo y de mi vida, no tengo que preocuparme por
                                            agendar una cita en un salon.</p>
                                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card p-3 text-right">
                                        <blockquote className="blockquote mb-0">
                                            <p>Ahora tengo tiempo para viajar, estar con mi novio y sobre todo, llevar los cursos que me gustan como los de DEV.F.</p>
                                            <footer className="blockquote-footer">
                                                <small className="text-muted">
                                                Rebeca <cite title="Source Title">Compañia de paginas web.</cite>
                                                </small>
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <div className="card rounded-pill bgcol-petal">
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Francisco Campos</h5>
                                            <p className="card-text text-center">Ahora que utilizo este servicio me emociona saber que alguien se preocupa
                                            tanto por mi y
                                            por mis necesidades.</p>
                                            <p className="card-text text-center"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                        </div>
                </div>


            </div>
        )
    }
}