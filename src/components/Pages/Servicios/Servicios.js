import React from "react";
import './Servicios.css';
import disenoGrafico from '../../../assets/images/disenoGrafico.png';
import fotografia from '../../../assets/images/fotografia.png';
import marketingDigital from '../../../assets/images/marketingDigital.png';
import marketingTradicional from '../../../assets/images/marketingTradicional.png';
import communityManager from '../../../assets/images/communityManager.png';
import gestionDeComunidades from '../../../assets/images/gestionDeComunidades.png';
import publicidadDigital from '../../../assets/images/publicidadDigital.png';
import desarrolloWeb from '../../../assets/images/desarrolloWeb.png';

const Servicios = () => {
    return (
        <div className="servicios">
            <section className="creatividadYDiseno">
                <h2 className="title">Creatividad Y Diseño</h2>
                <h4>INVERTÍ EN LA EMPRESA QUE SOS, PARA CONVERTIRTE EN LA EMPRESA QUE QUERÉS SER.</h4>
                <p className="disenoGrafico__description description">Mejoramos la calidad comunicacional de tu empresa. La identidad de marca determina la solidez y seriedad de un negocio. Creamos no sólo atracción visual, sino piezas que comuniquen bien e impacten.</p>
                <div className="disenoGrafico--title servicios__title">
                    <img src={disenoGrafico} alt='diseño grafico'></img>
                    <h3>DISEÑO GRÁFICO</h3>
                </div>
                <div className="shadow-box">
                    <div className="disenoGrafico--div inner--shadow grid-2-cols">
                        <div>
                            <p>Identidad corporativa</p>
                            <p>Diseño de Logo y distintas versiones</p>
                            <p>Rediseño de logo</p>
                            <p>Adaptación para redes sociales</p>
                            <p>Definición de paleta de colores</p>
                            <p>Definición de tipografías</p>
                            <p>Elementos gráficos o pattern</p>
                            <p>Manual de identidad</p>
                            <p>Diseño completo de marchandising</p>
                            <p>Packaging</p>
                            <p>Diseño de brochure</p>
                        </div>
                        <div>
                            <p>Diseño de menú para restaurante</p>
                            <p>Diseño de postal</p>
                            <p>Diseño de revista</p>
                            <p>Ilustración vectorial</p>
                            <p>Diseño de carpeta institucional</p>
                            <p>Diseño de hojas membretadas</p>
                            <p>Diseño de sobres</p>
                            <p>Tarjeta de eventos</p>
                            <p>Tarjetas personales</p>
                            <p>Folleteria</p>
                        </div>
                    </div>
                </div>
                <div className="fotografia--title servicios__title">
                    <h3>FOTOGRAFÍA</h3>
                    <img src={fotografia} alt='cámara'></img>
                </div>
                <div className="shadow-box-sm">
                    <div className="fotografia--div inner--shadow">
                        <p>Fotografía de producto</p>
                        <p>Fotografía publicitaria para redes sociales</p>
                    </div>
                </div>
            </section>
            <section className="marketingYComunicacion">
                <h2 className="title">Marketing Y Comunicación</h2>
                <h4>EN LOS DETALLES ESTÁ LA DIFERENCIA. MÁS FUNCIONALIDAD. MÁS IMPACTO.</h4>
                <p className="marketingYComunicacion__description description">La presencia de una marca en Facebook, Instagram, Twitter y todas las plataformas digitales sociales, logra un acercamiento directo. Crea historias y mantiene actualizadas a las empresas, facilitando el contacto real y un flujo de información permanente.</p>
                <div className="marketingDigital--title servicios__title">
                    <img src={marketingDigital} alt='marketing digital'></img>
                    <h3>MARKETING DIGITAL</h3>
                </div>
                <div className="shadow-box">
                    <div className="marketingDigital--div inner--shadow grid-1-row-2-cols">
                        <p className="grid1 p-title">Estrategia de Marketing y Comunicación en redes sociales:</p>
                        <div className="grid2">
                            <p>Diagnóstico.</p>
                            <p>Objetivo Estratégico.</p>
                            <p>Plan de ejecución.</p>
                            <p>Reporting.</p>
                            <p>Presupuesto.</p>
                        </div>
                        <div className="grid3">
                            <p>Inboud Mkt.</p>
                            <p>Growth Mkt.</p>
                            <p>Email Marketing.</p>
                            <p>Seo.</p>
                            <p>Publicidad en plataformas Ads.</p>
                        </div>
                    </div>
                </div>
                <div className="marketingTradicional--title servicios__title">
                    <h3>MARKETING TRADICIONAL</h3>
                    <img src={marketingTradicional} alt='marketing tradicional'></img>
                </div>
                <div className="shadow-box">
                    <div className="marketingTradicional--div inner--shadow grid-1-row-2-cols">
                        <p className="grid1 p-title">Plan integral de Marketing:</p>
                        <div className="grid2">
                            <p>Planteo del OMEP.</p>
                            <p>(Objetivo, metas,<br /> estrategias<br /> Xy Programa).</p>
                            <p>Análisis de empresa<br /> (interna y externa).</p>
                            <p>Análisis de la<br /> Competencia.</p>
                        </div>
                        <div className="grid3">
                            <p>Análisis de ventas.</p>
                            <p>Análisis del sector.</p>
                            <p>Investigación de Mercado.</p>
                            <p>Problemáticas y síntomas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gestionDeRedesSociales">
                <h2 className="title">Gestión De Redes Sociales</h2>
                <h4>EL ÉXITO ESTÁ EN INTERACTUAR MIENTRAS LOS OTROS SÓLO POSTEAN.</h4>
                <p className="gestionDeRedesSociales__description description">La presencia de una marca  no lo es todo, la interacción que tengas con tu comunidad te va a garantizar alcanzar tu objetivo. Un adecuado manejo de redes es igual de importante que el contenido que generes.</p>
                <div className="communityManager--title servicios__title">
                    <img src={communityManager} alt='community manager'></img>
                    <h3>COMMUNITY MANAGER</h3>
                </div>
                <div className="shadow-box-sm">
                    <div className="communityManager--div inner--shadow">
                        <p>Planificación y creación de contenido</p>
                        <p>Carga a redes sociales</p>
                        <p>Reporting</p>
                        <p>Monitoreo de comentarios e interacciones</p>
                    </div>
                </div>
                <div className="gestionDeComunidades--title servicios__title">
                    <h3>GESTIÓN DE COMUNIDADES</h3>
                    <img src={gestionDeComunidades} alt='gestion de comunidades'></img>
                </div>
                <div className="shadow-box-sm">
                    <div className="gestionDeComunidades--div inner--shadow grid-2-cols">
                        <div>
                            <p>Administración de redes sociales</p>
                            <p>Respuestas de bandejas de entradas</p>
                            <p>Administración de página web</p>
                            <p>Configuración de chat boots</p>
                        </div>
                        <div>
                            <p>Administración de campañas publicitarias</p>
                            <p>Configuración de Whatsapp Business </p>
                            <p>Creación y optimización de redes</p>
                        </div>
                    </div>
                </div>
                <div className="publicidadDigital--title servicios__title">
                    <h3>PUBLICIDAD DIGITAL</h3>
                    <img src={publicidadDigital} alt='publicidad digital'></img>
                </div>
                <div className="shadow-box-sm">
                    <div className="publicidadDigital--div inner--shadow">
                        <p>Creacion, ejecucion y monitoreo de pauta publicitaria en plataformas Ads</p>
                    </div>
                </div>
                <div className="desarrolloWeb--title servicios__title">
                    <h3>DESARROLLO WEB</h3>
                    <img src={desarrolloWeb} alt='desarrollo web'></img>
                </div>
                <div className="shadow-box-sm">
                    <div className="desarrolloWeb--div inner--shadow">
                        <p>Sitios web.</p>
                        <p>Tiendas virtuales.</p>
                        <p>Landing pages.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicios;