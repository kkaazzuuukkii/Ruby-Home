import style from './test.module.scss'

export default function App() {

  return (
    <>
      <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.intro}>
          <header>
            <p>Trevland</p>
            <div>
              <a href="#">Home</a>
              <a href="#">Location</a>
              <a href="#">Blog</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <button>Booking now</button>
          </header>
          <main className={style.first_main}>

          </main>
        </div>

      </div>
      </div>
    </>
  )
}