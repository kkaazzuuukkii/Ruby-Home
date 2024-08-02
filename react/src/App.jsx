import style from './test.module.scss'
import logo from './assets/logo.png'
import main1 from './assets/main1.png'

export default function App() {

  return (
    <>
      <div className={style.wrapper}>
      <div className={style.container}>

        <header>
          <img src={logo} alt="Logo" className={style.nav_img}/>

          <div className={style.nav_a}>
            <a href="#" className={style.nav_a_active}>Home</a>
            <a href="#">Properties</a>
            <a href="#">About us</a>
            <a href="#">Blog</a>
          </div>

          <button className={style.nav_button}>Contact us</button>
        </header>


        <main className={style.first_main}>
          <div>
            <h1>Find the perfect place to stay with your family</h1>
            <p>Buying a home is a life-changing experience, so shouldn’t your real estate agent be a life changer.</p>
          </div>          
        
          <img src={main1}/>

          <div>
            <div>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </div>
            <div>

              <div></div>
              <h1></h1>
              <div></div>
              <h1></h1>
              <div></div>
              
              <button></button>

            </div>
          </div>

        </main>

      </div>
      </div>
    </>
  )
}