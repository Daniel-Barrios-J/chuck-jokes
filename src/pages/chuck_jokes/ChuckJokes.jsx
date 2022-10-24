import React, {useState} from 'react';
// MUI 5
import Button from '@mui/material/Button';
import { Badge } from '@mui/material';
import Typography from '@mui/material/Typography';
//services
import { getJoke } from '../../services/chuckJokes';
//styles
import '../../styles/css/chuck.css'

const ChuckJokes = () => {

  const descripcionInicial = 'Pide un chiste de Chuck Norris y luego calificalo con los botones debajo, NOTA: los chistes están en inglés. 👌';
  const pedirChiste = `Pide un chiste...😁`;

  const [voteJokeState, setVoteJoke] = useState(false);
  const [duuh, setDuuh] = useState(0);
  const [haha, setHaha] = useState(0);
  const [jokes, setJokes] = useState(descripcionInicial);


  const joke = ()=>{
    getJoke().then(r =>{
      setJokes(r.data.value)
      setVoteJoke(false)
    })
  }
  
  const vote = (vote) => {
    if (voteJokeState || jokes === descripcionInicial || jokes === pedirChiste) {
      setJokes(pedirChiste)
    } else if(vote === 'like') {
      setHaha(haha+1);
      setVoteJoke(true);
    } else {
      setDuuh(duuh+1);
      setVoteJoke(true);
    }
  }

   return (
    <div className='card'>
      {/* <h1 className='title-app'>Chuck jokes!</h1> */}
      <div className='img-container'>
          <img className='img-chuck' alt='chuck-logo' src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'/>
        </div>
      <div className='card-content'>
        {/* <div className='img-container'>
          <img className='img-chuck' alt='chuck-logo' src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'/>
        </div> */}
        <div className='joke-container'>
          <Typography variant="body1" style={{minHeight: '50px', fontFamily: 'Josefin Sans'}}>
            {jokes}
          </Typography>
        </div>
      </div>
      <div className='buttons-container'>
        <Button size='large' color='success' onClick={joke} variant="contained">{jokes===descripcionInicial ? 'Cuentame un chiste' : 'Otro más...'}</Button>
        <div className='votes-container'>
          <Badge anchorOrigin={{vertical: 'top',horizontal:'left'}} badgeContent={haha} color="primary">
            <Button size='large'
             onClick={()=>vote('like')} color='secondary' variant="contained">¡JAJA!</Button>
          </Badge>
          <Badge badgeContent={duuh} color="warning">
            <Button size='large' onClick={vote} color='warning' variant="outlined">Duuh!</Button>
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default ChuckJokes;





