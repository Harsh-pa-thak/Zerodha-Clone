function Uni({ img }) {
    return (
        <div>
            <img src={img?.startsWith('/') ? img : `/${img}`} style={{height:"50px"}} alt="" />
        </div>

    );
}
export default Uni;