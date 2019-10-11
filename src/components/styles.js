import Bg from '../img/bg.jpg';

const styles = {
  background: {
    background: `linear-gradient(
            rgba(0, 158, 108, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(${Bg}) no-repeat center center fixed`,
    backgroundSize: 'cover'
  },
  logo: {
    width: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30
  },
  gradient: {
    background: `linear-gradient(
            141deg, #04DB92 0%, #00D9D5 100%)`
  },
  levelBar: {
    borderRadius: '10%',
    width: '100%',
    height: '0.2rem',
    marginTop: 20
  },
  sectionTitle: {
    color: '#BBBBBB',
    fontWeight: '400',
    letterSpacing: '0.1rem'
  },
  separator: {
    width: '100%',
    height: '0.05rem',
    backgroundColor: '#BBBBBB',
    marginBottom: 10
  }
};

export const color = level => {
  switch (level) {
    case 'Líder':
      return '#00d1b2';

    case 'Coordenação':
      return '#AE35F3';

    case 'Estágio':
      return '#F37335';

    default:
      break;
  }
};

export default styles;
