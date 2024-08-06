
import style from './test.module.scss'
import button from './assets/Icon buttons.png'
import flag from './assets/flag.png'
import heart from './assets/heart.png'
import notify from './assets/Notifications.png'
import chat from './assets/chat.png'
import settings from './assets/settings.png'
import avatar from './assets/avatar.png'
import test from './assets/more.png'

export default function App() {


  return (
    <>
      <div className={style.wrapper}>
      <div className={style.container}>
        
        <header>
          <div className={style.header_left}>
          <p className={style.header_logo}>Panda</p>
          <img src={button}/>
          <input type="text" placeholder='Search'/>
          </div>

          <div className={style.header_right}>
            <div className={style.header_opt}>
              <img src={flag}/>
              <img src={heart}/>
              <img src={notify}/>
              <img src={chat}/>
            </div>
            <img src={settings}/>
            <img src={avatar} className={style.header_avatar}/>
          </div>
        </header>
        
        <nav>
          <div className={style.nav_container}>
          <div>
            <h1>Main</h1>
            <a>Calendar</a>
            <a>Dashboard</a>
            <a>Email <img src={test} className={style.more_unact}/></a>
          </div>
          <div>
            <h1>Components</h1>
            <a>Ui Elements <img src={test} className={style.more_unact}/></a>
            <a>Forms <img src={test} className={style.more_unact}/></a>
            <a>Charts <img src={test} className={style.more_unact}/></a>
            <a>Tables <img src={test} className={style.more_unact}/></a>
            <a>Icons</a>
            <ul>
              <li>Finance</li>
              <li>Sass</li>
              <li>Finance</li>
              <li>Finance</li>
              <li>Sass</li>
            </ul>
            <a>Maps <img src={test} className={style.more_unact}/></a>
          </div>
          <div>
            <h1>Extras</h1>
            <a>Layouts <img src={test} className={style.more_unact}/></a>
            <a>Authentication <img src={test} className={style.more_unact}/></a>
            <a>Experiences <img src={test} className={style.more_unact}/></a>
            <a>File Manager <img src={test} className={style.more_unact}/></a>
            <a>E-Commerce <img src={test} className={style.more_unact}/></a>
          </div>
          </div>
        </nav>
      </div>
      </div>
    </>
  )
}