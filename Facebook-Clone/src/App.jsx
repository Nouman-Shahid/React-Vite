import './App.css'
import Page from './Components/Page/page'

function App() {

  let user = {
    userFirstName: 'Numan',
    userFullName: 'Numan Shahid',
    userImg: 'public/user.png',
    userFullImage: 'public/user.jpeg',
  }

  return (
    <>

      <Page firstname={user.userFirstName} fullname={user.userFullName}
        img={user.userImg} fullimg={user.userFullImage} />
    </>
  )
}

export default App
