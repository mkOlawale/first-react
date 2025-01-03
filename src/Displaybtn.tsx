interface Props{
    children: String;
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'danger';
}
function Displaybtn( {children, onClick, color} : Props){
    return (
        <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    )
}

export default Displaybtn