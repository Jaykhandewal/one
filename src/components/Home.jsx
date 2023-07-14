import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai" 
const Home = () => {
  return (
    <>
    <div className="home" id="home">
<main>
    <h1>Hritik Lohiya</h1>
    <p>Solution to all your problem.</p>
</main>

    </div>


    <div className="home2">
        <img src={vg} alt="Graphics"/>
        <div>
            <p>
            Try for FREE, our online video maker.  
            Create an AMAZING technology city opening logo intro video with your logo for branding, using professional templates.
            </p>
        </div>
    </div>

    <div className="home3" id="about">
      
      <div>  <h1>Who I am?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accu
            santium ab, recusandae exercitationem itaque adipisci odit doloribus 
            quis necessitatibus inventore expedita nobis voluptates soluta numquam, id natus su
            scipit dolore quasi minus enim rem libero illum molestiae saepe? Iure consequatur atque,
             nisi vitae optio mollitia ut quasi dolorem fugit quaerat non autem distinctio facilis qu
             ae labore quam, esse incidunt sint repellat sequi voluptatem, ducimus delectus. Eveniet ad mai
             .ores similique nihil cumque quisquam officiis fuga excepturi doloremque quod vero, quaerat accusamus dign
             issimos dolores facilis qui ea, commodi dolor minus inventore aliquam eaque sequi? Atque minima perspiciatis u
             t nemo debitis modi tempore distinctio suscipit ipsam odio laboriosam, quasi non doloremque? Est, autem rerum. Mi
             nima totam vero nam enim, molestias optio, perferendis dignissimos voluptates, fuga nobis rem incidunt adipisci ex. Mole
             stias, commodi accusantium! Ipsum minus perspiciatis nostrum saepe praesentium cum molestias illum quisq
            
            uam. Soluta aperiam veritatis beatae repellat tempore odio doloremque dolore magnam, distinctio error.</p>
    </div>
    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
    <AiFillGoogleCircle/>
    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
    <AiFillAmazonCircle/>
    <p>Amazon</p>
                </div>

                <div style={{animationDelay:"0.7s"}}>
    <AiFillYoutube/>
    <p>Youtube</p>
                </div>

                <div style={{animationDelay:"1s"}}>
    <AiFillInstagram/>
    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home