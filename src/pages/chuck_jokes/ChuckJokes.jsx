import React, {useState} from 'react';
// MUI 5
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Badge } from '@mui/material';
import Typography from '@mui/material/Typography';
//services
import { getJoke } from '../../services/chuckJokes';

const ChuckJokes = () => {

  const [voteJokeState, setVoteJoke] = useState(false);
  const [duuh, setDuuh] = useState(0);
  const [haha, setHaha] = useState(0);
  const [jokes, setJokes] = useState('');
  
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
    <div>
      <Card sx={{ minWidth: 275, maxWidth: 300 }} style={{}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Chuck says
          </Typography>
          <img style={{width: '220px'}} alt='chuck-logo' src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'/>
          <Typography variant="body2" style={{minHeight: '50px', paddingTop: '16px'}}>
            {jokes}
          </Typography>
        </CardContent>
      </Card>
      <Button onClick={joke} variant="contained" style={{marginTop: "10px"}}>{jokes ? 'Tell me another one' : 'Tell me a joke, Chuck'}</Button>
      <div className='buttons-container' style={{marginTop: '10px'}}>
      <Badge badgeContent={haha} color="success">
        <Button onClick={()=>vote('like')} color='secondary' variant="contained">Haha!</Button>
      </Badge>
      <Badge badgeContent={duuh} color="warning">
        <Button onClick={vote} variant="outlined">Duuh!</Button>
      </Badge>
        
      </div>
    </div>
  );
}

export default ChuckJokes;





