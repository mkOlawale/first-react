interface Props{
    name: String;
    onclose: () => void
}
function Alert( {name, onclose} : Props){
    return (
        <div className="alert alert-primary alert-dismissible">{name}
        <button type="button" className="btn-close" onClick={onclose}></button>
        </div>
    )
}

export default Alert