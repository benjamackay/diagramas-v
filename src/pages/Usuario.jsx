import Logo from "../Assets/icons/logo-usm.png"
import CuadroTexto from "../Components/CuadroTexto";
import React, { useState } from "react";
import Editor from "../Components/EditorWrapper";
import TextareaConArchivos from "../Components/TextareaConHipervinculo";
import html2pdf from "html2pdf.js";
import Background from '../Assets/icons/FotoV.png'

const Usuario = () =>{
  const MAX_CARACTERES = 300;
    const [valoresTextareas, setValoresTextareas] = useState({
        teorias: "",
        ecuaciones: "",
        conceptos: "",
        preguntasFoco: "",
        eventos: "",
        conclusiones: "",
        transformaciones: "",
        registros: "",
      });

    const handleTextareaChange = (e, campo) => {
    const nuevoValor = e.target.value;
    if (nuevoValor.length <= MAX_CARACTERES) {
      setValoresTextareas((prev) => ({ ...prev, [campo]: nuevoValor }));
    }
  };

    async function descargarPDF() {
    window.print();
    const element = document.getElementById("archivo");
  }


    return(
        <div id="archivo" className="flex flex-col h-screen font-[Libre_Baskerville]">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-32">
                <div className="flex flex-col w-full lg:w-1/3 items-center lg:items-start pl-0 md:pl-4">
                  <img src={Logo} className="w-32 h-auto" />
                  <hr className="w-full my-2 " />
                  <p className="mt-2 text-center lg:text-left text-white md:text-black no-print">Dominio Conceptual</p>
                  
                </div>
                <div className="flex w-full lg:w-auto justify-center">
                  <input
                    type="text"
                    required
                    className="md:w-[600px] sm:w-[300px] h-12 sm:h-16 border text-center rounded px-2 py-1 font-black resize-none text-[14px] "
                    placeholder="Título de la experiencia"
                  />
                </div>
            
                <div className="flex flex-col w-full lg:w-1/3 items-center lg:items-end pr-0 md:pr-4">
                  <p className=" sm:text-right">Universidad Técnica Federico Santa María</p>
                  <p className="text-center sm:text-right">Laboratorio de Experimentos Remotos</p>
                  <hr className="w-full my-2" />
                  <p className="mt-2 text-center lg:text-right sm:text-white text-white md:text-black no-print">Dominio Metodológico</p>
                
                </div>
              </div>
            <div className="flex flex-col justify-center items-center p-4 space-y-4">
                <div className="md:flex md:flex-row w-full space-y-4 md:space-x-16 md:justify-between">
                <div className="order-2 md:order-1">
                <CuadroTexto
                    onChange={handleTextareaChange}
                    value={valoresTextareas.teorias}
                    campo="teorias"
                    placeholder="Teorías: "
                    width="w-full md:w-[400px]"
                    textoplace={"Conjunto(s) organizado(s) de principios y conceptos que guían la producción de conocimientos, explicando por qué los eventos u objetos exhiben lo que es observado."}
                />
                </div>
                <div className="order-1 md:order-2">
                <CuadroTexto
                    onChange={handleTextareaChange}
                    value={valoresTextareas.preguntasFoco}
                    campo="preguntasFoco"
                    placeholder="Preguntas de Foco: "
                    width="w-full md:w-[300px]"
                    className="order-1 md:order-2 sm:order-1"
                    textoplace={"Preguntas que guían la investigación y el análisis de la experiencia."}
                />
                </div>
                <div className="order-6 md:order-3">
                      <CuadroTexto
                      onChange={handleTextareaChange}
                      value={valoresTextareas.conclusiones}
                      campo="conclusiones"
                      placeholder="Conclusiones: "
                      width="w-full md:w-[400px]"
                      textoplace={"Enunciados que responden a la(s) pregunta(s) foco y que son interpretaciones razonables de los registros y de las transformaciones metodológicas a la luz del dominio conceptual."}
                  />
                </div>
                </div>

                <div className="md:flex md:flex-row w-full space-y-4 md:space-y-0 md:space-x-16 md:justify-between">
                      <Editor 
                    value={valoresTextareas.ecuaciones}
                    onChange={handleTextareaChange}
                    campo="ecuaciones"
                    width={"w-full md:w-[500px]"}
                    placeholder="Ecuaciones:"
                    textoplace={"Ecuaciones propias emanadas de la teoria que ayudan a abordar o resolver la problemática en las transformaciones."}
                />
                <Editor
                value={valoresTextareas.transformaciones}
                    onChange={handleTextareaChange}
                    
                    campo="transformaciones"
                    placeholder="Transformaciones: "
                    width={"w-full md:w-[500px]"}
                    textoplace={"En esta seccion se interpretan los resultados obtenidos, comparándolo con valores teóricos o esperados, identificando tendencias, relaciones o discrepancias, y evaluando su validez a partir de los datos experimentales."}
                />
                </div>
                <div className="md:flex md:flex-row w-full space-y-4 md:space-x-16 md:justify-between mt-2">
                    <CuadroTexto
                    onChange={handleTextareaChange}
                    value={valoresTextareas.conceptos}
                    campo="conceptos"
                    placeholder="Conceptos: "
                    width="w-full md:w-[600px]"
                    textoplace={"Regularidades percibidas en eventos y objetos indicadas por un rótulo (la palabra concepto)."}
                />

                <div className="flex justify-end">
                    <TextareaConArchivos
                    onChange={handleTextareaChange}
                    value={valoresTextareas.registros}
                    campo="registros"
                    placeholder="Registros: "
                    width="w-full md:w-[600px]"
                    textoplace = {"Observaciones hechas y registradas de los eventos u objetos estudiados (datos crudos)."}
                />
                </div>

                </div>
                <CuadroTexto
                    onChange={handleTextareaChange}
                    value={valoresTextareas.eventos}
                    campo="eventos"
                    placeholder="Eventos/objetos: "
                    width="w-full"
                    className="flex justify-center items-center"
                    textoplace={"Descripcion del (de los) eventos u objeto(s) a ser estudiado(s) a fin de responder la(s) pregunta(s) foco."}
                />
                <div>
                    <button className="border rounded-lg w-full h-12 p-2 cursor-pointer hover:scale-110 transition-normal duration-200 no-print"
                    onClick={descargarPDF}>
                        Imprimir
                    </button>
                </div>
            </div>
         </div>
    )
}

export default Usuario;