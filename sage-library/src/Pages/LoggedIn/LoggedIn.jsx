import './LoggedIn.css'
import Genre1 from './Sectioins/Genre1'
import Genre2 from './Sectioins/Genre2'
import Genre3 from './Sectioins/Genre3'
import LoggedInIntro from './Sectioins/LoggedInIntro'
import QuickPicks from './Sectioins/QuickPicks'
import ReadAgain from './Sectioins/ReadAgain'
import YouMightLike from './Sectioins/YouMightLike'

const LoggedIn = () => {
  return (
    <main className='sage__loggedin-main'>
      <LoggedInIntro />
      <YouMightLike />
      <QuickPicks />
      <ReadAgain />
      <Genre1 />
      <Genre2 />
      <Genre3 />
    </main>
  )
}

export default LoggedIn