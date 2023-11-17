import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <div id="footerId" className="divFooter">
                <div className="bakeryPhoto">
                </div>
                <div className="address">
                    <h3>Oli-Bakery</h3>
                    <h4>39 Harbour View Terrace, Lyttelton, Christchurch</h4>
                    {/* <a className="Location" href="https://www.google.com/maps/place/39+Harbour+View+Terrace,+Cass+Bay,+Lyttelton+8082/@-43.6052909,172.6884776,17z/data=!3m1!4b1!4m6!3m5!1s0x6d3226f7f8dd2c43:0xf064833d09652883!8m2!3d-43.6052948!4d172.6910579!16s%2Fg%2F11frp4fmg_?entry=ttu" target="_blank"><img className="img-Location" src="/assets/imges/ubica.png" alt="" /></a> */}
                    <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.0598807317597!2d172.6910579!3d-43.605294799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3226f7f8dd2c43%3A0xf064833d09652883!2s39%20Harbour%20View%20Terrace%2C%20Cass%20Bay%2C%20Lyttelton%208082!5e0!3m2!1ses!2snz!4v1692957409505!5m2!1ses!2snz" width="250" height="200" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                </div>

                <div className="socialMedia">

                    <div className="contact">
                        <a href=""><img className="social" src="/assets/imges/instagram.png" alt="" /></a>
                        <h2 className="h2-footer">@Oli-Bakery</h2>
                    </div>

                    <div className="contact">
                        <a href=""><img className="social" src="/assets/imges/face.png" alt="" /></a>
                        <h2 className="h2-footer" >Oli Bakery</h2>
                    </div>

                    <div className="contact">
                        <img className="social2" src="/assets/imges/fono.png" alt="" />
                        <h2 className="h2-footer">+64273388229</h2>
                    </div>

                </div>
            </div>

        </>
    )
}