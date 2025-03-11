import Card from "./Card"
import Menulateral from "./Menulateral"
import Usuarios from "./database"

const PanelControl = () => {
    
    return (
        <section className="panel-control">
            <Menulateral />
            <div className="panel-control-contenido">
                {
                    Usuarios.map((usuario) => {
                        return <Card usuario = {usuario}/>
                    })
                }
            </div>
        </section>
    )
}

export default PanelControl