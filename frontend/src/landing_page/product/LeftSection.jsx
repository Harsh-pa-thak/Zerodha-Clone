function LeftSection({ img, text }) {
    return(
        <div className='container'>
            <div className="row py-5 my-4 align-items-center g-4">
                <div className="col-12 col-lg-6 image">
                    <img src={img?.startsWith('/') ? img : `/${img}`} alt="product" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6 text">{text}</div>
            </div>
        </div>
    )
}
export default LeftSection;