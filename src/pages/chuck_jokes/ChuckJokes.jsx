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
    if (voteJokeState || !jokes) {
      alert('Ask for a joke...😘')
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
      <div className='card-content'>
        <div className='img-container'>
          <img className='img-chuck' alt='chuck-logo' src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'/>
        </div>
        <div className='joke-container'>
          <Typography variant="body2" style={{minHeight: '50px'}}>
            {jokes}
          </Typography>
        </div>
      </div>
      <div className='buttons-container'>
        <Button size='large' color='success' onClick={joke} variant="contained">{jokes===descripcionInicial ? 'Tell me a joke' : 'Another one'}</Button>
        <div className='votes-container'>
          <Badge anchorOrigin={{vertical: 'top',horizontal:'left'}} badgeContent={haha} color="primary">
            <Button onClick={()=>vote('like')} color='secondary' variant="contained">Haha!</Button>
          </Badge>
          <Badge badgeContent={duuh} color="warning">
            <Button onClick={vote} color='error' variant="outlined">Duuh!</Button>
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default ChuckJokes;





