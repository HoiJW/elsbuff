import Images from "./Images";
const Classes = () =>{
    return(
        <>
        <header>
            <div className="wrapper">
                <h1>Classes</h1>
            </div>
        </header>
        <body>
            <div className="wrapper">
                <div className="characters">
                    {/* elsword */}
                    <div class="class-container elboy">
                    <div class="long-rectangle">
                        <h2>Elsword</h2>
                    </div>
                    <div class="square">
                        <p>KE</p>
                        <div className="class-pics">
                            {Images.map(image => {
                                if (image.alt === "ke") {
                                return <img key={image.id} src={image.src} alt={image.alt} />;
                                } else {
                                return null;
                                }
                            })}
                        </div>
                    </div>
                    <div class="square">
                        <p>RM</p>
                        <div className="class-pics">
                            {Images.map(image => {
                                if (image.alt === "rm") {
                                return <img key={image.id} src={image.src} alt={image.alt} />;
                                } else {
                                return null;
                                }
                            })}
                        </div>
                        
                    </div>
                    <div class="square">
                        <p>IM</p>
                        <div className="class-pics">
                            {Images.map(image => {
                                if (image.alt === "im") {
                                return <img key={image.id} src={image.src} alt={image.alt} />;
                                } else {
                                return null;
                                }
                            })}
                        </div>
                    </div>
                    <div class="square">
                        <p>GS</p>
                        <div className="class-pics">
                            {Images.map(image => {
                                if (image.alt === "gs") {
                                return <img key={image.id} src={image.src} alt={image.alt} />;
                                } else {
                                return null;
                                }
                            })}
                        </div>
                    </div>
                    </div>
                    {/* aisha */}
                    <div class="class-container aisha">
                    <div class="long-rectangle">
                        <h2>Aisha</h2>
                    </div>
                    <div class="square">
                        <p>Aes</p>
                        <div className="class-pics">
                            {Images.map(image => {
                                if (image.alt === "aes") {
                                return <img key={image.id} src={image.src} alt={image.alt} />;
                                } else {
                                return null;
                                }
                            })}
                        </div>
                    </div>
                    <div class="square">
                        <p>Oz</p>
                        <div className="class-pics">
                            {Images.map(image => {
                                if (image.alt === "oz") {
                                return <img key={image.id} src={image.src} alt={image.alt} />;
                                } else {
                                return null;
                                }
                            })}
                        </div>
                        
                    </div>
                    <div class="square">
                        <p>mtm</p>
                        <div className="class-pics">
                            {Images.map(image => {
                                if (image.alt === "mtm") {
                                return <img key={image.id} src={image.src} alt={image.alt} />;
                                } else {
                                return null;
                                }
                            })}
                        </div>
                    </div>
                    <div class="square">
                        <p>LA</p>
                        <div className="class-pics">
                            {Images.map(image => {
                                if (image.alt === "la") {
                                return <img key={image.id} src={image.src} alt={image.alt} />;
                                } else {
                                return null;
                                }
                            })}
                        </div>
                    </div>
                    </div>
                </div>
            </div>    
        </body>
        </>
    )
}
export default Classes;